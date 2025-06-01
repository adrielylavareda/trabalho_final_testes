// 1. Função: gerar tag de identificação em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase();
  }
  
  // 2. Função: verificar se o pet pode ser adotado
  export function verificarSePodeSerAdotado(idade, porte) {
    const idadeMinima = 2;
    return idade >= idadeMinima || porte === 'M';
  }
  
  // 3. Função: calcular consumo de ração baseado no peso
  // Regra inferida: consumo = peso * 300 (ex: 14.5 * 300 = 4350)
  export function calcularConsumoDeRacao(nome, idade, peso) {
    return peso * 300;
  }
  
  // 4. Função: decidir tipo de atividade de acordo com o porte
  export function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte.toLowerCase()) {
      case 'pequeno':
        return 'brincar dentro de casa';
      case 'médio':
        return 'passeio leve no parque';
      case 'grande':
        return 'exercícios ao ar livre';
      default:
        return 'atividade indefinida';
    }
  }
  
  // 5. Função: simular busca assíncrona de um dado
  export async function buscarDadoAsync() {
    // Simular um atraso com Promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Pipoca');
      }, 100);
    });
  }
   