var UserCollection = Backbone.Collection.extend({
  model: User,
  initialize: function() {
    app.socket.on('newUser', $.proxy(this.onNewUser, this));
    app.socket.on('updateUser', $.proxy(this.onChangeUser, this));    
    app.socket.on('removedUser', $.proxy(this.onRemoveUser, this));     
  },
  /*fetchUsers: function() {
    var self = this;
    $.getJSON('/regions', function(data) {
      $.each(data.regions, function(idx, region) {
        if (region.type === "rectangle") {        
          self.onNewUser(region);
        }
      });
    });    
  },*/
  
  onNewUser: function(userJson) {
    var user = new User(userJson);
    this.add(user);
    
  },
  
  onChangeUser: function(user) {
    var model = this.get(user.id);
    if (model) {
      model.set(user);
    }
  },
  onRemoveUser: function(userid) {
    var model = this.get(userid);
    if (model) {
      this.remove(model);
    }
  }
});