
const divCertificadosAll = document.getElementById("ctn_all_certificados");
const topicosDisponibles = ["Desarrollo de software","API","Lenguajes de programación"];
class CertificadoGeneral{
    constructor({nombre,empresa,topicos=[],link="",descrp = ""}){
        this.nombre = nombre;
        this.empresa = empresa;
        this.link = link;
        this.descrp = descrp;
        this.topicos = topicos.map((num)=>{ return topicosDisponibles[num]});
        
    }
}
class HtmlCertificadoGeneral{
    constructor({certificado}){
        this.certificado = certificado;
    }
    renderTopics(){
        this.certificado.topicos.forEach((topico)=>{
            const divTopic =  document.createElement("div");
            divTopic.innerHTML = topico
            
            this.divTopicos.append(divTopic);
        })
    }
    getHtml(){
        const divContenedor = document.createElement("div");
        const divTopicos  = document.createElement("div");
        const ctnTopicosEmpresa = document.createElement("div");
        const divEmpresa = document.createElement("div");
        const divNombre = document.createElement("div");
        divContenedor.append(divEmpresa);
        
        ctnTopicosEmpresa.append(divNombre);
        ctnTopicosEmpresa.append(divTopicos);
        divContenedor.append(ctnTopicosEmpresa);
        divEmpresa.innerHTML = this.certificado.empresa;
        divNombre.innerHTML = this.certificado.nombre;
        divContenedor.className = "ctn-certificados-all-item";
        divTopicos.className="ctn-topico-certificado";
        divNombre.className = "nombre-certificado";
        divEmpresa.className = "empresa-certificado";
        this.divTopicos = divTopicos;
        this.renderTopics();
        return divContenedor;
    }
}

const obtainCertificados = () =>{
    let nombres = `AWS Academy Graduate - AWS Academy Cloud Foundations|ComputerVision|DeepLerning|Codificación creativa: crea piezas visuales con JavaScript|
    Diseño, desarrollo y publicación de una página web|CIENCIA DE DATOS - MÓDULO 1|Neural Networks and Deep Learning|
    Python And Flask Demostrations Practice Course|Introduction to TensorFlow for Artificial
    Intelligence, Machine Learning and Deep Learning|React: Aplicaciones en tiempo real con Socket-io|MÁS ALLÁ DEL ÉXITO(habilidades blandas)|
    Emerging Technologies Workshop: Model Driven Programmability|Python3: Análisis y visualización de datos|
    ANÁLISIS DE DATOS CON EXCEL|Emerging Technologies Workshop - Experimenting with REST APIs using Webex Teams
    |Python For Data Data Engineering 2023 Edition| PostgreSQL. Curso completo de PostgresSQL. Aprende desde cero`.split("|");
    let empresas = ["AWS","AEPIF","AEPIF","Domestika","Domestika","UNI","Deep Learnig.AI","Udemy",
    "Deep Learnig.AI","Udemy","UNI","Cisco","Udemy","CTIC","Cisco","Udemy","Udemy"] 
    const empCer = nombres.map((nombre,i)=>{
        return {nombre:nombre,empresa:empresas[i]}
    })
    return empCer
}

empresasCertificado = obtainCertificados()
const infCertificadosAll = empresasCertificado.map((empCer)=>{
    return new CertificadoGeneral(empCer);
})
const htmlCertificadosGeneral = infCertificadosAll.map((certificado)=>{
    return new HtmlCertificadoGeneral({certificado:certificado});
})
htmlCertificadosGeneral.forEach((certificado)=>{
    const container= certificado.getHtml();
    divCertificadosAll.append(container);
    
});