import React from 'react';
import PropTypes from 'prop-types';

const textInput = props => (
    <textarea
        placeholder="What do you need to do?"
        className="text"
        value={props.value}
        onChange={props.handleChange}
        onKeyPress={props.handleKeyPress}>

    </textarea>
)

textInput.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleKeyPress: PropTypes.func
}

export default textInput;