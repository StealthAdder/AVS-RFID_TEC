import PropTypes from "prop-types";
import React from "react";

const Button = ({ text, color }) => {
    return (
        <button className="btn" style={{ backgroundColor: color }}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: "steelblue",
};

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
};

export default Button;
