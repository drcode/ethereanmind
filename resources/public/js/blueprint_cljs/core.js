// Compiled by ClojureScript 1.9.229 {}
goog.provide('blueprint_cljs.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
blueprint_cljs.core.extract_opts = (function blueprint_cljs$core$extract_opts(args){
if((cljs.core.seq.call(null,args)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
}
});
blueprint_cljs.core.declare_factory = (function blueprint_cljs$core$declare_factory(factory){
return (function() { 
var G__70581__delegate = function (args){
var vec__70578 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__70578,(0),null);
var children = cljs.core.nth.call(null,vec__70578,(1),null);
return cljs.core.apply.call(null,factory,om_tools.dom.format_opts.call(null,props),children);
};
var G__70581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70582__i = 0, G__70582__a = new Array(arguments.length -  0);
while (G__70582__i < G__70582__a.length) {G__70582__a[G__70582__i] = arguments[G__70582__i + 0]; ++G__70582__i;}
  args = new cljs.core.IndexedSeq(G__70582__a,0);
} 
return G__70581__delegate.call(this,args);};
G__70581.cljs$lang$maxFixedArity = 0;
G__70581.cljs$lang$applyTo = (function (arglist__70583){
var args = cljs.core.seq(arglist__70583);
return G__70581__delegate(args);
});
G__70581.cljs$core$IFn$_invoke$arity$variadic = G__70581__delegate;
return G__70581;
})()
;
});
blueprint_cljs.core.declare_component = (function blueprint_cljs$core$declare_component(component){
return (function() { 
var G__70590__delegate = function (args){
var vec__70587 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__70587,(0),null);
var children = cljs.core.nth.call(null,vec__70587,(1),null);
return cljs.core.apply.call(null,React.createElement,component,om_tools.dom.format_opts.call(null,props),children);
};
var G__70590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70591__i = 0, G__70591__a = new Array(arguments.length -  0);
while (G__70591__i < G__70591__a.length) {G__70591__a[G__70591__i] = arguments[G__70591__i + 0]; ++G__70591__i;}
  args = new cljs.core.IndexedSeq(G__70591__a,0);
} 
return G__70590__delegate.call(this,args);};
G__70590.cljs$lang$maxFixedArity = 0;
G__70590.cljs$lang$applyTo = (function (arglist__70592){
var args = cljs.core.seq(arglist__70592);
return G__70590__delegate(args);
});
G__70590.cljs$core$IFn$_invoke$arity$variadic = G__70590__delegate;
return G__70590;
})()
;
});
loadBlueprint();
blueprint_cljs.core.button = blueprint_cljs.core.declare_factory.call(null,Blueprint.ButtonFactory);
blueprint_cljs.core.spinner = blueprint_cljs.core.declare_factory.call(null,Blueprint.SpinnerFactory);
blueprint_cljs.core.editable_text = blueprint_cljs.core.declare_factory.call(null,Blueprint.EditableTextFactory);
blueprint_cljs.core.collapse = blueprint_cljs.core.declare_component.call(null,Blueprint.Collapse);
blueprint_cljs.core.tabs = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabsFactory);
blueprint_cljs.core.tab_list = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabListFactory);
blueprint_cljs.core.tab = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabFactory);
blueprint_cljs.core.tab_panel = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabPanelFactory);
blueprint_cljs.core.alert = blueprint_cljs.core.declare_component.call(null,Blueprint.Alert);
blueprint_cljs.core.breadcrumb = blueprint_cljs.core.declare_component.call(null,Blueprint.Breadcrumb);
blueprint_cljs.core.dialog = blueprint_cljs.core.declare_factory.call(null,Blueprint.DialogFactory);
blueprint_cljs.core.overlay = blueprint_cljs.core.declare_factory.call(null,Blueprint.OverlayFactory);
blueprint_cljs.core.input_group = blueprint_cljs.core.declare_factory.call(null,Blueprint.InputGroupFactory);
blueprint_cljs.core.tag = blueprint_cljs.core.declare_factory.call(null,Blueprint.TagFactory);
blueprint_cljs.core.slider = blueprint_cljs.core.declare_factory.call(null,Blueprint.SliderFactory);
blueprint_cljs.core.switch$ = blueprint_cljs.core.declare_factory.call(null,Blueprint.SwitchFactory);
blueprint_cljs.core.collapsible_list = blueprint_cljs.core.declare_factory.call(null,Blueprint.CollapsibleListFactory);
blueprint_cljs.core.menu_item = blueprint_cljs.core.declare_factory.call(null,Blueprint.MenuItemFactory);
blueprint_cljs.core.menu_divider = blueprint_cljs.core.declare_factory.call(null,Blueprint.MenuDividerFactory);
blueprint_cljs.core.menu = blueprint_cljs.core.declare_factory.call(null,Blueprint.MenuFactory);
blueprint_cljs.core.checkbox = blueprint_cljs.core.declare_factory.call(null,Blueprint.CheckboxFactory);
blueprint_cljs.core.radio = blueprint_cljs.core.declare_factory.call(null,Blueprint.RadioFactory);
blueprint_cljs.core.radio_group = blueprint_cljs.core.declare_component.call(null,Blueprint.RadioGroup);
blueprint_cljs.core.non_ideal_state = blueprint_cljs.core.declare_factory.call(null,Blueprint.NonIdealStateFactory);
blueprint_cljs.core.popover = blueprint_cljs.core.declare_factory.call(null,Blueprint.PopoverFactory);
blueprint_cljs.core.tooltip = blueprint_cljs.core.declare_factory.call(null,Blueprint.TooltipFactory);
blueprint_cljs.core.progress_bar = blueprint_cljs.core.declare_factory.call(null,Blueprint.ProgressBarFactory);
blueprint_cljs.core.tree = blueprint_cljs.core.declare_factory.call(null,Blueprint.TreeFactory);
blueprint_cljs.core.clj__GT_tree_nodes = (function blueprint_cljs$core$clj__GT_tree_nodes(nodes){
var iter__32659__auto__ = (function blueprint_cljs$core$clj__GT_tree_nodes_$_iter__70597(s__70598){
return (new cljs.core.LazySeq(null,(function (){
var s__70598__$1 = s__70598;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70598__$1);
if(temp__4657__auto__){
var s__70598__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70598__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70598__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70600 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70599 = (0);
while(true){
if((i__70599 < size__32658__auto__)){
var node = cljs.core._nth.call(null,c__32657__auto__,i__70599);
cljs.core.chunk_append.call(null,b__70600,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)));

var G__70601 = (i__70599 + (1));
i__70599 = G__70601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70600),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__70597.call(null,cljs.core.chunk_rest.call(null,s__70598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70600),null);
}
} else {
var node = cljs.core.first.call(null,s__70598__$2);
return cljs.core.cons.call(null,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__70597.call(null,cljs.core.rest.call(null,s__70598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32659__auto__.call(null,nodes);
});
blueprint_cljs.core.toaster = (function blueprint_cljs$core$toaster(){
return Blueprint.Toaster.create();
});
var i_70602 = Blueprint.Intent;
blueprint_cljs.core.intents = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),i_70602.PRIMARY,new cljs.core.Keyword(null,"success","success",1890645906),i_70602.SUCCESS,new cljs.core.Keyword(null,"warning","warning",-1685650671),i_70602.WARNING,new cljs.core.Keyword(null,"danger","danger",-624338030),i_70602.DANGER], null);
blueprint_cljs.core.context_menu = Blueprint.ContextMenu;

//# sourceMappingURL=core.js.map?rel=1489123427187