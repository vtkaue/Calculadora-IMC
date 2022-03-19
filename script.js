// vou criar tres variaveis para poder alternar nos eus steps

const firstDiv = document.querySelector(".first-step")
const secondDiv = document.querySelector(".second-step")
const thirdDiv = document.querySelector(".third-step")

const go = (currentStep, nextStep) => {
    let dNone, dBlock;
        // CURRENT STEP //
    if(currentStep === 1){
        dNone = firstDiv
    } else if(currentStep === 2) {
        dNone = secondDiv
    } else {
        dNone = thirdDiv
    }

    dNone.style.display = 'none'
        // NEXT STEP //
    if(nextStep === 1){
        dBlock = firstDiv
    } else if(nextStep === 2) {
        dBlock = secondDiv
    } else {
        dBlock = thirdDiv
    }
    dBlock.style.display = 'block'
};
const validate = () => {
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    peso.style.border = "none"

    altura.style.border = "none"

    if(!peso.value || !altura.value){

        if(!peso.value && !altura.value){

            peso.style.border = "2px solid red"

            altura.style.border = "2px solid red"

        } else if(!peso.value){

            peso.style.border = "2px solid red"

        }else{

            altura.style.border = "2px solid red"
        }
        
    }
    else {
        let imc = peso.value / (altura.value * altura.value)
        const result = document.getElementById("resultado")
        if(imc < 18.5){
            console.log('Magreza | Obesidade: 0')
            result.style.color = "yellow"
            result.innerHTML = 'Magreza | Obesidade: 0'

        } else if(imc >= 18.5 && imc < 25){
            console.log("Normal | Obesidade: 0")
            result.style.color = "green"
            result.innerHTML = "Normal | Obesidade: 0"

        } else if(imc >=25 && imc < 30){
            console.log("Sobrepeso | Obesidade: I")
            result.style.color = "yellow"
            result.innerHTML = "Sobrepeso | Obesidade: I"

        }else if(imc >= 30 && imc < 40){
            console.log("Obesidade | Obesidade: II")
            result.style.color = "red"
            result.innerHTML = "Obesidade | Obesidade: II"

        } else {
            console.log("Obesidade grave | Obesidade: III")
            result.style.color = "black"
            result.innerHTML = "Obesidade grave | Obesidade: III"

        }
        go(2,3);
    }
}