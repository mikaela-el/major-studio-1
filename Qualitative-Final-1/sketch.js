var lines;
var counts = [];
var list = [];
var total;
var textX = 0;

function preload() {
  lines = loadStrings('UNDP.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join(" "),
    params); 
  console.log(counts);
  for(k in counts){
    // console.log(word)
    let el = {}
    el.word = k;
    el.count = counts[k]
    list.push(el);
  }
  list.sort(compare);
  list = list.filter(el => RiTa.isNoun(el.word));
  // console.log(list);
  total = totalValues(counts);

  // set drawing parameters
  background(255);
  textSize(10);
  textAlign(LEFT, LEFT);
  noStroke();
  fill(255);
  noLoop();
}

function draw() {
  background(251, 242, 236);
  push();
  translate(100, 120);
  // console.log('reached')
  console.log(list)
  list.forEach(function(el){ 
    console.log(el.count)
    if (el.count > 20) {
          fill(252, 102, 33, 500);
          // console.log(RiTa.isNoun(k));
          console.log(el);
          textSize(((el.count)/total/2) * 10000);
          var txtWidth = textWidth(el.count);
          text(el.word, 0, 0);
          translate(0, 50);
      }})
        // console.log(el.count)
       
    
    pop();
  }
  
  function compare(a,b) {
  if (a.count < b.count)
    return 1;
  if (a.count > b.count)
    return -1;
  return 0;
}


function totalValues(obj) {
  var total = 0;
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      total += obj[k];
    }
  }
  return total;
}

//Future Steps:
//1. Layout - I want to structure the words in order of frequency 
  // (being highest to lowest) and then list them vertically. 
//2. Spacing - The spacing should be equal between every 
  // word even as they descend in size. 
//3. Size - The text size should be the largest for the most high 
  // frequency words and gradually decline as the word frequency 
  // declines. The size of every word should be proportionate to 
  // it’s frequency in the document. 
//4. Colour/ Opacity - The text colour should be most opaque for
  // the highest frequency words and transparent for low frequency 
  // words. The colour should change gradually as the words descend 
  // down the page. I plan to do this by creating a condition based 
  // on the frequency of words. If the word appears more than 100 
  // times, then it will be very opaque. However, if it appears only
  // 50-100 times, it will be a little more transparent. 
//5. Interactivity/ Scroll - The page should scroll vertically 
  //using the mouseDragged function. This will make all the 
  // words visible once the user presses down and drags the 
  //mouse towards the bottom of the page. 
//6. Connection to Gender - In addition to changing the opacity, 
   //the text should also incorporate another element of colour 
   //only when referencing gender. If a word is correlated to 
   // any idea of gender equality within the document, it should 
   //turn red. This will highlight and emphasize the frequency of 
   //gender specifically mentioned in this document. 
