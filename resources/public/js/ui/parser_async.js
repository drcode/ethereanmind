// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.parser_async');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.util');
goog.require('om.next.impl.parser');
goog.require('cljs.core.async');
ui.parser_async.async_query_result = (function ui$parser_async$async_query_result(result){
var val_chan = cljs.core.async.chan.call(null);
var c__43337__auto___74178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___74178,val_chan){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___74178,val_chan){
return (function (state_74117){
var state_val_74118 = (state_74117[(1)]);
if((state_val_74118 === (7))){
var inst_74044 = (state_74117[(7)]);
var inst_74043 = (state_74117[(8)]);
var inst_74042 = (state_74117[(9)]);
var inst_74045 = (state_74117[(10)]);
var inst_74070 = (state_74117[(2)]);
var inst_74071 = (inst_74045 + (1));
var tmp74119 = inst_74044;
var tmp74120 = inst_74043;
var tmp74121 = inst_74042;
var inst_74042__$1 = tmp74121;
var inst_74043__$1 = tmp74120;
var inst_74044__$1 = tmp74119;
var inst_74045__$1 = inst_74071;
var state_74117__$1 = (function (){var statearr_74122 = state_74117;
(statearr_74122[(7)] = inst_74044__$1);

(statearr_74122[(8)] = inst_74043__$1);

(statearr_74122[(9)] = inst_74042__$1);

(statearr_74122[(10)] = inst_74045__$1);

(statearr_74122[(11)] = inst_74070);

return statearr_74122;
})();
var statearr_74123_74179 = state_74117__$1;
(statearr_74123_74179[(2)] = null);

(statearr_74123_74179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (20))){
var inst_74088 = (state_74117[(12)]);
var inst_74092 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_74088);
var state_74117__$1 = state_74117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74117__$1,(23),inst_74092);
} else {
if((state_val_74118 === (1))){
var inst_74041 = cljs.core.seq.call(null,result);
var inst_74042 = inst_74041;
var inst_74043 = null;
var inst_74044 = (0);
var inst_74045 = (0);
var state_74117__$1 = (function (){var statearr_74124 = state_74117;
(statearr_74124[(7)] = inst_74044);

(statearr_74124[(8)] = inst_74043);

(statearr_74124[(9)] = inst_74042);

(statearr_74124[(10)] = inst_74045);

return statearr_74124;
})();
var statearr_74125_74180 = state_74117__$1;
(statearr_74125_74180[(2)] = null);

(statearr_74125_74180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (24))){
var inst_74097 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74126_74181 = state_74117__$1;
(statearr_74126_74181[(2)] = inst_74097);

(statearr_74126_74181[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (4))){
var inst_74055 = (state_74117[(13)]);
var inst_74043 = (state_74117[(8)]);
var inst_74045 = (state_74117[(10)]);
var inst_74053 = cljs.core._nth.call(null,inst_74043,inst_74045);
var inst_74054 = cljs.core.nth.call(null,inst_74053,(0),null);
var inst_74055__$1 = cljs.core.nth.call(null,inst_74053,(1),null);
var inst_74056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74057 = cljs.core.map_QMARK_.call(null,inst_74055__$1);
var state_74117__$1 = (function (){var statearr_74127 = state_74117;
(statearr_74127[(14)] = inst_74056);

(statearr_74127[(15)] = inst_74054);

(statearr_74127[(13)] = inst_74055__$1);

return statearr_74127;
})();
if(inst_74057){
var statearr_74128_74182 = state_74117__$1;
(statearr_74128_74182[(1)] = (8));

} else {
var statearr_74129_74183 = state_74117__$1;
(statearr_74129_74183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (15))){
var inst_74110 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74130_74184 = state_74117__$1;
(statearr_74130_74184[(2)] = inst_74110);

(statearr_74130_74184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (21))){
var inst_74088 = (state_74117[(12)]);
var state_74117__$1 = state_74117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74117__$1,(24),inst_74088);
} else {
if((state_val_74118 === (13))){
var inst_74074 = (state_74117[(16)]);
var inst_74076 = cljs.core.chunked_seq_QMARK_.call(null,inst_74074);
var state_74117__$1 = state_74117;
if(inst_74076){
var statearr_74131_74185 = state_74117__$1;
(statearr_74131_74185[(1)] = (16));

} else {
var statearr_74132_74186 = state_74117__$1;
(statearr_74132_74186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (22))){
var inst_74087 = (state_74117[(17)]);
var inst_74089 = (state_74117[(18)]);
var inst_74099 = (state_74117[(2)]);
var inst_74100 = [inst_74087,inst_74099];
var inst_74101 = (new cljs.core.PersistentVector(null,2,(5),inst_74089,inst_74100,null));
var state_74117__$1 = state_74117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74117__$1,(19),val_chan,inst_74101);
} else {
if((state_val_74118 === (6))){
var inst_74112 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74133_74187 = state_74117__$1;
(statearr_74133_74187[(2)] = inst_74112);

(statearr_74133_74187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (17))){
var inst_74088 = (state_74117[(12)]);
var inst_74074 = (state_74117[(16)]);
var inst_74086 = cljs.core.first.call(null,inst_74074);
var inst_74087 = cljs.core.nth.call(null,inst_74086,(0),null);
var inst_74088__$1 = cljs.core.nth.call(null,inst_74086,(1),null);
var inst_74089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74090 = cljs.core.map_QMARK_.call(null,inst_74088__$1);
var state_74117__$1 = (function (){var statearr_74134 = state_74117;
(statearr_74134[(17)] = inst_74087);

(statearr_74134[(18)] = inst_74089);

(statearr_74134[(12)] = inst_74088__$1);

return statearr_74134;
})();
if(inst_74090){
var statearr_74135_74188 = state_74117__$1;
(statearr_74135_74188[(1)] = (20));

} else {
var statearr_74136_74189 = state_74117__$1;
(statearr_74136_74189[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (3))){
var inst_74114 = (state_74117[(2)]);
var inst_74115 = cljs.core.async.close_BANG_.call(null,val_chan);
var state_74117__$1 = (function (){var statearr_74137 = state_74117;
(statearr_74137[(19)] = inst_74114);

return statearr_74137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74117__$1,inst_74115);
} else {
if((state_val_74118 === (12))){
var inst_74064 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74138_74190 = state_74117__$1;
(statearr_74138_74190[(2)] = inst_74064);

(statearr_74138_74190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (2))){
var inst_74044 = (state_74117[(7)]);
var inst_74045 = (state_74117[(10)]);
var inst_74047 = (inst_74045 < inst_74044);
var inst_74048 = inst_74047;
var state_74117__$1 = state_74117;
if(cljs.core.truth_(inst_74048)){
var statearr_74139_74191 = state_74117__$1;
(statearr_74139_74191[(1)] = (4));

} else {
var statearr_74140_74192 = state_74117__$1;
(statearr_74140_74192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (23))){
var inst_74094 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74141_74193 = state_74117__$1;
(statearr_74141_74193[(2)] = inst_74094);

(statearr_74141_74193[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (19))){
var inst_74074 = (state_74117[(16)]);
var inst_74103 = (state_74117[(2)]);
var inst_74104 = cljs.core.next.call(null,inst_74074);
var inst_74042 = inst_74104;
var inst_74043 = null;
var inst_74044 = (0);
var inst_74045 = (0);
var state_74117__$1 = (function (){var statearr_74142 = state_74117;
(statearr_74142[(20)] = inst_74103);

(statearr_74142[(7)] = inst_74044);

(statearr_74142[(8)] = inst_74043);

(statearr_74142[(9)] = inst_74042);

(statearr_74142[(10)] = inst_74045);

return statearr_74142;
})();
var statearr_74143_74194 = state_74117__$1;
(statearr_74143_74194[(2)] = null);

(statearr_74143_74194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (11))){
var inst_74061 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74144_74195 = state_74117__$1;
(statearr_74144_74195[(2)] = inst_74061);

(statearr_74144_74195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (9))){
var inst_74055 = (state_74117[(13)]);
var state_74117__$1 = state_74117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74117__$1,(12),inst_74055);
} else {
if((state_val_74118 === (5))){
var inst_74042 = (state_74117[(9)]);
var inst_74074 = (state_74117[(16)]);
var inst_74074__$1 = cljs.core.seq.call(null,inst_74042);
var state_74117__$1 = (function (){var statearr_74145 = state_74117;
(statearr_74145[(16)] = inst_74074__$1);

return statearr_74145;
})();
if(inst_74074__$1){
var statearr_74146_74196 = state_74117__$1;
(statearr_74146_74196[(1)] = (13));

} else {
var statearr_74147_74197 = state_74117__$1;
(statearr_74147_74197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (14))){
var state_74117__$1 = state_74117;
var statearr_74148_74198 = state_74117__$1;
(statearr_74148_74198[(2)] = null);

(statearr_74148_74198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (16))){
var inst_74074 = (state_74117[(16)]);
var inst_74078 = cljs.core.chunk_first.call(null,inst_74074);
var inst_74079 = cljs.core.chunk_rest.call(null,inst_74074);
var inst_74080 = cljs.core.count.call(null,inst_74078);
var inst_74042 = inst_74079;
var inst_74043 = inst_74078;
var inst_74044 = inst_74080;
var inst_74045 = (0);
var state_74117__$1 = (function (){var statearr_74149 = state_74117;
(statearr_74149[(7)] = inst_74044);

(statearr_74149[(8)] = inst_74043);

(statearr_74149[(9)] = inst_74042);

(statearr_74149[(10)] = inst_74045);

return statearr_74149;
})();
var statearr_74150_74199 = state_74117__$1;
(statearr_74150_74199[(2)] = null);

(statearr_74150_74199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (10))){
var inst_74056 = (state_74117[(14)]);
var inst_74054 = (state_74117[(15)]);
var inst_74066 = (state_74117[(2)]);
var inst_74067 = [inst_74054,inst_74066];
var inst_74068 = (new cljs.core.PersistentVector(null,2,(5),inst_74056,inst_74067,null));
var state_74117__$1 = state_74117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74117__$1,(7),val_chan,inst_74068);
} else {
if((state_val_74118 === (18))){
var inst_74107 = (state_74117[(2)]);
var state_74117__$1 = state_74117;
var statearr_74151_74200 = state_74117__$1;
(statearr_74151_74200[(2)] = inst_74107);

(statearr_74151_74200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74118 === (8))){
var inst_74055 = (state_74117[(13)]);
var inst_74059 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_74055);
var state_74117__$1 = state_74117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74117__$1,(11),inst_74059);
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
});})(c__43337__auto___74178,val_chan))
;
return ((function (switch__43223__auto__,c__43337__auto___74178,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__43224__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__43224__auto____0 = (function (){
var statearr_74155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74155[(0)] = ui$parser_async$async_query_result_$_state_machine__43224__auto__);

(statearr_74155[(1)] = (1));

return statearr_74155;
});
var ui$parser_async$async_query_result_$_state_machine__43224__auto____1 = (function (state_74117){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_74117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e74156){if((e74156 instanceof Object)){
var ex__43227__auto__ = e74156;
var statearr_74157_74201 = state_74117;
(statearr_74157_74201[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74202 = state_74117;
state_74117 = G__74202;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__43224__auto__ = function(state_74117){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__43224__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__43224__auto____1.call(this,state_74117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__43224__auto____0;
ui$parser_async$async_query_result_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__43224__auto____1;
return ui$parser_async$async_query_result_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___74178,val_chan))
})();
var state__43339__auto__ = (function (){var statearr_74158 = f__43338__auto__.call(null);
(statearr_74158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___74178);

return statearr_74158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___74178,val_chan))
);


var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,val_chan){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,val_chan){
return (function (state_74166){
var state_val_74167 = (state_74166[(1)]);
if((state_val_74167 === (1))){
var inst_74160 = (function (){return ((function (state_val_74167,c__43337__auto__,val_chan){
return (function (acc,p__74159){
var vec__74168 = p__74159;
var k = cljs.core.nth.call(null,vec__74168,(0),null);
var v = cljs.core.nth.call(null,vec__74168,(1),null);
return cljs.core.assoc.call(null,acc,k,v);
});
;})(state_val_74167,c__43337__auto__,val_chan))
})();
var inst_74161 = cljs.core.PersistentHashMap.EMPTY;
var inst_74162 = cljs.core.async.reduce.call(null,inst_74160,inst_74161,val_chan);
var state_74166__$1 = state_74166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74166__$1,(2),inst_74162);
} else {
if((state_val_74167 === (2))){
var inst_74164 = (state_74166[(2)]);
var state_74166__$1 = state_74166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74166__$1,inst_74164);
} else {
return null;
}
}
});})(c__43337__auto__,val_chan))
;
return ((function (switch__43223__auto__,c__43337__auto__,val_chan){
return (function() {
var ui$parser_async$async_query_result_$_state_machine__43224__auto__ = null;
var ui$parser_async$async_query_result_$_state_machine__43224__auto____0 = (function (){
var statearr_74174 = [null,null,null,null,null,null,null];
(statearr_74174[(0)] = ui$parser_async$async_query_result_$_state_machine__43224__auto__);

(statearr_74174[(1)] = (1));

return statearr_74174;
});
var ui$parser_async$async_query_result_$_state_machine__43224__auto____1 = (function (state_74166){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_74166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e74175){if((e74175 instanceof Object)){
var ex__43227__auto__ = e74175;
var statearr_74176_74203 = state_74166;
(statearr_74176_74203[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74204 = state_74166;
state_74166 = G__74204;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
ui$parser_async$async_query_result_$_state_machine__43224__auto__ = function(state_74166){
switch(arguments.length){
case 0:
return ui$parser_async$async_query_result_$_state_machine__43224__auto____0.call(this);
case 1:
return ui$parser_async$async_query_result_$_state_machine__43224__auto____1.call(this,state_74166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$async_query_result_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$async_query_result_$_state_machine__43224__auto____0;
ui$parser_async$async_query_result_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$async_query_result_$_state_machine__43224__auto____1;
return ui$parser_async$async_query_result_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,val_chan))
})();
var state__43339__auto__ = (function (){var statearr_74177 = f__43338__auto__.call(null);
(statearr_74177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_74177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,val_chan))
);

return c__43337__auto__;
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
ui.parser_async.parser = (function ui$parser_async$parser(p__74205){
var map__76898 = p__74205;
var map__76898__$1 = ((((!((map__76898 == null)))?((((map__76898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76898):map__76898);
var config = map__76898__$1;
var read = cljs.core.get.call(null,map__76898__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__76898__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__76898,map__76898__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self = null;
var ui$parser_async$parser_$_self__2 = (function (env,query){
return ui$parser_async$parser_$_self.call(null,env,query,null);
});
var ui$parser_async$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__34390__auto__ = new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__78245 = (function (){var G__78246 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),ui$parser_async$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
if(!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.call(null,G__78246,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__78246;
}
})();
var map__78245__$1 = ((((!((map__78245 == null)))?((((map__78245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78245):map__78245);
var env__$1 = map__78245__$1;
var path = cljs.core.get.call(null,map__78245__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function ui$parser_async$parser_$_self_$_step(ret,expr){
var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function (state_79376){
var state_val_79377 = (state_79376[(1)]);
if((state_val_79377 === (65))){
var inst_79210 = (state_79376[(7)]);
var inst_79341 = cljs.core.first.call(null,inst_79210);
var state_79376__$1 = state_79376;
var statearr_79378_79590 = state_79376__$1;
(statearr_79378_79590[(2)] = inst_79341);

(statearr_79378_79590[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (70))){
var inst_79289 = (state_79376[(8)]);
var inst_79360 = (state_79376[(2)]);
var inst_79361 = cljs.core.deref.call(null,inst_79289);
var state_79376__$1 = (function (){var statearr_79379 = state_79376;
(statearr_79379[(9)] = inst_79360);

return statearr_79379;
})();
if(cljs.core.truth_(inst_79361)){
var statearr_79380_79591 = state_79376__$1;
(statearr_79380_79591[(1)] = (72));

} else {
var statearr_79381_79592 = state_79376__$1;
(statearr_79381_79592[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (62))){
var inst_79210 = (state_79376[(7)]);
var inst_79339 = om.util.unique_ident_QMARK_.call(null,inst_79210);
var state_79376__$1 = state_79376;
if(inst_79339){
var statearr_79382_79593 = state_79376__$1;
(statearr_79382_79593[(1)] = (65));

} else {
var statearr_79383_79594 = state_79376__$1;
(statearr_79383_79594[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (74))){
var inst_79370 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79384_79595 = state_79376__$1;
(statearr_79384_79595[(2)] = inst_79370);

(statearr_79384_79595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (7))){
var inst_79200 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79385_79596 = state_79376__$1;
(statearr_79385_79596[(2)] = inst_79200);

(statearr_79385_79596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (59))){
var state_79376__$1 = state_79376;
var statearr_79386_79597 = state_79376__$1;
(statearr_79386_79597[(2)] = null);

(statearr_79386_79597[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (20))){
var inst_79258 = (state_79376[(2)]);
var inst_79259 = (target == null);
var inst_79260 = cljs.core.not.call(null,inst_79259);
var state_79376__$1 = (function (){var statearr_79387 = state_79376;
(statearr_79387[(10)] = inst_79258);

return statearr_79387;
})();
if(inst_79260){
var statearr_79388_79598 = state_79376__$1;
(statearr_79388_79598[(1)] = (29));

} else {
var statearr_79389_79599 = state_79376__$1;
(statearr_79389_79599[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (72))){
var inst_79289 = (state_79376[(8)]);
var inst_79360 = (state_79376[(9)]);
var inst_79210 = (state_79376[(7)]);
var inst_79363 = [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)];
var inst_79364 = cljs.core.deref.call(null,inst_79289);
var inst_79365 = [inst_79364];
var inst_79366 = cljs.core.PersistentHashMap.fromArrays(inst_79363,inst_79365);
var inst_79367 = cljs.core.assoc.call(null,inst_79360,inst_79210,inst_79366);
var state_79376__$1 = state_79376;
var statearr_79390_79600 = state_79376__$1;
(statearr_79390_79600[(2)] = inst_79367);

(statearr_79390_79600[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (58))){
var inst_79318 = (state_79376[(11)]);
var inst_79333 = (state_79376[(2)]);
var inst_79335 = (inst_79318 == null);
var inst_79336 = cljs.core.not.call(null,inst_79335);
var state_79376__$1 = (function (){var statearr_79391 = state_79376;
(statearr_79391[(12)] = inst_79333);

return statearr_79391;
})();
if(inst_79336){
var statearr_79392_79601 = state_79376__$1;
(statearr_79392_79601[(1)] = (62));

} else {
var statearr_79393_79602 = state_79376__$1;
(statearr_79393_79602[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (60))){
var inst_79211 = (state_79376[(13)]);
var inst_79325 = [cljs.core.str(inst_79211),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('');
var inst_79326 = [cljs.core.str("Assert failed: "),cljs.core.str(inst_79325),cljs.core.str("\n"),cljs.core.str("(or (nil? value) (map? value))")].join('');
var inst_79327 = (new Error(inst_79326));
var inst_79328 = (function(){throw inst_79327})();
var state_79376__$1 = state_79376;
var statearr_79394_79603 = state_79376__$1;
(statearr_79394_79603[(2)] = inst_79328);

(statearr_79394_79603[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (27))){
var inst_79250 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('');
var inst_79251 = (new Error(inst_79250));
var inst_79252 = (function(){throw inst_79251})();
var state_79376__$1 = state_79376;
var statearr_79395_79604 = state_79376__$1;
(statearr_79395_79604[(2)] = inst_79252);

(statearr_79395_79604[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (1))){
var inst_79188 = (state_79376[(14)]);
var inst_79188__$1 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var inst_79190 = (inst_79188__$1 == null);
var inst_79191 = cljs.core.not.call(null,inst_79190);
var state_79376__$1 = (function (){var statearr_79396 = state_79376;
(statearr_79396[(14)] = inst_79188__$1);

return statearr_79396;
})();
if(inst_79191){
var statearr_79397_79605 = state_79376__$1;
(statearr_79397_79605[(1)] = (2));

} else {
var statearr_79398_79606 = state_79376__$1;
(statearr_79398_79606[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (69))){
var inst_79348 = (state_79376[(15)]);
var state_79376__$1 = state_79376;
var statearr_79399_79607 = state_79376__$1;
(statearr_79399_79607[(2)] = inst_79348);

(statearr_79399_79607[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (24))){
var inst_79211 = (state_79376[(13)]);
var inst_79236 = (state_79376[(16)]);
var inst_79212 = (state_79376[(17)]);
var inst_79245 = (state_79376[(2)]);
var inst_79246 = mutate.call(null,inst_79236,inst_79211,inst_79212);
var state_79376__$1 = (function (){var statearr_79400 = state_79376;
(statearr_79400[(18)] = inst_79245);

return statearr_79400;
})();
var statearr_79401_79608 = state_79376__$1;
(statearr_79401_79608[(2)] = inst_79246);

(statearr_79401_79608[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (55))){
var inst_79290 = (state_79376[(19)]);
var inst_79258 = (state_79376[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_79376,(51),new cljs.core.Keyword(null,"default","default",-1987822328),null,(50));
var inst_79310 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_79258);
var inst_79311 = inst_79310.call(null);
var inst_79312 = cljs.core.reset_BANG_.call(null,inst_79290,inst_79311);
var state_79376__$1 = state_79376;
var statearr_79402_79609 = state_79376__$1;
(statearr_79402_79609[(2)] = inst_79312);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (39))){
var inst_79258 = (state_79376[(10)]);
var inst_79208 = (state_79376[(20)]);
var inst_79280 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(inst_79208);
var inst_79281 = (inst_79280 == null);
var inst_79282 = cljs.core.contains_QMARK_.call(null,inst_79258,new cljs.core.Keyword(null,"value","value",305978217));
var inst_79283 = (inst_79281) || (inst_79282);
var state_79376__$1 = state_79376;
var statearr_79403_79610 = state_79376__$1;
(statearr_79403_79610[(2)] = inst_79283);

(statearr_79403_79610[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (46))){
var inst_79297 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
if(cljs.core.truth_(inst_79297)){
var statearr_79404_79611 = state_79376__$1;
(statearr_79404_79611[(1)] = (47));

} else {
var statearr_79405_79612 = state_79376__$1;
(statearr_79405_79612[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (4))){
var inst_79203 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
if(cljs.core.truth_(inst_79203)){
var statearr_79406_79613 = state_79376__$1;
(statearr_79406_79613[(1)] = (8));

} else {
var statearr_79407_79614 = state_79376__$1;
(statearr_79407_79614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (54))){
var inst_79306 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79408_79615 = state_79376__$1;
(statearr_79408_79615[(2)] = inst_79306);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (15))){
var inst_79223 = (state_79376[(21)]);
var state_79376__$1 = state_79376;
var statearr_79409_79616 = state_79376__$1;
(statearr_79409_79616[(2)] = inst_79223);

(statearr_79409_79616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (48))){
var state_79376__$1 = state_79376;
var statearr_79410_79617 = state_79376__$1;
(statearr_79410_79617[(2)] = null);

(statearr_79410_79617[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (50))){
var inst_79314 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79411_79618 = state_79376__$1;
(statearr_79411_79618[(2)] = inst_79314);

(statearr_79411_79618[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (21))){
var state_79376__$1 = state_79376;
if(cljs.core.truth_(mutate)){
var statearr_79412_79619 = state_79376__$1;
(statearr_79412_79619[(1)] = (22));

} else {
var statearr_79413_79620 = state_79376__$1;
(statearr_79413_79620[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (31))){
var inst_79374 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79376__$1,inst_79374);
} else {
if((state_val_79377 === (32))){
var inst_79266 = cljs.core.conj.call(null,ret,expr);
var state_79376__$1 = state_79376;
var statearr_79414_79621 = state_79376__$1;
(statearr_79414_79621[(2)] = inst_79266);

(statearr_79414_79621[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (40))){
var inst_79285 = (state_79376[(2)]);
var inst_79286 = cljs.core.not.call(null,inst_79285);
var state_79376__$1 = state_79376;
if(inst_79286){
var statearr_79415_79622 = state_79376__$1;
(statearr_79415_79622[(1)] = (41));

} else {
var statearr_79416_79623 = state_79376__$1;
(statearr_79416_79623[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (56))){
var inst_79318 = (state_79376[(11)]);
var inst_79320 = (inst_79318 == null);
var inst_79321 = cljs.core.map_QMARK_.call(null,inst_79318);
var inst_79322 = (inst_79320) || (inst_79321);
var state_79376__$1 = state_79376;
if(cljs.core.truth_(inst_79322)){
var statearr_79417_79624 = state_79376__$1;
(statearr_79417_79624[(1)] = (59));

} else {
var statearr_79418_79625 = state_79376__$1;
(statearr_79418_79625[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (33))){
var state_79376__$1 = state_79376;
var statearr_79419_79626 = state_79376__$1;
(statearr_79419_79626[(2)] = ret);

(statearr_79419_79626[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (13))){
var inst_79209 = (state_79376[(22)]);
var inst_79223 = (state_79376[(2)]);
var inst_79224 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_79225 = cljs.core._EQ_.call(null,inst_79224,inst_79209);
var state_79376__$1 = (function (){var statearr_79420 = state_79376;
(statearr_79420[(21)] = inst_79223);

return statearr_79420;
})();
if(inst_79225){
var statearr_79421_79627 = state_79376__$1;
(statearr_79421_79627[(1)] = (14));

} else {
var statearr_79422_79628 = state_79376__$1;
(statearr_79422_79628[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (22))){
var state_79376__$1 = state_79376;
var statearr_79423_79629 = state_79376__$1;
(statearr_79423_79629[(2)] = null);

(statearr_79423_79629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (36))){
var inst_79269 = (state_79376[(23)]);
var state_79376__$1 = state_79376;
var statearr_79424_79630 = state_79376__$1;
(statearr_79424_79630[(2)] = inst_79269);

(statearr_79424_79630[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (41))){
var state_79376__$1 = state_79376;
var statearr_79425_79631 = state_79376__$1;
(statearr_79425_79631[(2)] = ret);

(statearr_79425_79631[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (43))){
var inst_79372 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79426_79632 = state_79376__$1;
(statearr_79426_79632[(2)] = inst_79372);

(statearr_79426_79632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (61))){
var inst_79330 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79427_79633 = state_79376__$1;
(statearr_79427_79633[(2)] = inst_79330);

(statearr_79427_79633[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (29))){
var inst_79262 = (state_79376[(24)]);
var inst_79258 = (state_79376[(10)]);
var inst_79262__$1 = cljs.core.get.call(null,inst_79258,target);
var inst_79264 = inst_79262__$1 === true;
var state_79376__$1 = (function (){var statearr_79428 = state_79376;
(statearr_79428[(24)] = inst_79262__$1);

return statearr_79428;
})();
if(cljs.core.truth_(inst_79264)){
var statearr_79429_79634 = state_79376__$1;
(statearr_79429_79634[(1)] = (32));

} else {
var statearr_79430_79635 = state_79376__$1;
(statearr_79430_79635[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (44))){
var inst_79258 = (state_79376[(10)]);
var inst_79292 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_79258);
var inst_79293 = (inst_79292 == null);
var inst_79294 = cljs.core.not.call(null,inst_79293);
var state_79376__$1 = state_79376;
var statearr_79431_79636 = state_79376__$1;
(statearr_79431_79636[(2)] = inst_79294);

(statearr_79431_79636[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (6))){
var state_79376__$1 = state_79376;
var statearr_79432_79637 = state_79376__$1;
(statearr_79432_79637[(2)] = false);

(statearr_79432_79637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (28))){
var inst_79211 = (state_79376[(13)]);
var inst_79236 = (state_79376[(16)]);
var inst_79212 = (state_79376[(17)]);
var inst_79254 = (state_79376[(2)]);
var inst_79255 = read.call(null,inst_79236,inst_79211,inst_79212);
var state_79376__$1 = (function (){var statearr_79433 = state_79376;
(statearr_79433[(25)] = inst_79254);

return statearr_79433;
})();
var statearr_79434_79638 = state_79376__$1;
(statearr_79434_79638[(2)] = inst_79255);

(statearr_79434_79638[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (64))){
var inst_79290 = (state_79376[(19)]);
var inst_79348 = (state_79376[(2)]);
var inst_79349 = cljs.core.deref.call(null,inst_79290);
var state_79376__$1 = (function (){var statearr_79435 = state_79376;
(statearr_79435[(15)] = inst_79348);

return statearr_79435;
})();
if(cljs.core.truth_(inst_79349)){
var statearr_79436_79639 = state_79376__$1;
(statearr_79436_79639[(1)] = (68));

} else {
var statearr_79437_79640 = state_79376__$1;
(statearr_79437_79640[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (51))){
var inst_79299 = (state_79376[(26)]);
var inst_79299__$1 = (state_79376[(2)]);
var inst_79300 = om.next.impl.parser.rethrow_QMARK_.call(null,inst_79299__$1);
var state_79376__$1 = (function (){var statearr_79438 = state_79376;
(statearr_79438[(26)] = inst_79299__$1);

return statearr_79438;
})();
if(cljs.core.truth_(inst_79300)){
var statearr_79439_79641 = state_79376__$1;
(statearr_79439_79641[(1)] = (52));

} else {
var statearr_79440_79642 = state_79376__$1;
(statearr_79440_79642[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (25))){
var state_79376__$1 = state_79376;
if(cljs.core.truth_(read)){
var statearr_79441_79643 = state_79376__$1;
(statearr_79441_79643[(1)] = (26));

} else {
var statearr_79442_79644 = state_79376__$1;
(statearr_79442_79644[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (34))){
var inst_79262 = (state_79376[(24)]);
var inst_79269 = (state_79376[(2)]);
var inst_79270 = cljs.core.map_QMARK_.call(null,inst_79262);
var state_79376__$1 = (function (){var statearr_79443 = state_79376;
(statearr_79443[(23)] = inst_79269);

return statearr_79443;
})();
if(inst_79270){
var statearr_79444_79645 = state_79376__$1;
(statearr_79444_79645[(1)] = (35));

} else {
var statearr_79445_79646 = state_79376__$1;
(statearr_79445_79646[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (17))){
var inst_79210 = (state_79376[(7)]);
var inst_79230 = (state_79376[(27)]);
var inst_79233 = cljs.core.assoc.call(null,inst_79230,new cljs.core.Keyword(null,"query-root","query-root",359781888),inst_79210);
var state_79376__$1 = state_79376;
var statearr_79446_79647 = state_79376__$1;
(statearr_79446_79647[(2)] = inst_79233);

(statearr_79446_79647[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (3))){
var state_79376__$1 = state_79376;
var statearr_79447_79648 = state_79376__$1;
(statearr_79447_79648[(2)] = false);

(statearr_79447_79648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (12))){
var inst_79217 = (state_79376[(28)]);
var state_79376__$1 = state_79376;
var statearr_79448_79649 = state_79376__$1;
(statearr_79448_79649[(2)] = inst_79217);

(statearr_79448_79649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (2))){
var inst_79188 = (state_79376[(14)]);
var inst_79193 = inst_79188.cljs$lang$protocol_mask$partition0$;
var inst_79194 = (inst_79193 & (64));
var inst_79195 = inst_79188.cljs$core$ISeq$;
var inst_79196 = (inst_79194) || (inst_79195);
var state_79376__$1 = state_79376;
if(cljs.core.truth_(inst_79196)){
var statearr_79449_79650 = state_79376__$1;
(statearr_79449_79650[(1)] = (5));

} else {
var statearr_79450_79651 = state_79376__$1;
(statearr_79450_79651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (66))){
var inst_79210 = (state_79376[(7)]);
var state_79376__$1 = state_79376;
var statearr_79451_79652 = state_79376__$1;
(statearr_79451_79652[(2)] = inst_79210);

(statearr_79451_79652[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (23))){
var inst_79241 = [cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('');
var inst_79242 = (new Error(inst_79241));
var inst_79243 = (function(){throw inst_79242})();
var state_79376__$1 = state_79376;
var statearr_79452_79653 = state_79376__$1;
(statearr_79452_79653[(2)] = inst_79243);

(statearr_79452_79653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (47))){
var state_79376__$1 = state_79376;
var statearr_79453_79654 = state_79376__$1;
(statearr_79453_79654[(2)] = null);

(statearr_79453_79654[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (35))){
var inst_79269 = (state_79376[(23)]);
var inst_79262 = (state_79376[(24)]);
var inst_79272 = om.next.impl.parser.ast__GT_expr.call(null,inst_79262);
var inst_79273 = cljs.core.conj.call(null,inst_79269,inst_79272);
var state_79376__$1 = state_79376;
var statearr_79454_79655 = state_79376__$1;
(statearr_79454_79655[(2)] = inst_79273);

(statearr_79454_79655[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (19))){
var inst_79208 = (state_79376[(20)]);
var inst_79236 = (state_79376[(2)]);
var inst_79237 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_79208);
var inst_79238 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),inst_79237);
var state_79376__$1 = (function (){var statearr_79455 = state_79376;
(statearr_79455[(16)] = inst_79236);

(statearr_79455[(29)] = inst_79238);

return statearr_79455;
})();
var G__79456_79656 = (((inst_79237 instanceof cljs.core.Keyword))?inst_79237.fqn:null);
switch (G__79456_79656) {
case "call":
var statearr_79457_79658 = state_79376__$1;
(statearr_79457_79658[(1)] = (21));


break;
case "prop":
var statearr_79458_79659 = state_79376__$1;
(statearr_79458_79659[(1)] = (25));


break;
case "join":
var statearr_79459_79660 = state_79376__$1;
(statearr_79459_79660[(1)] = (25));


break;
case "union":
var statearr_79460_79661 = state_79376__$1;
(statearr_79460_79661[(1)] = (25));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_79237)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (57))){
var state_79376__$1 = state_79376;
var statearr_79461_79662 = state_79376__$1;
(statearr_79461_79662[(2)] = null);

(statearr_79461_79662[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (68))){
var inst_79290 = (state_79376[(19)]);
var inst_79210 = (state_79376[(7)]);
var inst_79351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79352 = [inst_79210,new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_79353 = (new cljs.core.PersistentVector(null,2,(5),inst_79351,inst_79352,null));
var inst_79354 = cljs.core.deref.call(null,inst_79290);
var state_79376__$1 = (function (){var statearr_79462 = state_79376;
(statearr_79462[(30)] = inst_79353);

return statearr_79462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79376__$1,(71),inst_79354);
} else {
if((state_val_79377 === (11))){
var inst_79217 = (state_79376[(28)]);
var inst_79220 = cljs.core.dissoc.call(null,inst_79217,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_79376__$1 = state_79376;
var statearr_79463_79663 = state_79376__$1;
(statearr_79463_79663[(2)] = inst_79220);

(statearr_79463_79663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (9))){
var inst_79188 = (state_79376[(14)]);
var state_79376__$1 = state_79376;
var statearr_79464_79664 = state_79376__$1;
(statearr_79464_79664[(2)] = inst_79188);

(statearr_79464_79664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (5))){
var state_79376__$1 = state_79376;
var statearr_79465_79665 = state_79376__$1;
(statearr_79465_79665[(2)] = true);

(statearr_79465_79665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (14))){
var inst_79223 = (state_79376[(21)]);
var inst_79227 = cljs.core.assoc.call(null,inst_79223,new cljs.core.Keyword(null,"query","query",-1288509510),query);
var state_79376__$1 = state_79376;
var statearr_79466_79666 = state_79376__$1;
(statearr_79466_79666[(2)] = inst_79227);

(statearr_79466_79666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (45))){
var inst_79238 = (state_79376[(29)]);
var state_79376__$1 = state_79376;
var statearr_79467_79667 = state_79376__$1;
(statearr_79467_79667[(2)] = inst_79238);

(statearr_79467_79667[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (53))){
var inst_79289 = (state_79376[(8)]);
var inst_79299 = (state_79376[(26)]);
var inst_79304 = cljs.core.reset_BANG_.call(null,inst_79289,inst_79299);
var state_79376__$1 = state_79376;
var statearr_79468_79668 = state_79376__$1;
(statearr_79468_79668[(2)] = inst_79304);

(statearr_79468_79668[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (26))){
var state_79376__$1 = state_79376;
var statearr_79469_79669 = state_79376__$1;
(statearr_79469_79669[(2)] = null);

(statearr_79469_79669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (16))){
var inst_79210 = (state_79376[(7)]);
var inst_79230 = (state_79376[(2)]);
var inst_79231 = cljs.core.vector_QMARK_.call(null,inst_79210);
var state_79376__$1 = (function (){var statearr_79470 = state_79376;
(statearr_79470[(27)] = inst_79230);

return statearr_79470;
})();
if(inst_79231){
var statearr_79471_79670 = state_79376__$1;
(statearr_79471_79670[(1)] = (17));

} else {
var statearr_79472_79671 = state_79376__$1;
(statearr_79472_79671[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (38))){
var inst_79238 = (state_79376[(29)]);
var state_79376__$1 = state_79376;
var statearr_79473_79672 = state_79376__$1;
(statearr_79473_79672[(2)] = inst_79238);

(statearr_79473_79672[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (30))){
var inst_79238 = (state_79376[(29)]);
var state_79376__$1 = state_79376;
if(cljs.core.truth_(inst_79238)){
var statearr_79474_79673 = state_79376__$1;
(statearr_79474_79673[(1)] = (38));

} else {
var statearr_79475_79674 = state_79376__$1;
(statearr_79475_79674[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (73))){
var inst_79360 = (state_79376[(9)]);
var state_79376__$1 = state_79376;
var statearr_79476_79675 = state_79376__$1;
(statearr_79476_79675[(2)] = inst_79360);

(statearr_79476_79675[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (10))){
var inst_79209 = (state_79376[(22)]);
var inst_79208 = (state_79376[(20)]);
var inst_79208__$1 = (state_79376[(2)]);
var inst_79209__$1 = cljs.core.get.call(null,inst_79208__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_79210 = cljs.core.get.call(null,inst_79208__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_79211 = cljs.core.get.call(null,inst_79208__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var inst_79212 = cljs.core.get.call(null,inst_79208__$1,new cljs.core.Keyword(null,"params","params",710516235));
var inst_79214 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_79215 = [inst_79208__$1,inst_79209__$1];
var inst_79216 = cljs.core.PersistentHashMap.fromArrays(inst_79214,inst_79215);
var inst_79217 = cljs.core.merge.call(null,env__$1,inst_79216);
var inst_79218 = (inst_79209__$1 == null);
var state_79376__$1 = (function (){var statearr_79477 = state_79376;
(statearr_79477[(22)] = inst_79209__$1);

(statearr_79477[(28)] = inst_79217);

(statearr_79477[(13)] = inst_79211);

(statearr_79477[(17)] = inst_79212);

(statearr_79477[(7)] = inst_79210);

(statearr_79477[(20)] = inst_79208__$1);

return statearr_79477;
})();
if(cljs.core.truth_(inst_79218)){
var statearr_79478_79676 = state_79376__$1;
(statearr_79478_79676[(1)] = (11));

} else {
var statearr_79479_79677 = state_79376__$1;
(statearr_79479_79677[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (18))){
var inst_79230 = (state_79376[(27)]);
var state_79376__$1 = state_79376;
var statearr_79480_79678 = state_79376__$1;
(statearr_79480_79678[(2)] = inst_79230);

(statearr_79480_79678[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (52))){
var inst_79299 = (state_79376[(26)]);
var inst_79302 = (function(){throw inst_79299})();
var state_79376__$1 = state_79376;
var statearr_79481_79679 = state_79376__$1;
(statearr_79481_79679[(2)] = inst_79302);

(statearr_79481_79679[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (67))){
var inst_79318 = (state_79376[(11)]);
var inst_79344 = (state_79376[(2)]);
var inst_79345 = cljs.core.assoc.call(null,ret,inst_79344,inst_79318);
var state_79376__$1 = state_79376;
var statearr_79482_79680 = state_79376__$1;
(statearr_79482_79680[(2)] = inst_79345);

(statearr_79482_79680[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (71))){
var inst_79348 = (state_79376[(15)]);
var inst_79353 = (state_79376[(30)]);
var inst_79356 = (state_79376[(2)]);
var inst_79357 = cljs.core.assoc_in.call(null,inst_79348,inst_79353,inst_79356);
var state_79376__$1 = state_79376;
var statearr_79483_79681 = state_79376__$1;
(statearr_79483_79681[(2)] = inst_79357);

(statearr_79483_79681[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (42))){
var inst_79238 = (state_79376[(29)]);
var inst_79289 = cljs.core.atom.call(null,null);
var inst_79290 = cljs.core.atom.call(null,null);
var state_79376__$1 = (function (){var statearr_79484 = state_79376;
(statearr_79484[(19)] = inst_79290);

(statearr_79484[(8)] = inst_79289);

return statearr_79484;
})();
if(cljs.core.truth_(inst_79238)){
var statearr_79485_79682 = state_79376__$1;
(statearr_79485_79682[(1)] = (44));

} else {
var statearr_79486_79683 = state_79376__$1;
(statearr_79486_79683[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (37))){
var inst_79276 = (state_79376[(2)]);
var state_79376__$1 = state_79376;
var statearr_79487_79684 = state_79376__$1;
(statearr_79487_79684[(2)] = inst_79276);

(statearr_79487_79684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (63))){
var state_79376__$1 = state_79376;
var statearr_79488_79685 = state_79376__$1;
(statearr_79488_79685[(2)] = ret);

(statearr_79488_79685[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (8))){
var inst_79188 = (state_79376[(14)]);
var inst_79205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79188);
var state_79376__$1 = state_79376;
var statearr_79489_79686 = state_79376__$1;
(statearr_79489_79686[(2)] = inst_79205);

(statearr_79489_79686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79377 === (49))){
var inst_79238 = (state_79376[(29)]);
var inst_79258 = (state_79376[(10)]);
var inst_79317 = (state_79376[(2)]);
var inst_79318 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_79258);
var state_79376__$1 = (function (){var statearr_79490 = state_79376;
(statearr_79490[(31)] = inst_79317);

(statearr_79490[(11)] = inst_79318);

return statearr_79490;
})();
if(cljs.core.truth_(inst_79238)){
var statearr_79491_79687 = state_79376__$1;
(statearr_79491_79687[(1)] = (56));

} else {
var statearr_79492_79688 = state_79376__$1;
(statearr_79492_79688[(1)] = (57));

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
});})(c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
;
return ((function (switch__43223__auto__,c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto__ = null;
var ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto____0 = (function (){
var statearr_79496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79496[(0)] = ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto__);

(statearr_79496[(1)] = (1));

return statearr_79496;
});
var ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto____1 = (function (state_79376){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_79376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e79497){if((e79497 instanceof Object)){
var ex__43227__auto__ = e79497;
var statearr_79498_79689 = state_79376;
(statearr_79498_79689[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79690 = state_79376;
state_79376 = G__79690;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto__ = function(state_79376){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto____1.call(this,state_79376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto____0;
ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto____1;
return ui$parser_async$parser_$_self_$_step_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
})();
var state__43339__auto__ = (function (){var statearr_79499 = f__43338__auto__.call(null);
(statearr_79499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_79499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
);

return c__43337__auto__;
});})(elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
;
var G__79500 = (function (){var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function (state_79555){
var state_val_79556 = (state_79555[(1)]);
if((state_val_79556 === (7))){
var inst_79509 = (state_79555[(7)]);
var inst_79508 = (state_79555[(8)]);
var inst_79513 = cljs.core.first.call(null,inst_79509);
var inst_79514 = step.call(null,inst_79508,inst_79513);
var state_79555__$1 = state_79555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79555__$1,(10),inst_79514);
} else {
if((state_val_79556 === (1))){
var inst_79501 = (target == null);
var state_79555__$1 = state_79555;
if(cljs.core.truth_(inst_79501)){
var statearr_79557_79691 = state_79555__$1;
(statearr_79557_79691[(1)] = (2));

} else {
var statearr_79558_79692 = state_79555__$1;
(statearr_79558_79692[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (4))){
var inst_79507 = (state_79555[(2)]);
var inst_79508 = inst_79507;
var inst_79509 = query;
var state_79555__$1 = (function (){var statearr_79559 = state_79555;
(statearr_79559[(7)] = inst_79509);

(statearr_79559[(8)] = inst_79508);

return statearr_79559;
})();
var statearr_79560_79693 = state_79555__$1;
(statearr_79560_79693[(2)] = null);

(statearr_79560_79693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (15))){
var inst_79551 = (state_79555[(2)]);
var state_79555__$1 = state_79555;
var statearr_79561_79694 = state_79555__$1;
(statearr_79561_79694[(2)] = inst_79551);

(statearr_79561_79694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (13))){
var inst_79531 = (state_79555[(9)]);
var inst_79526 = (state_79555[(10)]);
var inst_79530 = cljs.core.first.call(null,inst_79526);
var inst_79531__$1 = cljs.core.second.call(null,inst_79530);
var inst_79532 = cljs.core.type.call(null,inst_79531__$1);
var inst_79533 = cljs.core._EQ_.call(null,inst_79532,cljs.core.async.impl.channels.ManyToManyChannel);
var state_79555__$1 = (function (){var statearr_79562 = state_79555;
(statearr_79562[(9)] = inst_79531__$1);

return statearr_79562;
})();
if(inst_79533){
var statearr_79563_79695 = state_79555__$1;
(statearr_79563_79695[(1)] = (16));

} else {
var statearr_79564_79696 = state_79555__$1;
(statearr_79564_79696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (6))){
var inst_79523 = (state_79555[(2)]);
var inst_79524 = cljs.core.PersistentHashMap.EMPTY;
var inst_79525 = inst_79524;
var inst_79526 = inst_79523;
var state_79555__$1 = (function (){var statearr_79565 = state_79555;
(statearr_79565[(10)] = inst_79526);

(statearr_79565[(11)] = inst_79525);

return statearr_79565;
})();
var statearr_79566_79697 = state_79555__$1;
(statearr_79566_79697[(2)] = null);

(statearr_79566_79697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (17))){
var inst_79531 = (state_79555[(9)]);
var inst_79526 = (state_79555[(10)]);
var inst_79525 = (state_79555[(11)]);
var inst_79541 = cljs.core.first.call(null,inst_79526);
var inst_79542 = cljs.core.first.call(null,inst_79541);
var inst_79543 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_79531);
var inst_79544 = cljs.core.assoc.call(null,inst_79525,inst_79542,inst_79543);
var state_79555__$1 = state_79555;
var statearr_79567_79698 = state_79555__$1;
(statearr_79567_79698[(2)] = inst_79544);

(statearr_79567_79698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (3))){
var inst_79505 = cljs.core.PersistentVector.EMPTY;
var state_79555__$1 = state_79555;
var statearr_79568_79699 = state_79555__$1;
(statearr_79568_79699[(2)] = inst_79505);

(statearr_79568_79699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (12))){
var inst_79553 = (state_79555[(2)]);
var state_79555__$1 = state_79555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79555__$1,inst_79553);
} else {
if((state_val_79556 === (2))){
var inst_79503 = cljs.core.PersistentHashMap.EMPTY;
var state_79555__$1 = state_79555;
var statearr_79569_79700 = state_79555__$1;
(statearr_79569_79700[(2)] = inst_79503);

(statearr_79569_79700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (19))){
var inst_79536 = (state_79555[(12)]);
var inst_79525 = (state_79555[(11)]);
var inst_79538 = (state_79555[(2)]);
var inst_79539 = cljs.core.assoc.call(null,inst_79525,inst_79536,inst_79538);
var state_79555__$1 = state_79555;
var statearr_79570_79701 = state_79555__$1;
(statearr_79570_79701[(2)] = inst_79539);

(statearr_79570_79701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (11))){
var inst_79526 = (state_79555[(10)]);
var inst_79528 = cljs.core.seq.call(null,inst_79526);
var state_79555__$1 = state_79555;
if(inst_79528){
var statearr_79571_79702 = state_79555__$1;
(statearr_79571_79702[(1)] = (13));

} else {
var statearr_79572_79703 = state_79555__$1;
(statearr_79572_79703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (9))){
var inst_79521 = (state_79555[(2)]);
var state_79555__$1 = state_79555;
var statearr_79573_79704 = state_79555__$1;
(statearr_79573_79704[(2)] = inst_79521);

(statearr_79573_79704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (5))){
var inst_79509 = (state_79555[(7)]);
var inst_79511 = cljs.core.seq.call(null,inst_79509);
var state_79555__$1 = state_79555;
if(inst_79511){
var statearr_79574_79705 = state_79555__$1;
(statearr_79574_79705[(1)] = (7));

} else {
var statearr_79575_79706 = state_79555__$1;
(statearr_79575_79706[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (14))){
var inst_79525 = (state_79555[(11)]);
var state_79555__$1 = state_79555;
var statearr_79576_79707 = state_79555__$1;
(statearr_79576_79707[(2)] = inst_79525);

(statearr_79576_79707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (16))){
var inst_79531 = (state_79555[(9)]);
var inst_79526 = (state_79555[(10)]);
var inst_79535 = cljs.core.first.call(null,inst_79526);
var inst_79536 = cljs.core.first.call(null,inst_79535);
var state_79555__$1 = (function (){var statearr_79577 = state_79555;
(statearr_79577[(12)] = inst_79536);

return statearr_79577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79555__$1,(19),inst_79531);
} else {
if((state_val_79556 === (10))){
var inst_79509 = (state_79555[(7)]);
var inst_79516 = (state_79555[(2)]);
var inst_79517 = cljs.core.rest.call(null,inst_79509);
var inst_79508 = inst_79516;
var inst_79509__$1 = inst_79517;
var state_79555__$1 = (function (){var statearr_79578 = state_79555;
(statearr_79578[(7)] = inst_79509__$1);

(statearr_79578[(8)] = inst_79508);

return statearr_79578;
})();
var statearr_79579_79708 = state_79555__$1;
(statearr_79579_79708[(2)] = null);

(statearr_79579_79708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (18))){
var inst_79526 = (state_79555[(10)]);
var inst_79546 = (state_79555[(2)]);
var inst_79547 = cljs.core.rest.call(null,inst_79526);
var inst_79525 = inst_79546;
var inst_79526__$1 = inst_79547;
var state_79555__$1 = (function (){var statearr_79580 = state_79555;
(statearr_79580[(10)] = inst_79526__$1);

(statearr_79580[(11)] = inst_79525);

return statearr_79580;
})();
var statearr_79581_79709 = state_79555__$1;
(statearr_79581_79709[(2)] = null);

(statearr_79581_79709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79556 === (8))){
var inst_79508 = (state_79555[(8)]);
var state_79555__$1 = state_79555;
var statearr_79582_79710 = state_79555__$1;
(statearr_79582_79710[(2)] = inst_79508);

(statearr_79582_79710[(1)] = (9));


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
});})(c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
;
return ((function (switch__43223__auto__,c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate){
return (function() {
var ui$parser_async$parser_$_self_$_state_machine__43224__auto__ = null;
var ui$parser_async$parser_$_self_$_state_machine__43224__auto____0 = (function (){
var statearr_79586 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79586[(0)] = ui$parser_async$parser_$_self_$_state_machine__43224__auto__);

(statearr_79586[(1)] = (1));

return statearr_79586;
});
var ui$parser_async$parser_$_self_$_state_machine__43224__auto____1 = (function (state_79555){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_79555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e79587){if((e79587 instanceof Object)){
var ex__43227__auto__ = e79587;
var statearr_79588_79711 = state_79555;
(statearr_79588_79711[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79712 = state_79555;
state_79555 = G__79712;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
ui$parser_async$parser_$_self_$_state_machine__43224__auto__ = function(state_79555){
switch(arguments.length){
case 0:
return ui$parser_async$parser_$_self_$_state_machine__43224__auto____0.call(this);
case 1:
return ui$parser_async$parser_$_self_$_state_machine__43224__auto____1.call(this,state_79555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$parser_async$parser_$_self_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = ui$parser_async$parser_$_self_$_state_machine__43224__auto____0;
ui$parser_async$parser_$_self_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = ui$parser_async$parser_$_self_$_state_machine__43224__auto____1;
return ui$parser_async$parser_$_self_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
})();
var state__43339__auto__ = (function (){var statearr_79589 = f__43338__auto__.call(null);
(statearr_79589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_79589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,elide_paths_QMARK_,map__78245,map__78245__$1,env__$1,path,map__76898,map__76898__$1,config,read,mutate))
);

return c__43337__auto__;
})();
if(((target == null)) && (cljs.core.not.call(null,elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.call(null,G__79500,path,query);
} else {
return G__79500;
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
;})(map__76898,map__76898__$1,config,read,mutate))
});

//# sourceMappingURL=parser_async.js.map?rel=1488154329627