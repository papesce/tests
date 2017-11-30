import * as React from 'react';

export interface CounterProps {
//    name: string;
    counter?: number;
    onIncrement?: () => void;
    onCancel?: () => void;
//    onDecrement?: () => void;
}

class Counter extends React.Component<CounterProps, object> {
    constructor(props: CounterProps) {
        super(props);
        this.plusClick = this.plusClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }
    cancelClick() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
    plusClick() {
        if (this.props.onIncrement) {
            this.props.onIncrement();
        }
    }
    render() {
        const { counter } = this.props; 
        return (
        <div>
            <h1>Counter sample </h1>
            <h2>Clicked {counter}</h2>
            <button onClick={this.plusClick}>+</button>
            <button onClick={this.cancelClick}>cancel</button>
        </div>
        );
    }
} 

export default Counter;