const auth = firebase.auth();

auth.onAuthStateChanged(function(user){
    if(user){
    }else{
        location.assign('../user/login.html');
    }
})