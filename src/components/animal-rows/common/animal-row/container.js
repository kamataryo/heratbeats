import { connect } from 'react-redux'
import AnimalPanel from './'

/**
 * map state To Props
 * @param  {object} state state
 * @return {object}       state props
 */
export const mapStateToProps = state => {
  return {
    animals: state.animals,

    // They may be going to be deleted
    isTouchDevice: state.browserMeta.isTouchDevice,
    isMouseDevice: state.browserMeta.isMouseDevice,
  }
}

const ConnectedAnimalRows = connect(mapStateToProps)(AnimalPanel)

export default ConnectedAnimalRows
