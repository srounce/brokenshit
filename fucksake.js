if (Meteor.isClient) {
  Template.hello.crap = function () {
    return [
      true,
      false,
      false,
      true
    ];
  };

  Template.hello.helpers({
    checked: function (data) {
        if(data){
            return "checked";
        }
    }
  });
}
