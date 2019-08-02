import jwt from 'jsonwebtoken'
import 'moment/locale/th'

import config from './../../config'
const users = [
  {
    "id": "1",
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
    "id": "2",
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

async function indexUser() {
  const exp = Math.floor(Date.now() / 1000) + (24 * 3600)
  const date = Date.now() / 1000
  const time = 24 * 3600
  console.log( jwt.verify )
  return {exp, date, time, users}
}

async function showUser(req) {
  const { id: params } = req.params
  return users.filter((user) => user.id === params)
}

export default {
  indexUser,
  showUser
}
