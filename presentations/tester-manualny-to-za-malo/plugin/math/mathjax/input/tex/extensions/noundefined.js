!function(){"use strict";var a,b,d={999:function(d,a,b){var e=this&&this.__values||function(a){var b="function"==typeof Symbol&&Symbol.iterator,c=b&&a[b],d=0;if(c)return c.call(a);if(a&&"number"==typeof a.length)return{next:function(){return a&&d>=a.length&&(a=void 0),{value:a&&a[d++],done:!a}}};throw new TypeError(b?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(a,"__esModule",{value:!0}),a.NoUndefinedConfiguration=void 0;var c=b(251);a.NoUndefinedConfiguration=c.Configuration.create("noundefined",{fallback:{macro:function(b,j){var d,g,k=b.create("text","\\"+j),h=b.options.noundefined||{},i={};try{for(var c=e(["color","background","size"]),a=c.next();!a.done;a=c.next()){var f=a.value;h[f]&&(i["math"+f]=h[f])}}catch(l){d={error:l}}finally{try{a&&!a.done&&(g=c.return)&&g.call(c)}finally{if(d)throw d.error}}b.Push(b.create("node","mtext",[],i,k))}},options:{noundefined:{color:"red",background:"",size:""}},priority:3})},955:function(b,a){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,a.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.Configuration=MathJax._.input.tex.Configuration.Configuration,a.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,a.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration}},e={};function c(b){var f=e[b];if(void 0!==f)return f.exports;var a=e[b]={exports:{}};return d[b].call(a.exports,a,a.exports,c),a.exports}a=c(955),b=c(999),(0,a.r8)({_:{input:{tex:{noundefined:{NoUndefinedConfiguration:b}}}}})}()