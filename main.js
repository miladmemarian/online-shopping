/* eslint-disable no-unused-vars */
var items = [
  {
    id: '0',
    name:
      "Buttoned Down Men's Classic Fit Button-Collar Pattern Non-Iron Dress Shirt With Pocket",
    price: '$49.00',
    color: 'Grey',
    image: 'shirt-grey.jpg',
    size: [' S ', ' M ', ' L ', ' XL '],
    details: [
      '100% Supima® Cotton',
      'Imported',
      'Long-sleeve dress shirt featuring button-down collar and pocket at chest',
      'Luxury Supima cotton with a lightweight finish; straight back yoke with center box pleat'
    ]
  },
  {
    id: '1',
    name:
      "Buttoned Down Men's Classic Fit Spread-Collar Solid Non-Iron Dress Shirt",
    price: '$39.00',
    color: 'Pink',
    image: 'shirt-pink.jpg',
    size: [' M ', ' XL '],
    details: [
      '100% Supima® Cotton',
      'Machine Wash',
      'Long-sleeve dress shirt featuring spread collar and no pocket',
      'Unconditional Satisfaction Guarantee: If you are not completely satisfied with your Buttoned Down shirt at any time, we are happy to give you a full refund'
    ]
  },
  {
    id: '2',
    name:
      "Buttoned Down Men's Slim Fit Spread-Collar Pattern Non-Iron Dress Shirt Without Pocket",
    price: '$49.00',
    color: 'Purple',
    image: 'shirt-purple.jpg',
    size: [' S ', ' L ', ' XL '],
    details: [
      'Imported',
      'Long-sleeve dress shirt featuring spread collar, offered with or without pocket at chest',
      'Buttoned Down shirts are offered in three fits: Slim, Tailored and Classic. Classic fit is our roomiest fit, cut broader across the shoulders and relaxed through the chest and body'
    ]
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
  $details.classList.add('item-details')

  var $select = document.createElement('button')
  $select.classList.add('select')
  $select.setAttribute('data-item-id', item[itemNumber].id)
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

function $itemDetails(item, id) {
  var $details = document.createElement('div')
  $details.classList.add('more')

  var $title = document.createElement('div')
  $title.classList.add('title')

  var $name = document.createElement('div')
  $name.classList.add('name')
  $name.textContent = item[id].name

  var $itemImage = new Image(400, 600)
  $itemImage.classList.add('item-image')
  $itemImage.src = item[id].image

  var $features = document.createElement('ul')
  $features.classList.add('features')
  for (var i = 0; i < item[id].details.length; i++) {
    var $feature = document.createElement('li')
    $feature.appendChild(document.createTextNode(item[id].details[i]))
    $features.appendChild($feature)
  }

  var $size = document.createElement('select')
  $size.classList.add('size')
  for (var j = 0; j < item[id].size.length; j++) {
    var $option = document.createElement('option')
    $option.appendChild(document.createTextNode(item[id].details[i]))
    $option.text = item[id].size[j]
    $size.appendChild($option)
  }

  var $itemPrice = document.createElement('div')
  $itemPrice.classList.add('itemPrice')
  $itemPrice.textContent = item[id].price

  var $itemColor = document.createElement('div')
  $itemColor.classList.add('itemColor')
  $itemColor.textContent = item[id].color

  var $content = document.createElement('div')
  $content.classList.add('content')

  var $addCart = document.createElement('button')
  $addCart.classList.add('addCart')
  $addCart.setAttribute('data-item-id', item[id].id)
  $addCart.textContent = 'Add to Cart'

  $title.append($name, $itemImage)
  $content.append($itemPrice, $itemColor, $size, $features, $addCart)
  $details.append($title, $content)

  return $details
}

function renderItem(component, container) {
  container.appendChild(component)
}

for (var i = 0; i < items.length; i++) {
  renderItem($item(items, i), document.querySelector('.product'))
}

document.addEventListener('click', function (event) {
  if (event.target.getAttribute('data-item-id')) {
    var $details = document.querySelector('.details')
    $details.innerHTML = ''

    $details.appendChild(
      $itemDetails(items, event.target.getAttribute('data-item-id'))
    )

    var $products = document.querySelector('.product')
    console.log($products)
    $products.style.display = 'none'

    $details.style.display = 'block'
  }
})
