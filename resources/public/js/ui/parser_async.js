// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.parser_async');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.util');
goog.require('om.next.impl.parser');
goog.require('cljs.core.async');
ui.parser_async.async_query_result = (function ui$parser_async$async_query_result(result){
var val_chan = cljs.core.async.chan.call(null);
var c__42763__auto___56449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___56449,val_chan){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___56449,val_chan){
return (function (state_56388){
var state_val_56389 = (state_56388[(1)]);
if((state_val_56389 === (7))){
var inst_56314 = (state_56388[(7)]);
var inst_56316 = (state_56388[(8)]);
var inst_56315 = (state_56388[(9)]);
var inst_56313 = (state_56388[(10)]);
var inst_56341 = (state_56388[(2)]);
var inst_56342 = (inst_56316 + (1));
var tmp56390 = inst_56314;
var tmp56391 = inst_56315;
var tmp56392 = inst_56313;
var inst_56313__$1 = tmp56392;
var inst_56314__$1 = tmp56390;
var inst_56315__$1 = tmp56391;
var inst_56316__$1 = inst_56342;
var state_56388__$1 = (function (){var statearr_56393 = state_56388;
(statearr_56393[(7)] = inst_56314__$1);

(statearr_56393[(11)] = inst_56341);

(statearr_56393[(8)] = inst_56316__$1);

(statearr_56393[(9)] = inst_56315__$1);

(statearr_56393[(10)] = inst_56313__$1);

return statearr_56393;
})();
var statearr_56394_56450 = state_56388__$1;
(statearr_56394_56450[(2)] = null);

(statearr_56394_56450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (20))){
var inst_56359 = (state_56388[(12)]);
var inst_56363 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_56359);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56388__$1,(23),inst_56363);
} else {
if((state_val_56389 === (1))){
var inst_56312 = cljs.core.seq.call(null,result);
var inst_56313 = inst_56312;
var inst_56314 = null;
var inst_56315 = (0);
var inst_56316 = (0);
var state_56388__$1 = (function (){var statearr_56395 = state_56388;
(statearr_56395[(7)] = inst_56314);

(statearr_56395[(8)] = inst_56316);

(statearr_56395[(9)] = inst_56315);

(statearr_56395[(10)] = inst_56313);

return statearr_56395;
})();
var statearr_56396_56451 = state_56388__$1;
(statearr_56396_56451[(2)] = null);

(statearr_56396_56451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (24))){
var inst_56368 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56397_56452 = state_56388__$1;
(statearr_56397_56452[(2)] = inst_56368);

(statearr_56397_56452[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (4))){
var inst_56314 = (state_56388[(7)]);
var inst_56316 = (state_56388[(8)]);
var inst_56326 = (state_56388[(13)]);
var inst_56324 = cljs.core._nth.call(null,inst_56314,inst_56316);
var inst_56325 = cljs.core.nth.call(null,inst_56324,(0),null);
var inst_56326__$1 = cljs.core.nth.call(null,inst_56324,(1),null);
var inst_56327 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56328 = cljs.core.map_QMARK_.call(null,inst_56326__$1);
var state_56388__$1 = (function (){var statearr_56398 = state_56388;
(statearr_56398[(14)] = inst_56327);

(statearr_56398[(15)] = inst_56325);

(statearr_56398[(13)] = inst_56326__$1);

return statearr_56398;
})();
if(inst_56328){
var statearr_56399_56453 = state_56388__$1;
(statearr_56399_56453[(1)] = (8));

} else {
var statearr_56400_56454 = state_56388__$1;
(statearr_56400_56454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (15))){
var inst_56381 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56401_56455 = state_56388__$1;
(statearr_56401_56455[(2)] = inst_56381);

(statearr_56401_56455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (21))){
var inst_56359 = (state_56388[(12)]);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56388__$1,(24),inst_56359);
} else {
if((state_val_56389 === (13))){
var inst_56345 = (state_56388[(16)]);
var inst_56347 = cljs.core.chunked_seq_QMARK_.call(null,inst_56345);
var state_56388__$1 = state_56388;
if(inst_56347){
var statearr_56402_56456 = state_56388__$1;
(statearr_56402_56456[(1)] = (16));

} else {
var statearr_56403_56457 = state_56388__$1;
(statearr_56403_56457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (22))){
var inst_56358 = (state_56388[(17)]);
var inst_56360 = (state_56388[(18)]);
var inst_56370 = (state_56388[(2)]);
var inst_56371 = [inst_56358,inst_56370];
var inst_56372 = (new cljs.core.PersistentVector(null,2,(5),inst_56360,inst_56371,null));
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56388__$1,(19),val_chan,inst_56372);
} else {
if((state_val_56389 === (6))){
var inst_56383 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56404_56458 = state_56388__$1;
(statearr_56404_56458[(2)] = inst_56383);

(statearr_56404_56458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (17))){
var inst_56359 = (state_56388[(12)]);
var inst_56345 = (state_56388[(16)]);
var inst_56357 = cljs.core.first.call(null,inst_56345);
var inst_56358 = cljs.core.nth.call(null,inst_56357,(0),null);
var inst_56359__$1 = cljs.core.nth.call(null,inst_56357,(1),null);
var inst_56360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56361 = cljs.core.map_QMARK_.call(null,inst_56359__$1);
var state_56388__$1 = (function (){var statearr_56405 = state_56388;
(statearr_56405[(17)] = inst_56358);

(statearr_56405[(12)] = inst_56359__$1);

(statearr_56405[(18)] = inst_56360);

return statearr_56405;
})();
if(inst_56361){
var statearr_56406_56459 = state_56388__$1;
(statearr_56406_56459[(1)] = (20));

} else {
var statearr_56407_56460 = state_56388__$1;
(statearr_56407_56460[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (3))){
var inst_56385 = (state_56388[(2)]);
var inst_56386 = cljs.core.async.close_BANG_.call(null,val_chan);
var state_56388__$1 = (function (){var statearr_56408 = state_56388;
(statearr_56408[(19)] = inst_56385);

return statearr_56408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56388__$1,inst_56386);
} else {
if((state_val_56389 === (12))){
var inst_56335 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56409_56461 = state_56388__$1;
(statearr_56409_56461[(2)] = inst_56335);

(statearr_56409_56461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (2))){
var inst_56316 = (state_56388[(8)]);
var inst_56315 = (state_56388[(9)]);
var inst_56318 = (inst_56316 < inst_56315);
var inst_56319 = inst_56318;
var state_56388__$1 = state_56388;
if(cljs.core.truth_(inst_56319)){
var statearr_56410_56462 = state_56388__$1;
(statearr_56410_56462[(1)] = (4));

} else {
var statearr_56411_56463 = state_56388__$1;
(statearr_56411_56463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (23))){
var inst_56365 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56412_56464 = state_56388__$1;
(statearr_56412_56464[(2)] = inst_56365);

(statearr_56412_56464[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (19))){
var inst_56345 = (state_56388[(16)]);
var inst_56374 = (state_56388[(2)]);
var inst_56375 = cljs.core.next.call(null,inst_56345);
var inst_56313 = inst_56375;
var inst_56314 = null;
var inst_56315 = (0);
var inst_56316 = (0);
var state_56388__$1 = (function (){var statearr_56413 = state_56388;
(statearr_56413[(7)] = inst_56314);

(statearr_56413[(8)] = inst_56316);

(statearr_56413[(20)] = inst_56374);

(statearr_56413[(9)] = inst_56315);

(statearr_56413[(10)] = inst_56313);

return statearr_56413;
})();
var statearr_56414_56465 = state_56388__$1;
(statearr_56414_56465[(2)] = null);

(statearr_56414_56465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (11))){
var inst_56332 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56415_56466 = state_56388__$1;
(statearr_56415_56466[(2)] = inst_56332);

(statearr_56415_56466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (9))){
var inst_56326 = (state_56388[(13)]);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56388__$1,(12),inst_56326);
} else {
if((state_val_56389 === (5))){
var inst_56345 = (state_56388[(16)]);
var inst_56313 = (state_56388[(10)]);
var inst_56345__$1 = cljs.core.seq.call(null,inst_56313);
var state_56388__$1 = (function (){var statearr_56416 = state_56388;
(statearr_56416[(16)] = inst_56345__$1);

return statearr_56416;
})();
if(inst_56345__$1){
var statearr_56417_56467 = state_56388__$1;
(statearr_56417_56467[(1)] = (13));

} else {
var statearr_56418_56468 = state_56388__$1;
(statearr_56418_56468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (14))){
var state_56388__$1 = state_56388;
var statearr_56419_56469 = state_56388__$1;
(statearr_56419_56469[(2)] = null);

(statearr_56419_56469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (16))){
var inst_56345 = (state_56388[(16)]);
var inst_56349 = cljs.core.chunk_first.call(null,inst_56345);
var inst_56350 = cljs.core.chunk_rest.call(null,inst_56345);
var inst_56351 = cljs.core.count.call(null,inst_56349);
var inst_56313 = inst_56350;
var inst_56314 = inst_56349;
var inst_56315 = inst_56351;
var inst_56316 = (0);
var state_56388__$1 = (function (){var statearr_56420 = state_56388;
(statearr_56420[(7)] = inst_56314);

(statearr_56420[(8)] = inst_56316);

(statearr_56420[(9)] = inst_56315);

(statearr_56420[(10)] = inst_56313);

return statearr_56420;
})();
var statearr_56421_56470 = state_56388__$1;
(statearr_56421_56470[(2)] = null);

(statearr_56421_56470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (10))){
var inst_56327 = (state_56388[(14)]);
var inst_56325 = (state_56388[(15)]);
var inst_56337 = (state_56388[(2)]);
var inst_56338 = [inst_56325,inst_56337];
var inst_56339 = (new cljs.core.PersistentVector(null,2,(5),inst_56327,inst_56338,null));
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56388__$1,(7),val_chan,inst_56339);
} else {
if((state_val_56389 === (18))){
var inst_56378 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56422_56471 = state_56388__$1;
(statearr_56422_56471[(2)] = inst_56378);

(statearr_56422_56471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (8))){
var inst_56326 = (state_56388[(13)]);
var inst_56330 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_56326);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56388__$1,(11),inst_56330);
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
});})(c__42763__auto___56449,val_chan))
;
return ((function (switch__42740__auto__,c__42763__auto___56449,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__42741__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__42741__auto____0 = (function (){
var statearr_56426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56426[(0)] = ui$parser_async$async_query_result_$_state_machine__42741__auto__);

(statearr_56426[(1)] = (1));

return statearr_56426;
});
var ui$parser_async$async_query_result_$_state_machine__42741__auto____1 = (function (state_56388){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_56388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e56427){if((e56427 instanceof Object)){
var ex__42744__auto__ = e56427;
var statearr_56428_56472 = state_56388;
(statearr_56428_56472[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56473 = state_56388;
state_56388 = G__56473;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__42741__auto__ = function(state_56388){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__42741__auto____1.call(this,state_56388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__42741__auto____0;
ui$parser_async$async_query_result_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__42741__auto____1;
return ui$parser_async$async_query_result_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___56449,val_chan))
})();
var state__42765__auto__ = (function (){var statearr_56429 = f__42764__auto__.call(null);
(statearr_56429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___56449);

return statearr_56429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___56449,val_chan))
);


var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,val_chan){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,val_chan){
return (function (state_56437){
var state_val_56438 = (state_56437[(1)]);
if((state_val_56438 === (1))){
var inst_56431 = (function (){return ((function (state_val_56438,c__42763__auto__,val_chan){
return (function (acc,p__56430){
var vec__56439 = p__56430;
var k = cljs.core.nth.call(null,vec__56439,(0),null);
var v = cljs.core.nth.call(null,vec__56439,(1),null);
return cljs.core.assoc.call(null,acc,k,v);
});
;})(state_val_56438,c__42763__auto__,val_chan))
})();
var inst_56432 = cljs.core.PersistentHashMap.EMPTY;
var inst_56433 = cljs.core.async.reduce.call(null,inst_56431,inst_56432,val_chan);
var state_56437__$1 = state_56437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56437__$1,(2),inst_56433);
} else {
if((state_val_56438 === (2))){
var inst_56435 = (state_56437[(2)]);
var state_56437__$1 = state_56437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56437__$1,inst_56435);
} else {
return null;
}
}
});})(c__42763__auto__,val_chan))
;
return ((function (switch__42740__auto__,c__42763__auto__,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__42741__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__42741__auto____0 = (function (){
var statearr_56445 = [null,null,null,null,null,null,null];
(statearr_56445[(0)] = ui$parser_async$async_query_result_$_state_machine__42741__auto__);

(statearr_56445[(1)] = (1));

return statearr_56445;
});
var ui$parser_async$async_query_result_$_state_machine__42741__auto____1 = (function (state_56437){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_56437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e56446){if((e56446 instanceof Object)){
var ex__42744__auto__ = e56446;
var statearr_56447_56474 = state_56437;
(statearr_56447_56474[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56475 = state_56437;
state_56437 = G__56475;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__42741__auto__ = function(state_56437){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__42741__auto____1.call(this,state_56437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__42741__auto____0;
ui$parser_async$async_query_result_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__42741__auto____1;
return ui$parser_async$async_query_result_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,val_chan))
})();
var state__42765__auto__ = (function (){var statearr_56448 = f__42764__auto__.call(null);
(statearr_56448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_56448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,val_chan))
);

return c__42763__auto__;
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
ui.parser_async.parser = (function ui$parser_async$parser(p__56476){
var map__59169 = p__56476;
var map__59169__$1 = ((((!((map__59169 == null)))?((((map__59169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59169):map__59169);
var config = map__59169__$1;
var read = cljs.core.get.call(null,map__59169__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__59169__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__59169,map__59169__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self = null;
var ui$parser_async$parser_$_self__2 = (function (env,query){
return ui$parser_async$parser_$_self.call(null,env,query,null);
});
var ui$parser_async$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__34227__auto__ = new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__60516 = (function (){var G__60517 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),ui$parser_async$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
if(!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.call(null,G__60517,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__60517;
}
})();
var map__60516__$1 = ((((!((map__60516 == null)))?((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60516):map__60516);
var env__$1 = map__60516__$1;
var path = cljs.core.get.call(null,map__60516__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function ui$parser_async$parser_$_self_$_step(ret,expr){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function (state_61647){
var state_val_61648 = (state_61647[(1)]);
if((state_val_61648 === (65))){
var inst_61481 = (state_61647[(7)]);
var inst_61612 = cljs.core.first.call(null,inst_61481);
var state_61647__$1 = state_61647;
var statearr_61649_61861 = state_61647__$1;
(statearr_61649_61861[(2)] = inst_61612);

(statearr_61649_61861[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (70))){
var inst_61560 = (state_61647[(8)]);
var inst_61631 = (state_61647[(2)]);
var inst_61632 = cljs.core.deref.call(null,inst_61560);
var state_61647__$1 = (function (){var statearr_61650 = state_61647;
(statearr_61650[(9)] = inst_61631);

return statearr_61650;
})();
if(cljs.core.truth_(inst_61632)){
var statearr_61651_61862 = state_61647__$1;
(statearr_61651_61862[(1)] = (72));

} else {
var statearr_61652_61863 = state_61647__$1;
(statearr_61652_61863[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (62))){
var inst_61481 = (state_61647[(7)]);
var inst_61610 = om.util.unique_ident_QMARK_.call(null,inst_61481);
var state_61647__$1 = state_61647;
if(inst_61610){
var statearr_61653_61864 = state_61647__$1;
(statearr_61653_61864[(1)] = (65));

} else {
var statearr_61654_61865 = state_61647__$1;
(statearr_61654_61865[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (74))){
var inst_61641 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61655_61866 = state_61647__$1;
(statearr_61655_61866[(2)] = inst_61641);

(statearr_61655_61866[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (7))){
var inst_61471 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61656_61867 = state_61647__$1;
(statearr_61656_61867[(2)] = inst_61471);

(statearr_61656_61867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (59))){
var state_61647__$1 = state_61647;
var statearr_61657_61868 = state_61647__$1;
(statearr_61657_61868[(2)] = null);

(statearr_61657_61868[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (20))){
var inst_61529 = (state_61647[(2)]);
var inst_61530 = (target == null);
var inst_61531 = cljs.core.not.call(null,inst_61530);
var state_61647__$1 = (function (){var statearr_61658 = state_61647;
(statearr_61658[(10)] = inst_61529);

return statearr_61658;
})();
if(inst_61531){
var statearr_61659_61869 = state_61647__$1;
(statearr_61659_61869[(1)] = (29));

} else {
var statearr_61660_61870 = state_61647__$1;
(statearr_61660_61870[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (72))){
var inst_61560 = (state_61647[(8)]);
var inst_61481 = (state_61647[(7)]);
var inst_61631 = (state_61647[(9)]);
var inst_61634 = [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)];
var inst_61635 = cljs.core.deref.call(null,inst_61560);
var inst_61636 = [inst_61635];
var inst_61637 = cljs.core.PersistentHashMap.fromArrays(inst_61634,inst_61636);
var inst_61638 = cljs.core.assoc.call(null,inst_61631,inst_61481,inst_61637);
var state_61647__$1 = state_61647;
var statearr_61661_61871 = state_61647__$1;
(statearr_61661_61871[(2)] = inst_61638);

(statearr_61661_61871[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (58))){
var inst_61589 = (state_61647[(11)]);
var inst_61604 = (state_61647[(2)]);
var inst_61606 = (inst_61589 == null);
var inst_61607 = cljs.core.not.call(null,inst_61606);
var state_61647__$1 = (function (){var statearr_61662 = state_61647;
(statearr_61662[(12)] = inst_61604);

return statearr_61662;
})();
if(inst_61607){
var statearr_61663_61872 = state_61647__$1;
(statearr_61663_61872[(1)] = (62));

} else {
var statearr_61664_61873 = state_61647__$1;
(statearr_61664_61873[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (60))){
var inst_61482 = (state_61647[(13)]);
var inst_61596 = [cljs.core.str(inst_61482),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('');
var inst_61597 = [cljs.core.str("Assert failed: "),cljs.core.str(inst_61596),cljs.core.str("\n"),cljs.core.str("(or (nil? value) (map? value))")].join('');
var inst_61598 = (new Error(inst_61597));
var inst_61599 = (function(){throw inst_61598})();
var state_61647__$1 = state_61647;
var statearr_61665_61874 = state_61647__$1;
(statearr_61665_61874[(2)] = inst_61599);

(statearr_61665_61874[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (27))){
var inst_61521 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('');
var inst_61522 = (new Error(inst_61521));
var inst_61523 = (function(){throw inst_61522})();
var state_61647__$1 = state_61647;
var statearr_61666_61875 = state_61647__$1;
(statearr_61666_61875[(2)] = inst_61523);

(statearr_61666_61875[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (1))){
var inst_61459 = (state_61647[(14)]);
var inst_61459__$1 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var inst_61461 = (inst_61459__$1 == null);
var inst_61462 = cljs.core.not.call(null,inst_61461);
var state_61647__$1 = (function (){var statearr_61667 = state_61647;
(statearr_61667[(14)] = inst_61459__$1);

return statearr_61667;
})();
if(inst_61462){
var statearr_61668_61876 = state_61647__$1;
(statearr_61668_61876[(1)] = (2));

} else {
var statearr_61669_61877 = state_61647__$1;
(statearr_61669_61877[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (69))){
var inst_61619 = (state_61647[(15)]);
var state_61647__$1 = state_61647;
var statearr_61670_61878 = state_61647__$1;
(statearr_61670_61878[(2)] = inst_61619);

(statearr_61670_61878[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (24))){
var inst_61482 = (state_61647[(13)]);
var inst_61507 = (state_61647[(16)]);
var inst_61483 = (state_61647[(17)]);
var inst_61516 = (state_61647[(2)]);
var inst_61517 = mutate.call(null,inst_61507,inst_61482,inst_61483);
var state_61647__$1 = (function (){var statearr_61671 = state_61647;
(statearr_61671[(18)] = inst_61516);

return statearr_61671;
})();
var statearr_61672_61879 = state_61647__$1;
(statearr_61672_61879[(2)] = inst_61517);

(statearr_61672_61879[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (55))){
var inst_61561 = (state_61647[(19)]);
var inst_61529 = (state_61647[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61647,(51),new cljs.core.Keyword(null,"default","default",-1987822328),null,(50));
var inst_61581 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_61529);
var inst_61582 = inst_61581.call(null);
var inst_61583 = cljs.core.reset_BANG_.call(null,inst_61561,inst_61582);
var state_61647__$1 = state_61647;
var statearr_61673_61880 = state_61647__$1;
(statearr_61673_61880[(2)] = inst_61583);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61647__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (39))){
var inst_61479 = (state_61647[(20)]);
var inst_61529 = (state_61647[(10)]);
var inst_61551 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(inst_61479);
var inst_61552 = (inst_61551 == null);
var inst_61553 = cljs.core.contains_QMARK_.call(null,inst_61529,new cljs.core.Keyword(null,"value","value",305978217));
var inst_61554 = (inst_61552) || (inst_61553);
var state_61647__$1 = state_61647;
var statearr_61674_61881 = state_61647__$1;
(statearr_61674_61881[(2)] = inst_61554);

(statearr_61674_61881[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (46))){
var inst_61568 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
if(cljs.core.truth_(inst_61568)){
var statearr_61675_61882 = state_61647__$1;
(statearr_61675_61882[(1)] = (47));

} else {
var statearr_61676_61883 = state_61647__$1;
(statearr_61676_61883[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (4))){
var inst_61474 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
if(cljs.core.truth_(inst_61474)){
var statearr_61677_61884 = state_61647__$1;
(statearr_61677_61884[(1)] = (8));

} else {
var statearr_61678_61885 = state_61647__$1;
(statearr_61678_61885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (54))){
var inst_61577 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61679_61886 = state_61647__$1;
(statearr_61679_61886[(2)] = inst_61577);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61647__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (15))){
var inst_61494 = (state_61647[(21)]);
var state_61647__$1 = state_61647;
var statearr_61680_61887 = state_61647__$1;
(statearr_61680_61887[(2)] = inst_61494);

(statearr_61680_61887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (48))){
var state_61647__$1 = state_61647;
var statearr_61681_61888 = state_61647__$1;
(statearr_61681_61888[(2)] = null);

(statearr_61681_61888[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (50))){
var inst_61585 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61682_61889 = state_61647__$1;
(statearr_61682_61889[(2)] = inst_61585);

(statearr_61682_61889[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (21))){
var state_61647__$1 = state_61647;
if(cljs.core.truth_(mutate)){
var statearr_61683_61890 = state_61647__$1;
(statearr_61683_61890[(1)] = (22));

} else {
var statearr_61684_61891 = state_61647__$1;
(statearr_61684_61891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (31))){
var inst_61645 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61647__$1,inst_61645);
} else {
if((state_val_61648 === (32))){
var inst_61537 = cljs.core.conj.call(null,ret,expr);
var state_61647__$1 = state_61647;
var statearr_61685_61892 = state_61647__$1;
(statearr_61685_61892[(2)] = inst_61537);

(statearr_61685_61892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (40))){
var inst_61556 = (state_61647[(2)]);
var inst_61557 = cljs.core.not.call(null,inst_61556);
var state_61647__$1 = state_61647;
if(inst_61557){
var statearr_61686_61893 = state_61647__$1;
(statearr_61686_61893[(1)] = (41));

} else {
var statearr_61687_61894 = state_61647__$1;
(statearr_61687_61894[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (56))){
var inst_61589 = (state_61647[(11)]);
var inst_61591 = (inst_61589 == null);
var inst_61592 = cljs.core.map_QMARK_.call(null,inst_61589);
var inst_61593 = (inst_61591) || (inst_61592);
var state_61647__$1 = state_61647;
if(cljs.core.truth_(inst_61593)){
var statearr_61688_61895 = state_61647__$1;
(statearr_61688_61895[(1)] = (59));

} else {
var statearr_61689_61896 = state_61647__$1;
(statearr_61689_61896[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (33))){
var state_61647__$1 = state_61647;
var statearr_61690_61897 = state_61647__$1;
(statearr_61690_61897[(2)] = ret);

(statearr_61690_61897[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (13))){
var inst_61480 = (state_61647[(22)]);
var inst_61494 = (state_61647[(2)]);
var inst_61495 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_61496 = cljs.core._EQ_.call(null,inst_61495,inst_61480);
var state_61647__$1 = (function (){var statearr_61691 = state_61647;
(statearr_61691[(21)] = inst_61494);

return statearr_61691;
})();
if(inst_61496){
var statearr_61692_61898 = state_61647__$1;
(statearr_61692_61898[(1)] = (14));

} else {
var statearr_61693_61899 = state_61647__$1;
(statearr_61693_61899[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (22))){
var state_61647__$1 = state_61647;
var statearr_61694_61900 = state_61647__$1;
(statearr_61694_61900[(2)] = null);

(statearr_61694_61900[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (36))){
var inst_61540 = (state_61647[(23)]);
var state_61647__$1 = state_61647;
var statearr_61695_61901 = state_61647__$1;
(statearr_61695_61901[(2)] = inst_61540);

(statearr_61695_61901[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (41))){
var state_61647__$1 = state_61647;
var statearr_61696_61902 = state_61647__$1;
(statearr_61696_61902[(2)] = ret);

(statearr_61696_61902[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (43))){
var inst_61643 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61697_61903 = state_61647__$1;
(statearr_61697_61903[(2)] = inst_61643);

(statearr_61697_61903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (61))){
var inst_61601 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61698_61904 = state_61647__$1;
(statearr_61698_61904[(2)] = inst_61601);

(statearr_61698_61904[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (29))){
var inst_61533 = (state_61647[(24)]);
var inst_61529 = (state_61647[(10)]);
var inst_61533__$1 = cljs.core.get.call(null,inst_61529,target);
var inst_61535 = inst_61533__$1 === true;
var state_61647__$1 = (function (){var statearr_61699 = state_61647;
(statearr_61699[(24)] = inst_61533__$1);

return statearr_61699;
})();
if(cljs.core.truth_(inst_61535)){
var statearr_61700_61905 = state_61647__$1;
(statearr_61700_61905[(1)] = (32));

} else {
var statearr_61701_61906 = state_61647__$1;
(statearr_61701_61906[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (44))){
var inst_61529 = (state_61647[(10)]);
var inst_61563 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_61529);
var inst_61564 = (inst_61563 == null);
var inst_61565 = cljs.core.not.call(null,inst_61564);
var state_61647__$1 = state_61647;
var statearr_61702_61907 = state_61647__$1;
(statearr_61702_61907[(2)] = inst_61565);

(statearr_61702_61907[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (6))){
var state_61647__$1 = state_61647;
var statearr_61703_61908 = state_61647__$1;
(statearr_61703_61908[(2)] = false);

(statearr_61703_61908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (28))){
var inst_61482 = (state_61647[(13)]);
var inst_61507 = (state_61647[(16)]);
var inst_61483 = (state_61647[(17)]);
var inst_61525 = (state_61647[(2)]);
var inst_61526 = read.call(null,inst_61507,inst_61482,inst_61483);
var state_61647__$1 = (function (){var statearr_61704 = state_61647;
(statearr_61704[(25)] = inst_61525);

return statearr_61704;
})();
var statearr_61705_61909 = state_61647__$1;
(statearr_61705_61909[(2)] = inst_61526);

(statearr_61705_61909[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (64))){
var inst_61561 = (state_61647[(19)]);
var inst_61619 = (state_61647[(2)]);
var inst_61620 = cljs.core.deref.call(null,inst_61561);
var state_61647__$1 = (function (){var statearr_61706 = state_61647;
(statearr_61706[(15)] = inst_61619);

return statearr_61706;
})();
if(cljs.core.truth_(inst_61620)){
var statearr_61707_61910 = state_61647__$1;
(statearr_61707_61910[(1)] = (68));

} else {
var statearr_61708_61911 = state_61647__$1;
(statearr_61708_61911[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (51))){
var inst_61570 = (state_61647[(26)]);
var inst_61570__$1 = (state_61647[(2)]);
var inst_61571 = om.next.impl.parser.rethrow_QMARK_.call(null,inst_61570__$1);
var state_61647__$1 = (function (){var statearr_61709 = state_61647;
(statearr_61709[(26)] = inst_61570__$1);

return statearr_61709;
})();
if(cljs.core.truth_(inst_61571)){
var statearr_61710_61912 = state_61647__$1;
(statearr_61710_61912[(1)] = (52));

} else {
var statearr_61711_61913 = state_61647__$1;
(statearr_61711_61913[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (25))){
var state_61647__$1 = state_61647;
if(cljs.core.truth_(read)){
var statearr_61712_61914 = state_61647__$1;
(statearr_61712_61914[(1)] = (26));

} else {
var statearr_61713_61915 = state_61647__$1;
(statearr_61713_61915[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (34))){
var inst_61533 = (state_61647[(24)]);
var inst_61540 = (state_61647[(2)]);
var inst_61541 = cljs.core.map_QMARK_.call(null,inst_61533);
var state_61647__$1 = (function (){var statearr_61714 = state_61647;
(statearr_61714[(23)] = inst_61540);

return statearr_61714;
})();
if(inst_61541){
var statearr_61715_61916 = state_61647__$1;
(statearr_61715_61916[(1)] = (35));

} else {
var statearr_61716_61917 = state_61647__$1;
(statearr_61716_61917[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (17))){
var inst_61501 = (state_61647[(27)]);
var inst_61481 = (state_61647[(7)]);
var inst_61504 = cljs.core.assoc.call(null,inst_61501,new cljs.core.Keyword(null,"query-root","query-root",359781888),inst_61481);
var state_61647__$1 = state_61647;
var statearr_61717_61918 = state_61647__$1;
(statearr_61717_61918[(2)] = inst_61504);

(statearr_61717_61918[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (3))){
var state_61647__$1 = state_61647;
var statearr_61718_61919 = state_61647__$1;
(statearr_61718_61919[(2)] = false);

(statearr_61718_61919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (12))){
var inst_61488 = (state_61647[(28)]);
var state_61647__$1 = state_61647;
var statearr_61719_61920 = state_61647__$1;
(statearr_61719_61920[(2)] = inst_61488);

(statearr_61719_61920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (2))){
var inst_61459 = (state_61647[(14)]);
var inst_61464 = inst_61459.cljs$lang$protocol_mask$partition0$;
var inst_61465 = (inst_61464 & (64));
var inst_61466 = inst_61459.cljs$core$ISeq$;
var inst_61467 = (inst_61465) || (inst_61466);
var state_61647__$1 = state_61647;
if(cljs.core.truth_(inst_61467)){
var statearr_61720_61921 = state_61647__$1;
(statearr_61720_61921[(1)] = (5));

} else {
var statearr_61721_61922 = state_61647__$1;
(statearr_61721_61922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (66))){
var inst_61481 = (state_61647[(7)]);
var state_61647__$1 = state_61647;
var statearr_61722_61923 = state_61647__$1;
(statearr_61722_61923[(2)] = inst_61481);

(statearr_61722_61923[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (23))){
var inst_61512 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('');
var inst_61513 = (new Error(inst_61512));
var inst_61514 = (function(){throw inst_61513})();
var state_61647__$1 = state_61647;
var statearr_61723_61924 = state_61647__$1;
(statearr_61723_61924[(2)] = inst_61514);

(statearr_61723_61924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (47))){
var state_61647__$1 = state_61647;
var statearr_61724_61925 = state_61647__$1;
(statearr_61724_61925[(2)] = null);

(statearr_61724_61925[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (35))){
var inst_61533 = (state_61647[(24)]);
var inst_61540 = (state_61647[(23)]);
var inst_61543 = om.next.impl.parser.ast__GT_expr.call(null,inst_61533);
var inst_61544 = cljs.core.conj.call(null,inst_61540,inst_61543);
var state_61647__$1 = state_61647;
var statearr_61725_61926 = state_61647__$1;
(statearr_61725_61926[(2)] = inst_61544);

(statearr_61725_61926[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (19))){
var inst_61479 = (state_61647[(20)]);
var inst_61507 = (state_61647[(2)]);
var inst_61508 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_61479);
var inst_61509 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),inst_61508);
var state_61647__$1 = (function (){var statearr_61726 = state_61647;
(statearr_61726[(29)] = inst_61509);

(statearr_61726[(16)] = inst_61507);

return statearr_61726;
})();
var G__61727_61927 = (((inst_61508 instanceof cljs.core.Keyword))?inst_61508.fqn:null);
switch (G__61727_61927) {
case "call":
var statearr_61728_61929 = state_61647__$1;
(statearr_61728_61929[(1)] = (21));


break;
case "prop":
var statearr_61729_61930 = state_61647__$1;
(statearr_61729_61930[(1)] = (25));


break;
case "join":
var statearr_61730_61931 = state_61647__$1;
(statearr_61730_61931[(1)] = (25));


break;
case "union":
var statearr_61731_61932 = state_61647__$1;
(statearr_61731_61932[(1)] = (25));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_61508)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (57))){
var state_61647__$1 = state_61647;
var statearr_61732_61933 = state_61647__$1;
(statearr_61732_61933[(2)] = null);

(statearr_61732_61933[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (68))){
var inst_61561 = (state_61647[(19)]);
var inst_61481 = (state_61647[(7)]);
var inst_61622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61623 = [inst_61481,new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_61624 = (new cljs.core.PersistentVector(null,2,(5),inst_61622,inst_61623,null));
var inst_61625 = cljs.core.deref.call(null,inst_61561);
var state_61647__$1 = (function (){var statearr_61733 = state_61647;
(statearr_61733[(30)] = inst_61624);

return statearr_61733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61647__$1,(71),inst_61625);
} else {
if((state_val_61648 === (11))){
var inst_61488 = (state_61647[(28)]);
var inst_61491 = cljs.core.dissoc.call(null,inst_61488,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_61647__$1 = state_61647;
var statearr_61734_61934 = state_61647__$1;
(statearr_61734_61934[(2)] = inst_61491);

(statearr_61734_61934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (9))){
var inst_61459 = (state_61647[(14)]);
var state_61647__$1 = state_61647;
var statearr_61735_61935 = state_61647__$1;
(statearr_61735_61935[(2)] = inst_61459);

(statearr_61735_61935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (5))){
var state_61647__$1 = state_61647;
var statearr_61736_61936 = state_61647__$1;
(statearr_61736_61936[(2)] = true);

(statearr_61736_61936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (14))){
var inst_61494 = (state_61647[(21)]);
var inst_61498 = cljs.core.assoc.call(null,inst_61494,new cljs.core.Keyword(null,"query","query",-1288509510),query);
var state_61647__$1 = state_61647;
var statearr_61737_61937 = state_61647__$1;
(statearr_61737_61937[(2)] = inst_61498);

(statearr_61737_61937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (45))){
var inst_61509 = (state_61647[(29)]);
var state_61647__$1 = state_61647;
var statearr_61738_61938 = state_61647__$1;
(statearr_61738_61938[(2)] = inst_61509);

(statearr_61738_61938[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (53))){
var inst_61560 = (state_61647[(8)]);
var inst_61570 = (state_61647[(26)]);
var inst_61575 = cljs.core.reset_BANG_.call(null,inst_61560,inst_61570);
var state_61647__$1 = state_61647;
var statearr_61739_61939 = state_61647__$1;
(statearr_61739_61939[(2)] = inst_61575);

(statearr_61739_61939[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (26))){
var state_61647__$1 = state_61647;
var statearr_61740_61940 = state_61647__$1;
(statearr_61740_61940[(2)] = null);

(statearr_61740_61940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (16))){
var inst_61481 = (state_61647[(7)]);
var inst_61501 = (state_61647[(2)]);
var inst_61502 = cljs.core.vector_QMARK_.call(null,inst_61481);
var state_61647__$1 = (function (){var statearr_61741 = state_61647;
(statearr_61741[(27)] = inst_61501);

return statearr_61741;
})();
if(inst_61502){
var statearr_61742_61941 = state_61647__$1;
(statearr_61742_61941[(1)] = (17));

} else {
var statearr_61743_61942 = state_61647__$1;
(statearr_61743_61942[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (38))){
var inst_61509 = (state_61647[(29)]);
var state_61647__$1 = state_61647;
var statearr_61744_61943 = state_61647__$1;
(statearr_61744_61943[(2)] = inst_61509);

(statearr_61744_61943[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (30))){
var inst_61509 = (state_61647[(29)]);
var state_61647__$1 = state_61647;
if(cljs.core.truth_(inst_61509)){
var statearr_61745_61944 = state_61647__$1;
(statearr_61745_61944[(1)] = (38));

} else {
var statearr_61746_61945 = state_61647__$1;
(statearr_61746_61945[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (73))){
var inst_61631 = (state_61647[(9)]);
var state_61647__$1 = state_61647;
var statearr_61747_61946 = state_61647__$1;
(statearr_61747_61946[(2)] = inst_61631);

(statearr_61747_61946[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (10))){
var inst_61479 = (state_61647[(20)]);
var inst_61480 = (state_61647[(22)]);
var inst_61479__$1 = (state_61647[(2)]);
var inst_61480__$1 = cljs.core.get.call(null,inst_61479__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_61481 = cljs.core.get.call(null,inst_61479__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_61482 = cljs.core.get.call(null,inst_61479__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var inst_61483 = cljs.core.get.call(null,inst_61479__$1,new cljs.core.Keyword(null,"params","params",710516235));
var inst_61485 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_61486 = [inst_61479__$1,inst_61480__$1];
var inst_61487 = cljs.core.PersistentHashMap.fromArrays(inst_61485,inst_61486);
var inst_61488 = cljs.core.merge.call(null,env__$1,inst_61487);
var inst_61489 = (inst_61480__$1 == null);
var state_61647__$1 = (function (){var statearr_61748 = state_61647;
(statearr_61748[(13)] = inst_61482);

(statearr_61748[(28)] = inst_61488);

(statearr_61748[(20)] = inst_61479__$1);

(statearr_61748[(22)] = inst_61480__$1);

(statearr_61748[(17)] = inst_61483);

(statearr_61748[(7)] = inst_61481);

return statearr_61748;
})();
if(cljs.core.truth_(inst_61489)){
var statearr_61749_61947 = state_61647__$1;
(statearr_61749_61947[(1)] = (11));

} else {
var statearr_61750_61948 = state_61647__$1;
(statearr_61750_61948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (18))){
var inst_61501 = (state_61647[(27)]);
var state_61647__$1 = state_61647;
var statearr_61751_61949 = state_61647__$1;
(statearr_61751_61949[(2)] = inst_61501);

(statearr_61751_61949[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (52))){
var inst_61570 = (state_61647[(26)]);
var inst_61573 = (function(){throw inst_61570})();
var state_61647__$1 = state_61647;
var statearr_61752_61950 = state_61647__$1;
(statearr_61752_61950[(2)] = inst_61573);

(statearr_61752_61950[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (67))){
var inst_61589 = (state_61647[(11)]);
var inst_61615 = (state_61647[(2)]);
var inst_61616 = cljs.core.assoc.call(null,ret,inst_61615,inst_61589);
var state_61647__$1 = state_61647;
var statearr_61753_61951 = state_61647__$1;
(statearr_61753_61951[(2)] = inst_61616);

(statearr_61753_61951[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (71))){
var inst_61624 = (state_61647[(30)]);
var inst_61619 = (state_61647[(15)]);
var inst_61627 = (state_61647[(2)]);
var inst_61628 = cljs.core.assoc_in.call(null,inst_61619,inst_61624,inst_61627);
var state_61647__$1 = state_61647;
var statearr_61754_61952 = state_61647__$1;
(statearr_61754_61952[(2)] = inst_61628);

(statearr_61754_61952[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (42))){
var inst_61509 = (state_61647[(29)]);
var inst_61560 = cljs.core.atom.call(null,null);
var inst_61561 = cljs.core.atom.call(null,null);
var state_61647__$1 = (function (){var statearr_61755 = state_61647;
(statearr_61755[(19)] = inst_61561);

(statearr_61755[(8)] = inst_61560);

return statearr_61755;
})();
if(cljs.core.truth_(inst_61509)){
var statearr_61756_61953 = state_61647__$1;
(statearr_61756_61953[(1)] = (44));

} else {
var statearr_61757_61954 = state_61647__$1;
(statearr_61757_61954[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (37))){
var inst_61547 = (state_61647[(2)]);
var state_61647__$1 = state_61647;
var statearr_61758_61955 = state_61647__$1;
(statearr_61758_61955[(2)] = inst_61547);

(statearr_61758_61955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (63))){
var state_61647__$1 = state_61647;
var statearr_61759_61956 = state_61647__$1;
(statearr_61759_61956[(2)] = ret);

(statearr_61759_61956[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (8))){
var inst_61459 = (state_61647[(14)]);
var inst_61476 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61459);
var state_61647__$1 = state_61647;
var statearr_61760_61957 = state_61647__$1;
(statearr_61760_61957[(2)] = inst_61476);

(statearr_61760_61957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61648 === (49))){
var inst_61509 = (state_61647[(29)]);
var inst_61529 = (state_61647[(10)]);
var inst_61588 = (state_61647[(2)]);
var inst_61589 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_61529);
var state_61647__$1 = (function (){var statearr_61761 = state_61647;
(statearr_61761[(31)] = inst_61588);

(statearr_61761[(11)] = inst_61589);

return statearr_61761;
})();
if(cljs.core.truth_(inst_61509)){
var statearr_61762_61958 = state_61647__$1;
(statearr_61762_61958[(1)] = (56));

} else {
var statearr_61763_61959 = state_61647__$1;
(statearr_61763_61959[(1)] = (57));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
;
return ((function (switch__42740__auto__,c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto__ = null;
var ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto____0 = (function (){
var statearr_61767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61767[(0)] = ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto__);

(statearr_61767[(1)] = (1));

return statearr_61767;
});
var ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto____1 = (function (state_61647){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_61647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e61768){if((e61768 instanceof Object)){
var ex__42744__auto__ = e61768;
var statearr_61769_61960 = state_61647;
(statearr_61769_61960[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61961 = state_61647;
state_61647 = G__61961;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto__ = function(state_61647){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto____1.call(this,state_61647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto____0;
ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto____1;
return ui$parser_async$parser_$_self_$_step_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
})();
var state__42765__auto__ = (function (){var statearr_61770 = f__42764__auto__.call(null);
(statearr_61770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_61770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
);

return c__42763__auto__;
});})(elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
;
var G__61771 = (function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function (state_61826){
var state_val_61827 = (state_61826[(1)]);
if((state_val_61827 === (7))){
var inst_61780 = (state_61826[(7)]);
var inst_61779 = (state_61826[(8)]);
var inst_61784 = cljs.core.first.call(null,inst_61780);
var inst_61785 = step.call(null,inst_61779,inst_61784);
var state_61826__$1 = state_61826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61826__$1,(10),inst_61785);
} else {
if((state_val_61827 === (1))){
var inst_61772 = (target == null);
var state_61826__$1 = state_61826;
if(cljs.core.truth_(inst_61772)){
var statearr_61828_61962 = state_61826__$1;
(statearr_61828_61962[(1)] = (2));

} else {
var statearr_61829_61963 = state_61826__$1;
(statearr_61829_61963[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (4))){
var inst_61778 = (state_61826[(2)]);
var inst_61779 = inst_61778;
var inst_61780 = query;
var state_61826__$1 = (function (){var statearr_61830 = state_61826;
(statearr_61830[(7)] = inst_61780);

(statearr_61830[(8)] = inst_61779);

return statearr_61830;
})();
var statearr_61831_61964 = state_61826__$1;
(statearr_61831_61964[(2)] = null);

(statearr_61831_61964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (15))){
var inst_61822 = (state_61826[(2)]);
var state_61826__$1 = state_61826;
var statearr_61832_61965 = state_61826__$1;
(statearr_61832_61965[(2)] = inst_61822);

(statearr_61832_61965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (13))){
var inst_61797 = (state_61826[(9)]);
var inst_61802 = (state_61826[(10)]);
var inst_61801 = cljs.core.first.call(null,inst_61797);
var inst_61802__$1 = cljs.core.second.call(null,inst_61801);
var inst_61803 = cljs.core.type.call(null,inst_61802__$1);
var inst_61804 = cljs.core._EQ_.call(null,inst_61803,cljs.core.async.impl.channels.ManyToManyChannel);
var state_61826__$1 = (function (){var statearr_61833 = state_61826;
(statearr_61833[(10)] = inst_61802__$1);

return statearr_61833;
})();
if(inst_61804){
var statearr_61834_61966 = state_61826__$1;
(statearr_61834_61966[(1)] = (16));

} else {
var statearr_61835_61967 = state_61826__$1;
(statearr_61835_61967[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (6))){
var inst_61794 = (state_61826[(2)]);
var inst_61795 = cljs.core.PersistentHashMap.EMPTY;
var inst_61796 = inst_61795;
var inst_61797 = inst_61794;
var state_61826__$1 = (function (){var statearr_61836 = state_61826;
(statearr_61836[(9)] = inst_61797);

(statearr_61836[(11)] = inst_61796);

return statearr_61836;
})();
var statearr_61837_61968 = state_61826__$1;
(statearr_61837_61968[(2)] = null);

(statearr_61837_61968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (17))){
var inst_61797 = (state_61826[(9)]);
var inst_61802 = (state_61826[(10)]);
var inst_61796 = (state_61826[(11)]);
var inst_61812 = cljs.core.first.call(null,inst_61797);
var inst_61813 = cljs.core.first.call(null,inst_61812);
var inst_61814 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_61802);
var inst_61815 = cljs.core.assoc.call(null,inst_61796,inst_61813,inst_61814);
var state_61826__$1 = state_61826;
var statearr_61838_61969 = state_61826__$1;
(statearr_61838_61969[(2)] = inst_61815);

(statearr_61838_61969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (3))){
var inst_61776 = cljs.core.PersistentVector.EMPTY;
var state_61826__$1 = state_61826;
var statearr_61839_61970 = state_61826__$1;
(statearr_61839_61970[(2)] = inst_61776);

(statearr_61839_61970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (12))){
var inst_61824 = (state_61826[(2)]);
var state_61826__$1 = state_61826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61826__$1,inst_61824);
} else {
if((state_val_61827 === (2))){
var inst_61774 = cljs.core.PersistentHashMap.EMPTY;
var state_61826__$1 = state_61826;
var statearr_61840_61971 = state_61826__$1;
(statearr_61840_61971[(2)] = inst_61774);

(statearr_61840_61971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (19))){
var inst_61807 = (state_61826[(12)]);
var inst_61796 = (state_61826[(11)]);
var inst_61809 = (state_61826[(2)]);
var inst_61810 = cljs.core.assoc.call(null,inst_61796,inst_61807,inst_61809);
var state_61826__$1 = state_61826;
var statearr_61841_61972 = state_61826__$1;
(statearr_61841_61972[(2)] = inst_61810);

(statearr_61841_61972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (11))){
var inst_61797 = (state_61826[(9)]);
var inst_61799 = cljs.core.seq.call(null,inst_61797);
var state_61826__$1 = state_61826;
if(inst_61799){
var statearr_61842_61973 = state_61826__$1;
(statearr_61842_61973[(1)] = (13));

} else {
var statearr_61843_61974 = state_61826__$1;
(statearr_61843_61974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (9))){
var inst_61792 = (state_61826[(2)]);
var state_61826__$1 = state_61826;
var statearr_61844_61975 = state_61826__$1;
(statearr_61844_61975[(2)] = inst_61792);

(statearr_61844_61975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (5))){
var inst_61780 = (state_61826[(7)]);
var inst_61782 = cljs.core.seq.call(null,inst_61780);
var state_61826__$1 = state_61826;
if(inst_61782){
var statearr_61845_61976 = state_61826__$1;
(statearr_61845_61976[(1)] = (7));

} else {
var statearr_61846_61977 = state_61826__$1;
(statearr_61846_61977[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (14))){
var inst_61796 = (state_61826[(11)]);
var state_61826__$1 = state_61826;
var statearr_61847_61978 = state_61826__$1;
(statearr_61847_61978[(2)] = inst_61796);

(statearr_61847_61978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (16))){
var inst_61797 = (state_61826[(9)]);
var inst_61802 = (state_61826[(10)]);
var inst_61806 = cljs.core.first.call(null,inst_61797);
var inst_61807 = cljs.core.first.call(null,inst_61806);
var state_61826__$1 = (function (){var statearr_61848 = state_61826;
(statearr_61848[(12)] = inst_61807);

return statearr_61848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61826__$1,(19),inst_61802);
} else {
if((state_val_61827 === (10))){
var inst_61780 = (state_61826[(7)]);
var inst_61787 = (state_61826[(2)]);
var inst_61788 = cljs.core.rest.call(null,inst_61780);
var inst_61779 = inst_61787;
var inst_61780__$1 = inst_61788;
var state_61826__$1 = (function (){var statearr_61849 = state_61826;
(statearr_61849[(7)] = inst_61780__$1);

(statearr_61849[(8)] = inst_61779);

return statearr_61849;
})();
var statearr_61850_61979 = state_61826__$1;
(statearr_61850_61979[(2)] = null);

(statearr_61850_61979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (18))){
var inst_61797 = (state_61826[(9)]);
var inst_61817 = (state_61826[(2)]);
var inst_61818 = cljs.core.rest.call(null,inst_61797);
var inst_61796 = inst_61817;
var inst_61797__$1 = inst_61818;
var state_61826__$1 = (function (){var statearr_61851 = state_61826;
(statearr_61851[(9)] = inst_61797__$1);

(statearr_61851[(11)] = inst_61796);

return statearr_61851;
})();
var statearr_61852_61980 = state_61826__$1;
(statearr_61852_61980[(2)] = null);

(statearr_61852_61980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (8))){
var inst_61779 = (state_61826[(8)]);
var state_61826__$1 = state_61826;
var statearr_61853_61981 = state_61826__$1;
(statearr_61853_61981[(2)] = inst_61779);

(statearr_61853_61981[(1)] = (9));


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
});})(c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
;
return ((function (switch__42740__auto__,c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_state_machine__42741__auto__ = null;
var ui$parser_async$parser_$_self_$_state_machine__42741__auto____0 = (function (){
var statearr_61857 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61857[(0)] = ui$parser_async$parser_$_self_$_state_machine__42741__auto__);

(statearr_61857[(1)] = (1));

return statearr_61857;
});
var ui$parser_async$parser_$_self_$_state_machine__42741__auto____1 = (function (state_61826){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_61826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e61858){if((e61858 instanceof Object)){
var ex__42744__auto__ = e61858;
var statearr_61859_61982 = state_61826;
(statearr_61859_61982[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61983 = state_61826;
state_61826 = G__61983;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_state_machine__42741__auto__ = function(state_61826){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_state_machine__42741__auto____1.call(this,state_61826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_state_machine__42741__auto____0;
ui$parser_async$parser_$_self_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_state_machine__42741__auto____1;
return ui$parser_async$parser_$_self_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
})();
var state__42765__auto__ = (function (){var statearr_61860 = f__42764__auto__.call(null);
(statearr_61860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_61860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,elide_paths_QMARK_,map__60516,map__60516__$1,env__$1,path,map__59169,map__59169__$1,config,read,mutate))
);

return c__42763__auto__;
})();
if(((target == null)) && (cljs.core.not.call(null,elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.call(null,G__61771,path,query);
} else {
return G__61771;
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
;})(map__59169,map__59169__$1,config,read,mutate))
});

//# sourceMappingURL=parser_async.js.map?rel=1489120090301