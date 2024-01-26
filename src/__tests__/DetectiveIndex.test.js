import { render, screen } from '@testing-library/react';
import DetectiveIndex from "../pages/DetectiveIndex"
import { BrowserRouter } from 'react-router-dom';
import mockDetectives from '../mockDetectives';

describe("<DetectiveIndex />", () => {
    it ("renders detective cards", () => {
        render(
            <BrowserRouter>
              <DetectiveIndex detectives={mockDetectives}/>
            </BrowserRouter>
        )
        mockDetectives.forEach(detective => {
            const detectiveName = screen.getByText(detective.name)
            expect(detectiveName).toBeInTheDocument()
        })
    })
})