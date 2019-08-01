import express from 'express'
import userService from './user.service'

const router = express.Router()

const index = (req, res, next) => {
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err))
}

const show = (req, res, next) => {
  userService.getOne(req)
    .then(users => res.json(users))
    .catch(err => next(err))
}

router.get('/', index)
  .get('/:id', show)
module.exports = router
