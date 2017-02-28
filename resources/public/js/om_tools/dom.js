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
if(cljs.core.truth_((function (){var or__34390__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__34390__auto__){
return or__34390__auto__;
} else {
var G__66898 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__66898) {
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
var G__66901 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__66901) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__66907){
var vec__66908 = p__66907;
var k = cljs.core.nth.call(null,vec__66908,(0),null);
var v = cljs.core.nth.call(null,vec__66908,(1),null);
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
return (function (){var or__34390__auto__ = React.isValidElement;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
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
var vec__66914 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__66914,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__66914,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args66917 = [];
var len__35573__auto___67562 = arguments.length;
var i__35574__auto___67563 = (0);
while(true){
if((i__35574__auto___67563 < len__35573__auto___67562)){
args66917.push((arguments[i__35574__auto___67563]));

var G__67564 = (i__35574__auto___67563 + (1));
i__35574__auto___67563 = G__67564;
continue;
} else {
}
break;
}

var G__66921 = args66917.length;
switch (G__66921) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66917.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq66918){
var G__66919 = cljs.core.first.call(null,seq66918);
var seq66918__$1 = cljs.core.next.call(null,seq66918);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__66919,seq66918__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args66922 = [];
var len__35573__auto___67566 = arguments.length;
var i__35574__auto___67567 = (0);
while(true){
if((i__35574__auto___67567 < len__35573__auto___67566)){
args66922.push((arguments[i__35574__auto___67567]));

var G__67568 = (i__35574__auto___67567 + (1));
i__35574__auto___67567 = G__67568;
continue;
} else {
}
break;
}

var G__66926 = args66922.length;
switch (G__66926) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66922.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq66923){
var G__66924 = cljs.core.first.call(null,seq66923);
var seq66923__$1 = cljs.core.next.call(null,seq66923);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__66924,seq66923__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args66927 = [];
var len__35573__auto___67570 = arguments.length;
var i__35574__auto___67571 = (0);
while(true){
if((i__35574__auto___67571 < len__35573__auto___67570)){
args66927.push((arguments[i__35574__auto___67571]));

var G__67572 = (i__35574__auto___67571 + (1));
i__35574__auto___67571 = G__67572;
continue;
} else {
}
break;
}

var G__66931 = args66927.length;
switch (G__66931) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66927.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq66928){
var G__66929 = cljs.core.first.call(null,seq66928);
var seq66928__$1 = cljs.core.next.call(null,seq66928);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__66929,seq66928__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args66932 = [];
var len__35573__auto___67574 = arguments.length;
var i__35574__auto___67575 = (0);
while(true){
if((i__35574__auto___67575 < len__35573__auto___67574)){
args66932.push((arguments[i__35574__auto___67575]));

var G__67576 = (i__35574__auto___67575 + (1));
i__35574__auto___67575 = G__67576;
continue;
} else {
}
break;
}

var G__66936 = args66932.length;
switch (G__66936) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66932.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq66933){
var G__66934 = cljs.core.first.call(null,seq66933);
var seq66933__$1 = cljs.core.next.call(null,seq66933);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__66934,seq66933__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args66937 = [];
var len__35573__auto___67578 = arguments.length;
var i__35574__auto___67579 = (0);
while(true){
if((i__35574__auto___67579 < len__35573__auto___67578)){
args66937.push((arguments[i__35574__auto___67579]));

var G__67580 = (i__35574__auto___67579 + (1));
i__35574__auto___67579 = G__67580;
continue;
} else {
}
break;
}

var G__66941 = args66937.length;
switch (G__66941) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66937.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq66938){
var G__66939 = cljs.core.first.call(null,seq66938);
var seq66938__$1 = cljs.core.next.call(null,seq66938);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__66939,seq66938__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args66942 = [];
var len__35573__auto___67582 = arguments.length;
var i__35574__auto___67583 = (0);
while(true){
if((i__35574__auto___67583 < len__35573__auto___67582)){
args66942.push((arguments[i__35574__auto___67583]));

var G__67584 = (i__35574__auto___67583 + (1));
i__35574__auto___67583 = G__67584;
continue;
} else {
}
break;
}

var G__66946 = args66942.length;
switch (G__66946) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66942.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq66943){
var G__66944 = cljs.core.first.call(null,seq66943);
var seq66943__$1 = cljs.core.next.call(null,seq66943);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__66944,seq66943__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args66947 = [];
var len__35573__auto___67586 = arguments.length;
var i__35574__auto___67587 = (0);
while(true){
if((i__35574__auto___67587 < len__35573__auto___67586)){
args66947.push((arguments[i__35574__auto___67587]));

var G__67588 = (i__35574__auto___67587 + (1));
i__35574__auto___67587 = G__67588;
continue;
} else {
}
break;
}

var G__66951 = args66947.length;
switch (G__66951) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66947.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq66948){
var G__66949 = cljs.core.first.call(null,seq66948);
var seq66948__$1 = cljs.core.next.call(null,seq66948);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__66949,seq66948__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args66952 = [];
var len__35573__auto___67590 = arguments.length;
var i__35574__auto___67591 = (0);
while(true){
if((i__35574__auto___67591 < len__35573__auto___67590)){
args66952.push((arguments[i__35574__auto___67591]));

var G__67592 = (i__35574__auto___67591 + (1));
i__35574__auto___67591 = G__67592;
continue;
} else {
}
break;
}

var G__66956 = args66952.length;
switch (G__66956) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66952.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq66953){
var G__66954 = cljs.core.first.call(null,seq66953);
var seq66953__$1 = cljs.core.next.call(null,seq66953);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__66954,seq66953__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args66957 = [];
var len__35573__auto___67594 = arguments.length;
var i__35574__auto___67595 = (0);
while(true){
if((i__35574__auto___67595 < len__35573__auto___67594)){
args66957.push((arguments[i__35574__auto___67595]));

var G__67596 = (i__35574__auto___67595 + (1));
i__35574__auto___67595 = G__67596;
continue;
} else {
}
break;
}

var G__66961 = args66957.length;
switch (G__66961) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66957.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq66958){
var G__66959 = cljs.core.first.call(null,seq66958);
var seq66958__$1 = cljs.core.next.call(null,seq66958);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__66959,seq66958__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args66962 = [];
var len__35573__auto___67598 = arguments.length;
var i__35574__auto___67599 = (0);
while(true){
if((i__35574__auto___67599 < len__35573__auto___67598)){
args66962.push((arguments[i__35574__auto___67599]));

var G__67600 = (i__35574__auto___67599 + (1));
i__35574__auto___67599 = G__67600;
continue;
} else {
}
break;
}

var G__66966 = args66962.length;
switch (G__66966) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66962.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq66963){
var G__66964 = cljs.core.first.call(null,seq66963);
var seq66963__$1 = cljs.core.next.call(null,seq66963);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__66964,seq66963__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args66967 = [];
var len__35573__auto___67602 = arguments.length;
var i__35574__auto___67603 = (0);
while(true){
if((i__35574__auto___67603 < len__35573__auto___67602)){
args66967.push((arguments[i__35574__auto___67603]));

var G__67604 = (i__35574__auto___67603 + (1));
i__35574__auto___67603 = G__67604;
continue;
} else {
}
break;
}

var G__66971 = args66967.length;
switch (G__66971) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66967.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq66968){
var G__66969 = cljs.core.first.call(null,seq66968);
var seq66968__$1 = cljs.core.next.call(null,seq66968);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__66969,seq66968__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args66972 = [];
var len__35573__auto___67606 = arguments.length;
var i__35574__auto___67607 = (0);
while(true){
if((i__35574__auto___67607 < len__35573__auto___67606)){
args66972.push((arguments[i__35574__auto___67607]));

var G__67608 = (i__35574__auto___67607 + (1));
i__35574__auto___67607 = G__67608;
continue;
} else {
}
break;
}

var G__66976 = args66972.length;
switch (G__66976) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66972.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq66973){
var G__66974 = cljs.core.first.call(null,seq66973);
var seq66973__$1 = cljs.core.next.call(null,seq66973);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__66974,seq66973__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args66977 = [];
var len__35573__auto___67610 = arguments.length;
var i__35574__auto___67611 = (0);
while(true){
if((i__35574__auto___67611 < len__35573__auto___67610)){
args66977.push((arguments[i__35574__auto___67611]));

var G__67612 = (i__35574__auto___67611 + (1));
i__35574__auto___67611 = G__67612;
continue;
} else {
}
break;
}

var G__66981 = args66977.length;
switch (G__66981) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66977.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq66978){
var G__66979 = cljs.core.first.call(null,seq66978);
var seq66978__$1 = cljs.core.next.call(null,seq66978);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__66979,seq66978__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args66982 = [];
var len__35573__auto___67614 = arguments.length;
var i__35574__auto___67615 = (0);
while(true){
if((i__35574__auto___67615 < len__35573__auto___67614)){
args66982.push((arguments[i__35574__auto___67615]));

var G__67616 = (i__35574__auto___67615 + (1));
i__35574__auto___67615 = G__67616;
continue;
} else {
}
break;
}

var G__66986 = args66982.length;
switch (G__66986) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66982.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq66983){
var G__66984 = cljs.core.first.call(null,seq66983);
var seq66983__$1 = cljs.core.next.call(null,seq66983);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__66984,seq66983__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args66987 = [];
var len__35573__auto___67618 = arguments.length;
var i__35574__auto___67619 = (0);
while(true){
if((i__35574__auto___67619 < len__35573__auto___67618)){
args66987.push((arguments[i__35574__auto___67619]));

var G__67620 = (i__35574__auto___67619 + (1));
i__35574__auto___67619 = G__67620;
continue;
} else {
}
break;
}

var G__66991 = args66987.length;
switch (G__66991) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66987.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq66988){
var G__66989 = cljs.core.first.call(null,seq66988);
var seq66988__$1 = cljs.core.next.call(null,seq66988);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__66989,seq66988__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args66992 = [];
var len__35573__auto___67622 = arguments.length;
var i__35574__auto___67623 = (0);
while(true){
if((i__35574__auto___67623 < len__35573__auto___67622)){
args66992.push((arguments[i__35574__auto___67623]));

var G__67624 = (i__35574__auto___67623 + (1));
i__35574__auto___67623 = G__67624;
continue;
} else {
}
break;
}

var G__66996 = args66992.length;
switch (G__66996) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66992.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq66993){
var G__66994 = cljs.core.first.call(null,seq66993);
var seq66993__$1 = cljs.core.next.call(null,seq66993);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__66994,seq66993__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args66997 = [];
var len__35573__auto___67626 = arguments.length;
var i__35574__auto___67627 = (0);
while(true){
if((i__35574__auto___67627 < len__35573__auto___67626)){
args66997.push((arguments[i__35574__auto___67627]));

var G__67628 = (i__35574__auto___67627 + (1));
i__35574__auto___67627 = G__67628;
continue;
} else {
}
break;
}

var G__67001 = args66997.length;
switch (G__67001) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args66997.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq66998){
var G__66999 = cljs.core.first.call(null,seq66998);
var seq66998__$1 = cljs.core.next.call(null,seq66998);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__66999,seq66998__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args67002 = [];
var len__35573__auto___67630 = arguments.length;
var i__35574__auto___67631 = (0);
while(true){
if((i__35574__auto___67631 < len__35573__auto___67630)){
args67002.push((arguments[i__35574__auto___67631]));

var G__67632 = (i__35574__auto___67631 + (1));
i__35574__auto___67631 = G__67632;
continue;
} else {
}
break;
}

var G__67006 = args67002.length;
switch (G__67006) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67002.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq67003){
var G__67004 = cljs.core.first.call(null,seq67003);
var seq67003__$1 = cljs.core.next.call(null,seq67003);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__67004,seq67003__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args67007 = [];
var len__35573__auto___67634 = arguments.length;
var i__35574__auto___67635 = (0);
while(true){
if((i__35574__auto___67635 < len__35573__auto___67634)){
args67007.push((arguments[i__35574__auto___67635]));

var G__67636 = (i__35574__auto___67635 + (1));
i__35574__auto___67635 = G__67636;
continue;
} else {
}
break;
}

var G__67011 = args67007.length;
switch (G__67011) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67007.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq67008){
var G__67009 = cljs.core.first.call(null,seq67008);
var seq67008__$1 = cljs.core.next.call(null,seq67008);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__67009,seq67008__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args67012 = [];
var len__35573__auto___67638 = arguments.length;
var i__35574__auto___67639 = (0);
while(true){
if((i__35574__auto___67639 < len__35573__auto___67638)){
args67012.push((arguments[i__35574__auto___67639]));

var G__67640 = (i__35574__auto___67639 + (1));
i__35574__auto___67639 = G__67640;
continue;
} else {
}
break;
}

var G__67016 = args67012.length;
switch (G__67016) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67012.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq67013){
var G__67014 = cljs.core.first.call(null,seq67013);
var seq67013__$1 = cljs.core.next.call(null,seq67013);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__67014,seq67013__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args67017 = [];
var len__35573__auto___67642 = arguments.length;
var i__35574__auto___67643 = (0);
while(true){
if((i__35574__auto___67643 < len__35573__auto___67642)){
args67017.push((arguments[i__35574__auto___67643]));

var G__67644 = (i__35574__auto___67643 + (1));
i__35574__auto___67643 = G__67644;
continue;
} else {
}
break;
}

var G__67021 = args67017.length;
switch (G__67021) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67017.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq67018){
var G__67019 = cljs.core.first.call(null,seq67018);
var seq67018__$1 = cljs.core.next.call(null,seq67018);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__67019,seq67018__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args67022 = [];
var len__35573__auto___67646 = arguments.length;
var i__35574__auto___67647 = (0);
while(true){
if((i__35574__auto___67647 < len__35573__auto___67646)){
args67022.push((arguments[i__35574__auto___67647]));

var G__67648 = (i__35574__auto___67647 + (1));
i__35574__auto___67647 = G__67648;
continue;
} else {
}
break;
}

var G__67026 = args67022.length;
switch (G__67026) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67022.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq67023){
var G__67024 = cljs.core.first.call(null,seq67023);
var seq67023__$1 = cljs.core.next.call(null,seq67023);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__67024,seq67023__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args67027 = [];
var len__35573__auto___67650 = arguments.length;
var i__35574__auto___67651 = (0);
while(true){
if((i__35574__auto___67651 < len__35573__auto___67650)){
args67027.push((arguments[i__35574__auto___67651]));

var G__67652 = (i__35574__auto___67651 + (1));
i__35574__auto___67651 = G__67652;
continue;
} else {
}
break;
}

var G__67031 = args67027.length;
switch (G__67031) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67027.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq67028){
var G__67029 = cljs.core.first.call(null,seq67028);
var seq67028__$1 = cljs.core.next.call(null,seq67028);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__67029,seq67028__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args67032 = [];
var len__35573__auto___67654 = arguments.length;
var i__35574__auto___67655 = (0);
while(true){
if((i__35574__auto___67655 < len__35573__auto___67654)){
args67032.push((arguments[i__35574__auto___67655]));

var G__67656 = (i__35574__auto___67655 + (1));
i__35574__auto___67655 = G__67656;
continue;
} else {
}
break;
}

var G__67036 = args67032.length;
switch (G__67036) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67032.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq67033){
var G__67034 = cljs.core.first.call(null,seq67033);
var seq67033__$1 = cljs.core.next.call(null,seq67033);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__67034,seq67033__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args67037 = [];
var len__35573__auto___67658 = arguments.length;
var i__35574__auto___67659 = (0);
while(true){
if((i__35574__auto___67659 < len__35573__auto___67658)){
args67037.push((arguments[i__35574__auto___67659]));

var G__67660 = (i__35574__auto___67659 + (1));
i__35574__auto___67659 = G__67660;
continue;
} else {
}
break;
}

var G__67041 = args67037.length;
switch (G__67041) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67037.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq67038){
var G__67039 = cljs.core.first.call(null,seq67038);
var seq67038__$1 = cljs.core.next.call(null,seq67038);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__67039,seq67038__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args67042 = [];
var len__35573__auto___67662 = arguments.length;
var i__35574__auto___67663 = (0);
while(true){
if((i__35574__auto___67663 < len__35573__auto___67662)){
args67042.push((arguments[i__35574__auto___67663]));

var G__67664 = (i__35574__auto___67663 + (1));
i__35574__auto___67663 = G__67664;
continue;
} else {
}
break;
}

var G__67046 = args67042.length;
switch (G__67046) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67042.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq67043){
var G__67044 = cljs.core.first.call(null,seq67043);
var seq67043__$1 = cljs.core.next.call(null,seq67043);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__67044,seq67043__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args67047 = [];
var len__35573__auto___67666 = arguments.length;
var i__35574__auto___67667 = (0);
while(true){
if((i__35574__auto___67667 < len__35573__auto___67666)){
args67047.push((arguments[i__35574__auto___67667]));

var G__67668 = (i__35574__auto___67667 + (1));
i__35574__auto___67667 = G__67668;
continue;
} else {
}
break;
}

var G__67051 = args67047.length;
switch (G__67051) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67047.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq67048){
var G__67049 = cljs.core.first.call(null,seq67048);
var seq67048__$1 = cljs.core.next.call(null,seq67048);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__67049,seq67048__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args67052 = [];
var len__35573__auto___67670 = arguments.length;
var i__35574__auto___67671 = (0);
while(true){
if((i__35574__auto___67671 < len__35573__auto___67670)){
args67052.push((arguments[i__35574__auto___67671]));

var G__67672 = (i__35574__auto___67671 + (1));
i__35574__auto___67671 = G__67672;
continue;
} else {
}
break;
}

var G__67056 = args67052.length;
switch (G__67056) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67052.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq67053){
var G__67054 = cljs.core.first.call(null,seq67053);
var seq67053__$1 = cljs.core.next.call(null,seq67053);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__67054,seq67053__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args67057 = [];
var len__35573__auto___67674 = arguments.length;
var i__35574__auto___67675 = (0);
while(true){
if((i__35574__auto___67675 < len__35573__auto___67674)){
args67057.push((arguments[i__35574__auto___67675]));

var G__67676 = (i__35574__auto___67675 + (1));
i__35574__auto___67675 = G__67676;
continue;
} else {
}
break;
}

var G__67061 = args67057.length;
switch (G__67061) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67057.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq67058){
var G__67059 = cljs.core.first.call(null,seq67058);
var seq67058__$1 = cljs.core.next.call(null,seq67058);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__67059,seq67058__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args67062 = [];
var len__35573__auto___67678 = arguments.length;
var i__35574__auto___67679 = (0);
while(true){
if((i__35574__auto___67679 < len__35573__auto___67678)){
args67062.push((arguments[i__35574__auto___67679]));

var G__67680 = (i__35574__auto___67679 + (1));
i__35574__auto___67679 = G__67680;
continue;
} else {
}
break;
}

var G__67066 = args67062.length;
switch (G__67066) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67062.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq67063){
var G__67064 = cljs.core.first.call(null,seq67063);
var seq67063__$1 = cljs.core.next.call(null,seq67063);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__67064,seq67063__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args67067 = [];
var len__35573__auto___67682 = arguments.length;
var i__35574__auto___67683 = (0);
while(true){
if((i__35574__auto___67683 < len__35573__auto___67682)){
args67067.push((arguments[i__35574__auto___67683]));

var G__67684 = (i__35574__auto___67683 + (1));
i__35574__auto___67683 = G__67684;
continue;
} else {
}
break;
}

var G__67071 = args67067.length;
switch (G__67071) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67067.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq67068){
var G__67069 = cljs.core.first.call(null,seq67068);
var seq67068__$1 = cljs.core.next.call(null,seq67068);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__67069,seq67068__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args67072 = [];
var len__35573__auto___67686 = arguments.length;
var i__35574__auto___67687 = (0);
while(true){
if((i__35574__auto___67687 < len__35573__auto___67686)){
args67072.push((arguments[i__35574__auto___67687]));

var G__67688 = (i__35574__auto___67687 + (1));
i__35574__auto___67687 = G__67688;
continue;
} else {
}
break;
}

var G__67076 = args67072.length;
switch (G__67076) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67072.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq67073){
var G__67074 = cljs.core.first.call(null,seq67073);
var seq67073__$1 = cljs.core.next.call(null,seq67073);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__67074,seq67073__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args67082 = [];
var len__35573__auto___67690 = arguments.length;
var i__35574__auto___67691 = (0);
while(true){
if((i__35574__auto___67691 < len__35573__auto___67690)){
args67082.push((arguments[i__35574__auto___67691]));

var G__67692 = (i__35574__auto___67691 + (1));
i__35574__auto___67691 = G__67692;
continue;
} else {
}
break;
}

var G__67086 = args67082.length;
switch (G__67086) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67082.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq67083){
var G__67084 = cljs.core.first.call(null,seq67083);
var seq67083__$1 = cljs.core.next.call(null,seq67083);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__67084,seq67083__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args67087 = [];
var len__35573__auto___67694 = arguments.length;
var i__35574__auto___67695 = (0);
while(true){
if((i__35574__auto___67695 < len__35573__auto___67694)){
args67087.push((arguments[i__35574__auto___67695]));

var G__67696 = (i__35574__auto___67695 + (1));
i__35574__auto___67695 = G__67696;
continue;
} else {
}
break;
}

var G__67091 = args67087.length;
switch (G__67091) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67087.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq67088){
var G__67089 = cljs.core.first.call(null,seq67088);
var seq67088__$1 = cljs.core.next.call(null,seq67088);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__67089,seq67088__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args67092 = [];
var len__35573__auto___67698 = arguments.length;
var i__35574__auto___67699 = (0);
while(true){
if((i__35574__auto___67699 < len__35573__auto___67698)){
args67092.push((arguments[i__35574__auto___67699]));

var G__67700 = (i__35574__auto___67699 + (1));
i__35574__auto___67699 = G__67700;
continue;
} else {
}
break;
}

var G__67096 = args67092.length;
switch (G__67096) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67092.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq67093){
var G__67094 = cljs.core.first.call(null,seq67093);
var seq67093__$1 = cljs.core.next.call(null,seq67093);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__67094,seq67093__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args67097 = [];
var len__35573__auto___67702 = arguments.length;
var i__35574__auto___67703 = (0);
while(true){
if((i__35574__auto___67703 < len__35573__auto___67702)){
args67097.push((arguments[i__35574__auto___67703]));

var G__67704 = (i__35574__auto___67703 + (1));
i__35574__auto___67703 = G__67704;
continue;
} else {
}
break;
}

var G__67101 = args67097.length;
switch (G__67101) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67097.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq67098){
var G__67099 = cljs.core.first.call(null,seq67098);
var seq67098__$1 = cljs.core.next.call(null,seq67098);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__67099,seq67098__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args67102 = [];
var len__35573__auto___67706 = arguments.length;
var i__35574__auto___67707 = (0);
while(true){
if((i__35574__auto___67707 < len__35573__auto___67706)){
args67102.push((arguments[i__35574__auto___67707]));

var G__67708 = (i__35574__auto___67707 + (1));
i__35574__auto___67707 = G__67708;
continue;
} else {
}
break;
}

var G__67106 = args67102.length;
switch (G__67106) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67102.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq67103){
var G__67104 = cljs.core.first.call(null,seq67103);
var seq67103__$1 = cljs.core.next.call(null,seq67103);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__67104,seq67103__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args67107 = [];
var len__35573__auto___67710 = arguments.length;
var i__35574__auto___67711 = (0);
while(true){
if((i__35574__auto___67711 < len__35573__auto___67710)){
args67107.push((arguments[i__35574__auto___67711]));

var G__67712 = (i__35574__auto___67711 + (1));
i__35574__auto___67711 = G__67712;
continue;
} else {
}
break;
}

var G__67111 = args67107.length;
switch (G__67111) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67107.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq67108){
var G__67109 = cljs.core.first.call(null,seq67108);
var seq67108__$1 = cljs.core.next.call(null,seq67108);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__67109,seq67108__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args67112 = [];
var len__35573__auto___67714 = arguments.length;
var i__35574__auto___67715 = (0);
while(true){
if((i__35574__auto___67715 < len__35573__auto___67714)){
args67112.push((arguments[i__35574__auto___67715]));

var G__67716 = (i__35574__auto___67715 + (1));
i__35574__auto___67715 = G__67716;
continue;
} else {
}
break;
}

var G__67116 = args67112.length;
switch (G__67116) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67112.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq67113){
var G__67114 = cljs.core.first.call(null,seq67113);
var seq67113__$1 = cljs.core.next.call(null,seq67113);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__67114,seq67113__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args67117 = [];
var len__35573__auto___67718 = arguments.length;
var i__35574__auto___67719 = (0);
while(true){
if((i__35574__auto___67719 < len__35573__auto___67718)){
args67117.push((arguments[i__35574__auto___67719]));

var G__67720 = (i__35574__auto___67719 + (1));
i__35574__auto___67719 = G__67720;
continue;
} else {
}
break;
}

var G__67121 = args67117.length;
switch (G__67121) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67117.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq67118){
var G__67119 = cljs.core.first.call(null,seq67118);
var seq67118__$1 = cljs.core.next.call(null,seq67118);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__67119,seq67118__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args67122 = [];
var len__35573__auto___67722 = arguments.length;
var i__35574__auto___67723 = (0);
while(true){
if((i__35574__auto___67723 < len__35573__auto___67722)){
args67122.push((arguments[i__35574__auto___67723]));

var G__67724 = (i__35574__auto___67723 + (1));
i__35574__auto___67723 = G__67724;
continue;
} else {
}
break;
}

var G__67126 = args67122.length;
switch (G__67126) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67122.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq67123){
var G__67124 = cljs.core.first.call(null,seq67123);
var seq67123__$1 = cljs.core.next.call(null,seq67123);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__67124,seq67123__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args67127 = [];
var len__35573__auto___67726 = arguments.length;
var i__35574__auto___67727 = (0);
while(true){
if((i__35574__auto___67727 < len__35573__auto___67726)){
args67127.push((arguments[i__35574__auto___67727]));

var G__67728 = (i__35574__auto___67727 + (1));
i__35574__auto___67727 = G__67728;
continue;
} else {
}
break;
}

var G__67131 = args67127.length;
switch (G__67131) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67127.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq67128){
var G__67129 = cljs.core.first.call(null,seq67128);
var seq67128__$1 = cljs.core.next.call(null,seq67128);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__67129,seq67128__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args67132 = [];
var len__35573__auto___67730 = arguments.length;
var i__35574__auto___67731 = (0);
while(true){
if((i__35574__auto___67731 < len__35573__auto___67730)){
args67132.push((arguments[i__35574__auto___67731]));

var G__67732 = (i__35574__auto___67731 + (1));
i__35574__auto___67731 = G__67732;
continue;
} else {
}
break;
}

var G__67136 = args67132.length;
switch (G__67136) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67132.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq67133){
var G__67134 = cljs.core.first.call(null,seq67133);
var seq67133__$1 = cljs.core.next.call(null,seq67133);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__67134,seq67133__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args67137 = [];
var len__35573__auto___67734 = arguments.length;
var i__35574__auto___67735 = (0);
while(true){
if((i__35574__auto___67735 < len__35573__auto___67734)){
args67137.push((arguments[i__35574__auto___67735]));

var G__67736 = (i__35574__auto___67735 + (1));
i__35574__auto___67735 = G__67736;
continue;
} else {
}
break;
}

var G__67141 = args67137.length;
switch (G__67141) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67137.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq67138){
var G__67139 = cljs.core.first.call(null,seq67138);
var seq67138__$1 = cljs.core.next.call(null,seq67138);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__67139,seq67138__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args67142 = [];
var len__35573__auto___67738 = arguments.length;
var i__35574__auto___67739 = (0);
while(true){
if((i__35574__auto___67739 < len__35573__auto___67738)){
args67142.push((arguments[i__35574__auto___67739]));

var G__67740 = (i__35574__auto___67739 + (1));
i__35574__auto___67739 = G__67740;
continue;
} else {
}
break;
}

var G__67146 = args67142.length;
switch (G__67146) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67142.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq67143){
var G__67144 = cljs.core.first.call(null,seq67143);
var seq67143__$1 = cljs.core.next.call(null,seq67143);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__67144,seq67143__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args67147 = [];
var len__35573__auto___67742 = arguments.length;
var i__35574__auto___67743 = (0);
while(true){
if((i__35574__auto___67743 < len__35573__auto___67742)){
args67147.push((arguments[i__35574__auto___67743]));

var G__67744 = (i__35574__auto___67743 + (1));
i__35574__auto___67743 = G__67744;
continue;
} else {
}
break;
}

var G__67151 = args67147.length;
switch (G__67151) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67147.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq67148){
var G__67149 = cljs.core.first.call(null,seq67148);
var seq67148__$1 = cljs.core.next.call(null,seq67148);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__67149,seq67148__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args67152 = [];
var len__35573__auto___67746 = arguments.length;
var i__35574__auto___67747 = (0);
while(true){
if((i__35574__auto___67747 < len__35573__auto___67746)){
args67152.push((arguments[i__35574__auto___67747]));

var G__67748 = (i__35574__auto___67747 + (1));
i__35574__auto___67747 = G__67748;
continue;
} else {
}
break;
}

var G__67156 = args67152.length;
switch (G__67156) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67152.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq67153){
var G__67154 = cljs.core.first.call(null,seq67153);
var seq67153__$1 = cljs.core.next.call(null,seq67153);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__67154,seq67153__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args67157 = [];
var len__35573__auto___67750 = arguments.length;
var i__35574__auto___67751 = (0);
while(true){
if((i__35574__auto___67751 < len__35573__auto___67750)){
args67157.push((arguments[i__35574__auto___67751]));

var G__67752 = (i__35574__auto___67751 + (1));
i__35574__auto___67751 = G__67752;
continue;
} else {
}
break;
}

var G__67161 = args67157.length;
switch (G__67161) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67157.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq67158){
var G__67159 = cljs.core.first.call(null,seq67158);
var seq67158__$1 = cljs.core.next.call(null,seq67158);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__67159,seq67158__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args67162 = [];
var len__35573__auto___67754 = arguments.length;
var i__35574__auto___67755 = (0);
while(true){
if((i__35574__auto___67755 < len__35573__auto___67754)){
args67162.push((arguments[i__35574__auto___67755]));

var G__67756 = (i__35574__auto___67755 + (1));
i__35574__auto___67755 = G__67756;
continue;
} else {
}
break;
}

var G__67166 = args67162.length;
switch (G__67166) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67162.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq67163){
var G__67164 = cljs.core.first.call(null,seq67163);
var seq67163__$1 = cljs.core.next.call(null,seq67163);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__67164,seq67163__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args67167 = [];
var len__35573__auto___67758 = arguments.length;
var i__35574__auto___67759 = (0);
while(true){
if((i__35574__auto___67759 < len__35573__auto___67758)){
args67167.push((arguments[i__35574__auto___67759]));

var G__67760 = (i__35574__auto___67759 + (1));
i__35574__auto___67759 = G__67760;
continue;
} else {
}
break;
}

var G__67171 = args67167.length;
switch (G__67171) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67167.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq67168){
var G__67169 = cljs.core.first.call(null,seq67168);
var seq67168__$1 = cljs.core.next.call(null,seq67168);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__67169,seq67168__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args67172 = [];
var len__35573__auto___67762 = arguments.length;
var i__35574__auto___67763 = (0);
while(true){
if((i__35574__auto___67763 < len__35573__auto___67762)){
args67172.push((arguments[i__35574__auto___67763]));

var G__67764 = (i__35574__auto___67763 + (1));
i__35574__auto___67763 = G__67764;
continue;
} else {
}
break;
}

var G__67176 = args67172.length;
switch (G__67176) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67172.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq67173){
var G__67174 = cljs.core.first.call(null,seq67173);
var seq67173__$1 = cljs.core.next.call(null,seq67173);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__67174,seq67173__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args67177 = [];
var len__35573__auto___67766 = arguments.length;
var i__35574__auto___67767 = (0);
while(true){
if((i__35574__auto___67767 < len__35573__auto___67766)){
args67177.push((arguments[i__35574__auto___67767]));

var G__67768 = (i__35574__auto___67767 + (1));
i__35574__auto___67767 = G__67768;
continue;
} else {
}
break;
}

var G__67181 = args67177.length;
switch (G__67181) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67177.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq67178){
var G__67179 = cljs.core.first.call(null,seq67178);
var seq67178__$1 = cljs.core.next.call(null,seq67178);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__67179,seq67178__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args67182 = [];
var len__35573__auto___67770 = arguments.length;
var i__35574__auto___67771 = (0);
while(true){
if((i__35574__auto___67771 < len__35573__auto___67770)){
args67182.push((arguments[i__35574__auto___67771]));

var G__67772 = (i__35574__auto___67771 + (1));
i__35574__auto___67771 = G__67772;
continue;
} else {
}
break;
}

var G__67186 = args67182.length;
switch (G__67186) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67182.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq67183){
var G__67184 = cljs.core.first.call(null,seq67183);
var seq67183__$1 = cljs.core.next.call(null,seq67183);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__67184,seq67183__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args67187 = [];
var len__35573__auto___67774 = arguments.length;
var i__35574__auto___67775 = (0);
while(true){
if((i__35574__auto___67775 < len__35573__auto___67774)){
args67187.push((arguments[i__35574__auto___67775]));

var G__67776 = (i__35574__auto___67775 + (1));
i__35574__auto___67775 = G__67776;
continue;
} else {
}
break;
}

var G__67191 = args67187.length;
switch (G__67191) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67187.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq67188){
var G__67189 = cljs.core.first.call(null,seq67188);
var seq67188__$1 = cljs.core.next.call(null,seq67188);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__67189,seq67188__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args67192 = [];
var len__35573__auto___67778 = arguments.length;
var i__35574__auto___67779 = (0);
while(true){
if((i__35574__auto___67779 < len__35573__auto___67778)){
args67192.push((arguments[i__35574__auto___67779]));

var G__67780 = (i__35574__auto___67779 + (1));
i__35574__auto___67779 = G__67780;
continue;
} else {
}
break;
}

var G__67196 = args67192.length;
switch (G__67196) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67192.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq67193){
var G__67194 = cljs.core.first.call(null,seq67193);
var seq67193__$1 = cljs.core.next.call(null,seq67193);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__67194,seq67193__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args67197 = [];
var len__35573__auto___67782 = arguments.length;
var i__35574__auto___67783 = (0);
while(true){
if((i__35574__auto___67783 < len__35573__auto___67782)){
args67197.push((arguments[i__35574__auto___67783]));

var G__67784 = (i__35574__auto___67783 + (1));
i__35574__auto___67783 = G__67784;
continue;
} else {
}
break;
}

var G__67201 = args67197.length;
switch (G__67201) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67197.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq67198){
var G__67199 = cljs.core.first.call(null,seq67198);
var seq67198__$1 = cljs.core.next.call(null,seq67198);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__67199,seq67198__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args67202 = [];
var len__35573__auto___67786 = arguments.length;
var i__35574__auto___67787 = (0);
while(true){
if((i__35574__auto___67787 < len__35573__auto___67786)){
args67202.push((arguments[i__35574__auto___67787]));

var G__67788 = (i__35574__auto___67787 + (1));
i__35574__auto___67787 = G__67788;
continue;
} else {
}
break;
}

var G__67206 = args67202.length;
switch (G__67206) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67202.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq67203){
var G__67204 = cljs.core.first.call(null,seq67203);
var seq67203__$1 = cljs.core.next.call(null,seq67203);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__67204,seq67203__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args67207 = [];
var len__35573__auto___67790 = arguments.length;
var i__35574__auto___67791 = (0);
while(true){
if((i__35574__auto___67791 < len__35573__auto___67790)){
args67207.push((arguments[i__35574__auto___67791]));

var G__67792 = (i__35574__auto___67791 + (1));
i__35574__auto___67791 = G__67792;
continue;
} else {
}
break;
}

var G__67211 = args67207.length;
switch (G__67211) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67207.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq67208){
var G__67209 = cljs.core.first.call(null,seq67208);
var seq67208__$1 = cljs.core.next.call(null,seq67208);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__67209,seq67208__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args67212 = [];
var len__35573__auto___67794 = arguments.length;
var i__35574__auto___67795 = (0);
while(true){
if((i__35574__auto___67795 < len__35573__auto___67794)){
args67212.push((arguments[i__35574__auto___67795]));

var G__67796 = (i__35574__auto___67795 + (1));
i__35574__auto___67795 = G__67796;
continue;
} else {
}
break;
}

var G__67216 = args67212.length;
switch (G__67216) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67212.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq67213){
var G__67214 = cljs.core.first.call(null,seq67213);
var seq67213__$1 = cljs.core.next.call(null,seq67213);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__67214,seq67213__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args67217 = [];
var len__35573__auto___67798 = arguments.length;
var i__35574__auto___67799 = (0);
while(true){
if((i__35574__auto___67799 < len__35573__auto___67798)){
args67217.push((arguments[i__35574__auto___67799]));

var G__67800 = (i__35574__auto___67799 + (1));
i__35574__auto___67799 = G__67800;
continue;
} else {
}
break;
}

var G__67221 = args67217.length;
switch (G__67221) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67217.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq67218){
var G__67219 = cljs.core.first.call(null,seq67218);
var seq67218__$1 = cljs.core.next.call(null,seq67218);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__67219,seq67218__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args67222 = [];
var len__35573__auto___67802 = arguments.length;
var i__35574__auto___67803 = (0);
while(true){
if((i__35574__auto___67803 < len__35573__auto___67802)){
args67222.push((arguments[i__35574__auto___67803]));

var G__67804 = (i__35574__auto___67803 + (1));
i__35574__auto___67803 = G__67804;
continue;
} else {
}
break;
}

var G__67226 = args67222.length;
switch (G__67226) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67222.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq67223){
var G__67224 = cljs.core.first.call(null,seq67223);
var seq67223__$1 = cljs.core.next.call(null,seq67223);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__67224,seq67223__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args67227 = [];
var len__35573__auto___67806 = arguments.length;
var i__35574__auto___67807 = (0);
while(true){
if((i__35574__auto___67807 < len__35573__auto___67806)){
args67227.push((arguments[i__35574__auto___67807]));

var G__67808 = (i__35574__auto___67807 + (1));
i__35574__auto___67807 = G__67808;
continue;
} else {
}
break;
}

var G__67231 = args67227.length;
switch (G__67231) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67227.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq67228){
var G__67229 = cljs.core.first.call(null,seq67228);
var seq67228__$1 = cljs.core.next.call(null,seq67228);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__67229,seq67228__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args67232 = [];
var len__35573__auto___67810 = arguments.length;
var i__35574__auto___67811 = (0);
while(true){
if((i__35574__auto___67811 < len__35573__auto___67810)){
args67232.push((arguments[i__35574__auto___67811]));

var G__67812 = (i__35574__auto___67811 + (1));
i__35574__auto___67811 = G__67812;
continue;
} else {
}
break;
}

var G__67236 = args67232.length;
switch (G__67236) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67232.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq67233){
var G__67234 = cljs.core.first.call(null,seq67233);
var seq67233__$1 = cljs.core.next.call(null,seq67233);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__67234,seq67233__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args67237 = [];
var len__35573__auto___67814 = arguments.length;
var i__35574__auto___67815 = (0);
while(true){
if((i__35574__auto___67815 < len__35573__auto___67814)){
args67237.push((arguments[i__35574__auto___67815]));

var G__67816 = (i__35574__auto___67815 + (1));
i__35574__auto___67815 = G__67816;
continue;
} else {
}
break;
}

var G__67241 = args67237.length;
switch (G__67241) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67237.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq67238){
var G__67239 = cljs.core.first.call(null,seq67238);
var seq67238__$1 = cljs.core.next.call(null,seq67238);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__67239,seq67238__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args67242 = [];
var len__35573__auto___67818 = arguments.length;
var i__35574__auto___67819 = (0);
while(true){
if((i__35574__auto___67819 < len__35573__auto___67818)){
args67242.push((arguments[i__35574__auto___67819]));

var G__67820 = (i__35574__auto___67819 + (1));
i__35574__auto___67819 = G__67820;
continue;
} else {
}
break;
}

var G__67246 = args67242.length;
switch (G__67246) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67242.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq67243){
var G__67244 = cljs.core.first.call(null,seq67243);
var seq67243__$1 = cljs.core.next.call(null,seq67243);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__67244,seq67243__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args67247 = [];
var len__35573__auto___67822 = arguments.length;
var i__35574__auto___67823 = (0);
while(true){
if((i__35574__auto___67823 < len__35573__auto___67822)){
args67247.push((arguments[i__35574__auto___67823]));

var G__67824 = (i__35574__auto___67823 + (1));
i__35574__auto___67823 = G__67824;
continue;
} else {
}
break;
}

var G__67251 = args67247.length;
switch (G__67251) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67247.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq67248){
var G__67249 = cljs.core.first.call(null,seq67248);
var seq67248__$1 = cljs.core.next.call(null,seq67248);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__67249,seq67248__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args67252 = [];
var len__35573__auto___67826 = arguments.length;
var i__35574__auto___67827 = (0);
while(true){
if((i__35574__auto___67827 < len__35573__auto___67826)){
args67252.push((arguments[i__35574__auto___67827]));

var G__67828 = (i__35574__auto___67827 + (1));
i__35574__auto___67827 = G__67828;
continue;
} else {
}
break;
}

var G__67256 = args67252.length;
switch (G__67256) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67252.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq67253){
var G__67254 = cljs.core.first.call(null,seq67253);
var seq67253__$1 = cljs.core.next.call(null,seq67253);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__67254,seq67253__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args67257 = [];
var len__35573__auto___67830 = arguments.length;
var i__35574__auto___67831 = (0);
while(true){
if((i__35574__auto___67831 < len__35573__auto___67830)){
args67257.push((arguments[i__35574__auto___67831]));

var G__67832 = (i__35574__auto___67831 + (1));
i__35574__auto___67831 = G__67832;
continue;
} else {
}
break;
}

var G__67261 = args67257.length;
switch (G__67261) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67257.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq67258){
var G__67259 = cljs.core.first.call(null,seq67258);
var seq67258__$1 = cljs.core.next.call(null,seq67258);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__67259,seq67258__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args67262 = [];
var len__35573__auto___67834 = arguments.length;
var i__35574__auto___67835 = (0);
while(true){
if((i__35574__auto___67835 < len__35573__auto___67834)){
args67262.push((arguments[i__35574__auto___67835]));

var G__67836 = (i__35574__auto___67835 + (1));
i__35574__auto___67835 = G__67836;
continue;
} else {
}
break;
}

var G__67266 = args67262.length;
switch (G__67266) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67262.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq67263){
var G__67264 = cljs.core.first.call(null,seq67263);
var seq67263__$1 = cljs.core.next.call(null,seq67263);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__67264,seq67263__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args67267 = [];
var len__35573__auto___67838 = arguments.length;
var i__35574__auto___67839 = (0);
while(true){
if((i__35574__auto___67839 < len__35573__auto___67838)){
args67267.push((arguments[i__35574__auto___67839]));

var G__67840 = (i__35574__auto___67839 + (1));
i__35574__auto___67839 = G__67840;
continue;
} else {
}
break;
}

var G__67271 = args67267.length;
switch (G__67271) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67267.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq67268){
var G__67269 = cljs.core.first.call(null,seq67268);
var seq67268__$1 = cljs.core.next.call(null,seq67268);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__67269,seq67268__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args67272 = [];
var len__35573__auto___67842 = arguments.length;
var i__35574__auto___67843 = (0);
while(true){
if((i__35574__auto___67843 < len__35573__auto___67842)){
args67272.push((arguments[i__35574__auto___67843]));

var G__67844 = (i__35574__auto___67843 + (1));
i__35574__auto___67843 = G__67844;
continue;
} else {
}
break;
}

var G__67276 = args67272.length;
switch (G__67276) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67272.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq67273){
var G__67274 = cljs.core.first.call(null,seq67273);
var seq67273__$1 = cljs.core.next.call(null,seq67273);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__67274,seq67273__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args67277 = [];
var len__35573__auto___67846 = arguments.length;
var i__35574__auto___67847 = (0);
while(true){
if((i__35574__auto___67847 < len__35573__auto___67846)){
args67277.push((arguments[i__35574__auto___67847]));

var G__67848 = (i__35574__auto___67847 + (1));
i__35574__auto___67847 = G__67848;
continue;
} else {
}
break;
}

var G__67281 = args67277.length;
switch (G__67281) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67277.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq67278){
var G__67279 = cljs.core.first.call(null,seq67278);
var seq67278__$1 = cljs.core.next.call(null,seq67278);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__67279,seq67278__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args67282 = [];
var len__35573__auto___67850 = arguments.length;
var i__35574__auto___67851 = (0);
while(true){
if((i__35574__auto___67851 < len__35573__auto___67850)){
args67282.push((arguments[i__35574__auto___67851]));

var G__67852 = (i__35574__auto___67851 + (1));
i__35574__auto___67851 = G__67852;
continue;
} else {
}
break;
}

var G__67286 = args67282.length;
switch (G__67286) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67282.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq67283){
var G__67284 = cljs.core.first.call(null,seq67283);
var seq67283__$1 = cljs.core.next.call(null,seq67283);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__67284,seq67283__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args67287 = [];
var len__35573__auto___67854 = arguments.length;
var i__35574__auto___67855 = (0);
while(true){
if((i__35574__auto___67855 < len__35573__auto___67854)){
args67287.push((arguments[i__35574__auto___67855]));

var G__67856 = (i__35574__auto___67855 + (1));
i__35574__auto___67855 = G__67856;
continue;
} else {
}
break;
}

var G__67291 = args67287.length;
switch (G__67291) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67287.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq67288){
var G__67289 = cljs.core.first.call(null,seq67288);
var seq67288__$1 = cljs.core.next.call(null,seq67288);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__67289,seq67288__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args67292 = [];
var len__35573__auto___67858 = arguments.length;
var i__35574__auto___67859 = (0);
while(true){
if((i__35574__auto___67859 < len__35573__auto___67858)){
args67292.push((arguments[i__35574__auto___67859]));

var G__67860 = (i__35574__auto___67859 + (1));
i__35574__auto___67859 = G__67860;
continue;
} else {
}
break;
}

var G__67296 = args67292.length;
switch (G__67296) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67292.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq67293){
var G__67294 = cljs.core.first.call(null,seq67293);
var seq67293__$1 = cljs.core.next.call(null,seq67293);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__67294,seq67293__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args67297 = [];
var len__35573__auto___67862 = arguments.length;
var i__35574__auto___67863 = (0);
while(true){
if((i__35574__auto___67863 < len__35573__auto___67862)){
args67297.push((arguments[i__35574__auto___67863]));

var G__67864 = (i__35574__auto___67863 + (1));
i__35574__auto___67863 = G__67864;
continue;
} else {
}
break;
}

var G__67301 = args67297.length;
switch (G__67301) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67297.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq67298){
var G__67299 = cljs.core.first.call(null,seq67298);
var seq67298__$1 = cljs.core.next.call(null,seq67298);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__67299,seq67298__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args67302 = [];
var len__35573__auto___67866 = arguments.length;
var i__35574__auto___67867 = (0);
while(true){
if((i__35574__auto___67867 < len__35573__auto___67866)){
args67302.push((arguments[i__35574__auto___67867]));

var G__67868 = (i__35574__auto___67867 + (1));
i__35574__auto___67867 = G__67868;
continue;
} else {
}
break;
}

var G__67306 = args67302.length;
switch (G__67306) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67302.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq67303){
var G__67304 = cljs.core.first.call(null,seq67303);
var seq67303__$1 = cljs.core.next.call(null,seq67303);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__67304,seq67303__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args67307 = [];
var len__35573__auto___67870 = arguments.length;
var i__35574__auto___67871 = (0);
while(true){
if((i__35574__auto___67871 < len__35573__auto___67870)){
args67307.push((arguments[i__35574__auto___67871]));

var G__67872 = (i__35574__auto___67871 + (1));
i__35574__auto___67871 = G__67872;
continue;
} else {
}
break;
}

var G__67311 = args67307.length;
switch (G__67311) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67307.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq67308){
var G__67309 = cljs.core.first.call(null,seq67308);
var seq67308__$1 = cljs.core.next.call(null,seq67308);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__67309,seq67308__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args67312 = [];
var len__35573__auto___67874 = arguments.length;
var i__35574__auto___67875 = (0);
while(true){
if((i__35574__auto___67875 < len__35573__auto___67874)){
args67312.push((arguments[i__35574__auto___67875]));

var G__67876 = (i__35574__auto___67875 + (1));
i__35574__auto___67875 = G__67876;
continue;
} else {
}
break;
}

var G__67316 = args67312.length;
switch (G__67316) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67312.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq67313){
var G__67314 = cljs.core.first.call(null,seq67313);
var seq67313__$1 = cljs.core.next.call(null,seq67313);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__67314,seq67313__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args67317 = [];
var len__35573__auto___67878 = arguments.length;
var i__35574__auto___67879 = (0);
while(true){
if((i__35574__auto___67879 < len__35573__auto___67878)){
args67317.push((arguments[i__35574__auto___67879]));

var G__67880 = (i__35574__auto___67879 + (1));
i__35574__auto___67879 = G__67880;
continue;
} else {
}
break;
}

var G__67321 = args67317.length;
switch (G__67321) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67317.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq67318){
var G__67319 = cljs.core.first.call(null,seq67318);
var seq67318__$1 = cljs.core.next.call(null,seq67318);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__67319,seq67318__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args67322 = [];
var len__35573__auto___67882 = arguments.length;
var i__35574__auto___67883 = (0);
while(true){
if((i__35574__auto___67883 < len__35573__auto___67882)){
args67322.push((arguments[i__35574__auto___67883]));

var G__67884 = (i__35574__auto___67883 + (1));
i__35574__auto___67883 = G__67884;
continue;
} else {
}
break;
}

var G__67326 = args67322.length;
switch (G__67326) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67322.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq67323){
var G__67324 = cljs.core.first.call(null,seq67323);
var seq67323__$1 = cljs.core.next.call(null,seq67323);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__67324,seq67323__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args67327 = [];
var len__35573__auto___67886 = arguments.length;
var i__35574__auto___67887 = (0);
while(true){
if((i__35574__auto___67887 < len__35573__auto___67886)){
args67327.push((arguments[i__35574__auto___67887]));

var G__67888 = (i__35574__auto___67887 + (1));
i__35574__auto___67887 = G__67888;
continue;
} else {
}
break;
}

var G__67331 = args67327.length;
switch (G__67331) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67327.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq67328){
var G__67329 = cljs.core.first.call(null,seq67328);
var seq67328__$1 = cljs.core.next.call(null,seq67328);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__67329,seq67328__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args67332 = [];
var len__35573__auto___67890 = arguments.length;
var i__35574__auto___67891 = (0);
while(true){
if((i__35574__auto___67891 < len__35573__auto___67890)){
args67332.push((arguments[i__35574__auto___67891]));

var G__67892 = (i__35574__auto___67891 + (1));
i__35574__auto___67891 = G__67892;
continue;
} else {
}
break;
}

var G__67336 = args67332.length;
switch (G__67336) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67332.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq67333){
var G__67334 = cljs.core.first.call(null,seq67333);
var seq67333__$1 = cljs.core.next.call(null,seq67333);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__67334,seq67333__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args67337 = [];
var len__35573__auto___67894 = arguments.length;
var i__35574__auto___67895 = (0);
while(true){
if((i__35574__auto___67895 < len__35573__auto___67894)){
args67337.push((arguments[i__35574__auto___67895]));

var G__67896 = (i__35574__auto___67895 + (1));
i__35574__auto___67895 = G__67896;
continue;
} else {
}
break;
}

var G__67341 = args67337.length;
switch (G__67341) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67337.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq67338){
var G__67339 = cljs.core.first.call(null,seq67338);
var seq67338__$1 = cljs.core.next.call(null,seq67338);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__67339,seq67338__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args67342 = [];
var len__35573__auto___67898 = arguments.length;
var i__35574__auto___67899 = (0);
while(true){
if((i__35574__auto___67899 < len__35573__auto___67898)){
args67342.push((arguments[i__35574__auto___67899]));

var G__67900 = (i__35574__auto___67899 + (1));
i__35574__auto___67899 = G__67900;
continue;
} else {
}
break;
}

var G__67346 = args67342.length;
switch (G__67346) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67342.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq67343){
var G__67344 = cljs.core.first.call(null,seq67343);
var seq67343__$1 = cljs.core.next.call(null,seq67343);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__67344,seq67343__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args67347 = [];
var len__35573__auto___67902 = arguments.length;
var i__35574__auto___67903 = (0);
while(true){
if((i__35574__auto___67903 < len__35573__auto___67902)){
args67347.push((arguments[i__35574__auto___67903]));

var G__67904 = (i__35574__auto___67903 + (1));
i__35574__auto___67903 = G__67904;
continue;
} else {
}
break;
}

var G__67351 = args67347.length;
switch (G__67351) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67347.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq67348){
var G__67349 = cljs.core.first.call(null,seq67348);
var seq67348__$1 = cljs.core.next.call(null,seq67348);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__67349,seq67348__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args67352 = [];
var len__35573__auto___67906 = arguments.length;
var i__35574__auto___67907 = (0);
while(true){
if((i__35574__auto___67907 < len__35573__auto___67906)){
args67352.push((arguments[i__35574__auto___67907]));

var G__67908 = (i__35574__auto___67907 + (1));
i__35574__auto___67907 = G__67908;
continue;
} else {
}
break;
}

var G__67356 = args67352.length;
switch (G__67356) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67352.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq67353){
var G__67354 = cljs.core.first.call(null,seq67353);
var seq67353__$1 = cljs.core.next.call(null,seq67353);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__67354,seq67353__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args67357 = [];
var len__35573__auto___67910 = arguments.length;
var i__35574__auto___67911 = (0);
while(true){
if((i__35574__auto___67911 < len__35573__auto___67910)){
args67357.push((arguments[i__35574__auto___67911]));

var G__67912 = (i__35574__auto___67911 + (1));
i__35574__auto___67911 = G__67912;
continue;
} else {
}
break;
}

var G__67361 = args67357.length;
switch (G__67361) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67357.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq67358){
var G__67359 = cljs.core.first.call(null,seq67358);
var seq67358__$1 = cljs.core.next.call(null,seq67358);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__67359,seq67358__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args67362 = [];
var len__35573__auto___67914 = arguments.length;
var i__35574__auto___67915 = (0);
while(true){
if((i__35574__auto___67915 < len__35573__auto___67914)){
args67362.push((arguments[i__35574__auto___67915]));

var G__67916 = (i__35574__auto___67915 + (1));
i__35574__auto___67915 = G__67916;
continue;
} else {
}
break;
}

var G__67366 = args67362.length;
switch (G__67366) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67362.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq67363){
var G__67364 = cljs.core.first.call(null,seq67363);
var seq67363__$1 = cljs.core.next.call(null,seq67363);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__67364,seq67363__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args67367 = [];
var len__35573__auto___67918 = arguments.length;
var i__35574__auto___67919 = (0);
while(true){
if((i__35574__auto___67919 < len__35573__auto___67918)){
args67367.push((arguments[i__35574__auto___67919]));

var G__67920 = (i__35574__auto___67919 + (1));
i__35574__auto___67919 = G__67920;
continue;
} else {
}
break;
}

var G__67371 = args67367.length;
switch (G__67371) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67367.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq67368){
var G__67369 = cljs.core.first.call(null,seq67368);
var seq67368__$1 = cljs.core.next.call(null,seq67368);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__67369,seq67368__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args67372 = [];
var len__35573__auto___67922 = arguments.length;
var i__35574__auto___67923 = (0);
while(true){
if((i__35574__auto___67923 < len__35573__auto___67922)){
args67372.push((arguments[i__35574__auto___67923]));

var G__67924 = (i__35574__auto___67923 + (1));
i__35574__auto___67923 = G__67924;
continue;
} else {
}
break;
}

var G__67376 = args67372.length;
switch (G__67376) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67372.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq67373){
var G__67374 = cljs.core.first.call(null,seq67373);
var seq67373__$1 = cljs.core.next.call(null,seq67373);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__67374,seq67373__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args67377 = [];
var len__35573__auto___67926 = arguments.length;
var i__35574__auto___67927 = (0);
while(true){
if((i__35574__auto___67927 < len__35573__auto___67926)){
args67377.push((arguments[i__35574__auto___67927]));

var G__67928 = (i__35574__auto___67927 + (1));
i__35574__auto___67927 = G__67928;
continue;
} else {
}
break;
}

var G__67381 = args67377.length;
switch (G__67381) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67377.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq67378){
var G__67379 = cljs.core.first.call(null,seq67378);
var seq67378__$1 = cljs.core.next.call(null,seq67378);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__67379,seq67378__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args67382 = [];
var len__35573__auto___67930 = arguments.length;
var i__35574__auto___67931 = (0);
while(true){
if((i__35574__auto___67931 < len__35573__auto___67930)){
args67382.push((arguments[i__35574__auto___67931]));

var G__67932 = (i__35574__auto___67931 + (1));
i__35574__auto___67931 = G__67932;
continue;
} else {
}
break;
}

var G__67386 = args67382.length;
switch (G__67386) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67382.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq67383){
var G__67384 = cljs.core.first.call(null,seq67383);
var seq67383__$1 = cljs.core.next.call(null,seq67383);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__67384,seq67383__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args67387 = [];
var len__35573__auto___67934 = arguments.length;
var i__35574__auto___67935 = (0);
while(true){
if((i__35574__auto___67935 < len__35573__auto___67934)){
args67387.push((arguments[i__35574__auto___67935]));

var G__67936 = (i__35574__auto___67935 + (1));
i__35574__auto___67935 = G__67936;
continue;
} else {
}
break;
}

var G__67391 = args67387.length;
switch (G__67391) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67387.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq67388){
var G__67389 = cljs.core.first.call(null,seq67388);
var seq67388__$1 = cljs.core.next.call(null,seq67388);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__67389,seq67388__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args67392 = [];
var len__35573__auto___67938 = arguments.length;
var i__35574__auto___67939 = (0);
while(true){
if((i__35574__auto___67939 < len__35573__auto___67938)){
args67392.push((arguments[i__35574__auto___67939]));

var G__67940 = (i__35574__auto___67939 + (1));
i__35574__auto___67939 = G__67940;
continue;
} else {
}
break;
}

var G__67396 = args67392.length;
switch (G__67396) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67392.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq67393){
var G__67394 = cljs.core.first.call(null,seq67393);
var seq67393__$1 = cljs.core.next.call(null,seq67393);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__67394,seq67393__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args67397 = [];
var len__35573__auto___67942 = arguments.length;
var i__35574__auto___67943 = (0);
while(true){
if((i__35574__auto___67943 < len__35573__auto___67942)){
args67397.push((arguments[i__35574__auto___67943]));

var G__67944 = (i__35574__auto___67943 + (1));
i__35574__auto___67943 = G__67944;
continue;
} else {
}
break;
}

var G__67401 = args67397.length;
switch (G__67401) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67397.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq67398){
var G__67399 = cljs.core.first.call(null,seq67398);
var seq67398__$1 = cljs.core.next.call(null,seq67398);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__67399,seq67398__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args67402 = [];
var len__35573__auto___67946 = arguments.length;
var i__35574__auto___67947 = (0);
while(true){
if((i__35574__auto___67947 < len__35573__auto___67946)){
args67402.push((arguments[i__35574__auto___67947]));

var G__67948 = (i__35574__auto___67947 + (1));
i__35574__auto___67947 = G__67948;
continue;
} else {
}
break;
}

var G__67406 = args67402.length;
switch (G__67406) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67402.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq67403){
var G__67404 = cljs.core.first.call(null,seq67403);
var seq67403__$1 = cljs.core.next.call(null,seq67403);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__67404,seq67403__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args67407 = [];
var len__35573__auto___67950 = arguments.length;
var i__35574__auto___67951 = (0);
while(true){
if((i__35574__auto___67951 < len__35573__auto___67950)){
args67407.push((arguments[i__35574__auto___67951]));

var G__67952 = (i__35574__auto___67951 + (1));
i__35574__auto___67951 = G__67952;
continue;
} else {
}
break;
}

var G__67411 = args67407.length;
switch (G__67411) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67407.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq67408){
var G__67409 = cljs.core.first.call(null,seq67408);
var seq67408__$1 = cljs.core.next.call(null,seq67408);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__67409,seq67408__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args67412 = [];
var len__35573__auto___67954 = arguments.length;
var i__35574__auto___67955 = (0);
while(true){
if((i__35574__auto___67955 < len__35573__auto___67954)){
args67412.push((arguments[i__35574__auto___67955]));

var G__67956 = (i__35574__auto___67955 + (1));
i__35574__auto___67955 = G__67956;
continue;
} else {
}
break;
}

var G__67416 = args67412.length;
switch (G__67416) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67412.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq67413){
var G__67414 = cljs.core.first.call(null,seq67413);
var seq67413__$1 = cljs.core.next.call(null,seq67413);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__67414,seq67413__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args67417 = [];
var len__35573__auto___67958 = arguments.length;
var i__35574__auto___67959 = (0);
while(true){
if((i__35574__auto___67959 < len__35573__auto___67958)){
args67417.push((arguments[i__35574__auto___67959]));

var G__67960 = (i__35574__auto___67959 + (1));
i__35574__auto___67959 = G__67960;
continue;
} else {
}
break;
}

var G__67421 = args67417.length;
switch (G__67421) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67417.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq67418){
var G__67419 = cljs.core.first.call(null,seq67418);
var seq67418__$1 = cljs.core.next.call(null,seq67418);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__67419,seq67418__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args67422 = [];
var len__35573__auto___67962 = arguments.length;
var i__35574__auto___67963 = (0);
while(true){
if((i__35574__auto___67963 < len__35573__auto___67962)){
args67422.push((arguments[i__35574__auto___67963]));

var G__67964 = (i__35574__auto___67963 + (1));
i__35574__auto___67963 = G__67964;
continue;
} else {
}
break;
}

var G__67426 = args67422.length;
switch (G__67426) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67422.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq67423){
var G__67424 = cljs.core.first.call(null,seq67423);
var seq67423__$1 = cljs.core.next.call(null,seq67423);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__67424,seq67423__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args67427 = [];
var len__35573__auto___67966 = arguments.length;
var i__35574__auto___67967 = (0);
while(true){
if((i__35574__auto___67967 < len__35573__auto___67966)){
args67427.push((arguments[i__35574__auto___67967]));

var G__67968 = (i__35574__auto___67967 + (1));
i__35574__auto___67967 = G__67968;
continue;
} else {
}
break;
}

var G__67431 = args67427.length;
switch (G__67431) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67427.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq67428){
var G__67429 = cljs.core.first.call(null,seq67428);
var seq67428__$1 = cljs.core.next.call(null,seq67428);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__67429,seq67428__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args67432 = [];
var len__35573__auto___67970 = arguments.length;
var i__35574__auto___67971 = (0);
while(true){
if((i__35574__auto___67971 < len__35573__auto___67970)){
args67432.push((arguments[i__35574__auto___67971]));

var G__67972 = (i__35574__auto___67971 + (1));
i__35574__auto___67971 = G__67972;
continue;
} else {
}
break;
}

var G__67436 = args67432.length;
switch (G__67436) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67432.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq67433){
var G__67434 = cljs.core.first.call(null,seq67433);
var seq67433__$1 = cljs.core.next.call(null,seq67433);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__67434,seq67433__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args67437 = [];
var len__35573__auto___67974 = arguments.length;
var i__35574__auto___67975 = (0);
while(true){
if((i__35574__auto___67975 < len__35573__auto___67974)){
args67437.push((arguments[i__35574__auto___67975]));

var G__67976 = (i__35574__auto___67975 + (1));
i__35574__auto___67975 = G__67976;
continue;
} else {
}
break;
}

var G__67441 = args67437.length;
switch (G__67441) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67437.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq67438){
var G__67439 = cljs.core.first.call(null,seq67438);
var seq67438__$1 = cljs.core.next.call(null,seq67438);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__67439,seq67438__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args67442 = [];
var len__35573__auto___67978 = arguments.length;
var i__35574__auto___67979 = (0);
while(true){
if((i__35574__auto___67979 < len__35573__auto___67978)){
args67442.push((arguments[i__35574__auto___67979]));

var G__67980 = (i__35574__auto___67979 + (1));
i__35574__auto___67979 = G__67980;
continue;
} else {
}
break;
}

var G__67446 = args67442.length;
switch (G__67446) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67442.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq67443){
var G__67444 = cljs.core.first.call(null,seq67443);
var seq67443__$1 = cljs.core.next.call(null,seq67443);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__67444,seq67443__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args67447 = [];
var len__35573__auto___67982 = arguments.length;
var i__35574__auto___67983 = (0);
while(true){
if((i__35574__auto___67983 < len__35573__auto___67982)){
args67447.push((arguments[i__35574__auto___67983]));

var G__67984 = (i__35574__auto___67983 + (1));
i__35574__auto___67983 = G__67984;
continue;
} else {
}
break;
}

var G__67451 = args67447.length;
switch (G__67451) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67447.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq67448){
var G__67449 = cljs.core.first.call(null,seq67448);
var seq67448__$1 = cljs.core.next.call(null,seq67448);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__67449,seq67448__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args67452 = [];
var len__35573__auto___67986 = arguments.length;
var i__35574__auto___67987 = (0);
while(true){
if((i__35574__auto___67987 < len__35573__auto___67986)){
args67452.push((arguments[i__35574__auto___67987]));

var G__67988 = (i__35574__auto___67987 + (1));
i__35574__auto___67987 = G__67988;
continue;
} else {
}
break;
}

var G__67456 = args67452.length;
switch (G__67456) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67452.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq67453){
var G__67454 = cljs.core.first.call(null,seq67453);
var seq67453__$1 = cljs.core.next.call(null,seq67453);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__67454,seq67453__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args67457 = [];
var len__35573__auto___67990 = arguments.length;
var i__35574__auto___67991 = (0);
while(true){
if((i__35574__auto___67991 < len__35573__auto___67990)){
args67457.push((arguments[i__35574__auto___67991]));

var G__67992 = (i__35574__auto___67991 + (1));
i__35574__auto___67991 = G__67992;
continue;
} else {
}
break;
}

var G__67461 = args67457.length;
switch (G__67461) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67457.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq67458){
var G__67459 = cljs.core.first.call(null,seq67458);
var seq67458__$1 = cljs.core.next.call(null,seq67458);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__67459,seq67458__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args67462 = [];
var len__35573__auto___67994 = arguments.length;
var i__35574__auto___67995 = (0);
while(true){
if((i__35574__auto___67995 < len__35573__auto___67994)){
args67462.push((arguments[i__35574__auto___67995]));

var G__67996 = (i__35574__auto___67995 + (1));
i__35574__auto___67995 = G__67996;
continue;
} else {
}
break;
}

var G__67466 = args67462.length;
switch (G__67466) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67462.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq67463){
var G__67464 = cljs.core.first.call(null,seq67463);
var seq67463__$1 = cljs.core.next.call(null,seq67463);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__67464,seq67463__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args67467 = [];
var len__35573__auto___67998 = arguments.length;
var i__35574__auto___67999 = (0);
while(true){
if((i__35574__auto___67999 < len__35573__auto___67998)){
args67467.push((arguments[i__35574__auto___67999]));

var G__68000 = (i__35574__auto___67999 + (1));
i__35574__auto___67999 = G__68000;
continue;
} else {
}
break;
}

var G__67471 = args67467.length;
switch (G__67471) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67467.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq67468){
var G__67469 = cljs.core.first.call(null,seq67468);
var seq67468__$1 = cljs.core.next.call(null,seq67468);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__67469,seq67468__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args67472 = [];
var len__35573__auto___68002 = arguments.length;
var i__35574__auto___68003 = (0);
while(true){
if((i__35574__auto___68003 < len__35573__auto___68002)){
args67472.push((arguments[i__35574__auto___68003]));

var G__68004 = (i__35574__auto___68003 + (1));
i__35574__auto___68003 = G__68004;
continue;
} else {
}
break;
}

var G__67476 = args67472.length;
switch (G__67476) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67472.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq67473){
var G__67474 = cljs.core.first.call(null,seq67473);
var seq67473__$1 = cljs.core.next.call(null,seq67473);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__67474,seq67473__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args67477 = [];
var len__35573__auto___68006 = arguments.length;
var i__35574__auto___68007 = (0);
while(true){
if((i__35574__auto___68007 < len__35573__auto___68006)){
args67477.push((arguments[i__35574__auto___68007]));

var G__68008 = (i__35574__auto___68007 + (1));
i__35574__auto___68007 = G__68008;
continue;
} else {
}
break;
}

var G__67481 = args67477.length;
switch (G__67481) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67477.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq67478){
var G__67479 = cljs.core.first.call(null,seq67478);
var seq67478__$1 = cljs.core.next.call(null,seq67478);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__67479,seq67478__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args67482 = [];
var len__35573__auto___68010 = arguments.length;
var i__35574__auto___68011 = (0);
while(true){
if((i__35574__auto___68011 < len__35573__auto___68010)){
args67482.push((arguments[i__35574__auto___68011]));

var G__68012 = (i__35574__auto___68011 + (1));
i__35574__auto___68011 = G__68012;
continue;
} else {
}
break;
}

var G__67486 = args67482.length;
switch (G__67486) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67482.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq67483){
var G__67484 = cljs.core.first.call(null,seq67483);
var seq67483__$1 = cljs.core.next.call(null,seq67483);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__67484,seq67483__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args67487 = [];
var len__35573__auto___68014 = arguments.length;
var i__35574__auto___68015 = (0);
while(true){
if((i__35574__auto___68015 < len__35573__auto___68014)){
args67487.push((arguments[i__35574__auto___68015]));

var G__68016 = (i__35574__auto___68015 + (1));
i__35574__auto___68015 = G__68016;
continue;
} else {
}
break;
}

var G__67491 = args67487.length;
switch (G__67491) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67487.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq67488){
var G__67489 = cljs.core.first.call(null,seq67488);
var seq67488__$1 = cljs.core.next.call(null,seq67488);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__67489,seq67488__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args67492 = [];
var len__35573__auto___68018 = arguments.length;
var i__35574__auto___68019 = (0);
while(true){
if((i__35574__auto___68019 < len__35573__auto___68018)){
args67492.push((arguments[i__35574__auto___68019]));

var G__68020 = (i__35574__auto___68019 + (1));
i__35574__auto___68019 = G__68020;
continue;
} else {
}
break;
}

var G__67496 = args67492.length;
switch (G__67496) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67492.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq67493){
var G__67494 = cljs.core.first.call(null,seq67493);
var seq67493__$1 = cljs.core.next.call(null,seq67493);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__67494,seq67493__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args67497 = [];
var len__35573__auto___68022 = arguments.length;
var i__35574__auto___68023 = (0);
while(true){
if((i__35574__auto___68023 < len__35573__auto___68022)){
args67497.push((arguments[i__35574__auto___68023]));

var G__68024 = (i__35574__auto___68023 + (1));
i__35574__auto___68023 = G__68024;
continue;
} else {
}
break;
}

var G__67501 = args67497.length;
switch (G__67501) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67497.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq67498){
var G__67499 = cljs.core.first.call(null,seq67498);
var seq67498__$1 = cljs.core.next.call(null,seq67498);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__67499,seq67498__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args67502 = [];
var len__35573__auto___68026 = arguments.length;
var i__35574__auto___68027 = (0);
while(true){
if((i__35574__auto___68027 < len__35573__auto___68026)){
args67502.push((arguments[i__35574__auto___68027]));

var G__68028 = (i__35574__auto___68027 + (1));
i__35574__auto___68027 = G__68028;
continue;
} else {
}
break;
}

var G__67506 = args67502.length;
switch (G__67506) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67502.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq67503){
var G__67504 = cljs.core.first.call(null,seq67503);
var seq67503__$1 = cljs.core.next.call(null,seq67503);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__67504,seq67503__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args67507 = [];
var len__35573__auto___68030 = arguments.length;
var i__35574__auto___68031 = (0);
while(true){
if((i__35574__auto___68031 < len__35573__auto___68030)){
args67507.push((arguments[i__35574__auto___68031]));

var G__68032 = (i__35574__auto___68031 + (1));
i__35574__auto___68031 = G__68032;
continue;
} else {
}
break;
}

var G__67511 = args67507.length;
switch (G__67511) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67507.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq67508){
var G__67509 = cljs.core.first.call(null,seq67508);
var seq67508__$1 = cljs.core.next.call(null,seq67508);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__67509,seq67508__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args67512 = [];
var len__35573__auto___68034 = arguments.length;
var i__35574__auto___68035 = (0);
while(true){
if((i__35574__auto___68035 < len__35573__auto___68034)){
args67512.push((arguments[i__35574__auto___68035]));

var G__68036 = (i__35574__auto___68035 + (1));
i__35574__auto___68035 = G__68036;
continue;
} else {
}
break;
}

var G__67516 = args67512.length;
switch (G__67516) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67512.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq67513){
var G__67514 = cljs.core.first.call(null,seq67513);
var seq67513__$1 = cljs.core.next.call(null,seq67513);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__67514,seq67513__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args67517 = [];
var len__35573__auto___68038 = arguments.length;
var i__35574__auto___68039 = (0);
while(true){
if((i__35574__auto___68039 < len__35573__auto___68038)){
args67517.push((arguments[i__35574__auto___68039]));

var G__68040 = (i__35574__auto___68039 + (1));
i__35574__auto___68039 = G__68040;
continue;
} else {
}
break;
}

var G__67521 = args67517.length;
switch (G__67521) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67517.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq67518){
var G__67519 = cljs.core.first.call(null,seq67518);
var seq67518__$1 = cljs.core.next.call(null,seq67518);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__67519,seq67518__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args67522 = [];
var len__35573__auto___68042 = arguments.length;
var i__35574__auto___68043 = (0);
while(true){
if((i__35574__auto___68043 < len__35573__auto___68042)){
args67522.push((arguments[i__35574__auto___68043]));

var G__68044 = (i__35574__auto___68043 + (1));
i__35574__auto___68043 = G__68044;
continue;
} else {
}
break;
}

var G__67526 = args67522.length;
switch (G__67526) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67522.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq67523){
var G__67524 = cljs.core.first.call(null,seq67523);
var seq67523__$1 = cljs.core.next.call(null,seq67523);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__67524,seq67523__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args67527 = [];
var len__35573__auto___68046 = arguments.length;
var i__35574__auto___68047 = (0);
while(true){
if((i__35574__auto___68047 < len__35573__auto___68046)){
args67527.push((arguments[i__35574__auto___68047]));

var G__68048 = (i__35574__auto___68047 + (1));
i__35574__auto___68047 = G__68048;
continue;
} else {
}
break;
}

var G__67531 = args67527.length;
switch (G__67531) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67527.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq67528){
var G__67529 = cljs.core.first.call(null,seq67528);
var seq67528__$1 = cljs.core.next.call(null,seq67528);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__67529,seq67528__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args67532 = [];
var len__35573__auto___68050 = arguments.length;
var i__35574__auto___68051 = (0);
while(true){
if((i__35574__auto___68051 < len__35573__auto___68050)){
args67532.push((arguments[i__35574__auto___68051]));

var G__68052 = (i__35574__auto___68051 + (1));
i__35574__auto___68051 = G__68052;
continue;
} else {
}
break;
}

var G__67536 = args67532.length;
switch (G__67536) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67532.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq67533){
var G__67534 = cljs.core.first.call(null,seq67533);
var seq67533__$1 = cljs.core.next.call(null,seq67533);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__67534,seq67533__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args67537 = [];
var len__35573__auto___68054 = arguments.length;
var i__35574__auto___68055 = (0);
while(true){
if((i__35574__auto___68055 < len__35573__auto___68054)){
args67537.push((arguments[i__35574__auto___68055]));

var G__68056 = (i__35574__auto___68055 + (1));
i__35574__auto___68055 = G__68056;
continue;
} else {
}
break;
}

var G__67541 = args67537.length;
switch (G__67541) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67537.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq67538){
var G__67539 = cljs.core.first.call(null,seq67538);
var seq67538__$1 = cljs.core.next.call(null,seq67538);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__67539,seq67538__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args67542 = [];
var len__35573__auto___68058 = arguments.length;
var i__35574__auto___68059 = (0);
while(true){
if((i__35574__auto___68059 < len__35573__auto___68058)){
args67542.push((arguments[i__35574__auto___68059]));

var G__68060 = (i__35574__auto___68059 + (1));
i__35574__auto___68059 = G__68060;
continue;
} else {
}
break;
}

var G__67546 = args67542.length;
switch (G__67546) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67542.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq67543){
var G__67544 = cljs.core.first.call(null,seq67543);
var seq67543__$1 = cljs.core.next.call(null,seq67543);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__67544,seq67543__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args67547 = [];
var len__35573__auto___68062 = arguments.length;
var i__35574__auto___68063 = (0);
while(true){
if((i__35574__auto___68063 < len__35573__auto___68062)){
args67547.push((arguments[i__35574__auto___68063]));

var G__68064 = (i__35574__auto___68063 + (1));
i__35574__auto___68063 = G__68064;
continue;
} else {
}
break;
}

var G__67551 = args67547.length;
switch (G__67551) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67547.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq67548){
var G__67549 = cljs.core.first.call(null,seq67548);
var seq67548__$1 = cljs.core.next.call(null,seq67548);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__67549,seq67548__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args67552 = [];
var len__35573__auto___68066 = arguments.length;
var i__35574__auto___68067 = (0);
while(true){
if((i__35574__auto___68067 < len__35573__auto___68066)){
args67552.push((arguments[i__35574__auto___68067]));

var G__68068 = (i__35574__auto___68067 + (1));
i__35574__auto___68067 = G__68068;
continue;
} else {
}
break;
}

var G__67556 = args67552.length;
switch (G__67556) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67552.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq67553){
var G__67554 = cljs.core.first.call(null,seq67553);
var seq67553__$1 = cljs.core.next.call(null,seq67553);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__67554,seq67553__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args67557 = [];
var len__35573__auto___68070 = arguments.length;
var i__35574__auto___68071 = (0);
while(true){
if((i__35574__auto___68071 < len__35573__auto___68070)){
args67557.push((arguments[i__35574__auto___68071]));

var G__68072 = (i__35574__auto___68071 + (1));
i__35574__auto___68071 = G__68072;
continue;
} else {
}
break;
}

var G__67561 = args67557.length;
switch (G__67561) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67557.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq67558){
var G__67559 = cljs.core.first.call(null,seq67558);
var seq67558__$1 = cljs.core.next.call(null,seq67558);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__67559,seq67558__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args67077 = [];
var len__35573__auto___68074 = arguments.length;
var i__35574__auto___68075 = (0);
while(true){
if((i__35574__auto___68075 < len__35573__auto___68074)){
args67077.push((arguments[i__35574__auto___68075]));

var G__68076 = (i__35574__auto___68075 + (1));
i__35574__auto___68075 = G__68076;
continue;
} else {
}
break;
}

var G__67081 = args67077.length;
switch (G__67081) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35596__auto__ = (new cljs.core.IndexedSeq(args67077.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35596__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40485__auto__,children__40486__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__40485__auto__,children__40486__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq67078){
var G__67079 = cljs.core.first.call(null,seq67078);
var seq67078__$1 = cljs.core.next.call(null,seq67078);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__67079,seq67078__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__6728__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__6728__auto__){
var ks = temp__6728__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1488154311931