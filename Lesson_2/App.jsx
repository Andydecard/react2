import React from 'react';
import Child from './Child.jsx';

export default class App extends React.Component {
    state = {
      header: "Наш первый React-компонент!@!!",
        counter: 0,
    };

    UNSAFE_componentWillMount() {
        console.log('Child componentWillMount');
    }

    componentDidMount() {
        console.log('Child componentDidMount');
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }


    handleIncrement = () => {
        this.setState({'counter': this.state.counter + 1})
    };

    render() {
        setTimeout(() => this.setState({'text': 'Обновленный React-компонент!!!'}), 1000);
        return (
            <div>
                <h1 key="Parent">{this.state.header}</h1>
                <Child key="Child" counter={ this.state.counter }/>
                <button onClick={ this.handleIncrement}>+1</button>
            </div>

        )
    }
}
