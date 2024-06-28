// Função para calcular e armazenar os dados
function calcular() {
    const area = parseFloat(document.getElementById('inputarea').value);
    const material = document.getElementById('material').value;

    const dadosTelhado = {
        area: area,
        material: material
    };

    localStorage.setItem('dadosTelhado', JSON.stringify(dadosTelhado));
    calcularTelhasNecessarias();
}

// Função para carregar os dados do localStorage e preencher o formulário
window.onload = function() {
    const dadosTelhado = JSON.parse(localStorage.getItem('dadosTelhado'));
    if (dadosTelhado) {
        document.getElementById('inputarea').value = dadosTelhado.area;
        document.getElementById('material').value = dadosTelhado.material;
       
    }
};

// Função para calcular a quantidade de telhas necessárias
function calcularTelhasNecessarias() {
    const area = parseFloat(document.getElementById('inputarea').value);
    const material = document.getElementById('material').value;
    let telhasNecessarias;

    switch (material) {
        case 'Fibrocimento':
            telhasNecessarias = Math.ceil(area / 0.5); // Considerando telhas de 0.5 m²
            break;
        case 'Cerâmica':
            telhasNecessarias = Math.ceil(area / 0.3); // Considerando telhas de 0.3 m²
            break;
        case 'PVC':
            telhasNecessarias = Math.ceil(area / 0.4); // Considerando telhas de 0.4 m²
            break;
        default:
            telhasNecessarias = 'Não foi possível calcular.';
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = `
        <p>Área do Telhado: ${area} m²</p>
        <p>Material das Telhas: ${material}</p>
        <p>Telhas Necessárias: ${telhasNecessarias}</p>
    `;
}
