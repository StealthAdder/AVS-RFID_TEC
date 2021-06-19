import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/Intro';
import SearchBar from './components/Search/SearchBar';
import ResultPage from './components/Search/ResultPage';
const UserPortal = ({ pageTitle, pageUrl }) => {
  pageTitle('USER PORTAL');
  pageUrl('/userportal');
  const [IntroOpen, setIntroOpen] = useState(true);
  const [vehicleData, setvehicleData] = useState([]);
  const [resultPage, setresultPage] = useState(false);
  return (
    <div>
      {/* search box */}
      <Router>
        <Switch>
          <Route path='/userportal' exact>
            {IntroOpen && (
              <SearchBar
                getData={setvehicleData}
                introStatus={setIntroOpen}
                resultPgStatus={setresultPage}
              />
            )}
            {IntroOpen && <Intro />}
          </Route>
          <Route path='/userportal/search'>
            <h1>Hello</h1>
            {resultPage && <ResultPage fwd={vehicleData} />}
          </Route>
        </Switch>
      </Router>

      {/* <Test dataFwd={vehicleData} /> */}
    </div>
  );
};

export default UserPortal;
