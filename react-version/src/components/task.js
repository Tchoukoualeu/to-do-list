import React from 'react';
import './../App.css';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';


const Task = (props) => {

    const style = {
        task: {
            textDecoration: "line-through",
        }
    }

    return (
        <div className="code">
            <div style={props.done ? style.task : null} onClick={() => props.crossOut()} >{props.task}</div>
            <div className="close" style={{marginLeft: 'auto'}} onClick={() => props.deleteTask()}><CloseIcon /></div>
        </div>
    )
}

Task.propTypes = {
    crossOut: PropTypes.func,
    deleteTask: PropTypes.func,
    tast: PropTypes.array,
    done: PropTypes.bool
}

export default Task;