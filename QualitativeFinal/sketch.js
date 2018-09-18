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

