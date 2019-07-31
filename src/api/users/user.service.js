import jwt from 'jsonwebtoken'
import 'moment/locale/th'

import config from './../../config'

async function getAll(req) {
  console.log(req.params)
  const users = [
    {
      "firstName": "John",
      "lastName": "Smith",
      "isAlive": true,
      "age": 25,
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "212 555-1234"
        },
        {
          "type": "office",
          "number": "646 555-4567"
        },
        {
          "type": "mobile",
          "number": "123 456-7890"
        }
      ],
      "children": ['1', '2', '5'],
      "spouse": null
    },
    {
      "firstName": "Json",
      "lastName": "JS",
      "isAlive": false,
      "age": 23,
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "212 555-1234"
        },
      ],
      "children": ['0', '8', '9'],
      "spouse": null
    },
  ]
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (24 * 3600), //24hrs
    iat: Math.floor(Date.now() / 1000)
  }, config.secretKey)
  const { id: params } = req.params
  return { params, users, token }
}

export default {
  getAll
}
