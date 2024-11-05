let Plugin=()=>{let deck,searchElement;let searchInput,matchedSlides,currentMatchedIndex,searchboxDirty,hilitor;function render(){(searchElement=document.createElement("div")).classList.add("searchbox"),searchElement.style.position="absolute",searchElement.style.top="10px",searchElement.style.right="10px",searchElement.style.zIndex=10,searchElement.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,(searchInput=searchElement.querySelector(".searchinput")).style.width="240px",searchInput.style.fontSize="14px",searchInput.style.padding="4px 6px",searchInput.style.color="#000",searchInput.style.background="#fff",searchInput.style.borderRadius="2px",searchInput.style.border="0",searchInput.style.outline="0",searchInput.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",searchInput.style["-webkit-appearance"]="none",deck.getRevealElement().appendChild(searchElement),searchInput.addEventListener("keyup",function(event){var searchstring;searchboxDirty=13!==event.keyCode||(event.preventDefault(),searchboxDirty&&(""===(searchstring=searchInput.value)?(hilitor&&hilitor.remove(),matchedSlides=null):(hilitor=new Hilitor("slidecontent"),matchedSlides=hilitor.apply(searchstring),currentMatchedIndex=0)),matchedSlides&&(matchedSlides.length&&matchedSlides.length<=currentMatchedIndex&&(currentMatchedIndex=0),matchedSlides.length>currentMatchedIndex)&&(deck.slide(matchedSlides[currentMatchedIndex].h,matchedSlides[currentMatchedIndex].v),currentMatchedIndex++),!1)},!1),closeSearch()}function openSearch(){searchElement||render(),searchElement.style.display="inline",searchInput.focus(),searchInput.select()}function closeSearch(){searchElement||render(),searchElement.style.display="none",hilitor&&hilitor.remove()}function Hilitor(id,tag){var targetNode=document.getElementById(id)||document.body,hiliteTag=tag||"EM",skipTags=new RegExp("^(?:"+hiliteTag+"|SCRIPT|FORM)$"),colors=["#ff6","#a0ffff","#9f9","#f99","#f6f"],wordColor=[],colorIdx=0,matchRegex="",matchingSlides=[];this.setRegex=function(input){input=input.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),matchRegex=new RegExp("("+input+")","i")},this.getRegex=function(){return matchRegex.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(node){if(null!=node&&node&&matchRegex&&!skipTags.test(node.nodeName)){if(node.hasChildNodes())for(var i=0;i<node.childNodes.length;i++)this.hiliteWords(node.childNodes[i]);var nv;if(3==node.nodeType)if((nv=node.nodeValue)&&(nv=matchRegex.exec(nv))){for(var secnode=node;null!=secnode&&"SECTION"!=secnode.nodeName;)secnode=secnode.parentNode;for(var slideIndex=deck.getIndices(secnode),slidelen=matchingSlides.length,alreadyAdded=!1,i=0;i<slidelen;i++)matchingSlides[i].h===slideIndex.h&&matchingSlides[i].v===slideIndex.v&&(alreadyAdded=!0);alreadyAdded||matchingSlides.push(slideIndex),wordColor[nv[0].toLowerCase()]||(wordColor[nv[0].toLowerCase()]=colors[colorIdx++%colors.length]);var match=document.createElement(hiliteTag),after=(match.appendChild(document.createTextNode(nv[0])),match.style.backgroundColor=wordColor[nv[0].toLowerCase()],match.style.fontStyle="inherit",match.style.color="#000",node.splitText(nv.index));after.nodeValue=after.nodeValue.substring(nv[0].length),node.parentNode.insertBefore(match,after)}}},this.remove=function(){for(var el,arr=document.getElementsByTagName(hiliteTag);arr.length&&(el=arr[0]);)el.parentNode.replaceChild(el.firstChild,el)},this.apply=function(input){if(null!=input&&input)return this.remove(),this.setRegex(input),this.hiliteWords(targetNode),matchingSlides}}return{id:"search",init:reveal=>{(deck=reveal).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(event){"F"==event.key&&(event.ctrlKey||event.metaKey)&&(event.preventDefault(),searchElement||render(),("inline"!==searchElement.style.display?openSearch:closeSearch)())},!1)},open:openSearch}};export default Plugin;