let id = location.hash.slice(1);
let updateForm = document.querySelector('#update-post');
let cancelUpdate = document.querySelector('#cancelUpdate');
let updateButton = document.querySelector('#updateButton');


function updateImage(){
    //get image
    const image = document.querySelector('#image').files[0];
    const imageName = image.name;
    //ref to root storage + image storage
    var storageRef = firebase.storage().ref('images/'+imageName);
    //upload image to selected starage
    const uploadTask = storageRef.put(image);
    //get upload progress
    uploadTask.on('state_changed', function(snapshot){
        //get progress
        const progress = snapshot.bytestransferred/snapshot.totalBytes *100;
        console.log("Upload is " +progress+ " done");
    }, function(error){
        //handle errors
        console.log(error.message);
    }, function(){
        //handle successful upload
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            db.collection('posts').doc(id).update({
                imageURL: downloadURL,
                author: updateForm.author.value,
                title: updateForm.title.value,
                summary: updateForm.summary.value,
                content: updateForm.content.value.split(/\n{2,}/),
            }).then(function(){
                alert('Successfuly updated!');
                updateForm.reset();
                window.location.href = "../blog/modify.html";
            })
            
            
        });
    });
    
};
function edit(doc){
    
    
    updateForm.author.value = doc.author;
    updateForm.title.value = doc.title;
    updateForm.summary.value = doc.summary;
    updateForm.content.value = doc.content;
}


db.collection('posts').doc(id).get().then((doc)=>{
    edit(doc.data())
})


function lost(){
    mesaage.style.display = "none";
}

            updateButton.addEventListener('click', (e)=>{
                e.preventDefault();
                if(confirm("Do you want to save changes?") == true){
                    updateImage();
                }else {
                    alert("Changes couldn't be saved! Try again");
                }
        
            })