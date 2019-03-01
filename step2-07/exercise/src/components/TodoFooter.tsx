import React from 'react';
import { Store } from '../store';
import { DefaultButton, Text, Stack } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { actions } from '../actions';

// TODO: after connecting to view, erase the ?'s
interface TodoFooterProps {
  clear?: () => void;
  todos?: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const { todos } = props;
  const itemCount = todos ? Object.keys(todos).filter(id => !props.todos[id].completed).length : 0;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

/*
TODO: uncomment this and fill out the below code

function mapStateToProps(state: Store) {
  // TODO: FILL THIS OUT
}

function mapDispatchToProps(dispatch: any) {
  // TODO: FILL THIS OUT
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFooter);

export { component as TodoFooter };
*/
