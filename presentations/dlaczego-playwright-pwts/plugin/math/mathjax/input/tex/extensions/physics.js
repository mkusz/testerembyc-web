(()=>{var t,e,a,r,n,o={667:function(t,e){e.q=void 0,e.q="3.2.2"},996:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.PhysicsConfiguration=void 0;var n=a(251),o=a(855);a(842),e.PhysicsConfiguration=n.Configuration.create("physics",{handler:{macro:["Physics-automatic-bracing-macros","Physics-vector-macros","Physics-vector-mo","Physics-vector-mi","Physics-derivative-macros","Physics-expressions-macros","Physics-quick-quad-macros","Physics-bra-ket-macros","Physics-matrix-macros"],character:["Physics-characters"],environment:["Physics-aux-envs"]},items:((n={})[o.AutoOpen.prototype.kind]=o.AutoOpen,n),options:{physics:{italicdiff:!1,arrowdel:!1}}})},855:function(t,e,a){var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}))(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=(Object.defineProperty(e,"__esModule",{value:!0}),e.AutoOpen=void 0,a(76)),c=o(a(398)),s=o(a(748)),l=o(a(193)),o=(t=>{function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openCount=0,e}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"auto open"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.toMml=function(){var e=this.factory.configuration.parser,a=this.getProperty("right"),r=(this.getProperty("smash")&&(r=t.prototype.toMml.call(this),r=e.create("node","mpadded",[r],{height:0,depth:0}),this.Clear(),this.Push(e.create("node","TeXAtom",[r]))),a&&this.Push(new l.default(a,e.stack.env,e.configuration).mml()),c.default.fenced(this.factory.configuration,this.getProperty("open"),t.prototype.toMml.call(this),this.getProperty("close"),this.getProperty("big")));return s.default.removeProperties(r,"open","close","texClass"),r},e.prototype.checkItem=function(e){e.isKind("mml")&&1===e.Size()&&(a=e.toMml()).isKind("mo")&&a.getText()===this.getProperty("open")&&this.openCount++;var a=e.getProperty("autoclose");return a&&a===this.getProperty("close")&&!this.openCount--?this.getProperty("ignore")?(this.Clear(),[[],!0]):[[this.toMml()],!0]:t.prototype.checkItem.call(this,e)},e.errors=Object.assign(Object.create(i.BaseItem.errors),{stop:["ExtraOrMissingDelims","Extra open or missing close delimiter"]}),e})(i.BaseItem);e.AutoOpen=o},842:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},n=(Object.defineProperty(e,"__esModule",{value:!0}),a(871)),o=r(a(458)),i=a(108),r=r(a(945)),s=a(801);new n.CommandMap("Physics-automatic-bracing-macros",{quantity:"Quantity",qty:"Quantity",pqty:["Quantity","(",")",!0],bqty:["Quantity","[","]",!0],vqty:["Quantity","|","|",!0],Bqty:["Quantity","\\{","\\}",!0],absolutevalue:["Quantity","|","|",!0],abs:["Quantity","|","|",!0],norm:["Quantity","\\|","\\|",!0],evaluated:"Eval",eval:"Eval",order:["Quantity","(",")",!0,"O",i.TexConstant.Variant.CALLIGRAPHIC],commutator:"Commutator",comm:"Commutator",anticommutator:["Commutator","\\{","\\}"],acomm:["Commutator","\\{","\\}"],poissonbracket:["Commutator","\\{","\\}"],pb:["Commutator","\\{","\\}"]},o.default),new n.CharacterMap("Physics-vector-mo",r.default.mathchar0mo,{dotproduct:["⋅",{mathvariant:i.TexConstant.Variant.BOLD}],vdot:["⋅",{mathvariant:i.TexConstant.Variant.BOLD}],crossproduct:"×",cross:"×",cp:"×",gradientnabla:["∇",{mathvariant:i.TexConstant.Variant.BOLD}]}),new n.CharacterMap("Physics-vector-mi",r.default.mathchar0mi,{real:["ℜ",{mathvariant:i.TexConstant.Variant.NORMAL}],imaginary:["ℑ",{mathvariant:i.TexConstant.Variant.NORMAL}]}),new n.CommandMap("Physics-vector-macros",{vnabla:"Vnabla",vectorbold:"VectorBold",vb:"VectorBold",vectorarrow:["StarMacro",1,"\\vec{\\vb","{#1}}"],va:["StarMacro",1,"\\vec{\\vb","{#1}}"],vectorunit:["StarMacro",1,"\\hat{\\vb","{#1}}"],vu:["StarMacro",1,"\\hat{\\vb","{#1}}"],gradient:["OperatorApplication","\\vnabla","(","["],grad:["OperatorApplication","\\vnabla","(","["],divergence:["VectorOperator","\\vnabla\\vdot","(","["],div:["VectorOperator","\\vnabla\\vdot","(","["],curl:["VectorOperator","\\vnabla\\crossproduct","(","["],laplacian:["OperatorApplication","\\nabla^2","(","["]},o.default),new n.CommandMap("Physics-expressions-macros",{sin:"Expression",sinh:"Expression",arcsin:"Expression",asin:"Expression",cos:"Expression",cosh:"Expression",arccos:"Expression",acos:"Expression",tan:"Expression",tanh:"Expression",arctan:"Expression",atan:"Expression",csc:"Expression",csch:"Expression",arccsc:"Expression",acsc:"Expression",sec:"Expression",sech:"Expression",arcsec:"Expression",asec:"Expression",cot:"Expression",coth:"Expression",arccot:"Expression",acot:"Expression",exp:["Expression",!1],log:"Expression",ln:"Expression",det:["Expression",!1],Pr:["Expression",!1],tr:["Expression",!1],trace:["Expression",!1,"tr"],Tr:["Expression",!1],Trace:["Expression",!1,"Tr"],rank:"NamedFn",erf:["Expression",!1],Residue:["Macro","\\mathrm{Res}"],Res:["OperatorApplication","\\Residue","(","[","{"],principalvalue:["OperatorApplication","{\\cal P}"],pv:["OperatorApplication","{\\cal P}"],PV:["OperatorApplication","{\\rm P.V.}"],Re:["OperatorApplication","\\mathrm{Re}","{"],Im:["OperatorApplication","\\mathrm{Im}","{"],sine:["NamedFn","sin"],hypsine:["NamedFn","sinh"],arcsine:["NamedFn","arcsin"],asine:["NamedFn","asin"],cosine:["NamedFn","cos"],hypcosine:["NamedFn","cosh"],arccosine:["NamedFn","arccos"],acosine:["NamedFn","acos"],tangent:["NamedFn","tan"],hyptangent:["NamedFn","tanh"],arctangent:["NamedFn","arctan"],atangent:["NamedFn","atan"],cosecant:["NamedFn","csc"],hypcosecant:["NamedFn","csch"],arccosecant:["NamedFn","arccsc"],acosecant:["NamedFn","acsc"],secant:["NamedFn","sec"],hypsecant:["NamedFn","sech"],arcsecant:["NamedFn","arcsec"],asecant:["NamedFn","asec"],cotangent:["NamedFn","cot"],hypcotangent:["NamedFn","coth"],arccotangent:["NamedFn","arccot"],acotangent:["NamedFn","acot"],exponential:["NamedFn","exp"],logarithm:["NamedFn","log"],naturallogarithm:["NamedFn","ln"],determinant:["NamedFn","det"],Probability:["NamedFn","Pr"]},o.default),new n.CommandMap("Physics-quick-quad-macros",{qqtext:"Qqtext",qq:"Qqtext",qcomma:["Macro","\\qqtext*{,}"],qc:["Macro","\\qqtext*{,}"],qcc:["Qqtext","c.c."],qif:["Qqtext","if"],qthen:["Qqtext","then"],qelse:["Qqtext","else"],qotherwise:["Qqtext","otherwise"],qunless:["Qqtext","unless"],qgiven:["Qqtext","given"],qusing:["Qqtext","using"],qassume:["Qqtext","assume"],qsince:["Qqtext","since"],qlet:["Qqtext","let"],qfor:["Qqtext","for"],qall:["Qqtext","all"],qeven:["Qqtext","even"],qodd:["Qqtext","odd"],qinteger:["Qqtext","integer"],qand:["Qqtext","and"],qor:["Qqtext","or"],qas:["Qqtext","as"],qin:["Qqtext","in"]},o.default),new n.CommandMap("Physics-derivative-macros",{diffd:"DiffD",flatfrac:["Macro","\\left.#1\\middle/#2\\right.",2],differential:["Differential","\\diffd"],dd:["Differential","\\diffd"],variation:["Differential","\\delta"],var:["Differential","\\delta"],derivative:["Derivative",2,"\\diffd"],dv:["Derivative",2,"\\diffd"],partialderivative:["Derivative",3,"\\partial"],pderivative:["Derivative",3,"\\partial"],pdv:["Derivative",3,"\\partial"],functionalderivative:["Derivative",2,"\\delta"],fderivative:["Derivative",2,"\\delta"],fdv:["Derivative",2,"\\delta"]},o.default),new n.CommandMap("Physics-bra-ket-macros",{bra:"Bra",ket:"Ket",innerproduct:"BraKet",ip:"BraKet",braket:"BraKet",outerproduct:"KetBra",dyad:"KetBra",ketbra:"KetBra",op:"KetBra",expectationvalue:"Expectation",expval:"Expectation",ev:"Expectation",matrixelement:"MatrixElement",matrixel:"MatrixElement",mel:"MatrixElement"},o.default),new n.CommandMap("Physics-matrix-macros",{matrixquantity:"MatrixQuantity",mqty:"MatrixQuantity",pmqty:["Macro","\\mqty(#1)",1],Pmqty:["Macro","\\mqty*(#1)",1],bmqty:["Macro","\\mqty[#1]",1],vmqty:["Macro","\\mqty|#1|",1],smallmatrixquantity:["MatrixQuantity",!0],smqty:["MatrixQuantity",!0],spmqty:["Macro","\\smqty(#1)",1],sPmqty:["Macro","\\smqty*(#1)",1],sbmqty:["Macro","\\smqty[#1]",1],svmqty:["Macro","\\smqty|#1|",1],matrixdeterminant:["Macro","\\vmqty{#1}",1],mdet:["Macro","\\vmqty{#1}",1],smdet:["Macro","\\svmqty{#1}",1],identitymatrix:"IdentityMatrix",imat:"IdentityMatrix",xmatrix:"XMatrix",xmat:"XMatrix",zeromatrix:["Macro","\\xmat{0}{#1}{#2}",2],zmat:["Macro","\\xmat{0}{#1}{#2}",2],paulimatrix:"PauliMatrix",pmat:"PauliMatrix",diagonalmatrix:"DiagonalMatrix",dmat:"DiagonalMatrix",antidiagonalmatrix:["DiagonalMatrix",!0],admat:["DiagonalMatrix",!0]},o.default),new n.EnvironmentMap("Physics-aux-envs",r.default.environment,{smallmatrix:["Array",null,null,null,"c","0.333em",".2em","S",1]},o.default),new n.MacroMap("Physics-characters",{"|":["AutoClose",s.TEXCLASS.ORD],")":"AutoClose","]":"AutoClose"},o.default)},458:function(t,e,a){var r=this&&this.__read||function(t,e){var a="function"==typeof Symbol&&t[Symbol.iterator];if(!a)return t;var r,n,o=a.call(t),i=[];try{for(;(void 0===e||0<e--)&&!(r=o.next()).done;)i.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(a=o.return)&&a.call(o)}finally{if(n)throw n.error}}return i},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=(Object.defineProperty(e,"__esModule",{value:!0}),n(a(360))),i=n(a(193)),c=n(a(402)),s=a(801),l=n(a(398)),u=n(a(748)),m=a(348),n={},f={"(":")","[":"]","{":"}","|":"|"},p=/^(b|B)i(g{1,2})$/,v=(n.Quantity=function(t,e,a,r,n,o,m){void 0===a&&(a="("),void 0===r&&(r=")"),void 0===o&&(o=""),void 0===m&&(m="");var x,d=!!(n=void 0===n?!1:n)&&t.GetStar(),v=t.GetNext(),h=t.i,g=null;if("\\"===v){if(t.i++,!(g=t.GetCS()).match(p))return x=t.create("node","mrow"),t.Push(l.default.fenced(t.configuration,a,x,r)),void(t.i=h);v=t.GetNext()}var y,M=f[v];if(n&&"{"!==v)throw new c.default("MissingArgFor","Missing argument for %1",t.currentCS);M?(o&&(y=t.create("token","mi",{texClass:s.TEXCLASS.OP},o),m&&u.default.setAttribute(y,"mathvariant",m),t.Push(t.itemFactory.create("fn",y))),"{"===v?(y=t.GetArgument(e),v=n?a:"\\{",M=n?r:"\\}",t.Push(new i.default(y=d?v+" "+y+" "+M:g?"\\"+g+"l"+v+" "+y+" \\"+g+"r"+M:"\\left"+v+" "+y+" \\right"+M,t.stack.env,t.configuration).mml())):(n&&(v=a,M=r),t.i++,t.Push(t.itemFactory.create("auto open").setProperties({open:v,close:M,big:g})))):(x=t.create("node","mrow"),t.Push(l.default.fenced(t.configuration,a,x,r)),t.i=h)},n.Eval=function(t,e){var a=t.GetStar(),r=t.GetNext();if("{"!==r){if("("===r||"["===r)return t.i++,void t.Push(t.itemFactory.create("auto open").setProperties({open:r,close:"|",smash:a,right:"\\vphantom{\\int}"}));throw new c.default("MissingArgFor","Missing argument for %1",t.currentCS)}r=t.GetArgument(e),a="\\left. "+(a?"\\smash{"+r+"}":r)+" \\vphantom{\\int}\\right|";t.string=t.string.slice(0,t.i)+a+t.string.slice(t.i)},n.Commutator=function(t,e,a,r){void 0===a&&(a="["),void 0===r&&(r="]");var n=t.GetStar(),o=t.GetNext(),s=null;if("\\"===o){if(t.i++,!(s=t.GetCS()).match(p))throw new c.default("MissingArgFor","Missing argument for %1",t.currentCS);o=t.GetNext()}if("{"!==o)throw new c.default("MissingArgFor","Missing argument for %1",t.currentCS);o=t.GetArgument(e)+","+t.GetArgument(e);t.Push(new i.default(n?a+" "+o+" "+r:s?"\\"+s+"l"+a+" "+o+" \\"+s+"r"+r:"\\left"+a+" "+o+" \\right"+r,t.stack.env,t.configuration).mml())},[65,90]),h=[97,122],g=[913,937],x=[945,969],M=[48,57];function y(t,e){return t>=e[0]&&t<=e[1]}function b(t,e,a,r){var n=t.configuration.parser,o=m.NodeFactory.createToken(t,e,a,r),i=r.codePointAt(0);return 1===r.length&&!n.stack.env.font&&n.stack.env.vectorFont&&(y(i,v)||y(i,h)||y(i,g)||y(i,M)||y(i,x)&&n.stack.env.vectorStar||u.default.getAttribute(o,"accent"))&&u.default.setAttribute(o,"mathvariant",n.stack.env.vectorFont),o}n.VectorBold=function(t,e){var a=t.GetStar(),r=t.GetArgument(e),n=t.configuration.nodeFactory.get("token"),o=t.stack.env.font,a=(delete t.stack.env.font,t.configuration.nodeFactory.set("token",b),t.stack.env.vectorFont=a?"bold-italic":"bold",t.stack.env.vectorStar=a,new i.default(r,t.stack.env,t.configuration).mml());o&&(t.stack.env.font=o),delete t.stack.env.vectorFont,delete t.stack.env.vectorStar,t.configuration.nodeFactory.set("token",n),t.Push(a)},n.StarMacro=function(t,e,a){for(var r=[],n=3;n<arguments.length;n++)r[n-3]=arguments[n];var o=t.GetStar(),i=[];if(a)for(var c=i.length;c<a;c++)i.push(t.GetArgument(e));o=r.join(o?"*":""),o=l.default.substituteArgs(t,i,o);t.string=l.default.addArgs(t,o,t.string.slice(t.i)),t.i=0,l.default.checkMaxMacros(t)};function P(t,e,a,r,n){var l,u,o=new i.default(r,t.stack.env,t.configuration).mml(),o=(t.Push(t.itemFactory.create(e,o)),t.GetNext()),s=f[o];s&&(l=-1!==n.indexOf(o),"{"===o?(u=(l?"\\left\\{":"")+" "+t.GetArgument(a)+" "+(l?"\\right\\}":""),t.string=u+t.string.slice(t.i),t.i=0):l&&(t.i++,t.Push(t.itemFactory.create("auto open").setProperties({open:o,close:s}))))}function A(t,e,a){var n=r(t,3),o=n[0],i=n[1],n=n[2];return e&&a?"\\left\\langle{".concat(o,"}\\middle\\vert{").concat(i,"}\\middle\\vert{").concat(n,"}\\right\\rangle"):e?"\\langle{".concat(o,"}\\vert{").concat(i,"}\\vert{").concat(n,"}\\rangle"):"\\left\\langle{".concat(o,"}\\right\\vert{").concat(i,"}\\left\\vert{").concat(n,"}\\right\\rangle")}n.OperatorApplication=function(t,e,a){for(var r=[],n=3;n<arguments.length;n++)r[n-3]=arguments[n];P(t,"fn",e,a,r)},n.VectorOperator=function(t,e,a){for(var r=[],n=3;n<arguments.length;n++)r[n-3]=arguments[n];P(t,"mml",e,a,r)},n.Expression=function(t,e,a,r){void 0===a&&(a=!0),r=(r=void 0===r?"":r)||e.slice(1);var n=a?t.GetBrackets(e):null,o=t.create("token","mi",{texClass:s.TEXCLASS.OP},r);n&&(n=new i.default(n,t.stack.env,t.configuration).mml(),o=t.create("node","msup",[o,n])),t.Push(t.itemFactory.create("fn",o)),"("===t.GetNext()&&(t.i++,t.Push(t.itemFactory.create("auto open").setProperties({open:"(",close:")"})))},n.Qqtext=function(t,e,a){var r=(t.GetStar()?"":"\\quad")+"\\text{"+(a||t.GetArgument(e))+"}\\quad ";t.string=t.string.slice(0,t.i)+r+t.string.slice(t.i)},n.Differential=function(t,e,a){var u,r=t.GetBrackets(e),r=null!=r?"^{"+r+"}":" ",o="("===t.GetNext(),c="{"===t.GetNext(),r=a+r;o||c?c?(r+=t.GetArgument(e),u=new i.default(r,t.stack.env,t.configuration).mml(),t.Push(t.create("node","TeXAtom",[u],{texClass:s.TEXCLASS.OP}))):(t.Push(new i.default(r,t.stack.env,t.configuration).mml()),t.i++,t.Push(t.itemFactory.create("auto open").setProperties({open:"(",close:")"}))):(r+=t.GetArgument(e,!0)||"",u=new i.default(r,t.stack.env,t.configuration).mml(),t.Push(u))},n.Derivative=function(t,e,a,r){var n=t.GetStar(),o=t.GetBrackets(e),c=1,s=[];for(s.push(t.GetArgument(e));"{"===t.GetNext()&&c<a;)s.push(t.GetArgument(e)),c++;var l=!1,u=" ",m=" ";2<a&&2<s.length?(u="^{"+(s.length-1)+"}",l=!0):null!=o&&(2<a&&1<s.length&&(l=!0),m=u="^{"+o+"}");for(var g,o=n?"\\flatfrac":"\\frac",n=1<s.length?s[0]:"",p=1<s.length?s[1]:s[0],v="",h=2;g=s[h];h++)v+=r+" "+g;t.Push(new i.default(o+"{"+r+u+n+"}{"+r+" "+p+m+" "+v+"}",t.stack.env,t.configuration).mml()),"("===t.GetNext()&&(t.i++,t.Push(t.itemFactory.create("auto open").setProperties({open:"(",close:")",ignore:l})))},n.Bra=function(t,e){var s,l,a=t.GetStar(),r=t.GetArgument(e),n="",o=!1,c=!1,u=("\\"===t.GetNext()&&(s=t.i,t.i++,l=t.GetCS(),(u=t.lookup("macro",l))&&"ket"===u.symbol?(o=!0,s=t.i,c=t.GetStar(),"{"===t.GetNext()?n=t.GetArgument(l,!0):(t.i=s,c=!1)):t.i=s),o?a||c?"\\langle{".concat(r,"}\\vert{").concat(n,"}\\rangle"):"\\left\\langle{".concat(r,"}\\middle\\vert{").concat(n,"}\\right\\rangle"):a||c?"\\langle{".concat(r,"}\\vert"):"\\left\\langle{".concat(r,"}\\right\\vert{").concat(n,"}"));t.Push(new i.default(u,t.stack.env,t.configuration).mml())},n.Ket=function(t,e){var a=t.GetStar(),r=t.GetArgument(e),a=a?"\\vert{".concat(r,"}\\rangle"):"\\left\\vert{".concat(r,"}\\right\\rangle");t.Push(new i.default(a,t.stack.env,t.configuration).mml())},n.BraKet=function(t,e){var a=t.GetStar(),r=t.GetArgument(e),n=null,a=null==(n="{"===t.GetNext()?t.GetArgument(e,!0):n)?a?"\\langle{".concat(r,"}\\vert{").concat(r,"}\\rangle"):"\\left\\langle{".concat(r,"}\\middle\\vert{").concat(r,"}\\right\\rangle"):a?"\\langle{".concat(r,"}\\vert{").concat(n,"}\\rangle"):"\\left\\langle{".concat(r,"}\\middle\\vert{").concat(n,"}\\right\\rangle");t.Push(new i.default(a,t.stack.env,t.configuration).mml())},n.KetBra=function(t,e){var a=t.GetStar(),r=t.GetArgument(e),n=null,a=null==(n="{"===t.GetNext()?t.GetArgument(e,!0):n)?a?"\\vert{".concat(r,"}\\rangle\\!\\langle{").concat(r,"}\\vert"):"\\left\\vert{".concat(r,"}\\middle\\rangle\\!\\middle\\langle{").concat(r,"}\\right\\vert"):a?"\\vert{".concat(r,"}\\rangle\\!\\langle{").concat(n,"}\\vert"):"\\left\\vert{".concat(r,"}\\middle\\rangle\\!\\middle\\langle{").concat(n,"}\\right\\vert");t.Push(new i.default(a,t.stack.env,t.configuration).mml())},n.Expectation=function(t,e){var a=t.GetStar(),r=a&&t.GetStar(),n=t.GetArgument(e),o=null,o=("{"===t.GetNext()&&(o=t.GetArgument(e,!0)),n&&o?A([o,n,o],a,r):a?"\\langle {".concat(n,"} \\rangle"):"\\left\\langle {".concat(n,"} \\right\\rangle"));t.Push(new i.default(o,t.stack.env,t.configuration).mml())},n.MatrixElement=function(t,e){var a=t.GetStar(),r=a&&t.GetStar(),a=A([t.GetArgument(e),t.GetArgument(e),t.GetArgument(e)],a,r);t.Push(new i.default(a,t.stack.env,t.configuration).mml())},n.MatrixQuantity=function(t,e,a){var r=t.GetStar(),n=a?"smallmatrix":"array",o="",c="",s="";switch(t.GetNext()){case"{":o=t.GetArgument(e);break;case"(":t.i++,c=r?"\\lgroup":"(",s=r?"\\rgroup":")",o=t.GetUpTo(e,")");break;case"[":t.i++,c="[",o=t.GetUpTo(e,s="]");break;case"|":t.i++,o=t.GetUpTo(e,s=c="|");break;default:c="(",s=")"}t.Push(new i.default((c?"\\left":"")+c+"\\begin{"+n+"}{} "+o+"\\end{"+n+"}"+(c?"\\right":"")+s,t.stack.env,t.configuration).mml())},n.IdentityMatrix=function(t,e){var a=t.GetArgument(e),r=parseInt(a,10);if(isNaN(r))throw new c.default("InvalidNumber","Invalid number");if(r<=1)t.string="1"+t.string.slice(t.i);else{for(var n=Array(r).fill("0"),o=[],i=0;i<r;i++){var s=n.slice();s[i]="1",o.push(s.join(" & "))}t.string=o.join("\\\\ ")+t.string.slice(t.i)}t.i=0},n.XMatrix=function(t,e){var a=t.GetStar(),r=t.GetArgument(e),n=t.GetArgument(e),o=t.GetArgument(e),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s.toString()!==o||i.toString()!==n)throw new c.default("InvalidNumber","Invalid number");i=i<1?1:i,s=s<1?1:s;if(a){if(o="",1===i&&1===s)o=r;else if(1===i){for(var l=[],d=1;d<=s;d++)l.push("".concat(r,"_{").concat(d,"}"));o=l.join(" & ")}else if(1===s){for(l=[],d=1;d<=i;d++)l.push("".concat(r,"_{").concat(d,"}"));o=l.join("\\\\ ")}else{for(var f=[],d=1;d<=i;d++){l=[];for(var p=1;p<=s;p++)l.push("".concat(r,"_{{").concat(d,"}{").concat(p,"}}"));f.push(l.join(" & "))}o=f.join("\\\\ ")}t.string=o+t.string.slice(t.i)}else l=Array(s).fill(r).join(" & "),n=Array(i).fill(l).join("\\\\ "),t.string=n+t.string.slice(t.i);t.i=0},n.PauliMatrix=function(t,e){var a=t.GetArgument(e),r=a.slice(1);switch(a[0]){case"0":r+=" 1 & 0\\\\ 0 & 1";break;case"1":case"x":r+=" 0 & 1\\\\ 1 & 0";break;case"2":case"y":r+=" 0 & -i\\\\ i & 0";break;case"3":case"z":r+=" 1 & 0\\\\ 0 & -1"}t.string=r+t.string.slice(t.i),t.i=0},n.DiagonalMatrix=function(t,e,a){if("{"===t.GetNext()){var r=t.i,n=(t.GetArgument(e),t.i);t.i=r+1;for(var o=[],i="",c=t.i;c<n;){try{i=t.GetUpTo(e,",")}catch(e){t.i=n,o.push(t.string.slice(c,n-1));break}if(t.i>=n){o.push(t.string.slice(c,n));break}c=t.i,o.push(i)}t.string=((t,e)=>{for(var a=t.length,r=[],n=0;n<a;n++)r.push(Array(e?a-n:n+1).join("&")+"\\mqty{"+t[n]+"}");return r.join("\\\\ ")})(o,a)+t.string.slice(n),t.i=0}},n.AutoClose=function(t,e,a){var r=t.create("token","mo",{stretchy:!1},e),r=t.itemFactory.create("mml",r).setProperties({autoclose:e});t.Push(r)},n.Vnabla=function(t,e){var a=t.options.physics.arrowdel?"\\vec{\\gradientnabla}":"{\\gradientnabla}";return t.Push(new i.default(a,t.stack.env,t.configuration).mml())},n.DiffD=function(t,e){var a=t.options.physics.italicdiff?"d":"{\\rm d}";return t.Push(new i.default(a,t.stack.env,t.configuration).mml())},n.Macro=o.default.Macro,n.NamedFn=o.default.NamedFn,n.Array=o.default.Array,e.default=n},955:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},801:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.TEXCLASS=MathJax._.core.MmlTree.MmlNode.TEXCLASS,e.TEXCLASSNAMES=MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES,e.indentAttributes=MathJax._.core.MmlTree.MmlNode.indentAttributes,e.AbstractMmlNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlNode,e.AbstractMmlTokenNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode,e.AbstractMmlLayoutNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode,e.AbstractMmlBaseNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode,e.AbstractMmlEmptyNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode,e.TextNode=MathJax._.core.MmlTree.MmlNode.TextNode,e.XMLNode=MathJax._.core.MmlTree.MmlNode.XMLNode},251:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,e.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},348:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.NodeFactory=MathJax._.input.tex.NodeFactory.NodeFactory},748:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.NodeUtil.default},945:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.ParseMethods.default},398:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.ParseUtil.default},76:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.MmlStack=MathJax._.input.tex.StackItem.MmlStack,e.BaseItem=MathJax._.input.tex.StackItem.BaseItem},871:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parseResult=MathJax._.input.tex.SymbolMap.parseResult,e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},108:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.TexConstant=MathJax._.input.tex.TexConstants.TexConstant},402:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexError.default},193:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexParser.default},360:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.base.BaseMethods.default}},i={};function c(t){var e=i[t];return void 0!==e||(e=i[t]={exports:{}},o[t].call(e.exports,e,e.exports,c)),e.exports}t=c(955),e=c(667),a=c(996),r=c(855),n=c(458),MathJax.loader&&MathJax.loader.checkVersion("[tex]/physics",e.q,"tex-extension"),(0,t.r8)({_:{input:{tex:{physics:{PhysicsConfiguration:a,PhysicsItems:r,PhysicsMethods:n}}}}})})();