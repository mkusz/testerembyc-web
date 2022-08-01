import a from"highlight.js";!function(d,c){"use strict";var b,e="hljs-ln",j="hljs-ln-code",f="hljs-ln-n",g="data-line-number",k=/\r\n|\r|\n/g;function l(e){try{var a=c.querySelectorAll("code.hljs,code.nohighlight");for(var b in a)a.hasOwnProperty(b)&&(a[b].classList.contains("nohljsln")||h(a[b],e))}catch(f){d.console.error("LineNumbers error: ",f)}}function h(a,b){"object"==typeof a&&(a.innerHTML=m(a,b))}function m(b,s){var h,l,m,a,p,c,q,r,d,t=(r=b,{singleLine:!!(h=d=(d=s)||{}).singleLine&&h.singleLine,startFrom:(l=r,a=1,isFinite((m=d).startFrom)&&(a=m.startFrom),null!==(q=(c="data-ln-start-from",(p=l).hasAttribute(c)?p.getAttribute(c):null))&&(a=function(a,b){if(!a)return b;var c=Number(a);return isFinite(c)?c:b}(q,1)),a)});return function d(e){var a,b=e.childNodes;for(var c in b)b.hasOwnProperty(c)&&0<((a=b[c]).textContent.trim().match(k)||[]).length&&(0<a.childNodes.length?d(a):n(a.parentNode))}(b),function(c,d){var a=o(c);if(""===a[a.length-1].trim()&&a.pop(),1<a.length||d.singleLine){for(var h="",b=0,k=a.length;b<k;b++)h+=i('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',["hljs-ln-line","hljs-ln-numbers",f,g,j,b+d.startFrom,0<a[b].length?a[b]:" "]);return i('<table class="{0}">{1}</table>',[e,h])}return c}(b.innerHTML,t)}function n(b){var d=b.className;if(/hljs-/.test(d)){for(var c=o(b.innerHTML),a=0,e="";a<c.length;a++)e+=i('<span class="{0}">{1}</span>\n',[d,0<c[a].length?c[a]:" "]);b.innerHTML=e.trim()}}function o(a){return 0===a.length?[]:a.split(k)}function i(a,b){return a.replace(/\{(\d+)\}/g,function(c,a){return void 0!==b[a]?b[a]:c})}a?(a.initLineNumbersOnLoad=function(a){"interactive"===c.readyState||"complete"===c.readyState?l(a):d.addEventListener("DOMContentLoaded",function(){l(a)})},a.lineNumbersBlock=h,a.lineNumbersValue=function(a,c){if("string"==typeof a){var b=document.createElement("code");return b.innerHTML=a,m(b,c)}},(b=c.createElement("style")).type="text/css",b.innerHTML=i(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[e,f,g]),c.getElementsByTagName("head")[0].appendChild(b)):d.console.error("highlight.js not detected!"),document.addEventListener("copy",function(b){var c,a=window.getSelection();!function(b){for(var a=b;a;){if(a.className&& -1!==a.className.indexOf("hljs-ln-code"))return 1;a=a.parentNode}}(a.anchorNode)||(c=-1!==window.navigator.userAgent.indexOf("Edge")?function(k){for(var l=k.toString(),a=k.anchorNode;"TD"!==a.nodeName;)a=a.parentNode;for(var d=k.focusNode;"TD"!==d.nodeName;)d=d.parentNode;var e=parseInt(a.dataset.lineNumber),f=parseInt(d.dataset.lineNumber);if(e==f)return l;var h,b=a.textContent,c=d.textContent;for(f<e&&(h=e,e=f,f=h,h=b,b=c,c=h);0!==l.indexOf(b);)b=b.slice(1);for(;-1===l.lastIndexOf(c);)c=c.slice(0,-1);for(var n=b,o=function(b){for(var a=b;"TABLE"!==a.nodeName;)a=a.parentNode;return a}(a),m=e+1;m<f;++m){var p=i('.{0}[{1}="{2}"]',[j,g,m]);n+="\n"+o.querySelector(p).textContent}return n+("\n"+c)}(a):a.toString(),b.clipboardData.setData("text/plain",c),b.preventDefault())})}(window,document);/*!
 * reveal.js plugin that adds syntax highlight support.
 */ let Plugin={id:"highlight",HIGHLIGHT_STEP_DELIMITER:"|",HIGHLIGHT_LINE_DELIMITER:",",HIGHLIGHT_LINE_RANGE_DELIMITER:"-",hljs:a,init:function(c){let b=c.getConfig().highlight||{};b.highlightOnLoad="boolean"!=typeof b.highlightOnLoad||b.highlightOnLoad,b.escapeHTML="boolean"!=typeof b.escapeHTML||b.escapeHTML,Array.from(c.getRevealElement().querySelectorAll("pre code")).forEach(c=>{c.parentNode.classList.add("code-wrapper");let d=c.querySelector('script[type="text/template"]');d&&(c.textContent=d.innerHTML),c.hasAttribute("data-trim")&&"function"==typeof c.innerHTML.trim&&(c.innerHTML=betterTrim(c)),b.escapeHTML&&!c.hasAttribute("data-noescape")&&(c.innerHTML=c.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;")),c.addEventListener("focusout",function(b){a.highlightElement(b.currentTarget)},!1)}),"function"==typeof b.beforeHighlight&&b.beforeHighlight(a),b.highlightOnLoad&&Array.from(c.getRevealElement().querySelectorAll("pre code")).forEach(a=>{Plugin.highlightBlock(a)}),c.on("pdf-ready",function(){[].slice.call(c.getRevealElement().querySelectorAll("pre code[data-line-numbers].current-fragment")).forEach(function(a){Plugin.scrollHighlightedLineIntoView(a,{},!0)})})},highlightBlock:function(b){if(a.highlightElement(b),0!==b.innerHTML.trim().length&&b.hasAttribute("data-line-numbers")){a.lineNumbersBlock(b,{singleLine:!0});var g={currentBlock:b},c=Plugin.deserializeHighlightSteps(b.getAttribute("data-line-numbers"));if(c.length>1){var d=parseInt(b.getAttribute("data-fragment-index"),10);("number"!=typeof d||isNaN(d))&&(d=null),c.slice(1).forEach(function(c){var a=b.cloneNode(!0);a.setAttribute("data-line-numbers",Plugin.serializeHighlightSteps([c])),a.classList.add("fragment"),b.parentNode.appendChild(a),Plugin.highlightLines(a),"number"==typeof d?(a.setAttribute("data-fragment-index",d),d+=1):a.removeAttribute("data-fragment-index"),a.addEventListener("visible",Plugin.scrollHighlightedLineIntoView.bind(Plugin,a,g)),a.addEventListener("hidden",Plugin.scrollHighlightedLineIntoView.bind(Plugin,a.previousSibling,g))}),b.removeAttribute("data-fragment-index"),b.setAttribute("data-line-numbers",Plugin.serializeHighlightSteps([c[0]]))}var e="function"==typeof b.closest?b.closest("section:not(.stack)"):null;if(e){var f=function(){Plugin.scrollHighlightedLineIntoView(b,g,!0),e.removeEventListener("visible",f)};e.addEventListener("visible",f)}Plugin.highlightLines(b)}},scrollHighlightedLineIntoView:function(a,d,h){cancelAnimationFrame(d.animationFrameID),d.currentBlock&&(a.scrollTop=d.currentBlock.scrollTop),d.currentBlock=a;var e=this.getHighlightedLineBounds(a),b=a.offsetHeight,f=getComputedStyle(a);b-=parseInt(f.paddingTop)+parseInt(f.paddingBottom);var i=a.scrollTop,c=e.top+(Math.min(e.bottom-e.top,b)-b)/2,g=a.querySelector(".hljs-ln");if(g&&(c+=g.offsetTop-parseInt(f.paddingTop)),c=Math.max(Math.min(c,a.scrollHeight-b),0),!0===h||i===c)a.scrollTop=c;else{if(a.scrollHeight<=b)return;var k=0,j=function(){k=Math.min(k+.02,1),a.scrollTop=i+(c-i)*Plugin.easeInOutQuart(k),k<1&&(d.animationFrameID=requestAnimationFrame(j))};j()}},easeInOutQuart:function(a){return a<.5?8*a*a*a*a:1-8* --a*a*a*a},getHighlightedLineBounds:function(c){var a=c.querySelectorAll(".highlight-line");if(0===a.length)return{top:0,bottom:0};var d=a[0],b=a[a.length-1];return{top:d.offsetTop,bottom:b.offsetTop+b.offsetHeight}},highlightLines:function(b,c){var a=Plugin.deserializeHighlightSteps(c||b.getAttribute("data-line-numbers"));a.length&&a[0].forEach(function(a){var c=[];"number"==typeof a.end?c=[].slice.call(b.querySelectorAll("table tr:nth-child(n+"+a.start+"):nth-child(-n+"+a.end+")")):"number"==typeof a.start&&(c=[].slice.call(b.querySelectorAll("table tr:nth-child("+a.start+")"))),c.length&&(c.forEach(function(a){a.classList.add("highlight-line")}),b.classList.add("has-highlights"))})},deserializeHighlightSteps:function(a){return(a=(a=a.replace(/\s/g,"")).split(Plugin.HIGHLIGHT_STEP_DELIMITER)).map(function(a){return a.split(Plugin.HIGHLIGHT_LINE_DELIMITER).map(function(a){if(!/^[\d-]+$/.test(a))return{};var b=parseInt((a=a.split(Plugin.HIGHLIGHT_LINE_RANGE_DELIMITER))[0],10),c=parseInt(a[1],10);return isNaN(c)?{start:b}:{start:b,end:c}})})},serializeHighlightSteps:function(a){return a.map(function(a){return a.map(function(a){return"number"==typeof a.end?a.start+Plugin.HIGHLIGHT_LINE_RANGE_DELIMITER+a.end:"number"==typeof a.start?a.start:""}).join(Plugin.HIGHLIGHT_LINE_DELIMITER)}).join(Plugin.HIGHLIGHT_STEP_DELIMITER)}};function betterTrim(b){var d,a,c;function e(a){return a.replace(/^[\s\uFEFF\xA0]+/g,"")}return c=(a=(function(c){for(var b=c.split("\n"),a=0;a<b.length&&""===b[a].trim();a++)b.splice(a--,1);for(var a=b.length-1;a>=0&&""===b[a].trim();a--)b.splice(a,1);return b.join("\n")})(b.innerHTML).split("\n")).reduce(function(b,a){return a.length>0&&e(a).length>0&&b>a.length-e(a).length?a.length-e(a).length:b},Number.POSITIVE_INFINITY),a.map(function(a,b){return a.slice(c)}).join("\n")}export default(()=>Plugin)