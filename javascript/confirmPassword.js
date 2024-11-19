function passwordConfirmation(event) {
    event.preventDefault();

    let campoPassword = document.getElementById("password");
    let valuePassword = campoPassword.value;

    let campoConfirm = document.getElementById("confirm-password");
    let valueConfirmPassword = campoConfirm.value;

    if (valuePassword === valueConfirmPassword) {
        
        window.location.href = "html/escolha.html";
        return false; 
    } else {
        document.getElementById("mensagem").innerHTML = "O campo de confirmar a senha está errado!";
        window.alert("O campo de confirmar a senha está errado!");
        return false;
    }
}