import { fireEvent, screen } from "@testing-library/react"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"
import { SideBar } from "widgets/SideBar"

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<SideBar className="" />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle', () => {
        renderWithTranslation(<SideBar className="" />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
