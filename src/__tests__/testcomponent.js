import '../tests/init';
import React from 'react';
import { findDOMNode } from 'react-dom';
import Component from 'shared/Component';
import { findRenderedComponentWithType,
         renderIntoDocument,
         Simulate,
         scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';

describe('Component', () => {

  it('is a Component', () => {
    expect(typeof Component).toEqual('function');
  });

});


