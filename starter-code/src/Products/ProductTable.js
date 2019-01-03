import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
// import ProductRow from './ProductRow'

const productTable = (props) => {
  let categoryFirst = null
  let categorySec = null
  props.products.map(e => {
    if (e.category === 'Sporting Goods') {
      categoryFirst = <ProductCategoryRow category={e.category} />
    } else {
      categorySec = <ProductCategoryRow category={e.category} />
    }
  })
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          {categoryFirst}
        </tr>
        <tr>
          {categorySec}
        </tr>
      </tbody>
    </table>
  )
}

export default productTable
