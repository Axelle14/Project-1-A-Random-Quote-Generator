/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
// `array of quotes`
***/
let arrayOfQuotes = [
  {
    quote: 'Computer science is a liberal art.',
    source: 'Steve Jobs ',
  },
   {
    quote: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
    source: 'Linus Torvalds',
   },
   {
    quote: 'Understanding the fundamental principles of coding gives one an insight to more complex systems, how technology is layered and how simple systems can be developed into more complex ones.',
    source: 'Trudy Norris-Grey',
  },
  {
    quote: 'Everybody in this country should learn to program a computer, because it teaches you how to think.',
    source: 'Steve Jobs',
  },
  {
    quote: 'Coding gives everyone really (not just young people) tools to express themselves in cool and creative ways… It’s as easy as learning a language.',
    source: 'Marily Nika',
  },
  {
  quote:'There is some good in this world, and it’s worth fighting for.', 
  source:'J.R.R. Tolkien',
  // citation:'The Two Towers', 
  // year: 1954
  },
  {
  quote:'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.', 
  source:'Steve Jobs',
  // citation:'Motivating thoughts of Steve Jobs', 
  //  year: 2009,
  },
  {
  quote:'Who controls the past controls the future. Who controls the present controls the past.', 
  source:'George Orwell',
  // citation:'Nineteen Eighty-Four', 
  // year: 1949,
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array){
  let randNum = Math.floor(Math.random() * (arrayOfQuotes.length  + 1));
  let randQuote= array[randNum].quote;
  let randSource= array[randNum].source;
  let randCitation= array[randNum].citation;
  let randYear= array[randNum].year;
    return [randQuote, randSource];
}
/***
 * `printQuote` function
***/
const quotes = document.getElementById('p1');
const sources = document.getElementById('p2');
// const citation = document.getElementById('span1');
// const year = document.getElementById('span2');
function printQuote(){
    quotes.innerHTML = getRandomQuote(arrayOfQuotes)[0];
    sources.innerHTML = getRandomQuote(arrayOfQuotes)[1];
    // citation.innerHTML = getRandomQuote(arrayOfQuotes)[3];
    // year.innerHTML = getRandomQuote(arrayOfQuotes)[4];
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);