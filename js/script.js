/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes =  [
  {
    quote: 'The best revenge is massive success',
    source:'Frank Sinatra',
  },
  {
    quote: 'Be willing to go all out, in pursuit of your dream. Ultimately it will pay off. You are more powerful than you think you are. Go for it.',
    source: 'Les Brown',
    citation:'Speech',
    year:'1994',
  },
  {
    quote: 'If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.',
    source: 'Bruce Lee',
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Steve Jobs',
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle',
  },];
//console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote (){
  var num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
}
//console.log(getRandomQuote());

/***
 * `printQuote` function
***/
/**function printQuote(){
  var pickQuote = getRandomQuote();
  var htmlString = "<p class='quote'>"+ pickQuote.quote + "</p><p class='source'>" + pickQuote.source;
  if (pickQuote.citation !== null){
    htmlString += "<span class='citation'>" + pickQuote.citation + "</span>";
  }
  if (pickQuote.year !== null) {
    htmlString += "<span class='year'>" + pickQuote.year + "</span>";
  }
  htmlString += "</p>";
}
**/
function printQuote(){
  var quote = getRandomQuote();
  var htmlString = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;
    if ('citation' in quote){
      htmlString = htmlString + '<span class="citation">' + quote.citation + '</span>';
    }
    if ('year' in quote){
      htmlString = htmlString + '<span class="year">' + quote.year + '</span>';
    }
    //extra credit: include an additional field here for category of bar
    if ('category' in quote){
    htmlString = htmlString + '<br><span class="category"> Lyric Type:' + quote.category + '</span>';
    }
  //cap off html string with a closing paragraph tag
  htmlString = htmlString + '</p>';
  //Update value within quote-box div with newly created html string
  document.getElementById('quote-box').innerHTML = htmlString;
//document.getElementById('quote-box').innerHTML = htmlString;
//console.log(string);
  }
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);