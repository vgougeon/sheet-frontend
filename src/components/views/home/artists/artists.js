import React, { Component } from 'react';
import './artists.sass'
class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      artists: [
        { name: 'Zaz', img: 'https://scontent-rtl.akamaized.net/GED/00330000/333900/333915_700x0.webp' },
        { name: 'Taylor Swift', img: 'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/03/07/931/524/694940094001_6011111003001_6011106173001-vs.jpg?ve=1&tl=1' },
        { name:'Angèle', img: 'https://media1.ledevoir.com/images_galerie/nwd_730060_569815/image.jpg' },
        { name:'Selena Gomez', img:'https://static.accessonline.com/uploads/2019/05/SelenaSocial.jpg'}
      ]
    }
  }
  render() { 
    return (
      <div className="artists-grid">
        { this.state.artists.map(artist =>
        <article>
          <div className="article-main-head">
            <img src={ artist.img } />
            { artist.name.split(' ').map((part, index, name) => {
              return index === 0 && (index !== name.length - 1) ?
              <span className="light">{ part } </span>
              : <span className="ml-1 bold">{ part } </span>
            }
            )}
          </div>
        </article>
        )}
      </div>
    );
  }
}
 
export default Artists;