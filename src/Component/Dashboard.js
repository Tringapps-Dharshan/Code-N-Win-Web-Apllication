import React, { Component } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "http://th-alb-1338985061.ap-south-1.elb.amazonaws.com/api/v1/projects/sprints")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <div>
        <h4 className='p-3'>Dashboard</h4>
            <div className='row'>
                <div className='p-2 m-2 col-sm-6 bg-white border-rounded'>
                    <h4 className='p-3'>Projects overview</h4>
                    <table className='table'>
                        <tr>
                            <th>Project Status</th>
                            <th colSpan={2}>136 Projects</th>
                        </tr>
                        <tr>
                            <td>Discovery</td>
                            <td>15</td>
                            <td>11%</td>
                        </tr>
                        <tr>
                            <td>Opportunity</td>
                            <td>19</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td>Ongoing</td>
                            <td>01</td>
                            <td>14%</td>
                        </tr>
                        <tr>
                            <td>Parked</td>
                            <td>01</td>
                            <td>14%</td>
                        </tr>
                        <tr>
                            <td>Ready</td>
                            <td>95</td>
                            <td>70%</td>
                        </tr>
                    </table>
                </div>
                <div className='p-2 m-2 col-sm-5 bg-white border-rounded'>
                    <h4 className='p-3'>Project gallary</h4>
                    
                </div>
            </div>
            <h4 className='p-3'>Current Projects</h4>
            <div className='row'>
            {
            items.map((item) => ( 
                <div className='col-sm-5 bg-white border-radius m-3 p-3' key = { item.id } >
                    <h4>{item.name}</h4>
                    <p>{item.startDate} to {item.endDate}</p>
                    <hr/>
                    <p>Current sprint : {item.currentSprint}, End date : {item.endDate}</p>
                    
                    </div>
                ))
            }
            </div>
            </div>
        );
    }
}

export default componentName;