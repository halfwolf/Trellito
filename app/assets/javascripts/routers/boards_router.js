TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  routes: {
    "": 'boardsIndex',
    "boards/new": "newBoard"
  },

  initialize: function(options) {
    this.$el = options.$el;
    TrelloClone.boards.fetch();
  },

  boardsIndex: function() {
    var newBoardsIndex = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boards
    });
    this._swapView(newBoardsIndex);
  },

  newBoard: function(){
    var newBoardForm = new TrelloClone.Views.NewBoardForm({
      collection: TrelloClone.boards
    });
    this._swapView(newBoardForm);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);

  }


})