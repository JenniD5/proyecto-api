const gatos =document.getElementById(`img-animales`);
const cat = document.getElementById('cat');

const animalesurl=`http://shibe.online/api/`;

let getAdopcionData = async ()=>{
    const respose = await fetch (`${animalesurl}cats/ba5d49879ba0536ff531331b18eb94ec8e29c377.jpg`);
    const gatos = await respose.json();
    console.log(gatos);
    catsImg.scr =gatos;
    cat.innerText = gatos;
    //const{type}=adopcion;
    //console.log(type);
}
getAdopcionData();
  