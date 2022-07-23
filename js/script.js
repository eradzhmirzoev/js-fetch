async function gedData(url) {
    const blockOfLists = document.querySelector('.lists-of-people');
    const blockOfImgs = document.querySelector('.show-photo');
    
    //load list of albums
    const promiseGetUsers = await fetch(url);
    const responseDataUsers = await promiseGetUsers.json();

    responseDataUsers.forEach(element => {
        let li = `<li id = "${element.id}" class= "list" data-userId = "${element.userId}">${element.title}</li>`;
        blockOfLists.innerHTML += li;
    })

    //load first album
    const promiseGetPhoto = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
    const responsePhotoUsers = await promiseGetPhoto.json();

    responsePhotoUsers.forEach(element => {
        let img = `<img src="${element.thumbnailUrl}">`;
        blockOfImgs.innerHTML += img;
    })


    //choosing and loading need album
    blockOfLists.addEventListener('click', async (e) => {
        blockOfImgs.innerHTML ='';
        const promiseGetPhoto = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${+e.target.closest('li').dataset.userid}`);
        const responsePhotoUsers = await promiseGetPhoto.json();
        responsePhotoUsers.forEach(element => {
            let img = `<img src="${element.thumbnailUrl}">`;
            blockOfImgs.innerHTML += img;
        })
    })

    
}

gedData('https://jsonplaceholder.typicode.com/albums');