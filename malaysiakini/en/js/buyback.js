$(document).ready(function() {

  new Waypoint({
    element: document.getElementById('buyback-1'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback1");
      if (direction == 'down') {
        console.log('buyback1 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback1 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-2'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback2");
      if (direction == 'down') {
        console.log('buyback2 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback2 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-3'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback3");
      if (direction == 'down') {
        console.log('buyback3 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback3 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-4'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback4");
      if (direction == 'down') {
        console.log('buyback4 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback4 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-5'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback5");
      if (direction == 'down') {
        console.log('buyback5 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback5 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-6'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback6");
      if (direction == 'down') {
        console.log('buyback6 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback6 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-7'),
    handler: function(direction) {
      var a = document.getElementById('buyback-svg');
      var svgDoc = a.contentDocument;
      var svgItem = svgDoc.getElementsByClassName("buyback7");
      if (direction == 'down') {
        console.log('buyback7 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('buyback7 up');
        $(svgItem).fadeOut('slow');
      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });

  new Waypoint({
    element: document.getElementById('buyback-8'),
    handler: function(direction) {
      var a = document.getElementById('cycle-svg');
      var svgDoc = a.contentDocument;
      var deutsche = svgDoc.getElementsByClassName('deutsche');
      var aabar = svgDoc.getElementsByClassName('aabar');
      var lambasa = svgDoc.getElementsByClassName('lambasa');
      var bridge = svgDoc.getElementsByClassName('bridge');
      var brazen = svgDoc.getElementsByClassName('brazen');
      var onemdb = svgDoc.getElementsByClassName('onemdb');
      var path1 = svgDoc.getElementsByClassName('path1');
      var path2 = svgDoc.getElementsByClassName('path2');
      var path3 = svgDoc.getElementsByClassName('path3');
      var path4 = svgDoc.getElementsByClassName('path4');
      var path5 = svgDoc.getElementsByClassName('path5');
      var path6 = svgDoc.getElementsByClassName('path6');
      if (direction == 'down') {
        console.log('buyback8 down');
        $(deutsche).fadeIn(400);
        $(path1).fadeIn(800);
        $(aabar).fadeIn(1200);
        $(path2).fadeIn(1600);
        $(lambasa).fadeIn(2000);
        $(path3).fadeIn(2400);
        $(bridge).fadeIn(2800);
        $(path4).fadeIn(3200);
        $(brazen).fadeIn(3600);
        $(path5).fadeIn(4000);
        $(onemdb).fadeIn(4400);
        $(path6).fadeIn(4800);
      } else {
        console.log('buyback8 up');
        $(deutsche).fadeOut('fast');
        $(path1).fadeOut('fast');
        $(aabar).fadeOut('fast');
        $(path2).fadeOut('fast');
        $(lambasa).fadeOut('fast');
        $(path3).fadeOut('fast');
        $(bridge).fadeOut('fast');
        $(path4).fadeOut('fast');
        $(brazen).fadeOut('fast');
        $(path5).fadeOut('fast');
        $(onemdb).fadeOut('fast');
        $(path6).fadeOut('fast');

      }
    }
  }, {
    offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100
  });
});
