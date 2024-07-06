const form = document.getElementById('form'); /* pegando o formulário como um todo */

form.addEventListener('submit', function(event) { /* adicionando um escutador de eventos no formulário do tipo submit */
    event.preventDefault(); /* impedindo que a página recarregue */

    const weight = Number(document.getElementById('weight').value); /* peso */
    const height = Number(document.getElementById('height').value); /* altura */

    const bmi = (weight / (height * height)).toFixed(2); /* calculando o imc */

    const value = document.getElementById('value'); /* pegando via DOM aonde vai aparecer o imc */
    let description = ''; /* variável que vai conter a descrição */

    value.classList.add('attention'); /* deixando o imc vermelho por padrão */

    document.getElementById('infos').classList.remove('hidden'); /* pegando a sessão dos resultados via DOM e fazendo aparecer removendo a classe hidden */

    if(bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';

    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention'); /* tirando o texto vermelho */
        value.classList.add('normal'); /* única ocasião onde o texto vai ser verde */

    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';

    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';

    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';

    } else {
        description = 'Cuidado! Você está com obesidade morbida!';

    }

    value.textContent = bmi.replace('.', ','); /* colocando o valor da variável 'bmi' dentro do objeto DOM do 'value' mas antes trocando o ponto pela vírgula */

    document.getElementById('description').textContent = description; /* pegando o elemento 'description' do html via DOM e colocando o valor da variável 'description' dentro dele */
})