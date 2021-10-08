
react-35-module-2
class extends Component render()
import { Component } from 'react'

state = {}
this.state - Object

this.setState({})

this.setState((prevState)=>{ return {prop: prevState.prop + 1} }) || this.setState((prevState)=>({prop: prevState.prop + 1}))

state = {prop: this.props.value}
static defaultProps = {prop: 0}

lesson 2
поднятие состояния -
передача методов ребенку через props,
при вызове этих ментодов в ребенке,
состояние будет изменяться в родителе
Где использовать? Например при сабмите формы, чтобы передать родителю готовый объект с данными

Структура компонента формы:

стейт с полями для значений из инпутов

метод обработки ввода данных в инпуты с записью значений в стейт

для чекбокса лучше сделать отдельный метод или прописать условие с проверкой типа на checkbox

  handleCheck = ({ target }) => {
    const { name, value, type, checked } = target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

методы обработки сабмита формы, где вызываем метод родителя, полученный через this.props

метод очистки формы через стейт, потому что поля инпутов (value) связаны с их полями в стейте

рендер JSX-разметки с формой и инпутами:

5.1 label через htmlFor привязываем к input по id. Идентификатор лучше генерировать перед рендером разметки в публичном свойстве и по ссылке присваивать в атрибуты 

5.2 input должен иметь:
name со значением, по которому будем хранить его в стейте и обращаться к нему из формы
const { name, value } = target;
this.setState({ [name]: value });
value, сообщающийся с соответствующим полем в стейте
onChange - проп события, в него передаем метод - обработчик события 

5.3 для input:radio также нужно:
checked={поле из стейта для чекбокса} 

5.4 чтобы деактивировать кнопку по нечекнутому инпуту
disabled={!поле из стейта для чекбокса}# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
