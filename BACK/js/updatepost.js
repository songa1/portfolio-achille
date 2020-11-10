let id = location.hash.slice(1);
let updateForm = document.querySelector('#update-post');
let cancelUpdate = document.querySelector('#cancelUpdate');
let updateButton = document.querySelector('#updateButton');

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
let mesaage = document.querySelector('#feedMessage');
updateButton.addEventListener('click', (e)=>{
    e.preventDefault();
if(confirm("Do you want to save changes?") == true){
    db.collection('posts').doc(id).update({
        author: updateForm.author.value,
        title: updateForm.title.value,
        summary: updateForm.summary.value,
        date: updateForm.date.value.split(/\n{2,}/),
        content: updateForm.content.value
    }).catch(function(error){
        console.log(error.message);
    })
    mesaage.style.display = "block";
}else {
    console.log("Changes couldn't be saved")
}
    
})

function lost(){
    mesaage.style.display = "none";
}