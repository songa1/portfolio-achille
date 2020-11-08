let posCollection = document.querySelector('#postCollection');

// function displayPost(title, author, summary, date, imageURL) {
//     let div = document.createElement('div');
//     div.setAttribute('class','post-item');
function displayPost(doc) {
    let div = document.createElement('div');
    div.setAttribute('class','post-item');
    div.setAttribute('data-id', doc.id);

    const img= document.createElement('img');
    let h1= document.createElement('h1');
    let p = document.createElement('p');
    let h5 = document.createElement('h5');
    let btn = document.createElement('button')
    btn.setAttribute('class','btnreadmore');
    btn.innerHTML ='Read more';
    btn.onclick = 'watchPost()';

    img.src = doc.data().imageURL;
    h1.textContent = doc.data().title;
    p.textContent = doc.data().author + ' - ' + doc.data().date;
    h5.textContent = doc.data().summary; 

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(btn);

    posCollection.appendChild(div);
   
    

}


// db.collection('posts').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         displayPost(
            
//             doc.data().title,
//             doc.data().author,
//             doc.data().summary,
//             doc.data().date,
//             doc.data().imageURL
            
//         );
//     });
// });
db.collection('posts').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            displayPost(change.doc
                // change.doc.data().title,
                // change.doc.data().author,
                // change.doc.data().summary,
                // change.doc.data().date,
                // change.doc.data().imageURL
                            
            )
        } else if (change.type == 'removed'){
            let div = document.querySelector('[data-id' + change.doc.id + ']');
            posCollection.removeChild(div);
        }
    })
})






