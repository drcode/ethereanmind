// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ui.parser_async');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.util');
goog.require('om.next.impl.parser');
goog.require('cljs.core.async');
ui.parser_async.async_query_result = (function ui$parser_async$async_query_result(result){
var val_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__19531__auto___27485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19531__auto___27485,val_chan){
return (function (){
var f__19532__auto__ = (function (){var switch__19407__auto__ = ((function (c__19531__auto___27485,val_chan){
return (function (state_27424){
var state_val_27425 = (state_27424[(1)]);
if((state_val_27425 === (7))){
var inst_27352 = (state_27424[(7)]);
var inst_27351 = (state_27424[(8)]);
var inst_27350 = (state_27424[(9)]);
var inst_27349 = (state_27424[(10)]);
var inst_27377 = (state_27424[(2)]);
var inst_27378 = (inst_27352 + (1));
var tmp27426 = inst_27351;
var tmp27427 = inst_27350;
var tmp27428 = inst_27349;
var inst_27349__$1 = tmp27428;
var inst_27350__$1 = tmp27427;
var inst_27351__$1 = tmp27426;
var inst_27352__$1 = inst_27378;
var state_27424__$1 = (function (){var statearr_27429 = state_27424;
(statearr_27429[(7)] = inst_27352__$1);

(statearr_27429[(8)] = inst_27351__$1);

(statearr_27429[(9)] = inst_27350__$1);

(statearr_27429[(10)] = inst_27349__$1);

(statearr_27429[(11)] = inst_27377);

return statearr_27429;
})();
var statearr_27430_27486 = state_27424__$1;
(statearr_27430_27486[(2)] = null);

(statearr_27430_27486[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (20))){
var inst_27395 = (state_27424[(12)]);
var inst_27399 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_27395);
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27424__$1,(23),inst_27399);
} else {
if((state_val_27425 === (1))){
var inst_27348 = cljs.core.seq(result);
var inst_27349 = inst_27348;
var inst_27350 = null;
var inst_27351 = (0);
var inst_27352 = (0);
var state_27424__$1 = (function (){var statearr_27431 = state_27424;
(statearr_27431[(7)] = inst_27352);

(statearr_27431[(8)] = inst_27351);

(statearr_27431[(9)] = inst_27350);

(statearr_27431[(10)] = inst_27349);

return statearr_27431;
})();
var statearr_27432_27487 = state_27424__$1;
(statearr_27432_27487[(2)] = null);

(statearr_27432_27487[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (24))){
var inst_27404 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27433_27488 = state_27424__$1;
(statearr_27433_27488[(2)] = inst_27404);

(statearr_27433_27488[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (4))){
var inst_27352 = (state_27424[(7)]);
var inst_27350 = (state_27424[(9)]);
var inst_27362 = (state_27424[(13)]);
var inst_27360 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27350,inst_27352);
var inst_27361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27360,(0),null);
var inst_27362__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27360,(1),null);
var inst_27363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27364 = cljs.core.map_QMARK_(inst_27362__$1);
var state_27424__$1 = (function (){var statearr_27434 = state_27424;
(statearr_27434[(14)] = inst_27363);

(statearr_27434[(13)] = inst_27362__$1);

(statearr_27434[(15)] = inst_27361);

return statearr_27434;
})();
if(inst_27364){
var statearr_27435_27489 = state_27424__$1;
(statearr_27435_27489[(1)] = (8));

} else {
var statearr_27436_27490 = state_27424__$1;
(statearr_27436_27490[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (15))){
var inst_27417 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27437_27491 = state_27424__$1;
(statearr_27437_27491[(2)] = inst_27417);

(statearr_27437_27491[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (21))){
var inst_27395 = (state_27424[(12)]);
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27424__$1,(24),inst_27395);
} else {
if((state_val_27425 === (13))){
var inst_27381 = (state_27424[(16)]);
var inst_27383 = cljs.core.chunked_seq_QMARK_(inst_27381);
var state_27424__$1 = state_27424;
if(inst_27383){
var statearr_27438_27492 = state_27424__$1;
(statearr_27438_27492[(1)] = (16));

} else {
var statearr_27439_27493 = state_27424__$1;
(statearr_27439_27493[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (22))){
var inst_27394 = (state_27424[(17)]);
var inst_27396 = (state_27424[(18)]);
var inst_27406 = (state_27424[(2)]);
var inst_27407 = [inst_27394,inst_27406];
var inst_27408 = (new cljs.core.PersistentVector(null,2,(5),inst_27396,inst_27407,null));
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27424__$1,(19),val_chan,inst_27408);
} else {
if((state_val_27425 === (6))){
var inst_27419 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27440_27494 = state_27424__$1;
(statearr_27440_27494[(2)] = inst_27419);

(statearr_27440_27494[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (17))){
var inst_27381 = (state_27424[(16)]);
var inst_27395 = (state_27424[(12)]);
var inst_27393 = cljs.core.first(inst_27381);
var inst_27394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27393,(0),null);
var inst_27395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27393,(1),null);
var inst_27396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27397 = cljs.core.map_QMARK_(inst_27395__$1);
var state_27424__$1 = (function (){var statearr_27441 = state_27424;
(statearr_27441[(17)] = inst_27394);

(statearr_27441[(12)] = inst_27395__$1);

(statearr_27441[(18)] = inst_27396);

return statearr_27441;
})();
if(inst_27397){
var statearr_27442_27495 = state_27424__$1;
(statearr_27442_27495[(1)] = (20));

} else {
var statearr_27443_27496 = state_27424__$1;
(statearr_27443_27496[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (3))){
var inst_27421 = (state_27424[(2)]);
var inst_27422 = cljs.core.async.close_BANG_(val_chan);
var state_27424__$1 = (function (){var statearr_27444 = state_27424;
(statearr_27444[(19)] = inst_27421);

return statearr_27444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27424__$1,inst_27422);
} else {
if((state_val_27425 === (12))){
var inst_27371 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27445_27497 = state_27424__$1;
(statearr_27445_27497[(2)] = inst_27371);

(statearr_27445_27497[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (2))){
var inst_27352 = (state_27424[(7)]);
var inst_27351 = (state_27424[(8)]);
var inst_27354 = (inst_27352 < inst_27351);
var inst_27355 = inst_27354;
var state_27424__$1 = state_27424;
if(cljs.core.truth_(inst_27355)){
var statearr_27446_27498 = state_27424__$1;
(statearr_27446_27498[(1)] = (4));

} else {
var statearr_27447_27499 = state_27424__$1;
(statearr_27447_27499[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (23))){
var inst_27401 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27448_27500 = state_27424__$1;
(statearr_27448_27500[(2)] = inst_27401);

(statearr_27448_27500[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (19))){
var inst_27381 = (state_27424[(16)]);
var inst_27410 = (state_27424[(2)]);
var inst_27411 = cljs.core.next(inst_27381);
var inst_27349 = inst_27411;
var inst_27350 = null;
var inst_27351 = (0);
var inst_27352 = (0);
var state_27424__$1 = (function (){var statearr_27449 = state_27424;
(statearr_27449[(20)] = inst_27410);

(statearr_27449[(7)] = inst_27352);

(statearr_27449[(8)] = inst_27351);

(statearr_27449[(9)] = inst_27350);

(statearr_27449[(10)] = inst_27349);

return statearr_27449;
})();
var statearr_27450_27501 = state_27424__$1;
(statearr_27450_27501[(2)] = null);

(statearr_27450_27501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (11))){
var inst_27368 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27451_27502 = state_27424__$1;
(statearr_27451_27502[(2)] = inst_27368);

(statearr_27451_27502[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (9))){
var inst_27362 = (state_27424[(13)]);
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27424__$1,(12),inst_27362);
} else {
if((state_val_27425 === (5))){
var inst_27381 = (state_27424[(16)]);
var inst_27349 = (state_27424[(10)]);
var inst_27381__$1 = cljs.core.seq(inst_27349);
var state_27424__$1 = (function (){var statearr_27452 = state_27424;
(statearr_27452[(16)] = inst_27381__$1);

return statearr_27452;
})();
if(inst_27381__$1){
var statearr_27453_27503 = state_27424__$1;
(statearr_27453_27503[(1)] = (13));

} else {
var statearr_27454_27504 = state_27424__$1;
(statearr_27454_27504[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (14))){
var state_27424__$1 = state_27424;
var statearr_27455_27505 = state_27424__$1;
(statearr_27455_27505[(2)] = null);

(statearr_27455_27505[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (16))){
var inst_27381 = (state_27424[(16)]);
var inst_27385 = cljs.core.chunk_first(inst_27381);
var inst_27386 = cljs.core.chunk_rest(inst_27381);
var inst_27387 = cljs.core.count(inst_27385);
var inst_27349 = inst_27386;
var inst_27350 = inst_27385;
var inst_27351 = inst_27387;
var inst_27352 = (0);
var state_27424__$1 = (function (){var statearr_27456 = state_27424;
(statearr_27456[(7)] = inst_27352);

(statearr_27456[(8)] = inst_27351);

(statearr_27456[(9)] = inst_27350);

(statearr_27456[(10)] = inst_27349);

return statearr_27456;
})();
var statearr_27457_27506 = state_27424__$1;
(statearr_27457_27506[(2)] = null);

(statearr_27457_27506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (10))){
var inst_27363 = (state_27424[(14)]);
var inst_27361 = (state_27424[(15)]);
var inst_27373 = (state_27424[(2)]);
var inst_27374 = [inst_27361,inst_27373];
var inst_27375 = (new cljs.core.PersistentVector(null,2,(5),inst_27363,inst_27374,null));
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27424__$1,(7),val_chan,inst_27375);
} else {
if((state_val_27425 === (18))){
var inst_27414 = (state_27424[(2)]);
var state_27424__$1 = state_27424;
var statearr_27458_27507 = state_27424__$1;
(statearr_27458_27507[(2)] = inst_27414);

(statearr_27458_27507[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27425 === (8))){
var inst_27362 = (state_27424[(13)]);
var inst_27366 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_27362);
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27424__$1,(11),inst_27366);
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
});})(c__19531__auto___27485,val_chan))
;
return ((function (switch__19407__auto__,c__19531__auto___27485,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__19408__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__19408__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27462[(0)] = ui$parser_async$async_query_result_$_state_machine__19408__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var ui$parser_async$async_query_result_$_state_machine__19408__auto____1 = (function (state_27424){
while(true){
var ret_value__19409__auto__ = (function (){try{while(true){
var result__19410__auto__ = switch__19407__auto__(state_27424);
if(cljs.core.keyword_identical_QMARK_(result__19410__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19410__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__19411__auto__ = e27463;
var statearr_27464_27508 = state_27424;
(statearr_27464_27508[(5)] = ex__19411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27424);

return cljs.core.cst$kw$recur;
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19409__auto__,cljs.core.cst$kw$recur)){
var G__27509 = state_27424;
state_27424 = G__27509;
continue;
} else {
return ret_value__19409__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__19408__auto__ = function(state_27424){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__19408__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__19408__auto____1.call(this,state_27424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__19408__auto____0;
ui$parser_async$async_query_result_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__19408__auto____1;
return ui$parser_async$async_query_result_$_state_machine__19408__auto__;
})()
;})(switch__19407__auto__,c__19531__auto___27485,val_chan))
})();
var state__19533__auto__ = (function (){var statearr_27465 = (f__19532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19532__auto__.cljs$core$IFn$_invoke$arity$0() : f__19532__auto__.call(null));
(statearr_27465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19531__auto___27485);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19533__auto__);
});})(c__19531__auto___27485,val_chan))
);


var c__19531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19531__auto__,val_chan){
return (function (){
var f__19532__auto__ = (function (){var switch__19407__auto__ = ((function (c__19531__auto__,val_chan){
return (function (state_27473){
var state_val_27474 = (state_27473[(1)]);
if((state_val_27474 === (1))){
var inst_27467 = (function (){return ((function (state_val_27474,c__19531__auto__,val_chan){
return (function (acc,p__27466){
var vec__27475 = p__27466;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
;})(state_val_27474,c__19531__auto__,val_chan))
})();
var inst_27468 = cljs.core.PersistentHashMap.EMPTY;
var inst_27469 = cljs.core.async.reduce(inst_27467,inst_27468,val_chan);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27473__$1,(2),inst_27469);
} else {
if((state_val_27474 === (2))){
var inst_27471 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27473__$1,inst_27471);
} else {
return null;
}
}
});})(c__19531__auto__,val_chan))
;
return ((function (switch__19407__auto__,c__19531__auto__,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__19408__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__19408__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null];
(statearr_27481[(0)] = ui$parser_async$async_query_result_$_state_machine__19408__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var ui$parser_async$async_query_result_$_state_machine__19408__auto____1 = (function (state_27473){
while(true){
var ret_value__19409__auto__ = (function (){try{while(true){
var result__19410__auto__ = switch__19407__auto__(state_27473);
if(cljs.core.keyword_identical_QMARK_(result__19410__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19410__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__19411__auto__ = e27482;
var statearr_27483_27510 = state_27473;
(statearr_27483_27510[(5)] = ex__19411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27473);

return cljs.core.cst$kw$recur;
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19409__auto__,cljs.core.cst$kw$recur)){
var G__27511 = state_27473;
state_27473 = G__27511;
continue;
} else {
return ret_value__19409__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__19408__auto__ = function(state_27473){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__19408__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__19408__auto____1.call(this,state_27473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__19408__auto____0;
ui$parser_async$async_query_result_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__19408__auto____1;
return ui$parser_async$async_query_result_$_state_machine__19408__auto__;
})()
;})(switch__19407__auto__,c__19531__auto__,val_chan))
})();
var state__19533__auto__ = (function (){var statearr_27484 = (f__19532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19532__auto__.cljs$core$IFn$_invoke$arity$0() : f__19532__auto__.call(null));
(statearr_27484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19531__auto__);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19533__auto__);
});})(c__19531__auto__,val_chan))
);

return c__19531__auto__;
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
ui.parser_async.parser = (function ui$parser_async$parser(p__27512){
var map__30205 = p__27512;
var map__30205__$1 = ((((!((map__30205 == null)))?((((map__30205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30205):map__30205);
var config = map__30205__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$mutate);
return ((function (map__30205,map__30205__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self = null;
var ui$parser_async$parser_$_self__2 = (function (env,query){
return ui$parser_async$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var ui$parser_async$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__6417__auto__ = cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__31552 = (function (){var G__31553 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,ui$parser_async$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_DASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
if(!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31553,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY);
} else {
return G__31553;
}
})();
var map__31552__$1 = ((((!((map__31552 == null)))?((((map__31552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31552):map__31552);
var env__$1 = map__31552__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31552__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function ui$parser_async$parser_$_self_$_step(ret,expr){
var c__19531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function (){
var f__19532__auto__ = (function (){var switch__19407__auto__ = ((function (c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function (state_32683){
var state_val_32684 = (state_32683[(1)]);
if((state_val_32684 === (65))){
var inst_32517 = (state_32683[(7)]);
var inst_32648 = cljs.core.first(inst_32517);
var state_32683__$1 = state_32683;
var statearr_32685_32897 = state_32683__$1;
(statearr_32685_32897[(2)] = inst_32648);

(statearr_32685_32897[(1)] = (67));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (70))){
var inst_32596 = (state_32683[(8)]);
var inst_32667 = (state_32683[(2)]);
var inst_32668 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_32596) : cljs.core.deref.call(null,inst_32596));
var state_32683__$1 = (function (){var statearr_32686 = state_32683;
(statearr_32686[(9)] = inst_32667);

return statearr_32686;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32687_32898 = state_32683__$1;
(statearr_32687_32898[(1)] = (72));

} else {
var statearr_32688_32899 = state_32683__$1;
(statearr_32688_32899[(1)] = (73));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (62))){
var inst_32517 = (state_32683[(7)]);
var inst_32646 = om.util.unique_ident_QMARK_(inst_32517);
var state_32683__$1 = state_32683;
if(inst_32646){
var statearr_32689_32900 = state_32683__$1;
(statearr_32689_32900[(1)] = (65));

} else {
var statearr_32690_32901 = state_32683__$1;
(statearr_32690_32901[(1)] = (66));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (74))){
var inst_32677 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32691_32902 = state_32683__$1;
(statearr_32691_32902[(2)] = inst_32677);

(statearr_32691_32902[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (7))){
var inst_32507 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32692_32903 = state_32683__$1;
(statearr_32692_32903[(2)] = inst_32507);

(statearr_32692_32903[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (59))){
var state_32683__$1 = state_32683;
var statearr_32693_32904 = state_32683__$1;
(statearr_32693_32904[(2)] = null);

(statearr_32693_32904[(1)] = (61));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (20))){
var inst_32565 = (state_32683[(2)]);
var inst_32566 = (target == null);
var inst_32567 = cljs.core.not(inst_32566);
var state_32683__$1 = (function (){var statearr_32694 = state_32683;
(statearr_32694[(10)] = inst_32565);

return statearr_32694;
})();
if(inst_32567){
var statearr_32695_32905 = state_32683__$1;
(statearr_32695_32905[(1)] = (29));

} else {
var statearr_32696_32906 = state_32683__$1;
(statearr_32696_32906[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (72))){
var inst_32517 = (state_32683[(7)]);
var inst_32667 = (state_32683[(9)]);
var inst_32596 = (state_32683[(8)]);
var inst_32670 = [cljs.core.cst$kw$om$next_SLASH_error];
var inst_32671 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_32596) : cljs.core.deref.call(null,inst_32596));
var inst_32672 = [inst_32671];
var inst_32673 = cljs.core.PersistentHashMap.fromArrays(inst_32670,inst_32672);
var inst_32674 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32667,inst_32517,inst_32673);
var state_32683__$1 = state_32683;
var statearr_32697_32907 = state_32683__$1;
(statearr_32697_32907[(2)] = inst_32674);

(statearr_32697_32907[(1)] = (74));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (58))){
var inst_32625 = (state_32683[(11)]);
var inst_32640 = (state_32683[(2)]);
var inst_32642 = (inst_32625 == null);
var inst_32643 = cljs.core.not(inst_32642);
var state_32683__$1 = (function (){var statearr_32698 = state_32683;
(statearr_32698[(12)] = inst_32640);

return statearr_32698;
})();
if(inst_32643){
var statearr_32699_32908 = state_32683__$1;
(statearr_32699_32908[(1)] = (62));

} else {
var statearr_32700_32909 = state_32683__$1;
(statearr_32700_32909[(1)] = (63));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (60))){
var inst_32518 = (state_32683[(13)]);
var inst_32632 = [cljs.core.str(inst_32518),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('');
var inst_32633 = [cljs.core.str("Assert failed: "),cljs.core.str(inst_32632),cljs.core.str("\n"),cljs.core.str("(or (nil? value) (map? value))")].join('');
var inst_32634 = (new Error(inst_32633));
var inst_32635 = (function(){throw inst_32634})();
var state_32683__$1 = state_32683;
var statearr_32701_32910 = state_32683__$1;
(statearr_32701_32910[(2)] = inst_32635);

(statearr_32701_32910[(1)] = (61));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (27))){
var inst_32557 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('');
var inst_32558 = (new Error(inst_32557));
var inst_32559 = (function(){throw inst_32558})();
var state_32683__$1 = state_32683;
var statearr_32702_32911 = state_32683__$1;
(statearr_32702_32911[(2)] = inst_32559);

(statearr_32702_32911[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (1))){
var inst_32495 = (state_32683[(14)]);
var inst_32495__$1 = om.next.impl.parser.expr__GT_ast(expr);
var inst_32497 = (inst_32495__$1 == null);
var inst_32498 = cljs.core.not(inst_32497);
var state_32683__$1 = (function (){var statearr_32703 = state_32683;
(statearr_32703[(14)] = inst_32495__$1);

return statearr_32703;
})();
if(inst_32498){
var statearr_32704_32912 = state_32683__$1;
(statearr_32704_32912[(1)] = (2));

} else {
var statearr_32705_32913 = state_32683__$1;
(statearr_32705_32913[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (69))){
var inst_32655 = (state_32683[(15)]);
var state_32683__$1 = state_32683;
var statearr_32706_32914 = state_32683__$1;
(statearr_32706_32914[(2)] = inst_32655);

(statearr_32706_32914[(1)] = (70));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (24))){
var inst_32518 = (state_32683[(13)]);
var inst_32543 = (state_32683[(16)]);
var inst_32519 = (state_32683[(17)]);
var inst_32552 = (state_32683[(2)]);
var inst_32553 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_32543,inst_32518,inst_32519) : mutate.call(null,inst_32543,inst_32518,inst_32519));
var state_32683__$1 = (function (){var statearr_32707 = state_32683;
(statearr_32707[(18)] = inst_32552);

return statearr_32707;
})();
var statearr_32708_32915 = state_32683__$1;
(statearr_32708_32915[(2)] = inst_32553);

(statearr_32708_32915[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (55))){
var inst_32597 = (state_32683[(19)]);
var inst_32565 = (state_32683[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32683,(51),cljs.core.cst$kw$default,null,(50));
var inst_32617 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(inst_32565);
var inst_32618 = (inst_32617.cljs$core$IFn$_invoke$arity$0 ? inst_32617.cljs$core$IFn$_invoke$arity$0() : inst_32617.call(null));
var inst_32619 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32597,inst_32618) : cljs.core.reset_BANG_.call(null,inst_32597,inst_32618));
var state_32683__$1 = state_32683;
var statearr_32709_32916 = state_32683__$1;
(statearr_32709_32916[(2)] = inst_32619);


cljs.core.async.impl.ioc_helpers.process_exception(state_32683__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (39))){
var inst_32515 = (state_32683[(20)]);
var inst_32565 = (state_32683[(10)]);
var inst_32587 = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(inst_32515);
var inst_32588 = (inst_32587 == null);
var inst_32589 = cljs.core.contains_QMARK_(inst_32565,cljs.core.cst$kw$value);
var inst_32590 = (inst_32588) || (inst_32589);
var state_32683__$1 = state_32683;
var statearr_32710_32917 = state_32683__$1;
(statearr_32710_32917[(2)] = inst_32590);

(statearr_32710_32917[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (46))){
var inst_32604 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32604)){
var statearr_32711_32918 = state_32683__$1;
(statearr_32711_32918[(1)] = (47));

} else {
var statearr_32712_32919 = state_32683__$1;
(statearr_32712_32919[(1)] = (48));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (4))){
var inst_32510 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32510)){
var statearr_32713_32920 = state_32683__$1;
(statearr_32713_32920[(1)] = (8));

} else {
var statearr_32714_32921 = state_32683__$1;
(statearr_32714_32921[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (54))){
var inst_32613 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32715_32922 = state_32683__$1;
(statearr_32715_32922[(2)] = inst_32613);


cljs.core.async.impl.ioc_helpers.process_exception(state_32683__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (15))){
var inst_32530 = (state_32683[(21)]);
var state_32683__$1 = state_32683;
var statearr_32716_32923 = state_32683__$1;
(statearr_32716_32923[(2)] = inst_32530);

(statearr_32716_32923[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (48))){
var state_32683__$1 = state_32683;
var statearr_32717_32924 = state_32683__$1;
(statearr_32717_32924[(2)] = null);

(statearr_32717_32924[(1)] = (49));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (50))){
var inst_32621 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32718_32925 = state_32683__$1;
(statearr_32718_32925[(2)] = inst_32621);

(statearr_32718_32925[(1)] = (49));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (21))){
var state_32683__$1 = state_32683;
if(cljs.core.truth_(mutate)){
var statearr_32719_32926 = state_32683__$1;
(statearr_32719_32926[(1)] = (22));

} else {
var statearr_32720_32927 = state_32683__$1;
(statearr_32720_32927[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (31))){
var inst_32681 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32683__$1,inst_32681);
} else {
if((state_val_32684 === (32))){
var inst_32573 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,expr);
var state_32683__$1 = state_32683;
var statearr_32721_32928 = state_32683__$1;
(statearr_32721_32928[(2)] = inst_32573);

(statearr_32721_32928[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (40))){
var inst_32592 = (state_32683[(2)]);
var inst_32593 = cljs.core.not(inst_32592);
var state_32683__$1 = state_32683;
if(inst_32593){
var statearr_32722_32929 = state_32683__$1;
(statearr_32722_32929[(1)] = (41));

} else {
var statearr_32723_32930 = state_32683__$1;
(statearr_32723_32930[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (56))){
var inst_32625 = (state_32683[(11)]);
var inst_32627 = (inst_32625 == null);
var inst_32628 = cljs.core.map_QMARK_(inst_32625);
var inst_32629 = (inst_32627) || (inst_32628);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32629)){
var statearr_32724_32931 = state_32683__$1;
(statearr_32724_32931[(1)] = (59));

} else {
var statearr_32725_32932 = state_32683__$1;
(statearr_32725_32932[(1)] = (60));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (33))){
var state_32683__$1 = state_32683;
var statearr_32726_32933 = state_32683__$1;
(statearr_32726_32933[(2)] = ret);

(statearr_32726_32933[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (13))){
var inst_32516 = (state_32683[(22)]);
var inst_32530 = (state_32683[(2)]);
var inst_32531 = cljs.core.cst$sym$$$$;
var inst_32532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32531,inst_32516);
var state_32683__$1 = (function (){var statearr_32727 = state_32683;
(statearr_32727[(21)] = inst_32530);

return statearr_32727;
})();
if(inst_32532){
var statearr_32728_32934 = state_32683__$1;
(statearr_32728_32934[(1)] = (14));

} else {
var statearr_32729_32935 = state_32683__$1;
(statearr_32729_32935[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (22))){
var state_32683__$1 = state_32683;
var statearr_32730_32936 = state_32683__$1;
(statearr_32730_32936[(2)] = null);

(statearr_32730_32936[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (36))){
var inst_32576 = (state_32683[(23)]);
var state_32683__$1 = state_32683;
var statearr_32731_32937 = state_32683__$1;
(statearr_32731_32937[(2)] = inst_32576);

(statearr_32731_32937[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (41))){
var state_32683__$1 = state_32683;
var statearr_32732_32938 = state_32683__$1;
(statearr_32732_32938[(2)] = ret);

(statearr_32732_32938[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (43))){
var inst_32679 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32733_32939 = state_32683__$1;
(statearr_32733_32939[(2)] = inst_32679);

(statearr_32733_32939[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (61))){
var inst_32637 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32734_32940 = state_32683__$1;
(statearr_32734_32940[(2)] = inst_32637);

(statearr_32734_32940[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (29))){
var inst_32569 = (state_32683[(24)]);
var inst_32565 = (state_32683[(10)]);
var inst_32569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32565,target);
var inst_32571 = inst_32569__$1 === true;
var state_32683__$1 = (function (){var statearr_32735 = state_32683;
(statearr_32735[(24)] = inst_32569__$1);

return statearr_32735;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32736_32941 = state_32683__$1;
(statearr_32736_32941[(1)] = (32));

} else {
var statearr_32737_32942 = state_32683__$1;
(statearr_32737_32942[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (44))){
var inst_32565 = (state_32683[(10)]);
var inst_32599 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(inst_32565);
var inst_32600 = (inst_32599 == null);
var inst_32601 = cljs.core.not(inst_32600);
var state_32683__$1 = state_32683;
var statearr_32738_32943 = state_32683__$1;
(statearr_32738_32943[(2)] = inst_32601);

(statearr_32738_32943[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (6))){
var state_32683__$1 = state_32683;
var statearr_32739_32944 = state_32683__$1;
(statearr_32739_32944[(2)] = false);

(statearr_32739_32944[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (28))){
var inst_32518 = (state_32683[(13)]);
var inst_32543 = (state_32683[(16)]);
var inst_32519 = (state_32683[(17)]);
var inst_32561 = (state_32683[(2)]);
var inst_32562 = (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(inst_32543,inst_32518,inst_32519) : read.call(null,inst_32543,inst_32518,inst_32519));
var state_32683__$1 = (function (){var statearr_32740 = state_32683;
(statearr_32740[(25)] = inst_32561);

return statearr_32740;
})();
var statearr_32741_32945 = state_32683__$1;
(statearr_32741_32945[(2)] = inst_32562);

(statearr_32741_32945[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (64))){
var inst_32597 = (state_32683[(19)]);
var inst_32655 = (state_32683[(2)]);
var inst_32656 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_32597) : cljs.core.deref.call(null,inst_32597));
var state_32683__$1 = (function (){var statearr_32742 = state_32683;
(statearr_32742[(15)] = inst_32655);

return statearr_32742;
})();
if(cljs.core.truth_(inst_32656)){
var statearr_32743_32946 = state_32683__$1;
(statearr_32743_32946[(1)] = (68));

} else {
var statearr_32744_32947 = state_32683__$1;
(statearr_32744_32947[(1)] = (69));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (51))){
var inst_32606 = (state_32683[(26)]);
var inst_32606__$1 = (state_32683[(2)]);
var inst_32607 = om.next.impl.parser.rethrow_QMARK_(inst_32606__$1);
var state_32683__$1 = (function (){var statearr_32745 = state_32683;
(statearr_32745[(26)] = inst_32606__$1);

return statearr_32745;
})();
if(cljs.core.truth_(inst_32607)){
var statearr_32746_32948 = state_32683__$1;
(statearr_32746_32948[(1)] = (52));

} else {
var statearr_32747_32949 = state_32683__$1;
(statearr_32747_32949[(1)] = (53));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (25))){
var state_32683__$1 = state_32683;
if(cljs.core.truth_(read)){
var statearr_32748_32950 = state_32683__$1;
(statearr_32748_32950[(1)] = (26));

} else {
var statearr_32749_32951 = state_32683__$1;
(statearr_32749_32951[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (34))){
var inst_32569 = (state_32683[(24)]);
var inst_32576 = (state_32683[(2)]);
var inst_32577 = cljs.core.map_QMARK_(inst_32569);
var state_32683__$1 = (function (){var statearr_32750 = state_32683;
(statearr_32750[(23)] = inst_32576);

return statearr_32750;
})();
if(inst_32577){
var statearr_32751_32952 = state_32683__$1;
(statearr_32751_32952[(1)] = (35));

} else {
var statearr_32752_32953 = state_32683__$1;
(statearr_32752_32953[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (17))){
var inst_32517 = (state_32683[(7)]);
var inst_32537 = (state_32683[(27)]);
var inst_32540 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32537,cljs.core.cst$kw$query_DASH_root,inst_32517);
var state_32683__$1 = state_32683;
var statearr_32753_32954 = state_32683__$1;
(statearr_32753_32954[(2)] = inst_32540);

(statearr_32753_32954[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (3))){
var state_32683__$1 = state_32683;
var statearr_32754_32955 = state_32683__$1;
(statearr_32754_32955[(2)] = false);

(statearr_32754_32955[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (12))){
var inst_32524 = (state_32683[(28)]);
var state_32683__$1 = state_32683;
var statearr_32755_32956 = state_32683__$1;
(statearr_32755_32956[(2)] = inst_32524);

(statearr_32755_32956[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (2))){
var inst_32495 = (state_32683[(14)]);
var inst_32500 = inst_32495.cljs$lang$protocol_mask$partition0$;
var inst_32501 = (inst_32500 & (64));
var inst_32502 = inst_32495.cljs$core$ISeq$;
var inst_32503 = (inst_32501) || (inst_32502);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32503)){
var statearr_32756_32957 = state_32683__$1;
(statearr_32756_32957[(1)] = (5));

} else {
var statearr_32757_32958 = state_32683__$1;
(statearr_32757_32958[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (66))){
var inst_32517 = (state_32683[(7)]);
var state_32683__$1 = state_32683;
var statearr_32758_32959 = state_32683__$1;
(statearr_32758_32959[(2)] = inst_32517);

(statearr_32758_32959[(1)] = (67));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (23))){
var inst_32548 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('');
var inst_32549 = (new Error(inst_32548));
var inst_32550 = (function(){throw inst_32549})();
var state_32683__$1 = state_32683;
var statearr_32759_32960 = state_32683__$1;
(statearr_32759_32960[(2)] = inst_32550);

(statearr_32759_32960[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (47))){
var state_32683__$1 = state_32683;
var statearr_32760_32961 = state_32683__$1;
(statearr_32760_32961[(2)] = null);

(statearr_32760_32961[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (35))){
var inst_32569 = (state_32683[(24)]);
var inst_32576 = (state_32683[(23)]);
var inst_32579 = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(inst_32569);
var inst_32580 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32576,inst_32579);
var state_32683__$1 = state_32683;
var statearr_32761_32962 = state_32683__$1;
(statearr_32761_32962[(2)] = inst_32580);

(statearr_32761_32962[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (19))){
var inst_32515 = (state_32683[(20)]);
var inst_32543 = (state_32683[(2)]);
var inst_32544 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(inst_32515);
var inst_32545 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,inst_32544);
var state_32683__$1 = (function (){var statearr_32762 = state_32683;
(statearr_32762[(29)] = inst_32545);

(statearr_32762[(16)] = inst_32543);

return statearr_32762;
})();
var G__32763_32963 = (((inst_32544 instanceof cljs.core.Keyword))?inst_32544.fqn:null);
switch (G__32763_32963) {
case "call":
var statearr_32764_32965 = state_32683__$1;
(statearr_32764_32965[(1)] = (21));


break;
case "prop":
var statearr_32765_32966 = state_32683__$1;
(statearr_32765_32966[(1)] = (25));


break;
case "join":
var statearr_32766_32967 = state_32683__$1;
(statearr_32766_32967[(1)] = (25));


break;
case "union":
var statearr_32767_32968 = state_32683__$1;
(statearr_32767_32968[(1)] = (25));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_32544)].join('')));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (57))){
var state_32683__$1 = state_32683;
var statearr_32768_32969 = state_32683__$1;
(statearr_32768_32969[(2)] = null);

(statearr_32768_32969[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (68))){
var inst_32517 = (state_32683[(7)]);
var inst_32597 = (state_32683[(19)]);
var inst_32658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32659 = [inst_32517,cljs.core.cst$kw$result];
var inst_32660 = (new cljs.core.PersistentVector(null,2,(5),inst_32658,inst_32659,null));
var inst_32661 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_32597) : cljs.core.deref.call(null,inst_32597));
var state_32683__$1 = (function (){var statearr_32769 = state_32683;
(statearr_32769[(30)] = inst_32660);

return statearr_32769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32683__$1,(71),inst_32661);
} else {
if((state_val_32684 === (11))){
var inst_32524 = (state_32683[(28)]);
var inst_32527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_32524,cljs.core.cst$kw$query);
var state_32683__$1 = state_32683;
var statearr_32770_32970 = state_32683__$1;
(statearr_32770_32970[(2)] = inst_32527);

(statearr_32770_32970[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (9))){
var inst_32495 = (state_32683[(14)]);
var state_32683__$1 = state_32683;
var statearr_32771_32971 = state_32683__$1;
(statearr_32771_32971[(2)] = inst_32495);

(statearr_32771_32971[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (5))){
var state_32683__$1 = state_32683;
var statearr_32772_32972 = state_32683__$1;
(statearr_32772_32972[(2)] = true);

(statearr_32772_32972[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (14))){
var inst_32530 = (state_32683[(21)]);
var inst_32534 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32530,cljs.core.cst$kw$query,query);
var state_32683__$1 = state_32683;
var statearr_32773_32973 = state_32683__$1;
(statearr_32773_32973[(2)] = inst_32534);

(statearr_32773_32973[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (45))){
var inst_32545 = (state_32683[(29)]);
var state_32683__$1 = state_32683;
var statearr_32774_32974 = state_32683__$1;
(statearr_32774_32974[(2)] = inst_32545);

(statearr_32774_32974[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (53))){
var inst_32596 = (state_32683[(8)]);
var inst_32606 = (state_32683[(26)]);
var inst_32611 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32596,inst_32606) : cljs.core.reset_BANG_.call(null,inst_32596,inst_32606));
var state_32683__$1 = state_32683;
var statearr_32775_32975 = state_32683__$1;
(statearr_32775_32975[(2)] = inst_32611);

(statearr_32775_32975[(1)] = (54));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (26))){
var state_32683__$1 = state_32683;
var statearr_32776_32976 = state_32683__$1;
(statearr_32776_32976[(2)] = null);

(statearr_32776_32976[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (16))){
var inst_32517 = (state_32683[(7)]);
var inst_32537 = (state_32683[(2)]);
var inst_32538 = cljs.core.vector_QMARK_(inst_32517);
var state_32683__$1 = (function (){var statearr_32777 = state_32683;
(statearr_32777[(27)] = inst_32537);

return statearr_32777;
})();
if(inst_32538){
var statearr_32778_32977 = state_32683__$1;
(statearr_32778_32977[(1)] = (17));

} else {
var statearr_32779_32978 = state_32683__$1;
(statearr_32779_32978[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (38))){
var inst_32545 = (state_32683[(29)]);
var state_32683__$1 = state_32683;
var statearr_32780_32979 = state_32683__$1;
(statearr_32780_32979[(2)] = inst_32545);

(statearr_32780_32979[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (30))){
var inst_32545 = (state_32683[(29)]);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32545)){
var statearr_32781_32980 = state_32683__$1;
(statearr_32781_32980[(1)] = (38));

} else {
var statearr_32782_32981 = state_32683__$1;
(statearr_32782_32981[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (73))){
var inst_32667 = (state_32683[(9)]);
var state_32683__$1 = state_32683;
var statearr_32783_32982 = state_32683__$1;
(statearr_32783_32982[(2)] = inst_32667);

(statearr_32783_32982[(1)] = (74));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (10))){
var inst_32515 = (state_32683[(20)]);
var inst_32516 = (state_32683[(22)]);
var inst_32515__$1 = (state_32683[(2)]);
var inst_32516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32515__$1,cljs.core.cst$kw$query);
var inst_32517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32515__$1,cljs.core.cst$kw$key);
var inst_32518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32515__$1,cljs.core.cst$kw$dispatch_DASH_key);
var inst_32519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32515__$1,cljs.core.cst$kw$params);
var inst_32521 = [cljs.core.cst$kw$ast,cljs.core.cst$kw$query];
var inst_32522 = [inst_32515__$1,inst_32516__$1];
var inst_32523 = cljs.core.PersistentHashMap.fromArrays(inst_32521,inst_32522);
var inst_32524 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env__$1,inst_32523], 0));
var inst_32525 = (inst_32516__$1 == null);
var state_32683__$1 = (function (){var statearr_32784 = state_32683;
(statearr_32784[(7)] = inst_32517);

(statearr_32784[(28)] = inst_32524);

(statearr_32784[(20)] = inst_32515__$1);

(statearr_32784[(13)] = inst_32518);

(statearr_32784[(17)] = inst_32519);

(statearr_32784[(22)] = inst_32516__$1);

return statearr_32784;
})();
if(cljs.core.truth_(inst_32525)){
var statearr_32785_32983 = state_32683__$1;
(statearr_32785_32983[(1)] = (11));

} else {
var statearr_32786_32984 = state_32683__$1;
(statearr_32786_32984[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (18))){
var inst_32537 = (state_32683[(27)]);
var state_32683__$1 = state_32683;
var statearr_32787_32985 = state_32683__$1;
(statearr_32787_32985[(2)] = inst_32537);

(statearr_32787_32985[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (52))){
var inst_32606 = (state_32683[(26)]);
var inst_32609 = (function(){throw inst_32606})();
var state_32683__$1 = state_32683;
var statearr_32788_32986 = state_32683__$1;
(statearr_32788_32986[(2)] = inst_32609);

(statearr_32788_32986[(1)] = (54));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (67))){
var inst_32625 = (state_32683[(11)]);
var inst_32651 = (state_32683[(2)]);
var inst_32652 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,inst_32651,inst_32625);
var state_32683__$1 = state_32683;
var statearr_32789_32987 = state_32683__$1;
(statearr_32789_32987[(2)] = inst_32652);

(statearr_32789_32987[(1)] = (64));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (71))){
var inst_32655 = (state_32683[(15)]);
var inst_32660 = (state_32683[(30)]);
var inst_32663 = (state_32683[(2)]);
var inst_32664 = cljs.core.assoc_in(inst_32655,inst_32660,inst_32663);
var state_32683__$1 = state_32683;
var statearr_32790_32988 = state_32683__$1;
(statearr_32790_32988[(2)] = inst_32664);

(statearr_32790_32988[(1)] = (70));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (42))){
var inst_32545 = (state_32683[(29)]);
var inst_32596 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var inst_32597 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var state_32683__$1 = (function (){var statearr_32791 = state_32683;
(statearr_32791[(19)] = inst_32597);

(statearr_32791[(8)] = inst_32596);

return statearr_32791;
})();
if(cljs.core.truth_(inst_32545)){
var statearr_32792_32989 = state_32683__$1;
(statearr_32792_32989[(1)] = (44));

} else {
var statearr_32793_32990 = state_32683__$1;
(statearr_32793_32990[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (37))){
var inst_32583 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32794_32991 = state_32683__$1;
(statearr_32794_32991[(2)] = inst_32583);

(statearr_32794_32991[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (63))){
var state_32683__$1 = state_32683;
var statearr_32795_32992 = state_32683__$1;
(statearr_32795_32992[(2)] = ret);

(statearr_32795_32992[(1)] = (64));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (8))){
var inst_32495 = (state_32683[(14)]);
var inst_32512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32495);
var state_32683__$1 = state_32683;
var statearr_32796_32993 = state_32683__$1;
(statearr_32796_32993[(2)] = inst_32512);

(statearr_32796_32993[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32684 === (49))){
var inst_32545 = (state_32683[(29)]);
var inst_32565 = (state_32683[(10)]);
var inst_32624 = (state_32683[(2)]);
var inst_32625 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(inst_32565);
var state_32683__$1 = (function (){var statearr_32797 = state_32683;
(statearr_32797[(31)] = inst_32624);

(statearr_32797[(11)] = inst_32625);

return statearr_32797;
})();
if(cljs.core.truth_(inst_32545)){
var statearr_32798_32994 = state_32683__$1;
(statearr_32798_32994[(1)] = (56));

} else {
var statearr_32799_32995 = state_32683__$1;
(statearr_32799_32995[(1)] = (57));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
;
return ((function (switch__19407__auto__,c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto__ = null;
var ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto____0 = (function (){
var statearr_32803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32803[(0)] = ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto__);

(statearr_32803[(1)] = (1));

return statearr_32803;
});
var ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto____1 = (function (state_32683){
while(true){
var ret_value__19409__auto__ = (function (){try{while(true){
var result__19410__auto__ = switch__19407__auto__(state_32683);
if(cljs.core.keyword_identical_QMARK_(result__19410__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19410__auto__;
}
break;
}
}catch (e32804){if((e32804 instanceof Object)){
var ex__19411__auto__ = e32804;
var statearr_32805_32996 = state_32683;
(statearr_32805_32996[(5)] = ex__19411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32683);

return cljs.core.cst$kw$recur;
} else {
throw e32804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19409__auto__,cljs.core.cst$kw$recur)){
var G__32997 = state_32683;
state_32683 = G__32997;
continue;
} else {
return ret_value__19409__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto__ = function(state_32683){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto____1.call(this,state_32683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto____0;
ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto____1;
return ui$parser_async$parser_$_self_$_step_$_state_machine__19408__auto__;
})()
;})(switch__19407__auto__,c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
})();
var state__19533__auto__ = (function (){var statearr_32806 = (f__19532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19532__auto__.cljs$core$IFn$_invoke$arity$0() : f__19532__auto__.call(null));
(statearr_32806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19531__auto__);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19533__auto__);
});})(c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
);

return c__19531__auto__;
});})(elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
;
var G__32807 = (function (){var c__19531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function (){
var f__19532__auto__ = (function (){var switch__19407__auto__ = ((function (c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (7))){
var inst_32815 = (state_32862[(7)]);
var inst_32816 = (state_32862[(8)]);
var inst_32820 = cljs.core.first(inst_32816);
var inst_32821 = step(inst_32815,inst_32820);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32862__$1,(10),inst_32821);
} else {
if((state_val_32863 === (1))){
var inst_32808 = (target == null);
var state_32862__$1 = state_32862;
if(cljs.core.truth_(inst_32808)){
var statearr_32864_32998 = state_32862__$1;
(statearr_32864_32998[(1)] = (2));

} else {
var statearr_32865_32999 = state_32862__$1;
(statearr_32865_32999[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (4))){
var inst_32814 = (state_32862[(2)]);
var inst_32815 = inst_32814;
var inst_32816 = query;
var state_32862__$1 = (function (){var statearr_32866 = state_32862;
(statearr_32866[(7)] = inst_32815);

(statearr_32866[(8)] = inst_32816);

return statearr_32866;
})();
var statearr_32867_33000 = state_32862__$1;
(statearr_32867_33000[(2)] = null);

(statearr_32867_33000[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (15))){
var inst_32858 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32868_33001 = state_32862__$1;
(statearr_32868_33001[(2)] = inst_32858);

(statearr_32868_33001[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (13))){
var inst_32833 = (state_32862[(9)]);
var inst_32838 = (state_32862[(10)]);
var inst_32837 = cljs.core.first(inst_32833);
var inst_32838__$1 = cljs.core.second(inst_32837);
var inst_32839 = cljs.core.type(inst_32838__$1);
var inst_32840 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32839,cljs.core.async.impl.channels.ManyToManyChannel);
var state_32862__$1 = (function (){var statearr_32869 = state_32862;
(statearr_32869[(10)] = inst_32838__$1);

return statearr_32869;
})();
if(inst_32840){
var statearr_32870_33002 = state_32862__$1;
(statearr_32870_33002[(1)] = (16));

} else {
var statearr_32871_33003 = state_32862__$1;
(statearr_32871_33003[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (6))){
var inst_32830 = (state_32862[(2)]);
var inst_32831 = cljs.core.PersistentHashMap.EMPTY;
var inst_32832 = inst_32831;
var inst_32833 = inst_32830;
var state_32862__$1 = (function (){var statearr_32872 = state_32862;
(statearr_32872[(11)] = inst_32832);

(statearr_32872[(9)] = inst_32833);

return statearr_32872;
})();
var statearr_32873_33004 = state_32862__$1;
(statearr_32873_33004[(2)] = null);

(statearr_32873_33004[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (17))){
var inst_32832 = (state_32862[(11)]);
var inst_32833 = (state_32862[(9)]);
var inst_32838 = (state_32862[(10)]);
var inst_32848 = cljs.core.first(inst_32833);
var inst_32849 = cljs.core.first(inst_32848);
var inst_32850 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_32838);
var inst_32851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32832,inst_32849,inst_32850);
var state_32862__$1 = state_32862;
var statearr_32874_33005 = state_32862__$1;
(statearr_32874_33005[(2)] = inst_32851);

(statearr_32874_33005[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (3))){
var inst_32812 = cljs.core.PersistentVector.EMPTY;
var state_32862__$1 = state_32862;
var statearr_32875_33006 = state_32862__$1;
(statearr_32875_33006[(2)] = inst_32812);

(statearr_32875_33006[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (12))){
var inst_32860 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32862__$1,inst_32860);
} else {
if((state_val_32863 === (2))){
var inst_32810 = cljs.core.PersistentHashMap.EMPTY;
var state_32862__$1 = state_32862;
var statearr_32876_33007 = state_32862__$1;
(statearr_32876_33007[(2)] = inst_32810);

(statearr_32876_33007[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (19))){
var inst_32843 = (state_32862[(12)]);
var inst_32832 = (state_32862[(11)]);
var inst_32845 = (state_32862[(2)]);
var inst_32846 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32832,inst_32843,inst_32845);
var state_32862__$1 = state_32862;
var statearr_32877_33008 = state_32862__$1;
(statearr_32877_33008[(2)] = inst_32846);

(statearr_32877_33008[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (11))){
var inst_32833 = (state_32862[(9)]);
var inst_32835 = cljs.core.seq(inst_32833);
var state_32862__$1 = state_32862;
if(inst_32835){
var statearr_32878_33009 = state_32862__$1;
(statearr_32878_33009[(1)] = (13));

} else {
var statearr_32879_33010 = state_32862__$1;
(statearr_32879_33010[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (9))){
var inst_32828 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32880_33011 = state_32862__$1;
(statearr_32880_33011[(2)] = inst_32828);

(statearr_32880_33011[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (5))){
var inst_32816 = (state_32862[(8)]);
var inst_32818 = cljs.core.seq(inst_32816);
var state_32862__$1 = state_32862;
if(inst_32818){
var statearr_32881_33012 = state_32862__$1;
(statearr_32881_33012[(1)] = (7));

} else {
var statearr_32882_33013 = state_32862__$1;
(statearr_32882_33013[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (14))){
var inst_32832 = (state_32862[(11)]);
var state_32862__$1 = state_32862;
var statearr_32883_33014 = state_32862__$1;
(statearr_32883_33014[(2)] = inst_32832);

(statearr_32883_33014[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (16))){
var inst_32833 = (state_32862[(9)]);
var inst_32838 = (state_32862[(10)]);
var inst_32842 = cljs.core.first(inst_32833);
var inst_32843 = cljs.core.first(inst_32842);
var state_32862__$1 = (function (){var statearr_32884 = state_32862;
(statearr_32884[(12)] = inst_32843);

return statearr_32884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32862__$1,(19),inst_32838);
} else {
if((state_val_32863 === (10))){
var inst_32816 = (state_32862[(8)]);
var inst_32823 = (state_32862[(2)]);
var inst_32824 = cljs.core.rest(inst_32816);
var inst_32815 = inst_32823;
var inst_32816__$1 = inst_32824;
var state_32862__$1 = (function (){var statearr_32885 = state_32862;
(statearr_32885[(7)] = inst_32815);

(statearr_32885[(8)] = inst_32816__$1);

return statearr_32885;
})();
var statearr_32886_33015 = state_32862__$1;
(statearr_32886_33015[(2)] = null);

(statearr_32886_33015[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (18))){
var inst_32833 = (state_32862[(9)]);
var inst_32853 = (state_32862[(2)]);
var inst_32854 = cljs.core.rest(inst_32833);
var inst_32832 = inst_32853;
var inst_32833__$1 = inst_32854;
var state_32862__$1 = (function (){var statearr_32887 = state_32862;
(statearr_32887[(11)] = inst_32832);

(statearr_32887[(9)] = inst_32833__$1);

return statearr_32887;
})();
var statearr_32888_33016 = state_32862__$1;
(statearr_32888_33016[(2)] = null);

(statearr_32888_33016[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32863 === (8))){
var inst_32815 = (state_32862[(7)]);
var state_32862__$1 = state_32862;
var statearr_32889_33017 = state_32862__$1;
(statearr_32889_33017[(2)] = inst_32815);

(statearr_32889_33017[(1)] = (9));


return cljs.core.cst$kw$recur;
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
});})(c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
;
return ((function (switch__19407__auto__,c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_state_machine__19408__auto__ = null;
var ui$parser_async$parser_$_self_$_state_machine__19408__auto____0 = (function (){
var statearr_32893 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32893[(0)] = ui$parser_async$parser_$_self_$_state_machine__19408__auto__);

(statearr_32893[(1)] = (1));

return statearr_32893;
});
var ui$parser_async$parser_$_self_$_state_machine__19408__auto____1 = (function (state_32862){
while(true){
var ret_value__19409__auto__ = (function (){try{while(true){
var result__19410__auto__ = switch__19407__auto__(state_32862);
if(cljs.core.keyword_identical_QMARK_(result__19410__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19410__auto__;
}
break;
}
}catch (e32894){if((e32894 instanceof Object)){
var ex__19411__auto__ = e32894;
var statearr_32895_33018 = state_32862;
(statearr_32895_33018[(5)] = ex__19411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32862);

return cljs.core.cst$kw$recur;
} else {
throw e32894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19409__auto__,cljs.core.cst$kw$recur)){
var G__33019 = state_32862;
state_32862 = G__33019;
continue;
} else {
return ret_value__19409__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_state_machine__19408__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_state_machine__19408__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_state_machine__19408__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_state_machine__19408__auto____0;
ui$parser_async$parser_$_self_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_state_machine__19408__auto____1;
return ui$parser_async$parser_$_self_$_state_machine__19408__auto__;
})()
;})(switch__19407__auto__,c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
})();
var state__19533__auto__ = (function (){var statearr_32896 = (f__19532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19532__auto__.cljs$core$IFn$_invoke$arity$0() : f__19532__auto__.call(null));
(statearr_32896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19531__auto__);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19533__auto__);
});})(c__19531__auto__,elide_paths_QMARK_,map__31552,map__31552__$1,env__$1,path,map__30205,map__30205__$1,config,read,mutate))
);

return c__19531__auto__;
})();
if(((target == null)) && (cljs.core.not(elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3(G__32807,path,query);
} else {
return G__32807;
}
});
ui$parser_async$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return ui$parser_async$parser_$_self__2.call(this,env,query);
case 3:
return ui$parser_async$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self.cljs$core$IFn$_invoke$arity$2 = ui$parser_async$parser_$_self__2;
ui$parser_async$parser_$_self.cljs$core$IFn$_invoke$arity$3 = ui$parser_async$parser_$_self__3;
return ui$parser_async$parser_$_self;
})()
;})(map__30205,map__30205__$1,config,read,mutate))
});
