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
var args68474 = [];
var len__35573__auto___68480 = arguments.length;
var i__35574__auto___68481 = (0);
while(true){
if((i__35574__auto___68481 < len__35573__auto___68480)){
args68474.push((arguments[i__35574__auto___68481]));

var G__68482 = (i__35574__auto___68481 + (1));
i__35574__auto___68481 = G__68482;
continue;
} else {
}
break;
}

var G__68476 = args68474.length;
switch (G__68476) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68474.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async68477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68477 = (function (f,blockable,meta68478){
this.f = f;
this.blockable = blockable;
this.meta68478 = meta68478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async68477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68479,meta68478__$1){
var self__ = this;
var _68479__$1 = this;
return (new cljs.core.async.t_cljs$core$async68477(self__.f,self__.blockable,meta68478__$1));
});


cljs.core.async.t_cljs$core$async68477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68479){
var self__ = this;
var _68479__$1 = this;
return self__.meta68478;
});


cljs.core.async.t_cljs$core$async68477.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async68477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async68477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async68477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async68477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68478","meta68478",-841041804,null)], null);
});

cljs.core.async.t_cljs$core$async68477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68477";

cljs.core.async.t_cljs$core$async68477.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async68477");
});

cljs.core.async.__GT_t_cljs$core$async68477 = (function cljs$core$async$__GT_t_cljs$core$async68477(f__$1,blockable__$1,meta68478){
return (new cljs.core.async.t_cljs$core$async68477(f__$1,blockable__$1,meta68478));
});

}

return (new cljs.core.async.t_cljs$core$async68477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args68486 = [];
var len__35573__auto___68489 = arguments.length;
var i__35574__auto___68490 = (0);
while(true){
if((i__35574__auto___68490 < len__35573__auto___68489)){
args68486.push((arguments[i__35574__auto___68490]));

var G__68491 = (i__35574__auto___68490 + (1));
i__35574__auto___68490 = G__68491;
continue;
} else {
}
break;
}

var G__68488 = args68486.length;
switch (G__68488) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68486.length)].join('')));

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
var args68493 = [];
var len__35573__auto___68496 = arguments.length;
var i__35574__auto___68497 = (0);
while(true){
if((i__35574__auto___68497 < len__35573__auto___68496)){
args68493.push((arguments[i__35574__auto___68497]));

var G__68498 = (i__35574__auto___68497 + (1));
i__35574__auto___68497 = G__68498;
continue;
} else {
}
break;
}

var G__68495 = args68493.length;
switch (G__68495) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68493.length)].join('')));

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
var args68500 = [];
var len__35573__auto___68503 = arguments.length;
var i__35574__auto___68504 = (0);
while(true){
if((i__35574__auto___68504 < len__35573__auto___68503)){
args68500.push((arguments[i__35574__auto___68504]));

var G__68505 = (i__35574__auto___68504 + (1));
i__35574__auto___68504 = G__68505;
continue;
} else {
}
break;
}

var G__68502 = args68500.length;
switch (G__68502) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68500.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_68507 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_68507);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_68507,ret){
return (function (){
return fn1.call(null,val_68507);
});})(val_68507,ret))
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
var args68508 = [];
var len__35573__auto___68511 = arguments.length;
var i__35574__auto___68512 = (0);
while(true){
if((i__35574__auto___68512 < len__35573__auto___68511)){
args68508.push((arguments[i__35574__auto___68512]));

var G__68513 = (i__35574__auto___68512 + (1));
i__35574__auto___68512 = G__68513;
continue;
} else {
}
break;
}

var G__68510 = args68508.length;
switch (G__68510) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68508.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6726__auto__)){
var ret = temp__6726__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6726__auto__)){
var retb = temp__6726__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6726__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6726__auto__))
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
var n__35403__auto___68515 = n;
var x_68516 = (0);
while(true){
if((x_68516 < n__35403__auto___68515)){
(a[x_68516] = (0));

var G__68517 = (x_68516 + (1));
x_68516 = G__68517;
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

var G__68518 = (i + (1));
i = G__68518;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async68522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68522 = (function (alt_flag,flag,meta68523){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta68523 = meta68523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async68522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_68524,meta68523__$1){
var self__ = this;
var _68524__$1 = this;
return (new cljs.core.async.t_cljs$core$async68522(self__.alt_flag,self__.flag,meta68523__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async68522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_68524){
var self__ = this;
var _68524__$1 = this;
return self__.meta68523;
});})(flag))
;


cljs.core.async.t_cljs$core$async68522.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async68522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async68522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async68522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68522.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68523","meta68523",1404052880,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async68522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68522";

cljs.core.async.t_cljs$core$async68522.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async68522");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async68522 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async68522(alt_flag__$1,flag__$1,meta68523){
return (new cljs.core.async.t_cljs$core$async68522(alt_flag__$1,flag__$1,meta68523));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async68522(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async68528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68528 = (function (alt_handler,flag,cb,meta68529){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta68529 = meta68529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async68528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68530,meta68529__$1){
var self__ = this;
var _68530__$1 = this;
return (new cljs.core.async.t_cljs$core$async68528(self__.alt_handler,self__.flag,self__.cb,meta68529__$1));
});


cljs.core.async.t_cljs$core$async68528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68530){
var self__ = this;
var _68530__$1 = this;
return self__.meta68529;
});


cljs.core.async.t_cljs$core$async68528.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async68528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async68528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async68528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async68528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68529","meta68529",1432372258,null)], null);
});

cljs.core.async.t_cljs$core$async68528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68528";

cljs.core.async.t_cljs$core$async68528.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async68528");
});

cljs.core.async.__GT_t_cljs$core$async68528 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async68528(alt_handler__$1,flag__$1,cb__$1,meta68529){
return (new cljs.core.async.t_cljs$core$async68528(alt_handler__$1,flag__$1,cb__$1,meta68529));
});

}

return (new cljs.core.async.t_cljs$core$async68528(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__68531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68531_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68532_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34390__auto__ = wport;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return port;
}
})()], null));
} else {
var G__68533 = (i + (1));
i = G__68533;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34390__auto__ = ret;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6728__auto__ = (function (){var and__34378__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var got = temp__6728__auto__;
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
var args__35580__auto__ = [];
var len__35573__auto___68539 = arguments.length;
var i__35574__auto___68540 = (0);
while(true){
if((i__35574__auto___68540 < len__35573__auto___68539)){
args__35580__auto__.push((arguments[i__35574__auto___68540]));

var G__68541 = (i__35574__auto___68540 + (1));
i__35574__auto___68540 = G__68541;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((1) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35581__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68536){
var map__68537 = p__68536;
var map__68537__$1 = ((((!((map__68537 == null)))?((((map__68537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68537):map__68537);
var opts = map__68537__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68534){
var G__68535 = cljs.core.first.call(null,seq68534);
var seq68534__$1 = cljs.core.next.call(null,seq68534);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68535,seq68534__$1);
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
var args68542 = [];
var len__35573__auto___68592 = arguments.length;
var i__35574__auto___68593 = (0);
while(true){
if((i__35574__auto___68593 < len__35573__auto___68592)){
args68542.push((arguments[i__35574__auto___68593]));

var G__68594 = (i__35574__auto___68593 + (1));
i__35574__auto___68593 = G__68594;
continue;
} else {
}
break;
}

var G__68544 = args68542.length;
switch (G__68544) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68542.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43337__auto___68596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___68596){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___68596){
return (function (state_68568){
var state_val_68569 = (state_68568[(1)]);
if((state_val_68569 === (7))){
var inst_68564 = (state_68568[(2)]);
var state_68568__$1 = state_68568;
var statearr_68570_68597 = state_68568__$1;
(statearr_68570_68597[(2)] = inst_68564);

(statearr_68570_68597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (1))){
var state_68568__$1 = state_68568;
var statearr_68571_68598 = state_68568__$1;
(statearr_68571_68598[(2)] = null);

(statearr_68571_68598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (4))){
var inst_68547 = (state_68568[(7)]);
var inst_68547__$1 = (state_68568[(2)]);
var inst_68548 = (inst_68547__$1 == null);
var state_68568__$1 = (function (){var statearr_68572 = state_68568;
(statearr_68572[(7)] = inst_68547__$1);

return statearr_68572;
})();
if(cljs.core.truth_(inst_68548)){
var statearr_68573_68599 = state_68568__$1;
(statearr_68573_68599[(1)] = (5));

} else {
var statearr_68574_68600 = state_68568__$1;
(statearr_68574_68600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (13))){
var state_68568__$1 = state_68568;
var statearr_68575_68601 = state_68568__$1;
(statearr_68575_68601[(2)] = null);

(statearr_68575_68601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (6))){
var inst_68547 = (state_68568[(7)]);
var state_68568__$1 = state_68568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68568__$1,(11),to,inst_68547);
} else {
if((state_val_68569 === (3))){
var inst_68566 = (state_68568[(2)]);
var state_68568__$1 = state_68568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68568__$1,inst_68566);
} else {
if((state_val_68569 === (12))){
var state_68568__$1 = state_68568;
var statearr_68576_68602 = state_68568__$1;
(statearr_68576_68602[(2)] = null);

(statearr_68576_68602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (2))){
var state_68568__$1 = state_68568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68568__$1,(4),from);
} else {
if((state_val_68569 === (11))){
var inst_68557 = (state_68568[(2)]);
var state_68568__$1 = state_68568;
if(cljs.core.truth_(inst_68557)){
var statearr_68577_68603 = state_68568__$1;
(statearr_68577_68603[(1)] = (12));

} else {
var statearr_68578_68604 = state_68568__$1;
(statearr_68578_68604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (9))){
var state_68568__$1 = state_68568;
var statearr_68579_68605 = state_68568__$1;
(statearr_68579_68605[(2)] = null);

(statearr_68579_68605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (5))){
var state_68568__$1 = state_68568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68580_68606 = state_68568__$1;
(statearr_68580_68606[(1)] = (8));

} else {
var statearr_68581_68607 = state_68568__$1;
(statearr_68581_68607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (14))){
var inst_68562 = (state_68568[(2)]);
var state_68568__$1 = state_68568;
var statearr_68582_68608 = state_68568__$1;
(statearr_68582_68608[(2)] = inst_68562);

(statearr_68582_68608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (10))){
var inst_68554 = (state_68568[(2)]);
var state_68568__$1 = state_68568;
var statearr_68583_68609 = state_68568__$1;
(statearr_68583_68609[(2)] = inst_68554);

(statearr_68583_68609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68569 === (8))){
var inst_68551 = cljs.core.async.close_BANG_.call(null,to);
var state_68568__$1 = state_68568;
var statearr_68584_68610 = state_68568__$1;
(statearr_68584_68610[(2)] = inst_68551);

(statearr_68584_68610[(1)] = (10));


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
});})(c__43337__auto___68596))
;
return ((function (switch__43223__auto__,c__43337__auto___68596){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_68588 = [null,null,null,null,null,null,null,null];
(statearr_68588[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_68588[(1)] = (1));

return statearr_68588;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_68568){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_68568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e68589){if((e68589 instanceof Object)){
var ex__43227__auto__ = e68589;
var statearr_68590_68611 = state_68568;
(statearr_68590_68611[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68612 = state_68568;
state_68568 = G__68612;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_68568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_68568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___68596))
})();
var state__43339__auto__ = (function (){var statearr_68591 = f__43338__auto__.call(null);
(statearr_68591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___68596);

return statearr_68591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___68596))
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
return (function (p__68800){
var vec__68801 = p__68800;
var v = cljs.core.nth.call(null,vec__68801,(0),null);
var p = cljs.core.nth.call(null,vec__68801,(1),null);
var job = vec__68801;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43337__auto___68987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___68987,res,vec__68801,v,p,job,jobs,results){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___68987,res,vec__68801,v,p,job,jobs,results){
return (function (state_68808){
var state_val_68809 = (state_68808[(1)]);
if((state_val_68809 === (1))){
var state_68808__$1 = state_68808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68808__$1,(2),res,v);
} else {
if((state_val_68809 === (2))){
var inst_68805 = (state_68808[(2)]);
var inst_68806 = cljs.core.async.close_BANG_.call(null,res);
var state_68808__$1 = (function (){var statearr_68810 = state_68808;
(statearr_68810[(7)] = inst_68805);

return statearr_68810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68808__$1,inst_68806);
} else {
return null;
}
}
});})(c__43337__auto___68987,res,vec__68801,v,p,job,jobs,results))
;
return ((function (switch__43223__auto__,c__43337__auto___68987,res,vec__68801,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_68814 = [null,null,null,null,null,null,null,null];
(statearr_68814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_68814[(1)] = (1));

return statearr_68814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_68808){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_68808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e68815){if((e68815 instanceof Object)){
var ex__43227__auto__ = e68815;
var statearr_68816_68988 = state_68808;
(statearr_68816_68988[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68989 = state_68808;
state_68808 = G__68989;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_68808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_68808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___68987,res,vec__68801,v,p,job,jobs,results))
})();
var state__43339__auto__ = (function (){var statearr_68817 = f__43338__auto__.call(null);
(statearr_68817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___68987);

return statearr_68817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___68987,res,vec__68801,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__68818){
var vec__68819 = p__68818;
var v = cljs.core.nth.call(null,vec__68819,(0),null);
var p = cljs.core.nth.call(null,vec__68819,(1),null);
var job = vec__68819;
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
var n__35403__auto___68990 = n;
var __68991 = (0);
while(true){
if((__68991 < n__35403__auto___68990)){
var G__68822_68992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__68822_68992) {
case "compute":
var c__43337__auto___68994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68991,c__43337__auto___68994,G__68822_68992,n__35403__auto___68990,jobs,results,process,async){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (__68991,c__43337__auto___68994,G__68822_68992,n__35403__auto___68990,jobs,results,process,async){
return (function (state_68835){
var state_val_68836 = (state_68835[(1)]);
if((state_val_68836 === (1))){
var state_68835__$1 = state_68835;
var statearr_68837_68995 = state_68835__$1;
(statearr_68837_68995[(2)] = null);

(statearr_68837_68995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68836 === (2))){
var state_68835__$1 = state_68835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68835__$1,(4),jobs);
} else {
if((state_val_68836 === (3))){
var inst_68833 = (state_68835[(2)]);
var state_68835__$1 = state_68835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68835__$1,inst_68833);
} else {
if((state_val_68836 === (4))){
var inst_68825 = (state_68835[(2)]);
var inst_68826 = process.call(null,inst_68825);
var state_68835__$1 = state_68835;
if(cljs.core.truth_(inst_68826)){
var statearr_68838_68996 = state_68835__$1;
(statearr_68838_68996[(1)] = (5));

} else {
var statearr_68839_68997 = state_68835__$1;
(statearr_68839_68997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68836 === (5))){
var state_68835__$1 = state_68835;
var statearr_68840_68998 = state_68835__$1;
(statearr_68840_68998[(2)] = null);

(statearr_68840_68998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68836 === (6))){
var state_68835__$1 = state_68835;
var statearr_68841_68999 = state_68835__$1;
(statearr_68841_68999[(2)] = null);

(statearr_68841_68999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68836 === (7))){
var inst_68831 = (state_68835[(2)]);
var state_68835__$1 = state_68835;
var statearr_68842_69000 = state_68835__$1;
(statearr_68842_69000[(2)] = inst_68831);

(statearr_68842_69000[(1)] = (3));


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
});})(__68991,c__43337__auto___68994,G__68822_68992,n__35403__auto___68990,jobs,results,process,async))
;
return ((function (__68991,switch__43223__auto__,c__43337__auto___68994,G__68822_68992,n__35403__auto___68990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_68846 = [null,null,null,null,null,null,null];
(statearr_68846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_68846[(1)] = (1));

return statearr_68846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_68835){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_68835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e68847){if((e68847 instanceof Object)){
var ex__43227__auto__ = e68847;
var statearr_68848_69001 = state_68835;
(statearr_68848_69001[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69002 = state_68835;
state_68835 = G__69002;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_68835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_68835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(__68991,switch__43223__auto__,c__43337__auto___68994,G__68822_68992,n__35403__auto___68990,jobs,results,process,async))
})();
var state__43339__auto__ = (function (){var statearr_68849 = f__43338__auto__.call(null);
(statearr_68849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___68994);

return statearr_68849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(__68991,c__43337__auto___68994,G__68822_68992,n__35403__auto___68990,jobs,results,process,async))
);


break;
case "async":
var c__43337__auto___69003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68991,c__43337__auto___69003,G__68822_68992,n__35403__auto___68990,jobs,results,process,async){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (__68991,c__43337__auto___69003,G__68822_68992,n__35403__auto___68990,jobs,results,process,async){
return (function (state_68862){
var state_val_68863 = (state_68862[(1)]);
if((state_val_68863 === (1))){
var state_68862__$1 = state_68862;
var statearr_68864_69004 = state_68862__$1;
(statearr_68864_69004[(2)] = null);

(statearr_68864_69004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68863 === (2))){
var state_68862__$1 = state_68862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68862__$1,(4),jobs);
} else {
if((state_val_68863 === (3))){
var inst_68860 = (state_68862[(2)]);
var state_68862__$1 = state_68862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68862__$1,inst_68860);
} else {
if((state_val_68863 === (4))){
var inst_68852 = (state_68862[(2)]);
var inst_68853 = async.call(null,inst_68852);
var state_68862__$1 = state_68862;
if(cljs.core.truth_(inst_68853)){
var statearr_68865_69005 = state_68862__$1;
(statearr_68865_69005[(1)] = (5));

} else {
var statearr_68866_69006 = state_68862__$1;
(statearr_68866_69006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68863 === (5))){
var state_68862__$1 = state_68862;
var statearr_68867_69007 = state_68862__$1;
(statearr_68867_69007[(2)] = null);

(statearr_68867_69007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68863 === (6))){
var state_68862__$1 = state_68862;
var statearr_68868_69008 = state_68862__$1;
(statearr_68868_69008[(2)] = null);

(statearr_68868_69008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68863 === (7))){
var inst_68858 = (state_68862[(2)]);
var state_68862__$1 = state_68862;
var statearr_68869_69009 = state_68862__$1;
(statearr_68869_69009[(2)] = inst_68858);

(statearr_68869_69009[(1)] = (3));


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
});})(__68991,c__43337__auto___69003,G__68822_68992,n__35403__auto___68990,jobs,results,process,async))
;
return ((function (__68991,switch__43223__auto__,c__43337__auto___69003,G__68822_68992,n__35403__auto___68990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_68873 = [null,null,null,null,null,null,null];
(statearr_68873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_68873[(1)] = (1));

return statearr_68873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_68862){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_68862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e68874){if((e68874 instanceof Object)){
var ex__43227__auto__ = e68874;
var statearr_68875_69010 = state_68862;
(statearr_68875_69010[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69011 = state_68862;
state_68862 = G__69011;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_68862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_68862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(__68991,switch__43223__auto__,c__43337__auto___69003,G__68822_68992,n__35403__auto___68990,jobs,results,process,async))
})();
var state__43339__auto__ = (function (){var statearr_68876 = f__43338__auto__.call(null);
(statearr_68876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___69003);

return statearr_68876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(__68991,c__43337__auto___69003,G__68822_68992,n__35403__auto___68990,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__69012 = (__68991 + (1));
__68991 = G__69012;
continue;
} else {
}
break;
}

var c__43337__auto___69013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___69013,jobs,results,process,async){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___69013,jobs,results,process,async){
return (function (state_68898){
var state_val_68899 = (state_68898[(1)]);
if((state_val_68899 === (1))){
var state_68898__$1 = state_68898;
var statearr_68900_69014 = state_68898__$1;
(statearr_68900_69014[(2)] = null);

(statearr_68900_69014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68899 === (2))){
var state_68898__$1 = state_68898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68898__$1,(4),from);
} else {
if((state_val_68899 === (3))){
var inst_68896 = (state_68898[(2)]);
var state_68898__$1 = state_68898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68898__$1,inst_68896);
} else {
if((state_val_68899 === (4))){
var inst_68879 = (state_68898[(7)]);
var inst_68879__$1 = (state_68898[(2)]);
var inst_68880 = (inst_68879__$1 == null);
var state_68898__$1 = (function (){var statearr_68901 = state_68898;
(statearr_68901[(7)] = inst_68879__$1);

return statearr_68901;
})();
if(cljs.core.truth_(inst_68880)){
var statearr_68902_69015 = state_68898__$1;
(statearr_68902_69015[(1)] = (5));

} else {
var statearr_68903_69016 = state_68898__$1;
(statearr_68903_69016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68899 === (5))){
var inst_68882 = cljs.core.async.close_BANG_.call(null,jobs);
var state_68898__$1 = state_68898;
var statearr_68904_69017 = state_68898__$1;
(statearr_68904_69017[(2)] = inst_68882);

(statearr_68904_69017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68899 === (6))){
var inst_68879 = (state_68898[(7)]);
var inst_68884 = (state_68898[(8)]);
var inst_68884__$1 = cljs.core.async.chan.call(null,(1));
var inst_68885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68886 = [inst_68879,inst_68884__$1];
var inst_68887 = (new cljs.core.PersistentVector(null,2,(5),inst_68885,inst_68886,null));
var state_68898__$1 = (function (){var statearr_68905 = state_68898;
(statearr_68905[(8)] = inst_68884__$1);

return statearr_68905;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68898__$1,(8),jobs,inst_68887);
} else {
if((state_val_68899 === (7))){
var inst_68894 = (state_68898[(2)]);
var state_68898__$1 = state_68898;
var statearr_68906_69018 = state_68898__$1;
(statearr_68906_69018[(2)] = inst_68894);

(statearr_68906_69018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68899 === (8))){
var inst_68884 = (state_68898[(8)]);
var inst_68889 = (state_68898[(2)]);
var state_68898__$1 = (function (){var statearr_68907 = state_68898;
(statearr_68907[(9)] = inst_68889);

return statearr_68907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68898__$1,(9),results,inst_68884);
} else {
if((state_val_68899 === (9))){
var inst_68891 = (state_68898[(2)]);
var state_68898__$1 = (function (){var statearr_68908 = state_68898;
(statearr_68908[(10)] = inst_68891);

return statearr_68908;
})();
var statearr_68909_69019 = state_68898__$1;
(statearr_68909_69019[(2)] = null);

(statearr_68909_69019[(1)] = (2));


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
});})(c__43337__auto___69013,jobs,results,process,async))
;
return ((function (switch__43223__auto__,c__43337__auto___69013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_68913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_68913[(1)] = (1));

return statearr_68913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_68898){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_68898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e68914){if((e68914 instanceof Object)){
var ex__43227__auto__ = e68914;
var statearr_68915_69020 = state_68898;
(statearr_68915_69020[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69021 = state_68898;
state_68898 = G__69021;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_68898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_68898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___69013,jobs,results,process,async))
})();
var state__43339__auto__ = (function (){var statearr_68916 = f__43338__auto__.call(null);
(statearr_68916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___69013);

return statearr_68916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___69013,jobs,results,process,async))
);


var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,jobs,results,process,async){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,jobs,results,process,async){
return (function (state_68954){
var state_val_68955 = (state_68954[(1)]);
if((state_val_68955 === (7))){
var inst_68950 = (state_68954[(2)]);
var state_68954__$1 = state_68954;
var statearr_68956_69022 = state_68954__$1;
(statearr_68956_69022[(2)] = inst_68950);

(statearr_68956_69022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (20))){
var state_68954__$1 = state_68954;
var statearr_68957_69023 = state_68954__$1;
(statearr_68957_69023[(2)] = null);

(statearr_68957_69023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (1))){
var state_68954__$1 = state_68954;
var statearr_68958_69024 = state_68954__$1;
(statearr_68958_69024[(2)] = null);

(statearr_68958_69024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (4))){
var inst_68919 = (state_68954[(7)]);
var inst_68919__$1 = (state_68954[(2)]);
var inst_68920 = (inst_68919__$1 == null);
var state_68954__$1 = (function (){var statearr_68959 = state_68954;
(statearr_68959[(7)] = inst_68919__$1);

return statearr_68959;
})();
if(cljs.core.truth_(inst_68920)){
var statearr_68960_69025 = state_68954__$1;
(statearr_68960_69025[(1)] = (5));

} else {
var statearr_68961_69026 = state_68954__$1;
(statearr_68961_69026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (15))){
var inst_68932 = (state_68954[(8)]);
var state_68954__$1 = state_68954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68954__$1,(18),to,inst_68932);
} else {
if((state_val_68955 === (21))){
var inst_68945 = (state_68954[(2)]);
var state_68954__$1 = state_68954;
var statearr_68962_69027 = state_68954__$1;
(statearr_68962_69027[(2)] = inst_68945);

(statearr_68962_69027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (13))){
var inst_68947 = (state_68954[(2)]);
var state_68954__$1 = (function (){var statearr_68963 = state_68954;
(statearr_68963[(9)] = inst_68947);

return statearr_68963;
})();
var statearr_68964_69028 = state_68954__$1;
(statearr_68964_69028[(2)] = null);

(statearr_68964_69028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (6))){
var inst_68919 = (state_68954[(7)]);
var state_68954__$1 = state_68954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68954__$1,(11),inst_68919);
} else {
if((state_val_68955 === (17))){
var inst_68940 = (state_68954[(2)]);
var state_68954__$1 = state_68954;
if(cljs.core.truth_(inst_68940)){
var statearr_68965_69029 = state_68954__$1;
(statearr_68965_69029[(1)] = (19));

} else {
var statearr_68966_69030 = state_68954__$1;
(statearr_68966_69030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (3))){
var inst_68952 = (state_68954[(2)]);
var state_68954__$1 = state_68954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68954__$1,inst_68952);
} else {
if((state_val_68955 === (12))){
var inst_68929 = (state_68954[(10)]);
var state_68954__$1 = state_68954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68954__$1,(14),inst_68929);
} else {
if((state_val_68955 === (2))){
var state_68954__$1 = state_68954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68954__$1,(4),results);
} else {
if((state_val_68955 === (19))){
var state_68954__$1 = state_68954;
var statearr_68967_69031 = state_68954__$1;
(statearr_68967_69031[(2)] = null);

(statearr_68967_69031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (11))){
var inst_68929 = (state_68954[(2)]);
var state_68954__$1 = (function (){var statearr_68968 = state_68954;
(statearr_68968[(10)] = inst_68929);

return statearr_68968;
})();
var statearr_68969_69032 = state_68954__$1;
(statearr_68969_69032[(2)] = null);

(statearr_68969_69032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (9))){
var state_68954__$1 = state_68954;
var statearr_68970_69033 = state_68954__$1;
(statearr_68970_69033[(2)] = null);

(statearr_68970_69033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (5))){
var state_68954__$1 = state_68954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68971_69034 = state_68954__$1;
(statearr_68971_69034[(1)] = (8));

} else {
var statearr_68972_69035 = state_68954__$1;
(statearr_68972_69035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (14))){
var inst_68934 = (state_68954[(11)]);
var inst_68932 = (state_68954[(8)]);
var inst_68932__$1 = (state_68954[(2)]);
var inst_68933 = (inst_68932__$1 == null);
var inst_68934__$1 = cljs.core.not.call(null,inst_68933);
var state_68954__$1 = (function (){var statearr_68973 = state_68954;
(statearr_68973[(11)] = inst_68934__$1);

(statearr_68973[(8)] = inst_68932__$1);

return statearr_68973;
})();
if(inst_68934__$1){
var statearr_68974_69036 = state_68954__$1;
(statearr_68974_69036[(1)] = (15));

} else {
var statearr_68975_69037 = state_68954__$1;
(statearr_68975_69037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (16))){
var inst_68934 = (state_68954[(11)]);
var state_68954__$1 = state_68954;
var statearr_68976_69038 = state_68954__$1;
(statearr_68976_69038[(2)] = inst_68934);

(statearr_68976_69038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (10))){
var inst_68926 = (state_68954[(2)]);
var state_68954__$1 = state_68954;
var statearr_68977_69039 = state_68954__$1;
(statearr_68977_69039[(2)] = inst_68926);

(statearr_68977_69039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (18))){
var inst_68937 = (state_68954[(2)]);
var state_68954__$1 = state_68954;
var statearr_68978_69040 = state_68954__$1;
(statearr_68978_69040[(2)] = inst_68937);

(statearr_68978_69040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68955 === (8))){
var inst_68923 = cljs.core.async.close_BANG_.call(null,to);
var state_68954__$1 = state_68954;
var statearr_68979_69041 = state_68954__$1;
(statearr_68979_69041[(2)] = inst_68923);

(statearr_68979_69041[(1)] = (10));


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
});})(c__43337__auto__,jobs,results,process,async))
;
return ((function (switch__43223__auto__,c__43337__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_68983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_68983[(1)] = (1));

return statearr_68983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_68954){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_68954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e68984){if((e68984 instanceof Object)){
var ex__43227__auto__ = e68984;
var statearr_68985_69042 = state_68954;
(statearr_68985_69042[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69043 = state_68954;
state_68954 = G__69043;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_68954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_68954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,jobs,results,process,async))
})();
var state__43339__auto__ = (function (){var statearr_68986 = f__43338__auto__.call(null);
(statearr_68986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_68986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,jobs,results,process,async))
);

return c__43337__auto__;
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
var args69044 = [];
var len__35573__auto___69047 = arguments.length;
var i__35574__auto___69048 = (0);
while(true){
if((i__35574__auto___69048 < len__35573__auto___69047)){
args69044.push((arguments[i__35574__auto___69048]));

var G__69049 = (i__35574__auto___69048 + (1));
i__35574__auto___69048 = G__69049;
continue;
} else {
}
break;
}

var G__69046 = args69044.length;
switch (G__69046) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69044.length)].join('')));

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
var args69051 = [];
var len__35573__auto___69054 = arguments.length;
var i__35574__auto___69055 = (0);
while(true){
if((i__35574__auto___69055 < len__35573__auto___69054)){
args69051.push((arguments[i__35574__auto___69055]));

var G__69056 = (i__35574__auto___69055 + (1));
i__35574__auto___69055 = G__69056;
continue;
} else {
}
break;
}

var G__69053 = args69051.length;
switch (G__69053) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69051.length)].join('')));

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
var args69058 = [];
var len__35573__auto___69111 = arguments.length;
var i__35574__auto___69112 = (0);
while(true){
if((i__35574__auto___69112 < len__35573__auto___69111)){
args69058.push((arguments[i__35574__auto___69112]));

var G__69113 = (i__35574__auto___69112 + (1));
i__35574__auto___69112 = G__69113;
continue;
} else {
}
break;
}

var G__69060 = args69058.length;
switch (G__69060) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69058.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__43337__auto___69115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___69115,tc,fc){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___69115,tc,fc){
return (function (state_69086){
var state_val_69087 = (state_69086[(1)]);
if((state_val_69087 === (7))){
var inst_69082 = (state_69086[(2)]);
var state_69086__$1 = state_69086;
var statearr_69088_69116 = state_69086__$1;
(statearr_69088_69116[(2)] = inst_69082);

(statearr_69088_69116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (1))){
var state_69086__$1 = state_69086;
var statearr_69089_69117 = state_69086__$1;
(statearr_69089_69117[(2)] = null);

(statearr_69089_69117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (4))){
var inst_69063 = (state_69086[(7)]);
var inst_69063__$1 = (state_69086[(2)]);
var inst_69064 = (inst_69063__$1 == null);
var state_69086__$1 = (function (){var statearr_69090 = state_69086;
(statearr_69090[(7)] = inst_69063__$1);

return statearr_69090;
})();
if(cljs.core.truth_(inst_69064)){
var statearr_69091_69118 = state_69086__$1;
(statearr_69091_69118[(1)] = (5));

} else {
var statearr_69092_69119 = state_69086__$1;
(statearr_69092_69119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (13))){
var state_69086__$1 = state_69086;
var statearr_69093_69120 = state_69086__$1;
(statearr_69093_69120[(2)] = null);

(statearr_69093_69120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (6))){
var inst_69063 = (state_69086[(7)]);
var inst_69069 = p.call(null,inst_69063);
var state_69086__$1 = state_69086;
if(cljs.core.truth_(inst_69069)){
var statearr_69094_69121 = state_69086__$1;
(statearr_69094_69121[(1)] = (9));

} else {
var statearr_69095_69122 = state_69086__$1;
(statearr_69095_69122[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (3))){
var inst_69084 = (state_69086[(2)]);
var state_69086__$1 = state_69086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69086__$1,inst_69084);
} else {
if((state_val_69087 === (12))){
var state_69086__$1 = state_69086;
var statearr_69096_69123 = state_69086__$1;
(statearr_69096_69123[(2)] = null);

(statearr_69096_69123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (2))){
var state_69086__$1 = state_69086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69086__$1,(4),ch);
} else {
if((state_val_69087 === (11))){
var inst_69063 = (state_69086[(7)]);
var inst_69073 = (state_69086[(2)]);
var state_69086__$1 = state_69086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69086__$1,(8),inst_69073,inst_69063);
} else {
if((state_val_69087 === (9))){
var state_69086__$1 = state_69086;
var statearr_69097_69124 = state_69086__$1;
(statearr_69097_69124[(2)] = tc);

(statearr_69097_69124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (5))){
var inst_69066 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69067 = cljs.core.async.close_BANG_.call(null,fc);
var state_69086__$1 = (function (){var statearr_69098 = state_69086;
(statearr_69098[(8)] = inst_69066);

return statearr_69098;
})();
var statearr_69099_69125 = state_69086__$1;
(statearr_69099_69125[(2)] = inst_69067);

(statearr_69099_69125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (14))){
var inst_69080 = (state_69086[(2)]);
var state_69086__$1 = state_69086;
var statearr_69100_69126 = state_69086__$1;
(statearr_69100_69126[(2)] = inst_69080);

(statearr_69100_69126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (10))){
var state_69086__$1 = state_69086;
var statearr_69101_69127 = state_69086__$1;
(statearr_69101_69127[(2)] = fc);

(statearr_69101_69127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69087 === (8))){
var inst_69075 = (state_69086[(2)]);
var state_69086__$1 = state_69086;
if(cljs.core.truth_(inst_69075)){
var statearr_69102_69128 = state_69086__$1;
(statearr_69102_69128[(1)] = (12));

} else {
var statearr_69103_69129 = state_69086__$1;
(statearr_69103_69129[(1)] = (13));

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
});})(c__43337__auto___69115,tc,fc))
;
return ((function (switch__43223__auto__,c__43337__auto___69115,tc,fc){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_69107 = [null,null,null,null,null,null,null,null,null];
(statearr_69107[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_69107[(1)] = (1));

return statearr_69107;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_69086){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_69086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e69108){if((e69108 instanceof Object)){
var ex__43227__auto__ = e69108;
var statearr_69109_69130 = state_69086;
(statearr_69109_69130[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69131 = state_69086;
state_69086 = G__69131;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_69086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_69086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___69115,tc,fc))
})();
var state__43339__auto__ = (function (){var statearr_69110 = f__43338__auto__.call(null);
(statearr_69110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___69115);

return statearr_69110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___69115,tc,fc))
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
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__){
return (function (state_69195){
var state_val_69196 = (state_69195[(1)]);
if((state_val_69196 === (7))){
var inst_69191 = (state_69195[(2)]);
var state_69195__$1 = state_69195;
var statearr_69197_69218 = state_69195__$1;
(statearr_69197_69218[(2)] = inst_69191);

(statearr_69197_69218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (1))){
var inst_69175 = init;
var state_69195__$1 = (function (){var statearr_69198 = state_69195;
(statearr_69198[(7)] = inst_69175);

return statearr_69198;
})();
var statearr_69199_69219 = state_69195__$1;
(statearr_69199_69219[(2)] = null);

(statearr_69199_69219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (4))){
var inst_69178 = (state_69195[(8)]);
var inst_69178__$1 = (state_69195[(2)]);
var inst_69179 = (inst_69178__$1 == null);
var state_69195__$1 = (function (){var statearr_69200 = state_69195;
(statearr_69200[(8)] = inst_69178__$1);

return statearr_69200;
})();
if(cljs.core.truth_(inst_69179)){
var statearr_69201_69220 = state_69195__$1;
(statearr_69201_69220[(1)] = (5));

} else {
var statearr_69202_69221 = state_69195__$1;
(statearr_69202_69221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (6))){
var inst_69182 = (state_69195[(9)]);
var inst_69175 = (state_69195[(7)]);
var inst_69178 = (state_69195[(8)]);
var inst_69182__$1 = f.call(null,inst_69175,inst_69178);
var inst_69183 = cljs.core.reduced_QMARK_.call(null,inst_69182__$1);
var state_69195__$1 = (function (){var statearr_69203 = state_69195;
(statearr_69203[(9)] = inst_69182__$1);

return statearr_69203;
})();
if(inst_69183){
var statearr_69204_69222 = state_69195__$1;
(statearr_69204_69222[(1)] = (8));

} else {
var statearr_69205_69223 = state_69195__$1;
(statearr_69205_69223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (3))){
var inst_69193 = (state_69195[(2)]);
var state_69195__$1 = state_69195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69195__$1,inst_69193);
} else {
if((state_val_69196 === (2))){
var state_69195__$1 = state_69195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69195__$1,(4),ch);
} else {
if((state_val_69196 === (9))){
var inst_69182 = (state_69195[(9)]);
var inst_69175 = inst_69182;
var state_69195__$1 = (function (){var statearr_69206 = state_69195;
(statearr_69206[(7)] = inst_69175);

return statearr_69206;
})();
var statearr_69207_69224 = state_69195__$1;
(statearr_69207_69224[(2)] = null);

(statearr_69207_69224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (5))){
var inst_69175 = (state_69195[(7)]);
var state_69195__$1 = state_69195;
var statearr_69208_69225 = state_69195__$1;
(statearr_69208_69225[(2)] = inst_69175);

(statearr_69208_69225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (10))){
var inst_69189 = (state_69195[(2)]);
var state_69195__$1 = state_69195;
var statearr_69209_69226 = state_69195__$1;
(statearr_69209_69226[(2)] = inst_69189);

(statearr_69209_69226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69196 === (8))){
var inst_69182 = (state_69195[(9)]);
var inst_69185 = cljs.core.deref.call(null,inst_69182);
var state_69195__$1 = state_69195;
var statearr_69210_69227 = state_69195__$1;
(statearr_69210_69227[(2)] = inst_69185);

(statearr_69210_69227[(1)] = (10));


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
});})(c__43337__auto__))
;
return ((function (switch__43223__auto__,c__43337__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43224__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43224__auto____0 = (function (){
var statearr_69214 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69214[(0)] = cljs$core$async$reduce_$_state_machine__43224__auto__);

(statearr_69214[(1)] = (1));

return statearr_69214;
});
var cljs$core$async$reduce_$_state_machine__43224__auto____1 = (function (state_69195){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_69195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e69215){if((e69215 instanceof Object)){
var ex__43227__auto__ = e69215;
var statearr_69216_69228 = state_69195;
(statearr_69216_69228[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69229 = state_69195;
state_69195 = G__69229;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43224__auto__ = function(state_69195){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43224__auto____1.call(this,state_69195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43224__auto____0;
cljs$core$async$reduce_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43224__auto____1;
return cljs$core$async$reduce_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__))
})();
var state__43339__auto__ = (function (){var statearr_69217 = f__43338__auto__.call(null);
(statearr_69217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_69217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__))
);

return c__43337__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,f__$1){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,f__$1){
return (function (state_69249){
var state_val_69250 = (state_69249[(1)]);
if((state_val_69250 === (1))){
var inst_69244 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_69249__$1 = state_69249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69249__$1,(2),inst_69244);
} else {
if((state_val_69250 === (2))){
var inst_69246 = (state_69249[(2)]);
var inst_69247 = f__$1.call(null,inst_69246);
var state_69249__$1 = state_69249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69249__$1,inst_69247);
} else {
return null;
}
}
});})(c__43337__auto__,f__$1))
;
return ((function (switch__43223__auto__,c__43337__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43224__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43224__auto____0 = (function (){
var statearr_69254 = [null,null,null,null,null,null,null];
(statearr_69254[(0)] = cljs$core$async$transduce_$_state_machine__43224__auto__);

(statearr_69254[(1)] = (1));

return statearr_69254;
});
var cljs$core$async$transduce_$_state_machine__43224__auto____1 = (function (state_69249){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_69249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e69255){if((e69255 instanceof Object)){
var ex__43227__auto__ = e69255;
var statearr_69256_69258 = state_69249;
(statearr_69256_69258[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69259 = state_69249;
state_69249 = G__69259;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43224__auto__ = function(state_69249){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43224__auto____1.call(this,state_69249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43224__auto____0;
cljs$core$async$transduce_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43224__auto____1;
return cljs$core$async$transduce_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,f__$1))
})();
var state__43339__auto__ = (function (){var statearr_69257 = f__43338__auto__.call(null);
(statearr_69257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_69257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,f__$1))
);

return c__43337__auto__;
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
var args69260 = [];
var len__35573__auto___69312 = arguments.length;
var i__35574__auto___69313 = (0);
while(true){
if((i__35574__auto___69313 < len__35573__auto___69312)){
args69260.push((arguments[i__35574__auto___69313]));

var G__69314 = (i__35574__auto___69313 + (1));
i__35574__auto___69313 = G__69314;
continue;
} else {
}
break;
}

var G__69262 = args69260.length;
switch (G__69262) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69260.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__){
return (function (state_69287){
var state_val_69288 = (state_69287[(1)]);
if((state_val_69288 === (7))){
var inst_69269 = (state_69287[(2)]);
var state_69287__$1 = state_69287;
var statearr_69289_69316 = state_69287__$1;
(statearr_69289_69316[(2)] = inst_69269);

(statearr_69289_69316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (1))){
var inst_69263 = cljs.core.seq.call(null,coll);
var inst_69264 = inst_69263;
var state_69287__$1 = (function (){var statearr_69290 = state_69287;
(statearr_69290[(7)] = inst_69264);

return statearr_69290;
})();
var statearr_69291_69317 = state_69287__$1;
(statearr_69291_69317[(2)] = null);

(statearr_69291_69317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (4))){
var inst_69264 = (state_69287[(7)]);
var inst_69267 = cljs.core.first.call(null,inst_69264);
var state_69287__$1 = state_69287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69287__$1,(7),ch,inst_69267);
} else {
if((state_val_69288 === (13))){
var inst_69281 = (state_69287[(2)]);
var state_69287__$1 = state_69287;
var statearr_69292_69318 = state_69287__$1;
(statearr_69292_69318[(2)] = inst_69281);

(statearr_69292_69318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (6))){
var inst_69272 = (state_69287[(2)]);
var state_69287__$1 = state_69287;
if(cljs.core.truth_(inst_69272)){
var statearr_69293_69319 = state_69287__$1;
(statearr_69293_69319[(1)] = (8));

} else {
var statearr_69294_69320 = state_69287__$1;
(statearr_69294_69320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (3))){
var inst_69285 = (state_69287[(2)]);
var state_69287__$1 = state_69287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69287__$1,inst_69285);
} else {
if((state_val_69288 === (12))){
var state_69287__$1 = state_69287;
var statearr_69295_69321 = state_69287__$1;
(statearr_69295_69321[(2)] = null);

(statearr_69295_69321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (2))){
var inst_69264 = (state_69287[(7)]);
var state_69287__$1 = state_69287;
if(cljs.core.truth_(inst_69264)){
var statearr_69296_69322 = state_69287__$1;
(statearr_69296_69322[(1)] = (4));

} else {
var statearr_69297_69323 = state_69287__$1;
(statearr_69297_69323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (11))){
var inst_69278 = cljs.core.async.close_BANG_.call(null,ch);
var state_69287__$1 = state_69287;
var statearr_69298_69324 = state_69287__$1;
(statearr_69298_69324[(2)] = inst_69278);

(statearr_69298_69324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (9))){
var state_69287__$1 = state_69287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69299_69325 = state_69287__$1;
(statearr_69299_69325[(1)] = (11));

} else {
var statearr_69300_69326 = state_69287__$1;
(statearr_69300_69326[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (5))){
var inst_69264 = (state_69287[(7)]);
var state_69287__$1 = state_69287;
var statearr_69301_69327 = state_69287__$1;
(statearr_69301_69327[(2)] = inst_69264);

(statearr_69301_69327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (10))){
var inst_69283 = (state_69287[(2)]);
var state_69287__$1 = state_69287;
var statearr_69302_69328 = state_69287__$1;
(statearr_69302_69328[(2)] = inst_69283);

(statearr_69302_69328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69288 === (8))){
var inst_69264 = (state_69287[(7)]);
var inst_69274 = cljs.core.next.call(null,inst_69264);
var inst_69264__$1 = inst_69274;
var state_69287__$1 = (function (){var statearr_69303 = state_69287;
(statearr_69303[(7)] = inst_69264__$1);

return statearr_69303;
})();
var statearr_69304_69329 = state_69287__$1;
(statearr_69304_69329[(2)] = null);

(statearr_69304_69329[(1)] = (2));


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
});})(c__43337__auto__))
;
return ((function (switch__43223__auto__,c__43337__auto__){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_69308 = [null,null,null,null,null,null,null,null];
(statearr_69308[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_69308[(1)] = (1));

return statearr_69308;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_69287){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_69287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e69309){if((e69309 instanceof Object)){
var ex__43227__auto__ = e69309;
var statearr_69310_69330 = state_69287;
(statearr_69310_69330[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69331 = state_69287;
state_69287 = G__69331;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_69287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_69287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__))
})();
var state__43339__auto__ = (function (){var statearr_69311 = f__43338__auto__.call(null);
(statearr_69311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_69311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__))
);

return c__43337__auto__;
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
var x__35103__auto__ = (((_ == null))?null:_);
var m__35104__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,_);
} else {
var m__35104__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,_);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35104__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m,ch);
} else {
var m__35104__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m,ch);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m);
} else {
var m__35104__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async69557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69557 = (function (mult,ch,cs,meta69558){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta69558 = meta69558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69559,meta69558__$1){
var self__ = this;
var _69559__$1 = this;
return (new cljs.core.async.t_cljs$core$async69557(self__.mult,self__.ch,self__.cs,meta69558__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69559){
var self__ = this;
var _69559__$1 = this;
return self__.meta69558;
});})(cs))
;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async69557.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69557.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69558","meta69558",1963346810,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async69557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69557";

cljs.core.async.t_cljs$core$async69557.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async69557");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async69557 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async69557(mult__$1,ch__$1,cs__$1,meta69558){
return (new cljs.core.async.t_cljs$core$async69557(mult__$1,ch__$1,cs__$1,meta69558));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async69557(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43337__auto___69782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___69782,cs,m,dchan,dctr,done){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___69782,cs,m,dchan,dctr,done){
return (function (state_69694){
var state_val_69695 = (state_69694[(1)]);
if((state_val_69695 === (7))){
var inst_69690 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69696_69783 = state_69694__$1;
(statearr_69696_69783[(2)] = inst_69690);

(statearr_69696_69783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (20))){
var inst_69593 = (state_69694[(7)]);
var inst_69605 = cljs.core.first.call(null,inst_69593);
var inst_69606 = cljs.core.nth.call(null,inst_69605,(0),null);
var inst_69607 = cljs.core.nth.call(null,inst_69605,(1),null);
var state_69694__$1 = (function (){var statearr_69697 = state_69694;
(statearr_69697[(8)] = inst_69606);

return statearr_69697;
})();
if(cljs.core.truth_(inst_69607)){
var statearr_69698_69784 = state_69694__$1;
(statearr_69698_69784[(1)] = (22));

} else {
var statearr_69699_69785 = state_69694__$1;
(statearr_69699_69785[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (27))){
var inst_69642 = (state_69694[(9)]);
var inst_69637 = (state_69694[(10)]);
var inst_69562 = (state_69694[(11)]);
var inst_69635 = (state_69694[(12)]);
var inst_69642__$1 = cljs.core._nth.call(null,inst_69635,inst_69637);
var inst_69643 = cljs.core.async.put_BANG_.call(null,inst_69642__$1,inst_69562,done);
var state_69694__$1 = (function (){var statearr_69700 = state_69694;
(statearr_69700[(9)] = inst_69642__$1);

return statearr_69700;
})();
if(cljs.core.truth_(inst_69643)){
var statearr_69701_69786 = state_69694__$1;
(statearr_69701_69786[(1)] = (30));

} else {
var statearr_69702_69787 = state_69694__$1;
(statearr_69702_69787[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (1))){
var state_69694__$1 = state_69694;
var statearr_69703_69788 = state_69694__$1;
(statearr_69703_69788[(2)] = null);

(statearr_69703_69788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (24))){
var inst_69593 = (state_69694[(7)]);
var inst_69612 = (state_69694[(2)]);
var inst_69613 = cljs.core.next.call(null,inst_69593);
var inst_69571 = inst_69613;
var inst_69572 = null;
var inst_69573 = (0);
var inst_69574 = (0);
var state_69694__$1 = (function (){var statearr_69704 = state_69694;
(statearr_69704[(13)] = inst_69571);

(statearr_69704[(14)] = inst_69573);

(statearr_69704[(15)] = inst_69574);

(statearr_69704[(16)] = inst_69612);

(statearr_69704[(17)] = inst_69572);

return statearr_69704;
})();
var statearr_69705_69789 = state_69694__$1;
(statearr_69705_69789[(2)] = null);

(statearr_69705_69789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (39))){
var state_69694__$1 = state_69694;
var statearr_69709_69790 = state_69694__$1;
(statearr_69709_69790[(2)] = null);

(statearr_69709_69790[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (4))){
var inst_69562 = (state_69694[(11)]);
var inst_69562__$1 = (state_69694[(2)]);
var inst_69563 = (inst_69562__$1 == null);
var state_69694__$1 = (function (){var statearr_69710 = state_69694;
(statearr_69710[(11)] = inst_69562__$1);

return statearr_69710;
})();
if(cljs.core.truth_(inst_69563)){
var statearr_69711_69791 = state_69694__$1;
(statearr_69711_69791[(1)] = (5));

} else {
var statearr_69712_69792 = state_69694__$1;
(statearr_69712_69792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (15))){
var inst_69571 = (state_69694[(13)]);
var inst_69573 = (state_69694[(14)]);
var inst_69574 = (state_69694[(15)]);
var inst_69572 = (state_69694[(17)]);
var inst_69589 = (state_69694[(2)]);
var inst_69590 = (inst_69574 + (1));
var tmp69706 = inst_69571;
var tmp69707 = inst_69573;
var tmp69708 = inst_69572;
var inst_69571__$1 = tmp69706;
var inst_69572__$1 = tmp69708;
var inst_69573__$1 = tmp69707;
var inst_69574__$1 = inst_69590;
var state_69694__$1 = (function (){var statearr_69713 = state_69694;
(statearr_69713[(18)] = inst_69589);

(statearr_69713[(13)] = inst_69571__$1);

(statearr_69713[(14)] = inst_69573__$1);

(statearr_69713[(15)] = inst_69574__$1);

(statearr_69713[(17)] = inst_69572__$1);

return statearr_69713;
})();
var statearr_69714_69793 = state_69694__$1;
(statearr_69714_69793[(2)] = null);

(statearr_69714_69793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (21))){
var inst_69616 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69718_69794 = state_69694__$1;
(statearr_69718_69794[(2)] = inst_69616);

(statearr_69718_69794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (31))){
var inst_69642 = (state_69694[(9)]);
var inst_69646 = done.call(null,null);
var inst_69647 = cljs.core.async.untap_STAR_.call(null,m,inst_69642);
var state_69694__$1 = (function (){var statearr_69719 = state_69694;
(statearr_69719[(19)] = inst_69646);

return statearr_69719;
})();
var statearr_69720_69795 = state_69694__$1;
(statearr_69720_69795[(2)] = inst_69647);

(statearr_69720_69795[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (32))){
var inst_69636 = (state_69694[(20)]);
var inst_69634 = (state_69694[(21)]);
var inst_69637 = (state_69694[(10)]);
var inst_69635 = (state_69694[(12)]);
var inst_69649 = (state_69694[(2)]);
var inst_69650 = (inst_69637 + (1));
var tmp69715 = inst_69636;
var tmp69716 = inst_69634;
var tmp69717 = inst_69635;
var inst_69634__$1 = tmp69716;
var inst_69635__$1 = tmp69717;
var inst_69636__$1 = tmp69715;
var inst_69637__$1 = inst_69650;
var state_69694__$1 = (function (){var statearr_69721 = state_69694;
(statearr_69721[(20)] = inst_69636__$1);

(statearr_69721[(21)] = inst_69634__$1);

(statearr_69721[(10)] = inst_69637__$1);

(statearr_69721[(12)] = inst_69635__$1);

(statearr_69721[(22)] = inst_69649);

return statearr_69721;
})();
var statearr_69722_69796 = state_69694__$1;
(statearr_69722_69796[(2)] = null);

(statearr_69722_69796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (40))){
var inst_69662 = (state_69694[(23)]);
var inst_69666 = done.call(null,null);
var inst_69667 = cljs.core.async.untap_STAR_.call(null,m,inst_69662);
var state_69694__$1 = (function (){var statearr_69723 = state_69694;
(statearr_69723[(24)] = inst_69666);

return statearr_69723;
})();
var statearr_69724_69797 = state_69694__$1;
(statearr_69724_69797[(2)] = inst_69667);

(statearr_69724_69797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (33))){
var inst_69653 = (state_69694[(25)]);
var inst_69655 = cljs.core.chunked_seq_QMARK_.call(null,inst_69653);
var state_69694__$1 = state_69694;
if(inst_69655){
var statearr_69725_69798 = state_69694__$1;
(statearr_69725_69798[(1)] = (36));

} else {
var statearr_69726_69799 = state_69694__$1;
(statearr_69726_69799[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (13))){
var inst_69583 = (state_69694[(26)]);
var inst_69586 = cljs.core.async.close_BANG_.call(null,inst_69583);
var state_69694__$1 = state_69694;
var statearr_69727_69800 = state_69694__$1;
(statearr_69727_69800[(2)] = inst_69586);

(statearr_69727_69800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (22))){
var inst_69606 = (state_69694[(8)]);
var inst_69609 = cljs.core.async.close_BANG_.call(null,inst_69606);
var state_69694__$1 = state_69694;
var statearr_69728_69801 = state_69694__$1;
(statearr_69728_69801[(2)] = inst_69609);

(statearr_69728_69801[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (36))){
var inst_69653 = (state_69694[(25)]);
var inst_69657 = cljs.core.chunk_first.call(null,inst_69653);
var inst_69658 = cljs.core.chunk_rest.call(null,inst_69653);
var inst_69659 = cljs.core.count.call(null,inst_69657);
var inst_69634 = inst_69658;
var inst_69635 = inst_69657;
var inst_69636 = inst_69659;
var inst_69637 = (0);
var state_69694__$1 = (function (){var statearr_69729 = state_69694;
(statearr_69729[(20)] = inst_69636);

(statearr_69729[(21)] = inst_69634);

(statearr_69729[(10)] = inst_69637);

(statearr_69729[(12)] = inst_69635);

return statearr_69729;
})();
var statearr_69730_69802 = state_69694__$1;
(statearr_69730_69802[(2)] = null);

(statearr_69730_69802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (41))){
var inst_69653 = (state_69694[(25)]);
var inst_69669 = (state_69694[(2)]);
var inst_69670 = cljs.core.next.call(null,inst_69653);
var inst_69634 = inst_69670;
var inst_69635 = null;
var inst_69636 = (0);
var inst_69637 = (0);
var state_69694__$1 = (function (){var statearr_69731 = state_69694;
(statearr_69731[(20)] = inst_69636);

(statearr_69731[(21)] = inst_69634);

(statearr_69731[(27)] = inst_69669);

(statearr_69731[(10)] = inst_69637);

(statearr_69731[(12)] = inst_69635);

return statearr_69731;
})();
var statearr_69732_69803 = state_69694__$1;
(statearr_69732_69803[(2)] = null);

(statearr_69732_69803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (43))){
var state_69694__$1 = state_69694;
var statearr_69733_69804 = state_69694__$1;
(statearr_69733_69804[(2)] = null);

(statearr_69733_69804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (29))){
var inst_69678 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69734_69805 = state_69694__$1;
(statearr_69734_69805[(2)] = inst_69678);

(statearr_69734_69805[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (44))){
var inst_69687 = (state_69694[(2)]);
var state_69694__$1 = (function (){var statearr_69735 = state_69694;
(statearr_69735[(28)] = inst_69687);

return statearr_69735;
})();
var statearr_69736_69806 = state_69694__$1;
(statearr_69736_69806[(2)] = null);

(statearr_69736_69806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (6))){
var inst_69626 = (state_69694[(29)]);
var inst_69625 = cljs.core.deref.call(null,cs);
var inst_69626__$1 = cljs.core.keys.call(null,inst_69625);
var inst_69627 = cljs.core.count.call(null,inst_69626__$1);
var inst_69628 = cljs.core.reset_BANG_.call(null,dctr,inst_69627);
var inst_69633 = cljs.core.seq.call(null,inst_69626__$1);
var inst_69634 = inst_69633;
var inst_69635 = null;
var inst_69636 = (0);
var inst_69637 = (0);
var state_69694__$1 = (function (){var statearr_69737 = state_69694;
(statearr_69737[(20)] = inst_69636);

(statearr_69737[(21)] = inst_69634);

(statearr_69737[(10)] = inst_69637);

(statearr_69737[(30)] = inst_69628);

(statearr_69737[(29)] = inst_69626__$1);

(statearr_69737[(12)] = inst_69635);

return statearr_69737;
})();
var statearr_69738_69807 = state_69694__$1;
(statearr_69738_69807[(2)] = null);

(statearr_69738_69807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (28))){
var inst_69653 = (state_69694[(25)]);
var inst_69634 = (state_69694[(21)]);
var inst_69653__$1 = cljs.core.seq.call(null,inst_69634);
var state_69694__$1 = (function (){var statearr_69739 = state_69694;
(statearr_69739[(25)] = inst_69653__$1);

return statearr_69739;
})();
if(inst_69653__$1){
var statearr_69740_69808 = state_69694__$1;
(statearr_69740_69808[(1)] = (33));

} else {
var statearr_69741_69809 = state_69694__$1;
(statearr_69741_69809[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (25))){
var inst_69636 = (state_69694[(20)]);
var inst_69637 = (state_69694[(10)]);
var inst_69639 = (inst_69637 < inst_69636);
var inst_69640 = inst_69639;
var state_69694__$1 = state_69694;
if(cljs.core.truth_(inst_69640)){
var statearr_69742_69810 = state_69694__$1;
(statearr_69742_69810[(1)] = (27));

} else {
var statearr_69743_69811 = state_69694__$1;
(statearr_69743_69811[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (34))){
var state_69694__$1 = state_69694;
var statearr_69744_69812 = state_69694__$1;
(statearr_69744_69812[(2)] = null);

(statearr_69744_69812[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (17))){
var state_69694__$1 = state_69694;
var statearr_69745_69813 = state_69694__$1;
(statearr_69745_69813[(2)] = null);

(statearr_69745_69813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (3))){
var inst_69692 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69694__$1,inst_69692);
} else {
if((state_val_69695 === (12))){
var inst_69621 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69746_69814 = state_69694__$1;
(statearr_69746_69814[(2)] = inst_69621);

(statearr_69746_69814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (2))){
var state_69694__$1 = state_69694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69694__$1,(4),ch);
} else {
if((state_val_69695 === (23))){
var state_69694__$1 = state_69694;
var statearr_69747_69815 = state_69694__$1;
(statearr_69747_69815[(2)] = null);

(statearr_69747_69815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (35))){
var inst_69676 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69748_69816 = state_69694__$1;
(statearr_69748_69816[(2)] = inst_69676);

(statearr_69748_69816[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (19))){
var inst_69593 = (state_69694[(7)]);
var inst_69597 = cljs.core.chunk_first.call(null,inst_69593);
var inst_69598 = cljs.core.chunk_rest.call(null,inst_69593);
var inst_69599 = cljs.core.count.call(null,inst_69597);
var inst_69571 = inst_69598;
var inst_69572 = inst_69597;
var inst_69573 = inst_69599;
var inst_69574 = (0);
var state_69694__$1 = (function (){var statearr_69749 = state_69694;
(statearr_69749[(13)] = inst_69571);

(statearr_69749[(14)] = inst_69573);

(statearr_69749[(15)] = inst_69574);

(statearr_69749[(17)] = inst_69572);

return statearr_69749;
})();
var statearr_69750_69817 = state_69694__$1;
(statearr_69750_69817[(2)] = null);

(statearr_69750_69817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (11))){
var inst_69571 = (state_69694[(13)]);
var inst_69593 = (state_69694[(7)]);
var inst_69593__$1 = cljs.core.seq.call(null,inst_69571);
var state_69694__$1 = (function (){var statearr_69751 = state_69694;
(statearr_69751[(7)] = inst_69593__$1);

return statearr_69751;
})();
if(inst_69593__$1){
var statearr_69752_69818 = state_69694__$1;
(statearr_69752_69818[(1)] = (16));

} else {
var statearr_69753_69819 = state_69694__$1;
(statearr_69753_69819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (9))){
var inst_69623 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69754_69820 = state_69694__$1;
(statearr_69754_69820[(2)] = inst_69623);

(statearr_69754_69820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (5))){
var inst_69569 = cljs.core.deref.call(null,cs);
var inst_69570 = cljs.core.seq.call(null,inst_69569);
var inst_69571 = inst_69570;
var inst_69572 = null;
var inst_69573 = (0);
var inst_69574 = (0);
var state_69694__$1 = (function (){var statearr_69755 = state_69694;
(statearr_69755[(13)] = inst_69571);

(statearr_69755[(14)] = inst_69573);

(statearr_69755[(15)] = inst_69574);

(statearr_69755[(17)] = inst_69572);

return statearr_69755;
})();
var statearr_69756_69821 = state_69694__$1;
(statearr_69756_69821[(2)] = null);

(statearr_69756_69821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (14))){
var state_69694__$1 = state_69694;
var statearr_69757_69822 = state_69694__$1;
(statearr_69757_69822[(2)] = null);

(statearr_69757_69822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (45))){
var inst_69684 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69758_69823 = state_69694__$1;
(statearr_69758_69823[(2)] = inst_69684);

(statearr_69758_69823[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (26))){
var inst_69626 = (state_69694[(29)]);
var inst_69680 = (state_69694[(2)]);
var inst_69681 = cljs.core.seq.call(null,inst_69626);
var state_69694__$1 = (function (){var statearr_69759 = state_69694;
(statearr_69759[(31)] = inst_69680);

return statearr_69759;
})();
if(inst_69681){
var statearr_69760_69824 = state_69694__$1;
(statearr_69760_69824[(1)] = (42));

} else {
var statearr_69761_69825 = state_69694__$1;
(statearr_69761_69825[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (16))){
var inst_69593 = (state_69694[(7)]);
var inst_69595 = cljs.core.chunked_seq_QMARK_.call(null,inst_69593);
var state_69694__$1 = state_69694;
if(inst_69595){
var statearr_69762_69826 = state_69694__$1;
(statearr_69762_69826[(1)] = (19));

} else {
var statearr_69763_69827 = state_69694__$1;
(statearr_69763_69827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (38))){
var inst_69673 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69764_69828 = state_69694__$1;
(statearr_69764_69828[(2)] = inst_69673);

(statearr_69764_69828[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (30))){
var state_69694__$1 = state_69694;
var statearr_69765_69829 = state_69694__$1;
(statearr_69765_69829[(2)] = null);

(statearr_69765_69829[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (10))){
var inst_69574 = (state_69694[(15)]);
var inst_69572 = (state_69694[(17)]);
var inst_69582 = cljs.core._nth.call(null,inst_69572,inst_69574);
var inst_69583 = cljs.core.nth.call(null,inst_69582,(0),null);
var inst_69584 = cljs.core.nth.call(null,inst_69582,(1),null);
var state_69694__$1 = (function (){var statearr_69766 = state_69694;
(statearr_69766[(26)] = inst_69583);

return statearr_69766;
})();
if(cljs.core.truth_(inst_69584)){
var statearr_69767_69830 = state_69694__$1;
(statearr_69767_69830[(1)] = (13));

} else {
var statearr_69768_69831 = state_69694__$1;
(statearr_69768_69831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (18))){
var inst_69619 = (state_69694[(2)]);
var state_69694__$1 = state_69694;
var statearr_69769_69832 = state_69694__$1;
(statearr_69769_69832[(2)] = inst_69619);

(statearr_69769_69832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (42))){
var state_69694__$1 = state_69694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69694__$1,(45),dchan);
} else {
if((state_val_69695 === (37))){
var inst_69662 = (state_69694[(23)]);
var inst_69653 = (state_69694[(25)]);
var inst_69562 = (state_69694[(11)]);
var inst_69662__$1 = cljs.core.first.call(null,inst_69653);
var inst_69663 = cljs.core.async.put_BANG_.call(null,inst_69662__$1,inst_69562,done);
var state_69694__$1 = (function (){var statearr_69770 = state_69694;
(statearr_69770[(23)] = inst_69662__$1);

return statearr_69770;
})();
if(cljs.core.truth_(inst_69663)){
var statearr_69771_69833 = state_69694__$1;
(statearr_69771_69833[(1)] = (39));

} else {
var statearr_69772_69834 = state_69694__$1;
(statearr_69772_69834[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69695 === (8))){
var inst_69573 = (state_69694[(14)]);
var inst_69574 = (state_69694[(15)]);
var inst_69576 = (inst_69574 < inst_69573);
var inst_69577 = inst_69576;
var state_69694__$1 = state_69694;
if(cljs.core.truth_(inst_69577)){
var statearr_69773_69835 = state_69694__$1;
(statearr_69773_69835[(1)] = (10));

} else {
var statearr_69774_69836 = state_69694__$1;
(statearr_69774_69836[(1)] = (11));

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
});})(c__43337__auto___69782,cs,m,dchan,dctr,done))
;
return ((function (switch__43223__auto__,c__43337__auto___69782,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43224__auto__ = null;
var cljs$core$async$mult_$_state_machine__43224__auto____0 = (function (){
var statearr_69778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69778[(0)] = cljs$core$async$mult_$_state_machine__43224__auto__);

(statearr_69778[(1)] = (1));

return statearr_69778;
});
var cljs$core$async$mult_$_state_machine__43224__auto____1 = (function (state_69694){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_69694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e69779){if((e69779 instanceof Object)){
var ex__43227__auto__ = e69779;
var statearr_69780_69837 = state_69694;
(statearr_69780_69837[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69838 = state_69694;
state_69694 = G__69838;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43224__auto__ = function(state_69694){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43224__auto____1.call(this,state_69694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43224__auto____0;
cljs$core$async$mult_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43224__auto____1;
return cljs$core$async$mult_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___69782,cs,m,dchan,dctr,done))
})();
var state__43339__auto__ = (function (){var statearr_69781 = f__43338__auto__.call(null);
(statearr_69781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___69782);

return statearr_69781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___69782,cs,m,dchan,dctr,done))
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
var args69839 = [];
var len__35573__auto___69842 = arguments.length;
var i__35574__auto___69843 = (0);
while(true){
if((i__35574__auto___69843 < len__35573__auto___69842)){
args69839.push((arguments[i__35574__auto___69843]));

var G__69844 = (i__35574__auto___69843 + (1));
i__35574__auto___69843 = G__69844;
continue;
} else {
}
break;
}

var G__69841 = args69839.length;
switch (G__69841) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69839.length)].join('')));

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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m,ch);
} else {
var m__35104__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m,ch);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m,ch);
} else {
var m__35104__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m,ch);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m);
} else {
var m__35104__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m,state_map);
} else {
var m__35104__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m,state_map);
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
var x__35103__auto__ = (((m == null))?null:m);
var m__35104__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,m,mode);
} else {
var m__35104__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35580__auto__ = [];
var len__35573__auto___69856 = arguments.length;
var i__35574__auto___69857 = (0);
while(true){
if((i__35574__auto___69857 < len__35573__auto___69856)){
args__35580__auto__.push((arguments[i__35574__auto___69857]));

var G__69858 = (i__35574__auto___69857 + (1));
i__35574__auto___69857 = G__69858;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((3) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35581__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69850){
var map__69851 = p__69850;
var map__69851__$1 = ((((!((map__69851 == null)))?((((map__69851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69851):map__69851);
var opts = map__69851__$1;
var statearr_69853_69859 = state;
(statearr_69853_69859[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6728__auto__ = cljs.core.async.do_alts.call(null,((function (map__69851,map__69851__$1,opts){
return (function (val){
var statearr_69854_69860 = state;
(statearr_69854_69860[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69851,map__69851__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6728__auto__)){
var cb = temp__6728__auto__;
var statearr_69855_69861 = state;
(statearr_69855_69861[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69846){
var G__69847 = cljs.core.first.call(null,seq69846);
var seq69846__$1 = cljs.core.next.call(null,seq69846);
var G__69848 = cljs.core.first.call(null,seq69846__$1);
var seq69846__$2 = cljs.core.next.call(null,seq69846__$1);
var G__69849 = cljs.core.first.call(null,seq69846__$2);
var seq69846__$3 = cljs.core.next.call(null,seq69846__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69847,G__69848,G__69849,seq69846__$3);
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
if(typeof cljs.core.async.t_cljs$core$async70027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70027 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70028){
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
this.meta70028 = meta70028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70029,meta70028__$1){
var self__ = this;
var _70029__$1 = this;
return (new cljs.core.async.t_cljs$core$async70027(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70028__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70029){
var self__ = this;
var _70029__$1 = this;
return self__.meta70028;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async70027.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async70027.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70028","meta70028",1340101984,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70027";

cljs.core.async.t_cljs$core$async70027.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async70027");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async70027 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async70027(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70028){
return (new cljs.core.async.t_cljs$core$async70027(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70028));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async70027(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43337__auto___70192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___70192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___70192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_70129){
var state_val_70130 = (state_70129[(1)]);
if((state_val_70130 === (7))){
var inst_70045 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70131_70193 = state_70129__$1;
(statearr_70131_70193[(2)] = inst_70045);

(statearr_70131_70193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (20))){
var inst_70057 = (state_70129[(7)]);
var state_70129__$1 = state_70129;
var statearr_70132_70194 = state_70129__$1;
(statearr_70132_70194[(2)] = inst_70057);

(statearr_70132_70194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (27))){
var state_70129__$1 = state_70129;
var statearr_70133_70195 = state_70129__$1;
(statearr_70133_70195[(2)] = null);

(statearr_70133_70195[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (1))){
var inst_70033 = (state_70129[(8)]);
var inst_70033__$1 = calc_state.call(null);
var inst_70035 = (inst_70033__$1 == null);
var inst_70036 = cljs.core.not.call(null,inst_70035);
var state_70129__$1 = (function (){var statearr_70134 = state_70129;
(statearr_70134[(8)] = inst_70033__$1);

return statearr_70134;
})();
if(inst_70036){
var statearr_70135_70196 = state_70129__$1;
(statearr_70135_70196[(1)] = (2));

} else {
var statearr_70136_70197 = state_70129__$1;
(statearr_70136_70197[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (24))){
var inst_70080 = (state_70129[(9)]);
var inst_70089 = (state_70129[(10)]);
var inst_70103 = (state_70129[(11)]);
var inst_70103__$1 = inst_70080.call(null,inst_70089);
var state_70129__$1 = (function (){var statearr_70137 = state_70129;
(statearr_70137[(11)] = inst_70103__$1);

return statearr_70137;
})();
if(cljs.core.truth_(inst_70103__$1)){
var statearr_70138_70198 = state_70129__$1;
(statearr_70138_70198[(1)] = (29));

} else {
var statearr_70139_70199 = state_70129__$1;
(statearr_70139_70199[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (4))){
var inst_70048 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70048)){
var statearr_70140_70200 = state_70129__$1;
(statearr_70140_70200[(1)] = (8));

} else {
var statearr_70141_70201 = state_70129__$1;
(statearr_70141_70201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (15))){
var inst_70074 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70074)){
var statearr_70142_70202 = state_70129__$1;
(statearr_70142_70202[(1)] = (19));

} else {
var statearr_70143_70203 = state_70129__$1;
(statearr_70143_70203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (21))){
var inst_70079 = (state_70129[(12)]);
var inst_70079__$1 = (state_70129[(2)]);
var inst_70080 = cljs.core.get.call(null,inst_70079__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70081 = cljs.core.get.call(null,inst_70079__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70082 = cljs.core.get.call(null,inst_70079__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70129__$1 = (function (){var statearr_70144 = state_70129;
(statearr_70144[(9)] = inst_70080);

(statearr_70144[(13)] = inst_70081);

(statearr_70144[(12)] = inst_70079__$1);

return statearr_70144;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70129__$1,(22),inst_70082);
} else {
if((state_val_70130 === (31))){
var inst_70111 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70111)){
var statearr_70145_70204 = state_70129__$1;
(statearr_70145_70204[(1)] = (32));

} else {
var statearr_70146_70205 = state_70129__$1;
(statearr_70146_70205[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (32))){
var inst_70088 = (state_70129[(14)]);
var state_70129__$1 = state_70129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70129__$1,(35),out,inst_70088);
} else {
if((state_val_70130 === (33))){
var inst_70079 = (state_70129[(12)]);
var inst_70057 = inst_70079;
var state_70129__$1 = (function (){var statearr_70147 = state_70129;
(statearr_70147[(7)] = inst_70057);

return statearr_70147;
})();
var statearr_70148_70206 = state_70129__$1;
(statearr_70148_70206[(2)] = null);

(statearr_70148_70206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (13))){
var inst_70057 = (state_70129[(7)]);
var inst_70064 = inst_70057.cljs$lang$protocol_mask$partition0$;
var inst_70065 = (inst_70064 & (64));
var inst_70066 = inst_70057.cljs$core$ISeq$;
var inst_70067 = (inst_70065) || (inst_70066);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70067)){
var statearr_70149_70207 = state_70129__$1;
(statearr_70149_70207[(1)] = (16));

} else {
var statearr_70150_70208 = state_70129__$1;
(statearr_70150_70208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (22))){
var inst_70088 = (state_70129[(14)]);
var inst_70089 = (state_70129[(10)]);
var inst_70087 = (state_70129[(2)]);
var inst_70088__$1 = cljs.core.nth.call(null,inst_70087,(0),null);
var inst_70089__$1 = cljs.core.nth.call(null,inst_70087,(1),null);
var inst_70090 = (inst_70088__$1 == null);
var inst_70091 = cljs.core._EQ_.call(null,inst_70089__$1,change);
var inst_70092 = (inst_70090) || (inst_70091);
var state_70129__$1 = (function (){var statearr_70151 = state_70129;
(statearr_70151[(14)] = inst_70088__$1);

(statearr_70151[(10)] = inst_70089__$1);

return statearr_70151;
})();
if(cljs.core.truth_(inst_70092)){
var statearr_70152_70209 = state_70129__$1;
(statearr_70152_70209[(1)] = (23));

} else {
var statearr_70153_70210 = state_70129__$1;
(statearr_70153_70210[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (36))){
var inst_70079 = (state_70129[(12)]);
var inst_70057 = inst_70079;
var state_70129__$1 = (function (){var statearr_70154 = state_70129;
(statearr_70154[(7)] = inst_70057);

return statearr_70154;
})();
var statearr_70155_70211 = state_70129__$1;
(statearr_70155_70211[(2)] = null);

(statearr_70155_70211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (29))){
var inst_70103 = (state_70129[(11)]);
var state_70129__$1 = state_70129;
var statearr_70156_70212 = state_70129__$1;
(statearr_70156_70212[(2)] = inst_70103);

(statearr_70156_70212[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (6))){
var state_70129__$1 = state_70129;
var statearr_70157_70213 = state_70129__$1;
(statearr_70157_70213[(2)] = false);

(statearr_70157_70213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (28))){
var inst_70099 = (state_70129[(2)]);
var inst_70100 = calc_state.call(null);
var inst_70057 = inst_70100;
var state_70129__$1 = (function (){var statearr_70158 = state_70129;
(statearr_70158[(7)] = inst_70057);

(statearr_70158[(15)] = inst_70099);

return statearr_70158;
})();
var statearr_70159_70214 = state_70129__$1;
(statearr_70159_70214[(2)] = null);

(statearr_70159_70214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (25))){
var inst_70125 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70160_70215 = state_70129__$1;
(statearr_70160_70215[(2)] = inst_70125);

(statearr_70160_70215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (34))){
var inst_70123 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70161_70216 = state_70129__$1;
(statearr_70161_70216[(2)] = inst_70123);

(statearr_70161_70216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (17))){
var state_70129__$1 = state_70129;
var statearr_70162_70217 = state_70129__$1;
(statearr_70162_70217[(2)] = false);

(statearr_70162_70217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (3))){
var state_70129__$1 = state_70129;
var statearr_70163_70218 = state_70129__$1;
(statearr_70163_70218[(2)] = false);

(statearr_70163_70218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (12))){
var inst_70127 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70129__$1,inst_70127);
} else {
if((state_val_70130 === (2))){
var inst_70033 = (state_70129[(8)]);
var inst_70038 = inst_70033.cljs$lang$protocol_mask$partition0$;
var inst_70039 = (inst_70038 & (64));
var inst_70040 = inst_70033.cljs$core$ISeq$;
var inst_70041 = (inst_70039) || (inst_70040);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70041)){
var statearr_70164_70219 = state_70129__$1;
(statearr_70164_70219[(1)] = (5));

} else {
var statearr_70165_70220 = state_70129__$1;
(statearr_70165_70220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (23))){
var inst_70088 = (state_70129[(14)]);
var inst_70094 = (inst_70088 == null);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70094)){
var statearr_70166_70221 = state_70129__$1;
(statearr_70166_70221[(1)] = (26));

} else {
var statearr_70167_70222 = state_70129__$1;
(statearr_70167_70222[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (35))){
var inst_70114 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70114)){
var statearr_70168_70223 = state_70129__$1;
(statearr_70168_70223[(1)] = (36));

} else {
var statearr_70169_70224 = state_70129__$1;
(statearr_70169_70224[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (19))){
var inst_70057 = (state_70129[(7)]);
var inst_70076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70057);
var state_70129__$1 = state_70129;
var statearr_70170_70225 = state_70129__$1;
(statearr_70170_70225[(2)] = inst_70076);

(statearr_70170_70225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (11))){
var inst_70057 = (state_70129[(7)]);
var inst_70061 = (inst_70057 == null);
var inst_70062 = cljs.core.not.call(null,inst_70061);
var state_70129__$1 = state_70129;
if(inst_70062){
var statearr_70171_70226 = state_70129__$1;
(statearr_70171_70226[(1)] = (13));

} else {
var statearr_70172_70227 = state_70129__$1;
(statearr_70172_70227[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (9))){
var inst_70033 = (state_70129[(8)]);
var state_70129__$1 = state_70129;
var statearr_70173_70228 = state_70129__$1;
(statearr_70173_70228[(2)] = inst_70033);

(statearr_70173_70228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (5))){
var state_70129__$1 = state_70129;
var statearr_70174_70229 = state_70129__$1;
(statearr_70174_70229[(2)] = true);

(statearr_70174_70229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (14))){
var state_70129__$1 = state_70129;
var statearr_70175_70230 = state_70129__$1;
(statearr_70175_70230[(2)] = false);

(statearr_70175_70230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (26))){
var inst_70089 = (state_70129[(10)]);
var inst_70096 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_70089);
var state_70129__$1 = state_70129;
var statearr_70176_70231 = state_70129__$1;
(statearr_70176_70231[(2)] = inst_70096);

(statearr_70176_70231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (16))){
var state_70129__$1 = state_70129;
var statearr_70177_70232 = state_70129__$1;
(statearr_70177_70232[(2)] = true);

(statearr_70177_70232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (38))){
var inst_70119 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70178_70233 = state_70129__$1;
(statearr_70178_70233[(2)] = inst_70119);

(statearr_70178_70233[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (30))){
var inst_70080 = (state_70129[(9)]);
var inst_70081 = (state_70129[(13)]);
var inst_70089 = (state_70129[(10)]);
var inst_70106 = cljs.core.empty_QMARK_.call(null,inst_70080);
var inst_70107 = inst_70081.call(null,inst_70089);
var inst_70108 = cljs.core.not.call(null,inst_70107);
var inst_70109 = (inst_70106) && (inst_70108);
var state_70129__$1 = state_70129;
var statearr_70179_70234 = state_70129__$1;
(statearr_70179_70234[(2)] = inst_70109);

(statearr_70179_70234[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (10))){
var inst_70033 = (state_70129[(8)]);
var inst_70053 = (state_70129[(2)]);
var inst_70054 = cljs.core.get.call(null,inst_70053,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70055 = cljs.core.get.call(null,inst_70053,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70056 = cljs.core.get.call(null,inst_70053,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70057 = inst_70033;
var state_70129__$1 = (function (){var statearr_70180 = state_70129;
(statearr_70180[(16)] = inst_70056);

(statearr_70180[(17)] = inst_70054);

(statearr_70180[(7)] = inst_70057);

(statearr_70180[(18)] = inst_70055);

return statearr_70180;
})();
var statearr_70181_70235 = state_70129__$1;
(statearr_70181_70235[(2)] = null);

(statearr_70181_70235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (18))){
var inst_70071 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70182_70236 = state_70129__$1;
(statearr_70182_70236[(2)] = inst_70071);

(statearr_70182_70236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (37))){
var state_70129__$1 = state_70129;
var statearr_70183_70237 = state_70129__$1;
(statearr_70183_70237[(2)] = null);

(statearr_70183_70237[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (8))){
var inst_70033 = (state_70129[(8)]);
var inst_70050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70033);
var state_70129__$1 = state_70129;
var statearr_70184_70238 = state_70129__$1;
(statearr_70184_70238[(2)] = inst_70050);

(statearr_70184_70238[(1)] = (10));


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
});})(c__43337__auto___70192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43223__auto__,c__43337__auto___70192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43224__auto__ = null;
var cljs$core$async$mix_$_state_machine__43224__auto____0 = (function (){
var statearr_70188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70188[(0)] = cljs$core$async$mix_$_state_machine__43224__auto__);

(statearr_70188[(1)] = (1));

return statearr_70188;
});
var cljs$core$async$mix_$_state_machine__43224__auto____1 = (function (state_70129){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70189){if((e70189 instanceof Object)){
var ex__43227__auto__ = e70189;
var statearr_70190_70239 = state_70129;
(statearr_70190_70239[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70240 = state_70129;
state_70129 = G__70240;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43224__auto__ = function(state_70129){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43224__auto____1.call(this,state_70129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43224__auto____0;
cljs$core$async$mix_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43224__auto____1;
return cljs$core$async$mix_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___70192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43339__auto__ = (function (){var statearr_70191 = f__43338__auto__.call(null);
(statearr_70191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___70192);

return statearr_70191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___70192,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__35103__auto__ = (((p == null))?null:p);
var m__35104__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35104__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__35103__auto__ = (((p == null))?null:p);
var m__35104__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,p,v,ch);
} else {
var m__35104__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args70241 = [];
var len__35573__auto___70244 = arguments.length;
var i__35574__auto___70245 = (0);
while(true){
if((i__35574__auto___70245 < len__35573__auto___70244)){
args70241.push((arguments[i__35574__auto___70245]));

var G__70246 = (i__35574__auto___70245 + (1));
i__35574__auto___70245 = G__70246;
continue;
} else {
}
break;
}

var G__70243 = args70241.length;
switch (G__70243) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70241.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35103__auto__ = (((p == null))?null:p);
var m__35104__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,p);
} else {
var m__35104__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,p);
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
var x__35103__auto__ = (((p == null))?null:p);
var m__35104__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35103__auto__)]);
if(!((m__35104__auto__ == null))){
return m__35104__auto__.call(null,p,v);
} else {
var m__35104__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35104__auto____$1 == null))){
return m__35104__auto____$1.call(null,p,v);
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
var args70249 = [];
var len__35573__auto___70374 = arguments.length;
var i__35574__auto___70375 = (0);
while(true){
if((i__35574__auto___70375 < len__35573__auto___70374)){
args70249.push((arguments[i__35574__auto___70375]));

var G__70376 = (i__35574__auto___70375 + (1));
i__35574__auto___70375 = G__70376;
continue;
} else {
}
break;
}

var G__70251 = args70249.length;
switch (G__70251) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70249.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34390__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34390__auto__,mults){
return (function (p1__70248_SHARP_){
if(cljs.core.truth_(p1__70248_SHARP_.call(null,topic))){
return p1__70248_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70248_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34390__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async70252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70252 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70253){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70253 = meta70253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70254,meta70253__$1){
var self__ = this;
var _70254__$1 = this;
return (new cljs.core.async.t_cljs$core$async70252(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70253__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70254){
var self__ = this;
var _70254__$1 = this;
return self__.meta70253;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6728__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6728__auto__)){
var m = temp__6728__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async70252.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70252.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70253","meta70253",-354368137,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70252";

cljs.core.async.t_cljs$core$async70252.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async70252");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async70252 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async70252(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70253){
return (new cljs.core.async.t_cljs$core$async70252(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70253));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async70252(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43337__auto___70378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___70378,mults,ensure_mult,p){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___70378,mults,ensure_mult,p){
return (function (state_70326){
var state_val_70327 = (state_70326[(1)]);
if((state_val_70327 === (7))){
var inst_70322 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
var statearr_70328_70379 = state_70326__$1;
(statearr_70328_70379[(2)] = inst_70322);

(statearr_70328_70379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (20))){
var state_70326__$1 = state_70326;
var statearr_70329_70380 = state_70326__$1;
(statearr_70329_70380[(2)] = null);

(statearr_70329_70380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (1))){
var state_70326__$1 = state_70326;
var statearr_70330_70381 = state_70326__$1;
(statearr_70330_70381[(2)] = null);

(statearr_70330_70381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (24))){
var inst_70305 = (state_70326[(7)]);
var inst_70314 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_70305);
var state_70326__$1 = state_70326;
var statearr_70331_70382 = state_70326__$1;
(statearr_70331_70382[(2)] = inst_70314);

(statearr_70331_70382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (4))){
var inst_70257 = (state_70326[(8)]);
var inst_70257__$1 = (state_70326[(2)]);
var inst_70258 = (inst_70257__$1 == null);
var state_70326__$1 = (function (){var statearr_70332 = state_70326;
(statearr_70332[(8)] = inst_70257__$1);

return statearr_70332;
})();
if(cljs.core.truth_(inst_70258)){
var statearr_70333_70383 = state_70326__$1;
(statearr_70333_70383[(1)] = (5));

} else {
var statearr_70334_70384 = state_70326__$1;
(statearr_70334_70384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (15))){
var inst_70299 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
var statearr_70335_70385 = state_70326__$1;
(statearr_70335_70385[(2)] = inst_70299);

(statearr_70335_70385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (21))){
var inst_70319 = (state_70326[(2)]);
var state_70326__$1 = (function (){var statearr_70336 = state_70326;
(statearr_70336[(9)] = inst_70319);

return statearr_70336;
})();
var statearr_70337_70386 = state_70326__$1;
(statearr_70337_70386[(2)] = null);

(statearr_70337_70386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (13))){
var inst_70281 = (state_70326[(10)]);
var inst_70283 = cljs.core.chunked_seq_QMARK_.call(null,inst_70281);
var state_70326__$1 = state_70326;
if(inst_70283){
var statearr_70338_70387 = state_70326__$1;
(statearr_70338_70387[(1)] = (16));

} else {
var statearr_70339_70388 = state_70326__$1;
(statearr_70339_70388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (22))){
var inst_70311 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
if(cljs.core.truth_(inst_70311)){
var statearr_70340_70389 = state_70326__$1;
(statearr_70340_70389[(1)] = (23));

} else {
var statearr_70341_70390 = state_70326__$1;
(statearr_70341_70390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (6))){
var inst_70307 = (state_70326[(11)]);
var inst_70257 = (state_70326[(8)]);
var inst_70305 = (state_70326[(7)]);
var inst_70305__$1 = topic_fn.call(null,inst_70257);
var inst_70306 = cljs.core.deref.call(null,mults);
var inst_70307__$1 = cljs.core.get.call(null,inst_70306,inst_70305__$1);
var state_70326__$1 = (function (){var statearr_70342 = state_70326;
(statearr_70342[(11)] = inst_70307__$1);

(statearr_70342[(7)] = inst_70305__$1);

return statearr_70342;
})();
if(cljs.core.truth_(inst_70307__$1)){
var statearr_70343_70391 = state_70326__$1;
(statearr_70343_70391[(1)] = (19));

} else {
var statearr_70344_70392 = state_70326__$1;
(statearr_70344_70392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (25))){
var inst_70316 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
var statearr_70345_70393 = state_70326__$1;
(statearr_70345_70393[(2)] = inst_70316);

(statearr_70345_70393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (17))){
var inst_70281 = (state_70326[(10)]);
var inst_70290 = cljs.core.first.call(null,inst_70281);
var inst_70291 = cljs.core.async.muxch_STAR_.call(null,inst_70290);
var inst_70292 = cljs.core.async.close_BANG_.call(null,inst_70291);
var inst_70293 = cljs.core.next.call(null,inst_70281);
var inst_70267 = inst_70293;
var inst_70268 = null;
var inst_70269 = (0);
var inst_70270 = (0);
var state_70326__$1 = (function (){var statearr_70346 = state_70326;
(statearr_70346[(12)] = inst_70292);

(statearr_70346[(13)] = inst_70268);

(statearr_70346[(14)] = inst_70267);

(statearr_70346[(15)] = inst_70270);

(statearr_70346[(16)] = inst_70269);

return statearr_70346;
})();
var statearr_70347_70394 = state_70326__$1;
(statearr_70347_70394[(2)] = null);

(statearr_70347_70394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (3))){
var inst_70324 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70326__$1,inst_70324);
} else {
if((state_val_70327 === (12))){
var inst_70301 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
var statearr_70348_70395 = state_70326__$1;
(statearr_70348_70395[(2)] = inst_70301);

(statearr_70348_70395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (2))){
var state_70326__$1 = state_70326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70326__$1,(4),ch);
} else {
if((state_val_70327 === (23))){
var state_70326__$1 = state_70326;
var statearr_70349_70396 = state_70326__$1;
(statearr_70349_70396[(2)] = null);

(statearr_70349_70396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (19))){
var inst_70307 = (state_70326[(11)]);
var inst_70257 = (state_70326[(8)]);
var inst_70309 = cljs.core.async.muxch_STAR_.call(null,inst_70307);
var state_70326__$1 = state_70326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70326__$1,(22),inst_70309,inst_70257);
} else {
if((state_val_70327 === (11))){
var inst_70267 = (state_70326[(14)]);
var inst_70281 = (state_70326[(10)]);
var inst_70281__$1 = cljs.core.seq.call(null,inst_70267);
var state_70326__$1 = (function (){var statearr_70350 = state_70326;
(statearr_70350[(10)] = inst_70281__$1);

return statearr_70350;
})();
if(inst_70281__$1){
var statearr_70351_70397 = state_70326__$1;
(statearr_70351_70397[(1)] = (13));

} else {
var statearr_70352_70398 = state_70326__$1;
(statearr_70352_70398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (9))){
var inst_70303 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
var statearr_70353_70399 = state_70326__$1;
(statearr_70353_70399[(2)] = inst_70303);

(statearr_70353_70399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (5))){
var inst_70264 = cljs.core.deref.call(null,mults);
var inst_70265 = cljs.core.vals.call(null,inst_70264);
var inst_70266 = cljs.core.seq.call(null,inst_70265);
var inst_70267 = inst_70266;
var inst_70268 = null;
var inst_70269 = (0);
var inst_70270 = (0);
var state_70326__$1 = (function (){var statearr_70354 = state_70326;
(statearr_70354[(13)] = inst_70268);

(statearr_70354[(14)] = inst_70267);

(statearr_70354[(15)] = inst_70270);

(statearr_70354[(16)] = inst_70269);

return statearr_70354;
})();
var statearr_70355_70400 = state_70326__$1;
(statearr_70355_70400[(2)] = null);

(statearr_70355_70400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (14))){
var state_70326__$1 = state_70326;
var statearr_70359_70401 = state_70326__$1;
(statearr_70359_70401[(2)] = null);

(statearr_70359_70401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (16))){
var inst_70281 = (state_70326[(10)]);
var inst_70285 = cljs.core.chunk_first.call(null,inst_70281);
var inst_70286 = cljs.core.chunk_rest.call(null,inst_70281);
var inst_70287 = cljs.core.count.call(null,inst_70285);
var inst_70267 = inst_70286;
var inst_70268 = inst_70285;
var inst_70269 = inst_70287;
var inst_70270 = (0);
var state_70326__$1 = (function (){var statearr_70360 = state_70326;
(statearr_70360[(13)] = inst_70268);

(statearr_70360[(14)] = inst_70267);

(statearr_70360[(15)] = inst_70270);

(statearr_70360[(16)] = inst_70269);

return statearr_70360;
})();
var statearr_70361_70402 = state_70326__$1;
(statearr_70361_70402[(2)] = null);

(statearr_70361_70402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (10))){
var inst_70268 = (state_70326[(13)]);
var inst_70267 = (state_70326[(14)]);
var inst_70270 = (state_70326[(15)]);
var inst_70269 = (state_70326[(16)]);
var inst_70275 = cljs.core._nth.call(null,inst_70268,inst_70270);
var inst_70276 = cljs.core.async.muxch_STAR_.call(null,inst_70275);
var inst_70277 = cljs.core.async.close_BANG_.call(null,inst_70276);
var inst_70278 = (inst_70270 + (1));
var tmp70356 = inst_70268;
var tmp70357 = inst_70267;
var tmp70358 = inst_70269;
var inst_70267__$1 = tmp70357;
var inst_70268__$1 = tmp70356;
var inst_70269__$1 = tmp70358;
var inst_70270__$1 = inst_70278;
var state_70326__$1 = (function (){var statearr_70362 = state_70326;
(statearr_70362[(13)] = inst_70268__$1);

(statearr_70362[(14)] = inst_70267__$1);

(statearr_70362[(17)] = inst_70277);

(statearr_70362[(15)] = inst_70270__$1);

(statearr_70362[(16)] = inst_70269__$1);

return statearr_70362;
})();
var statearr_70363_70403 = state_70326__$1;
(statearr_70363_70403[(2)] = null);

(statearr_70363_70403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (18))){
var inst_70296 = (state_70326[(2)]);
var state_70326__$1 = state_70326;
var statearr_70364_70404 = state_70326__$1;
(statearr_70364_70404[(2)] = inst_70296);

(statearr_70364_70404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70327 === (8))){
var inst_70270 = (state_70326[(15)]);
var inst_70269 = (state_70326[(16)]);
var inst_70272 = (inst_70270 < inst_70269);
var inst_70273 = inst_70272;
var state_70326__$1 = state_70326;
if(cljs.core.truth_(inst_70273)){
var statearr_70365_70405 = state_70326__$1;
(statearr_70365_70405[(1)] = (10));

} else {
var statearr_70366_70406 = state_70326__$1;
(statearr_70366_70406[(1)] = (11));

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
});})(c__43337__auto___70378,mults,ensure_mult,p))
;
return ((function (switch__43223__auto__,c__43337__auto___70378,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_70370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70370[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_70370[(1)] = (1));

return statearr_70370;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_70326){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70371){if((e70371 instanceof Object)){
var ex__43227__auto__ = e70371;
var statearr_70372_70407 = state_70326;
(statearr_70372_70407[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70408 = state_70326;
state_70326 = G__70408;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_70326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_70326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___70378,mults,ensure_mult,p))
})();
var state__43339__auto__ = (function (){var statearr_70373 = f__43338__auto__.call(null);
(statearr_70373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___70378);

return statearr_70373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___70378,mults,ensure_mult,p))
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
var args70409 = [];
var len__35573__auto___70412 = arguments.length;
var i__35574__auto___70413 = (0);
while(true){
if((i__35574__auto___70413 < len__35573__auto___70412)){
args70409.push((arguments[i__35574__auto___70413]));

var G__70414 = (i__35574__auto___70413 + (1));
i__35574__auto___70413 = G__70414;
continue;
} else {
}
break;
}

var G__70411 = args70409.length;
switch (G__70411) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70409.length)].join('')));

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
var args70416 = [];
var len__35573__auto___70419 = arguments.length;
var i__35574__auto___70420 = (0);
while(true){
if((i__35574__auto___70420 < len__35573__auto___70419)){
args70416.push((arguments[i__35574__auto___70420]));

var G__70421 = (i__35574__auto___70420 + (1));
i__35574__auto___70420 = G__70421;
continue;
} else {
}
break;
}

var G__70418 = args70416.length;
switch (G__70418) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70416.length)].join('')));

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
var args70423 = [];
var len__35573__auto___70494 = arguments.length;
var i__35574__auto___70495 = (0);
while(true){
if((i__35574__auto___70495 < len__35573__auto___70494)){
args70423.push((arguments[i__35574__auto___70495]));

var G__70496 = (i__35574__auto___70495 + (1));
i__35574__auto___70495 = G__70496;
continue;
} else {
}
break;
}

var G__70425 = args70423.length;
switch (G__70425) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70423.length)].join('')));

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
var c__43337__auto___70498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___70498,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___70498,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_70464){
var state_val_70465 = (state_70464[(1)]);
if((state_val_70465 === (7))){
var state_70464__$1 = state_70464;
var statearr_70466_70499 = state_70464__$1;
(statearr_70466_70499[(2)] = null);

(statearr_70466_70499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (1))){
var state_70464__$1 = state_70464;
var statearr_70467_70500 = state_70464__$1;
(statearr_70467_70500[(2)] = null);

(statearr_70467_70500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (4))){
var inst_70428 = (state_70464[(7)]);
var inst_70430 = (inst_70428 < cnt);
var state_70464__$1 = state_70464;
if(cljs.core.truth_(inst_70430)){
var statearr_70468_70501 = state_70464__$1;
(statearr_70468_70501[(1)] = (6));

} else {
var statearr_70469_70502 = state_70464__$1;
(statearr_70469_70502[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (15))){
var inst_70460 = (state_70464[(2)]);
var state_70464__$1 = state_70464;
var statearr_70470_70503 = state_70464__$1;
(statearr_70470_70503[(2)] = inst_70460);

(statearr_70470_70503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (13))){
var inst_70453 = cljs.core.async.close_BANG_.call(null,out);
var state_70464__$1 = state_70464;
var statearr_70471_70504 = state_70464__$1;
(statearr_70471_70504[(2)] = inst_70453);

(statearr_70471_70504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (6))){
var state_70464__$1 = state_70464;
var statearr_70472_70505 = state_70464__$1;
(statearr_70472_70505[(2)] = null);

(statearr_70472_70505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (3))){
var inst_70462 = (state_70464[(2)]);
var state_70464__$1 = state_70464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70464__$1,inst_70462);
} else {
if((state_val_70465 === (12))){
var inst_70450 = (state_70464[(8)]);
var inst_70450__$1 = (state_70464[(2)]);
var inst_70451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_70450__$1);
var state_70464__$1 = (function (){var statearr_70473 = state_70464;
(statearr_70473[(8)] = inst_70450__$1);

return statearr_70473;
})();
if(cljs.core.truth_(inst_70451)){
var statearr_70474_70506 = state_70464__$1;
(statearr_70474_70506[(1)] = (13));

} else {
var statearr_70475_70507 = state_70464__$1;
(statearr_70475_70507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (2))){
var inst_70427 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_70428 = (0);
var state_70464__$1 = (function (){var statearr_70476 = state_70464;
(statearr_70476[(9)] = inst_70427);

(statearr_70476[(7)] = inst_70428);

return statearr_70476;
})();
var statearr_70477_70508 = state_70464__$1;
(statearr_70477_70508[(2)] = null);

(statearr_70477_70508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (11))){
var inst_70428 = (state_70464[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70464,(10),Object,null,(9));
var inst_70437 = chs__$1.call(null,inst_70428);
var inst_70438 = done.call(null,inst_70428);
var inst_70439 = cljs.core.async.take_BANG_.call(null,inst_70437,inst_70438);
var state_70464__$1 = state_70464;
var statearr_70478_70509 = state_70464__$1;
(statearr_70478_70509[(2)] = inst_70439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (9))){
var inst_70428 = (state_70464[(7)]);
var inst_70441 = (state_70464[(2)]);
var inst_70442 = (inst_70428 + (1));
var inst_70428__$1 = inst_70442;
var state_70464__$1 = (function (){var statearr_70479 = state_70464;
(statearr_70479[(10)] = inst_70441);

(statearr_70479[(7)] = inst_70428__$1);

return statearr_70479;
})();
var statearr_70480_70510 = state_70464__$1;
(statearr_70480_70510[(2)] = null);

(statearr_70480_70510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (5))){
var inst_70448 = (state_70464[(2)]);
var state_70464__$1 = (function (){var statearr_70481 = state_70464;
(statearr_70481[(11)] = inst_70448);

return statearr_70481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70464__$1,(12),dchan);
} else {
if((state_val_70465 === (14))){
var inst_70450 = (state_70464[(8)]);
var inst_70455 = cljs.core.apply.call(null,f,inst_70450);
var state_70464__$1 = state_70464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70464__$1,(16),out,inst_70455);
} else {
if((state_val_70465 === (16))){
var inst_70457 = (state_70464[(2)]);
var state_70464__$1 = (function (){var statearr_70482 = state_70464;
(statearr_70482[(12)] = inst_70457);

return statearr_70482;
})();
var statearr_70483_70511 = state_70464__$1;
(statearr_70483_70511[(2)] = null);

(statearr_70483_70511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (10))){
var inst_70432 = (state_70464[(2)]);
var inst_70433 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_70464__$1 = (function (){var statearr_70484 = state_70464;
(statearr_70484[(13)] = inst_70432);

return statearr_70484;
})();
var statearr_70485_70512 = state_70464__$1;
(statearr_70485_70512[(2)] = inst_70433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70465 === (8))){
var inst_70446 = (state_70464[(2)]);
var state_70464__$1 = state_70464;
var statearr_70486_70513 = state_70464__$1;
(statearr_70486_70513[(2)] = inst_70446);

(statearr_70486_70513[(1)] = (5));


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
});})(c__43337__auto___70498,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43223__auto__,c__43337__auto___70498,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_70490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70490[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_70490[(1)] = (1));

return statearr_70490;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_70464){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70491){if((e70491 instanceof Object)){
var ex__43227__auto__ = e70491;
var statearr_70492_70514 = state_70464;
(statearr_70492_70514[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70515 = state_70464;
state_70464 = G__70515;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_70464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_70464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___70498,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43339__auto__ = (function (){var statearr_70493 = f__43338__auto__.call(null);
(statearr_70493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___70498);

return statearr_70493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___70498,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args70517 = [];
var len__35573__auto___70575 = arguments.length;
var i__35574__auto___70576 = (0);
while(true){
if((i__35574__auto___70576 < len__35573__auto___70575)){
args70517.push((arguments[i__35574__auto___70576]));

var G__70577 = (i__35574__auto___70576 + (1));
i__35574__auto___70576 = G__70577;
continue;
} else {
}
break;
}

var G__70519 = args70517.length;
switch (G__70519) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70517.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43337__auto___70579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___70579,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___70579,out){
return (function (state_70551){
var state_val_70552 = (state_70551[(1)]);
if((state_val_70552 === (7))){
var inst_70531 = (state_70551[(7)]);
var inst_70530 = (state_70551[(8)]);
var inst_70530__$1 = (state_70551[(2)]);
var inst_70531__$1 = cljs.core.nth.call(null,inst_70530__$1,(0),null);
var inst_70532 = cljs.core.nth.call(null,inst_70530__$1,(1),null);
var inst_70533 = (inst_70531__$1 == null);
var state_70551__$1 = (function (){var statearr_70553 = state_70551;
(statearr_70553[(7)] = inst_70531__$1);

(statearr_70553[(8)] = inst_70530__$1);

(statearr_70553[(9)] = inst_70532);

return statearr_70553;
})();
if(cljs.core.truth_(inst_70533)){
var statearr_70554_70580 = state_70551__$1;
(statearr_70554_70580[(1)] = (8));

} else {
var statearr_70555_70581 = state_70551__$1;
(statearr_70555_70581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (1))){
var inst_70520 = cljs.core.vec.call(null,chs);
var inst_70521 = inst_70520;
var state_70551__$1 = (function (){var statearr_70556 = state_70551;
(statearr_70556[(10)] = inst_70521);

return statearr_70556;
})();
var statearr_70557_70582 = state_70551__$1;
(statearr_70557_70582[(2)] = null);

(statearr_70557_70582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (4))){
var inst_70521 = (state_70551[(10)]);
var state_70551__$1 = state_70551;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70551__$1,(7),inst_70521);
} else {
if((state_val_70552 === (6))){
var inst_70547 = (state_70551[(2)]);
var state_70551__$1 = state_70551;
var statearr_70558_70583 = state_70551__$1;
(statearr_70558_70583[(2)] = inst_70547);

(statearr_70558_70583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (3))){
var inst_70549 = (state_70551[(2)]);
var state_70551__$1 = state_70551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70551__$1,inst_70549);
} else {
if((state_val_70552 === (2))){
var inst_70521 = (state_70551[(10)]);
var inst_70523 = cljs.core.count.call(null,inst_70521);
var inst_70524 = (inst_70523 > (0));
var state_70551__$1 = state_70551;
if(cljs.core.truth_(inst_70524)){
var statearr_70560_70584 = state_70551__$1;
(statearr_70560_70584[(1)] = (4));

} else {
var statearr_70561_70585 = state_70551__$1;
(statearr_70561_70585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (11))){
var inst_70521 = (state_70551[(10)]);
var inst_70540 = (state_70551[(2)]);
var tmp70559 = inst_70521;
var inst_70521__$1 = tmp70559;
var state_70551__$1 = (function (){var statearr_70562 = state_70551;
(statearr_70562[(11)] = inst_70540);

(statearr_70562[(10)] = inst_70521__$1);

return statearr_70562;
})();
var statearr_70563_70586 = state_70551__$1;
(statearr_70563_70586[(2)] = null);

(statearr_70563_70586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (9))){
var inst_70531 = (state_70551[(7)]);
var state_70551__$1 = state_70551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70551__$1,(11),out,inst_70531);
} else {
if((state_val_70552 === (5))){
var inst_70545 = cljs.core.async.close_BANG_.call(null,out);
var state_70551__$1 = state_70551;
var statearr_70564_70587 = state_70551__$1;
(statearr_70564_70587[(2)] = inst_70545);

(statearr_70564_70587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (10))){
var inst_70543 = (state_70551[(2)]);
var state_70551__$1 = state_70551;
var statearr_70565_70588 = state_70551__$1;
(statearr_70565_70588[(2)] = inst_70543);

(statearr_70565_70588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70552 === (8))){
var inst_70531 = (state_70551[(7)]);
var inst_70521 = (state_70551[(10)]);
var inst_70530 = (state_70551[(8)]);
var inst_70532 = (state_70551[(9)]);
var inst_70535 = (function (){var cs = inst_70521;
var vec__70526 = inst_70530;
var v = inst_70531;
var c = inst_70532;
return ((function (cs,vec__70526,v,c,inst_70531,inst_70521,inst_70530,inst_70532,state_val_70552,c__43337__auto___70579,out){
return (function (p1__70516_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__70516_SHARP_);
});
;})(cs,vec__70526,v,c,inst_70531,inst_70521,inst_70530,inst_70532,state_val_70552,c__43337__auto___70579,out))
})();
var inst_70536 = cljs.core.filterv.call(null,inst_70535,inst_70521);
var inst_70521__$1 = inst_70536;
var state_70551__$1 = (function (){var statearr_70566 = state_70551;
(statearr_70566[(10)] = inst_70521__$1);

return statearr_70566;
})();
var statearr_70567_70589 = state_70551__$1;
(statearr_70567_70589[(2)] = null);

(statearr_70567_70589[(1)] = (2));


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
});})(c__43337__auto___70579,out))
;
return ((function (switch__43223__auto__,c__43337__auto___70579,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_70571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70571[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_70571[(1)] = (1));

return statearr_70571;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_70551){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70572){if((e70572 instanceof Object)){
var ex__43227__auto__ = e70572;
var statearr_70573_70590 = state_70551;
(statearr_70573_70590[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70591 = state_70551;
state_70551 = G__70591;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_70551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_70551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___70579,out))
})();
var state__43339__auto__ = (function (){var statearr_70574 = f__43338__auto__.call(null);
(statearr_70574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___70579);

return statearr_70574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___70579,out))
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
var args70592 = [];
var len__35573__auto___70641 = arguments.length;
var i__35574__auto___70642 = (0);
while(true){
if((i__35574__auto___70642 < len__35573__auto___70641)){
args70592.push((arguments[i__35574__auto___70642]));

var G__70643 = (i__35574__auto___70642 + (1));
i__35574__auto___70642 = G__70643;
continue;
} else {
}
break;
}

var G__70594 = args70592.length;
switch (G__70594) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70592.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43337__auto___70645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___70645,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___70645,out){
return (function (state_70618){
var state_val_70619 = (state_70618[(1)]);
if((state_val_70619 === (7))){
var inst_70600 = (state_70618[(7)]);
var inst_70600__$1 = (state_70618[(2)]);
var inst_70601 = (inst_70600__$1 == null);
var inst_70602 = cljs.core.not.call(null,inst_70601);
var state_70618__$1 = (function (){var statearr_70620 = state_70618;
(statearr_70620[(7)] = inst_70600__$1);

return statearr_70620;
})();
if(inst_70602){
var statearr_70621_70646 = state_70618__$1;
(statearr_70621_70646[(1)] = (8));

} else {
var statearr_70622_70647 = state_70618__$1;
(statearr_70622_70647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (1))){
var inst_70595 = (0);
var state_70618__$1 = (function (){var statearr_70623 = state_70618;
(statearr_70623[(8)] = inst_70595);

return statearr_70623;
})();
var statearr_70624_70648 = state_70618__$1;
(statearr_70624_70648[(2)] = null);

(statearr_70624_70648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (4))){
var state_70618__$1 = state_70618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70618__$1,(7),ch);
} else {
if((state_val_70619 === (6))){
var inst_70613 = (state_70618[(2)]);
var state_70618__$1 = state_70618;
var statearr_70625_70649 = state_70618__$1;
(statearr_70625_70649[(2)] = inst_70613);

(statearr_70625_70649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (3))){
var inst_70615 = (state_70618[(2)]);
var inst_70616 = cljs.core.async.close_BANG_.call(null,out);
var state_70618__$1 = (function (){var statearr_70626 = state_70618;
(statearr_70626[(9)] = inst_70615);

return statearr_70626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70618__$1,inst_70616);
} else {
if((state_val_70619 === (2))){
var inst_70595 = (state_70618[(8)]);
var inst_70597 = (inst_70595 < n);
var state_70618__$1 = state_70618;
if(cljs.core.truth_(inst_70597)){
var statearr_70627_70650 = state_70618__$1;
(statearr_70627_70650[(1)] = (4));

} else {
var statearr_70628_70651 = state_70618__$1;
(statearr_70628_70651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (11))){
var inst_70595 = (state_70618[(8)]);
var inst_70605 = (state_70618[(2)]);
var inst_70606 = (inst_70595 + (1));
var inst_70595__$1 = inst_70606;
var state_70618__$1 = (function (){var statearr_70629 = state_70618;
(statearr_70629[(8)] = inst_70595__$1);

(statearr_70629[(10)] = inst_70605);

return statearr_70629;
})();
var statearr_70630_70652 = state_70618__$1;
(statearr_70630_70652[(2)] = null);

(statearr_70630_70652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (9))){
var state_70618__$1 = state_70618;
var statearr_70631_70653 = state_70618__$1;
(statearr_70631_70653[(2)] = null);

(statearr_70631_70653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (5))){
var state_70618__$1 = state_70618;
var statearr_70632_70654 = state_70618__$1;
(statearr_70632_70654[(2)] = null);

(statearr_70632_70654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (10))){
var inst_70610 = (state_70618[(2)]);
var state_70618__$1 = state_70618;
var statearr_70633_70655 = state_70618__$1;
(statearr_70633_70655[(2)] = inst_70610);

(statearr_70633_70655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70619 === (8))){
var inst_70600 = (state_70618[(7)]);
var state_70618__$1 = state_70618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70618__$1,(11),out,inst_70600);
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
});})(c__43337__auto___70645,out))
;
return ((function (switch__43223__auto__,c__43337__auto___70645,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_70637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70637[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_70637[(1)] = (1));

return statearr_70637;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_70618){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70638){if((e70638 instanceof Object)){
var ex__43227__auto__ = e70638;
var statearr_70639_70656 = state_70618;
(statearr_70639_70656[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70657 = state_70618;
state_70618 = G__70657;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_70618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_70618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___70645,out))
})();
var state__43339__auto__ = (function (){var statearr_70640 = f__43338__auto__.call(null);
(statearr_70640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___70645);

return statearr_70640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___70645,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70665 = (function (map_LT_,f,ch,meta70666){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta70666 = meta70666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70667,meta70666__$1){
var self__ = this;
var _70667__$1 = this;
return (new cljs.core.async.t_cljs$core$async70665(self__.map_LT_,self__.f,self__.ch,meta70666__$1));
});


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70667){
var self__ = this;
var _70667__$1 = this;
return self__.meta70666;
});


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async70668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70668 = (function (map_LT_,f,ch,meta70666,_,fn1,meta70669){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta70666 = meta70666;
this._ = _;
this.fn1 = fn1;
this.meta70669 = meta70669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async70668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_70670,meta70669__$1){
var self__ = this;
var _70670__$1 = this;
return (new cljs.core.async.t_cljs$core$async70668(self__.map_LT_,self__.f,self__.ch,self__.meta70666,self__._,self__.fn1,meta70669__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async70668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_70670){
var self__ = this;
var _70670__$1 = this;
return self__.meta70669;
});})(___$1))
;


cljs.core.async.t_cljs$core$async70668.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async70668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async70668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async70668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__70658_SHARP_){
return f1.call(null,(((p1__70658_SHARP_ == null))?null:self__.f.call(null,p1__70658_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async70668.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70666","meta70666",1409343414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70665","cljs.core.async/t_cljs$core$async70665",1269812883,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70669","meta70669",-1280563336,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70668";

cljs.core.async.t_cljs$core$async70668.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async70668");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async70668 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70668(map_LT___$1,f__$1,ch__$1,meta70666__$1,___$2,fn1__$1,meta70669){
return (new cljs.core.async.t_cljs$core$async70668(map_LT___$1,f__$1,ch__$1,meta70666__$1,___$2,fn1__$1,meta70669));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async70668(self__.map_LT_,self__.f,self__.ch,self__.meta70666,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34378__auto__ = ret;
if(cljs.core.truth_(and__34378__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34378__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async70665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async70665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70666","meta70666",1409343414,null)], null);
});

cljs.core.async.t_cljs$core$async70665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70665";

cljs.core.async.t_cljs$core$async70665.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async70665");
});

cljs.core.async.__GT_t_cljs$core$async70665 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70665(map_LT___$1,f__$1,ch__$1,meta70666){
return (new cljs.core.async.t_cljs$core$async70665(map_LT___$1,f__$1,ch__$1,meta70666));
});

}

return (new cljs.core.async.t_cljs$core$async70665(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70674 = (function (map_GT_,f,ch,meta70675){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta70675 = meta70675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70676,meta70675__$1){
var self__ = this;
var _70676__$1 = this;
return (new cljs.core.async.t_cljs$core$async70674(self__.map_GT_,self__.f,self__.ch,meta70675__$1));
});


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70676){
var self__ = this;
var _70676__$1 = this;
return self__.meta70675;
});


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async70674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async70674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70675","meta70675",1750607005,null)], null);
});

cljs.core.async.t_cljs$core$async70674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70674";

cljs.core.async.t_cljs$core$async70674.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async70674");
});

cljs.core.async.__GT_t_cljs$core$async70674 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70674(map_GT___$1,f__$1,ch__$1,meta70675){
return (new cljs.core.async.t_cljs$core$async70674(map_GT___$1,f__$1,ch__$1,meta70675));
});

}

return (new cljs.core.async.t_cljs$core$async70674(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async70680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70680 = (function (filter_GT_,p,ch,meta70681){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta70681 = meta70681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70682,meta70681__$1){
var self__ = this;
var _70682__$1 = this;
return (new cljs.core.async.t_cljs$core$async70680(self__.filter_GT_,self__.p,self__.ch,meta70681__$1));
});


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70682){
var self__ = this;
var _70682__$1 = this;
return self__.meta70681;
});


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async70680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async70680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70681","meta70681",1088106821,null)], null);
});

cljs.core.async.t_cljs$core$async70680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70680";

cljs.core.async.t_cljs$core$async70680.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.core.async/t_cljs$core$async70680");
});

cljs.core.async.__GT_t_cljs$core$async70680 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70680(filter_GT___$1,p__$1,ch__$1,meta70681){
return (new cljs.core.async.t_cljs$core$async70680(filter_GT___$1,p__$1,ch__$1,meta70681));
});

}

return (new cljs.core.async.t_cljs$core$async70680(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args70683 = [];
var len__35573__auto___70727 = arguments.length;
var i__35574__auto___70728 = (0);
while(true){
if((i__35574__auto___70728 < len__35573__auto___70727)){
args70683.push((arguments[i__35574__auto___70728]));

var G__70729 = (i__35574__auto___70728 + (1));
i__35574__auto___70728 = G__70729;
continue;
} else {
}
break;
}

var G__70685 = args70683.length;
switch (G__70685) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70683.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43337__auto___70731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___70731,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___70731,out){
return (function (state_70706){
var state_val_70707 = (state_70706[(1)]);
if((state_val_70707 === (7))){
var inst_70702 = (state_70706[(2)]);
var state_70706__$1 = state_70706;
var statearr_70708_70732 = state_70706__$1;
(statearr_70708_70732[(2)] = inst_70702);

(statearr_70708_70732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (1))){
var state_70706__$1 = state_70706;
var statearr_70709_70733 = state_70706__$1;
(statearr_70709_70733[(2)] = null);

(statearr_70709_70733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (4))){
var inst_70688 = (state_70706[(7)]);
var inst_70688__$1 = (state_70706[(2)]);
var inst_70689 = (inst_70688__$1 == null);
var state_70706__$1 = (function (){var statearr_70710 = state_70706;
(statearr_70710[(7)] = inst_70688__$1);

return statearr_70710;
})();
if(cljs.core.truth_(inst_70689)){
var statearr_70711_70734 = state_70706__$1;
(statearr_70711_70734[(1)] = (5));

} else {
var statearr_70712_70735 = state_70706__$1;
(statearr_70712_70735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (6))){
var inst_70688 = (state_70706[(7)]);
var inst_70693 = p.call(null,inst_70688);
var state_70706__$1 = state_70706;
if(cljs.core.truth_(inst_70693)){
var statearr_70713_70736 = state_70706__$1;
(statearr_70713_70736[(1)] = (8));

} else {
var statearr_70714_70737 = state_70706__$1;
(statearr_70714_70737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (3))){
var inst_70704 = (state_70706[(2)]);
var state_70706__$1 = state_70706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70706__$1,inst_70704);
} else {
if((state_val_70707 === (2))){
var state_70706__$1 = state_70706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70706__$1,(4),ch);
} else {
if((state_val_70707 === (11))){
var inst_70696 = (state_70706[(2)]);
var state_70706__$1 = state_70706;
var statearr_70715_70738 = state_70706__$1;
(statearr_70715_70738[(2)] = inst_70696);

(statearr_70715_70738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (9))){
var state_70706__$1 = state_70706;
var statearr_70716_70739 = state_70706__$1;
(statearr_70716_70739[(2)] = null);

(statearr_70716_70739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (5))){
var inst_70691 = cljs.core.async.close_BANG_.call(null,out);
var state_70706__$1 = state_70706;
var statearr_70717_70740 = state_70706__$1;
(statearr_70717_70740[(2)] = inst_70691);

(statearr_70717_70740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (10))){
var inst_70699 = (state_70706[(2)]);
var state_70706__$1 = (function (){var statearr_70718 = state_70706;
(statearr_70718[(8)] = inst_70699);

return statearr_70718;
})();
var statearr_70719_70741 = state_70706__$1;
(statearr_70719_70741[(2)] = null);

(statearr_70719_70741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70707 === (8))){
var inst_70688 = (state_70706[(7)]);
var state_70706__$1 = state_70706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70706__$1,(11),out,inst_70688);
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
});})(c__43337__auto___70731,out))
;
return ((function (switch__43223__auto__,c__43337__auto___70731,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_70723 = [null,null,null,null,null,null,null,null,null];
(statearr_70723[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_70723[(1)] = (1));

return statearr_70723;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_70706){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70724){if((e70724 instanceof Object)){
var ex__43227__auto__ = e70724;
var statearr_70725_70742 = state_70706;
(statearr_70725_70742[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70743 = state_70706;
state_70706 = G__70743;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_70706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_70706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___70731,out))
})();
var state__43339__auto__ = (function (){var statearr_70726 = f__43338__auto__.call(null);
(statearr_70726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___70731);

return statearr_70726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___70731,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args70744 = [];
var len__35573__auto___70747 = arguments.length;
var i__35574__auto___70748 = (0);
while(true){
if((i__35574__auto___70748 < len__35573__auto___70747)){
args70744.push((arguments[i__35574__auto___70748]));

var G__70749 = (i__35574__auto___70748 + (1));
i__35574__auto___70748 = G__70749;
continue;
} else {
}
break;
}

var G__70746 = args70744.length;
switch (G__70746) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70744.length)].join('')));

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
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__){
return (function (state_70916){
var state_val_70917 = (state_70916[(1)]);
if((state_val_70917 === (7))){
var inst_70912 = (state_70916[(2)]);
var state_70916__$1 = state_70916;
var statearr_70918_70959 = state_70916__$1;
(statearr_70918_70959[(2)] = inst_70912);

(statearr_70918_70959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (20))){
var inst_70882 = (state_70916[(7)]);
var inst_70893 = (state_70916[(2)]);
var inst_70894 = cljs.core.next.call(null,inst_70882);
var inst_70868 = inst_70894;
var inst_70869 = null;
var inst_70870 = (0);
var inst_70871 = (0);
var state_70916__$1 = (function (){var statearr_70919 = state_70916;
(statearr_70919[(8)] = inst_70893);

(statearr_70919[(9)] = inst_70868);

(statearr_70919[(10)] = inst_70869);

(statearr_70919[(11)] = inst_70871);

(statearr_70919[(12)] = inst_70870);

return statearr_70919;
})();
var statearr_70920_70960 = state_70916__$1;
(statearr_70920_70960[(2)] = null);

(statearr_70920_70960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (1))){
var state_70916__$1 = state_70916;
var statearr_70921_70961 = state_70916__$1;
(statearr_70921_70961[(2)] = null);

(statearr_70921_70961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (4))){
var inst_70857 = (state_70916[(13)]);
var inst_70857__$1 = (state_70916[(2)]);
var inst_70858 = (inst_70857__$1 == null);
var state_70916__$1 = (function (){var statearr_70922 = state_70916;
(statearr_70922[(13)] = inst_70857__$1);

return statearr_70922;
})();
if(cljs.core.truth_(inst_70858)){
var statearr_70923_70962 = state_70916__$1;
(statearr_70923_70962[(1)] = (5));

} else {
var statearr_70924_70963 = state_70916__$1;
(statearr_70924_70963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (15))){
var state_70916__$1 = state_70916;
var statearr_70928_70964 = state_70916__$1;
(statearr_70928_70964[(2)] = null);

(statearr_70928_70964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (21))){
var state_70916__$1 = state_70916;
var statearr_70929_70965 = state_70916__$1;
(statearr_70929_70965[(2)] = null);

(statearr_70929_70965[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (13))){
var inst_70868 = (state_70916[(9)]);
var inst_70869 = (state_70916[(10)]);
var inst_70871 = (state_70916[(11)]);
var inst_70870 = (state_70916[(12)]);
var inst_70878 = (state_70916[(2)]);
var inst_70879 = (inst_70871 + (1));
var tmp70925 = inst_70868;
var tmp70926 = inst_70869;
var tmp70927 = inst_70870;
var inst_70868__$1 = tmp70925;
var inst_70869__$1 = tmp70926;
var inst_70870__$1 = tmp70927;
var inst_70871__$1 = inst_70879;
var state_70916__$1 = (function (){var statearr_70930 = state_70916;
(statearr_70930[(9)] = inst_70868__$1);

(statearr_70930[(10)] = inst_70869__$1);

(statearr_70930[(14)] = inst_70878);

(statearr_70930[(11)] = inst_70871__$1);

(statearr_70930[(12)] = inst_70870__$1);

return statearr_70930;
})();
var statearr_70931_70966 = state_70916__$1;
(statearr_70931_70966[(2)] = null);

(statearr_70931_70966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (22))){
var state_70916__$1 = state_70916;
var statearr_70932_70967 = state_70916__$1;
(statearr_70932_70967[(2)] = null);

(statearr_70932_70967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (6))){
var inst_70857 = (state_70916[(13)]);
var inst_70866 = f.call(null,inst_70857);
var inst_70867 = cljs.core.seq.call(null,inst_70866);
var inst_70868 = inst_70867;
var inst_70869 = null;
var inst_70870 = (0);
var inst_70871 = (0);
var state_70916__$1 = (function (){var statearr_70933 = state_70916;
(statearr_70933[(9)] = inst_70868);

(statearr_70933[(10)] = inst_70869);

(statearr_70933[(11)] = inst_70871);

(statearr_70933[(12)] = inst_70870);

return statearr_70933;
})();
var statearr_70934_70968 = state_70916__$1;
(statearr_70934_70968[(2)] = null);

(statearr_70934_70968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (17))){
var inst_70882 = (state_70916[(7)]);
var inst_70886 = cljs.core.chunk_first.call(null,inst_70882);
var inst_70887 = cljs.core.chunk_rest.call(null,inst_70882);
var inst_70888 = cljs.core.count.call(null,inst_70886);
var inst_70868 = inst_70887;
var inst_70869 = inst_70886;
var inst_70870 = inst_70888;
var inst_70871 = (0);
var state_70916__$1 = (function (){var statearr_70935 = state_70916;
(statearr_70935[(9)] = inst_70868);

(statearr_70935[(10)] = inst_70869);

(statearr_70935[(11)] = inst_70871);

(statearr_70935[(12)] = inst_70870);

return statearr_70935;
})();
var statearr_70936_70969 = state_70916__$1;
(statearr_70936_70969[(2)] = null);

(statearr_70936_70969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (3))){
var inst_70914 = (state_70916[(2)]);
var state_70916__$1 = state_70916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70916__$1,inst_70914);
} else {
if((state_val_70917 === (12))){
var inst_70902 = (state_70916[(2)]);
var state_70916__$1 = state_70916;
var statearr_70937_70970 = state_70916__$1;
(statearr_70937_70970[(2)] = inst_70902);

(statearr_70937_70970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (2))){
var state_70916__$1 = state_70916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70916__$1,(4),in$);
} else {
if((state_val_70917 === (23))){
var inst_70910 = (state_70916[(2)]);
var state_70916__$1 = state_70916;
var statearr_70938_70971 = state_70916__$1;
(statearr_70938_70971[(2)] = inst_70910);

(statearr_70938_70971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (19))){
var inst_70897 = (state_70916[(2)]);
var state_70916__$1 = state_70916;
var statearr_70939_70972 = state_70916__$1;
(statearr_70939_70972[(2)] = inst_70897);

(statearr_70939_70972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (11))){
var inst_70882 = (state_70916[(7)]);
var inst_70868 = (state_70916[(9)]);
var inst_70882__$1 = cljs.core.seq.call(null,inst_70868);
var state_70916__$1 = (function (){var statearr_70940 = state_70916;
(statearr_70940[(7)] = inst_70882__$1);

return statearr_70940;
})();
if(inst_70882__$1){
var statearr_70941_70973 = state_70916__$1;
(statearr_70941_70973[(1)] = (14));

} else {
var statearr_70942_70974 = state_70916__$1;
(statearr_70942_70974[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (9))){
var inst_70904 = (state_70916[(2)]);
var inst_70905 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_70916__$1 = (function (){var statearr_70943 = state_70916;
(statearr_70943[(15)] = inst_70904);

return statearr_70943;
})();
if(cljs.core.truth_(inst_70905)){
var statearr_70944_70975 = state_70916__$1;
(statearr_70944_70975[(1)] = (21));

} else {
var statearr_70945_70976 = state_70916__$1;
(statearr_70945_70976[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (5))){
var inst_70860 = cljs.core.async.close_BANG_.call(null,out);
var state_70916__$1 = state_70916;
var statearr_70946_70977 = state_70916__$1;
(statearr_70946_70977[(2)] = inst_70860);

(statearr_70946_70977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (14))){
var inst_70882 = (state_70916[(7)]);
var inst_70884 = cljs.core.chunked_seq_QMARK_.call(null,inst_70882);
var state_70916__$1 = state_70916;
if(inst_70884){
var statearr_70947_70978 = state_70916__$1;
(statearr_70947_70978[(1)] = (17));

} else {
var statearr_70948_70979 = state_70916__$1;
(statearr_70948_70979[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (16))){
var inst_70900 = (state_70916[(2)]);
var state_70916__$1 = state_70916;
var statearr_70949_70980 = state_70916__$1;
(statearr_70949_70980[(2)] = inst_70900);

(statearr_70949_70980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70917 === (10))){
var inst_70869 = (state_70916[(10)]);
var inst_70871 = (state_70916[(11)]);
var inst_70876 = cljs.core._nth.call(null,inst_70869,inst_70871);
var state_70916__$1 = state_70916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70916__$1,(13),out,inst_70876);
} else {
if((state_val_70917 === (18))){
var inst_70882 = (state_70916[(7)]);
var inst_70891 = cljs.core.first.call(null,inst_70882);
var state_70916__$1 = state_70916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70916__$1,(20),out,inst_70891);
} else {
if((state_val_70917 === (8))){
var inst_70871 = (state_70916[(11)]);
var inst_70870 = (state_70916[(12)]);
var inst_70873 = (inst_70871 < inst_70870);
var inst_70874 = inst_70873;
var state_70916__$1 = state_70916;
if(cljs.core.truth_(inst_70874)){
var statearr_70950_70981 = state_70916__$1;
(statearr_70950_70981[(1)] = (10));

} else {
var statearr_70951_70982 = state_70916__$1;
(statearr_70951_70982[(1)] = (11));

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
});})(c__43337__auto__))
;
return ((function (switch__43223__auto__,c__43337__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_70955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70955[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__);

(statearr_70955[(1)] = (1));

return statearr_70955;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____1 = (function (state_70916){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_70916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e70956){if((e70956 instanceof Object)){
var ex__43227__auto__ = e70956;
var statearr_70957_70983 = state_70916;
(statearr_70957_70983[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70984 = state_70916;
state_70916 = G__70984;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__ = function(state_70916){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____1.call(this,state_70916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__))
})();
var state__43339__auto__ = (function (){var statearr_70958 = f__43338__auto__.call(null);
(statearr_70958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_70958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__))
);

return c__43337__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args70985 = [];
var len__35573__auto___70988 = arguments.length;
var i__35574__auto___70989 = (0);
while(true){
if((i__35574__auto___70989 < len__35573__auto___70988)){
args70985.push((arguments[i__35574__auto___70989]));

var G__70990 = (i__35574__auto___70989 + (1));
i__35574__auto___70989 = G__70990;
continue;
} else {
}
break;
}

var G__70987 = args70985.length;
switch (G__70987) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70985.length)].join('')));

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
var args70992 = [];
var len__35573__auto___70995 = arguments.length;
var i__35574__auto___70996 = (0);
while(true){
if((i__35574__auto___70996 < len__35573__auto___70995)){
args70992.push((arguments[i__35574__auto___70996]));

var G__70997 = (i__35574__auto___70996 + (1));
i__35574__auto___70996 = G__70997;
continue;
} else {
}
break;
}

var G__70994 = args70992.length;
switch (G__70994) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70992.length)].join('')));

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
var args70999 = [];
var len__35573__auto___71050 = arguments.length;
var i__35574__auto___71051 = (0);
while(true){
if((i__35574__auto___71051 < len__35573__auto___71050)){
args70999.push((arguments[i__35574__auto___71051]));

var G__71052 = (i__35574__auto___71051 + (1));
i__35574__auto___71051 = G__71052;
continue;
} else {
}
break;
}

var G__71001 = args70999.length;
switch (G__71001) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70999.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43337__auto___71054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___71054,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___71054,out){
return (function (state_71025){
var state_val_71026 = (state_71025[(1)]);
if((state_val_71026 === (7))){
var inst_71020 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
var statearr_71027_71055 = state_71025__$1;
(statearr_71027_71055[(2)] = inst_71020);

(statearr_71027_71055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (1))){
var inst_71002 = null;
var state_71025__$1 = (function (){var statearr_71028 = state_71025;
(statearr_71028[(7)] = inst_71002);

return statearr_71028;
})();
var statearr_71029_71056 = state_71025__$1;
(statearr_71029_71056[(2)] = null);

(statearr_71029_71056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (4))){
var inst_71005 = (state_71025[(8)]);
var inst_71005__$1 = (state_71025[(2)]);
var inst_71006 = (inst_71005__$1 == null);
var inst_71007 = cljs.core.not.call(null,inst_71006);
var state_71025__$1 = (function (){var statearr_71030 = state_71025;
(statearr_71030[(8)] = inst_71005__$1);

return statearr_71030;
})();
if(inst_71007){
var statearr_71031_71057 = state_71025__$1;
(statearr_71031_71057[(1)] = (5));

} else {
var statearr_71032_71058 = state_71025__$1;
(statearr_71032_71058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (6))){
var state_71025__$1 = state_71025;
var statearr_71033_71059 = state_71025__$1;
(statearr_71033_71059[(2)] = null);

(statearr_71033_71059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (3))){
var inst_71022 = (state_71025[(2)]);
var inst_71023 = cljs.core.async.close_BANG_.call(null,out);
var state_71025__$1 = (function (){var statearr_71034 = state_71025;
(statearr_71034[(9)] = inst_71022);

return statearr_71034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71025__$1,inst_71023);
} else {
if((state_val_71026 === (2))){
var state_71025__$1 = state_71025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71025__$1,(4),ch);
} else {
if((state_val_71026 === (11))){
var inst_71005 = (state_71025[(8)]);
var inst_71014 = (state_71025[(2)]);
var inst_71002 = inst_71005;
var state_71025__$1 = (function (){var statearr_71035 = state_71025;
(statearr_71035[(7)] = inst_71002);

(statearr_71035[(10)] = inst_71014);

return statearr_71035;
})();
var statearr_71036_71060 = state_71025__$1;
(statearr_71036_71060[(2)] = null);

(statearr_71036_71060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (9))){
var inst_71005 = (state_71025[(8)]);
var state_71025__$1 = state_71025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71025__$1,(11),out,inst_71005);
} else {
if((state_val_71026 === (5))){
var inst_71002 = (state_71025[(7)]);
var inst_71005 = (state_71025[(8)]);
var inst_71009 = cljs.core._EQ_.call(null,inst_71005,inst_71002);
var state_71025__$1 = state_71025;
if(inst_71009){
var statearr_71038_71061 = state_71025__$1;
(statearr_71038_71061[(1)] = (8));

} else {
var statearr_71039_71062 = state_71025__$1;
(statearr_71039_71062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (10))){
var inst_71017 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
var statearr_71040_71063 = state_71025__$1;
(statearr_71040_71063[(2)] = inst_71017);

(statearr_71040_71063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (8))){
var inst_71002 = (state_71025[(7)]);
var tmp71037 = inst_71002;
var inst_71002__$1 = tmp71037;
var state_71025__$1 = (function (){var statearr_71041 = state_71025;
(statearr_71041[(7)] = inst_71002__$1);

return statearr_71041;
})();
var statearr_71042_71064 = state_71025__$1;
(statearr_71042_71064[(2)] = null);

(statearr_71042_71064[(1)] = (2));


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
});})(c__43337__auto___71054,out))
;
return ((function (switch__43223__auto__,c__43337__auto___71054,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_71046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71046[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_71046[(1)] = (1));

return statearr_71046;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_71025){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_71025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e71047){if((e71047 instanceof Object)){
var ex__43227__auto__ = e71047;
var statearr_71048_71065 = state_71025;
(statearr_71048_71065[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71066 = state_71025;
state_71025 = G__71066;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_71025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_71025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___71054,out))
})();
var state__43339__auto__ = (function (){var statearr_71049 = f__43338__auto__.call(null);
(statearr_71049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___71054);

return statearr_71049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___71054,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args71067 = [];
var len__35573__auto___71137 = arguments.length;
var i__35574__auto___71138 = (0);
while(true){
if((i__35574__auto___71138 < len__35573__auto___71137)){
args71067.push((arguments[i__35574__auto___71138]));

var G__71139 = (i__35574__auto___71138 + (1));
i__35574__auto___71138 = G__71139;
continue;
} else {
}
break;
}

var G__71069 = args71067.length;
switch (G__71069) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71067.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43337__auto___71141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___71141,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___71141,out){
return (function (state_71107){
var state_val_71108 = (state_71107[(1)]);
if((state_val_71108 === (7))){
var inst_71103 = (state_71107[(2)]);
var state_71107__$1 = state_71107;
var statearr_71109_71142 = state_71107__$1;
(statearr_71109_71142[(2)] = inst_71103);

(statearr_71109_71142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (1))){
var inst_71070 = (new Array(n));
var inst_71071 = inst_71070;
var inst_71072 = (0);
var state_71107__$1 = (function (){var statearr_71110 = state_71107;
(statearr_71110[(7)] = inst_71072);

(statearr_71110[(8)] = inst_71071);

return statearr_71110;
})();
var statearr_71111_71143 = state_71107__$1;
(statearr_71111_71143[(2)] = null);

(statearr_71111_71143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (4))){
var inst_71075 = (state_71107[(9)]);
var inst_71075__$1 = (state_71107[(2)]);
var inst_71076 = (inst_71075__$1 == null);
var inst_71077 = cljs.core.not.call(null,inst_71076);
var state_71107__$1 = (function (){var statearr_71112 = state_71107;
(statearr_71112[(9)] = inst_71075__$1);

return statearr_71112;
})();
if(inst_71077){
var statearr_71113_71144 = state_71107__$1;
(statearr_71113_71144[(1)] = (5));

} else {
var statearr_71114_71145 = state_71107__$1;
(statearr_71114_71145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (15))){
var inst_71097 = (state_71107[(2)]);
var state_71107__$1 = state_71107;
var statearr_71115_71146 = state_71107__$1;
(statearr_71115_71146[(2)] = inst_71097);

(statearr_71115_71146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (13))){
var state_71107__$1 = state_71107;
var statearr_71116_71147 = state_71107__$1;
(statearr_71116_71147[(2)] = null);

(statearr_71116_71147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (6))){
var inst_71072 = (state_71107[(7)]);
var inst_71093 = (inst_71072 > (0));
var state_71107__$1 = state_71107;
if(cljs.core.truth_(inst_71093)){
var statearr_71117_71148 = state_71107__$1;
(statearr_71117_71148[(1)] = (12));

} else {
var statearr_71118_71149 = state_71107__$1;
(statearr_71118_71149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (3))){
var inst_71105 = (state_71107[(2)]);
var state_71107__$1 = state_71107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71107__$1,inst_71105);
} else {
if((state_val_71108 === (12))){
var inst_71071 = (state_71107[(8)]);
var inst_71095 = cljs.core.vec.call(null,inst_71071);
var state_71107__$1 = state_71107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71107__$1,(15),out,inst_71095);
} else {
if((state_val_71108 === (2))){
var state_71107__$1 = state_71107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71107__$1,(4),ch);
} else {
if((state_val_71108 === (11))){
var inst_71087 = (state_71107[(2)]);
var inst_71088 = (new Array(n));
var inst_71071 = inst_71088;
var inst_71072 = (0);
var state_71107__$1 = (function (){var statearr_71119 = state_71107;
(statearr_71119[(7)] = inst_71072);

(statearr_71119[(10)] = inst_71087);

(statearr_71119[(8)] = inst_71071);

return statearr_71119;
})();
var statearr_71120_71150 = state_71107__$1;
(statearr_71120_71150[(2)] = null);

(statearr_71120_71150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (9))){
var inst_71071 = (state_71107[(8)]);
var inst_71085 = cljs.core.vec.call(null,inst_71071);
var state_71107__$1 = state_71107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71107__$1,(11),out,inst_71085);
} else {
if((state_val_71108 === (5))){
var inst_71072 = (state_71107[(7)]);
var inst_71080 = (state_71107[(11)]);
var inst_71075 = (state_71107[(9)]);
var inst_71071 = (state_71107[(8)]);
var inst_71079 = (inst_71071[inst_71072] = inst_71075);
var inst_71080__$1 = (inst_71072 + (1));
var inst_71081 = (inst_71080__$1 < n);
var state_71107__$1 = (function (){var statearr_71121 = state_71107;
(statearr_71121[(11)] = inst_71080__$1);

(statearr_71121[(12)] = inst_71079);

return statearr_71121;
})();
if(cljs.core.truth_(inst_71081)){
var statearr_71122_71151 = state_71107__$1;
(statearr_71122_71151[(1)] = (8));

} else {
var statearr_71123_71152 = state_71107__$1;
(statearr_71123_71152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (14))){
var inst_71100 = (state_71107[(2)]);
var inst_71101 = cljs.core.async.close_BANG_.call(null,out);
var state_71107__$1 = (function (){var statearr_71125 = state_71107;
(statearr_71125[(13)] = inst_71100);

return statearr_71125;
})();
var statearr_71126_71153 = state_71107__$1;
(statearr_71126_71153[(2)] = inst_71101);

(statearr_71126_71153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (10))){
var inst_71091 = (state_71107[(2)]);
var state_71107__$1 = state_71107;
var statearr_71127_71154 = state_71107__$1;
(statearr_71127_71154[(2)] = inst_71091);

(statearr_71127_71154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71108 === (8))){
var inst_71080 = (state_71107[(11)]);
var inst_71071 = (state_71107[(8)]);
var tmp71124 = inst_71071;
var inst_71071__$1 = tmp71124;
var inst_71072 = inst_71080;
var state_71107__$1 = (function (){var statearr_71128 = state_71107;
(statearr_71128[(7)] = inst_71072);

(statearr_71128[(8)] = inst_71071__$1);

return statearr_71128;
})();
var statearr_71129_71155 = state_71107__$1;
(statearr_71129_71155[(2)] = null);

(statearr_71129_71155[(1)] = (2));


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
});})(c__43337__auto___71141,out))
;
return ((function (switch__43223__auto__,c__43337__auto___71141,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_71133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71133[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_71133[(1)] = (1));

return statearr_71133;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_71107){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_71107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e71134){if((e71134 instanceof Object)){
var ex__43227__auto__ = e71134;
var statearr_71135_71156 = state_71107;
(statearr_71135_71156[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71157 = state_71107;
state_71107 = G__71157;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_71107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_71107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___71141,out))
})();
var state__43339__auto__ = (function (){var statearr_71136 = f__43338__auto__.call(null);
(statearr_71136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___71141);

return statearr_71136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___71141,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args71158 = [];
var len__35573__auto___71232 = arguments.length;
var i__35574__auto___71233 = (0);
while(true){
if((i__35574__auto___71233 < len__35573__auto___71232)){
args71158.push((arguments[i__35574__auto___71233]));

var G__71234 = (i__35574__auto___71233 + (1));
i__35574__auto___71233 = G__71234;
continue;
} else {
}
break;
}

var G__71160 = args71158.length;
switch (G__71160) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71158.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43337__auto___71236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___71236,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___71236,out){
return (function (state_71202){
var state_val_71203 = (state_71202[(1)]);
if((state_val_71203 === (7))){
var inst_71198 = (state_71202[(2)]);
var state_71202__$1 = state_71202;
var statearr_71204_71237 = state_71202__$1;
(statearr_71204_71237[(2)] = inst_71198);

(statearr_71204_71237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (1))){
var inst_71161 = [];
var inst_71162 = inst_71161;
var inst_71163 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71202__$1 = (function (){var statearr_71205 = state_71202;
(statearr_71205[(7)] = inst_71162);

(statearr_71205[(8)] = inst_71163);

return statearr_71205;
})();
var statearr_71206_71238 = state_71202__$1;
(statearr_71206_71238[(2)] = null);

(statearr_71206_71238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (4))){
var inst_71166 = (state_71202[(9)]);
var inst_71166__$1 = (state_71202[(2)]);
var inst_71167 = (inst_71166__$1 == null);
var inst_71168 = cljs.core.not.call(null,inst_71167);
var state_71202__$1 = (function (){var statearr_71207 = state_71202;
(statearr_71207[(9)] = inst_71166__$1);

return statearr_71207;
})();
if(inst_71168){
var statearr_71208_71239 = state_71202__$1;
(statearr_71208_71239[(1)] = (5));

} else {
var statearr_71209_71240 = state_71202__$1;
(statearr_71209_71240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (15))){
var inst_71192 = (state_71202[(2)]);
var state_71202__$1 = state_71202;
var statearr_71210_71241 = state_71202__$1;
(statearr_71210_71241[(2)] = inst_71192);

(statearr_71210_71241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (13))){
var state_71202__$1 = state_71202;
var statearr_71211_71242 = state_71202__$1;
(statearr_71211_71242[(2)] = null);

(statearr_71211_71242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (6))){
var inst_71162 = (state_71202[(7)]);
var inst_71187 = inst_71162.length;
var inst_71188 = (inst_71187 > (0));
var state_71202__$1 = state_71202;
if(cljs.core.truth_(inst_71188)){
var statearr_71212_71243 = state_71202__$1;
(statearr_71212_71243[(1)] = (12));

} else {
var statearr_71213_71244 = state_71202__$1;
(statearr_71213_71244[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (3))){
var inst_71200 = (state_71202[(2)]);
var state_71202__$1 = state_71202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71202__$1,inst_71200);
} else {
if((state_val_71203 === (12))){
var inst_71162 = (state_71202[(7)]);
var inst_71190 = cljs.core.vec.call(null,inst_71162);
var state_71202__$1 = state_71202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71202__$1,(15),out,inst_71190);
} else {
if((state_val_71203 === (2))){
var state_71202__$1 = state_71202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71202__$1,(4),ch);
} else {
if((state_val_71203 === (11))){
var inst_71166 = (state_71202[(9)]);
var inst_71170 = (state_71202[(10)]);
var inst_71180 = (state_71202[(2)]);
var inst_71181 = [];
var inst_71182 = inst_71181.push(inst_71166);
var inst_71162 = inst_71181;
var inst_71163 = inst_71170;
var state_71202__$1 = (function (){var statearr_71214 = state_71202;
(statearr_71214[(11)] = inst_71182);

(statearr_71214[(12)] = inst_71180);

(statearr_71214[(7)] = inst_71162);

(statearr_71214[(8)] = inst_71163);

return statearr_71214;
})();
var statearr_71215_71245 = state_71202__$1;
(statearr_71215_71245[(2)] = null);

(statearr_71215_71245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (9))){
var inst_71162 = (state_71202[(7)]);
var inst_71178 = cljs.core.vec.call(null,inst_71162);
var state_71202__$1 = state_71202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71202__$1,(11),out,inst_71178);
} else {
if((state_val_71203 === (5))){
var inst_71166 = (state_71202[(9)]);
var inst_71170 = (state_71202[(10)]);
var inst_71163 = (state_71202[(8)]);
var inst_71170__$1 = f.call(null,inst_71166);
var inst_71171 = cljs.core._EQ_.call(null,inst_71170__$1,inst_71163);
var inst_71172 = cljs.core.keyword_identical_QMARK_.call(null,inst_71163,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71173 = (inst_71171) || (inst_71172);
var state_71202__$1 = (function (){var statearr_71216 = state_71202;
(statearr_71216[(10)] = inst_71170__$1);

return statearr_71216;
})();
if(cljs.core.truth_(inst_71173)){
var statearr_71217_71246 = state_71202__$1;
(statearr_71217_71246[(1)] = (8));

} else {
var statearr_71218_71247 = state_71202__$1;
(statearr_71218_71247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (14))){
var inst_71195 = (state_71202[(2)]);
var inst_71196 = cljs.core.async.close_BANG_.call(null,out);
var state_71202__$1 = (function (){var statearr_71220 = state_71202;
(statearr_71220[(13)] = inst_71195);

return statearr_71220;
})();
var statearr_71221_71248 = state_71202__$1;
(statearr_71221_71248[(2)] = inst_71196);

(statearr_71221_71248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (10))){
var inst_71185 = (state_71202[(2)]);
var state_71202__$1 = state_71202;
var statearr_71222_71249 = state_71202__$1;
(statearr_71222_71249[(2)] = inst_71185);

(statearr_71222_71249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71203 === (8))){
var inst_71166 = (state_71202[(9)]);
var inst_71170 = (state_71202[(10)]);
var inst_71162 = (state_71202[(7)]);
var inst_71175 = inst_71162.push(inst_71166);
var tmp71219 = inst_71162;
var inst_71162__$1 = tmp71219;
var inst_71163 = inst_71170;
var state_71202__$1 = (function (){var statearr_71223 = state_71202;
(statearr_71223[(14)] = inst_71175);

(statearr_71223[(7)] = inst_71162__$1);

(statearr_71223[(8)] = inst_71163);

return statearr_71223;
})();
var statearr_71224_71250 = state_71202__$1;
(statearr_71224_71250[(2)] = null);

(statearr_71224_71250[(1)] = (2));


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
});})(c__43337__auto___71236,out))
;
return ((function (switch__43223__auto__,c__43337__auto___71236,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_71228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71228[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_71228[(1)] = (1));

return statearr_71228;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_71202){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_71202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e71229){if((e71229 instanceof Object)){
var ex__43227__auto__ = e71229;
var statearr_71230_71251 = state_71202;
(statearr_71230_71251[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71252 = state_71202;
state_71202 = G__71252;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_71202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_71202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___71236,out))
})();
var state__43339__auto__ = (function (){var statearr_71231 = f__43338__auto__.call(null);
(statearr_71231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___71236);

return statearr_71231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___71236,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1488154314114