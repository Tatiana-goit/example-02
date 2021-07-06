import './App.css';
import Counter from './components/Counter/Counter';
import Section from './components/Section/Section';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <Section title='Example 1'><Counter/> </Section>

      <Section title='Example 2'><Dropdown/> </Section>

      <Section title='Example 3'> </Section>
      
    </div>
  );
}

export default App;
