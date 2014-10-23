TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists",

  cards: function() {
    if(!this._cards) {
      this._cards = new TrelloClone.Collections.Cards([], {
        board: this
      })
      this._cards.comparator = "ord";
    }
    return this._cards;
  },

  parse: function(response) {
    if (response.cards) {
      this.cards().set(response.cards, {parse: true});
      delete response.cards;
    }
    return response;
  }

})