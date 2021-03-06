import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from './App'

class AppContainer extends Component {
  render () {
    return (
      <App {...this.props} />
    )
  }
}

AppContainer.propTypes = {
  R: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  user: PropTypes.object,
}

const stateToProps = ({ R, user }) => ({
  R,
  user
})

export default withRouter(connect(stateToProps)(AppContainer))
