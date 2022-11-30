let n1nominal = document.getElementById('numnominal')
let n1real = document.getElementById('numreal')
let res1 = document.getElementById('res')   
    
function clicar(){

    if (n1nominal.value.length == 0 || n1real.value.length == 0 && n1nominal.value == 0 || n1real.value == 0) {
        window.alert ('[ERRO] Verifique os dados digitados e tente novamente!')
    }else{
        res1.innerHTML='correto'
    }




}