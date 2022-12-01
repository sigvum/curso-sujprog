function calcular(event){
    event.preventDefault();

    let alcoolinput = document.getElementById("alcool").value;
    let gasolinalinput = document.getElementById("gasolina").value;
    let calculo = (alcoolinput / gasolinalinput);
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    let alcoolSpan = document.getElementById("alcool-result");
    let gasolinaSpan = document.getElementById("gasolina-result");

    if(calculo < 0.7){
        //compensa usar álcool
        textResult.innerHTML = "Compensa usar álcool"
    }else{
        //compensa usar gasolina
        textResult.innerHTML = "Compensa usar gasolina"
    }
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinalinput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolinput;

    contentResult.classList.remove("hide")

    
}