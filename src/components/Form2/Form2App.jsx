import { Component } from 'react';
import Form from './Form2';

class Form2App extends Component {
        state = {
           allProducts: [],
        };
          
        addNewProduct = obj => {
              this.setState(prevState => {
                return {
                  allProducts: [...prevState.allProducts, obj],
                };
              });
            };
          
        render() {
              return (
                <div className="App">
                   <Form addNewProduct={this.addNewProduct} />
                </div>
              );
            }
          }
export default Form2App;