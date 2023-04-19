import React, { ReactNode } from 'react';
import NavBar from '../components/shared/Navbar';





const LayoutHoc = (PassedComponent : () => JSX.Element ) => {

    const LayoutPage = () => {
        return (
            <>
                <NavBar />
                <div style={{marginTop:20}}>
                    <PassedComponent />
                </div>
            </>
        );
    }

    return LayoutPage;
}

export {LayoutHoc as LayoutPage}