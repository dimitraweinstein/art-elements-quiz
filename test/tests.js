import { checkForYes } from '../utils.js';


const test = QUnit.test;

test('should take in any answer that begins with t or y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkForYes('true' || 'yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
