import React from 'react';
import TextField from '@material-ui/core/TextField';
import UseInputState from './UseInputState';

const TodoForm = (props) => {
    const { value, reset, onChange } = UseInputState('');
    return (
        <form 
            onSubmit={ e => {
                e.preventDefault();
                props.saveTodo(value);
                reset();
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value}
            />
        </form>
    )
}

export default TodoForm;