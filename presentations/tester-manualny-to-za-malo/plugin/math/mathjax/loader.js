!function(){"use strict";var e={515:function(e,t,n){var r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function o(e){return"object"==typeof e&&null!==e}function a(e,t){var n,i;try{for(var s=r(Object.keys(t)),c=s.next();!c.done;c=s.next()){var u=c.value;"__esModule"!==u&&(!o(e[u])||!o(t[u])||t[u]instanceof Promise?null!==t[u]&&void 0!==t[u]&&(e[u]=t[u]):a(e[u],t[u]))}}catch(l){n={error:l}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.MathJax=t.combineWithMathJax=t.combineDefaults=t.combineConfig=t.isObject=void 0,t.isObject=o,t.combineConfig=a,t.combineDefaults=function e(t,n,a){var i,s;t[n]||(t[n]={}),t=t[n];try{for(var c=r(Object.keys(a)),u=c.next();!u.done;u=c.next()){var l=u.value;o(t[l])&&o(a[l])?e(t,l,a[l]):null==t[l]&&null!=a[l]&&(t[l]=a[l])}}catch(d){i={error:d}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(i)throw i.error}}return t},t.combineWithMathJax=function(e){return a(t.MathJax,e)},void 0===n.g.MathJax&&(n.g.MathJax={}),n.g.MathJax.version||(n.g.MathJax={version:"3.2.0",_:{},config:n.g.MathJax}),t.MathJax=n.g.MathJax},235:function(e,t,n){var r,o,a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0}),t.CONFIG=t.MathJax=t.Loader=t.PathFilters=t.PackageError=t.Package=void 0;var i=n(515),s=n(265),c=n(265);Object.defineProperty(t,"Package",{enumerable:!0,get:function(){return c.Package}}),Object.defineProperty(t,"PackageError",{enumerable:!0,get:function(){return c.PackageError}});var u,l,d=n(525);if(t.PathFilters={source:function(e){return t.CONFIG.source.hasOwnProperty(e.name)&&(e.name=t.CONFIG.source[e.name]),!0},normalize:function(e){var t=e.name;return t.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i)||(e.name="[mathjax]/"+t.replace(/^\.\//,"")),e.addExtension&&!t.match(/\.[^\/]+$/)&&(e.name+=".js"),!0},prefix:function(e){for(var n;(n=e.name.match(/^\[([^\]]*)\]/))&&t.CONFIG.paths.hasOwnProperty(n[1]);)e.name=t.CONFIG.paths[n[1]]+e.name.substr(n[0].length);return!0}},(l=u=t.Loader||(t.Loader={})).ready=function(){for(var e,t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];0===n.length&&(n=Array.from(s.Package.packages.keys()));var o=[];try{for(var i=a(n),c=i.next();!c.done;c=i.next()){var u=c.value,l=s.Package.packages.get(u)||new s.Package(u,!0);o.push(l.promise)}}catch(d){e={error:d}}finally{try{c&&!c.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return Promise.all(o)},l.load=function(){for(var e,n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(0===r.length)return Promise.resolve();var i=[];try{for(var c=a(r),u=c.next();!u.done;u=c.next()){var l=u.value,d=s.Package.packages.get(l);d||(d=new s.Package(l)).provides(t.CONFIG.provides[l]),d.checkNoLoad(),i.push(d.promise)}}catch(f){e={error:f}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return s.Package.loadAll(),Promise.all(i)},l.preLoad=function(){for(var e,n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];try{for(var i=a(r),c=i.next();!c.done;c=i.next()){var u=c.value,l=s.Package.packages.get(u);l||(l=new s.Package(u,!0)).provides(t.CONFIG.provides[u]),l.loaded()}}catch(d){e={error:d}}finally{try{c&&!c.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},l.defaultReady=function(){void 0!==t.MathJax.startup&&t.MathJax.config.startup.ready()},l.getRoot=function(){var e="//../../es5";if("undefined"!=typeof document){var t=document.currentScript||document.getElementById("MathJax-script");t&&(e=t.src.replace(/\/[^\/]*$/,""))}return e},l.pathFilters=new d.FunctionList,l.pathFilters.add(t.PathFilters.source,0),l.pathFilters.add(t.PathFilters.normalize,10),l.pathFilters.add(t.PathFilters.prefix,20),t.MathJax=i.MathJax,void 0===t.MathJax.loader){i.combineDefaults(t.MathJax.config,"loader",{paths:{mathjax:u.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:u.defaultReady.bind(u),failed:function(e){return console.log("MathJax("+(e.package||"?")+"): "+e.message)},require:null,pathFilters:[]}),i.combineWithMathJax({loader:u});try{for(var f=a(t.MathJax.config.loader.pathFilters),h=f.next();!h.done;h=f.next()){var p=h.value;Array.isArray(p)?u.pathFilters.add(p[0],p[1]):u.pathFilters.add(p)}}catch(x){r={error:x}}finally{try{h&&!h.done&&(o=f.return)&&o.call(f)}finally{if(r)throw r.error}}}t.CONFIG=t.MathJax.config.loader},265:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},s=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Package=t.PackageError=void 0;var c=n(235),u=function(e){function t(t,n){var r=e.call(this,t)||this;return r.package=n,r}return o(t,e),t}(Error);t.PackageError=u;var l=function(){function e(t,n){void 0===n&&(n=!1),this.isLoaded=!1,this.isLoading=!1,this.hasFailed=!1,this.dependents=[],this.dependencies=[],this.dependencyCount=0,this.provided=[],this.name=t,this.noLoad=n,e.packages.set(t,this),this.promise=this.makePromise(this.makeDependencies())}return Object.defineProperty(e.prototype,"canLoad",{get:function(){return 0===this.dependencyCount&&!this.noLoad&&!this.isLoading&&!this.hasFailed},enumerable:!1,configurable:!0}),e.resolvePath=function(e,t){void 0===t&&(t=!0);var n={name:e,original:e,addExtension:t};return c.Loader.pathFilters.execute(n),n.name},e.loadAll=function(){var e,t;try{for(var n=a(this.packages.values()),r=n.next();!r.done;r=n.next()){var o=r.value;o.canLoad&&o.load()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},e.prototype.makeDependencies=function(){var t,n,r=[],o=e.packages,u=this.noLoad,l=this.name,d=[];c.CONFIG.dependencies.hasOwnProperty(l)?d.push.apply(d,s([],i(c.CONFIG.dependencies[l]))):"core"!==l&&d.push("core");try{for(var f=a(d),h=f.next();!h.done;h=f.next()){var p=h.value,x=o.get(p)||new e(p,u);0>this.dependencies.indexOf(x)&&(x.addDependent(this,u),this.dependencies.push(x),x.isLoaded||(this.dependencyCount++,r.push(x.promise)))}}catch(y){t={error:y}}finally{try{h&&!h.done&&(n=f.return)&&n.call(f)}finally{if(t)throw t.error}}return r},e.prototype.makePromise=function(e){var t=this,n=new Promise(function(e,n){t.resolve=e,t.reject=n}),r=c.CONFIG[this.name]||{};return r.ready&&(n=n.then(function(e){return r.ready(t.name)})),e.length&&(e.push(n),n=Promise.all(e).then(function(e){return e.join(", ")})),r.failed&&n.catch(function(e){return r.failed(new u(e,t.name))}),n},e.prototype.load=function(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=!0;var t=e.resolvePath(this.name);c.CONFIG.require?this.loadCustom(t):this.loadScript(t)}},e.prototype.loadCustom=function(e){var t=this;try{var n=c.CONFIG.require(e);n instanceof Promise?n.then(function(){return t.checkLoad()}).catch(function(n){return t.failed("Can't load \""+e+'"\n'+n.message.trim())}):this.checkLoad()}catch(r){this.failed(r.message)}},e.prototype.loadScript=function(e){var t=this,n=document.createElement("script");n.src=e,n.charset="UTF-8",n.onload=function(e){return t.checkLoad()},n.onerror=function(n){return t.failed("Can't load \""+e+'"')},document.head.appendChild(n)},e.prototype.loaded=function(){var e,t,n,r;this.isLoaded=!0,this.isLoading=!1;try{for(var o=a(this.dependents),i=o.next();!i.done;i=o.next())i.value.requirementSatisfied()}catch(s){e={error:s}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}try{for(var c=a(this.provided),u=c.next();!u.done;u=c.next())u.value.loaded()}catch(l){n={error:l}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}this.resolve(this.name)},e.prototype.failed=function(e){this.hasFailed=!0,this.isLoading=!1,this.reject(new u(e,this.name))},e.prototype.checkLoad=function(){var e=this;((c.CONFIG[this.name]||{}).checkReady||function(){return Promise.resolve()})().then(function(){return e.loaded()}).catch(function(t){return e.failed(t)})},e.prototype.requirementSatisfied=function(){this.dependencyCount&&(this.dependencyCount--,this.canLoad&&this.load())},e.prototype.provides=function(t){var n,r;void 0===t&&(t=[]);try{for(var o=a(t),i=o.next();!i.done;i=o.next()){var s=i.value,u=e.packages.get(s);u||(c.CONFIG.dependencies[s]||(c.CONFIG.dependencies[s]=[]),c.CONFIG.dependencies[s].push(s),(u=new e(s,!0)).isLoading=!0),this.provided.push(u)}}catch(l){n={error:l}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.addDependent=function(e,t){this.dependents.push(e),t||this.checkNoLoad()},e.prototype.checkNoLoad=function(){var e,t;if(this.noLoad){this.noLoad=!1;try{for(var n=a(this.dependencies),r=n.next();!r.done;r=n.next())r.value.checkNoLoad()}catch(o){e={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}}},e.packages=new Map,e}();t.Package=l},525:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},s=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.FunctionList=void 0;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.execute=function(){for(var e,t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{for(var o=a(this),c=o.next();!c.done;c=o.next()){var u=c.value,l=u.item.apply(u,s([],i(n)));if(!1===l)return!1}}catch(d){e={error:d}}finally{try{c&&!c.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return!0},t.prototype.asyncExecute=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=-1,r=this.items;return new Promise(function(t,o){!function a(){for(var c;++n<r.length;){var u=(c=r[n]).item.apply(c,s([],i(e)));if(u instanceof Promise)return void u.then(a).catch(function(e){return o(e)});if(!1===u)return void t(!1)}t(!0)}()})},t}(n(666).PrioritizedList);t.FunctionList=c},666:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PrioritizedList=void 0;var n=function(){function e(){this.items=[],this.items=[]}return e.prototype[Symbol.iterator]=function(){var e=0,t=this.items;return{next:function(){return{value:t[e++],done:e>t.length}}}},e.prototype.add=function(t,n){void 0===n&&(n=e.DEFAULTPRIORITY);var r=this.items.length;do r--;while(r>=0&&n<this.items[r].priority);return this.items.splice(r+1,0,{item:t,priority:n}),t},e.prototype.remove=function(e){var t=this.items.length;do t--;while(t>=0&&this.items[t].item!==e);t>=0&&this.items.splice(t,1)},e.DEFAULTPRIORITY=5,e}();t.PrioritizedList=n}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e=n(515),t=n(235),r=n(265);(0,e.combineWithMathJax)({_:{components:{loader:t,package:r}}});var o,a={tex:"[mathjax]/input/tex/extensions",mml:"[mathjax]/input/mml/extensions",sre:"[mathjax]/sre/"+("undefined"==typeof window?"sre-node":"sre_browser")},i=["[tex]/action","[tex]/ams","[tex]/amscd","[tex]/bbox","[tex]/boldsymbol","[tex]/braket","[tex]/bussproofs","[tex]/cancel","[tex]/centernot","[tex]/color","[tex]/colortbl","[tex]/configmacros","[tex]/enclose","[tex]/extpfeil","[tex]/html","[tex]/mathtools","[tex]/mhchem","[tex]/newcommand","[tex]/noerrors","[tex]/noundefined","[tex]/physics","[tex]/require","[tex]/setoptions","[tex]/tagformat","[tex]/textcomp","[tex]/textmacros","[tex]/unicode","[tex]/verb","[tex]/cases","[tex]/empheq"],s={startup:["loader"],"input/tex":["input/tex-base","[tex]/ams","[tex]/newcommand","[tex]/noundefined","[tex]/require","[tex]/autoload","[tex]/configmacros"],"input/tex-full":["input/tex-base","[tex]/all-packages"].concat(i),"[tex]/all-packages":i};function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}(0,e.combineDefaults)(MathJax.config.loader,"dependencies",{"a11y/semantic-enrich":["input/mml","[sre]"],"a11y/complexity":["a11y/semantic-enrich"],"a11y/explorer":["a11y/semantic-enrich","ui/menu"],"[mml]/mml3":["input/mml"],"[tex]/all-packages":["input/tex-base"],"[tex]/action":["input/tex-base","[tex]/newcommand"],"[tex]/autoload":["input/tex-base","[tex]/require"],"[tex]/ams":["input/tex-base"],"[tex]/amscd":["input/tex-base"],"[tex]/bbox":["input/tex-base","[tex]/ams","[tex]/newcommand"],"[tex]/boldsymbol":["input/tex-base"],"[tex]/braket":["input/tex-base"],"[tex]/bussproofs":["input/tex-base"],"[tex]/cancel":["input/tex-base","[tex]/enclose"],"[tex]/centernot":["input/tex-base"],"[tex]/color":["input/tex-base"],"[tex]/colorv2":["input/tex-base"],"[tex]/colortbl":["input/tex-base","[tex]/color"],"[tex]/configmacros":["input/tex-base","[tex]/newcommand"],"[tex]/enclose":["input/tex-base"],"[tex]/extpfeil":["input/tex-base","[tex]/newcommand","[tex]/ams"],"[tex]/html":["input/tex-base"],"[tex]/mathtools":["input/tex-base","[tex]/newcommand","[tex]/ams"],"[tex]/mhchem":["input/tex-base","[tex]/ams"],"[tex]/newcommand":["input/tex-base"],"[tex]/noerrors":["input/tex-base"],"[tex]/noundefined":["input/tex-base"],"[tex]/physics":["input/tex-base"],"[tex]/require":["input/tex-base"],"[tex]/setoptions":["input/tex-base"],"[tex]/tagformat":["input/tex-base"],"[tex]/textcomp":["input/tex-base","[tex]/textmacros"],"[tex]/textmacros":["input/tex-base"],"[tex]/unicode":["input/tex-base"],"[tex]/verb":["input/tex-base"],"[tex]/cases":["[tex]/empheq"],"[tex]/empheq":["input/tex-base","[tex]/ams"]}),(0,e.combineDefaults)(MathJax.config.loader,"paths",a),(0,e.combineDefaults)(MathJax.config.loader,"provides",s),t.Loader.load.apply(t.Loader,function(e){if(Array.isArray(e))return c(e)}(o=t.CONFIG.load)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).then(function(){return t.CONFIG.ready()}).catch(function(e,n){return t.CONFIG.failed(e,n)})}()}();