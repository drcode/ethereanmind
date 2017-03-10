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
if(cljs.core.truth_((function (){var or__34227__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__34227__auto__){
return or__34227__auto__;
} else {
var G__49165 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__49165) {
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
var G__49168 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__49168) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49174){
var vec__49175 = p__49174;
var k = cljs.core.nth.call(null,vec__49175,(0),null);
var v = cljs.core.nth.call(null,vec__49175,(1),null);
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
return (function (){var or__34227__auto__ = React.isValidElement;
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
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
var vec__49181 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__49181,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__49181,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args49184 = [];
var len__35410__auto___49829 = arguments.length;
var i__35411__auto___49830 = (0);
while(true){
if((i__35411__auto___49830 < len__35410__auto___49829)){
args49184.push((arguments[i__35411__auto___49830]));

var G__49831 = (i__35411__auto___49830 + (1));
i__35411__auto___49830 = G__49831;
continue;
} else {
}
break;
}

var G__49188 = args49184.length;
switch (G__49188) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49184.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq49185){
var G__49186 = cljs.core.first.call(null,seq49185);
var seq49185__$1 = cljs.core.next.call(null,seq49185);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__49186,seq49185__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args49189 = [];
var len__35410__auto___49833 = arguments.length;
var i__35411__auto___49834 = (0);
while(true){
if((i__35411__auto___49834 < len__35410__auto___49833)){
args49189.push((arguments[i__35411__auto___49834]));

var G__49835 = (i__35411__auto___49834 + (1));
i__35411__auto___49834 = G__49835;
continue;
} else {
}
break;
}

var G__49193 = args49189.length;
switch (G__49193) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49189.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq49190){
var G__49191 = cljs.core.first.call(null,seq49190);
var seq49190__$1 = cljs.core.next.call(null,seq49190);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__49191,seq49190__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args49194 = [];
var len__35410__auto___49837 = arguments.length;
var i__35411__auto___49838 = (0);
while(true){
if((i__35411__auto___49838 < len__35410__auto___49837)){
args49194.push((arguments[i__35411__auto___49838]));

var G__49839 = (i__35411__auto___49838 + (1));
i__35411__auto___49838 = G__49839;
continue;
} else {
}
break;
}

var G__49198 = args49194.length;
switch (G__49198) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49194.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq49195){
var G__49196 = cljs.core.first.call(null,seq49195);
var seq49195__$1 = cljs.core.next.call(null,seq49195);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__49196,seq49195__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args49199 = [];
var len__35410__auto___49841 = arguments.length;
var i__35411__auto___49842 = (0);
while(true){
if((i__35411__auto___49842 < len__35410__auto___49841)){
args49199.push((arguments[i__35411__auto___49842]));

var G__49843 = (i__35411__auto___49842 + (1));
i__35411__auto___49842 = G__49843;
continue;
} else {
}
break;
}

var G__49203 = args49199.length;
switch (G__49203) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49199.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq49200){
var G__49201 = cljs.core.first.call(null,seq49200);
var seq49200__$1 = cljs.core.next.call(null,seq49200);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__49201,seq49200__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args49204 = [];
var len__35410__auto___49845 = arguments.length;
var i__35411__auto___49846 = (0);
while(true){
if((i__35411__auto___49846 < len__35410__auto___49845)){
args49204.push((arguments[i__35411__auto___49846]));

var G__49847 = (i__35411__auto___49846 + (1));
i__35411__auto___49846 = G__49847;
continue;
} else {
}
break;
}

var G__49208 = args49204.length;
switch (G__49208) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49204.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq49205){
var G__49206 = cljs.core.first.call(null,seq49205);
var seq49205__$1 = cljs.core.next.call(null,seq49205);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__49206,seq49205__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args49209 = [];
var len__35410__auto___49849 = arguments.length;
var i__35411__auto___49850 = (0);
while(true){
if((i__35411__auto___49850 < len__35410__auto___49849)){
args49209.push((arguments[i__35411__auto___49850]));

var G__49851 = (i__35411__auto___49850 + (1));
i__35411__auto___49850 = G__49851;
continue;
} else {
}
break;
}

var G__49213 = args49209.length;
switch (G__49213) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49209.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq49210){
var G__49211 = cljs.core.first.call(null,seq49210);
var seq49210__$1 = cljs.core.next.call(null,seq49210);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__49211,seq49210__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args49214 = [];
var len__35410__auto___49853 = arguments.length;
var i__35411__auto___49854 = (0);
while(true){
if((i__35411__auto___49854 < len__35410__auto___49853)){
args49214.push((arguments[i__35411__auto___49854]));

var G__49855 = (i__35411__auto___49854 + (1));
i__35411__auto___49854 = G__49855;
continue;
} else {
}
break;
}

var G__49218 = args49214.length;
switch (G__49218) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49214.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq49215){
var G__49216 = cljs.core.first.call(null,seq49215);
var seq49215__$1 = cljs.core.next.call(null,seq49215);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__49216,seq49215__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args49219 = [];
var len__35410__auto___49857 = arguments.length;
var i__35411__auto___49858 = (0);
while(true){
if((i__35411__auto___49858 < len__35410__auto___49857)){
args49219.push((arguments[i__35411__auto___49858]));

var G__49859 = (i__35411__auto___49858 + (1));
i__35411__auto___49858 = G__49859;
continue;
} else {
}
break;
}

var G__49223 = args49219.length;
switch (G__49223) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49219.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq49220){
var G__49221 = cljs.core.first.call(null,seq49220);
var seq49220__$1 = cljs.core.next.call(null,seq49220);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__49221,seq49220__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args49224 = [];
var len__35410__auto___49861 = arguments.length;
var i__35411__auto___49862 = (0);
while(true){
if((i__35411__auto___49862 < len__35410__auto___49861)){
args49224.push((arguments[i__35411__auto___49862]));

var G__49863 = (i__35411__auto___49862 + (1));
i__35411__auto___49862 = G__49863;
continue;
} else {
}
break;
}

var G__49228 = args49224.length;
switch (G__49228) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49224.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq49225){
var G__49226 = cljs.core.first.call(null,seq49225);
var seq49225__$1 = cljs.core.next.call(null,seq49225);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__49226,seq49225__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args49229 = [];
var len__35410__auto___49865 = arguments.length;
var i__35411__auto___49866 = (0);
while(true){
if((i__35411__auto___49866 < len__35410__auto___49865)){
args49229.push((arguments[i__35411__auto___49866]));

var G__49867 = (i__35411__auto___49866 + (1));
i__35411__auto___49866 = G__49867;
continue;
} else {
}
break;
}

var G__49233 = args49229.length;
switch (G__49233) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49229.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq49230){
var G__49231 = cljs.core.first.call(null,seq49230);
var seq49230__$1 = cljs.core.next.call(null,seq49230);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__49231,seq49230__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args49234 = [];
var len__35410__auto___49869 = arguments.length;
var i__35411__auto___49870 = (0);
while(true){
if((i__35411__auto___49870 < len__35410__auto___49869)){
args49234.push((arguments[i__35411__auto___49870]));

var G__49871 = (i__35411__auto___49870 + (1));
i__35411__auto___49870 = G__49871;
continue;
} else {
}
break;
}

var G__49238 = args49234.length;
switch (G__49238) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49234.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq49235){
var G__49236 = cljs.core.first.call(null,seq49235);
var seq49235__$1 = cljs.core.next.call(null,seq49235);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__49236,seq49235__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args49239 = [];
var len__35410__auto___49873 = arguments.length;
var i__35411__auto___49874 = (0);
while(true){
if((i__35411__auto___49874 < len__35410__auto___49873)){
args49239.push((arguments[i__35411__auto___49874]));

var G__49875 = (i__35411__auto___49874 + (1));
i__35411__auto___49874 = G__49875;
continue;
} else {
}
break;
}

var G__49243 = args49239.length;
switch (G__49243) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49239.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq49240){
var G__49241 = cljs.core.first.call(null,seq49240);
var seq49240__$1 = cljs.core.next.call(null,seq49240);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__49241,seq49240__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args49244 = [];
var len__35410__auto___49877 = arguments.length;
var i__35411__auto___49878 = (0);
while(true){
if((i__35411__auto___49878 < len__35410__auto___49877)){
args49244.push((arguments[i__35411__auto___49878]));

var G__49879 = (i__35411__auto___49878 + (1));
i__35411__auto___49878 = G__49879;
continue;
} else {
}
break;
}

var G__49248 = args49244.length;
switch (G__49248) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49244.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq49245){
var G__49246 = cljs.core.first.call(null,seq49245);
var seq49245__$1 = cljs.core.next.call(null,seq49245);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__49246,seq49245__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args49249 = [];
var len__35410__auto___49881 = arguments.length;
var i__35411__auto___49882 = (0);
while(true){
if((i__35411__auto___49882 < len__35410__auto___49881)){
args49249.push((arguments[i__35411__auto___49882]));

var G__49883 = (i__35411__auto___49882 + (1));
i__35411__auto___49882 = G__49883;
continue;
} else {
}
break;
}

var G__49253 = args49249.length;
switch (G__49253) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49249.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq49250){
var G__49251 = cljs.core.first.call(null,seq49250);
var seq49250__$1 = cljs.core.next.call(null,seq49250);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__49251,seq49250__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args49254 = [];
var len__35410__auto___49885 = arguments.length;
var i__35411__auto___49886 = (0);
while(true){
if((i__35411__auto___49886 < len__35410__auto___49885)){
args49254.push((arguments[i__35411__auto___49886]));

var G__49887 = (i__35411__auto___49886 + (1));
i__35411__auto___49886 = G__49887;
continue;
} else {
}
break;
}

var G__49258 = args49254.length;
switch (G__49258) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49254.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq49255){
var G__49256 = cljs.core.first.call(null,seq49255);
var seq49255__$1 = cljs.core.next.call(null,seq49255);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__49256,seq49255__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args49259 = [];
var len__35410__auto___49889 = arguments.length;
var i__35411__auto___49890 = (0);
while(true){
if((i__35411__auto___49890 < len__35410__auto___49889)){
args49259.push((arguments[i__35411__auto___49890]));

var G__49891 = (i__35411__auto___49890 + (1));
i__35411__auto___49890 = G__49891;
continue;
} else {
}
break;
}

var G__49263 = args49259.length;
switch (G__49263) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49259.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq49260){
var G__49261 = cljs.core.first.call(null,seq49260);
var seq49260__$1 = cljs.core.next.call(null,seq49260);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__49261,seq49260__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args49264 = [];
var len__35410__auto___49893 = arguments.length;
var i__35411__auto___49894 = (0);
while(true){
if((i__35411__auto___49894 < len__35410__auto___49893)){
args49264.push((arguments[i__35411__auto___49894]));

var G__49895 = (i__35411__auto___49894 + (1));
i__35411__auto___49894 = G__49895;
continue;
} else {
}
break;
}

var G__49268 = args49264.length;
switch (G__49268) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49264.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq49265){
var G__49266 = cljs.core.first.call(null,seq49265);
var seq49265__$1 = cljs.core.next.call(null,seq49265);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__49266,seq49265__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args49269 = [];
var len__35410__auto___49897 = arguments.length;
var i__35411__auto___49898 = (0);
while(true){
if((i__35411__auto___49898 < len__35410__auto___49897)){
args49269.push((arguments[i__35411__auto___49898]));

var G__49899 = (i__35411__auto___49898 + (1));
i__35411__auto___49898 = G__49899;
continue;
} else {
}
break;
}

var G__49273 = args49269.length;
switch (G__49273) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49269.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq49270){
var G__49271 = cljs.core.first.call(null,seq49270);
var seq49270__$1 = cljs.core.next.call(null,seq49270);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__49271,seq49270__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args49274 = [];
var len__35410__auto___49901 = arguments.length;
var i__35411__auto___49902 = (0);
while(true){
if((i__35411__auto___49902 < len__35410__auto___49901)){
args49274.push((arguments[i__35411__auto___49902]));

var G__49903 = (i__35411__auto___49902 + (1));
i__35411__auto___49902 = G__49903;
continue;
} else {
}
break;
}

var G__49278 = args49274.length;
switch (G__49278) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49274.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq49275){
var G__49276 = cljs.core.first.call(null,seq49275);
var seq49275__$1 = cljs.core.next.call(null,seq49275);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__49276,seq49275__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args49279 = [];
var len__35410__auto___49905 = arguments.length;
var i__35411__auto___49906 = (0);
while(true){
if((i__35411__auto___49906 < len__35410__auto___49905)){
args49279.push((arguments[i__35411__auto___49906]));

var G__49907 = (i__35411__auto___49906 + (1));
i__35411__auto___49906 = G__49907;
continue;
} else {
}
break;
}

var G__49283 = args49279.length;
switch (G__49283) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49279.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq49280){
var G__49281 = cljs.core.first.call(null,seq49280);
var seq49280__$1 = cljs.core.next.call(null,seq49280);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__49281,seq49280__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args49284 = [];
var len__35410__auto___49909 = arguments.length;
var i__35411__auto___49910 = (0);
while(true){
if((i__35411__auto___49910 < len__35410__auto___49909)){
args49284.push((arguments[i__35411__auto___49910]));

var G__49911 = (i__35411__auto___49910 + (1));
i__35411__auto___49910 = G__49911;
continue;
} else {
}
break;
}

var G__49288 = args49284.length;
switch (G__49288) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49284.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq49285){
var G__49286 = cljs.core.first.call(null,seq49285);
var seq49285__$1 = cljs.core.next.call(null,seq49285);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__49286,seq49285__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args49289 = [];
var len__35410__auto___49913 = arguments.length;
var i__35411__auto___49914 = (0);
while(true){
if((i__35411__auto___49914 < len__35410__auto___49913)){
args49289.push((arguments[i__35411__auto___49914]));

var G__49915 = (i__35411__auto___49914 + (1));
i__35411__auto___49914 = G__49915;
continue;
} else {
}
break;
}

var G__49293 = args49289.length;
switch (G__49293) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49289.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq49290){
var G__49291 = cljs.core.first.call(null,seq49290);
var seq49290__$1 = cljs.core.next.call(null,seq49290);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__49291,seq49290__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args49294 = [];
var len__35410__auto___49917 = arguments.length;
var i__35411__auto___49918 = (0);
while(true){
if((i__35411__auto___49918 < len__35410__auto___49917)){
args49294.push((arguments[i__35411__auto___49918]));

var G__49919 = (i__35411__auto___49918 + (1));
i__35411__auto___49918 = G__49919;
continue;
} else {
}
break;
}

var G__49298 = args49294.length;
switch (G__49298) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49294.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq49295){
var G__49296 = cljs.core.first.call(null,seq49295);
var seq49295__$1 = cljs.core.next.call(null,seq49295);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__49296,seq49295__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args49299 = [];
var len__35410__auto___49921 = arguments.length;
var i__35411__auto___49922 = (0);
while(true){
if((i__35411__auto___49922 < len__35410__auto___49921)){
args49299.push((arguments[i__35411__auto___49922]));

var G__49923 = (i__35411__auto___49922 + (1));
i__35411__auto___49922 = G__49923;
continue;
} else {
}
break;
}

var G__49303 = args49299.length;
switch (G__49303) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49299.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq49300){
var G__49301 = cljs.core.first.call(null,seq49300);
var seq49300__$1 = cljs.core.next.call(null,seq49300);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__49301,seq49300__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args49304 = [];
var len__35410__auto___49925 = arguments.length;
var i__35411__auto___49926 = (0);
while(true){
if((i__35411__auto___49926 < len__35410__auto___49925)){
args49304.push((arguments[i__35411__auto___49926]));

var G__49927 = (i__35411__auto___49926 + (1));
i__35411__auto___49926 = G__49927;
continue;
} else {
}
break;
}

var G__49308 = args49304.length;
switch (G__49308) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49304.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq49305){
var G__49306 = cljs.core.first.call(null,seq49305);
var seq49305__$1 = cljs.core.next.call(null,seq49305);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__49306,seq49305__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args49309 = [];
var len__35410__auto___49929 = arguments.length;
var i__35411__auto___49930 = (0);
while(true){
if((i__35411__auto___49930 < len__35410__auto___49929)){
args49309.push((arguments[i__35411__auto___49930]));

var G__49931 = (i__35411__auto___49930 + (1));
i__35411__auto___49930 = G__49931;
continue;
} else {
}
break;
}

var G__49313 = args49309.length;
switch (G__49313) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49309.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq49310){
var G__49311 = cljs.core.first.call(null,seq49310);
var seq49310__$1 = cljs.core.next.call(null,seq49310);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__49311,seq49310__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args49314 = [];
var len__35410__auto___49933 = arguments.length;
var i__35411__auto___49934 = (0);
while(true){
if((i__35411__auto___49934 < len__35410__auto___49933)){
args49314.push((arguments[i__35411__auto___49934]));

var G__49935 = (i__35411__auto___49934 + (1));
i__35411__auto___49934 = G__49935;
continue;
} else {
}
break;
}

var G__49318 = args49314.length;
switch (G__49318) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49314.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq49315){
var G__49316 = cljs.core.first.call(null,seq49315);
var seq49315__$1 = cljs.core.next.call(null,seq49315);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__49316,seq49315__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args49319 = [];
var len__35410__auto___49937 = arguments.length;
var i__35411__auto___49938 = (0);
while(true){
if((i__35411__auto___49938 < len__35410__auto___49937)){
args49319.push((arguments[i__35411__auto___49938]));

var G__49939 = (i__35411__auto___49938 + (1));
i__35411__auto___49938 = G__49939;
continue;
} else {
}
break;
}

var G__49323 = args49319.length;
switch (G__49323) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49319.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq49320){
var G__49321 = cljs.core.first.call(null,seq49320);
var seq49320__$1 = cljs.core.next.call(null,seq49320);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__49321,seq49320__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args49324 = [];
var len__35410__auto___49941 = arguments.length;
var i__35411__auto___49942 = (0);
while(true){
if((i__35411__auto___49942 < len__35410__auto___49941)){
args49324.push((arguments[i__35411__auto___49942]));

var G__49943 = (i__35411__auto___49942 + (1));
i__35411__auto___49942 = G__49943;
continue;
} else {
}
break;
}

var G__49328 = args49324.length;
switch (G__49328) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49324.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq49325){
var G__49326 = cljs.core.first.call(null,seq49325);
var seq49325__$1 = cljs.core.next.call(null,seq49325);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__49326,seq49325__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args49329 = [];
var len__35410__auto___49945 = arguments.length;
var i__35411__auto___49946 = (0);
while(true){
if((i__35411__auto___49946 < len__35410__auto___49945)){
args49329.push((arguments[i__35411__auto___49946]));

var G__49947 = (i__35411__auto___49946 + (1));
i__35411__auto___49946 = G__49947;
continue;
} else {
}
break;
}

var G__49333 = args49329.length;
switch (G__49333) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49329.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq49330){
var G__49331 = cljs.core.first.call(null,seq49330);
var seq49330__$1 = cljs.core.next.call(null,seq49330);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__49331,seq49330__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args49334 = [];
var len__35410__auto___49949 = arguments.length;
var i__35411__auto___49950 = (0);
while(true){
if((i__35411__auto___49950 < len__35410__auto___49949)){
args49334.push((arguments[i__35411__auto___49950]));

var G__49951 = (i__35411__auto___49950 + (1));
i__35411__auto___49950 = G__49951;
continue;
} else {
}
break;
}

var G__49338 = args49334.length;
switch (G__49338) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49334.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq49335){
var G__49336 = cljs.core.first.call(null,seq49335);
var seq49335__$1 = cljs.core.next.call(null,seq49335);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__49336,seq49335__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args49339 = [];
var len__35410__auto___49953 = arguments.length;
var i__35411__auto___49954 = (0);
while(true){
if((i__35411__auto___49954 < len__35410__auto___49953)){
args49339.push((arguments[i__35411__auto___49954]));

var G__49955 = (i__35411__auto___49954 + (1));
i__35411__auto___49954 = G__49955;
continue;
} else {
}
break;
}

var G__49343 = args49339.length;
switch (G__49343) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49339.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq49340){
var G__49341 = cljs.core.first.call(null,seq49340);
var seq49340__$1 = cljs.core.next.call(null,seq49340);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__49341,seq49340__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args49349 = [];
var len__35410__auto___49957 = arguments.length;
var i__35411__auto___49958 = (0);
while(true){
if((i__35411__auto___49958 < len__35410__auto___49957)){
args49349.push((arguments[i__35411__auto___49958]));

var G__49959 = (i__35411__auto___49958 + (1));
i__35411__auto___49958 = G__49959;
continue;
} else {
}
break;
}

var G__49353 = args49349.length;
switch (G__49353) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49349.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq49350){
var G__49351 = cljs.core.first.call(null,seq49350);
var seq49350__$1 = cljs.core.next.call(null,seq49350);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__49351,seq49350__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args49354 = [];
var len__35410__auto___49961 = arguments.length;
var i__35411__auto___49962 = (0);
while(true){
if((i__35411__auto___49962 < len__35410__auto___49961)){
args49354.push((arguments[i__35411__auto___49962]));

var G__49963 = (i__35411__auto___49962 + (1));
i__35411__auto___49962 = G__49963;
continue;
} else {
}
break;
}

var G__49358 = args49354.length;
switch (G__49358) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49354.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq49355){
var G__49356 = cljs.core.first.call(null,seq49355);
var seq49355__$1 = cljs.core.next.call(null,seq49355);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__49356,seq49355__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args49359 = [];
var len__35410__auto___49965 = arguments.length;
var i__35411__auto___49966 = (0);
while(true){
if((i__35411__auto___49966 < len__35410__auto___49965)){
args49359.push((arguments[i__35411__auto___49966]));

var G__49967 = (i__35411__auto___49966 + (1));
i__35411__auto___49966 = G__49967;
continue;
} else {
}
break;
}

var G__49363 = args49359.length;
switch (G__49363) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49359.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq49360){
var G__49361 = cljs.core.first.call(null,seq49360);
var seq49360__$1 = cljs.core.next.call(null,seq49360);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__49361,seq49360__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args49364 = [];
var len__35410__auto___49969 = arguments.length;
var i__35411__auto___49970 = (0);
while(true){
if((i__35411__auto___49970 < len__35410__auto___49969)){
args49364.push((arguments[i__35411__auto___49970]));

var G__49971 = (i__35411__auto___49970 + (1));
i__35411__auto___49970 = G__49971;
continue;
} else {
}
break;
}

var G__49368 = args49364.length;
switch (G__49368) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49364.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq49365){
var G__49366 = cljs.core.first.call(null,seq49365);
var seq49365__$1 = cljs.core.next.call(null,seq49365);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__49366,seq49365__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args49369 = [];
var len__35410__auto___49973 = arguments.length;
var i__35411__auto___49974 = (0);
while(true){
if((i__35411__auto___49974 < len__35410__auto___49973)){
args49369.push((arguments[i__35411__auto___49974]));

var G__49975 = (i__35411__auto___49974 + (1));
i__35411__auto___49974 = G__49975;
continue;
} else {
}
break;
}

var G__49373 = args49369.length;
switch (G__49373) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49369.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq49370){
var G__49371 = cljs.core.first.call(null,seq49370);
var seq49370__$1 = cljs.core.next.call(null,seq49370);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__49371,seq49370__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args49374 = [];
var len__35410__auto___49977 = arguments.length;
var i__35411__auto___49978 = (0);
while(true){
if((i__35411__auto___49978 < len__35410__auto___49977)){
args49374.push((arguments[i__35411__auto___49978]));

var G__49979 = (i__35411__auto___49978 + (1));
i__35411__auto___49978 = G__49979;
continue;
} else {
}
break;
}

var G__49378 = args49374.length;
switch (G__49378) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49374.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq49375){
var G__49376 = cljs.core.first.call(null,seq49375);
var seq49375__$1 = cljs.core.next.call(null,seq49375);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__49376,seq49375__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args49379 = [];
var len__35410__auto___49981 = arguments.length;
var i__35411__auto___49982 = (0);
while(true){
if((i__35411__auto___49982 < len__35410__auto___49981)){
args49379.push((arguments[i__35411__auto___49982]));

var G__49983 = (i__35411__auto___49982 + (1));
i__35411__auto___49982 = G__49983;
continue;
} else {
}
break;
}

var G__49383 = args49379.length;
switch (G__49383) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49379.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq49380){
var G__49381 = cljs.core.first.call(null,seq49380);
var seq49380__$1 = cljs.core.next.call(null,seq49380);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__49381,seq49380__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args49384 = [];
var len__35410__auto___49985 = arguments.length;
var i__35411__auto___49986 = (0);
while(true){
if((i__35411__auto___49986 < len__35410__auto___49985)){
args49384.push((arguments[i__35411__auto___49986]));

var G__49987 = (i__35411__auto___49986 + (1));
i__35411__auto___49986 = G__49987;
continue;
} else {
}
break;
}

var G__49388 = args49384.length;
switch (G__49388) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49384.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq49385){
var G__49386 = cljs.core.first.call(null,seq49385);
var seq49385__$1 = cljs.core.next.call(null,seq49385);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__49386,seq49385__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args49389 = [];
var len__35410__auto___49989 = arguments.length;
var i__35411__auto___49990 = (0);
while(true){
if((i__35411__auto___49990 < len__35410__auto___49989)){
args49389.push((arguments[i__35411__auto___49990]));

var G__49991 = (i__35411__auto___49990 + (1));
i__35411__auto___49990 = G__49991;
continue;
} else {
}
break;
}

var G__49393 = args49389.length;
switch (G__49393) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49389.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq49390){
var G__49391 = cljs.core.first.call(null,seq49390);
var seq49390__$1 = cljs.core.next.call(null,seq49390);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__49391,seq49390__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args49394 = [];
var len__35410__auto___49993 = arguments.length;
var i__35411__auto___49994 = (0);
while(true){
if((i__35411__auto___49994 < len__35410__auto___49993)){
args49394.push((arguments[i__35411__auto___49994]));

var G__49995 = (i__35411__auto___49994 + (1));
i__35411__auto___49994 = G__49995;
continue;
} else {
}
break;
}

var G__49398 = args49394.length;
switch (G__49398) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49394.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq49395){
var G__49396 = cljs.core.first.call(null,seq49395);
var seq49395__$1 = cljs.core.next.call(null,seq49395);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__49396,seq49395__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args49399 = [];
var len__35410__auto___49997 = arguments.length;
var i__35411__auto___49998 = (0);
while(true){
if((i__35411__auto___49998 < len__35410__auto___49997)){
args49399.push((arguments[i__35411__auto___49998]));

var G__49999 = (i__35411__auto___49998 + (1));
i__35411__auto___49998 = G__49999;
continue;
} else {
}
break;
}

var G__49403 = args49399.length;
switch (G__49403) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49399.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq49400){
var G__49401 = cljs.core.first.call(null,seq49400);
var seq49400__$1 = cljs.core.next.call(null,seq49400);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__49401,seq49400__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args49404 = [];
var len__35410__auto___50001 = arguments.length;
var i__35411__auto___50002 = (0);
while(true){
if((i__35411__auto___50002 < len__35410__auto___50001)){
args49404.push((arguments[i__35411__auto___50002]));

var G__50003 = (i__35411__auto___50002 + (1));
i__35411__auto___50002 = G__50003;
continue;
} else {
}
break;
}

var G__49408 = args49404.length;
switch (G__49408) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49404.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq49405){
var G__49406 = cljs.core.first.call(null,seq49405);
var seq49405__$1 = cljs.core.next.call(null,seq49405);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__49406,seq49405__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args49409 = [];
var len__35410__auto___50005 = arguments.length;
var i__35411__auto___50006 = (0);
while(true){
if((i__35411__auto___50006 < len__35410__auto___50005)){
args49409.push((arguments[i__35411__auto___50006]));

var G__50007 = (i__35411__auto___50006 + (1));
i__35411__auto___50006 = G__50007;
continue;
} else {
}
break;
}

var G__49413 = args49409.length;
switch (G__49413) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49409.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq49410){
var G__49411 = cljs.core.first.call(null,seq49410);
var seq49410__$1 = cljs.core.next.call(null,seq49410);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__49411,seq49410__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args49414 = [];
var len__35410__auto___50009 = arguments.length;
var i__35411__auto___50010 = (0);
while(true){
if((i__35411__auto___50010 < len__35410__auto___50009)){
args49414.push((arguments[i__35411__auto___50010]));

var G__50011 = (i__35411__auto___50010 + (1));
i__35411__auto___50010 = G__50011;
continue;
} else {
}
break;
}

var G__49418 = args49414.length;
switch (G__49418) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49414.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq49415){
var G__49416 = cljs.core.first.call(null,seq49415);
var seq49415__$1 = cljs.core.next.call(null,seq49415);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__49416,seq49415__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args49419 = [];
var len__35410__auto___50013 = arguments.length;
var i__35411__auto___50014 = (0);
while(true){
if((i__35411__auto___50014 < len__35410__auto___50013)){
args49419.push((arguments[i__35411__auto___50014]));

var G__50015 = (i__35411__auto___50014 + (1));
i__35411__auto___50014 = G__50015;
continue;
} else {
}
break;
}

var G__49423 = args49419.length;
switch (G__49423) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49419.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq49420){
var G__49421 = cljs.core.first.call(null,seq49420);
var seq49420__$1 = cljs.core.next.call(null,seq49420);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__49421,seq49420__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args49424 = [];
var len__35410__auto___50017 = arguments.length;
var i__35411__auto___50018 = (0);
while(true){
if((i__35411__auto___50018 < len__35410__auto___50017)){
args49424.push((arguments[i__35411__auto___50018]));

var G__50019 = (i__35411__auto___50018 + (1));
i__35411__auto___50018 = G__50019;
continue;
} else {
}
break;
}

var G__49428 = args49424.length;
switch (G__49428) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49424.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq49425){
var G__49426 = cljs.core.first.call(null,seq49425);
var seq49425__$1 = cljs.core.next.call(null,seq49425);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__49426,seq49425__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args49429 = [];
var len__35410__auto___50021 = arguments.length;
var i__35411__auto___50022 = (0);
while(true){
if((i__35411__auto___50022 < len__35410__auto___50021)){
args49429.push((arguments[i__35411__auto___50022]));

var G__50023 = (i__35411__auto___50022 + (1));
i__35411__auto___50022 = G__50023;
continue;
} else {
}
break;
}

var G__49433 = args49429.length;
switch (G__49433) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49429.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq49430){
var G__49431 = cljs.core.first.call(null,seq49430);
var seq49430__$1 = cljs.core.next.call(null,seq49430);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__49431,seq49430__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args49434 = [];
var len__35410__auto___50025 = arguments.length;
var i__35411__auto___50026 = (0);
while(true){
if((i__35411__auto___50026 < len__35410__auto___50025)){
args49434.push((arguments[i__35411__auto___50026]));

var G__50027 = (i__35411__auto___50026 + (1));
i__35411__auto___50026 = G__50027;
continue;
} else {
}
break;
}

var G__49438 = args49434.length;
switch (G__49438) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49434.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq49435){
var G__49436 = cljs.core.first.call(null,seq49435);
var seq49435__$1 = cljs.core.next.call(null,seq49435);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__49436,seq49435__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args49439 = [];
var len__35410__auto___50029 = arguments.length;
var i__35411__auto___50030 = (0);
while(true){
if((i__35411__auto___50030 < len__35410__auto___50029)){
args49439.push((arguments[i__35411__auto___50030]));

var G__50031 = (i__35411__auto___50030 + (1));
i__35411__auto___50030 = G__50031;
continue;
} else {
}
break;
}

var G__49443 = args49439.length;
switch (G__49443) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49439.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq49440){
var G__49441 = cljs.core.first.call(null,seq49440);
var seq49440__$1 = cljs.core.next.call(null,seq49440);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__49441,seq49440__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args49444 = [];
var len__35410__auto___50033 = arguments.length;
var i__35411__auto___50034 = (0);
while(true){
if((i__35411__auto___50034 < len__35410__auto___50033)){
args49444.push((arguments[i__35411__auto___50034]));

var G__50035 = (i__35411__auto___50034 + (1));
i__35411__auto___50034 = G__50035;
continue;
} else {
}
break;
}

var G__49448 = args49444.length;
switch (G__49448) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49444.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq49445){
var G__49446 = cljs.core.first.call(null,seq49445);
var seq49445__$1 = cljs.core.next.call(null,seq49445);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__49446,seq49445__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args49449 = [];
var len__35410__auto___50037 = arguments.length;
var i__35411__auto___50038 = (0);
while(true){
if((i__35411__auto___50038 < len__35410__auto___50037)){
args49449.push((arguments[i__35411__auto___50038]));

var G__50039 = (i__35411__auto___50038 + (1));
i__35411__auto___50038 = G__50039;
continue;
} else {
}
break;
}

var G__49453 = args49449.length;
switch (G__49453) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49449.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq49450){
var G__49451 = cljs.core.first.call(null,seq49450);
var seq49450__$1 = cljs.core.next.call(null,seq49450);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__49451,seq49450__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args49454 = [];
var len__35410__auto___50041 = arguments.length;
var i__35411__auto___50042 = (0);
while(true){
if((i__35411__auto___50042 < len__35410__auto___50041)){
args49454.push((arguments[i__35411__auto___50042]));

var G__50043 = (i__35411__auto___50042 + (1));
i__35411__auto___50042 = G__50043;
continue;
} else {
}
break;
}

var G__49458 = args49454.length;
switch (G__49458) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49454.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq49455){
var G__49456 = cljs.core.first.call(null,seq49455);
var seq49455__$1 = cljs.core.next.call(null,seq49455);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__49456,seq49455__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args49459 = [];
var len__35410__auto___50045 = arguments.length;
var i__35411__auto___50046 = (0);
while(true){
if((i__35411__auto___50046 < len__35410__auto___50045)){
args49459.push((arguments[i__35411__auto___50046]));

var G__50047 = (i__35411__auto___50046 + (1));
i__35411__auto___50046 = G__50047;
continue;
} else {
}
break;
}

var G__49463 = args49459.length;
switch (G__49463) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49459.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq49460){
var G__49461 = cljs.core.first.call(null,seq49460);
var seq49460__$1 = cljs.core.next.call(null,seq49460);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__49461,seq49460__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args49464 = [];
var len__35410__auto___50049 = arguments.length;
var i__35411__auto___50050 = (0);
while(true){
if((i__35411__auto___50050 < len__35410__auto___50049)){
args49464.push((arguments[i__35411__auto___50050]));

var G__50051 = (i__35411__auto___50050 + (1));
i__35411__auto___50050 = G__50051;
continue;
} else {
}
break;
}

var G__49468 = args49464.length;
switch (G__49468) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49464.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq49465){
var G__49466 = cljs.core.first.call(null,seq49465);
var seq49465__$1 = cljs.core.next.call(null,seq49465);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__49466,seq49465__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args49469 = [];
var len__35410__auto___50053 = arguments.length;
var i__35411__auto___50054 = (0);
while(true){
if((i__35411__auto___50054 < len__35410__auto___50053)){
args49469.push((arguments[i__35411__auto___50054]));

var G__50055 = (i__35411__auto___50054 + (1));
i__35411__auto___50054 = G__50055;
continue;
} else {
}
break;
}

var G__49473 = args49469.length;
switch (G__49473) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49469.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq49470){
var G__49471 = cljs.core.first.call(null,seq49470);
var seq49470__$1 = cljs.core.next.call(null,seq49470);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__49471,seq49470__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args49474 = [];
var len__35410__auto___50057 = arguments.length;
var i__35411__auto___50058 = (0);
while(true){
if((i__35411__auto___50058 < len__35410__auto___50057)){
args49474.push((arguments[i__35411__auto___50058]));

var G__50059 = (i__35411__auto___50058 + (1));
i__35411__auto___50058 = G__50059;
continue;
} else {
}
break;
}

var G__49478 = args49474.length;
switch (G__49478) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49474.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq49475){
var G__49476 = cljs.core.first.call(null,seq49475);
var seq49475__$1 = cljs.core.next.call(null,seq49475);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__49476,seq49475__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args49479 = [];
var len__35410__auto___50061 = arguments.length;
var i__35411__auto___50062 = (0);
while(true){
if((i__35411__auto___50062 < len__35410__auto___50061)){
args49479.push((arguments[i__35411__auto___50062]));

var G__50063 = (i__35411__auto___50062 + (1));
i__35411__auto___50062 = G__50063;
continue;
} else {
}
break;
}

var G__49483 = args49479.length;
switch (G__49483) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49479.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq49480){
var G__49481 = cljs.core.first.call(null,seq49480);
var seq49480__$1 = cljs.core.next.call(null,seq49480);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__49481,seq49480__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args49484 = [];
var len__35410__auto___50065 = arguments.length;
var i__35411__auto___50066 = (0);
while(true){
if((i__35411__auto___50066 < len__35410__auto___50065)){
args49484.push((arguments[i__35411__auto___50066]));

var G__50067 = (i__35411__auto___50066 + (1));
i__35411__auto___50066 = G__50067;
continue;
} else {
}
break;
}

var G__49488 = args49484.length;
switch (G__49488) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49484.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq49485){
var G__49486 = cljs.core.first.call(null,seq49485);
var seq49485__$1 = cljs.core.next.call(null,seq49485);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__49486,seq49485__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args49489 = [];
var len__35410__auto___50069 = arguments.length;
var i__35411__auto___50070 = (0);
while(true){
if((i__35411__auto___50070 < len__35410__auto___50069)){
args49489.push((arguments[i__35411__auto___50070]));

var G__50071 = (i__35411__auto___50070 + (1));
i__35411__auto___50070 = G__50071;
continue;
} else {
}
break;
}

var G__49493 = args49489.length;
switch (G__49493) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49489.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq49490){
var G__49491 = cljs.core.first.call(null,seq49490);
var seq49490__$1 = cljs.core.next.call(null,seq49490);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__49491,seq49490__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args49494 = [];
var len__35410__auto___50073 = arguments.length;
var i__35411__auto___50074 = (0);
while(true){
if((i__35411__auto___50074 < len__35410__auto___50073)){
args49494.push((arguments[i__35411__auto___50074]));

var G__50075 = (i__35411__auto___50074 + (1));
i__35411__auto___50074 = G__50075;
continue;
} else {
}
break;
}

var G__49498 = args49494.length;
switch (G__49498) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49494.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq49495){
var G__49496 = cljs.core.first.call(null,seq49495);
var seq49495__$1 = cljs.core.next.call(null,seq49495);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__49496,seq49495__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args49499 = [];
var len__35410__auto___50077 = arguments.length;
var i__35411__auto___50078 = (0);
while(true){
if((i__35411__auto___50078 < len__35410__auto___50077)){
args49499.push((arguments[i__35411__auto___50078]));

var G__50079 = (i__35411__auto___50078 + (1));
i__35411__auto___50078 = G__50079;
continue;
} else {
}
break;
}

var G__49503 = args49499.length;
switch (G__49503) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49499.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq49500){
var G__49501 = cljs.core.first.call(null,seq49500);
var seq49500__$1 = cljs.core.next.call(null,seq49500);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__49501,seq49500__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args49504 = [];
var len__35410__auto___50081 = arguments.length;
var i__35411__auto___50082 = (0);
while(true){
if((i__35411__auto___50082 < len__35410__auto___50081)){
args49504.push((arguments[i__35411__auto___50082]));

var G__50083 = (i__35411__auto___50082 + (1));
i__35411__auto___50082 = G__50083;
continue;
} else {
}
break;
}

var G__49508 = args49504.length;
switch (G__49508) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49504.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq49505){
var G__49506 = cljs.core.first.call(null,seq49505);
var seq49505__$1 = cljs.core.next.call(null,seq49505);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__49506,seq49505__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args49509 = [];
var len__35410__auto___50085 = arguments.length;
var i__35411__auto___50086 = (0);
while(true){
if((i__35411__auto___50086 < len__35410__auto___50085)){
args49509.push((arguments[i__35411__auto___50086]));

var G__50087 = (i__35411__auto___50086 + (1));
i__35411__auto___50086 = G__50087;
continue;
} else {
}
break;
}

var G__49513 = args49509.length;
switch (G__49513) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49509.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq49510){
var G__49511 = cljs.core.first.call(null,seq49510);
var seq49510__$1 = cljs.core.next.call(null,seq49510);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__49511,seq49510__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args49514 = [];
var len__35410__auto___50089 = arguments.length;
var i__35411__auto___50090 = (0);
while(true){
if((i__35411__auto___50090 < len__35410__auto___50089)){
args49514.push((arguments[i__35411__auto___50090]));

var G__50091 = (i__35411__auto___50090 + (1));
i__35411__auto___50090 = G__50091;
continue;
} else {
}
break;
}

var G__49518 = args49514.length;
switch (G__49518) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49514.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq49515){
var G__49516 = cljs.core.first.call(null,seq49515);
var seq49515__$1 = cljs.core.next.call(null,seq49515);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__49516,seq49515__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args49519 = [];
var len__35410__auto___50093 = arguments.length;
var i__35411__auto___50094 = (0);
while(true){
if((i__35411__auto___50094 < len__35410__auto___50093)){
args49519.push((arguments[i__35411__auto___50094]));

var G__50095 = (i__35411__auto___50094 + (1));
i__35411__auto___50094 = G__50095;
continue;
} else {
}
break;
}

var G__49523 = args49519.length;
switch (G__49523) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49519.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq49520){
var G__49521 = cljs.core.first.call(null,seq49520);
var seq49520__$1 = cljs.core.next.call(null,seq49520);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__49521,seq49520__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args49524 = [];
var len__35410__auto___50097 = arguments.length;
var i__35411__auto___50098 = (0);
while(true){
if((i__35411__auto___50098 < len__35410__auto___50097)){
args49524.push((arguments[i__35411__auto___50098]));

var G__50099 = (i__35411__auto___50098 + (1));
i__35411__auto___50098 = G__50099;
continue;
} else {
}
break;
}

var G__49528 = args49524.length;
switch (G__49528) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49524.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq49525){
var G__49526 = cljs.core.first.call(null,seq49525);
var seq49525__$1 = cljs.core.next.call(null,seq49525);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__49526,seq49525__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args49529 = [];
var len__35410__auto___50101 = arguments.length;
var i__35411__auto___50102 = (0);
while(true){
if((i__35411__auto___50102 < len__35410__auto___50101)){
args49529.push((arguments[i__35411__auto___50102]));

var G__50103 = (i__35411__auto___50102 + (1));
i__35411__auto___50102 = G__50103;
continue;
} else {
}
break;
}

var G__49533 = args49529.length;
switch (G__49533) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49529.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq49530){
var G__49531 = cljs.core.first.call(null,seq49530);
var seq49530__$1 = cljs.core.next.call(null,seq49530);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__49531,seq49530__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args49534 = [];
var len__35410__auto___50105 = arguments.length;
var i__35411__auto___50106 = (0);
while(true){
if((i__35411__auto___50106 < len__35410__auto___50105)){
args49534.push((arguments[i__35411__auto___50106]));

var G__50107 = (i__35411__auto___50106 + (1));
i__35411__auto___50106 = G__50107;
continue;
} else {
}
break;
}

var G__49538 = args49534.length;
switch (G__49538) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49534.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq49535){
var G__49536 = cljs.core.first.call(null,seq49535);
var seq49535__$1 = cljs.core.next.call(null,seq49535);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__49536,seq49535__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args49539 = [];
var len__35410__auto___50109 = arguments.length;
var i__35411__auto___50110 = (0);
while(true){
if((i__35411__auto___50110 < len__35410__auto___50109)){
args49539.push((arguments[i__35411__auto___50110]));

var G__50111 = (i__35411__auto___50110 + (1));
i__35411__auto___50110 = G__50111;
continue;
} else {
}
break;
}

var G__49543 = args49539.length;
switch (G__49543) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49539.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq49540){
var G__49541 = cljs.core.first.call(null,seq49540);
var seq49540__$1 = cljs.core.next.call(null,seq49540);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__49541,seq49540__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args49544 = [];
var len__35410__auto___50113 = arguments.length;
var i__35411__auto___50114 = (0);
while(true){
if((i__35411__auto___50114 < len__35410__auto___50113)){
args49544.push((arguments[i__35411__auto___50114]));

var G__50115 = (i__35411__auto___50114 + (1));
i__35411__auto___50114 = G__50115;
continue;
} else {
}
break;
}

var G__49548 = args49544.length;
switch (G__49548) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49544.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq49545){
var G__49546 = cljs.core.first.call(null,seq49545);
var seq49545__$1 = cljs.core.next.call(null,seq49545);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__49546,seq49545__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args49549 = [];
var len__35410__auto___50117 = arguments.length;
var i__35411__auto___50118 = (0);
while(true){
if((i__35411__auto___50118 < len__35410__auto___50117)){
args49549.push((arguments[i__35411__auto___50118]));

var G__50119 = (i__35411__auto___50118 + (1));
i__35411__auto___50118 = G__50119;
continue;
} else {
}
break;
}

var G__49553 = args49549.length;
switch (G__49553) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49549.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq49550){
var G__49551 = cljs.core.first.call(null,seq49550);
var seq49550__$1 = cljs.core.next.call(null,seq49550);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__49551,seq49550__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args49554 = [];
var len__35410__auto___50121 = arguments.length;
var i__35411__auto___50122 = (0);
while(true){
if((i__35411__auto___50122 < len__35410__auto___50121)){
args49554.push((arguments[i__35411__auto___50122]));

var G__50123 = (i__35411__auto___50122 + (1));
i__35411__auto___50122 = G__50123;
continue;
} else {
}
break;
}

var G__49558 = args49554.length;
switch (G__49558) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49554.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq49555){
var G__49556 = cljs.core.first.call(null,seq49555);
var seq49555__$1 = cljs.core.next.call(null,seq49555);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__49556,seq49555__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args49559 = [];
var len__35410__auto___50125 = arguments.length;
var i__35411__auto___50126 = (0);
while(true){
if((i__35411__auto___50126 < len__35410__auto___50125)){
args49559.push((arguments[i__35411__auto___50126]));

var G__50127 = (i__35411__auto___50126 + (1));
i__35411__auto___50126 = G__50127;
continue;
} else {
}
break;
}

var G__49563 = args49559.length;
switch (G__49563) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49559.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq49560){
var G__49561 = cljs.core.first.call(null,seq49560);
var seq49560__$1 = cljs.core.next.call(null,seq49560);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__49561,seq49560__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args49564 = [];
var len__35410__auto___50129 = arguments.length;
var i__35411__auto___50130 = (0);
while(true){
if((i__35411__auto___50130 < len__35410__auto___50129)){
args49564.push((arguments[i__35411__auto___50130]));

var G__50131 = (i__35411__auto___50130 + (1));
i__35411__auto___50130 = G__50131;
continue;
} else {
}
break;
}

var G__49568 = args49564.length;
switch (G__49568) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49564.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq49565){
var G__49566 = cljs.core.first.call(null,seq49565);
var seq49565__$1 = cljs.core.next.call(null,seq49565);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__49566,seq49565__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args49569 = [];
var len__35410__auto___50133 = arguments.length;
var i__35411__auto___50134 = (0);
while(true){
if((i__35411__auto___50134 < len__35410__auto___50133)){
args49569.push((arguments[i__35411__auto___50134]));

var G__50135 = (i__35411__auto___50134 + (1));
i__35411__auto___50134 = G__50135;
continue;
} else {
}
break;
}

var G__49573 = args49569.length;
switch (G__49573) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49569.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq49570){
var G__49571 = cljs.core.first.call(null,seq49570);
var seq49570__$1 = cljs.core.next.call(null,seq49570);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__49571,seq49570__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args49574 = [];
var len__35410__auto___50137 = arguments.length;
var i__35411__auto___50138 = (0);
while(true){
if((i__35411__auto___50138 < len__35410__auto___50137)){
args49574.push((arguments[i__35411__auto___50138]));

var G__50139 = (i__35411__auto___50138 + (1));
i__35411__auto___50138 = G__50139;
continue;
} else {
}
break;
}

var G__49578 = args49574.length;
switch (G__49578) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49574.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq49575){
var G__49576 = cljs.core.first.call(null,seq49575);
var seq49575__$1 = cljs.core.next.call(null,seq49575);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__49576,seq49575__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args49579 = [];
var len__35410__auto___50141 = arguments.length;
var i__35411__auto___50142 = (0);
while(true){
if((i__35411__auto___50142 < len__35410__auto___50141)){
args49579.push((arguments[i__35411__auto___50142]));

var G__50143 = (i__35411__auto___50142 + (1));
i__35411__auto___50142 = G__50143;
continue;
} else {
}
break;
}

var G__49583 = args49579.length;
switch (G__49583) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49579.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq49580){
var G__49581 = cljs.core.first.call(null,seq49580);
var seq49580__$1 = cljs.core.next.call(null,seq49580);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__49581,seq49580__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args49584 = [];
var len__35410__auto___50145 = arguments.length;
var i__35411__auto___50146 = (0);
while(true){
if((i__35411__auto___50146 < len__35410__auto___50145)){
args49584.push((arguments[i__35411__auto___50146]));

var G__50147 = (i__35411__auto___50146 + (1));
i__35411__auto___50146 = G__50147;
continue;
} else {
}
break;
}

var G__49588 = args49584.length;
switch (G__49588) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49584.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq49585){
var G__49586 = cljs.core.first.call(null,seq49585);
var seq49585__$1 = cljs.core.next.call(null,seq49585);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__49586,seq49585__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args49589 = [];
var len__35410__auto___50149 = arguments.length;
var i__35411__auto___50150 = (0);
while(true){
if((i__35411__auto___50150 < len__35410__auto___50149)){
args49589.push((arguments[i__35411__auto___50150]));

var G__50151 = (i__35411__auto___50150 + (1));
i__35411__auto___50150 = G__50151;
continue;
} else {
}
break;
}

var G__49593 = args49589.length;
switch (G__49593) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49589.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq49590){
var G__49591 = cljs.core.first.call(null,seq49590);
var seq49590__$1 = cljs.core.next.call(null,seq49590);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__49591,seq49590__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args49594 = [];
var len__35410__auto___50153 = arguments.length;
var i__35411__auto___50154 = (0);
while(true){
if((i__35411__auto___50154 < len__35410__auto___50153)){
args49594.push((arguments[i__35411__auto___50154]));

var G__50155 = (i__35411__auto___50154 + (1));
i__35411__auto___50154 = G__50155;
continue;
} else {
}
break;
}

var G__49598 = args49594.length;
switch (G__49598) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49594.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq49595){
var G__49596 = cljs.core.first.call(null,seq49595);
var seq49595__$1 = cljs.core.next.call(null,seq49595);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__49596,seq49595__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args49599 = [];
var len__35410__auto___50157 = arguments.length;
var i__35411__auto___50158 = (0);
while(true){
if((i__35411__auto___50158 < len__35410__auto___50157)){
args49599.push((arguments[i__35411__auto___50158]));

var G__50159 = (i__35411__auto___50158 + (1));
i__35411__auto___50158 = G__50159;
continue;
} else {
}
break;
}

var G__49603 = args49599.length;
switch (G__49603) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49599.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq49600){
var G__49601 = cljs.core.first.call(null,seq49600);
var seq49600__$1 = cljs.core.next.call(null,seq49600);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__49601,seq49600__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args49604 = [];
var len__35410__auto___50161 = arguments.length;
var i__35411__auto___50162 = (0);
while(true){
if((i__35411__auto___50162 < len__35410__auto___50161)){
args49604.push((arguments[i__35411__auto___50162]));

var G__50163 = (i__35411__auto___50162 + (1));
i__35411__auto___50162 = G__50163;
continue;
} else {
}
break;
}

var G__49608 = args49604.length;
switch (G__49608) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49604.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq49605){
var G__49606 = cljs.core.first.call(null,seq49605);
var seq49605__$1 = cljs.core.next.call(null,seq49605);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__49606,seq49605__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args49609 = [];
var len__35410__auto___50165 = arguments.length;
var i__35411__auto___50166 = (0);
while(true){
if((i__35411__auto___50166 < len__35410__auto___50165)){
args49609.push((arguments[i__35411__auto___50166]));

var G__50167 = (i__35411__auto___50166 + (1));
i__35411__auto___50166 = G__50167;
continue;
} else {
}
break;
}

var G__49613 = args49609.length;
switch (G__49613) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49609.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq49610){
var G__49611 = cljs.core.first.call(null,seq49610);
var seq49610__$1 = cljs.core.next.call(null,seq49610);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__49611,seq49610__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args49614 = [];
var len__35410__auto___50169 = arguments.length;
var i__35411__auto___50170 = (0);
while(true){
if((i__35411__auto___50170 < len__35410__auto___50169)){
args49614.push((arguments[i__35411__auto___50170]));

var G__50171 = (i__35411__auto___50170 + (1));
i__35411__auto___50170 = G__50171;
continue;
} else {
}
break;
}

var G__49618 = args49614.length;
switch (G__49618) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49614.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq49615){
var G__49616 = cljs.core.first.call(null,seq49615);
var seq49615__$1 = cljs.core.next.call(null,seq49615);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__49616,seq49615__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args49619 = [];
var len__35410__auto___50173 = arguments.length;
var i__35411__auto___50174 = (0);
while(true){
if((i__35411__auto___50174 < len__35410__auto___50173)){
args49619.push((arguments[i__35411__auto___50174]));

var G__50175 = (i__35411__auto___50174 + (1));
i__35411__auto___50174 = G__50175;
continue;
} else {
}
break;
}

var G__49623 = args49619.length;
switch (G__49623) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49619.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq49620){
var G__49621 = cljs.core.first.call(null,seq49620);
var seq49620__$1 = cljs.core.next.call(null,seq49620);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__49621,seq49620__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args49624 = [];
var len__35410__auto___50177 = arguments.length;
var i__35411__auto___50178 = (0);
while(true){
if((i__35411__auto___50178 < len__35410__auto___50177)){
args49624.push((arguments[i__35411__auto___50178]));

var G__50179 = (i__35411__auto___50178 + (1));
i__35411__auto___50178 = G__50179;
continue;
} else {
}
break;
}

var G__49628 = args49624.length;
switch (G__49628) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49624.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq49625){
var G__49626 = cljs.core.first.call(null,seq49625);
var seq49625__$1 = cljs.core.next.call(null,seq49625);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__49626,seq49625__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args49629 = [];
var len__35410__auto___50181 = arguments.length;
var i__35411__auto___50182 = (0);
while(true){
if((i__35411__auto___50182 < len__35410__auto___50181)){
args49629.push((arguments[i__35411__auto___50182]));

var G__50183 = (i__35411__auto___50182 + (1));
i__35411__auto___50182 = G__50183;
continue;
} else {
}
break;
}

var G__49633 = args49629.length;
switch (G__49633) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49629.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq49630){
var G__49631 = cljs.core.first.call(null,seq49630);
var seq49630__$1 = cljs.core.next.call(null,seq49630);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__49631,seq49630__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args49634 = [];
var len__35410__auto___50185 = arguments.length;
var i__35411__auto___50186 = (0);
while(true){
if((i__35411__auto___50186 < len__35410__auto___50185)){
args49634.push((arguments[i__35411__auto___50186]));

var G__50187 = (i__35411__auto___50186 + (1));
i__35411__auto___50186 = G__50187;
continue;
} else {
}
break;
}

var G__49638 = args49634.length;
switch (G__49638) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49634.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq49635){
var G__49636 = cljs.core.first.call(null,seq49635);
var seq49635__$1 = cljs.core.next.call(null,seq49635);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__49636,seq49635__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args49639 = [];
var len__35410__auto___50189 = arguments.length;
var i__35411__auto___50190 = (0);
while(true){
if((i__35411__auto___50190 < len__35410__auto___50189)){
args49639.push((arguments[i__35411__auto___50190]));

var G__50191 = (i__35411__auto___50190 + (1));
i__35411__auto___50190 = G__50191;
continue;
} else {
}
break;
}

var G__49643 = args49639.length;
switch (G__49643) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49639.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq49640){
var G__49641 = cljs.core.first.call(null,seq49640);
var seq49640__$1 = cljs.core.next.call(null,seq49640);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__49641,seq49640__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args49644 = [];
var len__35410__auto___50193 = arguments.length;
var i__35411__auto___50194 = (0);
while(true){
if((i__35411__auto___50194 < len__35410__auto___50193)){
args49644.push((arguments[i__35411__auto___50194]));

var G__50195 = (i__35411__auto___50194 + (1));
i__35411__auto___50194 = G__50195;
continue;
} else {
}
break;
}

var G__49648 = args49644.length;
switch (G__49648) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49644.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq49645){
var G__49646 = cljs.core.first.call(null,seq49645);
var seq49645__$1 = cljs.core.next.call(null,seq49645);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__49646,seq49645__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args49649 = [];
var len__35410__auto___50197 = arguments.length;
var i__35411__auto___50198 = (0);
while(true){
if((i__35411__auto___50198 < len__35410__auto___50197)){
args49649.push((arguments[i__35411__auto___50198]));

var G__50199 = (i__35411__auto___50198 + (1));
i__35411__auto___50198 = G__50199;
continue;
} else {
}
break;
}

var G__49653 = args49649.length;
switch (G__49653) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49649.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq49650){
var G__49651 = cljs.core.first.call(null,seq49650);
var seq49650__$1 = cljs.core.next.call(null,seq49650);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__49651,seq49650__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args49654 = [];
var len__35410__auto___50201 = arguments.length;
var i__35411__auto___50202 = (0);
while(true){
if((i__35411__auto___50202 < len__35410__auto___50201)){
args49654.push((arguments[i__35411__auto___50202]));

var G__50203 = (i__35411__auto___50202 + (1));
i__35411__auto___50202 = G__50203;
continue;
} else {
}
break;
}

var G__49658 = args49654.length;
switch (G__49658) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49654.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq49655){
var G__49656 = cljs.core.first.call(null,seq49655);
var seq49655__$1 = cljs.core.next.call(null,seq49655);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__49656,seq49655__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args49659 = [];
var len__35410__auto___50205 = arguments.length;
var i__35411__auto___50206 = (0);
while(true){
if((i__35411__auto___50206 < len__35410__auto___50205)){
args49659.push((arguments[i__35411__auto___50206]));

var G__50207 = (i__35411__auto___50206 + (1));
i__35411__auto___50206 = G__50207;
continue;
} else {
}
break;
}

var G__49663 = args49659.length;
switch (G__49663) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49659.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq49660){
var G__49661 = cljs.core.first.call(null,seq49660);
var seq49660__$1 = cljs.core.next.call(null,seq49660);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__49661,seq49660__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args49664 = [];
var len__35410__auto___50209 = arguments.length;
var i__35411__auto___50210 = (0);
while(true){
if((i__35411__auto___50210 < len__35410__auto___50209)){
args49664.push((arguments[i__35411__auto___50210]));

var G__50211 = (i__35411__auto___50210 + (1));
i__35411__auto___50210 = G__50211;
continue;
} else {
}
break;
}

var G__49668 = args49664.length;
switch (G__49668) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49664.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq49665){
var G__49666 = cljs.core.first.call(null,seq49665);
var seq49665__$1 = cljs.core.next.call(null,seq49665);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__49666,seq49665__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args49669 = [];
var len__35410__auto___50213 = arguments.length;
var i__35411__auto___50214 = (0);
while(true){
if((i__35411__auto___50214 < len__35410__auto___50213)){
args49669.push((arguments[i__35411__auto___50214]));

var G__50215 = (i__35411__auto___50214 + (1));
i__35411__auto___50214 = G__50215;
continue;
} else {
}
break;
}

var G__49673 = args49669.length;
switch (G__49673) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49669.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq49670){
var G__49671 = cljs.core.first.call(null,seq49670);
var seq49670__$1 = cljs.core.next.call(null,seq49670);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__49671,seq49670__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args49674 = [];
var len__35410__auto___50217 = arguments.length;
var i__35411__auto___50218 = (0);
while(true){
if((i__35411__auto___50218 < len__35410__auto___50217)){
args49674.push((arguments[i__35411__auto___50218]));

var G__50219 = (i__35411__auto___50218 + (1));
i__35411__auto___50218 = G__50219;
continue;
} else {
}
break;
}

var G__49678 = args49674.length;
switch (G__49678) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49674.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq49675){
var G__49676 = cljs.core.first.call(null,seq49675);
var seq49675__$1 = cljs.core.next.call(null,seq49675);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__49676,seq49675__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args49679 = [];
var len__35410__auto___50221 = arguments.length;
var i__35411__auto___50222 = (0);
while(true){
if((i__35411__auto___50222 < len__35410__auto___50221)){
args49679.push((arguments[i__35411__auto___50222]));

var G__50223 = (i__35411__auto___50222 + (1));
i__35411__auto___50222 = G__50223;
continue;
} else {
}
break;
}

var G__49683 = args49679.length;
switch (G__49683) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49679.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq49680){
var G__49681 = cljs.core.first.call(null,seq49680);
var seq49680__$1 = cljs.core.next.call(null,seq49680);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__49681,seq49680__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args49684 = [];
var len__35410__auto___50225 = arguments.length;
var i__35411__auto___50226 = (0);
while(true){
if((i__35411__auto___50226 < len__35410__auto___50225)){
args49684.push((arguments[i__35411__auto___50226]));

var G__50227 = (i__35411__auto___50226 + (1));
i__35411__auto___50226 = G__50227;
continue;
} else {
}
break;
}

var G__49688 = args49684.length;
switch (G__49688) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49684.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq49685){
var G__49686 = cljs.core.first.call(null,seq49685);
var seq49685__$1 = cljs.core.next.call(null,seq49685);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__49686,seq49685__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args49689 = [];
var len__35410__auto___50229 = arguments.length;
var i__35411__auto___50230 = (0);
while(true){
if((i__35411__auto___50230 < len__35410__auto___50229)){
args49689.push((arguments[i__35411__auto___50230]));

var G__50231 = (i__35411__auto___50230 + (1));
i__35411__auto___50230 = G__50231;
continue;
} else {
}
break;
}

var G__49693 = args49689.length;
switch (G__49693) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49689.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq49690){
var G__49691 = cljs.core.first.call(null,seq49690);
var seq49690__$1 = cljs.core.next.call(null,seq49690);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__49691,seq49690__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args49694 = [];
var len__35410__auto___50233 = arguments.length;
var i__35411__auto___50234 = (0);
while(true){
if((i__35411__auto___50234 < len__35410__auto___50233)){
args49694.push((arguments[i__35411__auto___50234]));

var G__50235 = (i__35411__auto___50234 + (1));
i__35411__auto___50234 = G__50235;
continue;
} else {
}
break;
}

var G__49698 = args49694.length;
switch (G__49698) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49694.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq49695){
var G__49696 = cljs.core.first.call(null,seq49695);
var seq49695__$1 = cljs.core.next.call(null,seq49695);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__49696,seq49695__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args49699 = [];
var len__35410__auto___50237 = arguments.length;
var i__35411__auto___50238 = (0);
while(true){
if((i__35411__auto___50238 < len__35410__auto___50237)){
args49699.push((arguments[i__35411__auto___50238]));

var G__50239 = (i__35411__auto___50238 + (1));
i__35411__auto___50238 = G__50239;
continue;
} else {
}
break;
}

var G__49703 = args49699.length;
switch (G__49703) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49699.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq49700){
var G__49701 = cljs.core.first.call(null,seq49700);
var seq49700__$1 = cljs.core.next.call(null,seq49700);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__49701,seq49700__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args49704 = [];
var len__35410__auto___50241 = arguments.length;
var i__35411__auto___50242 = (0);
while(true){
if((i__35411__auto___50242 < len__35410__auto___50241)){
args49704.push((arguments[i__35411__auto___50242]));

var G__50243 = (i__35411__auto___50242 + (1));
i__35411__auto___50242 = G__50243;
continue;
} else {
}
break;
}

var G__49708 = args49704.length;
switch (G__49708) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49704.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq49705){
var G__49706 = cljs.core.first.call(null,seq49705);
var seq49705__$1 = cljs.core.next.call(null,seq49705);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__49706,seq49705__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args49709 = [];
var len__35410__auto___50245 = arguments.length;
var i__35411__auto___50246 = (0);
while(true){
if((i__35411__auto___50246 < len__35410__auto___50245)){
args49709.push((arguments[i__35411__auto___50246]));

var G__50247 = (i__35411__auto___50246 + (1));
i__35411__auto___50246 = G__50247;
continue;
} else {
}
break;
}

var G__49713 = args49709.length;
switch (G__49713) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49709.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq49710){
var G__49711 = cljs.core.first.call(null,seq49710);
var seq49710__$1 = cljs.core.next.call(null,seq49710);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__49711,seq49710__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args49714 = [];
var len__35410__auto___50249 = arguments.length;
var i__35411__auto___50250 = (0);
while(true){
if((i__35411__auto___50250 < len__35410__auto___50249)){
args49714.push((arguments[i__35411__auto___50250]));

var G__50251 = (i__35411__auto___50250 + (1));
i__35411__auto___50250 = G__50251;
continue;
} else {
}
break;
}

var G__49718 = args49714.length;
switch (G__49718) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49714.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq49715){
var G__49716 = cljs.core.first.call(null,seq49715);
var seq49715__$1 = cljs.core.next.call(null,seq49715);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__49716,seq49715__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args49719 = [];
var len__35410__auto___50253 = arguments.length;
var i__35411__auto___50254 = (0);
while(true){
if((i__35411__auto___50254 < len__35410__auto___50253)){
args49719.push((arguments[i__35411__auto___50254]));

var G__50255 = (i__35411__auto___50254 + (1));
i__35411__auto___50254 = G__50255;
continue;
} else {
}
break;
}

var G__49723 = args49719.length;
switch (G__49723) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49719.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq49720){
var G__49721 = cljs.core.first.call(null,seq49720);
var seq49720__$1 = cljs.core.next.call(null,seq49720);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__49721,seq49720__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args49724 = [];
var len__35410__auto___50257 = arguments.length;
var i__35411__auto___50258 = (0);
while(true){
if((i__35411__auto___50258 < len__35410__auto___50257)){
args49724.push((arguments[i__35411__auto___50258]));

var G__50259 = (i__35411__auto___50258 + (1));
i__35411__auto___50258 = G__50259;
continue;
} else {
}
break;
}

var G__49728 = args49724.length;
switch (G__49728) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49724.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq49725){
var G__49726 = cljs.core.first.call(null,seq49725);
var seq49725__$1 = cljs.core.next.call(null,seq49725);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__49726,seq49725__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args49729 = [];
var len__35410__auto___50261 = arguments.length;
var i__35411__auto___50262 = (0);
while(true){
if((i__35411__auto___50262 < len__35410__auto___50261)){
args49729.push((arguments[i__35411__auto___50262]));

var G__50263 = (i__35411__auto___50262 + (1));
i__35411__auto___50262 = G__50263;
continue;
} else {
}
break;
}

var G__49733 = args49729.length;
switch (G__49733) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49729.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq49730){
var G__49731 = cljs.core.first.call(null,seq49730);
var seq49730__$1 = cljs.core.next.call(null,seq49730);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__49731,seq49730__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args49734 = [];
var len__35410__auto___50265 = arguments.length;
var i__35411__auto___50266 = (0);
while(true){
if((i__35411__auto___50266 < len__35410__auto___50265)){
args49734.push((arguments[i__35411__auto___50266]));

var G__50267 = (i__35411__auto___50266 + (1));
i__35411__auto___50266 = G__50267;
continue;
} else {
}
break;
}

var G__49738 = args49734.length;
switch (G__49738) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49734.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq49735){
var G__49736 = cljs.core.first.call(null,seq49735);
var seq49735__$1 = cljs.core.next.call(null,seq49735);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__49736,seq49735__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args49739 = [];
var len__35410__auto___50269 = arguments.length;
var i__35411__auto___50270 = (0);
while(true){
if((i__35411__auto___50270 < len__35410__auto___50269)){
args49739.push((arguments[i__35411__auto___50270]));

var G__50271 = (i__35411__auto___50270 + (1));
i__35411__auto___50270 = G__50271;
continue;
} else {
}
break;
}

var G__49743 = args49739.length;
switch (G__49743) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49739.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq49740){
var G__49741 = cljs.core.first.call(null,seq49740);
var seq49740__$1 = cljs.core.next.call(null,seq49740);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__49741,seq49740__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args49744 = [];
var len__35410__auto___50273 = arguments.length;
var i__35411__auto___50274 = (0);
while(true){
if((i__35411__auto___50274 < len__35410__auto___50273)){
args49744.push((arguments[i__35411__auto___50274]));

var G__50275 = (i__35411__auto___50274 + (1));
i__35411__auto___50274 = G__50275;
continue;
} else {
}
break;
}

var G__49748 = args49744.length;
switch (G__49748) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49744.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq49745){
var G__49746 = cljs.core.first.call(null,seq49745);
var seq49745__$1 = cljs.core.next.call(null,seq49745);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__49746,seq49745__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args49749 = [];
var len__35410__auto___50277 = arguments.length;
var i__35411__auto___50278 = (0);
while(true){
if((i__35411__auto___50278 < len__35410__auto___50277)){
args49749.push((arguments[i__35411__auto___50278]));

var G__50279 = (i__35411__auto___50278 + (1));
i__35411__auto___50278 = G__50279;
continue;
} else {
}
break;
}

var G__49753 = args49749.length;
switch (G__49753) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49749.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq49750){
var G__49751 = cljs.core.first.call(null,seq49750);
var seq49750__$1 = cljs.core.next.call(null,seq49750);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__49751,seq49750__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args49754 = [];
var len__35410__auto___50281 = arguments.length;
var i__35411__auto___50282 = (0);
while(true){
if((i__35411__auto___50282 < len__35410__auto___50281)){
args49754.push((arguments[i__35411__auto___50282]));

var G__50283 = (i__35411__auto___50282 + (1));
i__35411__auto___50282 = G__50283;
continue;
} else {
}
break;
}

var G__49758 = args49754.length;
switch (G__49758) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49754.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq49755){
var G__49756 = cljs.core.first.call(null,seq49755);
var seq49755__$1 = cljs.core.next.call(null,seq49755);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__49756,seq49755__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args49759 = [];
var len__35410__auto___50285 = arguments.length;
var i__35411__auto___50286 = (0);
while(true){
if((i__35411__auto___50286 < len__35410__auto___50285)){
args49759.push((arguments[i__35411__auto___50286]));

var G__50287 = (i__35411__auto___50286 + (1));
i__35411__auto___50286 = G__50287;
continue;
} else {
}
break;
}

var G__49763 = args49759.length;
switch (G__49763) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49759.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq49760){
var G__49761 = cljs.core.first.call(null,seq49760);
var seq49760__$1 = cljs.core.next.call(null,seq49760);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__49761,seq49760__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args49764 = [];
var len__35410__auto___50289 = arguments.length;
var i__35411__auto___50290 = (0);
while(true){
if((i__35411__auto___50290 < len__35410__auto___50289)){
args49764.push((arguments[i__35411__auto___50290]));

var G__50291 = (i__35411__auto___50290 + (1));
i__35411__auto___50290 = G__50291;
continue;
} else {
}
break;
}

var G__49768 = args49764.length;
switch (G__49768) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49764.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq49765){
var G__49766 = cljs.core.first.call(null,seq49765);
var seq49765__$1 = cljs.core.next.call(null,seq49765);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__49766,seq49765__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args49769 = [];
var len__35410__auto___50293 = arguments.length;
var i__35411__auto___50294 = (0);
while(true){
if((i__35411__auto___50294 < len__35410__auto___50293)){
args49769.push((arguments[i__35411__auto___50294]));

var G__50295 = (i__35411__auto___50294 + (1));
i__35411__auto___50294 = G__50295;
continue;
} else {
}
break;
}

var G__49773 = args49769.length;
switch (G__49773) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49769.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq49770){
var G__49771 = cljs.core.first.call(null,seq49770);
var seq49770__$1 = cljs.core.next.call(null,seq49770);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__49771,seq49770__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args49774 = [];
var len__35410__auto___50297 = arguments.length;
var i__35411__auto___50298 = (0);
while(true){
if((i__35411__auto___50298 < len__35410__auto___50297)){
args49774.push((arguments[i__35411__auto___50298]));

var G__50299 = (i__35411__auto___50298 + (1));
i__35411__auto___50298 = G__50299;
continue;
} else {
}
break;
}

var G__49778 = args49774.length;
switch (G__49778) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49774.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq49775){
var G__49776 = cljs.core.first.call(null,seq49775);
var seq49775__$1 = cljs.core.next.call(null,seq49775);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__49776,seq49775__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args49779 = [];
var len__35410__auto___50301 = arguments.length;
var i__35411__auto___50302 = (0);
while(true){
if((i__35411__auto___50302 < len__35410__auto___50301)){
args49779.push((arguments[i__35411__auto___50302]));

var G__50303 = (i__35411__auto___50302 + (1));
i__35411__auto___50302 = G__50303;
continue;
} else {
}
break;
}

var G__49783 = args49779.length;
switch (G__49783) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49779.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq49780){
var G__49781 = cljs.core.first.call(null,seq49780);
var seq49780__$1 = cljs.core.next.call(null,seq49780);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__49781,seq49780__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args49784 = [];
var len__35410__auto___50305 = arguments.length;
var i__35411__auto___50306 = (0);
while(true){
if((i__35411__auto___50306 < len__35410__auto___50305)){
args49784.push((arguments[i__35411__auto___50306]));

var G__50307 = (i__35411__auto___50306 + (1));
i__35411__auto___50306 = G__50307;
continue;
} else {
}
break;
}

var G__49788 = args49784.length;
switch (G__49788) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49784.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq49785){
var G__49786 = cljs.core.first.call(null,seq49785);
var seq49785__$1 = cljs.core.next.call(null,seq49785);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__49786,seq49785__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args49789 = [];
var len__35410__auto___50309 = arguments.length;
var i__35411__auto___50310 = (0);
while(true){
if((i__35411__auto___50310 < len__35410__auto___50309)){
args49789.push((arguments[i__35411__auto___50310]));

var G__50311 = (i__35411__auto___50310 + (1));
i__35411__auto___50310 = G__50311;
continue;
} else {
}
break;
}

var G__49793 = args49789.length;
switch (G__49793) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49789.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq49790){
var G__49791 = cljs.core.first.call(null,seq49790);
var seq49790__$1 = cljs.core.next.call(null,seq49790);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__49791,seq49790__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args49794 = [];
var len__35410__auto___50313 = arguments.length;
var i__35411__auto___50314 = (0);
while(true){
if((i__35411__auto___50314 < len__35410__auto___50313)){
args49794.push((arguments[i__35411__auto___50314]));

var G__50315 = (i__35411__auto___50314 + (1));
i__35411__auto___50314 = G__50315;
continue;
} else {
}
break;
}

var G__49798 = args49794.length;
switch (G__49798) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49794.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq49795){
var G__49796 = cljs.core.first.call(null,seq49795);
var seq49795__$1 = cljs.core.next.call(null,seq49795);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__49796,seq49795__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args49799 = [];
var len__35410__auto___50317 = arguments.length;
var i__35411__auto___50318 = (0);
while(true){
if((i__35411__auto___50318 < len__35410__auto___50317)){
args49799.push((arguments[i__35411__auto___50318]));

var G__50319 = (i__35411__auto___50318 + (1));
i__35411__auto___50318 = G__50319;
continue;
} else {
}
break;
}

var G__49803 = args49799.length;
switch (G__49803) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49799.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq49800){
var G__49801 = cljs.core.first.call(null,seq49800);
var seq49800__$1 = cljs.core.next.call(null,seq49800);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__49801,seq49800__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args49804 = [];
var len__35410__auto___50321 = arguments.length;
var i__35411__auto___50322 = (0);
while(true){
if((i__35411__auto___50322 < len__35410__auto___50321)){
args49804.push((arguments[i__35411__auto___50322]));

var G__50323 = (i__35411__auto___50322 + (1));
i__35411__auto___50322 = G__50323;
continue;
} else {
}
break;
}

var G__49808 = args49804.length;
switch (G__49808) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49804.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq49805){
var G__49806 = cljs.core.first.call(null,seq49805);
var seq49805__$1 = cljs.core.next.call(null,seq49805);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__49806,seq49805__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args49809 = [];
var len__35410__auto___50325 = arguments.length;
var i__35411__auto___50326 = (0);
while(true){
if((i__35411__auto___50326 < len__35410__auto___50325)){
args49809.push((arguments[i__35411__auto___50326]));

var G__50327 = (i__35411__auto___50326 + (1));
i__35411__auto___50326 = G__50327;
continue;
} else {
}
break;
}

var G__49813 = args49809.length;
switch (G__49813) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49809.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq49810){
var G__49811 = cljs.core.first.call(null,seq49810);
var seq49810__$1 = cljs.core.next.call(null,seq49810);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__49811,seq49810__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args49814 = [];
var len__35410__auto___50329 = arguments.length;
var i__35411__auto___50330 = (0);
while(true){
if((i__35411__auto___50330 < len__35410__auto___50329)){
args49814.push((arguments[i__35411__auto___50330]));

var G__50331 = (i__35411__auto___50330 + (1));
i__35411__auto___50330 = G__50331;
continue;
} else {
}
break;
}

var G__49818 = args49814.length;
switch (G__49818) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49814.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq49815){
var G__49816 = cljs.core.first.call(null,seq49815);
var seq49815__$1 = cljs.core.next.call(null,seq49815);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__49816,seq49815__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args49819 = [];
var len__35410__auto___50333 = arguments.length;
var i__35411__auto___50334 = (0);
while(true){
if((i__35411__auto___50334 < len__35410__auto___50333)){
args49819.push((arguments[i__35411__auto___50334]));

var G__50335 = (i__35411__auto___50334 + (1));
i__35411__auto___50334 = G__50335;
continue;
} else {
}
break;
}

var G__49823 = args49819.length;
switch (G__49823) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49819.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq49820){
var G__49821 = cljs.core.first.call(null,seq49820);
var seq49820__$1 = cljs.core.next.call(null,seq49820);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__49821,seq49820__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args49824 = [];
var len__35410__auto___50337 = arguments.length;
var i__35411__auto___50338 = (0);
while(true){
if((i__35411__auto___50338 < len__35410__auto___50337)){
args49824.push((arguments[i__35411__auto___50338]));

var G__50339 = (i__35411__auto___50338 + (1));
i__35411__auto___50338 = G__50339;
continue;
} else {
}
break;
}

var G__49828 = args49824.length;
switch (G__49828) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49824.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq49825){
var G__49826 = cljs.core.first.call(null,seq49825);
var seq49825__$1 = cljs.core.next.call(null,seq49825);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__49826,seq49825__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args49344 = [];
var len__35410__auto___50341 = arguments.length;
var i__35411__auto___50342 = (0);
while(true){
if((i__35411__auto___50342 < len__35410__auto___50341)){
args49344.push((arguments[i__35411__auto___50342]));

var G__50343 = (i__35411__auto___50342 + (1));
i__35411__auto___50342 = G__50343;
continue;
} else {
}
break;
}

var G__49348 = args49344.length;
switch (G__49348) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__35433__auto__ = (new cljs.core.IndexedSeq(args49344.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35433__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__41417__auto__,children__41418__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__41417__auto__,children__41418__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq49345){
var G__49346 = cljs.core.first.call(null,seq49345);
var seq49345__$1 = cljs.core.next.call(null,seq49345);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__49346,seq49345__$1);
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

//# sourceMappingURL=dom.js.map?rel=1489120071282