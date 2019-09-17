const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// LAB GIVEN CODE:
/*
  const titleCased = () => {
    return tutorials
  }
*/


const titleCased = () =>
// () => {
//// map through array of tutorials
  tutorials.map (tutorial => {
    // split each tutorial into array of seperate words
    let words = tutorial.split(' ')
      // capitalize every word
      let capwords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        //return array with string rejoined into a sentence by putting space btwn words
        return capwords.join(' ')
  })
