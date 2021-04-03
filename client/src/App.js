import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <div className="imessage">
        <div className="body">
          <Body />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

/*
NOTES & CAVEATS:
- Timeline doesn't update automatically; infinite scroll is activated by scrolling downwards at "latest" (bottom of feed)
- There's a little lag between when likes & unlikes are registered by the Twitter api, so scrolling & refreshing immediately
  after doing liking / unliking may not be up-to-date (e.g. might falsely show liked / unliked status)
- No reply functionality, no retweets (might accidentally subtweet), no deleting Tweets
- Basically SMS (text only)
TODO:
- Item nesting in GrayMessage.js and BlueMessage.js and corresponding CSS in Message.css are quite messy, can be cleaned up
- Perhaps add retweet functionality later (retweet twice = no effect); see icons in "options-unused"
- Maybe add unfollowing functionality — "remove from groupchat" — but this might be weird because removing from groupchat is
  two-way, unfollowing isn't
- Swipe left to see timestamps on messages (in general, better animations — perhaps using react-use-gesture and react-spring)
  - Another animation idea: tweeting / sending message: similar animation as when sending iMessage
  - Another animation idea: nonlinear - decrease speed over duration of single scroll
- Style scrollbar like iMessage's (thin & gray bar)
- Double-tap header to scroll to top
- Autosizing textarea should actually push the entire stream of Tweets upwards, not cover them)
- Add error-handling for liking / unliking / Tweeting
- Add functionality for deleting Tweets
*/