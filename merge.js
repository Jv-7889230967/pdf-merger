const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergepdfs = async (p1,p2) => {
  await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('2.pdf'); 
 

  await merger.save('public/merged.pdf'); 
}
module.exports={mergepdfs}  