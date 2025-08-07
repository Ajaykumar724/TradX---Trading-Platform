import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
// import HomePage from '../src/landing_page/dashboard/homePage';
// import Hero from '../Eduction';
import Eduction from '../Eduction';


// test suite

describe("Hero Component", ()=> {
    test("renders image", ()=>{
        render(<Eduction/>);
        const heroImage = screen.getByAltText("eduction image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","/images/media/education.svg");
    });
});
