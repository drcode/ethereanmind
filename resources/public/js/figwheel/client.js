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
var args85915 = [];
var len__35573__auto___85918 = arguments.length;
var i__35574__auto___85919 = (0);
while(true){
if((i__35574__auto___85919 < len__35573__auto___85918)){
args85915.push((arguments[i__35574__auto___85919]));

var G__85920 = (i__35574__auto___85919 + (1));
i__35574__auto___85919 = G__85920;
continue;
} else {
}
break;
}

var G__85917 = args85915.length;
switch (G__85917) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args85915.length)].join('')));

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
var args__35580__auto__ = [];
var len__35573__auto___85923 = arguments.length;
var i__35574__auto___85924 = (0);
while(true){
if((i__35574__auto___85924 < len__35573__auto___85923)){
args__35580__auto__.push((arguments[i__35574__auto___85924]));

var G__85925 = (i__35574__auto___85924 + (1));
i__35574__auto___85924 = G__85925;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq85922){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85922));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35580__auto__ = [];
var len__35573__auto___85927 = arguments.length;
var i__35574__auto___85928 = (0);
while(true){
if((i__35574__auto___85928 < len__35573__auto___85927)){
args__35580__auto__.push((arguments[i__35574__auto___85928]));

var G__85929 = (i__35574__auto___85928 + (1));
i__35574__auto___85928 = G__85929;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq85926){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85926));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__85930 = cljs.core._EQ_;
var expr__85931 = (function (){var or__34390__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e85934){if((e85934 instanceof Error)){
var e = e85934;
return false;
} else {
throw e85934;

}
}})();
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__85930.call(null,"true",expr__85931))){
return true;
} else {
if(cljs.core.truth_(pred__85930.call(null,"false",expr__85931))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__85931)].join('')));
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
}catch (e85936){if((e85936 instanceof Error)){
var e = e85936;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e85936;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__85937){
var map__85940 = p__85937;
var map__85940__$1 = ((((!((map__85940 == null)))?((((map__85940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85940):map__85940);
var message = cljs.core.get.call(null,map__85940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__85940__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34390__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34378__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34378__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34378__auto__;
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
var c__43337__auto___86102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___86102,ch){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___86102,ch){
return (function (state_86071){
var state_val_86072 = (state_86071[(1)]);
if((state_val_86072 === (7))){
var inst_86067 = (state_86071[(2)]);
var state_86071__$1 = state_86071;
var statearr_86073_86103 = state_86071__$1;
(statearr_86073_86103[(2)] = inst_86067);

(statearr_86073_86103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (1))){
var state_86071__$1 = state_86071;
var statearr_86074_86104 = state_86071__$1;
(statearr_86074_86104[(2)] = null);

(statearr_86074_86104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (4))){
var inst_86024 = (state_86071[(7)]);
var inst_86024__$1 = (state_86071[(2)]);
var state_86071__$1 = (function (){var statearr_86075 = state_86071;
(statearr_86075[(7)] = inst_86024__$1);

return statearr_86075;
})();
if(cljs.core.truth_(inst_86024__$1)){
var statearr_86076_86105 = state_86071__$1;
(statearr_86076_86105[(1)] = (5));

} else {
var statearr_86077_86106 = state_86071__$1;
(statearr_86077_86106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (15))){
var inst_86031 = (state_86071[(8)]);
var inst_86046 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_86031);
var inst_86047 = cljs.core.first.call(null,inst_86046);
var inst_86048 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_86047);
var inst_86049 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_86048)].join('');
var inst_86050 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_86049);
var state_86071__$1 = state_86071;
var statearr_86078_86107 = state_86071__$1;
(statearr_86078_86107[(2)] = inst_86050);

(statearr_86078_86107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (13))){
var inst_86055 = (state_86071[(2)]);
var state_86071__$1 = state_86071;
var statearr_86079_86108 = state_86071__$1;
(statearr_86079_86108[(2)] = inst_86055);

(statearr_86079_86108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (6))){
var state_86071__$1 = state_86071;
var statearr_86080_86109 = state_86071__$1;
(statearr_86080_86109[(2)] = null);

(statearr_86080_86109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (17))){
var inst_86053 = (state_86071[(2)]);
var state_86071__$1 = state_86071;
var statearr_86081_86110 = state_86071__$1;
(statearr_86081_86110[(2)] = inst_86053);

(statearr_86081_86110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (3))){
var inst_86069 = (state_86071[(2)]);
var state_86071__$1 = state_86071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86071__$1,inst_86069);
} else {
if((state_val_86072 === (12))){
var inst_86030 = (state_86071[(9)]);
var inst_86044 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_86030,opts);
var state_86071__$1 = state_86071;
if(cljs.core.truth_(inst_86044)){
var statearr_86082_86111 = state_86071__$1;
(statearr_86082_86111[(1)] = (15));

} else {
var statearr_86083_86112 = state_86071__$1;
(statearr_86083_86112[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (2))){
var state_86071__$1 = state_86071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86071__$1,(4),ch);
} else {
if((state_val_86072 === (11))){
var inst_86031 = (state_86071[(8)]);
var inst_86036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86037 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_86031);
var inst_86038 = cljs.core.async.timeout.call(null,(1000));
var inst_86039 = [inst_86037,inst_86038];
var inst_86040 = (new cljs.core.PersistentVector(null,2,(5),inst_86036,inst_86039,null));
var state_86071__$1 = state_86071;
return cljs.core.async.ioc_alts_BANG_.call(null,state_86071__$1,(14),inst_86040);
} else {
if((state_val_86072 === (9))){
var inst_86031 = (state_86071[(8)]);
var inst_86057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_86058 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_86031);
var inst_86059 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_86058);
var inst_86060 = [cljs.core.str("Not loading: "),cljs.core.str(inst_86059)].join('');
var inst_86061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_86060);
var state_86071__$1 = (function (){var statearr_86084 = state_86071;
(statearr_86084[(10)] = inst_86057);

return statearr_86084;
})();
var statearr_86085_86113 = state_86071__$1;
(statearr_86085_86113[(2)] = inst_86061);

(statearr_86085_86113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (5))){
var inst_86024 = (state_86071[(7)]);
var inst_86026 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_86027 = (new cljs.core.PersistentArrayMap(null,2,inst_86026,null));
var inst_86028 = (new cljs.core.PersistentHashSet(null,inst_86027,null));
var inst_86029 = figwheel.client.focus_msgs.call(null,inst_86028,inst_86024);
var inst_86030 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_86029);
var inst_86031 = cljs.core.first.call(null,inst_86029);
var inst_86032 = figwheel.client.autoload_QMARK_.call(null);
var state_86071__$1 = (function (){var statearr_86086 = state_86071;
(statearr_86086[(9)] = inst_86030);

(statearr_86086[(8)] = inst_86031);

return statearr_86086;
})();
if(cljs.core.truth_(inst_86032)){
var statearr_86087_86114 = state_86071__$1;
(statearr_86087_86114[(1)] = (8));

} else {
var statearr_86088_86115 = state_86071__$1;
(statearr_86088_86115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (14))){
var inst_86042 = (state_86071[(2)]);
var state_86071__$1 = state_86071;
var statearr_86089_86116 = state_86071__$1;
(statearr_86089_86116[(2)] = inst_86042);

(statearr_86089_86116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (16))){
var state_86071__$1 = state_86071;
var statearr_86090_86117 = state_86071__$1;
(statearr_86090_86117[(2)] = null);

(statearr_86090_86117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (10))){
var inst_86063 = (state_86071[(2)]);
var state_86071__$1 = (function (){var statearr_86091 = state_86071;
(statearr_86091[(11)] = inst_86063);

return statearr_86091;
})();
var statearr_86092_86118 = state_86071__$1;
(statearr_86092_86118[(2)] = null);

(statearr_86092_86118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86072 === (8))){
var inst_86030 = (state_86071[(9)]);
var inst_86034 = figwheel.client.reload_file_state_QMARK_.call(null,inst_86030,opts);
var state_86071__$1 = state_86071;
if(cljs.core.truth_(inst_86034)){
var statearr_86093_86119 = state_86071__$1;
(statearr_86093_86119[(1)] = (11));

} else {
var statearr_86094_86120 = state_86071__$1;
(statearr_86094_86120[(1)] = (12));

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
});})(c__43337__auto___86102,ch))
;
return ((function (switch__43223__auto__,c__43337__auto___86102,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43224__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43224__auto____0 = (function (){
var statearr_86098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86098[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43224__auto__);

(statearr_86098[(1)] = (1));

return statearr_86098;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43224__auto____1 = (function (state_86071){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_86071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e86099){if((e86099 instanceof Object)){
var ex__43227__auto__ = e86099;
var statearr_86100_86121 = state_86071;
(statearr_86100_86121[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86122 = state_86071;
state_86071 = G__86122;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43224__auto__ = function(state_86071){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43224__auto____1.call(this,state_86071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43224__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43224__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___86102,ch))
})();
var state__43339__auto__ = (function (){var statearr_86101 = f__43338__auto__.call(null);
(statearr_86101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___86102);

return statearr_86101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___86102,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__86123_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__86123_SHARP_));
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
var base_path_86126 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_86126){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e86125){if((e86125 instanceof Error)){
var e = e86125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_86126], null));
} else {
var e = e86125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_86126))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__86127){
var map__86136 = p__86127;
var map__86136__$1 = ((((!((map__86136 == null)))?((((map__86136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86136):map__86136);
var opts = map__86136__$1;
var build_id = cljs.core.get.call(null,map__86136__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__86136,map__86136__$1,opts,build_id){
return (function (p__86138){
var vec__86139 = p__86138;
var seq__86140 = cljs.core.seq.call(null,vec__86139);
var first__86141 = cljs.core.first.call(null,seq__86140);
var seq__86140__$1 = cljs.core.next.call(null,seq__86140);
var map__86142 = first__86141;
var map__86142__$1 = ((((!((map__86142 == null)))?((((map__86142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86142):map__86142);
var msg = map__86142__$1;
var msg_name = cljs.core.get.call(null,map__86142__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__86140__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__86139,seq__86140,first__86141,seq__86140__$1,map__86142,map__86142__$1,msg,msg_name,_,map__86136,map__86136__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__86139,seq__86140,first__86141,seq__86140__$1,map__86142,map__86142__$1,msg,msg_name,_,map__86136,map__86136__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__86136,map__86136__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__86150){
var vec__86151 = p__86150;
var seq__86152 = cljs.core.seq.call(null,vec__86151);
var first__86153 = cljs.core.first.call(null,seq__86152);
var seq__86152__$1 = cljs.core.next.call(null,seq__86152);
var map__86154 = first__86153;
var map__86154__$1 = ((((!((map__86154 == null)))?((((map__86154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86154):map__86154);
var msg = map__86154__$1;
var msg_name = cljs.core.get.call(null,map__86154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__86152__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__86156){
var map__86168 = p__86156;
var map__86168__$1 = ((((!((map__86168 == null)))?((((map__86168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86168):map__86168);
var on_compile_warning = cljs.core.get.call(null,map__86168__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__86168__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__86168,map__86168__$1,on_compile_warning,on_compile_fail){
return (function (p__86170){
var vec__86171 = p__86170;
var seq__86172 = cljs.core.seq.call(null,vec__86171);
var first__86173 = cljs.core.first.call(null,seq__86172);
var seq__86172__$1 = cljs.core.next.call(null,seq__86172);
var map__86174 = first__86173;
var map__86174__$1 = ((((!((map__86174 == null)))?((((map__86174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86174):map__86174);
var msg = map__86174__$1;
var msg_name = cljs.core.get.call(null,map__86174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__86172__$1;
var pred__86176 = cljs.core._EQ_;
var expr__86177 = msg_name;
if(cljs.core.truth_(pred__86176.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__86177))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__86176.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__86177))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__86168,map__86168__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,msg_hist,msg_names,msg){
return (function (state_86385){
var state_val_86386 = (state_86385[(1)]);
if((state_val_86386 === (7))){
var inst_86313 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86313)){
var statearr_86387_86433 = state_86385__$1;
(statearr_86387_86433[(1)] = (8));

} else {
var statearr_86388_86434 = state_86385__$1;
(statearr_86388_86434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (20))){
var inst_86379 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86389_86435 = state_86385__$1;
(statearr_86389_86435[(2)] = inst_86379);

(statearr_86389_86435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (27))){
var inst_86375 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86390_86436 = state_86385__$1;
(statearr_86390_86436[(2)] = inst_86375);

(statearr_86390_86436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (1))){
var inst_86306 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86306)){
var statearr_86391_86437 = state_86385__$1;
(statearr_86391_86437[(1)] = (2));

} else {
var statearr_86392_86438 = state_86385__$1;
(statearr_86392_86438[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (24))){
var inst_86377 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86393_86439 = state_86385__$1;
(statearr_86393_86439[(2)] = inst_86377);

(statearr_86393_86439[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (4))){
var inst_86383 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86385__$1,inst_86383);
} else {
if((state_val_86386 === (15))){
var inst_86381 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86394_86440 = state_86385__$1;
(statearr_86394_86440[(2)] = inst_86381);

(statearr_86394_86440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (21))){
var inst_86340 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86395_86441 = state_86385__$1;
(statearr_86395_86441[(2)] = inst_86340);

(statearr_86395_86441[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (31))){
var inst_86364 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86364)){
var statearr_86396_86442 = state_86385__$1;
(statearr_86396_86442[(1)] = (34));

} else {
var statearr_86397_86443 = state_86385__$1;
(statearr_86397_86443[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (32))){
var inst_86373 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86398_86444 = state_86385__$1;
(statearr_86398_86444[(2)] = inst_86373);

(statearr_86398_86444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (33))){
var inst_86362 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86399_86445 = state_86385__$1;
(statearr_86399_86445[(2)] = inst_86362);

(statearr_86399_86445[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (13))){
var inst_86327 = figwheel.client.heads_up.clear.call(null);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(16),inst_86327);
} else {
if((state_val_86386 === (22))){
var inst_86344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86345 = figwheel.client.heads_up.append_warning_message.call(null,inst_86344);
var state_86385__$1 = state_86385;
var statearr_86400_86446 = state_86385__$1;
(statearr_86400_86446[(2)] = inst_86345);

(statearr_86400_86446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (36))){
var inst_86371 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86401_86447 = state_86385__$1;
(statearr_86401_86447[(2)] = inst_86371);

(statearr_86401_86447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (29))){
var inst_86355 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86402_86448 = state_86385__$1;
(statearr_86402_86448[(2)] = inst_86355);

(statearr_86402_86448[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (6))){
var inst_86308 = (state_86385[(7)]);
var state_86385__$1 = state_86385;
var statearr_86403_86449 = state_86385__$1;
(statearr_86403_86449[(2)] = inst_86308);

(statearr_86403_86449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (28))){
var inst_86351 = (state_86385[(2)]);
var inst_86352 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86353 = figwheel.client.heads_up.display_warning.call(null,inst_86352);
var state_86385__$1 = (function (){var statearr_86404 = state_86385;
(statearr_86404[(8)] = inst_86351);

return statearr_86404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(29),inst_86353);
} else {
if((state_val_86386 === (25))){
var inst_86349 = figwheel.client.heads_up.clear.call(null);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(28),inst_86349);
} else {
if((state_val_86386 === (34))){
var inst_86366 = figwheel.client.heads_up.flash_loaded.call(null);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(37),inst_86366);
} else {
if((state_val_86386 === (17))){
var inst_86333 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86405_86450 = state_86385__$1;
(statearr_86405_86450[(2)] = inst_86333);

(statearr_86405_86450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (3))){
var inst_86325 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86325)){
var statearr_86406_86451 = state_86385__$1;
(statearr_86406_86451[(1)] = (13));

} else {
var statearr_86407_86452 = state_86385__$1;
(statearr_86407_86452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (12))){
var inst_86321 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86408_86453 = state_86385__$1;
(statearr_86408_86453[(2)] = inst_86321);

(statearr_86408_86453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (2))){
var inst_86308 = (state_86385[(7)]);
var inst_86308__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_86385__$1 = (function (){var statearr_86409 = state_86385;
(statearr_86409[(7)] = inst_86308__$1);

return statearr_86409;
})();
if(cljs.core.truth_(inst_86308__$1)){
var statearr_86410_86454 = state_86385__$1;
(statearr_86410_86454[(1)] = (5));

} else {
var statearr_86411_86455 = state_86385__$1;
(statearr_86411_86455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (23))){
var inst_86347 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86347)){
var statearr_86412_86456 = state_86385__$1;
(statearr_86412_86456[(1)] = (25));

} else {
var statearr_86413_86457 = state_86385__$1;
(statearr_86413_86457[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (35))){
var state_86385__$1 = state_86385;
var statearr_86414_86458 = state_86385__$1;
(statearr_86414_86458[(2)] = null);

(statearr_86414_86458[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (19))){
var inst_86342 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86342)){
var statearr_86415_86459 = state_86385__$1;
(statearr_86415_86459[(1)] = (22));

} else {
var statearr_86416_86460 = state_86385__$1;
(statearr_86416_86460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (11))){
var inst_86317 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86417_86461 = state_86385__$1;
(statearr_86417_86461[(2)] = inst_86317);

(statearr_86417_86461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (9))){
var inst_86319 = figwheel.client.heads_up.clear.call(null);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(12),inst_86319);
} else {
if((state_val_86386 === (5))){
var inst_86310 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_86385__$1 = state_86385;
var statearr_86418_86462 = state_86385__$1;
(statearr_86418_86462[(2)] = inst_86310);

(statearr_86418_86462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (14))){
var inst_86335 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86335)){
var statearr_86419_86463 = state_86385__$1;
(statearr_86419_86463[(1)] = (18));

} else {
var statearr_86420_86464 = state_86385__$1;
(statearr_86420_86464[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (26))){
var inst_86357 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_86385__$1 = state_86385;
if(cljs.core.truth_(inst_86357)){
var statearr_86421_86465 = state_86385__$1;
(statearr_86421_86465[(1)] = (30));

} else {
var statearr_86422_86466 = state_86385__$1;
(statearr_86422_86466[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (16))){
var inst_86329 = (state_86385[(2)]);
var inst_86330 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86331 = figwheel.client.heads_up.display_exception.call(null,inst_86330);
var state_86385__$1 = (function (){var statearr_86423 = state_86385;
(statearr_86423[(9)] = inst_86329);

return statearr_86423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(17),inst_86331);
} else {
if((state_val_86386 === (30))){
var inst_86359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86360 = figwheel.client.heads_up.display_warning.call(null,inst_86359);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(33),inst_86360);
} else {
if((state_val_86386 === (10))){
var inst_86323 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86424_86467 = state_86385__$1;
(statearr_86424_86467[(2)] = inst_86323);

(statearr_86424_86467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (18))){
var inst_86337 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86338 = figwheel.client.heads_up.display_exception.call(null,inst_86337);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(21),inst_86338);
} else {
if((state_val_86386 === (37))){
var inst_86368 = (state_86385[(2)]);
var state_86385__$1 = state_86385;
var statearr_86425_86468 = state_86385__$1;
(statearr_86425_86468[(2)] = inst_86368);

(statearr_86425_86468[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86386 === (8))){
var inst_86315 = figwheel.client.heads_up.flash_loaded.call(null);
var state_86385__$1 = state_86385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86385__$1,(11),inst_86315);
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
});})(c__43337__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43223__auto__,c__43337__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto____0 = (function (){
var statearr_86429 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86429[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto__);

(statearr_86429[(1)] = (1));

return statearr_86429;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto____1 = (function (state_86385){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_86385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e86430){if((e86430 instanceof Object)){
var ex__43227__auto__ = e86430;
var statearr_86431_86469 = state_86385;
(statearr_86431_86469[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86470 = state_86385;
state_86385 = G__86470;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto__ = function(state_86385){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto____1.call(this,state_86385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,msg_hist,msg_names,msg))
})();
var state__43339__auto__ = (function (){var statearr_86432 = f__43338__auto__.call(null);
(statearr_86432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_86432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,msg_hist,msg_names,msg))
);

return c__43337__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43337__auto___86533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___86533,ch){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___86533,ch){
return (function (state_86516){
var state_val_86517 = (state_86516[(1)]);
if((state_val_86517 === (1))){
var state_86516__$1 = state_86516;
var statearr_86518_86534 = state_86516__$1;
(statearr_86518_86534[(2)] = null);

(statearr_86518_86534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86517 === (2))){
var state_86516__$1 = state_86516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86516__$1,(4),ch);
} else {
if((state_val_86517 === (3))){
var inst_86514 = (state_86516[(2)]);
var state_86516__$1 = state_86516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86516__$1,inst_86514);
} else {
if((state_val_86517 === (4))){
var inst_86504 = (state_86516[(7)]);
var inst_86504__$1 = (state_86516[(2)]);
var state_86516__$1 = (function (){var statearr_86519 = state_86516;
(statearr_86519[(7)] = inst_86504__$1);

return statearr_86519;
})();
if(cljs.core.truth_(inst_86504__$1)){
var statearr_86520_86535 = state_86516__$1;
(statearr_86520_86535[(1)] = (5));

} else {
var statearr_86521_86536 = state_86516__$1;
(statearr_86521_86536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86517 === (5))){
var inst_86504 = (state_86516[(7)]);
var inst_86506 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_86504);
var state_86516__$1 = state_86516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86516__$1,(8),inst_86506);
} else {
if((state_val_86517 === (6))){
var state_86516__$1 = state_86516;
var statearr_86522_86537 = state_86516__$1;
(statearr_86522_86537[(2)] = null);

(statearr_86522_86537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86517 === (7))){
var inst_86512 = (state_86516[(2)]);
var state_86516__$1 = state_86516;
var statearr_86523_86538 = state_86516__$1;
(statearr_86523_86538[(2)] = inst_86512);

(statearr_86523_86538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86517 === (8))){
var inst_86508 = (state_86516[(2)]);
var state_86516__$1 = (function (){var statearr_86524 = state_86516;
(statearr_86524[(8)] = inst_86508);

return statearr_86524;
})();
var statearr_86525_86539 = state_86516__$1;
(statearr_86525_86539[(2)] = null);

(statearr_86525_86539[(1)] = (2));


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
});})(c__43337__auto___86533,ch))
;
return ((function (switch__43223__auto__,c__43337__auto___86533,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43224__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43224__auto____0 = (function (){
var statearr_86529 = [null,null,null,null,null,null,null,null,null];
(statearr_86529[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43224__auto__);

(statearr_86529[(1)] = (1));

return statearr_86529;
});
var figwheel$client$heads_up_plugin_$_state_machine__43224__auto____1 = (function (state_86516){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_86516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e86530){if((e86530 instanceof Object)){
var ex__43227__auto__ = e86530;
var statearr_86531_86540 = state_86516;
(statearr_86531_86540[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86541 = state_86516;
state_86516 = G__86541;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43224__auto__ = function(state_86516){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43224__auto____1.call(this,state_86516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43224__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43224__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___86533,ch))
})();
var state__43339__auto__ = (function (){var statearr_86532 = f__43338__auto__.call(null);
(statearr_86532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___86533);

return statearr_86532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___86533,ch))
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
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__){
return (function (state_86562){
var state_val_86563 = (state_86562[(1)]);
if((state_val_86563 === (1))){
var inst_86557 = cljs.core.async.timeout.call(null,(3000));
var state_86562__$1 = state_86562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86562__$1,(2),inst_86557);
} else {
if((state_val_86563 === (2))){
var inst_86559 = (state_86562[(2)]);
var inst_86560 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_86562__$1 = (function (){var statearr_86564 = state_86562;
(statearr_86564[(7)] = inst_86559);

return statearr_86564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86562__$1,inst_86560);
} else {
return null;
}
}
});})(c__43337__auto__))
;
return ((function (switch__43223__auto__,c__43337__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43224__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43224__auto____0 = (function (){
var statearr_86568 = [null,null,null,null,null,null,null,null];
(statearr_86568[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43224__auto__);

(statearr_86568[(1)] = (1));

return statearr_86568;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43224__auto____1 = (function (state_86562){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_86562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e86569){if((e86569 instanceof Object)){
var ex__43227__auto__ = e86569;
var statearr_86570_86572 = state_86562;
(statearr_86570_86572[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86573 = state_86562;
state_86562 = G__86573;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43224__auto__ = function(state_86562){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43224__auto____1.call(this,state_86562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43224__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43224__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__))
})();
var state__43339__auto__ = (function (){var statearr_86571 = f__43338__auto__.call(null);
(statearr_86571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_86571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__))
);

return c__43337__auto__;
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
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,figwheel_version,temp__6728__auto__){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,figwheel_version,temp__6728__auto__){
return (function (state_86596){
var state_val_86597 = (state_86596[(1)]);
if((state_val_86597 === (1))){
var inst_86590 = cljs.core.async.timeout.call(null,(2000));
var state_86596__$1 = state_86596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86596__$1,(2),inst_86590);
} else {
if((state_val_86597 === (2))){
var inst_86592 = (state_86596[(2)]);
var inst_86593 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_86594 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_86593);
var state_86596__$1 = (function (){var statearr_86598 = state_86596;
(statearr_86598[(7)] = inst_86592);

return statearr_86598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86596__$1,inst_86594);
} else {
return null;
}
}
});})(c__43337__auto__,figwheel_version,temp__6728__auto__))
;
return ((function (switch__43223__auto__,c__43337__auto__,figwheel_version,temp__6728__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto____0 = (function (){
var statearr_86602 = [null,null,null,null,null,null,null,null];
(statearr_86602[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto__);

(statearr_86602[(1)] = (1));

return statearr_86602;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto____1 = (function (state_86596){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_86596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e86603){if((e86603 instanceof Object)){
var ex__43227__auto__ = e86603;
var statearr_86604_86606 = state_86596;
(statearr_86604_86606[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86607 = state_86596;
state_86596 = G__86607;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto__ = function(state_86596){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto____1.call(this,state_86596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,figwheel_version,temp__6728__auto__))
})();
var state__43339__auto__ = (function (){var statearr_86605 = f__43338__auto__.call(null);
(statearr_86605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_86605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,figwheel_version,temp__6728__auto__))
);

return c__43337__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__86608){
var map__86612 = p__86608;
var map__86612__$1 = ((((!((map__86612 == null)))?((((map__86612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86612):map__86612);
var file = cljs.core.get.call(null,map__86612__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86612__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86612__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__86614 = "";
var G__86614__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__86614),cljs.core.str("file "),cljs.core.str(file)].join(''):G__86614);
var G__86614__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__86614__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__86614__$1);
if(cljs.core.truth_((function (){var and__34378__auto__ = line;
if(cljs.core.truth_(and__34378__auto__)){
return column;
} else {
return and__34378__auto__;
}
})())){
return [cljs.core.str(G__86614__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__86614__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__86615){
var map__86622 = p__86615;
var map__86622__$1 = ((((!((map__86622 == null)))?((((map__86622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86622):map__86622);
var ed = map__86622__$1;
var formatted_exception = cljs.core.get.call(null,map__86622__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__86622__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__86622__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__86624_86628 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__86625_86629 = null;
var count__86626_86630 = (0);
var i__86627_86631 = (0);
while(true){
if((i__86627_86631 < count__86626_86630)){
var msg_86632 = cljs.core._nth.call(null,chunk__86625_86629,i__86627_86631);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_86632);

var G__86633 = seq__86624_86628;
var G__86634 = chunk__86625_86629;
var G__86635 = count__86626_86630;
var G__86636 = (i__86627_86631 + (1));
seq__86624_86628 = G__86633;
chunk__86625_86629 = G__86634;
count__86626_86630 = G__86635;
i__86627_86631 = G__86636;
continue;
} else {
var temp__6728__auto___86637 = cljs.core.seq.call(null,seq__86624_86628);
if(temp__6728__auto___86637){
var seq__86624_86638__$1 = temp__6728__auto___86637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86624_86638__$1)){
var c__35293__auto___86639 = cljs.core.chunk_first.call(null,seq__86624_86638__$1);
var G__86640 = cljs.core.chunk_rest.call(null,seq__86624_86638__$1);
var G__86641 = c__35293__auto___86639;
var G__86642 = cljs.core.count.call(null,c__35293__auto___86639);
var G__86643 = (0);
seq__86624_86628 = G__86640;
chunk__86625_86629 = G__86641;
count__86626_86630 = G__86642;
i__86627_86631 = G__86643;
continue;
} else {
var msg_86644 = cljs.core.first.call(null,seq__86624_86638__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_86644);

var G__86645 = cljs.core.next.call(null,seq__86624_86638__$1);
var G__86646 = null;
var G__86647 = (0);
var G__86648 = (0);
seq__86624_86628 = G__86645;
chunk__86625_86629 = G__86646;
count__86626_86630 = G__86647;
i__86627_86631 = G__86648;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__86649){
var map__86652 = p__86649;
var map__86652__$1 = ((((!((map__86652 == null)))?((((map__86652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86652):map__86652);
var w = map__86652__$1;
var message = cljs.core.get.call(null,map__86652__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__34378__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34378__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34378__auto__;
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
var seq__86664 = cljs.core.seq.call(null,plugins);
var chunk__86665 = null;
var count__86666 = (0);
var i__86667 = (0);
while(true){
if((i__86667 < count__86666)){
var vec__86668 = cljs.core._nth.call(null,chunk__86665,i__86667);
var k = cljs.core.nth.call(null,vec__86668,(0),null);
var plugin = cljs.core.nth.call(null,vec__86668,(1),null);
if(cljs.core.truth_(plugin)){
var pl_86674 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__86664,chunk__86665,count__86666,i__86667,pl_86674,vec__86668,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_86674.call(null,msg_hist);
});})(seq__86664,chunk__86665,count__86666,i__86667,pl_86674,vec__86668,k,plugin))
);
} else {
}

var G__86675 = seq__86664;
var G__86676 = chunk__86665;
var G__86677 = count__86666;
var G__86678 = (i__86667 + (1));
seq__86664 = G__86675;
chunk__86665 = G__86676;
count__86666 = G__86677;
i__86667 = G__86678;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__86664);
if(temp__6728__auto__){
var seq__86664__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86664__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__86664__$1);
var G__86679 = cljs.core.chunk_rest.call(null,seq__86664__$1);
var G__86680 = c__35293__auto__;
var G__86681 = cljs.core.count.call(null,c__35293__auto__);
var G__86682 = (0);
seq__86664 = G__86679;
chunk__86665 = G__86680;
count__86666 = G__86681;
i__86667 = G__86682;
continue;
} else {
var vec__86671 = cljs.core.first.call(null,seq__86664__$1);
var k = cljs.core.nth.call(null,vec__86671,(0),null);
var plugin = cljs.core.nth.call(null,vec__86671,(1),null);
if(cljs.core.truth_(plugin)){
var pl_86683 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__86664,chunk__86665,count__86666,i__86667,pl_86683,vec__86671,k,plugin,seq__86664__$1,temp__6728__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_86683.call(null,msg_hist);
});})(seq__86664,chunk__86665,count__86666,i__86667,pl_86683,vec__86671,k,plugin,seq__86664__$1,temp__6728__auto__))
);
} else {
}

var G__86684 = cljs.core.next.call(null,seq__86664__$1);
var G__86685 = null;
var G__86686 = (0);
var G__86687 = (0);
seq__86664 = G__86684;
chunk__86665 = G__86685;
count__86666 = G__86686;
i__86667 = G__86687;
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
var args86688 = [];
var len__35573__auto___86695 = arguments.length;
var i__35574__auto___86696 = (0);
while(true){
if((i__35574__auto___86696 < len__35573__auto___86695)){
args86688.push((arguments[i__35574__auto___86696]));

var G__86697 = (i__35574__auto___86696 + (1));
i__35574__auto___86696 = G__86697;
continue;
} else {
}
break;
}

var G__86690 = args86688.length;
switch (G__86690) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86688.length)].join('')));

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

var seq__86691_86699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__86692_86700 = null;
var count__86693_86701 = (0);
var i__86694_86702 = (0);
while(true){
if((i__86694_86702 < count__86693_86701)){
var msg_86703 = cljs.core._nth.call(null,chunk__86692_86700,i__86694_86702);
figwheel.client.socket.handle_incoming_message.call(null,msg_86703);

var G__86704 = seq__86691_86699;
var G__86705 = chunk__86692_86700;
var G__86706 = count__86693_86701;
var G__86707 = (i__86694_86702 + (1));
seq__86691_86699 = G__86704;
chunk__86692_86700 = G__86705;
count__86693_86701 = G__86706;
i__86694_86702 = G__86707;
continue;
} else {
var temp__6728__auto___86708 = cljs.core.seq.call(null,seq__86691_86699);
if(temp__6728__auto___86708){
var seq__86691_86709__$1 = temp__6728__auto___86708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86691_86709__$1)){
var c__35293__auto___86710 = cljs.core.chunk_first.call(null,seq__86691_86709__$1);
var G__86711 = cljs.core.chunk_rest.call(null,seq__86691_86709__$1);
var G__86712 = c__35293__auto___86710;
var G__86713 = cljs.core.count.call(null,c__35293__auto___86710);
var G__86714 = (0);
seq__86691_86699 = G__86711;
chunk__86692_86700 = G__86712;
count__86693_86701 = G__86713;
i__86694_86702 = G__86714;
continue;
} else {
var msg_86715 = cljs.core.first.call(null,seq__86691_86709__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_86715);

var G__86716 = cljs.core.next.call(null,seq__86691_86709__$1);
var G__86717 = null;
var G__86718 = (0);
var G__86719 = (0);
seq__86691_86699 = G__86716;
chunk__86692_86700 = G__86717;
count__86693_86701 = G__86718;
i__86694_86702 = G__86719;
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
var args__35580__auto__ = [];
var len__35573__auto___86724 = arguments.length;
var i__35574__auto___86725 = (0);
while(true){
if((i__35574__auto___86725 < len__35573__auto___86724)){
args__35580__auto__.push((arguments[i__35574__auto___86725]));

var G__86726 = (i__35574__auto___86725 + (1));
i__35574__auto___86725 = G__86726;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__86721){
var map__86722 = p__86721;
var map__86722__$1 = ((((!((map__86722 == null)))?((((map__86722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86722):map__86722);
var opts = map__86722__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq86720){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86720));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e86728){if((e86728 instanceof Error)){
var e = e86728;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e86728;

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
return (function (p__86732){
var map__86733 = p__86732;
var map__86733__$1 = ((((!((map__86733 == null)))?((((map__86733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86733):map__86733);
var msg_name = cljs.core.get.call(null,map__86733__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488154337652