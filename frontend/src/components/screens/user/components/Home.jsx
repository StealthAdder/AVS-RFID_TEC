import { useState, useEffect } from 'react';
import Intro from './Intro';
import SearchBar from './Search/SearchBar';
// import Test from './Search/test';
import ResultPage from './Search/tables/ResultPage';
const Home = () => {
  const [IntroOpen, setIntroOpen] = useState(true);
  const [vehicleData, setvehicleData] = useState([]);
  const [resultPage, setresultPage] = useState(false);
  return (
    <div>
      {/* search box */}
      {IntroOpen && (
        <SearchBar
          getData={setvehicleData}
          introStatus={setIntroOpen}
          resultPgStatus={setresultPage}
        />
      )}
      {IntroOpen && <Intro />}
      {resultPage && <ResultPage fwd={vehicleData} />}
      {/* <Test dataFwd={vehicleData} /> */}
    </div>
  );
};

export default Home;
