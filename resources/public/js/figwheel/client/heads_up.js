// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__32961__auto__ = [];
var len__32954__auto___496187 = arguments.length;
var i__32955__auto___496188 = (0);
while(true){
if((i__32955__auto___496188 < len__32954__auto___496187)){
args__32961__auto__.push((arguments[i__32955__auto___496188]));

var G__496189 = (i__32955__auto___496188 + (1));
i__32955__auto___496188 = G__496189;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((2) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32962__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__496179_496190 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__496180_496191 = null;
var count__496181_496192 = (0);
var i__496182_496193 = (0);
while(true){
if((i__496182_496193 < count__496181_496192)){
var k_496194 = cljs.core._nth.call(null,chunk__496180_496191,i__496182_496193);
e.setAttribute(cljs.core.name.call(null,k_496194),cljs.core.get.call(null,attrs,k_496194));

var G__496195 = seq__496179_496190;
var G__496196 = chunk__496180_496191;
var G__496197 = count__496181_496192;
var G__496198 = (i__496182_496193 + (1));
seq__496179_496190 = G__496195;
chunk__496180_496191 = G__496196;
count__496181_496192 = G__496197;
i__496182_496193 = G__496198;
continue;
} else {
var temp__4657__auto___496199 = cljs.core.seq.call(null,seq__496179_496190);
if(temp__4657__auto___496199){
var seq__496179_496200__$1 = temp__4657__auto___496199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__496179_496200__$1)){
var c__32690__auto___496201 = cljs.core.chunk_first.call(null,seq__496179_496200__$1);
var G__496202 = cljs.core.chunk_rest.call(null,seq__496179_496200__$1);
var G__496203 = c__32690__auto___496201;
var G__496204 = cljs.core.count.call(null,c__32690__auto___496201);
var G__496205 = (0);
seq__496179_496190 = G__496202;
chunk__496180_496191 = G__496203;
count__496181_496192 = G__496204;
i__496182_496193 = G__496205;
continue;
} else {
var k_496206 = cljs.core.first.call(null,seq__496179_496200__$1);
e.setAttribute(cljs.core.name.call(null,k_496206),cljs.core.get.call(null,attrs,k_496206));

var G__496207 = cljs.core.next.call(null,seq__496179_496200__$1);
var G__496208 = null;
var G__496209 = (0);
var G__496210 = (0);
seq__496179_496190 = G__496207;
chunk__496180_496191 = G__496208;
count__496181_496192 = G__496209;
i__496182_496193 = G__496210;
continue;
}
} else {
}
}
break;
}

var seq__496183_496211 = cljs.core.seq.call(null,children);
var chunk__496184_496212 = null;
var count__496185_496213 = (0);
var i__496186_496214 = (0);
while(true){
if((i__496186_496214 < count__496185_496213)){
var ch_496215 = cljs.core._nth.call(null,chunk__496184_496212,i__496186_496214);
e.appendChild(ch_496215);

var G__496216 = seq__496183_496211;
var G__496217 = chunk__496184_496212;
var G__496218 = count__496185_496213;
var G__496219 = (i__496186_496214 + (1));
seq__496183_496211 = G__496216;
chunk__496184_496212 = G__496217;
count__496185_496213 = G__496218;
i__496186_496214 = G__496219;
continue;
} else {
var temp__4657__auto___496220 = cljs.core.seq.call(null,seq__496183_496211);
if(temp__4657__auto___496220){
var seq__496183_496221__$1 = temp__4657__auto___496220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__496183_496221__$1)){
var c__32690__auto___496222 = cljs.core.chunk_first.call(null,seq__496183_496221__$1);
var G__496223 = cljs.core.chunk_rest.call(null,seq__496183_496221__$1);
var G__496224 = c__32690__auto___496222;
var G__496225 = cljs.core.count.call(null,c__32690__auto___496222);
var G__496226 = (0);
seq__496183_496211 = G__496223;
chunk__496184_496212 = G__496224;
count__496185_496213 = G__496225;
i__496186_496214 = G__496226;
continue;
} else {
var ch_496227 = cljs.core.first.call(null,seq__496183_496221__$1);
e.appendChild(ch_496227);

var G__496228 = cljs.core.next.call(null,seq__496183_496221__$1);
var G__496229 = null;
var G__496230 = (0);
var G__496231 = (0);
seq__496183_496211 = G__496228;
chunk__496184_496212 = G__496229;
count__496185_496213 = G__496230;
i__496186_496214 = G__496231;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq496176){
var G__496177 = cljs.core.first.call(null,seq496176);
var seq496176__$1 = cljs.core.next.call(null,seq496176);
var G__496178 = cljs.core.first.call(null,seq496176__$1);
var seq496176__$2 = cljs.core.next.call(null,seq496176__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__496177,G__496178,seq496176__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__32804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__,hierarchy__32808__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__,hierarchy__32808__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32808__auto__,method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_496232 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_496232.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_496232.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_496232.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_496232);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__496233,st_map){
var map__496240 = p__496233;
var map__496240__$1 = ((((!((map__496240 == null)))?((((map__496240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496240):map__496240);
var container_el = cljs.core.get.call(null,map__496240__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__496240,map__496240__$1,container_el){
return (function (p__496242){
var vec__496243 = p__496242;
var k = cljs.core.nth.call(null,vec__496243,(0),null);
var v = cljs.core.nth.call(null,vec__496243,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__496240,map__496240__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__496246,dom_str){
var map__496249 = p__496246;
var map__496249__$1 = ((((!((map__496249 == null)))?((((map__496249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496249):map__496249);
var c = map__496249__$1;
var content_area_el = cljs.core.get.call(null,map__496249__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__496251){
var map__496254 = p__496251;
var map__496254__$1 = ((((!((map__496254 == null)))?((((map__496254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496254):map__496254);
var content_area_el = cljs.core.get.call(null,map__496254__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_496297){
var state_val_496298 = (state_496297[(1)]);
if((state_val_496298 === (1))){
var inst_496282 = (state_496297[(7)]);
var inst_496282__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_496283 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_496284 = ["10px","10px","100%","68px","1.0"];
var inst_496285 = cljs.core.PersistentHashMap.fromArrays(inst_496283,inst_496284);
var inst_496286 = cljs.core.merge.call(null,inst_496285,style);
var inst_496287 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_496282__$1,inst_496286);
var inst_496288 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_496282__$1,msg);
var inst_496289 = cljs.core.async.timeout.call(null,(300));
var state_496297__$1 = (function (){var statearr_496299 = state_496297;
(statearr_496299[(7)] = inst_496282__$1);

(statearr_496299[(8)] = inst_496287);

(statearr_496299[(9)] = inst_496288);

return statearr_496299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496297__$1,(2),inst_496289);
} else {
if((state_val_496298 === (2))){
var inst_496282 = (state_496297[(7)]);
var inst_496291 = (state_496297[(2)]);
var inst_496292 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_496293 = ["auto"];
var inst_496294 = cljs.core.PersistentHashMap.fromArrays(inst_496292,inst_496293);
var inst_496295 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_496282,inst_496294);
var state_496297__$1 = (function (){var statearr_496300 = state_496297;
(statearr_496300[(10)] = inst_496291);

return statearr_496300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_496297__$1,inst_496295);
} else {
return null;
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto____0 = (function (){
var statearr_496304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_496304[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto__);

(statearr_496304[(1)] = (1));

return statearr_496304;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto____1 = (function (state_496297){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_496297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e496305){if((e496305 instanceof Object)){
var ex__38704__auto__ = e496305;
var statearr_496306_496308 = state_496297;
(statearr_496306_496308[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_496297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e496305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__496309 = state_496297;
state_496297 = G__496309;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto__ = function(state_496297){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto____1.call(this,state_496297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_496307 = f__38813__auto__.call(null);
(statearr_496307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_496307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args496310 = [];
var len__32954__auto___496313 = arguments.length;
var i__32955__auto___496314 = (0);
while(true){
if((i__32955__auto___496314 < len__32954__auto___496313)){
args496310.push((arguments[i__32955__auto___496314]));

var G__496315 = (i__32955__auto___496314 + (1));
i__32955__auto___496314 = G__496315;
continue;
} else {
}
break;
}

var G__496312 = args496310.length;
switch (G__496312) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args496310.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__496317){
var map__496320 = p__496317;
var map__496320__$1 = ((((!((map__496320 == null)))?((((map__496320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496320):map__496320);
var file = cljs.core.get.call(null,map__496320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496320__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496320__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__31879__auto__ = file;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__496322){
var vec__496329 = p__496322;
var typ = cljs.core.nth.call(null,vec__496329,(0),null);
var line_number = cljs.core.nth.call(null,vec__496329,(1),null);
var line = cljs.core.nth.call(null,vec__496329,(2),null);
var pred__496332 = cljs.core._EQ_;
var expr__496333 = typ;
if(cljs.core.truth_(pred__496332.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__496333))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__496332.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__496333))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__496332.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__496333))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__496335_SHARP_){
return cljs.core.update_in.call(null,p1__496335_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; overflow: hidden; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__496338){
var map__496341 = p__496338;
var map__496341__$1 = ((((!((map__496341 == null)))?((((map__496341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496341):map__496341);
var exception = map__496341__$1;
var failed_compiling = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__496341__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__31867__auto__ = file;
if(cljs.core.truth_(and__31867__auto__)){
return line;
} else {
return and__31867__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__496341,map__496341__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__496336_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__496336_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__496341,map__496341__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__496341,map__496341__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__496337_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__496337_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__496337_SHARP_)))].join('');
});})(last_message,map__496341,map__496341__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__496346 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__496346__$1 = ((((!((map__496346 == null)))?((((map__496346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496346):map__496346);
var head = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496346__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__496349){
var map__496352 = p__496349;
var map__496352__$1 = ((((!((map__496352 == null)))?((((map__496352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496352):map__496352);
var warning_data = map__496352__$1;
var file = cljs.core.get.call(null,map__496352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__496352__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__496352__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__31867__auto__ = file;
if(cljs.core.truth_(and__31867__auto__)){
return line;
} else {
return and__31867__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__496352,map__496352__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__496348_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__496348_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__496352,map__496352__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg,cljs.core.PersistentArrayMap.EMPTY))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__496356 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__496356__$1 = ((((!((map__496356 == null)))?((((map__496356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496356):map__496356);
var head = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496356__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__496358){
var map__496362 = p__496358;
var map__496362__$1 = ((((!((map__496362 == null)))?((((map__496362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496362):map__496362);
var warning_data = map__496362__$1;
var message = cljs.core.get.call(null,map__496362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__496362__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496362__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496362__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__496364 = message;
var G__496364__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__496364),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__496364);
var G__496364__$2 = (cljs.core.truth_((function (){var and__31867__auto__ = line;
if(cljs.core.truth_(and__31867__auto__)){
return column;
} else {
return and__31867__auto__;
}
})())?[cljs.core.str(G__496364__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__496364__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__496364__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__496364__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__496365){
var map__496370 = p__496365;
var map__496370__$1 = ((((!((map__496370 == null)))?((((map__496370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496370):map__496370);
var warning_data = map__496370__$1;
var message = cljs.core.get.call(null,map__496370__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__496370__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__496370__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__496370__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__496372 = figwheel.client.heads_up.ensure_container.call(null);
var map__496372__$1 = ((((!((map__496372 == null)))?((((map__496372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__496372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__496372):map__496372);
var content_area_el = cljs.core.get.call(null,map__496372__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
goog.dom.append(el,goog.dom.htmlToDocumentFragment(figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data)));

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_496420){
var state_val_496421 = (state_496420[(1)]);
if((state_val_496421 === (1))){
var inst_496403 = (state_496420[(7)]);
var inst_496403__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_496404 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_496405 = ["0.0"];
var inst_496406 = cljs.core.PersistentHashMap.fromArrays(inst_496404,inst_496405);
var inst_496407 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_496403__$1,inst_496406);
var inst_496408 = cljs.core.async.timeout.call(null,(300));
var state_496420__$1 = (function (){var statearr_496422 = state_496420;
(statearr_496422[(8)] = inst_496407);

(statearr_496422[(7)] = inst_496403__$1);

return statearr_496422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496420__$1,(2),inst_496408);
} else {
if((state_val_496421 === (2))){
var inst_496403 = (state_496420[(7)]);
var inst_496410 = (state_496420[(2)]);
var inst_496411 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_496412 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_496413 = cljs.core.PersistentHashMap.fromArrays(inst_496411,inst_496412);
var inst_496414 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_496403,inst_496413);
var inst_496415 = cljs.core.async.timeout.call(null,(200));
var state_496420__$1 = (function (){var statearr_496423 = state_496420;
(statearr_496423[(9)] = inst_496414);

(statearr_496423[(10)] = inst_496410);

return statearr_496423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496420__$1,(3),inst_496415);
} else {
if((state_val_496421 === (3))){
var inst_496403 = (state_496420[(7)]);
var inst_496417 = (state_496420[(2)]);
var inst_496418 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_496403,"");
var state_496420__$1 = (function (){var statearr_496424 = state_496420;
(statearr_496424[(11)] = inst_496417);

return statearr_496424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_496420__$1,inst_496418);
} else {
return null;
}
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__38701__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__38701__auto____0 = (function (){
var statearr_496428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_496428[(0)] = figwheel$client$heads_up$clear_$_state_machine__38701__auto__);

(statearr_496428[(1)] = (1));

return statearr_496428;
});
var figwheel$client$heads_up$clear_$_state_machine__38701__auto____1 = (function (state_496420){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_496420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e496429){if((e496429 instanceof Object)){
var ex__38704__auto__ = e496429;
var statearr_496430_496432 = state_496420;
(statearr_496430_496432[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_496420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e496429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__496433 = state_496420;
state_496420 = G__496433;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__38701__auto__ = function(state_496420){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__38701__auto____1.call(this,state_496420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__38701__auto____0;
figwheel$client$heads_up$clear_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__38701__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_496431 = f__38813__auto__.call(null);
(statearr_496431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_496431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_496465){
var state_val_496466 = (state_496465[(1)]);
if((state_val_496466 === (1))){
var inst_496455 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_496465__$1 = state_496465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496465__$1,(2),inst_496455);
} else {
if((state_val_496466 === (2))){
var inst_496457 = (state_496465[(2)]);
var inst_496458 = cljs.core.async.timeout.call(null,(400));
var state_496465__$1 = (function (){var statearr_496467 = state_496465;
(statearr_496467[(7)] = inst_496457);

return statearr_496467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496465__$1,(3),inst_496458);
} else {
if((state_val_496466 === (3))){
var inst_496460 = (state_496465[(2)]);
var inst_496461 = figwheel.client.heads_up.clear.call(null);
var state_496465__$1 = (function (){var statearr_496468 = state_496465;
(statearr_496468[(8)] = inst_496460);

return statearr_496468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_496465__$1,(4),inst_496461);
} else {
if((state_val_496466 === (4))){
var inst_496463 = (state_496465[(2)]);
var state_496465__$1 = state_496465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_496465__$1,inst_496463);
} else {
return null;
}
}
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto____0 = (function (){
var statearr_496472 = [null,null,null,null,null,null,null,null,null];
(statearr_496472[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto__);

(statearr_496472[(1)] = (1));

return statearr_496472;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto____1 = (function (state_496465){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_496465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e496473){if((e496473 instanceof Object)){
var ex__38704__auto__ = e496473;
var statearr_496474_496476 = state_496465;
(statearr_496474_496476[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_496465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e496473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__496477 = state_496465;
state_496465 = G__496477;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto__ = function(state_496465){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto____1.call(this,state_496465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_496475 = f__38813__auto__.call(null);
(statearr_496475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_496475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1489290130085