import axios from "axios";

//documentation @https://restcountries.eu/
//feel free to add more functions!

const countries = {
  getCountries: (cityName) => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://restcountries.eu/rest/v2")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  }
};

export default countries;
