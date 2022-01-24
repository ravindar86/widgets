import { useEffect, useState } from "react";

const Route = ({path, children}) => {

    // added to refresh the content in the page
    const[currentPath,setCcurrentPath] = useState(window.location.pathname);

    useEffect(() =>{
        const onLocationChange = () => {
            console.log('Location Changed...');
            setCcurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate',onLocationChange);
        }
    });

    return currentPath === path ? children : null;
};



export default Route;