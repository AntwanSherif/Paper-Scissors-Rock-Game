import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Button({ outlined, className: additionalClassNames, children, ...otherProps }) {
    const computedClasses = outlined ? 'bg-transparent border-header' : 'bg-white border-white text-dark';
    
    return (
        <button
            className={clsx(
                'h-11 w-32 border-2 px-4 py-2 rounded-lg tracking-widest focus:outline-none',
                computedClasses,
                additionalClassNames
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    outlined: PropTypes.bool.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    outlined: false,
    className: ''
}