//ПОКА В ПРОЦЕССЕ ПОНИМАНИЯ, ГДЕ ЖЕ ОШИБКА

import React from 'react';
import Message from './Message';
import '../styles/styles.css';


const botAnswers = ['Отстань, я робот','Кто такая Сири????!!!','Погорите лучше с Алисой','Тебе конец, кожанный мешок'];

function randomChoice(arr){
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }]
    };

    componentDidUpdate(){
        if (this.state.messages[this.state.messages.length - 1].sender === 'me'){
            setTimeout(() => this.setState({ 'messages': [...messages, { test: randomChoice(botAnswers), sender:'bot'}]}), 1000);
        }
    }

    handleSendMessage = () => {
        const { messages } = this.state;
        this.setState({'messages': [...messages, { text: 'Нормально', send: 'me'}]})};

    render() {
    const { messages } = this.state;

    const messageElements = messages.map(message => <Message key= { message.text } text={ message.text }/>);
        return (
            <div>
                <h1 id="header" style={{ backgroundColor: 'blue' } }>Чат</h1>
                { messageElements }
                <button onClick={ this.handleSendMessage }>Отправить сообщение</button>
            </div>

        )
    }
}
