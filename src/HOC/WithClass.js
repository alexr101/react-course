import React from 'react';

// Wrapper class to wrap exports
const WithClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default WithClass;