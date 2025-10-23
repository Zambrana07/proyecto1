// ===== TRANSICIONES SUAVES ENTRE PÁGINAS =====

// Transición suave al cargar cualquier página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar con opacidad 0
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    
    // Aplicar transición suave después de un pequeño delay
    setTimeout(function() {
        document.body.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
});

// Función para transición suave al cambiar de página
function smoothTransition(url) {
    // Aplica la animación de salida
    document.body.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.95)';
    document.body.style.filter = 'blur(3px)';

    // Espera a que la animación termine antes de cambiar de página
    setTimeout(function () {
        window.location.href = url;
    }, 600);
}

// Función para transición suave en enlaces de navegación
function addSmoothTransitions() {
    // Aplicar a todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a[href]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar transición si no es un enlace externo o #
            if (href && href !== '#' && !href.startsWith('http')) {
                e.preventDefault();
                smoothTransition(href);
            }
        });
    });
}

// Aplicar transiciones a todos los enlaces cuando se carga la página
document.addEventListener('DOMContentLoaded', addSmoothTransitions);

// Transición suave para botones con clase 'btn'
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(button) {
        // Agregar efecto hover mejorado
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Animación de entrada para elementos con clase 'card' y 'form-container'
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .form-container');
    
    animatedElements.forEach(function(element, index) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(function() {
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100)); // Delay escalonado
    });
});
