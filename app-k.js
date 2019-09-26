const showName = document.getElementById('show-name');
const showImg = document.getElementById('show-img');
const showCrew = document.getElementById('show-crew');
const showRating = document.getElementById('show-rating');
const showLanguage = document.getElementById('show-language');
const showSummary = document.getElementById('show-summary');
const showGenres = document.getElementById('show-genres');

const ApiUrl = 'http://api.tvmaze.com/'; 

let getshowData = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/1788`);
    const show = await respose.json();
    console.log(show);
    const {name, rating, summary, genres} = show;
    const Img = show.image.medium;
    const respose2 = await fetch(`${ApiUrl}shows/1788/crew`);
    const show2 = await respose2.json();
    console.log(show2);
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });

    showName.innerText = name;
    showImg.src = Img;
    showCrew.innerHTML= `Creator: ${show2[0].person.name}`;
    showRating.innerText = `Rating: ${rating.average}`;
    showSummary.innerHTML = `${summary}`;
};

getshowData();

//

const show3Name = document.getElementById('show3-name');
const show3Img = document.getElementById('show3-img');
const show3Crew = document.getElementById('show3-crew');
const show3Rating = document.getElementById('show3-rating');
const show3Language = document.getElementById('show3-language');
const show3Summary = document.getElementById('show3-summary');
const show3Genres = document.getElementById('show3-genres');


let getshowData2 = async ()=> {
    const respose3 = await fetch(`${ApiUrl}shows/82`);
    const show3 = await respose3.json();
    console.log(show3);
    const {name, rating, summary, genres} = show3;
    const Img = show3.image.medium;
    const respose4 = await fetch(`${ApiUrl}shows/82/crew`);
    const show4 = await respose4.json();
    console.log(show4);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show3Genres.innerHTML += `<li>${element}</li>`;
    });

    show3Name.innerText = name;
    show3Img.src = Img;
    show3Crew.innerHTML= `Creator: ${show4[0].person.name}`;
    show3Rating.innerText = `Rating: ${rating.average}`;
    show3Summary.innerHTML = `${summary}`;
};

getshowData2();

//

const show5Name = document.getElementById('show5-name');
const show5Img = document.getElementById('show5-img');
const show5Crew = document.getElementById('show5-crew');
const show5Rating = document.getElementById('show5-rating');
const show5Language = document.getElementById('show5-language');
const show5Summary = document.getElementById('show5-summary');
const show5Genres = document.getElementById('show5-genres');


let getshowData3 = async ()=> {
    const respose5 = await fetch(`${ApiUrl}shows/133`);
    const show5 = await respose5.json();
    console.log(show5);
    const {name, rating, summary, genres} = show5;
    const Img = show5.image.medium;
    const respose6 = await fetch(`${ApiUrl}shows/133/crew`);
    const show6 = await respose6.json();
    console.log(show6);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show5Genres.innerHTML += `<li>${element}</li>`;
    });

    show5Name.innerText = name;
    show5Img.src = Img;
    show5Crew.innerHTML= `Creator: ${show6[0].person.name}`;
    show5Rating.innerText = `Rating: ${rating.average}`;
    show5Summary.innerHTML = `${summary}`;
};

getshowData3();

//

const show7Name = document.getElementById('show7-name');
const show7Img = document.getElementById('show7-img');
const show7Crew = document.getElementById('show7-crew');
const show7Rating = document.getElementById('show7-rating');
const show7Language = document.getElementById('show7-language');
const show7Summary = document.getElementById('show7-summary');
const show7Genres = document.getElementById('show7-genres');


let getshowData4 = async ()=> {
    const respose7 = await fetch(`${ApiUrl}shows/66`);
    const show7 = await respose7.json();
    console.log(show7);
    const {name, rating, summary, genres} = show7;
    const Img = show7.image.medium;
    const respose8 = await fetch(`${ApiUrl}shows/66/crew`);
    const show8 = await respose8.json();
    console.log(show8);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show7Genres.innerHTML += `<li>${element}</li>`;
    });

    show7Name.innerText = name;
    show7Img.src = Img;
    show7Crew.innerHTML= `Creator: ${show8[0].person.name}`;
    show7Rating.innerText = `Rating: ${rating.average}`;
    show7Summary.innerHTML = `${summary}`;
};

getshowData4();

//

const show9Name = document.getElementById('show9-name');
const show9Img = document.getElementById('show9-img');
const show9Crew = document.getElementById('show9-crew');
const show9Rating = document.getElementById('show9-rating');
const show9Language = document.getElementById('show9-language');
const show9Summary = document.getElementById('show9-summary');
const show9Genres = document.getElementById('show9-genres');


let getshowData5 = async ()=> {
    const respose9 = await fetch(`${ApiUrl}shows/77`);
    const show9 = await respose9.json();
    console.log(show9);
    const {name, rating, summary, genres} = show9;
    const Img = show9.image.medium;
    const respose10 = await fetch(`${ApiUrl}shows/77/crew`);
    const show10 = await respose10.json();
    console.log(show10);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show9Genres.innerHTML += `<li>${element}</li>`;
    });

    show9Name.innerText = name;
    show9Img.src = Img;
    show9Crew.innerHTML= `Creator: ${show10[0].person.name}`;
    show9Rating.innerText = `Rating: ${rating.average}`;
    show9Summary.innerHTML = `${summary}`;
};

getshowData5();

//

const show11Name = document.getElementById('show11-name');
const show11Img = document.getElementById('show11-img');
const show11Crew = document.getElementById('show11-crew');
const show11Rating = document.getElementById('show11-rating');
const show11Language = document.getElementById('show11-language');
const show11Summary = document.getElementById('sho11-summary');
const show11Genres = document.getElementById('show11-genres');


let getshowData6 = async ()=> {
    const respose11 = await fetch(`${ApiUrl}shows/30770`);
    const show11 = await respose11.json();
    console.log(show11);
    const {name, rating, summary, genres} = show11;
    const Img = show11.image.medium;
    const respose12 = await fetch(`${ApiUrl}shows/30770/crew`);
    const show12 = await respose12.json();
    console.log(show12);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show11Genres.innerHTML += `<li>${element}</li>`;
    });

    show11Name.innerText = name;
    show11Img.src = Img;
    show11Crew.innerHTML= `Creator: ${show12[0].person.name}`;
    show11Rating.innerText = `Rating: ${rating.average}`;
    show11Summary.innerHTML = `${summary}`;
};

getshowData6();

//

const show13Name = document.getElementById('show13-name');
const show13Img = document.getElementById('show13-img');
const show13Crew = document.getElementById('show13-crew');
const show13Rating = document.getElementById('show13-rating');
const show13Language = document.getElementById('show13-language');
const show13Summary = document.getElementById('show13-summary');
const show13Genres = document.getElementById('show13-genres');


let getshowData7 = async ()=> {
    const respose13 = await fetch(`${ApiUrl}shows/169`);
    const show13 = await respose13.json();
    console.log(show13);
    const {name, rating, summary, genres} = show13;
    const Img = show13.image.medium;
    const respose14 = await fetch(`${ApiUrl}shows/169/crew`);
    const show14 = await respose14.json();
    console.log(show14);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show13Genres.innerHTML += `<li>${element}</li>`;
    });

    show13Name.innerText = name;
    show13Img.src = Img;
    show13Crew.innerHTML= `Creator: ${show14[0].person.name}`;
    show13Rating.innerText = `Rating: ${rating.average}`;
    show13Summary.innerHTML = `${summary}`;
};

getshowData7();

//

const show15Name = document.getElementById('show15-name');
const show15Img = document.getElementById('show15-img');
const show15Crew = document.getElementById('show15-crew');
const show15Rating = document.getElementById('show15-rating');
const show15Language = document.getElementById('show15-language');
const show15Summary = document.getElementById('show15-summary');
const show15Genres = document.getElementById('show15-genres');


let getshowData8 = async ()=> {
    const respose15 = await fetch(`${ApiUrl}shows/170`);
    const show15 = await respose15.json();
    console.log(show15);
    const {name, rating, summary, genres} = show15;
    const Img = show15.image.medium;
    const respose16 = await fetch(`${ApiUrl}shows/170/crew`);
    const show16 = await respose16.json();
    console.log(show16);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show15Genres.innerHTML += `<li>${element}</li>`;
    });

    show15Name.innerText = name;
    show15Img.src = Img;
    show15Crew.innerHTML= `Creator: ${show16[0].person.name}`;
    show15Rating.innerText = `Rating: ${rating.average}`;
    show15Summary.innerHTML = `${summary}`;
};

getshowData8();

//

const show17Name = document.getElementById('show17-name');
const show17Img = document.getElementById('show17-img');
const show17Crew = document.getElementById('show17-crew');
const show17Rating = document.getElementById('show17-rating');
const show17Language = document.getElementById('show17-language');
const show17Summary = document.getElementById('show17-summary');
const show17Genres = document.getElementById('show17-genres');


let getshowData9 = async ()=> {
    const respose17 = await fetch(`${ApiUrl}shows/11`);
    const show17 = await respose17.json();
    console.log(show17);
    const {name, rating, summary, genres} = show17;
    const Img = show17.image.medium;
    const respose18 = await fetch(`${ApiUrl}shows/11/crew`);
    const show18 = await respose18.json();
    console.log(show18);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show17Genres.innerHTML += `<li>${element}</li>`;
    });

    show17Name.innerText = name;
    show17Img.src = Img;
    show17Crew.innerHTML= `Creator: ${show18[0].person.name}`;
    show17Rating.innerText = `Rating: ${rating.average}`;
    show17Summary.innerHTML = `${summary}`;
};

getshowData9();

//

const show19Name = document.getElementById('show19-name');
const show19Img = document.getElementById('show19-img');
const show19Crew = document.getElementById('show19-crew');
const show19Rating = document.getElementById('show19-rating');
const show19Language = document.getElementById('show19-language');
const show19Summary = document.getElementById('show19-summary');
const show19Genres = document.getElementById('show19-genres');


let getshowData10 = async ()=> {
    const respose19 = await fetch(`${ApiUrl}shows/1369`);
    const show19 = await respose19.json();
    console.log(show19);
    const {name, rating, summary, genres} = show19;
    const Img = show19.image.medium;
    const respose20 = await fetch(`${ApiUrl}shows/1369/crew`);
    const show20 = await respose20.json();
    console.log(show20);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show19Genres.innerHTML += `<li>${element}</li>`;
    });

    show19Name.innerText = name;
    show19Img.src = Img;
    show19Crew.innerHTML= `Creator: ${show20[0].person.name}`;
    show19Rating.innerText = `Rating: ${rating.average}`;
    show19Summary.innerHTML = `${summary}`;
};

getshowData10();

//

const show21Name = document.getElementById('show21-name');
const show21Img = document.getElementById('show21-img');
const show21Crew = document.getElementById('show21-crew');
const show21Rating = document.getElementById('show21-rating');
const show21Language = document.getElementById('show21-language');
const show21Summary = document.getElementById('show21-summary');
const show21Genres = document.getElementById('show21-genres');


let getshowData11 = async ()=> {
    const respose21 = await fetch(`${ApiUrl}shows/5773`);
    const show21 = await respose21.json();
    console.log(show21);
    const {name, rating, summary, genres} = show21;
    const Img = show21.image.medium;
    const respose22 = await fetch(`${ApiUrl}shows/5773/crew`);
    const show22 = await respose22.json();
    console.log(show22);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show21Genres.innerHTML += `<li>${element}</li>`;
    });

    show21Name.innerText = name;
    show21Img.src = Img;
    show21Crew.innerHTML= `Creator: ${show22[0].person.name}`;
    show21Rating.innerText = `Rating: ${rating.average}`;
    show21Summary.innerHTML = `${summary}`;
};

getshowData11();

//

const show23Name = document.getElementById('show23-name');
const show23Img = document.getElementById('show23-img');
const show23Crew = document.getElementById('show23-crew');
const show23Rating = document.getElementById('show23-rating');
const show23Language = document.getElementById('show23-language');
const show23Summary = document.getElementById('show23-summary');
const show23Genres = document.getElementById('show23-genres');


let getshowData12 = async ()=> {
    const respose23 = await fetch(`${ApiUrl}shows/2158`);
    const show23 = await respose23.json();
    console.log(show23);
    const {name, rating, summary, genres} = show23;
    const Img = show23.image.medium;
    const respose24 = await fetch(`${ApiUrl}shows/2158/crew`);
    const show24 = await respose24.json();
    console.log(show24);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show23Genres.innerHTML += `<li>${element}</li>`;
    });

    show23Name.innerText = name;
    show23Img.src = Img;
    show23Crew.innerHTML= `Creator: ${show24[0].person.name}`;
    show23Rating.innerText = `Rating: ${rating.average}`;
    show23Summary.innerHTML = `${summary}`;
};

getshowData12();

//

const show25Name = document.getElementById('show25-name');
const show25Img = document.getElementById('show25-img');
const show25Crew = document.getElementById('show25-crew');
const show25Rating = document.getElementById('show25-rating');
const show25Language = document.getElementById('show25-language');
const show25Summary = document.getElementById('show25-summary');
const show25Genres = document.getElementById('show25-genres');


let getshowData13 = async ()=> {
    const respose25 = await fetch(`${ApiUrl}shows/1363`);
    const show25 = await respose25.json();
    console.log(show25);
    const {name, rating, summary, genres} = show25;
    const Img = show25.image.medium;
    const respose26 = await fetch(`${ApiUrl}shows/1363/crew`);
    const show26 = await respose26.json();
    console.log(show26);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show25Genres.innerHTML += `<li>${element}</li>`;
    });

    show25Name.innerText = name;
    show25Img.src = Img;
    show25Crew.innerHTML= `Creator: ${show26[0].person.name}`;
    show25Rating.innerText = `Rating: ${rating.average}`;
    show25Summary.innerHTML = `${summary}`;
};

getshowData13();

//

const show27Name = document.getElementById('show27-name');
const show27Img = document.getElementById('show27-img');
const show27Crew = document.getElementById('show27-crew');
const show27Rating = document.getElementById('show27-rating');
const show27Language = document.getElementById('show27-language');
const show27Summary = document.getElementById('show27-summary');
const show27Genres = document.getElementById('show27-genres');


let getshowData14 = async ()=> {
    const respose27 = await fetch(`${ApiUrl}shows/34526`);
    const show27 = await respose27.json();
    console.log(show27);
    const {name, rating, summary, genres} = show27;
    const Img = show27.image.medium;
    const respose28 = await fetch(`${ApiUrl}shows/34526/crew`);
    const show28 = await respose28.json();
    console.log(show28);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show27Genres.innerHTML += `<li>${element}</li>`;
    });

    show27Name.innerText = name;
    show27Img.src = Img;
    show27Crew.innerHTML= `Creator: ${show28[0].person.name}`;
    show27Rating.innerText = `Rating: ${rating.average}`;
    show27Summary.innerHTML = `${summary}`;
};

getshowData14();

//

const show29Name = document.getElementById('show29-name');
const show29Img = document.getElementById('show29-img');
const show29Crew = document.getElementById('show29-crew');
const show29Rating = document.getElementById('show29-rating');
const show29Language = document.getElementById('show29-language');
const show29Summary = document.getElementById('show29-summary');
const show29Genres = document.getElementById('show29-genres');


let getshowData15 = async ()=> {
    const respose29 = await fetch(`${ApiUrl}shows/38912`);
    const show29 = await respose29.json();
    console.log(show29);
    const {name, rating, summary, genres} = show29;
    const Img = show29.image.medium;
    const respose30 = await fetch(`${ApiUrl}shows/38912/crew`);
    const show30 = await respose30.json();
    console.log(show30);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show29Genres.innerHTML += `<li>${element}</li>`;
    });

    show29Name.innerText = name;
    show29Img.src = Img;
    show29Crew.innerHTML= `Creator: ${show30[0].person.name}`;
    show29Rating.innerText = `Rating: ${rating.average}`;
    show29Summary.innerHTML = `${summary}`;
};

getshowData15();

//

const show31Name = document.getElementById('show31-name');
const show31Img = document.getElementById('show31-img');
const show31Crew = document.getElementById('show31-crew');
const show31Rating = document.getElementById('show31-rating');
const show31Language = document.getElementById('show31-language');
const show31Summary = document.getElementById('show31-summary');
const show31Genres = document.getElementById('show31-genres');


let getshowData16 = async ()=> {
    const respose31 = await fetch(`${ApiUrl}shows/22188`);
    const show31 = await respose31.json();
    console.log(show31);
    const {name, rating, summary, genres} = show31;
    const Img = show31.image.medium;
    const respose32 = await fetch(`${ApiUrl}shows/22188/crew`);
    const show32 = await respose32.json();
    console.log(show32);
    console.log(genres[0].genres);
    genres.forEach(element => {
        show31Genres.innerHTML += `<li>${element}</li>`;
    });

    show31Name.innerText = name;
    show31Img.src = Img;
    show31Crew.innerHTML= `Creator: ${show32[0].person.name}`;
    show31Rating.innerText = `Rating: ${rating.average}`;
    show31Summary.innerHTML = `${summary}`;
};

getshowData16();