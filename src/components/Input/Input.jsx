import {Component} from 'react';

class Input extends Component {
    state = {
        name: '',
        tag: '',
    };

    handleNameChange = event => {
           this.setState({name: event.currentTarget.value})
    }

    handleTagChange = event => {
        this.setState({tag: event.currentTarget.value})
 }

    render() {
        return (
            <form>
                <label>
                    Имя 
                    <input 
                        type='text' 
                        name='name'
                        value={this.state.name}
                        onChange={this.handleNameChange}/>
                </label>
                <label>
                    Прозвище 
                    <input 
                        type='text'
                        name='tag'
                        value={this.state.tag}
                        onChange={this.handleTagChange}/>
                </label>
            </form>
            // <input type="text" 
            // value={this.state.inputValue}
            // onChange={this.handleInputChange}/>
        )
    }
}

export default Input;