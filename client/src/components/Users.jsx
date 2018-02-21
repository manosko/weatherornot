import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInput: true
    }
  }

  render() {
    return (
      <div>
        <h1>hello.</h1>
        {!this.state.toggleInput ?
          <span
            onClick={() => {
              console.log(`ow! bye ${this.props.username}`);
              this.setState({toggleInput: true})
            }}>
            {this.props.username}
          </span>
          :
          <input
            autoFocus
            type="text"
            placeholder={this.props.username || "name"}
            value={this.state.input}
            // onClick={() => {
            //   this.this.props.handleName(this.props.username)
            // }}

            // onChange={(event) => {
            //   this.setState({
            //     username: event.target.value
            //   })
            // }}
            onKeyUp={event => {
              if (event.keyCode === 13) {
                this.props.handleName(event.target.value)
                this.setState({
                  toggleInput: false
                })
                // username: event.target.value
                // is setState async yo?
                // console.log(`hi, ${this.props.username}`)
              }
            }}
          />
        }
      </div>
    )
  }
}

export default Users;
