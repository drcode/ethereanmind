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
var G__79723__delegate = function (args){
var vec__79720 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__79720,(0),null);
var children = cljs.core.nth.call(null,vec__79720,(1),null);
return cljs.core.apply.call(null,factory,om_tools.dom.format_opts.call(null,props),children);
};
var G__79723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79724__i = 0, G__79724__a = new Array(arguments.length -  0);
while (G__79724__i < G__79724__a.length) {G__79724__a[G__79724__i] = arguments[G__79724__i + 0]; ++G__79724__i;}
  args = new cljs.core.IndexedSeq(G__79724__a,0);
} 
return G__79723__delegate.call(this,args);};
G__79723.cljs$lang$maxFixedArity = 0;
G__79723.cljs$lang$applyTo = (function (arglist__79725){
var args = cljs.core.seq(arglist__79725);
return G__79723__delegate(args);
});
G__79723.cljs$core$IFn$_invoke$arity$variadic = G__79723__delegate;
return G__79723;
})()
;
});
blueprint_cljs.core.declare_component = (function blueprint_cljs$core$declare_component(component){
return (function() { 
var G__79732__delegate = function (args){
var vec__79729 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__79729,(0),null);
var children = cljs.core.nth.call(null,vec__79729,(1),null);
return cljs.core.apply.call(null,React.createElement,component,om_tools.dom.format_opts.call(null,props),children);
};
var G__79732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79733__i = 0, G__79733__a = new Array(arguments.length -  0);
while (G__79733__i < G__79733__a.length) {G__79733__a[G__79733__i] = arguments[G__79733__i + 0]; ++G__79733__i;}
  args = new cljs.core.IndexedSeq(G__79733__a,0);
} 
return G__79732__delegate.call(this,args);};
G__79732.cljs$lang$maxFixedArity = 0;
G__79732.cljs$lang$applyTo = (function (arglist__79734){
var args = cljs.core.seq(arglist__79734);
return G__79732__delegate(args);
});
G__79732.cljs$core$IFn$_invoke$arity$variadic = G__79732__delegate;
return G__79732;
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
var iter__35244__auto__ = (function blueprint_cljs$core$clj__GT_tree_nodes_$_iter__79739(s__79740){
return (new cljs.core.LazySeq(null,(function (){
var s__79740__$1 = s__79740;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__79740__$1);
if(temp__6728__auto__){
var s__79740__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__79740__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__79740__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__79742 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__79741 = (0);
while(true){
if((i__79741 < size__35243__auto__)){
var node = cljs.core._nth.call(null,c__35242__auto__,i__79741);
cljs.core.chunk_append.call(null,b__79742,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)));

var G__79743 = (i__79741 + (1));
i__79741 = G__79743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79742),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__79739.call(null,cljs.core.chunk_rest.call(null,s__79740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79742),null);
}
} else {
var node = cljs.core.first.call(null,s__79740__$2);
return cljs.core.cons.call(null,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__79739.call(null,cljs.core.rest.call(null,s__79740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35244__auto__.call(null,nodes);
});
blueprint_cljs.core.toaster = (function blueprint_cljs$core$toaster(){
return Blueprint.Toaster.create();
});
var i_79744 = Blueprint.Intent;
blueprint_cljs.core.intents = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),i_79744.PRIMARY,new cljs.core.Keyword(null,"success","success",1890645906),i_79744.SUCCESS,new cljs.core.Keyword(null,"warning","warning",-1685650671),i_79744.WARNING,new cljs.core.Keyword(null,"danger","danger",-624338030),i_79744.DANGER], null);
blueprint_cljs.core.context_menu = Blueprint.ContextMenu;

//# sourceMappingURL=core.js.map?rel=1488154329714