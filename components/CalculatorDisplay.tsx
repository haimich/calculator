import * as React from 'react';

interface Props {
  value: string;
}

export default class CalculatorDisplay extends React.Component<Props, {}> {
  render() {
    return (
      <div style={{ border: "1px solid gray" }}>{this.props.value}</div>
    );
  }
}