// initialize app.js
function Init() {   
    console.log("Initializing Screen:");
    
    // // select dataset from dropdown select element
    // var selector = d3.select("#selDataset");

    // // create select options from list of sample names
    // d3.json("samples.json").then((data) => {
    //     var sampleNames = data.names;
        
    //     sampleNames.forEach((sampleID) => {
    //         selector.append("option").text(sampleID).property("value", sampleID);
    //     });

    //     // Use the first sample from the list to build the initial plots
    //     const firstSample = sampleNames[0];
    //     drawGraphs(firstSample);
    //     showMetaData(firstSample);
    // });
}

Init();