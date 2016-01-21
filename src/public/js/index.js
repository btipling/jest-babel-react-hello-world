import React from 'react';
import { render } from 'react-dom';
import Component from './component';

function jsRunner(...args) {
    const [ msg ] = args;
    return () => {
      render(<Component msg={msg}/>, document.getElementById('content'));
  }
}
jsRunner('Ran JS')();
