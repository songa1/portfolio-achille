// Contact form validation

    let contactForm = document.getElementById("contactForm");
    let feedName = document.querySelector('#feedback-name');
    let feedEmail = document.querySelector('#feedback-email');
    let feedMessage = document.querySelector('#feedback-message');

    feedName.style.color = 'red';
    feedEmail.style.color = 'red';
    feedMessage.style.color = 'red';
    feedName.style.display = 'none';
    feedEmail.style.display = 'none';
    feedMessage.style.display = 'none';
    

    function validateCont(){
        let nam = contactForm.name.value;
        let ema = contactForm.email.value;
        let mes = contactForm.message.value;
        let feed = document.querySelector('#feedback');

        if(nam == "") {
                feedName.style.display = 'block', 5000;
                feedEmail.style.display = 'none', 5000;
                feedMessage.style.display = 'none', 5000;
            return false;
        } else if (ema == "") {
                feedEmail.style.display = 'block', 5000;
                feedName.style.display = 'none', 5000;
                feedMessage.style.display = 'none', 5000;
            return false;
        } else if (mes == ""){
                feedMessage.style.display = 'block', 5000;
                feedName.style.display = 'none', 5000;
                feedEmail.style.display = 'none', 5000;
            return false;
        } else {
            db.collection('queries').add({
                name: contactForm.name.value,
                email: contactForm.email.value,
                message: contactForm.message.value
            });
            contactForm.reset();
            feedName.style.display = 'none';
    feedEmail.style.display = 'none';
    feedMessage.style.display = 'none';
        }

    }
        



// Login form 