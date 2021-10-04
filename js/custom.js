$(document).ready(function(){
    $('.sidenav').sidenav();
    $('select').formSelect();
    
    $('.tooltipped').tooltip();
    $(".dropdown-trigger").dropdown();
    $(".dropdown-trigger.navBar").dropdown({
        alignment: 'right',
        constrainWidth: false,
        coverTrigger: false,
        container: 'body'
    });
    $(".dropdown-trigger.mainList").dropdown({
      alignment: 'right',
      constrainWidth: false,
      coverTrigger: true,
      container: 'body'
  });
    $('.modal').modal({
        dismissible: false
    });
    $('.chips-autocomplete').chips({
      placeholder: 'اضافة الاسم',
      secondaryPlaceholder: '+ اسم',
      autocompleteOptions: {
        data: {
          'الاسم الاول': null,
          'الاسم الثاني': null,
          'الاسم الثالث': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
    $('.collapsible').collapsible();
    $('.confirm').click(function() {
        swal({
            title: "هل أنت متأكد ؟",
            text: "سيتم الموافقة على الطلب !!",
            icon: "warning",
            buttons: ["لا", "نعم"],
            dangerMode: false,
            closeOnClickOutside: false
          })
          .then((willConfirm) => {
            if (willConfirm) {
              swal("تم الموافقة على الطلب بنجاح.", {
                icon: "success",
              });
              $(this).closest("tr").remove();
            } else {
              swal("لم يتم الموافقة على الطلب");
            }
          });
    });
    $('.cancelOrder').click(function() {
      swal({
          title: "هل أنت متأكد ؟",
          text: "سيتم الغاء الطلب !!",
          icon: "warning",
          buttons: ["لا", "نعم"],
          dangerMode: false,
          closeOnClickOutside: false
        })
        .then((willConfirm) => {
          if (willConfirm) {
            swal("تم الغاء الطلب بنجاح.", {
              icon: "success",
            });
            $(this).closest("tr").remove();
          } else {
            swal("لم يتم الغاء الطلب");
          }
        });
  });
    $('.success').click(function() {
      swal({
        title: "جيد !",
        text: "تم الحفظ بنجاح",
        icon: "success",
      });
      });
    $('a.reply').click(function() {
        swal("أكتب ملاحظتك هنا :", {
            content: "input",
          })
          .then((value) => {
            swal(`ملاحظتك هي : ${value}`);
          });
        });
    $('.datepicker').datepicker({
        container: "body",
        autoClose: true
    });
    $('input.autocomplete').autocomplete({
        data: {
          "الاسم الاول": null,
          " الاسم الثاني": null,
          "الاسم الثالث": null
        },
      });
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('#MandatoryData').modal('open');
    $(function() {
      var images = [
        'images/loginBg1.png', 
        'images/loginBg2.png', 
        'images/loginBg3.png', 
        'images/loginBg4.png',
        'images/loginBg5.png', 
        'images/loginBg6.png', 
        'images/loginBg7.png', 
        'images/loginBg8.png',
        'images/loginBg9.png', 
        'images/loginBg10.png'
      ];
  
      $('.loginBox').append('<style>.loginBox {background: url(' + images[Math.floor(Math.random() * images.length)] + ') }');
    });
    
    $('#employeesOrdersTable').DataTable({
        "info": false,
        "searching": false,
        "dom": '<<t>lfip>',
        oLanguage: {
            sLengthMenu: "_MENU_",
         },
         "aaSorting": [],
         columnDefs: [ {
          orderable: false,
          className: 'select-checkbox',
          targets:   0
      } ],
      select: {
          style:    'multi',
          selector: 'td:first-child'
      },
      order: [[ 1, 'asc' ]]
         
    });
    $('#ordersTable').DataTable({
      "info": false,
      "searching": false,
      "pageLength": 5,
      lengthMenu: [5, 10, 20, 100],
      "dom": '<<t>lfip>',
      oLanguage: {
          sLengthMenu: "_MENU_",
       },
       "aaSorting": [],
  });
  $('#ordersTableAll').DataTable({
    "info": false,
    "searching": false,
    "dom": '<<t>lfip>',
    oLanguage: {
        sLengthMenu: "_MENU_",
     },
     "aaSorting": [],
     
});
  $('#ordersTable2').DataTable({
    "info": false,
    "searching": false,
    "pageLength": 5,
    lengthMenu: [5, 10, 20, 100],
    select: 'single',
    "dom": '<<t>lfip>',
    oLanguage: {
        sLengthMenu: "_MENU_",
     },
     "aaSorting": [],
     
});
    
    $('.dataTables_length select').formSelect();
    $('#collapseMenu').click(function() {
        $('.sidebar-fixed').toggleClass('collapse');
        $('nav, main').toggleClass('expand');
    });
    $('#advanced-searchBtn').click(function() {
      $('#advanced-searchDiv').slideToggle();
      $('#simple-search').toggle()
  });
  $('#close-advanced-search').click(function() {
    $('#advanced-searchDiv').slideToggle();
    $('#simple-search').toggle()
});


if (window.File && window.FileList && window.FileReader) {
  $("#files").on("change", function() {
    for (var i = 0; i < this.files.length; i++) {
      var f = this.files[i];
      var fileReader = new FileReader();
      fileReader.onload = (function(e) {
        $("<span class=\"pip\">" +
          "<img class=\"imageThumb\" src=\"" + e.target.result + "\" onerror=\"src='images/pdf-icon.png';\" />" +
          "<br/><span class=\"fileName\">" + f.name + "</span>" +
          "<br/><span class=\"remove\">حذف</span>" +
          "</span>").appendTo("#file-field");
        $(".remove").click(function(){
          $(this).parent(".pip").remove();
        });
       
      });
      fileReader.readAsDataURL(f);
    }
  });
} else {
  alert("Your browser doesn't support to File API")
}

$(".reqNextBtn").click(function() {
  $(".divOne").addClass("zoomOut").css({height: "0"});
  $(".divTwo").removeClass("hide")
})
$(".reqBackBtn").click(function() {
  $(".divTwo").addClass("zoomOut, hide").css({height: "0"});
  $(".divOne").removeClass("zoomOut").css({height: "auto"}).addClass("zoomIn")
})

  

    


    

  });

  

