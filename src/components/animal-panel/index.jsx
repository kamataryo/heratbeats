import React from 'react'
import PropTypes from 'prop-types'
import Hearbeat, { HeartbeatsWrap } from '../heartbeat'
import { Panel, Presentable, Dl, Academic } from './styled'

/**
 * render animal panel
 * @type {function}
 */
export default class AnimalPanel extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    animal: PropTypes.object.isRequired,
  }

  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = { isHovered: false }
    this.onShowEvent = this::this.onShowEvent
    this.onHideEvent = this::this.onHideEvent
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

  onShowEvent = () => this.setState({ isHovered: true })
  onHideEvent = () => this.setState({ isHovered: false })

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { isHovered } = this.state
    const {
      animal: {
        academic,
        biometrix: {
          heart: { bpm, count = 1 },
          blood: { hemoType = hemoglobin } = {},
        },
        names: { ja: jaName, en: enName },
      },
    } = this.props
    const bpmAve = typeof bpm === 'number' ? bpm : (bpm.min + bpm.max) / 2

    return (
      <Panel onMouseEnter={ this.onShowEvent } onMouseLeave={ this.onHideEvent }>
        <HeartbeatsWrap>
          {Array(count)
            .fill(0)
            .map((_0, index) => (
              <Hearbeat
                key={ `${academic}-heart-${index}th` }
                bpm={ bpm }
                delay={ index * 100 }
                bloodHaemType={ hemoType }
              />
            ))}
        </HeartbeatsWrap>
        <Presentable present={ isHovered }>
          <Dl>
            <dt>{'name'}</dt>
            <dd>{`${jaName} ${enName}`}</dd>
          </Dl>
          <Dl>
            <dt>{'学名'}</dt>
            <dd>
              <Academic>{academic}</Academic>
            </dd>
          </Dl>
          <Dl>
            <dt>{'心拍数'}</dt>
            <dd>{`${bpmAve} bpm`}</dd>
          </Dl>
        </Presentable>
      </Panel>
    )
  }
}
