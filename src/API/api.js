import axios from 'axios';

export const fetchCasesForAll = async () => {

    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': '3d29842203msh762874f38de76fep195411jsnd6053eac3e1d',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
    
  const { data } = axios.request(options).then(function (response) {
    const modifiedData = data?.map((statistics) => ({
        totalCases: statistics.cases.total,
        totalDeaths: statistics.deaths.total,
        country:statistics.country,
        totalRecovered:statistics.cases.recovered,
        totalPopulation:statistics.population,
        date: statistics.day,
      }));
      return modifiedData;
    }).catch(function (error) {
        console.error(error);
    });
};

export const fetchHistoryData = async () => {

const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/history',
  params: {country: 'usa', day: '2020-06-02'},
  headers: {
    'X-RapidAPI-Key': '3d29842203msh762874f38de76fep195411jsnd6053eac3e1d',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
};


