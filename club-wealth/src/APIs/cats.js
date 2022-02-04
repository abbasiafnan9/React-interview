import axios from "axios";

//documentation @https://docs.thecatapi.com/
//feel free to add more functions!

const cats = {
  get100Cats: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.thecatapi.com/v1/images/search?limit=100")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getRandomCat: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default cats;
