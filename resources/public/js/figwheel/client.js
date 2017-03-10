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
var args68254 = [];
var len__35410__auto___68257 = arguments.length;
var i__35411__auto___68258 = (0);
while(true){
if((i__35411__auto___68258 < len__35410__auto___68257)){
args68254.push((arguments[i__35411__auto___68258]));

var G__68259 = (i__35411__auto___68258 + (1));
i__35411__auto___68258 = G__68259;
continue;
} else {
}
break;
}

var G__68256 = args68254.length;
switch (G__68256) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68254.length)].join('')));

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
var args__35417__auto__ = [];
var len__35410__auto___68262 = arguments.length;
var i__35411__auto___68263 = (0);
while(true){
if((i__35411__auto___68263 < len__35410__auto___68262)){
args__35417__auto__.push((arguments[i__35411__auto___68263]));

var G__68264 = (i__35411__auto___68263 + (1));
i__35411__auto___68263 = G__68264;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq68261){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68261));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35417__auto__ = [];
var len__35410__auto___68266 = arguments.length;
var i__35411__auto___68267 = (0);
while(true){
if((i__35411__auto___68267 < len__35410__auto___68266)){
args__35417__auto__.push((arguments[i__35411__auto___68267]));

var G__68268 = (i__35411__auto___68267 + (1));
i__35411__auto___68267 = G__68268;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq68265){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68265));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__68269 = cljs.core._EQ_;
var expr__68270 = (function (){var or__34227__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e68273){if((e68273 instanceof Error)){
var e = e68273;
return false;
} else {
throw e68273;

}
}})();
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__68269.call(null,"true",expr__68270))){
return true;
} else {
if(cljs.core.truth_(pred__68269.call(null,"false",expr__68270))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__68270)].join('')));
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
}catch (e68275){if((e68275 instanceof Error)){
var e = e68275;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e68275;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__68276){
var map__68279 = p__68276;
var map__68279__$1 = ((((!((map__68279 == null)))?((((map__68279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68279):map__68279);
var message = cljs.core.get.call(null,map__68279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__68279__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34227__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34215__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34215__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34215__auto__;
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
var c__42763__auto___68441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___68441,ch){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___68441,ch){
return (function (state_68410){
var state_val_68411 = (state_68410[(1)]);
if((state_val_68411 === (7))){
var inst_68406 = (state_68410[(2)]);
var state_68410__$1 = state_68410;
var statearr_68412_68442 = state_68410__$1;
(statearr_68412_68442[(2)] = inst_68406);

(statearr_68412_68442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (1))){
var state_68410__$1 = state_68410;
var statearr_68413_68443 = state_68410__$1;
(statearr_68413_68443[(2)] = null);

(statearr_68413_68443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (4))){
var inst_68363 = (state_68410[(7)]);
var inst_68363__$1 = (state_68410[(2)]);
var state_68410__$1 = (function (){var statearr_68414 = state_68410;
(statearr_68414[(7)] = inst_68363__$1);

return statearr_68414;
})();
if(cljs.core.truth_(inst_68363__$1)){
var statearr_68415_68444 = state_68410__$1;
(statearr_68415_68444[(1)] = (5));

} else {
var statearr_68416_68445 = state_68410__$1;
(statearr_68416_68445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (15))){
var inst_68370 = (state_68410[(8)]);
var inst_68385 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68370);
var inst_68386 = cljs.core.first.call(null,inst_68385);
var inst_68387 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_68386);
var inst_68388 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_68387)].join('');
var inst_68389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_68388);
var state_68410__$1 = state_68410;
var statearr_68417_68446 = state_68410__$1;
(statearr_68417_68446[(2)] = inst_68389);

(statearr_68417_68446[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (13))){
var inst_68394 = (state_68410[(2)]);
var state_68410__$1 = state_68410;
var statearr_68418_68447 = state_68410__$1;
(statearr_68418_68447[(2)] = inst_68394);

(statearr_68418_68447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (6))){
var state_68410__$1 = state_68410;
var statearr_68419_68448 = state_68410__$1;
(statearr_68419_68448[(2)] = null);

(statearr_68419_68448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (17))){
var inst_68392 = (state_68410[(2)]);
var state_68410__$1 = state_68410;
var statearr_68420_68449 = state_68410__$1;
(statearr_68420_68449[(2)] = inst_68392);

(statearr_68420_68449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (3))){
var inst_68408 = (state_68410[(2)]);
var state_68410__$1 = state_68410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68410__$1,inst_68408);
} else {
if((state_val_68411 === (12))){
var inst_68369 = (state_68410[(9)]);
var inst_68383 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_68369,opts);
var state_68410__$1 = state_68410;
if(cljs.core.truth_(inst_68383)){
var statearr_68421_68450 = state_68410__$1;
(statearr_68421_68450[(1)] = (15));

} else {
var statearr_68422_68451 = state_68410__$1;
(statearr_68422_68451[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (2))){
var state_68410__$1 = state_68410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68410__$1,(4),ch);
} else {
if((state_val_68411 === (11))){
var inst_68370 = (state_68410[(8)]);
var inst_68375 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68376 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_68370);
var inst_68377 = cljs.core.async.timeout.call(null,(1000));
var inst_68378 = [inst_68376,inst_68377];
var inst_68379 = (new cljs.core.PersistentVector(null,2,(5),inst_68375,inst_68378,null));
var state_68410__$1 = state_68410;
return cljs.core.async.ioc_alts_BANG_.call(null,state_68410__$1,(14),inst_68379);
} else {
if((state_val_68411 === (9))){
var inst_68370 = (state_68410[(8)]);
var inst_68396 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_68397 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68370);
var inst_68398 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_68397);
var inst_68399 = [cljs.core.str("Not loading: "),cljs.core.str(inst_68398)].join('');
var inst_68400 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_68399);
var state_68410__$1 = (function (){var statearr_68423 = state_68410;
(statearr_68423[(10)] = inst_68396);

return statearr_68423;
})();
var statearr_68424_68452 = state_68410__$1;
(statearr_68424_68452[(2)] = inst_68400);

(statearr_68424_68452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (5))){
var inst_68363 = (state_68410[(7)]);
var inst_68365 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_68366 = (new cljs.core.PersistentArrayMap(null,2,inst_68365,null));
var inst_68367 = (new cljs.core.PersistentHashSet(null,inst_68366,null));
var inst_68368 = figwheel.client.focus_msgs.call(null,inst_68367,inst_68363);
var inst_68369 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_68368);
var inst_68370 = cljs.core.first.call(null,inst_68368);
var inst_68371 = figwheel.client.autoload_QMARK_.call(null);
var state_68410__$1 = (function (){var statearr_68425 = state_68410;
(statearr_68425[(8)] = inst_68370);

(statearr_68425[(9)] = inst_68369);

return statearr_68425;
})();
if(cljs.core.truth_(inst_68371)){
var statearr_68426_68453 = state_68410__$1;
(statearr_68426_68453[(1)] = (8));

} else {
var statearr_68427_68454 = state_68410__$1;
(statearr_68427_68454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (14))){
var inst_68381 = (state_68410[(2)]);
var state_68410__$1 = state_68410;
var statearr_68428_68455 = state_68410__$1;
(statearr_68428_68455[(2)] = inst_68381);

(statearr_68428_68455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (16))){
var state_68410__$1 = state_68410;
var statearr_68429_68456 = state_68410__$1;
(statearr_68429_68456[(2)] = null);

(statearr_68429_68456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (10))){
var inst_68402 = (state_68410[(2)]);
var state_68410__$1 = (function (){var statearr_68430 = state_68410;
(statearr_68430[(11)] = inst_68402);

return statearr_68430;
})();
var statearr_68431_68457 = state_68410__$1;
(statearr_68431_68457[(2)] = null);

(statearr_68431_68457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68411 === (8))){
var inst_68369 = (state_68410[(9)]);
var inst_68373 = figwheel.client.reload_file_state_QMARK_.call(null,inst_68369,opts);
var state_68410__$1 = state_68410;
if(cljs.core.truth_(inst_68373)){
var statearr_68432_68458 = state_68410__$1;
(statearr_68432_68458[(1)] = (11));

} else {
var statearr_68433_68459 = state_68410__$1;
(statearr_68433_68459[(1)] = (12));

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
});})(c__42763__auto___68441,ch))
;
return ((function (switch__42740__auto__,c__42763__auto___68441,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42741__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42741__auto____0 = (function (){
var statearr_68437 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68437[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42741__auto__);

(statearr_68437[(1)] = (1));

return statearr_68437;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42741__auto____1 = (function (state_68410){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_68410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e68438){if((e68438 instanceof Object)){
var ex__42744__auto__ = e68438;
var statearr_68439_68460 = state_68410;
(statearr_68439_68460[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68461 = state_68410;
state_68410 = G__68461;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42741__auto__ = function(state_68410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42741__auto____1.call(this,state_68410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42741__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42741__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___68441,ch))
})();
var state__42765__auto__ = (function (){var statearr_68440 = f__42764__auto__.call(null);
(statearr_68440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___68441);

return statearr_68440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___68441,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__68462_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__68462_SHARP_));
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
var base_path_68465 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_68465){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e68464){if((e68464 instanceof Error)){
var e = e68464;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_68465], null));
} else {
var e = e68464;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_68465))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__68466){
var map__68475 = p__68466;
var map__68475__$1 = ((((!((map__68475 == null)))?((((map__68475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68475):map__68475);
var opts = map__68475__$1;
var build_id = cljs.core.get.call(null,map__68475__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__68475,map__68475__$1,opts,build_id){
return (function (p__68477){
var vec__68478 = p__68477;
var seq__68479 = cljs.core.seq.call(null,vec__68478);
var first__68480 = cljs.core.first.call(null,seq__68479);
var seq__68479__$1 = cljs.core.next.call(null,seq__68479);
var map__68481 = first__68480;
var map__68481__$1 = ((((!((map__68481 == null)))?((((map__68481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68481):map__68481);
var msg = map__68481__$1;
var msg_name = cljs.core.get.call(null,map__68481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68479__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__68478,seq__68479,first__68480,seq__68479__$1,map__68481,map__68481__$1,msg,msg_name,_,map__68475,map__68475__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__68478,seq__68479,first__68480,seq__68479__$1,map__68481,map__68481__$1,msg,msg_name,_,map__68475,map__68475__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__68475,map__68475__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__68489){
var vec__68490 = p__68489;
var seq__68491 = cljs.core.seq.call(null,vec__68490);
var first__68492 = cljs.core.first.call(null,seq__68491);
var seq__68491__$1 = cljs.core.next.call(null,seq__68491);
var map__68493 = first__68492;
var map__68493__$1 = ((((!((map__68493 == null)))?((((map__68493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68493):map__68493);
var msg = map__68493__$1;
var msg_name = cljs.core.get.call(null,map__68493__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68491__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__68495){
var map__68507 = p__68495;
var map__68507__$1 = ((((!((map__68507 == null)))?((((map__68507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68507):map__68507);
var on_compile_warning = cljs.core.get.call(null,map__68507__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__68507__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__68507,map__68507__$1,on_compile_warning,on_compile_fail){
return (function (p__68509){
var vec__68510 = p__68509;
var seq__68511 = cljs.core.seq.call(null,vec__68510);
var first__68512 = cljs.core.first.call(null,seq__68511);
var seq__68511__$1 = cljs.core.next.call(null,seq__68511);
var map__68513 = first__68512;
var map__68513__$1 = ((((!((map__68513 == null)))?((((map__68513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68513):map__68513);
var msg = map__68513__$1;
var msg_name = cljs.core.get.call(null,map__68513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68511__$1;
var pred__68515 = cljs.core._EQ_;
var expr__68516 = msg_name;
if(cljs.core.truth_(pred__68515.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__68516))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__68515.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__68516))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__68507,map__68507__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,msg_hist,msg_names,msg){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,msg_hist,msg_names,msg){
return (function (state_68724){
var state_val_68725 = (state_68724[(1)]);
if((state_val_68725 === (7))){
var inst_68652 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68652)){
var statearr_68726_68772 = state_68724__$1;
(statearr_68726_68772[(1)] = (8));

} else {
var statearr_68727_68773 = state_68724__$1;
(statearr_68727_68773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (20))){
var inst_68718 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68728_68774 = state_68724__$1;
(statearr_68728_68774[(2)] = inst_68718);

(statearr_68728_68774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (27))){
var inst_68714 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68729_68775 = state_68724__$1;
(statearr_68729_68775[(2)] = inst_68714);

(statearr_68729_68775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (1))){
var inst_68645 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68645)){
var statearr_68730_68776 = state_68724__$1;
(statearr_68730_68776[(1)] = (2));

} else {
var statearr_68731_68777 = state_68724__$1;
(statearr_68731_68777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (24))){
var inst_68716 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68732_68778 = state_68724__$1;
(statearr_68732_68778[(2)] = inst_68716);

(statearr_68732_68778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (4))){
var inst_68722 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68724__$1,inst_68722);
} else {
if((state_val_68725 === (15))){
var inst_68720 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68733_68779 = state_68724__$1;
(statearr_68733_68779[(2)] = inst_68720);

(statearr_68733_68779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (21))){
var inst_68679 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68734_68780 = state_68724__$1;
(statearr_68734_68780[(2)] = inst_68679);

(statearr_68734_68780[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (31))){
var inst_68703 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68703)){
var statearr_68735_68781 = state_68724__$1;
(statearr_68735_68781[(1)] = (34));

} else {
var statearr_68736_68782 = state_68724__$1;
(statearr_68736_68782[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (32))){
var inst_68712 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68737_68783 = state_68724__$1;
(statearr_68737_68783[(2)] = inst_68712);

(statearr_68737_68783[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (33))){
var inst_68701 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68738_68784 = state_68724__$1;
(statearr_68738_68784[(2)] = inst_68701);

(statearr_68738_68784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (13))){
var inst_68666 = figwheel.client.heads_up.clear.call(null);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(16),inst_68666);
} else {
if((state_val_68725 === (22))){
var inst_68683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68684 = figwheel.client.heads_up.append_warning_message.call(null,inst_68683);
var state_68724__$1 = state_68724;
var statearr_68739_68785 = state_68724__$1;
(statearr_68739_68785[(2)] = inst_68684);

(statearr_68739_68785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (36))){
var inst_68710 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68740_68786 = state_68724__$1;
(statearr_68740_68786[(2)] = inst_68710);

(statearr_68740_68786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (29))){
var inst_68694 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68741_68787 = state_68724__$1;
(statearr_68741_68787[(2)] = inst_68694);

(statearr_68741_68787[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (6))){
var inst_68647 = (state_68724[(7)]);
var state_68724__$1 = state_68724;
var statearr_68742_68788 = state_68724__$1;
(statearr_68742_68788[(2)] = inst_68647);

(statearr_68742_68788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (28))){
var inst_68690 = (state_68724[(2)]);
var inst_68691 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68692 = figwheel.client.heads_up.display_warning.call(null,inst_68691);
var state_68724__$1 = (function (){var statearr_68743 = state_68724;
(statearr_68743[(8)] = inst_68690);

return statearr_68743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(29),inst_68692);
} else {
if((state_val_68725 === (25))){
var inst_68688 = figwheel.client.heads_up.clear.call(null);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(28),inst_68688);
} else {
if((state_val_68725 === (34))){
var inst_68705 = figwheel.client.heads_up.flash_loaded.call(null);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(37),inst_68705);
} else {
if((state_val_68725 === (17))){
var inst_68672 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68744_68789 = state_68724__$1;
(statearr_68744_68789[(2)] = inst_68672);

(statearr_68744_68789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (3))){
var inst_68664 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68664)){
var statearr_68745_68790 = state_68724__$1;
(statearr_68745_68790[(1)] = (13));

} else {
var statearr_68746_68791 = state_68724__$1;
(statearr_68746_68791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (12))){
var inst_68660 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68747_68792 = state_68724__$1;
(statearr_68747_68792[(2)] = inst_68660);

(statearr_68747_68792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (2))){
var inst_68647 = (state_68724[(7)]);
var inst_68647__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_68724__$1 = (function (){var statearr_68748 = state_68724;
(statearr_68748[(7)] = inst_68647__$1);

return statearr_68748;
})();
if(cljs.core.truth_(inst_68647__$1)){
var statearr_68749_68793 = state_68724__$1;
(statearr_68749_68793[(1)] = (5));

} else {
var statearr_68750_68794 = state_68724__$1;
(statearr_68750_68794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (23))){
var inst_68686 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68686)){
var statearr_68751_68795 = state_68724__$1;
(statearr_68751_68795[(1)] = (25));

} else {
var statearr_68752_68796 = state_68724__$1;
(statearr_68752_68796[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (35))){
var state_68724__$1 = state_68724;
var statearr_68753_68797 = state_68724__$1;
(statearr_68753_68797[(2)] = null);

(statearr_68753_68797[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (19))){
var inst_68681 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68681)){
var statearr_68754_68798 = state_68724__$1;
(statearr_68754_68798[(1)] = (22));

} else {
var statearr_68755_68799 = state_68724__$1;
(statearr_68755_68799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (11))){
var inst_68656 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68756_68800 = state_68724__$1;
(statearr_68756_68800[(2)] = inst_68656);

(statearr_68756_68800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (9))){
var inst_68658 = figwheel.client.heads_up.clear.call(null);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(12),inst_68658);
} else {
if((state_val_68725 === (5))){
var inst_68649 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_68724__$1 = state_68724;
var statearr_68757_68801 = state_68724__$1;
(statearr_68757_68801[(2)] = inst_68649);

(statearr_68757_68801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (14))){
var inst_68674 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68674)){
var statearr_68758_68802 = state_68724__$1;
(statearr_68758_68802[(1)] = (18));

} else {
var statearr_68759_68803 = state_68724__$1;
(statearr_68759_68803[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (26))){
var inst_68696 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_68724__$1 = state_68724;
if(cljs.core.truth_(inst_68696)){
var statearr_68760_68804 = state_68724__$1;
(statearr_68760_68804[(1)] = (30));

} else {
var statearr_68761_68805 = state_68724__$1;
(statearr_68761_68805[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (16))){
var inst_68668 = (state_68724[(2)]);
var inst_68669 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68670 = figwheel.client.heads_up.display_exception.call(null,inst_68669);
var state_68724__$1 = (function (){var statearr_68762 = state_68724;
(statearr_68762[(9)] = inst_68668);

return statearr_68762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(17),inst_68670);
} else {
if((state_val_68725 === (30))){
var inst_68698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68699 = figwheel.client.heads_up.display_warning.call(null,inst_68698);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(33),inst_68699);
} else {
if((state_val_68725 === (10))){
var inst_68662 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68763_68806 = state_68724__$1;
(statearr_68763_68806[(2)] = inst_68662);

(statearr_68763_68806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (18))){
var inst_68676 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68677 = figwheel.client.heads_up.display_exception.call(null,inst_68676);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(21),inst_68677);
} else {
if((state_val_68725 === (37))){
var inst_68707 = (state_68724[(2)]);
var state_68724__$1 = state_68724;
var statearr_68764_68807 = state_68724__$1;
(statearr_68764_68807[(2)] = inst_68707);

(statearr_68764_68807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68725 === (8))){
var inst_68654 = figwheel.client.heads_up.flash_loaded.call(null);
var state_68724__$1 = state_68724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68724__$1,(11),inst_68654);
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
});})(c__42763__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__42740__auto__,c__42763__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto____0 = (function (){
var statearr_68768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68768[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto__);

(statearr_68768[(1)] = (1));

return statearr_68768;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto____1 = (function (state_68724){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_68724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e68769){if((e68769 instanceof Object)){
var ex__42744__auto__ = e68769;
var statearr_68770_68808 = state_68724;
(statearr_68770_68808[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68809 = state_68724;
state_68724 = G__68809;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto__ = function(state_68724){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto____1.call(this,state_68724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,msg_hist,msg_names,msg))
})();
var state__42765__auto__ = (function (){var statearr_68771 = f__42764__auto__.call(null);
(statearr_68771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_68771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,msg_hist,msg_names,msg))
);

return c__42763__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__42763__auto___68872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___68872,ch){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___68872,ch){
return (function (state_68855){
var state_val_68856 = (state_68855[(1)]);
if((state_val_68856 === (1))){
var state_68855__$1 = state_68855;
var statearr_68857_68873 = state_68855__$1;
(statearr_68857_68873[(2)] = null);

(statearr_68857_68873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68856 === (2))){
var state_68855__$1 = state_68855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68855__$1,(4),ch);
} else {
if((state_val_68856 === (3))){
var inst_68853 = (state_68855[(2)]);
var state_68855__$1 = state_68855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68855__$1,inst_68853);
} else {
if((state_val_68856 === (4))){
var inst_68843 = (state_68855[(7)]);
var inst_68843__$1 = (state_68855[(2)]);
var state_68855__$1 = (function (){var statearr_68858 = state_68855;
(statearr_68858[(7)] = inst_68843__$1);

return statearr_68858;
})();
if(cljs.core.truth_(inst_68843__$1)){
var statearr_68859_68874 = state_68855__$1;
(statearr_68859_68874[(1)] = (5));

} else {
var statearr_68860_68875 = state_68855__$1;
(statearr_68860_68875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68856 === (5))){
var inst_68843 = (state_68855[(7)]);
var inst_68845 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_68843);
var state_68855__$1 = state_68855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68855__$1,(8),inst_68845);
} else {
if((state_val_68856 === (6))){
var state_68855__$1 = state_68855;
var statearr_68861_68876 = state_68855__$1;
(statearr_68861_68876[(2)] = null);

(statearr_68861_68876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68856 === (7))){
var inst_68851 = (state_68855[(2)]);
var state_68855__$1 = state_68855;
var statearr_68862_68877 = state_68855__$1;
(statearr_68862_68877[(2)] = inst_68851);

(statearr_68862_68877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68856 === (8))){
var inst_68847 = (state_68855[(2)]);
var state_68855__$1 = (function (){var statearr_68863 = state_68855;
(statearr_68863[(8)] = inst_68847);

return statearr_68863;
})();
var statearr_68864_68878 = state_68855__$1;
(statearr_68864_68878[(2)] = null);

(statearr_68864_68878[(1)] = (2));


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
});})(c__42763__auto___68872,ch))
;
return ((function (switch__42740__auto__,c__42763__auto___68872,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42741__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42741__auto____0 = (function (){
var statearr_68868 = [null,null,null,null,null,null,null,null,null];
(statearr_68868[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42741__auto__);

(statearr_68868[(1)] = (1));

return statearr_68868;
});
var figwheel$client$heads_up_plugin_$_state_machine__42741__auto____1 = (function (state_68855){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_68855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e68869){if((e68869 instanceof Object)){
var ex__42744__auto__ = e68869;
var statearr_68870_68879 = state_68855;
(statearr_68870_68879[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68880 = state_68855;
state_68855 = G__68880;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42741__auto__ = function(state_68855){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42741__auto____1.call(this,state_68855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42741__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42741__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___68872,ch))
})();
var state__42765__auto__ = (function (){var statearr_68871 = f__42764__auto__.call(null);
(statearr_68871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___68872);

return statearr_68871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___68872,ch))
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
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_68901){
var state_val_68902 = (state_68901[(1)]);
if((state_val_68902 === (1))){
var inst_68896 = cljs.core.async.timeout.call(null,(3000));
var state_68901__$1 = state_68901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68901__$1,(2),inst_68896);
} else {
if((state_val_68902 === (2))){
var inst_68898 = (state_68901[(2)]);
var inst_68899 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_68901__$1 = (function (){var statearr_68903 = state_68901;
(statearr_68903[(7)] = inst_68898);

return statearr_68903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68901__$1,inst_68899);
} else {
return null;
}
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42741__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42741__auto____0 = (function (){
var statearr_68907 = [null,null,null,null,null,null,null,null];
(statearr_68907[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42741__auto__);

(statearr_68907[(1)] = (1));

return statearr_68907;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42741__auto____1 = (function (state_68901){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_68901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e68908){if((e68908 instanceof Object)){
var ex__42744__auto__ = e68908;
var statearr_68909_68911 = state_68901;
(statearr_68909_68911[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68912 = state_68901;
state_68901 = G__68912;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42741__auto__ = function(state_68901){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42741__auto____1.call(this,state_68901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42741__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42741__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_68910 = f__42764__auto__.call(null);
(statearr_68910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_68910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
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
var temp__6728__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6728__auto__)){
var figwheel_version = temp__6728__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,figwheel_version,temp__6728__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,figwheel_version,temp__6728__auto__){
return (function (state_68935){
var state_val_68936 = (state_68935[(1)]);
if((state_val_68936 === (1))){
var inst_68929 = cljs.core.async.timeout.call(null,(2000));
var state_68935__$1 = state_68935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68935__$1,(2),inst_68929);
} else {
if((state_val_68936 === (2))){
var inst_68931 = (state_68935[(2)]);
var inst_68932 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_68933 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_68932);
var state_68935__$1 = (function (){var statearr_68937 = state_68935;
(statearr_68937[(7)] = inst_68931);

return statearr_68937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68935__$1,inst_68933);
} else {
return null;
}
}
});})(c__42763__auto__,figwheel_version,temp__6728__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__,figwheel_version,temp__6728__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto____0 = (function (){
var statearr_68941 = [null,null,null,null,null,null,null,null];
(statearr_68941[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto__);

(statearr_68941[(1)] = (1));

return statearr_68941;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto____1 = (function (state_68935){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_68935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e68942){if((e68942 instanceof Object)){
var ex__42744__auto__ = e68942;
var statearr_68943_68945 = state_68935;
(statearr_68943_68945[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68946 = state_68935;
state_68935 = G__68946;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto__ = function(state_68935){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto____1.call(this,state_68935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,figwheel_version,temp__6728__auto__))
})();
var state__42765__auto__ = (function (){var statearr_68944 = f__42764__auto__.call(null);
(statearr_68944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_68944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,figwheel_version,temp__6728__auto__))
);

return c__42763__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__68947){
var map__68951 = p__68947;
var map__68951__$1 = ((((!((map__68951 == null)))?((((map__68951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68951):map__68951);
var file = cljs.core.get.call(null,map__68951__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__68951__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__68951__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__68953 = "";
var G__68953__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__68953),cljs.core.str("file "),cljs.core.str(file)].join(''):G__68953);
var G__68953__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__68953__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__68953__$1);
if(cljs.core.truth_((function (){var and__34215__auto__ = line;
if(cljs.core.truth_(and__34215__auto__)){
return column;
} else {
return and__34215__auto__;
}
})())){
return [cljs.core.str(G__68953__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__68953__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__68954){
var map__68961 = p__68954;
var map__68961__$1 = ((((!((map__68961 == null)))?((((map__68961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68961):map__68961);
var ed = map__68961__$1;
var formatted_exception = cljs.core.get.call(null,map__68961__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__68961__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__68961__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__68963_68967 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__68964_68968 = null;
var count__68965_68969 = (0);
var i__68966_68970 = (0);
while(true){
if((i__68966_68970 < count__68965_68969)){
var msg_68971 = cljs.core._nth.call(null,chunk__68964_68968,i__68966_68970);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_68971);

var G__68972 = seq__68963_68967;
var G__68973 = chunk__68964_68968;
var G__68974 = count__68965_68969;
var G__68975 = (i__68966_68970 + (1));
seq__68963_68967 = G__68972;
chunk__68964_68968 = G__68973;
count__68965_68969 = G__68974;
i__68966_68970 = G__68975;
continue;
} else {
var temp__6728__auto___68976 = cljs.core.seq.call(null,seq__68963_68967);
if(temp__6728__auto___68976){
var seq__68963_68977__$1 = temp__6728__auto___68976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68963_68977__$1)){
var c__35130__auto___68978 = cljs.core.chunk_first.call(null,seq__68963_68977__$1);
var G__68979 = cljs.core.chunk_rest.call(null,seq__68963_68977__$1);
var G__68980 = c__35130__auto___68978;
var G__68981 = cljs.core.count.call(null,c__35130__auto___68978);
var G__68982 = (0);
seq__68963_68967 = G__68979;
chunk__68964_68968 = G__68980;
count__68965_68969 = G__68981;
i__68966_68970 = G__68982;
continue;
} else {
var msg_68983 = cljs.core.first.call(null,seq__68963_68977__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_68983);

var G__68984 = cljs.core.next.call(null,seq__68963_68977__$1);
var G__68985 = null;
var G__68986 = (0);
var G__68987 = (0);
seq__68963_68967 = G__68984;
chunk__68964_68968 = G__68985;
count__68965_68969 = G__68986;
i__68966_68970 = G__68987;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__68988){
var map__68991 = p__68988;
var map__68991__$1 = ((((!((map__68991 == null)))?((((map__68991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68991):map__68991);
var w = map__68991__$1;
var message = cljs.core.get.call(null,map__68991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__34215__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34215__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34215__auto__;
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
var seq__69003 = cljs.core.seq.call(null,plugins);
var chunk__69004 = null;
var count__69005 = (0);
var i__69006 = (0);
while(true){
if((i__69006 < count__69005)){
var vec__69007 = cljs.core._nth.call(null,chunk__69004,i__69006);
var k = cljs.core.nth.call(null,vec__69007,(0),null);
var plugin = cljs.core.nth.call(null,vec__69007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69003,chunk__69004,count__69005,i__69006,pl_69013,vec__69007,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_69013.call(null,msg_hist);
});})(seq__69003,chunk__69004,count__69005,i__69006,pl_69013,vec__69007,k,plugin))
);
} else {
}

var G__69014 = seq__69003;
var G__69015 = chunk__69004;
var G__69016 = count__69005;
var G__69017 = (i__69006 + (1));
seq__69003 = G__69014;
chunk__69004 = G__69015;
count__69005 = G__69016;
i__69006 = G__69017;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__69003);
if(temp__6728__auto__){
var seq__69003__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69003__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__69003__$1);
var G__69018 = cljs.core.chunk_rest.call(null,seq__69003__$1);
var G__69019 = c__35130__auto__;
var G__69020 = cljs.core.count.call(null,c__35130__auto__);
var G__69021 = (0);
seq__69003 = G__69018;
chunk__69004 = G__69019;
count__69005 = G__69020;
i__69006 = G__69021;
continue;
} else {
var vec__69010 = cljs.core.first.call(null,seq__69003__$1);
var k = cljs.core.nth.call(null,vec__69010,(0),null);
var plugin = cljs.core.nth.call(null,vec__69010,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69003,chunk__69004,count__69005,i__69006,pl_69022,vec__69010,k,plugin,seq__69003__$1,temp__6728__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_69022.call(null,msg_hist);
});})(seq__69003,chunk__69004,count__69005,i__69006,pl_69022,vec__69010,k,plugin,seq__69003__$1,temp__6728__auto__))
);
} else {
}

var G__69023 = cljs.core.next.call(null,seq__69003__$1);
var G__69024 = null;
var G__69025 = (0);
var G__69026 = (0);
seq__69003 = G__69023;
chunk__69004 = G__69024;
count__69005 = G__69025;
i__69006 = G__69026;
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
var args69027 = [];
var len__35410__auto___69034 = arguments.length;
var i__35411__auto___69035 = (0);
while(true){
if((i__35411__auto___69035 < len__35410__auto___69034)){
args69027.push((arguments[i__35411__auto___69035]));

var G__69036 = (i__35411__auto___69035 + (1));
i__35411__auto___69035 = G__69036;
continue;
} else {
}
break;
}

var G__69029 = args69027.length;
switch (G__69029) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69027.length)].join('')));

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

var seq__69030_69038 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__69031_69039 = null;
var count__69032_69040 = (0);
var i__69033_69041 = (0);
while(true){
if((i__69033_69041 < count__69032_69040)){
var msg_69042 = cljs.core._nth.call(null,chunk__69031_69039,i__69033_69041);
figwheel.client.socket.handle_incoming_message.call(null,msg_69042);

var G__69043 = seq__69030_69038;
var G__69044 = chunk__69031_69039;
var G__69045 = count__69032_69040;
var G__69046 = (i__69033_69041 + (1));
seq__69030_69038 = G__69043;
chunk__69031_69039 = G__69044;
count__69032_69040 = G__69045;
i__69033_69041 = G__69046;
continue;
} else {
var temp__6728__auto___69047 = cljs.core.seq.call(null,seq__69030_69038);
if(temp__6728__auto___69047){
var seq__69030_69048__$1 = temp__6728__auto___69047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69030_69048__$1)){
var c__35130__auto___69049 = cljs.core.chunk_first.call(null,seq__69030_69048__$1);
var G__69050 = cljs.core.chunk_rest.call(null,seq__69030_69048__$1);
var G__69051 = c__35130__auto___69049;
var G__69052 = cljs.core.count.call(null,c__35130__auto___69049);
var G__69053 = (0);
seq__69030_69038 = G__69050;
chunk__69031_69039 = G__69051;
count__69032_69040 = G__69052;
i__69033_69041 = G__69053;
continue;
} else {
var msg_69054 = cljs.core.first.call(null,seq__69030_69048__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_69054);

var G__69055 = cljs.core.next.call(null,seq__69030_69048__$1);
var G__69056 = null;
var G__69057 = (0);
var G__69058 = (0);
seq__69030_69038 = G__69055;
chunk__69031_69039 = G__69056;
count__69032_69040 = G__69057;
i__69033_69041 = G__69058;
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
var args__35417__auto__ = [];
var len__35410__auto___69063 = arguments.length;
var i__35411__auto___69064 = (0);
while(true){
if((i__35411__auto___69064 < len__35410__auto___69063)){
args__35417__auto__.push((arguments[i__35411__auto___69064]));

var G__69065 = (i__35411__auto___69064 + (1));
i__35411__auto___69064 = G__69065;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__69060){
var map__69061 = p__69060;
var map__69061__$1 = ((((!((map__69061 == null)))?((((map__69061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69061):map__69061);
var opts = map__69061__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq69059){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69059));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e69067){if((e69067 instanceof Error)){
var e = e69067;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e69067;

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
return (function (p__69071){
var map__69072 = p__69071;
var map__69072__$1 = ((((!((map__69072 == null)))?((((map__69072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69072):map__69072);
var msg_name = cljs.core.get.call(null,map__69072__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489120098704