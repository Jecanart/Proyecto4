let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit',(evento) => {
        evento.preventDefault();
        let vHora = parseFloat(document.getElementById('valorPorHora').value)
        let vInterfaz = parseFloat(document.getElementById('interfazHoras').value)
        let vHTML = parseFloat(document.getElementById('horasHTML').value)
        let vCSS = parseFloat(document.getElementById('hCSS').value)
        let vJava = parseFloat(document.getElementById('hJava').value)
        

        let valorTotal = (vHora *  vInterfaz ) + (vHora * vHTML) + (vHora * vCSS) + (vHora * vJava);

        document.getElementById('valorTotal').value= valorTotal ;
        

    })
}

funcionPredeterminada();