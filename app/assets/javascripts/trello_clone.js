window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    TrelloClone.boards = new TrelloClone.Collections.Boards();


    new TrelloClone.Routers.BoardsRouter({
      "$el": $("#main")
    });
    Backbone.history.start();
  }
};

// $(document).ready(function() {
//   TrelloClone.initialize();
// });
