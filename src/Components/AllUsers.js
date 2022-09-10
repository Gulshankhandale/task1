import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class AllUsers extends Component {
  render() {
    return (
      <div className='container mb-2'>

        <div className='h2 text-center mb-3'>
        CRUD
        </div>

        <table className='table'>
            <thead>

                <tr>
                    <th scope='col'>Sr No</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Message</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Operations</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>This is title</td>
                    <td>This is message</td>
                    <td>This is Date</td>
                    <td><div><Link to='/update'><button className='btn btn-primary' style={{"marginRight":"10px"}}>Update</button></Link><Link to='/delete'><button className='btn btn-danger'>Delete</button></Link></div></td>

                </tr>
            </tbody>

        </table>
      </div>
    )
  }
}
