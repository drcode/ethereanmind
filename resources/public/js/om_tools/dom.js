// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__31951__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__31951__auto__){
return or__31951__auto__;
} else {
var G__41485 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__41485) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__41488 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__41488) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__41494){
var vec__41495 = p__41494;
var k = cljs.core.nth.call(null,vec__41495,(0),null);
var v = cljs.core.nth.call(null,vec__41495,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__31951__auto__ = React.isValidElement;
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__41501 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__41501,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__41501,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args41504 = [];
var len__33026__auto___42149 = arguments.length;
var i__33027__auto___42150 = (0);
while(true){
if((i__33027__auto___42150 < len__33026__auto___42149)){
args41504.push((arguments[i__33027__auto___42150]));

var G__42151 = (i__33027__auto___42150 + (1));
i__33027__auto___42150 = G__42151;
continue;
} else {
}
break;
}

var G__41508 = args41504.length;
switch (G__41508) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41504.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq41505){
var G__41506 = cljs.core.first.call(null,seq41505);
var seq41505__$1 = cljs.core.next.call(null,seq41505);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__41506,seq41505__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args41509 = [];
var len__33026__auto___42153 = arguments.length;
var i__33027__auto___42154 = (0);
while(true){
if((i__33027__auto___42154 < len__33026__auto___42153)){
args41509.push((arguments[i__33027__auto___42154]));

var G__42155 = (i__33027__auto___42154 + (1));
i__33027__auto___42154 = G__42155;
continue;
} else {
}
break;
}

var G__41513 = args41509.length;
switch (G__41513) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41509.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq41510){
var G__41511 = cljs.core.first.call(null,seq41510);
var seq41510__$1 = cljs.core.next.call(null,seq41510);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__41511,seq41510__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args41514 = [];
var len__33026__auto___42157 = arguments.length;
var i__33027__auto___42158 = (0);
while(true){
if((i__33027__auto___42158 < len__33026__auto___42157)){
args41514.push((arguments[i__33027__auto___42158]));

var G__42159 = (i__33027__auto___42158 + (1));
i__33027__auto___42158 = G__42159;
continue;
} else {
}
break;
}

var G__41518 = args41514.length;
switch (G__41518) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41514.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq41515){
var G__41516 = cljs.core.first.call(null,seq41515);
var seq41515__$1 = cljs.core.next.call(null,seq41515);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__41516,seq41515__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args41519 = [];
var len__33026__auto___42161 = arguments.length;
var i__33027__auto___42162 = (0);
while(true){
if((i__33027__auto___42162 < len__33026__auto___42161)){
args41519.push((arguments[i__33027__auto___42162]));

var G__42163 = (i__33027__auto___42162 + (1));
i__33027__auto___42162 = G__42163;
continue;
} else {
}
break;
}

var G__41523 = args41519.length;
switch (G__41523) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41519.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq41520){
var G__41521 = cljs.core.first.call(null,seq41520);
var seq41520__$1 = cljs.core.next.call(null,seq41520);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__41521,seq41520__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args41524 = [];
var len__33026__auto___42165 = arguments.length;
var i__33027__auto___42166 = (0);
while(true){
if((i__33027__auto___42166 < len__33026__auto___42165)){
args41524.push((arguments[i__33027__auto___42166]));

var G__42167 = (i__33027__auto___42166 + (1));
i__33027__auto___42166 = G__42167;
continue;
} else {
}
break;
}

var G__41528 = args41524.length;
switch (G__41528) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41524.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq41525){
var G__41526 = cljs.core.first.call(null,seq41525);
var seq41525__$1 = cljs.core.next.call(null,seq41525);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__41526,seq41525__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args41529 = [];
var len__33026__auto___42169 = arguments.length;
var i__33027__auto___42170 = (0);
while(true){
if((i__33027__auto___42170 < len__33026__auto___42169)){
args41529.push((arguments[i__33027__auto___42170]));

var G__42171 = (i__33027__auto___42170 + (1));
i__33027__auto___42170 = G__42171;
continue;
} else {
}
break;
}

var G__41533 = args41529.length;
switch (G__41533) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41529.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq41530){
var G__41531 = cljs.core.first.call(null,seq41530);
var seq41530__$1 = cljs.core.next.call(null,seq41530);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__41531,seq41530__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args41534 = [];
var len__33026__auto___42173 = arguments.length;
var i__33027__auto___42174 = (0);
while(true){
if((i__33027__auto___42174 < len__33026__auto___42173)){
args41534.push((arguments[i__33027__auto___42174]));

var G__42175 = (i__33027__auto___42174 + (1));
i__33027__auto___42174 = G__42175;
continue;
} else {
}
break;
}

var G__41538 = args41534.length;
switch (G__41538) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41534.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq41535){
var G__41536 = cljs.core.first.call(null,seq41535);
var seq41535__$1 = cljs.core.next.call(null,seq41535);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__41536,seq41535__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args41539 = [];
var len__33026__auto___42177 = arguments.length;
var i__33027__auto___42178 = (0);
while(true){
if((i__33027__auto___42178 < len__33026__auto___42177)){
args41539.push((arguments[i__33027__auto___42178]));

var G__42179 = (i__33027__auto___42178 + (1));
i__33027__auto___42178 = G__42179;
continue;
} else {
}
break;
}

var G__41543 = args41539.length;
switch (G__41543) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41539.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq41540){
var G__41541 = cljs.core.first.call(null,seq41540);
var seq41540__$1 = cljs.core.next.call(null,seq41540);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__41541,seq41540__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args41544 = [];
var len__33026__auto___42181 = arguments.length;
var i__33027__auto___42182 = (0);
while(true){
if((i__33027__auto___42182 < len__33026__auto___42181)){
args41544.push((arguments[i__33027__auto___42182]));

var G__42183 = (i__33027__auto___42182 + (1));
i__33027__auto___42182 = G__42183;
continue;
} else {
}
break;
}

var G__41548 = args41544.length;
switch (G__41548) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41544.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq41545){
var G__41546 = cljs.core.first.call(null,seq41545);
var seq41545__$1 = cljs.core.next.call(null,seq41545);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__41546,seq41545__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args41549 = [];
var len__33026__auto___42185 = arguments.length;
var i__33027__auto___42186 = (0);
while(true){
if((i__33027__auto___42186 < len__33026__auto___42185)){
args41549.push((arguments[i__33027__auto___42186]));

var G__42187 = (i__33027__auto___42186 + (1));
i__33027__auto___42186 = G__42187;
continue;
} else {
}
break;
}

var G__41553 = args41549.length;
switch (G__41553) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41549.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq41550){
var G__41551 = cljs.core.first.call(null,seq41550);
var seq41550__$1 = cljs.core.next.call(null,seq41550);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__41551,seq41550__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args41554 = [];
var len__33026__auto___42189 = arguments.length;
var i__33027__auto___42190 = (0);
while(true){
if((i__33027__auto___42190 < len__33026__auto___42189)){
args41554.push((arguments[i__33027__auto___42190]));

var G__42191 = (i__33027__auto___42190 + (1));
i__33027__auto___42190 = G__42191;
continue;
} else {
}
break;
}

var G__41558 = args41554.length;
switch (G__41558) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41554.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq41555){
var G__41556 = cljs.core.first.call(null,seq41555);
var seq41555__$1 = cljs.core.next.call(null,seq41555);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__41556,seq41555__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args41559 = [];
var len__33026__auto___42193 = arguments.length;
var i__33027__auto___42194 = (0);
while(true){
if((i__33027__auto___42194 < len__33026__auto___42193)){
args41559.push((arguments[i__33027__auto___42194]));

var G__42195 = (i__33027__auto___42194 + (1));
i__33027__auto___42194 = G__42195;
continue;
} else {
}
break;
}

var G__41563 = args41559.length;
switch (G__41563) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41559.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq41560){
var G__41561 = cljs.core.first.call(null,seq41560);
var seq41560__$1 = cljs.core.next.call(null,seq41560);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__41561,seq41560__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args41564 = [];
var len__33026__auto___42197 = arguments.length;
var i__33027__auto___42198 = (0);
while(true){
if((i__33027__auto___42198 < len__33026__auto___42197)){
args41564.push((arguments[i__33027__auto___42198]));

var G__42199 = (i__33027__auto___42198 + (1));
i__33027__auto___42198 = G__42199;
continue;
} else {
}
break;
}

var G__41568 = args41564.length;
switch (G__41568) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41564.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq41565){
var G__41566 = cljs.core.first.call(null,seq41565);
var seq41565__$1 = cljs.core.next.call(null,seq41565);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__41566,seq41565__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args41569 = [];
var len__33026__auto___42201 = arguments.length;
var i__33027__auto___42202 = (0);
while(true){
if((i__33027__auto___42202 < len__33026__auto___42201)){
args41569.push((arguments[i__33027__auto___42202]));

var G__42203 = (i__33027__auto___42202 + (1));
i__33027__auto___42202 = G__42203;
continue;
} else {
}
break;
}

var G__41573 = args41569.length;
switch (G__41573) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41569.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq41570){
var G__41571 = cljs.core.first.call(null,seq41570);
var seq41570__$1 = cljs.core.next.call(null,seq41570);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__41571,seq41570__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args41574 = [];
var len__33026__auto___42205 = arguments.length;
var i__33027__auto___42206 = (0);
while(true){
if((i__33027__auto___42206 < len__33026__auto___42205)){
args41574.push((arguments[i__33027__auto___42206]));

var G__42207 = (i__33027__auto___42206 + (1));
i__33027__auto___42206 = G__42207;
continue;
} else {
}
break;
}

var G__41578 = args41574.length;
switch (G__41578) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41574.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq41575){
var G__41576 = cljs.core.first.call(null,seq41575);
var seq41575__$1 = cljs.core.next.call(null,seq41575);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__41576,seq41575__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args41579 = [];
var len__33026__auto___42209 = arguments.length;
var i__33027__auto___42210 = (0);
while(true){
if((i__33027__auto___42210 < len__33026__auto___42209)){
args41579.push((arguments[i__33027__auto___42210]));

var G__42211 = (i__33027__auto___42210 + (1));
i__33027__auto___42210 = G__42211;
continue;
} else {
}
break;
}

var G__41583 = args41579.length;
switch (G__41583) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41579.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq41580){
var G__41581 = cljs.core.first.call(null,seq41580);
var seq41580__$1 = cljs.core.next.call(null,seq41580);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__41581,seq41580__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args41584 = [];
var len__33026__auto___42213 = arguments.length;
var i__33027__auto___42214 = (0);
while(true){
if((i__33027__auto___42214 < len__33026__auto___42213)){
args41584.push((arguments[i__33027__auto___42214]));

var G__42215 = (i__33027__auto___42214 + (1));
i__33027__auto___42214 = G__42215;
continue;
} else {
}
break;
}

var G__41588 = args41584.length;
switch (G__41588) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41584.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq41585){
var G__41586 = cljs.core.first.call(null,seq41585);
var seq41585__$1 = cljs.core.next.call(null,seq41585);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__41586,seq41585__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args41589 = [];
var len__33026__auto___42217 = arguments.length;
var i__33027__auto___42218 = (0);
while(true){
if((i__33027__auto___42218 < len__33026__auto___42217)){
args41589.push((arguments[i__33027__auto___42218]));

var G__42219 = (i__33027__auto___42218 + (1));
i__33027__auto___42218 = G__42219;
continue;
} else {
}
break;
}

var G__41593 = args41589.length;
switch (G__41593) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41589.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq41590){
var G__41591 = cljs.core.first.call(null,seq41590);
var seq41590__$1 = cljs.core.next.call(null,seq41590);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__41591,seq41590__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args41594 = [];
var len__33026__auto___42221 = arguments.length;
var i__33027__auto___42222 = (0);
while(true){
if((i__33027__auto___42222 < len__33026__auto___42221)){
args41594.push((arguments[i__33027__auto___42222]));

var G__42223 = (i__33027__auto___42222 + (1));
i__33027__auto___42222 = G__42223;
continue;
} else {
}
break;
}

var G__41598 = args41594.length;
switch (G__41598) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41594.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq41595){
var G__41596 = cljs.core.first.call(null,seq41595);
var seq41595__$1 = cljs.core.next.call(null,seq41595);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__41596,seq41595__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args41599 = [];
var len__33026__auto___42225 = arguments.length;
var i__33027__auto___42226 = (0);
while(true){
if((i__33027__auto___42226 < len__33026__auto___42225)){
args41599.push((arguments[i__33027__auto___42226]));

var G__42227 = (i__33027__auto___42226 + (1));
i__33027__auto___42226 = G__42227;
continue;
} else {
}
break;
}

var G__41603 = args41599.length;
switch (G__41603) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41599.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq41600){
var G__41601 = cljs.core.first.call(null,seq41600);
var seq41600__$1 = cljs.core.next.call(null,seq41600);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__41601,seq41600__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args41604 = [];
var len__33026__auto___42229 = arguments.length;
var i__33027__auto___42230 = (0);
while(true){
if((i__33027__auto___42230 < len__33026__auto___42229)){
args41604.push((arguments[i__33027__auto___42230]));

var G__42231 = (i__33027__auto___42230 + (1));
i__33027__auto___42230 = G__42231;
continue;
} else {
}
break;
}

var G__41608 = args41604.length;
switch (G__41608) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41604.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq41605){
var G__41606 = cljs.core.first.call(null,seq41605);
var seq41605__$1 = cljs.core.next.call(null,seq41605);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__41606,seq41605__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args41609 = [];
var len__33026__auto___42233 = arguments.length;
var i__33027__auto___42234 = (0);
while(true){
if((i__33027__auto___42234 < len__33026__auto___42233)){
args41609.push((arguments[i__33027__auto___42234]));

var G__42235 = (i__33027__auto___42234 + (1));
i__33027__auto___42234 = G__42235;
continue;
} else {
}
break;
}

var G__41613 = args41609.length;
switch (G__41613) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41609.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq41610){
var G__41611 = cljs.core.first.call(null,seq41610);
var seq41610__$1 = cljs.core.next.call(null,seq41610);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__41611,seq41610__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args41614 = [];
var len__33026__auto___42237 = arguments.length;
var i__33027__auto___42238 = (0);
while(true){
if((i__33027__auto___42238 < len__33026__auto___42237)){
args41614.push((arguments[i__33027__auto___42238]));

var G__42239 = (i__33027__auto___42238 + (1));
i__33027__auto___42238 = G__42239;
continue;
} else {
}
break;
}

var G__41618 = args41614.length;
switch (G__41618) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41614.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq41615){
var G__41616 = cljs.core.first.call(null,seq41615);
var seq41615__$1 = cljs.core.next.call(null,seq41615);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__41616,seq41615__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args41619 = [];
var len__33026__auto___42241 = arguments.length;
var i__33027__auto___42242 = (0);
while(true){
if((i__33027__auto___42242 < len__33026__auto___42241)){
args41619.push((arguments[i__33027__auto___42242]));

var G__42243 = (i__33027__auto___42242 + (1));
i__33027__auto___42242 = G__42243;
continue;
} else {
}
break;
}

var G__41623 = args41619.length;
switch (G__41623) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41619.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq41620){
var G__41621 = cljs.core.first.call(null,seq41620);
var seq41620__$1 = cljs.core.next.call(null,seq41620);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__41621,seq41620__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args41624 = [];
var len__33026__auto___42245 = arguments.length;
var i__33027__auto___42246 = (0);
while(true){
if((i__33027__auto___42246 < len__33026__auto___42245)){
args41624.push((arguments[i__33027__auto___42246]));

var G__42247 = (i__33027__auto___42246 + (1));
i__33027__auto___42246 = G__42247;
continue;
} else {
}
break;
}

var G__41628 = args41624.length;
switch (G__41628) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41624.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq41625){
var G__41626 = cljs.core.first.call(null,seq41625);
var seq41625__$1 = cljs.core.next.call(null,seq41625);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__41626,seq41625__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args41629 = [];
var len__33026__auto___42249 = arguments.length;
var i__33027__auto___42250 = (0);
while(true){
if((i__33027__auto___42250 < len__33026__auto___42249)){
args41629.push((arguments[i__33027__auto___42250]));

var G__42251 = (i__33027__auto___42250 + (1));
i__33027__auto___42250 = G__42251;
continue;
} else {
}
break;
}

var G__41633 = args41629.length;
switch (G__41633) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41629.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq41630){
var G__41631 = cljs.core.first.call(null,seq41630);
var seq41630__$1 = cljs.core.next.call(null,seq41630);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__41631,seq41630__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args41634 = [];
var len__33026__auto___42253 = arguments.length;
var i__33027__auto___42254 = (0);
while(true){
if((i__33027__auto___42254 < len__33026__auto___42253)){
args41634.push((arguments[i__33027__auto___42254]));

var G__42255 = (i__33027__auto___42254 + (1));
i__33027__auto___42254 = G__42255;
continue;
} else {
}
break;
}

var G__41638 = args41634.length;
switch (G__41638) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41634.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq41635){
var G__41636 = cljs.core.first.call(null,seq41635);
var seq41635__$1 = cljs.core.next.call(null,seq41635);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__41636,seq41635__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args41639 = [];
var len__33026__auto___42257 = arguments.length;
var i__33027__auto___42258 = (0);
while(true){
if((i__33027__auto___42258 < len__33026__auto___42257)){
args41639.push((arguments[i__33027__auto___42258]));

var G__42259 = (i__33027__auto___42258 + (1));
i__33027__auto___42258 = G__42259;
continue;
} else {
}
break;
}

var G__41643 = args41639.length;
switch (G__41643) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41639.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq41640){
var G__41641 = cljs.core.first.call(null,seq41640);
var seq41640__$1 = cljs.core.next.call(null,seq41640);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__41641,seq41640__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args41644 = [];
var len__33026__auto___42261 = arguments.length;
var i__33027__auto___42262 = (0);
while(true){
if((i__33027__auto___42262 < len__33026__auto___42261)){
args41644.push((arguments[i__33027__auto___42262]));

var G__42263 = (i__33027__auto___42262 + (1));
i__33027__auto___42262 = G__42263;
continue;
} else {
}
break;
}

var G__41648 = args41644.length;
switch (G__41648) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41644.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq41645){
var G__41646 = cljs.core.first.call(null,seq41645);
var seq41645__$1 = cljs.core.next.call(null,seq41645);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__41646,seq41645__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args41649 = [];
var len__33026__auto___42265 = arguments.length;
var i__33027__auto___42266 = (0);
while(true){
if((i__33027__auto___42266 < len__33026__auto___42265)){
args41649.push((arguments[i__33027__auto___42266]));

var G__42267 = (i__33027__auto___42266 + (1));
i__33027__auto___42266 = G__42267;
continue;
} else {
}
break;
}

var G__41653 = args41649.length;
switch (G__41653) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41649.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq41650){
var G__41651 = cljs.core.first.call(null,seq41650);
var seq41650__$1 = cljs.core.next.call(null,seq41650);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__41651,seq41650__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args41654 = [];
var len__33026__auto___42269 = arguments.length;
var i__33027__auto___42270 = (0);
while(true){
if((i__33027__auto___42270 < len__33026__auto___42269)){
args41654.push((arguments[i__33027__auto___42270]));

var G__42271 = (i__33027__auto___42270 + (1));
i__33027__auto___42270 = G__42271;
continue;
} else {
}
break;
}

var G__41658 = args41654.length;
switch (G__41658) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41654.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq41655){
var G__41656 = cljs.core.first.call(null,seq41655);
var seq41655__$1 = cljs.core.next.call(null,seq41655);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__41656,seq41655__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args41659 = [];
var len__33026__auto___42273 = arguments.length;
var i__33027__auto___42274 = (0);
while(true){
if((i__33027__auto___42274 < len__33026__auto___42273)){
args41659.push((arguments[i__33027__auto___42274]));

var G__42275 = (i__33027__auto___42274 + (1));
i__33027__auto___42274 = G__42275;
continue;
} else {
}
break;
}

var G__41663 = args41659.length;
switch (G__41663) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41659.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq41660){
var G__41661 = cljs.core.first.call(null,seq41660);
var seq41660__$1 = cljs.core.next.call(null,seq41660);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__41661,seq41660__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args41669 = [];
var len__33026__auto___42277 = arguments.length;
var i__33027__auto___42278 = (0);
while(true){
if((i__33027__auto___42278 < len__33026__auto___42277)){
args41669.push((arguments[i__33027__auto___42278]));

var G__42279 = (i__33027__auto___42278 + (1));
i__33027__auto___42278 = G__42279;
continue;
} else {
}
break;
}

var G__41673 = args41669.length;
switch (G__41673) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41669.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq41670){
var G__41671 = cljs.core.first.call(null,seq41670);
var seq41670__$1 = cljs.core.next.call(null,seq41670);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__41671,seq41670__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args41674 = [];
var len__33026__auto___42281 = arguments.length;
var i__33027__auto___42282 = (0);
while(true){
if((i__33027__auto___42282 < len__33026__auto___42281)){
args41674.push((arguments[i__33027__auto___42282]));

var G__42283 = (i__33027__auto___42282 + (1));
i__33027__auto___42282 = G__42283;
continue;
} else {
}
break;
}

var G__41678 = args41674.length;
switch (G__41678) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41674.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq41675){
var G__41676 = cljs.core.first.call(null,seq41675);
var seq41675__$1 = cljs.core.next.call(null,seq41675);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__41676,seq41675__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args41679 = [];
var len__33026__auto___42285 = arguments.length;
var i__33027__auto___42286 = (0);
while(true){
if((i__33027__auto___42286 < len__33026__auto___42285)){
args41679.push((arguments[i__33027__auto___42286]));

var G__42287 = (i__33027__auto___42286 + (1));
i__33027__auto___42286 = G__42287;
continue;
} else {
}
break;
}

var G__41683 = args41679.length;
switch (G__41683) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41679.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq41680){
var G__41681 = cljs.core.first.call(null,seq41680);
var seq41680__$1 = cljs.core.next.call(null,seq41680);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__41681,seq41680__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args41684 = [];
var len__33026__auto___42289 = arguments.length;
var i__33027__auto___42290 = (0);
while(true){
if((i__33027__auto___42290 < len__33026__auto___42289)){
args41684.push((arguments[i__33027__auto___42290]));

var G__42291 = (i__33027__auto___42290 + (1));
i__33027__auto___42290 = G__42291;
continue;
} else {
}
break;
}

var G__41688 = args41684.length;
switch (G__41688) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41684.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq41685){
var G__41686 = cljs.core.first.call(null,seq41685);
var seq41685__$1 = cljs.core.next.call(null,seq41685);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__41686,seq41685__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args41689 = [];
var len__33026__auto___42293 = arguments.length;
var i__33027__auto___42294 = (0);
while(true){
if((i__33027__auto___42294 < len__33026__auto___42293)){
args41689.push((arguments[i__33027__auto___42294]));

var G__42295 = (i__33027__auto___42294 + (1));
i__33027__auto___42294 = G__42295;
continue;
} else {
}
break;
}

var G__41693 = args41689.length;
switch (G__41693) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41689.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq41690){
var G__41691 = cljs.core.first.call(null,seq41690);
var seq41690__$1 = cljs.core.next.call(null,seq41690);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__41691,seq41690__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args41694 = [];
var len__33026__auto___42297 = arguments.length;
var i__33027__auto___42298 = (0);
while(true){
if((i__33027__auto___42298 < len__33026__auto___42297)){
args41694.push((arguments[i__33027__auto___42298]));

var G__42299 = (i__33027__auto___42298 + (1));
i__33027__auto___42298 = G__42299;
continue;
} else {
}
break;
}

var G__41698 = args41694.length;
switch (G__41698) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41694.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq41695){
var G__41696 = cljs.core.first.call(null,seq41695);
var seq41695__$1 = cljs.core.next.call(null,seq41695);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__41696,seq41695__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args41699 = [];
var len__33026__auto___42301 = arguments.length;
var i__33027__auto___42302 = (0);
while(true){
if((i__33027__auto___42302 < len__33026__auto___42301)){
args41699.push((arguments[i__33027__auto___42302]));

var G__42303 = (i__33027__auto___42302 + (1));
i__33027__auto___42302 = G__42303;
continue;
} else {
}
break;
}

var G__41703 = args41699.length;
switch (G__41703) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41699.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq41700){
var G__41701 = cljs.core.first.call(null,seq41700);
var seq41700__$1 = cljs.core.next.call(null,seq41700);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__41701,seq41700__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args41704 = [];
var len__33026__auto___42305 = arguments.length;
var i__33027__auto___42306 = (0);
while(true){
if((i__33027__auto___42306 < len__33026__auto___42305)){
args41704.push((arguments[i__33027__auto___42306]));

var G__42307 = (i__33027__auto___42306 + (1));
i__33027__auto___42306 = G__42307;
continue;
} else {
}
break;
}

var G__41708 = args41704.length;
switch (G__41708) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41704.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq41705){
var G__41706 = cljs.core.first.call(null,seq41705);
var seq41705__$1 = cljs.core.next.call(null,seq41705);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__41706,seq41705__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args41709 = [];
var len__33026__auto___42309 = arguments.length;
var i__33027__auto___42310 = (0);
while(true){
if((i__33027__auto___42310 < len__33026__auto___42309)){
args41709.push((arguments[i__33027__auto___42310]));

var G__42311 = (i__33027__auto___42310 + (1));
i__33027__auto___42310 = G__42311;
continue;
} else {
}
break;
}

var G__41713 = args41709.length;
switch (G__41713) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41709.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq41710){
var G__41711 = cljs.core.first.call(null,seq41710);
var seq41710__$1 = cljs.core.next.call(null,seq41710);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__41711,seq41710__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args41714 = [];
var len__33026__auto___42313 = arguments.length;
var i__33027__auto___42314 = (0);
while(true){
if((i__33027__auto___42314 < len__33026__auto___42313)){
args41714.push((arguments[i__33027__auto___42314]));

var G__42315 = (i__33027__auto___42314 + (1));
i__33027__auto___42314 = G__42315;
continue;
} else {
}
break;
}

var G__41718 = args41714.length;
switch (G__41718) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41714.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq41715){
var G__41716 = cljs.core.first.call(null,seq41715);
var seq41715__$1 = cljs.core.next.call(null,seq41715);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__41716,seq41715__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args41719 = [];
var len__33026__auto___42317 = arguments.length;
var i__33027__auto___42318 = (0);
while(true){
if((i__33027__auto___42318 < len__33026__auto___42317)){
args41719.push((arguments[i__33027__auto___42318]));

var G__42319 = (i__33027__auto___42318 + (1));
i__33027__auto___42318 = G__42319;
continue;
} else {
}
break;
}

var G__41723 = args41719.length;
switch (G__41723) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41719.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq41720){
var G__41721 = cljs.core.first.call(null,seq41720);
var seq41720__$1 = cljs.core.next.call(null,seq41720);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__41721,seq41720__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args41724 = [];
var len__33026__auto___42321 = arguments.length;
var i__33027__auto___42322 = (0);
while(true){
if((i__33027__auto___42322 < len__33026__auto___42321)){
args41724.push((arguments[i__33027__auto___42322]));

var G__42323 = (i__33027__auto___42322 + (1));
i__33027__auto___42322 = G__42323;
continue;
} else {
}
break;
}

var G__41728 = args41724.length;
switch (G__41728) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41724.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq41725){
var G__41726 = cljs.core.first.call(null,seq41725);
var seq41725__$1 = cljs.core.next.call(null,seq41725);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__41726,seq41725__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args41729 = [];
var len__33026__auto___42325 = arguments.length;
var i__33027__auto___42326 = (0);
while(true){
if((i__33027__auto___42326 < len__33026__auto___42325)){
args41729.push((arguments[i__33027__auto___42326]));

var G__42327 = (i__33027__auto___42326 + (1));
i__33027__auto___42326 = G__42327;
continue;
} else {
}
break;
}

var G__41733 = args41729.length;
switch (G__41733) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41729.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq41730){
var G__41731 = cljs.core.first.call(null,seq41730);
var seq41730__$1 = cljs.core.next.call(null,seq41730);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__41731,seq41730__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args41734 = [];
var len__33026__auto___42329 = arguments.length;
var i__33027__auto___42330 = (0);
while(true){
if((i__33027__auto___42330 < len__33026__auto___42329)){
args41734.push((arguments[i__33027__auto___42330]));

var G__42331 = (i__33027__auto___42330 + (1));
i__33027__auto___42330 = G__42331;
continue;
} else {
}
break;
}

var G__41738 = args41734.length;
switch (G__41738) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41734.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq41735){
var G__41736 = cljs.core.first.call(null,seq41735);
var seq41735__$1 = cljs.core.next.call(null,seq41735);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__41736,seq41735__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args41739 = [];
var len__33026__auto___42333 = arguments.length;
var i__33027__auto___42334 = (0);
while(true){
if((i__33027__auto___42334 < len__33026__auto___42333)){
args41739.push((arguments[i__33027__auto___42334]));

var G__42335 = (i__33027__auto___42334 + (1));
i__33027__auto___42334 = G__42335;
continue;
} else {
}
break;
}

var G__41743 = args41739.length;
switch (G__41743) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41739.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq41740){
var G__41741 = cljs.core.first.call(null,seq41740);
var seq41740__$1 = cljs.core.next.call(null,seq41740);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__41741,seq41740__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args41744 = [];
var len__33026__auto___42337 = arguments.length;
var i__33027__auto___42338 = (0);
while(true){
if((i__33027__auto___42338 < len__33026__auto___42337)){
args41744.push((arguments[i__33027__auto___42338]));

var G__42339 = (i__33027__auto___42338 + (1));
i__33027__auto___42338 = G__42339;
continue;
} else {
}
break;
}

var G__41748 = args41744.length;
switch (G__41748) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41744.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq41745){
var G__41746 = cljs.core.first.call(null,seq41745);
var seq41745__$1 = cljs.core.next.call(null,seq41745);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__41746,seq41745__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args41749 = [];
var len__33026__auto___42341 = arguments.length;
var i__33027__auto___42342 = (0);
while(true){
if((i__33027__auto___42342 < len__33026__auto___42341)){
args41749.push((arguments[i__33027__auto___42342]));

var G__42343 = (i__33027__auto___42342 + (1));
i__33027__auto___42342 = G__42343;
continue;
} else {
}
break;
}

var G__41753 = args41749.length;
switch (G__41753) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41749.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq41750){
var G__41751 = cljs.core.first.call(null,seq41750);
var seq41750__$1 = cljs.core.next.call(null,seq41750);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__41751,seq41750__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args41754 = [];
var len__33026__auto___42345 = arguments.length;
var i__33027__auto___42346 = (0);
while(true){
if((i__33027__auto___42346 < len__33026__auto___42345)){
args41754.push((arguments[i__33027__auto___42346]));

var G__42347 = (i__33027__auto___42346 + (1));
i__33027__auto___42346 = G__42347;
continue;
} else {
}
break;
}

var G__41758 = args41754.length;
switch (G__41758) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41754.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq41755){
var G__41756 = cljs.core.first.call(null,seq41755);
var seq41755__$1 = cljs.core.next.call(null,seq41755);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__41756,seq41755__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args41759 = [];
var len__33026__auto___42349 = arguments.length;
var i__33027__auto___42350 = (0);
while(true){
if((i__33027__auto___42350 < len__33026__auto___42349)){
args41759.push((arguments[i__33027__auto___42350]));

var G__42351 = (i__33027__auto___42350 + (1));
i__33027__auto___42350 = G__42351;
continue;
} else {
}
break;
}

var G__41763 = args41759.length;
switch (G__41763) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41759.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq41760){
var G__41761 = cljs.core.first.call(null,seq41760);
var seq41760__$1 = cljs.core.next.call(null,seq41760);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__41761,seq41760__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args41764 = [];
var len__33026__auto___42353 = arguments.length;
var i__33027__auto___42354 = (0);
while(true){
if((i__33027__auto___42354 < len__33026__auto___42353)){
args41764.push((arguments[i__33027__auto___42354]));

var G__42355 = (i__33027__auto___42354 + (1));
i__33027__auto___42354 = G__42355;
continue;
} else {
}
break;
}

var G__41768 = args41764.length;
switch (G__41768) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41764.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq41765){
var G__41766 = cljs.core.first.call(null,seq41765);
var seq41765__$1 = cljs.core.next.call(null,seq41765);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__41766,seq41765__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args41769 = [];
var len__33026__auto___42357 = arguments.length;
var i__33027__auto___42358 = (0);
while(true){
if((i__33027__auto___42358 < len__33026__auto___42357)){
args41769.push((arguments[i__33027__auto___42358]));

var G__42359 = (i__33027__auto___42358 + (1));
i__33027__auto___42358 = G__42359;
continue;
} else {
}
break;
}

var G__41773 = args41769.length;
switch (G__41773) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41769.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq41770){
var G__41771 = cljs.core.first.call(null,seq41770);
var seq41770__$1 = cljs.core.next.call(null,seq41770);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__41771,seq41770__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args41774 = [];
var len__33026__auto___42361 = arguments.length;
var i__33027__auto___42362 = (0);
while(true){
if((i__33027__auto___42362 < len__33026__auto___42361)){
args41774.push((arguments[i__33027__auto___42362]));

var G__42363 = (i__33027__auto___42362 + (1));
i__33027__auto___42362 = G__42363;
continue;
} else {
}
break;
}

var G__41778 = args41774.length;
switch (G__41778) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41774.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq41775){
var G__41776 = cljs.core.first.call(null,seq41775);
var seq41775__$1 = cljs.core.next.call(null,seq41775);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__41776,seq41775__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args41779 = [];
var len__33026__auto___42365 = arguments.length;
var i__33027__auto___42366 = (0);
while(true){
if((i__33027__auto___42366 < len__33026__auto___42365)){
args41779.push((arguments[i__33027__auto___42366]));

var G__42367 = (i__33027__auto___42366 + (1));
i__33027__auto___42366 = G__42367;
continue;
} else {
}
break;
}

var G__41783 = args41779.length;
switch (G__41783) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41779.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq41780){
var G__41781 = cljs.core.first.call(null,seq41780);
var seq41780__$1 = cljs.core.next.call(null,seq41780);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__41781,seq41780__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args41784 = [];
var len__33026__auto___42369 = arguments.length;
var i__33027__auto___42370 = (0);
while(true){
if((i__33027__auto___42370 < len__33026__auto___42369)){
args41784.push((arguments[i__33027__auto___42370]));

var G__42371 = (i__33027__auto___42370 + (1));
i__33027__auto___42370 = G__42371;
continue;
} else {
}
break;
}

var G__41788 = args41784.length;
switch (G__41788) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41784.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq41785){
var G__41786 = cljs.core.first.call(null,seq41785);
var seq41785__$1 = cljs.core.next.call(null,seq41785);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__41786,seq41785__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args41789 = [];
var len__33026__auto___42373 = arguments.length;
var i__33027__auto___42374 = (0);
while(true){
if((i__33027__auto___42374 < len__33026__auto___42373)){
args41789.push((arguments[i__33027__auto___42374]));

var G__42375 = (i__33027__auto___42374 + (1));
i__33027__auto___42374 = G__42375;
continue;
} else {
}
break;
}

var G__41793 = args41789.length;
switch (G__41793) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41789.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq41790){
var G__41791 = cljs.core.first.call(null,seq41790);
var seq41790__$1 = cljs.core.next.call(null,seq41790);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__41791,seq41790__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args41794 = [];
var len__33026__auto___42377 = arguments.length;
var i__33027__auto___42378 = (0);
while(true){
if((i__33027__auto___42378 < len__33026__auto___42377)){
args41794.push((arguments[i__33027__auto___42378]));

var G__42379 = (i__33027__auto___42378 + (1));
i__33027__auto___42378 = G__42379;
continue;
} else {
}
break;
}

var G__41798 = args41794.length;
switch (G__41798) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41794.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq41795){
var G__41796 = cljs.core.first.call(null,seq41795);
var seq41795__$1 = cljs.core.next.call(null,seq41795);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__41796,seq41795__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args41799 = [];
var len__33026__auto___42381 = arguments.length;
var i__33027__auto___42382 = (0);
while(true){
if((i__33027__auto___42382 < len__33026__auto___42381)){
args41799.push((arguments[i__33027__auto___42382]));

var G__42383 = (i__33027__auto___42382 + (1));
i__33027__auto___42382 = G__42383;
continue;
} else {
}
break;
}

var G__41803 = args41799.length;
switch (G__41803) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41799.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq41800){
var G__41801 = cljs.core.first.call(null,seq41800);
var seq41800__$1 = cljs.core.next.call(null,seq41800);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__41801,seq41800__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args41804 = [];
var len__33026__auto___42385 = arguments.length;
var i__33027__auto___42386 = (0);
while(true){
if((i__33027__auto___42386 < len__33026__auto___42385)){
args41804.push((arguments[i__33027__auto___42386]));

var G__42387 = (i__33027__auto___42386 + (1));
i__33027__auto___42386 = G__42387;
continue;
} else {
}
break;
}

var G__41808 = args41804.length;
switch (G__41808) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41804.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq41805){
var G__41806 = cljs.core.first.call(null,seq41805);
var seq41805__$1 = cljs.core.next.call(null,seq41805);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__41806,seq41805__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args41809 = [];
var len__33026__auto___42389 = arguments.length;
var i__33027__auto___42390 = (0);
while(true){
if((i__33027__auto___42390 < len__33026__auto___42389)){
args41809.push((arguments[i__33027__auto___42390]));

var G__42391 = (i__33027__auto___42390 + (1));
i__33027__auto___42390 = G__42391;
continue;
} else {
}
break;
}

var G__41813 = args41809.length;
switch (G__41813) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41809.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq41810){
var G__41811 = cljs.core.first.call(null,seq41810);
var seq41810__$1 = cljs.core.next.call(null,seq41810);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__41811,seq41810__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args41814 = [];
var len__33026__auto___42393 = arguments.length;
var i__33027__auto___42394 = (0);
while(true){
if((i__33027__auto___42394 < len__33026__auto___42393)){
args41814.push((arguments[i__33027__auto___42394]));

var G__42395 = (i__33027__auto___42394 + (1));
i__33027__auto___42394 = G__42395;
continue;
} else {
}
break;
}

var G__41818 = args41814.length;
switch (G__41818) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41814.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq41815){
var G__41816 = cljs.core.first.call(null,seq41815);
var seq41815__$1 = cljs.core.next.call(null,seq41815);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__41816,seq41815__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args41819 = [];
var len__33026__auto___42397 = arguments.length;
var i__33027__auto___42398 = (0);
while(true){
if((i__33027__auto___42398 < len__33026__auto___42397)){
args41819.push((arguments[i__33027__auto___42398]));

var G__42399 = (i__33027__auto___42398 + (1));
i__33027__auto___42398 = G__42399;
continue;
} else {
}
break;
}

var G__41823 = args41819.length;
switch (G__41823) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41819.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq41820){
var G__41821 = cljs.core.first.call(null,seq41820);
var seq41820__$1 = cljs.core.next.call(null,seq41820);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__41821,seq41820__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args41824 = [];
var len__33026__auto___42401 = arguments.length;
var i__33027__auto___42402 = (0);
while(true){
if((i__33027__auto___42402 < len__33026__auto___42401)){
args41824.push((arguments[i__33027__auto___42402]));

var G__42403 = (i__33027__auto___42402 + (1));
i__33027__auto___42402 = G__42403;
continue;
} else {
}
break;
}

var G__41828 = args41824.length;
switch (G__41828) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41824.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq41825){
var G__41826 = cljs.core.first.call(null,seq41825);
var seq41825__$1 = cljs.core.next.call(null,seq41825);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__41826,seq41825__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args41829 = [];
var len__33026__auto___42405 = arguments.length;
var i__33027__auto___42406 = (0);
while(true){
if((i__33027__auto___42406 < len__33026__auto___42405)){
args41829.push((arguments[i__33027__auto___42406]));

var G__42407 = (i__33027__auto___42406 + (1));
i__33027__auto___42406 = G__42407;
continue;
} else {
}
break;
}

var G__41833 = args41829.length;
switch (G__41833) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41829.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq41830){
var G__41831 = cljs.core.first.call(null,seq41830);
var seq41830__$1 = cljs.core.next.call(null,seq41830);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__41831,seq41830__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args41834 = [];
var len__33026__auto___42409 = arguments.length;
var i__33027__auto___42410 = (0);
while(true){
if((i__33027__auto___42410 < len__33026__auto___42409)){
args41834.push((arguments[i__33027__auto___42410]));

var G__42411 = (i__33027__auto___42410 + (1));
i__33027__auto___42410 = G__42411;
continue;
} else {
}
break;
}

var G__41838 = args41834.length;
switch (G__41838) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41834.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq41835){
var G__41836 = cljs.core.first.call(null,seq41835);
var seq41835__$1 = cljs.core.next.call(null,seq41835);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__41836,seq41835__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args41839 = [];
var len__33026__auto___42413 = arguments.length;
var i__33027__auto___42414 = (0);
while(true){
if((i__33027__auto___42414 < len__33026__auto___42413)){
args41839.push((arguments[i__33027__auto___42414]));

var G__42415 = (i__33027__auto___42414 + (1));
i__33027__auto___42414 = G__42415;
continue;
} else {
}
break;
}

var G__41843 = args41839.length;
switch (G__41843) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41839.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq41840){
var G__41841 = cljs.core.first.call(null,seq41840);
var seq41840__$1 = cljs.core.next.call(null,seq41840);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__41841,seq41840__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args41844 = [];
var len__33026__auto___42417 = arguments.length;
var i__33027__auto___42418 = (0);
while(true){
if((i__33027__auto___42418 < len__33026__auto___42417)){
args41844.push((arguments[i__33027__auto___42418]));

var G__42419 = (i__33027__auto___42418 + (1));
i__33027__auto___42418 = G__42419;
continue;
} else {
}
break;
}

var G__41848 = args41844.length;
switch (G__41848) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41844.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq41845){
var G__41846 = cljs.core.first.call(null,seq41845);
var seq41845__$1 = cljs.core.next.call(null,seq41845);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__41846,seq41845__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args41849 = [];
var len__33026__auto___42421 = arguments.length;
var i__33027__auto___42422 = (0);
while(true){
if((i__33027__auto___42422 < len__33026__auto___42421)){
args41849.push((arguments[i__33027__auto___42422]));

var G__42423 = (i__33027__auto___42422 + (1));
i__33027__auto___42422 = G__42423;
continue;
} else {
}
break;
}

var G__41853 = args41849.length;
switch (G__41853) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41849.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq41850){
var G__41851 = cljs.core.first.call(null,seq41850);
var seq41850__$1 = cljs.core.next.call(null,seq41850);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__41851,seq41850__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args41854 = [];
var len__33026__auto___42425 = arguments.length;
var i__33027__auto___42426 = (0);
while(true){
if((i__33027__auto___42426 < len__33026__auto___42425)){
args41854.push((arguments[i__33027__auto___42426]));

var G__42427 = (i__33027__auto___42426 + (1));
i__33027__auto___42426 = G__42427;
continue;
} else {
}
break;
}

var G__41858 = args41854.length;
switch (G__41858) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41854.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq41855){
var G__41856 = cljs.core.first.call(null,seq41855);
var seq41855__$1 = cljs.core.next.call(null,seq41855);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__41856,seq41855__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args41859 = [];
var len__33026__auto___42429 = arguments.length;
var i__33027__auto___42430 = (0);
while(true){
if((i__33027__auto___42430 < len__33026__auto___42429)){
args41859.push((arguments[i__33027__auto___42430]));

var G__42431 = (i__33027__auto___42430 + (1));
i__33027__auto___42430 = G__42431;
continue;
} else {
}
break;
}

var G__41863 = args41859.length;
switch (G__41863) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41859.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq41860){
var G__41861 = cljs.core.first.call(null,seq41860);
var seq41860__$1 = cljs.core.next.call(null,seq41860);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__41861,seq41860__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args41864 = [];
var len__33026__auto___42433 = arguments.length;
var i__33027__auto___42434 = (0);
while(true){
if((i__33027__auto___42434 < len__33026__auto___42433)){
args41864.push((arguments[i__33027__auto___42434]));

var G__42435 = (i__33027__auto___42434 + (1));
i__33027__auto___42434 = G__42435;
continue;
} else {
}
break;
}

var G__41868 = args41864.length;
switch (G__41868) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41864.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq41865){
var G__41866 = cljs.core.first.call(null,seq41865);
var seq41865__$1 = cljs.core.next.call(null,seq41865);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__41866,seq41865__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args41869 = [];
var len__33026__auto___42437 = arguments.length;
var i__33027__auto___42438 = (0);
while(true){
if((i__33027__auto___42438 < len__33026__auto___42437)){
args41869.push((arguments[i__33027__auto___42438]));

var G__42439 = (i__33027__auto___42438 + (1));
i__33027__auto___42438 = G__42439;
continue;
} else {
}
break;
}

var G__41873 = args41869.length;
switch (G__41873) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41869.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq41870){
var G__41871 = cljs.core.first.call(null,seq41870);
var seq41870__$1 = cljs.core.next.call(null,seq41870);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__41871,seq41870__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args41874 = [];
var len__33026__auto___42441 = arguments.length;
var i__33027__auto___42442 = (0);
while(true){
if((i__33027__auto___42442 < len__33026__auto___42441)){
args41874.push((arguments[i__33027__auto___42442]));

var G__42443 = (i__33027__auto___42442 + (1));
i__33027__auto___42442 = G__42443;
continue;
} else {
}
break;
}

var G__41878 = args41874.length;
switch (G__41878) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41874.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq41875){
var G__41876 = cljs.core.first.call(null,seq41875);
var seq41875__$1 = cljs.core.next.call(null,seq41875);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__41876,seq41875__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args41879 = [];
var len__33026__auto___42445 = arguments.length;
var i__33027__auto___42446 = (0);
while(true){
if((i__33027__auto___42446 < len__33026__auto___42445)){
args41879.push((arguments[i__33027__auto___42446]));

var G__42447 = (i__33027__auto___42446 + (1));
i__33027__auto___42446 = G__42447;
continue;
} else {
}
break;
}

var G__41883 = args41879.length;
switch (G__41883) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41879.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq41880){
var G__41881 = cljs.core.first.call(null,seq41880);
var seq41880__$1 = cljs.core.next.call(null,seq41880);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__41881,seq41880__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args41884 = [];
var len__33026__auto___42449 = arguments.length;
var i__33027__auto___42450 = (0);
while(true){
if((i__33027__auto___42450 < len__33026__auto___42449)){
args41884.push((arguments[i__33027__auto___42450]));

var G__42451 = (i__33027__auto___42450 + (1));
i__33027__auto___42450 = G__42451;
continue;
} else {
}
break;
}

var G__41888 = args41884.length;
switch (G__41888) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41884.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq41885){
var G__41886 = cljs.core.first.call(null,seq41885);
var seq41885__$1 = cljs.core.next.call(null,seq41885);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__41886,seq41885__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args41889 = [];
var len__33026__auto___42453 = arguments.length;
var i__33027__auto___42454 = (0);
while(true){
if((i__33027__auto___42454 < len__33026__auto___42453)){
args41889.push((arguments[i__33027__auto___42454]));

var G__42455 = (i__33027__auto___42454 + (1));
i__33027__auto___42454 = G__42455;
continue;
} else {
}
break;
}

var G__41893 = args41889.length;
switch (G__41893) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41889.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq41890){
var G__41891 = cljs.core.first.call(null,seq41890);
var seq41890__$1 = cljs.core.next.call(null,seq41890);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__41891,seq41890__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args41894 = [];
var len__33026__auto___42457 = arguments.length;
var i__33027__auto___42458 = (0);
while(true){
if((i__33027__auto___42458 < len__33026__auto___42457)){
args41894.push((arguments[i__33027__auto___42458]));

var G__42459 = (i__33027__auto___42458 + (1));
i__33027__auto___42458 = G__42459;
continue;
} else {
}
break;
}

var G__41898 = args41894.length;
switch (G__41898) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41894.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq41895){
var G__41896 = cljs.core.first.call(null,seq41895);
var seq41895__$1 = cljs.core.next.call(null,seq41895);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__41896,seq41895__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args41899 = [];
var len__33026__auto___42461 = arguments.length;
var i__33027__auto___42462 = (0);
while(true){
if((i__33027__auto___42462 < len__33026__auto___42461)){
args41899.push((arguments[i__33027__auto___42462]));

var G__42463 = (i__33027__auto___42462 + (1));
i__33027__auto___42462 = G__42463;
continue;
} else {
}
break;
}

var G__41903 = args41899.length;
switch (G__41903) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41899.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq41900){
var G__41901 = cljs.core.first.call(null,seq41900);
var seq41900__$1 = cljs.core.next.call(null,seq41900);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__41901,seq41900__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args41904 = [];
var len__33026__auto___42465 = arguments.length;
var i__33027__auto___42466 = (0);
while(true){
if((i__33027__auto___42466 < len__33026__auto___42465)){
args41904.push((arguments[i__33027__auto___42466]));

var G__42467 = (i__33027__auto___42466 + (1));
i__33027__auto___42466 = G__42467;
continue;
} else {
}
break;
}

var G__41908 = args41904.length;
switch (G__41908) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41904.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq41905){
var G__41906 = cljs.core.first.call(null,seq41905);
var seq41905__$1 = cljs.core.next.call(null,seq41905);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__41906,seq41905__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args41909 = [];
var len__33026__auto___42469 = arguments.length;
var i__33027__auto___42470 = (0);
while(true){
if((i__33027__auto___42470 < len__33026__auto___42469)){
args41909.push((arguments[i__33027__auto___42470]));

var G__42471 = (i__33027__auto___42470 + (1));
i__33027__auto___42470 = G__42471;
continue;
} else {
}
break;
}

var G__41913 = args41909.length;
switch (G__41913) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41909.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq41910){
var G__41911 = cljs.core.first.call(null,seq41910);
var seq41910__$1 = cljs.core.next.call(null,seq41910);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__41911,seq41910__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args41914 = [];
var len__33026__auto___42473 = arguments.length;
var i__33027__auto___42474 = (0);
while(true){
if((i__33027__auto___42474 < len__33026__auto___42473)){
args41914.push((arguments[i__33027__auto___42474]));

var G__42475 = (i__33027__auto___42474 + (1));
i__33027__auto___42474 = G__42475;
continue;
} else {
}
break;
}

var G__41918 = args41914.length;
switch (G__41918) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41914.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq41915){
var G__41916 = cljs.core.first.call(null,seq41915);
var seq41915__$1 = cljs.core.next.call(null,seq41915);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__41916,seq41915__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args41919 = [];
var len__33026__auto___42477 = arguments.length;
var i__33027__auto___42478 = (0);
while(true){
if((i__33027__auto___42478 < len__33026__auto___42477)){
args41919.push((arguments[i__33027__auto___42478]));

var G__42479 = (i__33027__auto___42478 + (1));
i__33027__auto___42478 = G__42479;
continue;
} else {
}
break;
}

var G__41923 = args41919.length;
switch (G__41923) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41919.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq41920){
var G__41921 = cljs.core.first.call(null,seq41920);
var seq41920__$1 = cljs.core.next.call(null,seq41920);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__41921,seq41920__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args41924 = [];
var len__33026__auto___42481 = arguments.length;
var i__33027__auto___42482 = (0);
while(true){
if((i__33027__auto___42482 < len__33026__auto___42481)){
args41924.push((arguments[i__33027__auto___42482]));

var G__42483 = (i__33027__auto___42482 + (1));
i__33027__auto___42482 = G__42483;
continue;
} else {
}
break;
}

var G__41928 = args41924.length;
switch (G__41928) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41924.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq41925){
var G__41926 = cljs.core.first.call(null,seq41925);
var seq41925__$1 = cljs.core.next.call(null,seq41925);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__41926,seq41925__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args41929 = [];
var len__33026__auto___42485 = arguments.length;
var i__33027__auto___42486 = (0);
while(true){
if((i__33027__auto___42486 < len__33026__auto___42485)){
args41929.push((arguments[i__33027__auto___42486]));

var G__42487 = (i__33027__auto___42486 + (1));
i__33027__auto___42486 = G__42487;
continue;
} else {
}
break;
}

var G__41933 = args41929.length;
switch (G__41933) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41929.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq41930){
var G__41931 = cljs.core.first.call(null,seq41930);
var seq41930__$1 = cljs.core.next.call(null,seq41930);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__41931,seq41930__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args41934 = [];
var len__33026__auto___42489 = arguments.length;
var i__33027__auto___42490 = (0);
while(true){
if((i__33027__auto___42490 < len__33026__auto___42489)){
args41934.push((arguments[i__33027__auto___42490]));

var G__42491 = (i__33027__auto___42490 + (1));
i__33027__auto___42490 = G__42491;
continue;
} else {
}
break;
}

var G__41938 = args41934.length;
switch (G__41938) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41934.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq41935){
var G__41936 = cljs.core.first.call(null,seq41935);
var seq41935__$1 = cljs.core.next.call(null,seq41935);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__41936,seq41935__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args41939 = [];
var len__33026__auto___42493 = arguments.length;
var i__33027__auto___42494 = (0);
while(true){
if((i__33027__auto___42494 < len__33026__auto___42493)){
args41939.push((arguments[i__33027__auto___42494]));

var G__42495 = (i__33027__auto___42494 + (1));
i__33027__auto___42494 = G__42495;
continue;
} else {
}
break;
}

var G__41943 = args41939.length;
switch (G__41943) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41939.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq41940){
var G__41941 = cljs.core.first.call(null,seq41940);
var seq41940__$1 = cljs.core.next.call(null,seq41940);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__41941,seq41940__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args41944 = [];
var len__33026__auto___42497 = arguments.length;
var i__33027__auto___42498 = (0);
while(true){
if((i__33027__auto___42498 < len__33026__auto___42497)){
args41944.push((arguments[i__33027__auto___42498]));

var G__42499 = (i__33027__auto___42498 + (1));
i__33027__auto___42498 = G__42499;
continue;
} else {
}
break;
}

var G__41948 = args41944.length;
switch (G__41948) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41944.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq41945){
var G__41946 = cljs.core.first.call(null,seq41945);
var seq41945__$1 = cljs.core.next.call(null,seq41945);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__41946,seq41945__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args41949 = [];
var len__33026__auto___42501 = arguments.length;
var i__33027__auto___42502 = (0);
while(true){
if((i__33027__auto___42502 < len__33026__auto___42501)){
args41949.push((arguments[i__33027__auto___42502]));

var G__42503 = (i__33027__auto___42502 + (1));
i__33027__auto___42502 = G__42503;
continue;
} else {
}
break;
}

var G__41953 = args41949.length;
switch (G__41953) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41949.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq41950){
var G__41951 = cljs.core.first.call(null,seq41950);
var seq41950__$1 = cljs.core.next.call(null,seq41950);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__41951,seq41950__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args41954 = [];
var len__33026__auto___42505 = arguments.length;
var i__33027__auto___42506 = (0);
while(true){
if((i__33027__auto___42506 < len__33026__auto___42505)){
args41954.push((arguments[i__33027__auto___42506]));

var G__42507 = (i__33027__auto___42506 + (1));
i__33027__auto___42506 = G__42507;
continue;
} else {
}
break;
}

var G__41958 = args41954.length;
switch (G__41958) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41954.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq41955){
var G__41956 = cljs.core.first.call(null,seq41955);
var seq41955__$1 = cljs.core.next.call(null,seq41955);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__41956,seq41955__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args41959 = [];
var len__33026__auto___42509 = arguments.length;
var i__33027__auto___42510 = (0);
while(true){
if((i__33027__auto___42510 < len__33026__auto___42509)){
args41959.push((arguments[i__33027__auto___42510]));

var G__42511 = (i__33027__auto___42510 + (1));
i__33027__auto___42510 = G__42511;
continue;
} else {
}
break;
}

var G__41963 = args41959.length;
switch (G__41963) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41959.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq41960){
var G__41961 = cljs.core.first.call(null,seq41960);
var seq41960__$1 = cljs.core.next.call(null,seq41960);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__41961,seq41960__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args41964 = [];
var len__33026__auto___42513 = arguments.length;
var i__33027__auto___42514 = (0);
while(true){
if((i__33027__auto___42514 < len__33026__auto___42513)){
args41964.push((arguments[i__33027__auto___42514]));

var G__42515 = (i__33027__auto___42514 + (1));
i__33027__auto___42514 = G__42515;
continue;
} else {
}
break;
}

var G__41968 = args41964.length;
switch (G__41968) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41964.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq41965){
var G__41966 = cljs.core.first.call(null,seq41965);
var seq41965__$1 = cljs.core.next.call(null,seq41965);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__41966,seq41965__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args41969 = [];
var len__33026__auto___42517 = arguments.length;
var i__33027__auto___42518 = (0);
while(true){
if((i__33027__auto___42518 < len__33026__auto___42517)){
args41969.push((arguments[i__33027__auto___42518]));

var G__42519 = (i__33027__auto___42518 + (1));
i__33027__auto___42518 = G__42519;
continue;
} else {
}
break;
}

var G__41973 = args41969.length;
switch (G__41973) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41969.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq41970){
var G__41971 = cljs.core.first.call(null,seq41970);
var seq41970__$1 = cljs.core.next.call(null,seq41970);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__41971,seq41970__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args41974 = [];
var len__33026__auto___42521 = arguments.length;
var i__33027__auto___42522 = (0);
while(true){
if((i__33027__auto___42522 < len__33026__auto___42521)){
args41974.push((arguments[i__33027__auto___42522]));

var G__42523 = (i__33027__auto___42522 + (1));
i__33027__auto___42522 = G__42523;
continue;
} else {
}
break;
}

var G__41978 = args41974.length;
switch (G__41978) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41974.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq41975){
var G__41976 = cljs.core.first.call(null,seq41975);
var seq41975__$1 = cljs.core.next.call(null,seq41975);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__41976,seq41975__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args41979 = [];
var len__33026__auto___42525 = arguments.length;
var i__33027__auto___42526 = (0);
while(true){
if((i__33027__auto___42526 < len__33026__auto___42525)){
args41979.push((arguments[i__33027__auto___42526]));

var G__42527 = (i__33027__auto___42526 + (1));
i__33027__auto___42526 = G__42527;
continue;
} else {
}
break;
}

var G__41983 = args41979.length;
switch (G__41983) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41979.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq41980){
var G__41981 = cljs.core.first.call(null,seq41980);
var seq41980__$1 = cljs.core.next.call(null,seq41980);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__41981,seq41980__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args41984 = [];
var len__33026__auto___42529 = arguments.length;
var i__33027__auto___42530 = (0);
while(true){
if((i__33027__auto___42530 < len__33026__auto___42529)){
args41984.push((arguments[i__33027__auto___42530]));

var G__42531 = (i__33027__auto___42530 + (1));
i__33027__auto___42530 = G__42531;
continue;
} else {
}
break;
}

var G__41988 = args41984.length;
switch (G__41988) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41984.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq41985){
var G__41986 = cljs.core.first.call(null,seq41985);
var seq41985__$1 = cljs.core.next.call(null,seq41985);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__41986,seq41985__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args41989 = [];
var len__33026__auto___42533 = arguments.length;
var i__33027__auto___42534 = (0);
while(true){
if((i__33027__auto___42534 < len__33026__auto___42533)){
args41989.push((arguments[i__33027__auto___42534]));

var G__42535 = (i__33027__auto___42534 + (1));
i__33027__auto___42534 = G__42535;
continue;
} else {
}
break;
}

var G__41993 = args41989.length;
switch (G__41993) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41989.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq41990){
var G__41991 = cljs.core.first.call(null,seq41990);
var seq41990__$1 = cljs.core.next.call(null,seq41990);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__41991,seq41990__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args41994 = [];
var len__33026__auto___42537 = arguments.length;
var i__33027__auto___42538 = (0);
while(true){
if((i__33027__auto___42538 < len__33026__auto___42537)){
args41994.push((arguments[i__33027__auto___42538]));

var G__42539 = (i__33027__auto___42538 + (1));
i__33027__auto___42538 = G__42539;
continue;
} else {
}
break;
}

var G__41998 = args41994.length;
switch (G__41998) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41994.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq41995){
var G__41996 = cljs.core.first.call(null,seq41995);
var seq41995__$1 = cljs.core.next.call(null,seq41995);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__41996,seq41995__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args41999 = [];
var len__33026__auto___42541 = arguments.length;
var i__33027__auto___42542 = (0);
while(true){
if((i__33027__auto___42542 < len__33026__auto___42541)){
args41999.push((arguments[i__33027__auto___42542]));

var G__42543 = (i__33027__auto___42542 + (1));
i__33027__auto___42542 = G__42543;
continue;
} else {
}
break;
}

var G__42003 = args41999.length;
switch (G__42003) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41999.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq42000){
var G__42001 = cljs.core.first.call(null,seq42000);
var seq42000__$1 = cljs.core.next.call(null,seq42000);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__42001,seq42000__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args42004 = [];
var len__33026__auto___42545 = arguments.length;
var i__33027__auto___42546 = (0);
while(true){
if((i__33027__auto___42546 < len__33026__auto___42545)){
args42004.push((arguments[i__33027__auto___42546]));

var G__42547 = (i__33027__auto___42546 + (1));
i__33027__auto___42546 = G__42547;
continue;
} else {
}
break;
}

var G__42008 = args42004.length;
switch (G__42008) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42004.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq42005){
var G__42006 = cljs.core.first.call(null,seq42005);
var seq42005__$1 = cljs.core.next.call(null,seq42005);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__42006,seq42005__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args42009 = [];
var len__33026__auto___42549 = arguments.length;
var i__33027__auto___42550 = (0);
while(true){
if((i__33027__auto___42550 < len__33026__auto___42549)){
args42009.push((arguments[i__33027__auto___42550]));

var G__42551 = (i__33027__auto___42550 + (1));
i__33027__auto___42550 = G__42551;
continue;
} else {
}
break;
}

var G__42013 = args42009.length;
switch (G__42013) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42009.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq42010){
var G__42011 = cljs.core.first.call(null,seq42010);
var seq42010__$1 = cljs.core.next.call(null,seq42010);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__42011,seq42010__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args42014 = [];
var len__33026__auto___42553 = arguments.length;
var i__33027__auto___42554 = (0);
while(true){
if((i__33027__auto___42554 < len__33026__auto___42553)){
args42014.push((arguments[i__33027__auto___42554]));

var G__42555 = (i__33027__auto___42554 + (1));
i__33027__auto___42554 = G__42555;
continue;
} else {
}
break;
}

var G__42018 = args42014.length;
switch (G__42018) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42014.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq42015){
var G__42016 = cljs.core.first.call(null,seq42015);
var seq42015__$1 = cljs.core.next.call(null,seq42015);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__42016,seq42015__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args42019 = [];
var len__33026__auto___42557 = arguments.length;
var i__33027__auto___42558 = (0);
while(true){
if((i__33027__auto___42558 < len__33026__auto___42557)){
args42019.push((arguments[i__33027__auto___42558]));

var G__42559 = (i__33027__auto___42558 + (1));
i__33027__auto___42558 = G__42559;
continue;
} else {
}
break;
}

var G__42023 = args42019.length;
switch (G__42023) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42019.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq42020){
var G__42021 = cljs.core.first.call(null,seq42020);
var seq42020__$1 = cljs.core.next.call(null,seq42020);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__42021,seq42020__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args42024 = [];
var len__33026__auto___42561 = arguments.length;
var i__33027__auto___42562 = (0);
while(true){
if((i__33027__auto___42562 < len__33026__auto___42561)){
args42024.push((arguments[i__33027__auto___42562]));

var G__42563 = (i__33027__auto___42562 + (1));
i__33027__auto___42562 = G__42563;
continue;
} else {
}
break;
}

var G__42028 = args42024.length;
switch (G__42028) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42024.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq42025){
var G__42026 = cljs.core.first.call(null,seq42025);
var seq42025__$1 = cljs.core.next.call(null,seq42025);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__42026,seq42025__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args42029 = [];
var len__33026__auto___42565 = arguments.length;
var i__33027__auto___42566 = (0);
while(true){
if((i__33027__auto___42566 < len__33026__auto___42565)){
args42029.push((arguments[i__33027__auto___42566]));

var G__42567 = (i__33027__auto___42566 + (1));
i__33027__auto___42566 = G__42567;
continue;
} else {
}
break;
}

var G__42033 = args42029.length;
switch (G__42033) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42029.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq42030){
var G__42031 = cljs.core.first.call(null,seq42030);
var seq42030__$1 = cljs.core.next.call(null,seq42030);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__42031,seq42030__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args42034 = [];
var len__33026__auto___42569 = arguments.length;
var i__33027__auto___42570 = (0);
while(true){
if((i__33027__auto___42570 < len__33026__auto___42569)){
args42034.push((arguments[i__33027__auto___42570]));

var G__42571 = (i__33027__auto___42570 + (1));
i__33027__auto___42570 = G__42571;
continue;
} else {
}
break;
}

var G__42038 = args42034.length;
switch (G__42038) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42034.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq42035){
var G__42036 = cljs.core.first.call(null,seq42035);
var seq42035__$1 = cljs.core.next.call(null,seq42035);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__42036,seq42035__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args42039 = [];
var len__33026__auto___42573 = arguments.length;
var i__33027__auto___42574 = (0);
while(true){
if((i__33027__auto___42574 < len__33026__auto___42573)){
args42039.push((arguments[i__33027__auto___42574]));

var G__42575 = (i__33027__auto___42574 + (1));
i__33027__auto___42574 = G__42575;
continue;
} else {
}
break;
}

var G__42043 = args42039.length;
switch (G__42043) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42039.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq42040){
var G__42041 = cljs.core.first.call(null,seq42040);
var seq42040__$1 = cljs.core.next.call(null,seq42040);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__42041,seq42040__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args42044 = [];
var len__33026__auto___42577 = arguments.length;
var i__33027__auto___42578 = (0);
while(true){
if((i__33027__auto___42578 < len__33026__auto___42577)){
args42044.push((arguments[i__33027__auto___42578]));

var G__42579 = (i__33027__auto___42578 + (1));
i__33027__auto___42578 = G__42579;
continue;
} else {
}
break;
}

var G__42048 = args42044.length;
switch (G__42048) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42044.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq42045){
var G__42046 = cljs.core.first.call(null,seq42045);
var seq42045__$1 = cljs.core.next.call(null,seq42045);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__42046,seq42045__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args42049 = [];
var len__33026__auto___42581 = arguments.length;
var i__33027__auto___42582 = (0);
while(true){
if((i__33027__auto___42582 < len__33026__auto___42581)){
args42049.push((arguments[i__33027__auto___42582]));

var G__42583 = (i__33027__auto___42582 + (1));
i__33027__auto___42582 = G__42583;
continue;
} else {
}
break;
}

var G__42053 = args42049.length;
switch (G__42053) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42049.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq42050){
var G__42051 = cljs.core.first.call(null,seq42050);
var seq42050__$1 = cljs.core.next.call(null,seq42050);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__42051,seq42050__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args42054 = [];
var len__33026__auto___42585 = arguments.length;
var i__33027__auto___42586 = (0);
while(true){
if((i__33027__auto___42586 < len__33026__auto___42585)){
args42054.push((arguments[i__33027__auto___42586]));

var G__42587 = (i__33027__auto___42586 + (1));
i__33027__auto___42586 = G__42587;
continue;
} else {
}
break;
}

var G__42058 = args42054.length;
switch (G__42058) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42054.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq42055){
var G__42056 = cljs.core.first.call(null,seq42055);
var seq42055__$1 = cljs.core.next.call(null,seq42055);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__42056,seq42055__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args42059 = [];
var len__33026__auto___42589 = arguments.length;
var i__33027__auto___42590 = (0);
while(true){
if((i__33027__auto___42590 < len__33026__auto___42589)){
args42059.push((arguments[i__33027__auto___42590]));

var G__42591 = (i__33027__auto___42590 + (1));
i__33027__auto___42590 = G__42591;
continue;
} else {
}
break;
}

var G__42063 = args42059.length;
switch (G__42063) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42059.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq42060){
var G__42061 = cljs.core.first.call(null,seq42060);
var seq42060__$1 = cljs.core.next.call(null,seq42060);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__42061,seq42060__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args42064 = [];
var len__33026__auto___42593 = arguments.length;
var i__33027__auto___42594 = (0);
while(true){
if((i__33027__auto___42594 < len__33026__auto___42593)){
args42064.push((arguments[i__33027__auto___42594]));

var G__42595 = (i__33027__auto___42594 + (1));
i__33027__auto___42594 = G__42595;
continue;
} else {
}
break;
}

var G__42068 = args42064.length;
switch (G__42068) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42064.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq42065){
var G__42066 = cljs.core.first.call(null,seq42065);
var seq42065__$1 = cljs.core.next.call(null,seq42065);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__42066,seq42065__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args42069 = [];
var len__33026__auto___42597 = arguments.length;
var i__33027__auto___42598 = (0);
while(true){
if((i__33027__auto___42598 < len__33026__auto___42597)){
args42069.push((arguments[i__33027__auto___42598]));

var G__42599 = (i__33027__auto___42598 + (1));
i__33027__auto___42598 = G__42599;
continue;
} else {
}
break;
}

var G__42073 = args42069.length;
switch (G__42073) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42069.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq42070){
var G__42071 = cljs.core.first.call(null,seq42070);
var seq42070__$1 = cljs.core.next.call(null,seq42070);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__42071,seq42070__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args42074 = [];
var len__33026__auto___42601 = arguments.length;
var i__33027__auto___42602 = (0);
while(true){
if((i__33027__auto___42602 < len__33026__auto___42601)){
args42074.push((arguments[i__33027__auto___42602]));

var G__42603 = (i__33027__auto___42602 + (1));
i__33027__auto___42602 = G__42603;
continue;
} else {
}
break;
}

var G__42078 = args42074.length;
switch (G__42078) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42074.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq42075){
var G__42076 = cljs.core.first.call(null,seq42075);
var seq42075__$1 = cljs.core.next.call(null,seq42075);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__42076,seq42075__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args42079 = [];
var len__33026__auto___42605 = arguments.length;
var i__33027__auto___42606 = (0);
while(true){
if((i__33027__auto___42606 < len__33026__auto___42605)){
args42079.push((arguments[i__33027__auto___42606]));

var G__42607 = (i__33027__auto___42606 + (1));
i__33027__auto___42606 = G__42607;
continue;
} else {
}
break;
}

var G__42083 = args42079.length;
switch (G__42083) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42079.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq42080){
var G__42081 = cljs.core.first.call(null,seq42080);
var seq42080__$1 = cljs.core.next.call(null,seq42080);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__42081,seq42080__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args42084 = [];
var len__33026__auto___42609 = arguments.length;
var i__33027__auto___42610 = (0);
while(true){
if((i__33027__auto___42610 < len__33026__auto___42609)){
args42084.push((arguments[i__33027__auto___42610]));

var G__42611 = (i__33027__auto___42610 + (1));
i__33027__auto___42610 = G__42611;
continue;
} else {
}
break;
}

var G__42088 = args42084.length;
switch (G__42088) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42084.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq42085){
var G__42086 = cljs.core.first.call(null,seq42085);
var seq42085__$1 = cljs.core.next.call(null,seq42085);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__42086,seq42085__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args42089 = [];
var len__33026__auto___42613 = arguments.length;
var i__33027__auto___42614 = (0);
while(true){
if((i__33027__auto___42614 < len__33026__auto___42613)){
args42089.push((arguments[i__33027__auto___42614]));

var G__42615 = (i__33027__auto___42614 + (1));
i__33027__auto___42614 = G__42615;
continue;
} else {
}
break;
}

var G__42093 = args42089.length;
switch (G__42093) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42089.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq42090){
var G__42091 = cljs.core.first.call(null,seq42090);
var seq42090__$1 = cljs.core.next.call(null,seq42090);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__42091,seq42090__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args42094 = [];
var len__33026__auto___42617 = arguments.length;
var i__33027__auto___42618 = (0);
while(true){
if((i__33027__auto___42618 < len__33026__auto___42617)){
args42094.push((arguments[i__33027__auto___42618]));

var G__42619 = (i__33027__auto___42618 + (1));
i__33027__auto___42618 = G__42619;
continue;
} else {
}
break;
}

var G__42098 = args42094.length;
switch (G__42098) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42094.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq42095){
var G__42096 = cljs.core.first.call(null,seq42095);
var seq42095__$1 = cljs.core.next.call(null,seq42095);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__42096,seq42095__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args42099 = [];
var len__33026__auto___42621 = arguments.length;
var i__33027__auto___42622 = (0);
while(true){
if((i__33027__auto___42622 < len__33026__auto___42621)){
args42099.push((arguments[i__33027__auto___42622]));

var G__42623 = (i__33027__auto___42622 + (1));
i__33027__auto___42622 = G__42623;
continue;
} else {
}
break;
}

var G__42103 = args42099.length;
switch (G__42103) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42099.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq42100){
var G__42101 = cljs.core.first.call(null,seq42100);
var seq42100__$1 = cljs.core.next.call(null,seq42100);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__42101,seq42100__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args42104 = [];
var len__33026__auto___42625 = arguments.length;
var i__33027__auto___42626 = (0);
while(true){
if((i__33027__auto___42626 < len__33026__auto___42625)){
args42104.push((arguments[i__33027__auto___42626]));

var G__42627 = (i__33027__auto___42626 + (1));
i__33027__auto___42626 = G__42627;
continue;
} else {
}
break;
}

var G__42108 = args42104.length;
switch (G__42108) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42104.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq42105){
var G__42106 = cljs.core.first.call(null,seq42105);
var seq42105__$1 = cljs.core.next.call(null,seq42105);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__42106,seq42105__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args42109 = [];
var len__33026__auto___42629 = arguments.length;
var i__33027__auto___42630 = (0);
while(true){
if((i__33027__auto___42630 < len__33026__auto___42629)){
args42109.push((arguments[i__33027__auto___42630]));

var G__42631 = (i__33027__auto___42630 + (1));
i__33027__auto___42630 = G__42631;
continue;
} else {
}
break;
}

var G__42113 = args42109.length;
switch (G__42113) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42109.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq42110){
var G__42111 = cljs.core.first.call(null,seq42110);
var seq42110__$1 = cljs.core.next.call(null,seq42110);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__42111,seq42110__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args42114 = [];
var len__33026__auto___42633 = arguments.length;
var i__33027__auto___42634 = (0);
while(true){
if((i__33027__auto___42634 < len__33026__auto___42633)){
args42114.push((arguments[i__33027__auto___42634]));

var G__42635 = (i__33027__auto___42634 + (1));
i__33027__auto___42634 = G__42635;
continue;
} else {
}
break;
}

var G__42118 = args42114.length;
switch (G__42118) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42114.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq42115){
var G__42116 = cljs.core.first.call(null,seq42115);
var seq42115__$1 = cljs.core.next.call(null,seq42115);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__42116,seq42115__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args42119 = [];
var len__33026__auto___42637 = arguments.length;
var i__33027__auto___42638 = (0);
while(true){
if((i__33027__auto___42638 < len__33026__auto___42637)){
args42119.push((arguments[i__33027__auto___42638]));

var G__42639 = (i__33027__auto___42638 + (1));
i__33027__auto___42638 = G__42639;
continue;
} else {
}
break;
}

var G__42123 = args42119.length;
switch (G__42123) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42119.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq42120){
var G__42121 = cljs.core.first.call(null,seq42120);
var seq42120__$1 = cljs.core.next.call(null,seq42120);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__42121,seq42120__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args42124 = [];
var len__33026__auto___42641 = arguments.length;
var i__33027__auto___42642 = (0);
while(true){
if((i__33027__auto___42642 < len__33026__auto___42641)){
args42124.push((arguments[i__33027__auto___42642]));

var G__42643 = (i__33027__auto___42642 + (1));
i__33027__auto___42642 = G__42643;
continue;
} else {
}
break;
}

var G__42128 = args42124.length;
switch (G__42128) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42124.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq42125){
var G__42126 = cljs.core.first.call(null,seq42125);
var seq42125__$1 = cljs.core.next.call(null,seq42125);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__42126,seq42125__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args42129 = [];
var len__33026__auto___42645 = arguments.length;
var i__33027__auto___42646 = (0);
while(true){
if((i__33027__auto___42646 < len__33026__auto___42645)){
args42129.push((arguments[i__33027__auto___42646]));

var G__42647 = (i__33027__auto___42646 + (1));
i__33027__auto___42646 = G__42647;
continue;
} else {
}
break;
}

var G__42133 = args42129.length;
switch (G__42133) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42129.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq42130){
var G__42131 = cljs.core.first.call(null,seq42130);
var seq42130__$1 = cljs.core.next.call(null,seq42130);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__42131,seq42130__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args42134 = [];
var len__33026__auto___42649 = arguments.length;
var i__33027__auto___42650 = (0);
while(true){
if((i__33027__auto___42650 < len__33026__auto___42649)){
args42134.push((arguments[i__33027__auto___42650]));

var G__42651 = (i__33027__auto___42650 + (1));
i__33027__auto___42650 = G__42651;
continue;
} else {
}
break;
}

var G__42138 = args42134.length;
switch (G__42138) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42134.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq42135){
var G__42136 = cljs.core.first.call(null,seq42135);
var seq42135__$1 = cljs.core.next.call(null,seq42135);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__42136,seq42135__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args42139 = [];
var len__33026__auto___42653 = arguments.length;
var i__33027__auto___42654 = (0);
while(true){
if((i__33027__auto___42654 < len__33026__auto___42653)){
args42139.push((arguments[i__33027__auto___42654]));

var G__42655 = (i__33027__auto___42654 + (1));
i__33027__auto___42654 = G__42655;
continue;
} else {
}
break;
}

var G__42143 = args42139.length;
switch (G__42143) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42139.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq42140){
var G__42141 = cljs.core.first.call(null,seq42140);
var seq42140__$1 = cljs.core.next.call(null,seq42140);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__42141,seq42140__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args42144 = [];
var len__33026__auto___42657 = arguments.length;
var i__33027__auto___42658 = (0);
while(true){
if((i__33027__auto___42658 < len__33026__auto___42657)){
args42144.push((arguments[i__33027__auto___42658]));

var G__42659 = (i__33027__auto___42658 + (1));
i__33027__auto___42658 = G__42659;
continue;
} else {
}
break;
}

var G__42148 = args42144.length;
switch (G__42148) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args42144.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq42145){
var G__42146 = cljs.core.first.call(null,seq42145);
var seq42145__$1 = cljs.core.next.call(null,seq42145);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__42146,seq42145__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args41664 = [];
var len__33026__auto___42661 = arguments.length;
var i__33027__auto___42662 = (0);
while(true){
if((i__33027__auto___42662 < len__33026__auto___42661)){
args41664.push((arguments[i__33027__auto___42662]));

var G__42663 = (i__33027__auto___42662 + (1));
i__33027__auto___42662 = G__42663;
continue;
} else {
}
break;
}

var G__41668 = args41664.length;
switch (G__41668) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__33045__auto__ = (new cljs.core.IndexedSeq(args41664.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33045__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35833__auto__,children__35834__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__35833__auto__,children__35834__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq41665){
var G__41666 = cljs.core.first.call(null,seq41665);
var seq41665__$1 = cljs.core.next.call(null,seq41665);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__41666,seq41665__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1491001382407