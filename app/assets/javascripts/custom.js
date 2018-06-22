function photo_preview(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#img_prev_'+input.id.split("_")[3])
        .attr('src', e.target.result)
        .addClass('display')
        .width(252);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
