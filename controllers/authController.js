const {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValidService,
    encryptPasswordService,
    createUserService

} = require("./../services/AuthServices");


const models = require("./../models/index");

require("dotenv").config();

const express = require("express");

let bodyParser = require("body-parser")

const app = express();

const jsonwebtoken = require("jsonwebtoken")