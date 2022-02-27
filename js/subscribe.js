let form = document.querySelector('#subscribeForm');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').add({
        email: form.subscribe.value,
        
    });
    

});
function subs() {
document.getElementById('subscriber-email').style.display = "none";
    document.getElementById('sub-btn').style.display = "none";
    document.getElementById('thankyou').style.display = "block";

}