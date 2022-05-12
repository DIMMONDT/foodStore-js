window.addEventListener('DOMContentLoaded', () => {
      const tabs = require('./modules/tabs'),
            modal = require('./modules/modal'),
            timer = require('./modules/timer'),
            cards = require('./modules/cards'),
            calc = require('./modules/calc'),
            slider = require('./modules/slider'),
            forms = require('./modules/forms');

      tabs();
      timer();
      modal();
      cards();
      forms();
      slider();
      calc();
});