window.RevealCustomControls=window.RevealCustomControls||{id:"RevealCustomControls",init:function(deck){initCustomControls(deck)}};let initCustomControls=function(Reveal){var config=Reveal.getConfig().customcontrols||{};if(!Reveal.isSpeakerNotes()||"false"!=new URLSearchParams(location.search).get("controls")){if(config?.controls?.length){for(var collapseIcon=config.collapseIcon||'<i class="fa fa-chevron-down"></i>',expandIcon=config.expandIcon||'<i class="fa fa-chevron-up"></i>',tooltip=config.tooltip||"Show/hide controls",div=document.createElement("div"),toggleButton=(div.id="customcontrols",document.createElement("button")),controls=(toggleButton.title=tooltip,toggleButton.innerHTML='<span id="collapse-customcontrols">'+collapseIcon+'</span><span id="expand-customcontrols">'+expandIcon+"</span>",toggleButton.addEventListener("click",function(event){var div=document.querySelector("div#customcontrols");div.classList.contains("collapsed")?div.classList.remove("collapsed"):div.classList.add("collapsed"),toggleButton.blur()}),div.appendChild(toggleButton),document.createElement("ul")),i=0;i<config.controls.length;i++){var control=document.createElement("li");config.controls[i].id&&(control.id=config.controls[i].id),control.innerHTML="<button "+(config.controls[i].title?'title="'+config.controls[i].title+'" ':"")+'onclick="'+config.controls[i].action+'">'+config.controls[i].icon+"</button>",controls.appendChild(control)}div.appendChild(controls),document.querySelector(".reveal").appendChild(div),document.addEventListener("resize",function(event){var div=document.querySelector("div#customcontrols.collapsed");div&&div.classList.remove("collapsed")})}return this}};