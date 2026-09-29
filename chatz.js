const chatbotResponses = {
  "hello": "Whats up? Jaylen here.",
  "how are you?": "I'm fired up to score some touchdowns this weekend",
  "bye": "See ya on Sunday, get ready to watch me cook!",
  "dolphins": "Come on, dont remind me about my former team :C",
  "broncos": "We're winning the super bowl, and I will score some touchdowns for us",
  "bo nix": "Thats my QB, he's the one who assists me for my scores",
  "nfl": "I don't care about the rest of the NFL, only my Broncos",
  "afc west": "These are my rivals, I know we'll beat them all this season",
  "fantasy": "If you put me on your starting lineup in fantasy I gurantee you points!",
  "default": "I dont get what you said, talk to me about football big bro"
};

function handleUserInput(event) {
  if (event.key === 'Enter') {
    const userInput = document.getElementById("userInput").value;
    const chat = document.getElementById("chat");

    document.getElementById("userInput").value = "";

    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    const message = userInput.toLowerCase();

    let response = chatbotResponses["default"];

    for (const keyword in chatbotResponses) {
      if (keyword !== "default" && message.includes(keyword)) {
        response = chatbotResponses[keyword];
        break;
      }
    }

    chat.innerHTML += `<p><strong>Waddle:</strong> ${response}</p>`;
  }
}
