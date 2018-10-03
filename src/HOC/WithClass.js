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

const withClass = (WrappedComponent, className) => {
    
    class WithClass extends Component {
        render() {
            return  (
                <div className={className}>
                    <WrappedComponent {...this.props} ref={this.props.forwardedRef}/>
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {        
        return <WithClass {...props} forwardedRef={ref} />
    });

}
export default withClass;