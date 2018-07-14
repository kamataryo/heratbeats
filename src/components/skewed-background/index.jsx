import React from 'react'
import PropTypes from 'prop-types'
import { EndSection, SkewedSection, InsideWrap } from './styled'

export const SkewedBackground = props => {
  const { colors, children, slope } = props

  return (
    <div>
      {children.map((Child, index) => {
        const Section =
          index === 0 || index === children.length - 1
            ? EndSection
            : SkewedSection

        const color = colors[index % colors.length]
        const prevColor = colors[(index - 1) % colors.length]
        const nextColor = colors[(index + 1) % colors.length]

        return (
          <Section
            key={ index }
            color={ color }
            prevColor={ prevColor }
            nextColor={ nextColor }
            slope={ slope }
          >
            <InsideWrap>{Child}</InsideWrap>
          </Section>
        )
      })}
    </div>
  )
}

/**
 * propTypes
 * @type {object}
 */
SkewedBackground.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  slope: PropTypes.number,
}

SkewedBackground.defaultProps = {
  slope: -7,
}

export default SkewedBackground
