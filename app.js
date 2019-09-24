const showName = document.getElementById('show-name');
const showImg = document.getElementById('show-img');

const ApiUrl = 'http://api.tvmaze.com/'; 

let getshowData = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/1`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;

    showName.innerText = name;
    showImg.src = Img;
};

getshowData();