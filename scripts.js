document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    const links = document.querySelectorAll("nav ul li a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetPosition = document.getElementById(targetId).offsetTop - document.querySelector("header").offsetHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
  
      navMenu.classList.remove("active");
    }
  });
  