import React from 'react';

export default function Accordion ({ children, ...restProps }) {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title