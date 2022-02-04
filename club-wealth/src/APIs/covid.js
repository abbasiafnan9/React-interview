import axios from "axios";

//documentation @https://covidtracking.com/data/api
//feel free to add more functions!

const covid = {
  getCurrentCovidStats: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.covidtracking.com/v1/states/current.json")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getHistoricDailyCovidStats: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.covidtracking.com/v1/states/daily.json")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default covid;
