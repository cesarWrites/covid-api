import { Container } from "@material-ui/core";
import React, {useState,useEffect} from "react";
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Chart from './components/Chart/Chart';
import ShowCase from './components/Showcase/ShowCase';
import Table from './components/table/DataTable';
import Loader from './components/loader';
import { fetchCasesForAll, fetchHistoryData} from './API/api';

function App(){
  const [loading, setLoading] = useState(false);

  const [tableData, setTableData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const [totalData, setTotalData] = useState({
    DataTransferItemList: 0,
    totalCases: 0,
    totalRecovered: 0,
    totalConfirmed: 0,
    totalPopulation: 0,
    totalDeaths: 0,
    country: ''
  });

  useEffect(() => {
    getGlobalData();
  }, []);

  const getGlobalData = () => {
    setLoading(true);
    setTableData([]);
    fetchCasesForAll().then((modifiedData) => {
      setTableData(modifiedData);
      setTotalData({
        modifiedData
      });

      setLoading(false);
    });
  };


  const getCountryData = async () => {
    setLoading(true);
    const result = await fetchHistoryData();
    setTotalData({
    });
    setCountryData(true);
    setLoading(false);
  }
  return(
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Container maxWidth='xl'>
          <NavBar
            getGlobalData={getGlobalData}
            getCountryData={getCountryData}
          />
          <ShowCase totalData={totalData} />
          <Table tableData={tableData} setTotalData={setTotalData} />
        </Container>
      </>
    )}
  </>
);
}

export default App;