(()=>{var t,a,e={133:function(t,a,e){Object.defineProperty(a,"__esModule",{value:!0}),a.BboxConfiguration=a.BboxMethods=void 0;var o=e(251),n=e(871),i=e(402),r=(a.BboxMethods={},a.BboxMethods.BBox=function(t,a){for(var e,o,n,u=t.GetBrackets(a,""),l=t.ParseArg(a),x=u.split(/,/),M=0,c=x.length;M<c;M++){var s=x[M].trim(),f=s.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);if(f){if(e)throw new i.default("MultipleBBoxProperty","%1 specified twice in %2","Padding",a);var d=p(f[1]+f[3]);d&&(e={height:"+"+d,depth:"+"+d,lspace:d,width:"+"+2*parseInt(f[1],10)+f[3]})}else if(s.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)){if(o)throw new i.default("MultipleBBoxProperty","%1 specified twice in %2","Background",a);o=s}else if(s.match(/^[-a-z]+:/i)){if(n)throw new i.default("MultipleBBoxProperty","%1 specified twice in %2","Style",a);n=r(s)}else if(""!==s)throw new i.default("InvalidBBoxProperty",'"%1" doesn\'t look like a color, a padding dimension, or a style',s)}e&&(l=t.create("node","mpadded",[l],e)),(o||n)&&(e={},o&&Object.assign(e,{mathbackground:o}),n&&Object.assign(e,{style:n}),l=t.create("node","mstyle",[l],e)),t.Push(l)},function(t){return t}),p=function(t){return t};new n.CommandMap("bbox",{bbox:"BBox"},a.BboxMethods),a.BboxConfiguration=o.Configuration.create("bbox",{handler:{macro:["bbox"]}})},955:function(t,a){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,a.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.Configuration=MathJax._.input.tex.Configuration.Configuration,a.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,a.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},871:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,a.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,a.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,a.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,a.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,a.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,a.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,a.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},402:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=MathJax._.input.tex.TexError.default}},o={};function n(t){var a=o[t];return void 0!==a||(a=o[t]={exports:{}},e[t](a,a.exports,n)),a.exports}t=n(955),a=n(133),(0,t.r8)({_:{input:{tex:{bbox:{BboxConfiguration:a}}}}})})();