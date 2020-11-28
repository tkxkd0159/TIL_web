const countrySel = document.querySelector('#country-select');
const category = "country";

function saveCountry(){
    countrySel.addEventListener('change', (event)=>{
        const pick = event.target.value;
        localStorage.setItem(category, pick);
    })
}

function main(){
    saveCountry();
}


main();