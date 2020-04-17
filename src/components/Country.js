import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';



export default class Country extends Component {
    state = {
        loading: true,
        countryData: null,
        countrydetailsarray: null
    }

    async componentDidMount() {
        const url = " https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            countryData: data,
            loading: false,
            countrydetailsarray: data.data.rows
        })
      

    }
 

 
    render() {
        return (
            <div className="Country">
            {/* <Table columns={columns} dataSource={this.state.countrydetailsarray} onChange={onChange}/> */}
            <table class="table table-striped table-scroll">
            
                <thead>
                    <th className="sticky state-heading">Country</th>
                    <th className="sticky state-heading total">Total</th>
                    <th className="sticky state-heading new">New</th>
                    <th className="sticky state-heading deaths">Deaths</th>
                    <th className="sticky state-heading recovered">Recovered</th>
                    <th className="sticky state-heading active">Active</th>
                </thead>
                
                {this.state.loading || !this.state.countryData ? <div>  </div> :
                <tbody>
              {this.state.countrydetailsarray.map((countryDetails, index) => {
      
                return (
                    <tr>
                        <td>{countryDetails.country}</td>
                        <td>{countryDetails.total_cases}</td>
                        <td>{countryDetails.new_cases}</td>
                        <td>{countryDetails.total_deaths}</td>
                        <td>{countryDetails.total_recovered}</td>
                        <td>{countryDetails.active_cases}</td>
                   
                    </tr>
                )
            })}</tbody>
                }
                
            </table>
            {/* // <div className="flex" >
            //     {this.state.loading || !this.state.countryData ? <div> loading .... </div> :
            //         <div>
            //             {this.state.countrydetailsarray.map((countryDetails, index) => {
            //                 return (
            //                     <div className="CountrySperator">
            //                         <h3>Country : {countryDetails.country}</h3><br />
            //                         <p>Total Cases : {countryDetails.total_cases}</p>
            //                         <p>New Cases : {countryDetails.new_cases}</p>
            //                         <p>Total Deaths : {countryDetails.total_deaths}</p>
            //                         <p>Total Recovered : {countryDetails.total_recovered}</p>
            //                         <p>Active Cases : {countryDetails.active_cases}</p>
            //                     </div>
            //                 )
            //             })}
            //         </div>
            //     }
            // </div> */}
            </div>
        )
    }
}
