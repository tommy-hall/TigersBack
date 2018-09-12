import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

export default class Example extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col-md-2'> </div>
        <div className='col-md-7'>
          <div className='addcourse'>
            <Form>
              <h1>Add Your Course</h1>
              <FormGroup>
                <Label for="exampleCourse">Name</Label>
                <Input type="course" name="course" id="examplecourse" placeholder="Whangamata Golf Club..." />
              </FormGroup>
              <FormGroup>
                <Label for="examplegreenFees">Green Fees</Label>
                <Input type="greenfees" name="greenfees" id="examplegreenfees"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="address" name="address" id="exampleaddress"/>
              </FormGroup>
              <FormGroup>
                <Label for="examplephoneNumber">Phone Number</Label>
                <Input type="phonenumber" name="phonenumber" id="examplephonenumber"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleemailAddress">Email Address</Label>
                <Input type="emailaddress" name="emailaddress" id="exampleemailaddress"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Image</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
            Choose your favourite photo of your course
                </FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
