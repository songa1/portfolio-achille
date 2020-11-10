
// function watch(doc){
//     let postTitle = document.querySelector('.posttitle');
//     let dateOf = document.querySelector('.dateof');
//     let authorOf = document.querySelector('.authorOf');

//     postTitle.innerHTML = doc.data().title;
//     dateOf.innerHTML = doc.data().date;
//     authorOf.innerHTML = doc.data().author;

//     let pictures = document.querySelector('.article-image');
//     let contents = document.querySelector('.post-content');

//     pictures.src = doc.data().imageURL;
//     contents.textContent = doc.data().content;
// }


// db.collection('posts').orderBy('date').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         if(change.type == 'added'){
//             watch(change.doc)
//         } else if (change.type == 'removed'){
//             let div = document.querySelector('[data-id' + change.doc.id + ']');
//             posCollection.removeChild(div);
//         }
//     })
// })



