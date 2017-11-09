import React from 'react'
import PropTypes from 'prop-types'
import Hearbeat from '../heartbeat'
import { Panel, Academic } from './styled'

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
    const {
      animal: {
        academic,
        biometrix: { heartbeat },
        names: { ja: jaName, en: enName },
      },
    } = this.props
    const heartbeatAverage = (heartbeat.min + heartbeat.max) / 2

    return (
      <Panel>
        <Hearbeat { ...heartbeat } />
        <dl>
          <dt>{'name'}</dt>
          <dd>{`${jaName} ${enName}`}</dd>
        </dl>
        <dl>
          <dt>{'学名'}</dt>
          <dd>
            <Academic>{academic}</Academic>
          </dd>
        </dl>
        <dl>
          <dt>{'心拍数'}</dt>
          <dd>{`${heartbeatAverage} bpm`}</dd>
        </dl>
      </Panel>
    )
  }
}
