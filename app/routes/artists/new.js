import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    var promise = $.ajax({
      type: 'get',
      url: 'http://itp-api.herokuapp.com/api/artists/'
    }).then(function(response){
      return {
        artists: response.artists
      };
    });

    return promise;
});
