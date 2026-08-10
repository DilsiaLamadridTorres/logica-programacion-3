
const numero = document.getElementById('numero');
const botonResultado = document.getElementById('button');
const resulta = document.getElementById('resultado');


const crearHtml = (valor)=>{
    const html = document.createElement('h1')
    html.textContent = valor;
    resulta.appendChild(html);

}


const calculaFactoriaL = (valor)=>{
    Sumatoria = 1; 

    for(let i=1;i<=valor;i++){
        Sumatoria = Sumatoria * i;
    }
    crearHtml(Sumatoria)
}



botonResultado.addEventListener('click',()=>{
    const valor = numero.value;
     calculaFactoriaL(valor)

})