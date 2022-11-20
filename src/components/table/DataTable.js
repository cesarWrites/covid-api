import * as React from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

function DataTable(tableData,setTableData){

        const defaultMaterialTheme = createTheme();

        return(
            <div style={{ width: '100%', height: '100%' }}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable
                      
                        columns={[
                        { title: 'Day', field: 'day' },
                        { title: 'Country', field: 'country' },
                        { title: 'Population', field: 'totalPopulation' },
                        { title: 'Cases', field: 'totalCases' },
                        { title: 'Deaths', field: 'totalDeaths' },
                        { title: 'Recovered', field: 'totalRecovered' },
                        ]}
                        data={[
                            //{tableData}
                            {day:'2020-06-02', country:'China',totalPopulation:'1439323776',totalCases:'233515',totalDeaths:'4634',totalRecovered:'160092'},
                            {day:'2020-06-02', country:'Italy',totalPopulation:'60468537',totalCases:' 287012',totalDeaths:'33530',totalRecovered:'0'},
                            {day:'2020-06-02', country:'Spain',totalPopulation:'46753394',totalCases:'1874268',totalDeaths:'27127',totalRecovered:'620129'},
                            {day:'2020-06-02', country:'USA',totalPopulation:'330848770',totalCases:'233515',totalDeaths:'107846',totalRecovered:'166400'},
                            {day:'2020-06-02', country:'Germany',totalPopulation:'83763076',totalCases:'157562',totalDeaths:'8649',totalRecovered:'123077'},
                            {day:'2020-06-02', country:'Iran',totalPopulation:'83903764',totalCases:'189220',totalDeaths:'7942',totalRecovered:'68812'},                             
                        ]}
                        
                        title="Covid 19 Statistics"
                    />
                </ThemeProvider>
            </div>
        );
    }
export default DataTable;

