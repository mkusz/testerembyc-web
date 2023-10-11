import{marked}from"marked";const DEFAULT_SLIDE_SEPARATOR="\r?\n---\r?\n",DEFAULT_NOTES_SEPARATOR="notes?:",DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR="\\.element\\s*?(.+?)$",DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR="\\.slide:\\s*?(\\S.+?)$",SCRIPT_END_PLACEHOLDER="__SCRIPT_END__",CODE_LINE_NUMBER_REGEX=/\[([\s\d,|-]*)\]/,HTML_ESCAPE_MAP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Plugin=()=>{let deck;function getMarkdownFromSlide(section){var text=(section.querySelector("[data-template]")||section.querySelector("script")||section).textContent,leadingWs=(text=text.replace(new RegExp(SCRIPT_END_PLACEHOLDER,"g"),"<\/script>")).match(/^\n?(\s*)/)[1].length,leadingTabs=text.match(/^\n?(\t*)/)[1].length;return 0<leadingTabs?text=text.replace(new RegExp("\\n?\\t{"+leadingTabs+"}","g"),"\n"):1<leadingWs&&(text=text.replace(new RegExp("\\n? {"+leadingWs+"}","g"),"\n")),text}function getForwardedAttributes(section){for(var attributes=section.attributes,result=[],i=0,len=attributes.length;i<len;i++){var name=attributes[i].name,value=attributes[i].value;/data\-(markdown|separator|vertical|notes)/gi.test(name)||result.push(value?name+'="'+value+'"':name)}return result.join(" ")}function getSlidifyOptions(options){return(options=options||{}).separator=options.separator||DEFAULT_SLIDE_SEPARATOR,options.notesSeparator=options.notesSeparator||DEFAULT_NOTES_SEPARATOR,options.attributes=options.attributes||"",options}function createMarkdownSlide(content,options){options=getSlidifyOptions(options);var notesMatch=content.split(new RegExp(options.notesSeparator,"mgi"));return'<script type="text/template">'+(content=(content=2===notesMatch.length?notesMatch[0]+'<aside class="notes">'+marked(notesMatch[1].trim())+"</aside>":content).replace(/<\/script>/g,SCRIPT_END_PLACEHOLDER))+"<\/script>"}function slidify(markdown,options){options=getSlidifyOptions(options);for(var matches,separatorRegex=new RegExp(options.separator+(options.verticalSeparator?"|"+options.verticalSeparator:""),"mg"),horizontalSeparatorRegex=new RegExp(options.separator),lastIndex=0,wasHorizontal=!0,sectionStack=[];matches=separatorRegex.exec(markdown);){var isHorizontal;!(isHorizontal=horizontalSeparatorRegex.test(matches[0]))&&wasHorizontal&&sectionStack.push([]),matches=markdown.substring(lastIndex,matches.index),(isHorizontal&&wasHorizontal?sectionStack:sectionStack[sectionStack.length-1]).push(matches),lastIndex=separatorRegex.lastIndex,wasHorizontal=isHorizontal}(wasHorizontal?sectionStack:sectionStack[sectionStack.length-1]).push(markdown.substring(lastIndex));for(var markdownSections="",i=0,len=sectionStack.length;i<len;i++)sectionStack[i]instanceof Array?(markdownSections+="<section "+options.attributes+">",sectionStack[i].forEach(function(child){markdownSections+="<section data-markdown>"+createMarkdownSlide(child,options)+"</section>"}),markdownSections+="</section>"):markdownSections+="<section "+options.attributes+" data-markdown>"+createMarkdownSlide(sectionStack[i],options)+"</section>";return markdownSections}function processSlides(scope){return new Promise(function(resolve){var externalPromises=[];[].slice.call(scope.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(section,i){section.getAttribute("data-markdown").length?externalPromises.push(function(section){return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest,url=section.getAttribute("data-markdown"),datacharset=section.getAttribute("data-charset");null!=datacharset&&""!=datacharset&&xhr.overrideMimeType("text/html; charset="+datacharset),xhr.onreadystatechange=(function(section,xhr){4===xhr.readyState&&(200<=xhr.status&&xhr.status<300||0===xhr.status?resolve:reject)(xhr,url)}).bind(this,section,xhr),xhr.open("GET",url,!0);try{xhr.send()}catch(e){console.warn("Failed to get the Markdown file "+url+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+e),resolve(xhr,url)}})}(section).then(function(xhr,url){section.outerHTML=slidify(xhr.responseText,{separator:section.getAttribute("data-separator"),verticalSeparator:section.getAttribute("data-separator-vertical"),notesSeparator:section.getAttribute("data-separator-notes"),attributes:getForwardedAttributes(section)})},function(xhr,url){section.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+url+" failed with HTTP status "+xhr.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):section.outerHTML=slidify(getMarkdownFromSlide(section),{separator:section.getAttribute("data-separator"),verticalSeparator:section.getAttribute("data-separator-vertical"),notesSeparator:section.getAttribute("data-separator-notes"),attributes:getForwardedAttributes(section)})}),Promise.all(externalPromises).then(resolve)})}function addAttributeInElement(node,elementTarget,separator){var matches,matchesClass,mardownClassesInElementsRegex=new RegExp(separator,"mg"),mardownClassRegex=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg"),nodeValue=node.nodeValue;if(matches=mardownClassesInElementsRegex.exec(nodeValue)){var classes=matches[1],nodeValue=nodeValue.substring(0,matches.index)+nodeValue.substring(mardownClassesInElementsRegex.lastIndex);for(node.nodeValue=nodeValue;matchesClass=mardownClassRegex.exec(classes);)matchesClass[2]?elementTarget.setAttribute(matchesClass[1],matchesClass[2]):elementTarget.setAttribute(matchesClass[3],"");return!0}return!1}function convertSlides(){var sections=deck.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(sections).forEach(function(section){section.setAttribute("data-markdown-parsed",!0);var notes=section.querySelector("aside.notes"),markdown=getMarkdownFromSlide(section);section.innerHTML=marked(markdown),function addAttributes(section,element,previousElement,separatorElementAttributes,separatorSectionAttributes){if(null!=element&&null!=element.childNodes&&0<element.childNodes.length)for(var previousParentElement=element,i=0;i<element.childNodes.length;i++){var childElement=element.childNodes[i];if(0<i)for(var j=i-1;0<=j;){var aPreviousChildElement=element.childNodes[j];if("function"==typeof aPreviousChildElement.setAttribute&&"BR"!=aPreviousChildElement.tagName){previousParentElement=aPreviousChildElement;break}--j}var parentSection=section;"section"==childElement.nodeName&&(previousParentElement=parentSection=childElement),"function"!=typeof childElement.setAttribute&&childElement.nodeType!=Node.COMMENT_NODE||addAttributes(parentSection,childElement,previousParentElement,separatorElementAttributes,separatorSectionAttributes)}element.nodeType==Node.COMMENT_NODE&&0==addAttributeInElement(element,previousElement,separatorElementAttributes)&&addAttributeInElement(element,section,separatorSectionAttributes)}(section,section,null,section.getAttribute("data-element-attributes")||section.parentNode.getAttribute("data-element-attributes")||DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR,section.getAttribute("data-attributes")||section.parentNode.getAttribute("data-attributes")||DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR),notes&&section.appendChild(notes)}),Promise.resolve()}return{id:"markdown",init:function(reveal){let{renderer,animateLists,...markedOptions}=(deck=reveal).getConfig().markdown||{};return renderer||((renderer=new marked.Renderer).code=(code,language)=>{let lineNumbers="";return CODE_LINE_NUMBER_REGEX.test(language)&&(lineNumbers=`data-line-numbers="${lineNumbers=language.match(CODE_LINE_NUMBER_REGEX)[1].trim()}"`,language=language.replace(CODE_LINE_NUMBER_REGEX,"").trim()),code=code.replace(/([&<>'"])/g,char=>HTML_ESCAPE_MAP[char]),`<pre><code ${lineNumbers} class="${language}">${code}</code></pre>`}),!0===animateLists&&(renderer.listitem=text=>`<li class="fragment">${text}</li>`),marked.setOptions({renderer:renderer,...markedOptions}),processSlides(deck.getRevealElement()).then(convertSlides)},processSlides:processSlides,convertSlides:convertSlides,slidify:slidify,marked:marked}};export default Plugin;