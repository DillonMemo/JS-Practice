'use strict';

window.momentum = window.momentum || {};

// Quotes

momentum.QuoteCtrl = {
  apiUrl: 'https://horizonshq.herokuapp.com/api/inspirationalquotes',
  fetchQuote: () => {
    fetch(momentum.QuoteCtrl.apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        momentum.Core.setQuote(json);
      });
  },
};
