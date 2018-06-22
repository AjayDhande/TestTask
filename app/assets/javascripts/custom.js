function photo_one(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img_prev1')
          .attr('src', e.target.result)
          .addClass('.display')
          .width(252);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  function photo_two(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img_prev2')
          .attr('src', e.target.result)
          .addClass('.display')
          .width(252);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  function photo_three(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img_prev3')
          .attr('src', e.target.result)
          .addClass('.display')
          .width(252);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  function photo_four(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img_prev4')
          .attr('src', e.target.result)
          .addClass('.display')
          .width(252);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  function photo_five(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img_prev5')
          .attr('src', e.target.result)
          .addClass('.display')
          .width(252);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
