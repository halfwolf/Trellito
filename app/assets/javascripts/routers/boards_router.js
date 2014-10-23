TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  routes: {
    "": 'boardsIndex',
    "boards/new": "newBoard",
    "boards/:id": "boardShow",
    "boards/:id/new": "newList"
  },

  initialize: function(options) {
    this.$el = options.$el;
  },

  boardsIndex: function() {
    TrelloClone.boards.fetch();
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

  boardShow: function(id) {
    var board = TrelloClone.boards.getOrFetch(id)
    var showBoard = new TrelloClone.Views.BoardShow({
      model: board
    })

    this._swapView(showBoard);
  },

  newList: function(id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var newListView = new TrelloClone.Views.NewList({
      model: board
    })
    this._swapView(newListView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);

  }


})