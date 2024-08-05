// File: src/views/creator/Game2Page.jsx
import React from 'react';
import styled from 'styled-components';

const Game8Page = () => {
    return (
        <PageWrapper>
            <h1>Game 8</h1>
            <p>Details and content for Game 8.</p>
        </PageWrapper>
    );
};

export default Game8Page;

const PageWrapper = styled.div`
    padding: 20px;
    background-color: var(--clr-violet-dark-active);
    color: #fff;
`;
