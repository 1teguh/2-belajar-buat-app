import React, { Component } from 'react';


class Table extends Component {
    render() {
        return(
            <div>
                <h3 className='mb-3'>List of Career</h3>
                <table className='table bg-dark text-light'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teguh Pribawa</td>
                        <td>Programmer & Digital Artist</td>
                    </tr>
                    <tr>
                        <td>Fitri Yani</td>
                        <td>Marketing</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default Table;