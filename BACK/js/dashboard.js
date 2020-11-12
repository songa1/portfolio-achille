
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



db.collection('profile').doc('homepage').get().then((doc)=>{
    landingPage(doc.data())
})

// About me management space
function aboutme(doc){
    let heading = document.querySelector('#aboutheading');
    let about = document.querySelector('#aboutcontent');

    heading.textContent = doc.heading;
    about.textContent = doc.about;
}
db.collection('profile').doc('aboutme').get().then((doc)=>{
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

db.collection('profile').doc('aboutme').get().then((doc)=>{
    aboutInDash(doc.data())
})



//update about
function aboutUpdate(){
    console.log('Done');
    db.collection('profile').doc('aboutme').update({
        heading: aboutheadingEdit.value,
        about: mainaboutEdit.value
    })
}




// projects section manage dynamically
function projectAtHome(doc){
    let wrapper = document.querySelector('.wrapper');
    let projectdiv = document.createElement('div');
    projectdiv.setAttribute('class','wrap-item');
    let projectImage = document.createElement('img');
    let projectName = document.createElement('h1');
    let projectNameLink = document.createElement('a');
    let description = document.createElement('h5');

    projectImage.src = doc.image; 
    projectNameLink.textContent = doc.projectName;
    description.textContent = doc.description;
    
    projectNameLink.href = doc.link;

    //appending children
    projectName.appendChild(projectNameLink);

    projectdiv.appendChild(projectImage);
    projectdiv.appendChild(projectName);
    projectdiv.appendChild(description);

    wrapper.appendChild(projectdiv);

}

db.collection('projects').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            projectAtHome(change.doc.data())
        }
         
    })
  })
//show projects in dashboard
function projectInDash(doc){
    let projectImage = document.querySelector('#proImageInDash');
    let projectName = document.querySelector('#proNameDash');
    let description = document.querySelector('#descDashPro');

    projectImage.src = doc.image; 
    projectName.textContent = doc.projectName;
    description.textContent = doc.description;
    
    projectName.href = doc.link;

}

db.collection('projects').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        projectInDash(doc.data())
    })
})

// Experience section edit

function experienceAtHome(doc){
    let container = document.querySelector('#experience');
    let expertdiv = document.createElement('div');
    expertdiv.setAttribute('class','expert');
    let expertImage = document.createElement('img');
    let expertTitle = document.createElement('h1');
    let nameCont = document.createElement('div');
    let description = document.createElement('p');
    let line = document.createElement('hr');

    expertImage.src = doc.image; 
    expertTitle.textContent = doc.title;
    description.textContent = doc.description;

    //appending children
    nameCont.appendChild(expertImage);
    nameCont.appendChild(expertTitle);

    // styling name container
    nameCont.style.display = "grid";
    nameCont.style.gridTemplateColumns = "15% 80%";
    nameCont.style.alignItems = "center";

    expertImage.style.width = "100%";

    expertdiv.appendChild(nameCont);
    expertdiv.appendChild(line);
    expertdiv.appendChild(description);

    container.appendChild(expertdiv);

}

db.collection('experience').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            experienceAtHome(change.doc.data())
        }
         
    })
  })

  //show experience in dashboard
function expertInDash(doc){
    let projectImage = document.querySelector('#expertImageInDash');
    let projectName = document.querySelector('#expertNameDash');
    let description = document.querySelector('#descDashExpert');

    projectImage.src = doc.image; 
    projectName.textContent = doc.title;
    description.textContent = doc.description;
    

}
db.collection('experience').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        expertInDash(doc.data())
    })
})

                        // display queries

                        function displayQuery(doc){
                            let dispCont = document.querySelector("#cont-div4");
                            let div = document.createElement('div');
                            div.setAttribute('class', 'message-con');
                        
                            let p = document.createElement('p');
                            let h5 = document.createElement('h5');
                        
                            p.textContent = doc.name +' - '+ doc.email;
                            h5.textContent = doc.message;
                        
                            div.appendChild(p);
                            div.appendChild(h5);
                            dispCont.appendChild(div);
                        }
                        
                        // db.collection('queries').get().then((snapshot) => {
                        //     snapshot.docs.forEach(doc => {
                        //         displayQuery(
                        //             doc.data().name,
                        //             doc.data().email,
                        //             doc.data().message
                        //         );
                        //     });
                        // });
                        db.collection('queries').get().then((snapshot)=>{
                            snapshot.docs.forEach(doc => {
                                displayQuery(doc.data())
                            })
                        })