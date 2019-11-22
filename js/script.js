//decare array quotes
var quotes =  [
  {
    quote: 'The best revenge is massive success',
    source:'Frank Sinatra',
    citation: 'radio',
    year: '1940',
    type: 'motivational',
  },
  {
    quote: 'Be willing to go all out, in pursuit of your dream. Ultimately it will pay off. You are more powerful than you think you are. Go for it.',
    source: 'Les Brown',
    citation:'Speech',
    year:'1994',
    type: 'motivational',
  },
  {
    quote: 'If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.',
    source: 'Bruce Lee',
    type:'motivational',
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Steve Jobs',
    citation: 'speech',
    year: '2005',
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle',
  },];

function getRandomQuote (){
// obtain a random number of the quote
  var num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
}


//obtain an array of random colors
function getRandomColor(){
  let colorArray = [];
  for (let i=0; i<(3); i++){
    colorArray.push(Math.floor(Math.random() * 256));
  }
    randomRgb = "rgb("+colorArray.join(', ')+")";
  return randomRgb;
}

function printQuote(){
  var pickQuote = getRandomQuote();
  var htmlString = "<p class='quote'>"+ pickQuote.quote + "</p><p class='source'>" + pickQuote.source;
  // display citation if the property is provided
  if (pickQuote.citation != null){
    htmlString = htmlString + "<span class='citation'>" + pickQuote.citation + "</span>";
  }
  // display year if the property is provided
  if (pickQuote.year != null){
    htmlString += "<span class='year'>" + pickQuote.year + "</span>";
  }

  if(pickQuote.type !=null){
    htmlString += "<span class='type'>" +", " +pickQuote.type + "</span>";
  }
  htmlString += "</p>";
  // update html of the quote
  document.getElementById('quote-box').innerHTML = htmlString;

  //set background color of the body tag
  let background = getRandomColor();
  document.body.style.backgroundColor = background;


  document.getElementById('load-quote').style.backgroundColor = background;
  document.getElementById('load-quote').style.color = "white";

}

  var Timer = window.setInterval(printQuote, 5000);

  // click event listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);
