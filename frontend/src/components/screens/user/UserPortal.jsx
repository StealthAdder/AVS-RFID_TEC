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
      {IntroOpen && (
        <SearchBar
          getData={setvehicleData}
          introStatus={setIntroOpen}
          resultPgStatus={setresultPage}
        />
      )}
      {IntroOpen && <Intro />}
      {resultPage && (
        <ResultPage
          fwd={vehicleData}
          introStatus={setIntroOpen}
          resultPgStatus={setresultPage}
        />
      )}
    </div>
  );
};

export default UserPortal;
