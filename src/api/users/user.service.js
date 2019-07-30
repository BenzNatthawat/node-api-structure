import jwt from 'jsonwebtoken'
import 'moment/locale/th'

import config from './../../config'

async function getAll() {
  const users = [
    { name: 'Benz1' },
    { name: 'Benz2' },
    { name: 'Benz3' },
    { name: 'Benz4' },
  ]
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (24 * 3600), //24hrs
    iat: Math.floor(Date.now() / 1000)
  }, config.secretKey)

  return {users, token}
}

export default {
  getAll
}
