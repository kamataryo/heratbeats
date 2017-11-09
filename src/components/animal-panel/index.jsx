import React from 'react'
import PropTypes from 'prop-types'
import Hearbeat from '../heartbeat'
import { Panel } from './styled'

export default class AnimalPanel extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    animal: PropTypes.object.isRequired,
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
    const { animal: { biometrix: { heartbeat }, names } } = this.props
    const heartbeatAverage = (heartbeat.min + heartbeat.max) / 2

    return (
      <Panel>
        <Hearbeat { ...heartbeat } />
        <ul>
          <li>{names.ja}</li>
          <li>{`${heartbeatAverage} beats/sec.`}</li>
        </ul>
      </Panel>
    )
  }
}
