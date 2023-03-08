const hoja = document.getElementById("ctn-hoja");
console.log(hoja);
const A4 = {x: 240,y:297}
window.onresize = () =>{
    changeTamañoHoja();
    
}
const changeTamañoHoja = () =>{
    const width = document.body.offsetWidth*0.9;
    const height = document.body.offsetHeight*0.9;
    const proporciones = {x: width/A4.x,y:height/A4.y}
    const minProporcion  = Math.min(proporciones.x,proporciones.y);
    hoja.style.width = `${A4.x*minProporcion}px` ;
    hoja.style.height = `${A4.y*minProporcion}px`;
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