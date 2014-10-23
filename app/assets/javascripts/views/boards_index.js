TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['index'],
  tagName: 'ul',

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var boards = this.template({
      boards: this.collection
    });
    this.$el.html(boards);
    return this;
  }

})