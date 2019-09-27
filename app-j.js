const showImg = document.getElementById('show-img');
const showImg2 = document.getElementById('show-img2');
const showImg3 = document.getElementById('show-img3');
const showImg4 = document.getElementById('show-img4');
const showSeason = document.getElementById('show-seasons1');
const showSeason2 = document.getElementById('show-seasons2');
const showSeason3 = document.getElementById('show-seasons3');
const showSeason4 = document.getElementById('show-seasons4');
const showImg5 = document.getElementById('show-img5');
const showSeason5 = document.getElementById('show-seasons5');
const showImg6 = document.getElementById('show-img6');
const showSeason6 = document.getElementById('show-seasons6');
const showImg7 = document.getElementById('show-img7');
const showSeason7 = document.getElementById('show-seasons7');


const ApiUrl = 'http://api.tvmaze.com/'; 

let getshowData = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/4`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg.src = Img;
};

getshowData();

let getshowsData = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/8`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg2.src = Img;
};
getshowsData();

let getshowssData = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/9`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg3.src = Img;
};
getshowssData();

let getshowss4Data = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/77`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg4.src = Img;
};
getshowss4Data();



//primera imagen

let getshowseasonData = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/4/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {
        showSeason.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseasonData();


//segunda imagen 
let getshowseason2Data = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/8/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {
        showSeason2.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseason2Data();



//tercera imagen 
let getshowseason3Data = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/9/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {

        showSeason3.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseason3Data();

//cuarta imagen
let getshowseason4Data = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/9/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {
        showSeason4.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseason4Data();


//quinta imagen

let getshow5Data = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/54`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg5.src = Img;
};
getshow5Data();

let getshowseason5Data = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/54/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {
        showSeason5.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseason5Data();

//sexta imagen

let getshow6Data = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/11`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg6.src = Img;
};
getshow6Data();

let getshowseason6Data = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/11/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {
        showSeason6.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseason6Data();

//7 imagen


let getshow7Data = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/21`);
    const show = await respose.json();
    console.log(show);
    const {name} = show;
    const Img = show.image.medium;
    showImg7.src = Img;
};
getshow7Data();

let getshowseason7Data = async ()=>{

    let repose = await fetch(`${ApiUrl}shows/21/seasons`);
    let show = await repose.json();
    console.log(show);

    show.forEach(element => {
        showSeason7.innerHTML += `<li>Temp. ${element.number}: ${element.episodeOrder} episodios</li>`;
    });
};
getshowseason7Data();

  