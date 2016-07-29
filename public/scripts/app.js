
var reloj = "1";
var selector = document.getElementById("selector");
var deg_h = 0;
var deg_m = 0;
var deg_s = 0;

function start(){
  document.getElementById("selector").addEventListener("change", addActivityItem, false);
}

function addActivityItem(){
  reloj = selector.options[selector.selectedIndex].value;
  change_clock();
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
  render();  
}

function render(){
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


function change_clock(){
  var html = "";
  if (reloj === "1"){
    html = '<div class="reloj">';
    for (i = 1; i <= 12; i++) { 
      html += '<div class="numero n'+i+'">'+i+'</div>';
    }
    
    html += '<div id="_horero" class="aguja horero"></div>';
    html += '<div id="_minutero" class="aguja minutero"></div>';
    html += '<div id="_segundero" class="aguja segundero"></div>';
    html += '</div>';
  }else{
    html = '<div id="_digital" class="digital"></div>'
  }
  var viewport = document.getElementById("container");
  viewport.innerHTML = html;
}

change_clock();
window.addEventListener("load", start, false);
window.setInterval(changeTime, 1000);
