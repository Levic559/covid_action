import React, { Component } from "react";


import * as Survey from "survey-react";
import {useRouter} from 'next/router';


// import "survey-react/survey.css";
// import "./index.css";

// Survey.StylesManager.applyTheme("default");

class SurveyComponent3 extends Component {
    constructor() {
        super();
        
    }
    render() {
        

        

        const json = {
          
            title: "General Questions",
            completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
            pages: [
             {
              name: "page1",
              elements: [
               {
                type: "html",
                name: "question1",
                html: "You are about to start the quiz with the given information. <br/>You have <b>15</b> seconds for every page and <b>40</b> seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
               }
              ]
             },
             {
              name: "page2",
              elements: [
               {
                type: "radiogroup",
                name:"areas",
                title: "Which areas are not recommended to travel by governments in the latest announcement??",
                correctAnswer: "Mexico and Caribbean countries",
                isRequired: true,
                choices: [
                 {
                  value: "Mexico and Caribbean countries",
                  text: "Mexico and Caribbean countries"
                 },
                 {
                  value: "Asia and  Australia",
                  text: "Asia and  Australia"
                 },
                 {
                  value: "Europe",
                  text: "Europe"
                 }
                ],
                choicesOrder: "random"
               }
              ]
             },
             {
              name: "page3",
              elements: [
               {
                type: "radiogroup",
                name: "outside",
                title: "If we come back from outside of Canada in near future, what cost we may experience?",
                correctAnswer: "Take an extra PCR test",
                isRequired: true,
                choices: [
                 {
                  value: "Pay fine",
                  text: "Pay fine "
                  

                 },
                 {
                  value: "Take an extra PCR test",
                  text: "Take an extra PCR test"
                 },
                 {
                  value: "Prohibit entry",
                  text: "Prohibit entry"
                 }
                ],
                choicesOrder: "random"
               }
              ]
             },
             {
              name: "page4",
              "elements": [
               {
                type: "radiogroup",
                name: "period",
                title: "How period is your result  of the PCR test effective?",
                correctAnswer: "72 Hours",
                isRequired: true,
                choices: [
                 {
                  value: "72 Hours",
                  text: "72 Hours"
                 },
                 {
                  value: "48 Hours",
                  text: "48 Hours"
                 },
                 {
                  value: "36 Hours",
                  text: "36 Hours"
                 }
                ],
                choicesOrder: "random"
               }
              ],
              maxTimeToFinish: 15
             }
            ],
            triggers: [
             {
              type: "complete"
             }
            ],
            calculatedValues: [
             {
              name: "var1"
             }
            ],
            // navigateToUrl: "../GQ2",
            navigateToUrlOnCondition: [
             {
              expression: "{outside} = 'Take an extra PCR test' and {period} = '72 Hours' and {areas} = 'Mexico and Caribbean countries'",
              url: "../GQ3R3"
             },
             {
              "expression": "{areas} <> 'Mexico and Caribbean countries' and {period} = '72 Hours' and {outside} = 'Take an extra PCR test'",
              "url": "../GQ3R2"
             },
             {
              "expression": "{areas} = 'Mexico and Caribbean countries' and {period} <> '72 Hours' and {outside} = 'Take an extra PCR test'",
              "url": "../GQ3R2"
             },
             {
              "expression": "{areas} = 'Mexico and Caribbean countries' and {period} = '72 Hours' and {outside} <> 'Take an extra PCR test'",
              "url": "../GQ3R2"
             },
             {
              "expression": "{areas} <> 'Mexico and Caribbean countries' and {period} <> '72 Hours' and {outside} = 'Take an extra PCR test'",
              "url": "../GQ3R1"
             },
             {
              "expression": "{areas} <> 'Mexico and Caribbean countries' and {period} = '72 Hours' and {outside} <> 'Take an extra PCR test'",
              "url": "../GQ3R1"
             },
             {
              "expression": "{areas} = 'Mexico and Caribbean countries' and {period} <> '72 Hours' and {outside} <> 'Take an extra PCR test'",
              "url": "../GQ3R1"
             },
             {
              "expression": "{areas} <> 'Mexico and Caribbean countries' and {period} <> '72 Hours' and {outside} <> 'Take an extra PCR test'",
              "url": "../GQ3R0"
             },
            ],
            showProgressBar: "bottom",
            startSurveyText: "Start Quiz",
            firstPageIsStarted: true,
            maxTimeToFinish: 40,
            maxTimeToFinishPage: 15,
            showTimerPanel: "top"
           
};


const survey = new Survey.Model(json);


        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent3;
