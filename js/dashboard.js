
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
    let expertRole = document.createElement('p');
    let nameCont = document.createElement('div');
    let description = document.createElement('p');
    let line = document.createElement('hr');
    let period = document.createElement('p');

    expertImage.src = doc.image; 
    expertTitle.textContent = doc.title;
    description.textContent = doc.description;
    period.textContent = "16 nov 2017" + " " + "-"+ " " + "Today" + " | " + " " + "Kigali, Rwanda";

    //appending children
    nameCont.appendChild(expertImage);
    nameCont.appendChild(expertTitle);
    nameCont.appendChild(expertRole);

    period.setAttribute('class', 'expertPeriod');
    expertRole.setAttribute('class', 'expertRole');
    nameCont.setAttribute('class', 'nameCont');

    expertImage.style.width = "100%";
    expertRole.style.alignItems = "center";
    expertRole.textContent = "Full Stack web developer";

    expertdiv.appendChild(nameCont);
    expertdiv.appendChild(line);
    expertdiv.appendChild(description);
    expertdiv.appendChild(period);

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


// Skills management section 

// displaying Front End skills
function displayFront(doc){
    let mediaQuery = window.matchMedia("(max-width: 850px)");
    let frontSkills = document.querySelector('.wrapFrontskills');
    let skillCont = document.createElement('div');
    let imgFront = document.createElement('img');
    let paraFront = document.createElement('p');

    frontSkills.style.display = "grid";
    frontSkills.style.gridTemplateColumns = "13% 13% 13% 13% 13% 13%";
    frontSkills.style.gridGap = "3.6%";
    frontSkills.style.justifyContents = "center";
    imgFront.style.width = "100%";
    imgFront.src = doc.image;
    paraFront.textContent = doc.title;

    skillCont.appendChild(imgFront); 
    skillCont.appendChild(paraFront);

    if(mediaQuery.matches){
        frontSkills.style.display = "flex";
        frontSkills.style.flexWrap = "wrap";
        imgFront.style.width = "100%";
        frontSkills.style.justifyContents = "center";
    }

    frontSkills.appendChild(skillCont);
}

db.collection('skills').where('category','==','Front-End').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            displayFront(change.doc.data())
        }
         
    })
  })

// displaying back end skills
  function displayBack(doc){
    let mediaQuery = window.matchMedia("(max-width: 960px)");
    let backSkills = document.querySelector('.wrapBackskills');
    let skillCont = document.createElement('div');
    let imgBack = document.createElement('img');
    let paraBack = document.createElement('p');

    backSkills.style.display = "grid";
    backSkills.style.gridTemplateColumns = "13% 13% 13% 13% 13% 13%";
    backSkills.style.gridGap = "3.6%";
    backSkills.style.justifyContents = "center";
    imgBack.style.width = "100%";
    imgBack.src = doc.image;
    paraBack.textContent = doc.title;

    skillCont.appendChild(imgBack); 
    skillCont.appendChild(paraBack);

    if(mediaQuery.matches){
        backSkills.style.display = "flex";
        backSkills.style.flexWrap = "wrap";
        imgBack.style.width = "100%";
        backSkills.style.justifyContents = "center";
    }

    backSkills.appendChild(skillCont);
}

db.collection('skills').where('category','==','Back-End').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            displayBack(change.doc.data())
        }
         
    })
  })

  // displaying CMS skills
  function displaycms(doc){
    let mediaQuery = window.matchMedia("(max-width: 960px)");
    let cmsSkills = document.querySelector('.wrapcmsskills');
    let skillCont = document.createElement('div');
    let imgcms = document.createElement('img');
    let paracms = document.createElement('p');

    cmsSkills.style.display = "grid";
    cmsSkills.style.gridTemplateColumns = "13% 13% 13% 13% 13% 13%";
    cmsSkills.style.gridGap = "3.6%";
    cmsSkills.style.justifyContents = "center";
    imgcms.style.width = "100%";
    imgcms.src = doc.image;
    paracms.textContent = doc.title;

    skillCont.appendChild(imgcms); 
    skillCont.appendChild(paracms);

    if(mediaQuery.matches){
        cmsSkills.style.display = "flex";
        cmsSkills.style.flexWrap = "wrap";
    }

    cmsSkills.appendChild(skillCont);
}

db.collection('skills').where('category','==','CMS').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            displaycms(change.doc.data())
        }
         
    })
  })

    // displaying other skills
    function displayother(doc){
        let mediaQuery = window.matchMedia("(max-width: 960px)");
        let otherSkills = document.querySelector('.wrapotherskills');
        let skillCont = document.createElement('div');
        let imgother = document.createElement('img');
        let paraother = document.createElement('p');
    
        otherSkills.style.display = "grid";
        otherSkills.style.gridTemplateColumns = "13% 13% 13% 13% 13% 13%";
        otherSkills.style.gridGap = "3.6%";
        otherSkills.style.justifyContents = "center";
        imgother.style.width = "100%";
        imgother.src = doc.image;
        paraother.textContent = doc.title;
    
        skillCont.appendChild(imgother); 
        skillCont.appendChild(paraother);

        if(mediaQuery.matches){
            otherSkills.style.display = "flex";
            otherSkills.style.flexWrap = "wrap";
        }
    
        otherSkills.appendChild(skillCont);
    }
    
    db.collection('skills').where('category','==','Other').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if(change.type == 'added'){
                displayother(change.doc.data())
            }
             
        })
      })
