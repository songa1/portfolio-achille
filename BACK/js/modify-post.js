let posCollection = document.querySelector('#postCollection');

function displayPost(title, author, summary, date, imageURL) {
    let div = document.createElement('div');
    div.setAttribute('class','post-item');

    const img= document.createElement('img');
    let h1= document.createElement('h1');
    let p = document.createElement('p');
    let h5 = document.createElement('h5');
    //modify icons
    let edit = document.createElement('div')
    let mod = document.createElement('button');
    let del =document.createElement('button');
    let view = document.createElement('button');
    let viewcount = document.createElement('span');
    mod.innerHTML = 'Edit';
    del.innerHTML = 'Delete';
    view.innerHTML = 'Views';
    viewcount.innerHTML = 26;

    edit.appendChild(mod);
    edit.appendChild(del);
    edit.appendChild(view);
    view.appendChild(viewcount);

    // edit div to modify post
    edit.setAttribute('class', 'btnreadmore');
    edit.style.marginBottom = '0px';
    edit.style.display = 'grid';
    edit.style.gridTemplateColumns = '33% 33% 33%';
    edit.style.justifyItems = 'center';
    edit.style.gridGap = '5px';
    //edit buttons
    mod.style.width = '100%';
    view.style.width = '100%';
    del.style.width = '100%';
    mod.style.padding = '5px';
    view.style.padding = '5px';
    del.style.padding = '5px';
    viewcount.style.width = 'fit-content';
    viewcount.style.backgroundColor = 'grey';
    viewcount.style.color = '#fff';
    viewcount.style.padding = '6px';
    viewcount.style.marginLeft = '5px';
    mod.style.backgroundColor = '#0AA7E7';
    del.style.backgroundColor = 'red';
    view.style.backgroundColor = '#0F734A';
    mod.style.outline = 'none';
    view.style.outline = 'none';
    del.style.outline= 'none';
    mod.style.borderRadius = '10px';
    view.style.borderRadius = '10px';
    del.style.borderRadius = '10px';
    mod.style.color = 'white';
    view.style.color = 'white';
    del.style.color = 'white';
    mod.style.border = '1px solid #008073';
    view.style.border = '1px solid #008073';
    del.style.border = '1px solid #008073';





    img.src = imageURL;
    h1.textContent = title;
    p.textContent = author + ' - ' + date;
    h5.textContent = summary;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(edit);


    posCollection.appendChild(div);

    // Delete data





    
}


db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displayPost(
            
            doc.data().title,
            doc.data().author,
            doc.data().summary,
            doc.data().date,
            doc.data().imageURL
            
        );
    });
});