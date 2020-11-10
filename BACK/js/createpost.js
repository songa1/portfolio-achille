

const addpost = document.querySelector('#add-post');

function uploadImage(){
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
            db.collection('posts').add({
                imageURL: downloadURL,
                author: addpost.author.value,
                title: addpost.title.value,
                summary: addpost.summary.value,
                date: addpost.date.value,
                content: addpost.content.value
            }).then(function(){
                alert('Successfuly uploaded!');
                addpost.reset();
                window.location.href = "../blog/modify.html";
            })
            .catch(function(error) {
                alert('Error uploading post, Try again!');
            });
            
            
        });
    });
      
};
addpost.addEventListener('submit', (e) => {
    e.preventDefault();
    uploadImage();
}, function(error){
    console.log('Error');
});
