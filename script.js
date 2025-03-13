const { useState } = React;
const { createRoot } = ReactDOM;

function App() {
  const btn = {
    margin: 10,
    marginRight: 30,
    backgroundColor: '#89a5ca',
    color: '#272f39',
    fontSize: 30,
    border: 0,
    fontFamily: 'Dongle'
  }
  
  const quotes = [
    {
      text: "The wound is the place where the light enters you.",
      author: "Rumi"
    },
    {
      text:
        "Nothing binds you except your thoughts; nothing limits you except your fear; and nothing controls you except your beliefs.",
      author: "Marianne Williamson"
    },
    {
      text:
        "Be tolerant of those who are lost on their path. Ignorance, conceit, anger, jealousy, and greed stem from a lost soul. Pray that they will find guidance.",
      author: "Elder Wisdom"
    },
    {
      text:
        "A single event can awaken within us a stranger totally unknown to us. To live is to be slowly born.",
      author: "Antoine de Saint-Exupery"
    },
    {
      text:
        "I am not my thoughts, emotions, sense perceptions, and experiences. I am not the content of my life. I am Life. I am the space in which all things happen. I am consciousness. I am the Now. I Am.",
      author: "Eckhart Tolle"
    },
    {
      text:
        "Emotions are like passing storms, and you have to remind yourself that it won't rain forever.",
      author: "Amy Poehler"
    },
    {
      text:
        "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
      author: "Carl Jung"
    },
    {
      text: "In each of us, there is another whom we do not know.",
      author: "Carl Jung"
    },
    {
      text: "Life is a journey that must be travelled no matter how bad the roads and accommodations.",
      author: "Oliver Goldsmith"
    },
    {
      text: "The road to enlightenment is long and difficult, and you should try not to forget snacks and magazines.",
      author: "Anne Lamott"
    },
    {
      text: "The spiritual journey is individual, highly personal. It can't be organized or regulated. It isn't true that everyone should follow one path. Listen to your own truth.",
      author: "Ram Dass"
    },
    {
      text: "Make your own Bible. Select and collect all the words and sentences that in all your readings have been to you like the blast of a trumpet.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "It isn't until you come to a spiritual understanding of who you are - not necessarily a religious feeling, but deep down, the spirit within - that you can begin to take control.",
      author: "Oprah Winfrey"
    },
    {
      text: "I believe in God, but not as one thing, not as an old man in the sky. I believe that what people call God is something in all of us. I believe that what Jesus and Mohammed and Buddha and all the rest said was right. It's just that the translations have gone wrong.",
      author: "John Lennon"
    },
    {
      text: "We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe, atomically.",
      author: "Neil DeGrasse Tyson"
    },
    {
      text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
      author: "Swami Vivekananda"
    },
    {
      text: "Mindful and creative, a child who has neither a past, nor examples to follow, nor value judgements, simply lives, speaks, and plays in freedom.",
      author: "Arnaud Desjardins"
    }
  ];

  const [quote, setQuote] = React.useState(newQuote())

  function newQuote() {
    let randnum = Math.floor(Math.random() * quotes.length)
    return(quotes[randnum])
  }

  function getQuote() {
    let randnum = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randnum])
  }
  return(
    <div id = "quote-box">
    <p id = "text">"{quote.text}"</p>
    <p id= "author">- {quote.author}</p>
    <button id = "new-quote" onClick = {getQuote} style = {btn}>New Quote</button>
    <a href = "twitter.com/intent/tweet" id = "tweet-quote">𝕏</a>
  </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)

