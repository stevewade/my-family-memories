"use strict";

//Variables
var Alexa = require("alexa-sdk");
var SKILL_NAME = "Family Memories";
var APP_ID = "";

//List of memories
var MEMORY_LIST = [
    "Saturday 6th May 2017. Mum and Dad ran the Rat Race obstacle course. It was a tough 20 mile obstacle course that took 7 hours and 40 minutes to complete. This was the day after we found ot we were having a baby!",
    "Thursday 28th December 2017. Dad created this Alexa app today. We still don't know if we're having a baby girl or boy!",
    "Friday 5th May 2017. We found out we were having a baby today! Mum told Dad when he was driving on the motorway!",
    "Sunday 29th October 2017. Dad ran the Dublin Marathon, and that night asked Mum to marry him."
    
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
