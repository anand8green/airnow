import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders SDK without crashing', () => {
  render(<App />)
  const linkElement = screen.getByText(/Installed SDK/i)
  expect(linkElement).toBeInTheDocument()
})

test('When you click installed Installed SDK should show', () => {
  render(<App />)
  const installBtn = screen.getByRole('button', { name: 'Installed' })
  expect(installBtn).toBeInTheDocument()
  const heading = screen.getByRole('heading', { name: 'title' })
  expect(heading).toHaveTextContent('Installed SDK')
  const unInstallBtn = screen.getByRole('button', { name: 'Uninstalled' })
  expect(unInstallBtn).toBeInTheDocument()
  fireEvent.click(unInstallBtn)
  expect(heading).toHaveTextContent('Uninstalled SDK')
})
