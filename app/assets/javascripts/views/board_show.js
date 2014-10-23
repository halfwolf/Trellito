TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST["show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    var showView = this.template({
      board: this.model
    });
    this.$el.html(showView);
    debugger
    return this;
  }



})