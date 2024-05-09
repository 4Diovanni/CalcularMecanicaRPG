function calcularPericias() {
    // Obter valores dos atributos
    const velocidade = parseInt(document.getElementById('velocidade').value) || 0;
    const conhecimento = parseInt(document.getElementById('conhecimento').value) || 0;
    const vontade = parseInt(document.getElementById('vontade').value) || 0;
    const defesa = parseInt(document.getElementById('defesa').value) || 0;
    const forca = parseInt(document.getElementById('forca').value) || 0;
    const destreza = parseInt(document.getElementById('destreza').value) || 0;
    const fortitude = parseInt(document.getElementById('fortitude').value) || 0;
    const sorte = parseInt(document.getElementById('sorte').value) || 0;
    const constituicao = parseInt(document.getElementById('constituicao').value) || 0;

     // Função para limitar o valor máximo das perícias
     function limitarMaximo(valor, maximo) {
        return valor > maximo ? maximo : valor;
    }

    // Calculando as perícias e limitando o valor máximo a 8
    const intuicao = limitarMaximo(Math.ceil((sorte + vontade) / 15), 8);
    const sobrevivencia = limitarMaximo(Math.ceil((constituicao + sorte) / 12), 8);
    const carisma = limitarMaximo(Math.ceil((conhecimento + sorte) / 10), 8);
    const aprendizado = limitarMaximo(Math.ceil((conhecimento + fortitude) / 12), 8);
    const arcanismo = limitarMaximo(Math.ceil((conhecimento + fortitude) / 15), 8);
    const intimidacao = limitarMaximo(Math.ceil((forca + vontade) / 18), 8);
    const natureza = limitarMaximo(Math.ceil((conhecimento + sorte) / 15), 8);
    const percepcao = limitarMaximo(Math.ceil((intuicao + vontade) / 12), 8);
    const persuasao = limitarMaximo(Math.ceil((carisma + sorte) / 15), 8);
    const religiao = limitarMaximo(Math.ceil((conhecimento + vontade) / 18), 8);
    const furtividade = limitarMaximo(Math.ceil((destreza + arcanismo) / 12), 8);
    const iniciativa = limitarMaximo(Math.ceil((sorte + velocidade) / 14), 8);
    const adestrar = limitarMaximo(Math.ceil((destreza + aprendizado) / 8), 8);
    const acrobacias = limitarMaximo(Math.ceil((destreza + velocidade) / 12), 8);
    const inteligencia = limitarMaximo(Math.ceil((conhecimento + vontade) / 18), 8);


    // Exibindo os resultados das perícias
    const resultadosPericiasDiv = document.getElementById('resultadosPericias');
    resultadosPericiasDiv.innerHTML = `
        <h2>Perícias</h2>
        <p>Intuição: ${intuicao}</p>
        <p>Sobrevivência: ${sobrevivencia}</p>
        <p>Carisma: ${carisma}</p>
        <p>Aprendizado: ${aprendizado}</p>
        <p>Arcanismo: ${arcanismo}</p>
        <p>Intimidação: ${intimidacao}</p>
        <p>Natureza: ${natureza}</p>
        <p>Percepção: ${percepcao}</p>
        <p>Persuasão: ${persuasao}</p>
        <p>Religião: ${religiao}</p>
        <p>Furtividade: ${furtividade}</p>
        <p>Iniciativa: ${iniciativa}</p>
        <p>Adestrar: ${adestrar}</p>
        <p>Acrobacias: ${acrobacias}</p>
        <p>Inteligência: ${inteligencia}</p>
    `;
}
