import express from 'express';
import passport from 'passport';
import cors from 'cors'

import bodyparser from 'body-parser';
import { configureJWTStrategy } from './passport-jwt';

export const SetglobalMiddleware = (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(cors());
   
    configureJWTStrategy();
    app.use(passport.initialize());

}