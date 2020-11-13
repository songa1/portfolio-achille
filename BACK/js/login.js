


// function logInUser(email, password) {

//     let inEmail = logForm.email.value;
//     let inPass = logForm.password.value;

//     if (inEmail != email) {
//         logForm.reset();
//         feedbackEmail();
        
//     } else if(inPass != password){
//         logForm.reset();
//         feedbackPass()
//     }else {
//         logForm.reset();
//         window.location.href = "profile.html";
//         feedbackEmailTwo();
//         feedbackPassTwo();
//         return false;
//     }


// }


// logForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('profile').doc('admin').get().then(function(doc) {
//         if (doc.exists) {
//             logInUser(
//                 doc.data().email,
//                 doc.data().password
//             )
//         } else {
            
//         }
//     })
// })

// function feedbackEmail() {
//     let feee = document.getElementById('email-feedback');

//     feee.textContent = 'Email is needed to log in! Type correct email';
//     feee.style.color = 'red';
//     feee.style.textAlign = 'center';
// } 5000;

// function feedbackPass() {
//     let feee = document.getElementById('pass-feedback');

//     feee.textContent = 'Password is not correct! Type correct password';
//     feee.style.color = 'red';
//     feee.style.textAlign = 'center';
// } 5000;

// function feedbackEmailTwo() {
//     let feee = document.getElementById('email-feedback');

//     feee.textContent = 'Email is needed to log in! Type correct email';
//     feee.style.color = 'red';
//     feee.style.textAlign = 'center';
//     feee.style.display = 'none';
// } 5000;

// function feedbackPassTwo() {
//     let feee = document.getElementById('pass-feedback');

//     feee.textContent = 'Password is not correct! Type correct password';
//     feee.style.color = 'red';
//     feee.style.textAlign = 'center';
//     feee.style.display = 'none';
// } 5000;


// log users in
const auth = firebase.auth();
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const logForm = document.querySelector('#logUser');

const loginButton = document.querySelector('#btnlog');


loginButton.addEventListener('click', (e)=>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email.value,password.value).then(cred => {
        logForm.reset();
        window.location.href = "profile.html";
    }).catch(function(){
        loginError()
    })

})



function loginError(){
    let loginErrno = document.querySelector('#loginError');
    let didd = document.createElement('div');
    let p = document.createElement('p');

    p.textContent = "Email or Password is incorrect, Try again!"
    didd.appendChild(p);

    didd.style.backgroundColor = "red";
    didd.style.padding = "20px";
    p.style.color = "#fff";
    p.style.textAlign = "center";

    loginErrno.appendChild(didd);
}