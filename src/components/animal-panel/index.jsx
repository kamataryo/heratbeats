import React from 'react'
import PropTypes from 'prop-types'
import Hearbeat, { HeartbeatsWrap } from '../heartbeat'
import { Wrap, Panel, Presentable, Dl, Academic } from './styled'
import Charcters from '../animals'
import { Heart } from '../heartbeat/styled'

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
    this.state = { display: false }
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

  onShowEvent = () => this.setState({ display: true })
  onHideEvent = () => this.setState({ display: false })

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { display } = this.state
    const {
      animal: {
        academic,
        slug,
        names: { ja: jaName, en: enName },
        biometrix: {
          heart: { bpm, count = 1 },
          blood: { hemoType = 'hemoglobin' } = {},
        },
        displayProps,
      },
    } = this.props
    const bpmAve = typeof bpm === 'number' ? bpm : (bpm.min + bpm.max) / 2
    const hasCharacter = !!Charcters[slug]
    const Character = hasCharacter ? Charcters[slug] : () => null
    return (
      <Wrap>
        <Panel display={ display } hasCharacter={ hasCharacter }>
          <HeartbeatsWrap>
            {Array(count)
              .fill(0)
              .map((_0, index) => (
                <Hearbeat
                  key={ `${academic}-heart-${index}th` }
                  bpm={ bpm }
                  delay={ index * 100 }
                  bloodHaemType={ hemoType }
                  size={ 1 / Math.sqrt(count) }
                />
              ))}
          </HeartbeatsWrap>
          <Presentable present={ display }>
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
        <Character />
        <Heart
          onClick={ display ? this.onHideEvent : this.onShowEvent }
          onTouchStart={ display ? this.onHideEvent : this.onShowEvent }
          bloodHaemType={ 'hemoglobin' }
          bpm={ bpmAve }
          size={ displayProps.heart.size }
          positionX={ displayProps.heart.position.px }
          positionY={ displayProps.heart.position.py }
          alpha={ displayProps.heart.alpha }
          isPointer
        />
      </Wrap>
    )
  }
}
