let name = prompt("What's your name");
if(!name || name.trim() === "") {
  name = "Guest"
}

const greeting = document.getElementById('greeting')
const currentHour = new Date().getHours();

let greetingMessage = "";
if(currentHour < 12) {
  greetingMessage = `Good Morning, ${name}`
}
else if(currentHour < 17) {
  greetingMessage = `Good Afternoon, ${name}`
}
else if(currentHour < 21) {
  greetingMessage = `Good Evening, ${name}`
}
else{
  greetingMessage = `Good Night, ${name}`
}

greeting.textContent = greetingMessage;