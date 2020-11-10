
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
}

let id = location.hash.slice(1);

db.collection('posts').doc(id).get().then((doc)=>{
    watch(doc.data())
})