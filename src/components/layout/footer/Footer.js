import React from "react";
import { Media } from 'react-breakpoints';
import { MobileFooter, TabletFooter, DesktopFooter } from "./FooterTypes";

function Footer (){
    return (
        <Media>
            {({ breakpoints, currentBreakpoint }) => {
                switch (currentBreakpoint){
                    case breakpoints.mobile:
                        return <MobileFooter />
                    case breakpoints.tablet:
                        return <TabletFooter />
                    case breakpoints.desktop:
                        return <DesktopFooter />   
                }
            }}
        </Media>
)}

export default Footer;