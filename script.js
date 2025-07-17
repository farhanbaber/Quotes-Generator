let inputType = -1;
function gen() {
    let quotes = [
          "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Do one thing every day that scares you. – Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
  "Dream big and dare to fail. – Norman Vaughan",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "The best way to predict your future is to create it. – Abraham Lincoln",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "If you’re going through hell, keep going. – Winston Churchill",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Believe in yourself and all that you are.",
  "Failure is not the opposite of success, it's part of success. – Arianna Huffington",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "Magic is believing in yourself. If you can do that, you can make anything happen. – Johann Wolfgang von Goethe",
  "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
  "Stay away from those people who try to disparage your ambitions. – Mark Twain",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Try not to become a man of success. Rather become a man of value. – Albert Einstein",
  "Setting goals is the first step in turning the invisible into the visible. – Tony Robbins",
  "If you want to achieve greatness stop asking for permission.",
  "The best revenge is massive success. – Frank Sinatra",
  "Action is the foundational key to all success. – Pablo Picasso",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "I never dreamed about success. I worked for it. – Estée Lauder",
  "You become what you believe. – Oprah Winfrey",
  "Big journeys begin with small steps.",
  "Don’t limit your challenges, challenge your limits.",
  "Success starts with self-discipline.",
  "Make each day your masterpiece. – John Wooden",
  "Little by little, a little becomes a lot. – Tanzanian Proverb",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Success is not in what you have, but who you are. – Bo Bennett"

    ]
    let inputField;
    do {
        inputField = Math.floor(Math.random() * quotes.length)
        
    } while (inputField === inputType);

    inputType =  inputField;
    document.getElementById("input").value =  quotes[inputField]


}
