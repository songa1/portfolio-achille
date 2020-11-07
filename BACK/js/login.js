const logForm = document.querySelector('#logUser');
let attempt = 2;


function logInUser(email, password) {

    let inEmail = logForm.email.value;
    let inPass = logForm.password.value;

    if (inEmail === email && inPass === password) {
        window.location.href = "profile.html";
        return false;
        
    } else {
        logForm.reset();
        let feed = document.getElementById('email-feedback');
        // feed.textContent = "Email and password doesn't match";
        // feed.style.color = 'red';
        // feed.style.textAlign = 'center';
        attempt --;
        feed.textContent('You have ' +attempt+ ' left;')

        if (attempt == 0) {
            logForm.email.disabled = 'true';
            logForm.password.disabled = 'true';
            logForm.btnlog.disabled = 'true';

        }
    }


}


logForm.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('admin').doc('admin').get().then(function(doc) {
        if (doc.exists) {
            logInUser(
                doc.data().email,
                doc.data().password
            )
        } else {
            
        }
    })
})
