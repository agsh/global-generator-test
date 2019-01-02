#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const yeoman = require('yeoman-environment');

const env = yeoman.createEnv();

const args = process.argv.splice(process.execArgv.length + 2);

// If none of the generator specified, use default
if (args.length === 0) {
    args.push('app');
}

const generatorsPath = path.join(__dirname, '../generators');
// Check all generators under `generators` directory and register it
fs
    .readdirSync(generatorsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
        path: path.join(generatorsPath, dirent.name),
        name: dirent.name
    }))
    .forEach(generator => env.register(generator.path, generator.name));

env.run(args, {}, () => {
    yeoman.util.log().writeln(`
                                  .,*/////*..
                               .,/(((((((((((*.
                             ./((((((((((((((((*.
                            .(((((((((((((((((((/.
                           *(((((((((((//,.   .*//
                          .(((((((((((,          ,.
                     .*/(*     ..*/(*             ..
                  *((((*.                         */*
              ./(##(((.                          .///,
             ,#######*                           ////,
           ,/#######(                            ,///.
          .########(*                             //*
          (########(*                            ./*.
         .##########(                            **
         .###########(.                        .*,
         .(############,.                     .*.
          ,##############*                   .
           ,/##########(*              *///,
              ,(######(              /(((,
                 .,**/*           ,(##(.
                      ,##(/**/(###(*,
                       ,*(####(/*.
    `);
});
