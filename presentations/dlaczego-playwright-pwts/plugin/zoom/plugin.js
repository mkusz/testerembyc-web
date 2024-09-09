let Plugin={id:"zoom",init:function(reveal){reveal.getRevealElement().addEventListener("mousedown",function(event){var defaultModifier=/Linux/.test(window.navigator.platform)?"ctrl":"alt",defaultModifier=(reveal.getConfig().zoomKey?reveal.getConfig().zoomKey:defaultModifier)+"Key",zoomLevel=reveal.getConfig().zoomLevel?reveal.getConfig().zoomLevel:2;event[defaultModifier]&&!reveal.isOverview()&&(event.preventDefault(),zoom.to({x:event.clientX,y:event.clientY,scale:zoomLevel,pan:!1}))})},destroy:()=>{zoom.reset()}};export default()=>Plugin;var zoom=(()=>{var level=1,mouseX=0,mouseY=0,panEngageTimeout=-1,panUpdateInterval=-1,supportsTransforms="transform"in document.body.style;function magnify(rect,scale){var origin,transform,scrollOffset=getScrollOffset();rect.width=rect.width||1,rect.height=rect.height||1,rect.x-=(window.innerWidth-rect.width*scale)/2,rect.y-=(window.innerHeight-rect.height*scale)/2,supportsTransforms?1===scale?document.body.style.transform="":(origin=scrollOffset.x+"px "+scrollOffset.y+"px",transform="translate("+-rect.x+"px,"+-rect.y+"px) scale("+scale+")",document.body.style.transformOrigin=origin,document.body.style.transform=transform):1===scale?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(scrollOffset.x+rect.x)/scale+"px",document.body.style.top=-(scrollOffset.y+rect.y)/scale+"px",document.body.style.width=100*scale+"%",document.body.style.height=100*scale+"%",document.body.style.zoom=scale),level=scale,document.documentElement.classList&&(1!==level?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function pan(){var rangeX=.12*window.innerWidth,rangeY=.12*window.innerHeight,scrollOffset=getScrollOffset();mouseY<rangeY?window.scroll(scrollOffset.x,scrollOffset.y-14/level*(1-mouseY/rangeY)):mouseY>window.innerHeight-rangeY&&window.scroll(scrollOffset.x,scrollOffset.y+14/level*(1-(window.innerHeight-mouseY)/rangeY)),mouseX<rangeX?window.scroll(scrollOffset.x-14/level*(1-mouseX/rangeX),scrollOffset.y):mouseX>window.innerWidth-rangeX&&window.scroll(scrollOffset.x+14/level*(1-(window.innerWidth-mouseX)/rangeX),scrollOffset.y)}function getScrollOffset(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return supportsTransforms&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",function(event){1!==level&&27===event.keyCode&&zoom.out()}),document.addEventListener("mousemove",function(event){1!==level&&(mouseX=event.clientX,mouseY=event.clientY)}),{to:function(options){var bounds;1!==level?zoom.out():(options.x=options.x||0,options.y=options.y||0,options.element&&(bounds=options.element.getBoundingClientRect(),options.x=bounds.left-20,options.y=bounds.top-20,options.width=bounds.width+40,options.height=bounds.height+40),void 0!==options.width&&void 0!==options.height&&(options.scale=Math.max(Math.min(window.innerWidth/options.width,window.innerHeight/options.height),1)),1<options.scale&&(options.x*=options.scale,options.y*=options.scale,magnify(options,options.scale),!1!==options.pan)&&(panEngageTimeout=setTimeout(function(){panUpdateInterval=setInterval(pan,1e3/60)},800)))},out:function(){clearTimeout(panEngageTimeout),clearInterval(panUpdateInterval),magnify({x:0,y:0},1),level=1},magnify:function(options){this.to(options)},reset:function(){this.out()},zoomLevel:function(){return level}}})();