// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6417__auto__ = (cljs.core.count(attr) < (5));
if(or__6417__auto__){
return or__6417__auto__;
} else {
var G__16564 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__16564) {
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
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__16567 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__16567) {
case "class":
return cljs.core.cst$kw$className;

break;
case "for":
return cljs.core.cst$kw$htmlFor;

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
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(opt_val) : om_tools.dom.format_opts.call(null,opt_val));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16573){
var vec__16574 = p__16573;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16574,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6417__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__16580 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args16583 = [];
var len__7492__auto___17228 = arguments.length;
var i__7493__auto___17229 = (0);
while(true){
if((i__7493__auto___17229 < len__7492__auto___17228)){
args16583.push((arguments[i__7493__auto___17229]));

var G__17230 = (i__7493__auto___17229 + (1));
i__7493__auto___17229 = G__17230;
continue;
} else {
}
break;
}

var G__16587 = args16583.length;
switch (G__16587) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16583.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.a,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq16584){
var G__16585 = cljs.core.first(seq16584);
var seq16584__$1 = cljs.core.next(seq16584);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__16585,seq16584__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args16588 = [];
var len__7492__auto___17232 = arguments.length;
var i__7493__auto___17233 = (0);
while(true){
if((i__7493__auto___17233 < len__7492__auto___17232)){
args16588.push((arguments[i__7493__auto___17233]));

var G__17234 = (i__7493__auto___17233 + (1));
i__7493__auto___17233 = G__17234;
continue;
} else {
}
break;
}

var G__16592 = args16588.length;
switch (G__16592) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16588.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq16589){
var G__16590 = cljs.core.first(seq16589);
var seq16589__$1 = cljs.core.next(seq16589);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__16590,seq16589__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args16593 = [];
var len__7492__auto___17236 = arguments.length;
var i__7493__auto___17237 = (0);
while(true){
if((i__7493__auto___17237 < len__7492__auto___17236)){
args16593.push((arguments[i__7493__auto___17237]));

var G__17238 = (i__7493__auto___17237 + (1));
i__7493__auto___17237 = G__17238;
continue;
} else {
}
break;
}

var G__16597 = args16593.length;
switch (G__16597) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16593.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.address,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq16594){
var G__16595 = cljs.core.first(seq16594);
var seq16594__$1 = cljs.core.next(seq16594);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__16595,seq16594__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args16598 = [];
var len__7492__auto___17240 = arguments.length;
var i__7493__auto___17241 = (0);
while(true){
if((i__7493__auto___17241 < len__7492__auto___17240)){
args16598.push((arguments[i__7493__auto___17241]));

var G__17242 = (i__7493__auto___17241 + (1));
i__7493__auto___17241 = G__17242;
continue;
} else {
}
break;
}

var G__16602 = args16598.length;
switch (G__16602) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16598.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.area,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq16599){
var G__16600 = cljs.core.first(seq16599);
var seq16599__$1 = cljs.core.next(seq16599);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__16600,seq16599__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args16603 = [];
var len__7492__auto___17244 = arguments.length;
var i__7493__auto___17245 = (0);
while(true){
if((i__7493__auto___17245 < len__7492__auto___17244)){
args16603.push((arguments[i__7493__auto___17245]));

var G__17246 = (i__7493__auto___17245 + (1));
i__7493__auto___17245 = G__17246;
continue;
} else {
}
break;
}

var G__16607 = args16603.length;
switch (G__16607) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16603.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.article,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq16604){
var G__16605 = cljs.core.first(seq16604);
var seq16604__$1 = cljs.core.next(seq16604);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__16605,seq16604__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args16608 = [];
var len__7492__auto___17248 = arguments.length;
var i__7493__auto___17249 = (0);
while(true){
if((i__7493__auto___17249 < len__7492__auto___17248)){
args16608.push((arguments[i__7493__auto___17249]));

var G__17250 = (i__7493__auto___17249 + (1));
i__7493__auto___17249 = G__17250;
continue;
} else {
}
break;
}

var G__16612 = args16608.length;
switch (G__16612) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16608.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.aside,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq16609){
var G__16610 = cljs.core.first(seq16609);
var seq16609__$1 = cljs.core.next(seq16609);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__16610,seq16609__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args16613 = [];
var len__7492__auto___17252 = arguments.length;
var i__7493__auto___17253 = (0);
while(true){
if((i__7493__auto___17253 < len__7492__auto___17252)){
args16613.push((arguments[i__7493__auto___17253]));

var G__17254 = (i__7493__auto___17253 + (1));
i__7493__auto___17253 = G__17254;
continue;
} else {
}
break;
}

var G__16617 = args16613.length;
switch (G__16617) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16613.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.audio,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq16614){
var G__16615 = cljs.core.first(seq16614);
var seq16614__$1 = cljs.core.next(seq16614);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__16615,seq16614__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args16618 = [];
var len__7492__auto___17256 = arguments.length;
var i__7493__auto___17257 = (0);
while(true){
if((i__7493__auto___17257 < len__7492__auto___17256)){
args16618.push((arguments[i__7493__auto___17257]));

var G__17258 = (i__7493__auto___17257 + (1));
i__7493__auto___17257 = G__17258;
continue;
} else {
}
break;
}

var G__16622 = args16618.length;
switch (G__16622) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16618.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.b,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq16619){
var G__16620 = cljs.core.first(seq16619);
var seq16619__$1 = cljs.core.next(seq16619);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__16620,seq16619__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args16623 = [];
var len__7492__auto___17260 = arguments.length;
var i__7493__auto___17261 = (0);
while(true){
if((i__7493__auto___17261 < len__7492__auto___17260)){
args16623.push((arguments[i__7493__auto___17261]));

var G__17262 = (i__7493__auto___17261 + (1));
i__7493__auto___17261 = G__17262;
continue;
} else {
}
break;
}

var G__16627 = args16623.length;
switch (G__16627) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16623.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.base,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq16624){
var G__16625 = cljs.core.first(seq16624);
var seq16624__$1 = cljs.core.next(seq16624);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__16625,seq16624__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args16628 = [];
var len__7492__auto___17264 = arguments.length;
var i__7493__auto___17265 = (0);
while(true){
if((i__7493__auto___17265 < len__7492__auto___17264)){
args16628.push((arguments[i__7493__auto___17265]));

var G__17266 = (i__7493__auto___17265 + (1));
i__7493__auto___17265 = G__17266;
continue;
} else {
}
break;
}

var G__16632 = args16628.length;
switch (G__16632) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16628.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq16629){
var G__16630 = cljs.core.first(seq16629);
var seq16629__$1 = cljs.core.next(seq16629);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__16630,seq16629__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args16633 = [];
var len__7492__auto___17268 = arguments.length;
var i__7493__auto___17269 = (0);
while(true){
if((i__7493__auto___17269 < len__7492__auto___17268)){
args16633.push((arguments[i__7493__auto___17269]));

var G__17270 = (i__7493__auto___17269 + (1));
i__7493__auto___17269 = G__17270;
continue;
} else {
}
break;
}

var G__16637 = args16633.length;
switch (G__16637) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16633.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq16634){
var G__16635 = cljs.core.first(seq16634);
var seq16634__$1 = cljs.core.next(seq16634);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__16635,seq16634__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args16638 = [];
var len__7492__auto___17272 = arguments.length;
var i__7493__auto___17273 = (0);
while(true){
if((i__7493__auto___17273 < len__7492__auto___17272)){
args16638.push((arguments[i__7493__auto___17273]));

var G__17274 = (i__7493__auto___17273 + (1));
i__7493__auto___17273 = G__17274;
continue;
} else {
}
break;
}

var G__16642 = args16638.length;
switch (G__16642) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16638.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.big,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq16639){
var G__16640 = cljs.core.first(seq16639);
var seq16639__$1 = cljs.core.next(seq16639);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__16640,seq16639__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args16643 = [];
var len__7492__auto___17276 = arguments.length;
var i__7493__auto___17277 = (0);
while(true){
if((i__7493__auto___17277 < len__7492__auto___17276)){
args16643.push((arguments[i__7493__auto___17277]));

var G__17278 = (i__7493__auto___17277 + (1));
i__7493__auto___17277 = G__17278;
continue;
} else {
}
break;
}

var G__16647 = args16643.length;
switch (G__16647) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16643.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq16644){
var G__16645 = cljs.core.first(seq16644);
var seq16644__$1 = cljs.core.next(seq16644);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__16645,seq16644__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args16648 = [];
var len__7492__auto___17280 = arguments.length;
var i__7493__auto___17281 = (0);
while(true){
if((i__7493__auto___17281 < len__7492__auto___17280)){
args16648.push((arguments[i__7493__auto___17281]));

var G__17282 = (i__7493__auto___17281 + (1));
i__7493__auto___17281 = G__17282;
continue;
} else {
}
break;
}

var G__16652 = args16648.length;
switch (G__16652) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16648.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.body,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq16649){
var G__16650 = cljs.core.first(seq16649);
var seq16649__$1 = cljs.core.next(seq16649);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__16650,seq16649__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args16653 = [];
var len__7492__auto___17284 = arguments.length;
var i__7493__auto___17285 = (0);
while(true){
if((i__7493__auto___17285 < len__7492__auto___17284)){
args16653.push((arguments[i__7493__auto___17285]));

var G__17286 = (i__7493__auto___17285 + (1));
i__7493__auto___17285 = G__17286;
continue;
} else {
}
break;
}

var G__16657 = args16653.length;
switch (G__16657) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16653.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.br,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq16654){
var G__16655 = cljs.core.first(seq16654);
var seq16654__$1 = cljs.core.next(seq16654);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__16655,seq16654__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args16658 = [];
var len__7492__auto___17288 = arguments.length;
var i__7493__auto___17289 = (0);
while(true){
if((i__7493__auto___17289 < len__7492__auto___17288)){
args16658.push((arguments[i__7493__auto___17289]));

var G__17290 = (i__7493__auto___17289 + (1));
i__7493__auto___17289 = G__17290;
continue;
} else {
}
break;
}

var G__16662 = args16658.length;
switch (G__16662) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16658.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.button,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq16659){
var G__16660 = cljs.core.first(seq16659);
var seq16659__$1 = cljs.core.next(seq16659);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__16660,seq16659__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args16663 = [];
var len__7492__auto___17292 = arguments.length;
var i__7493__auto___17293 = (0);
while(true){
if((i__7493__auto___17293 < len__7492__auto___17292)){
args16663.push((arguments[i__7493__auto___17293]));

var G__17294 = (i__7493__auto___17293 + (1));
i__7493__auto___17293 = G__17294;
continue;
} else {
}
break;
}

var G__16667 = args16663.length;
switch (G__16667) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16663.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq16664){
var G__16665 = cljs.core.first(seq16664);
var seq16664__$1 = cljs.core.next(seq16664);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__16665,seq16664__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args16668 = [];
var len__7492__auto___17296 = arguments.length;
var i__7493__auto___17297 = (0);
while(true){
if((i__7493__auto___17297 < len__7492__auto___17296)){
args16668.push((arguments[i__7493__auto___17297]));

var G__17298 = (i__7493__auto___17297 + (1));
i__7493__auto___17297 = G__17298;
continue;
} else {
}
break;
}

var G__16672 = args16668.length;
switch (G__16672) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16668.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.caption,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq16669){
var G__16670 = cljs.core.first(seq16669);
var seq16669__$1 = cljs.core.next(seq16669);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__16670,seq16669__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args16673 = [];
var len__7492__auto___17300 = arguments.length;
var i__7493__auto___17301 = (0);
while(true){
if((i__7493__auto___17301 < len__7492__auto___17300)){
args16673.push((arguments[i__7493__auto___17301]));

var G__17302 = (i__7493__auto___17301 + (1));
i__7493__auto___17301 = G__17302;
continue;
} else {
}
break;
}

var G__16677 = args16673.length;
switch (G__16677) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16673.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.cite,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq16674){
var G__16675 = cljs.core.first(seq16674);
var seq16674__$1 = cljs.core.next(seq16674);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__16675,seq16674__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args16678 = [];
var len__7492__auto___17304 = arguments.length;
var i__7493__auto___17305 = (0);
while(true){
if((i__7493__auto___17305 < len__7492__auto___17304)){
args16678.push((arguments[i__7493__auto___17305]));

var G__17306 = (i__7493__auto___17305 + (1));
i__7493__auto___17305 = G__17306;
continue;
} else {
}
break;
}

var G__16682 = args16678.length;
switch (G__16682) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16678.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.code,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq16679){
var G__16680 = cljs.core.first(seq16679);
var seq16679__$1 = cljs.core.next(seq16679);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__16680,seq16679__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args16683 = [];
var len__7492__auto___17308 = arguments.length;
var i__7493__auto___17309 = (0);
while(true){
if((i__7493__auto___17309 < len__7492__auto___17308)){
args16683.push((arguments[i__7493__auto___17309]));

var G__17310 = (i__7493__auto___17309 + (1));
i__7493__auto___17309 = G__17310;
continue;
} else {
}
break;
}

var G__16687 = args16683.length;
switch (G__16687) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16683.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.col,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq16684){
var G__16685 = cljs.core.first(seq16684);
var seq16684__$1 = cljs.core.next(seq16684);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__16685,seq16684__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args16688 = [];
var len__7492__auto___17312 = arguments.length;
var i__7493__auto___17313 = (0);
while(true){
if((i__7493__auto___17313 < len__7492__auto___17312)){
args16688.push((arguments[i__7493__auto___17313]));

var G__17314 = (i__7493__auto___17313 + (1));
i__7493__auto___17313 = G__17314;
continue;
} else {
}
break;
}

var G__16692 = args16688.length;
switch (G__16692) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16688.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq16689){
var G__16690 = cljs.core.first(seq16689);
var seq16689__$1 = cljs.core.next(seq16689);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__16690,seq16689__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args16693 = [];
var len__7492__auto___17316 = arguments.length;
var i__7493__auto___17317 = (0);
while(true){
if((i__7493__auto___17317 < len__7492__auto___17316)){
args16693.push((arguments[i__7493__auto___17317]));

var G__17318 = (i__7493__auto___17317 + (1));
i__7493__auto___17317 = G__17318;
continue;
} else {
}
break;
}

var G__16697 = args16693.length;
switch (G__16697) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16693.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.data,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq16694){
var G__16695 = cljs.core.first(seq16694);
var seq16694__$1 = cljs.core.next(seq16694);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__16695,seq16694__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args16698 = [];
var len__7492__auto___17320 = arguments.length;
var i__7493__auto___17321 = (0);
while(true){
if((i__7493__auto___17321 < len__7492__auto___17320)){
args16698.push((arguments[i__7493__auto___17321]));

var G__17322 = (i__7493__auto___17321 + (1));
i__7493__auto___17321 = G__17322;
continue;
} else {
}
break;
}

var G__16702 = args16698.length;
switch (G__16702) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16698.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq16699){
var G__16700 = cljs.core.first(seq16699);
var seq16699__$1 = cljs.core.next(seq16699);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__16700,seq16699__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args16703 = [];
var len__7492__auto___17324 = arguments.length;
var i__7493__auto___17325 = (0);
while(true){
if((i__7493__auto___17325 < len__7492__auto___17324)){
args16703.push((arguments[i__7493__auto___17325]));

var G__17326 = (i__7493__auto___17325 + (1));
i__7493__auto___17325 = G__17326;
continue;
} else {
}
break;
}

var G__16707 = args16703.length;
switch (G__16707) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16703.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.dd,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq16704){
var G__16705 = cljs.core.first(seq16704);
var seq16704__$1 = cljs.core.next(seq16704);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__16705,seq16704__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args16708 = [];
var len__7492__auto___17328 = arguments.length;
var i__7493__auto___17329 = (0);
while(true){
if((i__7493__auto___17329 < len__7492__auto___17328)){
args16708.push((arguments[i__7493__auto___17329]));

var G__17330 = (i__7493__auto___17329 + (1));
i__7493__auto___17329 = G__17330;
continue;
} else {
}
break;
}

var G__16712 = args16708.length;
switch (G__16712) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16708.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.del,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq16709){
var G__16710 = cljs.core.first(seq16709);
var seq16709__$1 = cljs.core.next(seq16709);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__16710,seq16709__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args16713 = [];
var len__7492__auto___17332 = arguments.length;
var i__7493__auto___17333 = (0);
while(true){
if((i__7493__auto___17333 < len__7492__auto___17332)){
args16713.push((arguments[i__7493__auto___17333]));

var G__17334 = (i__7493__auto___17333 + (1));
i__7493__auto___17333 = G__17334;
continue;
} else {
}
break;
}

var G__16717 = args16713.length;
switch (G__16717) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16713.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.details,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq16714){
var G__16715 = cljs.core.first(seq16714);
var seq16714__$1 = cljs.core.next(seq16714);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__16715,seq16714__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args16718 = [];
var len__7492__auto___17336 = arguments.length;
var i__7493__auto___17337 = (0);
while(true){
if((i__7493__auto___17337 < len__7492__auto___17336)){
args16718.push((arguments[i__7493__auto___17337]));

var G__17338 = (i__7493__auto___17337 + (1));
i__7493__auto___17337 = G__17338;
continue;
} else {
}
break;
}

var G__16722 = args16718.length;
switch (G__16722) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16718.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq16719){
var G__16720 = cljs.core.first(seq16719);
var seq16719__$1 = cljs.core.next(seq16719);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__16720,seq16719__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args16723 = [];
var len__7492__auto___17340 = arguments.length;
var i__7493__auto___17341 = (0);
while(true){
if((i__7493__auto___17341 < len__7492__auto___17340)){
args16723.push((arguments[i__7493__auto___17341]));

var G__17342 = (i__7493__auto___17341 + (1));
i__7493__auto___17341 = G__17342;
continue;
} else {
}
break;
}

var G__16727 = args16723.length;
switch (G__16727) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16723.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.dialog,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq16724){
var G__16725 = cljs.core.first(seq16724);
var seq16724__$1 = cljs.core.next(seq16724);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__16725,seq16724__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args16728 = [];
var len__7492__auto___17344 = arguments.length;
var i__7493__auto___17345 = (0);
while(true){
if((i__7493__auto___17345 < len__7492__auto___17344)){
args16728.push((arguments[i__7493__auto___17345]));

var G__17346 = (i__7493__auto___17345 + (1));
i__7493__auto___17345 = G__17346;
continue;
} else {
}
break;
}

var G__16732 = args16728.length;
switch (G__16732) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16728.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.div,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq16729){
var G__16730 = cljs.core.first(seq16729);
var seq16729__$1 = cljs.core.next(seq16729);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__16730,seq16729__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args16733 = [];
var len__7492__auto___17348 = arguments.length;
var i__7493__auto___17349 = (0);
while(true){
if((i__7493__auto___17349 < len__7492__auto___17348)){
args16733.push((arguments[i__7493__auto___17349]));

var G__17350 = (i__7493__auto___17349 + (1));
i__7493__auto___17349 = G__17350;
continue;
} else {
}
break;
}

var G__16737 = args16733.length;
switch (G__16737) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16733.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.dl,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq16734){
var G__16735 = cljs.core.first(seq16734);
var seq16734__$1 = cljs.core.next(seq16734);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__16735,seq16734__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args16738 = [];
var len__7492__auto___17352 = arguments.length;
var i__7493__auto___17353 = (0);
while(true){
if((i__7493__auto___17353 < len__7492__auto___17352)){
args16738.push((arguments[i__7493__auto___17353]));

var G__17354 = (i__7493__auto___17353 + (1));
i__7493__auto___17353 = G__17354;
continue;
} else {
}
break;
}

var G__16742 = args16738.length;
switch (G__16742) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16738.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.dt,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq16739){
var G__16740 = cljs.core.first(seq16739);
var seq16739__$1 = cljs.core.next(seq16739);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__16740,seq16739__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args16748 = [];
var len__7492__auto___17356 = arguments.length;
var i__7493__auto___17357 = (0);
while(true){
if((i__7493__auto___17357 < len__7492__auto___17356)){
args16748.push((arguments[i__7493__auto___17357]));

var G__17358 = (i__7493__auto___17357 + (1));
i__7493__auto___17357 = G__17358;
continue;
} else {
}
break;
}

var G__16752 = args16748.length;
switch (G__16752) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16748.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.em,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq16749){
var G__16750 = cljs.core.first(seq16749);
var seq16749__$1 = cljs.core.next(seq16749);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__16750,seq16749__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args16753 = [];
var len__7492__auto___17360 = arguments.length;
var i__7493__auto___17361 = (0);
while(true){
if((i__7493__auto___17361 < len__7492__auto___17360)){
args16753.push((arguments[i__7493__auto___17361]));

var G__17362 = (i__7493__auto___17361 + (1));
i__7493__auto___17361 = G__17362;
continue;
} else {
}
break;
}

var G__16757 = args16753.length;
switch (G__16757) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16753.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.embed,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq16754){
var G__16755 = cljs.core.first(seq16754);
var seq16754__$1 = cljs.core.next(seq16754);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__16755,seq16754__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args16758 = [];
var len__7492__auto___17364 = arguments.length;
var i__7493__auto___17365 = (0);
while(true){
if((i__7493__auto___17365 < len__7492__auto___17364)){
args16758.push((arguments[i__7493__auto___17365]));

var G__17366 = (i__7493__auto___17365 + (1));
i__7493__auto___17365 = G__17366;
continue;
} else {
}
break;
}

var G__16762 = args16758.length;
switch (G__16762) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16758.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq16759){
var G__16760 = cljs.core.first(seq16759);
var seq16759__$1 = cljs.core.next(seq16759);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__16760,seq16759__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args16763 = [];
var len__7492__auto___17368 = arguments.length;
var i__7493__auto___17369 = (0);
while(true){
if((i__7493__auto___17369 < len__7492__auto___17368)){
args16763.push((arguments[i__7493__auto___17369]));

var G__17370 = (i__7493__auto___17369 + (1));
i__7493__auto___17369 = G__17370;
continue;
} else {
}
break;
}

var G__16767 = args16763.length;
switch (G__16767) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16763.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq16764){
var G__16765 = cljs.core.first(seq16764);
var seq16764__$1 = cljs.core.next(seq16764);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__16765,seq16764__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args16768 = [];
var len__7492__auto___17372 = arguments.length;
var i__7493__auto___17373 = (0);
while(true){
if((i__7493__auto___17373 < len__7492__auto___17372)){
args16768.push((arguments[i__7493__auto___17373]));

var G__17374 = (i__7493__auto___17373 + (1));
i__7493__auto___17373 = G__17374;
continue;
} else {
}
break;
}

var G__16772 = args16768.length;
switch (G__16772) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16768.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.figure,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq16769){
var G__16770 = cljs.core.first(seq16769);
var seq16769__$1 = cljs.core.next(seq16769);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__16770,seq16769__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args16773 = [];
var len__7492__auto___17376 = arguments.length;
var i__7493__auto___17377 = (0);
while(true){
if((i__7493__auto___17377 < len__7492__auto___17376)){
args16773.push((arguments[i__7493__auto___17377]));

var G__17378 = (i__7493__auto___17377 + (1));
i__7493__auto___17377 = G__17378;
continue;
} else {
}
break;
}

var G__16777 = args16773.length;
switch (G__16777) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16773.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.footer,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq16774){
var G__16775 = cljs.core.first(seq16774);
var seq16774__$1 = cljs.core.next(seq16774);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__16775,seq16774__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args16778 = [];
var len__7492__auto___17380 = arguments.length;
var i__7493__auto___17381 = (0);
while(true){
if((i__7493__auto___17381 < len__7492__auto___17380)){
args16778.push((arguments[i__7493__auto___17381]));

var G__17382 = (i__7493__auto___17381 + (1));
i__7493__auto___17381 = G__17382;
continue;
} else {
}
break;
}

var G__16782 = args16778.length;
switch (G__16782) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16778.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.form,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq16779){
var G__16780 = cljs.core.first(seq16779);
var seq16779__$1 = cljs.core.next(seq16779);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__16780,seq16779__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args16783 = [];
var len__7492__auto___17384 = arguments.length;
var i__7493__auto___17385 = (0);
while(true){
if((i__7493__auto___17385 < len__7492__auto___17384)){
args16783.push((arguments[i__7493__auto___17385]));

var G__17386 = (i__7493__auto___17385 + (1));
i__7493__auto___17385 = G__17386;
continue;
} else {
}
break;
}

var G__16787 = args16783.length;
switch (G__16787) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16783.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.h1,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq16784){
var G__16785 = cljs.core.first(seq16784);
var seq16784__$1 = cljs.core.next(seq16784);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__16785,seq16784__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args16788 = [];
var len__7492__auto___17388 = arguments.length;
var i__7493__auto___17389 = (0);
while(true){
if((i__7493__auto___17389 < len__7492__auto___17388)){
args16788.push((arguments[i__7493__auto___17389]));

var G__17390 = (i__7493__auto___17389 + (1));
i__7493__auto___17389 = G__17390;
continue;
} else {
}
break;
}

var G__16792 = args16788.length;
switch (G__16792) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16788.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.h2,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq16789){
var G__16790 = cljs.core.first(seq16789);
var seq16789__$1 = cljs.core.next(seq16789);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__16790,seq16789__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args16793 = [];
var len__7492__auto___17392 = arguments.length;
var i__7493__auto___17393 = (0);
while(true){
if((i__7493__auto___17393 < len__7492__auto___17392)){
args16793.push((arguments[i__7493__auto___17393]));

var G__17394 = (i__7493__auto___17393 + (1));
i__7493__auto___17393 = G__17394;
continue;
} else {
}
break;
}

var G__16797 = args16793.length;
switch (G__16797) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16793.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.h3,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq16794){
var G__16795 = cljs.core.first(seq16794);
var seq16794__$1 = cljs.core.next(seq16794);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__16795,seq16794__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args16798 = [];
var len__7492__auto___17396 = arguments.length;
var i__7493__auto___17397 = (0);
while(true){
if((i__7493__auto___17397 < len__7492__auto___17396)){
args16798.push((arguments[i__7493__auto___17397]));

var G__17398 = (i__7493__auto___17397 + (1));
i__7493__auto___17397 = G__17398;
continue;
} else {
}
break;
}

var G__16802 = args16798.length;
switch (G__16802) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16798.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.h4,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq16799){
var G__16800 = cljs.core.first(seq16799);
var seq16799__$1 = cljs.core.next(seq16799);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__16800,seq16799__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args16803 = [];
var len__7492__auto___17400 = arguments.length;
var i__7493__auto___17401 = (0);
while(true){
if((i__7493__auto___17401 < len__7492__auto___17400)){
args16803.push((arguments[i__7493__auto___17401]));

var G__17402 = (i__7493__auto___17401 + (1));
i__7493__auto___17401 = G__17402;
continue;
} else {
}
break;
}

var G__16807 = args16803.length;
switch (G__16807) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16803.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.h5,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq16804){
var G__16805 = cljs.core.first(seq16804);
var seq16804__$1 = cljs.core.next(seq16804);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__16805,seq16804__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args16808 = [];
var len__7492__auto___17404 = arguments.length;
var i__7493__auto___17405 = (0);
while(true){
if((i__7493__auto___17405 < len__7492__auto___17404)){
args16808.push((arguments[i__7493__auto___17405]));

var G__17406 = (i__7493__auto___17405 + (1));
i__7493__auto___17405 = G__17406;
continue;
} else {
}
break;
}

var G__16812 = args16808.length;
switch (G__16812) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16808.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.h6,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq16809){
var G__16810 = cljs.core.first(seq16809);
var seq16809__$1 = cljs.core.next(seq16809);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__16810,seq16809__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args16813 = [];
var len__7492__auto___17408 = arguments.length;
var i__7493__auto___17409 = (0);
while(true){
if((i__7493__auto___17409 < len__7492__auto___17408)){
args16813.push((arguments[i__7493__auto___17409]));

var G__17410 = (i__7493__auto___17409 + (1));
i__7493__auto___17409 = G__17410;
continue;
} else {
}
break;
}

var G__16817 = args16813.length;
switch (G__16817) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16813.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.head,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq16814){
var G__16815 = cljs.core.first(seq16814);
var seq16814__$1 = cljs.core.next(seq16814);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__16815,seq16814__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args16818 = [];
var len__7492__auto___17412 = arguments.length;
var i__7493__auto___17413 = (0);
while(true){
if((i__7493__auto___17413 < len__7492__auto___17412)){
args16818.push((arguments[i__7493__auto___17413]));

var G__17414 = (i__7493__auto___17413 + (1));
i__7493__auto___17413 = G__17414;
continue;
} else {
}
break;
}

var G__16822 = args16818.length;
switch (G__16822) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16818.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.header,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq16819){
var G__16820 = cljs.core.first(seq16819);
var seq16819__$1 = cljs.core.next(seq16819);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__16820,seq16819__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args16823 = [];
var len__7492__auto___17416 = arguments.length;
var i__7493__auto___17417 = (0);
while(true){
if((i__7493__auto___17417 < len__7492__auto___17416)){
args16823.push((arguments[i__7493__auto___17417]));

var G__17418 = (i__7493__auto___17417 + (1));
i__7493__auto___17417 = G__17418;
continue;
} else {
}
break;
}

var G__16827 = args16823.length;
switch (G__16827) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16823.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.hr,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq16824){
var G__16825 = cljs.core.first(seq16824);
var seq16824__$1 = cljs.core.next(seq16824);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__16825,seq16824__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args16828 = [];
var len__7492__auto___17420 = arguments.length;
var i__7493__auto___17421 = (0);
while(true){
if((i__7493__auto___17421 < len__7492__auto___17420)){
args16828.push((arguments[i__7493__auto___17421]));

var G__17422 = (i__7493__auto___17421 + (1));
i__7493__auto___17421 = G__17422;
continue;
} else {
}
break;
}

var G__16832 = args16828.length;
switch (G__16832) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16828.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.html,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq16829){
var G__16830 = cljs.core.first(seq16829);
var seq16829__$1 = cljs.core.next(seq16829);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__16830,seq16829__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args16833 = [];
var len__7492__auto___17424 = arguments.length;
var i__7493__auto___17425 = (0);
while(true){
if((i__7493__auto___17425 < len__7492__auto___17424)){
args16833.push((arguments[i__7493__auto___17425]));

var G__17426 = (i__7493__auto___17425 + (1));
i__7493__auto___17425 = G__17426;
continue;
} else {
}
break;
}

var G__16837 = args16833.length;
switch (G__16837) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16833.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.i,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq16834){
var G__16835 = cljs.core.first(seq16834);
var seq16834__$1 = cljs.core.next(seq16834);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__16835,seq16834__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args16838 = [];
var len__7492__auto___17428 = arguments.length;
var i__7493__auto___17429 = (0);
while(true){
if((i__7493__auto___17429 < len__7492__auto___17428)){
args16838.push((arguments[i__7493__auto___17429]));

var G__17430 = (i__7493__auto___17429 + (1));
i__7493__auto___17429 = G__17430;
continue;
} else {
}
break;
}

var G__16842 = args16838.length;
switch (G__16842) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16838.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq16839){
var G__16840 = cljs.core.first(seq16839);
var seq16839__$1 = cljs.core.next(seq16839);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__16840,seq16839__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args16843 = [];
var len__7492__auto___17432 = arguments.length;
var i__7493__auto___17433 = (0);
while(true){
if((i__7493__auto___17433 < len__7492__auto___17432)){
args16843.push((arguments[i__7493__auto___17433]));

var G__17434 = (i__7493__auto___17433 + (1));
i__7493__auto___17433 = G__17434;
continue;
} else {
}
break;
}

var G__16847 = args16843.length;
switch (G__16847) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16843.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.img,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq16844){
var G__16845 = cljs.core.first(seq16844);
var seq16844__$1 = cljs.core.next(seq16844);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__16845,seq16844__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args16848 = [];
var len__7492__auto___17436 = arguments.length;
var i__7493__auto___17437 = (0);
while(true){
if((i__7493__auto___17437 < len__7492__auto___17436)){
args16848.push((arguments[i__7493__auto___17437]));

var G__17438 = (i__7493__auto___17437 + (1));
i__7493__auto___17437 = G__17438;
continue;
} else {
}
break;
}

var G__16852 = args16848.length;
switch (G__16852) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16848.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.ins,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq16849){
var G__16850 = cljs.core.first(seq16849);
var seq16849__$1 = cljs.core.next(seq16849);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__16850,seq16849__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args16853 = [];
var len__7492__auto___17440 = arguments.length;
var i__7493__auto___17441 = (0);
while(true){
if((i__7493__auto___17441 < len__7492__auto___17440)){
args16853.push((arguments[i__7493__auto___17441]));

var G__17442 = (i__7493__auto___17441 + (1));
i__7493__auto___17441 = G__17442;
continue;
} else {
}
break;
}

var G__16857 = args16853.length;
switch (G__16857) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16853.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq16854){
var G__16855 = cljs.core.first(seq16854);
var seq16854__$1 = cljs.core.next(seq16854);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__16855,seq16854__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args16858 = [];
var len__7492__auto___17444 = arguments.length;
var i__7493__auto___17445 = (0);
while(true){
if((i__7493__auto___17445 < len__7492__auto___17444)){
args16858.push((arguments[i__7493__auto___17445]));

var G__17446 = (i__7493__auto___17445 + (1));
i__7493__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var G__16862 = args16858.length;
switch (G__16862) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16858.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq16859){
var G__16860 = cljs.core.first(seq16859);
var seq16859__$1 = cljs.core.next(seq16859);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__16860,seq16859__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args16863 = [];
var len__7492__auto___17448 = arguments.length;
var i__7493__auto___17449 = (0);
while(true){
if((i__7493__auto___17449 < len__7492__auto___17448)){
args16863.push((arguments[i__7493__auto___17449]));

var G__17450 = (i__7493__auto___17449 + (1));
i__7493__auto___17449 = G__17450;
continue;
} else {
}
break;
}

var G__16867 = args16863.length;
switch (G__16867) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16863.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.label,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq16864){
var G__16865 = cljs.core.first(seq16864);
var seq16864__$1 = cljs.core.next(seq16864);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__16865,seq16864__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args16868 = [];
var len__7492__auto___17452 = arguments.length;
var i__7493__auto___17453 = (0);
while(true){
if((i__7493__auto___17453 < len__7492__auto___17452)){
args16868.push((arguments[i__7493__auto___17453]));

var G__17454 = (i__7493__auto___17453 + (1));
i__7493__auto___17453 = G__17454;
continue;
} else {
}
break;
}

var G__16872 = args16868.length;
switch (G__16872) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16868.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.legend,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq16869){
var G__16870 = cljs.core.first(seq16869);
var seq16869__$1 = cljs.core.next(seq16869);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__16870,seq16869__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args16873 = [];
var len__7492__auto___17456 = arguments.length;
var i__7493__auto___17457 = (0);
while(true){
if((i__7493__auto___17457 < len__7492__auto___17456)){
args16873.push((arguments[i__7493__auto___17457]));

var G__17458 = (i__7493__auto___17457 + (1));
i__7493__auto___17457 = G__17458;
continue;
} else {
}
break;
}

var G__16877 = args16873.length;
switch (G__16877) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16873.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.li,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq16874){
var G__16875 = cljs.core.first(seq16874);
var seq16874__$1 = cljs.core.next(seq16874);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__16875,seq16874__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args16878 = [];
var len__7492__auto___17460 = arguments.length;
var i__7493__auto___17461 = (0);
while(true){
if((i__7493__auto___17461 < len__7492__auto___17460)){
args16878.push((arguments[i__7493__auto___17461]));

var G__17462 = (i__7493__auto___17461 + (1));
i__7493__auto___17461 = G__17462;
continue;
} else {
}
break;
}

var G__16882 = args16878.length;
switch (G__16882) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16878.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.link,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq16879){
var G__16880 = cljs.core.first(seq16879);
var seq16879__$1 = cljs.core.next(seq16879);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__16880,seq16879__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args16883 = [];
var len__7492__auto___17464 = arguments.length;
var i__7493__auto___17465 = (0);
while(true){
if((i__7493__auto___17465 < len__7492__auto___17464)){
args16883.push((arguments[i__7493__auto___17465]));

var G__17466 = (i__7493__auto___17465 + (1));
i__7493__auto___17465 = G__17466;
continue;
} else {
}
break;
}

var G__16887 = args16883.length;
switch (G__16887) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16883.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.main,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq16884){
var G__16885 = cljs.core.first(seq16884);
var seq16884__$1 = cljs.core.next(seq16884);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__16885,seq16884__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args16888 = [];
var len__7492__auto___17468 = arguments.length;
var i__7493__auto___17469 = (0);
while(true){
if((i__7493__auto___17469 < len__7492__auto___17468)){
args16888.push((arguments[i__7493__auto___17469]));

var G__17470 = (i__7493__auto___17469 + (1));
i__7493__auto___17469 = G__17470;
continue;
} else {
}
break;
}

var G__16892 = args16888.length;
switch (G__16892) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16888.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.map,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq16889){
var G__16890 = cljs.core.first(seq16889);
var seq16889__$1 = cljs.core.next(seq16889);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__16890,seq16889__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args16893 = [];
var len__7492__auto___17472 = arguments.length;
var i__7493__auto___17473 = (0);
while(true){
if((i__7493__auto___17473 < len__7492__auto___17472)){
args16893.push((arguments[i__7493__auto___17473]));

var G__17474 = (i__7493__auto___17473 + (1));
i__7493__auto___17473 = G__17474;
continue;
} else {
}
break;
}

var G__16897 = args16893.length;
switch (G__16897) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16893.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.mark,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq16894){
var G__16895 = cljs.core.first(seq16894);
var seq16894__$1 = cljs.core.next(seq16894);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__16895,seq16894__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args16898 = [];
var len__7492__auto___17476 = arguments.length;
var i__7493__auto___17477 = (0);
while(true){
if((i__7493__auto___17477 < len__7492__auto___17476)){
args16898.push((arguments[i__7493__auto___17477]));

var G__17478 = (i__7493__auto___17477 + (1));
i__7493__auto___17477 = G__17478;
continue;
} else {
}
break;
}

var G__16902 = args16898.length;
switch (G__16902) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16898.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.menu,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq16899){
var G__16900 = cljs.core.first(seq16899);
var seq16899__$1 = cljs.core.next(seq16899);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__16900,seq16899__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args16903 = [];
var len__7492__auto___17480 = arguments.length;
var i__7493__auto___17481 = (0);
while(true){
if((i__7493__auto___17481 < len__7492__auto___17480)){
args16903.push((arguments[i__7493__auto___17481]));

var G__17482 = (i__7493__auto___17481 + (1));
i__7493__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var G__16907 = args16903.length;
switch (G__16907) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16903.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq16904){
var G__16905 = cljs.core.first(seq16904);
var seq16904__$1 = cljs.core.next(seq16904);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__16905,seq16904__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args16908 = [];
var len__7492__auto___17484 = arguments.length;
var i__7493__auto___17485 = (0);
while(true){
if((i__7493__auto___17485 < len__7492__auto___17484)){
args16908.push((arguments[i__7493__auto___17485]));

var G__17486 = (i__7493__auto___17485 + (1));
i__7493__auto___17485 = G__17486;
continue;
} else {
}
break;
}

var G__16912 = args16908.length;
switch (G__16912) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16908.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.meta,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq16909){
var G__16910 = cljs.core.first(seq16909);
var seq16909__$1 = cljs.core.next(seq16909);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__16910,seq16909__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args16913 = [];
var len__7492__auto___17488 = arguments.length;
var i__7493__auto___17489 = (0);
while(true){
if((i__7493__auto___17489 < len__7492__auto___17488)){
args16913.push((arguments[i__7493__auto___17489]));

var G__17490 = (i__7493__auto___17489 + (1));
i__7493__auto___17489 = G__17490;
continue;
} else {
}
break;
}

var G__16917 = args16913.length;
switch (G__16917) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16913.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.meter,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq16914){
var G__16915 = cljs.core.first(seq16914);
var seq16914__$1 = cljs.core.next(seq16914);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__16915,seq16914__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args16918 = [];
var len__7492__auto___17492 = arguments.length;
var i__7493__auto___17493 = (0);
while(true){
if((i__7493__auto___17493 < len__7492__auto___17492)){
args16918.push((arguments[i__7493__auto___17493]));

var G__17494 = (i__7493__auto___17493 + (1));
i__7493__auto___17493 = G__17494;
continue;
} else {
}
break;
}

var G__16922 = args16918.length;
switch (G__16922) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16918.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.nav,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq16919){
var G__16920 = cljs.core.first(seq16919);
var seq16919__$1 = cljs.core.next(seq16919);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__16920,seq16919__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args16923 = [];
var len__7492__auto___17496 = arguments.length;
var i__7493__auto___17497 = (0);
while(true){
if((i__7493__auto___17497 < len__7492__auto___17496)){
args16923.push((arguments[i__7493__auto___17497]));

var G__17498 = (i__7493__auto___17497 + (1));
i__7493__auto___17497 = G__17498;
continue;
} else {
}
break;
}

var G__16927 = args16923.length;
switch (G__16927) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16923.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq16924){
var G__16925 = cljs.core.first(seq16924);
var seq16924__$1 = cljs.core.next(seq16924);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__16925,seq16924__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args16928 = [];
var len__7492__auto___17500 = arguments.length;
var i__7493__auto___17501 = (0);
while(true){
if((i__7493__auto___17501 < len__7492__auto___17500)){
args16928.push((arguments[i__7493__auto___17501]));

var G__17502 = (i__7493__auto___17501 + (1));
i__7493__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var G__16932 = args16928.length;
switch (G__16932) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16928.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.object,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq16929){
var G__16930 = cljs.core.first(seq16929);
var seq16929__$1 = cljs.core.next(seq16929);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__16930,seq16929__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args16933 = [];
var len__7492__auto___17504 = arguments.length;
var i__7493__auto___17505 = (0);
while(true){
if((i__7493__auto___17505 < len__7492__auto___17504)){
args16933.push((arguments[i__7493__auto___17505]));

var G__17506 = (i__7493__auto___17505 + (1));
i__7493__auto___17505 = G__17506;
continue;
} else {
}
break;
}

var G__16937 = args16933.length;
switch (G__16937) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16933.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.ol,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq16934){
var G__16935 = cljs.core.first(seq16934);
var seq16934__$1 = cljs.core.next(seq16934);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__16935,seq16934__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args16938 = [];
var len__7492__auto___17508 = arguments.length;
var i__7493__auto___17509 = (0);
while(true){
if((i__7493__auto___17509 < len__7492__auto___17508)){
args16938.push((arguments[i__7493__auto___17509]));

var G__17510 = (i__7493__auto___17509 + (1));
i__7493__auto___17509 = G__17510;
continue;
} else {
}
break;
}

var G__16942 = args16938.length;
switch (G__16942) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16938.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq16939){
var G__16940 = cljs.core.first(seq16939);
var seq16939__$1 = cljs.core.next(seq16939);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__16940,seq16939__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args16943 = [];
var len__7492__auto___17512 = arguments.length;
var i__7493__auto___17513 = (0);
while(true){
if((i__7493__auto___17513 < len__7492__auto___17512)){
args16943.push((arguments[i__7493__auto___17513]));

var G__17514 = (i__7493__auto___17513 + (1));
i__7493__auto___17513 = G__17514;
continue;
} else {
}
break;
}

var G__16947 = args16943.length;
switch (G__16947) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16943.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.output,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq16944){
var G__16945 = cljs.core.first(seq16944);
var seq16944__$1 = cljs.core.next(seq16944);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__16945,seq16944__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args16948 = [];
var len__7492__auto___17516 = arguments.length;
var i__7493__auto___17517 = (0);
while(true){
if((i__7493__auto___17517 < len__7492__auto___17516)){
args16948.push((arguments[i__7493__auto___17517]));

var G__17518 = (i__7493__auto___17517 + (1));
i__7493__auto___17517 = G__17518;
continue;
} else {
}
break;
}

var G__16952 = args16948.length;
switch (G__16952) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16948.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.p,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq16949){
var G__16950 = cljs.core.first(seq16949);
var seq16949__$1 = cljs.core.next(seq16949);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__16950,seq16949__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args16953 = [];
var len__7492__auto___17520 = arguments.length;
var i__7493__auto___17521 = (0);
while(true){
if((i__7493__auto___17521 < len__7492__auto___17520)){
args16953.push((arguments[i__7493__auto___17521]));

var G__17522 = (i__7493__auto___17521 + (1));
i__7493__auto___17521 = G__17522;
continue;
} else {
}
break;
}

var G__16957 = args16953.length;
switch (G__16957) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16953.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.param,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq16954){
var G__16955 = cljs.core.first(seq16954);
var seq16954__$1 = cljs.core.next(seq16954);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__16955,seq16954__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args16958 = [];
var len__7492__auto___17524 = arguments.length;
var i__7493__auto___17525 = (0);
while(true){
if((i__7493__auto___17525 < len__7492__auto___17524)){
args16958.push((arguments[i__7493__auto___17525]));

var G__17526 = (i__7493__auto___17525 + (1));
i__7493__auto___17525 = G__17526;
continue;
} else {
}
break;
}

var G__16962 = args16958.length;
switch (G__16962) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16958.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.picture,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq16959){
var G__16960 = cljs.core.first(seq16959);
var seq16959__$1 = cljs.core.next(seq16959);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__16960,seq16959__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args16963 = [];
var len__7492__auto___17528 = arguments.length;
var i__7493__auto___17529 = (0);
while(true){
if((i__7493__auto___17529 < len__7492__auto___17528)){
args16963.push((arguments[i__7493__auto___17529]));

var G__17530 = (i__7493__auto___17529 + (1));
i__7493__auto___17529 = G__17530;
continue;
} else {
}
break;
}

var G__16967 = args16963.length;
switch (G__16967) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16963.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.pre,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq16964){
var G__16965 = cljs.core.first(seq16964);
var seq16964__$1 = cljs.core.next(seq16964);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__16965,seq16964__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args16968 = [];
var len__7492__auto___17532 = arguments.length;
var i__7493__auto___17533 = (0);
while(true){
if((i__7493__auto___17533 < len__7492__auto___17532)){
args16968.push((arguments[i__7493__auto___17533]));

var G__17534 = (i__7493__auto___17533 + (1));
i__7493__auto___17533 = G__17534;
continue;
} else {
}
break;
}

var G__16972 = args16968.length;
switch (G__16972) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16968.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.progress,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq16969){
var G__16970 = cljs.core.first(seq16969);
var seq16969__$1 = cljs.core.next(seq16969);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__16970,seq16969__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args16973 = [];
var len__7492__auto___17536 = arguments.length;
var i__7493__auto___17537 = (0);
while(true){
if((i__7493__auto___17537 < len__7492__auto___17536)){
args16973.push((arguments[i__7493__auto___17537]));

var G__17538 = (i__7493__auto___17537 + (1));
i__7493__auto___17537 = G__17538;
continue;
} else {
}
break;
}

var G__16977 = args16973.length;
switch (G__16977) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16973.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.q,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq16974){
var G__16975 = cljs.core.first(seq16974);
var seq16974__$1 = cljs.core.next(seq16974);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__16975,seq16974__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args16978 = [];
var len__7492__auto___17540 = arguments.length;
var i__7493__auto___17541 = (0);
while(true){
if((i__7493__auto___17541 < len__7492__auto___17540)){
args16978.push((arguments[i__7493__auto___17541]));

var G__17542 = (i__7493__auto___17541 + (1));
i__7493__auto___17541 = G__17542;
continue;
} else {
}
break;
}

var G__16982 = args16978.length;
switch (G__16982) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16978.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.rp,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq16979){
var G__16980 = cljs.core.first(seq16979);
var seq16979__$1 = cljs.core.next(seq16979);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__16980,seq16979__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args16983 = [];
var len__7492__auto___17544 = arguments.length;
var i__7493__auto___17545 = (0);
while(true){
if((i__7493__auto___17545 < len__7492__auto___17544)){
args16983.push((arguments[i__7493__auto___17545]));

var G__17546 = (i__7493__auto___17545 + (1));
i__7493__auto___17545 = G__17546;
continue;
} else {
}
break;
}

var G__16987 = args16983.length;
switch (G__16987) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16983.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.rt,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq16984){
var G__16985 = cljs.core.first(seq16984);
var seq16984__$1 = cljs.core.next(seq16984);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__16985,seq16984__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args16988 = [];
var len__7492__auto___17548 = arguments.length;
var i__7493__auto___17549 = (0);
while(true){
if((i__7493__auto___17549 < len__7492__auto___17548)){
args16988.push((arguments[i__7493__auto___17549]));

var G__17550 = (i__7493__auto___17549 + (1));
i__7493__auto___17549 = G__17550;
continue;
} else {
}
break;
}

var G__16992 = args16988.length;
switch (G__16992) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16988.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq16989){
var G__16990 = cljs.core.first(seq16989);
var seq16989__$1 = cljs.core.next(seq16989);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__16990,seq16989__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args16993 = [];
var len__7492__auto___17552 = arguments.length;
var i__7493__auto___17553 = (0);
while(true){
if((i__7493__auto___17553 < len__7492__auto___17552)){
args16993.push((arguments[i__7493__auto___17553]));

var G__17554 = (i__7493__auto___17553 + (1));
i__7493__auto___17553 = G__17554;
continue;
} else {
}
break;
}

var G__16997 = args16993.length;
switch (G__16997) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16993.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.s,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq16994){
var G__16995 = cljs.core.first(seq16994);
var seq16994__$1 = cljs.core.next(seq16994);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__16995,seq16994__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args16998 = [];
var len__7492__auto___17556 = arguments.length;
var i__7493__auto___17557 = (0);
while(true){
if((i__7493__auto___17557 < len__7492__auto___17556)){
args16998.push((arguments[i__7493__auto___17557]));

var G__17558 = (i__7493__auto___17557 + (1));
i__7493__auto___17557 = G__17558;
continue;
} else {
}
break;
}

var G__17002 = args16998.length;
switch (G__17002) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16998.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.samp,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq16999){
var G__17000 = cljs.core.first(seq16999);
var seq16999__$1 = cljs.core.next(seq16999);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__17000,seq16999__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args17003 = [];
var len__7492__auto___17560 = arguments.length;
var i__7493__auto___17561 = (0);
while(true){
if((i__7493__auto___17561 < len__7492__auto___17560)){
args17003.push((arguments[i__7493__auto___17561]));

var G__17562 = (i__7493__auto___17561 + (1));
i__7493__auto___17561 = G__17562;
continue;
} else {
}
break;
}

var G__17007 = args17003.length;
switch (G__17007) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17003.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.script,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq17004){
var G__17005 = cljs.core.first(seq17004);
var seq17004__$1 = cljs.core.next(seq17004);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__17005,seq17004__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args17008 = [];
var len__7492__auto___17564 = arguments.length;
var i__7493__auto___17565 = (0);
while(true){
if((i__7493__auto___17565 < len__7492__auto___17564)){
args17008.push((arguments[i__7493__auto___17565]));

var G__17566 = (i__7493__auto___17565 + (1));
i__7493__auto___17565 = G__17566;
continue;
} else {
}
break;
}

var G__17012 = args17008.length;
switch (G__17012) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17008.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.section,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq17009){
var G__17010 = cljs.core.first(seq17009);
var seq17009__$1 = cljs.core.next(seq17009);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__17010,seq17009__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args17013 = [];
var len__7492__auto___17568 = arguments.length;
var i__7493__auto___17569 = (0);
while(true){
if((i__7493__auto___17569 < len__7492__auto___17568)){
args17013.push((arguments[i__7493__auto___17569]));

var G__17570 = (i__7493__auto___17569 + (1));
i__7493__auto___17569 = G__17570;
continue;
} else {
}
break;
}

var G__17017 = args17013.length;
switch (G__17017) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17013.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.small,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq17014){
var G__17015 = cljs.core.first(seq17014);
var seq17014__$1 = cljs.core.next(seq17014);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__17015,seq17014__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args17018 = [];
var len__7492__auto___17572 = arguments.length;
var i__7493__auto___17573 = (0);
while(true){
if((i__7493__auto___17573 < len__7492__auto___17572)){
args17018.push((arguments[i__7493__auto___17573]));

var G__17574 = (i__7493__auto___17573 + (1));
i__7493__auto___17573 = G__17574;
continue;
} else {
}
break;
}

var G__17022 = args17018.length;
switch (G__17022) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17018.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.source,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq17019){
var G__17020 = cljs.core.first(seq17019);
var seq17019__$1 = cljs.core.next(seq17019);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__17020,seq17019__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args17023 = [];
var len__7492__auto___17576 = arguments.length;
var i__7493__auto___17577 = (0);
while(true){
if((i__7493__auto___17577 < len__7492__auto___17576)){
args17023.push((arguments[i__7493__auto___17577]));

var G__17578 = (i__7493__auto___17577 + (1));
i__7493__auto___17577 = G__17578;
continue;
} else {
}
break;
}

var G__17027 = args17023.length;
switch (G__17027) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17023.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.span,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq17024){
var G__17025 = cljs.core.first(seq17024);
var seq17024__$1 = cljs.core.next(seq17024);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__17025,seq17024__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args17028 = [];
var len__7492__auto___17580 = arguments.length;
var i__7493__auto___17581 = (0);
while(true){
if((i__7493__auto___17581 < len__7492__auto___17580)){
args17028.push((arguments[i__7493__auto___17581]));

var G__17582 = (i__7493__auto___17581 + (1));
i__7493__auto___17581 = G__17582;
continue;
} else {
}
break;
}

var G__17032 = args17028.length;
switch (G__17032) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17028.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.strong,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq17029){
var G__17030 = cljs.core.first(seq17029);
var seq17029__$1 = cljs.core.next(seq17029);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__17030,seq17029__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args17033 = [];
var len__7492__auto___17584 = arguments.length;
var i__7493__auto___17585 = (0);
while(true){
if((i__7493__auto___17585 < len__7492__auto___17584)){
args17033.push((arguments[i__7493__auto___17585]));

var G__17586 = (i__7493__auto___17585 + (1));
i__7493__auto___17585 = G__17586;
continue;
} else {
}
break;
}

var G__17037 = args17033.length;
switch (G__17037) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17033.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.style,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq17034){
var G__17035 = cljs.core.first(seq17034);
var seq17034__$1 = cljs.core.next(seq17034);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__17035,seq17034__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args17038 = [];
var len__7492__auto___17588 = arguments.length;
var i__7493__auto___17589 = (0);
while(true){
if((i__7493__auto___17589 < len__7492__auto___17588)){
args17038.push((arguments[i__7493__auto___17589]));

var G__17590 = (i__7493__auto___17589 + (1));
i__7493__auto___17589 = G__17590;
continue;
} else {
}
break;
}

var G__17042 = args17038.length;
switch (G__17042) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17038.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.sub,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq17039){
var G__17040 = cljs.core.first(seq17039);
var seq17039__$1 = cljs.core.next(seq17039);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__17040,seq17039__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args17043 = [];
var len__7492__auto___17592 = arguments.length;
var i__7493__auto___17593 = (0);
while(true){
if((i__7493__auto___17593 < len__7492__auto___17592)){
args17043.push((arguments[i__7493__auto___17593]));

var G__17594 = (i__7493__auto___17593 + (1));
i__7493__auto___17593 = G__17594;
continue;
} else {
}
break;
}

var G__17047 = args17043.length;
switch (G__17047) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17043.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.summary,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq17044){
var G__17045 = cljs.core.first(seq17044);
var seq17044__$1 = cljs.core.next(seq17044);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__17045,seq17044__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args17048 = [];
var len__7492__auto___17596 = arguments.length;
var i__7493__auto___17597 = (0);
while(true){
if((i__7493__auto___17597 < len__7492__auto___17596)){
args17048.push((arguments[i__7493__auto___17597]));

var G__17598 = (i__7493__auto___17597 + (1));
i__7493__auto___17597 = G__17598;
continue;
} else {
}
break;
}

var G__17052 = args17048.length;
switch (G__17052) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17048.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.sup,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq17049){
var G__17050 = cljs.core.first(seq17049);
var seq17049__$1 = cljs.core.next(seq17049);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__17050,seq17049__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args17053 = [];
var len__7492__auto___17600 = arguments.length;
var i__7493__auto___17601 = (0);
while(true){
if((i__7493__auto___17601 < len__7492__auto___17600)){
args17053.push((arguments[i__7493__auto___17601]));

var G__17602 = (i__7493__auto___17601 + (1));
i__7493__auto___17601 = G__17602;
continue;
} else {
}
break;
}

var G__17057 = args17053.length;
switch (G__17057) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17053.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.table,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq17054){
var G__17055 = cljs.core.first(seq17054);
var seq17054__$1 = cljs.core.next(seq17054);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__17055,seq17054__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args17058 = [];
var len__7492__auto___17604 = arguments.length;
var i__7493__auto___17605 = (0);
while(true){
if((i__7493__auto___17605 < len__7492__auto___17604)){
args17058.push((arguments[i__7493__auto___17605]));

var G__17606 = (i__7493__auto___17605 + (1));
i__7493__auto___17605 = G__17606;
continue;
} else {
}
break;
}

var G__17062 = args17058.length;
switch (G__17062) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17058.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq17059){
var G__17060 = cljs.core.first(seq17059);
var seq17059__$1 = cljs.core.next(seq17059);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__17060,seq17059__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args17063 = [];
var len__7492__auto___17608 = arguments.length;
var i__7493__auto___17609 = (0);
while(true){
if((i__7493__auto___17609 < len__7492__auto___17608)){
args17063.push((arguments[i__7493__auto___17609]));

var G__17610 = (i__7493__auto___17609 + (1));
i__7493__auto___17609 = G__17610;
continue;
} else {
}
break;
}

var G__17067 = args17063.length;
switch (G__17067) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17063.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.td,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq17064){
var G__17065 = cljs.core.first(seq17064);
var seq17064__$1 = cljs.core.next(seq17064);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__17065,seq17064__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args17068 = [];
var len__7492__auto___17612 = arguments.length;
var i__7493__auto___17613 = (0);
while(true){
if((i__7493__auto___17613 < len__7492__auto___17612)){
args17068.push((arguments[i__7493__auto___17613]));

var G__17614 = (i__7493__auto___17613 + (1));
i__7493__auto___17613 = G__17614;
continue;
} else {
}
break;
}

var G__17072 = args17068.length;
switch (G__17072) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17068.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq17069){
var G__17070 = cljs.core.first(seq17069);
var seq17069__$1 = cljs.core.next(seq17069);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__17070,seq17069__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args17073 = [];
var len__7492__auto___17616 = arguments.length;
var i__7493__auto___17617 = (0);
while(true){
if((i__7493__auto___17617 < len__7492__auto___17616)){
args17073.push((arguments[i__7493__auto___17617]));

var G__17618 = (i__7493__auto___17617 + (1));
i__7493__auto___17617 = G__17618;
continue;
} else {
}
break;
}

var G__17077 = args17073.length;
switch (G__17077) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17073.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.th,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq17074){
var G__17075 = cljs.core.first(seq17074);
var seq17074__$1 = cljs.core.next(seq17074);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__17075,seq17074__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args17078 = [];
var len__7492__auto___17620 = arguments.length;
var i__7493__auto___17621 = (0);
while(true){
if((i__7493__auto___17621 < len__7492__auto___17620)){
args17078.push((arguments[i__7493__auto___17621]));

var G__17622 = (i__7493__auto___17621 + (1));
i__7493__auto___17621 = G__17622;
continue;
} else {
}
break;
}

var G__17082 = args17078.length;
switch (G__17082) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17078.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.thead,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq17079){
var G__17080 = cljs.core.first(seq17079);
var seq17079__$1 = cljs.core.next(seq17079);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__17080,seq17079__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args17083 = [];
var len__7492__auto___17624 = arguments.length;
var i__7493__auto___17625 = (0);
while(true){
if((i__7493__auto___17625 < len__7492__auto___17624)){
args17083.push((arguments[i__7493__auto___17625]));

var G__17626 = (i__7493__auto___17625 + (1));
i__7493__auto___17625 = G__17626;
continue;
} else {
}
break;
}

var G__17087 = args17083.length;
switch (G__17087) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17083.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.time,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq17084){
var G__17085 = cljs.core.first(seq17084);
var seq17084__$1 = cljs.core.next(seq17084);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__17085,seq17084__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args17088 = [];
var len__7492__auto___17628 = arguments.length;
var i__7493__auto___17629 = (0);
while(true){
if((i__7493__auto___17629 < len__7492__auto___17628)){
args17088.push((arguments[i__7493__auto___17629]));

var G__17630 = (i__7493__auto___17629 + (1));
i__7493__auto___17629 = G__17630;
continue;
} else {
}
break;
}

var G__17092 = args17088.length;
switch (G__17092) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17088.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.title,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq17089){
var G__17090 = cljs.core.first(seq17089);
var seq17089__$1 = cljs.core.next(seq17089);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__17090,seq17089__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args17093 = [];
var len__7492__auto___17632 = arguments.length;
var i__7493__auto___17633 = (0);
while(true){
if((i__7493__auto___17633 < len__7492__auto___17632)){
args17093.push((arguments[i__7493__auto___17633]));

var G__17634 = (i__7493__auto___17633 + (1));
i__7493__auto___17633 = G__17634;
continue;
} else {
}
break;
}

var G__17097 = args17093.length;
switch (G__17097) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17093.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.tr,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq17094){
var G__17095 = cljs.core.first(seq17094);
var seq17094__$1 = cljs.core.next(seq17094);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__17095,seq17094__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args17098 = [];
var len__7492__auto___17636 = arguments.length;
var i__7493__auto___17637 = (0);
while(true){
if((i__7493__auto___17637 < len__7492__auto___17636)){
args17098.push((arguments[i__7493__auto___17637]));

var G__17638 = (i__7493__auto___17637 + (1));
i__7493__auto___17637 = G__17638;
continue;
} else {
}
break;
}

var G__17102 = args17098.length;
switch (G__17102) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17098.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.track,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq17099){
var G__17100 = cljs.core.first(seq17099);
var seq17099__$1 = cljs.core.next(seq17099);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__17100,seq17099__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args17103 = [];
var len__7492__auto___17640 = arguments.length;
var i__7493__auto___17641 = (0);
while(true){
if((i__7493__auto___17641 < len__7492__auto___17640)){
args17103.push((arguments[i__7493__auto___17641]));

var G__17642 = (i__7493__auto___17641 + (1));
i__7493__auto___17641 = G__17642;
continue;
} else {
}
break;
}

var G__17107 = args17103.length;
switch (G__17107) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17103.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.u,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq17104){
var G__17105 = cljs.core.first(seq17104);
var seq17104__$1 = cljs.core.next(seq17104);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__17105,seq17104__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args17108 = [];
var len__7492__auto___17644 = arguments.length;
var i__7493__auto___17645 = (0);
while(true){
if((i__7493__auto___17645 < len__7492__auto___17644)){
args17108.push((arguments[i__7493__auto___17645]));

var G__17646 = (i__7493__auto___17645 + (1));
i__7493__auto___17645 = G__17646;
continue;
} else {
}
break;
}

var G__17112 = args17108.length;
switch (G__17112) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17108.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.ul,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq17109){
var G__17110 = cljs.core.first(seq17109);
var seq17109__$1 = cljs.core.next(seq17109);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__17110,seq17109__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args17113 = [];
var len__7492__auto___17648 = arguments.length;
var i__7493__auto___17649 = (0);
while(true){
if((i__7493__auto___17649 < len__7492__auto___17648)){
args17113.push((arguments[i__7493__auto___17649]));

var G__17650 = (i__7493__auto___17649 + (1));
i__7493__auto___17649 = G__17650;
continue;
} else {
}
break;
}

var G__17117 = args17113.length;
switch (G__17117) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17113.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.var$,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq17114){
var G__17115 = cljs.core.first(seq17114);
var seq17114__$1 = cljs.core.next(seq17114);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__17115,seq17114__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args17118 = [];
var len__7492__auto___17652 = arguments.length;
var i__7493__auto___17653 = (0);
while(true){
if((i__7493__auto___17653 < len__7492__auto___17652)){
args17118.push((arguments[i__7493__auto___17653]));

var G__17654 = (i__7493__auto___17653 + (1));
i__7493__auto___17653 = G__17654;
continue;
} else {
}
break;
}

var G__17122 = args17118.length;
switch (G__17122) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17118.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.video,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq17119){
var G__17120 = cljs.core.first(seq17119);
var seq17119__$1 = cljs.core.next(seq17119);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__17120,seq17119__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args17123 = [];
var len__7492__auto___17656 = arguments.length;
var i__7493__auto___17657 = (0);
while(true){
if((i__7493__auto___17657 < len__7492__auto___17656)){
args17123.push((arguments[i__7493__auto___17657]));

var G__17658 = (i__7493__auto___17657 + (1));
i__7493__auto___17657 = G__17658;
continue;
} else {
}
break;
}

var G__17127 = args17123.length;
switch (G__17127) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17123.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq17124){
var G__17125 = cljs.core.first(seq17124);
var seq17124__$1 = cljs.core.next(seq17124);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__17125,seq17124__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args17128 = [];
var len__7492__auto___17660 = arguments.length;
var i__7493__auto___17661 = (0);
while(true){
if((i__7493__auto___17661 < len__7492__auto___17660)){
args17128.push((arguments[i__7493__auto___17661]));

var G__17662 = (i__7493__auto___17661 + (1));
i__7493__auto___17661 = G__17662;
continue;
} else {
}
break;
}

var G__17132 = args17128.length;
switch (G__17132) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17128.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.circle,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq17129){
var G__17130 = cljs.core.first(seq17129);
var seq17129__$1 = cljs.core.next(seq17129);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__17130,seq17129__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args17133 = [];
var len__7492__auto___17664 = arguments.length;
var i__7493__auto___17665 = (0);
while(true){
if((i__7493__auto___17665 < len__7492__auto___17664)){
args17133.push((arguments[i__7493__auto___17665]));

var G__17666 = (i__7493__auto___17665 + (1));
i__7493__auto___17665 = G__17666;
continue;
} else {
}
break;
}

var G__17137 = args17133.length;
switch (G__17137) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17133.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.clipPath,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq17134){
var G__17135 = cljs.core.first(seq17134);
var seq17134__$1 = cljs.core.next(seq17134);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__17135,seq17134__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args17138 = [];
var len__7492__auto___17668 = arguments.length;
var i__7493__auto___17669 = (0);
while(true){
if((i__7493__auto___17669 < len__7492__auto___17668)){
args17138.push((arguments[i__7493__auto___17669]));

var G__17670 = (i__7493__auto___17669 + (1));
i__7493__auto___17669 = G__17670;
continue;
} else {
}
break;
}

var G__17142 = args17138.length;
switch (G__17142) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17138.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq17139){
var G__17140 = cljs.core.first(seq17139);
var seq17139__$1 = cljs.core.next(seq17139);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__17140,seq17139__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args17143 = [];
var len__7492__auto___17672 = arguments.length;
var i__7493__auto___17673 = (0);
while(true){
if((i__7493__auto___17673 < len__7492__auto___17672)){
args17143.push((arguments[i__7493__auto___17673]));

var G__17674 = (i__7493__auto___17673 + (1));
i__7493__auto___17673 = G__17674;
continue;
} else {
}
break;
}

var G__17147 = args17143.length;
switch (G__17147) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17143.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.g,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq17144){
var G__17145 = cljs.core.first(seq17144);
var seq17144__$1 = cljs.core.next(seq17144);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__17145,seq17144__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args17148 = [];
var len__7492__auto___17676 = arguments.length;
var i__7493__auto___17677 = (0);
while(true){
if((i__7493__auto___17677 < len__7492__auto___17676)){
args17148.push((arguments[i__7493__auto___17677]));

var G__17678 = (i__7493__auto___17677 + (1));
i__7493__auto___17677 = G__17678;
continue;
} else {
}
break;
}

var G__17152 = args17148.length;
switch (G__17152) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17148.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.line,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq17149){
var G__17150 = cljs.core.first(seq17149);
var seq17149__$1 = cljs.core.next(seq17149);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__17150,seq17149__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args17153 = [];
var len__7492__auto___17680 = arguments.length;
var i__7493__auto___17681 = (0);
while(true){
if((i__7493__auto___17681 < len__7492__auto___17680)){
args17153.push((arguments[i__7493__auto___17681]));

var G__17682 = (i__7493__auto___17681 + (1));
i__7493__auto___17681 = G__17682;
continue;
} else {
}
break;
}

var G__17157 = args17153.length;
switch (G__17157) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17153.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.mask,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq17154){
var G__17155 = cljs.core.first(seq17154);
var seq17154__$1 = cljs.core.next(seq17154);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__17155,seq17154__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args17158 = [];
var len__7492__auto___17684 = arguments.length;
var i__7493__auto___17685 = (0);
while(true){
if((i__7493__auto___17685 < len__7492__auto___17684)){
args17158.push((arguments[i__7493__auto___17685]));

var G__17686 = (i__7493__auto___17685 + (1));
i__7493__auto___17685 = G__17686;
continue;
} else {
}
break;
}

var G__17162 = args17158.length;
switch (G__17162) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17158.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.path,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq17159){
var G__17160 = cljs.core.first(seq17159);
var seq17159__$1 = cljs.core.next(seq17159);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__17160,seq17159__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args17163 = [];
var len__7492__auto___17688 = arguments.length;
var i__7493__auto___17689 = (0);
while(true){
if((i__7493__auto___17689 < len__7492__auto___17688)){
args17163.push((arguments[i__7493__auto___17689]));

var G__17690 = (i__7493__auto___17689 + (1));
i__7493__auto___17689 = G__17690;
continue;
} else {
}
break;
}

var G__17167 = args17163.length;
switch (G__17167) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17163.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.pattern,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq17164){
var G__17165 = cljs.core.first(seq17164);
var seq17164__$1 = cljs.core.next(seq17164);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__17165,seq17164__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args17168 = [];
var len__7492__auto___17692 = arguments.length;
var i__7493__auto___17693 = (0);
while(true){
if((i__7493__auto___17693 < len__7492__auto___17692)){
args17168.push((arguments[i__7493__auto___17693]));

var G__17694 = (i__7493__auto___17693 + (1));
i__7493__auto___17693 = G__17694;
continue;
} else {
}
break;
}

var G__17172 = args17168.length;
switch (G__17172) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17168.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq17169){
var G__17170 = cljs.core.first(seq17169);
var seq17169__$1 = cljs.core.next(seq17169);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__17170,seq17169__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args17173 = [];
var len__7492__auto___17696 = arguments.length;
var i__7493__auto___17697 = (0);
while(true){
if((i__7493__auto___17697 < len__7492__auto___17696)){
args17173.push((arguments[i__7493__auto___17697]));

var G__17698 = (i__7493__auto___17697 + (1));
i__7493__auto___17697 = G__17698;
continue;
} else {
}
break;
}

var G__17177 = args17173.length;
switch (G__17177) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17173.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.rect,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq17174){
var G__17175 = cljs.core.first(seq17174);
var seq17174__$1 = cljs.core.next(seq17174);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__17175,seq17174__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args17178 = [];
var len__7492__auto___17700 = arguments.length;
var i__7493__auto___17701 = (0);
while(true){
if((i__7493__auto___17701 < len__7492__auto___17700)){
args17178.push((arguments[i__7493__auto___17701]));

var G__17702 = (i__7493__auto___17701 + (1));
i__7493__auto___17701 = G__17702;
continue;
} else {
}
break;
}

var G__17182 = args17178.length;
switch (G__17182) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17178.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.svg,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq17179){
var G__17180 = cljs.core.first(seq17179);
var seq17179__$1 = cljs.core.next(seq17179);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__17180,seq17179__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args17183 = [];
var len__7492__auto___17704 = arguments.length;
var i__7493__auto___17705 = (0);
while(true){
if((i__7493__auto___17705 < len__7492__auto___17704)){
args17183.push((arguments[i__7493__auto___17705]));

var G__17706 = (i__7493__auto___17705 + (1));
i__7493__auto___17705 = G__17706;
continue;
} else {
}
break;
}

var G__17187 = args17183.length;
switch (G__17187) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17183.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.text,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq17184){
var G__17185 = cljs.core.first(seq17184);
var seq17184__$1 = cljs.core.next(seq17184);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__17185,seq17184__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args17188 = [];
var len__7492__auto___17708 = arguments.length;
var i__7493__auto___17709 = (0);
while(true){
if((i__7493__auto___17709 < len__7492__auto___17708)){
args17188.push((arguments[i__7493__auto___17709]));

var G__17710 = (i__7493__auto___17709 + (1));
i__7493__auto___17709 = G__17710;
continue;
} else {
}
break;
}

var G__17192 = args17188.length;
switch (G__17192) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17188.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.defs,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq17189){
var G__17190 = cljs.core.first(seq17189);
var seq17189__$1 = cljs.core.next(seq17189);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__17190,seq17189__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args17193 = [];
var len__7492__auto___17712 = arguments.length;
var i__7493__auto___17713 = (0);
while(true){
if((i__7493__auto___17713 < len__7492__auto___17712)){
args17193.push((arguments[i__7493__auto___17713]));

var G__17714 = (i__7493__auto___17713 + (1));
i__7493__auto___17713 = G__17714;
continue;
} else {
}
break;
}

var G__17197 = args17193.length;
switch (G__17197) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17193.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq17194){
var G__17195 = cljs.core.first(seq17194);
var seq17194__$1 = cljs.core.next(seq17194);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__17195,seq17194__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args17198 = [];
var len__7492__auto___17716 = arguments.length;
var i__7493__auto___17717 = (0);
while(true){
if((i__7493__auto___17717 < len__7492__auto___17716)){
args17198.push((arguments[i__7493__auto___17717]));

var G__17718 = (i__7493__auto___17717 + (1));
i__7493__auto___17717 = G__17718;
continue;
} else {
}
break;
}

var G__17202 = args17198.length;
switch (G__17202) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17198.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq17199){
var G__17200 = cljs.core.first(seq17199);
var seq17199__$1 = cljs.core.next(seq17199);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__17200,seq17199__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args17203 = [];
var len__7492__auto___17720 = arguments.length;
var i__7493__auto___17721 = (0);
while(true){
if((i__7493__auto___17721 < len__7492__auto___17720)){
args17203.push((arguments[i__7493__auto___17721]));

var G__17722 = (i__7493__auto___17721 + (1));
i__7493__auto___17721 = G__17722;
continue;
} else {
}
break;
}

var G__17207 = args17203.length;
switch (G__17207) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17203.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq17204){
var G__17205 = cljs.core.first(seq17204);
var seq17204__$1 = cljs.core.next(seq17204);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__17205,seq17204__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args17208 = [];
var len__7492__auto___17724 = arguments.length;
var i__7493__auto___17725 = (0);
while(true){
if((i__7493__auto___17725 < len__7492__auto___17724)){
args17208.push((arguments[i__7493__auto___17725]));

var G__17726 = (i__7493__auto___17725 + (1));
i__7493__auto___17725 = G__17726;
continue;
} else {
}
break;
}

var G__17212 = args17208.length;
switch (G__17212) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17208.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.stop,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq17209){
var G__17210 = cljs.core.first(seq17209);
var seq17209__$1 = cljs.core.next(seq17209);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__17210,seq17209__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args17213 = [];
var len__7492__auto___17728 = arguments.length;
var i__7493__auto___17729 = (0);
while(true){
if((i__7493__auto___17729 < len__7492__auto___17728)){
args17213.push((arguments[i__7493__auto___17729]));

var G__17730 = (i__7493__auto___17729 + (1));
i__7493__auto___17729 = G__17730;
continue;
} else {
}
break;
}

var G__17217 = args17213.length;
switch (G__17217) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17213.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq17214){
var G__17215 = cljs.core.first(seq17214);
var seq17214__$1 = cljs.core.next(seq17214);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__17215,seq17214__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args17218 = [];
var len__7492__auto___17732 = arguments.length;
var i__7493__auto___17733 = (0);
while(true){
if((i__7493__auto___17733 < len__7492__auto___17732)){
args17218.push((arguments[i__7493__auto___17733]));

var G__17734 = (i__7493__auto___17733 + (1));
i__7493__auto___17733 = G__17734;
continue;
} else {
}
break;
}

var G__17222 = args17218.length;
switch (G__17222) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17218.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(om.dom.input,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq17219){
var G__17220 = cljs.core.first(seq17219);
var seq17219__$1 = cljs.core.next(seq17219);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__17220,seq17219__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args17223 = [];
var len__7492__auto___17736 = arguments.length;
var i__7493__auto___17737 = (0);
while(true){
if((i__7493__auto___17737 < len__7492__auto___17736)){
args17223.push((arguments[i__7493__auto___17737]));

var G__17738 = (i__7493__auto___17737 + (1));
i__7493__auto___17737 = G__17738;
continue;
} else {
}
break;
}

var G__17227 = args17223.length;
switch (G__17227) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17223.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(om.dom.textarea,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq17224){
var G__17225 = cljs.core.first(seq17224);
var seq17224__$1 = cljs.core.next(seq17224);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__17225,seq17224__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args16743 = [];
var len__7492__auto___17740 = arguments.length;
var i__7493__auto___17741 = (0);
while(true){
if((i__7493__auto___17741 < len__7492__auto___17740)){
args16743.push((arguments[i__7493__auto___17741]));

var G__17742 = (i__7493__auto___17741 + (1));
i__7493__auto___17741 = G__17742;
continue;
} else {
}
break;
}

var G__16747 = args16743.length;
switch (G__16747) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args16743.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7511__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__16551__auto__,children__16552__auto__){
return om_tools.dom.element(om.dom.option,opts__16551__auto__,children__16552__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq16744){
var G__16745 = cljs.core.first(seq16744);
var seq16744__$1 = cljs.core.next(seq16744);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__16745,seq16744__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
