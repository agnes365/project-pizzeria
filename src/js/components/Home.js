import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.data = {};
    thisHome.data.comments = [
      { img: 'images/assets/pizza-3.jpg', title: 'AMAZING SERVICE!', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat mi at nisi laoreet, et tincidunt urna auctor. Cras volutpat velit orci, in dictum purus fermentum eget. Ut congue laoreet ultrices.', author: 'Margaret Osborne' },
      { img: 'images/assets/pizza-1.jpg', title: 'SUPER PIZZA!!!', message: 'Cras consequat mi at nisi laoreet, et tincidunt urna auctor.', author: 'John Bravo' },
      { img: 'images/assets/pizza-2.jpg', title: 'WOW', message: 'Cras consequat mi at nisi laoreet, et tincidunt urna auctor.', author: 'Adam' }
    ];
    thisHome.data.gallery = [
      { img: 'images/assets/pizza-4.jpg' },
      { img: 'images/assets/pizza-5.jpg' },
      { img: 'images/assets/pizza-6.jpg' },
      { img: 'images/assets/pizza-7.jpg' },
      { img: 'images/assets/pizza-8.jpg' },
      { img: 'images/assets/pizza-9.jpg' }
    ];
    thisHome.render(element);
    thisHome.initWidgets();
  }
  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget(thisHome.data);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.appendChild(utils.createDOMFromHTML(generatedHTML));
    thisHome.dom.commentsWrapper = thisHome.dom.wrapper.querySelector(select.home.comments);
  }
  initWidgets() {
    const thisHome = this;

    new Flickity(thisHome.dom.commentsWrapper, {
      autoPlay: 3000,
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false
    });
  }
}
export default Home;