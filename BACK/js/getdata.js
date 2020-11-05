let posCollection = document.querySelector('#postCollection');

function displayPost(title, author, summary, date,displayImg) {
    let div = document.createElement('div');
    div.setAttribute('class','post-item');

    let img= document.createElement('img');
    let h1= document.createElement('h1');
    let p = document.createElement('p');
    let h5 = document.createElement('h5');
    
    
    img.textContent = displayImg;
    h1.textContent = title;
    p.textContent = author + ' - ' + date;
    h5.textContent = summary; 

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h5);

    posCollection.appendChild(div);
    
}


db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displayPost(
            doc.data().imageURL,
            doc.data().title,
            doc.data().author,
            doc.data().summary,
            doc.data().date
            
        );
    });
});