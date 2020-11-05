// Contact form validation

    let contactForm = document.getElementById("contactForm");


    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('queries').add({
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        });
        contactForm.reset();
    });



// Login form 