function errorHandler (err, req, res, next) {
  if (err.name === 'SequelizeValidationError') {
      let errorMessage = [];
      err.errors.forEach(error => {
        errorMessage.push(error.message)
      });

      res.status(400).json({message: errorMessage});
  } else if (err.message === 'User not found') {
    res.status(err.status).json({message: err.message});
  } else if (err.message === 'Wrong username / password') {
    res.status(err.status).json({message: err.message});
  } else if (err.message === 'Habit not found') {
    res.status(err.status).json({message: err.message});
  } else if (err.message === 'Not authorized') {
    res.status(err.status).json({message: err.message});
  } else{
      res.status(500);
  }
}

module.exports = errorHandler;