function calcular() {
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

    // Obter valores dos bônus
    const bonusVelocidade = parseInt(document.getElementById('bonusVelocidade').value) || 0;
    const bonusConhecimento = parseInt(document.getElementById('bonusConhecimento').value) || 0;
    const bonusVontade = parseInt(document.getElementById('bonusVontade').value) || 0;
    const bonusDefesa = parseInt(document.getElementById('bonusDefesa').value) || 0;
    const bonusForca = parseInt(document.getElementById('bonusForca').value) || 0;
    const bonusDestreza = parseInt(document.getElementById('bonusDestreza').value) || 0;
    const bonusFortitude = parseInt(document.getElementById('bonusFortitude').value) || 0;
    const bonusSorte = parseInt(document.getElementById('bonusSorte').value) || 0;
    const bonusConstituicao = parseInt(document.getElementById('bonusConstituicao').value) || 0;

    // Calculando os resultados
    const vidaComBonus = ((constituicao + bonusConstituicao) * 10) + 400;
    const danoLeve = (forca + bonusForca)+((destreza + bonusDestreza) / 2);
    const danoPesado = (forca + bonusForca) * 2 + ((destreza + bonusDestreza) / 4);
    const reducaoDano = (defesa + bonusDefesa) + ((constituicao + bonusConstituicao) / 4);
    const defender = reducaoDano * 2;
    const sanidade = Math.floor(((velocidade + conhecimento + vontade + defesa + forca + destreza + fortitude + sorte + constituicao) + (bonusVelocidade + bonusConhecimento + bonusVontade + bonusDefesa + bonusForca + bonusDestreza + bonusFortitude + bonusSorte + bonusConstituicao)) * 1.62 + 54.55) + ((conhecimento > 10 ? conhecimento - 10 : 0) + (vontade > 10 ? vontade - 10 : 0)) * 5;
    const kiMagia = (vontade + bonusVontade) * 5;

    // Exibindo os resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Resultados</h2>
        <p>Vida com bônus: ${vidaComBonus}</p>
        <p>Dano Leve: ${Math.floor(danoLeve)}</p>
        <p>Dano Pesado: ${Math.floor(danoPesado)}</p>
        <p>Redução de Dano: ${Math.floor(reducaoDano)}</p>
        <p>Defender: ${Math.floor(defender)}</p>
        <p>Sanidade: ${Math.floor(sanidade)}</p>
        <p>Ki/Magia: ${Math.floor(kiMagia)}</p>
    `;
}
