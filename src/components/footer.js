import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-12 col-md-4'>
                        <h3>My Page</h3>
                        <p>Practice React.js</p>
                        <p>Waktu Latihan: 29/01/2023 </p>
                        <span className='pt-3 pb-3'>copyright©2023 1teguh</span>
                    </div>
                </div>
        )
    }
}

export default Footer;