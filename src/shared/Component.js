import React from 'react';
import { Link } from 'react-router';

export default class Component extends React.Component {
  render () {
    return <div className="Component"><Link to='/'>{this.props.msg}</Link></div>
  }
}
