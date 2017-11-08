import initialAnimals from 'contents/animals.json'

const animalsReducer = (state = initialAnimals, action) => {
  console.log(action)
  return state
}

export default animalsReducer
