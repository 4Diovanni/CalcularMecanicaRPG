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

    // Calculando as perícias
    const intuicao = Math.ceil((sorte + vontade) / 15);
    const sobrevivencia = Math.ceil((constituicao + sorte) / 12);
    const carisma = Math.ceil((conhecimento + sorte) / 10);
    const aprendizado = Math.ceil((conhecimento + fortitude) / 12);
    const arcanismo = Math.ceil((conhecimento + fortitude) / 15);
    const intimidacao = Math.ceil((forca + vontade) / 18);
    const natureza = Math.ceil((conhecimento + sorte) / 15);
    const percepcao = Math.ceil((intuicao + vontade) / 12);
    const persuasao = Math.ceil((carisma + sorte) / 15);
    const religiao = Math.ceil((conhecimento + vontade) / 18);
    const furtividade = Math.ceil((destreza + arcanismo) / 12);
    const iniciativa = Math.ceil((sorte + velocidade) / 14);
    const adestrar = Math.ceil((destreza + aprendizado) / 8);
    const acrobacias = Math.ceil((destreza + velocidade) / 12);
    const inteligencia = Math.ceil((conhecimento + vontade) / 18);

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
