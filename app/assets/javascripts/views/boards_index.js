TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['index'],
  tagName: 'ul',

  events: {
    "click .delete-board": "deleteBoard"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.render);
  },

  render: function() {
    var boards = this.template({
      boards: this.collection
    });
    this.$el.html(boards);
    return this;
  },

  deleteBoard: function(event) {
    event.preventDefault();
    var boardId = event.currentTarget.id;
    var board = this.collection.get(boardId)
    board.destroy();
  }

})