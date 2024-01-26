import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import DetectiveShow from '../pages/DetectiveShow'
import mockDetectives from '../mockDetectives'

test('renders detective details', () => {
  const testDetective = mockDetectives[1] // replace 0 with the index of the detective you want to test
  render(
    <MemoryRouter initialEntries={[`/detective/${testDetective.id}`]}>
      <DetectiveShow />
    </MemoryRouter>
  )

  const nameElement = screen.getByText(testDetective.name)
  expect(nameElement).toBeInTheDocument()
})