const express = require("express");
const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

// models
const { User } = require("../models/index");

// register
const registerUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  await newUser.save((err, user) => {
    err && res.status(500).json(err);
    res.status(201).json(user);
  });
};

// login
const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }, (err, user) => {
    err && res.status(500).json(err);

    if (!user) {
      res.status(401).json("wrong password or username !");
    } else {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== req.body.password
        ? res.status(401).json("wrong password or username !")
        : res.status(200).json(user);
    }
  });
};

module.exports = { registerUser, loginUser };
