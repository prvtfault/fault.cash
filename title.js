if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){loaded();});}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){loaded();});}
function loaded(){setInterval(loop,800);}
var x=0;var titleText=["fault#1337","imagine","not", "cheating", ":D","fault.cash",];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];}

