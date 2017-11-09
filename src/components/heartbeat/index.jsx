import React from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { Heart, HeartbeatsWrap as _HeartbeatsWrap } from './styled'

export const HeartbeatsWrap = _HeartbeatsWrap

/**
 * render beating heart
 * @type {function}
 */
export default class Hearbeat extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    // ownProps
    bpm: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
      }),
    ]).isRequired,
    delay: PropTypes.number,
    bloodHaemType: PropTypes.oneOf(['hemocyanin', 'hemoglobin']).isRequired,
    size: PropTypes.number,
  }

  /**
   * defaultProps
   * @type {object}
   */
  static defaultProps = {
    delay: 0,
    size: 1,
  }

  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    // those state will be used to provide oscillation to heartbeats pulse.
    this.state = { counter: 0, timerId: false }
  }

  /**
   * componentWillMount
   * @return {void}
   */
  componentWillMount() {
    const timerId = setInterval(
      () =>
        this.setState(
          update(this.state, {
            counter: {
              $set: this.state.counter + 1,
            },
          }),
        ),
      1000,
    )
    this.setState(
      update(this.state, {
        timerId: {
          $set: timerId,
        },
      }),
    )
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return false
  }

  /**
   * componentWillUnmount
   * @return {void}
   */
  componentWillUnmount() {
    // please stop
    clearInterval(this.state.timerId)
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    // const { counter } = this.state
    const { bpm, delay, bloodHaemType, size } = this.props
    const bpmAve = typeof bpm === 'number' ? bpm : (bpm.min + bpm.max) / 2

    return (
      <div>
        <Heart { ...{ perMin: bpmAve, delay, bloodHaemType, size } } />
      </div>
    )
  }
}
