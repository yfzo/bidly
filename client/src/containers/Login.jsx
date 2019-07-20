export default class Login {
  login = (e) => {
    // axios.post('/api/login')
    // fetch()
  }

  render() {
    return (
      <div>
        <h1>Login!</h1>
        <LoginForm onSubmit={this.login} />
      </div>
    )
  }
}


// Dumb Component
export default class LoginForm {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}></form>
    )
  }
}