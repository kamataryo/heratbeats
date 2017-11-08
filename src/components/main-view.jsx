import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * map state To Props
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = state => {
  return {
    animals: state.animals,
  }
}

@connect(mapStateToProps)
export default class MainView extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    // stateProps
    animals: PropTypes.object.isRequired,
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return true
  }
  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { animals } = this.props
    return <div>{JSON.stringify(animals)}</div>
  }
}
