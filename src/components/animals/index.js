import _whale, { slug as whaleSlug } from './whale'
import _cat, { slug as catSlug } from './cat'

export const Whale = _whale
export const Cat = _cat
export default {
  [whaleSlug]: Whale,
  [catSlug]: Cat,
}
