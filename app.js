/*let getdataNumber = function(){
    let number = document.getElementById("number").value;
    console.log(number);
}*/

const showName = document.getElementById('show-name');
const showImg = document.getElementById('show-img');
const showCrew = document.getElementById('show-crew');
const showRating = document.getElementById('show-rating');
const showSummary = document.getElementById('show-summary');
const showGenres = document.getElementById('show-genres');

const ApiUrl = 'http://api.tvmaze.com/'; 

let getshowData = async ()=> {
    const respose = await fetch(`${ApiUrl}shows/2`);
    const show = await respose.json();
    console.log(show);
    const {name,rating,summary,genres} = show;
    const Img = show.image.medium;
    const respose2 = await fetch(`${ApiUrl}shows/2/crew`);
    const show2 = await respose2.json();
    console.log(show2);

    showName.innerText = name;
    showImg.src = Img;
    showCrew.innerHTML += `Creator: ${show2[0].person.name}`;
    showRating.innerText = `Rating ${show.rating.average}`;
    showSummary.innerHTML = summary;

    genres.forEach(element => {
        showGenres.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData();

const showName2 = document.getElementById('show-name2');
const showImg2 = document.getElementById('show-img2');
const showCrew2 = document.getElementById('show-crew2');
const showRating2 = document.getElementById('show-rating2');
const showSummary2 = document.getElementById('show-summary2');
const showGenres2 = document.getElementById('show-genres2');

let getshowData2 = async ()=> {
    const respose3 = await fetch(`${ApiUrl}shows/2790`);
    const show3 = await respose3.json();
    console.log(show3);
    const {name,rating,summary,genres} = show3;
    const Img = show3.image.medium;
    const respose4 = await fetch(`${ApiUrl}shows/2790/crew`);
    const show4 = await respose4.json();
    console.log(show4);

    showName2.innerText = name;
    showImg2.src = Img;
    showCrew2.innerHTML += `Creator: ${show4[3].person.name}`;
    showRating2.innerText = `Rating ${show3.rating.average}`;
    showSummary2.innerHTML = summary;

    genres.forEach(element => {
        showGenres2.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData2();

const showName3 = document.getElementById('show-name3');
const showImg3 = document.getElementById('show-img3');
const showCrew3 = document.getElementById('show-crew3');
const showRating3 = document.getElementById('show-rating3');
const showSummary3 = document.getElementById('show-summary3');
const showGenres3 = document.getElementById('show-genres3');

let getshowData3 = async ()=> {
    const respose5 = await fetch(`${ApiUrl}shows/1505`);
    const show5 = await respose5.json();
    console.log(show5);
    const {name,rating,summary,genres} = show5;
    const Img = show5.image.medium;
    const respose6 = await fetch(`${ApiUrl}shows/1505/crew`);
    const show6 = await respose6.json();
    console.log(show6);

    showName3.innerText = name;
    showImg3.src = Img;
    showCrew3.innerHTML += `Creator: ${show6[0].person.name}`;
    showRating3.innerText = `Rating ${show5.rating.average}`;
    showSummary3.innerHTML = summary;

    genres.forEach(element => {
        showGenres3.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData3();

const showName4 = document.getElementById('show-name4');
const showImg4 = document.getElementById('show-img4');
const showCrew4 = document.getElementById('show-crew4');
const showRating4 = document.getElementById('show-rating4');
const showSummary4 = document.getElementById('show-summary4');
const showGenres4 = document.getElementById('show-genres4');

let getshowData4 = async ()=> {
    const respose7 = await fetch(`${ApiUrl}shows/67`);
    const show7 = await respose7.json();
    console.log(show7);
    const {name,rating,summary,genres} = show7;
    const Img = show7.image.medium;
    const respose8 = await fetch(`${ApiUrl}shows/67/crew`);
    const show8 = await respose8.json();
    console.log(show8);

    showName4.innerText = name;
    showImg4.src = Img;
    showCrew4.innerHTML += `Creator: ${show8[8].person.name}`;
    showRating4.innerText = `Rating ${show7.rating.average}`;
    showSummary4.innerHTML = summary;

    genres.forEach(element => {
        showGenres4.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData4();

const showName5 = document.getElementById('show-name5');
const showImg5 = document.getElementById('show-img5');
const showCrew5 = document.getElementById('show-crew5');
const showRating5 = document.getElementById('show-rating5');
const showSummary5 = document.getElementById('show-summary5');
const showGenres5 = document.getElementById('show-genres5');

let getshowData5 = async ()=> {
    const respose9 = await fetch(`${ApiUrl}shows/35512`);
    const show9 = await respose9.json();
    console.log(show9);
    const {name,rating,summary,genres} = show9;
    const Img = show9.image.medium;
    const respose10 = await fetch(`${ApiUrl}shows/35512/crew`);
    const show10 = await respose10.json();
    console.log(show10);

    showName5.innerText = name;
    showImg5.src = Img;
    showCrew5.innerHTML += `Creator: ${show10[0].person.name}`;
    showRating5.innerText = `Rating ${show9.rating.average}`;
    showSummary5.innerHTML = summary;

    genres.forEach(element => {
        showGenres5.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData5();

//

const showName6 = document.getElementById('show-name6');
const showImg6 = document.getElementById('show-img6');
const showCrew6 = document.getElementById('show-crew6');
const showRating6 = document.getElementById('show-rating6');
const showSummary6 = document.getElementById('show-summary6');
const showGenres6 = document.getElementById('show-genres6'); 

let getshowData6 = async ()=> {
    const respose11 = await fetch(`${ApiUrl}shows/216`);
    const show11 = await respose11.json();
    console.log(show11);
    const {name,rating,summary,genres} = show11;
    const Img = show11.image.medium;
    const respose12 = await fetch(`${ApiUrl}shows/216/crew`);
    const show12 = await respose12.json();
    console.log(show12);

    showName6.innerText = name;
    showImg6.src = Img;
    showCrew6.innerHTML += `Creator: ${show12[0].person.name}`;
    showRating6.innerText = `Rating ${show11.rating.average}`;
    showSummary6.innerHTML = summary;

    genres.forEach(element => {
        showGenres6.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData6();

const showName7 = document.getElementById('show-name7');
const showImg7 = document.getElementById('show-img7');
const showCrew7 = document.getElementById('show-crew7');
const showRating7 = document.getElementById('show-rating7');
const showSummary7 = document.getElementById('show-summary7');
const showGenres7 = document.getElementById('show-genres7');

let getshowData7 = async ()=> {
    const respose13 = await fetch(`${ApiUrl}shows/1615`);
    const show13 = await respose13.json();
    console.log(show13);
    const {name,rating,summary,genres} = show13;
    const Img = show13.image.medium;
    const respose14 = await fetch(`${ApiUrl}shows/1615/crew`);
    const show14 = await respose14.json();
    console.log(show14);

    showName7.innerText = name;
    showImg7.src = Img;
    showCrew7.innerHTML += `Creator: ${show14[1].person.name}`;
    showRating7.innerText = `Rating ${show13.rating.average}`;
    showSummary7.innerHTML = summary;

    genres.forEach(element => {
        showGenres7.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData7();

const showName8 = document.getElementById('show-name8');
const showImg8 = document.getElementById('show-img8');
const showCrew8 = document.getElementById('show-crew8');
const showRating8 = document.getElementById('show-rating8');
const showSummary8 = document.getElementById('show-summary8');
const showGenres8 = document.getElementById('show-genres8');

let getshowData8 = async ()=> {
    const respose15 = await fetch(`${ApiUrl}shows/42586`);
    const show15 = await respose15.json();
    console.log(show15);
    const {name,rating,summary,genres} = show15;
    const Img = show15.image.medium;
    const respose16 = await fetch(`${ApiUrl}shows/42586/crew`);
    const show16 = await respose16.json();
    console.log(show16);

    showName8.innerText = name;
    showImg8.src = Img;
    showCrew8.innerHTML += `Creator: ${show16[0].person.name}`;
    showRating8.innerText = `Rating ${show15.rating.average}`;
    showSummary8.innerHTML = summary;

    genres.forEach(element => {
        showGenres8.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData8();

const showName9 = document.getElementById('show-name9');
const showImg9 = document.getElementById('show-img9');
const showCrew9 = document.getElementById('show-crew9');
const showRating9 = document.getElementById('show-rating9');
const showSummary9 = document.getElementById('show-summary9');
const showGenres9 = document.getElementById('show-genres9');

let getshowData9 = async ()=> {
    const respose17 = await fetch(`${ApiUrl}shows/32158`);
    const show17 = await respose17.json()
    console.log(show17);
    const {name,rating,summary,genres} = show17;
    const Img = show17.image.medium;
    const respose18 = await fetch(`${ApiUrl}shows/32158/crew`);
    const show18 = await respose18.json();
    console.log(show18);

    showName9.innerText = name;
    showImg9.src = Img;
    showCrew9.innerHTML += `Creator: ${show18[20].person.name}`;
    showRating9.innerText = `Rating ${show17.rating.average}`;
    showSummary9.innerHTML = summary;

    genres.forEach(element => {
        showGenres9.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData9();

const showName10 = document.getElementById('show-name10');
const showImg10 = document.getElementById('show-img10');
const showCrew10 = document.getElementById('show-crew10');
const showRating10 = document.getElementById('show-rating10');
const showSummary10 = document.getElementById('show-summary10');
const showGenres10 = document.getElementById('show-genres10');

let getshowData10 = async ()=> {
    const respose19 = await fetch(`${ApiUrl}shows/52`);
    const show19 = await respose19.json();
    console.log(show19);
    const {name,rating,summary,genres} = show19;
    const Img = show19.image.medium;
    const respose20 = await fetch(`${ApiUrl}shows/52/crew`);
    const show20 = await respose20.json();
    console.log(show20);

    showName10.innerText = name;
    showImg10.src = Img;
    showCrew10.innerHTML += `Creator: ${show20[1].person.name}`;
    showRating10.innerText = `Rating ${show19.rating.average}`;
    showSummary10.innerHTML = summary;

    genres.forEach(element => {
        showGenres10.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData10();

const showName11 = document.getElementById('show-name11');
const showImg11 = document.getElementById('show-img11');
const showCrew11 = document.getElementById('show-crew11');
const showRating11 = document.getElementById('show-rating11');
const showSummary11 = document.getElementById('show-summary11');
const showGenres11 = document.getElementById('show-genres11');

let getshowData11 = async ()=> {
    const respose21 = await fetch(`${ApiUrl}shows/83`);
    const show21 = await respose21.json();
    console.log(show21);
    const {name,rating,summary,genres} = show21;
    const Img = show21.image.medium;
    const respose22 = await fetch(`${ApiUrl}shows/83/crew`);
    const show22 = await respose22.json();
    console.log(show22);

    showName11.innerText = name;
    showImg11.src = Img;
    showCrew11.innerHTML += `Creator: ${show22[15].person.name}`;
    showRating11.innerText = `Rating ${show21.rating.average}`;
    showSummary11.innerHTML = summary;

    genres.forEach(element => {
        showGenres11.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData11();

const showName12 = document.getElementById('show-name12');
const showImg12 = document.getElementById('show-img12');
const showCrew12 = document.getElementById('show-crew12');
const showRating12 = document.getElementById('show-rating12');
const showSummary12 = document.getElementById('show-summary12');
const showGenres12 = document.getElementById('show-genres12');

let getshowData12 = async ()=> {
    const respose23 = await fetch(`${ApiUrl}shows/118`);
    const show23 = await respose23.json();
    console.log(show23);
    const {name,rating,summary,genres} = show23;
    const Img = show23.image.medium;
    const respose24 = await fetch(`${ApiUrl}shows/118/crew`);
    const show24 = await respose24.json();
    console.log(show24);

    showName12.innerText = name;
    showImg12.src = Img;
    showCrew12.innerHTML += `Creator: ${show24[29].person.name}`;
    showRating12.innerText = `Rating ${show23.rating.average}`;
    showSummary12.innerHTML = summary;

    genres.forEach(element => {
        showGenres12.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData12();

const showName13 = document.getElementById('show-name13');
const showImg13 = document.getElementById('show-img13');
const showCrew13 = document.getElementById('show-crew13');
const showRating13 = document.getElementById('show-rating13');
const showSummary13 = document.getElementById('show-summary13');
const showGenres13 = document.getElementById('show-genres13');

let getshowData13 = async ()=> {
    const respose25 = await fetch(`${ApiUrl}shows/27436`);
    const show25 = await respose25.json();
    console.log(show25);
    const {name,rating,summary,genres} = show25;
    const Img = show25.image.medium;
    const respose26 = await fetch(`${ApiUrl}shows/27436/crew`);
    const show26 = await respose26.json();
    console.log(show26);

    showName13.innerText = name;
    showImg13.src = Img;
    showCrew13.innerHTML += `Creator: ${show26[0].person.name}`;
    showRating13.innerText = `Rating ${show25.rating.average}`;
    showSummary13.innerHTML = summary;

    genres.forEach(element => {
        showGenres13.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData13();

const showName14 = document.getElementById('show-name14');
const showImg14 = document.getElementById('show-img14');
const showCrew14 = document.getElementById('show-crew14');
const showRating14 = document.getElementById('show-rating14');
const showSummary14 = document.getElementById('show-summary14');
const showGenres14 = document.getElementById('show-genres14');

let getshowData14 = async ()=> {
    const respose27 = await fetch(`${ApiUrl}shows/431`);
    const show27 = await respose27.json();
    console.log(show27);
    const {name,rating,summary,genres} = show27;
    const Img = show27.image.medium;
    const respose28 = await fetch(`${ApiUrl}shows/431/crew`);
    const show28 = await respose28.json();
    console.log(show28);

    showName14.innerText = name;
    showImg14.src = Img;
    showCrew14.innerHTML += `Creator: ${show28[1].person.name}`;
    showRating14.innerText = `Rating ${show27.rating.average}`;
    showSummary14.innerHTML = summary;

    genres.forEach(element => {
        showGenres14.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData14();

const showName15 = document.getElementById('show-name15');
const showImg15 = document.getElementById('show-img15');
const showCrew15 = document.getElementById('show-crew15');
const showRating15 = document.getElementById('show-rating15');
const showSummary15 = document.getElementById('show-summary15');
const showGenres15 = document.getElementById('show-genres15');

let getshowData15 = async ()=> {
    const respose29 = await fetch(`${ApiUrl}shows/396`);
    const show29 = await respose29.json();
    console.log(show29);
    const {name,rating,summary,genres} = show29;
    const Img = show29.image.medium;
    const respose30 = await fetch(`${ApiUrl}shows/396/crew`);
    const show30 = await respose30.json();
    console.log(show30);

    showName15.innerText = name;
    showImg15.src = Img;
    showCrew15.innerHTML += `Creator: ${show30[0].person.name}`;
    showRating15.innerText = `Rating ${show29.rating.average}`;
    showSummary15.innerHTML = summary;

    genres.forEach(element => {
        showGenres15.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData15();

const showName16 = document.getElementById('show-name16');
const showImg16 = document.getElementById('show-img16');
const showCrew16 = document.getElementById('show-crew16');
const showRating16 = document.getElementById('show-rating16');
const showSummary16 = document.getElementById('show-summary16');
const showGenres16 = document.getElementById('show-genres16'); 

let getshowData16 = async ()=> {
    const respose31 = await fetch(`${ApiUrl}shows/2071`);
    const show31 = await respose31.json();
    console.log(show31);
    const {name,rating,summary,genres} = show31;
    const Img = show31.image.medium;
    const respose32 = await fetch(`${ApiUrl}shows/2071/crew`);
    const show32 = await respose32.json();
    console.log(show32);

    showName16.innerText = name;
    showImg16.src = Img;
    showCrew16.innerHTML += `Creator: ${show32[0].person.name}`;
    showRating16.innerText = `Rating ${show31.rating.average}`;
    showSummary16.innerHTML = summary;

    genres.forEach(element => {
        showGenres16.innerHTML += `<li> ${element}</li>`;
    });
};

getshowData16();