/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { User, UserLogin, UserClaim, UserProfile } from '../data/models';
import { host, auth as config } from '../config';

/**
 * Sign in with Facebook.
 */

passport.use(new GoogleStrategy({
  clientID: config.google.id,
  clientSecret: config.google.secret,
  callbackURL: 'http://' + host + '/login/google/return',
  // profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const loginName = 'google';
  const claimType = 'urn:google:access_token';
  const fooBar = async () => {
    if (req.user) {
      const userLogin = await UserLogin.findOne({
        attributes: ['name', 'key'],
        where: { name: loginName, key: profile.id },
      });

      if (userLogin) {
        // There is already a Google account that belongs to you.
        // Sign in with that account or delete it, then link it with your current account.
        done(null, {
          id: profile.id,
          email: profile.email
        });
      } else {
        const user = await User.create({
          id: req.user.id,
          email: profile.email,
          logins: [
            { name: loginName, key: profile.id },
          ],
          claims: [
            { type: claimType, value: accessToken },
          ],
          profile: {
            displayName: profile.displayName,
            gender: profile._json.gender,
            picture: profile._json.image.url,
          },
        }, {
          include: [
            { model: UserLogin, as: 'logins' },
            { model: UserClaim, as: 'claims' },
            { model: UserProfile, as: 'profile' },
          ],
        });
        done(null, {
          id: user.id,
          email: user.email,
        });
      }
    } else {
      const users = await User.findAll({
        attributes: ['id', 'email'],
        where: { '$logins.name$': loginName, '$logins.key$': profile.id },
        include: [
          {
            attributes: ['name', 'key'],
            model: UserLogin,
            as: 'logins',
            required: true,
          },
        ],
      });
      if (users.length) {
        const user = users[0];
        done(null, {
          id: user.id,
          email: user.email
        });
      } else {
        let user = await User.findOne({ where: { email: profile._json.email } });
        if (user) {
          // There is already an account using this email address. Sign in to
          // that account and link it with Facebook manually from Account Settings.
          done(null, {
            id: user.id,
            email: user.email
          });
        } else {
          user = await User.create({
            email: profile.email,
            emailVerified: true,
            logins: [
              { name: loginName, key: profile.id },
            ],
            claims: [
              { type: claimType, value: accessToken },
            ],
            profile: {
              displayName: profile.displayName,
              gender: profile._json.gender,
              picture: profile._json.image.url,
            },
          }, {
            include: [
              { model: UserLogin, as: 'logins' },
              { model: UserClaim, as: 'claims' },
              { model: UserProfile, as: 'profile' },
            ],
          });
          done(null, {
            id: user.id,
            email: user.email,
          });
        }
      }
    }
  };

  fooBar().catch(done);
}));

export default passport;
