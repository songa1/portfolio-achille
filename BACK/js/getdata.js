let posCollection = document.querySelector('#postCollection');

function displayPost(title, author, summary, date, imageURL) {
    let div = document.createElement('div');
    div.setAttribute('class','post-item');

    const img= document.createElement('img');
    let h1= document.createElement('h1');
    let p = document.createElement('p');
    let h5 = document.createElement('h5');
    let btn = document.createElement('button')
    btn.setAttribute('class','btnreadmore');
    btn.innerHTML ='Read more';
    btn.onclick = 'watchPost()';

    img.src = imageURL;
    h1.textContent = title;
    p.textContent = author + ' - ' + date;
    h5.textContent = summary; 

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(btn);

    posCollection.appendChild(div);
    
}


db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displayPost(
            
            doc.data().title,
            doc.data().author,
            doc.data().summary,
            doc.data().date,
            doc.data().imageURL
            
        );
    });
});