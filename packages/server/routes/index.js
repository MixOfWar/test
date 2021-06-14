import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint')
})

router.get('/sample', (req, res, next) => {
  let data = {
    userName: "Freddie"
  };
  res.status(200).send(data)
})

module.exports = router
