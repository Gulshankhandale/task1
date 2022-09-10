import React, { Component } from 'react'

export default class CreateUser extends Component {
  render() {
    return (
        <div className='container' style={{"width":"480px"}}>
            <div className='text-center'>
                <h2>Create User</h2>
            </div>
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Message</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}
