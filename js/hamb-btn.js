document.addEventListener("DOMContentLoaded", function() {
    
    const hamburguesaBtn = document.getElementById("hamburguesa");
    const navMenu = document.getElementById("nav");

    hamburguesaBtn.addEventListener('click', function() {
        
        navMenu.classList.toggle('active');
        document.querySelector("main").style.marginTop = document.querySelector("main").style.marginTop === '208px' ? '8px' : '208px';
            });

});