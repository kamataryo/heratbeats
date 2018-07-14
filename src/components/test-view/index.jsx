import React from 'react'
import SkewedBackground from 'components/skewed-background'

export const TestView = () => {
  return (
    <SkewedBackground colors={ ['red', 'green', 'blue'] } slope={ 10 }>
      <div>{'aaa'}</div>
      <div>{'bbb'}</div>
      <div>{'ccc'}</div>
      <div>{'ddd'}</div>
    </SkewedBackground>
  )
}

export default TestView
