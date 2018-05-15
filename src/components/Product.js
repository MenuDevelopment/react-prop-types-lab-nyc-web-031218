import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{

  render(){
    return (
      <div>
        <h2>{this.props.name} </h2>
        <ul>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function properWeight (weight) {
  return weight >= 80 && weight <= 300
}

// function customProp (props, weight, Product) {
//   debugger
//   if (!props[weight] || !properWeight(props[weight]) || !(typeof props[weight] === "number")) {
//     return new Error(
//       'Invalid prop `' + weight + '` supplied to' +
//       ' `' + Product + '`. Validation failed.'
//     );
//   }
// }

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    if (!props[propName]) {
      return new Error(
        'Invalid prop ' + propName + ' supplied 1'
      )
    }
    if (isNaN( props[propName])) {
      return new Error(
        'Invalid prop ' + propName + ' supplied 3'
      )
    }
    if (!properWeight(props[propName])){
      return new Error(
        'Invalid prop ' + propName + ' supplied 2 '
      )
    }
      return null
  }

}



export default Product
