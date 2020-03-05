'use strict'

const express = require('express');
const router = express.Router();
const { planRouter } = require('./planRouter');
const { userRouter } = require('./userRouter');

router.use('/plans', planRouter);
router.use('/', userRouter);

module.exports = { router }