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
var args481743 = [];
var len__32954__auto___481749 = arguments.length;
var i__32955__auto___481750 = (0);
while(true){
if((i__32955__auto___481750 < len__32954__auto___481749)){
args481743.push((arguments[i__32955__auto___481750]));

var G__481751 = (i__32955__auto___481750 + (1));
i__32955__auto___481750 = G__481751;
continue;
} else {
}
break;
}

var G__481745 = args481743.length;
switch (G__481745) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args481743.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async481746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async481746 = (function (f,blockable,meta481747){
this.f = f;
this.blockable = blockable;
this.meta481747 = meta481747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async481746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_481748,meta481747__$1){
var self__ = this;
var _481748__$1 = this;
return (new cljs.core.async.t_cljs$core$async481746(self__.f,self__.blockable,meta481747__$1));
});


cljs.core.async.t_cljs$core$async481746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_481748){
var self__ = this;
var _481748__$1 = this;
return self__.meta481747;
});


cljs.core.async.t_cljs$core$async481746.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async481746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async481746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async481746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async481746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta481747","meta481747",-1953440369,null)], null);
});

cljs.core.async.t_cljs$core$async481746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async481746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async481746";

cljs.core.async.t_cljs$core$async481746.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async481746");
});

cljs.core.async.__GT_t_cljs$core$async481746 = (function cljs$core$async$__GT_t_cljs$core$async481746(f__$1,blockable__$1,meta481747){
return (new cljs.core.async.t_cljs$core$async481746(f__$1,blockable__$1,meta481747));
});

}

return (new cljs.core.async.t_cljs$core$async481746(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args481755 = [];
var len__32954__auto___481758 = arguments.length;
var i__32955__auto___481759 = (0);
while(true){
if((i__32955__auto___481759 < len__32954__auto___481758)){
args481755.push((arguments[i__32955__auto___481759]));

var G__481760 = (i__32955__auto___481759 + (1));
i__32955__auto___481759 = G__481760;
continue;
} else {
}
break;
}

var G__481757 = args481755.length;
switch (G__481757) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args481755.length)].join('')));

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
var args481762 = [];
var len__32954__auto___481765 = arguments.length;
var i__32955__auto___481766 = (0);
while(true){
if((i__32955__auto___481766 < len__32954__auto___481765)){
args481762.push((arguments[i__32955__auto___481766]));

var G__481767 = (i__32955__auto___481766 + (1));
i__32955__auto___481766 = G__481767;
continue;
} else {
}
break;
}

var G__481764 = args481762.length;
switch (G__481764) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args481762.length)].join('')));

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
var args481769 = [];
var len__32954__auto___481772 = arguments.length;
var i__32955__auto___481773 = (0);
while(true){
if((i__32955__auto___481773 < len__32954__auto___481772)){
args481769.push((arguments[i__32955__auto___481773]));

var G__481774 = (i__32955__auto___481773 + (1));
i__32955__auto___481773 = G__481774;
continue;
} else {
}
break;
}

var G__481771 = args481769.length;
switch (G__481771) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args481769.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_481776 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_481776);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_481776,ret){
return (function (){
return fn1.call(null,val_481776);
});})(val_481776,ret))
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
var args481777 = [];
var len__32954__auto___481780 = arguments.length;
var i__32955__auto___481781 = (0);
while(true){
if((i__32955__auto___481781 < len__32954__auto___481780)){
args481777.push((arguments[i__32955__auto___481781]));

var G__481782 = (i__32955__auto___481781 + (1));
i__32955__auto___481781 = G__481782;
continue;
} else {
}
break;
}

var G__481779 = args481777.length;
switch (G__481779) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args481777.length)].join('')));

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
var n__32794__auto___481784 = n;
var x_481785 = (0);
while(true){
if((x_481785 < n__32794__auto___481784)){
(a[x_481785] = (0));

var G__481786 = (x_481785 + (1));
x_481785 = G__481786;
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

var G__481787 = (i + (1));
i = G__481787;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async481791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async481791 = (function (alt_flag,flag,meta481792){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta481792 = meta481792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async481791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_481793,meta481792__$1){
var self__ = this;
var _481793__$1 = this;
return (new cljs.core.async.t_cljs$core$async481791(self__.alt_flag,self__.flag,meta481792__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async481791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_481793){
var self__ = this;
var _481793__$1 = this;
return self__.meta481792;
});})(flag))
;


cljs.core.async.t_cljs$core$async481791.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async481791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async481791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async481791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async481791.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta481792","meta481792",1813504926,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async481791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async481791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async481791";

cljs.core.async.t_cljs$core$async481791.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async481791");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async481791 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async481791(alt_flag__$1,flag__$1,meta481792){
return (new cljs.core.async.t_cljs$core$async481791(alt_flag__$1,flag__$1,meta481792));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async481791(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async481797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async481797 = (function (alt_handler,flag,cb,meta481798){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta481798 = meta481798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async481797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_481799,meta481798__$1){
var self__ = this;
var _481799__$1 = this;
return (new cljs.core.async.t_cljs$core$async481797(self__.alt_handler,self__.flag,self__.cb,meta481798__$1));
});


cljs.core.async.t_cljs$core$async481797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_481799){
var self__ = this;
var _481799__$1 = this;
return self__.meta481798;
});


cljs.core.async.t_cljs$core$async481797.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async481797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async481797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async481797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async481797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta481798","meta481798",1605879854,null)], null);
});

cljs.core.async.t_cljs$core$async481797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async481797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async481797";

cljs.core.async.t_cljs$core$async481797.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async481797");
});

cljs.core.async.__GT_t_cljs$core$async481797 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async481797(alt_handler__$1,flag__$1,cb__$1,meta481798){
return (new cljs.core.async.t_cljs$core$async481797(alt_handler__$1,flag__$1,cb__$1,meta481798));
});

}

return (new cljs.core.async.t_cljs$core$async481797(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__481800_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__481800_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__481801_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__481801_SHARP_,port], null));
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
var G__481802 = (i + (1));
i = G__481802;
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
var len__32954__auto___481808 = arguments.length;
var i__32955__auto___481809 = (0);
while(true){
if((i__32955__auto___481809 < len__32954__auto___481808)){
args__32961__auto__.push((arguments[i__32955__auto___481809]));

var G__481810 = (i__32955__auto___481809 + (1));
i__32955__auto___481809 = G__481810;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((1) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32962__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__481805){
var map__481806 = p__481805;
var map__481806__$1 = ((((!((map__481806 == null)))?((((map__481806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__481806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__481806):map__481806);
var opts = map__481806__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq481803){
var G__481804 = cljs.core.first.call(null,seq481803);
var seq481803__$1 = cljs.core.next.call(null,seq481803);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__481804,seq481803__$1);
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
var args481811 = [];
var len__32954__auto___481861 = arguments.length;
var i__32955__auto___481862 = (0);
while(true){
if((i__32955__auto___481862 < len__32954__auto___481861)){
args481811.push((arguments[i__32955__auto___481862]));

var G__481863 = (i__32955__auto___481862 + (1));
i__32955__auto___481862 = G__481863;
continue;
} else {
}
break;
}

var G__481813 = args481811.length;
switch (G__481813) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args481811.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38812__auto___481865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___481865){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___481865){
return (function (state_481837){
var state_val_481838 = (state_481837[(1)]);
if((state_val_481838 === (7))){
var inst_481833 = (state_481837[(2)]);
var state_481837__$1 = state_481837;
var statearr_481839_481866 = state_481837__$1;
(statearr_481839_481866[(2)] = inst_481833);

(statearr_481839_481866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (1))){
var state_481837__$1 = state_481837;
var statearr_481840_481867 = state_481837__$1;
(statearr_481840_481867[(2)] = null);

(statearr_481840_481867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (4))){
var inst_481816 = (state_481837[(7)]);
var inst_481816__$1 = (state_481837[(2)]);
var inst_481817 = (inst_481816__$1 == null);
var state_481837__$1 = (function (){var statearr_481841 = state_481837;
(statearr_481841[(7)] = inst_481816__$1);

return statearr_481841;
})();
if(cljs.core.truth_(inst_481817)){
var statearr_481842_481868 = state_481837__$1;
(statearr_481842_481868[(1)] = (5));

} else {
var statearr_481843_481869 = state_481837__$1;
(statearr_481843_481869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (13))){
var state_481837__$1 = state_481837;
var statearr_481844_481870 = state_481837__$1;
(statearr_481844_481870[(2)] = null);

(statearr_481844_481870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (6))){
var inst_481816 = (state_481837[(7)]);
var state_481837__$1 = state_481837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_481837__$1,(11),to,inst_481816);
} else {
if((state_val_481838 === (3))){
var inst_481835 = (state_481837[(2)]);
var state_481837__$1 = state_481837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_481837__$1,inst_481835);
} else {
if((state_val_481838 === (12))){
var state_481837__$1 = state_481837;
var statearr_481845_481871 = state_481837__$1;
(statearr_481845_481871[(2)] = null);

(statearr_481845_481871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (2))){
var state_481837__$1 = state_481837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_481837__$1,(4),from);
} else {
if((state_val_481838 === (11))){
var inst_481826 = (state_481837[(2)]);
var state_481837__$1 = state_481837;
if(cljs.core.truth_(inst_481826)){
var statearr_481846_481872 = state_481837__$1;
(statearr_481846_481872[(1)] = (12));

} else {
var statearr_481847_481873 = state_481837__$1;
(statearr_481847_481873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (9))){
var state_481837__$1 = state_481837;
var statearr_481848_481874 = state_481837__$1;
(statearr_481848_481874[(2)] = null);

(statearr_481848_481874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (5))){
var state_481837__$1 = state_481837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_481849_481875 = state_481837__$1;
(statearr_481849_481875[(1)] = (8));

} else {
var statearr_481850_481876 = state_481837__$1;
(statearr_481850_481876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (14))){
var inst_481831 = (state_481837[(2)]);
var state_481837__$1 = state_481837;
var statearr_481851_481877 = state_481837__$1;
(statearr_481851_481877[(2)] = inst_481831);

(statearr_481851_481877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (10))){
var inst_481823 = (state_481837[(2)]);
var state_481837__$1 = state_481837;
var statearr_481852_481878 = state_481837__$1;
(statearr_481852_481878[(2)] = inst_481823);

(statearr_481852_481878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_481838 === (8))){
var inst_481820 = cljs.core.async.close_BANG_.call(null,to);
var state_481837__$1 = state_481837;
var statearr_481853_481879 = state_481837__$1;
(statearr_481853_481879[(2)] = inst_481820);

(statearr_481853_481879[(1)] = (10));


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
});})(c__38812__auto___481865))
;
return ((function (switch__38700__auto__,c__38812__auto___481865){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_481857 = [null,null,null,null,null,null,null,null];
(statearr_481857[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_481857[(1)] = (1));

return statearr_481857;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_481837){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_481837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e481858){if((e481858 instanceof Object)){
var ex__38704__auto__ = e481858;
var statearr_481859_481880 = state_481837;
(statearr_481859_481880[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_481837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e481858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__481881 = state_481837;
state_481837 = G__481881;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_481837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_481837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___481865))
})();
var state__38814__auto__ = (function (){var statearr_481860 = f__38813__auto__.call(null);
(statearr_481860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___481865);

return statearr_481860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___481865))
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
return (function (p__482069){
var vec__482070 = p__482069;
var v = cljs.core.nth.call(null,vec__482070,(0),null);
var p = cljs.core.nth.call(null,vec__482070,(1),null);
var job = vec__482070;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38812__auto___482256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___482256,res,vec__482070,v,p,job,jobs,results){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___482256,res,vec__482070,v,p,job,jobs,results){
return (function (state_482077){
var state_val_482078 = (state_482077[(1)]);
if((state_val_482078 === (1))){
var state_482077__$1 = state_482077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_482077__$1,(2),res,v);
} else {
if((state_val_482078 === (2))){
var inst_482074 = (state_482077[(2)]);
var inst_482075 = cljs.core.async.close_BANG_.call(null,res);
var state_482077__$1 = (function (){var statearr_482079 = state_482077;
(statearr_482079[(7)] = inst_482074);

return statearr_482079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482077__$1,inst_482075);
} else {
return null;
}
}
});})(c__38812__auto___482256,res,vec__482070,v,p,job,jobs,results))
;
return ((function (switch__38700__auto__,c__38812__auto___482256,res,vec__482070,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_482083 = [null,null,null,null,null,null,null,null];
(statearr_482083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_482083[(1)] = (1));

return statearr_482083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_482077){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482084){if((e482084 instanceof Object)){
var ex__38704__auto__ = e482084;
var statearr_482085_482257 = state_482077;
(statearr_482085_482257[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482258 = state_482077;
state_482077 = G__482258;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_482077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_482077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___482256,res,vec__482070,v,p,job,jobs,results))
})();
var state__38814__auto__ = (function (){var statearr_482086 = f__38813__auto__.call(null);
(statearr_482086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___482256);

return statearr_482086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___482256,res,vec__482070,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__482087){
var vec__482088 = p__482087;
var v = cljs.core.nth.call(null,vec__482088,(0),null);
var p = cljs.core.nth.call(null,vec__482088,(1),null);
var job = vec__482088;
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
var n__32794__auto___482259 = n;
var __482260 = (0);
while(true){
if((__482260 < n__32794__auto___482259)){
var G__482091_482261 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__482091_482261) {
case "compute":
var c__38812__auto___482263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__482260,c__38812__auto___482263,G__482091_482261,n__32794__auto___482259,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (__482260,c__38812__auto___482263,G__482091_482261,n__32794__auto___482259,jobs,results,process,async){
return (function (state_482104){
var state_val_482105 = (state_482104[(1)]);
if((state_val_482105 === (1))){
var state_482104__$1 = state_482104;
var statearr_482106_482264 = state_482104__$1;
(statearr_482106_482264[(2)] = null);

(statearr_482106_482264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482105 === (2))){
var state_482104__$1 = state_482104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482104__$1,(4),jobs);
} else {
if((state_val_482105 === (3))){
var inst_482102 = (state_482104[(2)]);
var state_482104__$1 = state_482104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482104__$1,inst_482102);
} else {
if((state_val_482105 === (4))){
var inst_482094 = (state_482104[(2)]);
var inst_482095 = process.call(null,inst_482094);
var state_482104__$1 = state_482104;
if(cljs.core.truth_(inst_482095)){
var statearr_482107_482265 = state_482104__$1;
(statearr_482107_482265[(1)] = (5));

} else {
var statearr_482108_482266 = state_482104__$1;
(statearr_482108_482266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482105 === (5))){
var state_482104__$1 = state_482104;
var statearr_482109_482267 = state_482104__$1;
(statearr_482109_482267[(2)] = null);

(statearr_482109_482267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482105 === (6))){
var state_482104__$1 = state_482104;
var statearr_482110_482268 = state_482104__$1;
(statearr_482110_482268[(2)] = null);

(statearr_482110_482268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482105 === (7))){
var inst_482100 = (state_482104[(2)]);
var state_482104__$1 = state_482104;
var statearr_482111_482269 = state_482104__$1;
(statearr_482111_482269[(2)] = inst_482100);

(statearr_482111_482269[(1)] = (3));


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
});})(__482260,c__38812__auto___482263,G__482091_482261,n__32794__auto___482259,jobs,results,process,async))
;
return ((function (__482260,switch__38700__auto__,c__38812__auto___482263,G__482091_482261,n__32794__auto___482259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_482115 = [null,null,null,null,null,null,null];
(statearr_482115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_482115[(1)] = (1));

return statearr_482115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_482104){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482116){if((e482116 instanceof Object)){
var ex__38704__auto__ = e482116;
var statearr_482117_482270 = state_482104;
(statearr_482117_482270[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482271 = state_482104;
state_482104 = G__482271;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_482104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_482104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(__482260,switch__38700__auto__,c__38812__auto___482263,G__482091_482261,n__32794__auto___482259,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_482118 = f__38813__auto__.call(null);
(statearr_482118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___482263);

return statearr_482118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(__482260,c__38812__auto___482263,G__482091_482261,n__32794__auto___482259,jobs,results,process,async))
);


break;
case "async":
var c__38812__auto___482272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__482260,c__38812__auto___482272,G__482091_482261,n__32794__auto___482259,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (__482260,c__38812__auto___482272,G__482091_482261,n__32794__auto___482259,jobs,results,process,async){
return (function (state_482131){
var state_val_482132 = (state_482131[(1)]);
if((state_val_482132 === (1))){
var state_482131__$1 = state_482131;
var statearr_482133_482273 = state_482131__$1;
(statearr_482133_482273[(2)] = null);

(statearr_482133_482273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482132 === (2))){
var state_482131__$1 = state_482131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482131__$1,(4),jobs);
} else {
if((state_val_482132 === (3))){
var inst_482129 = (state_482131[(2)]);
var state_482131__$1 = state_482131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482131__$1,inst_482129);
} else {
if((state_val_482132 === (4))){
var inst_482121 = (state_482131[(2)]);
var inst_482122 = async.call(null,inst_482121);
var state_482131__$1 = state_482131;
if(cljs.core.truth_(inst_482122)){
var statearr_482134_482274 = state_482131__$1;
(statearr_482134_482274[(1)] = (5));

} else {
var statearr_482135_482275 = state_482131__$1;
(statearr_482135_482275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482132 === (5))){
var state_482131__$1 = state_482131;
var statearr_482136_482276 = state_482131__$1;
(statearr_482136_482276[(2)] = null);

(statearr_482136_482276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482132 === (6))){
var state_482131__$1 = state_482131;
var statearr_482137_482277 = state_482131__$1;
(statearr_482137_482277[(2)] = null);

(statearr_482137_482277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482132 === (7))){
var inst_482127 = (state_482131[(2)]);
var state_482131__$1 = state_482131;
var statearr_482138_482278 = state_482131__$1;
(statearr_482138_482278[(2)] = inst_482127);

(statearr_482138_482278[(1)] = (3));


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
});})(__482260,c__38812__auto___482272,G__482091_482261,n__32794__auto___482259,jobs,results,process,async))
;
return ((function (__482260,switch__38700__auto__,c__38812__auto___482272,G__482091_482261,n__32794__auto___482259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_482142 = [null,null,null,null,null,null,null];
(statearr_482142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_482142[(1)] = (1));

return statearr_482142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_482131){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482143){if((e482143 instanceof Object)){
var ex__38704__auto__ = e482143;
var statearr_482144_482279 = state_482131;
(statearr_482144_482279[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482280 = state_482131;
state_482131 = G__482280;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_482131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_482131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(__482260,switch__38700__auto__,c__38812__auto___482272,G__482091_482261,n__32794__auto___482259,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_482145 = f__38813__auto__.call(null);
(statearr_482145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___482272);

return statearr_482145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(__482260,c__38812__auto___482272,G__482091_482261,n__32794__auto___482259,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__482281 = (__482260 + (1));
__482260 = G__482281;
continue;
} else {
}
break;
}

var c__38812__auto___482282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___482282,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___482282,jobs,results,process,async){
return (function (state_482167){
var state_val_482168 = (state_482167[(1)]);
if((state_val_482168 === (1))){
var state_482167__$1 = state_482167;
var statearr_482169_482283 = state_482167__$1;
(statearr_482169_482283[(2)] = null);

(statearr_482169_482283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482168 === (2))){
var state_482167__$1 = state_482167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482167__$1,(4),from);
} else {
if((state_val_482168 === (3))){
var inst_482165 = (state_482167[(2)]);
var state_482167__$1 = state_482167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482167__$1,inst_482165);
} else {
if((state_val_482168 === (4))){
var inst_482148 = (state_482167[(7)]);
var inst_482148__$1 = (state_482167[(2)]);
var inst_482149 = (inst_482148__$1 == null);
var state_482167__$1 = (function (){var statearr_482170 = state_482167;
(statearr_482170[(7)] = inst_482148__$1);

return statearr_482170;
})();
if(cljs.core.truth_(inst_482149)){
var statearr_482171_482284 = state_482167__$1;
(statearr_482171_482284[(1)] = (5));

} else {
var statearr_482172_482285 = state_482167__$1;
(statearr_482172_482285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482168 === (5))){
var inst_482151 = cljs.core.async.close_BANG_.call(null,jobs);
var state_482167__$1 = state_482167;
var statearr_482173_482286 = state_482167__$1;
(statearr_482173_482286[(2)] = inst_482151);

(statearr_482173_482286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482168 === (6))){
var inst_482148 = (state_482167[(7)]);
var inst_482153 = (state_482167[(8)]);
var inst_482153__$1 = cljs.core.async.chan.call(null,(1));
var inst_482154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_482155 = [inst_482148,inst_482153__$1];
var inst_482156 = (new cljs.core.PersistentVector(null,2,(5),inst_482154,inst_482155,null));
var state_482167__$1 = (function (){var statearr_482174 = state_482167;
(statearr_482174[(8)] = inst_482153__$1);

return statearr_482174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_482167__$1,(8),jobs,inst_482156);
} else {
if((state_val_482168 === (7))){
var inst_482163 = (state_482167[(2)]);
var state_482167__$1 = state_482167;
var statearr_482175_482287 = state_482167__$1;
(statearr_482175_482287[(2)] = inst_482163);

(statearr_482175_482287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482168 === (8))){
var inst_482153 = (state_482167[(8)]);
var inst_482158 = (state_482167[(2)]);
var state_482167__$1 = (function (){var statearr_482176 = state_482167;
(statearr_482176[(9)] = inst_482158);

return statearr_482176;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_482167__$1,(9),results,inst_482153);
} else {
if((state_val_482168 === (9))){
var inst_482160 = (state_482167[(2)]);
var state_482167__$1 = (function (){var statearr_482177 = state_482167;
(statearr_482177[(10)] = inst_482160);

return statearr_482177;
})();
var statearr_482178_482288 = state_482167__$1;
(statearr_482178_482288[(2)] = null);

(statearr_482178_482288[(1)] = (2));


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
});})(c__38812__auto___482282,jobs,results,process,async))
;
return ((function (switch__38700__auto__,c__38812__auto___482282,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_482182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_482182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_482182[(1)] = (1));

return statearr_482182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_482167){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482183){if((e482183 instanceof Object)){
var ex__38704__auto__ = e482183;
var statearr_482184_482289 = state_482167;
(statearr_482184_482289[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482290 = state_482167;
state_482167 = G__482290;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_482167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_482167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___482282,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_482185 = f__38813__auto__.call(null);
(statearr_482185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___482282);

return statearr_482185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___482282,jobs,results,process,async))
);


var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,jobs,results,process,async){
return (function (state_482223){
var state_val_482224 = (state_482223[(1)]);
if((state_val_482224 === (7))){
var inst_482219 = (state_482223[(2)]);
var state_482223__$1 = state_482223;
var statearr_482225_482291 = state_482223__$1;
(statearr_482225_482291[(2)] = inst_482219);

(statearr_482225_482291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (20))){
var state_482223__$1 = state_482223;
var statearr_482226_482292 = state_482223__$1;
(statearr_482226_482292[(2)] = null);

(statearr_482226_482292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (1))){
var state_482223__$1 = state_482223;
var statearr_482227_482293 = state_482223__$1;
(statearr_482227_482293[(2)] = null);

(statearr_482227_482293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (4))){
var inst_482188 = (state_482223[(7)]);
var inst_482188__$1 = (state_482223[(2)]);
var inst_482189 = (inst_482188__$1 == null);
var state_482223__$1 = (function (){var statearr_482228 = state_482223;
(statearr_482228[(7)] = inst_482188__$1);

return statearr_482228;
})();
if(cljs.core.truth_(inst_482189)){
var statearr_482229_482294 = state_482223__$1;
(statearr_482229_482294[(1)] = (5));

} else {
var statearr_482230_482295 = state_482223__$1;
(statearr_482230_482295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (15))){
var inst_482201 = (state_482223[(8)]);
var state_482223__$1 = state_482223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_482223__$1,(18),to,inst_482201);
} else {
if((state_val_482224 === (21))){
var inst_482214 = (state_482223[(2)]);
var state_482223__$1 = state_482223;
var statearr_482231_482296 = state_482223__$1;
(statearr_482231_482296[(2)] = inst_482214);

(statearr_482231_482296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (13))){
var inst_482216 = (state_482223[(2)]);
var state_482223__$1 = (function (){var statearr_482232 = state_482223;
(statearr_482232[(9)] = inst_482216);

return statearr_482232;
})();
var statearr_482233_482297 = state_482223__$1;
(statearr_482233_482297[(2)] = null);

(statearr_482233_482297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (6))){
var inst_482188 = (state_482223[(7)]);
var state_482223__$1 = state_482223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482223__$1,(11),inst_482188);
} else {
if((state_val_482224 === (17))){
var inst_482209 = (state_482223[(2)]);
var state_482223__$1 = state_482223;
if(cljs.core.truth_(inst_482209)){
var statearr_482234_482298 = state_482223__$1;
(statearr_482234_482298[(1)] = (19));

} else {
var statearr_482235_482299 = state_482223__$1;
(statearr_482235_482299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (3))){
var inst_482221 = (state_482223[(2)]);
var state_482223__$1 = state_482223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482223__$1,inst_482221);
} else {
if((state_val_482224 === (12))){
var inst_482198 = (state_482223[(10)]);
var state_482223__$1 = state_482223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482223__$1,(14),inst_482198);
} else {
if((state_val_482224 === (2))){
var state_482223__$1 = state_482223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482223__$1,(4),results);
} else {
if((state_val_482224 === (19))){
var state_482223__$1 = state_482223;
var statearr_482236_482300 = state_482223__$1;
(statearr_482236_482300[(2)] = null);

(statearr_482236_482300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (11))){
var inst_482198 = (state_482223[(2)]);
var state_482223__$1 = (function (){var statearr_482237 = state_482223;
(statearr_482237[(10)] = inst_482198);

return statearr_482237;
})();
var statearr_482238_482301 = state_482223__$1;
(statearr_482238_482301[(2)] = null);

(statearr_482238_482301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (9))){
var state_482223__$1 = state_482223;
var statearr_482239_482302 = state_482223__$1;
(statearr_482239_482302[(2)] = null);

(statearr_482239_482302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (5))){
var state_482223__$1 = state_482223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_482240_482303 = state_482223__$1;
(statearr_482240_482303[(1)] = (8));

} else {
var statearr_482241_482304 = state_482223__$1;
(statearr_482241_482304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (14))){
var inst_482203 = (state_482223[(11)]);
var inst_482201 = (state_482223[(8)]);
var inst_482201__$1 = (state_482223[(2)]);
var inst_482202 = (inst_482201__$1 == null);
var inst_482203__$1 = cljs.core.not.call(null,inst_482202);
var state_482223__$1 = (function (){var statearr_482242 = state_482223;
(statearr_482242[(11)] = inst_482203__$1);

(statearr_482242[(8)] = inst_482201__$1);

return statearr_482242;
})();
if(inst_482203__$1){
var statearr_482243_482305 = state_482223__$1;
(statearr_482243_482305[(1)] = (15));

} else {
var statearr_482244_482306 = state_482223__$1;
(statearr_482244_482306[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (16))){
var inst_482203 = (state_482223[(11)]);
var state_482223__$1 = state_482223;
var statearr_482245_482307 = state_482223__$1;
(statearr_482245_482307[(2)] = inst_482203);

(statearr_482245_482307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (10))){
var inst_482195 = (state_482223[(2)]);
var state_482223__$1 = state_482223;
var statearr_482246_482308 = state_482223__$1;
(statearr_482246_482308[(2)] = inst_482195);

(statearr_482246_482308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (18))){
var inst_482206 = (state_482223[(2)]);
var state_482223__$1 = state_482223;
var statearr_482247_482309 = state_482223__$1;
(statearr_482247_482309[(2)] = inst_482206);

(statearr_482247_482309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482224 === (8))){
var inst_482192 = cljs.core.async.close_BANG_.call(null,to);
var state_482223__$1 = state_482223;
var statearr_482248_482310 = state_482223__$1;
(statearr_482248_482310[(2)] = inst_482192);

(statearr_482248_482310[(1)] = (10));


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
var statearr_482252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_482252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_482252[(1)] = (1));

return statearr_482252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_482223){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482253){if((e482253 instanceof Object)){
var ex__38704__auto__ = e482253;
var statearr_482254_482311 = state_482223;
(statearr_482254_482311[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482312 = state_482223;
state_482223 = G__482312;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_482223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_482223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_482255 = f__38813__auto__.call(null);
(statearr_482255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_482255;
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
var args482313 = [];
var len__32954__auto___482316 = arguments.length;
var i__32955__auto___482317 = (0);
while(true){
if((i__32955__auto___482317 < len__32954__auto___482316)){
args482313.push((arguments[i__32955__auto___482317]));

var G__482318 = (i__32955__auto___482317 + (1));
i__32955__auto___482317 = G__482318;
continue;
} else {
}
break;
}

var G__482315 = args482313.length;
switch (G__482315) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args482313.length)].join('')));

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
var args482320 = [];
var len__32954__auto___482323 = arguments.length;
var i__32955__auto___482324 = (0);
while(true){
if((i__32955__auto___482324 < len__32954__auto___482323)){
args482320.push((arguments[i__32955__auto___482324]));

var G__482325 = (i__32955__auto___482324 + (1));
i__32955__auto___482324 = G__482325;
continue;
} else {
}
break;
}

var G__482322 = args482320.length;
switch (G__482322) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args482320.length)].join('')));

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
var args482327 = [];
var len__32954__auto___482380 = arguments.length;
var i__32955__auto___482381 = (0);
while(true){
if((i__32955__auto___482381 < len__32954__auto___482380)){
args482327.push((arguments[i__32955__auto___482381]));

var G__482382 = (i__32955__auto___482381 + (1));
i__32955__auto___482381 = G__482382;
continue;
} else {
}
break;
}

var G__482329 = args482327.length;
switch (G__482329) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args482327.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38812__auto___482384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___482384,tc,fc){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___482384,tc,fc){
return (function (state_482355){
var state_val_482356 = (state_482355[(1)]);
if((state_val_482356 === (7))){
var inst_482351 = (state_482355[(2)]);
var state_482355__$1 = state_482355;
var statearr_482357_482385 = state_482355__$1;
(statearr_482357_482385[(2)] = inst_482351);

(statearr_482357_482385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (1))){
var state_482355__$1 = state_482355;
var statearr_482358_482386 = state_482355__$1;
(statearr_482358_482386[(2)] = null);

(statearr_482358_482386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (4))){
var inst_482332 = (state_482355[(7)]);
var inst_482332__$1 = (state_482355[(2)]);
var inst_482333 = (inst_482332__$1 == null);
var state_482355__$1 = (function (){var statearr_482359 = state_482355;
(statearr_482359[(7)] = inst_482332__$1);

return statearr_482359;
})();
if(cljs.core.truth_(inst_482333)){
var statearr_482360_482387 = state_482355__$1;
(statearr_482360_482387[(1)] = (5));

} else {
var statearr_482361_482388 = state_482355__$1;
(statearr_482361_482388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (13))){
var state_482355__$1 = state_482355;
var statearr_482362_482389 = state_482355__$1;
(statearr_482362_482389[(2)] = null);

(statearr_482362_482389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (6))){
var inst_482332 = (state_482355[(7)]);
var inst_482338 = p.call(null,inst_482332);
var state_482355__$1 = state_482355;
if(cljs.core.truth_(inst_482338)){
var statearr_482363_482390 = state_482355__$1;
(statearr_482363_482390[(1)] = (9));

} else {
var statearr_482364_482391 = state_482355__$1;
(statearr_482364_482391[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (3))){
var inst_482353 = (state_482355[(2)]);
var state_482355__$1 = state_482355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482355__$1,inst_482353);
} else {
if((state_val_482356 === (12))){
var state_482355__$1 = state_482355;
var statearr_482365_482392 = state_482355__$1;
(statearr_482365_482392[(2)] = null);

(statearr_482365_482392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (2))){
var state_482355__$1 = state_482355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482355__$1,(4),ch);
} else {
if((state_val_482356 === (11))){
var inst_482332 = (state_482355[(7)]);
var inst_482342 = (state_482355[(2)]);
var state_482355__$1 = state_482355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_482355__$1,(8),inst_482342,inst_482332);
} else {
if((state_val_482356 === (9))){
var state_482355__$1 = state_482355;
var statearr_482366_482393 = state_482355__$1;
(statearr_482366_482393[(2)] = tc);

(statearr_482366_482393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (5))){
var inst_482335 = cljs.core.async.close_BANG_.call(null,tc);
var inst_482336 = cljs.core.async.close_BANG_.call(null,fc);
var state_482355__$1 = (function (){var statearr_482367 = state_482355;
(statearr_482367[(8)] = inst_482335);

return statearr_482367;
})();
var statearr_482368_482394 = state_482355__$1;
(statearr_482368_482394[(2)] = inst_482336);

(statearr_482368_482394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (14))){
var inst_482349 = (state_482355[(2)]);
var state_482355__$1 = state_482355;
var statearr_482369_482395 = state_482355__$1;
(statearr_482369_482395[(2)] = inst_482349);

(statearr_482369_482395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (10))){
var state_482355__$1 = state_482355;
var statearr_482370_482396 = state_482355__$1;
(statearr_482370_482396[(2)] = fc);

(statearr_482370_482396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482356 === (8))){
var inst_482344 = (state_482355[(2)]);
var state_482355__$1 = state_482355;
if(cljs.core.truth_(inst_482344)){
var statearr_482371_482397 = state_482355__$1;
(statearr_482371_482397[(1)] = (12));

} else {
var statearr_482372_482398 = state_482355__$1;
(statearr_482372_482398[(1)] = (13));

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
});})(c__38812__auto___482384,tc,fc))
;
return ((function (switch__38700__auto__,c__38812__auto___482384,tc,fc){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_482376 = [null,null,null,null,null,null,null,null,null];
(statearr_482376[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_482376[(1)] = (1));

return statearr_482376;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_482355){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482377){if((e482377 instanceof Object)){
var ex__38704__auto__ = e482377;
var statearr_482378_482399 = state_482355;
(statearr_482378_482399[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482400 = state_482355;
state_482355 = G__482400;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_482355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_482355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___482384,tc,fc))
})();
var state__38814__auto__ = (function (){var statearr_482379 = f__38813__auto__.call(null);
(statearr_482379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___482384);

return statearr_482379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___482384,tc,fc))
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
return (function (state_482464){
var state_val_482465 = (state_482464[(1)]);
if((state_val_482465 === (7))){
var inst_482460 = (state_482464[(2)]);
var state_482464__$1 = state_482464;
var statearr_482466_482487 = state_482464__$1;
(statearr_482466_482487[(2)] = inst_482460);

(statearr_482466_482487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (1))){
var inst_482444 = init;
var state_482464__$1 = (function (){var statearr_482467 = state_482464;
(statearr_482467[(7)] = inst_482444);

return statearr_482467;
})();
var statearr_482468_482488 = state_482464__$1;
(statearr_482468_482488[(2)] = null);

(statearr_482468_482488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (4))){
var inst_482447 = (state_482464[(8)]);
var inst_482447__$1 = (state_482464[(2)]);
var inst_482448 = (inst_482447__$1 == null);
var state_482464__$1 = (function (){var statearr_482469 = state_482464;
(statearr_482469[(8)] = inst_482447__$1);

return statearr_482469;
})();
if(cljs.core.truth_(inst_482448)){
var statearr_482470_482489 = state_482464__$1;
(statearr_482470_482489[(1)] = (5));

} else {
var statearr_482471_482490 = state_482464__$1;
(statearr_482471_482490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (6))){
var inst_482451 = (state_482464[(9)]);
var inst_482447 = (state_482464[(8)]);
var inst_482444 = (state_482464[(7)]);
var inst_482451__$1 = f.call(null,inst_482444,inst_482447);
var inst_482452 = cljs.core.reduced_QMARK_.call(null,inst_482451__$1);
var state_482464__$1 = (function (){var statearr_482472 = state_482464;
(statearr_482472[(9)] = inst_482451__$1);

return statearr_482472;
})();
if(inst_482452){
var statearr_482473_482491 = state_482464__$1;
(statearr_482473_482491[(1)] = (8));

} else {
var statearr_482474_482492 = state_482464__$1;
(statearr_482474_482492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (3))){
var inst_482462 = (state_482464[(2)]);
var state_482464__$1 = state_482464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482464__$1,inst_482462);
} else {
if((state_val_482465 === (2))){
var state_482464__$1 = state_482464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482464__$1,(4),ch);
} else {
if((state_val_482465 === (9))){
var inst_482451 = (state_482464[(9)]);
var inst_482444 = inst_482451;
var state_482464__$1 = (function (){var statearr_482475 = state_482464;
(statearr_482475[(7)] = inst_482444);

return statearr_482475;
})();
var statearr_482476_482493 = state_482464__$1;
(statearr_482476_482493[(2)] = null);

(statearr_482476_482493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (5))){
var inst_482444 = (state_482464[(7)]);
var state_482464__$1 = state_482464;
var statearr_482477_482494 = state_482464__$1;
(statearr_482477_482494[(2)] = inst_482444);

(statearr_482477_482494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (10))){
var inst_482458 = (state_482464[(2)]);
var state_482464__$1 = state_482464;
var statearr_482478_482495 = state_482464__$1;
(statearr_482478_482495[(2)] = inst_482458);

(statearr_482478_482495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482465 === (8))){
var inst_482451 = (state_482464[(9)]);
var inst_482454 = cljs.core.deref.call(null,inst_482451);
var state_482464__$1 = state_482464;
var statearr_482479_482496 = state_482464__$1;
(statearr_482479_482496[(2)] = inst_482454);

(statearr_482479_482496[(1)] = (10));


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
var statearr_482483 = [null,null,null,null,null,null,null,null,null,null];
(statearr_482483[(0)] = cljs$core$async$reduce_$_state_machine__38701__auto__);

(statearr_482483[(1)] = (1));

return statearr_482483;
});
var cljs$core$async$reduce_$_state_machine__38701__auto____1 = (function (state_482464){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482484){if((e482484 instanceof Object)){
var ex__38704__auto__ = e482484;
var statearr_482485_482497 = state_482464;
(statearr_482485_482497[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482498 = state_482464;
state_482464 = G__482498;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38701__auto__ = function(state_482464){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38701__auto____1.call(this,state_482464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38701__auto____0;
cljs$core$async$reduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38701__auto____1;
return cljs$core$async$reduce_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_482486 = f__38813__auto__.call(null);
(statearr_482486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_482486;
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
return (function (state_482518){
var state_val_482519 = (state_482518[(1)]);
if((state_val_482519 === (1))){
var inst_482513 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_482518__$1 = state_482518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482518__$1,(2),inst_482513);
} else {
if((state_val_482519 === (2))){
var inst_482515 = (state_482518[(2)]);
var inst_482516 = f__$1.call(null,inst_482515);
var state_482518__$1 = state_482518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482518__$1,inst_482516);
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
var statearr_482523 = [null,null,null,null,null,null,null];
(statearr_482523[(0)] = cljs$core$async$transduce_$_state_machine__38701__auto__);

(statearr_482523[(1)] = (1));

return statearr_482523;
});
var cljs$core$async$transduce_$_state_machine__38701__auto____1 = (function (state_482518){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482524){if((e482524 instanceof Object)){
var ex__38704__auto__ = e482524;
var statearr_482525_482527 = state_482518;
(statearr_482525_482527[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482528 = state_482518;
state_482518 = G__482528;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38701__auto__ = function(state_482518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38701__auto____1.call(this,state_482518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38701__auto____0;
cljs$core$async$transduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38701__auto____1;
return cljs$core$async$transduce_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,f__$1))
})();
var state__38814__auto__ = (function (){var statearr_482526 = f__38813__auto__.call(null);
(statearr_482526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_482526;
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
var args482529 = [];
var len__32954__auto___482581 = arguments.length;
var i__32955__auto___482582 = (0);
while(true){
if((i__32955__auto___482582 < len__32954__auto___482581)){
args482529.push((arguments[i__32955__auto___482582]));

var G__482583 = (i__32955__auto___482582 + (1));
i__32955__auto___482582 = G__482583;
continue;
} else {
}
break;
}

var G__482531 = args482529.length;
switch (G__482531) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args482529.length)].join('')));

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
return (function (state_482556){
var state_val_482557 = (state_482556[(1)]);
if((state_val_482557 === (7))){
var inst_482538 = (state_482556[(2)]);
var state_482556__$1 = state_482556;
var statearr_482558_482585 = state_482556__$1;
(statearr_482558_482585[(2)] = inst_482538);

(statearr_482558_482585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (1))){
var inst_482532 = cljs.core.seq.call(null,coll);
var inst_482533 = inst_482532;
var state_482556__$1 = (function (){var statearr_482559 = state_482556;
(statearr_482559[(7)] = inst_482533);

return statearr_482559;
})();
var statearr_482560_482586 = state_482556__$1;
(statearr_482560_482586[(2)] = null);

(statearr_482560_482586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (4))){
var inst_482533 = (state_482556[(7)]);
var inst_482536 = cljs.core.first.call(null,inst_482533);
var state_482556__$1 = state_482556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_482556__$1,(7),ch,inst_482536);
} else {
if((state_val_482557 === (13))){
var inst_482550 = (state_482556[(2)]);
var state_482556__$1 = state_482556;
var statearr_482561_482587 = state_482556__$1;
(statearr_482561_482587[(2)] = inst_482550);

(statearr_482561_482587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (6))){
var inst_482541 = (state_482556[(2)]);
var state_482556__$1 = state_482556;
if(cljs.core.truth_(inst_482541)){
var statearr_482562_482588 = state_482556__$1;
(statearr_482562_482588[(1)] = (8));

} else {
var statearr_482563_482589 = state_482556__$1;
(statearr_482563_482589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (3))){
var inst_482554 = (state_482556[(2)]);
var state_482556__$1 = state_482556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482556__$1,inst_482554);
} else {
if((state_val_482557 === (12))){
var state_482556__$1 = state_482556;
var statearr_482564_482590 = state_482556__$1;
(statearr_482564_482590[(2)] = null);

(statearr_482564_482590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (2))){
var inst_482533 = (state_482556[(7)]);
var state_482556__$1 = state_482556;
if(cljs.core.truth_(inst_482533)){
var statearr_482565_482591 = state_482556__$1;
(statearr_482565_482591[(1)] = (4));

} else {
var statearr_482566_482592 = state_482556__$1;
(statearr_482566_482592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (11))){
var inst_482547 = cljs.core.async.close_BANG_.call(null,ch);
var state_482556__$1 = state_482556;
var statearr_482567_482593 = state_482556__$1;
(statearr_482567_482593[(2)] = inst_482547);

(statearr_482567_482593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (9))){
var state_482556__$1 = state_482556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_482568_482594 = state_482556__$1;
(statearr_482568_482594[(1)] = (11));

} else {
var statearr_482569_482595 = state_482556__$1;
(statearr_482569_482595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (5))){
var inst_482533 = (state_482556[(7)]);
var state_482556__$1 = state_482556;
var statearr_482570_482596 = state_482556__$1;
(statearr_482570_482596[(2)] = inst_482533);

(statearr_482570_482596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (10))){
var inst_482552 = (state_482556[(2)]);
var state_482556__$1 = state_482556;
var statearr_482571_482597 = state_482556__$1;
(statearr_482571_482597[(2)] = inst_482552);

(statearr_482571_482597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482557 === (8))){
var inst_482533 = (state_482556[(7)]);
var inst_482543 = cljs.core.next.call(null,inst_482533);
var inst_482533__$1 = inst_482543;
var state_482556__$1 = (function (){var statearr_482572 = state_482556;
(statearr_482572[(7)] = inst_482533__$1);

return statearr_482572;
})();
var statearr_482573_482598 = state_482556__$1;
(statearr_482573_482598[(2)] = null);

(statearr_482573_482598[(1)] = (2));


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
var statearr_482577 = [null,null,null,null,null,null,null,null];
(statearr_482577[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_482577[(1)] = (1));

return statearr_482577;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_482556){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e482578){if((e482578 instanceof Object)){
var ex__38704__auto__ = e482578;
var statearr_482579_482599 = state_482556;
(statearr_482579_482599[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e482578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__482600 = state_482556;
state_482556 = G__482600;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_482556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_482556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_482580 = f__38813__auto__.call(null);
(statearr_482580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_482580;
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
if(typeof cljs.core.async.t_cljs$core$async482826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async482826 = (function (mult,ch,cs,meta482827){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta482827 = meta482827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_482828,meta482827__$1){
var self__ = this;
var _482828__$1 = this;
return (new cljs.core.async.t_cljs$core$async482826(self__.mult,self__.ch,self__.cs,meta482827__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_482828){
var self__ = this;
var _482828__$1 = this;
return self__.meta482827;
});})(cs))
;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async482826.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async482826.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta482827","meta482827",-1246396528,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async482826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async482826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async482826";

cljs.core.async.t_cljs$core$async482826.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async482826");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async482826 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async482826(mult__$1,ch__$1,cs__$1,meta482827){
return (new cljs.core.async.t_cljs$core$async482826(mult__$1,ch__$1,cs__$1,meta482827));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async482826(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38812__auto___483051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___483051,cs,m,dchan,dctr,done){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___483051,cs,m,dchan,dctr,done){
return (function (state_482963){
var state_val_482964 = (state_482963[(1)]);
if((state_val_482964 === (7))){
var inst_482959 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_482965_483052 = state_482963__$1;
(statearr_482965_483052[(2)] = inst_482959);

(statearr_482965_483052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (20))){
var inst_482862 = (state_482963[(7)]);
var inst_482874 = cljs.core.first.call(null,inst_482862);
var inst_482875 = cljs.core.nth.call(null,inst_482874,(0),null);
var inst_482876 = cljs.core.nth.call(null,inst_482874,(1),null);
var state_482963__$1 = (function (){var statearr_482966 = state_482963;
(statearr_482966[(8)] = inst_482875);

return statearr_482966;
})();
if(cljs.core.truth_(inst_482876)){
var statearr_482967_483053 = state_482963__$1;
(statearr_482967_483053[(1)] = (22));

} else {
var statearr_482968_483054 = state_482963__$1;
(statearr_482968_483054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (27))){
var inst_482904 = (state_482963[(9)]);
var inst_482911 = (state_482963[(10)]);
var inst_482906 = (state_482963[(11)]);
var inst_482831 = (state_482963[(12)]);
var inst_482911__$1 = cljs.core._nth.call(null,inst_482904,inst_482906);
var inst_482912 = cljs.core.async.put_BANG_.call(null,inst_482911__$1,inst_482831,done);
var state_482963__$1 = (function (){var statearr_482969 = state_482963;
(statearr_482969[(10)] = inst_482911__$1);

return statearr_482969;
})();
if(cljs.core.truth_(inst_482912)){
var statearr_482970_483055 = state_482963__$1;
(statearr_482970_483055[(1)] = (30));

} else {
var statearr_482971_483056 = state_482963__$1;
(statearr_482971_483056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (1))){
var state_482963__$1 = state_482963;
var statearr_482972_483057 = state_482963__$1;
(statearr_482972_483057[(2)] = null);

(statearr_482972_483057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (24))){
var inst_482862 = (state_482963[(7)]);
var inst_482881 = (state_482963[(2)]);
var inst_482882 = cljs.core.next.call(null,inst_482862);
var inst_482840 = inst_482882;
var inst_482841 = null;
var inst_482842 = (0);
var inst_482843 = (0);
var state_482963__$1 = (function (){var statearr_482973 = state_482963;
(statearr_482973[(13)] = inst_482841);

(statearr_482973[(14)] = inst_482843);

(statearr_482973[(15)] = inst_482840);

(statearr_482973[(16)] = inst_482842);

(statearr_482973[(17)] = inst_482881);

return statearr_482973;
})();
var statearr_482974_483058 = state_482963__$1;
(statearr_482974_483058[(2)] = null);

(statearr_482974_483058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (39))){
var state_482963__$1 = state_482963;
var statearr_482978_483059 = state_482963__$1;
(statearr_482978_483059[(2)] = null);

(statearr_482978_483059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (4))){
var inst_482831 = (state_482963[(12)]);
var inst_482831__$1 = (state_482963[(2)]);
var inst_482832 = (inst_482831__$1 == null);
var state_482963__$1 = (function (){var statearr_482979 = state_482963;
(statearr_482979[(12)] = inst_482831__$1);

return statearr_482979;
})();
if(cljs.core.truth_(inst_482832)){
var statearr_482980_483060 = state_482963__$1;
(statearr_482980_483060[(1)] = (5));

} else {
var statearr_482981_483061 = state_482963__$1;
(statearr_482981_483061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (15))){
var inst_482841 = (state_482963[(13)]);
var inst_482843 = (state_482963[(14)]);
var inst_482840 = (state_482963[(15)]);
var inst_482842 = (state_482963[(16)]);
var inst_482858 = (state_482963[(2)]);
var inst_482859 = (inst_482843 + (1));
var tmp482975 = inst_482841;
var tmp482976 = inst_482840;
var tmp482977 = inst_482842;
var inst_482840__$1 = tmp482976;
var inst_482841__$1 = tmp482975;
var inst_482842__$1 = tmp482977;
var inst_482843__$1 = inst_482859;
var state_482963__$1 = (function (){var statearr_482982 = state_482963;
(statearr_482982[(18)] = inst_482858);

(statearr_482982[(13)] = inst_482841__$1);

(statearr_482982[(14)] = inst_482843__$1);

(statearr_482982[(15)] = inst_482840__$1);

(statearr_482982[(16)] = inst_482842__$1);

return statearr_482982;
})();
var statearr_482983_483062 = state_482963__$1;
(statearr_482983_483062[(2)] = null);

(statearr_482983_483062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (21))){
var inst_482885 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_482987_483063 = state_482963__$1;
(statearr_482987_483063[(2)] = inst_482885);

(statearr_482987_483063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (31))){
var inst_482911 = (state_482963[(10)]);
var inst_482915 = done.call(null,null);
var inst_482916 = cljs.core.async.untap_STAR_.call(null,m,inst_482911);
var state_482963__$1 = (function (){var statearr_482988 = state_482963;
(statearr_482988[(19)] = inst_482915);

return statearr_482988;
})();
var statearr_482989_483064 = state_482963__$1;
(statearr_482989_483064[(2)] = inst_482916);

(statearr_482989_483064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (32))){
var inst_482904 = (state_482963[(9)]);
var inst_482905 = (state_482963[(20)]);
var inst_482903 = (state_482963[(21)]);
var inst_482906 = (state_482963[(11)]);
var inst_482918 = (state_482963[(2)]);
var inst_482919 = (inst_482906 + (1));
var tmp482984 = inst_482904;
var tmp482985 = inst_482905;
var tmp482986 = inst_482903;
var inst_482903__$1 = tmp482986;
var inst_482904__$1 = tmp482984;
var inst_482905__$1 = tmp482985;
var inst_482906__$1 = inst_482919;
var state_482963__$1 = (function (){var statearr_482990 = state_482963;
(statearr_482990[(22)] = inst_482918);

(statearr_482990[(9)] = inst_482904__$1);

(statearr_482990[(20)] = inst_482905__$1);

(statearr_482990[(21)] = inst_482903__$1);

(statearr_482990[(11)] = inst_482906__$1);

return statearr_482990;
})();
var statearr_482991_483065 = state_482963__$1;
(statearr_482991_483065[(2)] = null);

(statearr_482991_483065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (40))){
var inst_482931 = (state_482963[(23)]);
var inst_482935 = done.call(null,null);
var inst_482936 = cljs.core.async.untap_STAR_.call(null,m,inst_482931);
var state_482963__$1 = (function (){var statearr_482992 = state_482963;
(statearr_482992[(24)] = inst_482935);

return statearr_482992;
})();
var statearr_482993_483066 = state_482963__$1;
(statearr_482993_483066[(2)] = inst_482936);

(statearr_482993_483066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (33))){
var inst_482922 = (state_482963[(25)]);
var inst_482924 = cljs.core.chunked_seq_QMARK_.call(null,inst_482922);
var state_482963__$1 = state_482963;
if(inst_482924){
var statearr_482994_483067 = state_482963__$1;
(statearr_482994_483067[(1)] = (36));

} else {
var statearr_482995_483068 = state_482963__$1;
(statearr_482995_483068[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (13))){
var inst_482852 = (state_482963[(26)]);
var inst_482855 = cljs.core.async.close_BANG_.call(null,inst_482852);
var state_482963__$1 = state_482963;
var statearr_482996_483069 = state_482963__$1;
(statearr_482996_483069[(2)] = inst_482855);

(statearr_482996_483069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (22))){
var inst_482875 = (state_482963[(8)]);
var inst_482878 = cljs.core.async.close_BANG_.call(null,inst_482875);
var state_482963__$1 = state_482963;
var statearr_482997_483070 = state_482963__$1;
(statearr_482997_483070[(2)] = inst_482878);

(statearr_482997_483070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (36))){
var inst_482922 = (state_482963[(25)]);
var inst_482926 = cljs.core.chunk_first.call(null,inst_482922);
var inst_482927 = cljs.core.chunk_rest.call(null,inst_482922);
var inst_482928 = cljs.core.count.call(null,inst_482926);
var inst_482903 = inst_482927;
var inst_482904 = inst_482926;
var inst_482905 = inst_482928;
var inst_482906 = (0);
var state_482963__$1 = (function (){var statearr_482998 = state_482963;
(statearr_482998[(9)] = inst_482904);

(statearr_482998[(20)] = inst_482905);

(statearr_482998[(21)] = inst_482903);

(statearr_482998[(11)] = inst_482906);

return statearr_482998;
})();
var statearr_482999_483071 = state_482963__$1;
(statearr_482999_483071[(2)] = null);

(statearr_482999_483071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (41))){
var inst_482922 = (state_482963[(25)]);
var inst_482938 = (state_482963[(2)]);
var inst_482939 = cljs.core.next.call(null,inst_482922);
var inst_482903 = inst_482939;
var inst_482904 = null;
var inst_482905 = (0);
var inst_482906 = (0);
var state_482963__$1 = (function (){var statearr_483000 = state_482963;
(statearr_483000[(9)] = inst_482904);

(statearr_483000[(20)] = inst_482905);

(statearr_483000[(21)] = inst_482903);

(statearr_483000[(11)] = inst_482906);

(statearr_483000[(27)] = inst_482938);

return statearr_483000;
})();
var statearr_483001_483072 = state_482963__$1;
(statearr_483001_483072[(2)] = null);

(statearr_483001_483072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (43))){
var state_482963__$1 = state_482963;
var statearr_483002_483073 = state_482963__$1;
(statearr_483002_483073[(2)] = null);

(statearr_483002_483073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (29))){
var inst_482947 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483003_483074 = state_482963__$1;
(statearr_483003_483074[(2)] = inst_482947);

(statearr_483003_483074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (44))){
var inst_482956 = (state_482963[(2)]);
var state_482963__$1 = (function (){var statearr_483004 = state_482963;
(statearr_483004[(28)] = inst_482956);

return statearr_483004;
})();
var statearr_483005_483075 = state_482963__$1;
(statearr_483005_483075[(2)] = null);

(statearr_483005_483075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (6))){
var inst_482895 = (state_482963[(29)]);
var inst_482894 = cljs.core.deref.call(null,cs);
var inst_482895__$1 = cljs.core.keys.call(null,inst_482894);
var inst_482896 = cljs.core.count.call(null,inst_482895__$1);
var inst_482897 = cljs.core.reset_BANG_.call(null,dctr,inst_482896);
var inst_482902 = cljs.core.seq.call(null,inst_482895__$1);
var inst_482903 = inst_482902;
var inst_482904 = null;
var inst_482905 = (0);
var inst_482906 = (0);
var state_482963__$1 = (function (){var statearr_483006 = state_482963;
(statearr_483006[(30)] = inst_482897);

(statearr_483006[(9)] = inst_482904);

(statearr_483006[(29)] = inst_482895__$1);

(statearr_483006[(20)] = inst_482905);

(statearr_483006[(21)] = inst_482903);

(statearr_483006[(11)] = inst_482906);

return statearr_483006;
})();
var statearr_483007_483076 = state_482963__$1;
(statearr_483007_483076[(2)] = null);

(statearr_483007_483076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (28))){
var inst_482903 = (state_482963[(21)]);
var inst_482922 = (state_482963[(25)]);
var inst_482922__$1 = cljs.core.seq.call(null,inst_482903);
var state_482963__$1 = (function (){var statearr_483008 = state_482963;
(statearr_483008[(25)] = inst_482922__$1);

return statearr_483008;
})();
if(inst_482922__$1){
var statearr_483009_483077 = state_482963__$1;
(statearr_483009_483077[(1)] = (33));

} else {
var statearr_483010_483078 = state_482963__$1;
(statearr_483010_483078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (25))){
var inst_482905 = (state_482963[(20)]);
var inst_482906 = (state_482963[(11)]);
var inst_482908 = (inst_482906 < inst_482905);
var inst_482909 = inst_482908;
var state_482963__$1 = state_482963;
if(cljs.core.truth_(inst_482909)){
var statearr_483011_483079 = state_482963__$1;
(statearr_483011_483079[(1)] = (27));

} else {
var statearr_483012_483080 = state_482963__$1;
(statearr_483012_483080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (34))){
var state_482963__$1 = state_482963;
var statearr_483013_483081 = state_482963__$1;
(statearr_483013_483081[(2)] = null);

(statearr_483013_483081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (17))){
var state_482963__$1 = state_482963;
var statearr_483014_483082 = state_482963__$1;
(statearr_483014_483082[(2)] = null);

(statearr_483014_483082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (3))){
var inst_482961 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_482963__$1,inst_482961);
} else {
if((state_val_482964 === (12))){
var inst_482890 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483015_483083 = state_482963__$1;
(statearr_483015_483083[(2)] = inst_482890);

(statearr_483015_483083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (2))){
var state_482963__$1 = state_482963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482963__$1,(4),ch);
} else {
if((state_val_482964 === (23))){
var state_482963__$1 = state_482963;
var statearr_483016_483084 = state_482963__$1;
(statearr_483016_483084[(2)] = null);

(statearr_483016_483084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (35))){
var inst_482945 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483017_483085 = state_482963__$1;
(statearr_483017_483085[(2)] = inst_482945);

(statearr_483017_483085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (19))){
var inst_482862 = (state_482963[(7)]);
var inst_482866 = cljs.core.chunk_first.call(null,inst_482862);
var inst_482867 = cljs.core.chunk_rest.call(null,inst_482862);
var inst_482868 = cljs.core.count.call(null,inst_482866);
var inst_482840 = inst_482867;
var inst_482841 = inst_482866;
var inst_482842 = inst_482868;
var inst_482843 = (0);
var state_482963__$1 = (function (){var statearr_483018 = state_482963;
(statearr_483018[(13)] = inst_482841);

(statearr_483018[(14)] = inst_482843);

(statearr_483018[(15)] = inst_482840);

(statearr_483018[(16)] = inst_482842);

return statearr_483018;
})();
var statearr_483019_483086 = state_482963__$1;
(statearr_483019_483086[(2)] = null);

(statearr_483019_483086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (11))){
var inst_482862 = (state_482963[(7)]);
var inst_482840 = (state_482963[(15)]);
var inst_482862__$1 = cljs.core.seq.call(null,inst_482840);
var state_482963__$1 = (function (){var statearr_483020 = state_482963;
(statearr_483020[(7)] = inst_482862__$1);

return statearr_483020;
})();
if(inst_482862__$1){
var statearr_483021_483087 = state_482963__$1;
(statearr_483021_483087[(1)] = (16));

} else {
var statearr_483022_483088 = state_482963__$1;
(statearr_483022_483088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (9))){
var inst_482892 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483023_483089 = state_482963__$1;
(statearr_483023_483089[(2)] = inst_482892);

(statearr_483023_483089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (5))){
var inst_482838 = cljs.core.deref.call(null,cs);
var inst_482839 = cljs.core.seq.call(null,inst_482838);
var inst_482840 = inst_482839;
var inst_482841 = null;
var inst_482842 = (0);
var inst_482843 = (0);
var state_482963__$1 = (function (){var statearr_483024 = state_482963;
(statearr_483024[(13)] = inst_482841);

(statearr_483024[(14)] = inst_482843);

(statearr_483024[(15)] = inst_482840);

(statearr_483024[(16)] = inst_482842);

return statearr_483024;
})();
var statearr_483025_483090 = state_482963__$1;
(statearr_483025_483090[(2)] = null);

(statearr_483025_483090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (14))){
var state_482963__$1 = state_482963;
var statearr_483026_483091 = state_482963__$1;
(statearr_483026_483091[(2)] = null);

(statearr_483026_483091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (45))){
var inst_482953 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483027_483092 = state_482963__$1;
(statearr_483027_483092[(2)] = inst_482953);

(statearr_483027_483092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (26))){
var inst_482895 = (state_482963[(29)]);
var inst_482949 = (state_482963[(2)]);
var inst_482950 = cljs.core.seq.call(null,inst_482895);
var state_482963__$1 = (function (){var statearr_483028 = state_482963;
(statearr_483028[(31)] = inst_482949);

return statearr_483028;
})();
if(inst_482950){
var statearr_483029_483093 = state_482963__$1;
(statearr_483029_483093[(1)] = (42));

} else {
var statearr_483030_483094 = state_482963__$1;
(statearr_483030_483094[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (16))){
var inst_482862 = (state_482963[(7)]);
var inst_482864 = cljs.core.chunked_seq_QMARK_.call(null,inst_482862);
var state_482963__$1 = state_482963;
if(inst_482864){
var statearr_483031_483095 = state_482963__$1;
(statearr_483031_483095[(1)] = (19));

} else {
var statearr_483032_483096 = state_482963__$1;
(statearr_483032_483096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (38))){
var inst_482942 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483033_483097 = state_482963__$1;
(statearr_483033_483097[(2)] = inst_482942);

(statearr_483033_483097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (30))){
var state_482963__$1 = state_482963;
var statearr_483034_483098 = state_482963__$1;
(statearr_483034_483098[(2)] = null);

(statearr_483034_483098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (10))){
var inst_482841 = (state_482963[(13)]);
var inst_482843 = (state_482963[(14)]);
var inst_482851 = cljs.core._nth.call(null,inst_482841,inst_482843);
var inst_482852 = cljs.core.nth.call(null,inst_482851,(0),null);
var inst_482853 = cljs.core.nth.call(null,inst_482851,(1),null);
var state_482963__$1 = (function (){var statearr_483035 = state_482963;
(statearr_483035[(26)] = inst_482852);

return statearr_483035;
})();
if(cljs.core.truth_(inst_482853)){
var statearr_483036_483099 = state_482963__$1;
(statearr_483036_483099[(1)] = (13));

} else {
var statearr_483037_483100 = state_482963__$1;
(statearr_483037_483100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (18))){
var inst_482888 = (state_482963[(2)]);
var state_482963__$1 = state_482963;
var statearr_483038_483101 = state_482963__$1;
(statearr_483038_483101[(2)] = inst_482888);

(statearr_483038_483101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (42))){
var state_482963__$1 = state_482963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_482963__$1,(45),dchan);
} else {
if((state_val_482964 === (37))){
var inst_482931 = (state_482963[(23)]);
var inst_482922 = (state_482963[(25)]);
var inst_482831 = (state_482963[(12)]);
var inst_482931__$1 = cljs.core.first.call(null,inst_482922);
var inst_482932 = cljs.core.async.put_BANG_.call(null,inst_482931__$1,inst_482831,done);
var state_482963__$1 = (function (){var statearr_483039 = state_482963;
(statearr_483039[(23)] = inst_482931__$1);

return statearr_483039;
})();
if(cljs.core.truth_(inst_482932)){
var statearr_483040_483102 = state_482963__$1;
(statearr_483040_483102[(1)] = (39));

} else {
var statearr_483041_483103 = state_482963__$1;
(statearr_483041_483103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_482964 === (8))){
var inst_482843 = (state_482963[(14)]);
var inst_482842 = (state_482963[(16)]);
var inst_482845 = (inst_482843 < inst_482842);
var inst_482846 = inst_482845;
var state_482963__$1 = state_482963;
if(cljs.core.truth_(inst_482846)){
var statearr_483042_483104 = state_482963__$1;
(statearr_483042_483104[(1)] = (10));

} else {
var statearr_483043_483105 = state_482963__$1;
(statearr_483043_483105[(1)] = (11));

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
});})(c__38812__auto___483051,cs,m,dchan,dctr,done))
;
return ((function (switch__38700__auto__,c__38812__auto___483051,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38701__auto__ = null;
var cljs$core$async$mult_$_state_machine__38701__auto____0 = (function (){
var statearr_483047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_483047[(0)] = cljs$core$async$mult_$_state_machine__38701__auto__);

(statearr_483047[(1)] = (1));

return statearr_483047;
});
var cljs$core$async$mult_$_state_machine__38701__auto____1 = (function (state_482963){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_482963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483048){if((e483048 instanceof Object)){
var ex__38704__auto__ = e483048;
var statearr_483049_483106 = state_482963;
(statearr_483049_483106[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_482963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__483107 = state_482963;
state_482963 = G__483107;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38701__auto__ = function(state_482963){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38701__auto____1.call(this,state_482963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38701__auto____0;
cljs$core$async$mult_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38701__auto____1;
return cljs$core$async$mult_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___483051,cs,m,dchan,dctr,done))
})();
var state__38814__auto__ = (function (){var statearr_483050 = f__38813__auto__.call(null);
(statearr_483050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___483051);

return statearr_483050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___483051,cs,m,dchan,dctr,done))
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
var args483108 = [];
var len__32954__auto___483111 = arguments.length;
var i__32955__auto___483112 = (0);
while(true){
if((i__32955__auto___483112 < len__32954__auto___483111)){
args483108.push((arguments[i__32955__auto___483112]));

var G__483113 = (i__32955__auto___483112 + (1));
i__32955__auto___483112 = G__483113;
continue;
} else {
}
break;
}

var G__483110 = args483108.length;
switch (G__483110) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483108.length)].join('')));

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
var len__32954__auto___483125 = arguments.length;
var i__32955__auto___483126 = (0);
while(true){
if((i__32955__auto___483126 < len__32954__auto___483125)){
args__32961__auto__.push((arguments[i__32955__auto___483126]));

var G__483127 = (i__32955__auto___483126 + (1));
i__32955__auto___483126 = G__483127;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((3) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32962__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__483119){
var map__483120 = p__483119;
var map__483120__$1 = ((((!((map__483120 == null)))?((((map__483120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__483120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__483120):map__483120);
var opts = map__483120__$1;
var statearr_483122_483128 = state;
(statearr_483122_483128[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__483120,map__483120__$1,opts){
return (function (val){
var statearr_483123_483129 = state;
(statearr_483123_483129[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__483120,map__483120__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_483124_483130 = state;
(statearr_483124_483130[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq483115){
var G__483116 = cljs.core.first.call(null,seq483115);
var seq483115__$1 = cljs.core.next.call(null,seq483115);
var G__483117 = cljs.core.first.call(null,seq483115__$1);
var seq483115__$2 = cljs.core.next.call(null,seq483115__$1);
var G__483118 = cljs.core.first.call(null,seq483115__$2);
var seq483115__$3 = cljs.core.next.call(null,seq483115__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__483116,G__483117,G__483118,seq483115__$3);
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
if(typeof cljs.core.async.t_cljs$core$async483296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async483296 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta483297){
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
this.meta483297 = meta483297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_483298,meta483297__$1){
var self__ = this;
var _483298__$1 = this;
return (new cljs.core.async.t_cljs$core$async483296(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta483297__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_483298){
var self__ = this;
var _483298__$1 = this;
return self__.meta483297;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async483296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async483296.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta483297","meta483297",-1655866840,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async483296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async483296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async483296";

cljs.core.async.t_cljs$core$async483296.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async483296");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async483296 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async483296(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta483297){
return (new cljs.core.async.t_cljs$core$async483296(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta483297));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async483296(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38812__auto___483461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___483461,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___483461,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_483398){
var state_val_483399 = (state_483398[(1)]);
if((state_val_483399 === (7))){
var inst_483314 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
var statearr_483400_483462 = state_483398__$1;
(statearr_483400_483462[(2)] = inst_483314);

(statearr_483400_483462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (20))){
var inst_483326 = (state_483398[(7)]);
var state_483398__$1 = state_483398;
var statearr_483401_483463 = state_483398__$1;
(statearr_483401_483463[(2)] = inst_483326);

(statearr_483401_483463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (27))){
var state_483398__$1 = state_483398;
var statearr_483402_483464 = state_483398__$1;
(statearr_483402_483464[(2)] = null);

(statearr_483402_483464[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (1))){
var inst_483302 = (state_483398[(8)]);
var inst_483302__$1 = calc_state.call(null);
var inst_483304 = (inst_483302__$1 == null);
var inst_483305 = cljs.core.not.call(null,inst_483304);
var state_483398__$1 = (function (){var statearr_483403 = state_483398;
(statearr_483403[(8)] = inst_483302__$1);

return statearr_483403;
})();
if(inst_483305){
var statearr_483404_483465 = state_483398__$1;
(statearr_483404_483465[(1)] = (2));

} else {
var statearr_483405_483466 = state_483398__$1;
(statearr_483405_483466[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (24))){
var inst_483372 = (state_483398[(9)]);
var inst_483349 = (state_483398[(10)]);
var inst_483358 = (state_483398[(11)]);
var inst_483372__$1 = inst_483349.call(null,inst_483358);
var state_483398__$1 = (function (){var statearr_483406 = state_483398;
(statearr_483406[(9)] = inst_483372__$1);

return statearr_483406;
})();
if(cljs.core.truth_(inst_483372__$1)){
var statearr_483407_483467 = state_483398__$1;
(statearr_483407_483467[(1)] = (29));

} else {
var statearr_483408_483468 = state_483398__$1;
(statearr_483408_483468[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (4))){
var inst_483317 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483317)){
var statearr_483409_483469 = state_483398__$1;
(statearr_483409_483469[(1)] = (8));

} else {
var statearr_483410_483470 = state_483398__$1;
(statearr_483410_483470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (15))){
var inst_483343 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483343)){
var statearr_483411_483471 = state_483398__$1;
(statearr_483411_483471[(1)] = (19));

} else {
var statearr_483412_483472 = state_483398__$1;
(statearr_483412_483472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (21))){
var inst_483348 = (state_483398[(12)]);
var inst_483348__$1 = (state_483398[(2)]);
var inst_483349 = cljs.core.get.call(null,inst_483348__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_483350 = cljs.core.get.call(null,inst_483348__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_483351 = cljs.core.get.call(null,inst_483348__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_483398__$1 = (function (){var statearr_483413 = state_483398;
(statearr_483413[(13)] = inst_483350);

(statearr_483413[(10)] = inst_483349);

(statearr_483413[(12)] = inst_483348__$1);

return statearr_483413;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_483398__$1,(22),inst_483351);
} else {
if((state_val_483399 === (31))){
var inst_483380 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483380)){
var statearr_483414_483473 = state_483398__$1;
(statearr_483414_483473[(1)] = (32));

} else {
var statearr_483415_483474 = state_483398__$1;
(statearr_483415_483474[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (32))){
var inst_483357 = (state_483398[(14)]);
var state_483398__$1 = state_483398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_483398__$1,(35),out,inst_483357);
} else {
if((state_val_483399 === (33))){
var inst_483348 = (state_483398[(12)]);
var inst_483326 = inst_483348;
var state_483398__$1 = (function (){var statearr_483416 = state_483398;
(statearr_483416[(7)] = inst_483326);

return statearr_483416;
})();
var statearr_483417_483475 = state_483398__$1;
(statearr_483417_483475[(2)] = null);

(statearr_483417_483475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (13))){
var inst_483326 = (state_483398[(7)]);
var inst_483333 = inst_483326.cljs$lang$protocol_mask$partition0$;
var inst_483334 = (inst_483333 & (64));
var inst_483335 = inst_483326.cljs$core$ISeq$;
var inst_483336 = (inst_483334) || (inst_483335);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483336)){
var statearr_483418_483476 = state_483398__$1;
(statearr_483418_483476[(1)] = (16));

} else {
var statearr_483419_483477 = state_483398__$1;
(statearr_483419_483477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (22))){
var inst_483357 = (state_483398[(14)]);
var inst_483358 = (state_483398[(11)]);
var inst_483356 = (state_483398[(2)]);
var inst_483357__$1 = cljs.core.nth.call(null,inst_483356,(0),null);
var inst_483358__$1 = cljs.core.nth.call(null,inst_483356,(1),null);
var inst_483359 = (inst_483357__$1 == null);
var inst_483360 = cljs.core._EQ_.call(null,inst_483358__$1,change);
var inst_483361 = (inst_483359) || (inst_483360);
var state_483398__$1 = (function (){var statearr_483420 = state_483398;
(statearr_483420[(14)] = inst_483357__$1);

(statearr_483420[(11)] = inst_483358__$1);

return statearr_483420;
})();
if(cljs.core.truth_(inst_483361)){
var statearr_483421_483478 = state_483398__$1;
(statearr_483421_483478[(1)] = (23));

} else {
var statearr_483422_483479 = state_483398__$1;
(statearr_483422_483479[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (36))){
var inst_483348 = (state_483398[(12)]);
var inst_483326 = inst_483348;
var state_483398__$1 = (function (){var statearr_483423 = state_483398;
(statearr_483423[(7)] = inst_483326);

return statearr_483423;
})();
var statearr_483424_483480 = state_483398__$1;
(statearr_483424_483480[(2)] = null);

(statearr_483424_483480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (29))){
var inst_483372 = (state_483398[(9)]);
var state_483398__$1 = state_483398;
var statearr_483425_483481 = state_483398__$1;
(statearr_483425_483481[(2)] = inst_483372);

(statearr_483425_483481[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (6))){
var state_483398__$1 = state_483398;
var statearr_483426_483482 = state_483398__$1;
(statearr_483426_483482[(2)] = false);

(statearr_483426_483482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (28))){
var inst_483368 = (state_483398[(2)]);
var inst_483369 = calc_state.call(null);
var inst_483326 = inst_483369;
var state_483398__$1 = (function (){var statearr_483427 = state_483398;
(statearr_483427[(15)] = inst_483368);

(statearr_483427[(7)] = inst_483326);

return statearr_483427;
})();
var statearr_483428_483483 = state_483398__$1;
(statearr_483428_483483[(2)] = null);

(statearr_483428_483483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (25))){
var inst_483394 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
var statearr_483429_483484 = state_483398__$1;
(statearr_483429_483484[(2)] = inst_483394);

(statearr_483429_483484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (34))){
var inst_483392 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
var statearr_483430_483485 = state_483398__$1;
(statearr_483430_483485[(2)] = inst_483392);

(statearr_483430_483485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (17))){
var state_483398__$1 = state_483398;
var statearr_483431_483486 = state_483398__$1;
(statearr_483431_483486[(2)] = false);

(statearr_483431_483486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (3))){
var state_483398__$1 = state_483398;
var statearr_483432_483487 = state_483398__$1;
(statearr_483432_483487[(2)] = false);

(statearr_483432_483487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (12))){
var inst_483396 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_483398__$1,inst_483396);
} else {
if((state_val_483399 === (2))){
var inst_483302 = (state_483398[(8)]);
var inst_483307 = inst_483302.cljs$lang$protocol_mask$partition0$;
var inst_483308 = (inst_483307 & (64));
var inst_483309 = inst_483302.cljs$core$ISeq$;
var inst_483310 = (inst_483308) || (inst_483309);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483310)){
var statearr_483433_483488 = state_483398__$1;
(statearr_483433_483488[(1)] = (5));

} else {
var statearr_483434_483489 = state_483398__$1;
(statearr_483434_483489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (23))){
var inst_483357 = (state_483398[(14)]);
var inst_483363 = (inst_483357 == null);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483363)){
var statearr_483435_483490 = state_483398__$1;
(statearr_483435_483490[(1)] = (26));

} else {
var statearr_483436_483491 = state_483398__$1;
(statearr_483436_483491[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (35))){
var inst_483383 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
if(cljs.core.truth_(inst_483383)){
var statearr_483437_483492 = state_483398__$1;
(statearr_483437_483492[(1)] = (36));

} else {
var statearr_483438_483493 = state_483398__$1;
(statearr_483438_483493[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (19))){
var inst_483326 = (state_483398[(7)]);
var inst_483345 = cljs.core.apply.call(null,cljs.core.hash_map,inst_483326);
var state_483398__$1 = state_483398;
var statearr_483439_483494 = state_483398__$1;
(statearr_483439_483494[(2)] = inst_483345);

(statearr_483439_483494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (11))){
var inst_483326 = (state_483398[(7)]);
var inst_483330 = (inst_483326 == null);
var inst_483331 = cljs.core.not.call(null,inst_483330);
var state_483398__$1 = state_483398;
if(inst_483331){
var statearr_483440_483495 = state_483398__$1;
(statearr_483440_483495[(1)] = (13));

} else {
var statearr_483441_483496 = state_483398__$1;
(statearr_483441_483496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (9))){
var inst_483302 = (state_483398[(8)]);
var state_483398__$1 = state_483398;
var statearr_483442_483497 = state_483398__$1;
(statearr_483442_483497[(2)] = inst_483302);

(statearr_483442_483497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (5))){
var state_483398__$1 = state_483398;
var statearr_483443_483498 = state_483398__$1;
(statearr_483443_483498[(2)] = true);

(statearr_483443_483498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (14))){
var state_483398__$1 = state_483398;
var statearr_483444_483499 = state_483398__$1;
(statearr_483444_483499[(2)] = false);

(statearr_483444_483499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (26))){
var inst_483358 = (state_483398[(11)]);
var inst_483365 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_483358);
var state_483398__$1 = state_483398;
var statearr_483445_483500 = state_483398__$1;
(statearr_483445_483500[(2)] = inst_483365);

(statearr_483445_483500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (16))){
var state_483398__$1 = state_483398;
var statearr_483446_483501 = state_483398__$1;
(statearr_483446_483501[(2)] = true);

(statearr_483446_483501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (38))){
var inst_483388 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
var statearr_483447_483502 = state_483398__$1;
(statearr_483447_483502[(2)] = inst_483388);

(statearr_483447_483502[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (30))){
var inst_483350 = (state_483398[(13)]);
var inst_483349 = (state_483398[(10)]);
var inst_483358 = (state_483398[(11)]);
var inst_483375 = cljs.core.empty_QMARK_.call(null,inst_483349);
var inst_483376 = inst_483350.call(null,inst_483358);
var inst_483377 = cljs.core.not.call(null,inst_483376);
var inst_483378 = (inst_483375) && (inst_483377);
var state_483398__$1 = state_483398;
var statearr_483448_483503 = state_483398__$1;
(statearr_483448_483503[(2)] = inst_483378);

(statearr_483448_483503[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (10))){
var inst_483302 = (state_483398[(8)]);
var inst_483322 = (state_483398[(2)]);
var inst_483323 = cljs.core.get.call(null,inst_483322,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_483324 = cljs.core.get.call(null,inst_483322,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_483325 = cljs.core.get.call(null,inst_483322,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_483326 = inst_483302;
var state_483398__$1 = (function (){var statearr_483449 = state_483398;
(statearr_483449[(16)] = inst_483323);

(statearr_483449[(7)] = inst_483326);

(statearr_483449[(17)] = inst_483324);

(statearr_483449[(18)] = inst_483325);

return statearr_483449;
})();
var statearr_483450_483504 = state_483398__$1;
(statearr_483450_483504[(2)] = null);

(statearr_483450_483504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (18))){
var inst_483340 = (state_483398[(2)]);
var state_483398__$1 = state_483398;
var statearr_483451_483505 = state_483398__$1;
(statearr_483451_483505[(2)] = inst_483340);

(statearr_483451_483505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (37))){
var state_483398__$1 = state_483398;
var statearr_483452_483506 = state_483398__$1;
(statearr_483452_483506[(2)] = null);

(statearr_483452_483506[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483399 === (8))){
var inst_483302 = (state_483398[(8)]);
var inst_483319 = cljs.core.apply.call(null,cljs.core.hash_map,inst_483302);
var state_483398__$1 = state_483398;
var statearr_483453_483507 = state_483398__$1;
(statearr_483453_483507[(2)] = inst_483319);

(statearr_483453_483507[(1)] = (10));


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
});})(c__38812__auto___483461,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38700__auto__,c__38812__auto___483461,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38701__auto__ = null;
var cljs$core$async$mix_$_state_machine__38701__auto____0 = (function (){
var statearr_483457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_483457[(0)] = cljs$core$async$mix_$_state_machine__38701__auto__);

(statearr_483457[(1)] = (1));

return statearr_483457;
});
var cljs$core$async$mix_$_state_machine__38701__auto____1 = (function (state_483398){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_483398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483458){if((e483458 instanceof Object)){
var ex__38704__auto__ = e483458;
var statearr_483459_483508 = state_483398;
(statearr_483459_483508[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__483509 = state_483398;
state_483398 = G__483509;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38701__auto__ = function(state_483398){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38701__auto____1.call(this,state_483398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38701__auto____0;
cljs$core$async$mix_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38701__auto____1;
return cljs$core$async$mix_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___483461,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38814__auto__ = (function (){var statearr_483460 = f__38813__auto__.call(null);
(statearr_483460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___483461);

return statearr_483460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___483461,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args483510 = [];
var len__32954__auto___483513 = arguments.length;
var i__32955__auto___483514 = (0);
while(true){
if((i__32955__auto___483514 < len__32954__auto___483513)){
args483510.push((arguments[i__32955__auto___483514]));

var G__483515 = (i__32955__auto___483514 + (1));
i__32955__auto___483514 = G__483515;
continue;
} else {
}
break;
}

var G__483512 = args483510.length;
switch (G__483512) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483510.length)].join('')));

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
var args483518 = [];
var len__32954__auto___483643 = arguments.length;
var i__32955__auto___483644 = (0);
while(true){
if((i__32955__auto___483644 < len__32954__auto___483643)){
args483518.push((arguments[i__32955__auto___483644]));

var G__483645 = (i__32955__auto___483644 + (1));
i__32955__auto___483644 = G__483645;
continue;
} else {
}
break;
}

var G__483520 = args483518.length;
switch (G__483520) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483518.length)].join('')));

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
return (function (p1__483517_SHARP_){
if(cljs.core.truth_(p1__483517_SHARP_.call(null,topic))){
return p1__483517_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__483517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31879__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async483521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async483521 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta483522){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta483522 = meta483522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_483523,meta483522__$1){
var self__ = this;
var _483523__$1 = this;
return (new cljs.core.async.t_cljs$core$async483521(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta483522__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_483523){
var self__ = this;
var _483523__$1 = this;
return self__.meta483522;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async483521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async483521.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta483522","meta483522",1057778280,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async483521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async483521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async483521";

cljs.core.async.t_cljs$core$async483521.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async483521");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async483521 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async483521(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta483522){
return (new cljs.core.async.t_cljs$core$async483521(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta483522));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async483521(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38812__auto___483647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___483647,mults,ensure_mult,p){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___483647,mults,ensure_mult,p){
return (function (state_483595){
var state_val_483596 = (state_483595[(1)]);
if((state_val_483596 === (7))){
var inst_483591 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
var statearr_483597_483648 = state_483595__$1;
(statearr_483597_483648[(2)] = inst_483591);

(statearr_483597_483648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (20))){
var state_483595__$1 = state_483595;
var statearr_483598_483649 = state_483595__$1;
(statearr_483598_483649[(2)] = null);

(statearr_483598_483649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (1))){
var state_483595__$1 = state_483595;
var statearr_483599_483650 = state_483595__$1;
(statearr_483599_483650[(2)] = null);

(statearr_483599_483650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (24))){
var inst_483574 = (state_483595[(7)]);
var inst_483583 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_483574);
var state_483595__$1 = state_483595;
var statearr_483600_483651 = state_483595__$1;
(statearr_483600_483651[(2)] = inst_483583);

(statearr_483600_483651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (4))){
var inst_483526 = (state_483595[(8)]);
var inst_483526__$1 = (state_483595[(2)]);
var inst_483527 = (inst_483526__$1 == null);
var state_483595__$1 = (function (){var statearr_483601 = state_483595;
(statearr_483601[(8)] = inst_483526__$1);

return statearr_483601;
})();
if(cljs.core.truth_(inst_483527)){
var statearr_483602_483652 = state_483595__$1;
(statearr_483602_483652[(1)] = (5));

} else {
var statearr_483603_483653 = state_483595__$1;
(statearr_483603_483653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (15))){
var inst_483568 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
var statearr_483604_483654 = state_483595__$1;
(statearr_483604_483654[(2)] = inst_483568);

(statearr_483604_483654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (21))){
var inst_483588 = (state_483595[(2)]);
var state_483595__$1 = (function (){var statearr_483605 = state_483595;
(statearr_483605[(9)] = inst_483588);

return statearr_483605;
})();
var statearr_483606_483655 = state_483595__$1;
(statearr_483606_483655[(2)] = null);

(statearr_483606_483655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (13))){
var inst_483550 = (state_483595[(10)]);
var inst_483552 = cljs.core.chunked_seq_QMARK_.call(null,inst_483550);
var state_483595__$1 = state_483595;
if(inst_483552){
var statearr_483607_483656 = state_483595__$1;
(statearr_483607_483656[(1)] = (16));

} else {
var statearr_483608_483657 = state_483595__$1;
(statearr_483608_483657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (22))){
var inst_483580 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
if(cljs.core.truth_(inst_483580)){
var statearr_483609_483658 = state_483595__$1;
(statearr_483609_483658[(1)] = (23));

} else {
var statearr_483610_483659 = state_483595__$1;
(statearr_483610_483659[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (6))){
var inst_483574 = (state_483595[(7)]);
var inst_483576 = (state_483595[(11)]);
var inst_483526 = (state_483595[(8)]);
var inst_483574__$1 = topic_fn.call(null,inst_483526);
var inst_483575 = cljs.core.deref.call(null,mults);
var inst_483576__$1 = cljs.core.get.call(null,inst_483575,inst_483574__$1);
var state_483595__$1 = (function (){var statearr_483611 = state_483595;
(statearr_483611[(7)] = inst_483574__$1);

(statearr_483611[(11)] = inst_483576__$1);

return statearr_483611;
})();
if(cljs.core.truth_(inst_483576__$1)){
var statearr_483612_483660 = state_483595__$1;
(statearr_483612_483660[(1)] = (19));

} else {
var statearr_483613_483661 = state_483595__$1;
(statearr_483613_483661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (25))){
var inst_483585 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
var statearr_483614_483662 = state_483595__$1;
(statearr_483614_483662[(2)] = inst_483585);

(statearr_483614_483662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (17))){
var inst_483550 = (state_483595[(10)]);
var inst_483559 = cljs.core.first.call(null,inst_483550);
var inst_483560 = cljs.core.async.muxch_STAR_.call(null,inst_483559);
var inst_483561 = cljs.core.async.close_BANG_.call(null,inst_483560);
var inst_483562 = cljs.core.next.call(null,inst_483550);
var inst_483536 = inst_483562;
var inst_483537 = null;
var inst_483538 = (0);
var inst_483539 = (0);
var state_483595__$1 = (function (){var statearr_483615 = state_483595;
(statearr_483615[(12)] = inst_483538);

(statearr_483615[(13)] = inst_483537);

(statearr_483615[(14)] = inst_483561);

(statearr_483615[(15)] = inst_483539);

(statearr_483615[(16)] = inst_483536);

return statearr_483615;
})();
var statearr_483616_483663 = state_483595__$1;
(statearr_483616_483663[(2)] = null);

(statearr_483616_483663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (3))){
var inst_483593 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_483595__$1,inst_483593);
} else {
if((state_val_483596 === (12))){
var inst_483570 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
var statearr_483617_483664 = state_483595__$1;
(statearr_483617_483664[(2)] = inst_483570);

(statearr_483617_483664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (2))){
var state_483595__$1 = state_483595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_483595__$1,(4),ch);
} else {
if((state_val_483596 === (23))){
var state_483595__$1 = state_483595;
var statearr_483618_483665 = state_483595__$1;
(statearr_483618_483665[(2)] = null);

(statearr_483618_483665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (19))){
var inst_483576 = (state_483595[(11)]);
var inst_483526 = (state_483595[(8)]);
var inst_483578 = cljs.core.async.muxch_STAR_.call(null,inst_483576);
var state_483595__$1 = state_483595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_483595__$1,(22),inst_483578,inst_483526);
} else {
if((state_val_483596 === (11))){
var inst_483550 = (state_483595[(10)]);
var inst_483536 = (state_483595[(16)]);
var inst_483550__$1 = cljs.core.seq.call(null,inst_483536);
var state_483595__$1 = (function (){var statearr_483619 = state_483595;
(statearr_483619[(10)] = inst_483550__$1);

return statearr_483619;
})();
if(inst_483550__$1){
var statearr_483620_483666 = state_483595__$1;
(statearr_483620_483666[(1)] = (13));

} else {
var statearr_483621_483667 = state_483595__$1;
(statearr_483621_483667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (9))){
var inst_483572 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
var statearr_483622_483668 = state_483595__$1;
(statearr_483622_483668[(2)] = inst_483572);

(statearr_483622_483668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (5))){
var inst_483533 = cljs.core.deref.call(null,mults);
var inst_483534 = cljs.core.vals.call(null,inst_483533);
var inst_483535 = cljs.core.seq.call(null,inst_483534);
var inst_483536 = inst_483535;
var inst_483537 = null;
var inst_483538 = (0);
var inst_483539 = (0);
var state_483595__$1 = (function (){var statearr_483623 = state_483595;
(statearr_483623[(12)] = inst_483538);

(statearr_483623[(13)] = inst_483537);

(statearr_483623[(15)] = inst_483539);

(statearr_483623[(16)] = inst_483536);

return statearr_483623;
})();
var statearr_483624_483669 = state_483595__$1;
(statearr_483624_483669[(2)] = null);

(statearr_483624_483669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (14))){
var state_483595__$1 = state_483595;
var statearr_483628_483670 = state_483595__$1;
(statearr_483628_483670[(2)] = null);

(statearr_483628_483670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (16))){
var inst_483550 = (state_483595[(10)]);
var inst_483554 = cljs.core.chunk_first.call(null,inst_483550);
var inst_483555 = cljs.core.chunk_rest.call(null,inst_483550);
var inst_483556 = cljs.core.count.call(null,inst_483554);
var inst_483536 = inst_483555;
var inst_483537 = inst_483554;
var inst_483538 = inst_483556;
var inst_483539 = (0);
var state_483595__$1 = (function (){var statearr_483629 = state_483595;
(statearr_483629[(12)] = inst_483538);

(statearr_483629[(13)] = inst_483537);

(statearr_483629[(15)] = inst_483539);

(statearr_483629[(16)] = inst_483536);

return statearr_483629;
})();
var statearr_483630_483671 = state_483595__$1;
(statearr_483630_483671[(2)] = null);

(statearr_483630_483671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (10))){
var inst_483538 = (state_483595[(12)]);
var inst_483537 = (state_483595[(13)]);
var inst_483539 = (state_483595[(15)]);
var inst_483536 = (state_483595[(16)]);
var inst_483544 = cljs.core._nth.call(null,inst_483537,inst_483539);
var inst_483545 = cljs.core.async.muxch_STAR_.call(null,inst_483544);
var inst_483546 = cljs.core.async.close_BANG_.call(null,inst_483545);
var inst_483547 = (inst_483539 + (1));
var tmp483625 = inst_483538;
var tmp483626 = inst_483537;
var tmp483627 = inst_483536;
var inst_483536__$1 = tmp483627;
var inst_483537__$1 = tmp483626;
var inst_483538__$1 = tmp483625;
var inst_483539__$1 = inst_483547;
var state_483595__$1 = (function (){var statearr_483631 = state_483595;
(statearr_483631[(17)] = inst_483546);

(statearr_483631[(12)] = inst_483538__$1);

(statearr_483631[(13)] = inst_483537__$1);

(statearr_483631[(15)] = inst_483539__$1);

(statearr_483631[(16)] = inst_483536__$1);

return statearr_483631;
})();
var statearr_483632_483672 = state_483595__$1;
(statearr_483632_483672[(2)] = null);

(statearr_483632_483672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (18))){
var inst_483565 = (state_483595[(2)]);
var state_483595__$1 = state_483595;
var statearr_483633_483673 = state_483595__$1;
(statearr_483633_483673[(2)] = inst_483565);

(statearr_483633_483673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483596 === (8))){
var inst_483538 = (state_483595[(12)]);
var inst_483539 = (state_483595[(15)]);
var inst_483541 = (inst_483539 < inst_483538);
var inst_483542 = inst_483541;
var state_483595__$1 = state_483595;
if(cljs.core.truth_(inst_483542)){
var statearr_483634_483674 = state_483595__$1;
(statearr_483634_483674[(1)] = (10));

} else {
var statearr_483635_483675 = state_483595__$1;
(statearr_483635_483675[(1)] = (11));

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
});})(c__38812__auto___483647,mults,ensure_mult,p))
;
return ((function (switch__38700__auto__,c__38812__auto___483647,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_483639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_483639[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_483639[(1)] = (1));

return statearr_483639;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_483595){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_483595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483640){if((e483640 instanceof Object)){
var ex__38704__auto__ = e483640;
var statearr_483641_483676 = state_483595;
(statearr_483641_483676[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__483677 = state_483595;
state_483595 = G__483677;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_483595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_483595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___483647,mults,ensure_mult,p))
})();
var state__38814__auto__ = (function (){var statearr_483642 = f__38813__auto__.call(null);
(statearr_483642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___483647);

return statearr_483642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___483647,mults,ensure_mult,p))
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
var args483678 = [];
var len__32954__auto___483681 = arguments.length;
var i__32955__auto___483682 = (0);
while(true){
if((i__32955__auto___483682 < len__32954__auto___483681)){
args483678.push((arguments[i__32955__auto___483682]));

var G__483683 = (i__32955__auto___483682 + (1));
i__32955__auto___483682 = G__483683;
continue;
} else {
}
break;
}

var G__483680 = args483678.length;
switch (G__483680) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483678.length)].join('')));

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
var args483685 = [];
var len__32954__auto___483688 = arguments.length;
var i__32955__auto___483689 = (0);
while(true){
if((i__32955__auto___483689 < len__32954__auto___483688)){
args483685.push((arguments[i__32955__auto___483689]));

var G__483690 = (i__32955__auto___483689 + (1));
i__32955__auto___483689 = G__483690;
continue;
} else {
}
break;
}

var G__483687 = args483685.length;
switch (G__483687) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483685.length)].join('')));

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
var args483692 = [];
var len__32954__auto___483763 = arguments.length;
var i__32955__auto___483764 = (0);
while(true){
if((i__32955__auto___483764 < len__32954__auto___483763)){
args483692.push((arguments[i__32955__auto___483764]));

var G__483765 = (i__32955__auto___483764 + (1));
i__32955__auto___483764 = G__483765;
continue;
} else {
}
break;
}

var G__483694 = args483692.length;
switch (G__483694) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483692.length)].join('')));

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
var c__38812__auto___483767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___483767,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___483767,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_483733){
var state_val_483734 = (state_483733[(1)]);
if((state_val_483734 === (7))){
var state_483733__$1 = state_483733;
var statearr_483735_483768 = state_483733__$1;
(statearr_483735_483768[(2)] = null);

(statearr_483735_483768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (1))){
var state_483733__$1 = state_483733;
var statearr_483736_483769 = state_483733__$1;
(statearr_483736_483769[(2)] = null);

(statearr_483736_483769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (4))){
var inst_483697 = (state_483733[(7)]);
var inst_483699 = (inst_483697 < cnt);
var state_483733__$1 = state_483733;
if(cljs.core.truth_(inst_483699)){
var statearr_483737_483770 = state_483733__$1;
(statearr_483737_483770[(1)] = (6));

} else {
var statearr_483738_483771 = state_483733__$1;
(statearr_483738_483771[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (15))){
var inst_483729 = (state_483733[(2)]);
var state_483733__$1 = state_483733;
var statearr_483739_483772 = state_483733__$1;
(statearr_483739_483772[(2)] = inst_483729);

(statearr_483739_483772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (13))){
var inst_483722 = cljs.core.async.close_BANG_.call(null,out);
var state_483733__$1 = state_483733;
var statearr_483740_483773 = state_483733__$1;
(statearr_483740_483773[(2)] = inst_483722);

(statearr_483740_483773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (6))){
var state_483733__$1 = state_483733;
var statearr_483741_483774 = state_483733__$1;
(statearr_483741_483774[(2)] = null);

(statearr_483741_483774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (3))){
var inst_483731 = (state_483733[(2)]);
var state_483733__$1 = state_483733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_483733__$1,inst_483731);
} else {
if((state_val_483734 === (12))){
var inst_483719 = (state_483733[(8)]);
var inst_483719__$1 = (state_483733[(2)]);
var inst_483720 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_483719__$1);
var state_483733__$1 = (function (){var statearr_483742 = state_483733;
(statearr_483742[(8)] = inst_483719__$1);

return statearr_483742;
})();
if(cljs.core.truth_(inst_483720)){
var statearr_483743_483775 = state_483733__$1;
(statearr_483743_483775[(1)] = (13));

} else {
var statearr_483744_483776 = state_483733__$1;
(statearr_483744_483776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (2))){
var inst_483696 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_483697 = (0);
var state_483733__$1 = (function (){var statearr_483745 = state_483733;
(statearr_483745[(7)] = inst_483697);

(statearr_483745[(9)] = inst_483696);

return statearr_483745;
})();
var statearr_483746_483777 = state_483733__$1;
(statearr_483746_483777[(2)] = null);

(statearr_483746_483777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (11))){
var inst_483697 = (state_483733[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_483733,(10),Object,null,(9));
var inst_483706 = chs__$1.call(null,inst_483697);
var inst_483707 = done.call(null,inst_483697);
var inst_483708 = cljs.core.async.take_BANG_.call(null,inst_483706,inst_483707);
var state_483733__$1 = state_483733;
var statearr_483747_483778 = state_483733__$1;
(statearr_483747_483778[(2)] = inst_483708);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (9))){
var inst_483697 = (state_483733[(7)]);
var inst_483710 = (state_483733[(2)]);
var inst_483711 = (inst_483697 + (1));
var inst_483697__$1 = inst_483711;
var state_483733__$1 = (function (){var statearr_483748 = state_483733;
(statearr_483748[(7)] = inst_483697__$1);

(statearr_483748[(10)] = inst_483710);

return statearr_483748;
})();
var statearr_483749_483779 = state_483733__$1;
(statearr_483749_483779[(2)] = null);

(statearr_483749_483779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (5))){
var inst_483717 = (state_483733[(2)]);
var state_483733__$1 = (function (){var statearr_483750 = state_483733;
(statearr_483750[(11)] = inst_483717);

return statearr_483750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_483733__$1,(12),dchan);
} else {
if((state_val_483734 === (14))){
var inst_483719 = (state_483733[(8)]);
var inst_483724 = cljs.core.apply.call(null,f,inst_483719);
var state_483733__$1 = state_483733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_483733__$1,(16),out,inst_483724);
} else {
if((state_val_483734 === (16))){
var inst_483726 = (state_483733[(2)]);
var state_483733__$1 = (function (){var statearr_483751 = state_483733;
(statearr_483751[(12)] = inst_483726);

return statearr_483751;
})();
var statearr_483752_483780 = state_483733__$1;
(statearr_483752_483780[(2)] = null);

(statearr_483752_483780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (10))){
var inst_483701 = (state_483733[(2)]);
var inst_483702 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_483733__$1 = (function (){var statearr_483753 = state_483733;
(statearr_483753[(13)] = inst_483701);

return statearr_483753;
})();
var statearr_483754_483781 = state_483733__$1;
(statearr_483754_483781[(2)] = inst_483702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483734 === (8))){
var inst_483715 = (state_483733[(2)]);
var state_483733__$1 = state_483733;
var statearr_483755_483782 = state_483733__$1;
(statearr_483755_483782[(2)] = inst_483715);

(statearr_483755_483782[(1)] = (5));


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
});})(c__38812__auto___483767,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38700__auto__,c__38812__auto___483767,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_483759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_483759[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_483759[(1)] = (1));

return statearr_483759;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_483733){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_483733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483760){if((e483760 instanceof Object)){
var ex__38704__auto__ = e483760;
var statearr_483761_483783 = state_483733;
(statearr_483761_483783[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__483784 = state_483733;
state_483733 = G__483784;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_483733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_483733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___483767,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38814__auto__ = (function (){var statearr_483762 = f__38813__auto__.call(null);
(statearr_483762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___483767);

return statearr_483762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___483767,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args483786 = [];
var len__32954__auto___483844 = arguments.length;
var i__32955__auto___483845 = (0);
while(true){
if((i__32955__auto___483845 < len__32954__auto___483844)){
args483786.push((arguments[i__32955__auto___483845]));

var G__483846 = (i__32955__auto___483845 + (1));
i__32955__auto___483845 = G__483846;
continue;
} else {
}
break;
}

var G__483788 = args483786.length;
switch (G__483788) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483786.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___483848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___483848,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___483848,out){
return (function (state_483820){
var state_val_483821 = (state_483820[(1)]);
if((state_val_483821 === (7))){
var inst_483799 = (state_483820[(7)]);
var inst_483800 = (state_483820[(8)]);
var inst_483799__$1 = (state_483820[(2)]);
var inst_483800__$1 = cljs.core.nth.call(null,inst_483799__$1,(0),null);
var inst_483801 = cljs.core.nth.call(null,inst_483799__$1,(1),null);
var inst_483802 = (inst_483800__$1 == null);
var state_483820__$1 = (function (){var statearr_483822 = state_483820;
(statearr_483822[(7)] = inst_483799__$1);

(statearr_483822[(8)] = inst_483800__$1);

(statearr_483822[(9)] = inst_483801);

return statearr_483822;
})();
if(cljs.core.truth_(inst_483802)){
var statearr_483823_483849 = state_483820__$1;
(statearr_483823_483849[(1)] = (8));

} else {
var statearr_483824_483850 = state_483820__$1;
(statearr_483824_483850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (1))){
var inst_483789 = cljs.core.vec.call(null,chs);
var inst_483790 = inst_483789;
var state_483820__$1 = (function (){var statearr_483825 = state_483820;
(statearr_483825[(10)] = inst_483790);

return statearr_483825;
})();
var statearr_483826_483851 = state_483820__$1;
(statearr_483826_483851[(2)] = null);

(statearr_483826_483851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (4))){
var inst_483790 = (state_483820[(10)]);
var state_483820__$1 = state_483820;
return cljs.core.async.ioc_alts_BANG_.call(null,state_483820__$1,(7),inst_483790);
} else {
if((state_val_483821 === (6))){
var inst_483816 = (state_483820[(2)]);
var state_483820__$1 = state_483820;
var statearr_483827_483852 = state_483820__$1;
(statearr_483827_483852[(2)] = inst_483816);

(statearr_483827_483852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (3))){
var inst_483818 = (state_483820[(2)]);
var state_483820__$1 = state_483820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_483820__$1,inst_483818);
} else {
if((state_val_483821 === (2))){
var inst_483790 = (state_483820[(10)]);
var inst_483792 = cljs.core.count.call(null,inst_483790);
var inst_483793 = (inst_483792 > (0));
var state_483820__$1 = state_483820;
if(cljs.core.truth_(inst_483793)){
var statearr_483829_483853 = state_483820__$1;
(statearr_483829_483853[(1)] = (4));

} else {
var statearr_483830_483854 = state_483820__$1;
(statearr_483830_483854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (11))){
var inst_483790 = (state_483820[(10)]);
var inst_483809 = (state_483820[(2)]);
var tmp483828 = inst_483790;
var inst_483790__$1 = tmp483828;
var state_483820__$1 = (function (){var statearr_483831 = state_483820;
(statearr_483831[(11)] = inst_483809);

(statearr_483831[(10)] = inst_483790__$1);

return statearr_483831;
})();
var statearr_483832_483855 = state_483820__$1;
(statearr_483832_483855[(2)] = null);

(statearr_483832_483855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (9))){
var inst_483800 = (state_483820[(8)]);
var state_483820__$1 = state_483820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_483820__$1,(11),out,inst_483800);
} else {
if((state_val_483821 === (5))){
var inst_483814 = cljs.core.async.close_BANG_.call(null,out);
var state_483820__$1 = state_483820;
var statearr_483833_483856 = state_483820__$1;
(statearr_483833_483856[(2)] = inst_483814);

(statearr_483833_483856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (10))){
var inst_483812 = (state_483820[(2)]);
var state_483820__$1 = state_483820;
var statearr_483834_483857 = state_483820__$1;
(statearr_483834_483857[(2)] = inst_483812);

(statearr_483834_483857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483821 === (8))){
var inst_483799 = (state_483820[(7)]);
var inst_483790 = (state_483820[(10)]);
var inst_483800 = (state_483820[(8)]);
var inst_483801 = (state_483820[(9)]);
var inst_483804 = (function (){var cs = inst_483790;
var vec__483795 = inst_483799;
var v = inst_483800;
var c = inst_483801;
return ((function (cs,vec__483795,v,c,inst_483799,inst_483790,inst_483800,inst_483801,state_val_483821,c__38812__auto___483848,out){
return (function (p1__483785_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__483785_SHARP_);
});
;})(cs,vec__483795,v,c,inst_483799,inst_483790,inst_483800,inst_483801,state_val_483821,c__38812__auto___483848,out))
})();
var inst_483805 = cljs.core.filterv.call(null,inst_483804,inst_483790);
var inst_483790__$1 = inst_483805;
var state_483820__$1 = (function (){var statearr_483835 = state_483820;
(statearr_483835[(10)] = inst_483790__$1);

return statearr_483835;
})();
var statearr_483836_483858 = state_483820__$1;
(statearr_483836_483858[(2)] = null);

(statearr_483836_483858[(1)] = (2));


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
});})(c__38812__auto___483848,out))
;
return ((function (switch__38700__auto__,c__38812__auto___483848,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_483840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_483840[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_483840[(1)] = (1));

return statearr_483840;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_483820){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_483820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483841){if((e483841 instanceof Object)){
var ex__38704__auto__ = e483841;
var statearr_483842_483859 = state_483820;
(statearr_483842_483859[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__483860 = state_483820;
state_483820 = G__483860;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_483820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_483820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___483848,out))
})();
var state__38814__auto__ = (function (){var statearr_483843 = f__38813__auto__.call(null);
(statearr_483843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___483848);

return statearr_483843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___483848,out))
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
var args483861 = [];
var len__32954__auto___483910 = arguments.length;
var i__32955__auto___483911 = (0);
while(true){
if((i__32955__auto___483911 < len__32954__auto___483910)){
args483861.push((arguments[i__32955__auto___483911]));

var G__483912 = (i__32955__auto___483911 + (1));
i__32955__auto___483911 = G__483912;
continue;
} else {
}
break;
}

var G__483863 = args483861.length;
switch (G__483863) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483861.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___483914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___483914,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___483914,out){
return (function (state_483887){
var state_val_483888 = (state_483887[(1)]);
if((state_val_483888 === (7))){
var inst_483869 = (state_483887[(7)]);
var inst_483869__$1 = (state_483887[(2)]);
var inst_483870 = (inst_483869__$1 == null);
var inst_483871 = cljs.core.not.call(null,inst_483870);
var state_483887__$1 = (function (){var statearr_483889 = state_483887;
(statearr_483889[(7)] = inst_483869__$1);

return statearr_483889;
})();
if(inst_483871){
var statearr_483890_483915 = state_483887__$1;
(statearr_483890_483915[(1)] = (8));

} else {
var statearr_483891_483916 = state_483887__$1;
(statearr_483891_483916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (1))){
var inst_483864 = (0);
var state_483887__$1 = (function (){var statearr_483892 = state_483887;
(statearr_483892[(8)] = inst_483864);

return statearr_483892;
})();
var statearr_483893_483917 = state_483887__$1;
(statearr_483893_483917[(2)] = null);

(statearr_483893_483917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (4))){
var state_483887__$1 = state_483887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_483887__$1,(7),ch);
} else {
if((state_val_483888 === (6))){
var inst_483882 = (state_483887[(2)]);
var state_483887__$1 = state_483887;
var statearr_483894_483918 = state_483887__$1;
(statearr_483894_483918[(2)] = inst_483882);

(statearr_483894_483918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (3))){
var inst_483884 = (state_483887[(2)]);
var inst_483885 = cljs.core.async.close_BANG_.call(null,out);
var state_483887__$1 = (function (){var statearr_483895 = state_483887;
(statearr_483895[(9)] = inst_483884);

return statearr_483895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_483887__$1,inst_483885);
} else {
if((state_val_483888 === (2))){
var inst_483864 = (state_483887[(8)]);
var inst_483866 = (inst_483864 < n);
var state_483887__$1 = state_483887;
if(cljs.core.truth_(inst_483866)){
var statearr_483896_483919 = state_483887__$1;
(statearr_483896_483919[(1)] = (4));

} else {
var statearr_483897_483920 = state_483887__$1;
(statearr_483897_483920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (11))){
var inst_483864 = (state_483887[(8)]);
var inst_483874 = (state_483887[(2)]);
var inst_483875 = (inst_483864 + (1));
var inst_483864__$1 = inst_483875;
var state_483887__$1 = (function (){var statearr_483898 = state_483887;
(statearr_483898[(10)] = inst_483874);

(statearr_483898[(8)] = inst_483864__$1);

return statearr_483898;
})();
var statearr_483899_483921 = state_483887__$1;
(statearr_483899_483921[(2)] = null);

(statearr_483899_483921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (9))){
var state_483887__$1 = state_483887;
var statearr_483900_483922 = state_483887__$1;
(statearr_483900_483922[(2)] = null);

(statearr_483900_483922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (5))){
var state_483887__$1 = state_483887;
var statearr_483901_483923 = state_483887__$1;
(statearr_483901_483923[(2)] = null);

(statearr_483901_483923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (10))){
var inst_483879 = (state_483887[(2)]);
var state_483887__$1 = state_483887;
var statearr_483902_483924 = state_483887__$1;
(statearr_483902_483924[(2)] = inst_483879);

(statearr_483902_483924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483888 === (8))){
var inst_483869 = (state_483887[(7)]);
var state_483887__$1 = state_483887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_483887__$1,(11),out,inst_483869);
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
});})(c__38812__auto___483914,out))
;
return ((function (switch__38700__auto__,c__38812__auto___483914,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_483906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_483906[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_483906[(1)] = (1));

return statearr_483906;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_483887){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_483887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483907){if((e483907 instanceof Object)){
var ex__38704__auto__ = e483907;
var statearr_483908_483925 = state_483887;
(statearr_483908_483925[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__483926 = state_483887;
state_483887 = G__483926;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_483887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_483887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___483914,out))
})();
var state__38814__auto__ = (function (){var statearr_483909 = f__38813__auto__.call(null);
(statearr_483909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___483914);

return statearr_483909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___483914,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async483934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async483934 = (function (map_LT_,f,ch,meta483935){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta483935 = meta483935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_483936,meta483935__$1){
var self__ = this;
var _483936__$1 = this;
return (new cljs.core.async.t_cljs$core$async483934(self__.map_LT_,self__.f,self__.ch,meta483935__$1));
});


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_483936){
var self__ = this;
var _483936__$1 = this;
return self__.meta483935;
});


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async483937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async483937 = (function (map_LT_,f,ch,meta483935,_,fn1,meta483938){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta483935 = meta483935;
this._ = _;
this.fn1 = fn1;
this.meta483938 = meta483938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async483937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_483939,meta483938__$1){
var self__ = this;
var _483939__$1 = this;
return (new cljs.core.async.t_cljs$core$async483937(self__.map_LT_,self__.f,self__.ch,self__.meta483935,self__._,self__.fn1,meta483938__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async483937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_483939){
var self__ = this;
var _483939__$1 = this;
return self__.meta483938;
});})(___$1))
;


cljs.core.async.t_cljs$core$async483937.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async483937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async483937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async483937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__483927_SHARP_){
return f1.call(null,(((p1__483927_SHARP_ == null))?null:self__.f.call(null,p1__483927_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async483937.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta483935","meta483935",116779618,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async483934","cljs.core.async/t_cljs$core$async483934",257644487,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta483938","meta483938",-492277409,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async483937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async483937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async483937";

cljs.core.async.t_cljs$core$async483937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async483937");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async483937 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async483937(map_LT___$1,f__$1,ch__$1,meta483935__$1,___$2,fn1__$1,meta483938){
return (new cljs.core.async.t_cljs$core$async483937(map_LT___$1,f__$1,ch__$1,meta483935__$1,___$2,fn1__$1,meta483938));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async483937(self__.map_LT_,self__.f,self__.ch,self__.meta483935,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async483934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async483934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta483935","meta483935",116779618,null)], null);
});

cljs.core.async.t_cljs$core$async483934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async483934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async483934";

cljs.core.async.t_cljs$core$async483934.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async483934");
});

cljs.core.async.__GT_t_cljs$core$async483934 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async483934(map_LT___$1,f__$1,ch__$1,meta483935){
return (new cljs.core.async.t_cljs$core$async483934(map_LT___$1,f__$1,ch__$1,meta483935));
});

}

return (new cljs.core.async.t_cljs$core$async483934(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async483943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async483943 = (function (map_GT_,f,ch,meta483944){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta483944 = meta483944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_483945,meta483944__$1){
var self__ = this;
var _483945__$1 = this;
return (new cljs.core.async.t_cljs$core$async483943(self__.map_GT_,self__.f,self__.ch,meta483944__$1));
});


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_483945){
var self__ = this;
var _483945__$1 = this;
return self__.meta483944;
});


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async483943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async483943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta483944","meta483944",-1521288209,null)], null);
});

cljs.core.async.t_cljs$core$async483943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async483943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async483943";

cljs.core.async.t_cljs$core$async483943.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async483943");
});

cljs.core.async.__GT_t_cljs$core$async483943 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async483943(map_GT___$1,f__$1,ch__$1,meta483944){
return (new cljs.core.async.t_cljs$core$async483943(map_GT___$1,f__$1,ch__$1,meta483944));
});

}

return (new cljs.core.async.t_cljs$core$async483943(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async483949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async483949 = (function (filter_GT_,p,ch,meta483950){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta483950 = meta483950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_483951,meta483950__$1){
var self__ = this;
var _483951__$1 = this;
return (new cljs.core.async.t_cljs$core$async483949(self__.filter_GT_,self__.p,self__.ch,meta483950__$1));
});


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_483951){
var self__ = this;
var _483951__$1 = this;
return self__.meta483950;
});


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async483949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async483949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta483950","meta483950",1146043296,null)], null);
});

cljs.core.async.t_cljs$core$async483949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async483949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async483949";

cljs.core.async.t_cljs$core$async483949.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async483949");
});

cljs.core.async.__GT_t_cljs$core$async483949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async483949(filter_GT___$1,p__$1,ch__$1,meta483950){
return (new cljs.core.async.t_cljs$core$async483949(filter_GT___$1,p__$1,ch__$1,meta483950));
});

}

return (new cljs.core.async.t_cljs$core$async483949(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args483952 = [];
var len__32954__auto___483996 = arguments.length;
var i__32955__auto___483997 = (0);
while(true){
if((i__32955__auto___483997 < len__32954__auto___483996)){
args483952.push((arguments[i__32955__auto___483997]));

var G__483998 = (i__32955__auto___483997 + (1));
i__32955__auto___483997 = G__483998;
continue;
} else {
}
break;
}

var G__483954 = args483952.length;
switch (G__483954) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args483952.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___484000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___484000,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___484000,out){
return (function (state_483975){
var state_val_483976 = (state_483975[(1)]);
if((state_val_483976 === (7))){
var inst_483971 = (state_483975[(2)]);
var state_483975__$1 = state_483975;
var statearr_483977_484001 = state_483975__$1;
(statearr_483977_484001[(2)] = inst_483971);

(statearr_483977_484001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (1))){
var state_483975__$1 = state_483975;
var statearr_483978_484002 = state_483975__$1;
(statearr_483978_484002[(2)] = null);

(statearr_483978_484002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (4))){
var inst_483957 = (state_483975[(7)]);
var inst_483957__$1 = (state_483975[(2)]);
var inst_483958 = (inst_483957__$1 == null);
var state_483975__$1 = (function (){var statearr_483979 = state_483975;
(statearr_483979[(7)] = inst_483957__$1);

return statearr_483979;
})();
if(cljs.core.truth_(inst_483958)){
var statearr_483980_484003 = state_483975__$1;
(statearr_483980_484003[(1)] = (5));

} else {
var statearr_483981_484004 = state_483975__$1;
(statearr_483981_484004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (6))){
var inst_483957 = (state_483975[(7)]);
var inst_483962 = p.call(null,inst_483957);
var state_483975__$1 = state_483975;
if(cljs.core.truth_(inst_483962)){
var statearr_483982_484005 = state_483975__$1;
(statearr_483982_484005[(1)] = (8));

} else {
var statearr_483983_484006 = state_483975__$1;
(statearr_483983_484006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (3))){
var inst_483973 = (state_483975[(2)]);
var state_483975__$1 = state_483975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_483975__$1,inst_483973);
} else {
if((state_val_483976 === (2))){
var state_483975__$1 = state_483975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_483975__$1,(4),ch);
} else {
if((state_val_483976 === (11))){
var inst_483965 = (state_483975[(2)]);
var state_483975__$1 = state_483975;
var statearr_483984_484007 = state_483975__$1;
(statearr_483984_484007[(2)] = inst_483965);

(statearr_483984_484007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (9))){
var state_483975__$1 = state_483975;
var statearr_483985_484008 = state_483975__$1;
(statearr_483985_484008[(2)] = null);

(statearr_483985_484008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (5))){
var inst_483960 = cljs.core.async.close_BANG_.call(null,out);
var state_483975__$1 = state_483975;
var statearr_483986_484009 = state_483975__$1;
(statearr_483986_484009[(2)] = inst_483960);

(statearr_483986_484009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (10))){
var inst_483968 = (state_483975[(2)]);
var state_483975__$1 = (function (){var statearr_483987 = state_483975;
(statearr_483987[(8)] = inst_483968);

return statearr_483987;
})();
var statearr_483988_484010 = state_483975__$1;
(statearr_483988_484010[(2)] = null);

(statearr_483988_484010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_483976 === (8))){
var inst_483957 = (state_483975[(7)]);
var state_483975__$1 = state_483975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_483975__$1,(11),out,inst_483957);
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
});})(c__38812__auto___484000,out))
;
return ((function (switch__38700__auto__,c__38812__auto___484000,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_483992 = [null,null,null,null,null,null,null,null,null];
(statearr_483992[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_483992[(1)] = (1));

return statearr_483992;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_483975){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_483975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e483993){if((e483993 instanceof Object)){
var ex__38704__auto__ = e483993;
var statearr_483994_484011 = state_483975;
(statearr_483994_484011[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_483975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e483993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__484012 = state_483975;
state_483975 = G__484012;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_483975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_483975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___484000,out))
})();
var state__38814__auto__ = (function (){var statearr_483995 = f__38813__auto__.call(null);
(statearr_483995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___484000);

return statearr_483995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___484000,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args484013 = [];
var len__32954__auto___484016 = arguments.length;
var i__32955__auto___484017 = (0);
while(true){
if((i__32955__auto___484017 < len__32954__auto___484016)){
args484013.push((arguments[i__32955__auto___484017]));

var G__484018 = (i__32955__auto___484017 + (1));
i__32955__auto___484017 = G__484018;
continue;
} else {
}
break;
}

var G__484015 = args484013.length;
switch (G__484015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484013.length)].join('')));

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
return (function (state_484185){
var state_val_484186 = (state_484185[(1)]);
if((state_val_484186 === (7))){
var inst_484181 = (state_484185[(2)]);
var state_484185__$1 = state_484185;
var statearr_484187_484228 = state_484185__$1;
(statearr_484187_484228[(2)] = inst_484181);

(statearr_484187_484228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (20))){
var inst_484151 = (state_484185[(7)]);
var inst_484162 = (state_484185[(2)]);
var inst_484163 = cljs.core.next.call(null,inst_484151);
var inst_484137 = inst_484163;
var inst_484138 = null;
var inst_484139 = (0);
var inst_484140 = (0);
var state_484185__$1 = (function (){var statearr_484188 = state_484185;
(statearr_484188[(8)] = inst_484162);

(statearr_484188[(9)] = inst_484139);

(statearr_484188[(10)] = inst_484140);

(statearr_484188[(11)] = inst_484138);

(statearr_484188[(12)] = inst_484137);

return statearr_484188;
})();
var statearr_484189_484229 = state_484185__$1;
(statearr_484189_484229[(2)] = null);

(statearr_484189_484229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (1))){
var state_484185__$1 = state_484185;
var statearr_484190_484230 = state_484185__$1;
(statearr_484190_484230[(2)] = null);

(statearr_484190_484230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (4))){
var inst_484126 = (state_484185[(13)]);
var inst_484126__$1 = (state_484185[(2)]);
var inst_484127 = (inst_484126__$1 == null);
var state_484185__$1 = (function (){var statearr_484191 = state_484185;
(statearr_484191[(13)] = inst_484126__$1);

return statearr_484191;
})();
if(cljs.core.truth_(inst_484127)){
var statearr_484192_484231 = state_484185__$1;
(statearr_484192_484231[(1)] = (5));

} else {
var statearr_484193_484232 = state_484185__$1;
(statearr_484193_484232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (15))){
var state_484185__$1 = state_484185;
var statearr_484197_484233 = state_484185__$1;
(statearr_484197_484233[(2)] = null);

(statearr_484197_484233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (21))){
var state_484185__$1 = state_484185;
var statearr_484198_484234 = state_484185__$1;
(statearr_484198_484234[(2)] = null);

(statearr_484198_484234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (13))){
var inst_484139 = (state_484185[(9)]);
var inst_484140 = (state_484185[(10)]);
var inst_484138 = (state_484185[(11)]);
var inst_484137 = (state_484185[(12)]);
var inst_484147 = (state_484185[(2)]);
var inst_484148 = (inst_484140 + (1));
var tmp484194 = inst_484139;
var tmp484195 = inst_484138;
var tmp484196 = inst_484137;
var inst_484137__$1 = tmp484196;
var inst_484138__$1 = tmp484195;
var inst_484139__$1 = tmp484194;
var inst_484140__$1 = inst_484148;
var state_484185__$1 = (function (){var statearr_484199 = state_484185;
(statearr_484199[(14)] = inst_484147);

(statearr_484199[(9)] = inst_484139__$1);

(statearr_484199[(10)] = inst_484140__$1);

(statearr_484199[(11)] = inst_484138__$1);

(statearr_484199[(12)] = inst_484137__$1);

return statearr_484199;
})();
var statearr_484200_484235 = state_484185__$1;
(statearr_484200_484235[(2)] = null);

(statearr_484200_484235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (22))){
var state_484185__$1 = state_484185;
var statearr_484201_484236 = state_484185__$1;
(statearr_484201_484236[(2)] = null);

(statearr_484201_484236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (6))){
var inst_484126 = (state_484185[(13)]);
var inst_484135 = f.call(null,inst_484126);
var inst_484136 = cljs.core.seq.call(null,inst_484135);
var inst_484137 = inst_484136;
var inst_484138 = null;
var inst_484139 = (0);
var inst_484140 = (0);
var state_484185__$1 = (function (){var statearr_484202 = state_484185;
(statearr_484202[(9)] = inst_484139);

(statearr_484202[(10)] = inst_484140);

(statearr_484202[(11)] = inst_484138);

(statearr_484202[(12)] = inst_484137);

return statearr_484202;
})();
var statearr_484203_484237 = state_484185__$1;
(statearr_484203_484237[(2)] = null);

(statearr_484203_484237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (17))){
var inst_484151 = (state_484185[(7)]);
var inst_484155 = cljs.core.chunk_first.call(null,inst_484151);
var inst_484156 = cljs.core.chunk_rest.call(null,inst_484151);
var inst_484157 = cljs.core.count.call(null,inst_484155);
var inst_484137 = inst_484156;
var inst_484138 = inst_484155;
var inst_484139 = inst_484157;
var inst_484140 = (0);
var state_484185__$1 = (function (){var statearr_484204 = state_484185;
(statearr_484204[(9)] = inst_484139);

(statearr_484204[(10)] = inst_484140);

(statearr_484204[(11)] = inst_484138);

(statearr_484204[(12)] = inst_484137);

return statearr_484204;
})();
var statearr_484205_484238 = state_484185__$1;
(statearr_484205_484238[(2)] = null);

(statearr_484205_484238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (3))){
var inst_484183 = (state_484185[(2)]);
var state_484185__$1 = state_484185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_484185__$1,inst_484183);
} else {
if((state_val_484186 === (12))){
var inst_484171 = (state_484185[(2)]);
var state_484185__$1 = state_484185;
var statearr_484206_484239 = state_484185__$1;
(statearr_484206_484239[(2)] = inst_484171);

(statearr_484206_484239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (2))){
var state_484185__$1 = state_484185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_484185__$1,(4),in$);
} else {
if((state_val_484186 === (23))){
var inst_484179 = (state_484185[(2)]);
var state_484185__$1 = state_484185;
var statearr_484207_484240 = state_484185__$1;
(statearr_484207_484240[(2)] = inst_484179);

(statearr_484207_484240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (19))){
var inst_484166 = (state_484185[(2)]);
var state_484185__$1 = state_484185;
var statearr_484208_484241 = state_484185__$1;
(statearr_484208_484241[(2)] = inst_484166);

(statearr_484208_484241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (11))){
var inst_484137 = (state_484185[(12)]);
var inst_484151 = (state_484185[(7)]);
var inst_484151__$1 = cljs.core.seq.call(null,inst_484137);
var state_484185__$1 = (function (){var statearr_484209 = state_484185;
(statearr_484209[(7)] = inst_484151__$1);

return statearr_484209;
})();
if(inst_484151__$1){
var statearr_484210_484242 = state_484185__$1;
(statearr_484210_484242[(1)] = (14));

} else {
var statearr_484211_484243 = state_484185__$1;
(statearr_484211_484243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (9))){
var inst_484173 = (state_484185[(2)]);
var inst_484174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_484185__$1 = (function (){var statearr_484212 = state_484185;
(statearr_484212[(15)] = inst_484173);

return statearr_484212;
})();
if(cljs.core.truth_(inst_484174)){
var statearr_484213_484244 = state_484185__$1;
(statearr_484213_484244[(1)] = (21));

} else {
var statearr_484214_484245 = state_484185__$1;
(statearr_484214_484245[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (5))){
var inst_484129 = cljs.core.async.close_BANG_.call(null,out);
var state_484185__$1 = state_484185;
var statearr_484215_484246 = state_484185__$1;
(statearr_484215_484246[(2)] = inst_484129);

(statearr_484215_484246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (14))){
var inst_484151 = (state_484185[(7)]);
var inst_484153 = cljs.core.chunked_seq_QMARK_.call(null,inst_484151);
var state_484185__$1 = state_484185;
if(inst_484153){
var statearr_484216_484247 = state_484185__$1;
(statearr_484216_484247[(1)] = (17));

} else {
var statearr_484217_484248 = state_484185__$1;
(statearr_484217_484248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (16))){
var inst_484169 = (state_484185[(2)]);
var state_484185__$1 = state_484185;
var statearr_484218_484249 = state_484185__$1;
(statearr_484218_484249[(2)] = inst_484169);

(statearr_484218_484249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484186 === (10))){
var inst_484140 = (state_484185[(10)]);
var inst_484138 = (state_484185[(11)]);
var inst_484145 = cljs.core._nth.call(null,inst_484138,inst_484140);
var state_484185__$1 = state_484185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484185__$1,(13),out,inst_484145);
} else {
if((state_val_484186 === (18))){
var inst_484151 = (state_484185[(7)]);
var inst_484160 = cljs.core.first.call(null,inst_484151);
var state_484185__$1 = state_484185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484185__$1,(20),out,inst_484160);
} else {
if((state_val_484186 === (8))){
var inst_484139 = (state_484185[(9)]);
var inst_484140 = (state_484185[(10)]);
var inst_484142 = (inst_484140 < inst_484139);
var inst_484143 = inst_484142;
var state_484185__$1 = state_484185;
if(cljs.core.truth_(inst_484143)){
var statearr_484219_484250 = state_484185__$1;
(statearr_484219_484250[(1)] = (10));

} else {
var statearr_484220_484251 = state_484185__$1;
(statearr_484220_484251[(1)] = (11));

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
var statearr_484224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_484224[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__);

(statearr_484224[(1)] = (1));

return statearr_484224;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____1 = (function (state_484185){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_484185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e484225){if((e484225 instanceof Object)){
var ex__38704__auto__ = e484225;
var statearr_484226_484252 = state_484185;
(statearr_484226_484252[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_484185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e484225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__484253 = state_484185;
state_484185 = G__484253;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__ = function(state_484185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____1.call(this,state_484185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_484227 = f__38813__auto__.call(null);
(statearr_484227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_484227;
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
var args484254 = [];
var len__32954__auto___484257 = arguments.length;
var i__32955__auto___484258 = (0);
while(true){
if((i__32955__auto___484258 < len__32954__auto___484257)){
args484254.push((arguments[i__32955__auto___484258]));

var G__484259 = (i__32955__auto___484258 + (1));
i__32955__auto___484258 = G__484259;
continue;
} else {
}
break;
}

var G__484256 = args484254.length;
switch (G__484256) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484254.length)].join('')));

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
var args484261 = [];
var len__32954__auto___484264 = arguments.length;
var i__32955__auto___484265 = (0);
while(true){
if((i__32955__auto___484265 < len__32954__auto___484264)){
args484261.push((arguments[i__32955__auto___484265]));

var G__484266 = (i__32955__auto___484265 + (1));
i__32955__auto___484265 = G__484266;
continue;
} else {
}
break;
}

var G__484263 = args484261.length;
switch (G__484263) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484261.length)].join('')));

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
var args484268 = [];
var len__32954__auto___484319 = arguments.length;
var i__32955__auto___484320 = (0);
while(true){
if((i__32955__auto___484320 < len__32954__auto___484319)){
args484268.push((arguments[i__32955__auto___484320]));

var G__484321 = (i__32955__auto___484320 + (1));
i__32955__auto___484320 = G__484321;
continue;
} else {
}
break;
}

var G__484270 = args484268.length;
switch (G__484270) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484268.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___484323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___484323,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___484323,out){
return (function (state_484294){
var state_val_484295 = (state_484294[(1)]);
if((state_val_484295 === (7))){
var inst_484289 = (state_484294[(2)]);
var state_484294__$1 = state_484294;
var statearr_484296_484324 = state_484294__$1;
(statearr_484296_484324[(2)] = inst_484289);

(statearr_484296_484324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (1))){
var inst_484271 = null;
var state_484294__$1 = (function (){var statearr_484297 = state_484294;
(statearr_484297[(7)] = inst_484271);

return statearr_484297;
})();
var statearr_484298_484325 = state_484294__$1;
(statearr_484298_484325[(2)] = null);

(statearr_484298_484325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (4))){
var inst_484274 = (state_484294[(8)]);
var inst_484274__$1 = (state_484294[(2)]);
var inst_484275 = (inst_484274__$1 == null);
var inst_484276 = cljs.core.not.call(null,inst_484275);
var state_484294__$1 = (function (){var statearr_484299 = state_484294;
(statearr_484299[(8)] = inst_484274__$1);

return statearr_484299;
})();
if(inst_484276){
var statearr_484300_484326 = state_484294__$1;
(statearr_484300_484326[(1)] = (5));

} else {
var statearr_484301_484327 = state_484294__$1;
(statearr_484301_484327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (6))){
var state_484294__$1 = state_484294;
var statearr_484302_484328 = state_484294__$1;
(statearr_484302_484328[(2)] = null);

(statearr_484302_484328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (3))){
var inst_484291 = (state_484294[(2)]);
var inst_484292 = cljs.core.async.close_BANG_.call(null,out);
var state_484294__$1 = (function (){var statearr_484303 = state_484294;
(statearr_484303[(9)] = inst_484291);

return statearr_484303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_484294__$1,inst_484292);
} else {
if((state_val_484295 === (2))){
var state_484294__$1 = state_484294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_484294__$1,(4),ch);
} else {
if((state_val_484295 === (11))){
var inst_484274 = (state_484294[(8)]);
var inst_484283 = (state_484294[(2)]);
var inst_484271 = inst_484274;
var state_484294__$1 = (function (){var statearr_484304 = state_484294;
(statearr_484304[(7)] = inst_484271);

(statearr_484304[(10)] = inst_484283);

return statearr_484304;
})();
var statearr_484305_484329 = state_484294__$1;
(statearr_484305_484329[(2)] = null);

(statearr_484305_484329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (9))){
var inst_484274 = (state_484294[(8)]);
var state_484294__$1 = state_484294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484294__$1,(11),out,inst_484274);
} else {
if((state_val_484295 === (5))){
var inst_484274 = (state_484294[(8)]);
var inst_484271 = (state_484294[(7)]);
var inst_484278 = cljs.core._EQ_.call(null,inst_484274,inst_484271);
var state_484294__$1 = state_484294;
if(inst_484278){
var statearr_484307_484330 = state_484294__$1;
(statearr_484307_484330[(1)] = (8));

} else {
var statearr_484308_484331 = state_484294__$1;
(statearr_484308_484331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (10))){
var inst_484286 = (state_484294[(2)]);
var state_484294__$1 = state_484294;
var statearr_484309_484332 = state_484294__$1;
(statearr_484309_484332[(2)] = inst_484286);

(statearr_484309_484332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484295 === (8))){
var inst_484271 = (state_484294[(7)]);
var tmp484306 = inst_484271;
var inst_484271__$1 = tmp484306;
var state_484294__$1 = (function (){var statearr_484310 = state_484294;
(statearr_484310[(7)] = inst_484271__$1);

return statearr_484310;
})();
var statearr_484311_484333 = state_484294__$1;
(statearr_484311_484333[(2)] = null);

(statearr_484311_484333[(1)] = (2));


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
});})(c__38812__auto___484323,out))
;
return ((function (switch__38700__auto__,c__38812__auto___484323,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_484315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_484315[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_484315[(1)] = (1));

return statearr_484315;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_484294){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_484294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e484316){if((e484316 instanceof Object)){
var ex__38704__auto__ = e484316;
var statearr_484317_484334 = state_484294;
(statearr_484317_484334[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_484294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e484316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__484335 = state_484294;
state_484294 = G__484335;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_484294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_484294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___484323,out))
})();
var state__38814__auto__ = (function (){var statearr_484318 = f__38813__auto__.call(null);
(statearr_484318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___484323);

return statearr_484318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___484323,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args484336 = [];
var len__32954__auto___484406 = arguments.length;
var i__32955__auto___484407 = (0);
while(true){
if((i__32955__auto___484407 < len__32954__auto___484406)){
args484336.push((arguments[i__32955__auto___484407]));

var G__484408 = (i__32955__auto___484407 + (1));
i__32955__auto___484407 = G__484408;
continue;
} else {
}
break;
}

var G__484338 = args484336.length;
switch (G__484338) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484336.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___484410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___484410,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___484410,out){
return (function (state_484376){
var state_val_484377 = (state_484376[(1)]);
if((state_val_484377 === (7))){
var inst_484372 = (state_484376[(2)]);
var state_484376__$1 = state_484376;
var statearr_484378_484411 = state_484376__$1;
(statearr_484378_484411[(2)] = inst_484372);

(statearr_484378_484411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (1))){
var inst_484339 = (new Array(n));
var inst_484340 = inst_484339;
var inst_484341 = (0);
var state_484376__$1 = (function (){var statearr_484379 = state_484376;
(statearr_484379[(7)] = inst_484341);

(statearr_484379[(8)] = inst_484340);

return statearr_484379;
})();
var statearr_484380_484412 = state_484376__$1;
(statearr_484380_484412[(2)] = null);

(statearr_484380_484412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (4))){
var inst_484344 = (state_484376[(9)]);
var inst_484344__$1 = (state_484376[(2)]);
var inst_484345 = (inst_484344__$1 == null);
var inst_484346 = cljs.core.not.call(null,inst_484345);
var state_484376__$1 = (function (){var statearr_484381 = state_484376;
(statearr_484381[(9)] = inst_484344__$1);

return statearr_484381;
})();
if(inst_484346){
var statearr_484382_484413 = state_484376__$1;
(statearr_484382_484413[(1)] = (5));

} else {
var statearr_484383_484414 = state_484376__$1;
(statearr_484383_484414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (15))){
var inst_484366 = (state_484376[(2)]);
var state_484376__$1 = state_484376;
var statearr_484384_484415 = state_484376__$1;
(statearr_484384_484415[(2)] = inst_484366);

(statearr_484384_484415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (13))){
var state_484376__$1 = state_484376;
var statearr_484385_484416 = state_484376__$1;
(statearr_484385_484416[(2)] = null);

(statearr_484385_484416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (6))){
var inst_484341 = (state_484376[(7)]);
var inst_484362 = (inst_484341 > (0));
var state_484376__$1 = state_484376;
if(cljs.core.truth_(inst_484362)){
var statearr_484386_484417 = state_484376__$1;
(statearr_484386_484417[(1)] = (12));

} else {
var statearr_484387_484418 = state_484376__$1;
(statearr_484387_484418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (3))){
var inst_484374 = (state_484376[(2)]);
var state_484376__$1 = state_484376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_484376__$1,inst_484374);
} else {
if((state_val_484377 === (12))){
var inst_484340 = (state_484376[(8)]);
var inst_484364 = cljs.core.vec.call(null,inst_484340);
var state_484376__$1 = state_484376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484376__$1,(15),out,inst_484364);
} else {
if((state_val_484377 === (2))){
var state_484376__$1 = state_484376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_484376__$1,(4),ch);
} else {
if((state_val_484377 === (11))){
var inst_484356 = (state_484376[(2)]);
var inst_484357 = (new Array(n));
var inst_484340 = inst_484357;
var inst_484341 = (0);
var state_484376__$1 = (function (){var statearr_484388 = state_484376;
(statearr_484388[(10)] = inst_484356);

(statearr_484388[(7)] = inst_484341);

(statearr_484388[(8)] = inst_484340);

return statearr_484388;
})();
var statearr_484389_484419 = state_484376__$1;
(statearr_484389_484419[(2)] = null);

(statearr_484389_484419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (9))){
var inst_484340 = (state_484376[(8)]);
var inst_484354 = cljs.core.vec.call(null,inst_484340);
var state_484376__$1 = state_484376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484376__$1,(11),out,inst_484354);
} else {
if((state_val_484377 === (5))){
var inst_484349 = (state_484376[(11)]);
var inst_484344 = (state_484376[(9)]);
var inst_484341 = (state_484376[(7)]);
var inst_484340 = (state_484376[(8)]);
var inst_484348 = (inst_484340[inst_484341] = inst_484344);
var inst_484349__$1 = (inst_484341 + (1));
var inst_484350 = (inst_484349__$1 < n);
var state_484376__$1 = (function (){var statearr_484390 = state_484376;
(statearr_484390[(11)] = inst_484349__$1);

(statearr_484390[(12)] = inst_484348);

return statearr_484390;
})();
if(cljs.core.truth_(inst_484350)){
var statearr_484391_484420 = state_484376__$1;
(statearr_484391_484420[(1)] = (8));

} else {
var statearr_484392_484421 = state_484376__$1;
(statearr_484392_484421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (14))){
var inst_484369 = (state_484376[(2)]);
var inst_484370 = cljs.core.async.close_BANG_.call(null,out);
var state_484376__$1 = (function (){var statearr_484394 = state_484376;
(statearr_484394[(13)] = inst_484369);

return statearr_484394;
})();
var statearr_484395_484422 = state_484376__$1;
(statearr_484395_484422[(2)] = inst_484370);

(statearr_484395_484422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (10))){
var inst_484360 = (state_484376[(2)]);
var state_484376__$1 = state_484376;
var statearr_484396_484423 = state_484376__$1;
(statearr_484396_484423[(2)] = inst_484360);

(statearr_484396_484423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484377 === (8))){
var inst_484349 = (state_484376[(11)]);
var inst_484340 = (state_484376[(8)]);
var tmp484393 = inst_484340;
var inst_484340__$1 = tmp484393;
var inst_484341 = inst_484349;
var state_484376__$1 = (function (){var statearr_484397 = state_484376;
(statearr_484397[(7)] = inst_484341);

(statearr_484397[(8)] = inst_484340__$1);

return statearr_484397;
})();
var statearr_484398_484424 = state_484376__$1;
(statearr_484398_484424[(2)] = null);

(statearr_484398_484424[(1)] = (2));


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
});})(c__38812__auto___484410,out))
;
return ((function (switch__38700__auto__,c__38812__auto___484410,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_484402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_484402[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_484402[(1)] = (1));

return statearr_484402;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_484376){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_484376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e484403){if((e484403 instanceof Object)){
var ex__38704__auto__ = e484403;
var statearr_484404_484425 = state_484376;
(statearr_484404_484425[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_484376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e484403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__484426 = state_484376;
state_484376 = G__484426;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_484376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_484376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___484410,out))
})();
var state__38814__auto__ = (function (){var statearr_484405 = f__38813__auto__.call(null);
(statearr_484405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___484410);

return statearr_484405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___484410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args484427 = [];
var len__32954__auto___484501 = arguments.length;
var i__32955__auto___484502 = (0);
while(true){
if((i__32955__auto___484502 < len__32954__auto___484501)){
args484427.push((arguments[i__32955__auto___484502]));

var G__484503 = (i__32955__auto___484502 + (1));
i__32955__auto___484502 = G__484503;
continue;
} else {
}
break;
}

var G__484429 = args484427.length;
switch (G__484429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484427.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___484505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___484505,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___484505,out){
return (function (state_484471){
var state_val_484472 = (state_484471[(1)]);
if((state_val_484472 === (7))){
var inst_484467 = (state_484471[(2)]);
var state_484471__$1 = state_484471;
var statearr_484473_484506 = state_484471__$1;
(statearr_484473_484506[(2)] = inst_484467);

(statearr_484473_484506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (1))){
var inst_484430 = [];
var inst_484431 = inst_484430;
var inst_484432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_484471__$1 = (function (){var statearr_484474 = state_484471;
(statearr_484474[(7)] = inst_484432);

(statearr_484474[(8)] = inst_484431);

return statearr_484474;
})();
var statearr_484475_484507 = state_484471__$1;
(statearr_484475_484507[(2)] = null);

(statearr_484475_484507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (4))){
var inst_484435 = (state_484471[(9)]);
var inst_484435__$1 = (state_484471[(2)]);
var inst_484436 = (inst_484435__$1 == null);
var inst_484437 = cljs.core.not.call(null,inst_484436);
var state_484471__$1 = (function (){var statearr_484476 = state_484471;
(statearr_484476[(9)] = inst_484435__$1);

return statearr_484476;
})();
if(inst_484437){
var statearr_484477_484508 = state_484471__$1;
(statearr_484477_484508[(1)] = (5));

} else {
var statearr_484478_484509 = state_484471__$1;
(statearr_484478_484509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (15))){
var inst_484461 = (state_484471[(2)]);
var state_484471__$1 = state_484471;
var statearr_484479_484510 = state_484471__$1;
(statearr_484479_484510[(2)] = inst_484461);

(statearr_484479_484510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (13))){
var state_484471__$1 = state_484471;
var statearr_484480_484511 = state_484471__$1;
(statearr_484480_484511[(2)] = null);

(statearr_484480_484511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (6))){
var inst_484431 = (state_484471[(8)]);
var inst_484456 = inst_484431.length;
var inst_484457 = (inst_484456 > (0));
var state_484471__$1 = state_484471;
if(cljs.core.truth_(inst_484457)){
var statearr_484481_484512 = state_484471__$1;
(statearr_484481_484512[(1)] = (12));

} else {
var statearr_484482_484513 = state_484471__$1;
(statearr_484482_484513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (3))){
var inst_484469 = (state_484471[(2)]);
var state_484471__$1 = state_484471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_484471__$1,inst_484469);
} else {
if((state_val_484472 === (12))){
var inst_484431 = (state_484471[(8)]);
var inst_484459 = cljs.core.vec.call(null,inst_484431);
var state_484471__$1 = state_484471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484471__$1,(15),out,inst_484459);
} else {
if((state_val_484472 === (2))){
var state_484471__$1 = state_484471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_484471__$1,(4),ch);
} else {
if((state_val_484472 === (11))){
var inst_484439 = (state_484471[(10)]);
var inst_484435 = (state_484471[(9)]);
var inst_484449 = (state_484471[(2)]);
var inst_484450 = [];
var inst_484451 = inst_484450.push(inst_484435);
var inst_484431 = inst_484450;
var inst_484432 = inst_484439;
var state_484471__$1 = (function (){var statearr_484483 = state_484471;
(statearr_484483[(7)] = inst_484432);

(statearr_484483[(11)] = inst_484449);

(statearr_484483[(12)] = inst_484451);

(statearr_484483[(8)] = inst_484431);

return statearr_484483;
})();
var statearr_484484_484514 = state_484471__$1;
(statearr_484484_484514[(2)] = null);

(statearr_484484_484514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (9))){
var inst_484431 = (state_484471[(8)]);
var inst_484447 = cljs.core.vec.call(null,inst_484431);
var state_484471__$1 = state_484471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_484471__$1,(11),out,inst_484447);
} else {
if((state_val_484472 === (5))){
var inst_484432 = (state_484471[(7)]);
var inst_484439 = (state_484471[(10)]);
var inst_484435 = (state_484471[(9)]);
var inst_484439__$1 = f.call(null,inst_484435);
var inst_484440 = cljs.core._EQ_.call(null,inst_484439__$1,inst_484432);
var inst_484441 = cljs.core.keyword_identical_QMARK_.call(null,inst_484432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_484442 = (inst_484440) || (inst_484441);
var state_484471__$1 = (function (){var statearr_484485 = state_484471;
(statearr_484485[(10)] = inst_484439__$1);

return statearr_484485;
})();
if(cljs.core.truth_(inst_484442)){
var statearr_484486_484515 = state_484471__$1;
(statearr_484486_484515[(1)] = (8));

} else {
var statearr_484487_484516 = state_484471__$1;
(statearr_484487_484516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (14))){
var inst_484464 = (state_484471[(2)]);
var inst_484465 = cljs.core.async.close_BANG_.call(null,out);
var state_484471__$1 = (function (){var statearr_484489 = state_484471;
(statearr_484489[(13)] = inst_484464);

return statearr_484489;
})();
var statearr_484490_484517 = state_484471__$1;
(statearr_484490_484517[(2)] = inst_484465);

(statearr_484490_484517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (10))){
var inst_484454 = (state_484471[(2)]);
var state_484471__$1 = state_484471;
var statearr_484491_484518 = state_484471__$1;
(statearr_484491_484518[(2)] = inst_484454);

(statearr_484491_484518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_484472 === (8))){
var inst_484439 = (state_484471[(10)]);
var inst_484435 = (state_484471[(9)]);
var inst_484431 = (state_484471[(8)]);
var inst_484444 = inst_484431.push(inst_484435);
var tmp484488 = inst_484431;
var inst_484431__$1 = tmp484488;
var inst_484432 = inst_484439;
var state_484471__$1 = (function (){var statearr_484492 = state_484471;
(statearr_484492[(14)] = inst_484444);

(statearr_484492[(7)] = inst_484432);

(statearr_484492[(8)] = inst_484431__$1);

return statearr_484492;
})();
var statearr_484493_484519 = state_484471__$1;
(statearr_484493_484519[(2)] = null);

(statearr_484493_484519[(1)] = (2));


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
});})(c__38812__auto___484505,out))
;
return ((function (switch__38700__auto__,c__38812__auto___484505,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_484497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_484497[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_484497[(1)] = (1));

return statearr_484497;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_484471){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_484471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e484498){if((e484498 instanceof Object)){
var ex__38704__auto__ = e484498;
var statearr_484499_484520 = state_484471;
(statearr_484499_484520[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_484471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e484498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__484521 = state_484471;
state_484471 = G__484521;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_484471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_484471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___484505,out))
})();
var state__38814__auto__ = (function (){var statearr_484500 = f__38813__auto__.call(null);
(statearr_484500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___484505);

return statearr_484500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___484505,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489290118491