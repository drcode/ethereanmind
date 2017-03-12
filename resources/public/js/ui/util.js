// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.util');
goog.require('cljs.core');
goog.require('blueprint_cljs.core');
ui.util.my_toaster = blueprint_cljs.core.toaster.call(null);
ui.util.show_toast = (function ui$util$show_toast(typ,message){
return ui.util.my_toaster.show(({"intent": typ.call(null,blueprint_cljs.core.intents), "message": message}));
});
ui.util.get_tick_count = (function ui$util$get_tick_count(){
return (new Date()).getTime();
});

//# sourceMappingURL=util.js.map?rel=1489290115395