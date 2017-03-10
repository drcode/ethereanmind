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
var args76841 = [];
var len__32954__auto___76844 = arguments.length;
var i__32955__auto___76845 = (0);
while(true){
if((i__32955__auto___76845 < len__32954__auto___76844)){
args76841.push((arguments[i__32955__auto___76845]));

var G__76846 = (i__32955__auto___76845 + (1));
i__32955__auto___76845 = G__76846;
continue;
} else {
}
break;
}

var G__76843 = args76841.length;
switch (G__76843) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76841.length)].join('')));

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
var len__32954__auto___76849 = arguments.length;
var i__32955__auto___76850 = (0);
while(true){
if((i__32955__auto___76850 < len__32954__auto___76849)){
args__32961__auto__.push((arguments[i__32955__auto___76850]));

var G__76851 = (i__32955__auto___76850 + (1));
i__32955__auto___76850 = G__76851;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq76848){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76848));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__32961__auto__ = [];
var len__32954__auto___76853 = arguments.length;
var i__32955__auto___76854 = (0);
while(true){
if((i__32955__auto___76854 < len__32954__auto___76853)){
args__32961__auto__.push((arguments[i__32955__auto___76854]));

var G__76855 = (i__32955__auto___76854 + (1));
i__32955__auto___76854 = G__76855;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq76852){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76852));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__76856 = cljs.core._EQ_;
var expr__76857 = (function (){var or__31879__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e76860){if((e76860 instanceof Error)){
var e = e76860;
return false;
} else {
throw e76860;

}
}})();
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__76856.call(null,"true",expr__76857))){
return true;
} else {
if(cljs.core.truth_(pred__76856.call(null,"false",expr__76857))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__76857)].join('')));
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
}catch (e76862){if((e76862 instanceof Error)){
var e = e76862;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e76862;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__76863){
var map__76866 = p__76863;
var map__76866__$1 = ((((!((map__76866 == null)))?((((map__76866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76866):map__76866);
var message = cljs.core.get.call(null,map__76866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__76866__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__38812__auto___77028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___77028,ch){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___77028,ch){
return (function (state_76997){
var state_val_76998 = (state_76997[(1)]);
if((state_val_76998 === (7))){
var inst_76993 = (state_76997[(2)]);
var state_76997__$1 = state_76997;
var statearr_76999_77029 = state_76997__$1;
(statearr_76999_77029[(2)] = inst_76993);

(statearr_76999_77029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (1))){
var state_76997__$1 = state_76997;
var statearr_77000_77030 = state_76997__$1;
(statearr_77000_77030[(2)] = null);

(statearr_77000_77030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (4))){
var inst_76950 = (state_76997[(7)]);
var inst_76950__$1 = (state_76997[(2)]);
var state_76997__$1 = (function (){var statearr_77001 = state_76997;
(statearr_77001[(7)] = inst_76950__$1);

return statearr_77001;
})();
if(cljs.core.truth_(inst_76950__$1)){
var statearr_77002_77031 = state_76997__$1;
(statearr_77002_77031[(1)] = (5));

} else {
var statearr_77003_77032 = state_76997__$1;
(statearr_77003_77032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (15))){
var inst_76957 = (state_76997[(8)]);
var inst_76972 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_76957);
var inst_76973 = cljs.core.first.call(null,inst_76972);
var inst_76974 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_76973);
var inst_76975 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_76974)].join('');
var inst_76976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_76975);
var state_76997__$1 = state_76997;
var statearr_77004_77033 = state_76997__$1;
(statearr_77004_77033[(2)] = inst_76976);

(statearr_77004_77033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (13))){
var inst_76981 = (state_76997[(2)]);
var state_76997__$1 = state_76997;
var statearr_77005_77034 = state_76997__$1;
(statearr_77005_77034[(2)] = inst_76981);

(statearr_77005_77034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (6))){
var state_76997__$1 = state_76997;
var statearr_77006_77035 = state_76997__$1;
(statearr_77006_77035[(2)] = null);

(statearr_77006_77035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (17))){
var inst_76979 = (state_76997[(2)]);
var state_76997__$1 = state_76997;
var statearr_77007_77036 = state_76997__$1;
(statearr_77007_77036[(2)] = inst_76979);

(statearr_77007_77036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (3))){
var inst_76995 = (state_76997[(2)]);
var state_76997__$1 = state_76997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76997__$1,inst_76995);
} else {
if((state_val_76998 === (12))){
var inst_76956 = (state_76997[(9)]);
var inst_76970 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_76956,opts);
var state_76997__$1 = state_76997;
if(cljs.core.truth_(inst_76970)){
var statearr_77008_77037 = state_76997__$1;
(statearr_77008_77037[(1)] = (15));

} else {
var statearr_77009_77038 = state_76997__$1;
(statearr_77009_77038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (2))){
var state_76997__$1 = state_76997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76997__$1,(4),ch);
} else {
if((state_val_76998 === (11))){
var inst_76957 = (state_76997[(8)]);
var inst_76962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_76963 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_76957);
var inst_76964 = cljs.core.async.timeout.call(null,(1000));
var inst_76965 = [inst_76963,inst_76964];
var inst_76966 = (new cljs.core.PersistentVector(null,2,(5),inst_76962,inst_76965,null));
var state_76997__$1 = state_76997;
return cljs.core.async.ioc_alts_BANG_.call(null,state_76997__$1,(14),inst_76966);
} else {
if((state_val_76998 === (9))){
var inst_76957 = (state_76997[(8)]);
var inst_76983 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_76984 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_76957);
var inst_76985 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_76984);
var inst_76986 = [cljs.core.str("Not loading: "),cljs.core.str(inst_76985)].join('');
var inst_76987 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_76986);
var state_76997__$1 = (function (){var statearr_77010 = state_76997;
(statearr_77010[(10)] = inst_76983);

return statearr_77010;
})();
var statearr_77011_77039 = state_76997__$1;
(statearr_77011_77039[(2)] = inst_76987);

(statearr_77011_77039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (5))){
var inst_76950 = (state_76997[(7)]);
var inst_76952 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_76953 = (new cljs.core.PersistentArrayMap(null,2,inst_76952,null));
var inst_76954 = (new cljs.core.PersistentHashSet(null,inst_76953,null));
var inst_76955 = figwheel.client.focus_msgs.call(null,inst_76954,inst_76950);
var inst_76956 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_76955);
var inst_76957 = cljs.core.first.call(null,inst_76955);
var inst_76958 = figwheel.client.autoload_QMARK_.call(null);
var state_76997__$1 = (function (){var statearr_77012 = state_76997;
(statearr_77012[(8)] = inst_76957);

(statearr_77012[(9)] = inst_76956);

return statearr_77012;
})();
if(cljs.core.truth_(inst_76958)){
var statearr_77013_77040 = state_76997__$1;
(statearr_77013_77040[(1)] = (8));

} else {
var statearr_77014_77041 = state_76997__$1;
(statearr_77014_77041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (14))){
var inst_76968 = (state_76997[(2)]);
var state_76997__$1 = state_76997;
var statearr_77015_77042 = state_76997__$1;
(statearr_77015_77042[(2)] = inst_76968);

(statearr_77015_77042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (16))){
var state_76997__$1 = state_76997;
var statearr_77016_77043 = state_76997__$1;
(statearr_77016_77043[(2)] = null);

(statearr_77016_77043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (10))){
var inst_76989 = (state_76997[(2)]);
var state_76997__$1 = (function (){var statearr_77017 = state_76997;
(statearr_77017[(11)] = inst_76989);

return statearr_77017;
})();
var statearr_77018_77044 = state_76997__$1;
(statearr_77018_77044[(2)] = null);

(statearr_77018_77044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76998 === (8))){
var inst_76956 = (state_76997[(9)]);
var inst_76960 = figwheel.client.reload_file_state_QMARK_.call(null,inst_76956,opts);
var state_76997__$1 = state_76997;
if(cljs.core.truth_(inst_76960)){
var statearr_77019_77045 = state_76997__$1;
(statearr_77019_77045[(1)] = (11));

} else {
var statearr_77020_77046 = state_76997__$1;
(statearr_77020_77046[(1)] = (12));

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
});})(c__38812__auto___77028,ch))
;
return ((function (switch__38700__auto__,c__38812__auto___77028,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____0 = (function (){
var statearr_77024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77024[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__);

(statearr_77024[(1)] = (1));

return statearr_77024;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____1 = (function (state_76997){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_76997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e77025){if((e77025 instanceof Object)){
var ex__38704__auto__ = e77025;
var statearr_77026_77047 = state_76997;
(statearr_77026_77047[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77048 = state_76997;
state_76997 = G__77048;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__ = function(state_76997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____1.call(this,state_76997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38701__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___77028,ch))
})();
var state__38814__auto__ = (function (){var statearr_77027 = f__38813__auto__.call(null);
(statearr_77027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___77028);

return statearr_77027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___77028,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__77049_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__77049_SHARP_));
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
var base_path_77052 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_77052){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e77051){if((e77051 instanceof Error)){
var e = e77051;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_77052], null));
} else {
var e = e77051;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_77052))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__77053){
var map__77062 = p__77053;
var map__77062__$1 = ((((!((map__77062 == null)))?((((map__77062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77062):map__77062);
var opts = map__77062__$1;
var build_id = cljs.core.get.call(null,map__77062__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__77062,map__77062__$1,opts,build_id){
return (function (p__77064){
var vec__77065 = p__77064;
var seq__77066 = cljs.core.seq.call(null,vec__77065);
var first__77067 = cljs.core.first.call(null,seq__77066);
var seq__77066__$1 = cljs.core.next.call(null,seq__77066);
var map__77068 = first__77067;
var map__77068__$1 = ((((!((map__77068 == null)))?((((map__77068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77068):map__77068);
var msg = map__77068__$1;
var msg_name = cljs.core.get.call(null,map__77068__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__77066__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__77065,seq__77066,first__77067,seq__77066__$1,map__77068,map__77068__$1,msg,msg_name,_,map__77062,map__77062__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__77065,seq__77066,first__77067,seq__77066__$1,map__77068,map__77068__$1,msg,msg_name,_,map__77062,map__77062__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__77062,map__77062__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__77076){
var vec__77077 = p__77076;
var seq__77078 = cljs.core.seq.call(null,vec__77077);
var first__77079 = cljs.core.first.call(null,seq__77078);
var seq__77078__$1 = cljs.core.next.call(null,seq__77078);
var map__77080 = first__77079;
var map__77080__$1 = ((((!((map__77080 == null)))?((((map__77080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77080):map__77080);
var msg = map__77080__$1;
var msg_name = cljs.core.get.call(null,map__77080__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__77078__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__77082){
var map__77094 = p__77082;
var map__77094__$1 = ((((!((map__77094 == null)))?((((map__77094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77094):map__77094);
var on_compile_warning = cljs.core.get.call(null,map__77094__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__77094__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__77094,map__77094__$1,on_compile_warning,on_compile_fail){
return (function (p__77096){
var vec__77097 = p__77096;
var seq__77098 = cljs.core.seq.call(null,vec__77097);
var first__77099 = cljs.core.first.call(null,seq__77098);
var seq__77098__$1 = cljs.core.next.call(null,seq__77098);
var map__77100 = first__77099;
var map__77100__$1 = ((((!((map__77100 == null)))?((((map__77100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77100):map__77100);
var msg = map__77100__$1;
var msg_name = cljs.core.get.call(null,map__77100__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__77098__$1;
var pred__77102 = cljs.core._EQ_;
var expr__77103 = msg_name;
if(cljs.core.truth_(pred__77102.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__77103))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__77102.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__77103))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__77094,map__77094__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,msg_hist,msg_names,msg){
return (function (state_77311){
var state_val_77312 = (state_77311[(1)]);
if((state_val_77312 === (7))){
var inst_77239 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77239)){
var statearr_77313_77359 = state_77311__$1;
(statearr_77313_77359[(1)] = (8));

} else {
var statearr_77314_77360 = state_77311__$1;
(statearr_77314_77360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (20))){
var inst_77305 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77315_77361 = state_77311__$1;
(statearr_77315_77361[(2)] = inst_77305);

(statearr_77315_77361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (27))){
var inst_77301 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77316_77362 = state_77311__$1;
(statearr_77316_77362[(2)] = inst_77301);

(statearr_77316_77362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (1))){
var inst_77232 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77232)){
var statearr_77317_77363 = state_77311__$1;
(statearr_77317_77363[(1)] = (2));

} else {
var statearr_77318_77364 = state_77311__$1;
(statearr_77318_77364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (24))){
var inst_77303 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77319_77365 = state_77311__$1;
(statearr_77319_77365[(2)] = inst_77303);

(statearr_77319_77365[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (4))){
var inst_77309 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77311__$1,inst_77309);
} else {
if((state_val_77312 === (15))){
var inst_77307 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77320_77366 = state_77311__$1;
(statearr_77320_77366[(2)] = inst_77307);

(statearr_77320_77366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (21))){
var inst_77266 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77321_77367 = state_77311__$1;
(statearr_77321_77367[(2)] = inst_77266);

(statearr_77321_77367[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (31))){
var inst_77290 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77290)){
var statearr_77322_77368 = state_77311__$1;
(statearr_77322_77368[(1)] = (34));

} else {
var statearr_77323_77369 = state_77311__$1;
(statearr_77323_77369[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (32))){
var inst_77299 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77324_77370 = state_77311__$1;
(statearr_77324_77370[(2)] = inst_77299);

(statearr_77324_77370[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (33))){
var inst_77288 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77325_77371 = state_77311__$1;
(statearr_77325_77371[(2)] = inst_77288);

(statearr_77325_77371[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (13))){
var inst_77253 = figwheel.client.heads_up.clear.call(null);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(16),inst_77253);
} else {
if((state_val_77312 === (22))){
var inst_77270 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_77271 = figwheel.client.heads_up.append_warning_message.call(null,inst_77270);
var state_77311__$1 = state_77311;
var statearr_77326_77372 = state_77311__$1;
(statearr_77326_77372[(2)] = inst_77271);

(statearr_77326_77372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (36))){
var inst_77297 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77327_77373 = state_77311__$1;
(statearr_77327_77373[(2)] = inst_77297);

(statearr_77327_77373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (29))){
var inst_77281 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77328_77374 = state_77311__$1;
(statearr_77328_77374[(2)] = inst_77281);

(statearr_77328_77374[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (6))){
var inst_77234 = (state_77311[(7)]);
var state_77311__$1 = state_77311;
var statearr_77329_77375 = state_77311__$1;
(statearr_77329_77375[(2)] = inst_77234);

(statearr_77329_77375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (28))){
var inst_77277 = (state_77311[(2)]);
var inst_77278 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_77279 = figwheel.client.heads_up.display_warning.call(null,inst_77278);
var state_77311__$1 = (function (){var statearr_77330 = state_77311;
(statearr_77330[(8)] = inst_77277);

return statearr_77330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(29),inst_77279);
} else {
if((state_val_77312 === (25))){
var inst_77275 = figwheel.client.heads_up.clear.call(null);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(28),inst_77275);
} else {
if((state_val_77312 === (34))){
var inst_77292 = figwheel.client.heads_up.flash_loaded.call(null);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(37),inst_77292);
} else {
if((state_val_77312 === (17))){
var inst_77259 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77331_77376 = state_77311__$1;
(statearr_77331_77376[(2)] = inst_77259);

(statearr_77331_77376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (3))){
var inst_77251 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77251)){
var statearr_77332_77377 = state_77311__$1;
(statearr_77332_77377[(1)] = (13));

} else {
var statearr_77333_77378 = state_77311__$1;
(statearr_77333_77378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (12))){
var inst_77247 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77334_77379 = state_77311__$1;
(statearr_77334_77379[(2)] = inst_77247);

(statearr_77334_77379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (2))){
var inst_77234 = (state_77311[(7)]);
var inst_77234__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_77311__$1 = (function (){var statearr_77335 = state_77311;
(statearr_77335[(7)] = inst_77234__$1);

return statearr_77335;
})();
if(cljs.core.truth_(inst_77234__$1)){
var statearr_77336_77380 = state_77311__$1;
(statearr_77336_77380[(1)] = (5));

} else {
var statearr_77337_77381 = state_77311__$1;
(statearr_77337_77381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (23))){
var inst_77273 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77273)){
var statearr_77338_77382 = state_77311__$1;
(statearr_77338_77382[(1)] = (25));

} else {
var statearr_77339_77383 = state_77311__$1;
(statearr_77339_77383[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (35))){
var state_77311__$1 = state_77311;
var statearr_77340_77384 = state_77311__$1;
(statearr_77340_77384[(2)] = null);

(statearr_77340_77384[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (19))){
var inst_77268 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77268)){
var statearr_77341_77385 = state_77311__$1;
(statearr_77341_77385[(1)] = (22));

} else {
var statearr_77342_77386 = state_77311__$1;
(statearr_77342_77386[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (11))){
var inst_77243 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77343_77387 = state_77311__$1;
(statearr_77343_77387[(2)] = inst_77243);

(statearr_77343_77387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (9))){
var inst_77245 = figwheel.client.heads_up.clear.call(null);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(12),inst_77245);
} else {
if((state_val_77312 === (5))){
var inst_77236 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_77311__$1 = state_77311;
var statearr_77344_77388 = state_77311__$1;
(statearr_77344_77388[(2)] = inst_77236);

(statearr_77344_77388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (14))){
var inst_77261 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77261)){
var statearr_77345_77389 = state_77311__$1;
(statearr_77345_77389[(1)] = (18));

} else {
var statearr_77346_77390 = state_77311__$1;
(statearr_77346_77390[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (26))){
var inst_77283 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_77311__$1 = state_77311;
if(cljs.core.truth_(inst_77283)){
var statearr_77347_77391 = state_77311__$1;
(statearr_77347_77391[(1)] = (30));

} else {
var statearr_77348_77392 = state_77311__$1;
(statearr_77348_77392[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (16))){
var inst_77255 = (state_77311[(2)]);
var inst_77256 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_77257 = figwheel.client.heads_up.display_exception.call(null,inst_77256);
var state_77311__$1 = (function (){var statearr_77349 = state_77311;
(statearr_77349[(9)] = inst_77255);

return statearr_77349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(17),inst_77257);
} else {
if((state_val_77312 === (30))){
var inst_77285 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_77286 = figwheel.client.heads_up.display_warning.call(null,inst_77285);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(33),inst_77286);
} else {
if((state_val_77312 === (10))){
var inst_77249 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77350_77393 = state_77311__$1;
(statearr_77350_77393[(2)] = inst_77249);

(statearr_77350_77393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (18))){
var inst_77263 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_77264 = figwheel.client.heads_up.display_exception.call(null,inst_77263);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(21),inst_77264);
} else {
if((state_val_77312 === (37))){
var inst_77294 = (state_77311[(2)]);
var state_77311__$1 = state_77311;
var statearr_77351_77394 = state_77311__$1;
(statearr_77351_77394[(2)] = inst_77294);

(statearr_77351_77394[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77312 === (8))){
var inst_77241 = figwheel.client.heads_up.flash_loaded.call(null);
var state_77311__$1 = state_77311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77311__$1,(11),inst_77241);
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
var statearr_77355 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77355[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__);

(statearr_77355[(1)] = (1));

return statearr_77355;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____1 = (function (state_77311){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_77311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e77356){if((e77356 instanceof Object)){
var ex__38704__auto__ = e77356;
var statearr_77357_77395 = state_77311;
(statearr_77357_77395[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77396 = state_77311;
state_77311 = G__77396;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__ = function(state_77311){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____1.call(this,state_77311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,msg_hist,msg_names,msg))
})();
var state__38814__auto__ = (function (){var statearr_77358 = f__38813__auto__.call(null);
(statearr_77358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_77358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,msg_hist,msg_names,msg))
);

return c__38812__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38812__auto___77459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___77459,ch){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___77459,ch){
return (function (state_77442){
var state_val_77443 = (state_77442[(1)]);
if((state_val_77443 === (1))){
var state_77442__$1 = state_77442;
var statearr_77444_77460 = state_77442__$1;
(statearr_77444_77460[(2)] = null);

(statearr_77444_77460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77443 === (2))){
var state_77442__$1 = state_77442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77442__$1,(4),ch);
} else {
if((state_val_77443 === (3))){
var inst_77440 = (state_77442[(2)]);
var state_77442__$1 = state_77442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77442__$1,inst_77440);
} else {
if((state_val_77443 === (4))){
var inst_77430 = (state_77442[(7)]);
var inst_77430__$1 = (state_77442[(2)]);
var state_77442__$1 = (function (){var statearr_77445 = state_77442;
(statearr_77445[(7)] = inst_77430__$1);

return statearr_77445;
})();
if(cljs.core.truth_(inst_77430__$1)){
var statearr_77446_77461 = state_77442__$1;
(statearr_77446_77461[(1)] = (5));

} else {
var statearr_77447_77462 = state_77442__$1;
(statearr_77447_77462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77443 === (5))){
var inst_77430 = (state_77442[(7)]);
var inst_77432 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_77430);
var state_77442__$1 = state_77442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77442__$1,(8),inst_77432);
} else {
if((state_val_77443 === (6))){
var state_77442__$1 = state_77442;
var statearr_77448_77463 = state_77442__$1;
(statearr_77448_77463[(2)] = null);

(statearr_77448_77463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77443 === (7))){
var inst_77438 = (state_77442[(2)]);
var state_77442__$1 = state_77442;
var statearr_77449_77464 = state_77442__$1;
(statearr_77449_77464[(2)] = inst_77438);

(statearr_77449_77464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77443 === (8))){
var inst_77434 = (state_77442[(2)]);
var state_77442__$1 = (function (){var statearr_77450 = state_77442;
(statearr_77450[(8)] = inst_77434);

return statearr_77450;
})();
var statearr_77451_77465 = state_77442__$1;
(statearr_77451_77465[(2)] = null);

(statearr_77451_77465[(1)] = (2));


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
});})(c__38812__auto___77459,ch))
;
return ((function (switch__38700__auto__,c__38812__auto___77459,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38701__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38701__auto____0 = (function (){
var statearr_77455 = [null,null,null,null,null,null,null,null,null];
(statearr_77455[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38701__auto__);

(statearr_77455[(1)] = (1));

return statearr_77455;
});
var figwheel$client$heads_up_plugin_$_state_machine__38701__auto____1 = (function (state_77442){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_77442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e77456){if((e77456 instanceof Object)){
var ex__38704__auto__ = e77456;
var statearr_77457_77466 = state_77442;
(statearr_77457_77466[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77467 = state_77442;
state_77442 = G__77467;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38701__auto__ = function(state_77442){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38701__auto____1.call(this,state_77442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38701__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38701__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___77459,ch))
})();
var state__38814__auto__ = (function (){var statearr_77458 = f__38813__auto__.call(null);
(statearr_77458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___77459);

return statearr_77458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___77459,ch))
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
return (function (state_77488){
var state_val_77489 = (state_77488[(1)]);
if((state_val_77489 === (1))){
var inst_77483 = cljs.core.async.timeout.call(null,(3000));
var state_77488__$1 = state_77488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77488__$1,(2),inst_77483);
} else {
if((state_val_77489 === (2))){
var inst_77485 = (state_77488[(2)]);
var inst_77486 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_77488__$1 = (function (){var statearr_77490 = state_77488;
(statearr_77490[(7)] = inst_77485);

return statearr_77490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77488__$1,inst_77486);
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
var statearr_77494 = [null,null,null,null,null,null,null,null];
(statearr_77494[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__);

(statearr_77494[(1)] = (1));

return statearr_77494;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____1 = (function (state_77488){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_77488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e77495){if((e77495 instanceof Object)){
var ex__38704__auto__ = e77495;
var statearr_77496_77498 = state_77488;
(statearr_77496_77498[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77499 = state_77488;
state_77488 = G__77499;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__ = function(state_77488){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____1.call(this,state_77488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38701__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_77497 = f__38813__auto__.call(null);
(statearr_77497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_77497;
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
return (function (state_77522){
var state_val_77523 = (state_77522[(1)]);
if((state_val_77523 === (1))){
var inst_77516 = cljs.core.async.timeout.call(null,(2000));
var state_77522__$1 = state_77522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77522__$1,(2),inst_77516);
} else {
if((state_val_77523 === (2))){
var inst_77518 = (state_77522[(2)]);
var inst_77519 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_77520 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_77519);
var state_77522__$1 = (function (){var statearr_77524 = state_77522;
(statearr_77524[(7)] = inst_77518);

return statearr_77524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77522__$1,inst_77520);
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
var statearr_77528 = [null,null,null,null,null,null,null,null];
(statearr_77528[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__);

(statearr_77528[(1)] = (1));

return statearr_77528;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____1 = (function (state_77522){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_77522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e77529){if((e77529 instanceof Object)){
var ex__38704__auto__ = e77529;
var statearr_77530_77532 = state_77522;
(statearr_77530_77532[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77533 = state_77522;
state_77522 = G__77533;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__ = function(state_77522){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____1.call(this,state_77522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,figwheel_version,temp__4657__auto__))
})();
var state__38814__auto__ = (function (){var statearr_77531 = f__38813__auto__.call(null);
(statearr_77531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_77531;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__77534){
var map__77538 = p__77534;
var map__77538__$1 = ((((!((map__77538 == null)))?((((map__77538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77538):map__77538);
var file = cljs.core.get.call(null,map__77538__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__77538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__77538__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__77540 = "";
var G__77540__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__77540),cljs.core.str("file "),cljs.core.str(file)].join(''):G__77540);
var G__77540__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__77540__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__77540__$1);
if(cljs.core.truth_((function (){var and__31867__auto__ = line;
if(cljs.core.truth_(and__31867__auto__)){
return column;
} else {
return and__31867__auto__;
}
})())){
return [cljs.core.str(G__77540__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__77540__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__77541){
var map__77548 = p__77541;
var map__77548__$1 = ((((!((map__77548 == null)))?((((map__77548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77548):map__77548);
var ed = map__77548__$1;
var formatted_exception = cljs.core.get.call(null,map__77548__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__77548__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__77548__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__77550_77554 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__77551_77555 = null;
var count__77552_77556 = (0);
var i__77553_77557 = (0);
while(true){
if((i__77553_77557 < count__77552_77556)){
var msg_77558 = cljs.core._nth.call(null,chunk__77551_77555,i__77553_77557);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_77558);

var G__77559 = seq__77550_77554;
var G__77560 = chunk__77551_77555;
var G__77561 = count__77552_77556;
var G__77562 = (i__77553_77557 + (1));
seq__77550_77554 = G__77559;
chunk__77551_77555 = G__77560;
count__77552_77556 = G__77561;
i__77553_77557 = G__77562;
continue;
} else {
var temp__4657__auto___77563 = cljs.core.seq.call(null,seq__77550_77554);
if(temp__4657__auto___77563){
var seq__77550_77564__$1 = temp__4657__auto___77563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77550_77564__$1)){
var c__32690__auto___77565 = cljs.core.chunk_first.call(null,seq__77550_77564__$1);
var G__77566 = cljs.core.chunk_rest.call(null,seq__77550_77564__$1);
var G__77567 = c__32690__auto___77565;
var G__77568 = cljs.core.count.call(null,c__32690__auto___77565);
var G__77569 = (0);
seq__77550_77554 = G__77566;
chunk__77551_77555 = G__77567;
count__77552_77556 = G__77568;
i__77553_77557 = G__77569;
continue;
} else {
var msg_77570 = cljs.core.first.call(null,seq__77550_77564__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_77570);

var G__77571 = cljs.core.next.call(null,seq__77550_77564__$1);
var G__77572 = null;
var G__77573 = (0);
var G__77574 = (0);
seq__77550_77554 = G__77571;
chunk__77551_77555 = G__77572;
count__77552_77556 = G__77573;
i__77553_77557 = G__77574;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__77575){
var map__77578 = p__77575;
var map__77578__$1 = ((((!((map__77578 == null)))?((((map__77578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77578):map__77578);
var w = map__77578__$1;
var message = cljs.core.get.call(null,map__77578__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__77590 = cljs.core.seq.call(null,plugins);
var chunk__77591 = null;
var count__77592 = (0);
var i__77593 = (0);
while(true){
if((i__77593 < count__77592)){
var vec__77594 = cljs.core._nth.call(null,chunk__77591,i__77593);
var k = cljs.core.nth.call(null,vec__77594,(0),null);
var plugin = cljs.core.nth.call(null,vec__77594,(1),null);
if(cljs.core.truth_(plugin)){
var pl_77600 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__77590,chunk__77591,count__77592,i__77593,pl_77600,vec__77594,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_77600.call(null,msg_hist);
});})(seq__77590,chunk__77591,count__77592,i__77593,pl_77600,vec__77594,k,plugin))
);
} else {
}

var G__77601 = seq__77590;
var G__77602 = chunk__77591;
var G__77603 = count__77592;
var G__77604 = (i__77593 + (1));
seq__77590 = G__77601;
chunk__77591 = G__77602;
count__77592 = G__77603;
i__77593 = G__77604;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__77590);
if(temp__4657__auto__){
var seq__77590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77590__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__77590__$1);
var G__77605 = cljs.core.chunk_rest.call(null,seq__77590__$1);
var G__77606 = c__32690__auto__;
var G__77607 = cljs.core.count.call(null,c__32690__auto__);
var G__77608 = (0);
seq__77590 = G__77605;
chunk__77591 = G__77606;
count__77592 = G__77607;
i__77593 = G__77608;
continue;
} else {
var vec__77597 = cljs.core.first.call(null,seq__77590__$1);
var k = cljs.core.nth.call(null,vec__77597,(0),null);
var plugin = cljs.core.nth.call(null,vec__77597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_77609 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__77590,chunk__77591,count__77592,i__77593,pl_77609,vec__77597,k,plugin,seq__77590__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_77609.call(null,msg_hist);
});})(seq__77590,chunk__77591,count__77592,i__77593,pl_77609,vec__77597,k,plugin,seq__77590__$1,temp__4657__auto__))
);
} else {
}

var G__77610 = cljs.core.next.call(null,seq__77590__$1);
var G__77611 = null;
var G__77612 = (0);
var G__77613 = (0);
seq__77590 = G__77610;
chunk__77591 = G__77611;
count__77592 = G__77612;
i__77593 = G__77613;
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
var args77614 = [];
var len__32954__auto___77621 = arguments.length;
var i__32955__auto___77622 = (0);
while(true){
if((i__32955__auto___77622 < len__32954__auto___77621)){
args77614.push((arguments[i__32955__auto___77622]));

var G__77623 = (i__32955__auto___77622 + (1));
i__32955__auto___77622 = G__77623;
continue;
} else {
}
break;
}

var G__77616 = args77614.length;
switch (G__77616) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args77614.length)].join('')));

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

var seq__77617_77625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__77618_77626 = null;
var count__77619_77627 = (0);
var i__77620_77628 = (0);
while(true){
if((i__77620_77628 < count__77619_77627)){
var msg_77629 = cljs.core._nth.call(null,chunk__77618_77626,i__77620_77628);
figwheel.client.socket.handle_incoming_message.call(null,msg_77629);

var G__77630 = seq__77617_77625;
var G__77631 = chunk__77618_77626;
var G__77632 = count__77619_77627;
var G__77633 = (i__77620_77628 + (1));
seq__77617_77625 = G__77630;
chunk__77618_77626 = G__77631;
count__77619_77627 = G__77632;
i__77620_77628 = G__77633;
continue;
} else {
var temp__4657__auto___77634 = cljs.core.seq.call(null,seq__77617_77625);
if(temp__4657__auto___77634){
var seq__77617_77635__$1 = temp__4657__auto___77634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77617_77635__$1)){
var c__32690__auto___77636 = cljs.core.chunk_first.call(null,seq__77617_77635__$1);
var G__77637 = cljs.core.chunk_rest.call(null,seq__77617_77635__$1);
var G__77638 = c__32690__auto___77636;
var G__77639 = cljs.core.count.call(null,c__32690__auto___77636);
var G__77640 = (0);
seq__77617_77625 = G__77637;
chunk__77618_77626 = G__77638;
count__77619_77627 = G__77639;
i__77620_77628 = G__77640;
continue;
} else {
var msg_77641 = cljs.core.first.call(null,seq__77617_77635__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_77641);

var G__77642 = cljs.core.next.call(null,seq__77617_77635__$1);
var G__77643 = null;
var G__77644 = (0);
var G__77645 = (0);
seq__77617_77625 = G__77642;
chunk__77618_77626 = G__77643;
count__77619_77627 = G__77644;
i__77620_77628 = G__77645;
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
var len__32954__auto___77650 = arguments.length;
var i__32955__auto___77651 = (0);
while(true){
if((i__32955__auto___77651 < len__32954__auto___77650)){
args__32961__auto__.push((arguments[i__32955__auto___77651]));

var G__77652 = (i__32955__auto___77651 + (1));
i__32955__auto___77651 = G__77652;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__77647){
var map__77648 = p__77647;
var map__77648__$1 = ((((!((map__77648 == null)))?((((map__77648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77648):map__77648);
var opts = map__77648__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq77646){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77646));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e77654){if((e77654 instanceof Error)){
var e = e77654;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e77654;

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
return (function (p__77658){
var map__77659 = p__77658;
var map__77659__$1 = ((((!((map__77659 == null)))?((((map__77659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77659):map__77659);
var msg_name = cljs.core.get.call(null,map__77659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489123437587