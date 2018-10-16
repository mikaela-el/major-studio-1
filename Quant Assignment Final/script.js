d3.csv('SE4ALLData.csv') // load data set 

.then((data) => {
  
    // Grab data from South Africa Specifically for 1.1 Access to Elec
    var dataSouthAfrica = data.filter( (line) => {
        return line['Country Code'] == 'ZAF' && line['Indicator Code'] == '1.1_ACCESS.ELECTRICITY.TOT';
    });
    
    // Grab data from South Africa Specifically for 1.2 Acces to Elec Rural 
    var dataRural = data.filter ( (line) => {
        return line['Country Code'] == 'ZAF' && line['Indicator Code'] == '1.2_ACCESS.ELECTRICITY.RURAL';
    });
    
    var dataUrban = data.filter ( (line) => {
        return line['Country Code'] == 'ZAF' && line['Indicator Code'] == '1.3_ACCESS.ELECTRICITY.URBAN';
    });
    
    //console.log(dataRural);
    
    //ar f = d3.format(".1%");
    
    var elecSouthAfrica = [parseFloat(dataSouthAfrica[0]['1990']), parseFloat(dataSouthAfrica[0]['1991']), parseFloat(dataSouthAfrica[0]['1992']), parseFloat(dataSouthAfrica[0]['1993']), parseFloat(dataSouthAfrica[0]['1994']), parseFloat(dataSouthAfrica[0]['1995']), parseFloat(dataSouthAfrica[0]['1996']), parseFloat(dataSouthAfrica[0]['1997']), parseFloat(dataSouthAfrica[0]['1998']), parseFloat(dataSouthAfrica[0]['1999']), parseFloat(dataSouthAfrica[0]['2000']), parseFloat(dataSouthAfrica[0]['2001']), parseFloat(dataSouthAfrica[0]['2002']), parseFloat(dataSouthAfrica[0]['2003']), parseFloat(dataSouthAfrica[0]['2004']), parseFloat(dataSouthAfrica[0]['2005']), parseFloat(dataSouthAfrica[0]['2006']), parseFloat(dataSouthAfrica[0]['2007']), parseFloat(dataSouthAfrica[0]['2008']), parseFloat(dataSouthAfrica[0]['2009']), parseFloat(dataSouthAfrica[0]['2010']), parseFloat(dataSouthAfrica[0]['2011']), parseFloat(dataSouthAfrica[0]['2012']), parseFloat(dataSouthAfrica[0]['2013']), parseFloat(dataSouthAfrica[0]['2014']), parseFloat(dataSouthAfrica[0]['2015']), parseFloat(dataSouthAfrica[0]['2016'])];
    
    var elecRural = [parseFloat(dataRural[0]['1990']), parseFloat(dataRural[0]['1991']), parseFloat(dataRural[0]['1992']), parseFloat(dataRural[0]['1993']), parseFloat(dataRural[0]['1994']), parseFloat(dataRural[0]['1995']), parseFloat(dataRural[0]['1996']), parseFloat(dataRural[0]['1997']), parseFloat(dataRural[0]['1998']), parseFloat(dataRural[0]['1999']), parseFloat(dataRural[0]['2000']), parseFloat(dataRural[0]['2001']), parseFloat(dataRural[0]['2002']), parseFloat(dataRural[0]['2003']), parseFloat(dataRural[0]['2004']), parseFloat(dataRural[0]['2005']), parseFloat(dataRural[0]['2006']), parseFloat(dataRural[0]['2007']), parseFloat(dataRural[0]['2008']), parseFloat(dataRural[0]['2009']), parseFloat(dataRural[0]['2010']), parseFloat(dataRural[0]['2011']), parseFloat(dataRural[0]['2012']), parseFloat(dataRural[0]['2013']), parseFloat(dataRural[0]['2014']), parseFloat(dataRural[0]['2015']), parseFloat(dataRural[0]['2016'])];
    
    var elecUrban = [parseFloat(dataUrban[0]['1990']), parseFloat(dataUrban[0]['1991']), parseFloat(dataUrban[0]['1992']), parseFloat(dataUrban[0]['1993']), parseFloat(dataUrban[0]['1994']), parseFloat(dataUrban[0]['1995']), parseFloat(dataUrban[0]['1996']), parseFloat(dataUrban[0]['1997']), parseFloat(dataUrban[0]['1998']), parseFloat(dataUrban[0]['1999']), parseFloat(dataUrban[0]['2000']), parseFloat(dataUrban[0]['2001']), parseFloat(dataUrban[0]['2002']), parseFloat(dataUrban[0]['2003']), parseFloat(dataUrban[0]['2004']), parseFloat(dataUrban[0]['2005']), parseFloat(dataUrban[0]['2006']), parseFloat(dataUrban[0]['2007']), parseFloat(dataUrban[0]['2008']), parseFloat(dataUrban[0]['2009']), parseFloat(dataUrban[0]['2010']), parseFloat(dataUrban[0]['2011']), parseFloat(dataUrban[0]['2012']), parseFloat(dataUrban[0]['2013']), parseFloat(dataUrban[0]['2014']), parseFloat(dataUrban[0]['2015']), parseFloat(dataUrban[0]['2016'])];
    
    console.log( dataSouthAfrica[0]['1990']);
    console.log(elecSouthAfrica);
    //console.log( dataRural[0]['1990']);
    //console.log( dataUrban[0]['1990']);
 
    
    // globals
            let margin = 50;
            let height = 400;
            let width = window.innerWidth-margin*4.1;
    
    
    // append an svg element
    let svg = d3.select('body')
        .append('svg')
        .attr('width', window.innerWidth*4.1 + 'px')
        .attr('height', window.innerHeight + 'px');

        
     // append data to svg, then append a rectangle (bar) for each month (i.e. elements in temp array)
    let circle = svg.selectAll('circle.sa')
       .data(elecSouthAfrica)
       .enter()
       .append('circle')
       .attr('class', 'sa')
       
     let years = svg.selectAll('text.sa')
        .data(elecSouthAfrica)
        .enter()
        .append('text')
        .attr('class', 'sa')
        .on('mouseover', function(d, i) {
        // make the mouseover'd element bigger and red
        d3.select(this)
            .transition()
            .duration(150)
            .attr('fill', '#000000')
            .style("font-size", "15px");
        })
    
        .on('mouseout', function(d, i) {
      
        // return the mouseover'd element to being smaller and black
        d3.select(this)
            .transition()
            .duration(150)
            .attr('fill', '#000000')
            .style("font-size", "8px");
        })
        
     let circleRural = svg.selectAll('circle.r')
       .data(elecRural)
       .enter()
       .append('circle')
       .attr('class', 'r');
       
    let yearsRural = svg.selectAll('text.r')
        .data(elecRural)
        .enter()
        .append('text')
        .attr('class', 'r')
    
    let circleUrban = svg.selectAll('circle.u')
       .data(elecUrban)
       .enter()
       .append('circle')
       .attr('class', 'u');
    
    let yearsUrban = svg.selectAll('text.u')
        .data(elecUrban)
        .enter()
        .append('text')
        .attr('class', 'u')

    let scale = d3.scaleLinear()
        .domain([25, 95])
        .range([1, 55])
        
    let colorScale = d3.scaleLinear()
        .domain([55, 95])
        .range(["Red", "Yellow"])

    let colorScaleRural = d3.scaleLinear()
        .domain([30, 80])
        .range(["Gold", "Yellow"])
    
     let colorScaleUrban = d3.scaleLinear()
        .domain([80, 95])
        .range(["Orange", "Yellow"])
    
       
     // style the circles (=circle)
   circle.attr('cx', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
        .attr('cy', 500) // return "where the circles are vertically" + "the space between the circles vertically"
        .attr('r', (elec) => { return scale(elec); })
        .attr('fill', (elec) => { return colorScale(elec); }) 
        .attr("stroke-width", 1.2)
        .attr("stroke", (elec) => { return colorScale(elec); })
        .attr("fill-opacity", 0.8)
        
    circleRural.attr('cx', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
        .attr('cy', 165) // return "where the circles are vertically" + "the space between the circles vertically"
        .attr('r', (elec) => { return scale(elec); })
        .attr('fill', (elec) => { return colorScaleRural(elec); }) 
        .attr("stroke-width", 1.2)
        .attr("stroke", (elec) => { return colorScaleRural(elec); })
        .attr("fill-opacity", 0.8)
    
    circleUrban.attr('cx', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
        .attr('cy', 330) // return "where the circles are vertically" + "the space between the circles vertically"
        .attr('r', (elec) => { return scale(elec); })
        .attr('fill', (elec) => { return colorScaleUrban(elec); }) 
        .attr("stroke-width", 1.2)
        .attr("stroke", (elec) => { return colorScaleUrban(elec); })
        .attr("fill-opacity", 0.8)
        
    years.attr('x', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
        .attr('y', 565)
        .attr("text-anchor", "middle")
        .style("font-size", "8px") 
        .style('fill', 'white')
        .text((elec) => { return elec.toFixed(1) + "%"; })
    
    yearsRural.attr('x', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
        .attr('y', 220)
        .attr("text-anchor", "middle")
        .style("font-size", "8px") 
        .style('fill', 'white')
        .text((elec) => { return elec.toFixed(1) + "%"; })
        
    yearsUrban.attr('x', (elec, i) => { return 140 + 190*i; }) // puts the circle in one row vertically 
        .attr('y', 400)
        .attr("text-anchor", "middle")
        .style("font-size", "8px") 
        .style('fill', 'white')
        .text((elec) => { return elec.toFixed(1) + "%"; })
       
 
});