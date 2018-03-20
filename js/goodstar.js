$(document).ready(() => {

  new Waypoint({
    element: document.getElementById('goodstar-1'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar1");
      if (direction == 'down') {
        console.log('goodstar1 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar1 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-2'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar2");
      if (direction == 'down') {
        console.log('goodstar2 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar2 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-3'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar3");
      if (direction == 'down') {
        console.log('goodstar3 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar3 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-4'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar4");
      if (direction == 'down') {
        console.log('goodstar4 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar4 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-5'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar5");
      if (direction == 'down') {
        console.log('goodstar5 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar5 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-6'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar6");
      if (direction == 'down') {
        console.log('goodstar6 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar6 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-7'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar7");
      if (direction == 'down') {
        console.log('goodstar7 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar7 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-8'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar8");
      if (direction == 'down') {
        console.log('goodstar8 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar8 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-9'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar9");
      if (direction == 'down') {
        console.log('goodstar9 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar9 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('goodstar-10'),
    handler: (direction) => {
      let a = document.getElementById('goodstar-svg');
      let svgDoc = a.contentDocument;
      let svgItem = svgDoc.getElementsByClassName("goodstar10");
      if (direction == 'down') {
        console.log('goodstar10 down');
        $(svgItem).fadeIn('slow');
      } else {
        console.log('goodstar10 up');
        $(svgItem).fadeOut('slow');
      };
    }
  }, {
    offset: '50%'
  });
});
