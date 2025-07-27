document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE DIGITAÇÃO ---
    const elementoTexto = document.getElementById('texto-digitado');
    if (elementoTexto) {
        const textoParaDigitar = "Desenvolvedor Full-stack";
        const velocidadeDigitacao = 120;
        let indiceCaractere = 0;

        function digitar() {
            if (indiceCaractere < textoParaDigitar.length) {
                elementoTexto.textContent += textoParaDigitar.charAt(indiceCaractere);
                indiceCaractere++;
                setTimeout(digitar, velocidadeDigitacao);
            } else {
                elementoTexto.classList.add('digitacao-finalizada');
            }
        }
        digitar();
    }


    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    function toggleMenu() {
        navLinks.classList.toggle('mobile-menu-open');
        const icon = hamburgerBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', toggleMenu);

        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('mobile-menu-open')) {
                    toggleMenu();
                }
            });
        });
    }


    // --- LÓGICA DA TROCA DE TEMA (LIGHT/DARK) ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Função que verifica e aplica o tema salvo no carregamento da página
    function applyInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            // Garante o tema escuro como padrão
            body.classList.remove('light-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Evento de clique no botão de tema
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        let currentTheme = 'dark'; // Padrão
        
        if (body.classList.contains('light-theme')) {
            currentTheme = 'light';
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        
        // Salva a escolha no armazenamento local do navegador
        localStorage.setItem('theme', currentTheme);
    });

    // Aplica o tema assim que a página carrega
    applyInitialTheme();

});