(function(){
Meteor.startup(function() { $('body').attr({"role":"document"}); });

Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "container theme-showcase text-center",
    role: "main"
  }, HTML.Raw('\n	<div class="jumbotron">\n	  <h1>Project Lilo</h1>\n	</div>\n	'), Spacebars.include(view.lookupTemplate("controls")), "\n\n	", Spacebars.include(view.lookupTemplate("facts")), "\n");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("controls");
Template["controls"] = new Template("Template.controls", (function() {
  var view = this;
  return HTML.Raw('<div class="page-header">\n    <h1>Controls</h1>\n  </div>\n  <p>\n    <button type="button" id="f" class="btn btn-lg btn-primary">Forward</button>\n    <button type="button" id="b" class="btn btn-lg btn-success">Back</button>\n    <button type="button" id="l" class="btn btn-lg btn-info">Left</button>\n    <button type="button" id="r" class="btn btn-lg btn-warning">Right</button>\n    <button type="button" id="s" class="btn btn-lg btn-danger">Stop</button>\n   </p>');
}));

Template.__checkName("facts");
Template["facts"] = new Template("Template.facts", (function() {
  var view = this;
  return [ HTML.Raw('<div class="page-header">\n  <h1>History</h1>\n</div>\n'), HTML.P("\n  ", HTML.UL({
    "class": "list-group"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("facts"));
  }, function() {
    return [ "\n      ", HTML.LI({
      "class": "list-group-item"
    }, Blaze.View("lookup:text", function() {
      return Spacebars.mustache(view.lookup("text"));
    })), "\n    " ];
  }), "\n  "), "\n") ];
}));

})();
