const divHabilidades = document.getElementById("ctn-skill");
class Habilidad{
    constructor({nombre, porcentaje}){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
class HtmlHabilidad{
    constructor({habilidad}){
        this.habilidad = habilidad;
        this.htmlNombre = null;
        this.htmlBarra = null;
        this.htmlPorcentaje = null;
    }
    actualizarDivPorcentaje(){
        this.htmlPorcentaje.style.width = `${this.habilidad.porcentaje}%`;
        console.log(this.htmlPorcentaje);
    }
    getHtml(){
        const nombre = document.createElement("div");
        const barra =document.createElement("div");
        const porcentaje = document.createElement("div");
        nombre.innerHTML = this.habilidad.nombre;
        barra.className = "barra-skill";
        nombre.className = "nombre-skill";
        porcentaje.className = "porcentaje-barra-skill";
        barra.append(porcentaje);
        this.htmlNombre = nombre;
        this.htmlBarra = barra;
        this.htmlPorcentaje = porcentaje;
        return {nombre,barra};
    }
}
const infHabilidades = [
    new Habilidad({nombre:"Python",porcentaje: 80}),
    new Habilidad({nombre:"C++",porcentaje: 85}),
    new Habilidad({nombre:"Javascript",porcentaje: 90}),
    new Habilidad({nombre:"Html/Css", porcentaje: 60}),
    new Habilidad({nombre:"Base de datos",porcentaje: 70}),
    new Habilidad({nombre:"Git",porcentaje: 75}),
    new Habilidad({nombre:"Docker",porcentaje: 65}),
]
const htmlHabilidades = infHabilidades.map((hab)=>{return new HtmlHabilidad({habilidad:hab})});
htmlHabilidades.forEach((hab)=>{
    const html = hab.getHtml();
    divHabilidades.append(html.nombre);
    divHabilidades.append(html.barra);
});
htmlHabilidades.forEach((hab)=>{
    hab.actualizarDivPorcentaje();
});
console.log(infHabilidades,htmlHabilidades);