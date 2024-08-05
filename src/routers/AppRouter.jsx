import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll } from '../views/index';
import BaseLayout from "../layouts/BaseLayout";
import Board from '../views/creator/Game1Page/components/Board/Board.component';

import Game4Page from '../views/creator/Game4Page';
import Game5Page from '../views/creator/Game5Page';
import Game6Page from '../views/creator/Game6Page';
import Game7Page from '../views/creator/Game7Page';
import Game8Page from '../views/creator/Game8Page';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <BaseLayout /> }>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/error" element = { <Error /> } />
          <Route path = "/games" element = { <ViewGameAll /> } />
          <Route path = "/games/:gameId" element={<ViewGameDetails />} />
          <Route path = "/stores" element={<ViewStoreAll />} />
          <Route path = "/stores/:storeId" element={<ViewStoreDetails />} />
          <Route path = "/creators" element = { <ViewCreatorAll />} />
          <Route path = "*" element = { <Error />} />
          <Route path = '/card1' element={<Board/>}/>
          <Route path = '/card4' element={<Game4Page/>}/>
          <Route path = '/card5' element={<Game5Page/>}/>
          <Route path = '/card6' element={<Game6Page/>}/>
          <Route path = '/card7' element={<Game7Page/>}/>
          <Route path = '/card8' element={<Game8Page/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
