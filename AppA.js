const show1Name = document.getElementById('show1-name');
const show1Img = document.getElementById('show1-img');
const show1Crew = document.getElementById('show1-crew');
const show1Rating = document.getElementById('show1-rating');
const show1Language = document.getElementById('show1-language');
const show1Summary = document.getElementById('show1-summary');
const show1Genres = document.getElementById('show1-genres');

const ApiUrl =  'http://api.tvmaze.com/'; 
 
let getshowData1 = async ()=>{
    const response1 = await fetch (`${ApiUrl}shows/6`);
    const show1 = await response1.json();
    console.log(show1);
    const {name, rating, summary, genres} = show1;
    const img1 = show1.image.medium;
    const response2 = await fetch(`${ApiUrl}shows/6/crew`)
    const show2 = await response2.json();
    console.log(show2);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show1Name.innerText = name;
    show1Img.src = img1;
    show1Crew.innerHTML = `Creator: ${show2[0].person.name}`;
    show1Rating.innerText = `Rating: ${rating.average}`;
    show1Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData1();

                                                                        //2

const show2Name = document.getElementById('show2-name');
const show2Img = document.getElementById('show2-img');
const show2Crew = document.getElementById('show2-crew');
const show2Rating = document.getElementById('show2-rating');
const show2Language = document.getElementById('show2-language');
const show2Summary = document.getElementById('show2-summary');
const show2Genres = document.getElementById('show2-genres');


let getshowData2 = async ()=>{
    const response3 = await fetch (`${ApiUrl}shows/2993`);
    const show3 = await response.json();
    console.log(show3);
    const {name, rating, summary, genres} = show3;
    const img1 = show3.image.medium;
    const response4 = await fetch(`${ApiUrl}shows/2993/crew`)
    const show2 = await response4.json();
    console.log(show4);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show2Name.innerText = name;
    show2Img.src = img1;
    show2Crew.innerHTML = `Creator: ${show4[3].person.name}`;
    show2Rating.innerText = `Rating: ${rating.average}`;
    show2Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres2.innerHTML += `<li>${element}</li>`;
    });
};

getshowData2();

                                                                     //3

const show3Name = document.getElementById('show3-name');
const show3Img = document.getElementById('show3-img');
const show3Crew = document.getElementById('show3-crew');
const show3Rating = document.getElementById('show3-rating');
const show3Language = document.getElementById('show3-language');
const show3Summary = document.getElementById('show3-summary');
const show3Genres = document.getElementById('show3-genres');


let getshowData3 = async ()=>{
    const response5 = await fetch (`${ApiUrl}shows/52`);
    const show5 = await response5.json();
    console.log(show5);
    const {name, rating, summary, genres} = show5;
    const img1 = show5.image.medium;
    const response6 = await fetch(`${ApiUrl}shows/52/crew`)
    const show6 = await response6.json();
    console.log(show6);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show3Name.innerText = name;
    show3Img.src = img1;
    show3Crew.innerHTML = `Creator: ${show6[0].person.name}`;
    show3Rating.innerText = `Rating: ${show5.rating.average}`;
    show3Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres3.innerHTML += `<li>${element}</li>`;
    });
}; 

getshowData3();
//                                                                        //4

const show4Name = document.getElementById('show4-name');
const show4Img = document.getElementById('show4-img');
const show4Crew = document.getElementById('show4-crew');
const show4Rating = document.getElementById('show4-rating');
const show4Language = document.getElementById('show4-language');
const show4Summary = document.getElementById('show4-summary');
const show4Genres = document.getElementById('show4-genres');


let getshowData4 = async ()=>{
    const response7 = await fetch (`${ApiUrl}shows/37854`);
    const show7 = await response7.json();
    console.log(show7);
    const {name, rating, summary, genres} = show7;
    const img1 = show5.image.medium;
    const response8 = await fetch(`${ApiUrl}shows/3754/crew`)
    const show8 = await response8.json();
    console.log(show8);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show4Name.innerText = name;
    show4Img.src = img1;
    show4Crew.innerHTML = `Creator: ${show8[8].person.name}`;
    show4Rating.innerText = `Rating: ${show7.rating.average}`;
    show4Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres4.innerHTML += `<li>${element}</li>`;
    });
};

getshowData4();

//                                                                         //5

const show5Name = document.getElementById('show5-name');
const show5Img = document.getElementById('show5-img');
const show5Crew = document.getElementById('show5-crew');
const show5Rating = document.getElementById('show5-rating');
const show5Language = document.getElementById('show5-language');
const show5Summary = document.getElementById('show5-summary');
const show5Genres = document.getElementById('show5-genres');


let getshowData5 = async ()=>{
    const response9 = await fetch (`${ApiUrl}shows/27436`);
    const show9 = await response9.json();
    console.log(show9);
    const {name, rating, summary, genres} = show5;
    const img1 = show9.image.medium;
    const response10 = await fetch(`${ApiUrl}shows/27436/crew`)
    const show10 = await response10.json();
    console.log(show10);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show5Name.innerText = name;
    show5Img.src = img1;
    show5Crew.innerHTML = `Creator: ${sho10[0].person.name}`;
    show5Rating.innerText = `Rating: ${show9.rating.average}`;
    show5Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres5.innerHTML += `<li>${element}</li>`;
    });
};

getshowData5();
                                                                        //6
 
const show6Name = document.getElementById('show6-name');
const show6Img = document.getElementById('show6-img');
const show6Crew = document.getElementById('show6-crew');
const show6Rating = document.getElementById('show6-rating');
const show6Language = document.getElementById('show6-language');
const show6Summary = document.getElementById('show6-summary');
const show6Genres = document.getElementById('show6-genres');


let getshowData6 = async ()=>{
    const response11 = await fetch (`${ApiUrl}shows/49`);
    const show11 = await response11.json();
    console.log(show11);
    const {name, rating, summary, genres} = show11;
    const img1 = show11.image.medium;
    const response12 = await fetch(`${ApiUrl}shows/49/crew`)
    const show12 = await response12.json();
    console.log(show12);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show6Name.innerText = name;
    show6Img.src = img1;
    show6Crew.innerHTML = `Creator: ${sho12[0].person.name}`;
    show6Rating.innerText = `Rating: ${show11.rating.average}`;
    show6Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres6.innerHTML += `<li>${element}</li>`;
    });
};

getshowData6();
                                                                           // 7

const show7Name = document.getElementById('show7-name');
const show7Img = document.getElementById('show7-img');
const show7Crew = document.getElementById('show7-crew');
const show7Rating = document.getElementById('show7-rating');
const show7Language = document.getElementById('show7-language');
const show7Summary = document.getElementById('show7-summary');
const show7Genres = document.getElementById('show7-genres');


let getshowData7 = async ()=>{
    const response13 = await fetch (`${ApiUrl}shows/17861`);
    const show13 = await response13.json();
    console.log(show13);
    const {name, rating, summary, genres} = show13;
    const img1 = show13.image.medium;
    const response14 = await fetch(`${ApiUrl}shows/17861/crew`)
    const show14 = await response14.json();
    console.log(show14);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show7Name.innerText = name;
    show7Img.src = img1;
    show7Crew.innerHTML = `Creator: ${sho14[0].person.name}`;
    show7Rating.innerText = `Rating: ${show13.rating.average}`;
    show7Summary.innerHTML = summary;

    genres.forEach(element => {
        showGenres7.innerHTML += `<li>${element}</li>`;
    });
};

getshowData7();
