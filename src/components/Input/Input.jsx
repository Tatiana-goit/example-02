import {Component} from 'react';
import Form from './Form'

class Input extends Component {
state ={};

formSubmitHandler = data => {
    console.log(data);
}

render() {
        return( <Form onSubmit={this.formSubmitHandler}></Form>)
       
       
    }
}

export default Input;