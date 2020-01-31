function parseSourceParam() {
  const locString = window.location;

  //alert(locString);

  console.log("locString=" + locString);

  const urlParams = new URLSearchParams(locString.search);
  var theSource = urlParams.get('Mysource');
 // alert(theSource);
  console.log(theSource);

  // Add conditionals
  if (theSource == "cia") {
    //Update hrefs
    document.getElementById("us")
    .href="https://www.cia.gov/library/publications/the-world-factbook/geos/us.html";
  }
}