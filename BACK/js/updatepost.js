let id = location.hash.slice(1);
let updateForm = document.querySelector('#update-post');
let cancelUpdate = document.querySelector('#cancelUP');
let updateButton = document.querySelector('#updatepost');

function edit(doc){
    
    
    updateForm.author.value = doc.author;
    updateForm.title.value = doc.title;
    updateForm.summary.value = doc.summary;
    updateForm.date.value = doc.date;
    updateForm.content.value = doc.content;
}


db.collection('posts').doc(id).get().then((doc)=>{
    edit(doc.data())
})
function cancel(){
    if(confirm("Your post won't be updated. Are you sure?") == true){
        
    }else {
        return false;
    }
}
function update(){
    // if(confirm('Do you want to save changes?') == true){
        db.collection('posts').doc(id).update({
            author: updateForm.author.value,
            title: updateForm.title.value,
            summary: updateForm.summary.value,
            date: updateForm.date.value,
            content: updateForm.content.value
        })
        window.location.href = "modify.html";
//     }else {
//         return false;
//     }
}