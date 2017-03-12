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
var args496480 = [];
var len__32954__auto___496483 = arguments.length;
var i__32955__auto___496484 = (0);
while(true){
if((i__32955__auto___496484 < len__32954__auto___496483)){
args496480.push((arguments[i__32955__auto___496484]));

var G__496485 = (i__32955__auto___496484 + (1));
i__32955__auto___496484 = G__496485;
continue;
} else {
}
break;
}

var G__496482 = args496480.length;
switch (G__496482) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args496480.length)].join('')));

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
var args__32961__auto__ = [];
var len__32954__auto___496488 = arguments.length;
var i__32955__auto___496489 = (0);
while(true){
if((i__32955__auto___496489 < len__32954__auto___496488)){
args__32961__auto__.push((arguments[i__32955__auto___496489]));

var G__496490 = (i__32955__auto___496489 + (1));
i__32955__auto___496489 = G__496490;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq496487){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq496487));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__32961__auto__ = [];
var len__32954__auto___496492 = arguments.length;
var i__32955__auto___496493 = (0);
while(true){
if((i__32955__auto___496493 < len__32954__auto___496492)){
args__32961__auto__.push((arguments[i__32955__auto___496493]));

var G__496494 = (i__32955__auto___496493 + (1));
i__32955__auto___496493 = G__496494;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq496491){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq496491));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__496495 = cljs.core._EQ_;
var expr__496496 = (function (){var or__31879__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e496499){if((e496499 instanceof Error)){
var e = e496499;
return false;
} else {
throw e496499;

}
}})();
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__496495.call(null,"true",expr__496496))){
return true;
} else {
if(cljs.core.truth_(pred__496495.call(null,"false",expr__496496))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__496496)].join('')));
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
}catch (e496501){if((e496501 instanceof Error)){
var e = e496501;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e496501;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__496502){
var map__496505 = p__496502;
var map__496505__$1 = ((((!((map__496505 == null)))?((((map__496505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496505):map__496505);
var message = cljs.core.get.call(null,map__496505__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__496505__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__31879__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__31867__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__31867__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__31867__auto__;
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
var c__38812__auto___496667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___496667,ch){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___496667,ch){
return (function (state_496636){
var state_val_496637 = (state_496636[(1)]);
if((state_val_496637 === (7))){
var inst_496632 = (state_496636[(2)]);
var state_496636__$1 = state_496636;
var statearr_496638_496668 = state_496636__$1;
(statearr_496638_496668[(2)] = inst_496632);

(statearr_496638_496668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (1))){
var state_496636__$1 = state_496636;
var statearr_496639_496669 = state_496636__$1;
(statearr_496639_496669[(2)] = null);

(statearr_496639_496669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (4))){
var inst_496589 = (state_496636[(7)]);
var inst_496589__$1 = (state_496636[(2)]);
var state_496636__$1 = (function (){var statearr_496640 = state_496636;
(statearr_496640[(7)] = inst_496589__$1);

return statearr_496640;
})();
if(cljs.core.truth_(inst_496589__$1)){
var statearr_496641_496670 = state_496636__$1;
(statearr_496641_496670[(1)] = (5));

} else {
var statearr_496642_496671 = state_496636__$1;
(statearr_496642_496671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (15))){
var inst_496596 = (state_496636[(8)]);
var inst_496611 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_496596);
var inst_496612 = cljs.core.first.call(null,inst_496611);
var inst_496613 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_496612);
var inst_496614 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_496613)].join('');
var inst_496615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_496614);
var state_496636__$1 = state_496636;
var statearr_496643_496672 = state_496636__$1;
(statearr_496643_496672[(2)] = inst_496615);

(statearr_496643_496672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (13))){
var inst_496620 = (state_496636[(2)]);
var state_496636__$1 = state_496636;
var statearr_496644_496673 = state_496636__$1;
(statearr_496644_496673[(2)] = inst_496620);

(statearr_496644_496673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (6))){
var state_496636__$1 = state_496636;
var statearr_496645_496674 = state_496636__$1;
(statearr_496645_496674[(2)] = null);

(statearr_496645_496674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (17))){
var inst_496618 = (state_496636[(2)]);
var state_496636__$1 = state_496636;
var statearr_496646_496675 = state_496636__$1;
(statearr_496646_496675[(2)] = inst_496618);

(statearr_496646_496675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (3))){
var inst_496634 = (state_496636[(2)]);
var state_496636__$1 = state_496636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_496636__$1,inst_496634);
} else {
if((state_val_496637 === (12))){
var inst_496595 = (state_496636[(9)]);
var inst_496609 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_496595,opts);
var state_496636__$1 = state_496636;
if(cljs.core.truth_(inst_496609)){
var statearr_496647_496676 = state_496636__$1;
(statearr_496647_496676[(1)] = (15));

} else {
var statearr_496648_496677 = state_496636__$1;
(statearr_496648_496677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (2))){
var state_496636__$1 = state_496636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496636__$1,(4),ch);
} else {
if((state_val_496637 === (11))){
var inst_496596 = (state_496636[(8)]);
var inst_496601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_496602 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_496596);
var inst_496603 = cljs.core.async.timeout.call(null,(1000));
var inst_496604 = [inst_496602,inst_496603];
var inst_496605 = (new cljs.core.PersistentVector(null,2,(5),inst_496601,inst_496604,null));
var state_496636__$1 = state_496636;
return cljs.core.async.ioc_alts_BANG_.call(null,state_496636__$1,(14),inst_496605);
} else {
if((state_val_496637 === (9))){
var inst_496596 = (state_496636[(8)]);
var inst_496622 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_496623 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_496596);
var inst_496624 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_496623);
var inst_496625 = [cljs.core.str("Not loading: "),cljs.core.str(inst_496624)].join('');
var inst_496626 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_496625);
var state_496636__$1 = (function (){var statearr_496649 = state_496636;
(statearr_496649[(10)] = inst_496622);

return statearr_496649;
})();
var statearr_496650_496678 = state_496636__$1;
(statearr_496650_496678[(2)] = inst_496626);

(statearr_496650_496678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (5))){
var inst_496589 = (state_496636[(7)]);
var inst_496591 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_496592 = (new cljs.core.PersistentArrayMap(null,2,inst_496591,null));
var inst_496593 = (new cljs.core.PersistentHashSet(null,inst_496592,null));
var inst_496594 = figwheel.client.focus_msgs.call(null,inst_496593,inst_496589);
var inst_496595 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_496594);
var inst_496596 = cljs.core.first.call(null,inst_496594);
var inst_496597 = figwheel.client.autoload_QMARK_.call(null);
var state_496636__$1 = (function (){var statearr_496651 = state_496636;
(statearr_496651[(9)] = inst_496595);

(statearr_496651[(8)] = inst_496596);

return statearr_496651;
})();
if(cljs.core.truth_(inst_496597)){
var statearr_496652_496679 = state_496636__$1;
(statearr_496652_496679[(1)] = (8));

} else {
var statearr_496653_496680 = state_496636__$1;
(statearr_496653_496680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (14))){
var inst_496607 = (state_496636[(2)]);
var state_496636__$1 = state_496636;
var statearr_496654_496681 = state_496636__$1;
(statearr_496654_496681[(2)] = inst_496607);

(statearr_496654_496681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (16))){
var state_496636__$1 = state_496636;
var statearr_496655_496682 = state_496636__$1;
(statearr_496655_496682[(2)] = null);

(statearr_496655_496682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (10))){
var inst_496628 = (state_496636[(2)]);
var state_496636__$1 = (function (){var statearr_496656 = state_496636;
(statearr_496656[(11)] = inst_496628);

return statearr_496656;
})();
var statearr_496657_496683 = state_496636__$1;
(statearr_496657_496683[(2)] = null);

(statearr_496657_496683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496637 === (8))){
var inst_496595 = (state_496636[(9)]);
var inst_496599 = figwheel.client.reload_file_state_QMARK_.call(null,inst_496595,opts);
var state_496636__$1 = state_496636;
if(cljs.core.truth_(inst_496599)){
var statearr_496658_496684 = state_496636__$1;
(statearr_496658_496684[(1)] = (11));

} else {
var statearr_496659_496685 = state_496636__$1;
(statearr_496659_496685[(1)] = (12));

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
});})(c__38812__auto___496667,ch))
;
return ((function (switch__38700__auto__,c__38812__auto___496667,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____0 = (function (){
var statearr_496663 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_496663[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__);

(statearr_496663[(1)] = (1));

return statearr_496663;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____1 = (function (state_496636){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_496636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e496664){if((e496664 instanceof Object)){
var ex__38704__auto__ = e496664;
var statearr_496665_496686 = state_496636;
(statearr_496665_496686[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_496636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e496664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__496687 = state_496636;
state_496636 = G__496687;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__ = function(state_496636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____1.call(this,state_496636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___496667,ch))
})();
var state__38814__auto__ = (function (){var statearr_496666 = f__38813__auto__.call(null);
(statearr_496666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___496667);

return statearr_496666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___496667,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__496688_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__496688_SHARP_));
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
var base_path_496691 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_496691){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e496690){if((e496690 instanceof Error)){
var e = e496690;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_496691], null));
} else {
var e = e496690;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_496691))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__496692){
var map__496701 = p__496692;
var map__496701__$1 = ((((!((map__496701 == null)))?((((map__496701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496701):map__496701);
var opts = map__496701__$1;
var build_id = cljs.core.get.call(null,map__496701__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__496701,map__496701__$1,opts,build_id){
return (function (p__496703){
var vec__496704 = p__496703;
var seq__496705 = cljs.core.seq.call(null,vec__496704);
var first__496706 = cljs.core.first.call(null,seq__496705);
var seq__496705__$1 = cljs.core.next.call(null,seq__496705);
var map__496707 = first__496706;
var map__496707__$1 = ((((!((map__496707 == null)))?((((map__496707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496707):map__496707);
var msg = map__496707__$1;
var msg_name = cljs.core.get.call(null,map__496707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__496705__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__496704,seq__496705,first__496706,seq__496705__$1,map__496707,map__496707__$1,msg,msg_name,_,map__496701,map__496701__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__496704,seq__496705,first__496706,seq__496705__$1,map__496707,map__496707__$1,msg,msg_name,_,map__496701,map__496701__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__496701,map__496701__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__496715){
var vec__496716 = p__496715;
var seq__496717 = cljs.core.seq.call(null,vec__496716);
var first__496718 = cljs.core.first.call(null,seq__496717);
var seq__496717__$1 = cljs.core.next.call(null,seq__496717);
var map__496719 = first__496718;
var map__496719__$1 = ((((!((map__496719 == null)))?((((map__496719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496719):map__496719);
var msg = map__496719__$1;
var msg_name = cljs.core.get.call(null,map__496719__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__496717__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__496721){
var map__496733 = p__496721;
var map__496733__$1 = ((((!((map__496733 == null)))?((((map__496733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496733):map__496733);
var on_compile_warning = cljs.core.get.call(null,map__496733__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__496733__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__496733,map__496733__$1,on_compile_warning,on_compile_fail){
return (function (p__496735){
var vec__496736 = p__496735;
var seq__496737 = cljs.core.seq.call(null,vec__496736);
var first__496738 = cljs.core.first.call(null,seq__496737);
var seq__496737__$1 = cljs.core.next.call(null,seq__496737);
var map__496739 = first__496738;
var map__496739__$1 = ((((!((map__496739 == null)))?((((map__496739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496739):map__496739);
var msg = map__496739__$1;
var msg_name = cljs.core.get.call(null,map__496739__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__496737__$1;
var pred__496741 = cljs.core._EQ_;
var expr__496742 = msg_name;
if(cljs.core.truth_(pred__496741.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__496742))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__496741.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__496742))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__496733,map__496733__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,msg_hist,msg_names,msg){
return (function (state_496950){
var state_val_496951 = (state_496950[(1)]);
if((state_val_496951 === (7))){
var inst_496878 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496878)){
var statearr_496952_496998 = state_496950__$1;
(statearr_496952_496998[(1)] = (8));

} else {
var statearr_496953_496999 = state_496950__$1;
(statearr_496953_496999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (20))){
var inst_496944 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496954_497000 = state_496950__$1;
(statearr_496954_497000[(2)] = inst_496944);

(statearr_496954_497000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (27))){
var inst_496940 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496955_497001 = state_496950__$1;
(statearr_496955_497001[(2)] = inst_496940);

(statearr_496955_497001[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (1))){
var inst_496871 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496871)){
var statearr_496956_497002 = state_496950__$1;
(statearr_496956_497002[(1)] = (2));

} else {
var statearr_496957_497003 = state_496950__$1;
(statearr_496957_497003[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (24))){
var inst_496942 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496958_497004 = state_496950__$1;
(statearr_496958_497004[(2)] = inst_496942);

(statearr_496958_497004[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (4))){
var inst_496948 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_496950__$1,inst_496948);
} else {
if((state_val_496951 === (15))){
var inst_496946 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496959_497005 = state_496950__$1;
(statearr_496959_497005[(2)] = inst_496946);

(statearr_496959_497005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (21))){
var inst_496905 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496960_497006 = state_496950__$1;
(statearr_496960_497006[(2)] = inst_496905);

(statearr_496960_497006[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (31))){
var inst_496929 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496929)){
var statearr_496961_497007 = state_496950__$1;
(statearr_496961_497007[(1)] = (34));

} else {
var statearr_496962_497008 = state_496950__$1;
(statearr_496962_497008[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (32))){
var inst_496938 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496963_497009 = state_496950__$1;
(statearr_496963_497009[(2)] = inst_496938);

(statearr_496963_497009[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (33))){
var inst_496927 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496964_497010 = state_496950__$1;
(statearr_496964_497010[(2)] = inst_496927);

(statearr_496964_497010[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (13))){
var inst_496892 = figwheel.client.heads_up.clear.call(null);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(16),inst_496892);
} else {
if((state_val_496951 === (22))){
var inst_496909 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_496910 = figwheel.client.heads_up.append_warning_message.call(null,inst_496909);
var state_496950__$1 = state_496950;
var statearr_496965_497011 = state_496950__$1;
(statearr_496965_497011[(2)] = inst_496910);

(statearr_496965_497011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (36))){
var inst_496936 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496966_497012 = state_496950__$1;
(statearr_496966_497012[(2)] = inst_496936);

(statearr_496966_497012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (29))){
var inst_496920 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496967_497013 = state_496950__$1;
(statearr_496967_497013[(2)] = inst_496920);

(statearr_496967_497013[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (6))){
var inst_496873 = (state_496950[(7)]);
var state_496950__$1 = state_496950;
var statearr_496968_497014 = state_496950__$1;
(statearr_496968_497014[(2)] = inst_496873);

(statearr_496968_497014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (28))){
var inst_496916 = (state_496950[(2)]);
var inst_496917 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_496918 = figwheel.client.heads_up.display_warning.call(null,inst_496917);
var state_496950__$1 = (function (){var statearr_496969 = state_496950;
(statearr_496969[(8)] = inst_496916);

return statearr_496969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(29),inst_496918);
} else {
if((state_val_496951 === (25))){
var inst_496914 = figwheel.client.heads_up.clear.call(null);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(28),inst_496914);
} else {
if((state_val_496951 === (34))){
var inst_496931 = figwheel.client.heads_up.flash_loaded.call(null);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(37),inst_496931);
} else {
if((state_val_496951 === (17))){
var inst_496898 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496970_497015 = state_496950__$1;
(statearr_496970_497015[(2)] = inst_496898);

(statearr_496970_497015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (3))){
var inst_496890 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496890)){
var statearr_496971_497016 = state_496950__$1;
(statearr_496971_497016[(1)] = (13));

} else {
var statearr_496972_497017 = state_496950__$1;
(statearr_496972_497017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (12))){
var inst_496886 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496973_497018 = state_496950__$1;
(statearr_496973_497018[(2)] = inst_496886);

(statearr_496973_497018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (2))){
var inst_496873 = (state_496950[(7)]);
var inst_496873__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_496950__$1 = (function (){var statearr_496974 = state_496950;
(statearr_496974[(7)] = inst_496873__$1);

return statearr_496974;
})();
if(cljs.core.truth_(inst_496873__$1)){
var statearr_496975_497019 = state_496950__$1;
(statearr_496975_497019[(1)] = (5));

} else {
var statearr_496976_497020 = state_496950__$1;
(statearr_496976_497020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (23))){
var inst_496912 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496912)){
var statearr_496977_497021 = state_496950__$1;
(statearr_496977_497021[(1)] = (25));

} else {
var statearr_496978_497022 = state_496950__$1;
(statearr_496978_497022[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (35))){
var state_496950__$1 = state_496950;
var statearr_496979_497023 = state_496950__$1;
(statearr_496979_497023[(2)] = null);

(statearr_496979_497023[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (19))){
var inst_496907 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496907)){
var statearr_496980_497024 = state_496950__$1;
(statearr_496980_497024[(1)] = (22));

} else {
var statearr_496981_497025 = state_496950__$1;
(statearr_496981_497025[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (11))){
var inst_496882 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496982_497026 = state_496950__$1;
(statearr_496982_497026[(2)] = inst_496882);

(statearr_496982_497026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (9))){
var inst_496884 = figwheel.client.heads_up.clear.call(null);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(12),inst_496884);
} else {
if((state_val_496951 === (5))){
var inst_496875 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_496950__$1 = state_496950;
var statearr_496983_497027 = state_496950__$1;
(statearr_496983_497027[(2)] = inst_496875);

(statearr_496983_497027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (14))){
var inst_496900 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496900)){
var statearr_496984_497028 = state_496950__$1;
(statearr_496984_497028[(1)] = (18));

} else {
var statearr_496985_497029 = state_496950__$1;
(statearr_496985_497029[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (26))){
var inst_496922 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_496950__$1 = state_496950;
if(cljs.core.truth_(inst_496922)){
var statearr_496986_497030 = state_496950__$1;
(statearr_496986_497030[(1)] = (30));

} else {
var statearr_496987_497031 = state_496950__$1;
(statearr_496987_497031[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (16))){
var inst_496894 = (state_496950[(2)]);
var inst_496895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_496896 = figwheel.client.heads_up.display_exception.call(null,inst_496895);
var state_496950__$1 = (function (){var statearr_496988 = state_496950;
(statearr_496988[(9)] = inst_496894);

return statearr_496988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(17),inst_496896);
} else {
if((state_val_496951 === (30))){
var inst_496924 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_496925 = figwheel.client.heads_up.display_warning.call(null,inst_496924);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(33),inst_496925);
} else {
if((state_val_496951 === (10))){
var inst_496888 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496989_497032 = state_496950__$1;
(statearr_496989_497032[(2)] = inst_496888);

(statearr_496989_497032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (18))){
var inst_496902 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_496903 = figwheel.client.heads_up.display_exception.call(null,inst_496902);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(21),inst_496903);
} else {
if((state_val_496951 === (37))){
var inst_496933 = (state_496950[(2)]);
var state_496950__$1 = state_496950;
var statearr_496990_497033 = state_496950__$1;
(statearr_496990_497033[(2)] = inst_496933);

(statearr_496990_497033[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_496951 === (8))){
var inst_496880 = figwheel.client.heads_up.flash_loaded.call(null);
var state_496950__$1 = state_496950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496950__$1,(11),inst_496880);
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
});})(c__38812__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38700__auto__,c__38812__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____0 = (function (){
var statearr_496994 = [null,null,null,null,null,null,null,null,null,null];
(statearr_496994[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__);

(statearr_496994[(1)] = (1));

return statearr_496994;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____1 = (function (state_496950){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_496950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e496995){if((e496995 instanceof Object)){
var ex__38704__auto__ = e496995;
var statearr_496996_497034 = state_496950;
(statearr_496996_497034[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_496950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e496995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__497035 = state_496950;
state_496950 = G__497035;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__ = function(state_496950){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____1.call(this,state_496950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,msg_hist,msg_names,msg))
})();
var state__38814__auto__ = (function (){var statearr_496997 = f__38813__auto__.call(null);
(statearr_496997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_496997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,msg_hist,msg_names,msg))
);

return c__38812__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38812__auto___497098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___497098,ch){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___497098,ch){
return (function (state_497081){
var state_val_497082 = (state_497081[(1)]);
if((state_val_497082 === (1))){
var state_497081__$1 = state_497081;
var statearr_497083_497099 = state_497081__$1;
(statearr_497083_497099[(2)] = null);

(statearr_497083_497099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_497082 === (2))){
var state_497081__$1 = state_497081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_497081__$1,(4),ch);
} else {
if((state_val_497082 === (3))){
var inst_497079 = (state_497081[(2)]);
var state_497081__$1 = state_497081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_497081__$1,inst_497079);
} else {
if((state_val_497082 === (4))){
var inst_497069 = (state_497081[(7)]);
var inst_497069__$1 = (state_497081[(2)]);
var state_497081__$1 = (function (){var statearr_497084 = state_497081;
(statearr_497084[(7)] = inst_497069__$1);

return statearr_497084;
})();
if(cljs.core.truth_(inst_497069__$1)){
var statearr_497085_497100 = state_497081__$1;
(statearr_497085_497100[(1)] = (5));

} else {
var statearr_497086_497101 = state_497081__$1;
(statearr_497086_497101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_497082 === (5))){
var inst_497069 = (state_497081[(7)]);
var inst_497071 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_497069);
var state_497081__$1 = state_497081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_497081__$1,(8),inst_497071);
} else {
if((state_val_497082 === (6))){
var state_497081__$1 = state_497081;
var statearr_497087_497102 = state_497081__$1;
(statearr_497087_497102[(2)] = null);

(statearr_497087_497102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_497082 === (7))){
var inst_497077 = (state_497081[(2)]);
var state_497081__$1 = state_497081;
var statearr_497088_497103 = state_497081__$1;
(statearr_497088_497103[(2)] = inst_497077);

(statearr_497088_497103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_497082 === (8))){
var inst_497073 = (state_497081[(2)]);
var state_497081__$1 = (function (){var statearr_497089 = state_497081;
(statearr_497089[(8)] = inst_497073);

return statearr_497089;
})();
var statearr_497090_497104 = state_497081__$1;
(statearr_497090_497104[(2)] = null);

(statearr_497090_497104[(1)] = (2));


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
});})(c__38812__auto___497098,ch))
;
return ((function (switch__38700__auto__,c__38812__auto___497098,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38701__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38701__auto____0 = (function (){
var statearr_497094 = [null,null,null,null,null,null,null,null,null];
(statearr_497094[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38701__auto__);

(statearr_497094[(1)] = (1));

return statearr_497094;
});
var figwheel$client$heads_up_plugin_$_state_machine__38701__auto____1 = (function (state_497081){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_497081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e497095){if((e497095 instanceof Object)){
var ex__38704__auto__ = e497095;
var statearr_497096_497105 = state_497081;
(statearr_497096_497105[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_497081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e497095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__497106 = state_497081;
state_497081 = G__497106;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38701__auto__ = function(state_497081){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38701__auto____1.call(this,state_497081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38701__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38701__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___497098,ch))
})();
var state__38814__auto__ = (function (){var statearr_497097 = f__38813__auto__.call(null);
(statearr_497097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___497098);

return statearr_497097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___497098,ch))
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
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_497127){
var state_val_497128 = (state_497127[(1)]);
if((state_val_497128 === (1))){
var inst_497122 = cljs.core.async.timeout.call(null,(3000));
var state_497127__$1 = state_497127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_497127__$1,(2),inst_497122);
} else {
if((state_val_497128 === (2))){
var inst_497124 = (state_497127[(2)]);
var inst_497125 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_497127__$1 = (function (){var statearr_497129 = state_497127;
(statearr_497129[(7)] = inst_497124);

return statearr_497129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_497127__$1,inst_497125);
} else {
return null;
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____0 = (function (){
var statearr_497133 = [null,null,null,null,null,null,null,null];
(statearr_497133[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__);

(statearr_497133[(1)] = (1));

return statearr_497133;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____1 = (function (state_497127){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_497127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e497134){if((e497134 instanceof Object)){
var ex__38704__auto__ = e497134;
var statearr_497135_497137 = state_497127;
(statearr_497135_497137[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_497127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e497134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__497138 = state_497127;
state_497127 = G__497138;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__ = function(state_497127){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____1.call(this,state_497127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_497136 = f__38813__auto__.call(null);
(statearr_497136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_497136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
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
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,figwheel_version,temp__4657__auto__){
return (function (state_497161){
var state_val_497162 = (state_497161[(1)]);
if((state_val_497162 === (1))){
var inst_497155 = cljs.core.async.timeout.call(null,(2000));
var state_497161__$1 = state_497161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_497161__$1,(2),inst_497155);
} else {
if((state_val_497162 === (2))){
var inst_497157 = (state_497161[(2)]);
var inst_497158 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_497159 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_497158);
var state_497161__$1 = (function (){var statearr_497163 = state_497161;
(statearr_497163[(7)] = inst_497157);

return statearr_497163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_497161__$1,inst_497159);
} else {
return null;
}
}
});})(c__38812__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____0 = (function (){
var statearr_497167 = [null,null,null,null,null,null,null,null];
(statearr_497167[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__);

(statearr_497167[(1)] = (1));

return statearr_497167;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____1 = (function (state_497161){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_497161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e497168){if((e497168 instanceof Object)){
var ex__38704__auto__ = e497168;
var statearr_497169_497171 = state_497161;
(statearr_497169_497171[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_497161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e497168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__497172 = state_497161;
state_497161 = G__497172;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__ = function(state_497161){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____1.call(this,state_497161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,figwheel_version,temp__4657__auto__))
})();
var state__38814__auto__ = (function (){var statearr_497170 = f__38813__auto__.call(null);
(statearr_497170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_497170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,figwheel_version,temp__4657__auto__))
);

return c__38812__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__497173){
var map__497177 = p__497173;
var map__497177__$1 = ((((!((map__497177 == null)))?((((map__497177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__497177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__497177):map__497177);
var file = cljs.core.get.call(null,map__497177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__497177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__497177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__497179 = "";
var G__497179__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__497179),cljs.core.str("file "),cljs.core.str(file)].join(''):G__497179);
var G__497179__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__497179__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__497179__$1);
if(cljs.core.truth_((function (){var and__31867__auto__ = line;
if(cljs.core.truth_(and__31867__auto__)){
return column;
} else {
return and__31867__auto__;
}
})())){
return [cljs.core.str(G__497179__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__497179__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__497180){
var map__497187 = p__497180;
var map__497187__$1 = ((((!((map__497187 == null)))?((((map__497187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__497187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__497187):map__497187);
var ed = map__497187__$1;
var formatted_exception = cljs.core.get.call(null,map__497187__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__497187__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__497187__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__497189_497193 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__497190_497194 = null;
var count__497191_497195 = (0);
var i__497192_497196 = (0);
while(true){
if((i__497192_497196 < count__497191_497195)){
var msg_497197 = cljs.core._nth.call(null,chunk__497190_497194,i__497192_497196);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_497197);

var G__497198 = seq__497189_497193;
var G__497199 = chunk__497190_497194;
var G__497200 = count__497191_497195;
var G__497201 = (i__497192_497196 + (1));
seq__497189_497193 = G__497198;
chunk__497190_497194 = G__497199;
count__497191_497195 = G__497200;
i__497192_497196 = G__497201;
continue;
} else {
var temp__4657__auto___497202 = cljs.core.seq.call(null,seq__497189_497193);
if(temp__4657__auto___497202){
var seq__497189_497203__$1 = temp__4657__auto___497202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__497189_497203__$1)){
var c__32690__auto___497204 = cljs.core.chunk_first.call(null,seq__497189_497203__$1);
var G__497205 = cljs.core.chunk_rest.call(null,seq__497189_497203__$1);
var G__497206 = c__32690__auto___497204;
var G__497207 = cljs.core.count.call(null,c__32690__auto___497204);
var G__497208 = (0);
seq__497189_497193 = G__497205;
chunk__497190_497194 = G__497206;
count__497191_497195 = G__497207;
i__497192_497196 = G__497208;
continue;
} else {
var msg_497209 = cljs.core.first.call(null,seq__497189_497203__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_497209);

var G__497210 = cljs.core.next.call(null,seq__497189_497203__$1);
var G__497211 = null;
var G__497212 = (0);
var G__497213 = (0);
seq__497189_497193 = G__497210;
chunk__497190_497194 = G__497211;
count__497191_497195 = G__497212;
i__497192_497196 = G__497213;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__497214){
var map__497217 = p__497214;
var map__497217__$1 = ((((!((map__497217 == null)))?((((map__497217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__497217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__497217):map__497217);
var w = map__497217__$1;
var message = cljs.core.get.call(null,map__497217__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__31867__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__31867__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__31867__auto__;
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
var seq__497229 = cljs.core.seq.call(null,plugins);
var chunk__497230 = null;
var count__497231 = (0);
var i__497232 = (0);
while(true){
if((i__497232 < count__497231)){
var vec__497233 = cljs.core._nth.call(null,chunk__497230,i__497232);
var k = cljs.core.nth.call(null,vec__497233,(0),null);
var plugin = cljs.core.nth.call(null,vec__497233,(1),null);
if(cljs.core.truth_(plugin)){
var pl_497239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__497229,chunk__497230,count__497231,i__497232,pl_497239,vec__497233,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_497239.call(null,msg_hist);
});})(seq__497229,chunk__497230,count__497231,i__497232,pl_497239,vec__497233,k,plugin))
);
} else {
}

var G__497240 = seq__497229;
var G__497241 = chunk__497230;
var G__497242 = count__497231;
var G__497243 = (i__497232 + (1));
seq__497229 = G__497240;
chunk__497230 = G__497241;
count__497231 = G__497242;
i__497232 = G__497243;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__497229);
if(temp__4657__auto__){
var seq__497229__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__497229__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__497229__$1);
var G__497244 = cljs.core.chunk_rest.call(null,seq__497229__$1);
var G__497245 = c__32690__auto__;
var G__497246 = cljs.core.count.call(null,c__32690__auto__);
var G__497247 = (0);
seq__497229 = G__497244;
chunk__497230 = G__497245;
count__497231 = G__497246;
i__497232 = G__497247;
continue;
} else {
var vec__497236 = cljs.core.first.call(null,seq__497229__$1);
var k = cljs.core.nth.call(null,vec__497236,(0),null);
var plugin = cljs.core.nth.call(null,vec__497236,(1),null);
if(cljs.core.truth_(plugin)){
var pl_497248 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__497229,chunk__497230,count__497231,i__497232,pl_497248,vec__497236,k,plugin,seq__497229__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_497248.call(null,msg_hist);
});})(seq__497229,chunk__497230,count__497231,i__497232,pl_497248,vec__497236,k,plugin,seq__497229__$1,temp__4657__auto__))
);
} else {
}

var G__497249 = cljs.core.next.call(null,seq__497229__$1);
var G__497250 = null;
var G__497251 = (0);
var G__497252 = (0);
seq__497229 = G__497249;
chunk__497230 = G__497250;
count__497231 = G__497251;
i__497232 = G__497252;
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
var args497253 = [];
var len__32954__auto___497260 = arguments.length;
var i__32955__auto___497261 = (0);
while(true){
if((i__32955__auto___497261 < len__32954__auto___497260)){
args497253.push((arguments[i__32955__auto___497261]));

var G__497262 = (i__32955__auto___497261 + (1));
i__32955__auto___497261 = G__497262;
continue;
} else {
}
break;
}

var G__497255 = args497253.length;
switch (G__497255) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args497253.length)].join('')));

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

var seq__497256_497264 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__497257_497265 = null;
var count__497258_497266 = (0);
var i__497259_497267 = (0);
while(true){
if((i__497259_497267 < count__497258_497266)){
var msg_497268 = cljs.core._nth.call(null,chunk__497257_497265,i__497259_497267);
figwheel.client.socket.handle_incoming_message.call(null,msg_497268);

var G__497269 = seq__497256_497264;
var G__497270 = chunk__497257_497265;
var G__497271 = count__497258_497266;
var G__497272 = (i__497259_497267 + (1));
seq__497256_497264 = G__497269;
chunk__497257_497265 = G__497270;
count__497258_497266 = G__497271;
i__497259_497267 = G__497272;
continue;
} else {
var temp__4657__auto___497273 = cljs.core.seq.call(null,seq__497256_497264);
if(temp__4657__auto___497273){
var seq__497256_497274__$1 = temp__4657__auto___497273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__497256_497274__$1)){
var c__32690__auto___497275 = cljs.core.chunk_first.call(null,seq__497256_497274__$1);
var G__497276 = cljs.core.chunk_rest.call(null,seq__497256_497274__$1);
var G__497277 = c__32690__auto___497275;
var G__497278 = cljs.core.count.call(null,c__32690__auto___497275);
var G__497279 = (0);
seq__497256_497264 = G__497276;
chunk__497257_497265 = G__497277;
count__497258_497266 = G__497278;
i__497259_497267 = G__497279;
continue;
} else {
var msg_497280 = cljs.core.first.call(null,seq__497256_497274__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_497280);

var G__497281 = cljs.core.next.call(null,seq__497256_497274__$1);
var G__497282 = null;
var G__497283 = (0);
var G__497284 = (0);
seq__497256_497264 = G__497281;
chunk__497257_497265 = G__497282;
count__497258_497266 = G__497283;
i__497259_497267 = G__497284;
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
var args__32961__auto__ = [];
var len__32954__auto___497289 = arguments.length;
var i__32955__auto___497290 = (0);
while(true){
if((i__32955__auto___497290 < len__32954__auto___497289)){
args__32961__auto__.push((arguments[i__32955__auto___497290]));

var G__497291 = (i__32955__auto___497290 + (1));
i__32955__auto___497290 = G__497291;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__497286){
var map__497287 = p__497286;
var map__497287__$1 = ((((!((map__497287 == null)))?((((map__497287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__497287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__497287):map__497287);
var opts = map__497287__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq497285){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq497285));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e497293){if((e497293 instanceof Error)){
var e = e497293;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e497293;

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
return (function (p__497297){
var map__497298 = p__497297;
var map__497298__$1 = ((((!((map__497298 == null)))?((((map__497298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__497298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__497298):map__497298);
var msg_name = cljs.core.get.call(null,map__497298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489290131646