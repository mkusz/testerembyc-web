function fancydates(b,c){if(0!==b)for(var d=document.querySelectorAll(".dt-published, .dt-updated, .listdate"),g=d.length,a=0;a<g;a++){var f,e=luxon.DateTime.fromISO(d[a].attributes.datetime.value);f=1===b&&c.preset?e.toLocal().toLocaleString(luxon.DateTime[c.format]):1===b?e.toLocal().toFormat(c.format):e.toRelative(),d[a].innerHTML=f}}