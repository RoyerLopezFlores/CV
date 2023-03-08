const divCertificados = document.getElementById("ctn-certificados");
class Certificado{
    constructor({nombre,empresa}){
        this.nombre = nombre;
        this.empresa = empresa;
    }
}
class HtmlCertificado{
    constructor({certificado}){
        this.certificado = certificado;
    }
    getHtml(){
        const divNombre = document.createElement("div");
        const divEmpresa = document.createElement("div");
        divNombre.innerHTML = this.certificado.nombre;
        divEmpresa.innerHTML = this.certificado.empresa;
        divNombre.className = "nombre-certificado";
        divEmpresa.className = "empresa-certificado";
        return {nombre: divNombre, empresa:divEmpresa};
    }
}
const infCertificados =[
    new Certificado({nombre:"AWS Academy Graduate - AWS Academy Cloud Foundations",empresa:"AWS"}),
    new Certificado({nombre:"React: Aplicaciones en tiempo real con Socket-io",empresa:"Udemy"}),
    new Certificado({nombre:"Python3 : Análisis y visualización de datos",empresa:"Udemy"}),
    new Certificado({nombre:"Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",empresa:"Coursera"}),
    new Certificado({nombre:"Python And Flask Demostrations Practice Course",empresa:"Udemy"}),
    
]
const htmlCertificados = infCertificados.map((certificado)=>{
    return new HtmlCertificado({certificado:certificado});
})
htmlCertificados.forEach((certificado)=>{
    const containers = certificado.getHtml();
    divCertificados.append(containers.empresa);
    divCertificados.append(containers.nombre);
    
});