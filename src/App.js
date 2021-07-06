import './App.css';
import {Component} from 'react';
import Counter from './components/Counter/Counter';
import Section from './components/Section/Section';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList/TodoList'
import ColorPickerOptions from './data/colorPickerOptions.json';
import initialTodos from './data/todos.json'



class App extends Component {
  state= {
    todos: initialTodos
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  render() {
    const {todos} = this.state;
    const totalTodoCount = todos.length;
    const completedTotalCount = todos.reduce(
      (total,todo) => (todo.completed ? total +1 : total),0,
    )
    return (
      <div className="App">
        <Section title='Example 1'><Counter/> </Section>
  
        <Section title='Example 2'><Dropdown/> </Section>
  
        <Section title='Example 3'><ColorPicker options={ColorPickerOptions}/> </Section>
  
        <Section title='Example 4'>
          <div>
            <p>Общее количество: {totalTodoCount}</p>
            <p>Количество выполненных: {completedTotalCount} </p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/> </Section>
        
      </div>
    );
  }

}

export default App;
