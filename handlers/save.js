function saveinputHandler() {
    debugger;
    
    let newinput= Number(document.getElementById('input').value);
   
    if (Number(newinput)) {
        let numberslist=document.getElementById("numbersresult").innerHTML
        entries.numbery.push(newinput);
    }
    if (isNaN(newinput)) {
        let NANlist=document.getElementById("NANresult").innerHTML =
        entries.nany.push(newinput);
    } 
   
    log.push({
      handler: 'saveinputHandler',
      newinput,
      entries: JSON.parse(JSON.stringify(entries))
    })
  }