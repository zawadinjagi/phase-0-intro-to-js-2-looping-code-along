for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

function writeCards(names, eventName) {

    let messages = [];

    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      
      messages.push(message);
      debugger;
    }
    
    return messages;
  }
  
  
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);



  function countDown(num) {

    if (num <= 0 || !Number.isInteger(num)) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    
    while (num >= 0) {
      console.log(num);
      num--; 
    }
  }
  
  countDown(10);
  
  