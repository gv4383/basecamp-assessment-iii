import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Welcome Home! Wherever that is...</h1>
        </header>

        <body>
          <div className="about">
            <h1>So you want to know a little about me?</h1>
            <p>
              My name is Greg and I've recently taken an interest in web development. As a result, I've decided to enroll in DevMountain in hopes of learning more and furthering my skills in web development. I've played guitar for half my life now and let me tell you... I LOVE playing music in my spare time! In the future (hopefully near future), I hope to have a good work-life balance that allows me to persue my interests in coding and music. What can I say... I'm just a simple guy who tries to enjoy the little things in life.
            </p>
          </div>

          <div className="buttonSection">
            <h1>I'm a curios guy... Which music genre do you like the most?</h1>

            <div className="buttons">
              <div>
                <input type="radio" name="musicGenre" id="classicalButton"></input>
                <label for="classicalButton">Classical</label>
              </div>              

              <div>
                <input type="radio" name="musicGenre" id="bluesButton"></input>
                <label for="bluesButton">Blues</label>
              </div>

              <div>
                <input type="radio" name="musicGenre" id="jazzButton"></input>
                <label for="jazzButton">Jazz</label>
              </div>

              <div>
                <input type="radio" name="musicGenre" id="funkButton"></input>
                <label for="funkButton">Funk</label>
              </div>

              <div>
                <input type="radio" name="musicGenre" id="soulButton"></input>
                <label for="soulButton">Soul</label>
              </div>

              <div>
                <input type="radio" name="musicGenre" id="rockButton"></input>
                <label for="rockButton">Rock</label>
              </div>
            </div>
          </div>
        </body>

        <footer>
          <p className="footText">Copyright &copy; 2018 by Greg Vargas</p>
        </footer>

      </div>
    );
  }
}

export default App;