import React from 'react';

export default class MyComponent extends React.Component {
  render () {
    return <div className="Component">{this.props.msg}</div>
  }
}
