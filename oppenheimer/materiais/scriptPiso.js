// Função para calcular e armazenar os dados
function calcular() {
    const area = parseFloat(document.getElementById('inputarea').value);
    const material = document.getElementById('material').value;

    const dadosPiso = {
        area: area,
        material: material
    };

    localStorage.setItem('dadosPiso', JSON.stringify(dadosPiso));
    calcularMaterial();
}

// Função para carregar os dados do localStorage e preencher o formulário
window.onload = function() {
    const dadosPiso = JSON.parse(localStorage.getItem('dadosPiso'));
    if (dadosPiso) {
        document.getElementById('inputarea').value = dadosPiso.area;
        document.getElementById('material').value = dadosPiso.material;
        calcularMaterial();
    }
};

// Função para calcular a quantidade de material necessário
function calcularMaterial() {
    const area = parseFloat(document.getElementById('inputarea').value);
    const material = document.getElementById('material').value;
    let quantidadeMaterial;

    switch (material) {
        case 'ceramica':
            quantidadeMaterial = area * 10; // Exemplo: 10 peças de cerâmica por metro quadrado
            break;
        case 'laminado':
            quantidadeMaterial = area * 1.1; // Exemplo: 1.1 caixas de laminado por metro quadrado
            break;
        case 'porcelanato':
            quantidadeMaterial = area * 8; // Exemplo: 8 peças de porcelanato por metro quadrado
            break;
        default:
            quantidadeMaterial = 'Não foi possível calcular.';
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = `
        <p>Área do Piso: ${area} m²</p>
        <p>Material: ${material}</p>
        <p>Quantidade Necessária: ${quantidadeMaterial}</p>
    `;
}
