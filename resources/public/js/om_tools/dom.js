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
if(cljs.core.truth_((function (){var or__31879__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__31879__auto__){
return or__31879__auto__;
} else {
var G__57752 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__57752) {
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
var G__57755 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__57755) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__57761){
var vec__57762 = p__57761;
var k = cljs.core.nth.call(null,vec__57762,(0),null);
var v = cljs.core.nth.call(null,vec__57762,(1),null);
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
return (function (){var or__31879__auto__ = React.isValidElement;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
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
var vec__57768 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__57768,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__57768,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args57771 = [];
var len__32954__auto___58416 = arguments.length;
var i__32955__auto___58417 = (0);
while(true){
if((i__32955__auto___58417 < len__32954__auto___58416)){
args57771.push((arguments[i__32955__auto___58417]));

var G__58418 = (i__32955__auto___58417 + (1));
i__32955__auto___58417 = G__58418;
continue;
} else {
}
break;
}

var G__57775 = args57771.length;
switch (G__57775) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57771.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq57772){
var G__57773 = cljs.core.first.call(null,seq57772);
var seq57772__$1 = cljs.core.next.call(null,seq57772);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__57773,seq57772__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args57776 = [];
var len__32954__auto___58420 = arguments.length;
var i__32955__auto___58421 = (0);
while(true){
if((i__32955__auto___58421 < len__32954__auto___58420)){
args57776.push((arguments[i__32955__auto___58421]));

var G__58422 = (i__32955__auto___58421 + (1));
i__32955__auto___58421 = G__58422;
continue;
} else {
}
break;
}

var G__57780 = args57776.length;
switch (G__57780) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57776.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq57777){
var G__57778 = cljs.core.first.call(null,seq57777);
var seq57777__$1 = cljs.core.next.call(null,seq57777);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__57778,seq57777__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args57781 = [];
var len__32954__auto___58424 = arguments.length;
var i__32955__auto___58425 = (0);
while(true){
if((i__32955__auto___58425 < len__32954__auto___58424)){
args57781.push((arguments[i__32955__auto___58425]));

var G__58426 = (i__32955__auto___58425 + (1));
i__32955__auto___58425 = G__58426;
continue;
} else {
}
break;
}

var G__57785 = args57781.length;
switch (G__57785) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57781.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq57782){
var G__57783 = cljs.core.first.call(null,seq57782);
var seq57782__$1 = cljs.core.next.call(null,seq57782);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__57783,seq57782__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args57786 = [];
var len__32954__auto___58428 = arguments.length;
var i__32955__auto___58429 = (0);
while(true){
if((i__32955__auto___58429 < len__32954__auto___58428)){
args57786.push((arguments[i__32955__auto___58429]));

var G__58430 = (i__32955__auto___58429 + (1));
i__32955__auto___58429 = G__58430;
continue;
} else {
}
break;
}

var G__57790 = args57786.length;
switch (G__57790) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57786.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq57787){
var G__57788 = cljs.core.first.call(null,seq57787);
var seq57787__$1 = cljs.core.next.call(null,seq57787);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__57788,seq57787__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args57791 = [];
var len__32954__auto___58432 = arguments.length;
var i__32955__auto___58433 = (0);
while(true){
if((i__32955__auto___58433 < len__32954__auto___58432)){
args57791.push((arguments[i__32955__auto___58433]));

var G__58434 = (i__32955__auto___58433 + (1));
i__32955__auto___58433 = G__58434;
continue;
} else {
}
break;
}

var G__57795 = args57791.length;
switch (G__57795) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57791.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq57792){
var G__57793 = cljs.core.first.call(null,seq57792);
var seq57792__$1 = cljs.core.next.call(null,seq57792);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__57793,seq57792__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args57796 = [];
var len__32954__auto___58436 = arguments.length;
var i__32955__auto___58437 = (0);
while(true){
if((i__32955__auto___58437 < len__32954__auto___58436)){
args57796.push((arguments[i__32955__auto___58437]));

var G__58438 = (i__32955__auto___58437 + (1));
i__32955__auto___58437 = G__58438;
continue;
} else {
}
break;
}

var G__57800 = args57796.length;
switch (G__57800) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57796.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq57797){
var G__57798 = cljs.core.first.call(null,seq57797);
var seq57797__$1 = cljs.core.next.call(null,seq57797);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__57798,seq57797__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args57801 = [];
var len__32954__auto___58440 = arguments.length;
var i__32955__auto___58441 = (0);
while(true){
if((i__32955__auto___58441 < len__32954__auto___58440)){
args57801.push((arguments[i__32955__auto___58441]));

var G__58442 = (i__32955__auto___58441 + (1));
i__32955__auto___58441 = G__58442;
continue;
} else {
}
break;
}

var G__57805 = args57801.length;
switch (G__57805) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57801.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq57802){
var G__57803 = cljs.core.first.call(null,seq57802);
var seq57802__$1 = cljs.core.next.call(null,seq57802);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__57803,seq57802__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args57806 = [];
var len__32954__auto___58444 = arguments.length;
var i__32955__auto___58445 = (0);
while(true){
if((i__32955__auto___58445 < len__32954__auto___58444)){
args57806.push((arguments[i__32955__auto___58445]));

var G__58446 = (i__32955__auto___58445 + (1));
i__32955__auto___58445 = G__58446;
continue;
} else {
}
break;
}

var G__57810 = args57806.length;
switch (G__57810) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57806.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq57807){
var G__57808 = cljs.core.first.call(null,seq57807);
var seq57807__$1 = cljs.core.next.call(null,seq57807);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__57808,seq57807__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args57811 = [];
var len__32954__auto___58448 = arguments.length;
var i__32955__auto___58449 = (0);
while(true){
if((i__32955__auto___58449 < len__32954__auto___58448)){
args57811.push((arguments[i__32955__auto___58449]));

var G__58450 = (i__32955__auto___58449 + (1));
i__32955__auto___58449 = G__58450;
continue;
} else {
}
break;
}

var G__57815 = args57811.length;
switch (G__57815) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57811.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq57812){
var G__57813 = cljs.core.first.call(null,seq57812);
var seq57812__$1 = cljs.core.next.call(null,seq57812);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__57813,seq57812__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args57816 = [];
var len__32954__auto___58452 = arguments.length;
var i__32955__auto___58453 = (0);
while(true){
if((i__32955__auto___58453 < len__32954__auto___58452)){
args57816.push((arguments[i__32955__auto___58453]));

var G__58454 = (i__32955__auto___58453 + (1));
i__32955__auto___58453 = G__58454;
continue;
} else {
}
break;
}

var G__57820 = args57816.length;
switch (G__57820) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57816.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq57817){
var G__57818 = cljs.core.first.call(null,seq57817);
var seq57817__$1 = cljs.core.next.call(null,seq57817);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__57818,seq57817__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args57821 = [];
var len__32954__auto___58456 = arguments.length;
var i__32955__auto___58457 = (0);
while(true){
if((i__32955__auto___58457 < len__32954__auto___58456)){
args57821.push((arguments[i__32955__auto___58457]));

var G__58458 = (i__32955__auto___58457 + (1));
i__32955__auto___58457 = G__58458;
continue;
} else {
}
break;
}

var G__57825 = args57821.length;
switch (G__57825) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57821.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq57822){
var G__57823 = cljs.core.first.call(null,seq57822);
var seq57822__$1 = cljs.core.next.call(null,seq57822);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__57823,seq57822__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args57826 = [];
var len__32954__auto___58460 = arguments.length;
var i__32955__auto___58461 = (0);
while(true){
if((i__32955__auto___58461 < len__32954__auto___58460)){
args57826.push((arguments[i__32955__auto___58461]));

var G__58462 = (i__32955__auto___58461 + (1));
i__32955__auto___58461 = G__58462;
continue;
} else {
}
break;
}

var G__57830 = args57826.length;
switch (G__57830) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57826.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq57827){
var G__57828 = cljs.core.first.call(null,seq57827);
var seq57827__$1 = cljs.core.next.call(null,seq57827);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__57828,seq57827__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args57831 = [];
var len__32954__auto___58464 = arguments.length;
var i__32955__auto___58465 = (0);
while(true){
if((i__32955__auto___58465 < len__32954__auto___58464)){
args57831.push((arguments[i__32955__auto___58465]));

var G__58466 = (i__32955__auto___58465 + (1));
i__32955__auto___58465 = G__58466;
continue;
} else {
}
break;
}

var G__57835 = args57831.length;
switch (G__57835) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57831.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq57832){
var G__57833 = cljs.core.first.call(null,seq57832);
var seq57832__$1 = cljs.core.next.call(null,seq57832);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__57833,seq57832__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args57836 = [];
var len__32954__auto___58468 = arguments.length;
var i__32955__auto___58469 = (0);
while(true){
if((i__32955__auto___58469 < len__32954__auto___58468)){
args57836.push((arguments[i__32955__auto___58469]));

var G__58470 = (i__32955__auto___58469 + (1));
i__32955__auto___58469 = G__58470;
continue;
} else {
}
break;
}

var G__57840 = args57836.length;
switch (G__57840) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57836.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq57837){
var G__57838 = cljs.core.first.call(null,seq57837);
var seq57837__$1 = cljs.core.next.call(null,seq57837);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__57838,seq57837__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args57841 = [];
var len__32954__auto___58472 = arguments.length;
var i__32955__auto___58473 = (0);
while(true){
if((i__32955__auto___58473 < len__32954__auto___58472)){
args57841.push((arguments[i__32955__auto___58473]));

var G__58474 = (i__32955__auto___58473 + (1));
i__32955__auto___58473 = G__58474;
continue;
} else {
}
break;
}

var G__57845 = args57841.length;
switch (G__57845) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57841.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq57842){
var G__57843 = cljs.core.first.call(null,seq57842);
var seq57842__$1 = cljs.core.next.call(null,seq57842);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__57843,seq57842__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args57846 = [];
var len__32954__auto___58476 = arguments.length;
var i__32955__auto___58477 = (0);
while(true){
if((i__32955__auto___58477 < len__32954__auto___58476)){
args57846.push((arguments[i__32955__auto___58477]));

var G__58478 = (i__32955__auto___58477 + (1));
i__32955__auto___58477 = G__58478;
continue;
} else {
}
break;
}

var G__57850 = args57846.length;
switch (G__57850) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57846.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq57847){
var G__57848 = cljs.core.first.call(null,seq57847);
var seq57847__$1 = cljs.core.next.call(null,seq57847);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__57848,seq57847__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args57851 = [];
var len__32954__auto___58480 = arguments.length;
var i__32955__auto___58481 = (0);
while(true){
if((i__32955__auto___58481 < len__32954__auto___58480)){
args57851.push((arguments[i__32955__auto___58481]));

var G__58482 = (i__32955__auto___58481 + (1));
i__32955__auto___58481 = G__58482;
continue;
} else {
}
break;
}

var G__57855 = args57851.length;
switch (G__57855) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57851.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq57852){
var G__57853 = cljs.core.first.call(null,seq57852);
var seq57852__$1 = cljs.core.next.call(null,seq57852);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__57853,seq57852__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args57856 = [];
var len__32954__auto___58484 = arguments.length;
var i__32955__auto___58485 = (0);
while(true){
if((i__32955__auto___58485 < len__32954__auto___58484)){
args57856.push((arguments[i__32955__auto___58485]));

var G__58486 = (i__32955__auto___58485 + (1));
i__32955__auto___58485 = G__58486;
continue;
} else {
}
break;
}

var G__57860 = args57856.length;
switch (G__57860) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57856.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq57857){
var G__57858 = cljs.core.first.call(null,seq57857);
var seq57857__$1 = cljs.core.next.call(null,seq57857);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__57858,seq57857__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args57861 = [];
var len__32954__auto___58488 = arguments.length;
var i__32955__auto___58489 = (0);
while(true){
if((i__32955__auto___58489 < len__32954__auto___58488)){
args57861.push((arguments[i__32955__auto___58489]));

var G__58490 = (i__32955__auto___58489 + (1));
i__32955__auto___58489 = G__58490;
continue;
} else {
}
break;
}

var G__57865 = args57861.length;
switch (G__57865) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57861.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq57862){
var G__57863 = cljs.core.first.call(null,seq57862);
var seq57862__$1 = cljs.core.next.call(null,seq57862);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__57863,seq57862__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args57866 = [];
var len__32954__auto___58492 = arguments.length;
var i__32955__auto___58493 = (0);
while(true){
if((i__32955__auto___58493 < len__32954__auto___58492)){
args57866.push((arguments[i__32955__auto___58493]));

var G__58494 = (i__32955__auto___58493 + (1));
i__32955__auto___58493 = G__58494;
continue;
} else {
}
break;
}

var G__57870 = args57866.length;
switch (G__57870) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57866.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq57867){
var G__57868 = cljs.core.first.call(null,seq57867);
var seq57867__$1 = cljs.core.next.call(null,seq57867);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__57868,seq57867__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args57871 = [];
var len__32954__auto___58496 = arguments.length;
var i__32955__auto___58497 = (0);
while(true){
if((i__32955__auto___58497 < len__32954__auto___58496)){
args57871.push((arguments[i__32955__auto___58497]));

var G__58498 = (i__32955__auto___58497 + (1));
i__32955__auto___58497 = G__58498;
continue;
} else {
}
break;
}

var G__57875 = args57871.length;
switch (G__57875) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57871.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq57872){
var G__57873 = cljs.core.first.call(null,seq57872);
var seq57872__$1 = cljs.core.next.call(null,seq57872);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__57873,seq57872__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args57876 = [];
var len__32954__auto___58500 = arguments.length;
var i__32955__auto___58501 = (0);
while(true){
if((i__32955__auto___58501 < len__32954__auto___58500)){
args57876.push((arguments[i__32955__auto___58501]));

var G__58502 = (i__32955__auto___58501 + (1));
i__32955__auto___58501 = G__58502;
continue;
} else {
}
break;
}

var G__57880 = args57876.length;
switch (G__57880) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57876.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq57877){
var G__57878 = cljs.core.first.call(null,seq57877);
var seq57877__$1 = cljs.core.next.call(null,seq57877);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__57878,seq57877__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args57881 = [];
var len__32954__auto___58504 = arguments.length;
var i__32955__auto___58505 = (0);
while(true){
if((i__32955__auto___58505 < len__32954__auto___58504)){
args57881.push((arguments[i__32955__auto___58505]));

var G__58506 = (i__32955__auto___58505 + (1));
i__32955__auto___58505 = G__58506;
continue;
} else {
}
break;
}

var G__57885 = args57881.length;
switch (G__57885) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57881.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq57882){
var G__57883 = cljs.core.first.call(null,seq57882);
var seq57882__$1 = cljs.core.next.call(null,seq57882);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__57883,seq57882__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args57886 = [];
var len__32954__auto___58508 = arguments.length;
var i__32955__auto___58509 = (0);
while(true){
if((i__32955__auto___58509 < len__32954__auto___58508)){
args57886.push((arguments[i__32955__auto___58509]));

var G__58510 = (i__32955__auto___58509 + (1));
i__32955__auto___58509 = G__58510;
continue;
} else {
}
break;
}

var G__57890 = args57886.length;
switch (G__57890) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57886.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq57887){
var G__57888 = cljs.core.first.call(null,seq57887);
var seq57887__$1 = cljs.core.next.call(null,seq57887);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__57888,seq57887__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args57891 = [];
var len__32954__auto___58512 = arguments.length;
var i__32955__auto___58513 = (0);
while(true){
if((i__32955__auto___58513 < len__32954__auto___58512)){
args57891.push((arguments[i__32955__auto___58513]));

var G__58514 = (i__32955__auto___58513 + (1));
i__32955__auto___58513 = G__58514;
continue;
} else {
}
break;
}

var G__57895 = args57891.length;
switch (G__57895) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57891.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq57892){
var G__57893 = cljs.core.first.call(null,seq57892);
var seq57892__$1 = cljs.core.next.call(null,seq57892);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__57893,seq57892__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args57896 = [];
var len__32954__auto___58516 = arguments.length;
var i__32955__auto___58517 = (0);
while(true){
if((i__32955__auto___58517 < len__32954__auto___58516)){
args57896.push((arguments[i__32955__auto___58517]));

var G__58518 = (i__32955__auto___58517 + (1));
i__32955__auto___58517 = G__58518;
continue;
} else {
}
break;
}

var G__57900 = args57896.length;
switch (G__57900) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57896.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq57897){
var G__57898 = cljs.core.first.call(null,seq57897);
var seq57897__$1 = cljs.core.next.call(null,seq57897);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__57898,seq57897__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args57901 = [];
var len__32954__auto___58520 = arguments.length;
var i__32955__auto___58521 = (0);
while(true){
if((i__32955__auto___58521 < len__32954__auto___58520)){
args57901.push((arguments[i__32955__auto___58521]));

var G__58522 = (i__32955__auto___58521 + (1));
i__32955__auto___58521 = G__58522;
continue;
} else {
}
break;
}

var G__57905 = args57901.length;
switch (G__57905) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57901.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq57902){
var G__57903 = cljs.core.first.call(null,seq57902);
var seq57902__$1 = cljs.core.next.call(null,seq57902);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__57903,seq57902__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args57906 = [];
var len__32954__auto___58524 = arguments.length;
var i__32955__auto___58525 = (0);
while(true){
if((i__32955__auto___58525 < len__32954__auto___58524)){
args57906.push((arguments[i__32955__auto___58525]));

var G__58526 = (i__32955__auto___58525 + (1));
i__32955__auto___58525 = G__58526;
continue;
} else {
}
break;
}

var G__57910 = args57906.length;
switch (G__57910) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57906.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq57907){
var G__57908 = cljs.core.first.call(null,seq57907);
var seq57907__$1 = cljs.core.next.call(null,seq57907);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__57908,seq57907__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args57911 = [];
var len__32954__auto___58528 = arguments.length;
var i__32955__auto___58529 = (0);
while(true){
if((i__32955__auto___58529 < len__32954__auto___58528)){
args57911.push((arguments[i__32955__auto___58529]));

var G__58530 = (i__32955__auto___58529 + (1));
i__32955__auto___58529 = G__58530;
continue;
} else {
}
break;
}

var G__57915 = args57911.length;
switch (G__57915) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57911.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq57912){
var G__57913 = cljs.core.first.call(null,seq57912);
var seq57912__$1 = cljs.core.next.call(null,seq57912);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__57913,seq57912__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args57916 = [];
var len__32954__auto___58532 = arguments.length;
var i__32955__auto___58533 = (0);
while(true){
if((i__32955__auto___58533 < len__32954__auto___58532)){
args57916.push((arguments[i__32955__auto___58533]));

var G__58534 = (i__32955__auto___58533 + (1));
i__32955__auto___58533 = G__58534;
continue;
} else {
}
break;
}

var G__57920 = args57916.length;
switch (G__57920) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57916.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq57917){
var G__57918 = cljs.core.first.call(null,seq57917);
var seq57917__$1 = cljs.core.next.call(null,seq57917);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__57918,seq57917__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args57921 = [];
var len__32954__auto___58536 = arguments.length;
var i__32955__auto___58537 = (0);
while(true){
if((i__32955__auto___58537 < len__32954__auto___58536)){
args57921.push((arguments[i__32955__auto___58537]));

var G__58538 = (i__32955__auto___58537 + (1));
i__32955__auto___58537 = G__58538;
continue;
} else {
}
break;
}

var G__57925 = args57921.length;
switch (G__57925) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57921.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq57922){
var G__57923 = cljs.core.first.call(null,seq57922);
var seq57922__$1 = cljs.core.next.call(null,seq57922);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__57923,seq57922__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args57926 = [];
var len__32954__auto___58540 = arguments.length;
var i__32955__auto___58541 = (0);
while(true){
if((i__32955__auto___58541 < len__32954__auto___58540)){
args57926.push((arguments[i__32955__auto___58541]));

var G__58542 = (i__32955__auto___58541 + (1));
i__32955__auto___58541 = G__58542;
continue;
} else {
}
break;
}

var G__57930 = args57926.length;
switch (G__57930) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57926.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq57927){
var G__57928 = cljs.core.first.call(null,seq57927);
var seq57927__$1 = cljs.core.next.call(null,seq57927);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__57928,seq57927__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args57936 = [];
var len__32954__auto___58544 = arguments.length;
var i__32955__auto___58545 = (0);
while(true){
if((i__32955__auto___58545 < len__32954__auto___58544)){
args57936.push((arguments[i__32955__auto___58545]));

var G__58546 = (i__32955__auto___58545 + (1));
i__32955__auto___58545 = G__58546;
continue;
} else {
}
break;
}

var G__57940 = args57936.length;
switch (G__57940) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57936.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq57937){
var G__57938 = cljs.core.first.call(null,seq57937);
var seq57937__$1 = cljs.core.next.call(null,seq57937);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__57938,seq57937__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args57941 = [];
var len__32954__auto___58548 = arguments.length;
var i__32955__auto___58549 = (0);
while(true){
if((i__32955__auto___58549 < len__32954__auto___58548)){
args57941.push((arguments[i__32955__auto___58549]));

var G__58550 = (i__32955__auto___58549 + (1));
i__32955__auto___58549 = G__58550;
continue;
} else {
}
break;
}

var G__57945 = args57941.length;
switch (G__57945) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57941.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq57942){
var G__57943 = cljs.core.first.call(null,seq57942);
var seq57942__$1 = cljs.core.next.call(null,seq57942);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__57943,seq57942__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args57946 = [];
var len__32954__auto___58552 = arguments.length;
var i__32955__auto___58553 = (0);
while(true){
if((i__32955__auto___58553 < len__32954__auto___58552)){
args57946.push((arguments[i__32955__auto___58553]));

var G__58554 = (i__32955__auto___58553 + (1));
i__32955__auto___58553 = G__58554;
continue;
} else {
}
break;
}

var G__57950 = args57946.length;
switch (G__57950) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57946.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq57947){
var G__57948 = cljs.core.first.call(null,seq57947);
var seq57947__$1 = cljs.core.next.call(null,seq57947);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__57948,seq57947__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args57951 = [];
var len__32954__auto___58556 = arguments.length;
var i__32955__auto___58557 = (0);
while(true){
if((i__32955__auto___58557 < len__32954__auto___58556)){
args57951.push((arguments[i__32955__auto___58557]));

var G__58558 = (i__32955__auto___58557 + (1));
i__32955__auto___58557 = G__58558;
continue;
} else {
}
break;
}

var G__57955 = args57951.length;
switch (G__57955) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57951.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq57952){
var G__57953 = cljs.core.first.call(null,seq57952);
var seq57952__$1 = cljs.core.next.call(null,seq57952);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__57953,seq57952__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args57956 = [];
var len__32954__auto___58560 = arguments.length;
var i__32955__auto___58561 = (0);
while(true){
if((i__32955__auto___58561 < len__32954__auto___58560)){
args57956.push((arguments[i__32955__auto___58561]));

var G__58562 = (i__32955__auto___58561 + (1));
i__32955__auto___58561 = G__58562;
continue;
} else {
}
break;
}

var G__57960 = args57956.length;
switch (G__57960) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57956.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq57957){
var G__57958 = cljs.core.first.call(null,seq57957);
var seq57957__$1 = cljs.core.next.call(null,seq57957);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__57958,seq57957__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args57961 = [];
var len__32954__auto___58564 = arguments.length;
var i__32955__auto___58565 = (0);
while(true){
if((i__32955__auto___58565 < len__32954__auto___58564)){
args57961.push((arguments[i__32955__auto___58565]));

var G__58566 = (i__32955__auto___58565 + (1));
i__32955__auto___58565 = G__58566;
continue;
} else {
}
break;
}

var G__57965 = args57961.length;
switch (G__57965) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57961.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq57962){
var G__57963 = cljs.core.first.call(null,seq57962);
var seq57962__$1 = cljs.core.next.call(null,seq57962);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__57963,seq57962__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args57966 = [];
var len__32954__auto___58568 = arguments.length;
var i__32955__auto___58569 = (0);
while(true){
if((i__32955__auto___58569 < len__32954__auto___58568)){
args57966.push((arguments[i__32955__auto___58569]));

var G__58570 = (i__32955__auto___58569 + (1));
i__32955__auto___58569 = G__58570;
continue;
} else {
}
break;
}

var G__57970 = args57966.length;
switch (G__57970) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57966.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq57967){
var G__57968 = cljs.core.first.call(null,seq57967);
var seq57967__$1 = cljs.core.next.call(null,seq57967);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__57968,seq57967__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args57971 = [];
var len__32954__auto___58572 = arguments.length;
var i__32955__auto___58573 = (0);
while(true){
if((i__32955__auto___58573 < len__32954__auto___58572)){
args57971.push((arguments[i__32955__auto___58573]));

var G__58574 = (i__32955__auto___58573 + (1));
i__32955__auto___58573 = G__58574;
continue;
} else {
}
break;
}

var G__57975 = args57971.length;
switch (G__57975) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57971.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq57972){
var G__57973 = cljs.core.first.call(null,seq57972);
var seq57972__$1 = cljs.core.next.call(null,seq57972);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__57973,seq57972__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args57976 = [];
var len__32954__auto___58576 = arguments.length;
var i__32955__auto___58577 = (0);
while(true){
if((i__32955__auto___58577 < len__32954__auto___58576)){
args57976.push((arguments[i__32955__auto___58577]));

var G__58578 = (i__32955__auto___58577 + (1));
i__32955__auto___58577 = G__58578;
continue;
} else {
}
break;
}

var G__57980 = args57976.length;
switch (G__57980) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57976.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq57977){
var G__57978 = cljs.core.first.call(null,seq57977);
var seq57977__$1 = cljs.core.next.call(null,seq57977);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__57978,seq57977__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args57981 = [];
var len__32954__auto___58580 = arguments.length;
var i__32955__auto___58581 = (0);
while(true){
if((i__32955__auto___58581 < len__32954__auto___58580)){
args57981.push((arguments[i__32955__auto___58581]));

var G__58582 = (i__32955__auto___58581 + (1));
i__32955__auto___58581 = G__58582;
continue;
} else {
}
break;
}

var G__57985 = args57981.length;
switch (G__57985) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57981.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq57982){
var G__57983 = cljs.core.first.call(null,seq57982);
var seq57982__$1 = cljs.core.next.call(null,seq57982);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__57983,seq57982__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args57986 = [];
var len__32954__auto___58584 = arguments.length;
var i__32955__auto___58585 = (0);
while(true){
if((i__32955__auto___58585 < len__32954__auto___58584)){
args57986.push((arguments[i__32955__auto___58585]));

var G__58586 = (i__32955__auto___58585 + (1));
i__32955__auto___58585 = G__58586;
continue;
} else {
}
break;
}

var G__57990 = args57986.length;
switch (G__57990) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57986.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq57987){
var G__57988 = cljs.core.first.call(null,seq57987);
var seq57987__$1 = cljs.core.next.call(null,seq57987);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__57988,seq57987__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args57991 = [];
var len__32954__auto___58588 = arguments.length;
var i__32955__auto___58589 = (0);
while(true){
if((i__32955__auto___58589 < len__32954__auto___58588)){
args57991.push((arguments[i__32955__auto___58589]));

var G__58590 = (i__32955__auto___58589 + (1));
i__32955__auto___58589 = G__58590;
continue;
} else {
}
break;
}

var G__57995 = args57991.length;
switch (G__57995) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57991.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq57992){
var G__57993 = cljs.core.first.call(null,seq57992);
var seq57992__$1 = cljs.core.next.call(null,seq57992);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__57993,seq57992__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args57996 = [];
var len__32954__auto___58592 = arguments.length;
var i__32955__auto___58593 = (0);
while(true){
if((i__32955__auto___58593 < len__32954__auto___58592)){
args57996.push((arguments[i__32955__auto___58593]));

var G__58594 = (i__32955__auto___58593 + (1));
i__32955__auto___58593 = G__58594;
continue;
} else {
}
break;
}

var G__58000 = args57996.length;
switch (G__58000) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57996.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq57997){
var G__57998 = cljs.core.first.call(null,seq57997);
var seq57997__$1 = cljs.core.next.call(null,seq57997);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__57998,seq57997__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args58001 = [];
var len__32954__auto___58596 = arguments.length;
var i__32955__auto___58597 = (0);
while(true){
if((i__32955__auto___58597 < len__32954__auto___58596)){
args58001.push((arguments[i__32955__auto___58597]));

var G__58598 = (i__32955__auto___58597 + (1));
i__32955__auto___58597 = G__58598;
continue;
} else {
}
break;
}

var G__58005 = args58001.length;
switch (G__58005) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58001.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq58002){
var G__58003 = cljs.core.first.call(null,seq58002);
var seq58002__$1 = cljs.core.next.call(null,seq58002);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__58003,seq58002__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args58006 = [];
var len__32954__auto___58600 = arguments.length;
var i__32955__auto___58601 = (0);
while(true){
if((i__32955__auto___58601 < len__32954__auto___58600)){
args58006.push((arguments[i__32955__auto___58601]));

var G__58602 = (i__32955__auto___58601 + (1));
i__32955__auto___58601 = G__58602;
continue;
} else {
}
break;
}

var G__58010 = args58006.length;
switch (G__58010) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58006.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq58007){
var G__58008 = cljs.core.first.call(null,seq58007);
var seq58007__$1 = cljs.core.next.call(null,seq58007);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__58008,seq58007__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args58011 = [];
var len__32954__auto___58604 = arguments.length;
var i__32955__auto___58605 = (0);
while(true){
if((i__32955__auto___58605 < len__32954__auto___58604)){
args58011.push((arguments[i__32955__auto___58605]));

var G__58606 = (i__32955__auto___58605 + (1));
i__32955__auto___58605 = G__58606;
continue;
} else {
}
break;
}

var G__58015 = args58011.length;
switch (G__58015) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58011.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq58012){
var G__58013 = cljs.core.first.call(null,seq58012);
var seq58012__$1 = cljs.core.next.call(null,seq58012);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__58013,seq58012__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args58016 = [];
var len__32954__auto___58608 = arguments.length;
var i__32955__auto___58609 = (0);
while(true){
if((i__32955__auto___58609 < len__32954__auto___58608)){
args58016.push((arguments[i__32955__auto___58609]));

var G__58610 = (i__32955__auto___58609 + (1));
i__32955__auto___58609 = G__58610;
continue;
} else {
}
break;
}

var G__58020 = args58016.length;
switch (G__58020) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58016.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq58017){
var G__58018 = cljs.core.first.call(null,seq58017);
var seq58017__$1 = cljs.core.next.call(null,seq58017);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__58018,seq58017__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args58021 = [];
var len__32954__auto___58612 = arguments.length;
var i__32955__auto___58613 = (0);
while(true){
if((i__32955__auto___58613 < len__32954__auto___58612)){
args58021.push((arguments[i__32955__auto___58613]));

var G__58614 = (i__32955__auto___58613 + (1));
i__32955__auto___58613 = G__58614;
continue;
} else {
}
break;
}

var G__58025 = args58021.length;
switch (G__58025) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58021.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq58022){
var G__58023 = cljs.core.first.call(null,seq58022);
var seq58022__$1 = cljs.core.next.call(null,seq58022);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__58023,seq58022__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args58026 = [];
var len__32954__auto___58616 = arguments.length;
var i__32955__auto___58617 = (0);
while(true){
if((i__32955__auto___58617 < len__32954__auto___58616)){
args58026.push((arguments[i__32955__auto___58617]));

var G__58618 = (i__32955__auto___58617 + (1));
i__32955__auto___58617 = G__58618;
continue;
} else {
}
break;
}

var G__58030 = args58026.length;
switch (G__58030) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58026.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq58027){
var G__58028 = cljs.core.first.call(null,seq58027);
var seq58027__$1 = cljs.core.next.call(null,seq58027);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__58028,seq58027__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args58031 = [];
var len__32954__auto___58620 = arguments.length;
var i__32955__auto___58621 = (0);
while(true){
if((i__32955__auto___58621 < len__32954__auto___58620)){
args58031.push((arguments[i__32955__auto___58621]));

var G__58622 = (i__32955__auto___58621 + (1));
i__32955__auto___58621 = G__58622;
continue;
} else {
}
break;
}

var G__58035 = args58031.length;
switch (G__58035) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58031.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq58032){
var G__58033 = cljs.core.first.call(null,seq58032);
var seq58032__$1 = cljs.core.next.call(null,seq58032);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__58033,seq58032__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args58036 = [];
var len__32954__auto___58624 = arguments.length;
var i__32955__auto___58625 = (0);
while(true){
if((i__32955__auto___58625 < len__32954__auto___58624)){
args58036.push((arguments[i__32955__auto___58625]));

var G__58626 = (i__32955__auto___58625 + (1));
i__32955__auto___58625 = G__58626;
continue;
} else {
}
break;
}

var G__58040 = args58036.length;
switch (G__58040) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58036.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq58037){
var G__58038 = cljs.core.first.call(null,seq58037);
var seq58037__$1 = cljs.core.next.call(null,seq58037);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__58038,seq58037__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args58041 = [];
var len__32954__auto___58628 = arguments.length;
var i__32955__auto___58629 = (0);
while(true){
if((i__32955__auto___58629 < len__32954__auto___58628)){
args58041.push((arguments[i__32955__auto___58629]));

var G__58630 = (i__32955__auto___58629 + (1));
i__32955__auto___58629 = G__58630;
continue;
} else {
}
break;
}

var G__58045 = args58041.length;
switch (G__58045) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58041.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq58042){
var G__58043 = cljs.core.first.call(null,seq58042);
var seq58042__$1 = cljs.core.next.call(null,seq58042);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__58043,seq58042__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args58046 = [];
var len__32954__auto___58632 = arguments.length;
var i__32955__auto___58633 = (0);
while(true){
if((i__32955__auto___58633 < len__32954__auto___58632)){
args58046.push((arguments[i__32955__auto___58633]));

var G__58634 = (i__32955__auto___58633 + (1));
i__32955__auto___58633 = G__58634;
continue;
} else {
}
break;
}

var G__58050 = args58046.length;
switch (G__58050) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58046.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq58047){
var G__58048 = cljs.core.first.call(null,seq58047);
var seq58047__$1 = cljs.core.next.call(null,seq58047);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__58048,seq58047__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args58051 = [];
var len__32954__auto___58636 = arguments.length;
var i__32955__auto___58637 = (0);
while(true){
if((i__32955__auto___58637 < len__32954__auto___58636)){
args58051.push((arguments[i__32955__auto___58637]));

var G__58638 = (i__32955__auto___58637 + (1));
i__32955__auto___58637 = G__58638;
continue;
} else {
}
break;
}

var G__58055 = args58051.length;
switch (G__58055) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58051.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq58052){
var G__58053 = cljs.core.first.call(null,seq58052);
var seq58052__$1 = cljs.core.next.call(null,seq58052);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__58053,seq58052__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args58056 = [];
var len__32954__auto___58640 = arguments.length;
var i__32955__auto___58641 = (0);
while(true){
if((i__32955__auto___58641 < len__32954__auto___58640)){
args58056.push((arguments[i__32955__auto___58641]));

var G__58642 = (i__32955__auto___58641 + (1));
i__32955__auto___58641 = G__58642;
continue;
} else {
}
break;
}

var G__58060 = args58056.length;
switch (G__58060) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58056.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq58057){
var G__58058 = cljs.core.first.call(null,seq58057);
var seq58057__$1 = cljs.core.next.call(null,seq58057);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__58058,seq58057__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args58061 = [];
var len__32954__auto___58644 = arguments.length;
var i__32955__auto___58645 = (0);
while(true){
if((i__32955__auto___58645 < len__32954__auto___58644)){
args58061.push((arguments[i__32955__auto___58645]));

var G__58646 = (i__32955__auto___58645 + (1));
i__32955__auto___58645 = G__58646;
continue;
} else {
}
break;
}

var G__58065 = args58061.length;
switch (G__58065) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58061.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq58062){
var G__58063 = cljs.core.first.call(null,seq58062);
var seq58062__$1 = cljs.core.next.call(null,seq58062);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__58063,seq58062__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args58066 = [];
var len__32954__auto___58648 = arguments.length;
var i__32955__auto___58649 = (0);
while(true){
if((i__32955__auto___58649 < len__32954__auto___58648)){
args58066.push((arguments[i__32955__auto___58649]));

var G__58650 = (i__32955__auto___58649 + (1));
i__32955__auto___58649 = G__58650;
continue;
} else {
}
break;
}

var G__58070 = args58066.length;
switch (G__58070) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58066.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq58067){
var G__58068 = cljs.core.first.call(null,seq58067);
var seq58067__$1 = cljs.core.next.call(null,seq58067);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__58068,seq58067__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args58071 = [];
var len__32954__auto___58652 = arguments.length;
var i__32955__auto___58653 = (0);
while(true){
if((i__32955__auto___58653 < len__32954__auto___58652)){
args58071.push((arguments[i__32955__auto___58653]));

var G__58654 = (i__32955__auto___58653 + (1));
i__32955__auto___58653 = G__58654;
continue;
} else {
}
break;
}

var G__58075 = args58071.length;
switch (G__58075) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58071.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq58072){
var G__58073 = cljs.core.first.call(null,seq58072);
var seq58072__$1 = cljs.core.next.call(null,seq58072);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__58073,seq58072__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args58076 = [];
var len__32954__auto___58656 = arguments.length;
var i__32955__auto___58657 = (0);
while(true){
if((i__32955__auto___58657 < len__32954__auto___58656)){
args58076.push((arguments[i__32955__auto___58657]));

var G__58658 = (i__32955__auto___58657 + (1));
i__32955__auto___58657 = G__58658;
continue;
} else {
}
break;
}

var G__58080 = args58076.length;
switch (G__58080) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58076.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq58077){
var G__58078 = cljs.core.first.call(null,seq58077);
var seq58077__$1 = cljs.core.next.call(null,seq58077);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__58078,seq58077__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args58081 = [];
var len__32954__auto___58660 = arguments.length;
var i__32955__auto___58661 = (0);
while(true){
if((i__32955__auto___58661 < len__32954__auto___58660)){
args58081.push((arguments[i__32955__auto___58661]));

var G__58662 = (i__32955__auto___58661 + (1));
i__32955__auto___58661 = G__58662;
continue;
} else {
}
break;
}

var G__58085 = args58081.length;
switch (G__58085) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58081.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq58082){
var G__58083 = cljs.core.first.call(null,seq58082);
var seq58082__$1 = cljs.core.next.call(null,seq58082);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__58083,seq58082__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args58086 = [];
var len__32954__auto___58664 = arguments.length;
var i__32955__auto___58665 = (0);
while(true){
if((i__32955__auto___58665 < len__32954__auto___58664)){
args58086.push((arguments[i__32955__auto___58665]));

var G__58666 = (i__32955__auto___58665 + (1));
i__32955__auto___58665 = G__58666;
continue;
} else {
}
break;
}

var G__58090 = args58086.length;
switch (G__58090) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58086.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq58087){
var G__58088 = cljs.core.first.call(null,seq58087);
var seq58087__$1 = cljs.core.next.call(null,seq58087);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__58088,seq58087__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args58091 = [];
var len__32954__auto___58668 = arguments.length;
var i__32955__auto___58669 = (0);
while(true){
if((i__32955__auto___58669 < len__32954__auto___58668)){
args58091.push((arguments[i__32955__auto___58669]));

var G__58670 = (i__32955__auto___58669 + (1));
i__32955__auto___58669 = G__58670;
continue;
} else {
}
break;
}

var G__58095 = args58091.length;
switch (G__58095) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58091.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq58092){
var G__58093 = cljs.core.first.call(null,seq58092);
var seq58092__$1 = cljs.core.next.call(null,seq58092);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__58093,seq58092__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args58096 = [];
var len__32954__auto___58672 = arguments.length;
var i__32955__auto___58673 = (0);
while(true){
if((i__32955__auto___58673 < len__32954__auto___58672)){
args58096.push((arguments[i__32955__auto___58673]));

var G__58674 = (i__32955__auto___58673 + (1));
i__32955__auto___58673 = G__58674;
continue;
} else {
}
break;
}

var G__58100 = args58096.length;
switch (G__58100) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58096.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq58097){
var G__58098 = cljs.core.first.call(null,seq58097);
var seq58097__$1 = cljs.core.next.call(null,seq58097);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__58098,seq58097__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args58101 = [];
var len__32954__auto___58676 = arguments.length;
var i__32955__auto___58677 = (0);
while(true){
if((i__32955__auto___58677 < len__32954__auto___58676)){
args58101.push((arguments[i__32955__auto___58677]));

var G__58678 = (i__32955__auto___58677 + (1));
i__32955__auto___58677 = G__58678;
continue;
} else {
}
break;
}

var G__58105 = args58101.length;
switch (G__58105) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58101.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq58102){
var G__58103 = cljs.core.first.call(null,seq58102);
var seq58102__$1 = cljs.core.next.call(null,seq58102);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__58103,seq58102__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args58106 = [];
var len__32954__auto___58680 = arguments.length;
var i__32955__auto___58681 = (0);
while(true){
if((i__32955__auto___58681 < len__32954__auto___58680)){
args58106.push((arguments[i__32955__auto___58681]));

var G__58682 = (i__32955__auto___58681 + (1));
i__32955__auto___58681 = G__58682;
continue;
} else {
}
break;
}

var G__58110 = args58106.length;
switch (G__58110) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58106.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq58107){
var G__58108 = cljs.core.first.call(null,seq58107);
var seq58107__$1 = cljs.core.next.call(null,seq58107);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__58108,seq58107__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args58111 = [];
var len__32954__auto___58684 = arguments.length;
var i__32955__auto___58685 = (0);
while(true){
if((i__32955__auto___58685 < len__32954__auto___58684)){
args58111.push((arguments[i__32955__auto___58685]));

var G__58686 = (i__32955__auto___58685 + (1));
i__32955__auto___58685 = G__58686;
continue;
} else {
}
break;
}

var G__58115 = args58111.length;
switch (G__58115) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58111.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq58112){
var G__58113 = cljs.core.first.call(null,seq58112);
var seq58112__$1 = cljs.core.next.call(null,seq58112);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__58113,seq58112__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args58116 = [];
var len__32954__auto___58688 = arguments.length;
var i__32955__auto___58689 = (0);
while(true){
if((i__32955__auto___58689 < len__32954__auto___58688)){
args58116.push((arguments[i__32955__auto___58689]));

var G__58690 = (i__32955__auto___58689 + (1));
i__32955__auto___58689 = G__58690;
continue;
} else {
}
break;
}

var G__58120 = args58116.length;
switch (G__58120) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58116.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq58117){
var G__58118 = cljs.core.first.call(null,seq58117);
var seq58117__$1 = cljs.core.next.call(null,seq58117);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__58118,seq58117__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args58121 = [];
var len__32954__auto___58692 = arguments.length;
var i__32955__auto___58693 = (0);
while(true){
if((i__32955__auto___58693 < len__32954__auto___58692)){
args58121.push((arguments[i__32955__auto___58693]));

var G__58694 = (i__32955__auto___58693 + (1));
i__32955__auto___58693 = G__58694;
continue;
} else {
}
break;
}

var G__58125 = args58121.length;
switch (G__58125) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58121.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq58122){
var G__58123 = cljs.core.first.call(null,seq58122);
var seq58122__$1 = cljs.core.next.call(null,seq58122);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__58123,seq58122__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args58126 = [];
var len__32954__auto___58696 = arguments.length;
var i__32955__auto___58697 = (0);
while(true){
if((i__32955__auto___58697 < len__32954__auto___58696)){
args58126.push((arguments[i__32955__auto___58697]));

var G__58698 = (i__32955__auto___58697 + (1));
i__32955__auto___58697 = G__58698;
continue;
} else {
}
break;
}

var G__58130 = args58126.length;
switch (G__58130) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58126.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq58127){
var G__58128 = cljs.core.first.call(null,seq58127);
var seq58127__$1 = cljs.core.next.call(null,seq58127);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__58128,seq58127__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args58131 = [];
var len__32954__auto___58700 = arguments.length;
var i__32955__auto___58701 = (0);
while(true){
if((i__32955__auto___58701 < len__32954__auto___58700)){
args58131.push((arguments[i__32955__auto___58701]));

var G__58702 = (i__32955__auto___58701 + (1));
i__32955__auto___58701 = G__58702;
continue;
} else {
}
break;
}

var G__58135 = args58131.length;
switch (G__58135) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58131.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq58132){
var G__58133 = cljs.core.first.call(null,seq58132);
var seq58132__$1 = cljs.core.next.call(null,seq58132);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__58133,seq58132__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args58136 = [];
var len__32954__auto___58704 = arguments.length;
var i__32955__auto___58705 = (0);
while(true){
if((i__32955__auto___58705 < len__32954__auto___58704)){
args58136.push((arguments[i__32955__auto___58705]));

var G__58706 = (i__32955__auto___58705 + (1));
i__32955__auto___58705 = G__58706;
continue;
} else {
}
break;
}

var G__58140 = args58136.length;
switch (G__58140) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58136.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq58137){
var G__58138 = cljs.core.first.call(null,seq58137);
var seq58137__$1 = cljs.core.next.call(null,seq58137);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__58138,seq58137__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args58141 = [];
var len__32954__auto___58708 = arguments.length;
var i__32955__auto___58709 = (0);
while(true){
if((i__32955__auto___58709 < len__32954__auto___58708)){
args58141.push((arguments[i__32955__auto___58709]));

var G__58710 = (i__32955__auto___58709 + (1));
i__32955__auto___58709 = G__58710;
continue;
} else {
}
break;
}

var G__58145 = args58141.length;
switch (G__58145) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58141.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq58142){
var G__58143 = cljs.core.first.call(null,seq58142);
var seq58142__$1 = cljs.core.next.call(null,seq58142);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__58143,seq58142__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args58146 = [];
var len__32954__auto___58712 = arguments.length;
var i__32955__auto___58713 = (0);
while(true){
if((i__32955__auto___58713 < len__32954__auto___58712)){
args58146.push((arguments[i__32955__auto___58713]));

var G__58714 = (i__32955__auto___58713 + (1));
i__32955__auto___58713 = G__58714;
continue;
} else {
}
break;
}

var G__58150 = args58146.length;
switch (G__58150) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58146.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq58147){
var G__58148 = cljs.core.first.call(null,seq58147);
var seq58147__$1 = cljs.core.next.call(null,seq58147);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__58148,seq58147__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args58151 = [];
var len__32954__auto___58716 = arguments.length;
var i__32955__auto___58717 = (0);
while(true){
if((i__32955__auto___58717 < len__32954__auto___58716)){
args58151.push((arguments[i__32955__auto___58717]));

var G__58718 = (i__32955__auto___58717 + (1));
i__32955__auto___58717 = G__58718;
continue;
} else {
}
break;
}

var G__58155 = args58151.length;
switch (G__58155) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58151.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq58152){
var G__58153 = cljs.core.first.call(null,seq58152);
var seq58152__$1 = cljs.core.next.call(null,seq58152);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__58153,seq58152__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args58156 = [];
var len__32954__auto___58720 = arguments.length;
var i__32955__auto___58721 = (0);
while(true){
if((i__32955__auto___58721 < len__32954__auto___58720)){
args58156.push((arguments[i__32955__auto___58721]));

var G__58722 = (i__32955__auto___58721 + (1));
i__32955__auto___58721 = G__58722;
continue;
} else {
}
break;
}

var G__58160 = args58156.length;
switch (G__58160) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58156.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq58157){
var G__58158 = cljs.core.first.call(null,seq58157);
var seq58157__$1 = cljs.core.next.call(null,seq58157);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__58158,seq58157__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args58161 = [];
var len__32954__auto___58724 = arguments.length;
var i__32955__auto___58725 = (0);
while(true){
if((i__32955__auto___58725 < len__32954__auto___58724)){
args58161.push((arguments[i__32955__auto___58725]));

var G__58726 = (i__32955__auto___58725 + (1));
i__32955__auto___58725 = G__58726;
continue;
} else {
}
break;
}

var G__58165 = args58161.length;
switch (G__58165) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58161.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq58162){
var G__58163 = cljs.core.first.call(null,seq58162);
var seq58162__$1 = cljs.core.next.call(null,seq58162);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__58163,seq58162__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args58166 = [];
var len__32954__auto___58728 = arguments.length;
var i__32955__auto___58729 = (0);
while(true){
if((i__32955__auto___58729 < len__32954__auto___58728)){
args58166.push((arguments[i__32955__auto___58729]));

var G__58730 = (i__32955__auto___58729 + (1));
i__32955__auto___58729 = G__58730;
continue;
} else {
}
break;
}

var G__58170 = args58166.length;
switch (G__58170) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58166.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq58167){
var G__58168 = cljs.core.first.call(null,seq58167);
var seq58167__$1 = cljs.core.next.call(null,seq58167);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__58168,seq58167__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args58171 = [];
var len__32954__auto___58732 = arguments.length;
var i__32955__auto___58733 = (0);
while(true){
if((i__32955__auto___58733 < len__32954__auto___58732)){
args58171.push((arguments[i__32955__auto___58733]));

var G__58734 = (i__32955__auto___58733 + (1));
i__32955__auto___58733 = G__58734;
continue;
} else {
}
break;
}

var G__58175 = args58171.length;
switch (G__58175) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58171.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq58172){
var G__58173 = cljs.core.first.call(null,seq58172);
var seq58172__$1 = cljs.core.next.call(null,seq58172);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__58173,seq58172__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args58176 = [];
var len__32954__auto___58736 = arguments.length;
var i__32955__auto___58737 = (0);
while(true){
if((i__32955__auto___58737 < len__32954__auto___58736)){
args58176.push((arguments[i__32955__auto___58737]));

var G__58738 = (i__32955__auto___58737 + (1));
i__32955__auto___58737 = G__58738;
continue;
} else {
}
break;
}

var G__58180 = args58176.length;
switch (G__58180) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58176.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq58177){
var G__58178 = cljs.core.first.call(null,seq58177);
var seq58177__$1 = cljs.core.next.call(null,seq58177);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__58178,seq58177__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args58181 = [];
var len__32954__auto___58740 = arguments.length;
var i__32955__auto___58741 = (0);
while(true){
if((i__32955__auto___58741 < len__32954__auto___58740)){
args58181.push((arguments[i__32955__auto___58741]));

var G__58742 = (i__32955__auto___58741 + (1));
i__32955__auto___58741 = G__58742;
continue;
} else {
}
break;
}

var G__58185 = args58181.length;
switch (G__58185) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58181.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq58182){
var G__58183 = cljs.core.first.call(null,seq58182);
var seq58182__$1 = cljs.core.next.call(null,seq58182);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__58183,seq58182__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args58186 = [];
var len__32954__auto___58744 = arguments.length;
var i__32955__auto___58745 = (0);
while(true){
if((i__32955__auto___58745 < len__32954__auto___58744)){
args58186.push((arguments[i__32955__auto___58745]));

var G__58746 = (i__32955__auto___58745 + (1));
i__32955__auto___58745 = G__58746;
continue;
} else {
}
break;
}

var G__58190 = args58186.length;
switch (G__58190) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58186.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq58187){
var G__58188 = cljs.core.first.call(null,seq58187);
var seq58187__$1 = cljs.core.next.call(null,seq58187);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__58188,seq58187__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args58191 = [];
var len__32954__auto___58748 = arguments.length;
var i__32955__auto___58749 = (0);
while(true){
if((i__32955__auto___58749 < len__32954__auto___58748)){
args58191.push((arguments[i__32955__auto___58749]));

var G__58750 = (i__32955__auto___58749 + (1));
i__32955__auto___58749 = G__58750;
continue;
} else {
}
break;
}

var G__58195 = args58191.length;
switch (G__58195) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58191.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq58192){
var G__58193 = cljs.core.first.call(null,seq58192);
var seq58192__$1 = cljs.core.next.call(null,seq58192);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__58193,seq58192__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args58196 = [];
var len__32954__auto___58752 = arguments.length;
var i__32955__auto___58753 = (0);
while(true){
if((i__32955__auto___58753 < len__32954__auto___58752)){
args58196.push((arguments[i__32955__auto___58753]));

var G__58754 = (i__32955__auto___58753 + (1));
i__32955__auto___58753 = G__58754;
continue;
} else {
}
break;
}

var G__58200 = args58196.length;
switch (G__58200) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58196.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq58197){
var G__58198 = cljs.core.first.call(null,seq58197);
var seq58197__$1 = cljs.core.next.call(null,seq58197);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__58198,seq58197__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args58201 = [];
var len__32954__auto___58756 = arguments.length;
var i__32955__auto___58757 = (0);
while(true){
if((i__32955__auto___58757 < len__32954__auto___58756)){
args58201.push((arguments[i__32955__auto___58757]));

var G__58758 = (i__32955__auto___58757 + (1));
i__32955__auto___58757 = G__58758;
continue;
} else {
}
break;
}

var G__58205 = args58201.length;
switch (G__58205) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58201.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq58202){
var G__58203 = cljs.core.first.call(null,seq58202);
var seq58202__$1 = cljs.core.next.call(null,seq58202);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__58203,seq58202__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args58206 = [];
var len__32954__auto___58760 = arguments.length;
var i__32955__auto___58761 = (0);
while(true){
if((i__32955__auto___58761 < len__32954__auto___58760)){
args58206.push((arguments[i__32955__auto___58761]));

var G__58762 = (i__32955__auto___58761 + (1));
i__32955__auto___58761 = G__58762;
continue;
} else {
}
break;
}

var G__58210 = args58206.length;
switch (G__58210) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58206.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq58207){
var G__58208 = cljs.core.first.call(null,seq58207);
var seq58207__$1 = cljs.core.next.call(null,seq58207);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__58208,seq58207__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args58211 = [];
var len__32954__auto___58764 = arguments.length;
var i__32955__auto___58765 = (0);
while(true){
if((i__32955__auto___58765 < len__32954__auto___58764)){
args58211.push((arguments[i__32955__auto___58765]));

var G__58766 = (i__32955__auto___58765 + (1));
i__32955__auto___58765 = G__58766;
continue;
} else {
}
break;
}

var G__58215 = args58211.length;
switch (G__58215) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58211.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq58212){
var G__58213 = cljs.core.first.call(null,seq58212);
var seq58212__$1 = cljs.core.next.call(null,seq58212);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__58213,seq58212__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args58216 = [];
var len__32954__auto___58768 = arguments.length;
var i__32955__auto___58769 = (0);
while(true){
if((i__32955__auto___58769 < len__32954__auto___58768)){
args58216.push((arguments[i__32955__auto___58769]));

var G__58770 = (i__32955__auto___58769 + (1));
i__32955__auto___58769 = G__58770;
continue;
} else {
}
break;
}

var G__58220 = args58216.length;
switch (G__58220) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58216.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq58217){
var G__58218 = cljs.core.first.call(null,seq58217);
var seq58217__$1 = cljs.core.next.call(null,seq58217);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__58218,seq58217__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args58221 = [];
var len__32954__auto___58772 = arguments.length;
var i__32955__auto___58773 = (0);
while(true){
if((i__32955__auto___58773 < len__32954__auto___58772)){
args58221.push((arguments[i__32955__auto___58773]));

var G__58774 = (i__32955__auto___58773 + (1));
i__32955__auto___58773 = G__58774;
continue;
} else {
}
break;
}

var G__58225 = args58221.length;
switch (G__58225) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58221.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq58222){
var G__58223 = cljs.core.first.call(null,seq58222);
var seq58222__$1 = cljs.core.next.call(null,seq58222);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__58223,seq58222__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args58226 = [];
var len__32954__auto___58776 = arguments.length;
var i__32955__auto___58777 = (0);
while(true){
if((i__32955__auto___58777 < len__32954__auto___58776)){
args58226.push((arguments[i__32955__auto___58777]));

var G__58778 = (i__32955__auto___58777 + (1));
i__32955__auto___58777 = G__58778;
continue;
} else {
}
break;
}

var G__58230 = args58226.length;
switch (G__58230) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58226.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq58227){
var G__58228 = cljs.core.first.call(null,seq58227);
var seq58227__$1 = cljs.core.next.call(null,seq58227);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__58228,seq58227__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args58231 = [];
var len__32954__auto___58780 = arguments.length;
var i__32955__auto___58781 = (0);
while(true){
if((i__32955__auto___58781 < len__32954__auto___58780)){
args58231.push((arguments[i__32955__auto___58781]));

var G__58782 = (i__32955__auto___58781 + (1));
i__32955__auto___58781 = G__58782;
continue;
} else {
}
break;
}

var G__58235 = args58231.length;
switch (G__58235) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58231.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq58232){
var G__58233 = cljs.core.first.call(null,seq58232);
var seq58232__$1 = cljs.core.next.call(null,seq58232);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__58233,seq58232__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args58236 = [];
var len__32954__auto___58784 = arguments.length;
var i__32955__auto___58785 = (0);
while(true){
if((i__32955__auto___58785 < len__32954__auto___58784)){
args58236.push((arguments[i__32955__auto___58785]));

var G__58786 = (i__32955__auto___58785 + (1));
i__32955__auto___58785 = G__58786;
continue;
} else {
}
break;
}

var G__58240 = args58236.length;
switch (G__58240) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58236.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq58237){
var G__58238 = cljs.core.first.call(null,seq58237);
var seq58237__$1 = cljs.core.next.call(null,seq58237);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__58238,seq58237__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args58241 = [];
var len__32954__auto___58788 = arguments.length;
var i__32955__auto___58789 = (0);
while(true){
if((i__32955__auto___58789 < len__32954__auto___58788)){
args58241.push((arguments[i__32955__auto___58789]));

var G__58790 = (i__32955__auto___58789 + (1));
i__32955__auto___58789 = G__58790;
continue;
} else {
}
break;
}

var G__58245 = args58241.length;
switch (G__58245) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58241.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq58242){
var G__58243 = cljs.core.first.call(null,seq58242);
var seq58242__$1 = cljs.core.next.call(null,seq58242);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__58243,seq58242__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args58246 = [];
var len__32954__auto___58792 = arguments.length;
var i__32955__auto___58793 = (0);
while(true){
if((i__32955__auto___58793 < len__32954__auto___58792)){
args58246.push((arguments[i__32955__auto___58793]));

var G__58794 = (i__32955__auto___58793 + (1));
i__32955__auto___58793 = G__58794;
continue;
} else {
}
break;
}

var G__58250 = args58246.length;
switch (G__58250) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58246.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq58247){
var G__58248 = cljs.core.first.call(null,seq58247);
var seq58247__$1 = cljs.core.next.call(null,seq58247);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__58248,seq58247__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args58251 = [];
var len__32954__auto___58796 = arguments.length;
var i__32955__auto___58797 = (0);
while(true){
if((i__32955__auto___58797 < len__32954__auto___58796)){
args58251.push((arguments[i__32955__auto___58797]));

var G__58798 = (i__32955__auto___58797 + (1));
i__32955__auto___58797 = G__58798;
continue;
} else {
}
break;
}

var G__58255 = args58251.length;
switch (G__58255) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58251.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq58252){
var G__58253 = cljs.core.first.call(null,seq58252);
var seq58252__$1 = cljs.core.next.call(null,seq58252);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__58253,seq58252__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args58256 = [];
var len__32954__auto___58800 = arguments.length;
var i__32955__auto___58801 = (0);
while(true){
if((i__32955__auto___58801 < len__32954__auto___58800)){
args58256.push((arguments[i__32955__auto___58801]));

var G__58802 = (i__32955__auto___58801 + (1));
i__32955__auto___58801 = G__58802;
continue;
} else {
}
break;
}

var G__58260 = args58256.length;
switch (G__58260) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58256.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq58257){
var G__58258 = cljs.core.first.call(null,seq58257);
var seq58257__$1 = cljs.core.next.call(null,seq58257);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__58258,seq58257__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args58261 = [];
var len__32954__auto___58804 = arguments.length;
var i__32955__auto___58805 = (0);
while(true){
if((i__32955__auto___58805 < len__32954__auto___58804)){
args58261.push((arguments[i__32955__auto___58805]));

var G__58806 = (i__32955__auto___58805 + (1));
i__32955__auto___58805 = G__58806;
continue;
} else {
}
break;
}

var G__58265 = args58261.length;
switch (G__58265) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58261.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq58262){
var G__58263 = cljs.core.first.call(null,seq58262);
var seq58262__$1 = cljs.core.next.call(null,seq58262);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__58263,seq58262__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args58266 = [];
var len__32954__auto___58808 = arguments.length;
var i__32955__auto___58809 = (0);
while(true){
if((i__32955__auto___58809 < len__32954__auto___58808)){
args58266.push((arguments[i__32955__auto___58809]));

var G__58810 = (i__32955__auto___58809 + (1));
i__32955__auto___58809 = G__58810;
continue;
} else {
}
break;
}

var G__58270 = args58266.length;
switch (G__58270) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58266.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq58267){
var G__58268 = cljs.core.first.call(null,seq58267);
var seq58267__$1 = cljs.core.next.call(null,seq58267);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__58268,seq58267__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args58271 = [];
var len__32954__auto___58812 = arguments.length;
var i__32955__auto___58813 = (0);
while(true){
if((i__32955__auto___58813 < len__32954__auto___58812)){
args58271.push((arguments[i__32955__auto___58813]));

var G__58814 = (i__32955__auto___58813 + (1));
i__32955__auto___58813 = G__58814;
continue;
} else {
}
break;
}

var G__58275 = args58271.length;
switch (G__58275) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58271.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq58272){
var G__58273 = cljs.core.first.call(null,seq58272);
var seq58272__$1 = cljs.core.next.call(null,seq58272);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__58273,seq58272__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args58276 = [];
var len__32954__auto___58816 = arguments.length;
var i__32955__auto___58817 = (0);
while(true){
if((i__32955__auto___58817 < len__32954__auto___58816)){
args58276.push((arguments[i__32955__auto___58817]));

var G__58818 = (i__32955__auto___58817 + (1));
i__32955__auto___58817 = G__58818;
continue;
} else {
}
break;
}

var G__58280 = args58276.length;
switch (G__58280) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58276.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq58277){
var G__58278 = cljs.core.first.call(null,seq58277);
var seq58277__$1 = cljs.core.next.call(null,seq58277);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__58278,seq58277__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args58281 = [];
var len__32954__auto___58820 = arguments.length;
var i__32955__auto___58821 = (0);
while(true){
if((i__32955__auto___58821 < len__32954__auto___58820)){
args58281.push((arguments[i__32955__auto___58821]));

var G__58822 = (i__32955__auto___58821 + (1));
i__32955__auto___58821 = G__58822;
continue;
} else {
}
break;
}

var G__58285 = args58281.length;
switch (G__58285) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58281.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq58282){
var G__58283 = cljs.core.first.call(null,seq58282);
var seq58282__$1 = cljs.core.next.call(null,seq58282);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__58283,seq58282__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args58286 = [];
var len__32954__auto___58824 = arguments.length;
var i__32955__auto___58825 = (0);
while(true){
if((i__32955__auto___58825 < len__32954__auto___58824)){
args58286.push((arguments[i__32955__auto___58825]));

var G__58826 = (i__32955__auto___58825 + (1));
i__32955__auto___58825 = G__58826;
continue;
} else {
}
break;
}

var G__58290 = args58286.length;
switch (G__58290) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58286.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq58287){
var G__58288 = cljs.core.first.call(null,seq58287);
var seq58287__$1 = cljs.core.next.call(null,seq58287);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__58288,seq58287__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args58291 = [];
var len__32954__auto___58828 = arguments.length;
var i__32955__auto___58829 = (0);
while(true){
if((i__32955__auto___58829 < len__32954__auto___58828)){
args58291.push((arguments[i__32955__auto___58829]));

var G__58830 = (i__32955__auto___58829 + (1));
i__32955__auto___58829 = G__58830;
continue;
} else {
}
break;
}

var G__58295 = args58291.length;
switch (G__58295) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58291.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq58292){
var G__58293 = cljs.core.first.call(null,seq58292);
var seq58292__$1 = cljs.core.next.call(null,seq58292);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__58293,seq58292__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args58296 = [];
var len__32954__auto___58832 = arguments.length;
var i__32955__auto___58833 = (0);
while(true){
if((i__32955__auto___58833 < len__32954__auto___58832)){
args58296.push((arguments[i__32955__auto___58833]));

var G__58834 = (i__32955__auto___58833 + (1));
i__32955__auto___58833 = G__58834;
continue;
} else {
}
break;
}

var G__58300 = args58296.length;
switch (G__58300) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58296.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq58297){
var G__58298 = cljs.core.first.call(null,seq58297);
var seq58297__$1 = cljs.core.next.call(null,seq58297);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__58298,seq58297__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args58301 = [];
var len__32954__auto___58836 = arguments.length;
var i__32955__auto___58837 = (0);
while(true){
if((i__32955__auto___58837 < len__32954__auto___58836)){
args58301.push((arguments[i__32955__auto___58837]));

var G__58838 = (i__32955__auto___58837 + (1));
i__32955__auto___58837 = G__58838;
continue;
} else {
}
break;
}

var G__58305 = args58301.length;
switch (G__58305) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58301.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq58302){
var G__58303 = cljs.core.first.call(null,seq58302);
var seq58302__$1 = cljs.core.next.call(null,seq58302);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__58303,seq58302__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args58306 = [];
var len__32954__auto___58840 = arguments.length;
var i__32955__auto___58841 = (0);
while(true){
if((i__32955__auto___58841 < len__32954__auto___58840)){
args58306.push((arguments[i__32955__auto___58841]));

var G__58842 = (i__32955__auto___58841 + (1));
i__32955__auto___58841 = G__58842;
continue;
} else {
}
break;
}

var G__58310 = args58306.length;
switch (G__58310) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58306.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq58307){
var G__58308 = cljs.core.first.call(null,seq58307);
var seq58307__$1 = cljs.core.next.call(null,seq58307);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__58308,seq58307__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args58311 = [];
var len__32954__auto___58844 = arguments.length;
var i__32955__auto___58845 = (0);
while(true){
if((i__32955__auto___58845 < len__32954__auto___58844)){
args58311.push((arguments[i__32955__auto___58845]));

var G__58846 = (i__32955__auto___58845 + (1));
i__32955__auto___58845 = G__58846;
continue;
} else {
}
break;
}

var G__58315 = args58311.length;
switch (G__58315) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58311.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq58312){
var G__58313 = cljs.core.first.call(null,seq58312);
var seq58312__$1 = cljs.core.next.call(null,seq58312);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__58313,seq58312__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args58316 = [];
var len__32954__auto___58848 = arguments.length;
var i__32955__auto___58849 = (0);
while(true){
if((i__32955__auto___58849 < len__32954__auto___58848)){
args58316.push((arguments[i__32955__auto___58849]));

var G__58850 = (i__32955__auto___58849 + (1));
i__32955__auto___58849 = G__58850;
continue;
} else {
}
break;
}

var G__58320 = args58316.length;
switch (G__58320) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58316.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq58317){
var G__58318 = cljs.core.first.call(null,seq58317);
var seq58317__$1 = cljs.core.next.call(null,seq58317);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__58318,seq58317__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args58321 = [];
var len__32954__auto___58852 = arguments.length;
var i__32955__auto___58853 = (0);
while(true){
if((i__32955__auto___58853 < len__32954__auto___58852)){
args58321.push((arguments[i__32955__auto___58853]));

var G__58854 = (i__32955__auto___58853 + (1));
i__32955__auto___58853 = G__58854;
continue;
} else {
}
break;
}

var G__58325 = args58321.length;
switch (G__58325) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58321.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq58322){
var G__58323 = cljs.core.first.call(null,seq58322);
var seq58322__$1 = cljs.core.next.call(null,seq58322);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__58323,seq58322__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args58326 = [];
var len__32954__auto___58856 = arguments.length;
var i__32955__auto___58857 = (0);
while(true){
if((i__32955__auto___58857 < len__32954__auto___58856)){
args58326.push((arguments[i__32955__auto___58857]));

var G__58858 = (i__32955__auto___58857 + (1));
i__32955__auto___58857 = G__58858;
continue;
} else {
}
break;
}

var G__58330 = args58326.length;
switch (G__58330) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58326.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq58327){
var G__58328 = cljs.core.first.call(null,seq58327);
var seq58327__$1 = cljs.core.next.call(null,seq58327);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__58328,seq58327__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args58331 = [];
var len__32954__auto___58860 = arguments.length;
var i__32955__auto___58861 = (0);
while(true){
if((i__32955__auto___58861 < len__32954__auto___58860)){
args58331.push((arguments[i__32955__auto___58861]));

var G__58862 = (i__32955__auto___58861 + (1));
i__32955__auto___58861 = G__58862;
continue;
} else {
}
break;
}

var G__58335 = args58331.length;
switch (G__58335) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58331.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq58332){
var G__58333 = cljs.core.first.call(null,seq58332);
var seq58332__$1 = cljs.core.next.call(null,seq58332);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__58333,seq58332__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args58336 = [];
var len__32954__auto___58864 = arguments.length;
var i__32955__auto___58865 = (0);
while(true){
if((i__32955__auto___58865 < len__32954__auto___58864)){
args58336.push((arguments[i__32955__auto___58865]));

var G__58866 = (i__32955__auto___58865 + (1));
i__32955__auto___58865 = G__58866;
continue;
} else {
}
break;
}

var G__58340 = args58336.length;
switch (G__58340) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58336.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq58337){
var G__58338 = cljs.core.first.call(null,seq58337);
var seq58337__$1 = cljs.core.next.call(null,seq58337);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__58338,seq58337__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args58341 = [];
var len__32954__auto___58868 = arguments.length;
var i__32955__auto___58869 = (0);
while(true){
if((i__32955__auto___58869 < len__32954__auto___58868)){
args58341.push((arguments[i__32955__auto___58869]));

var G__58870 = (i__32955__auto___58869 + (1));
i__32955__auto___58869 = G__58870;
continue;
} else {
}
break;
}

var G__58345 = args58341.length;
switch (G__58345) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58341.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq58342){
var G__58343 = cljs.core.first.call(null,seq58342);
var seq58342__$1 = cljs.core.next.call(null,seq58342);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__58343,seq58342__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args58346 = [];
var len__32954__auto___58872 = arguments.length;
var i__32955__auto___58873 = (0);
while(true){
if((i__32955__auto___58873 < len__32954__auto___58872)){
args58346.push((arguments[i__32955__auto___58873]));

var G__58874 = (i__32955__auto___58873 + (1));
i__32955__auto___58873 = G__58874;
continue;
} else {
}
break;
}

var G__58350 = args58346.length;
switch (G__58350) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58346.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq58347){
var G__58348 = cljs.core.first.call(null,seq58347);
var seq58347__$1 = cljs.core.next.call(null,seq58347);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__58348,seq58347__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args58351 = [];
var len__32954__auto___58876 = arguments.length;
var i__32955__auto___58877 = (0);
while(true){
if((i__32955__auto___58877 < len__32954__auto___58876)){
args58351.push((arguments[i__32955__auto___58877]));

var G__58878 = (i__32955__auto___58877 + (1));
i__32955__auto___58877 = G__58878;
continue;
} else {
}
break;
}

var G__58355 = args58351.length;
switch (G__58355) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58351.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq58352){
var G__58353 = cljs.core.first.call(null,seq58352);
var seq58352__$1 = cljs.core.next.call(null,seq58352);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__58353,seq58352__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args58356 = [];
var len__32954__auto___58880 = arguments.length;
var i__32955__auto___58881 = (0);
while(true){
if((i__32955__auto___58881 < len__32954__auto___58880)){
args58356.push((arguments[i__32955__auto___58881]));

var G__58882 = (i__32955__auto___58881 + (1));
i__32955__auto___58881 = G__58882;
continue;
} else {
}
break;
}

var G__58360 = args58356.length;
switch (G__58360) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58356.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq58357){
var G__58358 = cljs.core.first.call(null,seq58357);
var seq58357__$1 = cljs.core.next.call(null,seq58357);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__58358,seq58357__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args58361 = [];
var len__32954__auto___58884 = arguments.length;
var i__32955__auto___58885 = (0);
while(true){
if((i__32955__auto___58885 < len__32954__auto___58884)){
args58361.push((arguments[i__32955__auto___58885]));

var G__58886 = (i__32955__auto___58885 + (1));
i__32955__auto___58885 = G__58886;
continue;
} else {
}
break;
}

var G__58365 = args58361.length;
switch (G__58365) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58361.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq58362){
var G__58363 = cljs.core.first.call(null,seq58362);
var seq58362__$1 = cljs.core.next.call(null,seq58362);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__58363,seq58362__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args58366 = [];
var len__32954__auto___58888 = arguments.length;
var i__32955__auto___58889 = (0);
while(true){
if((i__32955__auto___58889 < len__32954__auto___58888)){
args58366.push((arguments[i__32955__auto___58889]));

var G__58890 = (i__32955__auto___58889 + (1));
i__32955__auto___58889 = G__58890;
continue;
} else {
}
break;
}

var G__58370 = args58366.length;
switch (G__58370) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58366.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq58367){
var G__58368 = cljs.core.first.call(null,seq58367);
var seq58367__$1 = cljs.core.next.call(null,seq58367);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__58368,seq58367__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args58371 = [];
var len__32954__auto___58892 = arguments.length;
var i__32955__auto___58893 = (0);
while(true){
if((i__32955__auto___58893 < len__32954__auto___58892)){
args58371.push((arguments[i__32955__auto___58893]));

var G__58894 = (i__32955__auto___58893 + (1));
i__32955__auto___58893 = G__58894;
continue;
} else {
}
break;
}

var G__58375 = args58371.length;
switch (G__58375) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58371.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq58372){
var G__58373 = cljs.core.first.call(null,seq58372);
var seq58372__$1 = cljs.core.next.call(null,seq58372);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__58373,seq58372__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args58376 = [];
var len__32954__auto___58896 = arguments.length;
var i__32955__auto___58897 = (0);
while(true){
if((i__32955__auto___58897 < len__32954__auto___58896)){
args58376.push((arguments[i__32955__auto___58897]));

var G__58898 = (i__32955__auto___58897 + (1));
i__32955__auto___58897 = G__58898;
continue;
} else {
}
break;
}

var G__58380 = args58376.length;
switch (G__58380) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58376.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq58377){
var G__58378 = cljs.core.first.call(null,seq58377);
var seq58377__$1 = cljs.core.next.call(null,seq58377);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__58378,seq58377__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args58381 = [];
var len__32954__auto___58900 = arguments.length;
var i__32955__auto___58901 = (0);
while(true){
if((i__32955__auto___58901 < len__32954__auto___58900)){
args58381.push((arguments[i__32955__auto___58901]));

var G__58902 = (i__32955__auto___58901 + (1));
i__32955__auto___58901 = G__58902;
continue;
} else {
}
break;
}

var G__58385 = args58381.length;
switch (G__58385) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58381.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq58382){
var G__58383 = cljs.core.first.call(null,seq58382);
var seq58382__$1 = cljs.core.next.call(null,seq58382);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__58383,seq58382__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args58386 = [];
var len__32954__auto___58904 = arguments.length;
var i__32955__auto___58905 = (0);
while(true){
if((i__32955__auto___58905 < len__32954__auto___58904)){
args58386.push((arguments[i__32955__auto___58905]));

var G__58906 = (i__32955__auto___58905 + (1));
i__32955__auto___58905 = G__58906;
continue;
} else {
}
break;
}

var G__58390 = args58386.length;
switch (G__58390) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58386.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq58387){
var G__58388 = cljs.core.first.call(null,seq58387);
var seq58387__$1 = cljs.core.next.call(null,seq58387);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__58388,seq58387__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args58391 = [];
var len__32954__auto___58908 = arguments.length;
var i__32955__auto___58909 = (0);
while(true){
if((i__32955__auto___58909 < len__32954__auto___58908)){
args58391.push((arguments[i__32955__auto___58909]));

var G__58910 = (i__32955__auto___58909 + (1));
i__32955__auto___58909 = G__58910;
continue;
} else {
}
break;
}

var G__58395 = args58391.length;
switch (G__58395) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58391.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq58392){
var G__58393 = cljs.core.first.call(null,seq58392);
var seq58392__$1 = cljs.core.next.call(null,seq58392);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__58393,seq58392__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args58396 = [];
var len__32954__auto___58912 = arguments.length;
var i__32955__auto___58913 = (0);
while(true){
if((i__32955__auto___58913 < len__32954__auto___58912)){
args58396.push((arguments[i__32955__auto___58913]));

var G__58914 = (i__32955__auto___58913 + (1));
i__32955__auto___58913 = G__58914;
continue;
} else {
}
break;
}

var G__58400 = args58396.length;
switch (G__58400) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58396.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq58397){
var G__58398 = cljs.core.first.call(null,seq58397);
var seq58397__$1 = cljs.core.next.call(null,seq58397);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__58398,seq58397__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args58401 = [];
var len__32954__auto___58916 = arguments.length;
var i__32955__auto___58917 = (0);
while(true){
if((i__32955__auto___58917 < len__32954__auto___58916)){
args58401.push((arguments[i__32955__auto___58917]));

var G__58918 = (i__32955__auto___58917 + (1));
i__32955__auto___58917 = G__58918;
continue;
} else {
}
break;
}

var G__58405 = args58401.length;
switch (G__58405) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58401.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq58402){
var G__58403 = cljs.core.first.call(null,seq58402);
var seq58402__$1 = cljs.core.next.call(null,seq58402);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__58403,seq58402__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args58406 = [];
var len__32954__auto___58920 = arguments.length;
var i__32955__auto___58921 = (0);
while(true){
if((i__32955__auto___58921 < len__32954__auto___58920)){
args58406.push((arguments[i__32955__auto___58921]));

var G__58922 = (i__32955__auto___58921 + (1));
i__32955__auto___58921 = G__58922;
continue;
} else {
}
break;
}

var G__58410 = args58406.length;
switch (G__58410) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58406.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq58407){
var G__58408 = cljs.core.first.call(null,seq58407);
var seq58407__$1 = cljs.core.next.call(null,seq58407);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__58408,seq58407__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args58411 = [];
var len__32954__auto___58924 = arguments.length;
var i__32955__auto___58925 = (0);
while(true){
if((i__32955__auto___58925 < len__32954__auto___58924)){
args58411.push((arguments[i__32955__auto___58925]));

var G__58926 = (i__32955__auto___58925 + (1));
i__32955__auto___58925 = G__58926;
continue;
} else {
}
break;
}

var G__58415 = args58411.length;
switch (G__58415) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args58411.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq58412){
var G__58413 = cljs.core.first.call(null,seq58412);
var seq58412__$1 = cljs.core.next.call(null,seq58412);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__58413,seq58412__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args57931 = [];
var len__32954__auto___58928 = arguments.length;
var i__32955__auto___58929 = (0);
while(true){
if((i__32955__auto___58929 < len__32954__auto___58928)){
args57931.push((arguments[i__32955__auto___58929]));

var G__58930 = (i__32955__auto___58929 + (1));
i__32955__auto___58929 = G__58930;
continue;
} else {
}
break;
}

var G__57935 = args57931.length;
switch (G__57935) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__32973__auto__ = (new cljs.core.IndexedSeq(args57931.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32973__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36322__auto__,children__36323__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__36322__auto__,children__36323__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq57932){
var G__57933 = cljs.core.first.call(null,seq57932);
var seq57932__$1 = cljs.core.next.call(null,seq57932);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__57933,seq57932__$1);
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

//# sourceMappingURL=dom.js.map?rel=1489123395354