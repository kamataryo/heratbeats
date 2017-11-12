import { connect } from 'react-redux'
import AnimalPanel from './'

/**
 * map state To Props
 * @param  {object} state state
 * @return {object}       state props
 */
export const mapStateToProps = state => {
  return {
    scaleEnabled: state.animals.scale.enabled,
    ppm: state.animals.scale.ppm,
    isTouchDevice: state.browserMeta.isTouchDevice,
    isMouseDevice: state.browserMeta.isMouseDevice,
  }
}

export default connect(mapStateToProps)(AnimalPanel)
