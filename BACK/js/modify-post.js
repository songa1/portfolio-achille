let posCollection = document.querySelector('#postCollection');

function cancelOne() {
    document.getElementById('update-post').style.display = "none";
}

// title, author, summary, date, imageURL, 
function displayPost(doc) {
    let div = document.createElement('div');
    div.setAttribute('class','post-item');
    div.setAttribute('data-id', doc.id);

    const img= document.createElement('img');
    let h1= document.createElement('h1');
    let p = document.createElement('p');
    let h5 = document.createElement('h5');
    //modify icons
    let edit = document.createElement('div')
    let mod = document.createElement('button');
    let del =document.createElement('button');
    let view = document.createElement('button');
    let viewcount = document.createElement('span');
    mod.innerHTML = 'Edit';
    del.innerHTML = 'Delete';
    view.innerHTML = 'Views';
    viewcount.innerHTML = 26;

    edit.appendChild(mod);
    edit.appendChild(del);
    edit.appendChild(view);
    view.appendChild(viewcount);

    // edit div to modify post
    edit.setAttribute('class', 'btnreadmore');
    edit.style.marginBottom = '0px';
    edit.style.display = 'grid';
    edit.style.gridTemplateColumns = '33% 33% 33%';
    edit.style.justifyItems = 'center';
    edit.style.gridGap = '5px';
    //edit buttons
    mod.style.width = '100%';
    view.style.width = '100%';
    del.style.width = '100%';
    mod.style.padding = '5px';
    view.style.padding = '5px';
    del.style.padding = '5px';
    viewcount.style.width = 'fit-content';
    viewcount.style.backgroundColor = 'grey';
    viewcount.style.color = '#fff';
    viewcount.style.padding = '6px';
    viewcount.style.marginLeft = '5px';
    mod.style.backgroundColor = '#0AA7E7';
    del.style.backgroundColor = 'red';
    view.style.backgroundColor = '#0F734A';
    mod.style.outline = 'none';
    view.style.outline = 'none';
    del.style.outline= 'none';
    mod.style.borderRadius = '10px';
    view.style.borderRadius = '10px';
    del.style.borderRadius = '10px';
    mod.style.color = 'white';
    view.style.color = 'white';
    del.style.color = 'white';
    mod.style.border = '1px solid #008073';
    view.style.border = '1px solid #008073';
    del.style.border = '1px solid #008073';
    
    img.src = doc.data().imageURL;
    h1.textContent = doc.data().title;
    p.textContent = doc.data().author + ' - ' + doc.data().date;
    h5.textContent = doc.data().summary;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(edit);

    posCollection.appendChild(div);

    // Delete data

    del.addEventListener('click', function (){
        if (confirm("Do you want to delete this post?") == true) {
            db.collection("posts").doc(doc.id).delete().then(function() {
                alert('Post deleted successfuly!');
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        } else {
            alert('Post not deleted!')
        }
    })


    // update post

    mod.addEventListener('click', function(e){
        if (confirm("Do you want to modify this post?") == true) {
            document.getElementById('update-post').style.display = "block";
            
        function updating(){
            db.collection("posts").doc(doc.id).update({
                title: 'My love for you',
                author: 'Achille'
            }).then(function() {
                alert('Post updated successfully');
            }).catch(function(error) {
                console.error("Error updating document: ", error);
            });
        }
            
            let updateForm = document.querySelector('#updatepost');
            updateForm.addEventListener('click', function(){
                
                // let auth = updateForm.author.value;
                // let tit = updateForm.posttitle.value;
                // let sum = updateForm.summary.value;
                // let dat = updateForm.date.value;
                // let cont = updateForm.content.value;
                // db.collection('posts').doc(doc.id).update({
                //     author: auth,
                //     title: tit,
                //     summary: sum,
                //     date: dat,
                //     content: cont
                // }).then(function(){
                //     alert('Successfully modified post!')
                // }).catch(function(error) {
                //     console.error("Error removing document: ", error);
                // });
                
                updating();
                
            })
        } else {
            alert('Post will not be modified!')
            return false;
        }
    })
    
}
// get data with real time listener
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

db.collection('users').get().then(snap => {
    size = snap.size // will return the collection size
    let pla = document.getElementById('subcount');
    pla.textContent = size;
 });