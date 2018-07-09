import React from 'react'
import PropTypes from 'prop-types'
import { CommentaryBox, AnimalRow } from '../styled'
import Svg from './svg.jsx'

export default class Whale extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    animalSlug: PropTypes.string.isRequired,
    animalIndex: PropTypes.number.isRequired,
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
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    return (
      <div>
        <AnimalRow>
          <CommentaryBox>{'whale pre comment'}</CommentaryBox>
        </AnimalRow>

        <AnimalRow>
          <Svg />
        </AnimalRow>

        <AnimalRow>
          <CommentaryBox>{'whale post comment'}</CommentaryBox>
        </AnimalRow>
      </div>
    )
  }
}
