const divContacto = document.getElementById("ctn-detalles-contacto");
class Contacto{
    constructor({nombre, descripcion,icon}){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.icon = icon;
    }
}
class HtmlContacto{
    constructor({contacto}){
        this.contacto = contacto;

    }
    getHtml(){
        const icon = document.createElement("div");
        const ctnHtmlDescripcion = document.createElement("div");
        const ctnNombre = document.createElement("div");
        const ctnDescipcion = document.createElement("div");
        icon.className = "icon-contact";
        ctnNombre.className = "ctn-contact-nombre";
        ctnDescipcion.className = "ctn-contact-descripcion";
        icon.innerHTML = this.contacto.icon;
        ctnDescipcion.innerHTML = this.contacto.descripcion;
        ctnNombre.innerHTML = this.contacto.nombre;
        ctnHtmlDescripcion.append(ctnNombre);
        ctnHtmlDescripcion.append(ctnDescipcion);
        return {icon,ctnHtmlDescripcion};
    }
}
const infContacto = [
    new Contacto({nombre: "Celular",descripcion: "930849692", icon:`<i class="fa-solid fa-phone"></i>`}),
    new Contacto({nombre: "Correo",descripcion: "royer.lopez.f@uni.pe", icon:`<i class="fa-sharp fa-solid fa-envelope"></i>`}),
    new Contacto({nombre: "Linkedin",descripcion: "@royer-lopez-flores", icon:`<i class="fa-brands fa-linkedin"></i>`}),
]
const HtmlContactos = infContacto.map((contacto) =>{
    return new HtmlContacto({contacto});
})
console.log(divContacto);
HtmlContactos.forEach((contacto)=>{
    const divs = contacto.getHtml();
    divContacto.append(divs.icon);
    divContacto.append(divs.ctnHtmlDescripcion);
})