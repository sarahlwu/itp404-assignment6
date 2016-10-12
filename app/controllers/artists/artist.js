import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSong: function(e) {
      e.preventDefault();
      var price = this.get('price');
      var title = this.get('songName');
      var createdBy = this.get('createdBy');

      var promise = $.ajax({
        type: 'post', //create
        url: 'http://itp-api.herokuapp.com/api/songs',
        data: {
          "title": title,
          "artist": this.get('model.id'),
          "genre": 1,
          "price": price,
          "createdBy": createdBy
        }
      });

      // var controller = this;
      // promise.then(function() {
      //   alert('yay');
      //   controller.set('songName', null);
      //   controller.set('price', null);
      //   controller.set('createdBy', null);
      // }, function() {
      //   alert('error');
      // });

      promise.then((response) => {
        alert('yay');
        this.set('songName', null);
        this.set('price', null);
        this.set('createdBy', null);
        var songs = this.get('model.songs');
        // songs.pushObject(response.song);
        //modifies the same array, ember can't detect data has changed
        var newSongs = songs.concat(response.song);
        this.set('model.songs', newSongs);

        //after creating a new array/setting, triggers ember to update
      }, function() {
        alert('error');
      });
    }
  }
});

// $.('form').on('submit', function(e){
//   e.preventDefault();
// });
