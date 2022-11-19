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
                      title={
                        tableData.length > 0 && tableData[0].Country
                      }
                        columns={[
                        { title: 'Day', field: 'day' },
                        { title: 'Country', field: 'country' },
                        { title: 'Population', field: 'totalPopulation' },
                        { title: 'Cases', field: 'totalCases' },
                        { title: 'Deaths', field: 'totalDeaths' },
                        { title: 'recovered', field: 'totalRecovered' },
                        
                        ]}
                        data={[
                            {tableData}
                        ]}
                        //title="Covid 19 Statistics"
                    />
                </ThemeProvider>
            </div>
        );
    }
export default DataTable;

