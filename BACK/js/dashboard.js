// display queries
const dispCont = document.querySelector(".message-con");

function displayQuery(name, email, message){
    let div = document.createElement('div');
    div.setAttribute('class', 'message-con');

    let p = document.createElement('p');
    let h5 = document.createElement('h5');

    p.textContent = name +' - '+ email;
    h5.textContent = message;

    div.appendChild(p);
    div.appendChild(h5);
    dispCont.appendChild(div);
}

db.collection('queries').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displayQuery(
            doc.data().name,
            doc.data().email,
            doc.data().message
        );
    });
});