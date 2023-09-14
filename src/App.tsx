import React from 'react'
import './index.scss'
import './app.scss';
import { TestCarbonComp } from './components/TestCarbonComp'
import { DataTableComp } from './components/dataTable/DataTableComp'
import HeaderComp from './components/header';

export const App = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <HeaderComp />
      <DataTableComp />
    </>

  )
}
