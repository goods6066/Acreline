// Temporary probe: a deliberately failing assertion, used once to prove that a
// red `verify` check blocks merges to main. Removed with this branch.
import { expect, test } from 'bun:test'

test('red probe: this assertion is intentionally wrong', () => {
  expect(2 + 2).toBe(5)
})
