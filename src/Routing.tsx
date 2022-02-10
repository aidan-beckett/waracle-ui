import React, { FunctionComponent } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CakesCreate from './components/cakes/CakesCreate';
import CakesEdit from './components/cakes/CakesEdit';
import CakesList from './components/cakes/CakesList';

const Routing: FunctionComponent = () => {
  return (
    <Routes>
      <Route
        path="/cakes"
        element={<CakesList/>}
      />
      <Route
        path="/cakes/create"
        element={<CakesCreate/>}
      />
      <Route
        path="/cakes/:id/edit"
        element={<CakesEdit/>}
      />
      <Route path="*"
        element={<Navigate to="/cakes"/>}
      />
    </Routes>
  );
}

export default Routing