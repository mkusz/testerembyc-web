((e,t)=>{"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealSearch=t()})(this,function(){return()=>{let e,t,n,i,o,l,r;function s(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",function(t){l=13!==t.keyCode||(t.preventDefault(),(()=>{var t;l&&(""===(t=n.value)?(r&&r.remove(),i=null):(r=new c("slidecontent"),i=r.apply(t),o=0)),i&&(i.length&&i.length<=o&&(o=0),i.length>o)&&(e.slide(i[o].h,i[o].v),o++)})(),!1)},!1),d()}function a(){t||s(),t.style.display="inline",n.focus(),n.select()}function d(){t||s(),t.style.display="none",r&&r.remove()}function c(t,n){var i=document.getElementById(t)||document.body,o=n||"EM",l=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),r=["#ff6","#a0ffff","#9f9","#f99","#f6f"],s=[],a=0,d="",c=[];this.setRegex=function(e){e=e.trim(),d=new RegExp("("+e+")","i")},this.getRegex=function(){return d.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&d&&!l.test(t.nodeName)){if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++)this.hiliteWords(t.childNodes[n]);var i;if(3==t.nodeType&&(i=t.nodeValue)&&(i=d.exec(i))){for(var u=t;null!=u&&"SECTION"!=u.nodeName;)u=u.parentNode;for(var p=e.getIndices(u),h=c.length,y=!1,n=0;n<h;n++)c[n].h===p.h&&c[n].v===p.v&&(y=!0);y||c.push(p),s[i[0].toLowerCase()]||(s[i[0].toLowerCase()]=r[a++%r.length]);var g=document.createElement(o),v=(g.appendChild(document.createTextNode(i[0])),g.style.backgroundColor=s[i[0].toLowerCase()],g.style.fontStyle="inherit",g.style.color="#000",t.splitText(i.index));v.nodeValue=v.nodeValue.substring(i[0].length),t.parentNode.insertBefore(g,v)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(o);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(i),c}}return{id:"search",init:n=>{(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||s(),("inline"!==t.style.display?a:d)())},!1)},open:a}}});