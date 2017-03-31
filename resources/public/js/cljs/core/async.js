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
var args46436 = [];
var len__33026__auto___46442 = arguments.length;
var i__33027__auto___46443 = (0);
while(true){
if((i__33027__auto___46443 < len__33026__auto___46442)){
args46436.push((arguments[i__33027__auto___46443]));

var G__46444 = (i__33027__auto___46443 + (1));
i__33027__auto___46443 = G__46444;
continue;
} else {
}
break;
}

var G__46438 = args46436.length;
switch (G__46438) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46436.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46439 = (function (f,blockable,meta46440){
this.f = f;
this.blockable = blockable;
this.meta46440 = meta46440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46441,meta46440__$1){
var self__ = this;
var _46441__$1 = this;
return (new cljs.core.async.t_cljs$core$async46439(self__.f,self__.blockable,meta46440__$1));
});


cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46441){
var self__ = this;
var _46441__$1 = this;
return self__.meta46440;
});


cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async46439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46440","meta46440",-1720194752,null)], null);
});

cljs.core.async.t_cljs$core$async46439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46439";

cljs.core.async.t_cljs$core$async46439.cljs$lang$ctorPrWriter = (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async46439");
});

cljs.core.async.__GT_t_cljs$core$async46439 = (function cljs$core$async$__GT_t_cljs$core$async46439(f__$1,blockable__$1,meta46440){
return (new cljs.core.async.t_cljs$core$async46439(f__$1,blockable__$1,meta46440));
});

}

return (new cljs.core.async.t_cljs$core$async46439(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args46448 = [];
var len__33026__auto___46451 = arguments.length;
var i__33027__auto___46452 = (0);
while(true){
if((i__33027__auto___46452 < len__33026__auto___46451)){
args46448.push((arguments[i__33027__auto___46452]));

var G__46453 = (i__33027__auto___46452 + (1));
i__33027__auto___46452 = G__46453;
continue;
} else {
}
break;
}

var G__46450 = args46448.length;
switch (G__46450) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46448.length)].join('')));

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
var args46455 = [];
var len__33026__auto___46458 = arguments.length;
var i__33027__auto___46459 = (0);
while(true){
if((i__33027__auto___46459 < len__33026__auto___46458)){
args46455.push((arguments[i__33027__auto___46459]));

var G__46460 = (i__33027__auto___46459 + (1));
i__33027__auto___46459 = G__46460;
continue;
} else {
}
break;
}

var G__46457 = args46455.length;
switch (G__46457) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46455.length)].join('')));

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
var args46462 = [];
var len__33026__auto___46465 = arguments.length;
var i__33027__auto___46466 = (0);
while(true){
if((i__33027__auto___46466 < len__33026__auto___46465)){
args46462.push((arguments[i__33027__auto___46466]));

var G__46467 = (i__33027__auto___46466 + (1));
i__33027__auto___46466 = G__46467;
continue;
} else {
}
break;
}

var G__46464 = args46462.length;
switch (G__46464) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46462.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46469 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46469);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46469,ret){
return (function (){
return fn1.call(null,val_46469);
});})(val_46469,ret))
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
var args46470 = [];
var len__33026__auto___46473 = arguments.length;
var i__33027__auto___46474 = (0);
while(true){
if((i__33027__auto___46474 < len__33026__auto___46473)){
args46470.push((arguments[i__33027__auto___46474]));

var G__46475 = (i__33027__auto___46474 + (1));
i__33027__auto___46474 = G__46475;
continue;
} else {
}
break;
}

var G__46472 = args46470.length;
switch (G__46472) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46470.length)].join('')));

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
var n__32866__auto___46477 = n;
var x_46478 = (0);
while(true){
if((x_46478 < n__32866__auto___46477)){
(a[x_46478] = (0));

var G__46479 = (x_46478 + (1));
x_46478 = G__46479;
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

var G__46480 = (i + (1));
i = G__46480;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46484 = (function (alt_flag,flag,meta46485){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46485 = meta46485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46486,meta46485__$1){
var self__ = this;
var _46486__$1 = this;
return (new cljs.core.async.t_cljs$core$async46484(self__.alt_flag,self__.flag,meta46485__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46486){
var self__ = this;
var _46486__$1 = this;
return self__.meta46485;
});})(flag))
;


cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async46484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46484.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46485","meta46485",-883458062,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46484";

cljs.core.async.t_cljs$core$async46484.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async46484");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46484 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46484(alt_flag__$1,flag__$1,meta46485){
return (new cljs.core.async.t_cljs$core$async46484(alt_flag__$1,flag__$1,meta46485));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46484(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46490 = (function (alt_handler,flag,cb,meta46491){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46491 = meta46491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46492,meta46491__$1){
var self__ = this;
var _46492__$1 = this;
return (new cljs.core.async.t_cljs$core$async46490(self__.alt_handler,self__.flag,self__.cb,meta46491__$1));
});


cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46492){
var self__ = this;
var _46492__$1 = this;
return self__.meta46491;
});


cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46491","meta46491",807774355,null)], null);
});

cljs.core.async.t_cljs$core$async46490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46490";

cljs.core.async.t_cljs$core$async46490.cljs$lang$ctorPrWriter = (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async46490");
});

cljs.core.async.__GT_t_cljs$core$async46490 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46490(alt_handler__$1,flag__$1,cb__$1,meta46491){
return (new cljs.core.async.t_cljs$core$async46490(alt_handler__$1,flag__$1,cb__$1,meta46491));
});

}

return (new cljs.core.async.t_cljs$core$async46490(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46493_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46493_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46494_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46494_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__31951__auto__ = wport;
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46495 = (i + (1));
i = G__46495;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31951__auto__ = ret;
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__31939__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__31939__auto__;
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
var args__33033__auto__ = [];
var len__33026__auto___46501 = arguments.length;
var i__33027__auto___46502 = (0);
while(true){
if((i__33027__auto___46502 < len__33026__auto___46501)){
args__33033__auto__.push((arguments[i__33027__auto___46502]));

var G__46503 = (i__33027__auto___46502 + (1));
i__33027__auto___46502 = G__46503;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((1) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33034__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46498){
var map__46499 = p__46498;
var map__46499__$1 = ((((!((map__46499 == null)))?((((map__46499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46499):map__46499);
var opts = map__46499__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46496){
var G__46497 = cljs.core.first.call(null,seq46496);
var seq46496__$1 = cljs.core.next.call(null,seq46496);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46497,seq46496__$1);
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
var args46504 = [];
var len__33026__auto___46554 = arguments.length;
var i__33027__auto___46555 = (0);
while(true){
if((i__33027__auto___46555 < len__33026__auto___46554)){
args46504.push((arguments[i__33027__auto___46555]));

var G__46556 = (i__33027__auto___46555 + (1));
i__33027__auto___46555 = G__46556;
continue;
} else {
}
break;
}

var G__46506 = args46504.length;
switch (G__46506) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46504.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36744__auto___46558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___46558){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___46558){
return (function (state_46530){
var state_val_46531 = (state_46530[(1)]);
if((state_val_46531 === (7))){
var inst_46526 = (state_46530[(2)]);
var state_46530__$1 = state_46530;
var statearr_46532_46559 = state_46530__$1;
(statearr_46532_46559[(2)] = inst_46526);

(statearr_46532_46559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (1))){
var state_46530__$1 = state_46530;
var statearr_46533_46560 = state_46530__$1;
(statearr_46533_46560[(2)] = null);

(statearr_46533_46560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (4))){
var inst_46509 = (state_46530[(7)]);
var inst_46509__$1 = (state_46530[(2)]);
var inst_46510 = (inst_46509__$1 == null);
var state_46530__$1 = (function (){var statearr_46534 = state_46530;
(statearr_46534[(7)] = inst_46509__$1);

return statearr_46534;
})();
if(cljs.core.truth_(inst_46510)){
var statearr_46535_46561 = state_46530__$1;
(statearr_46535_46561[(1)] = (5));

} else {
var statearr_46536_46562 = state_46530__$1;
(statearr_46536_46562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (13))){
var state_46530__$1 = state_46530;
var statearr_46537_46563 = state_46530__$1;
(statearr_46537_46563[(2)] = null);

(statearr_46537_46563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (6))){
var inst_46509 = (state_46530[(7)]);
var state_46530__$1 = state_46530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46530__$1,(11),to,inst_46509);
} else {
if((state_val_46531 === (3))){
var inst_46528 = (state_46530[(2)]);
var state_46530__$1 = state_46530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46530__$1,inst_46528);
} else {
if((state_val_46531 === (12))){
var state_46530__$1 = state_46530;
var statearr_46538_46564 = state_46530__$1;
(statearr_46538_46564[(2)] = null);

(statearr_46538_46564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (2))){
var state_46530__$1 = state_46530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46530__$1,(4),from);
} else {
if((state_val_46531 === (11))){
var inst_46519 = (state_46530[(2)]);
var state_46530__$1 = state_46530;
if(cljs.core.truth_(inst_46519)){
var statearr_46539_46565 = state_46530__$1;
(statearr_46539_46565[(1)] = (12));

} else {
var statearr_46540_46566 = state_46530__$1;
(statearr_46540_46566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (9))){
var state_46530__$1 = state_46530;
var statearr_46541_46567 = state_46530__$1;
(statearr_46541_46567[(2)] = null);

(statearr_46541_46567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (5))){
var state_46530__$1 = state_46530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46542_46568 = state_46530__$1;
(statearr_46542_46568[(1)] = (8));

} else {
var statearr_46543_46569 = state_46530__$1;
(statearr_46543_46569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (14))){
var inst_46524 = (state_46530[(2)]);
var state_46530__$1 = state_46530;
var statearr_46544_46570 = state_46530__$1;
(statearr_46544_46570[(2)] = inst_46524);

(statearr_46544_46570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (10))){
var inst_46516 = (state_46530[(2)]);
var state_46530__$1 = state_46530;
var statearr_46545_46571 = state_46530__$1;
(statearr_46545_46571[(2)] = inst_46516);

(statearr_46545_46571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46531 === (8))){
var inst_46513 = cljs.core.async.close_BANG_.call(null,to);
var state_46530__$1 = state_46530;
var statearr_46546_46572 = state_46530__$1;
(statearr_46546_46572[(2)] = inst_46513);

(statearr_46546_46572[(1)] = (10));


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
});})(c__36744__auto___46558))
;
return ((function (switch__36723__auto__,c__36744__auto___46558){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_46550 = [null,null,null,null,null,null,null,null];
(statearr_46550[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_46550[(1)] = (1));

return statearr_46550;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_46530){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_46530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e46551){if((e46551 instanceof Object)){
var ex__36727__auto__ = e46551;
var statearr_46552_46573 = state_46530;
(statearr_46552_46573[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46574 = state_46530;
state_46530 = G__46574;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_46530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_46530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___46558))
})();
var state__36746__auto__ = (function (){var statearr_46553 = f__36745__auto__.call(null);
(statearr_46553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___46558);

return statearr_46553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___46558))
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
return (function (p__46762){
var vec__46763 = p__46762;
var v = cljs.core.nth.call(null,vec__46763,(0),null);
var p = cljs.core.nth.call(null,vec__46763,(1),null);
var job = vec__46763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36744__auto___46949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___46949,res,vec__46763,v,p,job,jobs,results){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___46949,res,vec__46763,v,p,job,jobs,results){
return (function (state_46770){
var state_val_46771 = (state_46770[(1)]);
if((state_val_46771 === (1))){
var state_46770__$1 = state_46770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46770__$1,(2),res,v);
} else {
if((state_val_46771 === (2))){
var inst_46767 = (state_46770[(2)]);
var inst_46768 = cljs.core.async.close_BANG_.call(null,res);
var state_46770__$1 = (function (){var statearr_46772 = state_46770;
(statearr_46772[(7)] = inst_46767);

return statearr_46772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46770__$1,inst_46768);
} else {
return null;
}
}
});})(c__36744__auto___46949,res,vec__46763,v,p,job,jobs,results))
;
return ((function (switch__36723__auto__,c__36744__auto___46949,res,vec__46763,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0 = (function (){
var statearr_46776 = [null,null,null,null,null,null,null,null];
(statearr_46776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__);

(statearr_46776[(1)] = (1));

return statearr_46776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1 = (function (state_46770){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_46770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e46777){if((e46777 instanceof Object)){
var ex__36727__auto__ = e46777;
var statearr_46778_46950 = state_46770;
(statearr_46778_46950[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46951 = state_46770;
state_46770 = G__46951;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = function(state_46770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1.call(this,state_46770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___46949,res,vec__46763,v,p,job,jobs,results))
})();
var state__36746__auto__ = (function (){var statearr_46779 = f__36745__auto__.call(null);
(statearr_46779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___46949);

return statearr_46779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___46949,res,vec__46763,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46780){
var vec__46781 = p__46780;
var v = cljs.core.nth.call(null,vec__46781,(0),null);
var p = cljs.core.nth.call(null,vec__46781,(1),null);
var job = vec__46781;
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
var n__32866__auto___46952 = n;
var __46953 = (0);
while(true){
if((__46953 < n__32866__auto___46952)){
var G__46784_46954 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46784_46954) {
case "compute":
var c__36744__auto___46956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46953,c__36744__auto___46956,G__46784_46954,n__32866__auto___46952,jobs,results,process,async){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (__46953,c__36744__auto___46956,G__46784_46954,n__32866__auto___46952,jobs,results,process,async){
return (function (state_46797){
var state_val_46798 = (state_46797[(1)]);
if((state_val_46798 === (1))){
var state_46797__$1 = state_46797;
var statearr_46799_46957 = state_46797__$1;
(statearr_46799_46957[(2)] = null);

(statearr_46799_46957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (2))){
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46797__$1,(4),jobs);
} else {
if((state_val_46798 === (3))){
var inst_46795 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46797__$1,inst_46795);
} else {
if((state_val_46798 === (4))){
var inst_46787 = (state_46797[(2)]);
var inst_46788 = process.call(null,inst_46787);
var state_46797__$1 = state_46797;
if(cljs.core.truth_(inst_46788)){
var statearr_46800_46958 = state_46797__$1;
(statearr_46800_46958[(1)] = (5));

} else {
var statearr_46801_46959 = state_46797__$1;
(statearr_46801_46959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (5))){
var state_46797__$1 = state_46797;
var statearr_46802_46960 = state_46797__$1;
(statearr_46802_46960[(2)] = null);

(statearr_46802_46960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (6))){
var state_46797__$1 = state_46797;
var statearr_46803_46961 = state_46797__$1;
(statearr_46803_46961[(2)] = null);

(statearr_46803_46961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (7))){
var inst_46793 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
var statearr_46804_46962 = state_46797__$1;
(statearr_46804_46962[(2)] = inst_46793);

(statearr_46804_46962[(1)] = (3));


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
});})(__46953,c__36744__auto___46956,G__46784_46954,n__32866__auto___46952,jobs,results,process,async))
;
return ((function (__46953,switch__36723__auto__,c__36744__auto___46956,G__46784_46954,n__32866__auto___46952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0 = (function (){
var statearr_46808 = [null,null,null,null,null,null,null];
(statearr_46808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__);

(statearr_46808[(1)] = (1));

return statearr_46808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1 = (function (state_46797){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_46797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e46809){if((e46809 instanceof Object)){
var ex__36727__auto__ = e46809;
var statearr_46810_46963 = state_46797;
(statearr_46810_46963[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46964 = state_46797;
state_46797 = G__46964;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = function(state_46797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1.call(this,state_46797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__;
})()
;})(__46953,switch__36723__auto__,c__36744__auto___46956,G__46784_46954,n__32866__auto___46952,jobs,results,process,async))
})();
var state__36746__auto__ = (function (){var statearr_46811 = f__36745__auto__.call(null);
(statearr_46811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___46956);

return statearr_46811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(__46953,c__36744__auto___46956,G__46784_46954,n__32866__auto___46952,jobs,results,process,async))
);


break;
case "async":
var c__36744__auto___46965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46953,c__36744__auto___46965,G__46784_46954,n__32866__auto___46952,jobs,results,process,async){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (__46953,c__36744__auto___46965,G__46784_46954,n__32866__auto___46952,jobs,results,process,async){
return (function (state_46824){
var state_val_46825 = (state_46824[(1)]);
if((state_val_46825 === (1))){
var state_46824__$1 = state_46824;
var statearr_46826_46966 = state_46824__$1;
(statearr_46826_46966[(2)] = null);

(statearr_46826_46966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (2))){
var state_46824__$1 = state_46824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46824__$1,(4),jobs);
} else {
if((state_val_46825 === (3))){
var inst_46822 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46824__$1,inst_46822);
} else {
if((state_val_46825 === (4))){
var inst_46814 = (state_46824[(2)]);
var inst_46815 = async.call(null,inst_46814);
var state_46824__$1 = state_46824;
if(cljs.core.truth_(inst_46815)){
var statearr_46827_46967 = state_46824__$1;
(statearr_46827_46967[(1)] = (5));

} else {
var statearr_46828_46968 = state_46824__$1;
(statearr_46828_46968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (5))){
var state_46824__$1 = state_46824;
var statearr_46829_46969 = state_46824__$1;
(statearr_46829_46969[(2)] = null);

(statearr_46829_46969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (6))){
var state_46824__$1 = state_46824;
var statearr_46830_46970 = state_46824__$1;
(statearr_46830_46970[(2)] = null);

(statearr_46830_46970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (7))){
var inst_46820 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46831_46971 = state_46824__$1;
(statearr_46831_46971[(2)] = inst_46820);

(statearr_46831_46971[(1)] = (3));


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
});})(__46953,c__36744__auto___46965,G__46784_46954,n__32866__auto___46952,jobs,results,process,async))
;
return ((function (__46953,switch__36723__auto__,c__36744__auto___46965,G__46784_46954,n__32866__auto___46952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0 = (function (){
var statearr_46835 = [null,null,null,null,null,null,null];
(statearr_46835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__);

(statearr_46835[(1)] = (1));

return statearr_46835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1 = (function (state_46824){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_46824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e46836){if((e46836 instanceof Object)){
var ex__36727__auto__ = e46836;
var statearr_46837_46972 = state_46824;
(statearr_46837_46972[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46973 = state_46824;
state_46824 = G__46973;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = function(state_46824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1.call(this,state_46824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__;
})()
;})(__46953,switch__36723__auto__,c__36744__auto___46965,G__46784_46954,n__32866__auto___46952,jobs,results,process,async))
})();
var state__36746__auto__ = (function (){var statearr_46838 = f__36745__auto__.call(null);
(statearr_46838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___46965);

return statearr_46838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(__46953,c__36744__auto___46965,G__46784_46954,n__32866__auto___46952,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46974 = (__46953 + (1));
__46953 = G__46974;
continue;
} else {
}
break;
}

var c__36744__auto___46975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___46975,jobs,results,process,async){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___46975,jobs,results,process,async){
return (function (state_46860){
var state_val_46861 = (state_46860[(1)]);
if((state_val_46861 === (1))){
var state_46860__$1 = state_46860;
var statearr_46862_46976 = state_46860__$1;
(statearr_46862_46976[(2)] = null);

(statearr_46862_46976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (2))){
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46860__$1,(4),from);
} else {
if((state_val_46861 === (3))){
var inst_46858 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46860__$1,inst_46858);
} else {
if((state_val_46861 === (4))){
var inst_46841 = (state_46860[(7)]);
var inst_46841__$1 = (state_46860[(2)]);
var inst_46842 = (inst_46841__$1 == null);
var state_46860__$1 = (function (){var statearr_46863 = state_46860;
(statearr_46863[(7)] = inst_46841__$1);

return statearr_46863;
})();
if(cljs.core.truth_(inst_46842)){
var statearr_46864_46977 = state_46860__$1;
(statearr_46864_46977[(1)] = (5));

} else {
var statearr_46865_46978 = state_46860__$1;
(statearr_46865_46978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (5))){
var inst_46844 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46860__$1 = state_46860;
var statearr_46866_46979 = state_46860__$1;
(statearr_46866_46979[(2)] = inst_46844);

(statearr_46866_46979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (6))){
var inst_46841 = (state_46860[(7)]);
var inst_46846 = (state_46860[(8)]);
var inst_46846__$1 = cljs.core.async.chan.call(null,(1));
var inst_46847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46848 = [inst_46841,inst_46846__$1];
var inst_46849 = (new cljs.core.PersistentVector(null,2,(5),inst_46847,inst_46848,null));
var state_46860__$1 = (function (){var statearr_46867 = state_46860;
(statearr_46867[(8)] = inst_46846__$1);

return statearr_46867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46860__$1,(8),jobs,inst_46849);
} else {
if((state_val_46861 === (7))){
var inst_46856 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
var statearr_46868_46980 = state_46860__$1;
(statearr_46868_46980[(2)] = inst_46856);

(statearr_46868_46980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (8))){
var inst_46846 = (state_46860[(8)]);
var inst_46851 = (state_46860[(2)]);
var state_46860__$1 = (function (){var statearr_46869 = state_46860;
(statearr_46869[(9)] = inst_46851);

return statearr_46869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46860__$1,(9),results,inst_46846);
} else {
if((state_val_46861 === (9))){
var inst_46853 = (state_46860[(2)]);
var state_46860__$1 = (function (){var statearr_46870 = state_46860;
(statearr_46870[(10)] = inst_46853);

return statearr_46870;
})();
var statearr_46871_46981 = state_46860__$1;
(statearr_46871_46981[(2)] = null);

(statearr_46871_46981[(1)] = (2));


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
});})(c__36744__auto___46975,jobs,results,process,async))
;
return ((function (switch__36723__auto__,c__36744__auto___46975,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0 = (function (){
var statearr_46875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__);

(statearr_46875[(1)] = (1));

return statearr_46875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1 = (function (state_46860){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_46860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e46876){if((e46876 instanceof Object)){
var ex__36727__auto__ = e46876;
var statearr_46877_46982 = state_46860;
(statearr_46877_46982[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46983 = state_46860;
state_46860 = G__46983;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = function(state_46860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1.call(this,state_46860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___46975,jobs,results,process,async))
})();
var state__36746__auto__ = (function (){var statearr_46878 = f__36745__auto__.call(null);
(statearr_46878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___46975);

return statearr_46878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___46975,jobs,results,process,async))
);


var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,jobs,results,process,async){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,jobs,results,process,async){
return (function (state_46916){
var state_val_46917 = (state_46916[(1)]);
if((state_val_46917 === (7))){
var inst_46912 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46918_46984 = state_46916__$1;
(statearr_46918_46984[(2)] = inst_46912);

(statearr_46918_46984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (20))){
var state_46916__$1 = state_46916;
var statearr_46919_46985 = state_46916__$1;
(statearr_46919_46985[(2)] = null);

(statearr_46919_46985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (1))){
var state_46916__$1 = state_46916;
var statearr_46920_46986 = state_46916__$1;
(statearr_46920_46986[(2)] = null);

(statearr_46920_46986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (4))){
var inst_46881 = (state_46916[(7)]);
var inst_46881__$1 = (state_46916[(2)]);
var inst_46882 = (inst_46881__$1 == null);
var state_46916__$1 = (function (){var statearr_46921 = state_46916;
(statearr_46921[(7)] = inst_46881__$1);

return statearr_46921;
})();
if(cljs.core.truth_(inst_46882)){
var statearr_46922_46987 = state_46916__$1;
(statearr_46922_46987[(1)] = (5));

} else {
var statearr_46923_46988 = state_46916__$1;
(statearr_46923_46988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (15))){
var inst_46894 = (state_46916[(8)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46916__$1,(18),to,inst_46894);
} else {
if((state_val_46917 === (21))){
var inst_46907 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46924_46989 = state_46916__$1;
(statearr_46924_46989[(2)] = inst_46907);

(statearr_46924_46989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (13))){
var inst_46909 = (state_46916[(2)]);
var state_46916__$1 = (function (){var statearr_46925 = state_46916;
(statearr_46925[(9)] = inst_46909);

return statearr_46925;
})();
var statearr_46926_46990 = state_46916__$1;
(statearr_46926_46990[(2)] = null);

(statearr_46926_46990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (6))){
var inst_46881 = (state_46916[(7)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46916__$1,(11),inst_46881);
} else {
if((state_val_46917 === (17))){
var inst_46902 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
if(cljs.core.truth_(inst_46902)){
var statearr_46927_46991 = state_46916__$1;
(statearr_46927_46991[(1)] = (19));

} else {
var statearr_46928_46992 = state_46916__$1;
(statearr_46928_46992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (3))){
var inst_46914 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46916__$1,inst_46914);
} else {
if((state_val_46917 === (12))){
var inst_46891 = (state_46916[(10)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46916__$1,(14),inst_46891);
} else {
if((state_val_46917 === (2))){
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46916__$1,(4),results);
} else {
if((state_val_46917 === (19))){
var state_46916__$1 = state_46916;
var statearr_46929_46993 = state_46916__$1;
(statearr_46929_46993[(2)] = null);

(statearr_46929_46993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (11))){
var inst_46891 = (state_46916[(2)]);
var state_46916__$1 = (function (){var statearr_46930 = state_46916;
(statearr_46930[(10)] = inst_46891);

return statearr_46930;
})();
var statearr_46931_46994 = state_46916__$1;
(statearr_46931_46994[(2)] = null);

(statearr_46931_46994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (9))){
var state_46916__$1 = state_46916;
var statearr_46932_46995 = state_46916__$1;
(statearr_46932_46995[(2)] = null);

(statearr_46932_46995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (5))){
var state_46916__$1 = state_46916;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46933_46996 = state_46916__$1;
(statearr_46933_46996[(1)] = (8));

} else {
var statearr_46934_46997 = state_46916__$1;
(statearr_46934_46997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (14))){
var inst_46896 = (state_46916[(11)]);
var inst_46894 = (state_46916[(8)]);
var inst_46894__$1 = (state_46916[(2)]);
var inst_46895 = (inst_46894__$1 == null);
var inst_46896__$1 = cljs.core.not.call(null,inst_46895);
var state_46916__$1 = (function (){var statearr_46935 = state_46916;
(statearr_46935[(11)] = inst_46896__$1);

(statearr_46935[(8)] = inst_46894__$1);

return statearr_46935;
})();
if(inst_46896__$1){
var statearr_46936_46998 = state_46916__$1;
(statearr_46936_46998[(1)] = (15));

} else {
var statearr_46937_46999 = state_46916__$1;
(statearr_46937_46999[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (16))){
var inst_46896 = (state_46916[(11)]);
var state_46916__$1 = state_46916;
var statearr_46938_47000 = state_46916__$1;
(statearr_46938_47000[(2)] = inst_46896);

(statearr_46938_47000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (10))){
var inst_46888 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46939_47001 = state_46916__$1;
(statearr_46939_47001[(2)] = inst_46888);

(statearr_46939_47001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (18))){
var inst_46899 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46940_47002 = state_46916__$1;
(statearr_46940_47002[(2)] = inst_46899);

(statearr_46940_47002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (8))){
var inst_46885 = cljs.core.async.close_BANG_.call(null,to);
var state_46916__$1 = state_46916;
var statearr_46941_47003 = state_46916__$1;
(statearr_46941_47003[(2)] = inst_46885);

(statearr_46941_47003[(1)] = (10));


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
});})(c__36744__auto__,jobs,results,process,async))
;
return ((function (switch__36723__auto__,c__36744__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0 = (function (){
var statearr_46945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__);

(statearr_46945[(1)] = (1));

return statearr_46945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1 = (function (state_46916){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_46916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e46946){if((e46946 instanceof Object)){
var ex__36727__auto__ = e46946;
var statearr_46947_47004 = state_46916;
(statearr_46947_47004[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47005 = state_46916;
state_46916 = G__47005;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__ = function(state_46916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1.call(this,state_46916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,jobs,results,process,async))
})();
var state__36746__auto__ = (function (){var statearr_46948 = f__36745__auto__.call(null);
(statearr_46948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_46948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,jobs,results,process,async))
);

return c__36744__auto__;
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
var args47006 = [];
var len__33026__auto___47009 = arguments.length;
var i__33027__auto___47010 = (0);
while(true){
if((i__33027__auto___47010 < len__33026__auto___47009)){
args47006.push((arguments[i__33027__auto___47010]));

var G__47011 = (i__33027__auto___47010 + (1));
i__33027__auto___47010 = G__47011;
continue;
} else {
}
break;
}

var G__47008 = args47006.length;
switch (G__47008) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47006.length)].join('')));

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
var args47013 = [];
var len__33026__auto___47016 = arguments.length;
var i__33027__auto___47017 = (0);
while(true){
if((i__33027__auto___47017 < len__33026__auto___47016)){
args47013.push((arguments[i__33027__auto___47017]));

var G__47018 = (i__33027__auto___47017 + (1));
i__33027__auto___47017 = G__47018;
continue;
} else {
}
break;
}

var G__47015 = args47013.length;
switch (G__47015) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47013.length)].join('')));

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
var args47020 = [];
var len__33026__auto___47073 = arguments.length;
var i__33027__auto___47074 = (0);
while(true){
if((i__33027__auto___47074 < len__33026__auto___47073)){
args47020.push((arguments[i__33027__auto___47074]));

var G__47075 = (i__33027__auto___47074 + (1));
i__33027__auto___47074 = G__47075;
continue;
} else {
}
break;
}

var G__47022 = args47020.length;
switch (G__47022) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47020.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36744__auto___47077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___47077,tc,fc){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___47077,tc,fc){
return (function (state_47048){
var state_val_47049 = (state_47048[(1)]);
if((state_val_47049 === (7))){
var inst_47044 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
var statearr_47050_47078 = state_47048__$1;
(statearr_47050_47078[(2)] = inst_47044);

(statearr_47050_47078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (1))){
var state_47048__$1 = state_47048;
var statearr_47051_47079 = state_47048__$1;
(statearr_47051_47079[(2)] = null);

(statearr_47051_47079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (4))){
var inst_47025 = (state_47048[(7)]);
var inst_47025__$1 = (state_47048[(2)]);
var inst_47026 = (inst_47025__$1 == null);
var state_47048__$1 = (function (){var statearr_47052 = state_47048;
(statearr_47052[(7)] = inst_47025__$1);

return statearr_47052;
})();
if(cljs.core.truth_(inst_47026)){
var statearr_47053_47080 = state_47048__$1;
(statearr_47053_47080[(1)] = (5));

} else {
var statearr_47054_47081 = state_47048__$1;
(statearr_47054_47081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (13))){
var state_47048__$1 = state_47048;
var statearr_47055_47082 = state_47048__$1;
(statearr_47055_47082[(2)] = null);

(statearr_47055_47082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (6))){
var inst_47025 = (state_47048[(7)]);
var inst_47031 = p.call(null,inst_47025);
var state_47048__$1 = state_47048;
if(cljs.core.truth_(inst_47031)){
var statearr_47056_47083 = state_47048__$1;
(statearr_47056_47083[(1)] = (9));

} else {
var statearr_47057_47084 = state_47048__$1;
(statearr_47057_47084[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (3))){
var inst_47046 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47048__$1,inst_47046);
} else {
if((state_val_47049 === (12))){
var state_47048__$1 = state_47048;
var statearr_47058_47085 = state_47048__$1;
(statearr_47058_47085[(2)] = null);

(statearr_47058_47085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (2))){
var state_47048__$1 = state_47048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47048__$1,(4),ch);
} else {
if((state_val_47049 === (11))){
var inst_47025 = (state_47048[(7)]);
var inst_47035 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47048__$1,(8),inst_47035,inst_47025);
} else {
if((state_val_47049 === (9))){
var state_47048__$1 = state_47048;
var statearr_47059_47086 = state_47048__$1;
(statearr_47059_47086[(2)] = tc);

(statearr_47059_47086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (5))){
var inst_47028 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47029 = cljs.core.async.close_BANG_.call(null,fc);
var state_47048__$1 = (function (){var statearr_47060 = state_47048;
(statearr_47060[(8)] = inst_47028);

return statearr_47060;
})();
var statearr_47061_47087 = state_47048__$1;
(statearr_47061_47087[(2)] = inst_47029);

(statearr_47061_47087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (14))){
var inst_47042 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
var statearr_47062_47088 = state_47048__$1;
(statearr_47062_47088[(2)] = inst_47042);

(statearr_47062_47088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (10))){
var state_47048__$1 = state_47048;
var statearr_47063_47089 = state_47048__$1;
(statearr_47063_47089[(2)] = fc);

(statearr_47063_47089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (8))){
var inst_47037 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
if(cljs.core.truth_(inst_47037)){
var statearr_47064_47090 = state_47048__$1;
(statearr_47064_47090[(1)] = (12));

} else {
var statearr_47065_47091 = state_47048__$1;
(statearr_47065_47091[(1)] = (13));

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
});})(c__36744__auto___47077,tc,fc))
;
return ((function (switch__36723__auto__,c__36744__auto___47077,tc,fc){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_47069 = [null,null,null,null,null,null,null,null,null];
(statearr_47069[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_47069[(1)] = (1));

return statearr_47069;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_47048){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_47048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e47070){if((e47070 instanceof Object)){
var ex__36727__auto__ = e47070;
var statearr_47071_47092 = state_47048;
(statearr_47071_47092[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47093 = state_47048;
state_47048 = G__47093;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_47048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_47048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___47077,tc,fc))
})();
var state__36746__auto__ = (function (){var statearr_47072 = f__36745__auto__.call(null);
(statearr_47072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___47077);

return statearr_47072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___47077,tc,fc))
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
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__){
return (function (state_47157){
var state_val_47158 = (state_47157[(1)]);
if((state_val_47158 === (7))){
var inst_47153 = (state_47157[(2)]);
var state_47157__$1 = state_47157;
var statearr_47159_47180 = state_47157__$1;
(statearr_47159_47180[(2)] = inst_47153);

(statearr_47159_47180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (1))){
var inst_47137 = init;
var state_47157__$1 = (function (){var statearr_47160 = state_47157;
(statearr_47160[(7)] = inst_47137);

return statearr_47160;
})();
var statearr_47161_47181 = state_47157__$1;
(statearr_47161_47181[(2)] = null);

(statearr_47161_47181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (4))){
var inst_47140 = (state_47157[(8)]);
var inst_47140__$1 = (state_47157[(2)]);
var inst_47141 = (inst_47140__$1 == null);
var state_47157__$1 = (function (){var statearr_47162 = state_47157;
(statearr_47162[(8)] = inst_47140__$1);

return statearr_47162;
})();
if(cljs.core.truth_(inst_47141)){
var statearr_47163_47182 = state_47157__$1;
(statearr_47163_47182[(1)] = (5));

} else {
var statearr_47164_47183 = state_47157__$1;
(statearr_47164_47183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (6))){
var inst_47140 = (state_47157[(8)]);
var inst_47137 = (state_47157[(7)]);
var inst_47144 = (state_47157[(9)]);
var inst_47144__$1 = f.call(null,inst_47137,inst_47140);
var inst_47145 = cljs.core.reduced_QMARK_.call(null,inst_47144__$1);
var state_47157__$1 = (function (){var statearr_47165 = state_47157;
(statearr_47165[(9)] = inst_47144__$1);

return statearr_47165;
})();
if(inst_47145){
var statearr_47166_47184 = state_47157__$1;
(statearr_47166_47184[(1)] = (8));

} else {
var statearr_47167_47185 = state_47157__$1;
(statearr_47167_47185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (3))){
var inst_47155 = (state_47157[(2)]);
var state_47157__$1 = state_47157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47157__$1,inst_47155);
} else {
if((state_val_47158 === (2))){
var state_47157__$1 = state_47157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47157__$1,(4),ch);
} else {
if((state_val_47158 === (9))){
var inst_47144 = (state_47157[(9)]);
var inst_47137 = inst_47144;
var state_47157__$1 = (function (){var statearr_47168 = state_47157;
(statearr_47168[(7)] = inst_47137);

return statearr_47168;
})();
var statearr_47169_47186 = state_47157__$1;
(statearr_47169_47186[(2)] = null);

(statearr_47169_47186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (5))){
var inst_47137 = (state_47157[(7)]);
var state_47157__$1 = state_47157;
var statearr_47170_47187 = state_47157__$1;
(statearr_47170_47187[(2)] = inst_47137);

(statearr_47170_47187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (10))){
var inst_47151 = (state_47157[(2)]);
var state_47157__$1 = state_47157;
var statearr_47171_47188 = state_47157__$1;
(statearr_47171_47188[(2)] = inst_47151);

(statearr_47171_47188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (8))){
var inst_47144 = (state_47157[(9)]);
var inst_47147 = cljs.core.deref.call(null,inst_47144);
var state_47157__$1 = state_47157;
var statearr_47172_47189 = state_47157__$1;
(statearr_47172_47189[(2)] = inst_47147);

(statearr_47172_47189[(1)] = (10));


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
});})(c__36744__auto__))
;
return ((function (switch__36723__auto__,c__36744__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36724__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36724__auto____0 = (function (){
var statearr_47176 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47176[(0)] = cljs$core$async$reduce_$_state_machine__36724__auto__);

(statearr_47176[(1)] = (1));

return statearr_47176;
});
var cljs$core$async$reduce_$_state_machine__36724__auto____1 = (function (state_47157){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_47157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e47177){if((e47177 instanceof Object)){
var ex__36727__auto__ = e47177;
var statearr_47178_47190 = state_47157;
(statearr_47178_47190[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47191 = state_47157;
state_47157 = G__47191;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36724__auto__ = function(state_47157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36724__auto____1.call(this,state_47157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36724__auto____0;
cljs$core$async$reduce_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36724__auto____1;
return cljs$core$async$reduce_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__))
})();
var state__36746__auto__ = (function (){var statearr_47179 = f__36745__auto__.call(null);
(statearr_47179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_47179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__))
);

return c__36744__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,f__$1){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,f__$1){
return (function (state_47211){
var state_val_47212 = (state_47211[(1)]);
if((state_val_47212 === (1))){
var inst_47206 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(2),inst_47206);
} else {
if((state_val_47212 === (2))){
var inst_47208 = (state_47211[(2)]);
var inst_47209 = f__$1.call(null,inst_47208);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47211__$1,inst_47209);
} else {
return null;
}
}
});})(c__36744__auto__,f__$1))
;
return ((function (switch__36723__auto__,c__36744__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36724__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36724__auto____0 = (function (){
var statearr_47216 = [null,null,null,null,null,null,null];
(statearr_47216[(0)] = cljs$core$async$transduce_$_state_machine__36724__auto__);

(statearr_47216[(1)] = (1));

return statearr_47216;
});
var cljs$core$async$transduce_$_state_machine__36724__auto____1 = (function (state_47211){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_47211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e47217){if((e47217 instanceof Object)){
var ex__36727__auto__ = e47217;
var statearr_47218_47220 = state_47211;
(statearr_47218_47220[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47221 = state_47211;
state_47211 = G__47221;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36724__auto__ = function(state_47211){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36724__auto____1.call(this,state_47211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36724__auto____0;
cljs$core$async$transduce_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36724__auto____1;
return cljs$core$async$transduce_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,f__$1))
})();
var state__36746__auto__ = (function (){var statearr_47219 = f__36745__auto__.call(null);
(statearr_47219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_47219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,f__$1))
);

return c__36744__auto__;
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
var args47222 = [];
var len__33026__auto___47274 = arguments.length;
var i__33027__auto___47275 = (0);
while(true){
if((i__33027__auto___47275 < len__33026__auto___47274)){
args47222.push((arguments[i__33027__auto___47275]));

var G__47276 = (i__33027__auto___47275 + (1));
i__33027__auto___47275 = G__47276;
continue;
} else {
}
break;
}

var G__47224 = args47222.length;
switch (G__47224) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47222.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__){
return (function (state_47249){
var state_val_47250 = (state_47249[(1)]);
if((state_val_47250 === (7))){
var inst_47231 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
var statearr_47251_47278 = state_47249__$1;
(statearr_47251_47278[(2)] = inst_47231);

(statearr_47251_47278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (1))){
var inst_47225 = cljs.core.seq.call(null,coll);
var inst_47226 = inst_47225;
var state_47249__$1 = (function (){var statearr_47252 = state_47249;
(statearr_47252[(7)] = inst_47226);

return statearr_47252;
})();
var statearr_47253_47279 = state_47249__$1;
(statearr_47253_47279[(2)] = null);

(statearr_47253_47279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (4))){
var inst_47226 = (state_47249[(7)]);
var inst_47229 = cljs.core.first.call(null,inst_47226);
var state_47249__$1 = state_47249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47249__$1,(7),ch,inst_47229);
} else {
if((state_val_47250 === (13))){
var inst_47243 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
var statearr_47254_47280 = state_47249__$1;
(statearr_47254_47280[(2)] = inst_47243);

(statearr_47254_47280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (6))){
var inst_47234 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
if(cljs.core.truth_(inst_47234)){
var statearr_47255_47281 = state_47249__$1;
(statearr_47255_47281[(1)] = (8));

} else {
var statearr_47256_47282 = state_47249__$1;
(statearr_47256_47282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (3))){
var inst_47247 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47249__$1,inst_47247);
} else {
if((state_val_47250 === (12))){
var state_47249__$1 = state_47249;
var statearr_47257_47283 = state_47249__$1;
(statearr_47257_47283[(2)] = null);

(statearr_47257_47283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (2))){
var inst_47226 = (state_47249[(7)]);
var state_47249__$1 = state_47249;
if(cljs.core.truth_(inst_47226)){
var statearr_47258_47284 = state_47249__$1;
(statearr_47258_47284[(1)] = (4));

} else {
var statearr_47259_47285 = state_47249__$1;
(statearr_47259_47285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (11))){
var inst_47240 = cljs.core.async.close_BANG_.call(null,ch);
var state_47249__$1 = state_47249;
var statearr_47260_47286 = state_47249__$1;
(statearr_47260_47286[(2)] = inst_47240);

(statearr_47260_47286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (9))){
var state_47249__$1 = state_47249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47261_47287 = state_47249__$1;
(statearr_47261_47287[(1)] = (11));

} else {
var statearr_47262_47288 = state_47249__$1;
(statearr_47262_47288[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (5))){
var inst_47226 = (state_47249[(7)]);
var state_47249__$1 = state_47249;
var statearr_47263_47289 = state_47249__$1;
(statearr_47263_47289[(2)] = inst_47226);

(statearr_47263_47289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (10))){
var inst_47245 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
var statearr_47264_47290 = state_47249__$1;
(statearr_47264_47290[(2)] = inst_47245);

(statearr_47264_47290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (8))){
var inst_47226 = (state_47249[(7)]);
var inst_47236 = cljs.core.next.call(null,inst_47226);
var inst_47226__$1 = inst_47236;
var state_47249__$1 = (function (){var statearr_47265 = state_47249;
(statearr_47265[(7)] = inst_47226__$1);

return statearr_47265;
})();
var statearr_47266_47291 = state_47249__$1;
(statearr_47266_47291[(2)] = null);

(statearr_47266_47291[(1)] = (2));


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
});})(c__36744__auto__))
;
return ((function (switch__36723__auto__,c__36744__auto__){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_47270 = [null,null,null,null,null,null,null,null];
(statearr_47270[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_47270[(1)] = (1));

return statearr_47270;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_47249){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_47249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e47271){if((e47271 instanceof Object)){
var ex__36727__auto__ = e47271;
var statearr_47272_47292 = state_47249;
(statearr_47272_47292[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47293 = state_47249;
state_47249 = G__47293;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_47249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_47249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__))
})();
var state__36746__auto__ = (function (){var statearr_47273 = f__36745__auto__.call(null);
(statearr_47273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_47273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__))
);

return c__36744__auto__;
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
var x__32614__auto__ = (((_ == null))?null:_);
var m__32615__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,_);
} else {
var m__32615__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,_);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__32615__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m,ch);
} else {
var m__32615__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m,ch);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m);
} else {
var m__32615__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async47519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47519 = (function (mult,ch,cs,meta47520){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47520 = meta47520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47521,meta47520__$1){
var self__ = this;
var _47521__$1 = this;
return (new cljs.core.async.t_cljs$core$async47519(self__.mult,self__.ch,self__.cs,meta47520__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47521){
var self__ = this;
var _47521__$1 = this;
return self__.meta47520;
});})(cs))
;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47520","meta47520",-572164692,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47519";

cljs.core.async.t_cljs$core$async47519.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async47519");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47519 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47519(mult__$1,ch__$1,cs__$1,meta47520){
return (new cljs.core.async.t_cljs$core$async47519(mult__$1,ch__$1,cs__$1,meta47520));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47519(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36744__auto___47744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___47744,cs,m,dchan,dctr,done){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___47744,cs,m,dchan,dctr,done){
return (function (state_47656){
var state_val_47657 = (state_47656[(1)]);
if((state_val_47657 === (7))){
var inst_47652 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47658_47745 = state_47656__$1;
(statearr_47658_47745[(2)] = inst_47652);

(statearr_47658_47745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (20))){
var inst_47555 = (state_47656[(7)]);
var inst_47567 = cljs.core.first.call(null,inst_47555);
var inst_47568 = cljs.core.nth.call(null,inst_47567,(0),null);
var inst_47569 = cljs.core.nth.call(null,inst_47567,(1),null);
var state_47656__$1 = (function (){var statearr_47659 = state_47656;
(statearr_47659[(8)] = inst_47568);

return statearr_47659;
})();
if(cljs.core.truth_(inst_47569)){
var statearr_47660_47746 = state_47656__$1;
(statearr_47660_47746[(1)] = (22));

} else {
var statearr_47661_47747 = state_47656__$1;
(statearr_47661_47747[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (27))){
var inst_47604 = (state_47656[(9)]);
var inst_47597 = (state_47656[(10)]);
var inst_47524 = (state_47656[(11)]);
var inst_47599 = (state_47656[(12)]);
var inst_47604__$1 = cljs.core._nth.call(null,inst_47597,inst_47599);
var inst_47605 = cljs.core.async.put_BANG_.call(null,inst_47604__$1,inst_47524,done);
var state_47656__$1 = (function (){var statearr_47662 = state_47656;
(statearr_47662[(9)] = inst_47604__$1);

return statearr_47662;
})();
if(cljs.core.truth_(inst_47605)){
var statearr_47663_47748 = state_47656__$1;
(statearr_47663_47748[(1)] = (30));

} else {
var statearr_47664_47749 = state_47656__$1;
(statearr_47664_47749[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (1))){
var state_47656__$1 = state_47656;
var statearr_47665_47750 = state_47656__$1;
(statearr_47665_47750[(2)] = null);

(statearr_47665_47750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (24))){
var inst_47555 = (state_47656[(7)]);
var inst_47574 = (state_47656[(2)]);
var inst_47575 = cljs.core.next.call(null,inst_47555);
var inst_47533 = inst_47575;
var inst_47534 = null;
var inst_47535 = (0);
var inst_47536 = (0);
var state_47656__$1 = (function (){var statearr_47666 = state_47656;
(statearr_47666[(13)] = inst_47535);

(statearr_47666[(14)] = inst_47536);

(statearr_47666[(15)] = inst_47533);

(statearr_47666[(16)] = inst_47574);

(statearr_47666[(17)] = inst_47534);

return statearr_47666;
})();
var statearr_47667_47751 = state_47656__$1;
(statearr_47667_47751[(2)] = null);

(statearr_47667_47751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (39))){
var state_47656__$1 = state_47656;
var statearr_47671_47752 = state_47656__$1;
(statearr_47671_47752[(2)] = null);

(statearr_47671_47752[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (4))){
var inst_47524 = (state_47656[(11)]);
var inst_47524__$1 = (state_47656[(2)]);
var inst_47525 = (inst_47524__$1 == null);
var state_47656__$1 = (function (){var statearr_47672 = state_47656;
(statearr_47672[(11)] = inst_47524__$1);

return statearr_47672;
})();
if(cljs.core.truth_(inst_47525)){
var statearr_47673_47753 = state_47656__$1;
(statearr_47673_47753[(1)] = (5));

} else {
var statearr_47674_47754 = state_47656__$1;
(statearr_47674_47754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (15))){
var inst_47535 = (state_47656[(13)]);
var inst_47536 = (state_47656[(14)]);
var inst_47533 = (state_47656[(15)]);
var inst_47534 = (state_47656[(17)]);
var inst_47551 = (state_47656[(2)]);
var inst_47552 = (inst_47536 + (1));
var tmp47668 = inst_47535;
var tmp47669 = inst_47533;
var tmp47670 = inst_47534;
var inst_47533__$1 = tmp47669;
var inst_47534__$1 = tmp47670;
var inst_47535__$1 = tmp47668;
var inst_47536__$1 = inst_47552;
var state_47656__$1 = (function (){var statearr_47675 = state_47656;
(statearr_47675[(13)] = inst_47535__$1);

(statearr_47675[(14)] = inst_47536__$1);

(statearr_47675[(15)] = inst_47533__$1);

(statearr_47675[(18)] = inst_47551);

(statearr_47675[(17)] = inst_47534__$1);

return statearr_47675;
})();
var statearr_47676_47755 = state_47656__$1;
(statearr_47676_47755[(2)] = null);

(statearr_47676_47755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (21))){
var inst_47578 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47680_47756 = state_47656__$1;
(statearr_47680_47756[(2)] = inst_47578);

(statearr_47680_47756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (31))){
var inst_47604 = (state_47656[(9)]);
var inst_47608 = done.call(null,null);
var inst_47609 = cljs.core.async.untap_STAR_.call(null,m,inst_47604);
var state_47656__$1 = (function (){var statearr_47681 = state_47656;
(statearr_47681[(19)] = inst_47608);

return statearr_47681;
})();
var statearr_47682_47757 = state_47656__$1;
(statearr_47682_47757[(2)] = inst_47609);

(statearr_47682_47757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (32))){
var inst_47598 = (state_47656[(20)]);
var inst_47597 = (state_47656[(10)]);
var inst_47596 = (state_47656[(21)]);
var inst_47599 = (state_47656[(12)]);
var inst_47611 = (state_47656[(2)]);
var inst_47612 = (inst_47599 + (1));
var tmp47677 = inst_47598;
var tmp47678 = inst_47597;
var tmp47679 = inst_47596;
var inst_47596__$1 = tmp47679;
var inst_47597__$1 = tmp47678;
var inst_47598__$1 = tmp47677;
var inst_47599__$1 = inst_47612;
var state_47656__$1 = (function (){var statearr_47683 = state_47656;
(statearr_47683[(20)] = inst_47598__$1);

(statearr_47683[(10)] = inst_47597__$1);

(statearr_47683[(22)] = inst_47611);

(statearr_47683[(21)] = inst_47596__$1);

(statearr_47683[(12)] = inst_47599__$1);

return statearr_47683;
})();
var statearr_47684_47758 = state_47656__$1;
(statearr_47684_47758[(2)] = null);

(statearr_47684_47758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (40))){
var inst_47624 = (state_47656[(23)]);
var inst_47628 = done.call(null,null);
var inst_47629 = cljs.core.async.untap_STAR_.call(null,m,inst_47624);
var state_47656__$1 = (function (){var statearr_47685 = state_47656;
(statearr_47685[(24)] = inst_47628);

return statearr_47685;
})();
var statearr_47686_47759 = state_47656__$1;
(statearr_47686_47759[(2)] = inst_47629);

(statearr_47686_47759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (33))){
var inst_47615 = (state_47656[(25)]);
var inst_47617 = cljs.core.chunked_seq_QMARK_.call(null,inst_47615);
var state_47656__$1 = state_47656;
if(inst_47617){
var statearr_47687_47760 = state_47656__$1;
(statearr_47687_47760[(1)] = (36));

} else {
var statearr_47688_47761 = state_47656__$1;
(statearr_47688_47761[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (13))){
var inst_47545 = (state_47656[(26)]);
var inst_47548 = cljs.core.async.close_BANG_.call(null,inst_47545);
var state_47656__$1 = state_47656;
var statearr_47689_47762 = state_47656__$1;
(statearr_47689_47762[(2)] = inst_47548);

(statearr_47689_47762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (22))){
var inst_47568 = (state_47656[(8)]);
var inst_47571 = cljs.core.async.close_BANG_.call(null,inst_47568);
var state_47656__$1 = state_47656;
var statearr_47690_47763 = state_47656__$1;
(statearr_47690_47763[(2)] = inst_47571);

(statearr_47690_47763[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (36))){
var inst_47615 = (state_47656[(25)]);
var inst_47619 = cljs.core.chunk_first.call(null,inst_47615);
var inst_47620 = cljs.core.chunk_rest.call(null,inst_47615);
var inst_47621 = cljs.core.count.call(null,inst_47619);
var inst_47596 = inst_47620;
var inst_47597 = inst_47619;
var inst_47598 = inst_47621;
var inst_47599 = (0);
var state_47656__$1 = (function (){var statearr_47691 = state_47656;
(statearr_47691[(20)] = inst_47598);

(statearr_47691[(10)] = inst_47597);

(statearr_47691[(21)] = inst_47596);

(statearr_47691[(12)] = inst_47599);

return statearr_47691;
})();
var statearr_47692_47764 = state_47656__$1;
(statearr_47692_47764[(2)] = null);

(statearr_47692_47764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (41))){
var inst_47615 = (state_47656[(25)]);
var inst_47631 = (state_47656[(2)]);
var inst_47632 = cljs.core.next.call(null,inst_47615);
var inst_47596 = inst_47632;
var inst_47597 = null;
var inst_47598 = (0);
var inst_47599 = (0);
var state_47656__$1 = (function (){var statearr_47693 = state_47656;
(statearr_47693[(20)] = inst_47598);

(statearr_47693[(10)] = inst_47597);

(statearr_47693[(27)] = inst_47631);

(statearr_47693[(21)] = inst_47596);

(statearr_47693[(12)] = inst_47599);

return statearr_47693;
})();
var statearr_47694_47765 = state_47656__$1;
(statearr_47694_47765[(2)] = null);

(statearr_47694_47765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (43))){
var state_47656__$1 = state_47656;
var statearr_47695_47766 = state_47656__$1;
(statearr_47695_47766[(2)] = null);

(statearr_47695_47766[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (29))){
var inst_47640 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47696_47767 = state_47656__$1;
(statearr_47696_47767[(2)] = inst_47640);

(statearr_47696_47767[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (44))){
var inst_47649 = (state_47656[(2)]);
var state_47656__$1 = (function (){var statearr_47697 = state_47656;
(statearr_47697[(28)] = inst_47649);

return statearr_47697;
})();
var statearr_47698_47768 = state_47656__$1;
(statearr_47698_47768[(2)] = null);

(statearr_47698_47768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (6))){
var inst_47588 = (state_47656[(29)]);
var inst_47587 = cljs.core.deref.call(null,cs);
var inst_47588__$1 = cljs.core.keys.call(null,inst_47587);
var inst_47589 = cljs.core.count.call(null,inst_47588__$1);
var inst_47590 = cljs.core.reset_BANG_.call(null,dctr,inst_47589);
var inst_47595 = cljs.core.seq.call(null,inst_47588__$1);
var inst_47596 = inst_47595;
var inst_47597 = null;
var inst_47598 = (0);
var inst_47599 = (0);
var state_47656__$1 = (function (){var statearr_47699 = state_47656;
(statearr_47699[(20)] = inst_47598);

(statearr_47699[(10)] = inst_47597);

(statearr_47699[(29)] = inst_47588__$1);

(statearr_47699[(21)] = inst_47596);

(statearr_47699[(30)] = inst_47590);

(statearr_47699[(12)] = inst_47599);

return statearr_47699;
})();
var statearr_47700_47769 = state_47656__$1;
(statearr_47700_47769[(2)] = null);

(statearr_47700_47769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (28))){
var inst_47596 = (state_47656[(21)]);
var inst_47615 = (state_47656[(25)]);
var inst_47615__$1 = cljs.core.seq.call(null,inst_47596);
var state_47656__$1 = (function (){var statearr_47701 = state_47656;
(statearr_47701[(25)] = inst_47615__$1);

return statearr_47701;
})();
if(inst_47615__$1){
var statearr_47702_47770 = state_47656__$1;
(statearr_47702_47770[(1)] = (33));

} else {
var statearr_47703_47771 = state_47656__$1;
(statearr_47703_47771[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (25))){
var inst_47598 = (state_47656[(20)]);
var inst_47599 = (state_47656[(12)]);
var inst_47601 = (inst_47599 < inst_47598);
var inst_47602 = inst_47601;
var state_47656__$1 = state_47656;
if(cljs.core.truth_(inst_47602)){
var statearr_47704_47772 = state_47656__$1;
(statearr_47704_47772[(1)] = (27));

} else {
var statearr_47705_47773 = state_47656__$1;
(statearr_47705_47773[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (34))){
var state_47656__$1 = state_47656;
var statearr_47706_47774 = state_47656__$1;
(statearr_47706_47774[(2)] = null);

(statearr_47706_47774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (17))){
var state_47656__$1 = state_47656;
var statearr_47707_47775 = state_47656__$1;
(statearr_47707_47775[(2)] = null);

(statearr_47707_47775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (3))){
var inst_47654 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47656__$1,inst_47654);
} else {
if((state_val_47657 === (12))){
var inst_47583 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47708_47776 = state_47656__$1;
(statearr_47708_47776[(2)] = inst_47583);

(statearr_47708_47776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (2))){
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47656__$1,(4),ch);
} else {
if((state_val_47657 === (23))){
var state_47656__$1 = state_47656;
var statearr_47709_47777 = state_47656__$1;
(statearr_47709_47777[(2)] = null);

(statearr_47709_47777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (35))){
var inst_47638 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47710_47778 = state_47656__$1;
(statearr_47710_47778[(2)] = inst_47638);

(statearr_47710_47778[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (19))){
var inst_47555 = (state_47656[(7)]);
var inst_47559 = cljs.core.chunk_first.call(null,inst_47555);
var inst_47560 = cljs.core.chunk_rest.call(null,inst_47555);
var inst_47561 = cljs.core.count.call(null,inst_47559);
var inst_47533 = inst_47560;
var inst_47534 = inst_47559;
var inst_47535 = inst_47561;
var inst_47536 = (0);
var state_47656__$1 = (function (){var statearr_47711 = state_47656;
(statearr_47711[(13)] = inst_47535);

(statearr_47711[(14)] = inst_47536);

(statearr_47711[(15)] = inst_47533);

(statearr_47711[(17)] = inst_47534);

return statearr_47711;
})();
var statearr_47712_47779 = state_47656__$1;
(statearr_47712_47779[(2)] = null);

(statearr_47712_47779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (11))){
var inst_47555 = (state_47656[(7)]);
var inst_47533 = (state_47656[(15)]);
var inst_47555__$1 = cljs.core.seq.call(null,inst_47533);
var state_47656__$1 = (function (){var statearr_47713 = state_47656;
(statearr_47713[(7)] = inst_47555__$1);

return statearr_47713;
})();
if(inst_47555__$1){
var statearr_47714_47780 = state_47656__$1;
(statearr_47714_47780[(1)] = (16));

} else {
var statearr_47715_47781 = state_47656__$1;
(statearr_47715_47781[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (9))){
var inst_47585 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47716_47782 = state_47656__$1;
(statearr_47716_47782[(2)] = inst_47585);

(statearr_47716_47782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (5))){
var inst_47531 = cljs.core.deref.call(null,cs);
var inst_47532 = cljs.core.seq.call(null,inst_47531);
var inst_47533 = inst_47532;
var inst_47534 = null;
var inst_47535 = (0);
var inst_47536 = (0);
var state_47656__$1 = (function (){var statearr_47717 = state_47656;
(statearr_47717[(13)] = inst_47535);

(statearr_47717[(14)] = inst_47536);

(statearr_47717[(15)] = inst_47533);

(statearr_47717[(17)] = inst_47534);

return statearr_47717;
})();
var statearr_47718_47783 = state_47656__$1;
(statearr_47718_47783[(2)] = null);

(statearr_47718_47783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (14))){
var state_47656__$1 = state_47656;
var statearr_47719_47784 = state_47656__$1;
(statearr_47719_47784[(2)] = null);

(statearr_47719_47784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (45))){
var inst_47646 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47720_47785 = state_47656__$1;
(statearr_47720_47785[(2)] = inst_47646);

(statearr_47720_47785[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (26))){
var inst_47588 = (state_47656[(29)]);
var inst_47642 = (state_47656[(2)]);
var inst_47643 = cljs.core.seq.call(null,inst_47588);
var state_47656__$1 = (function (){var statearr_47721 = state_47656;
(statearr_47721[(31)] = inst_47642);

return statearr_47721;
})();
if(inst_47643){
var statearr_47722_47786 = state_47656__$1;
(statearr_47722_47786[(1)] = (42));

} else {
var statearr_47723_47787 = state_47656__$1;
(statearr_47723_47787[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (16))){
var inst_47555 = (state_47656[(7)]);
var inst_47557 = cljs.core.chunked_seq_QMARK_.call(null,inst_47555);
var state_47656__$1 = state_47656;
if(inst_47557){
var statearr_47724_47788 = state_47656__$1;
(statearr_47724_47788[(1)] = (19));

} else {
var statearr_47725_47789 = state_47656__$1;
(statearr_47725_47789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (38))){
var inst_47635 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47726_47790 = state_47656__$1;
(statearr_47726_47790[(2)] = inst_47635);

(statearr_47726_47790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (30))){
var state_47656__$1 = state_47656;
var statearr_47727_47791 = state_47656__$1;
(statearr_47727_47791[(2)] = null);

(statearr_47727_47791[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (10))){
var inst_47536 = (state_47656[(14)]);
var inst_47534 = (state_47656[(17)]);
var inst_47544 = cljs.core._nth.call(null,inst_47534,inst_47536);
var inst_47545 = cljs.core.nth.call(null,inst_47544,(0),null);
var inst_47546 = cljs.core.nth.call(null,inst_47544,(1),null);
var state_47656__$1 = (function (){var statearr_47728 = state_47656;
(statearr_47728[(26)] = inst_47545);

return statearr_47728;
})();
if(cljs.core.truth_(inst_47546)){
var statearr_47729_47792 = state_47656__$1;
(statearr_47729_47792[(1)] = (13));

} else {
var statearr_47730_47793 = state_47656__$1;
(statearr_47730_47793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (18))){
var inst_47581 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47731_47794 = state_47656__$1;
(statearr_47731_47794[(2)] = inst_47581);

(statearr_47731_47794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (42))){
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47656__$1,(45),dchan);
} else {
if((state_val_47657 === (37))){
var inst_47624 = (state_47656[(23)]);
var inst_47524 = (state_47656[(11)]);
var inst_47615 = (state_47656[(25)]);
var inst_47624__$1 = cljs.core.first.call(null,inst_47615);
var inst_47625 = cljs.core.async.put_BANG_.call(null,inst_47624__$1,inst_47524,done);
var state_47656__$1 = (function (){var statearr_47732 = state_47656;
(statearr_47732[(23)] = inst_47624__$1);

return statearr_47732;
})();
if(cljs.core.truth_(inst_47625)){
var statearr_47733_47795 = state_47656__$1;
(statearr_47733_47795[(1)] = (39));

} else {
var statearr_47734_47796 = state_47656__$1;
(statearr_47734_47796[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (8))){
var inst_47535 = (state_47656[(13)]);
var inst_47536 = (state_47656[(14)]);
var inst_47538 = (inst_47536 < inst_47535);
var inst_47539 = inst_47538;
var state_47656__$1 = state_47656;
if(cljs.core.truth_(inst_47539)){
var statearr_47735_47797 = state_47656__$1;
(statearr_47735_47797[(1)] = (10));

} else {
var statearr_47736_47798 = state_47656__$1;
(statearr_47736_47798[(1)] = (11));

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
});})(c__36744__auto___47744,cs,m,dchan,dctr,done))
;
return ((function (switch__36723__auto__,c__36744__auto___47744,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36724__auto__ = null;
var cljs$core$async$mult_$_state_machine__36724__auto____0 = (function (){
var statearr_47740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47740[(0)] = cljs$core$async$mult_$_state_machine__36724__auto__);

(statearr_47740[(1)] = (1));

return statearr_47740;
});
var cljs$core$async$mult_$_state_machine__36724__auto____1 = (function (state_47656){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_47656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e47741){if((e47741 instanceof Object)){
var ex__36727__auto__ = e47741;
var statearr_47742_47799 = state_47656;
(statearr_47742_47799[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47800 = state_47656;
state_47656 = G__47800;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36724__auto__ = function(state_47656){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36724__auto____1.call(this,state_47656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36724__auto____0;
cljs$core$async$mult_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36724__auto____1;
return cljs$core$async$mult_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___47744,cs,m,dchan,dctr,done))
})();
var state__36746__auto__ = (function (){var statearr_47743 = f__36745__auto__.call(null);
(statearr_47743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___47744);

return statearr_47743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___47744,cs,m,dchan,dctr,done))
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
var args47801 = [];
var len__33026__auto___47804 = arguments.length;
var i__33027__auto___47805 = (0);
while(true){
if((i__33027__auto___47805 < len__33026__auto___47804)){
args47801.push((arguments[i__33027__auto___47805]));

var G__47806 = (i__33027__auto___47805 + (1));
i__33027__auto___47805 = G__47806;
continue;
} else {
}
break;
}

var G__47803 = args47801.length;
switch (G__47803) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47801.length)].join('')));

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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m,ch);
} else {
var m__32615__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m,ch);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m,ch);
} else {
var m__32615__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m,ch);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m);
} else {
var m__32615__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m,state_map);
} else {
var m__32615__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m,state_map);
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
var x__32614__auto__ = (((m == null))?null:m);
var m__32615__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,m,mode);
} else {
var m__32615__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__33033__auto__ = [];
var len__33026__auto___47818 = arguments.length;
var i__33027__auto___47819 = (0);
while(true){
if((i__33027__auto___47819 < len__33026__auto___47818)){
args__33033__auto__.push((arguments[i__33027__auto___47819]));

var G__47820 = (i__33027__auto___47819 + (1));
i__33027__auto___47819 = G__47820;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((3) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33034__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47812){
var map__47813 = p__47812;
var map__47813__$1 = ((((!((map__47813 == null)))?((((map__47813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47813):map__47813);
var opts = map__47813__$1;
var statearr_47815_47821 = state;
(statearr_47815_47821[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__47813,map__47813__$1,opts){
return (function (val){
var statearr_47816_47822 = state;
(statearr_47816_47822[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47813,map__47813__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_47817_47823 = state;
(statearr_47817_47823[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47808){
var G__47809 = cljs.core.first.call(null,seq47808);
var seq47808__$1 = cljs.core.next.call(null,seq47808);
var G__47810 = cljs.core.first.call(null,seq47808__$1);
var seq47808__$2 = cljs.core.next.call(null,seq47808__$1);
var G__47811 = cljs.core.first.call(null,seq47808__$2);
var seq47808__$3 = cljs.core.next.call(null,seq47808__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47809,G__47810,G__47811,seq47808__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47989 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47990){
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
this.meta47990 = meta47990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47991,meta47990__$1){
var self__ = this;
var _47991__$1 = this;
return (new cljs.core.async.t_cljs$core$async47989(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47990__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47991){
var self__ = this;
var _47991__$1 = this;
return self__.meta47990;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async47989.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47989.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47990","meta47990",1085041763,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47989";

cljs.core.async.t_cljs$core$async47989.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async47989");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47989 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47989(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47990){
return (new cljs.core.async.t_cljs$core$async47989(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47990));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47989(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36744__auto___48154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___48154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___48154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48091){
var state_val_48092 = (state_48091[(1)]);
if((state_val_48092 === (7))){
var inst_48007 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
var statearr_48093_48155 = state_48091__$1;
(statearr_48093_48155[(2)] = inst_48007);

(statearr_48093_48155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (20))){
var inst_48019 = (state_48091[(7)]);
var state_48091__$1 = state_48091;
var statearr_48094_48156 = state_48091__$1;
(statearr_48094_48156[(2)] = inst_48019);

(statearr_48094_48156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (27))){
var state_48091__$1 = state_48091;
var statearr_48095_48157 = state_48091__$1;
(statearr_48095_48157[(2)] = null);

(statearr_48095_48157[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (1))){
var inst_47995 = (state_48091[(8)]);
var inst_47995__$1 = calc_state.call(null);
var inst_47997 = (inst_47995__$1 == null);
var inst_47998 = cljs.core.not.call(null,inst_47997);
var state_48091__$1 = (function (){var statearr_48096 = state_48091;
(statearr_48096[(8)] = inst_47995__$1);

return statearr_48096;
})();
if(inst_47998){
var statearr_48097_48158 = state_48091__$1;
(statearr_48097_48158[(1)] = (2));

} else {
var statearr_48098_48159 = state_48091__$1;
(statearr_48098_48159[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (24))){
var inst_48051 = (state_48091[(9)]);
var inst_48042 = (state_48091[(10)]);
var inst_48065 = (state_48091[(11)]);
var inst_48065__$1 = inst_48042.call(null,inst_48051);
var state_48091__$1 = (function (){var statearr_48099 = state_48091;
(statearr_48099[(11)] = inst_48065__$1);

return statearr_48099;
})();
if(cljs.core.truth_(inst_48065__$1)){
var statearr_48100_48160 = state_48091__$1;
(statearr_48100_48160[(1)] = (29));

} else {
var statearr_48101_48161 = state_48091__$1;
(statearr_48101_48161[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (4))){
var inst_48010 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48010)){
var statearr_48102_48162 = state_48091__$1;
(statearr_48102_48162[(1)] = (8));

} else {
var statearr_48103_48163 = state_48091__$1;
(statearr_48103_48163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (15))){
var inst_48036 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48036)){
var statearr_48104_48164 = state_48091__$1;
(statearr_48104_48164[(1)] = (19));

} else {
var statearr_48105_48165 = state_48091__$1;
(statearr_48105_48165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (21))){
var inst_48041 = (state_48091[(12)]);
var inst_48041__$1 = (state_48091[(2)]);
var inst_48042 = cljs.core.get.call(null,inst_48041__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48043 = cljs.core.get.call(null,inst_48041__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48044 = cljs.core.get.call(null,inst_48041__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48091__$1 = (function (){var statearr_48106 = state_48091;
(statearr_48106[(10)] = inst_48042);

(statearr_48106[(13)] = inst_48043);

(statearr_48106[(12)] = inst_48041__$1);

return statearr_48106;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48091__$1,(22),inst_48044);
} else {
if((state_val_48092 === (31))){
var inst_48073 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48073)){
var statearr_48107_48166 = state_48091__$1;
(statearr_48107_48166[(1)] = (32));

} else {
var statearr_48108_48167 = state_48091__$1;
(statearr_48108_48167[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (32))){
var inst_48050 = (state_48091[(14)]);
var state_48091__$1 = state_48091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48091__$1,(35),out,inst_48050);
} else {
if((state_val_48092 === (33))){
var inst_48041 = (state_48091[(12)]);
var inst_48019 = inst_48041;
var state_48091__$1 = (function (){var statearr_48109 = state_48091;
(statearr_48109[(7)] = inst_48019);

return statearr_48109;
})();
var statearr_48110_48168 = state_48091__$1;
(statearr_48110_48168[(2)] = null);

(statearr_48110_48168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (13))){
var inst_48019 = (state_48091[(7)]);
var inst_48026 = inst_48019.cljs$lang$protocol_mask$partition0$;
var inst_48027 = (inst_48026 & (64));
var inst_48028 = inst_48019.cljs$core$ISeq$;
var inst_48029 = (inst_48027) || (inst_48028);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48029)){
var statearr_48111_48169 = state_48091__$1;
(statearr_48111_48169[(1)] = (16));

} else {
var statearr_48112_48170 = state_48091__$1;
(statearr_48112_48170[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (22))){
var inst_48051 = (state_48091[(9)]);
var inst_48050 = (state_48091[(14)]);
var inst_48049 = (state_48091[(2)]);
var inst_48050__$1 = cljs.core.nth.call(null,inst_48049,(0),null);
var inst_48051__$1 = cljs.core.nth.call(null,inst_48049,(1),null);
var inst_48052 = (inst_48050__$1 == null);
var inst_48053 = cljs.core._EQ_.call(null,inst_48051__$1,change);
var inst_48054 = (inst_48052) || (inst_48053);
var state_48091__$1 = (function (){var statearr_48113 = state_48091;
(statearr_48113[(9)] = inst_48051__$1);

(statearr_48113[(14)] = inst_48050__$1);

return statearr_48113;
})();
if(cljs.core.truth_(inst_48054)){
var statearr_48114_48171 = state_48091__$1;
(statearr_48114_48171[(1)] = (23));

} else {
var statearr_48115_48172 = state_48091__$1;
(statearr_48115_48172[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (36))){
var inst_48041 = (state_48091[(12)]);
var inst_48019 = inst_48041;
var state_48091__$1 = (function (){var statearr_48116 = state_48091;
(statearr_48116[(7)] = inst_48019);

return statearr_48116;
})();
var statearr_48117_48173 = state_48091__$1;
(statearr_48117_48173[(2)] = null);

(statearr_48117_48173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (29))){
var inst_48065 = (state_48091[(11)]);
var state_48091__$1 = state_48091;
var statearr_48118_48174 = state_48091__$1;
(statearr_48118_48174[(2)] = inst_48065);

(statearr_48118_48174[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (6))){
var state_48091__$1 = state_48091;
var statearr_48119_48175 = state_48091__$1;
(statearr_48119_48175[(2)] = false);

(statearr_48119_48175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (28))){
var inst_48061 = (state_48091[(2)]);
var inst_48062 = calc_state.call(null);
var inst_48019 = inst_48062;
var state_48091__$1 = (function (){var statearr_48120 = state_48091;
(statearr_48120[(7)] = inst_48019);

(statearr_48120[(15)] = inst_48061);

return statearr_48120;
})();
var statearr_48121_48176 = state_48091__$1;
(statearr_48121_48176[(2)] = null);

(statearr_48121_48176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (25))){
var inst_48087 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
var statearr_48122_48177 = state_48091__$1;
(statearr_48122_48177[(2)] = inst_48087);

(statearr_48122_48177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (34))){
var inst_48085 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
var statearr_48123_48178 = state_48091__$1;
(statearr_48123_48178[(2)] = inst_48085);

(statearr_48123_48178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (17))){
var state_48091__$1 = state_48091;
var statearr_48124_48179 = state_48091__$1;
(statearr_48124_48179[(2)] = false);

(statearr_48124_48179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (3))){
var state_48091__$1 = state_48091;
var statearr_48125_48180 = state_48091__$1;
(statearr_48125_48180[(2)] = false);

(statearr_48125_48180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (12))){
var inst_48089 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48091__$1,inst_48089);
} else {
if((state_val_48092 === (2))){
var inst_47995 = (state_48091[(8)]);
var inst_48000 = inst_47995.cljs$lang$protocol_mask$partition0$;
var inst_48001 = (inst_48000 & (64));
var inst_48002 = inst_47995.cljs$core$ISeq$;
var inst_48003 = (inst_48001) || (inst_48002);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48003)){
var statearr_48126_48181 = state_48091__$1;
(statearr_48126_48181[(1)] = (5));

} else {
var statearr_48127_48182 = state_48091__$1;
(statearr_48127_48182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (23))){
var inst_48050 = (state_48091[(14)]);
var inst_48056 = (inst_48050 == null);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48056)){
var statearr_48128_48183 = state_48091__$1;
(statearr_48128_48183[(1)] = (26));

} else {
var statearr_48129_48184 = state_48091__$1;
(statearr_48129_48184[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (35))){
var inst_48076 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
if(cljs.core.truth_(inst_48076)){
var statearr_48130_48185 = state_48091__$1;
(statearr_48130_48185[(1)] = (36));

} else {
var statearr_48131_48186 = state_48091__$1;
(statearr_48131_48186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (19))){
var inst_48019 = (state_48091[(7)]);
var inst_48038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48019);
var state_48091__$1 = state_48091;
var statearr_48132_48187 = state_48091__$1;
(statearr_48132_48187[(2)] = inst_48038);

(statearr_48132_48187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (11))){
var inst_48019 = (state_48091[(7)]);
var inst_48023 = (inst_48019 == null);
var inst_48024 = cljs.core.not.call(null,inst_48023);
var state_48091__$1 = state_48091;
if(inst_48024){
var statearr_48133_48188 = state_48091__$1;
(statearr_48133_48188[(1)] = (13));

} else {
var statearr_48134_48189 = state_48091__$1;
(statearr_48134_48189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (9))){
var inst_47995 = (state_48091[(8)]);
var state_48091__$1 = state_48091;
var statearr_48135_48190 = state_48091__$1;
(statearr_48135_48190[(2)] = inst_47995);

(statearr_48135_48190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (5))){
var state_48091__$1 = state_48091;
var statearr_48136_48191 = state_48091__$1;
(statearr_48136_48191[(2)] = true);

(statearr_48136_48191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (14))){
var state_48091__$1 = state_48091;
var statearr_48137_48192 = state_48091__$1;
(statearr_48137_48192[(2)] = false);

(statearr_48137_48192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (26))){
var inst_48051 = (state_48091[(9)]);
var inst_48058 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48051);
var state_48091__$1 = state_48091;
var statearr_48138_48193 = state_48091__$1;
(statearr_48138_48193[(2)] = inst_48058);

(statearr_48138_48193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (16))){
var state_48091__$1 = state_48091;
var statearr_48139_48194 = state_48091__$1;
(statearr_48139_48194[(2)] = true);

(statearr_48139_48194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (38))){
var inst_48081 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
var statearr_48140_48195 = state_48091__$1;
(statearr_48140_48195[(2)] = inst_48081);

(statearr_48140_48195[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (30))){
var inst_48051 = (state_48091[(9)]);
var inst_48042 = (state_48091[(10)]);
var inst_48043 = (state_48091[(13)]);
var inst_48068 = cljs.core.empty_QMARK_.call(null,inst_48042);
var inst_48069 = inst_48043.call(null,inst_48051);
var inst_48070 = cljs.core.not.call(null,inst_48069);
var inst_48071 = (inst_48068) && (inst_48070);
var state_48091__$1 = state_48091;
var statearr_48141_48196 = state_48091__$1;
(statearr_48141_48196[(2)] = inst_48071);

(statearr_48141_48196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (10))){
var inst_47995 = (state_48091[(8)]);
var inst_48015 = (state_48091[(2)]);
var inst_48016 = cljs.core.get.call(null,inst_48015,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48017 = cljs.core.get.call(null,inst_48015,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48018 = cljs.core.get.call(null,inst_48015,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48019 = inst_47995;
var state_48091__$1 = (function (){var statearr_48142 = state_48091;
(statearr_48142[(7)] = inst_48019);

(statearr_48142[(16)] = inst_48017);

(statearr_48142[(17)] = inst_48018);

(statearr_48142[(18)] = inst_48016);

return statearr_48142;
})();
var statearr_48143_48197 = state_48091__$1;
(statearr_48143_48197[(2)] = null);

(statearr_48143_48197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (18))){
var inst_48033 = (state_48091[(2)]);
var state_48091__$1 = state_48091;
var statearr_48144_48198 = state_48091__$1;
(statearr_48144_48198[(2)] = inst_48033);

(statearr_48144_48198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (37))){
var state_48091__$1 = state_48091;
var statearr_48145_48199 = state_48091__$1;
(statearr_48145_48199[(2)] = null);

(statearr_48145_48199[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48092 === (8))){
var inst_47995 = (state_48091[(8)]);
var inst_48012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47995);
var state_48091__$1 = state_48091;
var statearr_48146_48200 = state_48091__$1;
(statearr_48146_48200[(2)] = inst_48012);

(statearr_48146_48200[(1)] = (10));


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
});})(c__36744__auto___48154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36723__auto__,c__36744__auto___48154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36724__auto__ = null;
var cljs$core$async$mix_$_state_machine__36724__auto____0 = (function (){
var statearr_48150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48150[(0)] = cljs$core$async$mix_$_state_machine__36724__auto__);

(statearr_48150[(1)] = (1));

return statearr_48150;
});
var cljs$core$async$mix_$_state_machine__36724__auto____1 = (function (state_48091){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48151){if((e48151 instanceof Object)){
var ex__36727__auto__ = e48151;
var statearr_48152_48201 = state_48091;
(statearr_48152_48201[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48202 = state_48091;
state_48091 = G__48202;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36724__auto__ = function(state_48091){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36724__auto____1.call(this,state_48091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36724__auto____0;
cljs$core$async$mix_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36724__auto____1;
return cljs$core$async$mix_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___48154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36746__auto__ = (function (){var statearr_48153 = f__36745__auto__.call(null);
(statearr_48153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___48154);

return statearr_48153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___48154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__32614__auto__ = (((p == null))?null:p);
var m__32615__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__32615__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__32614__auto__ = (((p == null))?null:p);
var m__32615__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,p,v,ch);
} else {
var m__32615__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48203 = [];
var len__33026__auto___48206 = arguments.length;
var i__33027__auto___48207 = (0);
while(true){
if((i__33027__auto___48207 < len__33026__auto___48206)){
args48203.push((arguments[i__33027__auto___48207]));

var G__48208 = (i__33027__auto___48207 + (1));
i__33027__auto___48207 = G__48208;
continue;
} else {
}
break;
}

var G__48205 = args48203.length;
switch (G__48205) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48203.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32614__auto__ = (((p == null))?null:p);
var m__32615__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,p);
} else {
var m__32615__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,p);
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
var x__32614__auto__ = (((p == null))?null:p);
var m__32615__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32614__auto__)]);
if(!((m__32615__auto__ == null))){
return m__32615__auto__.call(null,p,v);
} else {
var m__32615__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32615__auto____$1 == null))){
return m__32615__auto____$1.call(null,p,v);
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
var args48211 = [];
var len__33026__auto___48336 = arguments.length;
var i__33027__auto___48337 = (0);
while(true){
if((i__33027__auto___48337 < len__33026__auto___48336)){
args48211.push((arguments[i__33027__auto___48337]));

var G__48338 = (i__33027__auto___48337 + (1));
i__33027__auto___48337 = G__48338;
continue;
} else {
}
break;
}

var G__48213 = args48211.length;
switch (G__48213) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48211.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__31951__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__31951__auto__,mults){
return (function (p1__48210_SHARP_){
if(cljs.core.truth_(p1__48210_SHARP_.call(null,topic))){
return p1__48210_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48210_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31951__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48214 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48215){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48215 = meta48215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48216,meta48215__$1){
var self__ = this;
var _48216__$1 = this;
return (new cljs.core.async.t_cljs$core$async48214(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48215__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48216){
var self__ = this;
var _48216__$1 = this;
return self__.meta48215;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async48214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48214.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48215","meta48215",-859068294,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48214";

cljs.core.async.t_cljs$core$async48214.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async48214");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48214 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48215){
return (new cljs.core.async.t_cljs$core$async48214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48215));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48214(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36744__auto___48340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___48340,mults,ensure_mult,p){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___48340,mults,ensure_mult,p){
return (function (state_48288){
var state_val_48289 = (state_48288[(1)]);
if((state_val_48289 === (7))){
var inst_48284 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48290_48341 = state_48288__$1;
(statearr_48290_48341[(2)] = inst_48284);

(statearr_48290_48341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (20))){
var state_48288__$1 = state_48288;
var statearr_48291_48342 = state_48288__$1;
(statearr_48291_48342[(2)] = null);

(statearr_48291_48342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (1))){
var state_48288__$1 = state_48288;
var statearr_48292_48343 = state_48288__$1;
(statearr_48292_48343[(2)] = null);

(statearr_48292_48343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (24))){
var inst_48267 = (state_48288[(7)]);
var inst_48276 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48267);
var state_48288__$1 = state_48288;
var statearr_48293_48344 = state_48288__$1;
(statearr_48293_48344[(2)] = inst_48276);

(statearr_48293_48344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (4))){
var inst_48219 = (state_48288[(8)]);
var inst_48219__$1 = (state_48288[(2)]);
var inst_48220 = (inst_48219__$1 == null);
var state_48288__$1 = (function (){var statearr_48294 = state_48288;
(statearr_48294[(8)] = inst_48219__$1);

return statearr_48294;
})();
if(cljs.core.truth_(inst_48220)){
var statearr_48295_48345 = state_48288__$1;
(statearr_48295_48345[(1)] = (5));

} else {
var statearr_48296_48346 = state_48288__$1;
(statearr_48296_48346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (15))){
var inst_48261 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48297_48347 = state_48288__$1;
(statearr_48297_48347[(2)] = inst_48261);

(statearr_48297_48347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (21))){
var inst_48281 = (state_48288[(2)]);
var state_48288__$1 = (function (){var statearr_48298 = state_48288;
(statearr_48298[(9)] = inst_48281);

return statearr_48298;
})();
var statearr_48299_48348 = state_48288__$1;
(statearr_48299_48348[(2)] = null);

(statearr_48299_48348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (13))){
var inst_48243 = (state_48288[(10)]);
var inst_48245 = cljs.core.chunked_seq_QMARK_.call(null,inst_48243);
var state_48288__$1 = state_48288;
if(inst_48245){
var statearr_48300_48349 = state_48288__$1;
(statearr_48300_48349[(1)] = (16));

} else {
var statearr_48301_48350 = state_48288__$1;
(statearr_48301_48350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (22))){
var inst_48273 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
if(cljs.core.truth_(inst_48273)){
var statearr_48302_48351 = state_48288__$1;
(statearr_48302_48351[(1)] = (23));

} else {
var statearr_48303_48352 = state_48288__$1;
(statearr_48303_48352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (6))){
var inst_48219 = (state_48288[(8)]);
var inst_48269 = (state_48288[(11)]);
var inst_48267 = (state_48288[(7)]);
var inst_48267__$1 = topic_fn.call(null,inst_48219);
var inst_48268 = cljs.core.deref.call(null,mults);
var inst_48269__$1 = cljs.core.get.call(null,inst_48268,inst_48267__$1);
var state_48288__$1 = (function (){var statearr_48304 = state_48288;
(statearr_48304[(11)] = inst_48269__$1);

(statearr_48304[(7)] = inst_48267__$1);

return statearr_48304;
})();
if(cljs.core.truth_(inst_48269__$1)){
var statearr_48305_48353 = state_48288__$1;
(statearr_48305_48353[(1)] = (19));

} else {
var statearr_48306_48354 = state_48288__$1;
(statearr_48306_48354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (25))){
var inst_48278 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48307_48355 = state_48288__$1;
(statearr_48307_48355[(2)] = inst_48278);

(statearr_48307_48355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (17))){
var inst_48243 = (state_48288[(10)]);
var inst_48252 = cljs.core.first.call(null,inst_48243);
var inst_48253 = cljs.core.async.muxch_STAR_.call(null,inst_48252);
var inst_48254 = cljs.core.async.close_BANG_.call(null,inst_48253);
var inst_48255 = cljs.core.next.call(null,inst_48243);
var inst_48229 = inst_48255;
var inst_48230 = null;
var inst_48231 = (0);
var inst_48232 = (0);
var state_48288__$1 = (function (){var statearr_48308 = state_48288;
(statearr_48308[(12)] = inst_48232);

(statearr_48308[(13)] = inst_48231);

(statearr_48308[(14)] = inst_48230);

(statearr_48308[(15)] = inst_48254);

(statearr_48308[(16)] = inst_48229);

return statearr_48308;
})();
var statearr_48309_48356 = state_48288__$1;
(statearr_48309_48356[(2)] = null);

(statearr_48309_48356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (3))){
var inst_48286 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48288__$1,inst_48286);
} else {
if((state_val_48289 === (12))){
var inst_48263 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48310_48357 = state_48288__$1;
(statearr_48310_48357[(2)] = inst_48263);

(statearr_48310_48357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (2))){
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48288__$1,(4),ch);
} else {
if((state_val_48289 === (23))){
var state_48288__$1 = state_48288;
var statearr_48311_48358 = state_48288__$1;
(statearr_48311_48358[(2)] = null);

(statearr_48311_48358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (19))){
var inst_48219 = (state_48288[(8)]);
var inst_48269 = (state_48288[(11)]);
var inst_48271 = cljs.core.async.muxch_STAR_.call(null,inst_48269);
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48288__$1,(22),inst_48271,inst_48219);
} else {
if((state_val_48289 === (11))){
var inst_48243 = (state_48288[(10)]);
var inst_48229 = (state_48288[(16)]);
var inst_48243__$1 = cljs.core.seq.call(null,inst_48229);
var state_48288__$1 = (function (){var statearr_48312 = state_48288;
(statearr_48312[(10)] = inst_48243__$1);

return statearr_48312;
})();
if(inst_48243__$1){
var statearr_48313_48359 = state_48288__$1;
(statearr_48313_48359[(1)] = (13));

} else {
var statearr_48314_48360 = state_48288__$1;
(statearr_48314_48360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (9))){
var inst_48265 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48315_48361 = state_48288__$1;
(statearr_48315_48361[(2)] = inst_48265);

(statearr_48315_48361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (5))){
var inst_48226 = cljs.core.deref.call(null,mults);
var inst_48227 = cljs.core.vals.call(null,inst_48226);
var inst_48228 = cljs.core.seq.call(null,inst_48227);
var inst_48229 = inst_48228;
var inst_48230 = null;
var inst_48231 = (0);
var inst_48232 = (0);
var state_48288__$1 = (function (){var statearr_48316 = state_48288;
(statearr_48316[(12)] = inst_48232);

(statearr_48316[(13)] = inst_48231);

(statearr_48316[(14)] = inst_48230);

(statearr_48316[(16)] = inst_48229);

return statearr_48316;
})();
var statearr_48317_48362 = state_48288__$1;
(statearr_48317_48362[(2)] = null);

(statearr_48317_48362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (14))){
var state_48288__$1 = state_48288;
var statearr_48321_48363 = state_48288__$1;
(statearr_48321_48363[(2)] = null);

(statearr_48321_48363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (16))){
var inst_48243 = (state_48288[(10)]);
var inst_48247 = cljs.core.chunk_first.call(null,inst_48243);
var inst_48248 = cljs.core.chunk_rest.call(null,inst_48243);
var inst_48249 = cljs.core.count.call(null,inst_48247);
var inst_48229 = inst_48248;
var inst_48230 = inst_48247;
var inst_48231 = inst_48249;
var inst_48232 = (0);
var state_48288__$1 = (function (){var statearr_48322 = state_48288;
(statearr_48322[(12)] = inst_48232);

(statearr_48322[(13)] = inst_48231);

(statearr_48322[(14)] = inst_48230);

(statearr_48322[(16)] = inst_48229);

return statearr_48322;
})();
var statearr_48323_48364 = state_48288__$1;
(statearr_48323_48364[(2)] = null);

(statearr_48323_48364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (10))){
var inst_48232 = (state_48288[(12)]);
var inst_48231 = (state_48288[(13)]);
var inst_48230 = (state_48288[(14)]);
var inst_48229 = (state_48288[(16)]);
var inst_48237 = cljs.core._nth.call(null,inst_48230,inst_48232);
var inst_48238 = cljs.core.async.muxch_STAR_.call(null,inst_48237);
var inst_48239 = cljs.core.async.close_BANG_.call(null,inst_48238);
var inst_48240 = (inst_48232 + (1));
var tmp48318 = inst_48231;
var tmp48319 = inst_48230;
var tmp48320 = inst_48229;
var inst_48229__$1 = tmp48320;
var inst_48230__$1 = tmp48319;
var inst_48231__$1 = tmp48318;
var inst_48232__$1 = inst_48240;
var state_48288__$1 = (function (){var statearr_48324 = state_48288;
(statearr_48324[(12)] = inst_48232__$1);

(statearr_48324[(13)] = inst_48231__$1);

(statearr_48324[(14)] = inst_48230__$1);

(statearr_48324[(17)] = inst_48239);

(statearr_48324[(16)] = inst_48229__$1);

return statearr_48324;
})();
var statearr_48325_48365 = state_48288__$1;
(statearr_48325_48365[(2)] = null);

(statearr_48325_48365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (18))){
var inst_48258 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48326_48366 = state_48288__$1;
(statearr_48326_48366[(2)] = inst_48258);

(statearr_48326_48366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (8))){
var inst_48232 = (state_48288[(12)]);
var inst_48231 = (state_48288[(13)]);
var inst_48234 = (inst_48232 < inst_48231);
var inst_48235 = inst_48234;
var state_48288__$1 = state_48288;
if(cljs.core.truth_(inst_48235)){
var statearr_48327_48367 = state_48288__$1;
(statearr_48327_48367[(1)] = (10));

} else {
var statearr_48328_48368 = state_48288__$1;
(statearr_48328_48368[(1)] = (11));

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
});})(c__36744__auto___48340,mults,ensure_mult,p))
;
return ((function (switch__36723__auto__,c__36744__auto___48340,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_48332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48332[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_48332[(1)] = (1));

return statearr_48332;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_48288){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48333){if((e48333 instanceof Object)){
var ex__36727__auto__ = e48333;
var statearr_48334_48369 = state_48288;
(statearr_48334_48369[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48370 = state_48288;
state_48288 = G__48370;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_48288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_48288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___48340,mults,ensure_mult,p))
})();
var state__36746__auto__ = (function (){var statearr_48335 = f__36745__auto__.call(null);
(statearr_48335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___48340);

return statearr_48335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___48340,mults,ensure_mult,p))
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
var args48371 = [];
var len__33026__auto___48374 = arguments.length;
var i__33027__auto___48375 = (0);
while(true){
if((i__33027__auto___48375 < len__33026__auto___48374)){
args48371.push((arguments[i__33027__auto___48375]));

var G__48376 = (i__33027__auto___48375 + (1));
i__33027__auto___48375 = G__48376;
continue;
} else {
}
break;
}

var G__48373 = args48371.length;
switch (G__48373) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48371.length)].join('')));

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
var args48378 = [];
var len__33026__auto___48381 = arguments.length;
var i__33027__auto___48382 = (0);
while(true){
if((i__33027__auto___48382 < len__33026__auto___48381)){
args48378.push((arguments[i__33027__auto___48382]));

var G__48383 = (i__33027__auto___48382 + (1));
i__33027__auto___48382 = G__48383;
continue;
} else {
}
break;
}

var G__48380 = args48378.length;
switch (G__48380) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48378.length)].join('')));

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
var args48385 = [];
var len__33026__auto___48456 = arguments.length;
var i__33027__auto___48457 = (0);
while(true){
if((i__33027__auto___48457 < len__33026__auto___48456)){
args48385.push((arguments[i__33027__auto___48457]));

var G__48458 = (i__33027__auto___48457 + (1));
i__33027__auto___48457 = G__48458;
continue;
} else {
}
break;
}

var G__48387 = args48385.length;
switch (G__48387) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48385.length)].join('')));

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
var c__36744__auto___48460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___48460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___48460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48426){
var state_val_48427 = (state_48426[(1)]);
if((state_val_48427 === (7))){
var state_48426__$1 = state_48426;
var statearr_48428_48461 = state_48426__$1;
(statearr_48428_48461[(2)] = null);

(statearr_48428_48461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (1))){
var state_48426__$1 = state_48426;
var statearr_48429_48462 = state_48426__$1;
(statearr_48429_48462[(2)] = null);

(statearr_48429_48462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (4))){
var inst_48390 = (state_48426[(7)]);
var inst_48392 = (inst_48390 < cnt);
var state_48426__$1 = state_48426;
if(cljs.core.truth_(inst_48392)){
var statearr_48430_48463 = state_48426__$1;
(statearr_48430_48463[(1)] = (6));

} else {
var statearr_48431_48464 = state_48426__$1;
(statearr_48431_48464[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (15))){
var inst_48422 = (state_48426[(2)]);
var state_48426__$1 = state_48426;
var statearr_48432_48465 = state_48426__$1;
(statearr_48432_48465[(2)] = inst_48422);

(statearr_48432_48465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (13))){
var inst_48415 = cljs.core.async.close_BANG_.call(null,out);
var state_48426__$1 = state_48426;
var statearr_48433_48466 = state_48426__$1;
(statearr_48433_48466[(2)] = inst_48415);

(statearr_48433_48466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (6))){
var state_48426__$1 = state_48426;
var statearr_48434_48467 = state_48426__$1;
(statearr_48434_48467[(2)] = null);

(statearr_48434_48467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (3))){
var inst_48424 = (state_48426[(2)]);
var state_48426__$1 = state_48426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48426__$1,inst_48424);
} else {
if((state_val_48427 === (12))){
var inst_48412 = (state_48426[(8)]);
var inst_48412__$1 = (state_48426[(2)]);
var inst_48413 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48412__$1);
var state_48426__$1 = (function (){var statearr_48435 = state_48426;
(statearr_48435[(8)] = inst_48412__$1);

return statearr_48435;
})();
if(cljs.core.truth_(inst_48413)){
var statearr_48436_48468 = state_48426__$1;
(statearr_48436_48468[(1)] = (13));

} else {
var statearr_48437_48469 = state_48426__$1;
(statearr_48437_48469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (2))){
var inst_48389 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48390 = (0);
var state_48426__$1 = (function (){var statearr_48438 = state_48426;
(statearr_48438[(7)] = inst_48390);

(statearr_48438[(9)] = inst_48389);

return statearr_48438;
})();
var statearr_48439_48470 = state_48426__$1;
(statearr_48439_48470[(2)] = null);

(statearr_48439_48470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (11))){
var inst_48390 = (state_48426[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48426,(10),Object,null,(9));
var inst_48399 = chs__$1.call(null,inst_48390);
var inst_48400 = done.call(null,inst_48390);
var inst_48401 = cljs.core.async.take_BANG_.call(null,inst_48399,inst_48400);
var state_48426__$1 = state_48426;
var statearr_48440_48471 = state_48426__$1;
(statearr_48440_48471[(2)] = inst_48401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (9))){
var inst_48390 = (state_48426[(7)]);
var inst_48403 = (state_48426[(2)]);
var inst_48404 = (inst_48390 + (1));
var inst_48390__$1 = inst_48404;
var state_48426__$1 = (function (){var statearr_48441 = state_48426;
(statearr_48441[(10)] = inst_48403);

(statearr_48441[(7)] = inst_48390__$1);

return statearr_48441;
})();
var statearr_48442_48472 = state_48426__$1;
(statearr_48442_48472[(2)] = null);

(statearr_48442_48472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (5))){
var inst_48410 = (state_48426[(2)]);
var state_48426__$1 = (function (){var statearr_48443 = state_48426;
(statearr_48443[(11)] = inst_48410);

return statearr_48443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48426__$1,(12),dchan);
} else {
if((state_val_48427 === (14))){
var inst_48412 = (state_48426[(8)]);
var inst_48417 = cljs.core.apply.call(null,f,inst_48412);
var state_48426__$1 = state_48426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48426__$1,(16),out,inst_48417);
} else {
if((state_val_48427 === (16))){
var inst_48419 = (state_48426[(2)]);
var state_48426__$1 = (function (){var statearr_48444 = state_48426;
(statearr_48444[(12)] = inst_48419);

return statearr_48444;
})();
var statearr_48445_48473 = state_48426__$1;
(statearr_48445_48473[(2)] = null);

(statearr_48445_48473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (10))){
var inst_48394 = (state_48426[(2)]);
var inst_48395 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48426__$1 = (function (){var statearr_48446 = state_48426;
(statearr_48446[(13)] = inst_48394);

return statearr_48446;
})();
var statearr_48447_48474 = state_48426__$1;
(statearr_48447_48474[(2)] = inst_48395);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48427 === (8))){
var inst_48408 = (state_48426[(2)]);
var state_48426__$1 = state_48426;
var statearr_48448_48475 = state_48426__$1;
(statearr_48448_48475[(2)] = inst_48408);

(statearr_48448_48475[(1)] = (5));


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
});})(c__36744__auto___48460,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36723__auto__,c__36744__auto___48460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_48452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48452[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_48452[(1)] = (1));

return statearr_48452;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_48426){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48453){if((e48453 instanceof Object)){
var ex__36727__auto__ = e48453;
var statearr_48454_48476 = state_48426;
(statearr_48454_48476[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48477 = state_48426;
state_48426 = G__48477;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_48426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_48426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___48460,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36746__auto__ = (function (){var statearr_48455 = f__36745__auto__.call(null);
(statearr_48455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___48460);

return statearr_48455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___48460,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args48479 = [];
var len__33026__auto___48537 = arguments.length;
var i__33027__auto___48538 = (0);
while(true){
if((i__33027__auto___48538 < len__33026__auto___48537)){
args48479.push((arguments[i__33027__auto___48538]));

var G__48539 = (i__33027__auto___48538 + (1));
i__33027__auto___48538 = G__48539;
continue;
} else {
}
break;
}

var G__48481 = args48479.length;
switch (G__48481) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48479.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36744__auto___48541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___48541,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___48541,out){
return (function (state_48513){
var state_val_48514 = (state_48513[(1)]);
if((state_val_48514 === (7))){
var inst_48492 = (state_48513[(7)]);
var inst_48493 = (state_48513[(8)]);
var inst_48492__$1 = (state_48513[(2)]);
var inst_48493__$1 = cljs.core.nth.call(null,inst_48492__$1,(0),null);
var inst_48494 = cljs.core.nth.call(null,inst_48492__$1,(1),null);
var inst_48495 = (inst_48493__$1 == null);
var state_48513__$1 = (function (){var statearr_48515 = state_48513;
(statearr_48515[(7)] = inst_48492__$1);

(statearr_48515[(9)] = inst_48494);

(statearr_48515[(8)] = inst_48493__$1);

return statearr_48515;
})();
if(cljs.core.truth_(inst_48495)){
var statearr_48516_48542 = state_48513__$1;
(statearr_48516_48542[(1)] = (8));

} else {
var statearr_48517_48543 = state_48513__$1;
(statearr_48517_48543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (1))){
var inst_48482 = cljs.core.vec.call(null,chs);
var inst_48483 = inst_48482;
var state_48513__$1 = (function (){var statearr_48518 = state_48513;
(statearr_48518[(10)] = inst_48483);

return statearr_48518;
})();
var statearr_48519_48544 = state_48513__$1;
(statearr_48519_48544[(2)] = null);

(statearr_48519_48544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (4))){
var inst_48483 = (state_48513[(10)]);
var state_48513__$1 = state_48513;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48513__$1,(7),inst_48483);
} else {
if((state_val_48514 === (6))){
var inst_48509 = (state_48513[(2)]);
var state_48513__$1 = state_48513;
var statearr_48520_48545 = state_48513__$1;
(statearr_48520_48545[(2)] = inst_48509);

(statearr_48520_48545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (3))){
var inst_48511 = (state_48513[(2)]);
var state_48513__$1 = state_48513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48513__$1,inst_48511);
} else {
if((state_val_48514 === (2))){
var inst_48483 = (state_48513[(10)]);
var inst_48485 = cljs.core.count.call(null,inst_48483);
var inst_48486 = (inst_48485 > (0));
var state_48513__$1 = state_48513;
if(cljs.core.truth_(inst_48486)){
var statearr_48522_48546 = state_48513__$1;
(statearr_48522_48546[(1)] = (4));

} else {
var statearr_48523_48547 = state_48513__$1;
(statearr_48523_48547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (11))){
var inst_48483 = (state_48513[(10)]);
var inst_48502 = (state_48513[(2)]);
var tmp48521 = inst_48483;
var inst_48483__$1 = tmp48521;
var state_48513__$1 = (function (){var statearr_48524 = state_48513;
(statearr_48524[(11)] = inst_48502);

(statearr_48524[(10)] = inst_48483__$1);

return statearr_48524;
})();
var statearr_48525_48548 = state_48513__$1;
(statearr_48525_48548[(2)] = null);

(statearr_48525_48548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (9))){
var inst_48493 = (state_48513[(8)]);
var state_48513__$1 = state_48513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48513__$1,(11),out,inst_48493);
} else {
if((state_val_48514 === (5))){
var inst_48507 = cljs.core.async.close_BANG_.call(null,out);
var state_48513__$1 = state_48513;
var statearr_48526_48549 = state_48513__$1;
(statearr_48526_48549[(2)] = inst_48507);

(statearr_48526_48549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (10))){
var inst_48505 = (state_48513[(2)]);
var state_48513__$1 = state_48513;
var statearr_48527_48550 = state_48513__$1;
(statearr_48527_48550[(2)] = inst_48505);

(statearr_48527_48550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48514 === (8))){
var inst_48492 = (state_48513[(7)]);
var inst_48494 = (state_48513[(9)]);
var inst_48493 = (state_48513[(8)]);
var inst_48483 = (state_48513[(10)]);
var inst_48497 = (function (){var cs = inst_48483;
var vec__48488 = inst_48492;
var v = inst_48493;
var c = inst_48494;
return ((function (cs,vec__48488,v,c,inst_48492,inst_48494,inst_48493,inst_48483,state_val_48514,c__36744__auto___48541,out){
return (function (p1__48478_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48478_SHARP_);
});
;})(cs,vec__48488,v,c,inst_48492,inst_48494,inst_48493,inst_48483,state_val_48514,c__36744__auto___48541,out))
})();
var inst_48498 = cljs.core.filterv.call(null,inst_48497,inst_48483);
var inst_48483__$1 = inst_48498;
var state_48513__$1 = (function (){var statearr_48528 = state_48513;
(statearr_48528[(10)] = inst_48483__$1);

return statearr_48528;
})();
var statearr_48529_48551 = state_48513__$1;
(statearr_48529_48551[(2)] = null);

(statearr_48529_48551[(1)] = (2));


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
});})(c__36744__auto___48541,out))
;
return ((function (switch__36723__auto__,c__36744__auto___48541,out){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_48533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48533[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_48533[(1)] = (1));

return statearr_48533;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_48513){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48534){if((e48534 instanceof Object)){
var ex__36727__auto__ = e48534;
var statearr_48535_48552 = state_48513;
(statearr_48535_48552[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48553 = state_48513;
state_48513 = G__48553;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_48513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_48513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___48541,out))
})();
var state__36746__auto__ = (function (){var statearr_48536 = f__36745__auto__.call(null);
(statearr_48536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___48541);

return statearr_48536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___48541,out))
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
var args48554 = [];
var len__33026__auto___48603 = arguments.length;
var i__33027__auto___48604 = (0);
while(true){
if((i__33027__auto___48604 < len__33026__auto___48603)){
args48554.push((arguments[i__33027__auto___48604]));

var G__48605 = (i__33027__auto___48604 + (1));
i__33027__auto___48604 = G__48605;
continue;
} else {
}
break;
}

var G__48556 = args48554.length;
switch (G__48556) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48554.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36744__auto___48607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___48607,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___48607,out){
return (function (state_48580){
var state_val_48581 = (state_48580[(1)]);
if((state_val_48581 === (7))){
var inst_48562 = (state_48580[(7)]);
var inst_48562__$1 = (state_48580[(2)]);
var inst_48563 = (inst_48562__$1 == null);
var inst_48564 = cljs.core.not.call(null,inst_48563);
var state_48580__$1 = (function (){var statearr_48582 = state_48580;
(statearr_48582[(7)] = inst_48562__$1);

return statearr_48582;
})();
if(inst_48564){
var statearr_48583_48608 = state_48580__$1;
(statearr_48583_48608[(1)] = (8));

} else {
var statearr_48584_48609 = state_48580__$1;
(statearr_48584_48609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (1))){
var inst_48557 = (0);
var state_48580__$1 = (function (){var statearr_48585 = state_48580;
(statearr_48585[(8)] = inst_48557);

return statearr_48585;
})();
var statearr_48586_48610 = state_48580__$1;
(statearr_48586_48610[(2)] = null);

(statearr_48586_48610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (4))){
var state_48580__$1 = state_48580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48580__$1,(7),ch);
} else {
if((state_val_48581 === (6))){
var inst_48575 = (state_48580[(2)]);
var state_48580__$1 = state_48580;
var statearr_48587_48611 = state_48580__$1;
(statearr_48587_48611[(2)] = inst_48575);

(statearr_48587_48611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (3))){
var inst_48577 = (state_48580[(2)]);
var inst_48578 = cljs.core.async.close_BANG_.call(null,out);
var state_48580__$1 = (function (){var statearr_48588 = state_48580;
(statearr_48588[(9)] = inst_48577);

return statearr_48588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48580__$1,inst_48578);
} else {
if((state_val_48581 === (2))){
var inst_48557 = (state_48580[(8)]);
var inst_48559 = (inst_48557 < n);
var state_48580__$1 = state_48580;
if(cljs.core.truth_(inst_48559)){
var statearr_48589_48612 = state_48580__$1;
(statearr_48589_48612[(1)] = (4));

} else {
var statearr_48590_48613 = state_48580__$1;
(statearr_48590_48613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (11))){
var inst_48557 = (state_48580[(8)]);
var inst_48567 = (state_48580[(2)]);
var inst_48568 = (inst_48557 + (1));
var inst_48557__$1 = inst_48568;
var state_48580__$1 = (function (){var statearr_48591 = state_48580;
(statearr_48591[(10)] = inst_48567);

(statearr_48591[(8)] = inst_48557__$1);

return statearr_48591;
})();
var statearr_48592_48614 = state_48580__$1;
(statearr_48592_48614[(2)] = null);

(statearr_48592_48614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (9))){
var state_48580__$1 = state_48580;
var statearr_48593_48615 = state_48580__$1;
(statearr_48593_48615[(2)] = null);

(statearr_48593_48615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (5))){
var state_48580__$1 = state_48580;
var statearr_48594_48616 = state_48580__$1;
(statearr_48594_48616[(2)] = null);

(statearr_48594_48616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (10))){
var inst_48572 = (state_48580[(2)]);
var state_48580__$1 = state_48580;
var statearr_48595_48617 = state_48580__$1;
(statearr_48595_48617[(2)] = inst_48572);

(statearr_48595_48617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (8))){
var inst_48562 = (state_48580[(7)]);
var state_48580__$1 = state_48580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48580__$1,(11),out,inst_48562);
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
});})(c__36744__auto___48607,out))
;
return ((function (switch__36723__auto__,c__36744__auto___48607,out){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_48599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48599[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_48599[(1)] = (1));

return statearr_48599;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_48580){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48600){if((e48600 instanceof Object)){
var ex__36727__auto__ = e48600;
var statearr_48601_48618 = state_48580;
(statearr_48601_48618[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48619 = state_48580;
state_48580 = G__48619;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_48580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_48580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___48607,out))
})();
var state__36746__auto__ = (function (){var statearr_48602 = f__36745__auto__.call(null);
(statearr_48602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___48607);

return statearr_48602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___48607,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48627 = (function (map_LT_,f,ch,meta48628){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48628 = meta48628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48629,meta48628__$1){
var self__ = this;
var _48629__$1 = this;
return (new cljs.core.async.t_cljs$core$async48627(self__.map_LT_,self__.f,self__.ch,meta48628__$1));
});


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48629){
var self__ = this;
var _48629__$1 = this;
return self__.meta48628;
});


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48630 = (function (map_LT_,f,ch,meta48628,_,fn1,meta48631){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48628 = meta48628;
this._ = _;
this.fn1 = fn1;
this.meta48631 = meta48631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48632,meta48631__$1){
var self__ = this;
var _48632__$1 = this;
return (new cljs.core.async.t_cljs$core$async48630(self__.map_LT_,self__.f,self__.ch,self__.meta48628,self__._,self__.fn1,meta48631__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async48630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48632){
var self__ = this;
var _48632__$1 = this;
return self__.meta48631;
});})(___$1))
;


cljs.core.async.t_cljs$core$async48630.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async48630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async48630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async48630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48620_SHARP_){
return f1.call(null,(((p1__48620_SHARP_ == null))?null:self__.f.call(null,p1__48620_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48630.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48628","meta48628",671146178,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48627","cljs.core.async/t_cljs$core$async48627",1344185922,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48631","meta48631",266923413,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48630";

cljs.core.async.t_cljs$core$async48630.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async48630");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48630 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48630(map_LT___$1,f__$1,ch__$1,meta48628__$1,___$2,fn1__$1,meta48631){
return (new cljs.core.async.t_cljs$core$async48630(map_LT___$1,f__$1,ch__$1,meta48628__$1,___$2,fn1__$1,meta48631));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48630(self__.map_LT_,self__.f,self__.ch,self__.meta48628,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31939__auto__ = ret;
if(cljs.core.truth_(and__31939__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__31939__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48628","meta48628",671146178,null)], null);
});

cljs.core.async.t_cljs$core$async48627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48627";

cljs.core.async.t_cljs$core$async48627.cljs$lang$ctorPrWriter = (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async48627");
});

cljs.core.async.__GT_t_cljs$core$async48627 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48627(map_LT___$1,f__$1,ch__$1,meta48628){
return (new cljs.core.async.t_cljs$core$async48627(map_LT___$1,f__$1,ch__$1,meta48628));
});

}

return (new cljs.core.async.t_cljs$core$async48627(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48636 = (function (map_GT_,f,ch,meta48637){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48637 = meta48637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48638,meta48637__$1){
var self__ = this;
var _48638__$1 = this;
return (new cljs.core.async.t_cljs$core$async48636(self__.map_GT_,self__.f,self__.ch,meta48637__$1));
});


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48638){
var self__ = this;
var _48638__$1 = this;
return self__.meta48637;
});


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48637","meta48637",491002508,null)], null);
});

cljs.core.async.t_cljs$core$async48636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48636";

cljs.core.async.t_cljs$core$async48636.cljs$lang$ctorPrWriter = (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async48636");
});

cljs.core.async.__GT_t_cljs$core$async48636 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48636(map_GT___$1,f__$1,ch__$1,meta48637){
return (new cljs.core.async.t_cljs$core$async48636(map_GT___$1,f__$1,ch__$1,meta48637));
});

}

return (new cljs.core.async.t_cljs$core$async48636(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48642 = (function (filter_GT_,p,ch,meta48643){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48643 = meta48643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48644,meta48643__$1){
var self__ = this;
var _48644__$1 = this;
return (new cljs.core.async.t_cljs$core$async48642(self__.filter_GT_,self__.p,self__.ch,meta48643__$1));
});


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48644){
var self__ = this;
var _48644__$1 = this;
return self__.meta48643;
});


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async48642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48643","meta48643",-1320445260,null)], null);
});

cljs.core.async.t_cljs$core$async48642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48642";

cljs.core.async.t_cljs$core$async48642.cljs$lang$ctorPrWriter = (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.core.async/t_cljs$core$async48642");
});

cljs.core.async.__GT_t_cljs$core$async48642 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48642(filter_GT___$1,p__$1,ch__$1,meta48643){
return (new cljs.core.async.t_cljs$core$async48642(filter_GT___$1,p__$1,ch__$1,meta48643));
});

}

return (new cljs.core.async.t_cljs$core$async48642(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args48645 = [];
var len__33026__auto___48689 = arguments.length;
var i__33027__auto___48690 = (0);
while(true){
if((i__33027__auto___48690 < len__33026__auto___48689)){
args48645.push((arguments[i__33027__auto___48690]));

var G__48691 = (i__33027__auto___48690 + (1));
i__33027__auto___48690 = G__48691;
continue;
} else {
}
break;
}

var G__48647 = args48645.length;
switch (G__48647) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48645.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36744__auto___48693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___48693,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___48693,out){
return (function (state_48668){
var state_val_48669 = (state_48668[(1)]);
if((state_val_48669 === (7))){
var inst_48664 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48670_48694 = state_48668__$1;
(statearr_48670_48694[(2)] = inst_48664);

(statearr_48670_48694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (1))){
var state_48668__$1 = state_48668;
var statearr_48671_48695 = state_48668__$1;
(statearr_48671_48695[(2)] = null);

(statearr_48671_48695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (4))){
var inst_48650 = (state_48668[(7)]);
var inst_48650__$1 = (state_48668[(2)]);
var inst_48651 = (inst_48650__$1 == null);
var state_48668__$1 = (function (){var statearr_48672 = state_48668;
(statearr_48672[(7)] = inst_48650__$1);

return statearr_48672;
})();
if(cljs.core.truth_(inst_48651)){
var statearr_48673_48696 = state_48668__$1;
(statearr_48673_48696[(1)] = (5));

} else {
var statearr_48674_48697 = state_48668__$1;
(statearr_48674_48697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (6))){
var inst_48650 = (state_48668[(7)]);
var inst_48655 = p.call(null,inst_48650);
var state_48668__$1 = state_48668;
if(cljs.core.truth_(inst_48655)){
var statearr_48675_48698 = state_48668__$1;
(statearr_48675_48698[(1)] = (8));

} else {
var statearr_48676_48699 = state_48668__$1;
(statearr_48676_48699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (3))){
var inst_48666 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48668__$1,inst_48666);
} else {
if((state_val_48669 === (2))){
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48668__$1,(4),ch);
} else {
if((state_val_48669 === (11))){
var inst_48658 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48677_48700 = state_48668__$1;
(statearr_48677_48700[(2)] = inst_48658);

(statearr_48677_48700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (9))){
var state_48668__$1 = state_48668;
var statearr_48678_48701 = state_48668__$1;
(statearr_48678_48701[(2)] = null);

(statearr_48678_48701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (5))){
var inst_48653 = cljs.core.async.close_BANG_.call(null,out);
var state_48668__$1 = state_48668;
var statearr_48679_48702 = state_48668__$1;
(statearr_48679_48702[(2)] = inst_48653);

(statearr_48679_48702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (10))){
var inst_48661 = (state_48668[(2)]);
var state_48668__$1 = (function (){var statearr_48680 = state_48668;
(statearr_48680[(8)] = inst_48661);

return statearr_48680;
})();
var statearr_48681_48703 = state_48668__$1;
(statearr_48681_48703[(2)] = null);

(statearr_48681_48703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (8))){
var inst_48650 = (state_48668[(7)]);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48668__$1,(11),out,inst_48650);
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
});})(c__36744__auto___48693,out))
;
return ((function (switch__36723__auto__,c__36744__auto___48693,out){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_48685 = [null,null,null,null,null,null,null,null,null];
(statearr_48685[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_48685[(1)] = (1));

return statearr_48685;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_48668){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48686){if((e48686 instanceof Object)){
var ex__36727__auto__ = e48686;
var statearr_48687_48704 = state_48668;
(statearr_48687_48704[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48705 = state_48668;
state_48668 = G__48705;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_48668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_48668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___48693,out))
})();
var state__36746__auto__ = (function (){var statearr_48688 = f__36745__auto__.call(null);
(statearr_48688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___48693);

return statearr_48688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___48693,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48706 = [];
var len__33026__auto___48709 = arguments.length;
var i__33027__auto___48710 = (0);
while(true){
if((i__33027__auto___48710 < len__33026__auto___48709)){
args48706.push((arguments[i__33027__auto___48710]));

var G__48711 = (i__33027__auto___48710 + (1));
i__33027__auto___48710 = G__48711;
continue;
} else {
}
break;
}

var G__48708 = args48706.length;
switch (G__48708) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48706.length)].join('')));

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
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__){
return (function (state_48878){
var state_val_48879 = (state_48878[(1)]);
if((state_val_48879 === (7))){
var inst_48874 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48880_48921 = state_48878__$1;
(statearr_48880_48921[(2)] = inst_48874);

(statearr_48880_48921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (20))){
var inst_48844 = (state_48878[(7)]);
var inst_48855 = (state_48878[(2)]);
var inst_48856 = cljs.core.next.call(null,inst_48844);
var inst_48830 = inst_48856;
var inst_48831 = null;
var inst_48832 = (0);
var inst_48833 = (0);
var state_48878__$1 = (function (){var statearr_48881 = state_48878;
(statearr_48881[(8)] = inst_48833);

(statearr_48881[(9)] = inst_48831);

(statearr_48881[(10)] = inst_48832);

(statearr_48881[(11)] = inst_48855);

(statearr_48881[(12)] = inst_48830);

return statearr_48881;
})();
var statearr_48882_48922 = state_48878__$1;
(statearr_48882_48922[(2)] = null);

(statearr_48882_48922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (1))){
var state_48878__$1 = state_48878;
var statearr_48883_48923 = state_48878__$1;
(statearr_48883_48923[(2)] = null);

(statearr_48883_48923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (4))){
var inst_48819 = (state_48878[(13)]);
var inst_48819__$1 = (state_48878[(2)]);
var inst_48820 = (inst_48819__$1 == null);
var state_48878__$1 = (function (){var statearr_48884 = state_48878;
(statearr_48884[(13)] = inst_48819__$1);

return statearr_48884;
})();
if(cljs.core.truth_(inst_48820)){
var statearr_48885_48924 = state_48878__$1;
(statearr_48885_48924[(1)] = (5));

} else {
var statearr_48886_48925 = state_48878__$1;
(statearr_48886_48925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (15))){
var state_48878__$1 = state_48878;
var statearr_48890_48926 = state_48878__$1;
(statearr_48890_48926[(2)] = null);

(statearr_48890_48926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (21))){
var state_48878__$1 = state_48878;
var statearr_48891_48927 = state_48878__$1;
(statearr_48891_48927[(2)] = null);

(statearr_48891_48927[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (13))){
var inst_48833 = (state_48878[(8)]);
var inst_48831 = (state_48878[(9)]);
var inst_48832 = (state_48878[(10)]);
var inst_48830 = (state_48878[(12)]);
var inst_48840 = (state_48878[(2)]);
var inst_48841 = (inst_48833 + (1));
var tmp48887 = inst_48831;
var tmp48888 = inst_48832;
var tmp48889 = inst_48830;
var inst_48830__$1 = tmp48889;
var inst_48831__$1 = tmp48887;
var inst_48832__$1 = tmp48888;
var inst_48833__$1 = inst_48841;
var state_48878__$1 = (function (){var statearr_48892 = state_48878;
(statearr_48892[(8)] = inst_48833__$1);

(statearr_48892[(9)] = inst_48831__$1);

(statearr_48892[(10)] = inst_48832__$1);

(statearr_48892[(12)] = inst_48830__$1);

(statearr_48892[(14)] = inst_48840);

return statearr_48892;
})();
var statearr_48893_48928 = state_48878__$1;
(statearr_48893_48928[(2)] = null);

(statearr_48893_48928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (22))){
var state_48878__$1 = state_48878;
var statearr_48894_48929 = state_48878__$1;
(statearr_48894_48929[(2)] = null);

(statearr_48894_48929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (6))){
var inst_48819 = (state_48878[(13)]);
var inst_48828 = f.call(null,inst_48819);
var inst_48829 = cljs.core.seq.call(null,inst_48828);
var inst_48830 = inst_48829;
var inst_48831 = null;
var inst_48832 = (0);
var inst_48833 = (0);
var state_48878__$1 = (function (){var statearr_48895 = state_48878;
(statearr_48895[(8)] = inst_48833);

(statearr_48895[(9)] = inst_48831);

(statearr_48895[(10)] = inst_48832);

(statearr_48895[(12)] = inst_48830);

return statearr_48895;
})();
var statearr_48896_48930 = state_48878__$1;
(statearr_48896_48930[(2)] = null);

(statearr_48896_48930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (17))){
var inst_48844 = (state_48878[(7)]);
var inst_48848 = cljs.core.chunk_first.call(null,inst_48844);
var inst_48849 = cljs.core.chunk_rest.call(null,inst_48844);
var inst_48850 = cljs.core.count.call(null,inst_48848);
var inst_48830 = inst_48849;
var inst_48831 = inst_48848;
var inst_48832 = inst_48850;
var inst_48833 = (0);
var state_48878__$1 = (function (){var statearr_48897 = state_48878;
(statearr_48897[(8)] = inst_48833);

(statearr_48897[(9)] = inst_48831);

(statearr_48897[(10)] = inst_48832);

(statearr_48897[(12)] = inst_48830);

return statearr_48897;
})();
var statearr_48898_48931 = state_48878__$1;
(statearr_48898_48931[(2)] = null);

(statearr_48898_48931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (3))){
var inst_48876 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48878__$1,inst_48876);
} else {
if((state_val_48879 === (12))){
var inst_48864 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48899_48932 = state_48878__$1;
(statearr_48899_48932[(2)] = inst_48864);

(statearr_48899_48932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (2))){
var state_48878__$1 = state_48878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48878__$1,(4),in$);
} else {
if((state_val_48879 === (23))){
var inst_48872 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48900_48933 = state_48878__$1;
(statearr_48900_48933[(2)] = inst_48872);

(statearr_48900_48933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (19))){
var inst_48859 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48901_48934 = state_48878__$1;
(statearr_48901_48934[(2)] = inst_48859);

(statearr_48901_48934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (11))){
var inst_48844 = (state_48878[(7)]);
var inst_48830 = (state_48878[(12)]);
var inst_48844__$1 = cljs.core.seq.call(null,inst_48830);
var state_48878__$1 = (function (){var statearr_48902 = state_48878;
(statearr_48902[(7)] = inst_48844__$1);

return statearr_48902;
})();
if(inst_48844__$1){
var statearr_48903_48935 = state_48878__$1;
(statearr_48903_48935[(1)] = (14));

} else {
var statearr_48904_48936 = state_48878__$1;
(statearr_48904_48936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (9))){
var inst_48866 = (state_48878[(2)]);
var inst_48867 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48878__$1 = (function (){var statearr_48905 = state_48878;
(statearr_48905[(15)] = inst_48866);

return statearr_48905;
})();
if(cljs.core.truth_(inst_48867)){
var statearr_48906_48937 = state_48878__$1;
(statearr_48906_48937[(1)] = (21));

} else {
var statearr_48907_48938 = state_48878__$1;
(statearr_48907_48938[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (5))){
var inst_48822 = cljs.core.async.close_BANG_.call(null,out);
var state_48878__$1 = state_48878;
var statearr_48908_48939 = state_48878__$1;
(statearr_48908_48939[(2)] = inst_48822);

(statearr_48908_48939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (14))){
var inst_48844 = (state_48878[(7)]);
var inst_48846 = cljs.core.chunked_seq_QMARK_.call(null,inst_48844);
var state_48878__$1 = state_48878;
if(inst_48846){
var statearr_48909_48940 = state_48878__$1;
(statearr_48909_48940[(1)] = (17));

} else {
var statearr_48910_48941 = state_48878__$1;
(statearr_48910_48941[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (16))){
var inst_48862 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48911_48942 = state_48878__$1;
(statearr_48911_48942[(2)] = inst_48862);

(statearr_48911_48942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (10))){
var inst_48833 = (state_48878[(8)]);
var inst_48831 = (state_48878[(9)]);
var inst_48838 = cljs.core._nth.call(null,inst_48831,inst_48833);
var state_48878__$1 = state_48878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48878__$1,(13),out,inst_48838);
} else {
if((state_val_48879 === (18))){
var inst_48844 = (state_48878[(7)]);
var inst_48853 = cljs.core.first.call(null,inst_48844);
var state_48878__$1 = state_48878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48878__$1,(20),out,inst_48853);
} else {
if((state_val_48879 === (8))){
var inst_48833 = (state_48878[(8)]);
var inst_48832 = (state_48878[(10)]);
var inst_48835 = (inst_48833 < inst_48832);
var inst_48836 = inst_48835;
var state_48878__$1 = state_48878;
if(cljs.core.truth_(inst_48836)){
var statearr_48912_48943 = state_48878__$1;
(statearr_48912_48943[(1)] = (10));

} else {
var statearr_48913_48944 = state_48878__$1;
(statearr_48913_48944[(1)] = (11));

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
});})(c__36744__auto__))
;
return ((function (switch__36723__auto__,c__36744__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36724__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36724__auto____0 = (function (){
var statearr_48917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48917[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36724__auto__);

(statearr_48917[(1)] = (1));

return statearr_48917;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36724__auto____1 = (function (state_48878){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e48918){if((e48918 instanceof Object)){
var ex__36727__auto__ = e48918;
var statearr_48919_48945 = state_48878;
(statearr_48919_48945[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48946 = state_48878;
state_48878 = G__48946;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36724__auto__ = function(state_48878){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36724__auto____1.call(this,state_48878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36724__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36724__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__))
})();
var state__36746__auto__ = (function (){var statearr_48920 = f__36745__auto__.call(null);
(statearr_48920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_48920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__))
);

return c__36744__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48947 = [];
var len__33026__auto___48950 = arguments.length;
var i__33027__auto___48951 = (0);
while(true){
if((i__33027__auto___48951 < len__33026__auto___48950)){
args48947.push((arguments[i__33027__auto___48951]));

var G__48952 = (i__33027__auto___48951 + (1));
i__33027__auto___48951 = G__48952;
continue;
} else {
}
break;
}

var G__48949 = args48947.length;
switch (G__48949) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48947.length)].join('')));

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
var args48954 = [];
var len__33026__auto___48957 = arguments.length;
var i__33027__auto___48958 = (0);
while(true){
if((i__33027__auto___48958 < len__33026__auto___48957)){
args48954.push((arguments[i__33027__auto___48958]));

var G__48959 = (i__33027__auto___48958 + (1));
i__33027__auto___48958 = G__48959;
continue;
} else {
}
break;
}

var G__48956 = args48954.length;
switch (G__48956) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48954.length)].join('')));

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
var args48961 = [];
var len__33026__auto___49012 = arguments.length;
var i__33027__auto___49013 = (0);
while(true){
if((i__33027__auto___49013 < len__33026__auto___49012)){
args48961.push((arguments[i__33027__auto___49013]));

var G__49014 = (i__33027__auto___49013 + (1));
i__33027__auto___49013 = G__49014;
continue;
} else {
}
break;
}

var G__48963 = args48961.length;
switch (G__48963) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48961.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36744__auto___49016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___49016,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___49016,out){
return (function (state_48987){
var state_val_48988 = (state_48987[(1)]);
if((state_val_48988 === (7))){
var inst_48982 = (state_48987[(2)]);
var state_48987__$1 = state_48987;
var statearr_48989_49017 = state_48987__$1;
(statearr_48989_49017[(2)] = inst_48982);

(statearr_48989_49017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (1))){
var inst_48964 = null;
var state_48987__$1 = (function (){var statearr_48990 = state_48987;
(statearr_48990[(7)] = inst_48964);

return statearr_48990;
})();
var statearr_48991_49018 = state_48987__$1;
(statearr_48991_49018[(2)] = null);

(statearr_48991_49018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (4))){
var inst_48967 = (state_48987[(8)]);
var inst_48967__$1 = (state_48987[(2)]);
var inst_48968 = (inst_48967__$1 == null);
var inst_48969 = cljs.core.not.call(null,inst_48968);
var state_48987__$1 = (function (){var statearr_48992 = state_48987;
(statearr_48992[(8)] = inst_48967__$1);

return statearr_48992;
})();
if(inst_48969){
var statearr_48993_49019 = state_48987__$1;
(statearr_48993_49019[(1)] = (5));

} else {
var statearr_48994_49020 = state_48987__$1;
(statearr_48994_49020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (6))){
var state_48987__$1 = state_48987;
var statearr_48995_49021 = state_48987__$1;
(statearr_48995_49021[(2)] = null);

(statearr_48995_49021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (3))){
var inst_48984 = (state_48987[(2)]);
var inst_48985 = cljs.core.async.close_BANG_.call(null,out);
var state_48987__$1 = (function (){var statearr_48996 = state_48987;
(statearr_48996[(9)] = inst_48984);

return statearr_48996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48987__$1,inst_48985);
} else {
if((state_val_48988 === (2))){
var state_48987__$1 = state_48987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48987__$1,(4),ch);
} else {
if((state_val_48988 === (11))){
var inst_48967 = (state_48987[(8)]);
var inst_48976 = (state_48987[(2)]);
var inst_48964 = inst_48967;
var state_48987__$1 = (function (){var statearr_48997 = state_48987;
(statearr_48997[(10)] = inst_48976);

(statearr_48997[(7)] = inst_48964);

return statearr_48997;
})();
var statearr_48998_49022 = state_48987__$1;
(statearr_48998_49022[(2)] = null);

(statearr_48998_49022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (9))){
var inst_48967 = (state_48987[(8)]);
var state_48987__$1 = state_48987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48987__$1,(11),out,inst_48967);
} else {
if((state_val_48988 === (5))){
var inst_48967 = (state_48987[(8)]);
var inst_48964 = (state_48987[(7)]);
var inst_48971 = cljs.core._EQ_.call(null,inst_48967,inst_48964);
var state_48987__$1 = state_48987;
if(inst_48971){
var statearr_49000_49023 = state_48987__$1;
(statearr_49000_49023[(1)] = (8));

} else {
var statearr_49001_49024 = state_48987__$1;
(statearr_49001_49024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (10))){
var inst_48979 = (state_48987[(2)]);
var state_48987__$1 = state_48987;
var statearr_49002_49025 = state_48987__$1;
(statearr_49002_49025[(2)] = inst_48979);

(statearr_49002_49025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48988 === (8))){
var inst_48964 = (state_48987[(7)]);
var tmp48999 = inst_48964;
var inst_48964__$1 = tmp48999;
var state_48987__$1 = (function (){var statearr_49003 = state_48987;
(statearr_49003[(7)] = inst_48964__$1);

return statearr_49003;
})();
var statearr_49004_49026 = state_48987__$1;
(statearr_49004_49026[(2)] = null);

(statearr_49004_49026[(1)] = (2));


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
});})(c__36744__auto___49016,out))
;
return ((function (switch__36723__auto__,c__36744__auto___49016,out){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_49008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49008[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_49008[(1)] = (1));

return statearr_49008;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_48987){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_48987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e49009){if((e49009 instanceof Object)){
var ex__36727__auto__ = e49009;
var statearr_49010_49027 = state_48987;
(statearr_49010_49027[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49028 = state_48987;
state_48987 = G__49028;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_48987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_48987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___49016,out))
})();
var state__36746__auto__ = (function (){var statearr_49011 = f__36745__auto__.call(null);
(statearr_49011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___49016);

return statearr_49011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___49016,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49029 = [];
var len__33026__auto___49099 = arguments.length;
var i__33027__auto___49100 = (0);
while(true){
if((i__33027__auto___49100 < len__33026__auto___49099)){
args49029.push((arguments[i__33027__auto___49100]));

var G__49101 = (i__33027__auto___49100 + (1));
i__33027__auto___49100 = G__49101;
continue;
} else {
}
break;
}

var G__49031 = args49029.length;
switch (G__49031) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49029.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36744__auto___49103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___49103,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___49103,out){
return (function (state_49069){
var state_val_49070 = (state_49069[(1)]);
if((state_val_49070 === (7))){
var inst_49065 = (state_49069[(2)]);
var state_49069__$1 = state_49069;
var statearr_49071_49104 = state_49069__$1;
(statearr_49071_49104[(2)] = inst_49065);

(statearr_49071_49104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (1))){
var inst_49032 = (new Array(n));
var inst_49033 = inst_49032;
var inst_49034 = (0);
var state_49069__$1 = (function (){var statearr_49072 = state_49069;
(statearr_49072[(7)] = inst_49033);

(statearr_49072[(8)] = inst_49034);

return statearr_49072;
})();
var statearr_49073_49105 = state_49069__$1;
(statearr_49073_49105[(2)] = null);

(statearr_49073_49105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (4))){
var inst_49037 = (state_49069[(9)]);
var inst_49037__$1 = (state_49069[(2)]);
var inst_49038 = (inst_49037__$1 == null);
var inst_49039 = cljs.core.not.call(null,inst_49038);
var state_49069__$1 = (function (){var statearr_49074 = state_49069;
(statearr_49074[(9)] = inst_49037__$1);

return statearr_49074;
})();
if(inst_49039){
var statearr_49075_49106 = state_49069__$1;
(statearr_49075_49106[(1)] = (5));

} else {
var statearr_49076_49107 = state_49069__$1;
(statearr_49076_49107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (15))){
var inst_49059 = (state_49069[(2)]);
var state_49069__$1 = state_49069;
var statearr_49077_49108 = state_49069__$1;
(statearr_49077_49108[(2)] = inst_49059);

(statearr_49077_49108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (13))){
var state_49069__$1 = state_49069;
var statearr_49078_49109 = state_49069__$1;
(statearr_49078_49109[(2)] = null);

(statearr_49078_49109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (6))){
var inst_49034 = (state_49069[(8)]);
var inst_49055 = (inst_49034 > (0));
var state_49069__$1 = state_49069;
if(cljs.core.truth_(inst_49055)){
var statearr_49079_49110 = state_49069__$1;
(statearr_49079_49110[(1)] = (12));

} else {
var statearr_49080_49111 = state_49069__$1;
(statearr_49080_49111[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (3))){
var inst_49067 = (state_49069[(2)]);
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49069__$1,inst_49067);
} else {
if((state_val_49070 === (12))){
var inst_49033 = (state_49069[(7)]);
var inst_49057 = cljs.core.vec.call(null,inst_49033);
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49069__$1,(15),out,inst_49057);
} else {
if((state_val_49070 === (2))){
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49069__$1,(4),ch);
} else {
if((state_val_49070 === (11))){
var inst_49049 = (state_49069[(2)]);
var inst_49050 = (new Array(n));
var inst_49033 = inst_49050;
var inst_49034 = (0);
var state_49069__$1 = (function (){var statearr_49081 = state_49069;
(statearr_49081[(7)] = inst_49033);

(statearr_49081[(8)] = inst_49034);

(statearr_49081[(10)] = inst_49049);

return statearr_49081;
})();
var statearr_49082_49112 = state_49069__$1;
(statearr_49082_49112[(2)] = null);

(statearr_49082_49112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (9))){
var inst_49033 = (state_49069[(7)]);
var inst_49047 = cljs.core.vec.call(null,inst_49033);
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49069__$1,(11),out,inst_49047);
} else {
if((state_val_49070 === (5))){
var inst_49033 = (state_49069[(7)]);
var inst_49034 = (state_49069[(8)]);
var inst_49042 = (state_49069[(11)]);
var inst_49037 = (state_49069[(9)]);
var inst_49041 = (inst_49033[inst_49034] = inst_49037);
var inst_49042__$1 = (inst_49034 + (1));
var inst_49043 = (inst_49042__$1 < n);
var state_49069__$1 = (function (){var statearr_49083 = state_49069;
(statearr_49083[(11)] = inst_49042__$1);

(statearr_49083[(12)] = inst_49041);

return statearr_49083;
})();
if(cljs.core.truth_(inst_49043)){
var statearr_49084_49113 = state_49069__$1;
(statearr_49084_49113[(1)] = (8));

} else {
var statearr_49085_49114 = state_49069__$1;
(statearr_49085_49114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (14))){
var inst_49062 = (state_49069[(2)]);
var inst_49063 = cljs.core.async.close_BANG_.call(null,out);
var state_49069__$1 = (function (){var statearr_49087 = state_49069;
(statearr_49087[(13)] = inst_49062);

return statearr_49087;
})();
var statearr_49088_49115 = state_49069__$1;
(statearr_49088_49115[(2)] = inst_49063);

(statearr_49088_49115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (10))){
var inst_49053 = (state_49069[(2)]);
var state_49069__$1 = state_49069;
var statearr_49089_49116 = state_49069__$1;
(statearr_49089_49116[(2)] = inst_49053);

(statearr_49089_49116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (8))){
var inst_49033 = (state_49069[(7)]);
var inst_49042 = (state_49069[(11)]);
var tmp49086 = inst_49033;
var inst_49033__$1 = tmp49086;
var inst_49034 = inst_49042;
var state_49069__$1 = (function (){var statearr_49090 = state_49069;
(statearr_49090[(7)] = inst_49033__$1);

(statearr_49090[(8)] = inst_49034);

return statearr_49090;
})();
var statearr_49091_49117 = state_49069__$1;
(statearr_49091_49117[(2)] = null);

(statearr_49091_49117[(1)] = (2));


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
});})(c__36744__auto___49103,out))
;
return ((function (switch__36723__auto__,c__36744__auto___49103,out){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_49095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49095[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_49095[(1)] = (1));

return statearr_49095;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_49069){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_49069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e49096){if((e49096 instanceof Object)){
var ex__36727__auto__ = e49096;
var statearr_49097_49118 = state_49069;
(statearr_49097_49118[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49119 = state_49069;
state_49069 = G__49119;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_49069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_49069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___49103,out))
})();
var state__36746__auto__ = (function (){var statearr_49098 = f__36745__auto__.call(null);
(statearr_49098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___49103);

return statearr_49098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___49103,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49120 = [];
var len__33026__auto___49194 = arguments.length;
var i__33027__auto___49195 = (0);
while(true){
if((i__33027__auto___49195 < len__33026__auto___49194)){
args49120.push((arguments[i__33027__auto___49195]));

var G__49196 = (i__33027__auto___49195 + (1));
i__33027__auto___49195 = G__49196;
continue;
} else {
}
break;
}

var G__49122 = args49120.length;
switch (G__49122) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49120.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36744__auto___49198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___49198,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___49198,out){
return (function (state_49164){
var state_val_49165 = (state_49164[(1)]);
if((state_val_49165 === (7))){
var inst_49160 = (state_49164[(2)]);
var state_49164__$1 = state_49164;
var statearr_49166_49199 = state_49164__$1;
(statearr_49166_49199[(2)] = inst_49160);

(statearr_49166_49199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (1))){
var inst_49123 = [];
var inst_49124 = inst_49123;
var inst_49125 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49164__$1 = (function (){var statearr_49167 = state_49164;
(statearr_49167[(7)] = inst_49124);

(statearr_49167[(8)] = inst_49125);

return statearr_49167;
})();
var statearr_49168_49200 = state_49164__$1;
(statearr_49168_49200[(2)] = null);

(statearr_49168_49200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (4))){
var inst_49128 = (state_49164[(9)]);
var inst_49128__$1 = (state_49164[(2)]);
var inst_49129 = (inst_49128__$1 == null);
var inst_49130 = cljs.core.not.call(null,inst_49129);
var state_49164__$1 = (function (){var statearr_49169 = state_49164;
(statearr_49169[(9)] = inst_49128__$1);

return statearr_49169;
})();
if(inst_49130){
var statearr_49170_49201 = state_49164__$1;
(statearr_49170_49201[(1)] = (5));

} else {
var statearr_49171_49202 = state_49164__$1;
(statearr_49171_49202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (15))){
var inst_49154 = (state_49164[(2)]);
var state_49164__$1 = state_49164;
var statearr_49172_49203 = state_49164__$1;
(statearr_49172_49203[(2)] = inst_49154);

(statearr_49172_49203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (13))){
var state_49164__$1 = state_49164;
var statearr_49173_49204 = state_49164__$1;
(statearr_49173_49204[(2)] = null);

(statearr_49173_49204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (6))){
var inst_49124 = (state_49164[(7)]);
var inst_49149 = inst_49124.length;
var inst_49150 = (inst_49149 > (0));
var state_49164__$1 = state_49164;
if(cljs.core.truth_(inst_49150)){
var statearr_49174_49205 = state_49164__$1;
(statearr_49174_49205[(1)] = (12));

} else {
var statearr_49175_49206 = state_49164__$1;
(statearr_49175_49206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (3))){
var inst_49162 = (state_49164[(2)]);
var state_49164__$1 = state_49164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49164__$1,inst_49162);
} else {
if((state_val_49165 === (12))){
var inst_49124 = (state_49164[(7)]);
var inst_49152 = cljs.core.vec.call(null,inst_49124);
var state_49164__$1 = state_49164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49164__$1,(15),out,inst_49152);
} else {
if((state_val_49165 === (2))){
var state_49164__$1 = state_49164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49164__$1,(4),ch);
} else {
if((state_val_49165 === (11))){
var inst_49128 = (state_49164[(9)]);
var inst_49132 = (state_49164[(10)]);
var inst_49142 = (state_49164[(2)]);
var inst_49143 = [];
var inst_49144 = inst_49143.push(inst_49128);
var inst_49124 = inst_49143;
var inst_49125 = inst_49132;
var state_49164__$1 = (function (){var statearr_49176 = state_49164;
(statearr_49176[(11)] = inst_49144);

(statearr_49176[(12)] = inst_49142);

(statearr_49176[(7)] = inst_49124);

(statearr_49176[(8)] = inst_49125);

return statearr_49176;
})();
var statearr_49177_49207 = state_49164__$1;
(statearr_49177_49207[(2)] = null);

(statearr_49177_49207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (9))){
var inst_49124 = (state_49164[(7)]);
var inst_49140 = cljs.core.vec.call(null,inst_49124);
var state_49164__$1 = state_49164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49164__$1,(11),out,inst_49140);
} else {
if((state_val_49165 === (5))){
var inst_49128 = (state_49164[(9)]);
var inst_49125 = (state_49164[(8)]);
var inst_49132 = (state_49164[(10)]);
var inst_49132__$1 = f.call(null,inst_49128);
var inst_49133 = cljs.core._EQ_.call(null,inst_49132__$1,inst_49125);
var inst_49134 = cljs.core.keyword_identical_QMARK_.call(null,inst_49125,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49135 = (inst_49133) || (inst_49134);
var state_49164__$1 = (function (){var statearr_49178 = state_49164;
(statearr_49178[(10)] = inst_49132__$1);

return statearr_49178;
})();
if(cljs.core.truth_(inst_49135)){
var statearr_49179_49208 = state_49164__$1;
(statearr_49179_49208[(1)] = (8));

} else {
var statearr_49180_49209 = state_49164__$1;
(statearr_49180_49209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (14))){
var inst_49157 = (state_49164[(2)]);
var inst_49158 = cljs.core.async.close_BANG_.call(null,out);
var state_49164__$1 = (function (){var statearr_49182 = state_49164;
(statearr_49182[(13)] = inst_49157);

return statearr_49182;
})();
var statearr_49183_49210 = state_49164__$1;
(statearr_49183_49210[(2)] = inst_49158);

(statearr_49183_49210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (10))){
var inst_49147 = (state_49164[(2)]);
var state_49164__$1 = state_49164;
var statearr_49184_49211 = state_49164__$1;
(statearr_49184_49211[(2)] = inst_49147);

(statearr_49184_49211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49165 === (8))){
var inst_49128 = (state_49164[(9)]);
var inst_49124 = (state_49164[(7)]);
var inst_49132 = (state_49164[(10)]);
var inst_49137 = inst_49124.push(inst_49128);
var tmp49181 = inst_49124;
var inst_49124__$1 = tmp49181;
var inst_49125 = inst_49132;
var state_49164__$1 = (function (){var statearr_49185 = state_49164;
(statearr_49185[(14)] = inst_49137);

(statearr_49185[(7)] = inst_49124__$1);

(statearr_49185[(8)] = inst_49125);

return statearr_49185;
})();
var statearr_49186_49212 = state_49164__$1;
(statearr_49186_49212[(2)] = null);

(statearr_49186_49212[(1)] = (2));


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
});})(c__36744__auto___49198,out))
;
return ((function (switch__36723__auto__,c__36744__auto___49198,out){
return (function() {
var cljs$core$async$state_machine__36724__auto__ = null;
var cljs$core$async$state_machine__36724__auto____0 = (function (){
var statearr_49190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49190[(0)] = cljs$core$async$state_machine__36724__auto__);

(statearr_49190[(1)] = (1));

return statearr_49190;
});
var cljs$core$async$state_machine__36724__auto____1 = (function (state_49164){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_49164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e49191){if((e49191 instanceof Object)){
var ex__36727__auto__ = e49191;
var statearr_49192_49213 = state_49164;
(statearr_49192_49213[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49214 = state_49164;
state_49164 = G__49214;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
cljs$core$async$state_machine__36724__auto__ = function(state_49164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36724__auto____1.call(this,state_49164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36724__auto____0;
cljs$core$async$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36724__auto____1;
return cljs$core$async$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___49198,out))
})();
var state__36746__auto__ = (function (){var statearr_49193 = f__36745__auto__.call(null);
(statearr_49193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___49198);

return statearr_49193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___49198,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491001402837