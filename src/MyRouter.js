import React from 'react';
import MapOnMovies from './Movie/Map On Movies';
import Calculator from './Calculator/Calculator';
import LifeCycleComponent from './LifeCycleDemo/LIfeCycleDemo';
import { Route } from "react-router-dom";
import  ParentToChild  from './ParentToChild/ParentToChild';
import ChildToParent from './ChildToParent/ChildToParent';
import ChildToChild from './ChildToChild/ChildToChild';
import EvenOrOdd from './Events/InputEvents';
import GetAPI from './GetAPIDemo/getAPI';

export function MyRouter() {
  return (
    <div className="router">
      <Route path="/LCC"> <LifeCycleComponent /> </Route>
      <Route path="/movies"> <MapOnMovies /> </Route>
      <Route path="/cal"> <Calculator /> </Route>
      <Route path="/Parent-To-Child"> <ParentToChild /> </Route>
      <Route path="/Child-To-Parent"> <ChildToParent /> </Route>
      <Route path="/Child-To-Child"> <ChildToChild /> </Route>
      <Route path="/EvenOrOdd"> <EvenOrOdd /> </Route>
      <Route path="/GetAPI"> <GetAPI /> </Route>
    </div>
  );
}
