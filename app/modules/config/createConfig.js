/**
 * Created by bogdanmedvedev on 13.06.16.
 */

'use strict';
var config = require('./');
var os = require('os');
var random = require('../random');

var portfinder = require('portfinder');

config.set('project_name', 'Obmen-box', true, true);
config.set('domain', 'obmen-box.com', true, true);
config.set('database:mongodb_url', 'mongodb://user:pass@127.0.0.1:27017/db_name', true, true);
config.set('server:url:path', '/', true, true);

portfinder.getPorts(3, {port: 8000}, function (err, port) {
    if (err) console.error(err);
    config.set('server:http:port', port[0] || 80, true, true);
    config.set('server:https:port', port[1] || 0, true, true);
    config.set('server:ws:port', port[2] || 0, true, true);
});

config.set('redis.status', false, true, true);
config.set('redis.host', '127.0.0.1', true, true);
config.set('redis.post', '0000', true, true);
config.set('application:mail:service', 'gmail.com', true, true);
config.set('application:mail:username', 'example@gmail.com', true, true);
config.set('application:mail:password', 'myPassword123', true, true);

config.set('application:process:application_version', '0.0.1', false, true);
config.set('application:process:nodeVersion', process.version, false, true);
config.set('application:process:pid', process.pid, false, true);
config.set('application:process:uid', process.getuid(), false, true);
config.set('application:process:gid', process.getgid(), false, true);
config.set('application:process:arch', process.arch, false, true);
config.set('application:process:platform', process.platform, false, true);
config.set('application:process:network', os.networkInterfaces().eth0 || os.networkInterfaces().en0, false, true);
config.set('application:process:cpu:count', os.cpus().length, false, true);
config.set('application:process:cpu:core', os.cpus()[0].model, false, true);


config.save();