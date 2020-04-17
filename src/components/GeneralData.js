import React, { Component } from 'react'


export default class GeneralData extends Component {

    state = {
        loading: true,
        general: null
    }

    async componentDidMount() {
        const url = "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            general: data.data,
            loading: false
        })
        const responsees = await fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "0391c6d9c9mshdf81702c5146d83p1c17b3jsn375c3fe1deae"
            }
        });
        const data2 = await responsees.json();
        console.log(data2);
        // console.log(this.state.general, "general");
        this.setState({
            general: data.data,
            loading: false,
            general2: data2

        })
    }

    render() {
        return (
            <div>
                 
                {this.state.loading || !this.state.general2 ? <div> </div> :
                    <div>
                        {/* <h6>Last Updated : {this.state.general2.last_update} </h6> */}
                        
                        <div className="row world-data">

                            {/* <div className="flex"> */}
                            
                            <h5 className="data-set total">Total<p>{this.state.general2[0].confirmed}</p></h5>
                            <h5 className="data-set recovery"> Recovered<p>{this.state.general2[0].recovered} </p> </h5>
                            <h5 className="data-set death"> Deceased<p>{this.state.general2[0].deaths} </p> </h5>
                            {/* </h5> */}
                            {/* <h5 className="flex"> */}
                            <h5 className="data-set critical">Critical<p>{this.state.general2[0].critical} </p> </h5>
                          

                        </div>
                    </div>}


                {this.state.loading || !this.state.general ? <div> </div> :
                    <div>
                        {/* <h6>Last Updated : {this.state.general.last_update} </h6> */}
                        <div className="row world-data">

                            {/* <div className="flex"> */}
                          
                            <div className="data-set active">Active<p>{this.state.general.currently_infected} </p> </div>
                            {/* <div className="data-set">Cases with outcome :]<div>{this.state.general.cases_with_outcome} </div> </div> */}
                            {/* <div className="data-set"> Mildly condition active cases :]<div>{this.state.general.mild_condition_active_cases} </div> </div> */}

                            {/* <div className="data-set"> Recovered Percentage :]<div> {this.state.general.closed_cases_recovered_percentage}% </div> </div> */}
                            <div className="data-set deathrate">Death Rate<p>{this.state.general.general_death_rate}% </p> </div>
                            {/* </div> */}

                        </div>
                    </div>}
            </div>
        )
    }
}
