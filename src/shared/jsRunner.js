import React from 'react';
import { render } from 'react-dom';
import Component from './component';

export default function jsRunner(...args) {
    const [ msg ] = args;
    return () => {
      render(<Component msg={msg}/>, document.getElementById('content'));
  }
}
