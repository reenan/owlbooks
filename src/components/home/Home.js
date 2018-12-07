import React from 'react'
import PropTypes from 'prop-types'
import './Home.css'

const Home = ({ user }) => (
  <div>
    <h2>Home</h2>
  </div>
)

Home.propTypes = {
  user: PropTypes.object.isRequired
}

export default Home
