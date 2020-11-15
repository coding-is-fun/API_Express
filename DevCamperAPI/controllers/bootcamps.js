const ErrorResponse = require('../util/errorResponse');
const Bootcamp = require('../models/Bootcamps');

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (e) {
    res.status(400).jsont({ success: false });
  }
  // res
  //   .status(200)
  //   .json({ success: true, msg: `Show all bootcampers`, body: req.body });
};
// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (e) {
    // res.status(400).json({ success: false });
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  // res.status(200).json({
  //   success: true,
  //   msg: `Display bootcamp ${req.params.id}`,
  // });
};
// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.addBootcamp = async (req, res, next) => {
  // console.log(req.body);
  // res.status(200).json({ success: true, msg: `Create new bootcamp` });
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
    });
  }
};
// @desc        Update a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ succes: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (e) {
    res.status(400).json({ succes: false });
  }

  // res
  //   .status(200)
  //   .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};
// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (e) {
    res.status(400).json({ success: false });
  }
  // res
  //   .status(200)
  //   .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
