// script.js
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Alterna a classe "active" para mostrar ou esconder o menu
});
/*
<header>
        <h1>FUTTURE</h1>
        <section class="menu-icon" id="menu-icon">&#9776;</section>
        <nav class="menu" id="menu">
            <a class="active" href="#">JOGADORES</a>
            <a href="#">SELETIVAS</a>
            <a href="#">CADASTRE-SE</a>
            <a href="#">ENTRAR</a>
        </nav>
    </header>

    CSS

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

header {
    background-color: #0a1f44;
    color: #ff7f00;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 8vh;
    position: fixed;  Fixa o cabeçalho no topo 
    top: 0;  Fixa na parte superior 
    left: 0;
    right: 0;
    z-index: 1000;  Garante que o header fique acima do conteúdo 
}

header h1 {
    margin: 0;
    flex: 1;
}

header nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

header nav a {
    color: white;
    margin-left: 10px;
    text-decoration: none;
}

header nav a.active {
    color: #ff7f00;
}

header .menu-icon {
    display: none;  Inicialmente escondido 
    font-size: 30px;
    cursor: pointer;
}

    @media (max-width: 800px) {
    .container {
        flex-direction: column;
        padding-top: 8vh;
    }

    header .menu-icon {
        display: block;  Exibe o ícone hambúrguer 
    }

    header nav {
        display: none;  Esconde o menu de navegação por padrão 
        flex-direction: column;
        width: 100%;
        background-color: #0a1f44;
        position: absolute;
        top: 8vh;  Fixa abaixo do header 
        left: 0;
        padding: 10px;
    }

    header nav.active {
        display: flex;  Exibe o menu quando a classe "active" for adicionada 
    }

    header nav a {
        padding: 10px;
    }

    .content {
        margin-left: 0;  Ajusta para não sobrepor a sidebar 
    }
}
<script type="text/javascript" src="hamburguer.js"></script>
*/