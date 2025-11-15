





const magic8Ball = () => {
  const question = prompt("Yes or No question?");
  console.log(question);

  const responses = [
    "Yes, definitely!",
    "It is certain.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "The stars say yes.",
    "The future is unclear.",
    "Proceed with caution.",
    "My intuition says no.",
    "Signs point to yes"
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  alert(responses[randomIndex]);
};

magic8Ball();
