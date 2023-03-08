const divPersonalidad = document.getElementById("ctn-personalidad");
class Personalidad{
    constructor({nombre}){
        this.nombre = nombre;
    }
}
class HtmlPersonalidad{
    constructor({personalidad}){
        this.personalidad = personalidad;
    }
    getHtml(){
        const divPersonalidad = document.createElement("div");
        divPersonalidad.className="prolife-personalidad";
        divPersonalidad.innerHTML = this.personalidad.nombre;
        return {divPersonalidad};
    
    }
}
const infPersonalidades = [
    new Personalidad({nombre:"Creativo"}),
    new Personalidad({nombre:"Colaborativo"}),
    new Personalidad({nombre:"Polifacético"}),
    new Personalidad({nombre:"Adaptable"}),
    new Personalidad({nombre:"Práctico"}),

]
const htmlPersonalidades = infPersonalidades.map((per)=>{
    return new HtmlPersonalidad({personalidad:per});
})
htmlPersonalidades.forEach((per)=>{
    const container =  per.getHtml();
    divPersonalidad.append(container.divPersonalidad);
});