define(function (require) {
  describe("Ellipse SVG Tests", function () {
    var ellipse = require("src/modules/element/ellipse");
    var d3fixture = require("fixtures/fixture");
    var generateData = function () {
      return Array.apply(null, new Array(10))
        .map(function (val, i) {
          return {
            x: +(Math.random() * 100).toFixed(0),
            y: +(Math.random() * 100).toFixed(0)
          };
        });
    };
    var element = ellipse();
    var fixture;

    beforeEach(function () {
      fixture = d3fixture;

      fixture.append("svg")
        .attr("width", 500)
        .attr("height", 500);

      fixture
        .datum(generateData())
        .call(element);
    });

    afterEach(function () {
      fixture.remove();
      fixture = null;
    });

    it("should return a function", function () {
      var isFunction = (typeof element === "function");
      chai.assert.equal(isFunction, true);
    });

    describe("cx API", function () {
      var defaultCX;

      beforeEach(function () {
        defaultCX = function (d) { return d.x; };
        element.cx(defaultCX);
      });

      afterEach(function () {
        element.cx(defaultCX);
      });

      it("should get the property", function () {
        chai.assert.equal(element.cx(), defaultCX);
      });

      it("should set the property", function () {
        var newCX = function (d) { return d.cx; };
        element.cx(newCX);
        chai.assert.equal(element.cx(), newCX);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function (d) {
            chai.assert.equal(this.getAttribute("cx"), d.x);
          });
      });
    });

    describe("y API", function () {
      var defaultCY;

      beforeEach(function () {
        defaultCY = function (d) { return d.y; };
        element.cy(defaultCY);
      });

      afterEach(function () {
        element.cy(defaultCY);
      });

      it("should get the property", function () {
        chai.assert.equal(element.cy(), defaultCY);
      });

      it("should set the property", function () {
        var newCY = function (d) { return d.cy; };
        element.cy(newCY);
        chai.assert.equal(element.cy(), newCY);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function (d) {
            chai.assert.equal(this.getAttribute("cy"), d.y);
          });
      });
    });

    describe("rx API", function () {
      var defaultRX;

      beforeEach(function () {
        defaultRX = 20;
        element.rx(defaultRX);
      });

      afterEach(function () {
        element.rx(defaultRX);
      });

      it("should get the property", function () {
        chai.assert.equal(element.rx(), defaultRX);
      });

      it("should set the property", function () {
        var newRX = 10;
        element.rx(newRX);
        chai.assert.equal(element.rx(), newRX);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("rx"), element.rx());
          });
      });
    });

    describe("ry API", function () {
      var defaultRY;

      beforeEach(function () {
        defaultRY = 20;
        element.ry(defaultRY);
      });

      afterEach(function () {
        element.ry(defaultRY);
      });

      it("should get the property", function () {
        chai.assert.equal(element.ry(), defaultRY);
      });

      it("should set the property", function () {
        var newRY = 10;
        element.ry(newRY);
        chai.assert.equal(element.ry(), newRY);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("ry"), element.ry());
          });
      });
    });

    describe("ellipseClass API", function () {
      var defaultClass;

      beforeEach(function () {
        defaultClass = "ellipses";
        element.ellipseClass(defaultClass);
      });

      afterEach(function () {
        element.ellipseClass(defaultClass);
      });

      it("should get the property", function () {
        chai.assert.equal(element.ellipseClass(), defaultClass);
      });

      it("should set the property", function () {
        var newClass = "ovals";
        element.ellipseClass(newClass);
        chai.assert.equal(element.ellipseClass(), newClass);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("class"), element.ellipseClass());
          });
      });
    });

    describe("fill API", function () {
      var defaultFill;

      beforeEach(function () {
        defaultFill = "#FF0000";
        element.fill(defaultFill);
      });

      afterEach(function () {
        element.fill(defaultFill);
      });

      it("should get the property", function () {
        chai.assert.equal(element.fill(), defaultFill);
      });

      it("should set the property", function () {
        var newFill = "#0000FF";
        element.fill(newFill);
        chai.assert.equal(element.fill(), newFill);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("fill"), element.fill());
          });
      });
    });

    describe("opacity API", function () {
      var defaultOpacity;

      beforeEach(function () {
        defaultOpacity = 1;
        element.opacity(defaultOpacity);
      });

      afterEach(function () {
        element.opacity(defaultOpacity);
      });

      it("should get the property", function () {
        chai.assert.equal(element.opacity(), defaultOpacity);
      });

      it("should set the property", function () {
        var newOpacity = 0.5;
        element.opacity(newOpacity);
        chai.assert.equal(element.opacity(), newOpacity);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.style.opacity, element.opacity());
          });
      });
    });

    describe("color API", function () {
      var defaultColor;

      beforeEach(function () {
        defaultColor = function () { return "#FF0000"; }; // must be a function
        element.color(defaultColor);
      });

      afterEach(function () {
        element.color(defaultColor);
      });

      it("should get the property", function () {
        chai.assert.equal(element.color(), defaultColor);
      });

      it("should set the property", function () {
        var newColor = function () { return "#0000FF"; };
        element.color(newColor);
        chai.assert.equal(element.color(), newColor);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw
        var color = element.color();

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("fill"), color());
            chai.assert.equal(this.getAttribute("stroke"), color());
          });
      });
    });

    describe("stroke API", function () {
      var defaultStroke;

      beforeEach(function () {
        defaultStroke = "#FF0000";
        element.stroke(defaultStroke);
      });

      afterEach(function () {
        element.stroke(defaultStroke);
      });

      it("should get the property", function () {
        chai.assert.equal(element.stroke(), defaultStroke);
      });

      it("should set the property", function () {
        var newStroke = "#0000FF";
        element.stroke(newStroke);
        chai.assert.equal(element.stroke(), newStroke);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("stroke"), element.stroke());
          });
      });
    });

    describe("strokeWidth API", function () {
      var defaultStrokeWidth;

      beforeEach(function () {
        defaultStrokeWidth = 2;
        element.strokeWidth(defaultStrokeWidth);
      });

      afterEach(function () {
        element.strokeWidth(defaultStrokeWidth);
      });

      it("should get the property", function () {
        chai.assert.equal(element.strokeWidth(), defaultStrokeWidth);
      });

      it("should set the property", function () {
        var newStrokeWidth = 5;
        element.strokeWidth(newStrokeWidth);
        chai.assert.equal(element.strokeWidth(), newStrokeWidth);
      });

      it("should set the proper value of the DOM attribute", function () {
        fixture.call(element); // Redraw

        fixture.selectAll("ellipse")
          .each(function () {
            chai.assert.equal(this.getAttribute("stroke-width"), element.strokeWidth());
          });
      });
    });
  });
});