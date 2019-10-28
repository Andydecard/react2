import React from 'react';
import Message from './Message';
import '../styles/style.css';

const botAnswers = ['Отстань, я робот','Кто такая Сири????!!!','Погорите лучше с Алисой','Тебе конец, кожанный мешок'];

function randomChoice(arr){
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }]
    };

    componentDidUpdate(){
        const { messages } = this.state;
        if (messages[messages.length - 1].sender === 'me'){
            setTimeout(() => this.setState({ 'messages': [...this.state.messages, { text: randomChoice(botAnswers), sender: 'bot' }]}), 1000);
        }
    }

    handleSendMessage = () => {
        const { messages } = this.state;
        this.setState({'messages': [...messages, { text: "Нормально!!!!", sender: 'me' }]});
    };

    handleChange = (event) =>{
        console.log(event.target.value);
    }

    render() {
    const { messages } = this.state;

    const messageElements = messages.map(message =>
        <Message key={ message.text } text={ message.text} sender={ message.sender }/>);
        return (
            <div className="layout">
            <div className="message-field">
                { messageElements }
            </div>
                <input onChange={ this.handleChange } />
            <button onClick={ this.handleSendMessage }>Отправить сообщение</button>
        </div>


        )
    }
}
