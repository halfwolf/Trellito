TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",
  model: TrelloClone.Models.List,

  initialize: function(models, options) {
    this.board = options.board
  },

  getOrFetch: function(id) {
    var lists = this
    var list;

    if (list = this.get(id)) {
      list.fetch();
    } else {
      list = new TrelloClone.Models.List({ id: id });
      list.fetch({
        success: function() { lists.add(list); }
      });
    }
    return list;
  }



})
