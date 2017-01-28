/**
 * filters
 */

angular.module('utApp').filter('length', function() {
  return function(text) {
    return ('' + (text || '')).length;
  }
});


