/// <reference types="cypress" />
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react18';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.fixture('questions.json').then((questions) => {
          // Stub the API request for starting the quiz
          // Waits for the component to call /api/questions/random
          cy.intercept('GET', '/api/questions/random', {
            statusCode: 200,
            body: questions
          }).as('getQuestions');
        });
  });

  it('starts the quiz and displays a question with answer choices', function () {
    mount(<Quiz />);

    // Click the "Start Quiz" button
    cy.contains('Start Quiz').click();

    // Wait for the stubbed API call to complete
    cy.wait('@getQuestions');

    // Check that a question is displayed
    cy.contains(/What|Which|How|Who|When|Where|Why/).should('exist');

    // Check that answer buttons are displayed
    cy.get('button.btn-primary').should('have.length.greaterThan', 1);

    // ✅ Click the first answer button
    cy.get('button.btn-primary').first().click();

    // ✅ After clicking, expect the next question to show up
    cy.contains(/What|Which|How|Who|When|Where|Why/).should('exist');

    // (Optional ✅) Check that the question text has changed or score updated — 
    // but this depends on how your app tracks score in the UI (which currently it only shows at the end).
  });
});