const {validationResult} = require('express-validator')

// middlewares é uma função que acontece entre outras duas

const validate = (req, res, next) => {
  const errors = validationResult(req)

  if(errors.isEmpty()){
    return next()
  }

  const extractedErros = []

  errors.array().map((err) => extractedErros.push(err.msg))

  return res.status(422).json({
    errors: extractedErros 
  })

}

module.exports = validate