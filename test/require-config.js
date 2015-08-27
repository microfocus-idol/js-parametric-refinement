/*
 * Copyright 2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

require.config({
    baseUrl: '.',
    paths: {
        backbone: 'bower_components/backbone/backbone',
        fieldtext: 'bower_components/hp-autonomy-fieldtext-js/src',
        jquery: 'bower_components/jquery/jquery',
        peg: 'bower_components/pegjs/peg-0.8.0',
        text: 'bower_components/requirejs-text/text',
        underscore: 'bower_components/underscore/underscore'
    },
    shim: {
        peg: {
            exports: 'PEG'
        }
    }
});