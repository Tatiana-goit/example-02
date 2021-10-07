import { Component } from 'react';
import Counter from './Counter';
import {v4 as uuid} from 'uuid'

class New extends Component {
    state = {
        counter: 0,
        title: '',
        desc: '',
        product: null,
        allProducts: [],
        agreed: false,
        size: '',
    }

    handleDecrement = () => {
        // this.setState({
        //     counter: this.state.counter - 1,
        // })
        this.setState((prevState)=>({
           counter: prevState.counter - 1,
            
        }))
    }

    handleIncrement = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // })
        this.setState((prevState)=>({
            counter: prevState.counter + 1,
             
         }))
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            description: this.state.desc,
        }
        this.setState({product: obj});
        this.setState((prevState) => {
            return {
                allProducts: [...prevState.allProducts, obj]
            }
        })
    };

    resetForm =() => {
        this.setState({
            title: '',
            desc: '',
            agreed: false,
            size: ''})
    }

    handleCheck = (e) => {
        e.preventDefault();
        console.log('name',e.target.name);
        console.log('checked',e.target.checked);
        this.setState({
            agreed: !this.state.agreed,
        })
    }

    handleChangeAllInputs = (e) => {
        const {name,type,checked,value} = e.target;
        this.setState({[name]: type==='checkbox' ? checked:value})
    }

    prodIdTitle=uuid();
    prodIdDesc=uuid();
    prodIdAgree=uuid();
    prodIdSize=uuid();

    render() {
        const {counter} = this.state
        const { handleDecrement,handleIncrement } = this
        return (
            <div>
                <h1> My work</h1>
                <Counter
                    counter={counter}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}

                />


                {/* const {} = this.state;
                const {} = this; */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='this.prodIdTitle'>Title</label>
                    <input 
                        id={this.prodIdTitle}
                        name='title' 
                        type='text' 
                        value={this.state.title}
                        onChange={this.handleChangeAllInputs}>
                   </input>

                    <label htmlFor='this.prodIdDesc'>Describtion</label>
                    <input 
                        id='this.prodIdDesc' 
                        name='desc' 
                        type='text' 
                        value={this.state.desc}
                        onChange={this.handleChangeAllInputs}>
                    </input>

                    <label htmlFor='this.prodIdSize'>Your size</label>
                    <select 
                        name='size' 
                        value={this.state.size} 
                        id={this.prodIdSize}
                        onClick={this.handleChangeAllInputs}
                        >
                            <option value='' disabled>
                                ...
                            </option>

                            <option value='s'>s</option>
                            <option value='s'>m</option>
                            <option value='s'>l</option>
                    </select>
                    

                    <label htmlFor='this.prodIdAgree'>Agree?</label>
                    <input 
                        type='checkbox' 
                        name='agreed'
                        id={this.prodIdAgree}
                        checked={this.state.agreed}
                        onChange={this.handleChangeAllInputs}
                        ></input>

                    <button type='submit' disabled={!this.state.agreed}>Add</button>
                </form>
            </div>
        )
    }
}

export default New;