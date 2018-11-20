// load data set  
//const data = d3.json("datatest.json");
const data = d3.json("newdata2.json");
    
data.then( items => {
                console.log(items);
                svg(items);
            });

let svg = (items) => {

    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });
    }

    items = sortByKey(items, 'RuralElec');
    items = sortByKey(items, 'Region');


	console.log(typeof items[0].FemaleMean);
	console.log(typeof items[0].MaleMean);
	console.log(typeof items[0].Country);
	
// globals
        let margin = 10;
        let height = window.innerHeight;
        let width = window.innerWidth;
        //let region = "";

// append an svg element to Country div 
    let header = d3.select('head')
        .append('svg')
        .attr('width', 800)
        .attr('height', 200);
       
// append an svg element to Country div 
    let box = d3.select('#country')
        .append('svg')
        .attr('width', 800)
        .attr('height', window.innerHeight*36.5);

// append data to svg, then append a rectangle (bar) for Male Expected Education 
    let sentenceOne = box.selectAll('text.s')
       .data(items)
       .enter()
       .append('text')
       .attr('class', 's');

// append data to svg, then append a rectangle (bar) for Male Expected Education 
    let sentenceTwo = box.selectAll('text.b')
       .data(items)
       .enter()
       .append('text')
        .attr('class', 'b');

// append data to svg, then append a rectangle (bar) for Female Mean Education 
    let rectFemaleMean = box.selectAll('rect.f')
      .data(items)
      .enter()
      .append('rect')
      .attr('class', 'f');

// append data to svg, then append a rectangle (bar) for Male Mean Education 
    let rectMaleMean = box.selectAll('rect.m')
       .data(items)
       .enter()
       .append('rect')
       .attr('class', 'm');

// append data to svg, then append a rectangle (bar) for Female Expected Education 
    let rectFemaleExpect = box.selectAll('rect.e')
       .data(items)
       .enter()
       .append('rect')
       .attr('class', 'e');

// append data to svg, then append a rectangle (bar) for Male Expected Education 
    let rectMaleExpect = box.selectAll('rect.l')
       .data(items)
       .enter()
       .append('rect')
       .attr('class', 'l');
       
    let scale = d3.scaleLinear()
            .domain([0, 16])
            .range([0, 400])
    
    let scaleElec = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 22])
            
    let colorScale = d3.scaleLinear()
        .domain([0, 120])
        .range(["red", "darkorange"])
        
    // Center Line 
    box.append("line")
          .attr("x1", 400)
          .attr("x2", 400)
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke", 'E2E1E0');
    
    // Male 4 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 310; } )
          .attr("x2", (d,i) => { return 310; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
    // Female 4 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 490; } )
          .attr("x2", (d,i) => { return 490; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
     // Male 8 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 220; } )
          .attr("x2", (d,i) => { return 220; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
     // Female 8 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 580; } )
          .attr("x2", (d,i) => { return 580; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');

    // Male 12 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 130; } )
          .attr("x2", (d,i) => { return 130; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
    // Female 12 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 670; } )
          .attr("x2", (d,i) => { return 670; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
    // Male 16 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 40; } )
          .attr("x2", (d,i) => { return 40; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
     // Female 16 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 760; } )
          .attr("x2", (d,i) => { return 760; } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*36.2)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');


// style the text for the sentence 
    sentenceOne.attr('x', 400)
        .attr('y', (items, i) => { return 500 + 400*i; })
        .attr("text-anchor", "middle")
        .style("font-size", "15px") 
        .style('fill', 'black')
        .text((d,i) => { return "In" + " " + (items[i].Country) + "," +  " " + (items[i].RuralElec) 
        + "% of the rural population has access to electricity."; });
        
// style the text for the sentence 
    sentenceTwo.attr('x', 400)
        .attr('y', (items, i) => { return 550 + 400*i; })
        .attr("text-anchor", "middle")
        .style("font-size", "15px") 
        .style('fill', 'black')
        .text((d,i) => { return "Women are expected to receive" + " " + (items[i].FemaleExpect) 
        + " " + "years of schooling however, will only receive an average of" + " " + (items[i].FemaleMean) + " " + "years."; });
        
 // style the bars (=rectangles) Female Mean Education 
    rectFemaleMean.attr('width', (d,i) => { return scale(items[i].FemaleMean); })
        .attr('height', 45)
        .attr('x', 400)
        .attr('y', (items, i) => { return 360 + 400*i; })
        .attr('fill', '#f5c250')
        .attr('id', (d) => { return d.Country+"_fem_mean"; });

 // style the bars (=rectangles) Female Expected Education 
    rectFemaleExpect.attr('width', (d,i) => { return scale(items[i].FemaleExpect); })
        .attr('height', 45)
        .attr('x', 400)
        .attr('y', (items, i) => { return 360 + 400*i; })
        .attr('fill', '#f5c250')
        .attr("fill-opacity", 0.5)
        .attr('id', (d) => { return d.Country+"_fem_exp"; });

 // style the bars (=rectangles) Male Mean Education 
    rectMaleMean.attr('width', (d,i) => { return scale(items[i].MaleMean); })
        .attr('height', 45)
        .attr('x', (d,i) => { return 400-scale(items[i].MaleMean); })
        .attr('y', (items, i) => { return 360 + 400*i; })
        .attr('fill', '#f5c250')
        .attr('id', (d) => { return d.Country+"_mal_mean"; });
        
 // style the bars (=rectangles) Male Expected Education 
    rectMaleExpect.attr('width', (d,i) => { return scale(items[i].MaleExpect); })
        .attr('height', 45)
        .attr('x', (d,i) => { return 400-scale(items[i].MaleExpect); })
        .attr('y', (items, i) => { return 360 + 400*i; })
        .attr('fill', '#f5c250')
        .attr("fill-opacity", 0.5)
        .attr('id', (d) => { return d.Country+"_mal_exp"; });


// Countries to list for Country div   
   items.forEach( (d, i) => {
      d3.select('#country')
        .append('p')
        .attr('id', (d.Country))
        .html("<div class='country_anchor' id='" + d.Country + "'></div><div class='country_title'>" + d.Country + "</div><div class='country_percent'>" + d.RuralElec + "%</div>")
        .style('color', "black")
        .style('text-transform', 'uppercase')
        .style('position', 'absolute')
        .style('z-index', '1')
        .style('top', 45 + i*400 + 'px')
        .style('font-size', '6px')
        .style('font-weight', '400');
    });
    

    // Countries to list for Index DIV              
    let margins = d3.select('#index')
                    .selectAll('div')
                    .data(items)
                    .enter()
    
    let cont = margins
        .append('div');
    
    let minisvg = cont
        .append('svg');
    
    let rectElec = minisvg
        .append('rect')
        .attr('class', 'a');
    
    let region = "";
    
   
    let entry = cont
        .append('p')
        .html(function(d, i) { 
             // Labels for Regions in the Index 
                let display_label = '<a href="#' + d.Country + '">' + d.RuralElec + "%" +  '     ' + d.Country + '</a>';
                
                if (d.Region != region) { 
                    console.log(d.Region)
                    //d3.append('h3 Country.Region')
                    region = d.Region
                    //entry.append('h3')
                    //.text(d.Region)
                    return display_label + "<h3 style='position: relative; bottom: 20px'>" + d.Region + "</h3>" 
                } else {
                    let end_countries = ['Burkina Faso', 'Lesotho', 'South Sudan', 'Burundi']
                    let space = '';
                    if(end_countries.includes(d.Country)) {
                        space = '<br><br><br><br><br><br><br><br>';
                    }
                    return display_label + space
                }
            })
            
        .style('color', (d) => { 
            if (d.Country == "Burundi") {
                return "black";
            }
        });
    
    // style the bars (=rectangles) Access to electricity 
    rectElec.attr('width', (d,i) => { return scaleElec(items[i].RuralElec); })
        .attr('height', 6)
        //.attr('x', (d,i) => { return (items[i].RuralElec); })
        .attr('x', 20)
        .attr('y', (items, i) => { return 0; })
        .attr('fill', (d,i) => { return colorScale(items[i].RuralElec); })
        .attr("fill-opacity", 0.5);

}




// .attr('x', 10)
// .attr('y', (items, i) => { return 10 + 13*i; })


