import { useEffect } from 'react';

const containerStyles = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
};

const Container = ({ children }) => {
    useEffect(() => {
        console.log('Container', children);
    }, [children]);

    return (
        <div style={containerStyles}>{children}</div>
    );
};
 
export default Container;