const divIntereses = document.getElementById("ctn-intereses");
console.log("hola");
class Interes{
    constructor({nombre,icon}){
        this.nombre = nombre;
        this.icon = icon;
    }
}
class htmlInteres{
    constructor({interes}){
        this.interes = interes;
    }
    getHtml(){
        const icon = document.createElement("div");
        const nombre = document.createElement("div");
        const container = document.createElement("div");
        container.append(icon);
        container.append(nombre);
        icon.className = "icon-interes";
        icon.innerHTML = this.interes.icon;
        nombre.innerHTML = this.interes.nombre;
        nombre.className = "name-interes";
        return {container};
    }
}
const infIntereses = [
    new Interes({nombre: "IA", icon:`<i class="fa-solid fa-robot"></i>`}),
    new Interes({nombre: "Algoritmos", icon:`<i class="fa-solid fa-code"></i>`}),
    new Interes({nombre: "UI/UX", icon:`<i class="fa-solid fa-palette"></i>`}),
    new Interes({nombre: "IOT", icon:`<i class="fa-solid fa-wifi"></i>`}),
    new Interes({nombre: "Computer <br> Graphics", icon:`<i class="fa-solid fa-image"></i>`}),
]
const htmlIntereses = infIntereses.map((interes)=>{
    return new htmlInteres({interes:interes});
})
console.log(divIntereses);
htmlIntereses.forEach((interes)=>{
    const container = interes.getHtml();
    divIntereses.append(container.container);
})