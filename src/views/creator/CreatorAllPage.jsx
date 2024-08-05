// File: src/views/creator/CreatorAllPage.jsx
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllCreators, selectAllCreatorsStatus, selectCreatorsNextPage, selectCreatorsPrevPage } from '../../redux/store/creatorSlice';
import { useEffect, useState } from 'react';
import { fetchAsyncCreators } from '../../redux/utils/creatorUtils';
import { Pagination, Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import GameCard from './GameCard';

const backgroundImages = [
    'https://i.pinimg.com/originals/78/4b/86/784b86fd3ed0cb6aba601215e1e03852.jpg',
    'https://i.pinimg.com/736x/6a/79/0e/6a790eea1b97e25e4ff32eea9e2e45c1.jpg',
    'https://i.pinimg.com/736x/b6/a0/dd/b6a0dd546b37e3a028c0347680fc1672.jpg',
    'https://static.vecteezy.com/system/resources/previews/014/319/773/original/rock-paper-scissors-posters-free-vector.jpg',
    'https://i.pinimg.com/736x/99/52/5e/99525ef0bf1ef361a6db0a7b49eac1bd.jpg',
    'https://i.pinimg.com/736x/ee/12/d6/ee12d6006383f9c31789d51272777f5b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5m6aXRp4tKB40EvWD0aSwkXz6xgemPWG8w&s',
    'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F01%2Fdragonest-auto-chess-moba-spinoff-game-000.jpg?w=960&cbr=1&q=90&fit=max',
];

const CreatorAllPage = () => {
    const dispatch = useDispatch();
    const creators = useSelector(selectAllCreators);
    const creatorsStatus = useSelector(selectAllCreatorsStatus);
    const nextPage = useSelector(selectCreatorsNextPage);
    const prevPage = useSelector(selectCreatorsPrevPage);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchAsyncCreators(page));
    }, [page]);

    const pageHandler = (pageValue) => setPage(pageValue);

    return (
        <CreatorAllPageWrapper>
            <div className='sc-creators section'>
                <div className='container'>
                    <Title titleName={{
                        firstText: "OUR",
                        secondText: "GAMES"
                    }} />
                    {
                        creatorsStatus === STATUS.LOADING ? <Preloader /> : creators?.length > 0 ? <>
                            <CreatorList creators = { creators } />
                            <Pagination pageHandler={ pageHandler } nextPage={ nextPage } prevPage={ prevPage } currentPage={ page } />
                        </> : "No creators found!"
                    }
                    <GameCardsWrapper>
                        {backgroundImages.map((image, index) => (
                            <GameCard
                                key={index}
                                title={`Game ${index + 1}`}
                                description={`Description for game ${index + 1}`}
                                backgroundImage={image}
                                route={`/card${index + 1}`}
                            />
                        ))}
                    </GameCardsWrapper>
                </div>
            </div>
        </CreatorAllPageWrapper>
    )
}

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
    background-color: var(--clr-violet-dark-active);
    .sc-creators{
        min-height: 100vh;
        padding-top: 65px;
    }
`;

const GameCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;
