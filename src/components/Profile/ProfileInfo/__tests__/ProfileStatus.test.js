import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from '../ProfileStatus';

// in package.json should be:   "test": "react-scripts test"

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="_StAtUs" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('_StAtUs');
  });

  test("after creation <span> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="_Status" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });

  test('after creation <input> should be displayed', () => {
    const component = create(<ProfileStatus status="_Status" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.length).not.toBeNull();
  });

  test('after creation <span> with correct status should be displayed', () => {
    const component = create(<ProfileStatus status="_Status" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('_Status');
  });

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status="_Status" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('_Status');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="_Status" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deActivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
