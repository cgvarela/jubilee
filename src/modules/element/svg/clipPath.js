define(function (require) {
  var d3 = require("d3");

  return function clipPath() {
    var id = uniqueID();
    var transform = "translate(0,0)";
    var x = 0;
    var y = 0;
    var width = 0;
    var height = 0;
    var values = null;

    function element(selection) {
      selection.each(function (data, i) {
        var clipPath = d3.select(this).select("clipPath")
          .data(values ? values : data);

        // Exit
        clipPath.exit().remove();

        // Enter
        clipPath.enter().append("clipPath");

        // Update
        clipPath
          .attr("id", id)
          .attr("transform", transform)
          .append("rect")
          .attr("x", x)
          .attr("y", y)
          .attr("width", width)
          .attr("height", height);
      });
    }

    function uniqueID() {
      var randomNumber = Math.floor(Math.random() * 100);
      return "uniqueId_" + randomNumber;
    }

    element.data = function (_) {
      if (!arguments.length) { return values; }
      values = _;
      return element;
    };
    
    element.id = function (_) {
      if (!arguments.length) { return id; }
      id = _;
      return element;
    };

    element.transform = function (_) {
      if (!arguments.length) { return transform; }
      transform = _;
      return element;
    };

    element.x = function (_) {
      if (!arguments.length) { return x; }
      x = _;
      return element;
    };

    element.y = function (_) {
      if (!arguments.length) { return y; }
      y = _;
      return element;
    };

    element.width = function (_) {
      if (!arguments.length) { return width; }
      width = _;
      return element;
    };

    element.height = function (_) {
      if (!arguments.length) { return height; }
      height = _;
      return element;
    };

    return element;
  };
});