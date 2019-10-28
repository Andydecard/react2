import React from 'react';
import ReactDOM from 'react-dom';


// const messages = ['Хай', 'Как сам?'];
//
// const Message = (props) => <div className="message">{props.text}</div>;
//
// const sendMessage = () => {
//     messages.push('Окей!');
//     ReactDOM.render(
//         <MessageField messages={ messages } />,
//         document.getElementById('root'));
// };
//
// const MessageField = (props) => <div>
//     <h1>Чат</h1>
//     {props.messages.map(message => <Message text={ message } />) }
//     <button onClick={ sendMessage }>Отправить сообщение</button> </div>;

ReactDOM.render(
    <MessageField/>,
    document.getElementById('root'),
);