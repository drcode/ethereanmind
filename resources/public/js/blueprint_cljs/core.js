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
var G__46317__delegate = function (args){
var vec__46314 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__46314,(0),null);
var children = cljs.core.nth.call(null,vec__46314,(1),null);
return cljs.core.apply.call(null,factory,om_tools.dom.format_opts.call(null,props),children);
};
var G__46317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46318__i = 0, G__46318__a = new Array(arguments.length -  0);
while (G__46318__i < G__46318__a.length) {G__46318__a[G__46318__i] = arguments[G__46318__i + 0]; ++G__46318__i;}
  args = new cljs.core.IndexedSeq(G__46318__a,0);
} 
return G__46317__delegate.call(this,args);};
G__46317.cljs$lang$maxFixedArity = 0;
G__46317.cljs$lang$applyTo = (function (arglist__46319){
var args = cljs.core.seq(arglist__46319);
return G__46317__delegate(args);
});
G__46317.cljs$core$IFn$_invoke$arity$variadic = G__46317__delegate;
return G__46317;
})()
;
});
blueprint_cljs.core.declare_component = (function blueprint_cljs$core$declare_component(component){
return (function() { 
var G__46326__delegate = function (args){
var vec__46323 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__46323,(0),null);
var children = cljs.core.nth.call(null,vec__46323,(1),null);
return cljs.core.apply.call(null,React.createElement,component,om_tools.dom.format_opts.call(null,props),children);
};
var G__46326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46327__i = 0, G__46327__a = new Array(arguments.length -  0);
while (G__46327__i < G__46327__a.length) {G__46327__a[G__46327__i] = arguments[G__46327__i + 0]; ++G__46327__i;}
  args = new cljs.core.IndexedSeq(G__46327__a,0);
} 
return G__46326__delegate.call(this,args);};
G__46326.cljs$lang$maxFixedArity = 0;
G__46326.cljs$lang$applyTo = (function (arglist__46328){
var args = cljs.core.seq(arglist__46328);
return G__46326__delegate(args);
});
G__46326.cljs$core$IFn$_invoke$arity$variadic = G__46326__delegate;
return G__46326;
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
var iter__32731__auto__ = (function blueprint_cljs$core$clj__GT_tree_nodes_$_iter__46333(s__46334){
return (new cljs.core.LazySeq(null,(function (){
var s__46334__$1 = s__46334;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46334__$1);
if(temp__4657__auto__){
var s__46334__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46334__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__46334__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__46336 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__46335 = (0);
while(true){
if((i__46335 < size__32730__auto__)){
var node = cljs.core._nth.call(null,c__32729__auto__,i__46335);
cljs.core.chunk_append.call(null,b__46336,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)));

var G__46337 = (i__46335 + (1));
i__46335 = G__46337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46336),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__46333.call(null,cljs.core.chunk_rest.call(null,s__46334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46336),null);
}
} else {
var node = cljs.core.first.call(null,s__46334__$2);
return cljs.core.cons.call(null,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__46333.call(null,cljs.core.rest.call(null,s__46334__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32731__auto__.call(null,nodes);
});
blueprint_cljs.core.toaster = (function blueprint_cljs$core$toaster(){
return Blueprint.Toaster.create();
});
var i_46338 = Blueprint.Intent;
blueprint_cljs.core.intents = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),i_46338.PRIMARY,new cljs.core.Keyword(null,"success","success",1890645906),i_46338.SUCCESS,new cljs.core.Keyword(null,"warning","warning",-1685650671),i_46338.WARNING,new cljs.core.Keyword(null,"danger","danger",-624338030),i_46338.DANGER], null);
blueprint_cljs.core.context_menu = Blueprint.ContextMenu;

//# sourceMappingURL=core.js.map?rel=1491001399097