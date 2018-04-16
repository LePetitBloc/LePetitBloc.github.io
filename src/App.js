import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h1>Le Petit Bloc</h1>
            <em>Software craftsmanship for blockchains projects</em>

            <dl>
                <dt>Twitter</dt>
                <dd><a href="https://twitter.com/lepetitbloc">https://twitter.com/lepetitbloc</a></dd>
                <dt>Github</dt>
                <dd><a href="https://github.com/lepetitbloc">https://github.com/lepetitbloc</a></dd>
                <dt>Dockerhub</dt>
                <dd><a href="https://hub.docker.com/u/lepetitbloc/">https://hub.docker.com/u/lepetitbloc/</a></dd>
                <dt>Steemit</dt>
                <dd><a href="https://steemit.com/@lepetitbloc">https://steemit.com/@lepetitbloc</a></dd>
                <dt>Discord</dt>
                <dd><a href="https://t.co/Uruxhq1nJs">https://t.co/Uruxhq1nJs</a></dd>
                <dt>Mail</dt>
                <dd><a href="mailto:bonjour@lepetitbloc.net?subject=Bonjour%20Le%20Petit%20Bloc">bonjour@lepetitbloc.net</a></dd>
            </dl>

            <h2>About</h2>
            <p>Our "Hello world" (in french): <a href="https://speakerdeck.com/pocky/presentation-du-projet-le-petit-bloc">https://speakerdeck.com/pocky/presentation-du-projet-le-petit-bloc</a></p>

            <h2>Peoples</h2>

            <h3>Alexandre Balmes</h3>
            <em>aka <a href="https://twitter.com/pockystar">pockystar</a></em>
            <p>Co-founder</p>
            <p>PHP consultant (Domain Driven Design)</p>
            <ul>
                <li><a href="http://www.vanoix.com/">Vanoix</a> co-founder</li>
                <li><a href="https://twitter.com/cryptopocky">https://twitter.com/cryptopocky</a></li>
            </ul>

            <h3>Johan Dufour</h3>
            <em>aka <a href="https://github.com/lutangar">lutangar</a></em>
            <p>Co-founder</p>
            <p>Full-stack senior Web developer</p>
            <ul>
                <li><a href="https://larriereguichet.fr">L'Arrière Guichet</a> founder</li>
                <li><a href="https://twitter.com/lutangar">https://twitter.com/lutangar</a></li>
            </ul>

            <h2>Location</h2>
            <p>Lyon, France</p>
        </div>
    );
  }
}

export default App;
