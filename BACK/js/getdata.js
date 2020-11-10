let postCollection = document.querySelector('#postCollection');
let postView = document.querySelector('#post-data');




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

    img.src = doc.data().imageURL;
    h1.textContent = doc.data().title;
    p.textContent = doc.data().author + ' - ' + doc.data().date;
    h5.textContent = doc.data().summary; 

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(btn);

    postCollection.appendChild(div);  
    
    
    
    // display data as single
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id'); 
        location.assign(`watch.html#${doc.id}`); 
        
    })
    
}
db.collection('posts').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            displayPost(change.doc)
        } else if (change.type == 'removed'){
            let div = document.querySelector('[data-id' + change.doc.id + ']');
            posCollection.removeChild(div);
        }
    })
})

async function getDoc(id) {
    const snapshot = await db.collection('posts').doc(id).get();
    const data = snapshot.data();
}


