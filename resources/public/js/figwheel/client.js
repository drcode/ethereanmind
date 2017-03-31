// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args61407 = [];
var len__33026__auto___61410 = arguments.length;
var i__33027__auto___61411 = (0);
while(true){
if((i__33027__auto___61411 < len__33026__auto___61410)){
args61407.push((arguments[i__33027__auto___61411]));

var G__61412 = (i__33027__auto___61411 + (1));
i__33027__auto___61411 = G__61412;
continue;
} else {
}
break;
}

var G__61409 = args61407.length;
switch (G__61409) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61407.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__33033__auto__ = [];
var len__33026__auto___61415 = arguments.length;
var i__33027__auto___61416 = (0);
while(true){
if((i__33027__auto___61416 < len__33026__auto___61415)){
args__33033__auto__.push((arguments[i__33027__auto___61416]));

var G__61417 = (i__33027__auto___61416 + (1));
i__33027__auto___61416 = G__61417;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq61414){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61414));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__33033__auto__ = [];
var len__33026__auto___61419 = arguments.length;
var i__33027__auto___61420 = (0);
while(true){
if((i__33027__auto___61420 < len__33026__auto___61419)){
args__33033__auto__.push((arguments[i__33027__auto___61420]));

var G__61421 = (i__33027__auto___61420 + (1));
i__33027__auto___61420 = G__61421;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq61418){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61418));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__61422 = cljs.core._EQ_;
var expr__61423 = (function (){var or__31951__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e61426){if((e61426 instanceof Error)){
var e = e61426;
return false;
} else {
throw e61426;

}
}})();
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__61422.call(null,"true",expr__61423))){
return true;
} else {
if(cljs.core.truth_(pred__61422.call(null,"false",expr__61423))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__61423)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e61428){if((e61428 instanceof Error)){
var e = e61428;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e61428;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__61429){
var map__61432 = p__61429;
var map__61432__$1 = ((((!((map__61432 == null)))?((((map__61432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61432):map__61432);
var message = cljs.core.get.call(null,map__61432__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__61432__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__31951__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__31939__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__31939__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__31939__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36744__auto___61594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___61594,ch){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___61594,ch){
return (function (state_61563){
var state_val_61564 = (state_61563[(1)]);
if((state_val_61564 === (7))){
var inst_61559 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61565_61595 = state_61563__$1;
(statearr_61565_61595[(2)] = inst_61559);

(statearr_61565_61595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (1))){
var state_61563__$1 = state_61563;
var statearr_61566_61596 = state_61563__$1;
(statearr_61566_61596[(2)] = null);

(statearr_61566_61596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (4))){
var inst_61516 = (state_61563[(7)]);
var inst_61516__$1 = (state_61563[(2)]);
var state_61563__$1 = (function (){var statearr_61567 = state_61563;
(statearr_61567[(7)] = inst_61516__$1);

return statearr_61567;
})();
if(cljs.core.truth_(inst_61516__$1)){
var statearr_61568_61597 = state_61563__$1;
(statearr_61568_61597[(1)] = (5));

} else {
var statearr_61569_61598 = state_61563__$1;
(statearr_61569_61598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (15))){
var inst_61523 = (state_61563[(8)]);
var inst_61538 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_61523);
var inst_61539 = cljs.core.first.call(null,inst_61538);
var inst_61540 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_61539);
var inst_61541 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_61540)].join('');
var inst_61542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_61541);
var state_61563__$1 = state_61563;
var statearr_61570_61599 = state_61563__$1;
(statearr_61570_61599[(2)] = inst_61542);

(statearr_61570_61599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (13))){
var inst_61547 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61571_61600 = state_61563__$1;
(statearr_61571_61600[(2)] = inst_61547);

(statearr_61571_61600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (6))){
var state_61563__$1 = state_61563;
var statearr_61572_61601 = state_61563__$1;
(statearr_61572_61601[(2)] = null);

(statearr_61572_61601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (17))){
var inst_61545 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61573_61602 = state_61563__$1;
(statearr_61573_61602[(2)] = inst_61545);

(statearr_61573_61602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (3))){
var inst_61561 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61563__$1,inst_61561);
} else {
if((state_val_61564 === (12))){
var inst_61522 = (state_61563[(9)]);
var inst_61536 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_61522,opts);
var state_61563__$1 = state_61563;
if(cljs.core.truth_(inst_61536)){
var statearr_61574_61603 = state_61563__$1;
(statearr_61574_61603[(1)] = (15));

} else {
var statearr_61575_61604 = state_61563__$1;
(statearr_61575_61604[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (2))){
var state_61563__$1 = state_61563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61563__$1,(4),ch);
} else {
if((state_val_61564 === (11))){
var inst_61523 = (state_61563[(8)]);
var inst_61528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61529 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_61523);
var inst_61530 = cljs.core.async.timeout.call(null,(1000));
var inst_61531 = [inst_61529,inst_61530];
var inst_61532 = (new cljs.core.PersistentVector(null,2,(5),inst_61528,inst_61531,null));
var state_61563__$1 = state_61563;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61563__$1,(14),inst_61532);
} else {
if((state_val_61564 === (9))){
var inst_61523 = (state_61563[(8)]);
var inst_61549 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_61550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_61523);
var inst_61551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_61550);
var inst_61552 = [cljs.core.str("Not loading: "),cljs.core.str(inst_61551)].join('');
var inst_61553 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_61552);
var state_61563__$1 = (function (){var statearr_61576 = state_61563;
(statearr_61576[(10)] = inst_61549);

return statearr_61576;
})();
var statearr_61577_61605 = state_61563__$1;
(statearr_61577_61605[(2)] = inst_61553);

(statearr_61577_61605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (5))){
var inst_61516 = (state_61563[(7)]);
var inst_61518 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_61519 = (new cljs.core.PersistentArrayMap(null,2,inst_61518,null));
var inst_61520 = (new cljs.core.PersistentHashSet(null,inst_61519,null));
var inst_61521 = figwheel.client.focus_msgs.call(null,inst_61520,inst_61516);
var inst_61522 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_61521);
var inst_61523 = cljs.core.first.call(null,inst_61521);
var inst_61524 = figwheel.client.autoload_QMARK_.call(null);
var state_61563__$1 = (function (){var statearr_61578 = state_61563;
(statearr_61578[(9)] = inst_61522);

(statearr_61578[(8)] = inst_61523);

return statearr_61578;
})();
if(cljs.core.truth_(inst_61524)){
var statearr_61579_61606 = state_61563__$1;
(statearr_61579_61606[(1)] = (8));

} else {
var statearr_61580_61607 = state_61563__$1;
(statearr_61580_61607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (14))){
var inst_61534 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61581_61608 = state_61563__$1;
(statearr_61581_61608[(2)] = inst_61534);

(statearr_61581_61608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (16))){
var state_61563__$1 = state_61563;
var statearr_61582_61609 = state_61563__$1;
(statearr_61582_61609[(2)] = null);

(statearr_61582_61609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (10))){
var inst_61555 = (state_61563[(2)]);
var state_61563__$1 = (function (){var statearr_61583 = state_61563;
(statearr_61583[(11)] = inst_61555);

return statearr_61583;
})();
var statearr_61584_61610 = state_61563__$1;
(statearr_61584_61610[(2)] = null);

(statearr_61584_61610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (8))){
var inst_61522 = (state_61563[(9)]);
var inst_61526 = figwheel.client.reload_file_state_QMARK_.call(null,inst_61522,opts);
var state_61563__$1 = state_61563;
if(cljs.core.truth_(inst_61526)){
var statearr_61585_61611 = state_61563__$1;
(statearr_61585_61611[(1)] = (11));

} else {
var statearr_61586_61612 = state_61563__$1;
(statearr_61586_61612[(1)] = (12));

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
});})(c__36744__auto___61594,ch))
;
return ((function (switch__36723__auto__,c__36744__auto___61594,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36724__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36724__auto____0 = (function (){
var statearr_61590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61590[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36724__auto__);

(statearr_61590[(1)] = (1));

return statearr_61590;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36724__auto____1 = (function (state_61563){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_61563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e61591){if((e61591 instanceof Object)){
var ex__36727__auto__ = e61591;
var statearr_61592_61613 = state_61563;
(statearr_61592_61613[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61614 = state_61563;
state_61563 = G__61614;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36724__auto__ = function(state_61563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36724__auto____1.call(this,state_61563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36724__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36724__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___61594,ch))
})();
var state__36746__auto__ = (function (){var statearr_61593 = f__36745__auto__.call(null);
(statearr_61593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___61594);

return statearr_61593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___61594,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__61615_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__61615_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_61618 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_61618){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e61617){if((e61617 instanceof Error)){
var e = e61617;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_61618], null));
} else {
var e = e61617;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_61618))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__61619){
var map__61628 = p__61619;
var map__61628__$1 = ((((!((map__61628 == null)))?((((map__61628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61628):map__61628);
var opts = map__61628__$1;
var build_id = cljs.core.get.call(null,map__61628__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__61628,map__61628__$1,opts,build_id){
return (function (p__61630){
var vec__61631 = p__61630;
var seq__61632 = cljs.core.seq.call(null,vec__61631);
var first__61633 = cljs.core.first.call(null,seq__61632);
var seq__61632__$1 = cljs.core.next.call(null,seq__61632);
var map__61634 = first__61633;
var map__61634__$1 = ((((!((map__61634 == null)))?((((map__61634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61634):map__61634);
var msg = map__61634__$1;
var msg_name = cljs.core.get.call(null,map__61634__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61632__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__61631,seq__61632,first__61633,seq__61632__$1,map__61634,map__61634__$1,msg,msg_name,_,map__61628,map__61628__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__61631,seq__61632,first__61633,seq__61632__$1,map__61634,map__61634__$1,msg,msg_name,_,map__61628,map__61628__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__61628,map__61628__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__61642){
var vec__61643 = p__61642;
var seq__61644 = cljs.core.seq.call(null,vec__61643);
var first__61645 = cljs.core.first.call(null,seq__61644);
var seq__61644__$1 = cljs.core.next.call(null,seq__61644);
var map__61646 = first__61645;
var map__61646__$1 = ((((!((map__61646 == null)))?((((map__61646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61646):map__61646);
var msg = map__61646__$1;
var msg_name = cljs.core.get.call(null,map__61646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61644__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__61648){
var map__61660 = p__61648;
var map__61660__$1 = ((((!((map__61660 == null)))?((((map__61660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61660):map__61660);
var on_compile_warning = cljs.core.get.call(null,map__61660__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__61660__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__61660,map__61660__$1,on_compile_warning,on_compile_fail){
return (function (p__61662){
var vec__61663 = p__61662;
var seq__61664 = cljs.core.seq.call(null,vec__61663);
var first__61665 = cljs.core.first.call(null,seq__61664);
var seq__61664__$1 = cljs.core.next.call(null,seq__61664);
var map__61666 = first__61665;
var map__61666__$1 = ((((!((map__61666 == null)))?((((map__61666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61666):map__61666);
var msg = map__61666__$1;
var msg_name = cljs.core.get.call(null,map__61666__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61664__$1;
var pred__61668 = cljs.core._EQ_;
var expr__61669 = msg_name;
if(cljs.core.truth_(pred__61668.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__61669))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__61668.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__61669))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__61660,map__61660__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,msg_hist,msg_names,msg){
return (function (state_61877){
var state_val_61878 = (state_61877[(1)]);
if((state_val_61878 === (7))){
var inst_61805 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61805)){
var statearr_61879_61925 = state_61877__$1;
(statearr_61879_61925[(1)] = (8));

} else {
var statearr_61880_61926 = state_61877__$1;
(statearr_61880_61926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (20))){
var inst_61871 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61881_61927 = state_61877__$1;
(statearr_61881_61927[(2)] = inst_61871);

(statearr_61881_61927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (27))){
var inst_61867 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61882_61928 = state_61877__$1;
(statearr_61882_61928[(2)] = inst_61867);

(statearr_61882_61928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (1))){
var inst_61798 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61798)){
var statearr_61883_61929 = state_61877__$1;
(statearr_61883_61929[(1)] = (2));

} else {
var statearr_61884_61930 = state_61877__$1;
(statearr_61884_61930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (24))){
var inst_61869 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61885_61931 = state_61877__$1;
(statearr_61885_61931[(2)] = inst_61869);

(statearr_61885_61931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (4))){
var inst_61875 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61877__$1,inst_61875);
} else {
if((state_val_61878 === (15))){
var inst_61873 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61886_61932 = state_61877__$1;
(statearr_61886_61932[(2)] = inst_61873);

(statearr_61886_61932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (21))){
var inst_61832 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61887_61933 = state_61877__$1;
(statearr_61887_61933[(2)] = inst_61832);

(statearr_61887_61933[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (31))){
var inst_61856 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61856)){
var statearr_61888_61934 = state_61877__$1;
(statearr_61888_61934[(1)] = (34));

} else {
var statearr_61889_61935 = state_61877__$1;
(statearr_61889_61935[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (32))){
var inst_61865 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61890_61936 = state_61877__$1;
(statearr_61890_61936[(2)] = inst_61865);

(statearr_61890_61936[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (33))){
var inst_61854 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61891_61937 = state_61877__$1;
(statearr_61891_61937[(2)] = inst_61854);

(statearr_61891_61937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (13))){
var inst_61819 = figwheel.client.heads_up.clear.call(null);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(16),inst_61819);
} else {
if((state_val_61878 === (22))){
var inst_61836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61837 = figwheel.client.heads_up.append_warning_message.call(null,inst_61836);
var state_61877__$1 = state_61877;
var statearr_61892_61938 = state_61877__$1;
(statearr_61892_61938[(2)] = inst_61837);

(statearr_61892_61938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (36))){
var inst_61863 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61893_61939 = state_61877__$1;
(statearr_61893_61939[(2)] = inst_61863);

(statearr_61893_61939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (29))){
var inst_61847 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61894_61940 = state_61877__$1;
(statearr_61894_61940[(2)] = inst_61847);

(statearr_61894_61940[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (6))){
var inst_61800 = (state_61877[(7)]);
var state_61877__$1 = state_61877;
var statearr_61895_61941 = state_61877__$1;
(statearr_61895_61941[(2)] = inst_61800);

(statearr_61895_61941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (28))){
var inst_61843 = (state_61877[(2)]);
var inst_61844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61845 = figwheel.client.heads_up.display_warning.call(null,inst_61844);
var state_61877__$1 = (function (){var statearr_61896 = state_61877;
(statearr_61896[(8)] = inst_61843);

return statearr_61896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(29),inst_61845);
} else {
if((state_val_61878 === (25))){
var inst_61841 = figwheel.client.heads_up.clear.call(null);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(28),inst_61841);
} else {
if((state_val_61878 === (34))){
var inst_61858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(37),inst_61858);
} else {
if((state_val_61878 === (17))){
var inst_61825 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61897_61942 = state_61877__$1;
(statearr_61897_61942[(2)] = inst_61825);

(statearr_61897_61942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (3))){
var inst_61817 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61817)){
var statearr_61898_61943 = state_61877__$1;
(statearr_61898_61943[(1)] = (13));

} else {
var statearr_61899_61944 = state_61877__$1;
(statearr_61899_61944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (12))){
var inst_61813 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61900_61945 = state_61877__$1;
(statearr_61900_61945[(2)] = inst_61813);

(statearr_61900_61945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (2))){
var inst_61800 = (state_61877[(7)]);
var inst_61800__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_61877__$1 = (function (){var statearr_61901 = state_61877;
(statearr_61901[(7)] = inst_61800__$1);

return statearr_61901;
})();
if(cljs.core.truth_(inst_61800__$1)){
var statearr_61902_61946 = state_61877__$1;
(statearr_61902_61946[(1)] = (5));

} else {
var statearr_61903_61947 = state_61877__$1;
(statearr_61903_61947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (23))){
var inst_61839 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61839)){
var statearr_61904_61948 = state_61877__$1;
(statearr_61904_61948[(1)] = (25));

} else {
var statearr_61905_61949 = state_61877__$1;
(statearr_61905_61949[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (35))){
var state_61877__$1 = state_61877;
var statearr_61906_61950 = state_61877__$1;
(statearr_61906_61950[(2)] = null);

(statearr_61906_61950[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (19))){
var inst_61834 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61834)){
var statearr_61907_61951 = state_61877__$1;
(statearr_61907_61951[(1)] = (22));

} else {
var statearr_61908_61952 = state_61877__$1;
(statearr_61908_61952[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (11))){
var inst_61809 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61909_61953 = state_61877__$1;
(statearr_61909_61953[(2)] = inst_61809);

(statearr_61909_61953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (9))){
var inst_61811 = figwheel.client.heads_up.clear.call(null);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(12),inst_61811);
} else {
if((state_val_61878 === (5))){
var inst_61802 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_61877__$1 = state_61877;
var statearr_61910_61954 = state_61877__$1;
(statearr_61910_61954[(2)] = inst_61802);

(statearr_61910_61954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (14))){
var inst_61827 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61827)){
var statearr_61911_61955 = state_61877__$1;
(statearr_61911_61955[(1)] = (18));

} else {
var statearr_61912_61956 = state_61877__$1;
(statearr_61912_61956[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (26))){
var inst_61849 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_61877__$1 = state_61877;
if(cljs.core.truth_(inst_61849)){
var statearr_61913_61957 = state_61877__$1;
(statearr_61913_61957[(1)] = (30));

} else {
var statearr_61914_61958 = state_61877__$1;
(statearr_61914_61958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (16))){
var inst_61821 = (state_61877[(2)]);
var inst_61822 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61823 = figwheel.client.heads_up.display_exception.call(null,inst_61822);
var state_61877__$1 = (function (){var statearr_61915 = state_61877;
(statearr_61915[(9)] = inst_61821);

return statearr_61915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(17),inst_61823);
} else {
if((state_val_61878 === (30))){
var inst_61851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61852 = figwheel.client.heads_up.display_warning.call(null,inst_61851);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(33),inst_61852);
} else {
if((state_val_61878 === (10))){
var inst_61815 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61916_61959 = state_61877__$1;
(statearr_61916_61959[(2)] = inst_61815);

(statearr_61916_61959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (18))){
var inst_61829 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61830 = figwheel.client.heads_up.display_exception.call(null,inst_61829);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(21),inst_61830);
} else {
if((state_val_61878 === (37))){
var inst_61860 = (state_61877[(2)]);
var state_61877__$1 = state_61877;
var statearr_61917_61960 = state_61877__$1;
(statearr_61917_61960[(2)] = inst_61860);

(statearr_61917_61960[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61878 === (8))){
var inst_61807 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61877__$1 = state_61877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61877__$1,(11),inst_61807);
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
});})(c__36744__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36723__auto__,c__36744__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto____0 = (function (){
var statearr_61921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61921[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto__);

(statearr_61921[(1)] = (1));

return statearr_61921;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto____1 = (function (state_61877){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_61877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e61922){if((e61922 instanceof Object)){
var ex__36727__auto__ = e61922;
var statearr_61923_61961 = state_61877;
(statearr_61923_61961[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61962 = state_61877;
state_61877 = G__61962;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto__ = function(state_61877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto____1.call(this,state_61877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,msg_hist,msg_names,msg))
})();
var state__36746__auto__ = (function (){var statearr_61924 = f__36745__auto__.call(null);
(statearr_61924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_61924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,msg_hist,msg_names,msg))
);

return c__36744__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36744__auto___62025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___62025,ch){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___62025,ch){
return (function (state_62008){
var state_val_62009 = (state_62008[(1)]);
if((state_val_62009 === (1))){
var state_62008__$1 = state_62008;
var statearr_62010_62026 = state_62008__$1;
(statearr_62010_62026[(2)] = null);

(statearr_62010_62026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (2))){
var state_62008__$1 = state_62008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62008__$1,(4),ch);
} else {
if((state_val_62009 === (3))){
var inst_62006 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62008__$1,inst_62006);
} else {
if((state_val_62009 === (4))){
var inst_61996 = (state_62008[(7)]);
var inst_61996__$1 = (state_62008[(2)]);
var state_62008__$1 = (function (){var statearr_62011 = state_62008;
(statearr_62011[(7)] = inst_61996__$1);

return statearr_62011;
})();
if(cljs.core.truth_(inst_61996__$1)){
var statearr_62012_62027 = state_62008__$1;
(statearr_62012_62027[(1)] = (5));

} else {
var statearr_62013_62028 = state_62008__$1;
(statearr_62013_62028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (5))){
var inst_61996 = (state_62008[(7)]);
var inst_61998 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_61996);
var state_62008__$1 = state_62008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62008__$1,(8),inst_61998);
} else {
if((state_val_62009 === (6))){
var state_62008__$1 = state_62008;
var statearr_62014_62029 = state_62008__$1;
(statearr_62014_62029[(2)] = null);

(statearr_62014_62029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (7))){
var inst_62004 = (state_62008[(2)]);
var state_62008__$1 = state_62008;
var statearr_62015_62030 = state_62008__$1;
(statearr_62015_62030[(2)] = inst_62004);

(statearr_62015_62030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62009 === (8))){
var inst_62000 = (state_62008[(2)]);
var state_62008__$1 = (function (){var statearr_62016 = state_62008;
(statearr_62016[(8)] = inst_62000);

return statearr_62016;
})();
var statearr_62017_62031 = state_62008__$1;
(statearr_62017_62031[(2)] = null);

(statearr_62017_62031[(1)] = (2));


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
});})(c__36744__auto___62025,ch))
;
return ((function (switch__36723__auto__,c__36744__auto___62025,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36724__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36724__auto____0 = (function (){
var statearr_62021 = [null,null,null,null,null,null,null,null,null];
(statearr_62021[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36724__auto__);

(statearr_62021[(1)] = (1));

return statearr_62021;
});
var figwheel$client$heads_up_plugin_$_state_machine__36724__auto____1 = (function (state_62008){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_62008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e62022){if((e62022 instanceof Object)){
var ex__36727__auto__ = e62022;
var statearr_62023_62032 = state_62008;
(statearr_62023_62032[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62033 = state_62008;
state_62008 = G__62033;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36724__auto__ = function(state_62008){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36724__auto____1.call(this,state_62008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36724__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36724__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___62025,ch))
})();
var state__36746__auto__ = (function (){var statearr_62024 = f__36745__auto__.call(null);
(statearr_62024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___62025);

return statearr_62024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___62025,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__){
return (function (state_62054){
var state_val_62055 = (state_62054[(1)]);
if((state_val_62055 === (1))){
var inst_62049 = cljs.core.async.timeout.call(null,(3000));
var state_62054__$1 = state_62054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62054__$1,(2),inst_62049);
} else {
if((state_val_62055 === (2))){
var inst_62051 = (state_62054[(2)]);
var inst_62052 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_62054__$1 = (function (){var statearr_62056 = state_62054;
(statearr_62056[(7)] = inst_62051);

return statearr_62056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62054__$1,inst_62052);
} else {
return null;
}
}
});})(c__36744__auto__))
;
return ((function (switch__36723__auto__,c__36744__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36724__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36724__auto____0 = (function (){
var statearr_62060 = [null,null,null,null,null,null,null,null];
(statearr_62060[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36724__auto__);

(statearr_62060[(1)] = (1));

return statearr_62060;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36724__auto____1 = (function (state_62054){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_62054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e62061){if((e62061 instanceof Object)){
var ex__36727__auto__ = e62061;
var statearr_62062_62064 = state_62054;
(statearr_62062_62064[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62065 = state_62054;
state_62054 = G__62065;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36724__auto__ = function(state_62054){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36724__auto____1.call(this,state_62054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36724__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36724__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__))
})();
var state__36746__auto__ = (function (){var statearr_62063 = f__36745__auto__.call(null);
(statearr_62063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_62063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__))
);

return c__36744__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,figwheel_version,temp__4657__auto__){
return (function (state_62088){
var state_val_62089 = (state_62088[(1)]);
if((state_val_62089 === (1))){
var inst_62082 = cljs.core.async.timeout.call(null,(2000));
var state_62088__$1 = state_62088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62088__$1,(2),inst_62082);
} else {
if((state_val_62089 === (2))){
var inst_62084 = (state_62088[(2)]);
var inst_62085 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_62086 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_62085);
var state_62088__$1 = (function (){var statearr_62090 = state_62088;
(statearr_62090[(7)] = inst_62084);

return statearr_62090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62088__$1,inst_62086);
} else {
return null;
}
}
});})(c__36744__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__36723__auto__,c__36744__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto____0 = (function (){
var statearr_62094 = [null,null,null,null,null,null,null,null];
(statearr_62094[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto__);

(statearr_62094[(1)] = (1));

return statearr_62094;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto____1 = (function (state_62088){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_62088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e62095){if((e62095 instanceof Object)){
var ex__36727__auto__ = e62095;
var statearr_62096_62098 = state_62088;
(statearr_62096_62098[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62099 = state_62088;
state_62088 = G__62099;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto__ = function(state_62088){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto____1.call(this,state_62088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,figwheel_version,temp__4657__auto__))
})();
var state__36746__auto__ = (function (){var statearr_62097 = f__36745__auto__.call(null);
(statearr_62097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_62097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,figwheel_version,temp__4657__auto__))
);

return c__36744__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__62100){
var map__62104 = p__62100;
var map__62104__$1 = ((((!((map__62104 == null)))?((((map__62104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62104):map__62104);
var file = cljs.core.get.call(null,map__62104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__62104__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__62104__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__62106 = "";
var G__62106__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__62106),cljs.core.str("file "),cljs.core.str(file)].join(''):G__62106);
var G__62106__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__62106__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__62106__$1);
if(cljs.core.truth_((function (){var and__31939__auto__ = line;
if(cljs.core.truth_(and__31939__auto__)){
return column;
} else {
return and__31939__auto__;
}
})())){
return [cljs.core.str(G__62106__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__62106__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__62107){
var map__62114 = p__62107;
var map__62114__$1 = ((((!((map__62114 == null)))?((((map__62114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62114):map__62114);
var ed = map__62114__$1;
var formatted_exception = cljs.core.get.call(null,map__62114__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__62114__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__62114__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__62116_62120 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__62117_62121 = null;
var count__62118_62122 = (0);
var i__62119_62123 = (0);
while(true){
if((i__62119_62123 < count__62118_62122)){
var msg_62124 = cljs.core._nth.call(null,chunk__62117_62121,i__62119_62123);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_62124);

var G__62125 = seq__62116_62120;
var G__62126 = chunk__62117_62121;
var G__62127 = count__62118_62122;
var G__62128 = (i__62119_62123 + (1));
seq__62116_62120 = G__62125;
chunk__62117_62121 = G__62126;
count__62118_62122 = G__62127;
i__62119_62123 = G__62128;
continue;
} else {
var temp__4657__auto___62129 = cljs.core.seq.call(null,seq__62116_62120);
if(temp__4657__auto___62129){
var seq__62116_62130__$1 = temp__4657__auto___62129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62116_62130__$1)){
var c__32762__auto___62131 = cljs.core.chunk_first.call(null,seq__62116_62130__$1);
var G__62132 = cljs.core.chunk_rest.call(null,seq__62116_62130__$1);
var G__62133 = c__32762__auto___62131;
var G__62134 = cljs.core.count.call(null,c__32762__auto___62131);
var G__62135 = (0);
seq__62116_62120 = G__62132;
chunk__62117_62121 = G__62133;
count__62118_62122 = G__62134;
i__62119_62123 = G__62135;
continue;
} else {
var msg_62136 = cljs.core.first.call(null,seq__62116_62130__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_62136);

var G__62137 = cljs.core.next.call(null,seq__62116_62130__$1);
var G__62138 = null;
var G__62139 = (0);
var G__62140 = (0);
seq__62116_62120 = G__62137;
chunk__62117_62121 = G__62138;
count__62118_62122 = G__62139;
i__62119_62123 = G__62140;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__62141){
var map__62144 = p__62141;
var map__62144__$1 = ((((!((map__62144 == null)))?((((map__62144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62144):map__62144);
var w = map__62144__$1;
var message = cljs.core.get.call(null,map__62144__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__31939__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__31939__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__31939__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__62156 = cljs.core.seq.call(null,plugins);
var chunk__62157 = null;
var count__62158 = (0);
var i__62159 = (0);
while(true){
if((i__62159 < count__62158)){
var vec__62160 = cljs.core._nth.call(null,chunk__62157,i__62159);
var k = cljs.core.nth.call(null,vec__62160,(0),null);
var plugin = cljs.core.nth.call(null,vec__62160,(1),null);
if(cljs.core.truth_(plugin)){
var pl_62166 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__62156,chunk__62157,count__62158,i__62159,pl_62166,vec__62160,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_62166.call(null,msg_hist);
});})(seq__62156,chunk__62157,count__62158,i__62159,pl_62166,vec__62160,k,plugin))
);
} else {
}

var G__62167 = seq__62156;
var G__62168 = chunk__62157;
var G__62169 = count__62158;
var G__62170 = (i__62159 + (1));
seq__62156 = G__62167;
chunk__62157 = G__62168;
count__62158 = G__62169;
i__62159 = G__62170;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62156);
if(temp__4657__auto__){
var seq__62156__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62156__$1)){
var c__32762__auto__ = cljs.core.chunk_first.call(null,seq__62156__$1);
var G__62171 = cljs.core.chunk_rest.call(null,seq__62156__$1);
var G__62172 = c__32762__auto__;
var G__62173 = cljs.core.count.call(null,c__32762__auto__);
var G__62174 = (0);
seq__62156 = G__62171;
chunk__62157 = G__62172;
count__62158 = G__62173;
i__62159 = G__62174;
continue;
} else {
var vec__62163 = cljs.core.first.call(null,seq__62156__$1);
var k = cljs.core.nth.call(null,vec__62163,(0),null);
var plugin = cljs.core.nth.call(null,vec__62163,(1),null);
if(cljs.core.truth_(plugin)){
var pl_62175 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__62156,chunk__62157,count__62158,i__62159,pl_62175,vec__62163,k,plugin,seq__62156__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_62175.call(null,msg_hist);
});})(seq__62156,chunk__62157,count__62158,i__62159,pl_62175,vec__62163,k,plugin,seq__62156__$1,temp__4657__auto__))
);
} else {
}

var G__62176 = cljs.core.next.call(null,seq__62156__$1);
var G__62177 = null;
var G__62178 = (0);
var G__62179 = (0);
seq__62156 = G__62176;
chunk__62157 = G__62177;
count__62158 = G__62178;
i__62159 = G__62179;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args62180 = [];
var len__33026__auto___62187 = arguments.length;
var i__33027__auto___62188 = (0);
while(true){
if((i__33027__auto___62188 < len__33026__auto___62187)){
args62180.push((arguments[i__33027__auto___62188]));

var G__62189 = (i__33027__auto___62188 + (1));
i__33027__auto___62188 = G__62189;
continue;
} else {
}
break;
}

var G__62182 = args62180.length;
switch (G__62182) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62180.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__62183_62191 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__62184_62192 = null;
var count__62185_62193 = (0);
var i__62186_62194 = (0);
while(true){
if((i__62186_62194 < count__62185_62193)){
var msg_62195 = cljs.core._nth.call(null,chunk__62184_62192,i__62186_62194);
figwheel.client.socket.handle_incoming_message.call(null,msg_62195);

var G__62196 = seq__62183_62191;
var G__62197 = chunk__62184_62192;
var G__62198 = count__62185_62193;
var G__62199 = (i__62186_62194 + (1));
seq__62183_62191 = G__62196;
chunk__62184_62192 = G__62197;
count__62185_62193 = G__62198;
i__62186_62194 = G__62199;
continue;
} else {
var temp__4657__auto___62200 = cljs.core.seq.call(null,seq__62183_62191);
if(temp__4657__auto___62200){
var seq__62183_62201__$1 = temp__4657__auto___62200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62183_62201__$1)){
var c__32762__auto___62202 = cljs.core.chunk_first.call(null,seq__62183_62201__$1);
var G__62203 = cljs.core.chunk_rest.call(null,seq__62183_62201__$1);
var G__62204 = c__32762__auto___62202;
var G__62205 = cljs.core.count.call(null,c__32762__auto___62202);
var G__62206 = (0);
seq__62183_62191 = G__62203;
chunk__62184_62192 = G__62204;
count__62185_62193 = G__62205;
i__62186_62194 = G__62206;
continue;
} else {
var msg_62207 = cljs.core.first.call(null,seq__62183_62201__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_62207);

var G__62208 = cljs.core.next.call(null,seq__62183_62201__$1);
var G__62209 = null;
var G__62210 = (0);
var G__62211 = (0);
seq__62183_62191 = G__62208;
chunk__62184_62192 = G__62209;
count__62185_62193 = G__62210;
i__62186_62194 = G__62211;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__33033__auto__ = [];
var len__33026__auto___62216 = arguments.length;
var i__33027__auto___62217 = (0);
while(true){
if((i__33027__auto___62217 < len__33026__auto___62216)){
args__33033__auto__.push((arguments[i__33027__auto___62217]));

var G__62218 = (i__33027__auto___62217 + (1));
i__33027__auto___62217 = G__62218;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__62213){
var map__62214 = p__62213;
var map__62214__$1 = ((((!((map__62214 == null)))?((((map__62214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62214):map__62214);
var opts = map__62214__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq62212){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62212));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e62220){if((e62220 instanceof Error)){
var e = e62220;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e62220;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__62224){
var map__62225 = p__62224;
var map__62225__$1 = ((((!((map__62225 == null)))?((((map__62225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62225):map__62225);
var msg_name = cljs.core.get.call(null,map__62225__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491001416168