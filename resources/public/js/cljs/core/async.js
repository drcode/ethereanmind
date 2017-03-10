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
var args50741 = [];
var len__35410__auto___50747 = arguments.length;
var i__35411__auto___50748 = (0);
while(true){
if((i__35411__auto___50748 < len__35410__auto___50747)){
args50741.push((arguments[i__35411__auto___50748]));

var G__50749 = (i__35411__auto___50748 + (1));
i__35411__auto___50748 = G__50749;
continue;
} else {
}
break;
}

var G__50743 = args50741.length;
switch (G__50743) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50741.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async50744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50744 = (function (f,blockable,meta50745){
this.f = f;
this.blockable = blockable;
this.meta50745 = meta50745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50746,meta50745__$1){
var self__ = this;
var _50746__$1 = this;
return (new cljs.core.async.t_cljs$core$async50744(self__.f,self__.blockable,meta50745__$1));
});


cljs.core.async.t_cljs$core$async50744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50746){
var self__ = this;
var _50746__$1 = this;
return self__.meta50745;
});


cljs.core.async.t_cljs$core$async50744.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async50744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async50744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async50744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50745","meta50745",-178102602,null)], null);
});

cljs.core.async.t_cljs$core$async50744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50744";

cljs.core.async.t_cljs$core$async50744.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async50744");
});

cljs.core.async.__GT_t_cljs$core$async50744 = (function cljs$core$async$__GT_t_cljs$core$async50744(f__$1,blockable__$1,meta50745){
return (new cljs.core.async.t_cljs$core$async50744(f__$1,blockable__$1,meta50745));
});

}

return (new cljs.core.async.t_cljs$core$async50744(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args50753 = [];
var len__35410__auto___50756 = arguments.length;
var i__35411__auto___50757 = (0);
while(true){
if((i__35411__auto___50757 < len__35410__auto___50756)){
args50753.push((arguments[i__35411__auto___50757]));

var G__50758 = (i__35411__auto___50757 + (1));
i__35411__auto___50757 = G__50758;
continue;
} else {
}
break;
}

var G__50755 = args50753.length;
switch (G__50755) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50753.length)].join('')));

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
var args50760 = [];
var len__35410__auto___50763 = arguments.length;
var i__35411__auto___50764 = (0);
while(true){
if((i__35411__auto___50764 < len__35410__auto___50763)){
args50760.push((arguments[i__35411__auto___50764]));

var G__50765 = (i__35411__auto___50764 + (1));
i__35411__auto___50764 = G__50765;
continue;
} else {
}
break;
}

var G__50762 = args50760.length;
switch (G__50762) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50760.length)].join('')));

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
var args50767 = [];
var len__35410__auto___50770 = arguments.length;
var i__35411__auto___50771 = (0);
while(true){
if((i__35411__auto___50771 < len__35410__auto___50770)){
args50767.push((arguments[i__35411__auto___50771]));

var G__50772 = (i__35411__auto___50771 + (1));
i__35411__auto___50771 = G__50772;
continue;
} else {
}
break;
}

var G__50769 = args50767.length;
switch (G__50769) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50767.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_50774,ret){
return (function (){
return fn1.call(null,val_50774);
});})(val_50774,ret))
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
var args50775 = [];
var len__35410__auto___50778 = arguments.length;
var i__35411__auto___50779 = (0);
while(true){
if((i__35411__auto___50779 < len__35410__auto___50778)){
args50775.push((arguments[i__35411__auto___50779]));

var G__50780 = (i__35411__auto___50779 + (1));
i__35411__auto___50779 = G__50780;
continue;
} else {
}
break;
}

var G__50777 = args50775.length;
switch (G__50777) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50775.length)].join('')));

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
var n__35240__auto___50782 = n;
var x_50783 = (0);
while(true){
if((x_50783 < n__35240__auto___50782)){
(a[x_50783] = (0));

var G__50784 = (x_50783 + (1));
x_50783 = G__50784;
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

var G__50785 = (i + (1));
i = G__50785;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async50789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50789 = (function (alt_flag,flag,meta50790){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta50790 = meta50790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50791,meta50790__$1){
var self__ = this;
var _50791__$1 = this;
return (new cljs.core.async.t_cljs$core$async50789(self__.alt_flag,self__.flag,meta50790__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async50789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50791){
var self__ = this;
var _50791__$1 = this;
return self__.meta50790;
});})(flag))
;


cljs.core.async.t_cljs$core$async50789.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async50789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async50789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async50789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50789.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50790","meta50790",1002844073,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50789";

cljs.core.async.t_cljs$core$async50789.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async50789");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async50789 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50789(alt_flag__$1,flag__$1,meta50790){
return (new cljs.core.async.t_cljs$core$async50789(alt_flag__$1,flag__$1,meta50790));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50789(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50795 = (function (alt_handler,flag,cb,meta50796){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta50796 = meta50796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50797,meta50796__$1){
var self__ = this;
var _50797__$1 = this;
return (new cljs.core.async.t_cljs$core$async50795(self__.alt_handler,self__.flag,self__.cb,meta50796__$1));
});


cljs.core.async.t_cljs$core$async50795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50797){
var self__ = this;
var _50797__$1 = this;
return self__.meta50796;
});


cljs.core.async.t_cljs$core$async50795.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async50795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async50795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async50795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50796","meta50796",2057618364,null)], null);
});

cljs.core.async.t_cljs$core$async50795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50795";

cljs.core.async.t_cljs$core$async50795.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async50795");
});

cljs.core.async.__GT_t_cljs$core$async50795 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50795(alt_handler__$1,flag__$1,cb__$1,meta50796){
return (new cljs.core.async.t_cljs$core$async50795(alt_handler__$1,flag__$1,cb__$1,meta50796));
});

}

return (new cljs.core.async.t_cljs$core$async50795(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50798_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50798_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50799_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50799_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34227__auto__ = wport;
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50800 = (i + (1));
i = G__50800;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34227__auto__ = ret;
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6728__auto__ = (function (){var and__34215__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34215__auto__;
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
var args__35417__auto__ = [];
var len__35410__auto___50806 = arguments.length;
var i__35411__auto___50807 = (0);
while(true){
if((i__35411__auto___50807 < len__35410__auto___50806)){
args__35417__auto__.push((arguments[i__35411__auto___50807]));

var G__50808 = (i__35411__auto___50807 + (1));
i__35411__auto___50807 = G__50808;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((1) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35418__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50803){
var map__50804 = p__50803;
var map__50804__$1 = ((((!((map__50804 == null)))?((((map__50804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50804):map__50804);
var opts = map__50804__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50801){
var G__50802 = cljs.core.first.call(null,seq50801);
var seq50801__$1 = cljs.core.next.call(null,seq50801);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50802,seq50801__$1);
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
var args50809 = [];
var len__35410__auto___50859 = arguments.length;
var i__35411__auto___50860 = (0);
while(true){
if((i__35411__auto___50860 < len__35410__auto___50859)){
args50809.push((arguments[i__35411__auto___50860]));

var G__50861 = (i__35411__auto___50860 + (1));
i__35411__auto___50860 = G__50861;
continue;
} else {
}
break;
}

var G__50811 = args50809.length;
switch (G__50811) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50809.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42763__auto___50863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___50863){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___50863){
return (function (state_50835){
var state_val_50836 = (state_50835[(1)]);
if((state_val_50836 === (7))){
var inst_50831 = (state_50835[(2)]);
var state_50835__$1 = state_50835;
var statearr_50837_50864 = state_50835__$1;
(statearr_50837_50864[(2)] = inst_50831);

(statearr_50837_50864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (1))){
var state_50835__$1 = state_50835;
var statearr_50838_50865 = state_50835__$1;
(statearr_50838_50865[(2)] = null);

(statearr_50838_50865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (4))){
var inst_50814 = (state_50835[(7)]);
var inst_50814__$1 = (state_50835[(2)]);
var inst_50815 = (inst_50814__$1 == null);
var state_50835__$1 = (function (){var statearr_50839 = state_50835;
(statearr_50839[(7)] = inst_50814__$1);

return statearr_50839;
})();
if(cljs.core.truth_(inst_50815)){
var statearr_50840_50866 = state_50835__$1;
(statearr_50840_50866[(1)] = (5));

} else {
var statearr_50841_50867 = state_50835__$1;
(statearr_50841_50867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (13))){
var state_50835__$1 = state_50835;
var statearr_50842_50868 = state_50835__$1;
(statearr_50842_50868[(2)] = null);

(statearr_50842_50868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (6))){
var inst_50814 = (state_50835[(7)]);
var state_50835__$1 = state_50835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50835__$1,(11),to,inst_50814);
} else {
if((state_val_50836 === (3))){
var inst_50833 = (state_50835[(2)]);
var state_50835__$1 = state_50835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50835__$1,inst_50833);
} else {
if((state_val_50836 === (12))){
var state_50835__$1 = state_50835;
var statearr_50843_50869 = state_50835__$1;
(statearr_50843_50869[(2)] = null);

(statearr_50843_50869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (2))){
var state_50835__$1 = state_50835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50835__$1,(4),from);
} else {
if((state_val_50836 === (11))){
var inst_50824 = (state_50835[(2)]);
var state_50835__$1 = state_50835;
if(cljs.core.truth_(inst_50824)){
var statearr_50844_50870 = state_50835__$1;
(statearr_50844_50870[(1)] = (12));

} else {
var statearr_50845_50871 = state_50835__$1;
(statearr_50845_50871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (9))){
var state_50835__$1 = state_50835;
var statearr_50846_50872 = state_50835__$1;
(statearr_50846_50872[(2)] = null);

(statearr_50846_50872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (5))){
var state_50835__$1 = state_50835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50847_50873 = state_50835__$1;
(statearr_50847_50873[(1)] = (8));

} else {
var statearr_50848_50874 = state_50835__$1;
(statearr_50848_50874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (14))){
var inst_50829 = (state_50835[(2)]);
var state_50835__$1 = state_50835;
var statearr_50849_50875 = state_50835__$1;
(statearr_50849_50875[(2)] = inst_50829);

(statearr_50849_50875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (10))){
var inst_50821 = (state_50835[(2)]);
var state_50835__$1 = state_50835;
var statearr_50850_50876 = state_50835__$1;
(statearr_50850_50876[(2)] = inst_50821);

(statearr_50850_50876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50836 === (8))){
var inst_50818 = cljs.core.async.close_BANG_.call(null,to);
var state_50835__$1 = state_50835;
var statearr_50851_50877 = state_50835__$1;
(statearr_50851_50877[(2)] = inst_50818);

(statearr_50851_50877[(1)] = (10));


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
});})(c__42763__auto___50863))
;
return ((function (switch__42740__auto__,c__42763__auto___50863){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_50855 = [null,null,null,null,null,null,null,null];
(statearr_50855[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_50855[(1)] = (1));

return statearr_50855;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_50835){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_50835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e50856){if((e50856 instanceof Object)){
var ex__42744__auto__ = e50856;
var statearr_50857_50878 = state_50835;
(statearr_50857_50878[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50879 = state_50835;
state_50835 = G__50879;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_50835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_50835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___50863))
})();
var state__42765__auto__ = (function (){var statearr_50858 = f__42764__auto__.call(null);
(statearr_50858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___50863);

return statearr_50858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___50863))
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
return (function (p__51067){
var vec__51068 = p__51067;
var v = cljs.core.nth.call(null,vec__51068,(0),null);
var p = cljs.core.nth.call(null,vec__51068,(1),null);
var job = vec__51068;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__42763__auto___51254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___51254,res,vec__51068,v,p,job,jobs,results){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___51254,res,vec__51068,v,p,job,jobs,results){
return (function (state_51075){
var state_val_51076 = (state_51075[(1)]);
if((state_val_51076 === (1))){
var state_51075__$1 = state_51075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51075__$1,(2),res,v);
} else {
if((state_val_51076 === (2))){
var inst_51072 = (state_51075[(2)]);
var inst_51073 = cljs.core.async.close_BANG_.call(null,res);
var state_51075__$1 = (function (){var statearr_51077 = state_51075;
(statearr_51077[(7)] = inst_51072);

return statearr_51077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51075__$1,inst_51073);
} else {
return null;
}
}
});})(c__42763__auto___51254,res,vec__51068,v,p,job,jobs,results))
;
return ((function (switch__42740__auto__,c__42763__auto___51254,res,vec__51068,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0 = (function (){
var statearr_51081 = [null,null,null,null,null,null,null,null];
(statearr_51081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__);

(statearr_51081[(1)] = (1));

return statearr_51081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1 = (function (state_51075){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51082){if((e51082 instanceof Object)){
var ex__42744__auto__ = e51082;
var statearr_51083_51255 = state_51075;
(statearr_51083_51255[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51256 = state_51075;
state_51075 = G__51256;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = function(state_51075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1.call(this,state_51075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___51254,res,vec__51068,v,p,job,jobs,results))
})();
var state__42765__auto__ = (function (){var statearr_51084 = f__42764__auto__.call(null);
(statearr_51084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___51254);

return statearr_51084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___51254,res,vec__51068,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51085){
var vec__51086 = p__51085;
var v = cljs.core.nth.call(null,vec__51086,(0),null);
var p = cljs.core.nth.call(null,vec__51086,(1),null);
var job = vec__51086;
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
var n__35240__auto___51257 = n;
var __51258 = (0);
while(true){
if((__51258 < n__35240__auto___51257)){
var G__51089_51259 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__51089_51259) {
case "compute":
var c__42763__auto___51261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51258,c__42763__auto___51261,G__51089_51259,n__35240__auto___51257,jobs,results,process,async){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (__51258,c__42763__auto___51261,G__51089_51259,n__35240__auto___51257,jobs,results,process,async){
return (function (state_51102){
var state_val_51103 = (state_51102[(1)]);
if((state_val_51103 === (1))){
var state_51102__$1 = state_51102;
var statearr_51104_51262 = state_51102__$1;
(statearr_51104_51262[(2)] = null);

(statearr_51104_51262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51103 === (2))){
var state_51102__$1 = state_51102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51102__$1,(4),jobs);
} else {
if((state_val_51103 === (3))){
var inst_51100 = (state_51102[(2)]);
var state_51102__$1 = state_51102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51102__$1,inst_51100);
} else {
if((state_val_51103 === (4))){
var inst_51092 = (state_51102[(2)]);
var inst_51093 = process.call(null,inst_51092);
var state_51102__$1 = state_51102;
if(cljs.core.truth_(inst_51093)){
var statearr_51105_51263 = state_51102__$1;
(statearr_51105_51263[(1)] = (5));

} else {
var statearr_51106_51264 = state_51102__$1;
(statearr_51106_51264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51103 === (5))){
var state_51102__$1 = state_51102;
var statearr_51107_51265 = state_51102__$1;
(statearr_51107_51265[(2)] = null);

(statearr_51107_51265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51103 === (6))){
var state_51102__$1 = state_51102;
var statearr_51108_51266 = state_51102__$1;
(statearr_51108_51266[(2)] = null);

(statearr_51108_51266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51103 === (7))){
var inst_51098 = (state_51102[(2)]);
var state_51102__$1 = state_51102;
var statearr_51109_51267 = state_51102__$1;
(statearr_51109_51267[(2)] = inst_51098);

(statearr_51109_51267[(1)] = (3));


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
});})(__51258,c__42763__auto___51261,G__51089_51259,n__35240__auto___51257,jobs,results,process,async))
;
return ((function (__51258,switch__42740__auto__,c__42763__auto___51261,G__51089_51259,n__35240__auto___51257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0 = (function (){
var statearr_51113 = [null,null,null,null,null,null,null];
(statearr_51113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__);

(statearr_51113[(1)] = (1));

return statearr_51113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1 = (function (state_51102){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51114){if((e51114 instanceof Object)){
var ex__42744__auto__ = e51114;
var statearr_51115_51268 = state_51102;
(statearr_51115_51268[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51269 = state_51102;
state_51102 = G__51269;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = function(state_51102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1.call(this,state_51102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__;
})()
;})(__51258,switch__42740__auto__,c__42763__auto___51261,G__51089_51259,n__35240__auto___51257,jobs,results,process,async))
})();
var state__42765__auto__ = (function (){var statearr_51116 = f__42764__auto__.call(null);
(statearr_51116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___51261);

return statearr_51116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(__51258,c__42763__auto___51261,G__51089_51259,n__35240__auto___51257,jobs,results,process,async))
);


break;
case "async":
var c__42763__auto___51270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51258,c__42763__auto___51270,G__51089_51259,n__35240__auto___51257,jobs,results,process,async){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (__51258,c__42763__auto___51270,G__51089_51259,n__35240__auto___51257,jobs,results,process,async){
return (function (state_51129){
var state_val_51130 = (state_51129[(1)]);
if((state_val_51130 === (1))){
var state_51129__$1 = state_51129;
var statearr_51131_51271 = state_51129__$1;
(statearr_51131_51271[(2)] = null);

(statearr_51131_51271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51130 === (2))){
var state_51129__$1 = state_51129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51129__$1,(4),jobs);
} else {
if((state_val_51130 === (3))){
var inst_51127 = (state_51129[(2)]);
var state_51129__$1 = state_51129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51129__$1,inst_51127);
} else {
if((state_val_51130 === (4))){
var inst_51119 = (state_51129[(2)]);
var inst_51120 = async.call(null,inst_51119);
var state_51129__$1 = state_51129;
if(cljs.core.truth_(inst_51120)){
var statearr_51132_51272 = state_51129__$1;
(statearr_51132_51272[(1)] = (5));

} else {
var statearr_51133_51273 = state_51129__$1;
(statearr_51133_51273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51130 === (5))){
var state_51129__$1 = state_51129;
var statearr_51134_51274 = state_51129__$1;
(statearr_51134_51274[(2)] = null);

(statearr_51134_51274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51130 === (6))){
var state_51129__$1 = state_51129;
var statearr_51135_51275 = state_51129__$1;
(statearr_51135_51275[(2)] = null);

(statearr_51135_51275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51130 === (7))){
var inst_51125 = (state_51129[(2)]);
var state_51129__$1 = state_51129;
var statearr_51136_51276 = state_51129__$1;
(statearr_51136_51276[(2)] = inst_51125);

(statearr_51136_51276[(1)] = (3));


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
});})(__51258,c__42763__auto___51270,G__51089_51259,n__35240__auto___51257,jobs,results,process,async))
;
return ((function (__51258,switch__42740__auto__,c__42763__auto___51270,G__51089_51259,n__35240__auto___51257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0 = (function (){
var statearr_51140 = [null,null,null,null,null,null,null];
(statearr_51140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__);

(statearr_51140[(1)] = (1));

return statearr_51140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1 = (function (state_51129){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51141){if((e51141 instanceof Object)){
var ex__42744__auto__ = e51141;
var statearr_51142_51277 = state_51129;
(statearr_51142_51277[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51278 = state_51129;
state_51129 = G__51278;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = function(state_51129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1.call(this,state_51129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__;
})()
;})(__51258,switch__42740__auto__,c__42763__auto___51270,G__51089_51259,n__35240__auto___51257,jobs,results,process,async))
})();
var state__42765__auto__ = (function (){var statearr_51143 = f__42764__auto__.call(null);
(statearr_51143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___51270);

return statearr_51143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(__51258,c__42763__auto___51270,G__51089_51259,n__35240__auto___51257,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__51279 = (__51258 + (1));
__51258 = G__51279;
continue;
} else {
}
break;
}

var c__42763__auto___51280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___51280,jobs,results,process,async){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___51280,jobs,results,process,async){
return (function (state_51165){
var state_val_51166 = (state_51165[(1)]);
if((state_val_51166 === (1))){
var state_51165__$1 = state_51165;
var statearr_51167_51281 = state_51165__$1;
(statearr_51167_51281[(2)] = null);

(statearr_51167_51281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (2))){
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51165__$1,(4),from);
} else {
if((state_val_51166 === (3))){
var inst_51163 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51165__$1,inst_51163);
} else {
if((state_val_51166 === (4))){
var inst_51146 = (state_51165[(7)]);
var inst_51146__$1 = (state_51165[(2)]);
var inst_51147 = (inst_51146__$1 == null);
var state_51165__$1 = (function (){var statearr_51168 = state_51165;
(statearr_51168[(7)] = inst_51146__$1);

return statearr_51168;
})();
if(cljs.core.truth_(inst_51147)){
var statearr_51169_51282 = state_51165__$1;
(statearr_51169_51282[(1)] = (5));

} else {
var statearr_51170_51283 = state_51165__$1;
(statearr_51170_51283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (5))){
var inst_51149 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51165__$1 = state_51165;
var statearr_51171_51284 = state_51165__$1;
(statearr_51171_51284[(2)] = inst_51149);

(statearr_51171_51284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (6))){
var inst_51146 = (state_51165[(7)]);
var inst_51151 = (state_51165[(8)]);
var inst_51151__$1 = cljs.core.async.chan.call(null,(1));
var inst_51152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51153 = [inst_51146,inst_51151__$1];
var inst_51154 = (new cljs.core.PersistentVector(null,2,(5),inst_51152,inst_51153,null));
var state_51165__$1 = (function (){var statearr_51172 = state_51165;
(statearr_51172[(8)] = inst_51151__$1);

return statearr_51172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51165__$1,(8),jobs,inst_51154);
} else {
if((state_val_51166 === (7))){
var inst_51161 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51173_51285 = state_51165__$1;
(statearr_51173_51285[(2)] = inst_51161);

(statearr_51173_51285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (8))){
var inst_51151 = (state_51165[(8)]);
var inst_51156 = (state_51165[(2)]);
var state_51165__$1 = (function (){var statearr_51174 = state_51165;
(statearr_51174[(9)] = inst_51156);

return statearr_51174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51165__$1,(9),results,inst_51151);
} else {
if((state_val_51166 === (9))){
var inst_51158 = (state_51165[(2)]);
var state_51165__$1 = (function (){var statearr_51175 = state_51165;
(statearr_51175[(10)] = inst_51158);

return statearr_51175;
})();
var statearr_51176_51286 = state_51165__$1;
(statearr_51176_51286[(2)] = null);

(statearr_51176_51286[(1)] = (2));


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
});})(c__42763__auto___51280,jobs,results,process,async))
;
return ((function (switch__42740__auto__,c__42763__auto___51280,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0 = (function (){
var statearr_51180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__);

(statearr_51180[(1)] = (1));

return statearr_51180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1 = (function (state_51165){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51181){if((e51181 instanceof Object)){
var ex__42744__auto__ = e51181;
var statearr_51182_51287 = state_51165;
(statearr_51182_51287[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51288 = state_51165;
state_51165 = G__51288;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = function(state_51165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1.call(this,state_51165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___51280,jobs,results,process,async))
})();
var state__42765__auto__ = (function (){var statearr_51183 = f__42764__auto__.call(null);
(statearr_51183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___51280);

return statearr_51183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___51280,jobs,results,process,async))
);


var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,jobs,results,process,async){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,jobs,results,process,async){
return (function (state_51221){
var state_val_51222 = (state_51221[(1)]);
if((state_val_51222 === (7))){
var inst_51217 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51223_51289 = state_51221__$1;
(statearr_51223_51289[(2)] = inst_51217);

(statearr_51223_51289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (20))){
var state_51221__$1 = state_51221;
var statearr_51224_51290 = state_51221__$1;
(statearr_51224_51290[(2)] = null);

(statearr_51224_51290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (1))){
var state_51221__$1 = state_51221;
var statearr_51225_51291 = state_51221__$1;
(statearr_51225_51291[(2)] = null);

(statearr_51225_51291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (4))){
var inst_51186 = (state_51221[(7)]);
var inst_51186__$1 = (state_51221[(2)]);
var inst_51187 = (inst_51186__$1 == null);
var state_51221__$1 = (function (){var statearr_51226 = state_51221;
(statearr_51226[(7)] = inst_51186__$1);

return statearr_51226;
})();
if(cljs.core.truth_(inst_51187)){
var statearr_51227_51292 = state_51221__$1;
(statearr_51227_51292[(1)] = (5));

} else {
var statearr_51228_51293 = state_51221__$1;
(statearr_51228_51293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (15))){
var inst_51199 = (state_51221[(8)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51221__$1,(18),to,inst_51199);
} else {
if((state_val_51222 === (21))){
var inst_51212 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51229_51294 = state_51221__$1;
(statearr_51229_51294[(2)] = inst_51212);

(statearr_51229_51294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (13))){
var inst_51214 = (state_51221[(2)]);
var state_51221__$1 = (function (){var statearr_51230 = state_51221;
(statearr_51230[(9)] = inst_51214);

return statearr_51230;
})();
var statearr_51231_51295 = state_51221__$1;
(statearr_51231_51295[(2)] = null);

(statearr_51231_51295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (6))){
var inst_51186 = (state_51221[(7)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51221__$1,(11),inst_51186);
} else {
if((state_val_51222 === (17))){
var inst_51207 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51207)){
var statearr_51232_51296 = state_51221__$1;
(statearr_51232_51296[(1)] = (19));

} else {
var statearr_51233_51297 = state_51221__$1;
(statearr_51233_51297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (3))){
var inst_51219 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51221__$1,inst_51219);
} else {
if((state_val_51222 === (12))){
var inst_51196 = (state_51221[(10)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51221__$1,(14),inst_51196);
} else {
if((state_val_51222 === (2))){
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51221__$1,(4),results);
} else {
if((state_val_51222 === (19))){
var state_51221__$1 = state_51221;
var statearr_51234_51298 = state_51221__$1;
(statearr_51234_51298[(2)] = null);

(statearr_51234_51298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (11))){
var inst_51196 = (state_51221[(2)]);
var state_51221__$1 = (function (){var statearr_51235 = state_51221;
(statearr_51235[(10)] = inst_51196);

return statearr_51235;
})();
var statearr_51236_51299 = state_51221__$1;
(statearr_51236_51299[(2)] = null);

(statearr_51236_51299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (9))){
var state_51221__$1 = state_51221;
var statearr_51237_51300 = state_51221__$1;
(statearr_51237_51300[(2)] = null);

(statearr_51237_51300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (5))){
var state_51221__$1 = state_51221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51238_51301 = state_51221__$1;
(statearr_51238_51301[(1)] = (8));

} else {
var statearr_51239_51302 = state_51221__$1;
(statearr_51239_51302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (14))){
var inst_51201 = (state_51221[(11)]);
var inst_51199 = (state_51221[(8)]);
var inst_51199__$1 = (state_51221[(2)]);
var inst_51200 = (inst_51199__$1 == null);
var inst_51201__$1 = cljs.core.not.call(null,inst_51200);
var state_51221__$1 = (function (){var statearr_51240 = state_51221;
(statearr_51240[(11)] = inst_51201__$1);

(statearr_51240[(8)] = inst_51199__$1);

return statearr_51240;
})();
if(inst_51201__$1){
var statearr_51241_51303 = state_51221__$1;
(statearr_51241_51303[(1)] = (15));

} else {
var statearr_51242_51304 = state_51221__$1;
(statearr_51242_51304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (16))){
var inst_51201 = (state_51221[(11)]);
var state_51221__$1 = state_51221;
var statearr_51243_51305 = state_51221__$1;
(statearr_51243_51305[(2)] = inst_51201);

(statearr_51243_51305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (10))){
var inst_51193 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51244_51306 = state_51221__$1;
(statearr_51244_51306[(2)] = inst_51193);

(statearr_51244_51306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (18))){
var inst_51204 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51245_51307 = state_51221__$1;
(statearr_51245_51307[(2)] = inst_51204);

(statearr_51245_51307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (8))){
var inst_51190 = cljs.core.async.close_BANG_.call(null,to);
var state_51221__$1 = state_51221;
var statearr_51246_51308 = state_51221__$1;
(statearr_51246_51308[(2)] = inst_51190);

(statearr_51246_51308[(1)] = (10));


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
});})(c__42763__auto__,jobs,results,process,async))
;
return ((function (switch__42740__auto__,c__42763__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0 = (function (){
var statearr_51250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__);

(statearr_51250[(1)] = (1));

return statearr_51250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1 = (function (state_51221){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51251){if((e51251 instanceof Object)){
var ex__42744__auto__ = e51251;
var statearr_51252_51309 = state_51221;
(statearr_51252_51309[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51310 = state_51221;
state_51221 = G__51310;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__ = function(state_51221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1.call(this,state_51221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,jobs,results,process,async))
})();
var state__42765__auto__ = (function (){var statearr_51253 = f__42764__auto__.call(null);
(statearr_51253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_51253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,jobs,results,process,async))
);

return c__42763__auto__;
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
var args51311 = [];
var len__35410__auto___51314 = arguments.length;
var i__35411__auto___51315 = (0);
while(true){
if((i__35411__auto___51315 < len__35410__auto___51314)){
args51311.push((arguments[i__35411__auto___51315]));

var G__51316 = (i__35411__auto___51315 + (1));
i__35411__auto___51315 = G__51316;
continue;
} else {
}
break;
}

var G__51313 = args51311.length;
switch (G__51313) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51311.length)].join('')));

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
var args51318 = [];
var len__35410__auto___51321 = arguments.length;
var i__35411__auto___51322 = (0);
while(true){
if((i__35411__auto___51322 < len__35410__auto___51321)){
args51318.push((arguments[i__35411__auto___51322]));

var G__51323 = (i__35411__auto___51322 + (1));
i__35411__auto___51322 = G__51323;
continue;
} else {
}
break;
}

var G__51320 = args51318.length;
switch (G__51320) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51318.length)].join('')));

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
var args51325 = [];
var len__35410__auto___51378 = arguments.length;
var i__35411__auto___51379 = (0);
while(true){
if((i__35411__auto___51379 < len__35410__auto___51378)){
args51325.push((arguments[i__35411__auto___51379]));

var G__51380 = (i__35411__auto___51379 + (1));
i__35411__auto___51379 = G__51380;
continue;
} else {
}
break;
}

var G__51327 = args51325.length;
switch (G__51327) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51325.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__42763__auto___51382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___51382,tc,fc){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___51382,tc,fc){
return (function (state_51353){
var state_val_51354 = (state_51353[(1)]);
if((state_val_51354 === (7))){
var inst_51349 = (state_51353[(2)]);
var state_51353__$1 = state_51353;
var statearr_51355_51383 = state_51353__$1;
(statearr_51355_51383[(2)] = inst_51349);

(statearr_51355_51383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (1))){
var state_51353__$1 = state_51353;
var statearr_51356_51384 = state_51353__$1;
(statearr_51356_51384[(2)] = null);

(statearr_51356_51384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (4))){
var inst_51330 = (state_51353[(7)]);
var inst_51330__$1 = (state_51353[(2)]);
var inst_51331 = (inst_51330__$1 == null);
var state_51353__$1 = (function (){var statearr_51357 = state_51353;
(statearr_51357[(7)] = inst_51330__$1);

return statearr_51357;
})();
if(cljs.core.truth_(inst_51331)){
var statearr_51358_51385 = state_51353__$1;
(statearr_51358_51385[(1)] = (5));

} else {
var statearr_51359_51386 = state_51353__$1;
(statearr_51359_51386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (13))){
var state_51353__$1 = state_51353;
var statearr_51360_51387 = state_51353__$1;
(statearr_51360_51387[(2)] = null);

(statearr_51360_51387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (6))){
var inst_51330 = (state_51353[(7)]);
var inst_51336 = p.call(null,inst_51330);
var state_51353__$1 = state_51353;
if(cljs.core.truth_(inst_51336)){
var statearr_51361_51388 = state_51353__$1;
(statearr_51361_51388[(1)] = (9));

} else {
var statearr_51362_51389 = state_51353__$1;
(statearr_51362_51389[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (3))){
var inst_51351 = (state_51353[(2)]);
var state_51353__$1 = state_51353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51353__$1,inst_51351);
} else {
if((state_val_51354 === (12))){
var state_51353__$1 = state_51353;
var statearr_51363_51390 = state_51353__$1;
(statearr_51363_51390[(2)] = null);

(statearr_51363_51390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (2))){
var state_51353__$1 = state_51353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51353__$1,(4),ch);
} else {
if((state_val_51354 === (11))){
var inst_51330 = (state_51353[(7)]);
var inst_51340 = (state_51353[(2)]);
var state_51353__$1 = state_51353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51353__$1,(8),inst_51340,inst_51330);
} else {
if((state_val_51354 === (9))){
var state_51353__$1 = state_51353;
var statearr_51364_51391 = state_51353__$1;
(statearr_51364_51391[(2)] = tc);

(statearr_51364_51391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (5))){
var inst_51333 = cljs.core.async.close_BANG_.call(null,tc);
var inst_51334 = cljs.core.async.close_BANG_.call(null,fc);
var state_51353__$1 = (function (){var statearr_51365 = state_51353;
(statearr_51365[(8)] = inst_51333);

return statearr_51365;
})();
var statearr_51366_51392 = state_51353__$1;
(statearr_51366_51392[(2)] = inst_51334);

(statearr_51366_51392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (14))){
var inst_51347 = (state_51353[(2)]);
var state_51353__$1 = state_51353;
var statearr_51367_51393 = state_51353__$1;
(statearr_51367_51393[(2)] = inst_51347);

(statearr_51367_51393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (10))){
var state_51353__$1 = state_51353;
var statearr_51368_51394 = state_51353__$1;
(statearr_51368_51394[(2)] = fc);

(statearr_51368_51394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51354 === (8))){
var inst_51342 = (state_51353[(2)]);
var state_51353__$1 = state_51353;
if(cljs.core.truth_(inst_51342)){
var statearr_51369_51395 = state_51353__$1;
(statearr_51369_51395[(1)] = (12));

} else {
var statearr_51370_51396 = state_51353__$1;
(statearr_51370_51396[(1)] = (13));

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
});})(c__42763__auto___51382,tc,fc))
;
return ((function (switch__42740__auto__,c__42763__auto___51382,tc,fc){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_51374 = [null,null,null,null,null,null,null,null,null];
(statearr_51374[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_51374[(1)] = (1));

return statearr_51374;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_51353){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51375){if((e51375 instanceof Object)){
var ex__42744__auto__ = e51375;
var statearr_51376_51397 = state_51353;
(statearr_51376_51397[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51398 = state_51353;
state_51353 = G__51398;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_51353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_51353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___51382,tc,fc))
})();
var state__42765__auto__ = (function (){var statearr_51377 = f__42764__auto__.call(null);
(statearr_51377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___51382);

return statearr_51377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___51382,tc,fc))
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
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_51462){
var state_val_51463 = (state_51462[(1)]);
if((state_val_51463 === (7))){
var inst_51458 = (state_51462[(2)]);
var state_51462__$1 = state_51462;
var statearr_51464_51485 = state_51462__$1;
(statearr_51464_51485[(2)] = inst_51458);

(statearr_51464_51485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (1))){
var inst_51442 = init;
var state_51462__$1 = (function (){var statearr_51465 = state_51462;
(statearr_51465[(7)] = inst_51442);

return statearr_51465;
})();
var statearr_51466_51486 = state_51462__$1;
(statearr_51466_51486[(2)] = null);

(statearr_51466_51486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (4))){
var inst_51445 = (state_51462[(8)]);
var inst_51445__$1 = (state_51462[(2)]);
var inst_51446 = (inst_51445__$1 == null);
var state_51462__$1 = (function (){var statearr_51467 = state_51462;
(statearr_51467[(8)] = inst_51445__$1);

return statearr_51467;
})();
if(cljs.core.truth_(inst_51446)){
var statearr_51468_51487 = state_51462__$1;
(statearr_51468_51487[(1)] = (5));

} else {
var statearr_51469_51488 = state_51462__$1;
(statearr_51469_51488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (6))){
var inst_51445 = (state_51462[(8)]);
var inst_51449 = (state_51462[(9)]);
var inst_51442 = (state_51462[(7)]);
var inst_51449__$1 = f.call(null,inst_51442,inst_51445);
var inst_51450 = cljs.core.reduced_QMARK_.call(null,inst_51449__$1);
var state_51462__$1 = (function (){var statearr_51470 = state_51462;
(statearr_51470[(9)] = inst_51449__$1);

return statearr_51470;
})();
if(inst_51450){
var statearr_51471_51489 = state_51462__$1;
(statearr_51471_51489[(1)] = (8));

} else {
var statearr_51472_51490 = state_51462__$1;
(statearr_51472_51490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (3))){
var inst_51460 = (state_51462[(2)]);
var state_51462__$1 = state_51462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51462__$1,inst_51460);
} else {
if((state_val_51463 === (2))){
var state_51462__$1 = state_51462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51462__$1,(4),ch);
} else {
if((state_val_51463 === (9))){
var inst_51449 = (state_51462[(9)]);
var inst_51442 = inst_51449;
var state_51462__$1 = (function (){var statearr_51473 = state_51462;
(statearr_51473[(7)] = inst_51442);

return statearr_51473;
})();
var statearr_51474_51491 = state_51462__$1;
(statearr_51474_51491[(2)] = null);

(statearr_51474_51491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (5))){
var inst_51442 = (state_51462[(7)]);
var state_51462__$1 = state_51462;
var statearr_51475_51492 = state_51462__$1;
(statearr_51475_51492[(2)] = inst_51442);

(statearr_51475_51492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (10))){
var inst_51456 = (state_51462[(2)]);
var state_51462__$1 = state_51462;
var statearr_51476_51493 = state_51462__$1;
(statearr_51476_51493[(2)] = inst_51456);

(statearr_51476_51493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51463 === (8))){
var inst_51449 = (state_51462[(9)]);
var inst_51452 = cljs.core.deref.call(null,inst_51449);
var state_51462__$1 = state_51462;
var statearr_51477_51494 = state_51462__$1;
(statearr_51477_51494[(2)] = inst_51452);

(statearr_51477_51494[(1)] = (10));


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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42741__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42741__auto____0 = (function (){
var statearr_51481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51481[(0)] = cljs$core$async$reduce_$_state_machine__42741__auto__);

(statearr_51481[(1)] = (1));

return statearr_51481;
});
var cljs$core$async$reduce_$_state_machine__42741__auto____1 = (function (state_51462){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51482){if((e51482 instanceof Object)){
var ex__42744__auto__ = e51482;
var statearr_51483_51495 = state_51462;
(statearr_51483_51495[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51496 = state_51462;
state_51462 = G__51496;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42741__auto__ = function(state_51462){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42741__auto____1.call(this,state_51462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42741__auto____0;
cljs$core$async$reduce_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42741__auto____1;
return cljs$core$async$reduce_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_51484 = f__42764__auto__.call(null);
(statearr_51484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_51484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,f__$1){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,f__$1){
return (function (state_51516){
var state_val_51517 = (state_51516[(1)]);
if((state_val_51517 === (1))){
var inst_51511 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_51516__$1 = state_51516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51516__$1,(2),inst_51511);
} else {
if((state_val_51517 === (2))){
var inst_51513 = (state_51516[(2)]);
var inst_51514 = f__$1.call(null,inst_51513);
var state_51516__$1 = state_51516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51516__$1,inst_51514);
} else {
return null;
}
}
});})(c__42763__auto__,f__$1))
;
return ((function (switch__42740__auto__,c__42763__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__42741__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42741__auto____0 = (function (){
var statearr_51521 = [null,null,null,null,null,null,null];
(statearr_51521[(0)] = cljs$core$async$transduce_$_state_machine__42741__auto__);

(statearr_51521[(1)] = (1));

return statearr_51521;
});
var cljs$core$async$transduce_$_state_machine__42741__auto____1 = (function (state_51516){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51522){if((e51522 instanceof Object)){
var ex__42744__auto__ = e51522;
var statearr_51523_51525 = state_51516;
(statearr_51523_51525[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51526 = state_51516;
state_51516 = G__51526;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42741__auto__ = function(state_51516){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42741__auto____1.call(this,state_51516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42741__auto____0;
cljs$core$async$transduce_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42741__auto____1;
return cljs$core$async$transduce_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,f__$1))
})();
var state__42765__auto__ = (function (){var statearr_51524 = f__42764__auto__.call(null);
(statearr_51524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_51524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,f__$1))
);

return c__42763__auto__;
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
var args51527 = [];
var len__35410__auto___51579 = arguments.length;
var i__35411__auto___51580 = (0);
while(true){
if((i__35411__auto___51580 < len__35410__auto___51579)){
args51527.push((arguments[i__35411__auto___51580]));

var G__51581 = (i__35411__auto___51580 + (1));
i__35411__auto___51580 = G__51581;
continue;
} else {
}
break;
}

var G__51529 = args51527.length;
switch (G__51529) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51527.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_51554){
var state_val_51555 = (state_51554[(1)]);
if((state_val_51555 === (7))){
var inst_51536 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51556_51583 = state_51554__$1;
(statearr_51556_51583[(2)] = inst_51536);

(statearr_51556_51583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (1))){
var inst_51530 = cljs.core.seq.call(null,coll);
var inst_51531 = inst_51530;
var state_51554__$1 = (function (){var statearr_51557 = state_51554;
(statearr_51557[(7)] = inst_51531);

return statearr_51557;
})();
var statearr_51558_51584 = state_51554__$1;
(statearr_51558_51584[(2)] = null);

(statearr_51558_51584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (4))){
var inst_51531 = (state_51554[(7)]);
var inst_51534 = cljs.core.first.call(null,inst_51531);
var state_51554__$1 = state_51554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51554__$1,(7),ch,inst_51534);
} else {
if((state_val_51555 === (13))){
var inst_51548 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51559_51585 = state_51554__$1;
(statearr_51559_51585[(2)] = inst_51548);

(statearr_51559_51585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (6))){
var inst_51539 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51539)){
var statearr_51560_51586 = state_51554__$1;
(statearr_51560_51586[(1)] = (8));

} else {
var statearr_51561_51587 = state_51554__$1;
(statearr_51561_51587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (3))){
var inst_51552 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51554__$1,inst_51552);
} else {
if((state_val_51555 === (12))){
var state_51554__$1 = state_51554;
var statearr_51562_51588 = state_51554__$1;
(statearr_51562_51588[(2)] = null);

(statearr_51562_51588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (2))){
var inst_51531 = (state_51554[(7)]);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51531)){
var statearr_51563_51589 = state_51554__$1;
(statearr_51563_51589[(1)] = (4));

} else {
var statearr_51564_51590 = state_51554__$1;
(statearr_51564_51590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (11))){
var inst_51545 = cljs.core.async.close_BANG_.call(null,ch);
var state_51554__$1 = state_51554;
var statearr_51565_51591 = state_51554__$1;
(statearr_51565_51591[(2)] = inst_51545);

(statearr_51565_51591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (9))){
var state_51554__$1 = state_51554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51566_51592 = state_51554__$1;
(statearr_51566_51592[(1)] = (11));

} else {
var statearr_51567_51593 = state_51554__$1;
(statearr_51567_51593[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (5))){
var inst_51531 = (state_51554[(7)]);
var state_51554__$1 = state_51554;
var statearr_51568_51594 = state_51554__$1;
(statearr_51568_51594[(2)] = inst_51531);

(statearr_51568_51594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (10))){
var inst_51550 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51569_51595 = state_51554__$1;
(statearr_51569_51595[(2)] = inst_51550);

(statearr_51569_51595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (8))){
var inst_51531 = (state_51554[(7)]);
var inst_51541 = cljs.core.next.call(null,inst_51531);
var inst_51531__$1 = inst_51541;
var state_51554__$1 = (function (){var statearr_51570 = state_51554;
(statearr_51570[(7)] = inst_51531__$1);

return statearr_51570;
})();
var statearr_51571_51596 = state_51554__$1;
(statearr_51571_51596[(2)] = null);

(statearr_51571_51596[(1)] = (2));


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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_51575 = [null,null,null,null,null,null,null,null];
(statearr_51575[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_51575[(1)] = (1));

return statearr_51575;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_51554){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e51576){if((e51576 instanceof Object)){
var ex__42744__auto__ = e51576;
var statearr_51577_51597 = state_51554;
(statearr_51577_51597[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51598 = state_51554;
state_51554 = G__51598;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_51554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_51554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_51578 = f__42764__auto__.call(null);
(statearr_51578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_51578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
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
var x__34940__auto__ = (((_ == null))?null:_);
var m__34941__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,_);
} else {
var m__34941__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,_);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__34941__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m,ch);
} else {
var m__34941__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m,ch);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m);
} else {
var m__34941__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async51824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51824 = (function (mult,ch,cs,meta51825){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta51825 = meta51825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51826,meta51825__$1){
var self__ = this;
var _51826__$1 = this;
return (new cljs.core.async.t_cljs$core$async51824(self__.mult,self__.ch,self__.cs,meta51825__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51826){
var self__ = this;
var _51826__$1 = this;
return self__.meta51825;
});})(cs))
;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async51824.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51824.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51825","meta51825",-701862599,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51824";

cljs.core.async.t_cljs$core$async51824.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async51824");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async51824 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51824(mult__$1,ch__$1,cs__$1,meta51825){
return (new cljs.core.async.t_cljs$core$async51824(mult__$1,ch__$1,cs__$1,meta51825));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51824(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42763__auto___52049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52049,cs,m,dchan,dctr,done){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52049,cs,m,dchan,dctr,done){
return (function (state_51961){
var state_val_51962 = (state_51961[(1)]);
if((state_val_51962 === (7))){
var inst_51957 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_51963_52050 = state_51961__$1;
(statearr_51963_52050[(2)] = inst_51957);

(statearr_51963_52050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (20))){
var inst_51860 = (state_51961[(7)]);
var inst_51872 = cljs.core.first.call(null,inst_51860);
var inst_51873 = cljs.core.nth.call(null,inst_51872,(0),null);
var inst_51874 = cljs.core.nth.call(null,inst_51872,(1),null);
var state_51961__$1 = (function (){var statearr_51964 = state_51961;
(statearr_51964[(8)] = inst_51873);

return statearr_51964;
})();
if(cljs.core.truth_(inst_51874)){
var statearr_51965_52051 = state_51961__$1;
(statearr_51965_52051[(1)] = (22));

} else {
var statearr_51966_52052 = state_51961__$1;
(statearr_51966_52052[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (27))){
var inst_51902 = (state_51961[(9)]);
var inst_51904 = (state_51961[(10)]);
var inst_51829 = (state_51961[(11)]);
var inst_51909 = (state_51961[(12)]);
var inst_51909__$1 = cljs.core._nth.call(null,inst_51902,inst_51904);
var inst_51910 = cljs.core.async.put_BANG_.call(null,inst_51909__$1,inst_51829,done);
var state_51961__$1 = (function (){var statearr_51967 = state_51961;
(statearr_51967[(12)] = inst_51909__$1);

return statearr_51967;
})();
if(cljs.core.truth_(inst_51910)){
var statearr_51968_52053 = state_51961__$1;
(statearr_51968_52053[(1)] = (30));

} else {
var statearr_51969_52054 = state_51961__$1;
(statearr_51969_52054[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (1))){
var state_51961__$1 = state_51961;
var statearr_51970_52055 = state_51961__$1;
(statearr_51970_52055[(2)] = null);

(statearr_51970_52055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (24))){
var inst_51860 = (state_51961[(7)]);
var inst_51879 = (state_51961[(2)]);
var inst_51880 = cljs.core.next.call(null,inst_51860);
var inst_51838 = inst_51880;
var inst_51839 = null;
var inst_51840 = (0);
var inst_51841 = (0);
var state_51961__$1 = (function (){var statearr_51971 = state_51961;
(statearr_51971[(13)] = inst_51841);

(statearr_51971[(14)] = inst_51838);

(statearr_51971[(15)] = inst_51840);

(statearr_51971[(16)] = inst_51879);

(statearr_51971[(17)] = inst_51839);

return statearr_51971;
})();
var statearr_51972_52056 = state_51961__$1;
(statearr_51972_52056[(2)] = null);

(statearr_51972_52056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (39))){
var state_51961__$1 = state_51961;
var statearr_51976_52057 = state_51961__$1;
(statearr_51976_52057[(2)] = null);

(statearr_51976_52057[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (4))){
var inst_51829 = (state_51961[(11)]);
var inst_51829__$1 = (state_51961[(2)]);
var inst_51830 = (inst_51829__$1 == null);
var state_51961__$1 = (function (){var statearr_51977 = state_51961;
(statearr_51977[(11)] = inst_51829__$1);

return statearr_51977;
})();
if(cljs.core.truth_(inst_51830)){
var statearr_51978_52058 = state_51961__$1;
(statearr_51978_52058[(1)] = (5));

} else {
var statearr_51979_52059 = state_51961__$1;
(statearr_51979_52059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (15))){
var inst_51841 = (state_51961[(13)]);
var inst_51838 = (state_51961[(14)]);
var inst_51840 = (state_51961[(15)]);
var inst_51839 = (state_51961[(17)]);
var inst_51856 = (state_51961[(2)]);
var inst_51857 = (inst_51841 + (1));
var tmp51973 = inst_51838;
var tmp51974 = inst_51840;
var tmp51975 = inst_51839;
var inst_51838__$1 = tmp51973;
var inst_51839__$1 = tmp51975;
var inst_51840__$1 = tmp51974;
var inst_51841__$1 = inst_51857;
var state_51961__$1 = (function (){var statearr_51980 = state_51961;
(statearr_51980[(13)] = inst_51841__$1);

(statearr_51980[(14)] = inst_51838__$1);

(statearr_51980[(15)] = inst_51840__$1);

(statearr_51980[(18)] = inst_51856);

(statearr_51980[(17)] = inst_51839__$1);

return statearr_51980;
})();
var statearr_51981_52060 = state_51961__$1;
(statearr_51981_52060[(2)] = null);

(statearr_51981_52060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (21))){
var inst_51883 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_51985_52061 = state_51961__$1;
(statearr_51985_52061[(2)] = inst_51883);

(statearr_51985_52061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (31))){
var inst_51909 = (state_51961[(12)]);
var inst_51913 = done.call(null,null);
var inst_51914 = cljs.core.async.untap_STAR_.call(null,m,inst_51909);
var state_51961__$1 = (function (){var statearr_51986 = state_51961;
(statearr_51986[(19)] = inst_51913);

return statearr_51986;
})();
var statearr_51987_52062 = state_51961__$1;
(statearr_51987_52062[(2)] = inst_51914);

(statearr_51987_52062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (32))){
var inst_51902 = (state_51961[(9)]);
var inst_51904 = (state_51961[(10)]);
var inst_51901 = (state_51961[(20)]);
var inst_51903 = (state_51961[(21)]);
var inst_51916 = (state_51961[(2)]);
var inst_51917 = (inst_51904 + (1));
var tmp51982 = inst_51902;
var tmp51983 = inst_51901;
var tmp51984 = inst_51903;
var inst_51901__$1 = tmp51983;
var inst_51902__$1 = tmp51982;
var inst_51903__$1 = tmp51984;
var inst_51904__$1 = inst_51917;
var state_51961__$1 = (function (){var statearr_51988 = state_51961;
(statearr_51988[(9)] = inst_51902__$1);

(statearr_51988[(22)] = inst_51916);

(statearr_51988[(10)] = inst_51904__$1);

(statearr_51988[(20)] = inst_51901__$1);

(statearr_51988[(21)] = inst_51903__$1);

return statearr_51988;
})();
var statearr_51989_52063 = state_51961__$1;
(statearr_51989_52063[(2)] = null);

(statearr_51989_52063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (40))){
var inst_51929 = (state_51961[(23)]);
var inst_51933 = done.call(null,null);
var inst_51934 = cljs.core.async.untap_STAR_.call(null,m,inst_51929);
var state_51961__$1 = (function (){var statearr_51990 = state_51961;
(statearr_51990[(24)] = inst_51933);

return statearr_51990;
})();
var statearr_51991_52064 = state_51961__$1;
(statearr_51991_52064[(2)] = inst_51934);

(statearr_51991_52064[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (33))){
var inst_51920 = (state_51961[(25)]);
var inst_51922 = cljs.core.chunked_seq_QMARK_.call(null,inst_51920);
var state_51961__$1 = state_51961;
if(inst_51922){
var statearr_51992_52065 = state_51961__$1;
(statearr_51992_52065[(1)] = (36));

} else {
var statearr_51993_52066 = state_51961__$1;
(statearr_51993_52066[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (13))){
var inst_51850 = (state_51961[(26)]);
var inst_51853 = cljs.core.async.close_BANG_.call(null,inst_51850);
var state_51961__$1 = state_51961;
var statearr_51994_52067 = state_51961__$1;
(statearr_51994_52067[(2)] = inst_51853);

(statearr_51994_52067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (22))){
var inst_51873 = (state_51961[(8)]);
var inst_51876 = cljs.core.async.close_BANG_.call(null,inst_51873);
var state_51961__$1 = state_51961;
var statearr_51995_52068 = state_51961__$1;
(statearr_51995_52068[(2)] = inst_51876);

(statearr_51995_52068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (36))){
var inst_51920 = (state_51961[(25)]);
var inst_51924 = cljs.core.chunk_first.call(null,inst_51920);
var inst_51925 = cljs.core.chunk_rest.call(null,inst_51920);
var inst_51926 = cljs.core.count.call(null,inst_51924);
var inst_51901 = inst_51925;
var inst_51902 = inst_51924;
var inst_51903 = inst_51926;
var inst_51904 = (0);
var state_51961__$1 = (function (){var statearr_51996 = state_51961;
(statearr_51996[(9)] = inst_51902);

(statearr_51996[(10)] = inst_51904);

(statearr_51996[(20)] = inst_51901);

(statearr_51996[(21)] = inst_51903);

return statearr_51996;
})();
var statearr_51997_52069 = state_51961__$1;
(statearr_51997_52069[(2)] = null);

(statearr_51997_52069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (41))){
var inst_51920 = (state_51961[(25)]);
var inst_51936 = (state_51961[(2)]);
var inst_51937 = cljs.core.next.call(null,inst_51920);
var inst_51901 = inst_51937;
var inst_51902 = null;
var inst_51903 = (0);
var inst_51904 = (0);
var state_51961__$1 = (function (){var statearr_51998 = state_51961;
(statearr_51998[(9)] = inst_51902);

(statearr_51998[(10)] = inst_51904);

(statearr_51998[(20)] = inst_51901);

(statearr_51998[(21)] = inst_51903);

(statearr_51998[(27)] = inst_51936);

return statearr_51998;
})();
var statearr_51999_52070 = state_51961__$1;
(statearr_51999_52070[(2)] = null);

(statearr_51999_52070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (43))){
var state_51961__$1 = state_51961;
var statearr_52000_52071 = state_51961__$1;
(statearr_52000_52071[(2)] = null);

(statearr_52000_52071[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (29))){
var inst_51945 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52001_52072 = state_51961__$1;
(statearr_52001_52072[(2)] = inst_51945);

(statearr_52001_52072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (44))){
var inst_51954 = (state_51961[(2)]);
var state_51961__$1 = (function (){var statearr_52002 = state_51961;
(statearr_52002[(28)] = inst_51954);

return statearr_52002;
})();
var statearr_52003_52073 = state_51961__$1;
(statearr_52003_52073[(2)] = null);

(statearr_52003_52073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (6))){
var inst_51893 = (state_51961[(29)]);
var inst_51892 = cljs.core.deref.call(null,cs);
var inst_51893__$1 = cljs.core.keys.call(null,inst_51892);
var inst_51894 = cljs.core.count.call(null,inst_51893__$1);
var inst_51895 = cljs.core.reset_BANG_.call(null,dctr,inst_51894);
var inst_51900 = cljs.core.seq.call(null,inst_51893__$1);
var inst_51901 = inst_51900;
var inst_51902 = null;
var inst_51903 = (0);
var inst_51904 = (0);
var state_51961__$1 = (function (){var statearr_52004 = state_51961;
(statearr_52004[(30)] = inst_51895);

(statearr_52004[(9)] = inst_51902);

(statearr_52004[(10)] = inst_51904);

(statearr_52004[(20)] = inst_51901);

(statearr_52004[(21)] = inst_51903);

(statearr_52004[(29)] = inst_51893__$1);

return statearr_52004;
})();
var statearr_52005_52074 = state_51961__$1;
(statearr_52005_52074[(2)] = null);

(statearr_52005_52074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (28))){
var inst_51901 = (state_51961[(20)]);
var inst_51920 = (state_51961[(25)]);
var inst_51920__$1 = cljs.core.seq.call(null,inst_51901);
var state_51961__$1 = (function (){var statearr_52006 = state_51961;
(statearr_52006[(25)] = inst_51920__$1);

return statearr_52006;
})();
if(inst_51920__$1){
var statearr_52007_52075 = state_51961__$1;
(statearr_52007_52075[(1)] = (33));

} else {
var statearr_52008_52076 = state_51961__$1;
(statearr_52008_52076[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (25))){
var inst_51904 = (state_51961[(10)]);
var inst_51903 = (state_51961[(21)]);
var inst_51906 = (inst_51904 < inst_51903);
var inst_51907 = inst_51906;
var state_51961__$1 = state_51961;
if(cljs.core.truth_(inst_51907)){
var statearr_52009_52077 = state_51961__$1;
(statearr_52009_52077[(1)] = (27));

} else {
var statearr_52010_52078 = state_51961__$1;
(statearr_52010_52078[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (34))){
var state_51961__$1 = state_51961;
var statearr_52011_52079 = state_51961__$1;
(statearr_52011_52079[(2)] = null);

(statearr_52011_52079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (17))){
var state_51961__$1 = state_51961;
var statearr_52012_52080 = state_51961__$1;
(statearr_52012_52080[(2)] = null);

(statearr_52012_52080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (3))){
var inst_51959 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51961__$1,inst_51959);
} else {
if((state_val_51962 === (12))){
var inst_51888 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52013_52081 = state_51961__$1;
(statearr_52013_52081[(2)] = inst_51888);

(statearr_52013_52081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (2))){
var state_51961__$1 = state_51961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51961__$1,(4),ch);
} else {
if((state_val_51962 === (23))){
var state_51961__$1 = state_51961;
var statearr_52014_52082 = state_51961__$1;
(statearr_52014_52082[(2)] = null);

(statearr_52014_52082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (35))){
var inst_51943 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52015_52083 = state_51961__$1;
(statearr_52015_52083[(2)] = inst_51943);

(statearr_52015_52083[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (19))){
var inst_51860 = (state_51961[(7)]);
var inst_51864 = cljs.core.chunk_first.call(null,inst_51860);
var inst_51865 = cljs.core.chunk_rest.call(null,inst_51860);
var inst_51866 = cljs.core.count.call(null,inst_51864);
var inst_51838 = inst_51865;
var inst_51839 = inst_51864;
var inst_51840 = inst_51866;
var inst_51841 = (0);
var state_51961__$1 = (function (){var statearr_52016 = state_51961;
(statearr_52016[(13)] = inst_51841);

(statearr_52016[(14)] = inst_51838);

(statearr_52016[(15)] = inst_51840);

(statearr_52016[(17)] = inst_51839);

return statearr_52016;
})();
var statearr_52017_52084 = state_51961__$1;
(statearr_52017_52084[(2)] = null);

(statearr_52017_52084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (11))){
var inst_51860 = (state_51961[(7)]);
var inst_51838 = (state_51961[(14)]);
var inst_51860__$1 = cljs.core.seq.call(null,inst_51838);
var state_51961__$1 = (function (){var statearr_52018 = state_51961;
(statearr_52018[(7)] = inst_51860__$1);

return statearr_52018;
})();
if(inst_51860__$1){
var statearr_52019_52085 = state_51961__$1;
(statearr_52019_52085[(1)] = (16));

} else {
var statearr_52020_52086 = state_51961__$1;
(statearr_52020_52086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (9))){
var inst_51890 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52021_52087 = state_51961__$1;
(statearr_52021_52087[(2)] = inst_51890);

(statearr_52021_52087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (5))){
var inst_51836 = cljs.core.deref.call(null,cs);
var inst_51837 = cljs.core.seq.call(null,inst_51836);
var inst_51838 = inst_51837;
var inst_51839 = null;
var inst_51840 = (0);
var inst_51841 = (0);
var state_51961__$1 = (function (){var statearr_52022 = state_51961;
(statearr_52022[(13)] = inst_51841);

(statearr_52022[(14)] = inst_51838);

(statearr_52022[(15)] = inst_51840);

(statearr_52022[(17)] = inst_51839);

return statearr_52022;
})();
var statearr_52023_52088 = state_51961__$1;
(statearr_52023_52088[(2)] = null);

(statearr_52023_52088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (14))){
var state_51961__$1 = state_51961;
var statearr_52024_52089 = state_51961__$1;
(statearr_52024_52089[(2)] = null);

(statearr_52024_52089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (45))){
var inst_51951 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52025_52090 = state_51961__$1;
(statearr_52025_52090[(2)] = inst_51951);

(statearr_52025_52090[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (26))){
var inst_51893 = (state_51961[(29)]);
var inst_51947 = (state_51961[(2)]);
var inst_51948 = cljs.core.seq.call(null,inst_51893);
var state_51961__$1 = (function (){var statearr_52026 = state_51961;
(statearr_52026[(31)] = inst_51947);

return statearr_52026;
})();
if(inst_51948){
var statearr_52027_52091 = state_51961__$1;
(statearr_52027_52091[(1)] = (42));

} else {
var statearr_52028_52092 = state_51961__$1;
(statearr_52028_52092[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (16))){
var inst_51860 = (state_51961[(7)]);
var inst_51862 = cljs.core.chunked_seq_QMARK_.call(null,inst_51860);
var state_51961__$1 = state_51961;
if(inst_51862){
var statearr_52029_52093 = state_51961__$1;
(statearr_52029_52093[(1)] = (19));

} else {
var statearr_52030_52094 = state_51961__$1;
(statearr_52030_52094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (38))){
var inst_51940 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52031_52095 = state_51961__$1;
(statearr_52031_52095[(2)] = inst_51940);

(statearr_52031_52095[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (30))){
var state_51961__$1 = state_51961;
var statearr_52032_52096 = state_51961__$1;
(statearr_52032_52096[(2)] = null);

(statearr_52032_52096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (10))){
var inst_51841 = (state_51961[(13)]);
var inst_51839 = (state_51961[(17)]);
var inst_51849 = cljs.core._nth.call(null,inst_51839,inst_51841);
var inst_51850 = cljs.core.nth.call(null,inst_51849,(0),null);
var inst_51851 = cljs.core.nth.call(null,inst_51849,(1),null);
var state_51961__$1 = (function (){var statearr_52033 = state_51961;
(statearr_52033[(26)] = inst_51850);

return statearr_52033;
})();
if(cljs.core.truth_(inst_51851)){
var statearr_52034_52097 = state_51961__$1;
(statearr_52034_52097[(1)] = (13));

} else {
var statearr_52035_52098 = state_51961__$1;
(statearr_52035_52098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (18))){
var inst_51886 = (state_51961[(2)]);
var state_51961__$1 = state_51961;
var statearr_52036_52099 = state_51961__$1;
(statearr_52036_52099[(2)] = inst_51886);

(statearr_52036_52099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (42))){
var state_51961__$1 = state_51961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51961__$1,(45),dchan);
} else {
if((state_val_51962 === (37))){
var inst_51929 = (state_51961[(23)]);
var inst_51829 = (state_51961[(11)]);
var inst_51920 = (state_51961[(25)]);
var inst_51929__$1 = cljs.core.first.call(null,inst_51920);
var inst_51930 = cljs.core.async.put_BANG_.call(null,inst_51929__$1,inst_51829,done);
var state_51961__$1 = (function (){var statearr_52037 = state_51961;
(statearr_52037[(23)] = inst_51929__$1);

return statearr_52037;
})();
if(cljs.core.truth_(inst_51930)){
var statearr_52038_52100 = state_51961__$1;
(statearr_52038_52100[(1)] = (39));

} else {
var statearr_52039_52101 = state_51961__$1;
(statearr_52039_52101[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51962 === (8))){
var inst_51841 = (state_51961[(13)]);
var inst_51840 = (state_51961[(15)]);
var inst_51843 = (inst_51841 < inst_51840);
var inst_51844 = inst_51843;
var state_51961__$1 = state_51961;
if(cljs.core.truth_(inst_51844)){
var statearr_52040_52102 = state_51961__$1;
(statearr_52040_52102[(1)] = (10));

} else {
var statearr_52041_52103 = state_51961__$1;
(statearr_52041_52103[(1)] = (11));

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
});})(c__42763__auto___52049,cs,m,dchan,dctr,done))
;
return ((function (switch__42740__auto__,c__42763__auto___52049,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42741__auto__ = null;
var cljs$core$async$mult_$_state_machine__42741__auto____0 = (function (){
var statearr_52045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52045[(0)] = cljs$core$async$mult_$_state_machine__42741__auto__);

(statearr_52045[(1)] = (1));

return statearr_52045;
});
var cljs$core$async$mult_$_state_machine__42741__auto____1 = (function (state_51961){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_51961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52046){if((e52046 instanceof Object)){
var ex__42744__auto__ = e52046;
var statearr_52047_52104 = state_51961;
(statearr_52047_52104[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52105 = state_51961;
state_51961 = G__52105;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42741__auto__ = function(state_51961){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42741__auto____1.call(this,state_51961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42741__auto____0;
cljs$core$async$mult_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42741__auto____1;
return cljs$core$async$mult_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52049,cs,m,dchan,dctr,done))
})();
var state__42765__auto__ = (function (){var statearr_52048 = f__42764__auto__.call(null);
(statearr_52048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52049);

return statearr_52048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52049,cs,m,dchan,dctr,done))
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
var args52106 = [];
var len__35410__auto___52109 = arguments.length;
var i__35411__auto___52110 = (0);
while(true){
if((i__35411__auto___52110 < len__35410__auto___52109)){
args52106.push((arguments[i__35411__auto___52110]));

var G__52111 = (i__35411__auto___52110 + (1));
i__35411__auto___52110 = G__52111;
continue;
} else {
}
break;
}

var G__52108 = args52106.length;
switch (G__52108) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52106.length)].join('')));

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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m,ch);
} else {
var m__34941__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m,ch);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m,ch);
} else {
var m__34941__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m,ch);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m);
} else {
var m__34941__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m,state_map);
} else {
var m__34941__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m,state_map);
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
var x__34940__auto__ = (((m == null))?null:m);
var m__34941__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,m,mode);
} else {
var m__34941__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35417__auto__ = [];
var len__35410__auto___52123 = arguments.length;
var i__35411__auto___52124 = (0);
while(true){
if((i__35411__auto___52124 < len__35410__auto___52123)){
args__35417__auto__.push((arguments[i__35411__auto___52124]));

var G__52125 = (i__35411__auto___52124 + (1));
i__35411__auto___52124 = G__52125;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((3) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35418__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52117){
var map__52118 = p__52117;
var map__52118__$1 = ((((!((map__52118 == null)))?((((map__52118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52118):map__52118);
var opts = map__52118__$1;
var statearr_52120_52126 = state;
(statearr_52120_52126[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6728__auto__ = cljs.core.async.do_alts.call(null,((function (map__52118,map__52118__$1,opts){
return (function (val){
var statearr_52121_52127 = state;
(statearr_52121_52127[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__52118,map__52118__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6728__auto__)){
var cb = temp__6728__auto__;
var statearr_52122_52128 = state;
(statearr_52122_52128[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52113){
var G__52114 = cljs.core.first.call(null,seq52113);
var seq52113__$1 = cljs.core.next.call(null,seq52113);
var G__52115 = cljs.core.first.call(null,seq52113__$1);
var seq52113__$2 = cljs.core.next.call(null,seq52113__$1);
var G__52116 = cljs.core.first.call(null,seq52113__$2);
var seq52113__$3 = cljs.core.next.call(null,seq52113__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52114,G__52115,G__52116,seq52113__$3);
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
if(typeof cljs.core.async.t_cljs$core$async52294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52294 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52295){
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
this.meta52295 = meta52295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52296,meta52295__$1){
var self__ = this;
var _52296__$1 = this;
return (new cljs.core.async.t_cljs$core$async52294(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52295__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52296){
var self__ = this;
var _52296__$1 = this;
return self__.meta52295;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async52294.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async52294.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52295","meta52295",-1262144200,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52294";

cljs.core.async.t_cljs$core$async52294.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async52294");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async52294 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52294(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52295){
return (new cljs.core.async.t_cljs$core$async52294(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52295));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52294(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42763__auto___52459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52396){
var state_val_52397 = (state_52396[(1)]);
if((state_val_52397 === (7))){
var inst_52312 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52398_52460 = state_52396__$1;
(statearr_52398_52460[(2)] = inst_52312);

(statearr_52398_52460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (20))){
var inst_52324 = (state_52396[(7)]);
var state_52396__$1 = state_52396;
var statearr_52399_52461 = state_52396__$1;
(statearr_52399_52461[(2)] = inst_52324);

(statearr_52399_52461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (27))){
var state_52396__$1 = state_52396;
var statearr_52400_52462 = state_52396__$1;
(statearr_52400_52462[(2)] = null);

(statearr_52400_52462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (1))){
var inst_52300 = (state_52396[(8)]);
var inst_52300__$1 = calc_state.call(null);
var inst_52302 = (inst_52300__$1 == null);
var inst_52303 = cljs.core.not.call(null,inst_52302);
var state_52396__$1 = (function (){var statearr_52401 = state_52396;
(statearr_52401[(8)] = inst_52300__$1);

return statearr_52401;
})();
if(inst_52303){
var statearr_52402_52463 = state_52396__$1;
(statearr_52402_52463[(1)] = (2));

} else {
var statearr_52403_52464 = state_52396__$1;
(statearr_52403_52464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (24))){
var inst_52347 = (state_52396[(9)]);
var inst_52356 = (state_52396[(10)]);
var inst_52370 = (state_52396[(11)]);
var inst_52370__$1 = inst_52347.call(null,inst_52356);
var state_52396__$1 = (function (){var statearr_52404 = state_52396;
(statearr_52404[(11)] = inst_52370__$1);

return statearr_52404;
})();
if(cljs.core.truth_(inst_52370__$1)){
var statearr_52405_52465 = state_52396__$1;
(statearr_52405_52465[(1)] = (29));

} else {
var statearr_52406_52466 = state_52396__$1;
(statearr_52406_52466[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (4))){
var inst_52315 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52315)){
var statearr_52407_52467 = state_52396__$1;
(statearr_52407_52467[(1)] = (8));

} else {
var statearr_52408_52468 = state_52396__$1;
(statearr_52408_52468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (15))){
var inst_52341 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52341)){
var statearr_52409_52469 = state_52396__$1;
(statearr_52409_52469[(1)] = (19));

} else {
var statearr_52410_52470 = state_52396__$1;
(statearr_52410_52470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (21))){
var inst_52346 = (state_52396[(12)]);
var inst_52346__$1 = (state_52396[(2)]);
var inst_52347 = cljs.core.get.call(null,inst_52346__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52348 = cljs.core.get.call(null,inst_52346__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52349 = cljs.core.get.call(null,inst_52346__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52396__$1 = (function (){var statearr_52411 = state_52396;
(statearr_52411[(9)] = inst_52347);

(statearr_52411[(13)] = inst_52348);

(statearr_52411[(12)] = inst_52346__$1);

return statearr_52411;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52396__$1,(22),inst_52349);
} else {
if((state_val_52397 === (31))){
var inst_52378 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52378)){
var statearr_52412_52471 = state_52396__$1;
(statearr_52412_52471[(1)] = (32));

} else {
var statearr_52413_52472 = state_52396__$1;
(statearr_52413_52472[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (32))){
var inst_52355 = (state_52396[(14)]);
var state_52396__$1 = state_52396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52396__$1,(35),out,inst_52355);
} else {
if((state_val_52397 === (33))){
var inst_52346 = (state_52396[(12)]);
var inst_52324 = inst_52346;
var state_52396__$1 = (function (){var statearr_52414 = state_52396;
(statearr_52414[(7)] = inst_52324);

return statearr_52414;
})();
var statearr_52415_52473 = state_52396__$1;
(statearr_52415_52473[(2)] = null);

(statearr_52415_52473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (13))){
var inst_52324 = (state_52396[(7)]);
var inst_52331 = inst_52324.cljs$lang$protocol_mask$partition0$;
var inst_52332 = (inst_52331 & (64));
var inst_52333 = inst_52324.cljs$core$ISeq$;
var inst_52334 = (inst_52332) || (inst_52333);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52334)){
var statearr_52416_52474 = state_52396__$1;
(statearr_52416_52474[(1)] = (16));

} else {
var statearr_52417_52475 = state_52396__$1;
(statearr_52417_52475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (22))){
var inst_52355 = (state_52396[(14)]);
var inst_52356 = (state_52396[(10)]);
var inst_52354 = (state_52396[(2)]);
var inst_52355__$1 = cljs.core.nth.call(null,inst_52354,(0),null);
var inst_52356__$1 = cljs.core.nth.call(null,inst_52354,(1),null);
var inst_52357 = (inst_52355__$1 == null);
var inst_52358 = cljs.core._EQ_.call(null,inst_52356__$1,change);
var inst_52359 = (inst_52357) || (inst_52358);
var state_52396__$1 = (function (){var statearr_52418 = state_52396;
(statearr_52418[(14)] = inst_52355__$1);

(statearr_52418[(10)] = inst_52356__$1);

return statearr_52418;
})();
if(cljs.core.truth_(inst_52359)){
var statearr_52419_52476 = state_52396__$1;
(statearr_52419_52476[(1)] = (23));

} else {
var statearr_52420_52477 = state_52396__$1;
(statearr_52420_52477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (36))){
var inst_52346 = (state_52396[(12)]);
var inst_52324 = inst_52346;
var state_52396__$1 = (function (){var statearr_52421 = state_52396;
(statearr_52421[(7)] = inst_52324);

return statearr_52421;
})();
var statearr_52422_52478 = state_52396__$1;
(statearr_52422_52478[(2)] = null);

(statearr_52422_52478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (29))){
var inst_52370 = (state_52396[(11)]);
var state_52396__$1 = state_52396;
var statearr_52423_52479 = state_52396__$1;
(statearr_52423_52479[(2)] = inst_52370);

(statearr_52423_52479[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (6))){
var state_52396__$1 = state_52396;
var statearr_52424_52480 = state_52396__$1;
(statearr_52424_52480[(2)] = false);

(statearr_52424_52480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (28))){
var inst_52366 = (state_52396[(2)]);
var inst_52367 = calc_state.call(null);
var inst_52324 = inst_52367;
var state_52396__$1 = (function (){var statearr_52425 = state_52396;
(statearr_52425[(7)] = inst_52324);

(statearr_52425[(15)] = inst_52366);

return statearr_52425;
})();
var statearr_52426_52481 = state_52396__$1;
(statearr_52426_52481[(2)] = null);

(statearr_52426_52481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (25))){
var inst_52392 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52427_52482 = state_52396__$1;
(statearr_52427_52482[(2)] = inst_52392);

(statearr_52427_52482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (34))){
var inst_52390 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52428_52483 = state_52396__$1;
(statearr_52428_52483[(2)] = inst_52390);

(statearr_52428_52483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (17))){
var state_52396__$1 = state_52396;
var statearr_52429_52484 = state_52396__$1;
(statearr_52429_52484[(2)] = false);

(statearr_52429_52484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (3))){
var state_52396__$1 = state_52396;
var statearr_52430_52485 = state_52396__$1;
(statearr_52430_52485[(2)] = false);

(statearr_52430_52485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (12))){
var inst_52394 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52396__$1,inst_52394);
} else {
if((state_val_52397 === (2))){
var inst_52300 = (state_52396[(8)]);
var inst_52305 = inst_52300.cljs$lang$protocol_mask$partition0$;
var inst_52306 = (inst_52305 & (64));
var inst_52307 = inst_52300.cljs$core$ISeq$;
var inst_52308 = (inst_52306) || (inst_52307);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52308)){
var statearr_52431_52486 = state_52396__$1;
(statearr_52431_52486[(1)] = (5));

} else {
var statearr_52432_52487 = state_52396__$1;
(statearr_52432_52487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (23))){
var inst_52355 = (state_52396[(14)]);
var inst_52361 = (inst_52355 == null);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52361)){
var statearr_52433_52488 = state_52396__$1;
(statearr_52433_52488[(1)] = (26));

} else {
var statearr_52434_52489 = state_52396__$1;
(statearr_52434_52489[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (35))){
var inst_52381 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52381)){
var statearr_52435_52490 = state_52396__$1;
(statearr_52435_52490[(1)] = (36));

} else {
var statearr_52436_52491 = state_52396__$1;
(statearr_52436_52491[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (19))){
var inst_52324 = (state_52396[(7)]);
var inst_52343 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52324);
var state_52396__$1 = state_52396;
var statearr_52437_52492 = state_52396__$1;
(statearr_52437_52492[(2)] = inst_52343);

(statearr_52437_52492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (11))){
var inst_52324 = (state_52396[(7)]);
var inst_52328 = (inst_52324 == null);
var inst_52329 = cljs.core.not.call(null,inst_52328);
var state_52396__$1 = state_52396;
if(inst_52329){
var statearr_52438_52493 = state_52396__$1;
(statearr_52438_52493[(1)] = (13));

} else {
var statearr_52439_52494 = state_52396__$1;
(statearr_52439_52494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (9))){
var inst_52300 = (state_52396[(8)]);
var state_52396__$1 = state_52396;
var statearr_52440_52495 = state_52396__$1;
(statearr_52440_52495[(2)] = inst_52300);

(statearr_52440_52495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (5))){
var state_52396__$1 = state_52396;
var statearr_52441_52496 = state_52396__$1;
(statearr_52441_52496[(2)] = true);

(statearr_52441_52496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (14))){
var state_52396__$1 = state_52396;
var statearr_52442_52497 = state_52396__$1;
(statearr_52442_52497[(2)] = false);

(statearr_52442_52497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (26))){
var inst_52356 = (state_52396[(10)]);
var inst_52363 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_52356);
var state_52396__$1 = state_52396;
var statearr_52443_52498 = state_52396__$1;
(statearr_52443_52498[(2)] = inst_52363);

(statearr_52443_52498[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (16))){
var state_52396__$1 = state_52396;
var statearr_52444_52499 = state_52396__$1;
(statearr_52444_52499[(2)] = true);

(statearr_52444_52499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (38))){
var inst_52386 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52445_52500 = state_52396__$1;
(statearr_52445_52500[(2)] = inst_52386);

(statearr_52445_52500[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (30))){
var inst_52347 = (state_52396[(9)]);
var inst_52348 = (state_52396[(13)]);
var inst_52356 = (state_52396[(10)]);
var inst_52373 = cljs.core.empty_QMARK_.call(null,inst_52347);
var inst_52374 = inst_52348.call(null,inst_52356);
var inst_52375 = cljs.core.not.call(null,inst_52374);
var inst_52376 = (inst_52373) && (inst_52375);
var state_52396__$1 = state_52396;
var statearr_52446_52501 = state_52396__$1;
(statearr_52446_52501[(2)] = inst_52376);

(statearr_52446_52501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (10))){
var inst_52300 = (state_52396[(8)]);
var inst_52320 = (state_52396[(2)]);
var inst_52321 = cljs.core.get.call(null,inst_52320,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52322 = cljs.core.get.call(null,inst_52320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52323 = cljs.core.get.call(null,inst_52320,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52324 = inst_52300;
var state_52396__$1 = (function (){var statearr_52447 = state_52396;
(statearr_52447[(7)] = inst_52324);

(statearr_52447[(16)] = inst_52322);

(statearr_52447[(17)] = inst_52323);

(statearr_52447[(18)] = inst_52321);

return statearr_52447;
})();
var statearr_52448_52502 = state_52396__$1;
(statearr_52448_52502[(2)] = null);

(statearr_52448_52502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (18))){
var inst_52338 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52449_52503 = state_52396__$1;
(statearr_52449_52503[(2)] = inst_52338);

(statearr_52449_52503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (37))){
var state_52396__$1 = state_52396;
var statearr_52450_52504 = state_52396__$1;
(statearr_52450_52504[(2)] = null);

(statearr_52450_52504[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (8))){
var inst_52300 = (state_52396[(8)]);
var inst_52317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52300);
var state_52396__$1 = state_52396;
var statearr_52451_52505 = state_52396__$1;
(statearr_52451_52505[(2)] = inst_52317);

(statearr_52451_52505[(1)] = (10));


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
});})(c__42763__auto___52459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42740__auto__,c__42763__auto___52459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42741__auto__ = null;
var cljs$core$async$mix_$_state_machine__42741__auto____0 = (function (){
var statearr_52455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52455[(0)] = cljs$core$async$mix_$_state_machine__42741__auto__);

(statearr_52455[(1)] = (1));

return statearr_52455;
});
var cljs$core$async$mix_$_state_machine__42741__auto____1 = (function (state_52396){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_52396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52456){if((e52456 instanceof Object)){
var ex__42744__auto__ = e52456;
var statearr_52457_52506 = state_52396;
(statearr_52457_52506[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52507 = state_52396;
state_52396 = G__52507;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42741__auto__ = function(state_52396){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42741__auto____1.call(this,state_52396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42741__auto____0;
cljs$core$async$mix_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42741__auto____1;
return cljs$core$async$mix_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42765__auto__ = (function (){var statearr_52458 = f__42764__auto__.call(null);
(statearr_52458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52459);

return statearr_52458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__34940__auto__ = (((p == null))?null:p);
var m__34941__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__34941__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__34940__auto__ = (((p == null))?null:p);
var m__34941__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,p,v,ch);
} else {
var m__34941__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args52508 = [];
var len__35410__auto___52511 = arguments.length;
var i__35411__auto___52512 = (0);
while(true){
if((i__35411__auto___52512 < len__35410__auto___52511)){
args52508.push((arguments[i__35411__auto___52512]));

var G__52513 = (i__35411__auto___52512 + (1));
i__35411__auto___52512 = G__52513;
continue;
} else {
}
break;
}

var G__52510 = args52508.length;
switch (G__52510) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52508.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__34940__auto__ = (((p == null))?null:p);
var m__34941__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,p);
} else {
var m__34941__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,p);
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
var x__34940__auto__ = (((p == null))?null:p);
var m__34941__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34940__auto__)]);
if(!((m__34941__auto__ == null))){
return m__34941__auto__.call(null,p,v);
} else {
var m__34941__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34941__auto____$1 == null))){
return m__34941__auto____$1.call(null,p,v);
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
var args52516 = [];
var len__35410__auto___52641 = arguments.length;
var i__35411__auto___52642 = (0);
while(true){
if((i__35411__auto___52642 < len__35410__auto___52641)){
args52516.push((arguments[i__35411__auto___52642]));

var G__52643 = (i__35411__auto___52642 + (1));
i__35411__auto___52642 = G__52643;
continue;
} else {
}
break;
}

var G__52518 = args52516.length;
switch (G__52518) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52516.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34227__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34227__auto__,mults){
return (function (p1__52515_SHARP_){
if(cljs.core.truth_(p1__52515_SHARP_.call(null,topic))){
return p1__52515_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__52515_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34227__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async52519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52519 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52520){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52520 = meta52520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52521,meta52520__$1){
var self__ = this;
var _52521__$1 = this;
return (new cljs.core.async.t_cljs$core$async52519(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52520__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52521){
var self__ = this;
var _52521__$1 = this;
return self__.meta52520;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52519.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52520","meta52520",-1960542431,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52519";

cljs.core.async.t_cljs$core$async52519.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async52519");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async52519 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async52519(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52520){
return (new cljs.core.async.t_cljs$core$async52519(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52520));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async52519(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42763__auto___52645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52645,mults,ensure_mult,p){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52645,mults,ensure_mult,p){
return (function (state_52593){
var state_val_52594 = (state_52593[(1)]);
if((state_val_52594 === (7))){
var inst_52589 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
var statearr_52595_52646 = state_52593__$1;
(statearr_52595_52646[(2)] = inst_52589);

(statearr_52595_52646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (20))){
var state_52593__$1 = state_52593;
var statearr_52596_52647 = state_52593__$1;
(statearr_52596_52647[(2)] = null);

(statearr_52596_52647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (1))){
var state_52593__$1 = state_52593;
var statearr_52597_52648 = state_52593__$1;
(statearr_52597_52648[(2)] = null);

(statearr_52597_52648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (24))){
var inst_52572 = (state_52593[(7)]);
var inst_52581 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52572);
var state_52593__$1 = state_52593;
var statearr_52598_52649 = state_52593__$1;
(statearr_52598_52649[(2)] = inst_52581);

(statearr_52598_52649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (4))){
var inst_52524 = (state_52593[(8)]);
var inst_52524__$1 = (state_52593[(2)]);
var inst_52525 = (inst_52524__$1 == null);
var state_52593__$1 = (function (){var statearr_52599 = state_52593;
(statearr_52599[(8)] = inst_52524__$1);

return statearr_52599;
})();
if(cljs.core.truth_(inst_52525)){
var statearr_52600_52650 = state_52593__$1;
(statearr_52600_52650[(1)] = (5));

} else {
var statearr_52601_52651 = state_52593__$1;
(statearr_52601_52651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (15))){
var inst_52566 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
var statearr_52602_52652 = state_52593__$1;
(statearr_52602_52652[(2)] = inst_52566);

(statearr_52602_52652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (21))){
var inst_52586 = (state_52593[(2)]);
var state_52593__$1 = (function (){var statearr_52603 = state_52593;
(statearr_52603[(9)] = inst_52586);

return statearr_52603;
})();
var statearr_52604_52653 = state_52593__$1;
(statearr_52604_52653[(2)] = null);

(statearr_52604_52653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (13))){
var inst_52548 = (state_52593[(10)]);
var inst_52550 = cljs.core.chunked_seq_QMARK_.call(null,inst_52548);
var state_52593__$1 = state_52593;
if(inst_52550){
var statearr_52605_52654 = state_52593__$1;
(statearr_52605_52654[(1)] = (16));

} else {
var statearr_52606_52655 = state_52593__$1;
(statearr_52606_52655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (22))){
var inst_52578 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
if(cljs.core.truth_(inst_52578)){
var statearr_52607_52656 = state_52593__$1;
(statearr_52607_52656[(1)] = (23));

} else {
var statearr_52608_52657 = state_52593__$1;
(statearr_52608_52657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (6))){
var inst_52572 = (state_52593[(7)]);
var inst_52524 = (state_52593[(8)]);
var inst_52574 = (state_52593[(11)]);
var inst_52572__$1 = topic_fn.call(null,inst_52524);
var inst_52573 = cljs.core.deref.call(null,mults);
var inst_52574__$1 = cljs.core.get.call(null,inst_52573,inst_52572__$1);
var state_52593__$1 = (function (){var statearr_52609 = state_52593;
(statearr_52609[(7)] = inst_52572__$1);

(statearr_52609[(11)] = inst_52574__$1);

return statearr_52609;
})();
if(cljs.core.truth_(inst_52574__$1)){
var statearr_52610_52658 = state_52593__$1;
(statearr_52610_52658[(1)] = (19));

} else {
var statearr_52611_52659 = state_52593__$1;
(statearr_52611_52659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (25))){
var inst_52583 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
var statearr_52612_52660 = state_52593__$1;
(statearr_52612_52660[(2)] = inst_52583);

(statearr_52612_52660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (17))){
var inst_52548 = (state_52593[(10)]);
var inst_52557 = cljs.core.first.call(null,inst_52548);
var inst_52558 = cljs.core.async.muxch_STAR_.call(null,inst_52557);
var inst_52559 = cljs.core.async.close_BANG_.call(null,inst_52558);
var inst_52560 = cljs.core.next.call(null,inst_52548);
var inst_52534 = inst_52560;
var inst_52535 = null;
var inst_52536 = (0);
var inst_52537 = (0);
var state_52593__$1 = (function (){var statearr_52613 = state_52593;
(statearr_52613[(12)] = inst_52536);

(statearr_52613[(13)] = inst_52537);

(statearr_52613[(14)] = inst_52534);

(statearr_52613[(15)] = inst_52559);

(statearr_52613[(16)] = inst_52535);

return statearr_52613;
})();
var statearr_52614_52661 = state_52593__$1;
(statearr_52614_52661[(2)] = null);

(statearr_52614_52661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (3))){
var inst_52591 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52593__$1,inst_52591);
} else {
if((state_val_52594 === (12))){
var inst_52568 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
var statearr_52615_52662 = state_52593__$1;
(statearr_52615_52662[(2)] = inst_52568);

(statearr_52615_52662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (2))){
var state_52593__$1 = state_52593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52593__$1,(4),ch);
} else {
if((state_val_52594 === (23))){
var state_52593__$1 = state_52593;
var statearr_52616_52663 = state_52593__$1;
(statearr_52616_52663[(2)] = null);

(statearr_52616_52663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (19))){
var inst_52524 = (state_52593[(8)]);
var inst_52574 = (state_52593[(11)]);
var inst_52576 = cljs.core.async.muxch_STAR_.call(null,inst_52574);
var state_52593__$1 = state_52593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52593__$1,(22),inst_52576,inst_52524);
} else {
if((state_val_52594 === (11))){
var inst_52534 = (state_52593[(14)]);
var inst_52548 = (state_52593[(10)]);
var inst_52548__$1 = cljs.core.seq.call(null,inst_52534);
var state_52593__$1 = (function (){var statearr_52617 = state_52593;
(statearr_52617[(10)] = inst_52548__$1);

return statearr_52617;
})();
if(inst_52548__$1){
var statearr_52618_52664 = state_52593__$1;
(statearr_52618_52664[(1)] = (13));

} else {
var statearr_52619_52665 = state_52593__$1;
(statearr_52619_52665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (9))){
var inst_52570 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
var statearr_52620_52666 = state_52593__$1;
(statearr_52620_52666[(2)] = inst_52570);

(statearr_52620_52666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (5))){
var inst_52531 = cljs.core.deref.call(null,mults);
var inst_52532 = cljs.core.vals.call(null,inst_52531);
var inst_52533 = cljs.core.seq.call(null,inst_52532);
var inst_52534 = inst_52533;
var inst_52535 = null;
var inst_52536 = (0);
var inst_52537 = (0);
var state_52593__$1 = (function (){var statearr_52621 = state_52593;
(statearr_52621[(12)] = inst_52536);

(statearr_52621[(13)] = inst_52537);

(statearr_52621[(14)] = inst_52534);

(statearr_52621[(16)] = inst_52535);

return statearr_52621;
})();
var statearr_52622_52667 = state_52593__$1;
(statearr_52622_52667[(2)] = null);

(statearr_52622_52667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (14))){
var state_52593__$1 = state_52593;
var statearr_52626_52668 = state_52593__$1;
(statearr_52626_52668[(2)] = null);

(statearr_52626_52668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (16))){
var inst_52548 = (state_52593[(10)]);
var inst_52552 = cljs.core.chunk_first.call(null,inst_52548);
var inst_52553 = cljs.core.chunk_rest.call(null,inst_52548);
var inst_52554 = cljs.core.count.call(null,inst_52552);
var inst_52534 = inst_52553;
var inst_52535 = inst_52552;
var inst_52536 = inst_52554;
var inst_52537 = (0);
var state_52593__$1 = (function (){var statearr_52627 = state_52593;
(statearr_52627[(12)] = inst_52536);

(statearr_52627[(13)] = inst_52537);

(statearr_52627[(14)] = inst_52534);

(statearr_52627[(16)] = inst_52535);

return statearr_52627;
})();
var statearr_52628_52669 = state_52593__$1;
(statearr_52628_52669[(2)] = null);

(statearr_52628_52669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (10))){
var inst_52536 = (state_52593[(12)]);
var inst_52537 = (state_52593[(13)]);
var inst_52534 = (state_52593[(14)]);
var inst_52535 = (state_52593[(16)]);
var inst_52542 = cljs.core._nth.call(null,inst_52535,inst_52537);
var inst_52543 = cljs.core.async.muxch_STAR_.call(null,inst_52542);
var inst_52544 = cljs.core.async.close_BANG_.call(null,inst_52543);
var inst_52545 = (inst_52537 + (1));
var tmp52623 = inst_52536;
var tmp52624 = inst_52534;
var tmp52625 = inst_52535;
var inst_52534__$1 = tmp52624;
var inst_52535__$1 = tmp52625;
var inst_52536__$1 = tmp52623;
var inst_52537__$1 = inst_52545;
var state_52593__$1 = (function (){var statearr_52629 = state_52593;
(statearr_52629[(12)] = inst_52536__$1);

(statearr_52629[(13)] = inst_52537__$1);

(statearr_52629[(14)] = inst_52534__$1);

(statearr_52629[(17)] = inst_52544);

(statearr_52629[(16)] = inst_52535__$1);

return statearr_52629;
})();
var statearr_52630_52670 = state_52593__$1;
(statearr_52630_52670[(2)] = null);

(statearr_52630_52670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (18))){
var inst_52563 = (state_52593[(2)]);
var state_52593__$1 = state_52593;
var statearr_52631_52671 = state_52593__$1;
(statearr_52631_52671[(2)] = inst_52563);

(statearr_52631_52671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52594 === (8))){
var inst_52536 = (state_52593[(12)]);
var inst_52537 = (state_52593[(13)]);
var inst_52539 = (inst_52537 < inst_52536);
var inst_52540 = inst_52539;
var state_52593__$1 = state_52593;
if(cljs.core.truth_(inst_52540)){
var statearr_52632_52672 = state_52593__$1;
(statearr_52632_52672[(1)] = (10));

} else {
var statearr_52633_52673 = state_52593__$1;
(statearr_52633_52673[(1)] = (11));

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
});})(c__42763__auto___52645,mults,ensure_mult,p))
;
return ((function (switch__42740__auto__,c__42763__auto___52645,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_52637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52637[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_52637[(1)] = (1));

return statearr_52637;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_52593){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_52593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52638){if((e52638 instanceof Object)){
var ex__42744__auto__ = e52638;
var statearr_52639_52674 = state_52593;
(statearr_52639_52674[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52675 = state_52593;
state_52593 = G__52675;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_52593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_52593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52645,mults,ensure_mult,p))
})();
var state__42765__auto__ = (function (){var statearr_52640 = f__42764__auto__.call(null);
(statearr_52640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52645);

return statearr_52640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52645,mults,ensure_mult,p))
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
var args52676 = [];
var len__35410__auto___52679 = arguments.length;
var i__35411__auto___52680 = (0);
while(true){
if((i__35411__auto___52680 < len__35410__auto___52679)){
args52676.push((arguments[i__35411__auto___52680]));

var G__52681 = (i__35411__auto___52680 + (1));
i__35411__auto___52680 = G__52681;
continue;
} else {
}
break;
}

var G__52678 = args52676.length;
switch (G__52678) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52676.length)].join('')));

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
var args52683 = [];
var len__35410__auto___52686 = arguments.length;
var i__35411__auto___52687 = (0);
while(true){
if((i__35411__auto___52687 < len__35410__auto___52686)){
args52683.push((arguments[i__35411__auto___52687]));

var G__52688 = (i__35411__auto___52687 + (1));
i__35411__auto___52687 = G__52688;
continue;
} else {
}
break;
}

var G__52685 = args52683.length;
switch (G__52685) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52683.length)].join('')));

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
var args52690 = [];
var len__35410__auto___52761 = arguments.length;
var i__35411__auto___52762 = (0);
while(true){
if((i__35411__auto___52762 < len__35410__auto___52761)){
args52690.push((arguments[i__35411__auto___52762]));

var G__52763 = (i__35411__auto___52762 + (1));
i__35411__auto___52762 = G__52763;
continue;
} else {
}
break;
}

var G__52692 = args52690.length;
switch (G__52692) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52690.length)].join('')));

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
var c__42763__auto___52765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52765,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52765,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52731){
var state_val_52732 = (state_52731[(1)]);
if((state_val_52732 === (7))){
var state_52731__$1 = state_52731;
var statearr_52733_52766 = state_52731__$1;
(statearr_52733_52766[(2)] = null);

(statearr_52733_52766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (1))){
var state_52731__$1 = state_52731;
var statearr_52734_52767 = state_52731__$1;
(statearr_52734_52767[(2)] = null);

(statearr_52734_52767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (4))){
var inst_52695 = (state_52731[(7)]);
var inst_52697 = (inst_52695 < cnt);
var state_52731__$1 = state_52731;
if(cljs.core.truth_(inst_52697)){
var statearr_52735_52768 = state_52731__$1;
(statearr_52735_52768[(1)] = (6));

} else {
var statearr_52736_52769 = state_52731__$1;
(statearr_52736_52769[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (15))){
var inst_52727 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52737_52770 = state_52731__$1;
(statearr_52737_52770[(2)] = inst_52727);

(statearr_52737_52770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (13))){
var inst_52720 = cljs.core.async.close_BANG_.call(null,out);
var state_52731__$1 = state_52731;
var statearr_52738_52771 = state_52731__$1;
(statearr_52738_52771[(2)] = inst_52720);

(statearr_52738_52771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (6))){
var state_52731__$1 = state_52731;
var statearr_52739_52772 = state_52731__$1;
(statearr_52739_52772[(2)] = null);

(statearr_52739_52772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (3))){
var inst_52729 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52731__$1,inst_52729);
} else {
if((state_val_52732 === (12))){
var inst_52717 = (state_52731[(8)]);
var inst_52717__$1 = (state_52731[(2)]);
var inst_52718 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52717__$1);
var state_52731__$1 = (function (){var statearr_52740 = state_52731;
(statearr_52740[(8)] = inst_52717__$1);

return statearr_52740;
})();
if(cljs.core.truth_(inst_52718)){
var statearr_52741_52773 = state_52731__$1;
(statearr_52741_52773[(1)] = (13));

} else {
var statearr_52742_52774 = state_52731__$1;
(statearr_52742_52774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (2))){
var inst_52694 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_52695 = (0);
var state_52731__$1 = (function (){var statearr_52743 = state_52731;
(statearr_52743[(7)] = inst_52695);

(statearr_52743[(9)] = inst_52694);

return statearr_52743;
})();
var statearr_52744_52775 = state_52731__$1;
(statearr_52744_52775[(2)] = null);

(statearr_52744_52775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (11))){
var inst_52695 = (state_52731[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52731,(10),Object,null,(9));
var inst_52704 = chs__$1.call(null,inst_52695);
var inst_52705 = done.call(null,inst_52695);
var inst_52706 = cljs.core.async.take_BANG_.call(null,inst_52704,inst_52705);
var state_52731__$1 = state_52731;
var statearr_52745_52776 = state_52731__$1;
(statearr_52745_52776[(2)] = inst_52706);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52731__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (9))){
var inst_52695 = (state_52731[(7)]);
var inst_52708 = (state_52731[(2)]);
var inst_52709 = (inst_52695 + (1));
var inst_52695__$1 = inst_52709;
var state_52731__$1 = (function (){var statearr_52746 = state_52731;
(statearr_52746[(7)] = inst_52695__$1);

(statearr_52746[(10)] = inst_52708);

return statearr_52746;
})();
var statearr_52747_52777 = state_52731__$1;
(statearr_52747_52777[(2)] = null);

(statearr_52747_52777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (5))){
var inst_52715 = (state_52731[(2)]);
var state_52731__$1 = (function (){var statearr_52748 = state_52731;
(statearr_52748[(11)] = inst_52715);

return statearr_52748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52731__$1,(12),dchan);
} else {
if((state_val_52732 === (14))){
var inst_52717 = (state_52731[(8)]);
var inst_52722 = cljs.core.apply.call(null,f,inst_52717);
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52731__$1,(16),out,inst_52722);
} else {
if((state_val_52732 === (16))){
var inst_52724 = (state_52731[(2)]);
var state_52731__$1 = (function (){var statearr_52749 = state_52731;
(statearr_52749[(12)] = inst_52724);

return statearr_52749;
})();
var statearr_52750_52778 = state_52731__$1;
(statearr_52750_52778[(2)] = null);

(statearr_52750_52778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (10))){
var inst_52699 = (state_52731[(2)]);
var inst_52700 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_52731__$1 = (function (){var statearr_52751 = state_52731;
(statearr_52751[(13)] = inst_52699);

return statearr_52751;
})();
var statearr_52752_52779 = state_52731__$1;
(statearr_52752_52779[(2)] = inst_52700);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52731__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (8))){
var inst_52713 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52753_52780 = state_52731__$1;
(statearr_52753_52780[(2)] = inst_52713);

(statearr_52753_52780[(1)] = (5));


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
});})(c__42763__auto___52765,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42740__auto__,c__42763__auto___52765,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_52757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52757[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_52757[(1)] = (1));

return statearr_52757;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_52731){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_52731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52758){if((e52758 instanceof Object)){
var ex__42744__auto__ = e52758;
var statearr_52759_52781 = state_52731;
(statearr_52759_52781[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52782 = state_52731;
state_52731 = G__52782;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_52731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_52731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52765,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42765__auto__ = (function (){var statearr_52760 = f__42764__auto__.call(null);
(statearr_52760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52765);

return statearr_52760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52765,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args52784 = [];
var len__35410__auto___52842 = arguments.length;
var i__35411__auto___52843 = (0);
while(true){
if((i__35411__auto___52843 < len__35410__auto___52842)){
args52784.push((arguments[i__35411__auto___52843]));

var G__52844 = (i__35411__auto___52843 + (1));
i__35411__auto___52843 = G__52844;
continue;
} else {
}
break;
}

var G__52786 = args52784.length;
switch (G__52786) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52784.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42763__auto___52846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52846,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52846,out){
return (function (state_52818){
var state_val_52819 = (state_52818[(1)]);
if((state_val_52819 === (7))){
var inst_52798 = (state_52818[(7)]);
var inst_52797 = (state_52818[(8)]);
var inst_52797__$1 = (state_52818[(2)]);
var inst_52798__$1 = cljs.core.nth.call(null,inst_52797__$1,(0),null);
var inst_52799 = cljs.core.nth.call(null,inst_52797__$1,(1),null);
var inst_52800 = (inst_52798__$1 == null);
var state_52818__$1 = (function (){var statearr_52820 = state_52818;
(statearr_52820[(7)] = inst_52798__$1);

(statearr_52820[(8)] = inst_52797__$1);

(statearr_52820[(9)] = inst_52799);

return statearr_52820;
})();
if(cljs.core.truth_(inst_52800)){
var statearr_52821_52847 = state_52818__$1;
(statearr_52821_52847[(1)] = (8));

} else {
var statearr_52822_52848 = state_52818__$1;
(statearr_52822_52848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (1))){
var inst_52787 = cljs.core.vec.call(null,chs);
var inst_52788 = inst_52787;
var state_52818__$1 = (function (){var statearr_52823 = state_52818;
(statearr_52823[(10)] = inst_52788);

return statearr_52823;
})();
var statearr_52824_52849 = state_52818__$1;
(statearr_52824_52849[(2)] = null);

(statearr_52824_52849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (4))){
var inst_52788 = (state_52818[(10)]);
var state_52818__$1 = state_52818;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52818__$1,(7),inst_52788);
} else {
if((state_val_52819 === (6))){
var inst_52814 = (state_52818[(2)]);
var state_52818__$1 = state_52818;
var statearr_52825_52850 = state_52818__$1;
(statearr_52825_52850[(2)] = inst_52814);

(statearr_52825_52850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (3))){
var inst_52816 = (state_52818[(2)]);
var state_52818__$1 = state_52818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52818__$1,inst_52816);
} else {
if((state_val_52819 === (2))){
var inst_52788 = (state_52818[(10)]);
var inst_52790 = cljs.core.count.call(null,inst_52788);
var inst_52791 = (inst_52790 > (0));
var state_52818__$1 = state_52818;
if(cljs.core.truth_(inst_52791)){
var statearr_52827_52851 = state_52818__$1;
(statearr_52827_52851[(1)] = (4));

} else {
var statearr_52828_52852 = state_52818__$1;
(statearr_52828_52852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (11))){
var inst_52788 = (state_52818[(10)]);
var inst_52807 = (state_52818[(2)]);
var tmp52826 = inst_52788;
var inst_52788__$1 = tmp52826;
var state_52818__$1 = (function (){var statearr_52829 = state_52818;
(statearr_52829[(10)] = inst_52788__$1);

(statearr_52829[(11)] = inst_52807);

return statearr_52829;
})();
var statearr_52830_52853 = state_52818__$1;
(statearr_52830_52853[(2)] = null);

(statearr_52830_52853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (9))){
var inst_52798 = (state_52818[(7)]);
var state_52818__$1 = state_52818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52818__$1,(11),out,inst_52798);
} else {
if((state_val_52819 === (5))){
var inst_52812 = cljs.core.async.close_BANG_.call(null,out);
var state_52818__$1 = state_52818;
var statearr_52831_52854 = state_52818__$1;
(statearr_52831_52854[(2)] = inst_52812);

(statearr_52831_52854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (10))){
var inst_52810 = (state_52818[(2)]);
var state_52818__$1 = state_52818;
var statearr_52832_52855 = state_52818__$1;
(statearr_52832_52855[(2)] = inst_52810);

(statearr_52832_52855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52819 === (8))){
var inst_52798 = (state_52818[(7)]);
var inst_52797 = (state_52818[(8)]);
var inst_52788 = (state_52818[(10)]);
var inst_52799 = (state_52818[(9)]);
var inst_52802 = (function (){var cs = inst_52788;
var vec__52793 = inst_52797;
var v = inst_52798;
var c = inst_52799;
return ((function (cs,vec__52793,v,c,inst_52798,inst_52797,inst_52788,inst_52799,state_val_52819,c__42763__auto___52846,out){
return (function (p1__52783_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52783_SHARP_);
});
;})(cs,vec__52793,v,c,inst_52798,inst_52797,inst_52788,inst_52799,state_val_52819,c__42763__auto___52846,out))
})();
var inst_52803 = cljs.core.filterv.call(null,inst_52802,inst_52788);
var inst_52788__$1 = inst_52803;
var state_52818__$1 = (function (){var statearr_52833 = state_52818;
(statearr_52833[(10)] = inst_52788__$1);

return statearr_52833;
})();
var statearr_52834_52856 = state_52818__$1;
(statearr_52834_52856[(2)] = null);

(statearr_52834_52856[(1)] = (2));


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
});})(c__42763__auto___52846,out))
;
return ((function (switch__42740__auto__,c__42763__auto___52846,out){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_52838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52838[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_52838[(1)] = (1));

return statearr_52838;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_52818){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_52818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52839){if((e52839 instanceof Object)){
var ex__42744__auto__ = e52839;
var statearr_52840_52857 = state_52818;
(statearr_52840_52857[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52858 = state_52818;
state_52818 = G__52858;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_52818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_52818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52846,out))
})();
var state__42765__auto__ = (function (){var statearr_52841 = f__42764__auto__.call(null);
(statearr_52841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52846);

return statearr_52841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52846,out))
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
var args52859 = [];
var len__35410__auto___52908 = arguments.length;
var i__35411__auto___52909 = (0);
while(true){
if((i__35411__auto___52909 < len__35410__auto___52908)){
args52859.push((arguments[i__35411__auto___52909]));

var G__52910 = (i__35411__auto___52909 + (1));
i__35411__auto___52909 = G__52910;
continue;
} else {
}
break;
}

var G__52861 = args52859.length;
switch (G__52861) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52859.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42763__auto___52912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52912,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52912,out){
return (function (state_52885){
var state_val_52886 = (state_52885[(1)]);
if((state_val_52886 === (7))){
var inst_52867 = (state_52885[(7)]);
var inst_52867__$1 = (state_52885[(2)]);
var inst_52868 = (inst_52867__$1 == null);
var inst_52869 = cljs.core.not.call(null,inst_52868);
var state_52885__$1 = (function (){var statearr_52887 = state_52885;
(statearr_52887[(7)] = inst_52867__$1);

return statearr_52887;
})();
if(inst_52869){
var statearr_52888_52913 = state_52885__$1;
(statearr_52888_52913[(1)] = (8));

} else {
var statearr_52889_52914 = state_52885__$1;
(statearr_52889_52914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (1))){
var inst_52862 = (0);
var state_52885__$1 = (function (){var statearr_52890 = state_52885;
(statearr_52890[(8)] = inst_52862);

return statearr_52890;
})();
var statearr_52891_52915 = state_52885__$1;
(statearr_52891_52915[(2)] = null);

(statearr_52891_52915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (4))){
var state_52885__$1 = state_52885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52885__$1,(7),ch);
} else {
if((state_val_52886 === (6))){
var inst_52880 = (state_52885[(2)]);
var state_52885__$1 = state_52885;
var statearr_52892_52916 = state_52885__$1;
(statearr_52892_52916[(2)] = inst_52880);

(statearr_52892_52916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (3))){
var inst_52882 = (state_52885[(2)]);
var inst_52883 = cljs.core.async.close_BANG_.call(null,out);
var state_52885__$1 = (function (){var statearr_52893 = state_52885;
(statearr_52893[(9)] = inst_52882);

return statearr_52893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52885__$1,inst_52883);
} else {
if((state_val_52886 === (2))){
var inst_52862 = (state_52885[(8)]);
var inst_52864 = (inst_52862 < n);
var state_52885__$1 = state_52885;
if(cljs.core.truth_(inst_52864)){
var statearr_52894_52917 = state_52885__$1;
(statearr_52894_52917[(1)] = (4));

} else {
var statearr_52895_52918 = state_52885__$1;
(statearr_52895_52918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (11))){
var inst_52862 = (state_52885[(8)]);
var inst_52872 = (state_52885[(2)]);
var inst_52873 = (inst_52862 + (1));
var inst_52862__$1 = inst_52873;
var state_52885__$1 = (function (){var statearr_52896 = state_52885;
(statearr_52896[(10)] = inst_52872);

(statearr_52896[(8)] = inst_52862__$1);

return statearr_52896;
})();
var statearr_52897_52919 = state_52885__$1;
(statearr_52897_52919[(2)] = null);

(statearr_52897_52919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (9))){
var state_52885__$1 = state_52885;
var statearr_52898_52920 = state_52885__$1;
(statearr_52898_52920[(2)] = null);

(statearr_52898_52920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (5))){
var state_52885__$1 = state_52885;
var statearr_52899_52921 = state_52885__$1;
(statearr_52899_52921[(2)] = null);

(statearr_52899_52921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (10))){
var inst_52877 = (state_52885[(2)]);
var state_52885__$1 = state_52885;
var statearr_52900_52922 = state_52885__$1;
(statearr_52900_52922[(2)] = inst_52877);

(statearr_52900_52922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52886 === (8))){
var inst_52867 = (state_52885[(7)]);
var state_52885__$1 = state_52885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52885__$1,(11),out,inst_52867);
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
});})(c__42763__auto___52912,out))
;
return ((function (switch__42740__auto__,c__42763__auto___52912,out){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_52904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52904[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_52904[(1)] = (1));

return statearr_52904;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_52885){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_52885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52905){if((e52905 instanceof Object)){
var ex__42744__auto__ = e52905;
var statearr_52906_52923 = state_52885;
(statearr_52906_52923[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52924 = state_52885;
state_52885 = G__52924;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_52885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_52885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52912,out))
})();
var state__42765__auto__ = (function (){var statearr_52907 = f__42764__auto__.call(null);
(statearr_52907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52912);

return statearr_52907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52912,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52932 = (function (map_LT_,f,ch,meta52933){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52933 = meta52933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52934,meta52933__$1){
var self__ = this;
var _52934__$1 = this;
return (new cljs.core.async.t_cljs$core$async52932(self__.map_LT_,self__.f,self__.ch,meta52933__$1));
});


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52934){
var self__ = this;
var _52934__$1 = this;
return self__.meta52933;
});


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52935 = (function (map_LT_,f,ch,meta52933,_,fn1,meta52936){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52933 = meta52933;
this._ = _;
this.fn1 = fn1;
this.meta52936 = meta52936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async52935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52937,meta52936__$1){
var self__ = this;
var _52937__$1 = this;
return (new cljs.core.async.t_cljs$core$async52935(self__.map_LT_,self__.f,self__.ch,self__.meta52933,self__._,self__.fn1,meta52936__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async52935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52937){
var self__ = this;
var _52937__$1 = this;
return self__.meta52936;
});})(___$1))
;


cljs.core.async.t_cljs$core$async52935.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async52935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async52935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async52935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52925_SHARP_){
return f1.call(null,(((p1__52925_SHARP_ == null))?null:self__.f.call(null,p1__52925_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52935.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52933","meta52933",1862481470,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52932","cljs.core.async/t_cljs$core$async52932",-1923794222,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52936","meta52936",2130964114,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52935";

cljs.core.async.t_cljs$core$async52935.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async52935");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async52935 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52935(map_LT___$1,f__$1,ch__$1,meta52933__$1,___$2,fn1__$1,meta52936){
return (new cljs.core.async.t_cljs$core$async52935(map_LT___$1,f__$1,ch__$1,meta52933__$1,___$2,fn1__$1,meta52936));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52935(self__.map_LT_,self__.f,self__.ch,self__.meta52933,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34215__auto__ = ret;
if(cljs.core.truth_(and__34215__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34215__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async52932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52933","meta52933",1862481470,null)], null);
});

cljs.core.async.t_cljs$core$async52932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52932";

cljs.core.async.t_cljs$core$async52932.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async52932");
});

cljs.core.async.__GT_t_cljs$core$async52932 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52932(map_LT___$1,f__$1,ch__$1,meta52933){
return (new cljs.core.async.t_cljs$core$async52932(map_LT___$1,f__$1,ch__$1,meta52933));
});

}

return (new cljs.core.async.t_cljs$core$async52932(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52941 = (function (map_GT_,f,ch,meta52942){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta52942 = meta52942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52943,meta52942__$1){
var self__ = this;
var _52943__$1 = this;
return (new cljs.core.async.t_cljs$core$async52941(self__.map_GT_,self__.f,self__.ch,meta52942__$1));
});


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52943){
var self__ = this;
var _52943__$1 = this;
return self__.meta52942;
});


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52942","meta52942",-1545891125,null)], null);
});

cljs.core.async.t_cljs$core$async52941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52941";

cljs.core.async.t_cljs$core$async52941.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async52941");
});

cljs.core.async.__GT_t_cljs$core$async52941 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52941(map_GT___$1,f__$1,ch__$1,meta52942){
return (new cljs.core.async.t_cljs$core$async52941(map_GT___$1,f__$1,ch__$1,meta52942));
});

}

return (new cljs.core.async.t_cljs$core$async52941(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52947 = (function (filter_GT_,p,ch,meta52948){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta52948 = meta52948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52949,meta52948__$1){
var self__ = this;
var _52949__$1 = this;
return (new cljs.core.async.t_cljs$core$async52947(self__.filter_GT_,self__.p,self__.ch,meta52948__$1));
});


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52949){
var self__ = this;
var _52949__$1 = this;
return self__.meta52948;
});


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async52947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52948","meta52948",1921983399,null)], null);
});

cljs.core.async.t_cljs$core$async52947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52947";

cljs.core.async.t_cljs$core$async52947.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.core.async/t_cljs$core$async52947");
});

cljs.core.async.__GT_t_cljs$core$async52947 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52947(filter_GT___$1,p__$1,ch__$1,meta52948){
return (new cljs.core.async.t_cljs$core$async52947(filter_GT___$1,p__$1,ch__$1,meta52948));
});

}

return (new cljs.core.async.t_cljs$core$async52947(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args52950 = [];
var len__35410__auto___52994 = arguments.length;
var i__35411__auto___52995 = (0);
while(true){
if((i__35411__auto___52995 < len__35410__auto___52994)){
args52950.push((arguments[i__35411__auto___52995]));

var G__52996 = (i__35411__auto___52995 + (1));
i__35411__auto___52995 = G__52996;
continue;
} else {
}
break;
}

var G__52952 = args52950.length;
switch (G__52952) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52950.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42763__auto___52998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___52998,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___52998,out){
return (function (state_52973){
var state_val_52974 = (state_52973[(1)]);
if((state_val_52974 === (7))){
var inst_52969 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_52975_52999 = state_52973__$1;
(statearr_52975_52999[(2)] = inst_52969);

(statearr_52975_52999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (1))){
var state_52973__$1 = state_52973;
var statearr_52976_53000 = state_52973__$1;
(statearr_52976_53000[(2)] = null);

(statearr_52976_53000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (4))){
var inst_52955 = (state_52973[(7)]);
var inst_52955__$1 = (state_52973[(2)]);
var inst_52956 = (inst_52955__$1 == null);
var state_52973__$1 = (function (){var statearr_52977 = state_52973;
(statearr_52977[(7)] = inst_52955__$1);

return statearr_52977;
})();
if(cljs.core.truth_(inst_52956)){
var statearr_52978_53001 = state_52973__$1;
(statearr_52978_53001[(1)] = (5));

} else {
var statearr_52979_53002 = state_52973__$1;
(statearr_52979_53002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (6))){
var inst_52955 = (state_52973[(7)]);
var inst_52960 = p.call(null,inst_52955);
var state_52973__$1 = state_52973;
if(cljs.core.truth_(inst_52960)){
var statearr_52980_53003 = state_52973__$1;
(statearr_52980_53003[(1)] = (8));

} else {
var statearr_52981_53004 = state_52973__$1;
(statearr_52981_53004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (3))){
var inst_52971 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52973__$1,inst_52971);
} else {
if((state_val_52974 === (2))){
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52973__$1,(4),ch);
} else {
if((state_val_52974 === (11))){
var inst_52963 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_52982_53005 = state_52973__$1;
(statearr_52982_53005[(2)] = inst_52963);

(statearr_52982_53005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (9))){
var state_52973__$1 = state_52973;
var statearr_52983_53006 = state_52973__$1;
(statearr_52983_53006[(2)] = null);

(statearr_52983_53006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (5))){
var inst_52958 = cljs.core.async.close_BANG_.call(null,out);
var state_52973__$1 = state_52973;
var statearr_52984_53007 = state_52973__$1;
(statearr_52984_53007[(2)] = inst_52958);

(statearr_52984_53007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (10))){
var inst_52966 = (state_52973[(2)]);
var state_52973__$1 = (function (){var statearr_52985 = state_52973;
(statearr_52985[(8)] = inst_52966);

return statearr_52985;
})();
var statearr_52986_53008 = state_52973__$1;
(statearr_52986_53008[(2)] = null);

(statearr_52986_53008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (8))){
var inst_52955 = (state_52973[(7)]);
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52973__$1,(11),out,inst_52955);
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
});})(c__42763__auto___52998,out))
;
return ((function (switch__42740__auto__,c__42763__auto___52998,out){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_52990 = [null,null,null,null,null,null,null,null,null];
(statearr_52990[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_52990[(1)] = (1));

return statearr_52990;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_52973){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_52973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e52991){if((e52991 instanceof Object)){
var ex__42744__auto__ = e52991;
var statearr_52992_53009 = state_52973;
(statearr_52992_53009[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53010 = state_52973;
state_52973 = G__53010;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_52973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_52973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___52998,out))
})();
var state__42765__auto__ = (function (){var statearr_52993 = f__42764__auto__.call(null);
(statearr_52993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___52998);

return statearr_52993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___52998,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args53011 = [];
var len__35410__auto___53014 = arguments.length;
var i__35411__auto___53015 = (0);
while(true){
if((i__35411__auto___53015 < len__35410__auto___53014)){
args53011.push((arguments[i__35411__auto___53015]));

var G__53016 = (i__35411__auto___53015 + (1));
i__35411__auto___53015 = G__53016;
continue;
} else {
}
break;
}

var G__53013 = args53011.length;
switch (G__53013) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53011.length)].join('')));

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
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_53183){
var state_val_53184 = (state_53183[(1)]);
if((state_val_53184 === (7))){
var inst_53179 = (state_53183[(2)]);
var state_53183__$1 = state_53183;
var statearr_53185_53226 = state_53183__$1;
(statearr_53185_53226[(2)] = inst_53179);

(statearr_53185_53226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (20))){
var inst_53149 = (state_53183[(7)]);
var inst_53160 = (state_53183[(2)]);
var inst_53161 = cljs.core.next.call(null,inst_53149);
var inst_53135 = inst_53161;
var inst_53136 = null;
var inst_53137 = (0);
var inst_53138 = (0);
var state_53183__$1 = (function (){var statearr_53186 = state_53183;
(statearr_53186[(8)] = inst_53138);

(statearr_53186[(9)] = inst_53160);

(statearr_53186[(10)] = inst_53137);

(statearr_53186[(11)] = inst_53135);

(statearr_53186[(12)] = inst_53136);

return statearr_53186;
})();
var statearr_53187_53227 = state_53183__$1;
(statearr_53187_53227[(2)] = null);

(statearr_53187_53227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (1))){
var state_53183__$1 = state_53183;
var statearr_53188_53228 = state_53183__$1;
(statearr_53188_53228[(2)] = null);

(statearr_53188_53228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (4))){
var inst_53124 = (state_53183[(13)]);
var inst_53124__$1 = (state_53183[(2)]);
var inst_53125 = (inst_53124__$1 == null);
var state_53183__$1 = (function (){var statearr_53189 = state_53183;
(statearr_53189[(13)] = inst_53124__$1);

return statearr_53189;
})();
if(cljs.core.truth_(inst_53125)){
var statearr_53190_53229 = state_53183__$1;
(statearr_53190_53229[(1)] = (5));

} else {
var statearr_53191_53230 = state_53183__$1;
(statearr_53191_53230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (15))){
var state_53183__$1 = state_53183;
var statearr_53195_53231 = state_53183__$1;
(statearr_53195_53231[(2)] = null);

(statearr_53195_53231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (21))){
var state_53183__$1 = state_53183;
var statearr_53196_53232 = state_53183__$1;
(statearr_53196_53232[(2)] = null);

(statearr_53196_53232[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (13))){
var inst_53138 = (state_53183[(8)]);
var inst_53137 = (state_53183[(10)]);
var inst_53135 = (state_53183[(11)]);
var inst_53136 = (state_53183[(12)]);
var inst_53145 = (state_53183[(2)]);
var inst_53146 = (inst_53138 + (1));
var tmp53192 = inst_53137;
var tmp53193 = inst_53135;
var tmp53194 = inst_53136;
var inst_53135__$1 = tmp53193;
var inst_53136__$1 = tmp53194;
var inst_53137__$1 = tmp53192;
var inst_53138__$1 = inst_53146;
var state_53183__$1 = (function (){var statearr_53197 = state_53183;
(statearr_53197[(8)] = inst_53138__$1);

(statearr_53197[(14)] = inst_53145);

(statearr_53197[(10)] = inst_53137__$1);

(statearr_53197[(11)] = inst_53135__$1);

(statearr_53197[(12)] = inst_53136__$1);

return statearr_53197;
})();
var statearr_53198_53233 = state_53183__$1;
(statearr_53198_53233[(2)] = null);

(statearr_53198_53233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (22))){
var state_53183__$1 = state_53183;
var statearr_53199_53234 = state_53183__$1;
(statearr_53199_53234[(2)] = null);

(statearr_53199_53234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (6))){
var inst_53124 = (state_53183[(13)]);
var inst_53133 = f.call(null,inst_53124);
var inst_53134 = cljs.core.seq.call(null,inst_53133);
var inst_53135 = inst_53134;
var inst_53136 = null;
var inst_53137 = (0);
var inst_53138 = (0);
var state_53183__$1 = (function (){var statearr_53200 = state_53183;
(statearr_53200[(8)] = inst_53138);

(statearr_53200[(10)] = inst_53137);

(statearr_53200[(11)] = inst_53135);

(statearr_53200[(12)] = inst_53136);

return statearr_53200;
})();
var statearr_53201_53235 = state_53183__$1;
(statearr_53201_53235[(2)] = null);

(statearr_53201_53235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (17))){
var inst_53149 = (state_53183[(7)]);
var inst_53153 = cljs.core.chunk_first.call(null,inst_53149);
var inst_53154 = cljs.core.chunk_rest.call(null,inst_53149);
var inst_53155 = cljs.core.count.call(null,inst_53153);
var inst_53135 = inst_53154;
var inst_53136 = inst_53153;
var inst_53137 = inst_53155;
var inst_53138 = (0);
var state_53183__$1 = (function (){var statearr_53202 = state_53183;
(statearr_53202[(8)] = inst_53138);

(statearr_53202[(10)] = inst_53137);

(statearr_53202[(11)] = inst_53135);

(statearr_53202[(12)] = inst_53136);

return statearr_53202;
})();
var statearr_53203_53236 = state_53183__$1;
(statearr_53203_53236[(2)] = null);

(statearr_53203_53236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (3))){
var inst_53181 = (state_53183[(2)]);
var state_53183__$1 = state_53183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53183__$1,inst_53181);
} else {
if((state_val_53184 === (12))){
var inst_53169 = (state_53183[(2)]);
var state_53183__$1 = state_53183;
var statearr_53204_53237 = state_53183__$1;
(statearr_53204_53237[(2)] = inst_53169);

(statearr_53204_53237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (2))){
var state_53183__$1 = state_53183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53183__$1,(4),in$);
} else {
if((state_val_53184 === (23))){
var inst_53177 = (state_53183[(2)]);
var state_53183__$1 = state_53183;
var statearr_53205_53238 = state_53183__$1;
(statearr_53205_53238[(2)] = inst_53177);

(statearr_53205_53238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (19))){
var inst_53164 = (state_53183[(2)]);
var state_53183__$1 = state_53183;
var statearr_53206_53239 = state_53183__$1;
(statearr_53206_53239[(2)] = inst_53164);

(statearr_53206_53239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (11))){
var inst_53149 = (state_53183[(7)]);
var inst_53135 = (state_53183[(11)]);
var inst_53149__$1 = cljs.core.seq.call(null,inst_53135);
var state_53183__$1 = (function (){var statearr_53207 = state_53183;
(statearr_53207[(7)] = inst_53149__$1);

return statearr_53207;
})();
if(inst_53149__$1){
var statearr_53208_53240 = state_53183__$1;
(statearr_53208_53240[(1)] = (14));

} else {
var statearr_53209_53241 = state_53183__$1;
(statearr_53209_53241[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (9))){
var inst_53171 = (state_53183[(2)]);
var inst_53172 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53183__$1 = (function (){var statearr_53210 = state_53183;
(statearr_53210[(15)] = inst_53171);

return statearr_53210;
})();
if(cljs.core.truth_(inst_53172)){
var statearr_53211_53242 = state_53183__$1;
(statearr_53211_53242[(1)] = (21));

} else {
var statearr_53212_53243 = state_53183__$1;
(statearr_53212_53243[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (5))){
var inst_53127 = cljs.core.async.close_BANG_.call(null,out);
var state_53183__$1 = state_53183;
var statearr_53213_53244 = state_53183__$1;
(statearr_53213_53244[(2)] = inst_53127);

(statearr_53213_53244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (14))){
var inst_53149 = (state_53183[(7)]);
var inst_53151 = cljs.core.chunked_seq_QMARK_.call(null,inst_53149);
var state_53183__$1 = state_53183;
if(inst_53151){
var statearr_53214_53245 = state_53183__$1;
(statearr_53214_53245[(1)] = (17));

} else {
var statearr_53215_53246 = state_53183__$1;
(statearr_53215_53246[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (16))){
var inst_53167 = (state_53183[(2)]);
var state_53183__$1 = state_53183;
var statearr_53216_53247 = state_53183__$1;
(statearr_53216_53247[(2)] = inst_53167);

(statearr_53216_53247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53184 === (10))){
var inst_53138 = (state_53183[(8)]);
var inst_53136 = (state_53183[(12)]);
var inst_53143 = cljs.core._nth.call(null,inst_53136,inst_53138);
var state_53183__$1 = state_53183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53183__$1,(13),out,inst_53143);
} else {
if((state_val_53184 === (18))){
var inst_53149 = (state_53183[(7)]);
var inst_53158 = cljs.core.first.call(null,inst_53149);
var state_53183__$1 = state_53183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53183__$1,(20),out,inst_53158);
} else {
if((state_val_53184 === (8))){
var inst_53138 = (state_53183[(8)]);
var inst_53137 = (state_53183[(10)]);
var inst_53140 = (inst_53138 < inst_53137);
var inst_53141 = inst_53140;
var state_53183__$1 = state_53183;
if(cljs.core.truth_(inst_53141)){
var statearr_53217_53248 = state_53183__$1;
(statearr_53217_53248[(1)] = (10));

} else {
var statearr_53218_53249 = state_53183__$1;
(statearr_53218_53249[(1)] = (11));

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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42741__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42741__auto____0 = (function (){
var statearr_53222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53222[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42741__auto__);

(statearr_53222[(1)] = (1));

return statearr_53222;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42741__auto____1 = (function (state_53183){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_53183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e53223){if((e53223 instanceof Object)){
var ex__42744__auto__ = e53223;
var statearr_53224_53250 = state_53183;
(statearr_53224_53250[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53251 = state_53183;
state_53183 = G__53251;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42741__auto__ = function(state_53183){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42741__auto____1.call(this,state_53183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42741__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42741__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_53225 = f__42764__auto__.call(null);
(statearr_53225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_53225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args53252 = [];
var len__35410__auto___53255 = arguments.length;
var i__35411__auto___53256 = (0);
while(true){
if((i__35411__auto___53256 < len__35410__auto___53255)){
args53252.push((arguments[i__35411__auto___53256]));

var G__53257 = (i__35411__auto___53256 + (1));
i__35411__auto___53256 = G__53257;
continue;
} else {
}
break;
}

var G__53254 = args53252.length;
switch (G__53254) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53252.length)].join('')));

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
var args53259 = [];
var len__35410__auto___53262 = arguments.length;
var i__35411__auto___53263 = (0);
while(true){
if((i__35411__auto___53263 < len__35410__auto___53262)){
args53259.push((arguments[i__35411__auto___53263]));

var G__53264 = (i__35411__auto___53263 + (1));
i__35411__auto___53263 = G__53264;
continue;
} else {
}
break;
}

var G__53261 = args53259.length;
switch (G__53261) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53259.length)].join('')));

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
var args53266 = [];
var len__35410__auto___53317 = arguments.length;
var i__35411__auto___53318 = (0);
while(true){
if((i__35411__auto___53318 < len__35410__auto___53317)){
args53266.push((arguments[i__35411__auto___53318]));

var G__53319 = (i__35411__auto___53318 + (1));
i__35411__auto___53318 = G__53319;
continue;
} else {
}
break;
}

var G__53268 = args53266.length;
switch (G__53268) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53266.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42763__auto___53321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___53321,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___53321,out){
return (function (state_53292){
var state_val_53293 = (state_53292[(1)]);
if((state_val_53293 === (7))){
var inst_53287 = (state_53292[(2)]);
var state_53292__$1 = state_53292;
var statearr_53294_53322 = state_53292__$1;
(statearr_53294_53322[(2)] = inst_53287);

(statearr_53294_53322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (1))){
var inst_53269 = null;
var state_53292__$1 = (function (){var statearr_53295 = state_53292;
(statearr_53295[(7)] = inst_53269);

return statearr_53295;
})();
var statearr_53296_53323 = state_53292__$1;
(statearr_53296_53323[(2)] = null);

(statearr_53296_53323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (4))){
var inst_53272 = (state_53292[(8)]);
var inst_53272__$1 = (state_53292[(2)]);
var inst_53273 = (inst_53272__$1 == null);
var inst_53274 = cljs.core.not.call(null,inst_53273);
var state_53292__$1 = (function (){var statearr_53297 = state_53292;
(statearr_53297[(8)] = inst_53272__$1);

return statearr_53297;
})();
if(inst_53274){
var statearr_53298_53324 = state_53292__$1;
(statearr_53298_53324[(1)] = (5));

} else {
var statearr_53299_53325 = state_53292__$1;
(statearr_53299_53325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (6))){
var state_53292__$1 = state_53292;
var statearr_53300_53326 = state_53292__$1;
(statearr_53300_53326[(2)] = null);

(statearr_53300_53326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (3))){
var inst_53289 = (state_53292[(2)]);
var inst_53290 = cljs.core.async.close_BANG_.call(null,out);
var state_53292__$1 = (function (){var statearr_53301 = state_53292;
(statearr_53301[(9)] = inst_53289);

return statearr_53301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53292__$1,inst_53290);
} else {
if((state_val_53293 === (2))){
var state_53292__$1 = state_53292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53292__$1,(4),ch);
} else {
if((state_val_53293 === (11))){
var inst_53272 = (state_53292[(8)]);
var inst_53281 = (state_53292[(2)]);
var inst_53269 = inst_53272;
var state_53292__$1 = (function (){var statearr_53302 = state_53292;
(statearr_53302[(10)] = inst_53281);

(statearr_53302[(7)] = inst_53269);

return statearr_53302;
})();
var statearr_53303_53327 = state_53292__$1;
(statearr_53303_53327[(2)] = null);

(statearr_53303_53327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (9))){
var inst_53272 = (state_53292[(8)]);
var state_53292__$1 = state_53292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53292__$1,(11),out,inst_53272);
} else {
if((state_val_53293 === (5))){
var inst_53269 = (state_53292[(7)]);
var inst_53272 = (state_53292[(8)]);
var inst_53276 = cljs.core._EQ_.call(null,inst_53272,inst_53269);
var state_53292__$1 = state_53292;
if(inst_53276){
var statearr_53305_53328 = state_53292__$1;
(statearr_53305_53328[(1)] = (8));

} else {
var statearr_53306_53329 = state_53292__$1;
(statearr_53306_53329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (10))){
var inst_53284 = (state_53292[(2)]);
var state_53292__$1 = state_53292;
var statearr_53307_53330 = state_53292__$1;
(statearr_53307_53330[(2)] = inst_53284);

(statearr_53307_53330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53293 === (8))){
var inst_53269 = (state_53292[(7)]);
var tmp53304 = inst_53269;
var inst_53269__$1 = tmp53304;
var state_53292__$1 = (function (){var statearr_53308 = state_53292;
(statearr_53308[(7)] = inst_53269__$1);

return statearr_53308;
})();
var statearr_53309_53331 = state_53292__$1;
(statearr_53309_53331[(2)] = null);

(statearr_53309_53331[(1)] = (2));


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
});})(c__42763__auto___53321,out))
;
return ((function (switch__42740__auto__,c__42763__auto___53321,out){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_53313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53313[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_53313[(1)] = (1));

return statearr_53313;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_53292){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_53292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e53314){if((e53314 instanceof Object)){
var ex__42744__auto__ = e53314;
var statearr_53315_53332 = state_53292;
(statearr_53315_53332[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53333 = state_53292;
state_53292 = G__53333;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_53292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_53292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___53321,out))
})();
var state__42765__auto__ = (function (){var statearr_53316 = f__42764__auto__.call(null);
(statearr_53316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___53321);

return statearr_53316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___53321,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args53334 = [];
var len__35410__auto___53404 = arguments.length;
var i__35411__auto___53405 = (0);
while(true){
if((i__35411__auto___53405 < len__35410__auto___53404)){
args53334.push((arguments[i__35411__auto___53405]));

var G__53406 = (i__35411__auto___53405 + (1));
i__35411__auto___53405 = G__53406;
continue;
} else {
}
break;
}

var G__53336 = args53334.length;
switch (G__53336) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53334.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42763__auto___53408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___53408,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___53408,out){
return (function (state_53374){
var state_val_53375 = (state_53374[(1)]);
if((state_val_53375 === (7))){
var inst_53370 = (state_53374[(2)]);
var state_53374__$1 = state_53374;
var statearr_53376_53409 = state_53374__$1;
(statearr_53376_53409[(2)] = inst_53370);

(statearr_53376_53409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (1))){
var inst_53337 = (new Array(n));
var inst_53338 = inst_53337;
var inst_53339 = (0);
var state_53374__$1 = (function (){var statearr_53377 = state_53374;
(statearr_53377[(7)] = inst_53339);

(statearr_53377[(8)] = inst_53338);

return statearr_53377;
})();
var statearr_53378_53410 = state_53374__$1;
(statearr_53378_53410[(2)] = null);

(statearr_53378_53410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (4))){
var inst_53342 = (state_53374[(9)]);
var inst_53342__$1 = (state_53374[(2)]);
var inst_53343 = (inst_53342__$1 == null);
var inst_53344 = cljs.core.not.call(null,inst_53343);
var state_53374__$1 = (function (){var statearr_53379 = state_53374;
(statearr_53379[(9)] = inst_53342__$1);

return statearr_53379;
})();
if(inst_53344){
var statearr_53380_53411 = state_53374__$1;
(statearr_53380_53411[(1)] = (5));

} else {
var statearr_53381_53412 = state_53374__$1;
(statearr_53381_53412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (15))){
var inst_53364 = (state_53374[(2)]);
var state_53374__$1 = state_53374;
var statearr_53382_53413 = state_53374__$1;
(statearr_53382_53413[(2)] = inst_53364);

(statearr_53382_53413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (13))){
var state_53374__$1 = state_53374;
var statearr_53383_53414 = state_53374__$1;
(statearr_53383_53414[(2)] = null);

(statearr_53383_53414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (6))){
var inst_53339 = (state_53374[(7)]);
var inst_53360 = (inst_53339 > (0));
var state_53374__$1 = state_53374;
if(cljs.core.truth_(inst_53360)){
var statearr_53384_53415 = state_53374__$1;
(statearr_53384_53415[(1)] = (12));

} else {
var statearr_53385_53416 = state_53374__$1;
(statearr_53385_53416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (3))){
var inst_53372 = (state_53374[(2)]);
var state_53374__$1 = state_53374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53374__$1,inst_53372);
} else {
if((state_val_53375 === (12))){
var inst_53338 = (state_53374[(8)]);
var inst_53362 = cljs.core.vec.call(null,inst_53338);
var state_53374__$1 = state_53374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53374__$1,(15),out,inst_53362);
} else {
if((state_val_53375 === (2))){
var state_53374__$1 = state_53374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53374__$1,(4),ch);
} else {
if((state_val_53375 === (11))){
var inst_53354 = (state_53374[(2)]);
var inst_53355 = (new Array(n));
var inst_53338 = inst_53355;
var inst_53339 = (0);
var state_53374__$1 = (function (){var statearr_53386 = state_53374;
(statearr_53386[(10)] = inst_53354);

(statearr_53386[(7)] = inst_53339);

(statearr_53386[(8)] = inst_53338);

return statearr_53386;
})();
var statearr_53387_53417 = state_53374__$1;
(statearr_53387_53417[(2)] = null);

(statearr_53387_53417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (9))){
var inst_53338 = (state_53374[(8)]);
var inst_53352 = cljs.core.vec.call(null,inst_53338);
var state_53374__$1 = state_53374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53374__$1,(11),out,inst_53352);
} else {
if((state_val_53375 === (5))){
var inst_53342 = (state_53374[(9)]);
var inst_53347 = (state_53374[(11)]);
var inst_53339 = (state_53374[(7)]);
var inst_53338 = (state_53374[(8)]);
var inst_53346 = (inst_53338[inst_53339] = inst_53342);
var inst_53347__$1 = (inst_53339 + (1));
var inst_53348 = (inst_53347__$1 < n);
var state_53374__$1 = (function (){var statearr_53388 = state_53374;
(statearr_53388[(11)] = inst_53347__$1);

(statearr_53388[(12)] = inst_53346);

return statearr_53388;
})();
if(cljs.core.truth_(inst_53348)){
var statearr_53389_53418 = state_53374__$1;
(statearr_53389_53418[(1)] = (8));

} else {
var statearr_53390_53419 = state_53374__$1;
(statearr_53390_53419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (14))){
var inst_53367 = (state_53374[(2)]);
var inst_53368 = cljs.core.async.close_BANG_.call(null,out);
var state_53374__$1 = (function (){var statearr_53392 = state_53374;
(statearr_53392[(13)] = inst_53367);

return statearr_53392;
})();
var statearr_53393_53420 = state_53374__$1;
(statearr_53393_53420[(2)] = inst_53368);

(statearr_53393_53420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (10))){
var inst_53358 = (state_53374[(2)]);
var state_53374__$1 = state_53374;
var statearr_53394_53421 = state_53374__$1;
(statearr_53394_53421[(2)] = inst_53358);

(statearr_53394_53421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53375 === (8))){
var inst_53347 = (state_53374[(11)]);
var inst_53338 = (state_53374[(8)]);
var tmp53391 = inst_53338;
var inst_53338__$1 = tmp53391;
var inst_53339 = inst_53347;
var state_53374__$1 = (function (){var statearr_53395 = state_53374;
(statearr_53395[(7)] = inst_53339);

(statearr_53395[(8)] = inst_53338__$1);

return statearr_53395;
})();
var statearr_53396_53422 = state_53374__$1;
(statearr_53396_53422[(2)] = null);

(statearr_53396_53422[(1)] = (2));


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
});})(c__42763__auto___53408,out))
;
return ((function (switch__42740__auto__,c__42763__auto___53408,out){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_53400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53400[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_53400[(1)] = (1));

return statearr_53400;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_53374){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_53374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e53401){if((e53401 instanceof Object)){
var ex__42744__auto__ = e53401;
var statearr_53402_53423 = state_53374;
(statearr_53402_53423[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53424 = state_53374;
state_53374 = G__53424;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_53374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_53374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___53408,out))
})();
var state__42765__auto__ = (function (){var statearr_53403 = f__42764__auto__.call(null);
(statearr_53403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___53408);

return statearr_53403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___53408,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args53425 = [];
var len__35410__auto___53499 = arguments.length;
var i__35411__auto___53500 = (0);
while(true){
if((i__35411__auto___53500 < len__35410__auto___53499)){
args53425.push((arguments[i__35411__auto___53500]));

var G__53501 = (i__35411__auto___53500 + (1));
i__35411__auto___53500 = G__53501;
continue;
} else {
}
break;
}

var G__53427 = args53425.length;
switch (G__53427) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53425.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42763__auto___53503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___53503,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___53503,out){
return (function (state_53469){
var state_val_53470 = (state_53469[(1)]);
if((state_val_53470 === (7))){
var inst_53465 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53471_53504 = state_53469__$1;
(statearr_53471_53504[(2)] = inst_53465);

(statearr_53471_53504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (1))){
var inst_53428 = [];
var inst_53429 = inst_53428;
var inst_53430 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53469__$1 = (function (){var statearr_53472 = state_53469;
(statearr_53472[(7)] = inst_53429);

(statearr_53472[(8)] = inst_53430);

return statearr_53472;
})();
var statearr_53473_53505 = state_53469__$1;
(statearr_53473_53505[(2)] = null);

(statearr_53473_53505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (4))){
var inst_53433 = (state_53469[(9)]);
var inst_53433__$1 = (state_53469[(2)]);
var inst_53434 = (inst_53433__$1 == null);
var inst_53435 = cljs.core.not.call(null,inst_53434);
var state_53469__$1 = (function (){var statearr_53474 = state_53469;
(statearr_53474[(9)] = inst_53433__$1);

return statearr_53474;
})();
if(inst_53435){
var statearr_53475_53506 = state_53469__$1;
(statearr_53475_53506[(1)] = (5));

} else {
var statearr_53476_53507 = state_53469__$1;
(statearr_53476_53507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (15))){
var inst_53459 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53477_53508 = state_53469__$1;
(statearr_53477_53508[(2)] = inst_53459);

(statearr_53477_53508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (13))){
var state_53469__$1 = state_53469;
var statearr_53478_53509 = state_53469__$1;
(statearr_53478_53509[(2)] = null);

(statearr_53478_53509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (6))){
var inst_53429 = (state_53469[(7)]);
var inst_53454 = inst_53429.length;
var inst_53455 = (inst_53454 > (0));
var state_53469__$1 = state_53469;
if(cljs.core.truth_(inst_53455)){
var statearr_53479_53510 = state_53469__$1;
(statearr_53479_53510[(1)] = (12));

} else {
var statearr_53480_53511 = state_53469__$1;
(statearr_53480_53511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (3))){
var inst_53467 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53469__$1,inst_53467);
} else {
if((state_val_53470 === (12))){
var inst_53429 = (state_53469[(7)]);
var inst_53457 = cljs.core.vec.call(null,inst_53429);
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53469__$1,(15),out,inst_53457);
} else {
if((state_val_53470 === (2))){
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53469__$1,(4),ch);
} else {
if((state_val_53470 === (11))){
var inst_53433 = (state_53469[(9)]);
var inst_53437 = (state_53469[(10)]);
var inst_53447 = (state_53469[(2)]);
var inst_53448 = [];
var inst_53449 = inst_53448.push(inst_53433);
var inst_53429 = inst_53448;
var inst_53430 = inst_53437;
var state_53469__$1 = (function (){var statearr_53481 = state_53469;
(statearr_53481[(11)] = inst_53447);

(statearr_53481[(7)] = inst_53429);

(statearr_53481[(12)] = inst_53449);

(statearr_53481[(8)] = inst_53430);

return statearr_53481;
})();
var statearr_53482_53512 = state_53469__$1;
(statearr_53482_53512[(2)] = null);

(statearr_53482_53512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (9))){
var inst_53429 = (state_53469[(7)]);
var inst_53445 = cljs.core.vec.call(null,inst_53429);
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53469__$1,(11),out,inst_53445);
} else {
if((state_val_53470 === (5))){
var inst_53433 = (state_53469[(9)]);
var inst_53437 = (state_53469[(10)]);
var inst_53430 = (state_53469[(8)]);
var inst_53437__$1 = f.call(null,inst_53433);
var inst_53438 = cljs.core._EQ_.call(null,inst_53437__$1,inst_53430);
var inst_53439 = cljs.core.keyword_identical_QMARK_.call(null,inst_53430,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53440 = (inst_53438) || (inst_53439);
var state_53469__$1 = (function (){var statearr_53483 = state_53469;
(statearr_53483[(10)] = inst_53437__$1);

return statearr_53483;
})();
if(cljs.core.truth_(inst_53440)){
var statearr_53484_53513 = state_53469__$1;
(statearr_53484_53513[(1)] = (8));

} else {
var statearr_53485_53514 = state_53469__$1;
(statearr_53485_53514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (14))){
var inst_53462 = (state_53469[(2)]);
var inst_53463 = cljs.core.async.close_BANG_.call(null,out);
var state_53469__$1 = (function (){var statearr_53487 = state_53469;
(statearr_53487[(13)] = inst_53462);

return statearr_53487;
})();
var statearr_53488_53515 = state_53469__$1;
(statearr_53488_53515[(2)] = inst_53463);

(statearr_53488_53515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (10))){
var inst_53452 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53489_53516 = state_53469__$1;
(statearr_53489_53516[(2)] = inst_53452);

(statearr_53489_53516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (8))){
var inst_53429 = (state_53469[(7)]);
var inst_53433 = (state_53469[(9)]);
var inst_53437 = (state_53469[(10)]);
var inst_53442 = inst_53429.push(inst_53433);
var tmp53486 = inst_53429;
var inst_53429__$1 = tmp53486;
var inst_53430 = inst_53437;
var state_53469__$1 = (function (){var statearr_53490 = state_53469;
(statearr_53490[(14)] = inst_53442);

(statearr_53490[(7)] = inst_53429__$1);

(statearr_53490[(8)] = inst_53430);

return statearr_53490;
})();
var statearr_53491_53517 = state_53469__$1;
(statearr_53491_53517[(2)] = null);

(statearr_53491_53517[(1)] = (2));


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
});})(c__42763__auto___53503,out))
;
return ((function (switch__42740__auto__,c__42763__auto___53503,out){
return (function() {
var cljs$core$async$state_machine__42741__auto__ = null;
var cljs$core$async$state_machine__42741__auto____0 = (function (){
var statearr_53495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53495[(0)] = cljs$core$async$state_machine__42741__auto__);

(statearr_53495[(1)] = (1));

return statearr_53495;
});
var cljs$core$async$state_machine__42741__auto____1 = (function (state_53469){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_53469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e53496){if((e53496 instanceof Object)){
var ex__42744__auto__ = e53496;
var statearr_53497_53518 = state_53469;
(statearr_53497_53518[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53519 = state_53469;
state_53469 = G__53519;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
cljs$core$async$state_machine__42741__auto__ = function(state_53469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42741__auto____1.call(this,state_53469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42741__auto____0;
cljs$core$async$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42741__auto____1;
return cljs$core$async$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___53503,out))
})();
var state__42765__auto__ = (function (){var statearr_53498 = f__42764__auto__.call(null);
(statearr_53498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___53503);

return statearr_53498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___53503,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489120073481