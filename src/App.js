import './App.css';
import Counter from './components/Counter/Counter';
import Section from './components/Section/Section';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Input from './components/Input/Input'
import ColorPickerOptions from './data/colorPickerOptions.json';


const App =() => {
 return (
       <div className="App">

        <Section title='Example 1'><Counter/> </Section>
  
        <Section title='Example 2'><Dropdown/> </Section>
  
        <Section title='Example 3'><ColorPicker options={ColorPickerOptions}/> </Section>
  
        <Section title='Example 4'><Input/> </Section>
        
      </div>
    );
}


  


export default App;
