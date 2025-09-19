document.addEventListener("DOMContentLoaded", function() {
    
    const hamburguesaBtn = document.getElementById("hamburguesa");
    const navMenu = document.getElementById("nav");

    hamburguesaBtn.addEventListener('click', function() {
        
        navMenu.classList.toggle('active');
            });

});
