const show1Name = document.getElementById('show1-name');
const show1Img = document.getElementById('show1-img');
const show1Crew = document.getElementById('show1-crew');
const show1Rating = document.getElementById('show1-rating');
const show1Language = document.getElementById('show1-language');
const show1Summary = document.getElementById('show1-summary');
const show1Genres = document.getElementById('show1-genres');

const ApiUrl =  'http://api.tvmaze.com/'; 
 
let getshowData1 = async ()=> {
    const respose1 = await fetch (`${ApiUrl}shows/6`);
    const show1 = await respose1.json();
    console.log(show1);
    const {name, rating, summary, genres} = show1;
    const img1 = show1.image.medium;
    const response2 = await fetch(`${ApiUrl}shows/6/crew`)
    const show2 = await response2.json();
    console.log(show2);

    show1Name.innerText = name;
    show1Img.src = img1;
    show1Crew.innerHTML = `Creator: ${show2[0].person.name}`;
    show1Rating.innerText = `Rating: ${rating.average}`;
    show1Summary.innerHTML = summary;

    genres.forEach(element => {
        show1Genres.innerHTML += `<li>${element}</li>`;
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
    const show3 = await response3.json();
    console.log(show3);
    const {name, rating, summary, genres} = show3;
    const img1 = show3.image.medium;
    const response4 = await fetch(`${ApiUrl}shows/2993/crew`)
    const show4 = await response4.json();
    console.log(show4);

    show2Name.innerText = name;
    show2Img.src = img1;
    show2Crew.innerHTML = `Creator: ${show4[3].person.name}`;
    show2Rating.innerText = `Rating: ${rating.average}`;
    show2Summary.innerHTML = summary;

    genres.forEach(element => {
        show2Genres.innerHTML += `<li>${element}</li>`;
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

    show3Name.innerText = name;
    show3Img.src = img1;
    show3Crew.innerHTML = `Creator: ${show6[0].person.name}`;
    show3Rating.innerText = `Rating: ${rating.average}`;
    show3Summary.innerHTML = summary;

    genres.forEach(element => {
        show3Genres.innerHTML += `<li>${element}</li>`;
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
    const img1 = show7.image.medium;
    const response8 = await fetch(`${ApiUrl}shows/37854/crew`)
    const show8 = await response8.json();
    console.log(show8);

    show4Name.innerText = name;
    show4Img.src = img1;
    show4Crew.innerHTML = `Creator: ${show8[0].person.name}`;
    show4Rating.innerText = `Rating: ${rating.average}`;
    show4Summary.innerHTML = summary;

    genres.forEach(element => {
        show4Genres.innerHTML += `<li>${element}</li>`;
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
    const {name, rating, summary, genres} = show9;
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
    show5Crew.innerHTML = `Creator: ${show10[0].person.name}`;
    show5Rating.innerText = `Rating: ${rating.average}`;
    show5Summary.innerHTML = summary;

    genres.forEach(element => {
        show5Genres.innerHTML += `<li>${element}</li>`;
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
    show6Crew.innerHTML = `Creator: ${show12[0].person.name}`;
    show6Rating.innerText = `Rating: ${rating.average}`;
    show6Summary.innerHTML = summary;

    genres.forEach(element => {
        show6Genres.innerHTML += `<li>${element}</li>`;
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
    show7Crew.innerHTML = `Creator: ${show14[0].person.name}`;
    show7Rating.innerText = `Rating: ${rating.average}`;
    show7Summary.innerHTML = summary;

    genres.forEach(element => {
        show7Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData7();
const show8Name = document.getElementById('show8-name');
const show8Img = document.getElementById('show8-img');
const show8Crew = document.getElementById('show8-crew');
const show8Rating = document.getElementById('show8-rating');
const show8Language = document.getElementById('show8-language');
const show8Summary = document.getElementById('show8-summary');
const show8Genres = document.getElementById('show8-genres');


let getshowData8 = async ()=>{
    const response15 = await fetch (`${ApiUrl}shows/28826`);
    const show15 = await response15.json();
    
    console.log(show15);
    const {name, rating, summary, genres} = show15;
    const img1 = show15.image.medium;
    
    const response16 = await fetch(`${ApiUrl}shows/28826/crew`)
    const show16 = await response16.json();
    console.log(show16);

    /*
    console.log(genres[0].genres);
    genres.forEach(element => {
        showGenres.innerHTML += `<li>${element}</li>`;
    });
    */

    show8Name.innerText = name;
    show8Img.src = img1;
    show8Crew.innerHTML = `Creator: ${show16[0].person.name}`;
    show8Rating.innerText = `Rating: ${rating.average}`;
    show8Summary.innerHTML = summary;

    genres.forEach(element => {
        show8Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData8();

const show9Name = document.getElementById('show9-name');
const show9Img = document.getElementById('show9-img');
const show9Crew = document.getElementById('show9-crew');
const show9Rating = document.getElementById('show9-rating');
const show9Language = document.getElementById('show9-language');
const show9Summary = document.getElementById('show9-summary');
const show9Genres = document.getElementById('show9-genres');


let getshowData9 = async ()=>{
    const response17 = await fetch (`${ApiUrl}shows/5262`);
    const show17 = await response17.json();
    console.log(show17);
    const {name, rating, summary, genres} = show17;
    const img1 = show17.image.medium;
    const response18 = await fetch(`${ApiUrl}shows/5262/crew`)
    const show18 = await response18.json();
    console.log(show18);

    show9Name.innerText = name;
    show9Img.src = img1;
    show9Crew.innerHTML = `Creator: ${show18[0].person.name}`;
    show9Rating.innerText = `Rating: ${rating.average}`;
    show9Summary.innerHTML = summary;

    genres.forEach(element => {
        show9Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData9();

const show10Name = document.getElementById('show10-name');
const show10Img = document.getElementById('show10-img');
const show10Crew = document.getElementById('show10-crew');
const show10Rating = document.getElementById('show10-rating');
const show10Language = document.getElementById('show10-language');
const show10Summary = document.getElementById('show10-summary');
const show10Genres = document.getElementById('show10-genres');


let getshowData10 = async ()=>{
    const response19 = await fetch (`${ApiUrl}shows/216`);
    const show19 = await response19.json();
    console.log(show19);
    const {name, rating, summary, genres} = show19;
    const img1 = show19.image.medium;
    const response20 = await fetch(`${ApiUrl}shows/216/crew`)
    const show20 = await response20.json();
    console.log(show20);

    show10Name.innerText = name;
    show10Img.src = img1;
    show10Crew.innerHTML = `Creator: ${show20[0].person.name}`;
    show10Rating.innerText = `Rating: ${rating.average}`;
    show10Summary.innerHTML = summary;

    genres.forEach(element => {
        show10Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData10();

                                                                            //11
const show11Name = document.getElementById('show11-name');
const show11Img = document.getElementById('show11-img');
const show11Crew = document.getElementById('show11-crew');
const show11Rating = document.getElementById('show11-rating');
const show11Language = document.getElementById('show11-language');
const show11Summary = document.getElementById('show11-summary');
const show11Genres = document.getElementById('show11-genres');


let getshowData11 = async ()=>{
    const response21 = await fetch (`${ApiUrl}shows/30`);
    const show21 = await response21.json();
    console.log(show21);
    const {name, rating, summary, genres} = show21;
    const img1 = show21.image.medium;
    const response22 = await fetch(`${ApiUrl}shows/30/crew`)
    const show22 = await response22.json();
    console.log(show22);

    show11Name.innerText = name;
    show11Img.src = img1;
    show11Crew.innerHTML = `Creator: ${show22[15].person.name}`;
    show11Rating.innerText = `Rating: ${rating.average}`;
    show11Summary.innerHTML = summary;

    genres.forEach(element => {
        show11Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData11();

const show12Name = document.getElementById('show12-name');
const show12Img = document.getElementById('show12-img');
const show12Crew = document.getElementById('show12-crew');
const show12Rating = document.getElementById('show12-rating');
const show12Language = document.getElementById('show12-language');
const show12Summary = document.getElementById('show12-summary');
const show12Genres = document.getElementById('show12-genres');


let getshowData12 = async ()=> {
    const response23 = await fetch (`${ApiUrl}shows/27557`);
    const show23 = await response23.json();
    console.log(show23);
    const {name, rating, summary, genres} = show23;
    const img1 = show23.image.medium;
    const response24 = await fetch(`${ApiUrl}shows/27557/crew`)
    const show24 = await response24.json();
    console.log(show24);

    show12Name.innerText = name;
    show12Img.src = img1;
    show12Crew.innerHTML = `Creator: ${show24[29].person.name}`;
    show12Rating.innerText = `Rating: ${rating.average}`;
    show12Summary.innerHTML = summary;

    genres.forEach(element => {
        show12Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData12();


const show13Name = document.getElementById('show13-name');
const show13Img = document.getElementById('show13-img');
const show13Crew = document.getElementById('show13-crew');
const show13Rating = document.getElementById('show13-rating');
const show13Language = document.getElementById('show13-language');
const show13Summary = document.getElementById('show13-summary');
const show13Genres = document.getElementById('show13-genres');


let getshowData13 = async ()=>{
    const response25 = await fetch (`${ApiUrl}shows/42586`);
    const show25 = await response25.json();
    console.log(show25);
    const {name, rating, summary, genres} = show25;
    const img1 = show25.image.medium;
    const response26 = await fetch(`${ApiUrl}shows/42586/crew`)
    const show26 = await response26.json();
    console.log(show26);

    show13Name.innerText = name;
    show13Img.src = img1;
    show13Crew.innerHTML = `Creator: ${show26[0].person.name}`;
    show13Rating.innerText = `Rating: ${rating.average}`;
    show13Summary.innerHTML = summary;

    genres.forEach(element => {
        show13Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData13();



const show14Name = document.getElementById('show14-name');
const show14Img = document.getElementById('show14-img');
const show14Crew = document.getElementById('show14-crew');
const show14Rating = document.getElementById('show14-rating');
const show14Language = document.getElementById('show14-language');
const show14Summary = document.getElementById('show14-summary');
const show14Genres = document.getElementById('show14-genres');


let getshowData14 = async ()=>{
    const response27 = await fetch (`${ApiUrl}shows/21845`);
    const show27 = await response27.json();
    console.log(show27);
    const {name, rating, summary, genres} = show27;
    const img1 = show27.image.medium;
    const response28 = await fetch(`${ApiUrl}shows/21845/crew`)
    const show28 = await response28.json();
    console.log(show28);

    show14Name.innerText = name;
    show14Img.src = img1;
    show14Crew.innerHTML = `Creator: ${show28[0].person.name}`;
    show14Rating.innerText = `Rating: ${rating.average}`;
    show14Summary.innerHTML = summary;

    genres.forEach(element => {
        show14Genres.innerHTML += `<li>${element}</li>`;
    });
};

getshowData14();
  
const show15Name = document.getElementById('show15-name');
const show15Img = document.getElementById('show15-img');
const show15Crew = document.getElementById('show15-crew');
const show15Rating = document.getElementById('show15-rating');
const show15Language = document.getElementById('show15-language');
const show15Summary = document.getElementById('show15-summary');
const show15Genres = document.getElementById('show15-genres');


let getshowData15 = async ()=>{
    
    const respose29 = await fetch(`${ApiUrl}shows/4`);
    const show29 = await respose29.json();
    console.log(show29);
    const {name,rating,summary,genres} = show29;
    const img1 = show29.image.medium;
    const respose30 = await fetch(`${ApiUrl}shows/4/crew`);
    const show30 = await respose30.json();
    console.log(show30);

    show15Name.innerText = name;
    show15Img.src = img1;
    show15Crew.innerHTML += `Creator: ${show30[0].name}`;
    show15Rating.innerText = `Rating ${rating.average}`;
    show15Summary.innerHTML = summary;

    genres.forEach(element => {
        show16Genres.innerHTML += `<li> ${element}</li>`;
    });
    };



getshowData15();

const show16Name = document.getElementById('show16-name');
const show16Img = document.getElementById('show16-img');
const show16Crew = document.getElementById('show16-crew');
const show16Rating = document.getElementById('show16-rating');
const show16Language = document.getElementById('show16-language');
const show16Summary = document.getElementById('show16-summary');
const show16Genres = document.getElementById('show16-genres');


let getshowData16 = async ()=>{
    
    const respose31 = await fetch(`${ApiUrl}shows/13`);
    const show31 = await respose31.json();
    console.log(show31);
    const {name,rating,summary,genres} = show31;
    const img1 = show31.image.medium;
    const respose32 = await fetch(`${ApiUrl}shows/13/crew`);
    const show32 = await respose32.json();
    console.log(show32);

    show16Name.innerText = name;
    show16Img.src = img1;
    show16Crew.innerHTML += `Creator: ${show32[0].person.name}`;
    show16Rating.innerText = `Rating ${show31.rating.average}`;
    show16Summary.innerHTML = summary;

    genres.forEach(element => {
        show16Genres.innerHTML += `<li> ${element}</li>`;
    });
    };

getshowData16();