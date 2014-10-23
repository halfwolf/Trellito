TrelloClone.Views.NewBoardForm = Backbone.View.extend({
  template: JST["form"],

  events: {
    "click .add-board": "addBoard"
  },

  render: function() {
    var form = this.template()

    this.$el.html(form);
    return this;
  },

  addBoard: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).parent().serializeJSON();
    this.collection.create(params);
    Backbone.history.navigate("", true);
  }

})