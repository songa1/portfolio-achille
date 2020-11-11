// display queries
// const dispCont = document.querySelector(".message-con");

// function displayQuery(name, email, message){
//     let div = document.createElement('div');
//     div.setAttribute('class', 'message-con');

//     let p = document.createElement('p');
//     let h5 = document.createElement('h5');

//     p.textContent = name +' - '+ email;
//     h5.textContent = message;

//     div.appendChild(p);
//     div.appendChild(h5);
//     dispCont.appendChild(div);
// }

// db.collection('queries').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         displayQuery(
//             doc.data().name,
//             doc.data().email,
//             doc.data().message
//         );
//     });
// });


// landing page management


function landingPage(doc){
    let landingImage = document.querySelector('#landingImage');
    let landingText = document.querySelector('.landing-text');
    let myName = document.querySelector('#myName');
    let myRole = document.querySelector('#myRole');
    

    landingImage.src = doc.image;
    landingText.textContent = doc.landingtext;
    myName.textContent = doc.myName;
    myRole.textContent = doc.myRole;
    

}



db.collection('landing-page').doc('GvsCpto5XsDyhf0lpMaP').get().then((doc)=>{
    landingPage(doc.data())
})

// About me management space
function aboutme(doc){
    let heading = document.querySelector('#aboutheading');
    let about = document.querySelector('#aboutcontent');

    heading.textContent = doc.heading;
    about.textContent = doc.about;
}
db.collection('my-about').doc('aboutme').get().then((doc)=>{
    aboutme(doc.data())
})
 
function aboutInDash(doc){
    let aboutHeadingDash = document.querySelector('#aboutHeadingDash');
    let aboutContentInDash = document.querySelector('#aboutContentDash');

    let editHeading = document.querySelector('#aboutHeadingEdit');
    let editAbout = document.querySelector('#mainAboutEdit');

    aboutHeadingDash.textContent = doc.heading;
    aboutContentInDash.textContent = doc.about; 

    editHeading.value = doc.heading;
    editAbout.value = doc.about;
}

db.collection('my-about').doc('aboutme').get().then((doc)=>{
    aboutInDash(doc.data())
})



//update about
function aboutUpdate(){
    console.log('Done');
    db.collection('my-about').doc('aboutme').update({
        heading: aboutheadingEdit.value,
        about: mainaboutEdit.value
    })
}