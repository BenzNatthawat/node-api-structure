import express from 'express'
import userService from './user.service'

const router = express.Router()

const getAll = (req, res, next) => {
  userService.getAll(req)
    .then(users => res.json(users))
    .catch(err => next(err))
}

router.get('/', getAll)
.get('/:id', getAll)
module.exports = router
