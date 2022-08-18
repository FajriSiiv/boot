$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(".fa-solid.fa-trash-can").on("click", function (e) {
  e.preventDefault();
  var form = $(this).parents("form");
  swal({
    title: "Delete",
    icon: "error",
    confirmButtonText: "Delete",
  });
});

$(".submit-swal").on("click", function (e) {
  e.preventDefault();
  swal({
    title: "Berhasil!",
    icon: "success",
    confirmButtonText: "Ok",
  });
});
