const express= require('express');
const router=express.Router();

const privatekey= 'a37d0be4148660df4fa6f0530832310be2029ae3';
const publickey = '49fd80a2403f44f325e5710870d4b26c';
const ts= Date.now();
const md5 = require('md5');
hash=md5(ts,privatekey,publickey);