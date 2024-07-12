import React from "react";
import HeroImage from "../HeroImage/Heroimage";
import MyNavbar from "../Navbar/Navbar";
import { StyledEngineProvider } from '@mui/material/styles';

export default function Homepage(){
    return (
        <StyledEngineProvider injectFirst>
<MyNavbar/>
<HeroImage/>
    </StyledEngineProvider>

    )
}
