
var reloj = "1";
var selector = document.getElementById("selector");
var deg_h = 0;
var deg_m = 0;
var deg_s = 0;

function start(){
  document.getElementById("selector").addEventListener("change", addActivityItem, false);
  
}

function addActivityItem(){
  //option is selected
  reloj = selector.options[selector.selectedIndex].value;
  render();
}



function changeTime(){
  deg_s = deg_s + 6;
  if (deg_s >= 360){
    deg_s = deg_s - 360;
    deg_m = deg_m + 6;
  }
  if (deg_m >= 360){
    deg_m = deg_m - 360;
    deg_h = deg_h + 30;
  }
  if (deg_h >= 360){
    deg_h = deg_h - 360;
  }
  if (reloj === "1"){
    
    var seg = document.getElementById("_segundero");
    seg.style.transform = "rotate(" + deg_s + "deg)";

    var min = document.getElementById("_minutero");
    min.style.transform = "rotate(" + deg_m + "deg)";

    var hor = document.getElementById("_horero");
    hor.style.transform = "rotate(" + deg_h + "deg)";
    
  }else{
    var hora = deg_h / 30;
    var min = deg_m / 6;
    var seg = deg_s / 6;

    var text = ""+hora+" : "+min+" : "+seg;
    document.getElementById("_digital").innerHTML = text;

  }
}

function render(){
  var html = "";
  if (reloj === "1"){
    html = '<div class="reloj"><div class="numero n1"><div>1</div></div><div class="numero n2"><div>2</div></div><div class="numero n3"><div>3</div></div><div class="numero n4"><div>4</div></div><div class="numero n5"><div>5</div></div><div class="numero n6"><div>6</div></div><div class="numero n7"><div>7</div></div><div class="numero n8"><div>8</div></div><div class="numero n9"><div>9</div></div><div class="numero n10"><div>10</div></div><div class="numero n11"><div>11</div></div><div class="numero n12"><div>12</div></div><div id="_horero" class="aguja horero"></div><div id="_minutero" class="aguja minutero"></div><div id="_segundero" class="aguja segundero"></div>'
  }else{
    html = '<div id="_digital" class="digital"></div>'
  }
  var viewport = document.getElementById("container");
  viewport.innerHTML = html;
}

render();
window.addEventListener("load", start, false);
window.setInterval(changeTime, 1000);
