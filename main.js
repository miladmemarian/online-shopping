/* eslint-disable no-unused-vars */
var item = [
  {
    name:
      "Buttoned Down Men's Classic Fit Button-Collar Pattern Non-Iron Dress Shirt With Pocket",
    price: '$49.00',
    color: 'Grey',
    image: 'file:///Users/milad/Downloads/81x3tgN0oJL._UY550_.jpg'
  },
  {
    name:
      "Buttoned Down Men's Classic Fit Spread-Collar Solid Non-Iron Dress Shirt",
    price: '$39.00',
    color: 'Pink',
    image: 'file:///Users/milad/Downloads/A1a3EZfPJcL._UY679_.jpg'
  },
  {
    name:
      "Buttoned Down Men's Slim Fit Spread-Collar Pattern Non-Iron Dress Shirt Without Pocket",
    price: '$49.00',
    color: 'Purple',
    image: 'file:///Users/milad/Downloads/A1vyL8SkhsL._UY679_.jpg'
  }
]
function $item(item, itemNumber) {
  var $item = document.createElement('div')
  $item.classList.add('item')
  var $name = document.createElement('div')
  $name.classList.add('name')
  $name.textContent = item[itemNumber].name
  var $image = new Image(200, 260)
  $image.classList.add('image')
  $image.src = item[itemNumber].image
  var $details = document.createElement('div')
  $details.classList.add('details')
  var $select = document.createElement('button')
  $select.classList.add('select')
  $select.textContent = 'Select'
  var $price = document.createElement('div')
  $price.classList.add('price')
  $price.textContent = item[itemNumber].price
  var $color = document.createElement('div')
  $color.classList.add('color')
  $color.textContent = item[itemNumber].color
  $details.append($select, $color, $price)
  $item.append($name, $image, $details)

  return $item
}

function renderItem(component, container) {
  container.appendChild(component)
}

var itemNumber = 3

for (var i = 0; i < itemNumber; i++) {
  renderItem($item(item, i), document.querySelector('.product'))
}
