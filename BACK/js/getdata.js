let postCollection = document.querySelector('#postCollection');




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

    function watchSingle(doc){
        let postView = document.querySelector('#post-data');
        let post = document.createElement('div');
        let postTitle = document.createElement('h1');
        let dateAuthor = document.createElement('p');
        let lin = document.createElement ('hr');
        let pictures = document.createElement('img');
        let contents = document.querySelector('p');
        
        postTitle.textContent = doc.title;
        postTitle.textContent = doc.title;
        dateAuthor.textContent = doc.date + ' ' + doc.author;
    
        pictures.src = doc.imageURL;
        contents.textContent = doc.content;
    
        post.appendChild(postTitle);
        post.appendChild(dateAuthor);
        post.appendChild(lin);
        post.appendChild(pictures);
        post.appendChild(contents);
    
        postView.appendChild(post);
    }
    
    
    
    // display data as single
    btn.addEventListener('click', function() {
            
        let docRef = db.collection('posts').doc(doc.id).get();
        docRef.then(function(doc){
            if(doc.exists){
                console.log(doc.data())
                
                watchSingle(doc.data());
                
                location.assign(`watch.html#${doc.id}`);
            }else{
                alert('Post unavailable!');
            }
        })
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


