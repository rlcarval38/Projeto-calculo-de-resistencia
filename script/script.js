

let n1nominal = document.getElementById('numnominal')
let n1real = document.getElementById('numreal')
let res1 = document.getElementById('res')
let cento = Number(0)  
    
function clicar(){

    if (n1nominal.value.length == 0 || n1real.value.length == 0 && n1nominal.value == 0 || n1real.value == 0) {
        window.alert ('[ERRO] Verifique os dados digitados e tente novamente!')
    }else if (n1real.value < n1nominal.value){
        cento = (((n1nominal.value/n1real.value)-1)*100)

        res1.innerHTML = `valores Digitados: Nominal: ${n1nominal.value}Ω Real ${n1real.value}Ω Resultado: ${cento.toFixed(2)} % Negativo`
    }else{
        cento = (((n1real.value/n1nominal.value)-1)*100)
        
        res1.innerHTML = `valores Digitados: Nominal: ${n1nominal.value}Ω  Real ${n1real.value}Ω Resultado: ${cento.toFixed(2)} % Positivo`
    }
        n1real.value = ``
        n1nominal.value = ``
        n1nominal.focus() 
}   
        
        
    
        



