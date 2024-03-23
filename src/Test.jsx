import React, { Fragment } from "react";


// functional component


const Test = (props) => {
    return(
      <Fragment>
        <div>
          <h1> This is a functional Component</h1>
            <p>name:{' '}{props.name}</p>
            <p> age:{' '}{props.age}</p>
            <p> address: {' '}{props.address}</p>
        </div> 
      </Fragment>
    )
}
export default Test;

// class component

// class Test extends React.Component{
//   render(){
//     return(
//       //run
//         <Fragment>
//           <div>
//           <h1> This is a Class Component</h1>
//           <p>{this.props.name}</p>
//           <p>{this.props.age}</p>
//           </div>
//         </Fragment>
//     )
//   }
// }
// export default Test;


