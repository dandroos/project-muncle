import React from "react"
import { Provider } from "react-redux"
import store from "./state/store"

const wrapWithProvider = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export default wrapWithProvider
