document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.querySelector('.contactForm input[type="submit"]');
    var emailLink = document.getElementById('emailLink');
    
    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        var fullName = document.querySelector('.contactForm input[name="fullName"]').value;
        var email = document.querySelector('.contactForm input[name="email"]').value;
        var message = document.querySelector('.contactForm textarea[name="message"]').value;
        
        var subject = encodeURIComponent('Contact Form Submission');
        var body = encodeURIComponent('Name: ' + fullName + '\nEmail: ' + email + '\nMessage: ' + message);
        emailLink.href = 'mailto:awkexin24@gmail.com?subject=' + subject + '&body=' + body;
        
        emailLink.click();
    });
});

