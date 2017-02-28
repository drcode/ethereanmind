// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.motion');
goog.require('cljs.core');
goog.require('cljsjs.react_motion');
ui.motion.motion = (function ui$motion$motion(atts,thunk){
return React.createElement(ReactMotion.Motion,cljs.core.clj__GT_js.call(null,atts),(function (value){
return thunk.call(null,cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
});
ui.motion.spring = ReactMotion.spring;
ui.motion.wobbly = ReactMotion.presets.wobbly;
ui.motion.gentle = ReactMotion.presets.gentle;
ui.motion.stiff = ReactMotion.presets.stiff;

//# sourceMappingURL=motion.js.map?rel=1488154329670