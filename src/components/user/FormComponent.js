import React from 'react'
import UserForm from './userForm'

class UserPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <UserForm onSubmit={this.submit} />
  }
}