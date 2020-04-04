import React from "react"
import headerStyles from "./header.module.css"
export default ({ children }) => (
  <h1 className={headerStyles.header}>{children}</h1>
)
