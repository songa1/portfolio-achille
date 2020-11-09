// const postData = document.querySelector('#post-data');

function watchPost(title, author, date, content, imageURL, doc) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let line = document.createElement('hr');
    let partr = document.createElement('section');
    partr.setAttribute('class', 'post-details');
    let imgTwo = document.createElement('img');
    let details = document.createElement('p');


    imgTwo.src = imageURL;
    h1.textContent = title;
    p.textContent = 'Published by ' + author + ' | ' + ' on ' + date;
    
    details.textContent = content;


    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(line);
    div.appendChild(partr);
    partr.appendChild(imgTwo);
    partr.appendChild(details);

    


    postData.appendChild(div);
}


// var docRef = db.collection("posts").doc(doc.id);

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         watchPost(
//             doc.data().title,
//             doc.data().author,
//             doc.data().date,
//             doc.data().content,
//             doc.data().imageURL
//         )
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });


