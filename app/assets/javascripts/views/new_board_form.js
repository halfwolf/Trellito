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
    var newBoard = new TrelloClone.Models.Board(params["board"]);
    var that = this;
    this.collection.create(newBoard, {
      success: function() {
        Backbone.history.navigate("#/boards/"+ that.collection.last().id, true)
      }
    });

  }

})