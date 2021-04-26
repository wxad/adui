import React, { memo } from "react"
import PropTypes from "prop-types"

const Memo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
)

Memo.propTypes = {
  children: PropTypes.any.isRequired,
}

export default memo(Memo)
