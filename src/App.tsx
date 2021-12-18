import { Grid } from "@chakra-ui/react"
import React from "react"
import "./App.css"
import { Header } from "./components/header/Header"
import { Layout } from "./components/Layout"
import { Navigator } from "./components/navigator/Navigator"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IndexView } from "./components/views/Index"
import customTheme from "./assets/theme"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { DispatchType, PhoneAction, PhoneState } from "./store/types"
import { AddView } from "./components/views/Add"

const store: Store<PhoneState, PhoneAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Header />
          <Grid
            templateColumns="260px auto"
            bg={customTheme.colors.medium}
            borderBottomLeftRadius={20}
            borderBottomRightRadius={20}
          >
            <Navigator />
            <Routes>
              <Route path="/" element={<IndexView />} />
              <Route path="/add" element={<AddView />} />
            </Routes>
          </Grid>
        </Layout>
      </Provider>
    </BrowserRouter>
  )
}

export default App
