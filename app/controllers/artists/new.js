import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e) {
      e.preventDefault();
      var name = this.get('artistName');

      var promise = $.ajax({
        type: 'post', //create
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          "name": name
        }
      });

      promise.then((response) => {
        alert('yay');
        this.set('artistName', null);
        console.log(response);
        console.log(this);
        var artists = this.get('model.artists');
        var newArtists = artists.concat(response.artist);
        this.set('model', newArtists);

        //after creating a new array/setting, triggers ember to update
      }, function() {
        alert('error');
      });
    }
  }
});
