import React from "react";

/**
 * Main container component
 * @param {{children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
export const MainContainer = (props) => (
    <main>
        {props.children}
    </main>
);

export default MainContainer;