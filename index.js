const hoja = document.getElementById("ctn-hoja");
const hoja1 = document.getElementById("ctn-hoja2");
const hoja2 = document.getElementById("ctn-hoja3");

const hojas = [hoja,hoja1,hoja2];

const A4 = {x: 240,y:297}
window.onresize = () =>{
    changeTamañoHoja();
    
}
const changeTamañoHoja = () =>{
    const root = document.getElementById("root");
    const width = root.offsetWidth*0.9;
    const height = root.offsetHeight*0.9;
    const proporciones = {x: width/A4.x,y:height/A4.y}
    const minProporcion  = Math.min(proporciones.x,proporciones.y)*0.95;
    hoja.style.width = `${A4.x*minProporcion}px` ;
    hoja.style.height = `${A4.y*minProporcion}px`;
    hojas.forEach((papel)=>{
      papel.style.width = `${A4.x*minProporcion}px` ;
      papel.style.height = `${A4.y*minProporcion}px`;
    })
    //Parte izquierda

}
changeTamañoHoja();
function imprimir() {
    var contenido = document.getElementById("root").innerHTML;
    var ventana = window.open("", "", "height=500,width=500");
    ventana.document.write("<html><head><title>Imprimir</title>");
    ventana.document.write('<link rel="stylesheet" href="index.css">');
    ventana.document.write("</head><body>");
    ventana.document.write(contenido);
    ventana.document.write("</body></html>");
    ventana.document.close();
    ventana.print();
  }
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
      imprimir();
    }
  });
document.addEventListener("keydown", function(event) {
  if (event.altKey && event.key === "l") {
    const allScroll = document.getElementById("ctn-todos");
    console.log(allScroll.style.overflowY);
    allScroll.style.overflowY = "hidden";
    console.log(allScroll.style.overflowY);

  }
});