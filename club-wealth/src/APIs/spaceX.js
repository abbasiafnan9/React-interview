import axios from "axios";

//documentation @https://pokeapi.co/docs/v2
//feel free to add more functions!

const spaceX = {
  latest: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.spacexdata.com/v4/launches/latest")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  all: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.spacexdata.com/v4/launches/all`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default spaceX;
