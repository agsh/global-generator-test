#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

const generatorName = process.argv[2] || 'app';
console.log(`generator name: ${generatorName}`);

const generatorsPath = path.join(__dirname, '../generators');
fs
    .readdirSync(generatorsPath, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
        path: path.join(generatorsPath, dirent.name),
        name: dirent.name
    }))
    .forEach(generator => env.register(generator.path, generator.name))
;

env.run(generatorName, {}, () => {
    console.log(`
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

