import * as React from 'react';

interface Props {
  keyValue: string,
  handleClick: (keyValue: string) => void;
}

export default class CalculatorButton extends React.Component<Props, {}> {

  handleClick() {
    this.props.handleClick(this.props.keyValue);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.props.keyValue}
      </button>
    );
  }
}