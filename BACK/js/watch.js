


function watch(doc){
    let postTitle = document.querySelector('.posttitle');
    let dateOf = document.querySelector('.dateof');
    let authorOf = document.querySelector('.authorOf');
    
    postTitle.innerHTML = doc.title;
    dateOf.innerHTML = doc.date;
    authorOf.innerHTML = doc.author;

    let pictures = document.querySelector('.article-image');
    let contents = document.querySelector('.post-content');

    pictures.src = doc.imageURL;
    contents.textContent = doc.content;

    
    // retrieve comments

}

let id = location.hash.slice(1);
let commentsCount = db.collection('comments').where('postId', '==', id).length;

db.collection('posts').doc(id).get().then((doc)=>{
    watch(doc.data())
})


// submitting comments
let commentForm = document.querySelector('#newcomment');
let today = new Date();

let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
commentForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  db.collection('comments').add({
    postId: id,
    name: commentForm.name.value,
    comment: commentForm.comment.value,
    time: date
  })
  commentForm.reset();
})

// retrieving comments

let commentCollection = document.querySelector('.comment');
function displayComments(doc){
  
  
  let commentDiv = document.createElement('div');
  commentDiv.setAttribute('class', 'comment-div')
  commentDiv.setAttribute('comment-id', doc.id)
  let commenterNameTime = document.createElement('h4');
  let actualComment = document.createElement('p');
  let lin = document.createElement('hr');
  let editComment = document.createElement('div');
  let deletecomment = document.createElement('a');
  

  //edit comment
//   deletecomment.innerHTML = "Reply";
//   editComment.appendChild(deletecomment);

//   //making deletecomment function
//   deletecomment.addEventListener('click', function (){
//     if (confirm("Do you want to delete this comment?") == true) {
//         db.collection("comments").doc(doc.id).delete().then(function() {
//             alert('Successfully deleted a comment!');
//         }).catch(function(error) {
//             console.error("Error removing comment: ", error);
//         });
//     } else {
//         alert('Comment not deleted!')
//         return false;
//     }
    
// })

  //set comment values
  commenterNameTime.textContent = doc.data().name + ' - ' + doc.data().time;
  actualComment.textContent = doc.data().comment;


  // appending to main div
  commentDiv.appendChild(commenterNameTime);
  commentDiv.appendChild(lin);
  commentDiv.appendChild(actualComment);

  commentCollection.appendChild(commentDiv);


}

db.collection('comments').where('postId', '==', id).onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
      if(change.type == 'added'){
          displayComments(change.doc)
      }
       
  })
})

// db.collection('comments').where('postId', '==', id).get().then((snapshot)=>{
//   snapshot.docs.forEach(doc => {
//     displayComments(doc)
//   })
// })
// when no comment
let noComment = document.querySelector('#no-comments');
noComment.style.display = "none";