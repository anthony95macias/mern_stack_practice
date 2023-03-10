const {logEvents} = require('./logger')

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.orgin}`, 'error.log')
  console.error(err.stack)

  const status = err.statusCode ? err.statusCode : 500 // server error

  res.status(status)

  res.json({message: err.message})
}

module.exports = errorHandler