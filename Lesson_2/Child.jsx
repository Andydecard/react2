import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component {
    static propTypes = {
        counter: PropTypes.number,
    };

    static defaultProps = {
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

    render() {
        console.log('Child render');
        return (
            <h2>Это компонент Child. Counter: { this.props.counter }</h2>
        )
    }
}
