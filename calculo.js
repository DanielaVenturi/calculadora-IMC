function calculo() {
    let nome = document.getElementById('Nome').value;
    let peso = document.getElementById('Peso').value;
    let altura = document.getElementById('Altura').value;

    const imc = peso / (altura * altura)


    if (imc < 15.99) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é:Magreza Grave, vá ao medico!`;
        document.getElementById("resultado").className = "magreza-grave";
    } else if (imc >= 16 && imc <= 16.99) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Magreza Moderada, nada mal <br>, sempre devemos ter uma alimentação <br>saudavel independente do peso, mas<br> sempre tenha acompanhamento médico`;
        document.getElementById("resultado").className = "magreza-moderada";
    } else if (imc >= 17 && imc <= 18.5) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Magreza Leve, , nada mal <br>, sempre devemos ter uma alimentação <br>saudavel independente do peso, mas<br> sempre tenha acompanhamento médico"`;
        document.getElementById("resultado").className = "magreza-leve";
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Saudável, parabens, continue assim.`;
        document.getElementById("resultado").className = "saudável";
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Sobrepeso, nada mal <br>, sempre devemos ter uma alimentação <br>saudavel independente do peso, mas<br> sempre tenha acompanhamento médico!`;
        document.getElementById("resultado").className = "sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Obesidade Grau 1,vá ao medico!`;
        document.getElementById("resultado").className = "obesidade-grau-1";
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Obesidade Grau 2 (Severa), vá ao medico!`;
        document.getElementById("resultado").className = "obesidade-grau-2";
    } else if (imc >= 40) {
        document.getElementById("resultado").innerHTML = `${nome} seu imc é: Obesidade Grau 3 (Mórbida), vá ao medico!`;
        document.getElementById("resultado").className = "Obesidade-Grau-3";
    }

}