import { Component } from 'react';
import classes from './User.module.css';

// class component
class User extends Component{
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
