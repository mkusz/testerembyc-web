(()=>{var t,e,a,n={667:function(t,e){e.q=void 0,e.q="3.2.2"},774:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=(Object.defineProperty(e,"__esModule",{value:!0}),e.CancelConfiguration=e.CancelMethods=void 0,a(251)),i=a(108),r=a(871),c=n(a(398)),l=a(975);e.CancelMethods={},e.CancelMethods.Cancel=function(t,e,a){var n=t.GetBrackets(e,""),o=t.ParseArg(e),n=c.default.keyvalOptions(n,l.ENCLOSE_OPTIONS);n.notation=a,t.Push(t.create("node","menclose",[o],n))},e.CancelMethods.CancelTo=function(t,e){var a=t.GetBrackets(e,""),n=t.ParseArg(e),o=t.ParseArg(e),a=c.default.keyvalOptions(a,l.ENCLOSE_OPTIONS);a.notation=[i.TexConstant.Notation.UPDIAGONALSTRIKE,i.TexConstant.Notation.UPDIAGONALARROW,i.TexConstant.Notation.NORTHEASTARROW].join(" "),n=t.create("node","mpadded",[n],{depth:"-.1em",height:"+.1em",voffset:".1em"}),t.Push(t.create("node","msup",[t.create("node","menclose",[o],a),n]))},new r.CommandMap("cancel",{cancel:["Cancel",i.TexConstant.Notation.UPDIAGONALSTRIKE],bcancel:["Cancel",i.TexConstant.Notation.DOWNDIAGONALSTRIKE],xcancel:["Cancel",i.TexConstant.Notation.UPDIAGONALSTRIKE+" "+i.TexConstant.Notation.DOWNDIAGONALSTRIKE],cancelto:"CancelTo"},e.CancelMethods),e.CancelConfiguration=o.Configuration.create("cancel",{handler:{macro:["cancel"]}})},955:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,e.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},398:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.ParseUtil.default},871:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parseResult=MathJax._.input.tex.SymbolMap.parseResult,e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},108:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.TexConstant=MathJax._.input.tex.TexConstants.TexConstant},975:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.ENCLOSE_OPTIONS=MathJax._.input.tex.enclose.EncloseConfiguration.ENCLOSE_OPTIONS,e.EncloseMethods=MathJax._.input.tex.enclose.EncloseConfiguration.EncloseMethods,e.EncloseConfiguration=MathJax._.input.tex.enclose.EncloseConfiguration.EncloseConfiguration}},o={};function i(t){var e=o[t];return void 0!==e||(e=o[t]={exports:{}},n[t].call(e.exports,e,e.exports,i)),e.exports}t=i(955),e=i(667),a=i(774),MathJax.loader&&MathJax.loader.checkVersion("[tex]/cancel",e.q,"tex-extension"),(0,t.r8)({_:{input:{tex:{cancel:{CancelConfiguration:a}}}}})})();