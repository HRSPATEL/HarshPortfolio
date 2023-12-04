document.addEventListener("DOMContentLoaded", function() {
	
    var links = document.querySelectorAll('.scroll-to');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
        });
        });
  });
});

