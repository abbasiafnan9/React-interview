import axios from "axios";

const user = {
  getRandomUserNames: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/?results=50")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default user;
