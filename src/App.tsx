import React from 'react';
import './index.scss';
import './app.scss';
import HeaderComp from './components/header';
import { SectionComp } from './components/sections/SectionComp';
import { Tile, Link, TextArea, TextInput, Button } from '@carbon/react';
import { TextInputs } from './components/textInput/TextInputs';
import { Provider } from 'react-redux';
import store from './store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <HeaderComp />
        <Tile style={{ marginTop: 55 }}><h1>BCM-DemoID</h1></Tile>
        <Tile style={{ margin: 50 }} id="tile-1">
          <TextInputs />
        </Tile>
        <SectionComp />
      </Provider>
    </>
  );
};
