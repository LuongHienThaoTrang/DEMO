import React, { Component } from 'react'
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap';

export default class Login extends Component {
    render() {
        return (
            <div class="center login-page">
                <Card className="login-modal">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword"> Password</Label>
                            <Input id="examplePassword" name="password" placeholder="password placeholder" type="password" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}
