window.RevealCustomControls=window.RevealCustomControls||{id:"RevealCustomControls",init:function(a){initCustomControls(a)}};const initCustomControls=function(g){var a=g.getConfig().customcontrols||{},h=a.collapseIcon||'<i class="fa fa-chevron-down"></i>',i=a.expandIcon||'<i class="fa fa-chevron-up"></i>',j=a.tooltip||"Show/hide controls",c=document.createElement("div");c.id="customcontrols";var d=document.createElement("button");d.title=j,d.innerHTML='<span id="collapse-customcontrols">'+h+'</span><span id="expand-customcontrols">'+i+"</span>",d.addEventListener("click",function(b){var a=document.querySelector("div#customcontrols");a.classList.contains("collapsed")?a.classList.remove("collapsed"):a.classList.add("collapsed")}),c.appendChild(d);for(var f=document.createElement("ul"),b=0;b<a.controls.length;b++){var e=document.createElement("li");a.controls[b].id&&(e.id=a.controls[b].id),e.innerHTML="<button "+(a.controls[b].title?'title="'+a.controls[b].title+'" ':"")+'onclick="'+a.controls[b].action+'">'+a.controls[b].icon+"</button>",f.appendChild(e)}return c.appendChild(f),document.querySelector(".reveal").appendChild(c),document.addEventListener("resize",function(b){var a=document.querySelector("div#customcontrols.collapsed");a&&a.classList.remove("collapsed")}),this}