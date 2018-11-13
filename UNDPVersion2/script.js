// load data set  
//const data = d3.json("datatest.json");
const data = d3.json("undpdata.json");
    
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


	console.log(typeof items[0].FemaleMean);
	console.log(typeof items[0].MaleMean);
	console.log(typeof items[0].Country);
	
// globals
        let margin = 10;
        let height = window.innerHeight;
        let width = window.innerWidth;

// append an svg element to Country div 
    let header = d3.select('head')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 200);
       
// append an svg element to Country div 
    let box = d3.select('#country')
        .append('svg')
        .attr('width', 800)
        .attr('height', window.innerHeight*15);


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
        .domain([0, 100])
        .range(["Red", "Orange"])

    // Center Line 
    box.append("line")
          .attr("x1", 400)
          .attr("x2", 400)
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke", 'E2E1E0');
    
    // Male 4 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400-scale(4); } )
          .attr("x2", (d,i) => { return 400-scale(4); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
    // Female 4 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400+scale(4); } )
          .attr("x2", (d,i) => { return 400+scale(4); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
     // Male 8 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400-scale(8); } )
          .attr("x2", (d,i) => { return 400-scale(8); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
     // Female 8 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400+scale(8); } )
          .attr("x2", (d,i) => { return 400+scale(8); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');

    // Male 12 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400-scale(12); } )
          .attr("x2", (d,i) => { return 400-scale(12); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
    // Female 12 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400+scale(12); } )
          .attr("x2", (d,i) => { return 400+scale(12); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
    // Male 16 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400-scale(16); } )
          .attr("x2", (d,i) => { return 400-scale(16); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');
    
     // Female 16 Year Line 
    box.append("line")
          .attr("x1", (d,i) => { return 400+scale(16); } )
          .attr("x2", (d,i) => { return 400+scale(16); } )
          .attr("y1", 30)
          .attr("y2", window.innerHeight*15)
          .style("stroke-dasharray","5,5")
          .style("stroke", 'aaaaaa');


//   // style the country name above each bar 
//   Country.attr('x', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
//         .attr('y', 220)
//         .attr("text-anchor", "middle")
//         .style("font-size", "8px") 
//         .style('fill', 'white')
//         .text((elec) => { return elec.toFixed(1) + "%"; })


 // style the bars (=rectangles) Female Mean Education 
    rectFemaleMean.attr('width', (d,i) => { return scale(items[i].FemaleMean); })
        .attr('height', 60)
        .attr('x', 400)
        .attr('y', (items, i) => { return 70 + 300*i; })
        .attr('fill', '#f5c250')
        .attr('id', (d) => { return d.Country; });

 // style the bars (=rectangles) Female Expected Education 
    rectFemaleExpect.attr('width', (d,i) => { return scale(items[i].FemaleExpect); })
        .attr('height', 60)
        .attr('x', 400)
        .attr('y', (items, i) => { return 70 + 300*i; })
        .attr('fill', '#f5c250')
        .attr("fill-opacity", 0.5);

 // style the bars (=rectangles) Male Mean Education 
    rectMaleMean.attr('width', (d,i) => { return scale(items[i].MaleMean); })
        .attr('height', 60)
        .attr('x', (d,i) => { return 400-scale(items[i].MaleMean); })
        .attr('y', (items, i) => { return 70 + 300*i; })
        .attr('fill', '#f5c250');
        
 // style the bars (=rectangles) Male Expected Education 
    rectMaleExpect.attr('width', (d,i) => { return scale(items[i].MaleExpect); })
        .attr('height', 60)
        .attr('x', (d,i) => { return 400-scale(items[i].MaleExpect); })
        .attr('y', (items, i) => { return 70 + 300*i; })
        .attr('fill', '#f5c250')
        .attr("fill-opacity", 0.5);


    // // Countries to list for Index DIV              
    //  items.forEach( (d, i) => {
    //                 d3.select('#country')
    //                     .append('p')
    //                     .text(d.Country)
    //                     .style('color', "black")
    //         });

    // Countries to list for Index DIV              
    let margins = d3.select('#index').selectAll('div').data(items).enter()
    
    let cont = margins.append('div');
    
    let minisvg = cont.append('svg');
    
    let rectElec = minisvg.append('rect').attr('class', 'a');
    
    cont
        .append('p')
        .text((d, i) => { return d.RuralElec + "%" +  '     ' + d.Country})
        .style('color', (d) => { 
            if (d.Country == "Burundi") {
                return "black";
            }
        });
    
    //  items.forEach( (d, i) => {
    //                 d3.select('#index')
    //                     .append('div')
    //                     .append('svg')
    //                     .append('p')
    //                     .text( d.RuralElec + "%" +  '     ' + d.Country)
    //                     .style('color', () => { 
    //                         if (d.Country == "Burundi") {
    //                             return "pink";
    //                         }
    //                     }
    //                 )
    //         });
    
    // style the bars (=rectangles) Access to electricity 
    rectElec.attr('width', (d,i) => { return scaleElec(items[i].RuralElec); })
        .attr('height', 7)
        //.attr('x', (d,i) => { return (items[i].RuralElec); })
        .attr('x', 20)
        .attr('y', (items, i) => { return 0; })
        .attr('fill', (d,i) => { return colorScale(items[i].RuralElec); })
        .attr("fill-opacity", 0.5);

        }

// // append data to svg, then append a rectangle (bar) for Access to Electricty  
//     let rectElec = box.selectAll('rect.a')
//       .data(items)
//       .enter()
//       .append('rect')
//       .attr('class', 'a');



// .attr('x', 10)
// .attr('y', (items, i) => { return 10 + 13*i; })


