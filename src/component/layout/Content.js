import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from '../page/HomePage';
import SearchPage from '../page/Search/SearchPage';
import CategoryList from '../page/Search/CategoryList';
import Playlist from '../page/Playlist';
import ArtistTopTracks from '../page/ArtistTopTracks';

function Content() {
  return (
    <Container maxWidth="xl" sx={{ py: 3, height: '100%' }}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/home`} element={<HomePage />} />
        <Route
          path={`${process.env.PUBLIC_URL}/search`}
          element={<SearchPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/search/:category`}
          element={<CategoryList />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/playlist/:id`}
          element={<Playlist />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/artist/:id`}
          element={<ArtistTopTracks />}
        />
        <Route
          path="/*"
          element={<Navigate to={`${process.env.PUBLIC_URL}/home`} />}
        />
      </Routes>
    </Container>
  );
}

export default Content;
