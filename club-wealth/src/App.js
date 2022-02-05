import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Users from "./components/Users/Users";
import Countries from "./components/Countries/Countries";
import user from "./APIs/user";
import countries from "./APIs/countries";
import "bootstrap/dist/css/bootstrap.css";
import "react-tabs/style/react-tabs.css";
import "./App.css";

function App() {
  const [userData, setUserData] = useState();
  const [countriesData, setCountriesData] = useState();

  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      setUserData(response.data.results);
    });
    countries.getCountries().then((response) => {
      setCountriesData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Users</Tab>
          <Tab>Countries</Tab>
        </TabList>
        <TabPanel>
          <img
            id="welcome"
            src="https://clubwealth.com/wp-content/uploads/2019/12/new-scaled.jpg"
            alt="welcome to Club Wealth "
          />
          <p className="text-center">
            <a href="https://clubwealth.com/wp-content/uploads/2019/12/new-scaled.jpg">
              Club Wealth
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <Users userData={userData} />
        </TabPanel>
        <TabPanel>
          <Countries countriesData={countriesData} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
