import React from 'react'
import PropTypes from 'prop-types'
import AnimalRows from 'components/animal-rows'
import Empty from 'components/common/empty'
import { Main, Button, MainTitle, AnimalsWrap } from './styled'

/**
 * main view of app
 * @type {function}
 */
export default class MainView extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    // stateProps
    animals: PropTypes.array.isRequired,
    // dispatchProps
    sortAscend: PropTypes.func.isRequired,
    sortDescend: PropTypes.func.isRequired,
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
      // stateProps
      animals,
      // dispatchProps
      sortAscend,
      sortDescend,
    } = this.props

    const animalOrder = animals.map((animal, index) => ({
      animalSlug: animal.slug,
      animalIndex: index,
    }))

    return (
      <Main>
        <MainTitle>{'HOW MUCH DO WE BEAT?'}</MainTitle>
        <Button direction={ 'high' } onClick={ sortAscend }>
          {'high'}
        </Button>
        <Button direction={ 'low' } onClick={ sortDescend }>
          {'low'}
        </Button>

        <AnimalsWrap>
          {animalOrder.map(({ animalSlug, animalIndex }) => {
            const TheAnimalRows = AnimalRows[animalSlug] || Empty
            return (
              <TheAnimalRows
                key={ `animals-${animalIndex}-${animalSlug}` }
                animalSlug={ animalSlug }
                animalIndex={ animalIndex }
              />
            )
          })}
        </AnimalsWrap>
      </Main>
    )
  }
}
