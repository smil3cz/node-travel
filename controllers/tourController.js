const Tour = require('../Model/tourModel');

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: '400',
      message: 'Missing name or price!',
    });
  }
  next();
};

// 2)ROUTE HANDLERS
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'Success',
    // data: {
    //   tour,
    // },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'Success',
    // data: {
    //   tour: newTour,
    // },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: `<data updated>`,
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
