function resetHandler() {
    debugger;
    // reset state to initial values
    numbers.current = 0;
      numbers.past = [];
    // re-render UI with values saved in state
    document.getElementById("biggest").innerHTML = 0;
    document.getElementById("smallest").innerHTML = 0;
    document.getElementById("input").value = numbers.current;
    // log interaction: handler name, new state
    log.push({
      handler: 'reset',
      numbers: JSON.parse(JSON.stringify(numbers))
    })
  
  }