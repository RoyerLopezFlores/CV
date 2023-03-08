const divExperiencia = document.getElementById("ctn-experiencia");
class Experiencia{
    constructor({nombre,descripcion,compania,fecha}){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.compania = compania;
        this.fecha = fecha;
    }
}
class HtmlExperiencia{
    constructor({experiencia}){
        this.experiencia = experiencia;
    }
    getHtml(){
        const divNombre = document.createElement("div");
        const ctnDir = document.createElement("div");
        const ctnCompania = document.createElement("div");
        const ctnFecha = document.createElement("div");
        ctnDir.append(ctnFecha);
        ctnDir.append(ctnCompania);
        const ctnDescipcion = document.createElement("div");
        ctnDir.className = "ctn-directorio"
        ctnFecha.innerHTML = `<p>${this.experiencia.fecha}</p>`;
        ctnCompania.innerHTML = this.experiencia.compania;
        divNombre.innerHTML = this.experiencia.nombre;
        ctnDescipcion.innerHTML = this.experiencia.descripcion;
        ctnDescipcion.className = "ctn-exp-descripcion";
        ctnFecha.className = "ctn-exp-fecha";
        divNombre.className = "ctn-exp-nombre";
        return {nombre:divNombre,direccion: ctnDir,descripcion:ctnDescipcion};
    }
}
const infExperiencia = [
    new Experiencia({nombre:"Desarrollador ", compania:"Lab. SmartCity/UNI",
                    fecha:"2022-Presente", 
                    descripcion:"Se realizaron distintos trabajos como creación de dashboard(Fronted), creación de gauges para el monitoreo en tiempo real(Fronted), creación de API(Node js), creación de interfaz gráficas(Python), etc"})
]
const htmlExperiencias = infExperiencia.map((exp)=>{
    return new HtmlExperiencia({experiencia:exp});
})
htmlExperiencias.forEach((exp)=>{
    const container = exp.getHtml();
    divExperiencia.append(container.nombre);
    divExperiencia.append(container.direccion);
    divExperiencia.append(container.descripcion);
});

