"use strict";

//Variables
var Alexa = require("alexa-sdk");
var SKILL_NAME = "Family Memories";
var APP_ID = "";

//List of memories
var MEMORY_LIST = [
    "Saturday 6th May 2017. Memory text goes here and is read out by alexa",
    "more memories",
    "even more memories"
    
];

//Setup
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();

}

var handlers = {
    'LaunchRequest': function() {
        this.emit('GetMemory');
    },
    'GetMemoryIntent': function() {
        this.emit('GetMemory');
    },

    'GetMemory': function() {
        var memoryIndex = Math.floor(Math.random() * MEMORY_LIST.length);
        var randomMemory = MEMORY_LIST[memoryIndex];
        //Output
        var speechOutput = "Your memory. " + randomMemory;
        this.emit(":tellWithCard", speechOutput, SKILL_NAME, randomMemory);
    },
    'AMAZON.HelpIntent': function() {
        var speechOutput = "You can say things like tell me a memory, or give us a memory and I'll play back a random family memory";
        var reprompt = "What would you like me to do?";
        this.emit(":ask", speechOutput, reprompt);
    },
    'AMAZON.StopIntent': function() {
        this.emit(":tell", "Goodbye!");
    },
    'AMAZON.CancelIntent': function() {
        this.emit(":tell", "Goodbye!");
    }
}

