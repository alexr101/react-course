import React, {Component} from 'react';

// Wrapper class to wrap exports
// const WithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

// or factory method if we need a stateful component

const WithClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}
export default WithClass;