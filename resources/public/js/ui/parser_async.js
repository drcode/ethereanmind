// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.parser_async');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.util');
goog.require('om.next.impl.parser');
goog.require('cljs.core.async');
ui.parser_async.async_query_result = (function ui$parser_async$async_query_result(result){
var val_chan = cljs.core.async.chan.call(null);
var c__36744__auto___49590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___49590,val_chan){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___49590,val_chan){
return (function (state_49529){
var state_val_49530 = (state_49529[(1)]);
if((state_val_49530 === (7))){
var inst_49454 = (state_49529[(7)]);
var inst_49456 = (state_49529[(8)]);
var inst_49457 = (state_49529[(9)]);
var inst_49455 = (state_49529[(10)]);
var inst_49482 = (state_49529[(2)]);
var inst_49483 = (inst_49457 + (1));
var tmp49531 = inst_49454;
var tmp49532 = inst_49456;
var tmp49533 = inst_49455;
var inst_49454__$1 = tmp49531;
var inst_49455__$1 = tmp49533;
var inst_49456__$1 = tmp49532;
var inst_49457__$1 = inst_49483;
var state_49529__$1 = (function (){var statearr_49534 = state_49529;
(statearr_49534[(7)] = inst_49454__$1);

(statearr_49534[(11)] = inst_49482);

(statearr_49534[(8)] = inst_49456__$1);

(statearr_49534[(9)] = inst_49457__$1);

(statearr_49534[(10)] = inst_49455__$1);

return statearr_49534;
})();
var statearr_49535_49591 = state_49529__$1;
(statearr_49535_49591[(2)] = null);

(statearr_49535_49591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (20))){
var inst_49500 = (state_49529[(12)]);
var inst_49504 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_49500);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49529__$1,(23),inst_49504);
} else {
if((state_val_49530 === (1))){
var inst_49453 = cljs.core.seq.call(null,result);
var inst_49454 = inst_49453;
var inst_49455 = null;
var inst_49456 = (0);
var inst_49457 = (0);
var state_49529__$1 = (function (){var statearr_49536 = state_49529;
(statearr_49536[(7)] = inst_49454);

(statearr_49536[(8)] = inst_49456);

(statearr_49536[(9)] = inst_49457);

(statearr_49536[(10)] = inst_49455);

return statearr_49536;
})();
var statearr_49537_49592 = state_49529__$1;
(statearr_49537_49592[(2)] = null);

(statearr_49537_49592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (24))){
var inst_49509 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49538_49593 = state_49529__$1;
(statearr_49538_49593[(2)] = inst_49509);

(statearr_49538_49593[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (4))){
var inst_49467 = (state_49529[(13)]);
var inst_49457 = (state_49529[(9)]);
var inst_49455 = (state_49529[(10)]);
var inst_49465 = cljs.core._nth.call(null,inst_49455,inst_49457);
var inst_49466 = cljs.core.nth.call(null,inst_49465,(0),null);
var inst_49467__$1 = cljs.core.nth.call(null,inst_49465,(1),null);
var inst_49468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49469 = cljs.core.map_QMARK_.call(null,inst_49467__$1);
var state_49529__$1 = (function (){var statearr_49539 = state_49529;
(statearr_49539[(14)] = inst_49468);

(statearr_49539[(15)] = inst_49466);

(statearr_49539[(13)] = inst_49467__$1);

return statearr_49539;
})();
if(inst_49469){
var statearr_49540_49594 = state_49529__$1;
(statearr_49540_49594[(1)] = (8));

} else {
var statearr_49541_49595 = state_49529__$1;
(statearr_49541_49595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (15))){
var inst_49522 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49542_49596 = state_49529__$1;
(statearr_49542_49596[(2)] = inst_49522);

(statearr_49542_49596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (21))){
var inst_49500 = (state_49529[(12)]);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49529__$1,(24),inst_49500);
} else {
if((state_val_49530 === (13))){
var inst_49486 = (state_49529[(16)]);
var inst_49488 = cljs.core.chunked_seq_QMARK_.call(null,inst_49486);
var state_49529__$1 = state_49529;
if(inst_49488){
var statearr_49543_49597 = state_49529__$1;
(statearr_49543_49597[(1)] = (16));

} else {
var statearr_49544_49598 = state_49529__$1;
(statearr_49544_49598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (22))){
var inst_49501 = (state_49529[(17)]);
var inst_49499 = (state_49529[(18)]);
var inst_49511 = (state_49529[(2)]);
var inst_49512 = [inst_49499,inst_49511];
var inst_49513 = (new cljs.core.PersistentVector(null,2,(5),inst_49501,inst_49512,null));
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49529__$1,(19),val_chan,inst_49513);
} else {
if((state_val_49530 === (6))){
var inst_49524 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49545_49599 = state_49529__$1;
(statearr_49545_49599[(2)] = inst_49524);

(statearr_49545_49599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (17))){
var inst_49500 = (state_49529[(12)]);
var inst_49486 = (state_49529[(16)]);
var inst_49498 = cljs.core.first.call(null,inst_49486);
var inst_49499 = cljs.core.nth.call(null,inst_49498,(0),null);
var inst_49500__$1 = cljs.core.nth.call(null,inst_49498,(1),null);
var inst_49501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49502 = cljs.core.map_QMARK_.call(null,inst_49500__$1);
var state_49529__$1 = (function (){var statearr_49546 = state_49529;
(statearr_49546[(17)] = inst_49501);

(statearr_49546[(18)] = inst_49499);

(statearr_49546[(12)] = inst_49500__$1);

return statearr_49546;
})();
if(inst_49502){
var statearr_49547_49600 = state_49529__$1;
(statearr_49547_49600[(1)] = (20));

} else {
var statearr_49548_49601 = state_49529__$1;
(statearr_49548_49601[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (3))){
var inst_49526 = (state_49529[(2)]);
var inst_49527 = cljs.core.async.close_BANG_.call(null,val_chan);
var state_49529__$1 = (function (){var statearr_49549 = state_49529;
(statearr_49549[(19)] = inst_49526);

return statearr_49549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49529__$1,inst_49527);
} else {
if((state_val_49530 === (12))){
var inst_49476 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49550_49602 = state_49529__$1;
(statearr_49550_49602[(2)] = inst_49476);

(statearr_49550_49602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (2))){
var inst_49456 = (state_49529[(8)]);
var inst_49457 = (state_49529[(9)]);
var inst_49459 = (inst_49457 < inst_49456);
var inst_49460 = inst_49459;
var state_49529__$1 = state_49529;
if(cljs.core.truth_(inst_49460)){
var statearr_49551_49603 = state_49529__$1;
(statearr_49551_49603[(1)] = (4));

} else {
var statearr_49552_49604 = state_49529__$1;
(statearr_49552_49604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (23))){
var inst_49506 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49553_49605 = state_49529__$1;
(statearr_49553_49605[(2)] = inst_49506);

(statearr_49553_49605[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (19))){
var inst_49486 = (state_49529[(16)]);
var inst_49515 = (state_49529[(2)]);
var inst_49516 = cljs.core.next.call(null,inst_49486);
var inst_49454 = inst_49516;
var inst_49455 = null;
var inst_49456 = (0);
var inst_49457 = (0);
var state_49529__$1 = (function (){var statearr_49554 = state_49529;
(statearr_49554[(7)] = inst_49454);

(statearr_49554[(20)] = inst_49515);

(statearr_49554[(8)] = inst_49456);

(statearr_49554[(9)] = inst_49457);

(statearr_49554[(10)] = inst_49455);

return statearr_49554;
})();
var statearr_49555_49606 = state_49529__$1;
(statearr_49555_49606[(2)] = null);

(statearr_49555_49606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (11))){
var inst_49473 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49556_49607 = state_49529__$1;
(statearr_49556_49607[(2)] = inst_49473);

(statearr_49556_49607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (9))){
var inst_49467 = (state_49529[(13)]);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49529__$1,(12),inst_49467);
} else {
if((state_val_49530 === (5))){
var inst_49454 = (state_49529[(7)]);
var inst_49486 = (state_49529[(16)]);
var inst_49486__$1 = cljs.core.seq.call(null,inst_49454);
var state_49529__$1 = (function (){var statearr_49557 = state_49529;
(statearr_49557[(16)] = inst_49486__$1);

return statearr_49557;
})();
if(inst_49486__$1){
var statearr_49558_49608 = state_49529__$1;
(statearr_49558_49608[(1)] = (13));

} else {
var statearr_49559_49609 = state_49529__$1;
(statearr_49559_49609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (14))){
var state_49529__$1 = state_49529;
var statearr_49560_49610 = state_49529__$1;
(statearr_49560_49610[(2)] = null);

(statearr_49560_49610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (16))){
var inst_49486 = (state_49529[(16)]);
var inst_49490 = cljs.core.chunk_first.call(null,inst_49486);
var inst_49491 = cljs.core.chunk_rest.call(null,inst_49486);
var inst_49492 = cljs.core.count.call(null,inst_49490);
var inst_49454 = inst_49491;
var inst_49455 = inst_49490;
var inst_49456 = inst_49492;
var inst_49457 = (0);
var state_49529__$1 = (function (){var statearr_49561 = state_49529;
(statearr_49561[(7)] = inst_49454);

(statearr_49561[(8)] = inst_49456);

(statearr_49561[(9)] = inst_49457);

(statearr_49561[(10)] = inst_49455);

return statearr_49561;
})();
var statearr_49562_49611 = state_49529__$1;
(statearr_49562_49611[(2)] = null);

(statearr_49562_49611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (10))){
var inst_49468 = (state_49529[(14)]);
var inst_49466 = (state_49529[(15)]);
var inst_49478 = (state_49529[(2)]);
var inst_49479 = [inst_49466,inst_49478];
var inst_49480 = (new cljs.core.PersistentVector(null,2,(5),inst_49468,inst_49479,null));
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49529__$1,(7),val_chan,inst_49480);
} else {
if((state_val_49530 === (18))){
var inst_49519 = (state_49529[(2)]);
var state_49529__$1 = state_49529;
var statearr_49563_49612 = state_49529__$1;
(statearr_49563_49612[(2)] = inst_49519);

(statearr_49563_49612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49530 === (8))){
var inst_49467 = (state_49529[(13)]);
var inst_49471 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_49467);
var state_49529__$1 = state_49529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49529__$1,(11),inst_49471);
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
});})(c__36744__auto___49590,val_chan))
;
return ((function (switch__36723__auto__,c__36744__auto___49590,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__36724__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__36724__auto____0 = (function (){
var statearr_49567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49567[(0)] = ui$parser_async$async_query_result_$_state_machine__36724__auto__);

(statearr_49567[(1)] = (1));

return statearr_49567;
});
var ui$parser_async$async_query_result_$_state_machine__36724__auto____1 = (function (state_49529){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_49529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e49568){if((e49568 instanceof Object)){
var ex__36727__auto__ = e49568;
var statearr_49569_49613 = state_49529;
(statearr_49569_49613[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49614 = state_49529;
state_49529 = G__49614;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__36724__auto__ = function(state_49529){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__36724__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__36724__auto____1.call(this,state_49529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__36724__auto____0;
ui$parser_async$async_query_result_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__36724__auto____1;
return ui$parser_async$async_query_result_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___49590,val_chan))
})();
var state__36746__auto__ = (function (){var statearr_49570 = f__36745__auto__.call(null);
(statearr_49570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___49590);

return statearr_49570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___49590,val_chan))
);


var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,val_chan){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,val_chan){
return (function (state_49578){
var state_val_49579 = (state_49578[(1)]);
if((state_val_49579 === (1))){
var inst_49572 = (function (){return ((function (state_val_49579,c__36744__auto__,val_chan){
return (function (acc,p__49571){
var vec__49580 = p__49571;
var k = cljs.core.nth.call(null,vec__49580,(0),null);
var v = cljs.core.nth.call(null,vec__49580,(1),null);
return cljs.core.assoc.call(null,acc,k,v);
});
;})(state_val_49579,c__36744__auto__,val_chan))
})();
var inst_49573 = cljs.core.PersistentHashMap.EMPTY;
var inst_49574 = cljs.core.async.reduce.call(null,inst_49572,inst_49573,val_chan);
var state_49578__$1 = state_49578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49578__$1,(2),inst_49574);
} else {
if((state_val_49579 === (2))){
var inst_49576 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49578__$1,inst_49576);
} else {
return null;
}
}
});})(c__36744__auto__,val_chan))
;
return ((function (switch__36723__auto__,c__36744__auto__,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__36724__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__36724__auto____0 = (function (){
var statearr_49586 = [null,null,null,null,null,null,null];
(statearr_49586[(0)] = ui$parser_async$async_query_result_$_state_machine__36724__auto__);

(statearr_49586[(1)] = (1));

return statearr_49586;
});
var ui$parser_async$async_query_result_$_state_machine__36724__auto____1 = (function (state_49578){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_49578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e49587){if((e49587 instanceof Object)){
var ex__36727__auto__ = e49587;
var statearr_49588_49615 = state_49578;
(statearr_49588_49615[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49616 = state_49578;
state_49578 = G__49616;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__36724__auto__ = function(state_49578){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__36724__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__36724__auto____1.call(this,state_49578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__36724__auto____0;
ui$parser_async$async_query_result_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__36724__auto____1;
return ui$parser_async$async_query_result_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,val_chan))
})();
var state__36746__auto__ = (function (){var statearr_49589 = f__36745__auto__.call(null);
(statearr_49589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_49589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,val_chan))
);

return c__36744__auto__;
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
ui.parser_async.parser = (function ui$parser_async$parser(p__49617){
var map__52310 = p__49617;
var map__52310__$1 = ((((!((map__52310 == null)))?((((map__52310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52310):map__52310);
var config = map__52310__$1;
var read = cljs.core.get.call(null,map__52310__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__52310__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__52310,map__52310__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self = null;
var ui$parser_async$parser_$_self__2 = (function (env,query){
return ui$parser_async$parser_$_self.call(null,env,query,null);
});
var ui$parser_async$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__31951__auto__ = new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__53657 = (function (){var G__53658 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),ui$parser_async$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
if(!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.call(null,G__53658,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__53658;
}
})();
var map__53657__$1 = ((((!((map__53657 == null)))?((((map__53657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53657):map__53657);
var env__$1 = map__53657__$1;
var path = cljs.core.get.call(null,map__53657__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function ui$parser_async$parser_$_self_$_step(ret,expr){
var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function (state_54788){
var state_val_54789 = (state_54788[(1)]);
if((state_val_54789 === (65))){
var inst_54622 = (state_54788[(7)]);
var inst_54753 = cljs.core.first.call(null,inst_54622);
var state_54788__$1 = state_54788;
var statearr_54790_55002 = state_54788__$1;
(statearr_54790_55002[(2)] = inst_54753);

(statearr_54790_55002[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (70))){
var inst_54701 = (state_54788[(8)]);
var inst_54772 = (state_54788[(2)]);
var inst_54773 = cljs.core.deref.call(null,inst_54701);
var state_54788__$1 = (function (){var statearr_54791 = state_54788;
(statearr_54791[(9)] = inst_54772);

return statearr_54791;
})();
if(cljs.core.truth_(inst_54773)){
var statearr_54792_55003 = state_54788__$1;
(statearr_54792_55003[(1)] = (72));

} else {
var statearr_54793_55004 = state_54788__$1;
(statearr_54793_55004[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (62))){
var inst_54622 = (state_54788[(7)]);
var inst_54751 = om.util.unique_ident_QMARK_.call(null,inst_54622);
var state_54788__$1 = state_54788;
if(inst_54751){
var statearr_54794_55005 = state_54788__$1;
(statearr_54794_55005[(1)] = (65));

} else {
var statearr_54795_55006 = state_54788__$1;
(statearr_54795_55006[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (74))){
var inst_54782 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54796_55007 = state_54788__$1;
(statearr_54796_55007[(2)] = inst_54782);

(statearr_54796_55007[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (7))){
var inst_54612 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54797_55008 = state_54788__$1;
(statearr_54797_55008[(2)] = inst_54612);

(statearr_54797_55008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (59))){
var state_54788__$1 = state_54788;
var statearr_54798_55009 = state_54788__$1;
(statearr_54798_55009[(2)] = null);

(statearr_54798_55009[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (20))){
var inst_54670 = (state_54788[(2)]);
var inst_54671 = (target == null);
var inst_54672 = cljs.core.not.call(null,inst_54671);
var state_54788__$1 = (function (){var statearr_54799 = state_54788;
(statearr_54799[(10)] = inst_54670);

return statearr_54799;
})();
if(inst_54672){
var statearr_54800_55010 = state_54788__$1;
(statearr_54800_55010[(1)] = (29));

} else {
var statearr_54801_55011 = state_54788__$1;
(statearr_54801_55011[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (72))){
var inst_54622 = (state_54788[(7)]);
var inst_54772 = (state_54788[(9)]);
var inst_54701 = (state_54788[(8)]);
var inst_54775 = [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)];
var inst_54776 = cljs.core.deref.call(null,inst_54701);
var inst_54777 = [inst_54776];
var inst_54778 = cljs.core.PersistentHashMap.fromArrays(inst_54775,inst_54777);
var inst_54779 = cljs.core.assoc.call(null,inst_54772,inst_54622,inst_54778);
var state_54788__$1 = state_54788;
var statearr_54802_55012 = state_54788__$1;
(statearr_54802_55012[(2)] = inst_54779);

(statearr_54802_55012[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (58))){
var inst_54730 = (state_54788[(11)]);
var inst_54745 = (state_54788[(2)]);
var inst_54747 = (inst_54730 == null);
var inst_54748 = cljs.core.not.call(null,inst_54747);
var state_54788__$1 = (function (){var statearr_54803 = state_54788;
(statearr_54803[(12)] = inst_54745);

return statearr_54803;
})();
if(inst_54748){
var statearr_54804_55013 = state_54788__$1;
(statearr_54804_55013[(1)] = (62));

} else {
var statearr_54805_55014 = state_54788__$1;
(statearr_54805_55014[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (60))){
var inst_54623 = (state_54788[(13)]);
var inst_54737 = [cljs.core.str(inst_54623),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('');
var inst_54738 = [cljs.core.str("Assert failed: "),cljs.core.str(inst_54737),cljs.core.str("\n"),cljs.core.str("(or (nil? value) (map? value))")].join('');
var inst_54739 = (new Error(inst_54738));
var inst_54740 = (function(){throw inst_54739})();
var state_54788__$1 = state_54788;
var statearr_54806_55015 = state_54788__$1;
(statearr_54806_55015[(2)] = inst_54740);

(statearr_54806_55015[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (27))){
var inst_54662 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('');
var inst_54663 = (new Error(inst_54662));
var inst_54664 = (function(){throw inst_54663})();
var state_54788__$1 = state_54788;
var statearr_54807_55016 = state_54788__$1;
(statearr_54807_55016[(2)] = inst_54664);

(statearr_54807_55016[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (1))){
var inst_54600 = (state_54788[(14)]);
var inst_54600__$1 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var inst_54602 = (inst_54600__$1 == null);
var inst_54603 = cljs.core.not.call(null,inst_54602);
var state_54788__$1 = (function (){var statearr_54808 = state_54788;
(statearr_54808[(14)] = inst_54600__$1);

return statearr_54808;
})();
if(inst_54603){
var statearr_54809_55017 = state_54788__$1;
(statearr_54809_55017[(1)] = (2));

} else {
var statearr_54810_55018 = state_54788__$1;
(statearr_54810_55018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (69))){
var inst_54760 = (state_54788[(15)]);
var state_54788__$1 = state_54788;
var statearr_54811_55019 = state_54788__$1;
(statearr_54811_55019[(2)] = inst_54760);

(statearr_54811_55019[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (24))){
var inst_54624 = (state_54788[(16)]);
var inst_54648 = (state_54788[(17)]);
var inst_54623 = (state_54788[(13)]);
var inst_54657 = (state_54788[(2)]);
var inst_54658 = mutate.call(null,inst_54648,inst_54623,inst_54624);
var state_54788__$1 = (function (){var statearr_54812 = state_54788;
(statearr_54812[(18)] = inst_54657);

return statearr_54812;
})();
var statearr_54813_55020 = state_54788__$1;
(statearr_54813_55020[(2)] = inst_54658);

(statearr_54813_55020[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (55))){
var inst_54702 = (state_54788[(19)]);
var inst_54670 = (state_54788[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54788,(51),new cljs.core.Keyword(null,"default","default",-1987822328),null,(50));
var inst_54722 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_54670);
var inst_54723 = inst_54722.call(null);
var inst_54724 = cljs.core.reset_BANG_.call(null,inst_54702,inst_54723);
var state_54788__$1 = state_54788;
var statearr_54814_55021 = state_54788__$1;
(statearr_54814_55021[(2)] = inst_54724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54788__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (39))){
var inst_54620 = (state_54788[(20)]);
var inst_54670 = (state_54788[(10)]);
var inst_54692 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(inst_54620);
var inst_54693 = (inst_54692 == null);
var inst_54694 = cljs.core.contains_QMARK_.call(null,inst_54670,new cljs.core.Keyword(null,"value","value",305978217));
var inst_54695 = (inst_54693) || (inst_54694);
var state_54788__$1 = state_54788;
var statearr_54815_55022 = state_54788__$1;
(statearr_54815_55022[(2)] = inst_54695);

(statearr_54815_55022[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (46))){
var inst_54709 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54709)){
var statearr_54816_55023 = state_54788__$1;
(statearr_54816_55023[(1)] = (47));

} else {
var statearr_54817_55024 = state_54788__$1;
(statearr_54817_55024[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (4))){
var inst_54615 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54615)){
var statearr_54818_55025 = state_54788__$1;
(statearr_54818_55025[(1)] = (8));

} else {
var statearr_54819_55026 = state_54788__$1;
(statearr_54819_55026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (54))){
var inst_54718 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54820_55027 = state_54788__$1;
(statearr_54820_55027[(2)] = inst_54718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54788__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (15))){
var inst_54635 = (state_54788[(21)]);
var state_54788__$1 = state_54788;
var statearr_54821_55028 = state_54788__$1;
(statearr_54821_55028[(2)] = inst_54635);

(statearr_54821_55028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (48))){
var state_54788__$1 = state_54788;
var statearr_54822_55029 = state_54788__$1;
(statearr_54822_55029[(2)] = null);

(statearr_54822_55029[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (50))){
var inst_54726 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54823_55030 = state_54788__$1;
(statearr_54823_55030[(2)] = inst_54726);

(statearr_54823_55030[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (21))){
var state_54788__$1 = state_54788;
if(cljs.core.truth_(mutate)){
var statearr_54824_55031 = state_54788__$1;
(statearr_54824_55031[(1)] = (22));

} else {
var statearr_54825_55032 = state_54788__$1;
(statearr_54825_55032[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (31))){
var inst_54786 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54788__$1,inst_54786);
} else {
if((state_val_54789 === (32))){
var inst_54678 = cljs.core.conj.call(null,ret,expr);
var state_54788__$1 = state_54788;
var statearr_54826_55033 = state_54788__$1;
(statearr_54826_55033[(2)] = inst_54678);

(statearr_54826_55033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (40))){
var inst_54697 = (state_54788[(2)]);
var inst_54698 = cljs.core.not.call(null,inst_54697);
var state_54788__$1 = state_54788;
if(inst_54698){
var statearr_54827_55034 = state_54788__$1;
(statearr_54827_55034[(1)] = (41));

} else {
var statearr_54828_55035 = state_54788__$1;
(statearr_54828_55035[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (56))){
var inst_54730 = (state_54788[(11)]);
var inst_54732 = (inst_54730 == null);
var inst_54733 = cljs.core.map_QMARK_.call(null,inst_54730);
var inst_54734 = (inst_54732) || (inst_54733);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54734)){
var statearr_54829_55036 = state_54788__$1;
(statearr_54829_55036[(1)] = (59));

} else {
var statearr_54830_55037 = state_54788__$1;
(statearr_54830_55037[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (33))){
var state_54788__$1 = state_54788;
var statearr_54831_55038 = state_54788__$1;
(statearr_54831_55038[(2)] = ret);

(statearr_54831_55038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (13))){
var inst_54621 = (state_54788[(22)]);
var inst_54635 = (state_54788[(2)]);
var inst_54636 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_54637 = cljs.core._EQ_.call(null,inst_54636,inst_54621);
var state_54788__$1 = (function (){var statearr_54832 = state_54788;
(statearr_54832[(21)] = inst_54635);

return statearr_54832;
})();
if(inst_54637){
var statearr_54833_55039 = state_54788__$1;
(statearr_54833_55039[(1)] = (14));

} else {
var statearr_54834_55040 = state_54788__$1;
(statearr_54834_55040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (22))){
var state_54788__$1 = state_54788;
var statearr_54835_55041 = state_54788__$1;
(statearr_54835_55041[(2)] = null);

(statearr_54835_55041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (36))){
var inst_54681 = (state_54788[(23)]);
var state_54788__$1 = state_54788;
var statearr_54836_55042 = state_54788__$1;
(statearr_54836_55042[(2)] = inst_54681);

(statearr_54836_55042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (41))){
var state_54788__$1 = state_54788;
var statearr_54837_55043 = state_54788__$1;
(statearr_54837_55043[(2)] = ret);

(statearr_54837_55043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (43))){
var inst_54784 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54838_55044 = state_54788__$1;
(statearr_54838_55044[(2)] = inst_54784);

(statearr_54838_55044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (61))){
var inst_54742 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54839_55045 = state_54788__$1;
(statearr_54839_55045[(2)] = inst_54742);

(statearr_54839_55045[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (29))){
var inst_54674 = (state_54788[(24)]);
var inst_54670 = (state_54788[(10)]);
var inst_54674__$1 = cljs.core.get.call(null,inst_54670,target);
var inst_54676 = inst_54674__$1 === true;
var state_54788__$1 = (function (){var statearr_54840 = state_54788;
(statearr_54840[(24)] = inst_54674__$1);

return statearr_54840;
})();
if(cljs.core.truth_(inst_54676)){
var statearr_54841_55046 = state_54788__$1;
(statearr_54841_55046[(1)] = (32));

} else {
var statearr_54842_55047 = state_54788__$1;
(statearr_54842_55047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (44))){
var inst_54670 = (state_54788[(10)]);
var inst_54704 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_54670);
var inst_54705 = (inst_54704 == null);
var inst_54706 = cljs.core.not.call(null,inst_54705);
var state_54788__$1 = state_54788;
var statearr_54843_55048 = state_54788__$1;
(statearr_54843_55048[(2)] = inst_54706);

(statearr_54843_55048[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (6))){
var state_54788__$1 = state_54788;
var statearr_54844_55049 = state_54788__$1;
(statearr_54844_55049[(2)] = false);

(statearr_54844_55049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (28))){
var inst_54624 = (state_54788[(16)]);
var inst_54648 = (state_54788[(17)]);
var inst_54623 = (state_54788[(13)]);
var inst_54666 = (state_54788[(2)]);
var inst_54667 = read.call(null,inst_54648,inst_54623,inst_54624);
var state_54788__$1 = (function (){var statearr_54845 = state_54788;
(statearr_54845[(25)] = inst_54666);

return statearr_54845;
})();
var statearr_54846_55050 = state_54788__$1;
(statearr_54846_55050[(2)] = inst_54667);

(statearr_54846_55050[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (64))){
var inst_54702 = (state_54788[(19)]);
var inst_54760 = (state_54788[(2)]);
var inst_54761 = cljs.core.deref.call(null,inst_54702);
var state_54788__$1 = (function (){var statearr_54847 = state_54788;
(statearr_54847[(15)] = inst_54760);

return statearr_54847;
})();
if(cljs.core.truth_(inst_54761)){
var statearr_54848_55051 = state_54788__$1;
(statearr_54848_55051[(1)] = (68));

} else {
var statearr_54849_55052 = state_54788__$1;
(statearr_54849_55052[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (51))){
var inst_54711 = (state_54788[(26)]);
var inst_54711__$1 = (state_54788[(2)]);
var inst_54712 = om.next.impl.parser.rethrow_QMARK_.call(null,inst_54711__$1);
var state_54788__$1 = (function (){var statearr_54850 = state_54788;
(statearr_54850[(26)] = inst_54711__$1);

return statearr_54850;
})();
if(cljs.core.truth_(inst_54712)){
var statearr_54851_55053 = state_54788__$1;
(statearr_54851_55053[(1)] = (52));

} else {
var statearr_54852_55054 = state_54788__$1;
(statearr_54852_55054[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (25))){
var state_54788__$1 = state_54788;
if(cljs.core.truth_(read)){
var statearr_54853_55055 = state_54788__$1;
(statearr_54853_55055[(1)] = (26));

} else {
var statearr_54854_55056 = state_54788__$1;
(statearr_54854_55056[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (34))){
var inst_54674 = (state_54788[(24)]);
var inst_54681 = (state_54788[(2)]);
var inst_54682 = cljs.core.map_QMARK_.call(null,inst_54674);
var state_54788__$1 = (function (){var statearr_54855 = state_54788;
(statearr_54855[(23)] = inst_54681);

return statearr_54855;
})();
if(inst_54682){
var statearr_54856_55057 = state_54788__$1;
(statearr_54856_55057[(1)] = (35));

} else {
var statearr_54857_55058 = state_54788__$1;
(statearr_54857_55058[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (17))){
var inst_54622 = (state_54788[(7)]);
var inst_54642 = (state_54788[(27)]);
var inst_54645 = cljs.core.assoc.call(null,inst_54642,new cljs.core.Keyword(null,"query-root","query-root",359781888),inst_54622);
var state_54788__$1 = state_54788;
var statearr_54858_55059 = state_54788__$1;
(statearr_54858_55059[(2)] = inst_54645);

(statearr_54858_55059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (3))){
var state_54788__$1 = state_54788;
var statearr_54859_55060 = state_54788__$1;
(statearr_54859_55060[(2)] = false);

(statearr_54859_55060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (12))){
var inst_54629 = (state_54788[(28)]);
var state_54788__$1 = state_54788;
var statearr_54860_55061 = state_54788__$1;
(statearr_54860_55061[(2)] = inst_54629);

(statearr_54860_55061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (2))){
var inst_54600 = (state_54788[(14)]);
var inst_54605 = inst_54600.cljs$lang$protocol_mask$partition0$;
var inst_54606 = (inst_54605 & (64));
var inst_54607 = inst_54600.cljs$core$ISeq$;
var inst_54608 = (inst_54606) || (inst_54607);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54608)){
var statearr_54861_55062 = state_54788__$1;
(statearr_54861_55062[(1)] = (5));

} else {
var statearr_54862_55063 = state_54788__$1;
(statearr_54862_55063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (66))){
var inst_54622 = (state_54788[(7)]);
var state_54788__$1 = state_54788;
var statearr_54863_55064 = state_54788__$1;
(statearr_54863_55064[(2)] = inst_54622);

(statearr_54863_55064[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (23))){
var inst_54653 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('');
var inst_54654 = (new Error(inst_54653));
var inst_54655 = (function(){throw inst_54654})();
var state_54788__$1 = state_54788;
var statearr_54864_55065 = state_54788__$1;
(statearr_54864_55065[(2)] = inst_54655);

(statearr_54864_55065[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (47))){
var state_54788__$1 = state_54788;
var statearr_54865_55066 = state_54788__$1;
(statearr_54865_55066[(2)] = null);

(statearr_54865_55066[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (35))){
var inst_54674 = (state_54788[(24)]);
var inst_54681 = (state_54788[(23)]);
var inst_54684 = om.next.impl.parser.ast__GT_expr.call(null,inst_54674);
var inst_54685 = cljs.core.conj.call(null,inst_54681,inst_54684);
var state_54788__$1 = state_54788;
var statearr_54866_55067 = state_54788__$1;
(statearr_54866_55067[(2)] = inst_54685);

(statearr_54866_55067[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (19))){
var inst_54620 = (state_54788[(20)]);
var inst_54648 = (state_54788[(2)]);
var inst_54649 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_54620);
var inst_54650 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),inst_54649);
var state_54788__$1 = (function (){var statearr_54867 = state_54788;
(statearr_54867[(17)] = inst_54648);

(statearr_54867[(29)] = inst_54650);

return statearr_54867;
})();
var G__54868_55068 = (((inst_54649 instanceof cljs.core.Keyword))?inst_54649.fqn:null);
switch (G__54868_55068) {
case "call":
var statearr_54869_55070 = state_54788__$1;
(statearr_54869_55070[(1)] = (21));


break;
case "prop":
var statearr_54870_55071 = state_54788__$1;
(statearr_54870_55071[(1)] = (25));


break;
case "join":
var statearr_54871_55072 = state_54788__$1;
(statearr_54871_55072[(1)] = (25));


break;
case "union":
var statearr_54872_55073 = state_54788__$1;
(statearr_54872_55073[(1)] = (25));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_54649)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (57))){
var state_54788__$1 = state_54788;
var statearr_54873_55074 = state_54788__$1;
(statearr_54873_55074[(2)] = null);

(statearr_54873_55074[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (68))){
var inst_54622 = (state_54788[(7)]);
var inst_54702 = (state_54788[(19)]);
var inst_54763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54764 = [inst_54622,new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_54765 = (new cljs.core.PersistentVector(null,2,(5),inst_54763,inst_54764,null));
var inst_54766 = cljs.core.deref.call(null,inst_54702);
var state_54788__$1 = (function (){var statearr_54874 = state_54788;
(statearr_54874[(30)] = inst_54765);

return statearr_54874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54788__$1,(71),inst_54766);
} else {
if((state_val_54789 === (11))){
var inst_54629 = (state_54788[(28)]);
var inst_54632 = cljs.core.dissoc.call(null,inst_54629,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_54788__$1 = state_54788;
var statearr_54875_55075 = state_54788__$1;
(statearr_54875_55075[(2)] = inst_54632);

(statearr_54875_55075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (9))){
var inst_54600 = (state_54788[(14)]);
var state_54788__$1 = state_54788;
var statearr_54876_55076 = state_54788__$1;
(statearr_54876_55076[(2)] = inst_54600);

(statearr_54876_55076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (5))){
var state_54788__$1 = state_54788;
var statearr_54877_55077 = state_54788__$1;
(statearr_54877_55077[(2)] = true);

(statearr_54877_55077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (14))){
var inst_54635 = (state_54788[(21)]);
var inst_54639 = cljs.core.assoc.call(null,inst_54635,new cljs.core.Keyword(null,"query","query",-1288509510),query);
var state_54788__$1 = state_54788;
var statearr_54878_55078 = state_54788__$1;
(statearr_54878_55078[(2)] = inst_54639);

(statearr_54878_55078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (45))){
var inst_54650 = (state_54788[(29)]);
var state_54788__$1 = state_54788;
var statearr_54879_55079 = state_54788__$1;
(statearr_54879_55079[(2)] = inst_54650);

(statearr_54879_55079[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (53))){
var inst_54711 = (state_54788[(26)]);
var inst_54701 = (state_54788[(8)]);
var inst_54716 = cljs.core.reset_BANG_.call(null,inst_54701,inst_54711);
var state_54788__$1 = state_54788;
var statearr_54880_55080 = state_54788__$1;
(statearr_54880_55080[(2)] = inst_54716);

(statearr_54880_55080[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (26))){
var state_54788__$1 = state_54788;
var statearr_54881_55081 = state_54788__$1;
(statearr_54881_55081[(2)] = null);

(statearr_54881_55081[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (16))){
var inst_54622 = (state_54788[(7)]);
var inst_54642 = (state_54788[(2)]);
var inst_54643 = cljs.core.vector_QMARK_.call(null,inst_54622);
var state_54788__$1 = (function (){var statearr_54882 = state_54788;
(statearr_54882[(27)] = inst_54642);

return statearr_54882;
})();
if(inst_54643){
var statearr_54883_55082 = state_54788__$1;
(statearr_54883_55082[(1)] = (17));

} else {
var statearr_54884_55083 = state_54788__$1;
(statearr_54884_55083[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (38))){
var inst_54650 = (state_54788[(29)]);
var state_54788__$1 = state_54788;
var statearr_54885_55084 = state_54788__$1;
(statearr_54885_55084[(2)] = inst_54650);

(statearr_54885_55084[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (30))){
var inst_54650 = (state_54788[(29)]);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54650)){
var statearr_54886_55085 = state_54788__$1;
(statearr_54886_55085[(1)] = (38));

} else {
var statearr_54887_55086 = state_54788__$1;
(statearr_54887_55086[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (73))){
var inst_54772 = (state_54788[(9)]);
var state_54788__$1 = state_54788;
var statearr_54888_55087 = state_54788__$1;
(statearr_54888_55087[(2)] = inst_54772);

(statearr_54888_55087[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (10))){
var inst_54621 = (state_54788[(22)]);
var inst_54620 = (state_54788[(20)]);
var inst_54620__$1 = (state_54788[(2)]);
var inst_54621__$1 = cljs.core.get.call(null,inst_54620__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54622 = cljs.core.get.call(null,inst_54620__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54623 = cljs.core.get.call(null,inst_54620__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var inst_54624 = cljs.core.get.call(null,inst_54620__$1,new cljs.core.Keyword(null,"params","params",710516235));
var inst_54626 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_54627 = [inst_54620__$1,inst_54621__$1];
var inst_54628 = cljs.core.PersistentHashMap.fromArrays(inst_54626,inst_54627);
var inst_54629 = cljs.core.merge.call(null,env__$1,inst_54628);
var inst_54630 = (inst_54621__$1 == null);
var state_54788__$1 = (function (){var statearr_54889 = state_54788;
(statearr_54889[(22)] = inst_54621__$1);

(statearr_54889[(20)] = inst_54620__$1);

(statearr_54889[(7)] = inst_54622);

(statearr_54889[(16)] = inst_54624);

(statearr_54889[(13)] = inst_54623);

(statearr_54889[(28)] = inst_54629);

return statearr_54889;
})();
if(cljs.core.truth_(inst_54630)){
var statearr_54890_55088 = state_54788__$1;
(statearr_54890_55088[(1)] = (11));

} else {
var statearr_54891_55089 = state_54788__$1;
(statearr_54891_55089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (18))){
var inst_54642 = (state_54788[(27)]);
var state_54788__$1 = state_54788;
var statearr_54892_55090 = state_54788__$1;
(statearr_54892_55090[(2)] = inst_54642);

(statearr_54892_55090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (52))){
var inst_54711 = (state_54788[(26)]);
var inst_54714 = (function(){throw inst_54711})();
var state_54788__$1 = state_54788;
var statearr_54893_55091 = state_54788__$1;
(statearr_54893_55091[(2)] = inst_54714);

(statearr_54893_55091[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (67))){
var inst_54730 = (state_54788[(11)]);
var inst_54756 = (state_54788[(2)]);
var inst_54757 = cljs.core.assoc.call(null,ret,inst_54756,inst_54730);
var state_54788__$1 = state_54788;
var statearr_54894_55092 = state_54788__$1;
(statearr_54894_55092[(2)] = inst_54757);

(statearr_54894_55092[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (71))){
var inst_54765 = (state_54788[(30)]);
var inst_54760 = (state_54788[(15)]);
var inst_54768 = (state_54788[(2)]);
var inst_54769 = cljs.core.assoc_in.call(null,inst_54760,inst_54765,inst_54768);
var state_54788__$1 = state_54788;
var statearr_54895_55093 = state_54788__$1;
(statearr_54895_55093[(2)] = inst_54769);

(statearr_54895_55093[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (42))){
var inst_54650 = (state_54788[(29)]);
var inst_54701 = cljs.core.atom.call(null,null);
var inst_54702 = cljs.core.atom.call(null,null);
var state_54788__$1 = (function (){var statearr_54896 = state_54788;
(statearr_54896[(19)] = inst_54702);

(statearr_54896[(8)] = inst_54701);

return statearr_54896;
})();
if(cljs.core.truth_(inst_54650)){
var statearr_54897_55094 = state_54788__$1;
(statearr_54897_55094[(1)] = (44));

} else {
var statearr_54898_55095 = state_54788__$1;
(statearr_54898_55095[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (37))){
var inst_54688 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54899_55096 = state_54788__$1;
(statearr_54899_55096[(2)] = inst_54688);

(statearr_54899_55096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (63))){
var state_54788__$1 = state_54788;
var statearr_54900_55097 = state_54788__$1;
(statearr_54900_55097[(2)] = ret);

(statearr_54900_55097[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (8))){
var inst_54600 = (state_54788[(14)]);
var inst_54617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54600);
var state_54788__$1 = state_54788;
var statearr_54901_55098 = state_54788__$1;
(statearr_54901_55098[(2)] = inst_54617);

(statearr_54901_55098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (49))){
var inst_54650 = (state_54788[(29)]);
var inst_54670 = (state_54788[(10)]);
var inst_54729 = (state_54788[(2)]);
var inst_54730 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_54670);
var state_54788__$1 = (function (){var statearr_54902 = state_54788;
(statearr_54902[(31)] = inst_54729);

(statearr_54902[(11)] = inst_54730);

return statearr_54902;
})();
if(cljs.core.truth_(inst_54650)){
var statearr_54903_55099 = state_54788__$1;
(statearr_54903_55099[(1)] = (56));

} else {
var statearr_54904_55100 = state_54788__$1;
(statearr_54904_55100[(1)] = (57));

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
});})(c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
;
return ((function (switch__36723__auto__,c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto__ = null;
var ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto____0 = (function (){
var statearr_54908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54908[(0)] = ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto__);

(statearr_54908[(1)] = (1));

return statearr_54908;
});
var ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto____1 = (function (state_54788){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_54788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e54909){if((e54909 instanceof Object)){
var ex__36727__auto__ = e54909;
var statearr_54910_55101 = state_54788;
(statearr_54910_55101[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55102 = state_54788;
state_54788 = G__55102;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto__ = function(state_54788){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto____1.call(this,state_54788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto____0;
ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto____1;
return ui$parser_async$parser_$_self_$_step_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
})();
var state__36746__auto__ = (function (){var statearr_54911 = f__36745__auto__.call(null);
(statearr_54911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_54911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
);

return c__36744__auto__;
});})(elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
;
var G__54912 = (function (){var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function (state_54967){
var state_val_54968 = (state_54967[(1)]);
if((state_val_54968 === (7))){
var inst_54920 = (state_54967[(7)]);
var inst_54921 = (state_54967[(8)]);
var inst_54925 = cljs.core.first.call(null,inst_54921);
var inst_54926 = step.call(null,inst_54920,inst_54925);
var state_54967__$1 = state_54967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54967__$1,(10),inst_54926);
} else {
if((state_val_54968 === (1))){
var inst_54913 = (target == null);
var state_54967__$1 = state_54967;
if(cljs.core.truth_(inst_54913)){
var statearr_54969_55103 = state_54967__$1;
(statearr_54969_55103[(1)] = (2));

} else {
var statearr_54970_55104 = state_54967__$1;
(statearr_54970_55104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (4))){
var inst_54919 = (state_54967[(2)]);
var inst_54920 = inst_54919;
var inst_54921 = query;
var state_54967__$1 = (function (){var statearr_54971 = state_54967;
(statearr_54971[(7)] = inst_54920);

(statearr_54971[(8)] = inst_54921);

return statearr_54971;
})();
var statearr_54972_55105 = state_54967__$1;
(statearr_54972_55105[(2)] = null);

(statearr_54972_55105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (15))){
var inst_54963 = (state_54967[(2)]);
var state_54967__$1 = state_54967;
var statearr_54973_55106 = state_54967__$1;
(statearr_54973_55106[(2)] = inst_54963);

(statearr_54973_55106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (13))){
var inst_54943 = (state_54967[(9)]);
var inst_54938 = (state_54967[(10)]);
var inst_54942 = cljs.core.first.call(null,inst_54938);
var inst_54943__$1 = cljs.core.second.call(null,inst_54942);
var inst_54944 = cljs.core.type.call(null,inst_54943__$1);
var inst_54945 = cljs.core._EQ_.call(null,inst_54944,cljs.core.async.impl.channels.ManyToManyChannel);
var state_54967__$1 = (function (){var statearr_54974 = state_54967;
(statearr_54974[(9)] = inst_54943__$1);

return statearr_54974;
})();
if(inst_54945){
var statearr_54975_55107 = state_54967__$1;
(statearr_54975_55107[(1)] = (16));

} else {
var statearr_54976_55108 = state_54967__$1;
(statearr_54976_55108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (6))){
var inst_54935 = (state_54967[(2)]);
var inst_54936 = cljs.core.PersistentHashMap.EMPTY;
var inst_54937 = inst_54936;
var inst_54938 = inst_54935;
var state_54967__$1 = (function (){var statearr_54977 = state_54967;
(statearr_54977[(10)] = inst_54938);

(statearr_54977[(11)] = inst_54937);

return statearr_54977;
})();
var statearr_54978_55109 = state_54967__$1;
(statearr_54978_55109[(2)] = null);

(statearr_54978_55109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (17))){
var inst_54943 = (state_54967[(9)]);
var inst_54938 = (state_54967[(10)]);
var inst_54937 = (state_54967[(11)]);
var inst_54953 = cljs.core.first.call(null,inst_54938);
var inst_54954 = cljs.core.first.call(null,inst_54953);
var inst_54955 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_54943);
var inst_54956 = cljs.core.assoc.call(null,inst_54937,inst_54954,inst_54955);
var state_54967__$1 = state_54967;
var statearr_54979_55110 = state_54967__$1;
(statearr_54979_55110[(2)] = inst_54956);

(statearr_54979_55110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (3))){
var inst_54917 = cljs.core.PersistentVector.EMPTY;
var state_54967__$1 = state_54967;
var statearr_54980_55111 = state_54967__$1;
(statearr_54980_55111[(2)] = inst_54917);

(statearr_54980_55111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (12))){
var inst_54965 = (state_54967[(2)]);
var state_54967__$1 = state_54967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54967__$1,inst_54965);
} else {
if((state_val_54968 === (2))){
var inst_54915 = cljs.core.PersistentHashMap.EMPTY;
var state_54967__$1 = state_54967;
var statearr_54981_55112 = state_54967__$1;
(statearr_54981_55112[(2)] = inst_54915);

(statearr_54981_55112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (19))){
var inst_54948 = (state_54967[(12)]);
var inst_54937 = (state_54967[(11)]);
var inst_54950 = (state_54967[(2)]);
var inst_54951 = cljs.core.assoc.call(null,inst_54937,inst_54948,inst_54950);
var state_54967__$1 = state_54967;
var statearr_54982_55113 = state_54967__$1;
(statearr_54982_55113[(2)] = inst_54951);

(statearr_54982_55113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (11))){
var inst_54938 = (state_54967[(10)]);
var inst_54940 = cljs.core.seq.call(null,inst_54938);
var state_54967__$1 = state_54967;
if(inst_54940){
var statearr_54983_55114 = state_54967__$1;
(statearr_54983_55114[(1)] = (13));

} else {
var statearr_54984_55115 = state_54967__$1;
(statearr_54984_55115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (9))){
var inst_54933 = (state_54967[(2)]);
var state_54967__$1 = state_54967;
var statearr_54985_55116 = state_54967__$1;
(statearr_54985_55116[(2)] = inst_54933);

(statearr_54985_55116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (5))){
var inst_54921 = (state_54967[(8)]);
var inst_54923 = cljs.core.seq.call(null,inst_54921);
var state_54967__$1 = state_54967;
if(inst_54923){
var statearr_54986_55117 = state_54967__$1;
(statearr_54986_55117[(1)] = (7));

} else {
var statearr_54987_55118 = state_54967__$1;
(statearr_54987_55118[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (14))){
var inst_54937 = (state_54967[(11)]);
var state_54967__$1 = state_54967;
var statearr_54988_55119 = state_54967__$1;
(statearr_54988_55119[(2)] = inst_54937);

(statearr_54988_55119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (16))){
var inst_54943 = (state_54967[(9)]);
var inst_54938 = (state_54967[(10)]);
var inst_54947 = cljs.core.first.call(null,inst_54938);
var inst_54948 = cljs.core.first.call(null,inst_54947);
var state_54967__$1 = (function (){var statearr_54989 = state_54967;
(statearr_54989[(12)] = inst_54948);

return statearr_54989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54967__$1,(19),inst_54943);
} else {
if((state_val_54968 === (10))){
var inst_54921 = (state_54967[(8)]);
var inst_54928 = (state_54967[(2)]);
var inst_54929 = cljs.core.rest.call(null,inst_54921);
var inst_54920 = inst_54928;
var inst_54921__$1 = inst_54929;
var state_54967__$1 = (function (){var statearr_54990 = state_54967;
(statearr_54990[(7)] = inst_54920);

(statearr_54990[(8)] = inst_54921__$1);

return statearr_54990;
})();
var statearr_54991_55120 = state_54967__$1;
(statearr_54991_55120[(2)] = null);

(statearr_54991_55120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (18))){
var inst_54938 = (state_54967[(10)]);
var inst_54958 = (state_54967[(2)]);
var inst_54959 = cljs.core.rest.call(null,inst_54938);
var inst_54937 = inst_54958;
var inst_54938__$1 = inst_54959;
var state_54967__$1 = (function (){var statearr_54992 = state_54967;
(statearr_54992[(10)] = inst_54938__$1);

(statearr_54992[(11)] = inst_54937);

return statearr_54992;
})();
var statearr_54993_55121 = state_54967__$1;
(statearr_54993_55121[(2)] = null);

(statearr_54993_55121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54968 === (8))){
var inst_54920 = (state_54967[(7)]);
var state_54967__$1 = state_54967;
var statearr_54994_55122 = state_54967__$1;
(statearr_54994_55122[(2)] = inst_54920);

(statearr_54994_55122[(1)] = (9));


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
});})(c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
;
return ((function (switch__36723__auto__,c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_state_machine__36724__auto__ = null;
var ui$parser_async$parser_$_self_$_state_machine__36724__auto____0 = (function (){
var statearr_54998 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54998[(0)] = ui$parser_async$parser_$_self_$_state_machine__36724__auto__);

(statearr_54998[(1)] = (1));

return statearr_54998;
});
var ui$parser_async$parser_$_self_$_state_machine__36724__auto____1 = (function (state_54967){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_54967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e54999){if((e54999 instanceof Object)){
var ex__36727__auto__ = e54999;
var statearr_55000_55123 = state_54967;
(statearr_55000_55123[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55124 = state_54967;
state_54967 = G__55124;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_state_machine__36724__auto__ = function(state_54967){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_state_machine__36724__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_state_machine__36724__auto____1.call(this,state_54967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_state_machine__36724__auto____0;
ui$parser_async$parser_$_self_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_state_machine__36724__auto____1;
return ui$parser_async$parser_$_self_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
})();
var state__36746__auto__ = (function (){var statearr_55001 = f__36745__auto__.call(null);
(statearr_55001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_55001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,elide_paths_QMARK_,map__53657,map__53657__$1,env__$1,path,map__52310,map__52310__$1,config,read,mutate))
);

return c__36744__auto__;
})();
if(((target == null)) && (cljs.core.not.call(null,elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.call(null,G__54912,path,query);
} else {
return G__54912;
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
;})(map__52310,map__52310__$1,config,read,mutate))
});

//# sourceMappingURL=parser_async.js.map?rel=1491001405857