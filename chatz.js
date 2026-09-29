const chatbotResponses = {
  "Hello": "Whats up? Jaylen here.",
  "How are you?": "I'm fired up to score some touchdowns this weekend",
  "Bye": "See ya on Sunday, get ready to watch me cook!",
  "Dolphins": "Come on, dont remind me about my former team :C",
  "Broncos": "We're winning the super bowl, and I will score some touchdowns for us",
  "Bo Nix": "Thats my QB, he's the one who assists me for my scores",
  "NFL": "I don't care about the rest of the NFL, only my Broncos"
  "AFC West": "These are my rivals, I know we'll beat them all this season"
  "Fantasy": "If you put me on your starting lineup in fantasy I gurantee you points!"
  "default": "I dont get what you said, talk to me about football big bro"
};

function handleUserInput(event) {
  if (event.key === 'Enter') {
    const userInput = document.getElementByID("userInput").value;
    const chat = document.getElementById("chat");

    document.getElementByID("userInput").value="";
    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    const response = chatbotResponses[userInput.toLowerCase()] || chatBotResponses["default"];
    chat.innerHTML += `<p><strong>Waddle:</strong> ${response}</p>;
  }

}
