(function() {

  // element that will contian the templates 
  var content = document.getElementById('content');

  // posible routes that could handle the application
  var routes = [
    {name:'', template:'pages/home.html'},
    {name:'home', template: 'pages/home.html'},
    {name:'about', template: 'pages/about.html'}
  ];

  // this function will manage the routing, it will check the current
  // location and compare with the routes list, then load the content
  // in the index page.
  function router() {
    var route = window.location.hash.substring(1);
    var copy = routes.filter(function(element) {
      return element.name === route;
    })

    var template = (copy[0] ? copy[0].template : 'pages/home.html');
    
    var req = new XMLHttpRequest();
    req.addEventListener('load', function() {
      content.innerHTML = this.responseText;
    }, false);
    req.open('get', template, true);
    req.send(null);
  }

  // this will allow us to listen to certain events and execute the router when these events occur
  window.addEventListener('load', router, false);
  window.addEventListener('hashchange', router, false);

})();
