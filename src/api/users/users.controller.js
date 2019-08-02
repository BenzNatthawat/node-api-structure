import express from 'express'
import userService from './user.service'

const router = express.Router()

const index = (req, res, next) => {
  userService.indexUser()
    .then(users => res.json(users))
    .catch(err => next(err))
}

const create = (req, res, next) => {
  res.end('create')
}

const store = (req, res, next) => {
  res.end('store')
}

const show = (req, res, next) => {
  res.end('show')
}

const edit = (req, res, next) => {
  res.end('edit')
}

const update = (req, res, next) => {
  res.end('update')
}

const destroy = (req, res, next) => {
  res.end('destroy')
}

router.get('/', index)
  .get('/create', create)
  .post('/store', store)
  .get('/:id', show)
  .get('/:id/edit', edit)
  .patch('/:id/update', update)
  .delete('/:id/destroy', destroy)
module.exports = router
