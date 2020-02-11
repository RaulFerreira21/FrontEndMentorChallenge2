function valida(){
    let x = document.getElementById("email");
    let filter = /^([\w-]+(?:\.[\w-] +)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(x.value == ""){
        alert("Preencha os campos")
        x.focus()
    }else if(x.value !== filter){
        alert("Insira um email valido")
        x.focus()
    }
}
