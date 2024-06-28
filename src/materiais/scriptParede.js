// Função para calcular e armazenar os dados
function calcular() {
    const area = parseFloat(document.getElementById('inputarea').value);
    const material = document.getElementById('material').value;

    const dadosParede = {
        area: area,
        material: material
    };

    localStorage.setItem('dadosParede', JSON.stringify(dadosParede));
    calcularMaterial();
}

// Função para carregar os dados do localStorage e preencher o formulário
window.onload = function() {
    const dadosParede = JSON.parse(localStorage.getItem('dadosParede'));
    if (dadosParede) {
        document.getElementById('inputarea').value = dadosParede.area;
        document.getElementById('material').value = dadosParede.material;
        calcularMaterial();
    }
};

// Função para calcular a quantidade de material necessário
function calcularMaterial() {
    const area = parseFloat(document.getElementById('inputarea').value);
    const material = document.getElementById('material').value;
    let quantidadeMaterial;

    switch (material) {
        case 'alvenaria':
            quantidadeMaterial = area * 12; // Exemplo: 12 tijolos por metro quadrado
            break;
        case 'drywall':
            quantidadeMaterial = area * 2; // Exemplo: 2 placas de drywall por metro quadrado
            break;
        case 'madeira':
            quantidadeMaterial = area * 0.1; // Exemplo: 0.1 metro cúbico de madeira por metro quadrado
            break;
        default:
            quantidadeMaterial = 'Não foi possível calcular.';
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = `
        <p>Área da Parede: ${area} m²</p>
        <p>Material: ${material}</p>
        <p>Quantidade Necessária: ${quantidadeMaterial}</p>
    `;
}
