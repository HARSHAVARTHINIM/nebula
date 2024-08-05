// File: src/views/creator/Game2Page.jsx
import React from 'react';
import styled from 'styled-components';

const Game5Page = () => {
    return (
        <PageWrapper>
            <h1>Game 5</h1>
            <p>Details and content for Game 5.</p>
        </PageWrapper>
    );
};

export default Game5Page;

const PageWrapper = styled.div`
    padding: 20px;
    background-color: var(--clr-violet-dark-active);
    color: #fff;
`;
