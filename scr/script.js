  // para rolar para o topo da página ao recarregar
    window.onload = function() {
        window.scrollTo(0, 0);
    };

    // para exibir seções com efeito de fade-in ao rolar
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            if (position < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    // para aplicar efeito de zoom e borda com sombra
    function zoomEffect(element) {
        element.style.transform = 'scale(1.05)';
        element.style.border = '2px solid white';
        element.style.boxShadow = '0px 4px 8px rgba(255, 255, 255, 0.6)';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.border = 'none';
            element.style.boxShadow = 'none';
        }, 200);
    }

    // para enviar o formulário
    function enviarFormulario() {
        let nome = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let mensagem = document.getElementById('message').value;

    // para armazenar os valores em localStorage
    localStorage.setItem("name", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("message", mensagem);
    
    // Rredirecionar para a página dados.html
    window.location.href = "dados.html"; 

    return false; // Impede o envio do formulário padrão
}
    

    // mostrar ou ocultar o botão "voltar ao topo"
    function toggleScrollToTopButton() {
        const button = document.getElementById('scrollToTop');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
          button.style.display = 'block'; // Mostra o botão se a rolagem for maior que 50px
        } else {
          button.style.display = 'none'; // Oculta o botão se não
     }
}
    window.onscroll = function() {
        toggleScrollToTopButton();
};

// clicar para rolar para o topo
    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
    });
});

    // scroll da página
    window.addEventListener('scroll', revealOnScroll);

    // rolagem suave ao clicar nos links do menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // impedir o comportamento padrão
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offset = 75; 

            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth' 
            });
        });
    });

    // efeito de fade-in ao carregar a página
    document.addEventListener('DOMContentLoaded', revealOnScroll);

    // evitar o corte na seção
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            e.preventDefault();
        });
    });
