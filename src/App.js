import './App.css';
import Counter from './components/Counter/Counter';
import Section from './components/Section/Section';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Input from './components/Input/Input'
import Example1 from './components/Example1/Example1'
import Example2 from './components/Example2/Example2'
import Example3 from './components/Example2/Example2'
import Form2App from './components/Form2/Form2App'
import ColorPickerOptions from './data/colorPickerOptions.json';


const App =() => {
 return (
       <div className="App">

        <Section title='Example 1'><Counter/> </Section>
  
        <Section title='Example 2'><Dropdown/> </Section>
  
        <Section title='Example 3'><ColorPicker options={ColorPickerOptions}/> </Section>
  
        <Section title='Example 4'><Input/> </Section>

        <Section title='Example 1'><Example1/> </Section>

        <Section title='Example 2'><Example2/> </Section>

        <Section title='Example 3'><Example3/> </Section>

        <Section title='Example Form'><Form2App/> </Section>
        
        
      </div>
    );
}


  


export default App;
