var conekta = require('conekta');

const createOrder = (req, res) => {
conekta.api_key = 'key_rjFqXrcY5skaKbs7CGafcw';
conekta.locale = 'es'; 
console.log(req.body)
const userData = {
  name : req.body.name,
  phone : req.body.phone,
  email : req.body.email
}
const line_items = {
  name : req.body.itemName,
  unit_price : req.body.unit_price,
  quantity : req.body.quantity
}
const payment_method = {
  "type": "card",
  "token_id": req.body.token_id
}
conekta.Order.create({
  "currency": "MXN",
  "customer_info": userData/*{
    "name": "Jul Ceballos",
    "phone": "+5215555555555",
    "email": "jul@conekta.io"
  }*/,
  "line_items": [line_items],
  "charges": [{
    "payment_method": payment_method/*{
      "type": "card",
      "token_id": "tok_2q1L3pMwxcBZnAS1T"
    }*/
  }]
}, (err, success) => {
  console.log(err)
  if(err)  return res.status(400).send({message: err}) 
  console.log(success.toObject())
  return res.status(201).send(success.toObject())
})
}

module.exports = createOrder