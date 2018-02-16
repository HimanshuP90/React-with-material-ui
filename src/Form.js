import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class Form extends Component {
  render() {
    return (
		<div>
		    <TextField
		      hintText="Hint Text"
		    /><br />
		    <br />
		</div>
    );
  }
}

export default Form;
