const countrySel = document.querySelector("#js-country-select");
const displayCountry = document.querySelector("#js-display-country");
const country = "country";
let countryProps = {};

function saveCountry() {
  countrySel.addEventListener("change", (event) => {
    const pickCountry = event.target.value;
    countryProps["name"] = pickCountry;
    countryProps["index"] = countrySel.selectedIndex;
    localStorage.setItem(country, JSON.stringify(countryProps));
    displayCountry.innerHTML = `Your Country is ${pickCountry}`;
  });
}

function main() {
  saveCountry();

  if (localStorage.getItem(country) === null) {
    console.log("nothing");
  } else {
    const myCountry = JSON.parse(localStorage.getItem(country));
    const currentIndex = myCountry["index"];
    const currentName = myCountry["name"];

    countrySel.selectedIndex = currentIndex;
    displayCountry.innerHTML = `Your Country is ${currentName}`;
  }
}

main();
