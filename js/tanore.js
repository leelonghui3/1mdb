$(document).ready(function() {

  new Waypoint({
    element: document.getElementById('tanore-1'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore1");
      if (direction == 'down') {
        console.log('tanore1 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore1 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-2'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore2");
      if (direction == 'down') {
        console.log('tanore2 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore2 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-3'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore3");
      if (direction == 'down') {
        console.log('tanore3 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore3 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-4'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore4");
      if (direction == 'down') {
        console.log('tanore4 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore4 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-5'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore5");
      if (direction == 'down') {
        console.log('tanore5 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore5 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-6'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore6");
      if (direction == 'down') {
        console.log('tanore6 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore6 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-7'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore7");
      if (direction == 'down') {
        console.log('tanore7 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore7 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-8'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore8");
      if (direction == 'down') {
        console.log('tanore8 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore8 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-9'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore9");
      if (direction == 'down') {
        console.log('tanore9 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore9 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('tanore-10'),
    handler: function(direction) {
      var a = document.getElementById('tanore-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("tanore10");
      if (direction == 'down') {
        console.log('tanore10 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('tanore10 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });
});
