!function(){"use strict";var e,t,r,o,n,a={333:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.BussproofsConfiguration=void 0;var n=r(251),a=r(854),i=r(378);r(116),t.BussproofsConfiguration=n.Configuration.create("bussproofs",{handler:{macro:["Bussproofs-macros"],environment:["Bussproofs-environments"]},items:((n={})[a.ProofTreeItem.prototype.kind]=a.ProofTreeItem,n),preprocessors:[[i.saveDocument,1]],postprocessors:[[i.clearDocument,3],[i.makeBsprAttributes,2],[i.balanceRules,1]]})},854:function(e,t,r){var o,n=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=(Object.defineProperty(t,"__esModule",{value:!0}),t.ProofTreeItem=void 0,r(402)),i=r(76),l=r(935),f=r(378),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.leftLabel=null,t.rigthLabel=null,t.innerStack=new l.default(t.factory,{},!0),t}return n(t,e),Object.defineProperty(t.prototype,"kind",{get:function(){return"proofTree"},enumerable:!1,configurable:!0}),t.prototype.checkItem=function(e){var t;if(e.isKind("end")&&"prooftree"===e.getName())return t=this.toMml(),f.setProperty(t,"proof",!0),[[this.factory.create("mml",t),e],!0];if(e.isKind("stop"))throw new a.default("EnvMissingEnd","Missing \\end{%1}",this.getName());return this.innerStack.Push(e),i.BaseItem.fail},t.prototype.toMml=function(){var t=e.prototype.toMml.call(this),r=this.innerStack.Top();if(r.isKind("start")&&!r.Size())return t;this.innerStack.Push(this.factory.create("stop"));r=this.innerStack.Top().toMml();return this.create("node","mrow",[r,t],{})},t}(i.BaseItem);t.ProofTreeItem=u},116:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(827),n=r(945),a=r(871);new a.CommandMap("Bussproofs-macros",{AxiomC:"Axiom",UnaryInfC:["Inference",1],BinaryInfC:["Inference",2],TrinaryInfC:["Inference",3],QuaternaryInfC:["Inference",4],QuinaryInfC:["Inference",5],RightLabel:["Label","right"],LeftLabel:["Label","left"],AXC:"Axiom",UIC:["Inference",1],BIC:["Inference",2],TIC:["Inference",3],RL:["Label","right"],LL:["Label","left"],noLine:["SetLine","none",!1],singleLine:["SetLine","solid",!1],solidLine:["SetLine","solid",!1],dashedLine:["SetLine","dashed",!1],alwaysNoLine:["SetLine","none",!0],alwaysSingleLine:["SetLine","solid",!0],alwaysSolidLine:["SetLine","solid",!0],alwaysDashedLine:["SetLine","dashed",!0],rootAtTop:["RootAtTop",!0],alwaysRootAtTop:["RootAtTop",!0],rootAtBottom:["RootAtTop",!1],alwaysRootAtBottom:["RootAtTop",!1],fCenter:"FCenter",Axiom:"AxiomF",UnaryInf:["InferenceF",1],BinaryInf:["InferenceF",2],TrinaryInf:["InferenceF",3],QuaternaryInf:["InferenceF",4],QuinaryInf:["InferenceF",5]},o.default),new a.EnvironmentMap("Bussproofs-environments",n.default.environment,{prooftree:["Prooftree",null,!1]},o.default)},827:function(e,t,r){var o=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,a=r.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(o=a.next()).done;)i.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},n=this&&this.__spreadArray||function(e,t){for(var r=0,o=t.length,n=e.length;r<o;r++,n++)e[n]=t[r];return e},a=(Object.defineProperty(t,"__esModule",{value:!0}),r(402)),i=r(193),l=r(398),f=r(378),u={Prooftree:function(e,t){return e.Push(t),e.itemFactory.create("proofTree").setProperties({name:t.getName(),line:"solid",currentLine:"solid",rootAtTop:!1})},Axiom:function(e,t){var r=e.stack.Top();if("proofTree"!==r.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");var o=s(e,e.GetArgument(t));f.setProperty(o,"axiom",!0),r.Push(o)}},s=function(e,t){var a,i,r=l.default.internalMath(e,l.default.trimSpaces(t),0);return r[0].childNodes[0].childNodes.length?(a=e.create("node","mspace",[],{width:".5ex"}),i=e.create("node","mspace",[],{width:".5ex"}),e.create("node","mrow",n(n([a],o(r)),[i]))):e.create("node","mrow",[])};function d(e,t,r,o,n,a,i){var l,u,s,d,c=e.create("node","mtr",[e.create("node","mtd",[t],{})],{}),p=e.create("node","mtr",[e.create("node","mtd",r,{})],{}),c=e.create("node","mtable",i?[p,c]:[c,p],{align:"top 2",rowlines:a,framespacing:"0 0"});if(f.setProperty(c,"inferenceRule",i?"up":"down"),o&&(l=e.create("node","mpadded",[o],{height:"+.5em",width:"+.5em",voffset:"-.15em"}),f.setProperty(l,"prooflabel","left")),n&&(u=e.create("node","mpadded",[n],{height:"+.5em",width:"+.5em",voffset:"-.15em"}),f.setProperty(u,"prooflabel","right")),o&&n)s=[l,c,u],d="both";else if(o)s=[l,c],d="left";else{if(!n)return c;s=[c,u],d="right"}return c=e.create("node","mrow",s),f.setProperty(c,"labelledRule",d),c}function c(e,t){if("$"!==e.GetNext())throw new a.default("IllegalUseOfCommand","Use of %1 does not match it's definition.",t);e.i++;var r=e.GetUpTo(t,"$");if(-1===r.indexOf("\\fCenter"))throw new a.default("IllegalUseOfCommand","Missing \\fCenter in %1.",t);var r=o(r.split("\\fCenter"),2),l=r[0],r=r[1],l=new i.default(l,e.stack.env,e.configuration).mml(),r=new i.default(r,e.stack.env,e.configuration).mml(),c=new i.default("\\fCenter",e.stack.env,e.configuration).mml(),l=e.create("node","mtd",[l],{}),c=e.create("node","mtd",[c],{}),r=e.create("node","mtd",[r],{}),l=e.create("node","mtr",[l,c,r],{}),c=e.create("node","mtable",[l],{columnspacing:".5ex",columnalign:"center 2"});return f.setProperty(c,"sequent",!0),e.configuration.addNode("sequent",l),c}u.Inference=function(e,t,r){var o=e.stack.Top();if("proofTree"!==o.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");if(o.Size()<r)throw new a.default("BadProofTree","Proof tree badly specified.");for(var n=o.getProperty("rootAtTop"),i=1!==r||o.Peek()[0].childNodes.length?r:0,l=[];l.length&&l.unshift(e.create("node","mtd",[],{})),l.unshift(e.create("node","mtd",[o.Pop()],{rowalign:n?"top":"bottom"})),0<--r;);var u=e.create("node","mtr",l,{}),u=e.create("node","mtable",[u],{framespacing:"0 0"}),p=s(e,e.GetArgument(t)),m=o.getProperty("currentLine"),u=(m!==o.getProperty("line")&&o.setProperty("currentLine",o.getProperty("line")),d(e,u,[p],o.getProperty("left"),o.getProperty("right"),m,n));o.setProperty("left",null),o.setProperty("right",null),f.setProperty(u,"inference",i),e.configuration.addNode("inference",u),o.Push(u)},u.Label=function(e,t,r){var o=e.stack.Top();if("proofTree"!==o.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");var n=l.default.internalMath(e,e.GetArgument(t),0),n=1<n.length?e.create("node","mrow",n,{}):n[0];o.setProperty(r,n)},u.SetLine=function(e,t,r,o){var n=e.stack.Top();if("proofTree"!==n.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");n.setProperty("currentLine",r),o&&n.setProperty("line",r)},u.RootAtTop=function(e,t,r){var o=e.stack.Top();if("proofTree"!==o.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");o.setProperty("rootAtTop",r)},u.AxiomF=function(e,t){var r=e.stack.Top();if("proofTree"!==r.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");var o=c(e,t);f.setProperty(o,"axiom",!0),r.Push(o)},u.FCenter=function(e,t){},u.InferenceF=function(e,t,r){var o=e.stack.Top();if("proofTree"!==o.kind)throw new a.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");if(o.Size()<r)throw new a.default("BadProofTree","Proof tree badly specified.");for(var n=o.getProperty("rootAtTop"),i=1!==r||o.Peek()[0].childNodes.length?r:0,l=[];l.length&&l.unshift(e.create("node","mtd",[],{})),l.unshift(e.create("node","mtd",[o.Pop()],{rowalign:n?"top":"bottom"})),0<--r;);var u=e.create("node","mtr",l,{}),u=e.create("node","mtable",[u],{framespacing:"0 0"}),p=c(e,t),m=o.getProperty("currentLine"),u=(m!==o.getProperty("line")&&o.setProperty("currentLine",o.getProperty("line")),d(e,u,[p],o.getProperty("left"),o.getProperty("right"),m,n));o.setProperty("left",null),o.setProperty("right",null),f.setProperty(u,"inference",i),e.configuration.addNode("inference",u),o.Push(u)},t.default=u},378:function(e,t,r){function c(e,t){return e.childNodes["up"===t?1:0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]}function m(e){return p(e,0)}function h(e){return p(e,e.childNodes.length-1)}function v(e){for(;e&&!i.default.isType(e,"mtd");)e=e.parent;return e}function g(e){for(;e&&null==t.getProperty(e,"inference");)e=e.parent;return e}function b(e,r){void 0===r&&(r=!1);var o=d(e),n=y(o,t.getProperty(o,"inferenceRule"));return x(e,o,r)+(s(o)-s(n))/2}function M(e,r,o,n){void 0===n&&(n=!1),(t.getProperty(r,"inferenceRule")||t.getProperty(r,"labelledRule"))&&(a=e.nodeFactory.create("node","mrow"),r.parent.replaceChild(a,r),a.setChildren([r]),w(r,a),r=a);var a=n?r.childNodes.length-1:0,a=r.childNodes[a];i.default.isType(a,"mspace")?i.default.setAttribute(a,"width",l.default.Em(l.default.dimen2em(i.default.getAttribute(a,"width"))+o)):(a=e.nodeFactory.create("node","mspace",[],{width:l.default.Em(o)}),n?r.appendChild(a):(a.parent=r).childNodes.unshift(a))}function C(e,r){for(var o=r.pop();r.length;){var a=r.pop(),i=n(T(o,a),2),l=i[0],i=i[1];t.getProperty(o.parent,"axiom")&&(_(e,l<0?o:a,0,"left",Math.abs(l)),_(e,i<0?o:a,2,"right",Math.abs(i))),o=a}}var o,n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,a=r.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(o=a.next()).done;)i.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&o>=e.length?void 0:e)&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=(Object.defineProperty(t,"__esModule",{value:!0}),t.clearDocument=t.saveDocument=t.makeBsprAttributes=t.removeProperty=t.getProperty=t.setProperty=t.balanceRules=void 0,r(748)),l=r(398),f=null,u=null,s=function(e){return u.root=e,f.outputJax.getBBox(u,f).w},d=function(e){for(var t=0;e&&!i.default.isType(e,"mtable");){if(i.default.isType(e,"text"))return null;i.default.isType(e,"mrow")?(e=e.childNodes[0],t=0):(e=e.parent.childNodes[t],t++)}return e},p=function(e,t){return e.childNodes[t].childNodes[0].childNodes[0]},y=function(e,t){return e.childNodes["up"===t?0:1].childNodes[0].childNodes[0].childNodes[0]},x=function(e,t,r){void 0===r&&(r=!1);var n,a,l,f,o=0;return e!==t&&(e!==t.parent&&(n=e.childNodes,a=r?n.length-1:0,i.default.isType(n[a],"mspace")&&(o+=s(n[a])),e=t.parent),e!==t&&(l=e.childNodes)[f=r?l.length-1:0]!==t)&&(o+=s(l[f])),o},w=function(e,r){["inference","proof","maxAdjust","labelledRule"].forEach(function(o){var n=t.getProperty(e,o);null!=n&&(t.setProperty(r,o,n),t.removeProperty(e,o))})},_=function(e,r,o,n,a){var f,i=e.nodeFactory.create("node","mspace",[],{width:l.default.Em(a)});"left"===n?(f=r.childNodes[o].childNodes[0],(i.parent=f).childNodes.unshift(i)):r.childNodes[o].appendChild(i),t.setProperty(r.parent,"sequentAdjust_"+n,a)},T=function(e,t){var r=s(e.childNodes[2]),o=s(t.childNodes[2]);return[s(e.childNodes[0])-s(t.childNodes[0]),r-o]},I=(t.balanceRules=function(e){u=new e.document.options.MathItem("",null,e.math.display);var r,o,n=e.data,i=(!function(e){var r=e.nodeLists.sequent;if(r)for(var o=r.length-1,n=void 0;n=r[o];o--)if(t.getProperty(n,"sequentProcessed"))t.removeProperty(n,"sequentProcessed");else{var a=[],i=g(n);if(1===t.getProperty(i,"inference")){for(a.push(n);1===t.getProperty(i,"inference");){var i=d(i),l=m(c(i,t.getProperty(i,"inferenceRule"))),f=t.getProperty(l,"inferenceRule")?y(l,t.getProperty(l,"inferenceRule")):l;t.getProperty(f,"sequent")&&(n=f.childNodes[0],a.push(n),t.setProperty(n,"sequentProcessed",!0)),i=l}C(e,a)}}}(n),n.nodeLists.inference||[]);try{for(var l=a(i),f=l.next();!f.done;f=l.next()){var I,N,S,L,k,j,B,J,O,s=f.value,p=t.getProperty(s,"proof"),w=d(s),_=c(w,t.getProperty(w,"inferenceRule")),T=m(_),A=(t.getProperty(T,"inference")&&(I=b(T))&&(M(n,T,-I),N=x(s,w,!1),M(n,s,I-N)),h(_));null!=t.getProperty(A,"inference")&&(S=b(A,!0),M(n,A,-S,!0),L=x(s,w,!0),j=void(null!=(k=t.getProperty(s,"maxAdjust"))&&(S=Math.max(S,k))),!p&&(j=v(s))?(B=function(e){return e.parent.childNodes[e.parent.childNodes.indexOf(e)+1]}(j))?(J=n.nodeFactory.create("node","mspace",[],{width:S-L+"em"}),B.appendChild(J),s.removeProperty("maxAdjust")):(O=g(j))&&(S=t.getProperty(O,"maxAdjust")?Math.max(t.getProperty(O,"maxAdjust"),S):S,t.setProperty(O,"maxAdjust",S)):M(n,t.getProperty(s,"proof")?s:s.parent,S-L,!0))}}catch(e){r={error:e}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}},"bspr_"),N=((o={}).bspr_maxAdjust=!0,o);t.setProperty=function(e,t,r){i.default.setProperty(e,I+t,r)},t.getProperty=function(e,t){return i.default.getProperty(e,I+t)},t.removeProperty=function(e,t){e.removeProperty(I+t)},t.makeBsprAttributes=function(e){e.data.root.walkTree(function(e,t){var r=[];e.getPropertyNames().forEach(function(t){!N[t]&&t.match(RegExp("^bspr_"))&&r.push(t+":"+e.getProperty(t))}),r.length&&i.default.setAttribute(e,"semantics",r.join(";"))})},t.saveDocument=function(e){if(!("getBBox"in(f=e.document).outputJax))throw Error("The bussproofs extension requires an output jax with a getBBox() method")},t.clearDocument=function(e){f=null}},955:function(e,t){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,t.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},748:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.NodeUtil.default},945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseMethods.default},398:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseUtil.default},935:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.Stack.default},76:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MmlStack=MathJax._.input.tex.StackItem.MmlStack,t.BaseItem=MathJax._.input.tex.StackItem.BaseItem},871:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},402:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexError.default},193:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexParser.default}},i={};function l(e){var t=i[e];return void 0!==t||(t=i[e]={exports:{}},a[e].call(t.exports,t,t.exports,l)),t.exports}e=l(955),t=l(333),r=l(854),o=l(827),n=l(378),(0,e.r8)({_:{input:{tex:{bussproofs:{BussproofsConfiguration:t,BussproofsItems:r,BussproofsMethods:o,BussproofsUtil:n}}}}})}();