// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.parser_async');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.util');
goog.require('om.next.impl.parser');
goog.require('cljs.core.async');
ui.parser_async.async_query_result = (function ui$parser_async$async_query_result(result){
var val_chan = cljs.core.async.chan.call(null);
var c__38812__auto___65036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___65036,val_chan){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___65036,val_chan){
return (function (state_64975){
var state_val_64976 = (state_64975[(1)]);
if((state_val_64976 === (7))){
var inst_64902 = (state_64975[(7)]);
var inst_64901 = (state_64975[(8)]);
var inst_64900 = (state_64975[(9)]);
var inst_64903 = (state_64975[(10)]);
var inst_64928 = (state_64975[(2)]);
var inst_64929 = (inst_64903 + (1));
var tmp64977 = inst_64902;
var tmp64978 = inst_64901;
var tmp64979 = inst_64900;
var inst_64900__$1 = tmp64979;
var inst_64901__$1 = tmp64978;
var inst_64902__$1 = tmp64977;
var inst_64903__$1 = inst_64929;
var state_64975__$1 = (function (){var statearr_64980 = state_64975;
(statearr_64980[(7)] = inst_64902__$1);

(statearr_64980[(8)] = inst_64901__$1);

(statearr_64980[(9)] = inst_64900__$1);

(statearr_64980[(10)] = inst_64903__$1);

(statearr_64980[(11)] = inst_64928);

return statearr_64980;
})();
var statearr_64981_65037 = state_64975__$1;
(statearr_64981_65037[(2)] = null);

(statearr_64981_65037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (20))){
var inst_64946 = (state_64975[(12)]);
var inst_64950 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_64946);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64975__$1,(23),inst_64950);
} else {
if((state_val_64976 === (1))){
var inst_64899 = cljs.core.seq.call(null,result);
var inst_64900 = inst_64899;
var inst_64901 = null;
var inst_64902 = (0);
var inst_64903 = (0);
var state_64975__$1 = (function (){var statearr_64982 = state_64975;
(statearr_64982[(7)] = inst_64902);

(statearr_64982[(8)] = inst_64901);

(statearr_64982[(9)] = inst_64900);

(statearr_64982[(10)] = inst_64903);

return statearr_64982;
})();
var statearr_64983_65038 = state_64975__$1;
(statearr_64983_65038[(2)] = null);

(statearr_64983_65038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (24))){
var inst_64955 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64984_65039 = state_64975__$1;
(statearr_64984_65039[(2)] = inst_64955);

(statearr_64984_65039[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (4))){
var inst_64913 = (state_64975[(13)]);
var inst_64901 = (state_64975[(8)]);
var inst_64903 = (state_64975[(10)]);
var inst_64911 = cljs.core._nth.call(null,inst_64901,inst_64903);
var inst_64912 = cljs.core.nth.call(null,inst_64911,(0),null);
var inst_64913__$1 = cljs.core.nth.call(null,inst_64911,(1),null);
var inst_64914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64915 = cljs.core.map_QMARK_.call(null,inst_64913__$1);
var state_64975__$1 = (function (){var statearr_64985 = state_64975;
(statearr_64985[(13)] = inst_64913__$1);

(statearr_64985[(14)] = inst_64914);

(statearr_64985[(15)] = inst_64912);

return statearr_64985;
})();
if(inst_64915){
var statearr_64986_65040 = state_64975__$1;
(statearr_64986_65040[(1)] = (8));

} else {
var statearr_64987_65041 = state_64975__$1;
(statearr_64987_65041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (15))){
var inst_64968 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64988_65042 = state_64975__$1;
(statearr_64988_65042[(2)] = inst_64968);

(statearr_64988_65042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (21))){
var inst_64946 = (state_64975[(12)]);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64975__$1,(24),inst_64946);
} else {
if((state_val_64976 === (13))){
var inst_64932 = (state_64975[(16)]);
var inst_64934 = cljs.core.chunked_seq_QMARK_.call(null,inst_64932);
var state_64975__$1 = state_64975;
if(inst_64934){
var statearr_64989_65043 = state_64975__$1;
(statearr_64989_65043[(1)] = (16));

} else {
var statearr_64990_65044 = state_64975__$1;
(statearr_64990_65044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (22))){
var inst_64947 = (state_64975[(17)]);
var inst_64945 = (state_64975[(18)]);
var inst_64957 = (state_64975[(2)]);
var inst_64958 = [inst_64945,inst_64957];
var inst_64959 = (new cljs.core.PersistentVector(null,2,(5),inst_64947,inst_64958,null));
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64975__$1,(19),val_chan,inst_64959);
} else {
if((state_val_64976 === (6))){
var inst_64970 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64991_65045 = state_64975__$1;
(statearr_64991_65045[(2)] = inst_64970);

(statearr_64991_65045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (17))){
var inst_64932 = (state_64975[(16)]);
var inst_64946 = (state_64975[(12)]);
var inst_64944 = cljs.core.first.call(null,inst_64932);
var inst_64945 = cljs.core.nth.call(null,inst_64944,(0),null);
var inst_64946__$1 = cljs.core.nth.call(null,inst_64944,(1),null);
var inst_64947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64948 = cljs.core.map_QMARK_.call(null,inst_64946__$1);
var state_64975__$1 = (function (){var statearr_64992 = state_64975;
(statearr_64992[(17)] = inst_64947);

(statearr_64992[(12)] = inst_64946__$1);

(statearr_64992[(18)] = inst_64945);

return statearr_64992;
})();
if(inst_64948){
var statearr_64993_65046 = state_64975__$1;
(statearr_64993_65046[(1)] = (20));

} else {
var statearr_64994_65047 = state_64975__$1;
(statearr_64994_65047[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (3))){
var inst_64972 = (state_64975[(2)]);
var inst_64973 = cljs.core.async.close_BANG_.call(null,val_chan);
var state_64975__$1 = (function (){var statearr_64995 = state_64975;
(statearr_64995[(19)] = inst_64972);

return statearr_64995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64975__$1,inst_64973);
} else {
if((state_val_64976 === (12))){
var inst_64922 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64996_65048 = state_64975__$1;
(statearr_64996_65048[(2)] = inst_64922);

(statearr_64996_65048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (2))){
var inst_64902 = (state_64975[(7)]);
var inst_64903 = (state_64975[(10)]);
var inst_64905 = (inst_64903 < inst_64902);
var inst_64906 = inst_64905;
var state_64975__$1 = state_64975;
if(cljs.core.truth_(inst_64906)){
var statearr_64997_65049 = state_64975__$1;
(statearr_64997_65049[(1)] = (4));

} else {
var statearr_64998_65050 = state_64975__$1;
(statearr_64998_65050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (23))){
var inst_64952 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64999_65051 = state_64975__$1;
(statearr_64999_65051[(2)] = inst_64952);

(statearr_64999_65051[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (19))){
var inst_64932 = (state_64975[(16)]);
var inst_64961 = (state_64975[(2)]);
var inst_64962 = cljs.core.next.call(null,inst_64932);
var inst_64900 = inst_64962;
var inst_64901 = null;
var inst_64902 = (0);
var inst_64903 = (0);
var state_64975__$1 = (function (){var statearr_65000 = state_64975;
(statearr_65000[(7)] = inst_64902);

(statearr_65000[(20)] = inst_64961);

(statearr_65000[(8)] = inst_64901);

(statearr_65000[(9)] = inst_64900);

(statearr_65000[(10)] = inst_64903);

return statearr_65000;
})();
var statearr_65001_65052 = state_64975__$1;
(statearr_65001_65052[(2)] = null);

(statearr_65001_65052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (11))){
var inst_64919 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_65002_65053 = state_64975__$1;
(statearr_65002_65053[(2)] = inst_64919);

(statearr_65002_65053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (9))){
var inst_64913 = (state_64975[(13)]);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64975__$1,(12),inst_64913);
} else {
if((state_val_64976 === (5))){
var inst_64932 = (state_64975[(16)]);
var inst_64900 = (state_64975[(9)]);
var inst_64932__$1 = cljs.core.seq.call(null,inst_64900);
var state_64975__$1 = (function (){var statearr_65003 = state_64975;
(statearr_65003[(16)] = inst_64932__$1);

return statearr_65003;
})();
if(inst_64932__$1){
var statearr_65004_65054 = state_64975__$1;
(statearr_65004_65054[(1)] = (13));

} else {
var statearr_65005_65055 = state_64975__$1;
(statearr_65005_65055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (14))){
var state_64975__$1 = state_64975;
var statearr_65006_65056 = state_64975__$1;
(statearr_65006_65056[(2)] = null);

(statearr_65006_65056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (16))){
var inst_64932 = (state_64975[(16)]);
var inst_64936 = cljs.core.chunk_first.call(null,inst_64932);
var inst_64937 = cljs.core.chunk_rest.call(null,inst_64932);
var inst_64938 = cljs.core.count.call(null,inst_64936);
var inst_64900 = inst_64937;
var inst_64901 = inst_64936;
var inst_64902 = inst_64938;
var inst_64903 = (0);
var state_64975__$1 = (function (){var statearr_65007 = state_64975;
(statearr_65007[(7)] = inst_64902);

(statearr_65007[(8)] = inst_64901);

(statearr_65007[(9)] = inst_64900);

(statearr_65007[(10)] = inst_64903);

return statearr_65007;
})();
var statearr_65008_65057 = state_64975__$1;
(statearr_65008_65057[(2)] = null);

(statearr_65008_65057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (10))){
var inst_64914 = (state_64975[(14)]);
var inst_64912 = (state_64975[(15)]);
var inst_64924 = (state_64975[(2)]);
var inst_64925 = [inst_64912,inst_64924];
var inst_64926 = (new cljs.core.PersistentVector(null,2,(5),inst_64914,inst_64925,null));
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64975__$1,(7),val_chan,inst_64926);
} else {
if((state_val_64976 === (18))){
var inst_64965 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_65009_65058 = state_64975__$1;
(statearr_65009_65058[(2)] = inst_64965);

(statearr_65009_65058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (8))){
var inst_64913 = (state_64975[(13)]);
var inst_64917 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_64913);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64975__$1,(11),inst_64917);
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
});})(c__38812__auto___65036,val_chan))
;
return ((function (switch__38700__auto__,c__38812__auto___65036,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__38701__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__38701__auto____0 = (function (){
var statearr_65013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65013[(0)] = ui$parser_async$async_query_result_$_state_machine__38701__auto__);

(statearr_65013[(1)] = (1));

return statearr_65013;
});
var ui$parser_async$async_query_result_$_state_machine__38701__auto____1 = (function (state_64975){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_64975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e65014){if((e65014 instanceof Object)){
var ex__38704__auto__ = e65014;
var statearr_65015_65059 = state_64975;
(statearr_65015_65059[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65060 = state_64975;
state_64975 = G__65060;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__38701__auto__ = function(state_64975){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__38701__auto____1.call(this,state_64975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__38701__auto____0;
ui$parser_async$async_query_result_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__38701__auto____1;
return ui$parser_async$async_query_result_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___65036,val_chan))
})();
var state__38814__auto__ = (function (){var statearr_65016 = f__38813__auto__.call(null);
(statearr_65016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___65036);

return statearr_65016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___65036,val_chan))
);


var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,val_chan){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,val_chan){
return (function (state_65024){
var state_val_65025 = (state_65024[(1)]);
if((state_val_65025 === (1))){
var inst_65018 = (function (){return ((function (state_val_65025,c__38812__auto__,val_chan){
return (function (acc,p__65017){
var vec__65026 = p__65017;
var k = cljs.core.nth.call(null,vec__65026,(0),null);
var v = cljs.core.nth.call(null,vec__65026,(1),null);
return cljs.core.assoc.call(null,acc,k,v);
});
;})(state_val_65025,c__38812__auto__,val_chan))
})();
var inst_65019 = cljs.core.PersistentHashMap.EMPTY;
var inst_65020 = cljs.core.async.reduce.call(null,inst_65018,inst_65019,val_chan);
var state_65024__$1 = state_65024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65024__$1,(2),inst_65020);
} else {
if((state_val_65025 === (2))){
var inst_65022 = (state_65024[(2)]);
var state_65024__$1 = state_65024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65024__$1,inst_65022);
} else {
return null;
}
}
});})(c__38812__auto__,val_chan))
;
return ((function (switch__38700__auto__,c__38812__auto__,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__38701__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__38701__auto____0 = (function (){
var statearr_65032 = [null,null,null,null,null,null,null];
(statearr_65032[(0)] = ui$parser_async$async_query_result_$_state_machine__38701__auto__);

(statearr_65032[(1)] = (1));

return statearr_65032;
});
var ui$parser_async$async_query_result_$_state_machine__38701__auto____1 = (function (state_65024){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_65024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e65033){if((e65033 instanceof Object)){
var ex__38704__auto__ = e65033;
var statearr_65034_65061 = state_65024;
(statearr_65034_65061[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65062 = state_65024;
state_65024 = G__65062;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__38701__auto__ = function(state_65024){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__38701__auto____1.call(this,state_65024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__38701__auto____0;
ui$parser_async$async_query_result_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__38701__auto____1;
return ui$parser_async$async_query_result_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,val_chan))
})();
var state__38814__auto__ = (function (){var statearr_65035 = f__38813__auto__.call(null);
(statearr_65035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_65035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,val_chan))
);

return c__38812__auto__;
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
ui.parser_async.parser = (function ui$parser_async$parser(p__65063){
var map__67756 = p__65063;
var map__67756__$1 = ((((!((map__67756 == null)))?((((map__67756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67756):map__67756);
var config = map__67756__$1;
var read = cljs.core.get.call(null,map__67756__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__67756__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__67756,map__67756__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self = null;
var ui$parser_async$parser_$_self__2 = (function (env,query){
return ui$parser_async$parser_$_self.call(null,env,query,null);
});
var ui$parser_async$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__31879__auto__ = new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__69103 = (function (){var G__69104 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),ui$parser_async$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
if(!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.call(null,G__69104,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__69104;
}
})();
var map__69103__$1 = ((((!((map__69103 == null)))?((((map__69103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69103):map__69103);
var env__$1 = map__69103__$1;
var path = cljs.core.get.call(null,map__69103__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function ui$parser_async$parser_$_self_$_step(ret,expr){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function (state_70234){
var state_val_70235 = (state_70234[(1)]);
if((state_val_70235 === (65))){
var inst_70068 = (state_70234[(7)]);
var inst_70199 = cljs.core.first.call(null,inst_70068);
var state_70234__$1 = state_70234;
var statearr_70236_70448 = state_70234__$1;
(statearr_70236_70448[(2)] = inst_70199);

(statearr_70236_70448[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (70))){
var inst_70147 = (state_70234[(8)]);
var inst_70218 = (state_70234[(2)]);
var inst_70219 = cljs.core.deref.call(null,inst_70147);
var state_70234__$1 = (function (){var statearr_70237 = state_70234;
(statearr_70237[(9)] = inst_70218);

return statearr_70237;
})();
if(cljs.core.truth_(inst_70219)){
var statearr_70238_70449 = state_70234__$1;
(statearr_70238_70449[(1)] = (72));

} else {
var statearr_70239_70450 = state_70234__$1;
(statearr_70239_70450[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (62))){
var inst_70068 = (state_70234[(7)]);
var inst_70197 = om.util.unique_ident_QMARK_.call(null,inst_70068);
var state_70234__$1 = state_70234;
if(inst_70197){
var statearr_70240_70451 = state_70234__$1;
(statearr_70240_70451[(1)] = (65));

} else {
var statearr_70241_70452 = state_70234__$1;
(statearr_70241_70452[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (74))){
var inst_70228 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70242_70453 = state_70234__$1;
(statearr_70242_70453[(2)] = inst_70228);

(statearr_70242_70453[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (7))){
var inst_70058 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70243_70454 = state_70234__$1;
(statearr_70243_70454[(2)] = inst_70058);

(statearr_70243_70454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (59))){
var state_70234__$1 = state_70234;
var statearr_70244_70455 = state_70234__$1;
(statearr_70244_70455[(2)] = null);

(statearr_70244_70455[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (20))){
var inst_70116 = (state_70234[(2)]);
var inst_70117 = (target == null);
var inst_70118 = cljs.core.not.call(null,inst_70117);
var state_70234__$1 = (function (){var statearr_70245 = state_70234;
(statearr_70245[(10)] = inst_70116);

return statearr_70245;
})();
if(inst_70118){
var statearr_70246_70456 = state_70234__$1;
(statearr_70246_70456[(1)] = (29));

} else {
var statearr_70247_70457 = state_70234__$1;
(statearr_70247_70457[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (72))){
var inst_70068 = (state_70234[(7)]);
var inst_70218 = (state_70234[(9)]);
var inst_70147 = (state_70234[(8)]);
var inst_70221 = [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)];
var inst_70222 = cljs.core.deref.call(null,inst_70147);
var inst_70223 = [inst_70222];
var inst_70224 = cljs.core.PersistentHashMap.fromArrays(inst_70221,inst_70223);
var inst_70225 = cljs.core.assoc.call(null,inst_70218,inst_70068,inst_70224);
var state_70234__$1 = state_70234;
var statearr_70248_70458 = state_70234__$1;
(statearr_70248_70458[(2)] = inst_70225);

(statearr_70248_70458[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (58))){
var inst_70176 = (state_70234[(11)]);
var inst_70191 = (state_70234[(2)]);
var inst_70193 = (inst_70176 == null);
var inst_70194 = cljs.core.not.call(null,inst_70193);
var state_70234__$1 = (function (){var statearr_70249 = state_70234;
(statearr_70249[(12)] = inst_70191);

return statearr_70249;
})();
if(inst_70194){
var statearr_70250_70459 = state_70234__$1;
(statearr_70250_70459[(1)] = (62));

} else {
var statearr_70251_70460 = state_70234__$1;
(statearr_70251_70460[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (60))){
var inst_70069 = (state_70234[(13)]);
var inst_70183 = [cljs.core.str(inst_70069),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('');
var inst_70184 = [cljs.core.str("Assert failed: "),cljs.core.str(inst_70183),cljs.core.str("\n"),cljs.core.str("(or (nil? value) (map? value))")].join('');
var inst_70185 = (new Error(inst_70184));
var inst_70186 = (function(){throw inst_70185})();
var state_70234__$1 = state_70234;
var statearr_70252_70461 = state_70234__$1;
(statearr_70252_70461[(2)] = inst_70186);

(statearr_70252_70461[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (27))){
var inst_70108 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('');
var inst_70109 = (new Error(inst_70108));
var inst_70110 = (function(){throw inst_70109})();
var state_70234__$1 = state_70234;
var statearr_70253_70462 = state_70234__$1;
(statearr_70253_70462[(2)] = inst_70110);

(statearr_70253_70462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (1))){
var inst_70046 = (state_70234[(14)]);
var inst_70046__$1 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var inst_70048 = (inst_70046__$1 == null);
var inst_70049 = cljs.core.not.call(null,inst_70048);
var state_70234__$1 = (function (){var statearr_70254 = state_70234;
(statearr_70254[(14)] = inst_70046__$1);

return statearr_70254;
})();
if(inst_70049){
var statearr_70255_70463 = state_70234__$1;
(statearr_70255_70463[(1)] = (2));

} else {
var statearr_70256_70464 = state_70234__$1;
(statearr_70256_70464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (69))){
var inst_70206 = (state_70234[(15)]);
var state_70234__$1 = state_70234;
var statearr_70257_70465 = state_70234__$1;
(statearr_70257_70465[(2)] = inst_70206);

(statearr_70257_70465[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (24))){
var inst_70069 = (state_70234[(13)]);
var inst_70094 = (state_70234[(16)]);
var inst_70070 = (state_70234[(17)]);
var inst_70103 = (state_70234[(2)]);
var inst_70104 = mutate.call(null,inst_70094,inst_70069,inst_70070);
var state_70234__$1 = (function (){var statearr_70258 = state_70234;
(statearr_70258[(18)] = inst_70103);

return statearr_70258;
})();
var statearr_70259_70466 = state_70234__$1;
(statearr_70259_70466[(2)] = inst_70104);

(statearr_70259_70466[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (55))){
var inst_70148 = (state_70234[(19)]);
var inst_70116 = (state_70234[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70234,(51),new cljs.core.Keyword(null,"default","default",-1987822328),null,(50));
var inst_70168 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_70116);
var inst_70169 = inst_70168.call(null);
var inst_70170 = cljs.core.reset_BANG_.call(null,inst_70148,inst_70169);
var state_70234__$1 = state_70234;
var statearr_70260_70467 = state_70234__$1;
(statearr_70260_70467[(2)] = inst_70170);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70234__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (39))){
var inst_70066 = (state_70234[(20)]);
var inst_70116 = (state_70234[(10)]);
var inst_70138 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(inst_70066);
var inst_70139 = (inst_70138 == null);
var inst_70140 = cljs.core.contains_QMARK_.call(null,inst_70116,new cljs.core.Keyword(null,"value","value",305978217));
var inst_70141 = (inst_70139) || (inst_70140);
var state_70234__$1 = state_70234;
var statearr_70261_70468 = state_70234__$1;
(statearr_70261_70468[(2)] = inst_70141);

(statearr_70261_70468[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (46))){
var inst_70155 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
if(cljs.core.truth_(inst_70155)){
var statearr_70262_70469 = state_70234__$1;
(statearr_70262_70469[(1)] = (47));

} else {
var statearr_70263_70470 = state_70234__$1;
(statearr_70263_70470[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (4))){
var inst_70061 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
if(cljs.core.truth_(inst_70061)){
var statearr_70264_70471 = state_70234__$1;
(statearr_70264_70471[(1)] = (8));

} else {
var statearr_70265_70472 = state_70234__$1;
(statearr_70265_70472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (54))){
var inst_70164 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70266_70473 = state_70234__$1;
(statearr_70266_70473[(2)] = inst_70164);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70234__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (15))){
var inst_70081 = (state_70234[(21)]);
var state_70234__$1 = state_70234;
var statearr_70267_70474 = state_70234__$1;
(statearr_70267_70474[(2)] = inst_70081);

(statearr_70267_70474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (48))){
var state_70234__$1 = state_70234;
var statearr_70268_70475 = state_70234__$1;
(statearr_70268_70475[(2)] = null);

(statearr_70268_70475[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (50))){
var inst_70172 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70269_70476 = state_70234__$1;
(statearr_70269_70476[(2)] = inst_70172);

(statearr_70269_70476[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (21))){
var state_70234__$1 = state_70234;
if(cljs.core.truth_(mutate)){
var statearr_70270_70477 = state_70234__$1;
(statearr_70270_70477[(1)] = (22));

} else {
var statearr_70271_70478 = state_70234__$1;
(statearr_70271_70478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (31))){
var inst_70232 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70234__$1,inst_70232);
} else {
if((state_val_70235 === (32))){
var inst_70124 = cljs.core.conj.call(null,ret,expr);
var state_70234__$1 = state_70234;
var statearr_70272_70479 = state_70234__$1;
(statearr_70272_70479[(2)] = inst_70124);

(statearr_70272_70479[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (40))){
var inst_70143 = (state_70234[(2)]);
var inst_70144 = cljs.core.not.call(null,inst_70143);
var state_70234__$1 = state_70234;
if(inst_70144){
var statearr_70273_70480 = state_70234__$1;
(statearr_70273_70480[(1)] = (41));

} else {
var statearr_70274_70481 = state_70234__$1;
(statearr_70274_70481[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (56))){
var inst_70176 = (state_70234[(11)]);
var inst_70178 = (inst_70176 == null);
var inst_70179 = cljs.core.map_QMARK_.call(null,inst_70176);
var inst_70180 = (inst_70178) || (inst_70179);
var state_70234__$1 = state_70234;
if(cljs.core.truth_(inst_70180)){
var statearr_70275_70482 = state_70234__$1;
(statearr_70275_70482[(1)] = (59));

} else {
var statearr_70276_70483 = state_70234__$1;
(statearr_70276_70483[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (33))){
var state_70234__$1 = state_70234;
var statearr_70277_70484 = state_70234__$1;
(statearr_70277_70484[(2)] = ret);

(statearr_70277_70484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (13))){
var inst_70067 = (state_70234[(22)]);
var inst_70081 = (state_70234[(2)]);
var inst_70082 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_70083 = cljs.core._EQ_.call(null,inst_70082,inst_70067);
var state_70234__$1 = (function (){var statearr_70278 = state_70234;
(statearr_70278[(21)] = inst_70081);

return statearr_70278;
})();
if(inst_70083){
var statearr_70279_70485 = state_70234__$1;
(statearr_70279_70485[(1)] = (14));

} else {
var statearr_70280_70486 = state_70234__$1;
(statearr_70280_70486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (22))){
var state_70234__$1 = state_70234;
var statearr_70281_70487 = state_70234__$1;
(statearr_70281_70487[(2)] = null);

(statearr_70281_70487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (36))){
var inst_70127 = (state_70234[(23)]);
var state_70234__$1 = state_70234;
var statearr_70282_70488 = state_70234__$1;
(statearr_70282_70488[(2)] = inst_70127);

(statearr_70282_70488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (41))){
var state_70234__$1 = state_70234;
var statearr_70283_70489 = state_70234__$1;
(statearr_70283_70489[(2)] = ret);

(statearr_70283_70489[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (43))){
var inst_70230 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70284_70490 = state_70234__$1;
(statearr_70284_70490[(2)] = inst_70230);

(statearr_70284_70490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (61))){
var inst_70188 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70285_70491 = state_70234__$1;
(statearr_70285_70491[(2)] = inst_70188);

(statearr_70285_70491[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (29))){
var inst_70116 = (state_70234[(10)]);
var inst_70120 = (state_70234[(24)]);
var inst_70120__$1 = cljs.core.get.call(null,inst_70116,target);
var inst_70122 = inst_70120__$1 === true;
var state_70234__$1 = (function (){var statearr_70286 = state_70234;
(statearr_70286[(24)] = inst_70120__$1);

return statearr_70286;
})();
if(cljs.core.truth_(inst_70122)){
var statearr_70287_70492 = state_70234__$1;
(statearr_70287_70492[(1)] = (32));

} else {
var statearr_70288_70493 = state_70234__$1;
(statearr_70288_70493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (44))){
var inst_70116 = (state_70234[(10)]);
var inst_70150 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_70116);
var inst_70151 = (inst_70150 == null);
var inst_70152 = cljs.core.not.call(null,inst_70151);
var state_70234__$1 = state_70234;
var statearr_70289_70494 = state_70234__$1;
(statearr_70289_70494[(2)] = inst_70152);

(statearr_70289_70494[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (6))){
var state_70234__$1 = state_70234;
var statearr_70290_70495 = state_70234__$1;
(statearr_70290_70495[(2)] = false);

(statearr_70290_70495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (28))){
var inst_70069 = (state_70234[(13)]);
var inst_70094 = (state_70234[(16)]);
var inst_70070 = (state_70234[(17)]);
var inst_70112 = (state_70234[(2)]);
var inst_70113 = read.call(null,inst_70094,inst_70069,inst_70070);
var state_70234__$1 = (function (){var statearr_70291 = state_70234;
(statearr_70291[(25)] = inst_70112);

return statearr_70291;
})();
var statearr_70292_70496 = state_70234__$1;
(statearr_70292_70496[(2)] = inst_70113);

(statearr_70292_70496[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (64))){
var inst_70148 = (state_70234[(19)]);
var inst_70206 = (state_70234[(2)]);
var inst_70207 = cljs.core.deref.call(null,inst_70148);
var state_70234__$1 = (function (){var statearr_70293 = state_70234;
(statearr_70293[(15)] = inst_70206);

return statearr_70293;
})();
if(cljs.core.truth_(inst_70207)){
var statearr_70294_70497 = state_70234__$1;
(statearr_70294_70497[(1)] = (68));

} else {
var statearr_70295_70498 = state_70234__$1;
(statearr_70295_70498[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (51))){
var inst_70157 = (state_70234[(26)]);
var inst_70157__$1 = (state_70234[(2)]);
var inst_70158 = om.next.impl.parser.rethrow_QMARK_.call(null,inst_70157__$1);
var state_70234__$1 = (function (){var statearr_70296 = state_70234;
(statearr_70296[(26)] = inst_70157__$1);

return statearr_70296;
})();
if(cljs.core.truth_(inst_70158)){
var statearr_70297_70499 = state_70234__$1;
(statearr_70297_70499[(1)] = (52));

} else {
var statearr_70298_70500 = state_70234__$1;
(statearr_70298_70500[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (25))){
var state_70234__$1 = state_70234;
if(cljs.core.truth_(read)){
var statearr_70299_70501 = state_70234__$1;
(statearr_70299_70501[(1)] = (26));

} else {
var statearr_70300_70502 = state_70234__$1;
(statearr_70300_70502[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (34))){
var inst_70120 = (state_70234[(24)]);
var inst_70127 = (state_70234[(2)]);
var inst_70128 = cljs.core.map_QMARK_.call(null,inst_70120);
var state_70234__$1 = (function (){var statearr_70301 = state_70234;
(statearr_70301[(23)] = inst_70127);

return statearr_70301;
})();
if(inst_70128){
var statearr_70302_70503 = state_70234__$1;
(statearr_70302_70503[(1)] = (35));

} else {
var statearr_70303_70504 = state_70234__$1;
(statearr_70303_70504[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (17))){
var inst_70068 = (state_70234[(7)]);
var inst_70088 = (state_70234[(27)]);
var inst_70091 = cljs.core.assoc.call(null,inst_70088,new cljs.core.Keyword(null,"query-root","query-root",359781888),inst_70068);
var state_70234__$1 = state_70234;
var statearr_70304_70505 = state_70234__$1;
(statearr_70304_70505[(2)] = inst_70091);

(statearr_70304_70505[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (3))){
var state_70234__$1 = state_70234;
var statearr_70305_70506 = state_70234__$1;
(statearr_70305_70506[(2)] = false);

(statearr_70305_70506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (12))){
var inst_70075 = (state_70234[(28)]);
var state_70234__$1 = state_70234;
var statearr_70306_70507 = state_70234__$1;
(statearr_70306_70507[(2)] = inst_70075);

(statearr_70306_70507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (2))){
var inst_70046 = (state_70234[(14)]);
var inst_70051 = inst_70046.cljs$lang$protocol_mask$partition0$;
var inst_70052 = (inst_70051 & (64));
var inst_70053 = inst_70046.cljs$core$ISeq$;
var inst_70054 = (inst_70052) || (inst_70053);
var state_70234__$1 = state_70234;
if(cljs.core.truth_(inst_70054)){
var statearr_70307_70508 = state_70234__$1;
(statearr_70307_70508[(1)] = (5));

} else {
var statearr_70308_70509 = state_70234__$1;
(statearr_70308_70509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (66))){
var inst_70068 = (state_70234[(7)]);
var state_70234__$1 = state_70234;
var statearr_70309_70510 = state_70234__$1;
(statearr_70309_70510[(2)] = inst_70068);

(statearr_70309_70510[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (23))){
var inst_70099 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('');
var inst_70100 = (new Error(inst_70099));
var inst_70101 = (function(){throw inst_70100})();
var state_70234__$1 = state_70234;
var statearr_70310_70511 = state_70234__$1;
(statearr_70310_70511[(2)] = inst_70101);

(statearr_70310_70511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (47))){
var state_70234__$1 = state_70234;
var statearr_70311_70512 = state_70234__$1;
(statearr_70311_70512[(2)] = null);

(statearr_70311_70512[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (35))){
var inst_70127 = (state_70234[(23)]);
var inst_70120 = (state_70234[(24)]);
var inst_70130 = om.next.impl.parser.ast__GT_expr.call(null,inst_70120);
var inst_70131 = cljs.core.conj.call(null,inst_70127,inst_70130);
var state_70234__$1 = state_70234;
var statearr_70312_70513 = state_70234__$1;
(statearr_70312_70513[(2)] = inst_70131);

(statearr_70312_70513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (19))){
var inst_70066 = (state_70234[(20)]);
var inst_70094 = (state_70234[(2)]);
var inst_70095 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_70066);
var inst_70096 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),inst_70095);
var state_70234__$1 = (function (){var statearr_70313 = state_70234;
(statearr_70313[(16)] = inst_70094);

(statearr_70313[(29)] = inst_70096);

return statearr_70313;
})();
var G__70314_70514 = (((inst_70095 instanceof cljs.core.Keyword))?inst_70095.fqn:null);
switch (G__70314_70514) {
case "call":
var statearr_70315_70516 = state_70234__$1;
(statearr_70315_70516[(1)] = (21));


break;
case "prop":
var statearr_70316_70517 = state_70234__$1;
(statearr_70316_70517[(1)] = (25));


break;
case "join":
var statearr_70317_70518 = state_70234__$1;
(statearr_70317_70518[(1)] = (25));


break;
case "union":
var statearr_70318_70519 = state_70234__$1;
(statearr_70318_70519[(1)] = (25));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_70095)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (57))){
var state_70234__$1 = state_70234;
var statearr_70319_70520 = state_70234__$1;
(statearr_70319_70520[(2)] = null);

(statearr_70319_70520[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (68))){
var inst_70068 = (state_70234[(7)]);
var inst_70148 = (state_70234[(19)]);
var inst_70209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70210 = [inst_70068,new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_70211 = (new cljs.core.PersistentVector(null,2,(5),inst_70209,inst_70210,null));
var inst_70212 = cljs.core.deref.call(null,inst_70148);
var state_70234__$1 = (function (){var statearr_70320 = state_70234;
(statearr_70320[(30)] = inst_70211);

return statearr_70320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70234__$1,(71),inst_70212);
} else {
if((state_val_70235 === (11))){
var inst_70075 = (state_70234[(28)]);
var inst_70078 = cljs.core.dissoc.call(null,inst_70075,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_70234__$1 = state_70234;
var statearr_70321_70521 = state_70234__$1;
(statearr_70321_70521[(2)] = inst_70078);

(statearr_70321_70521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (9))){
var inst_70046 = (state_70234[(14)]);
var state_70234__$1 = state_70234;
var statearr_70322_70522 = state_70234__$1;
(statearr_70322_70522[(2)] = inst_70046);

(statearr_70322_70522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (5))){
var state_70234__$1 = state_70234;
var statearr_70323_70523 = state_70234__$1;
(statearr_70323_70523[(2)] = true);

(statearr_70323_70523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (14))){
var inst_70081 = (state_70234[(21)]);
var inst_70085 = cljs.core.assoc.call(null,inst_70081,new cljs.core.Keyword(null,"query","query",-1288509510),query);
var state_70234__$1 = state_70234;
var statearr_70324_70524 = state_70234__$1;
(statearr_70324_70524[(2)] = inst_70085);

(statearr_70324_70524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (45))){
var inst_70096 = (state_70234[(29)]);
var state_70234__$1 = state_70234;
var statearr_70325_70525 = state_70234__$1;
(statearr_70325_70525[(2)] = inst_70096);

(statearr_70325_70525[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (53))){
var inst_70157 = (state_70234[(26)]);
var inst_70147 = (state_70234[(8)]);
var inst_70162 = cljs.core.reset_BANG_.call(null,inst_70147,inst_70157);
var state_70234__$1 = state_70234;
var statearr_70326_70526 = state_70234__$1;
(statearr_70326_70526[(2)] = inst_70162);

(statearr_70326_70526[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (26))){
var state_70234__$1 = state_70234;
var statearr_70327_70527 = state_70234__$1;
(statearr_70327_70527[(2)] = null);

(statearr_70327_70527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (16))){
var inst_70068 = (state_70234[(7)]);
var inst_70088 = (state_70234[(2)]);
var inst_70089 = cljs.core.vector_QMARK_.call(null,inst_70068);
var state_70234__$1 = (function (){var statearr_70328 = state_70234;
(statearr_70328[(27)] = inst_70088);

return statearr_70328;
})();
if(inst_70089){
var statearr_70329_70528 = state_70234__$1;
(statearr_70329_70528[(1)] = (17));

} else {
var statearr_70330_70529 = state_70234__$1;
(statearr_70330_70529[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (38))){
var inst_70096 = (state_70234[(29)]);
var state_70234__$1 = state_70234;
var statearr_70331_70530 = state_70234__$1;
(statearr_70331_70530[(2)] = inst_70096);

(statearr_70331_70530[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (30))){
var inst_70096 = (state_70234[(29)]);
var state_70234__$1 = state_70234;
if(cljs.core.truth_(inst_70096)){
var statearr_70332_70531 = state_70234__$1;
(statearr_70332_70531[(1)] = (38));

} else {
var statearr_70333_70532 = state_70234__$1;
(statearr_70333_70532[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (73))){
var inst_70218 = (state_70234[(9)]);
var state_70234__$1 = state_70234;
var statearr_70334_70533 = state_70234__$1;
(statearr_70334_70533[(2)] = inst_70218);

(statearr_70334_70533[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (10))){
var inst_70066 = (state_70234[(20)]);
var inst_70067 = (state_70234[(22)]);
var inst_70066__$1 = (state_70234[(2)]);
var inst_70067__$1 = cljs.core.get.call(null,inst_70066__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_70068 = cljs.core.get.call(null,inst_70066__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_70069 = cljs.core.get.call(null,inst_70066__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var inst_70070 = cljs.core.get.call(null,inst_70066__$1,new cljs.core.Keyword(null,"params","params",710516235));
var inst_70072 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_70073 = [inst_70066__$1,inst_70067__$1];
var inst_70074 = cljs.core.PersistentHashMap.fromArrays(inst_70072,inst_70073);
var inst_70075 = cljs.core.merge.call(null,env__$1,inst_70074);
var inst_70076 = (inst_70067__$1 == null);
var state_70234__$1 = (function (){var statearr_70335 = state_70234;
(statearr_70335[(7)] = inst_70068);

(statearr_70335[(13)] = inst_70069);

(statearr_70335[(17)] = inst_70070);

(statearr_70335[(20)] = inst_70066__$1);

(statearr_70335[(22)] = inst_70067__$1);

(statearr_70335[(28)] = inst_70075);

return statearr_70335;
})();
if(cljs.core.truth_(inst_70076)){
var statearr_70336_70534 = state_70234__$1;
(statearr_70336_70534[(1)] = (11));

} else {
var statearr_70337_70535 = state_70234__$1;
(statearr_70337_70535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (18))){
var inst_70088 = (state_70234[(27)]);
var state_70234__$1 = state_70234;
var statearr_70338_70536 = state_70234__$1;
(statearr_70338_70536[(2)] = inst_70088);

(statearr_70338_70536[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (52))){
var inst_70157 = (state_70234[(26)]);
var inst_70160 = (function(){throw inst_70157})();
var state_70234__$1 = state_70234;
var statearr_70339_70537 = state_70234__$1;
(statearr_70339_70537[(2)] = inst_70160);

(statearr_70339_70537[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (67))){
var inst_70176 = (state_70234[(11)]);
var inst_70202 = (state_70234[(2)]);
var inst_70203 = cljs.core.assoc.call(null,ret,inst_70202,inst_70176);
var state_70234__$1 = state_70234;
var statearr_70340_70538 = state_70234__$1;
(statearr_70340_70538[(2)] = inst_70203);

(statearr_70340_70538[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (71))){
var inst_70211 = (state_70234[(30)]);
var inst_70206 = (state_70234[(15)]);
var inst_70214 = (state_70234[(2)]);
var inst_70215 = cljs.core.assoc_in.call(null,inst_70206,inst_70211,inst_70214);
var state_70234__$1 = state_70234;
var statearr_70341_70539 = state_70234__$1;
(statearr_70341_70539[(2)] = inst_70215);

(statearr_70341_70539[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (42))){
var inst_70096 = (state_70234[(29)]);
var inst_70147 = cljs.core.atom.call(null,null);
var inst_70148 = cljs.core.atom.call(null,null);
var state_70234__$1 = (function (){var statearr_70342 = state_70234;
(statearr_70342[(19)] = inst_70148);

(statearr_70342[(8)] = inst_70147);

return statearr_70342;
})();
if(cljs.core.truth_(inst_70096)){
var statearr_70343_70540 = state_70234__$1;
(statearr_70343_70540[(1)] = (44));

} else {
var statearr_70344_70541 = state_70234__$1;
(statearr_70344_70541[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (37))){
var inst_70134 = (state_70234[(2)]);
var state_70234__$1 = state_70234;
var statearr_70345_70542 = state_70234__$1;
(statearr_70345_70542[(2)] = inst_70134);

(statearr_70345_70542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (63))){
var state_70234__$1 = state_70234;
var statearr_70346_70543 = state_70234__$1;
(statearr_70346_70543[(2)] = ret);

(statearr_70346_70543[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (8))){
var inst_70046 = (state_70234[(14)]);
var inst_70063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70046);
var state_70234__$1 = state_70234;
var statearr_70347_70544 = state_70234__$1;
(statearr_70347_70544[(2)] = inst_70063);

(statearr_70347_70544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70235 === (49))){
var inst_70096 = (state_70234[(29)]);
var inst_70116 = (state_70234[(10)]);
var inst_70175 = (state_70234[(2)]);
var inst_70176 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_70116);
var state_70234__$1 = (function (){var statearr_70348 = state_70234;
(statearr_70348[(31)] = inst_70175);

(statearr_70348[(11)] = inst_70176);

return statearr_70348;
})();
if(cljs.core.truth_(inst_70096)){
var statearr_70349_70545 = state_70234__$1;
(statearr_70349_70545[(1)] = (56));

} else {
var statearr_70350_70546 = state_70234__$1;
(statearr_70350_70546[(1)] = (57));

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
});})(c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
;
return ((function (switch__38700__auto__,c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto__ = null;
var ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto____0 = (function (){
var statearr_70354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70354[(0)] = ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto__);

(statearr_70354[(1)] = (1));

return statearr_70354;
});
var ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto____1 = (function (state_70234){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_70234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e70355){if((e70355 instanceof Object)){
var ex__38704__auto__ = e70355;
var statearr_70356_70547 = state_70234;
(statearr_70356_70547[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70548 = state_70234;
state_70234 = G__70548;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto__ = function(state_70234){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto____1.call(this,state_70234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto____0;
ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto____1;
return ui$parser_async$parser_$_self_$_step_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
})();
var state__38814__auto__ = (function (){var statearr_70357 = f__38813__auto__.call(null);
(statearr_70357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_70357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
);

return c__38812__auto__;
});})(elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
;
var G__70358 = (function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function (state_70413){
var state_val_70414 = (state_70413[(1)]);
if((state_val_70414 === (7))){
var inst_70366 = (state_70413[(7)]);
var inst_70367 = (state_70413[(8)]);
var inst_70371 = cljs.core.first.call(null,inst_70367);
var inst_70372 = step.call(null,inst_70366,inst_70371);
var state_70413__$1 = state_70413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70413__$1,(10),inst_70372);
} else {
if((state_val_70414 === (1))){
var inst_70359 = (target == null);
var state_70413__$1 = state_70413;
if(cljs.core.truth_(inst_70359)){
var statearr_70415_70549 = state_70413__$1;
(statearr_70415_70549[(1)] = (2));

} else {
var statearr_70416_70550 = state_70413__$1;
(statearr_70416_70550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (4))){
var inst_70365 = (state_70413[(2)]);
var inst_70366 = inst_70365;
var inst_70367 = query;
var state_70413__$1 = (function (){var statearr_70417 = state_70413;
(statearr_70417[(7)] = inst_70366);

(statearr_70417[(8)] = inst_70367);

return statearr_70417;
})();
var statearr_70418_70551 = state_70413__$1;
(statearr_70418_70551[(2)] = null);

(statearr_70418_70551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (15))){
var inst_70409 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
var statearr_70419_70552 = state_70413__$1;
(statearr_70419_70552[(2)] = inst_70409);

(statearr_70419_70552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (13))){
var inst_70384 = (state_70413[(9)]);
var inst_70389 = (state_70413[(10)]);
var inst_70388 = cljs.core.first.call(null,inst_70384);
var inst_70389__$1 = cljs.core.second.call(null,inst_70388);
var inst_70390 = cljs.core.type.call(null,inst_70389__$1);
var inst_70391 = cljs.core._EQ_.call(null,inst_70390,cljs.core.async.impl.channels.ManyToManyChannel);
var state_70413__$1 = (function (){var statearr_70420 = state_70413;
(statearr_70420[(10)] = inst_70389__$1);

return statearr_70420;
})();
if(inst_70391){
var statearr_70421_70553 = state_70413__$1;
(statearr_70421_70553[(1)] = (16));

} else {
var statearr_70422_70554 = state_70413__$1;
(statearr_70422_70554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (6))){
var inst_70381 = (state_70413[(2)]);
var inst_70382 = cljs.core.PersistentHashMap.EMPTY;
var inst_70383 = inst_70382;
var inst_70384 = inst_70381;
var state_70413__$1 = (function (){var statearr_70423 = state_70413;
(statearr_70423[(11)] = inst_70383);

(statearr_70423[(9)] = inst_70384);

return statearr_70423;
})();
var statearr_70424_70555 = state_70413__$1;
(statearr_70424_70555[(2)] = null);

(statearr_70424_70555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (17))){
var inst_70383 = (state_70413[(11)]);
var inst_70384 = (state_70413[(9)]);
var inst_70389 = (state_70413[(10)]);
var inst_70399 = cljs.core.first.call(null,inst_70384);
var inst_70400 = cljs.core.first.call(null,inst_70399);
var inst_70401 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_70389);
var inst_70402 = cljs.core.assoc.call(null,inst_70383,inst_70400,inst_70401);
var state_70413__$1 = state_70413;
var statearr_70425_70556 = state_70413__$1;
(statearr_70425_70556[(2)] = inst_70402);

(statearr_70425_70556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (3))){
var inst_70363 = cljs.core.PersistentVector.EMPTY;
var state_70413__$1 = state_70413;
var statearr_70426_70557 = state_70413__$1;
(statearr_70426_70557[(2)] = inst_70363);

(statearr_70426_70557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (12))){
var inst_70411 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70413__$1,inst_70411);
} else {
if((state_val_70414 === (2))){
var inst_70361 = cljs.core.PersistentHashMap.EMPTY;
var state_70413__$1 = state_70413;
var statearr_70427_70558 = state_70413__$1;
(statearr_70427_70558[(2)] = inst_70361);

(statearr_70427_70558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (19))){
var inst_70383 = (state_70413[(11)]);
var inst_70394 = (state_70413[(12)]);
var inst_70396 = (state_70413[(2)]);
var inst_70397 = cljs.core.assoc.call(null,inst_70383,inst_70394,inst_70396);
var state_70413__$1 = state_70413;
var statearr_70428_70559 = state_70413__$1;
(statearr_70428_70559[(2)] = inst_70397);

(statearr_70428_70559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (11))){
var inst_70384 = (state_70413[(9)]);
var inst_70386 = cljs.core.seq.call(null,inst_70384);
var state_70413__$1 = state_70413;
if(inst_70386){
var statearr_70429_70560 = state_70413__$1;
(statearr_70429_70560[(1)] = (13));

} else {
var statearr_70430_70561 = state_70413__$1;
(statearr_70430_70561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (9))){
var inst_70379 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
var statearr_70431_70562 = state_70413__$1;
(statearr_70431_70562[(2)] = inst_70379);

(statearr_70431_70562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (5))){
var inst_70367 = (state_70413[(8)]);
var inst_70369 = cljs.core.seq.call(null,inst_70367);
var state_70413__$1 = state_70413;
if(inst_70369){
var statearr_70432_70563 = state_70413__$1;
(statearr_70432_70563[(1)] = (7));

} else {
var statearr_70433_70564 = state_70413__$1;
(statearr_70433_70564[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (14))){
var inst_70383 = (state_70413[(11)]);
var state_70413__$1 = state_70413;
var statearr_70434_70565 = state_70413__$1;
(statearr_70434_70565[(2)] = inst_70383);

(statearr_70434_70565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (16))){
var inst_70384 = (state_70413[(9)]);
var inst_70389 = (state_70413[(10)]);
var inst_70393 = cljs.core.first.call(null,inst_70384);
var inst_70394 = cljs.core.first.call(null,inst_70393);
var state_70413__$1 = (function (){var statearr_70435 = state_70413;
(statearr_70435[(12)] = inst_70394);

return statearr_70435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70413__$1,(19),inst_70389);
} else {
if((state_val_70414 === (10))){
var inst_70367 = (state_70413[(8)]);
var inst_70374 = (state_70413[(2)]);
var inst_70375 = cljs.core.rest.call(null,inst_70367);
var inst_70366 = inst_70374;
var inst_70367__$1 = inst_70375;
var state_70413__$1 = (function (){var statearr_70436 = state_70413;
(statearr_70436[(7)] = inst_70366);

(statearr_70436[(8)] = inst_70367__$1);

return statearr_70436;
})();
var statearr_70437_70566 = state_70413__$1;
(statearr_70437_70566[(2)] = null);

(statearr_70437_70566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (18))){
var inst_70384 = (state_70413[(9)]);
var inst_70404 = (state_70413[(2)]);
var inst_70405 = cljs.core.rest.call(null,inst_70384);
var inst_70383 = inst_70404;
var inst_70384__$1 = inst_70405;
var state_70413__$1 = (function (){var statearr_70438 = state_70413;
(statearr_70438[(11)] = inst_70383);

(statearr_70438[(9)] = inst_70384__$1);

return statearr_70438;
})();
var statearr_70439_70567 = state_70413__$1;
(statearr_70439_70567[(2)] = null);

(statearr_70439_70567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (8))){
var inst_70366 = (state_70413[(7)]);
var state_70413__$1 = state_70413;
var statearr_70440_70568 = state_70413__$1;
(statearr_70440_70568[(2)] = inst_70366);

(statearr_70440_70568[(1)] = (9));


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
});})(c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
;
return ((function (switch__38700__auto__,c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_state_machine__38701__auto__ = null;
var ui$parser_async$parser_$_self_$_state_machine__38701__auto____0 = (function (){
var statearr_70444 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70444[(0)] = ui$parser_async$parser_$_self_$_state_machine__38701__auto__);

(statearr_70444[(1)] = (1));

return statearr_70444;
});
var ui$parser_async$parser_$_self_$_state_machine__38701__auto____1 = (function (state_70413){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_70413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e70445){if((e70445 instanceof Object)){
var ex__38704__auto__ = e70445;
var statearr_70446_70569 = state_70413;
(statearr_70446_70569[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70570 = state_70413;
state_70413 = G__70570;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_state_machine__38701__auto__ = function(state_70413){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_state_machine__38701__auto____1.call(this,state_70413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_state_machine__38701__auto____0;
ui$parser_async$parser_$_self_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_state_machine__38701__auto____1;
return ui$parser_async$parser_$_self_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
})();
var state__38814__auto__ = (function (){var statearr_70447 = f__38813__auto__.call(null);
(statearr_70447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_70447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,elide_paths_QMARK_,map__69103,map__69103__$1,env__$1,path,map__67756,map__67756__$1,config,read,mutate))
);

return c__38812__auto__;
})();
if(((target == null)) && (cljs.core.not.call(null,elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.call(null,G__70358,path,query);
} else {
return G__70358;
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
;})(map__67756,map__67756__$1,config,read,mutate))
});

//# sourceMappingURL=parser_async.js.map?rel=1489123427046