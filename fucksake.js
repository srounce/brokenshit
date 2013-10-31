if (Meteor.isClient) {
  Template.hello.crap = function () {
    return [
      true,
      false,
      false,
      true
    ];
  };
}
