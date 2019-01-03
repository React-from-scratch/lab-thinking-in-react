import React, { Fragment } from 'react'

const ProductCategoryRow = (props) => {
  return (
    <Fragment>
      <tr>
        <th>{props.category}</th>
      </tr>
    </Fragment>
  )
}

export default ProductCategoryRow
