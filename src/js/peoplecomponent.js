$(document).ready(function() {

    //Setting Page
    // $('.zpl_iwrprlft li').each(function(id) {
    //   $(this).attr('data-nav', id + 1);
    // });
    // $('.zpl_iwrprrgt>div').each(function(id) {
    //   $(this).attr('data-tab', id + 1);
    // });



    $('.zpl_iwrprlft>ul>li').on('click', function(e) {
        if (!$(this).hasClass('zpl_drpopen')) {
            $(".zpl_iwrprdrp").find('>ul').slideUp('slow');
            $(".zpl_iwrprdrp").removeClass('zpl_drpopen');
            $(this).closest('.zpl_iwrpr').find('.zpl_iwrprrgt>div').removeClass('zpl_subact');
        };
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprrgt>div').removeClass('zpl_act');
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprrgt>div[data-tab=' + $(this).attr('data-nav') + ']').addClass('zpl_act');
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprlft>ul>li').removeClass('zpl_act');
        $(this).addClass('zpl_act');
    });
    $(".zpl_iwrprdrp").click(function() {
        $(this).toggleClass('zpl_drpopen');
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprrgt>div[data-subtab=' + $(this).find(">ul li:first-child()").attr('data-subnav') + ']').addClass('zpl_subact');
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprlft>ul>li.zpl_iwrprdrp>ul>li').removeClass('zpl_act');
        $(this).find(">ul li:first-child()").addClass('zpl_act');
        if ($(this).hasClass('zpl_drpopen')) {
            $(this).find('>ul').slideDown('slow');
            $('.zpl_iwrpr').addClass('zpl_iwrprdrp-js');
            // $('.zpusImgPos').show();
        } else {
            $(this).find('>ul').slideUp('slow');
            $(this).removeClass('zpl_act')
            $('.zpl_iwrpr').removeClass('zpl_iwrprdrp-js');
        }
    });
    $('.zpl_iwrprdrp>ul>li').on('click', function(e) {
        e.stopPropagation();
    });
    $('.zpl_iwrprdrp>ul>li').on('click', function() {
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprrgt>div').removeClass('zpl_subact');
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprrgt>div[data-subtab=' + $(this).attr('data-subnav') + ']').addClass('zpl_subact');
        $(this).closest('.zpl_iwrpr').find('.zpl_iwrprlft>ul>li.zpl_iwrprdrp>ul>li').removeClass('zpl_act');
        $(this).addClass('zpl_act');
    });


    // $('.zpl_iwrprdrp').on('click', function(e) {
    //     $(this).toggleClass('zpl_drpopen');
    // });

    // Modal full popup
    $('.zpl_mmnulft li').on('click', function() {
        $(this).closest('.zpl_mmnu').find('.zpl_mmnurgt>div').removeClass('zpl_act');
        $(this).closest('.zpl_mmnu').find('.zpl_mmnurgt>div[tab-box=' + $(this).attr('tab-nav') + ']').addClass('zpl_act');
        $(this).closest('.zpl_mmnu').find('.zpl_mmnulft li').removeClass('zpl_act');
        $(this).addClass('zpl_act');
    });



    // Toggle Button
    ZComponents.toggleswitch('.togbutton-js', {
        on: true
    });

    // var tabs = [{
    //     // label: "Attendence",
    //     // icon: 'icon entertainment',
    //     panelId: 'entContent',
    //     items: [{
    //         label: "Reports"
    //     }, {
    //         label: "Holidays"
    //     }]
    // }];
    // ZComponents.tabbebdlistbox('.listbox', {
    //     tabs: tabs,
    //     dataMapping: {
    //         "value": "email",
    //         "text": "label",
    //         // "image": "image",
    //         // "informativeText": "name",
    //         // "groupLabel": "product"
    //     }
    // });
    // Toggle Button
    ZComponents.toggleswitch('.togbuttondis-js', {
        on: false
    });
    //Select
    // ZComponents.select('.select-js', {});
    ZComponents.select('.select-js', {
        "options": [{
            "customfield": "System Fields",
            "name": "Gender",
            "id": "EH"
        }, {
            "customfield": "Custom Fields",
            "name": "Field 1",
            "id": "YE"
        }, {
            "customfield": "System Fields",
            "name": "Role",
            "id": "ZM"
        }, {
            "customfield": "System Fields",
            "name": "Designation",
            "id": "ZM"
        }, {
            "customfield": "System Fields",
            "name": "Department",
            "id": "ZM"
        }],
        "search": {
            "criteria": "startswith",
            "by": "name"
        },
        "dropdownList": {
            "contentType": ""
        },
        "dataMapping": {
            "label": "name",
            "value": "id",
            "optgroupLabel": "customfield"
        }
    });
    // Select Image
    ZComponents.select('.selectImg-js', {
        //"data": selimgshow,
        "dataMapping": {
            "value": "id",
            "text": "name",
            "image": "image",
        },
        "contentType": "image-text",

    });

    ZComponents.menu(".zpl_drpdwn");
    $('.zpl_tbl th .CR-sort').on('click', function(ev) {
        var target = $(ev.target);
        ZComponents.menu("#" + target.data("menuId")).show({
            forElement: target
        });
    });

    ZComponents.button('#zpl_btnloading', {
        progressIndicator: {
            "type": "circular",
            "position": "left"
        }
    });




    ZComponents.tokenfield('.tokenfieldId-js', {
        // "data": dataSource,
        // "lazyLoading": false,
        // "allowDuplicateValues": true,
        // "dataMapping": {
        //     "value": "id",
        //     "text": "name",
        //     "id": "id",
        //     "iconClassName": "iconClass",
        //     "informativeText": "name",
        //     "titleText": "name"
        // },
        // "placeholder": "Select",
        // "tokens": {},
        // "dropdownList": {
        //     "contentType": "image-text-desc"
        // },
        // "search": {
        //     "by": "name"
        // }
        "data": dataSource,
        "lazyLoading": false,
        "allowDuplicateValues": true,
        "dataMapping": {
            "value": "id",
            "text": "name",
            "id": "id",
            "iconClassName": "iconClass",
            "informativeText": "name",
            "titleText": "name"
        },
        "placeholder": "Add your buddies",
        "tokens": {},
        "dropdownList": {
            "itemType": "checkbox"
        },
        "search": {
            "by": "name"
        },
        "acceptNewValues": true
    })

    // ZComponents.popover("#demoSubscribe");
    // document.getElementById("demoPopoverButton").addEventListener("click", function() {
    //     ZComponents.popover("#demoSubscribe").open();
    // });

    //Tooltip
    $(".tooltip-js").ztooltip({
        margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,

        },

    });

    //Popover
    $(".popover-js").zpopover({
        margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        },

    });


    // More,Dropdown
    ZComponents.menubutton(".drpmenu-js");

    // More,Dropdown
    ZComponents.splitbutton(".spltdwnmenu-js");

    //Data Picker
    ZComponents.datefield(".datepicker-js", {
        "placeholder": "dd/mm/yyyy",
    });

    // Date Range picker


    $(".search-cmn").focusout(function() {
        $(".search-cmn").removeClass("opn");
    });


    //Modal open
    $(document).on('click', '[data-popup-open]', function() {
        var id = $(this).attr('data-popup-open');
        //alert(id)
        //$('[data-modal-box=' + id + ']').addClass('zpl_mopen').children().addClass('zpl_mopen').show();
        $('[data-modal-box=' + id + ']').addClass('zpl_mopen').show();
        $('body').addClass('zpl_mdlbdy');
    });
    //Modal Close
    $('.zpl_mdl ._cls,.zpl_mfoter .zlabel--blue,.zpl_mfoter .zlabel--outline,.zpl_minr .zpl_mhder .clsArw').on('click', function(e) {
        $(this).closest('.zpl_mdl').removeClass('zpl_mopen');
        $(this).closest('.zpl_glscrmdl').removeClass('zpl_mopen');
        $('body').removeClass('zpl_mdlbdy');
    });
    $('.zpl_glscrhdr .IC-cls').on('click', function(e) {
        $(this).closest('.zpl_glscrmdl').removeClass('zpl_mopen').hide();
        $('body').removeClass('zpl_mdlbdy');
    });

    $(".zpl_mcnt").off("scroll").on("scroll", function() {
        if ($(this).scrollTop() != 0) {
            $(".zpl_mhder").addClass("scrlshdw");
        } else {
            $(".zpl_mhder").removeClass("scrlshdw");
        }
    });



    $('.zpl_rnav li i.PI_notify').click(function() {
        $(this).toggleClass('rtl');
        if ($(this).hasClass('rtl')) {
            $('html').attr({ dir: "rtl" });
        } else {
            $('html').attr({ dir: 'ltr' });
        }

    });

    $('.grpbtn i').click(function() {
        $(".grpbtn i").removeClass('zpl_act');
        $(this).toggleClass('zpl_act');
    });
    $('.grpbtn .IC-grid-v').click(function() {
        $('#cardview-js').removeClass('DN');
        $('#listview-js').addClass('DN');
    });
    $('.grpbtn .IC-drag-h').click(function() {
        $('#cardview-js').addClass('DN');
        $('#listview-js').removeClass('DN');
    });
});
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('.pl_dDwn').removeClass('opn');
        $(".search-cmn").removeClass("opn");
        $('.zpl_drpdwn').removeClass("zpl_shw");
        $('._mdlpop._right._full').removeClass("_popopen");
        $('._mdlpop._center').removeClass("_popopen");
    }

});

var infotog = function() {
    $(".pl_Ipnl").toggleClass("pl_DN");
}

var opnsearch = function(get) {
    $(get).closest(".zpl_btnmnu").find(".search-cmn").addClass("opn");
    $(".search-cmn input").focus();
}

var clssearch = function(get) {
    $(get).closest(".search-cmn").removeClass("opn");
}

var moreicon = function(e, obj, id) {
    // e.stopPropagation();

    // $('.drpmenu').removeAttr('style');
    // var clickable = $(obj);
    // var left = clickable.offset().left;
    // if (left >= 1472) {
    //   left = 1472;
    // }
    // var bottom = clickable.offset().top + clickable.outerHeight(true);
    // $('#' + id).css({
    //   "left": left,
    //   "top": bottom
    // });
    if ($('.zpl_drpdwn').hasClass("zpl_shw")) {
        $('.zpl_drpdwn').removeClass("zpl_shw");
    } else {
        $('#' + id).addClass('zpl_shw');
        $(obj).next(".zpl_drpdwn").toggleClass("zpl_shw");
    }
};

// $(document).on('click', '.zcheckbox__label,.zswitch__wrapper,.zradiobutton__label', function() {
//   var swtched = $(this).closest(".zcheckbox").find('input[type=checkbox]');
//   swtched.prop("checked", !swtched.prop("checked"));
//   $(".zpl_fbtn").toggle();
//   $('body').toggleClass('zpl_fbtnbdy');
// });

// $(document).on('click', '.zradiobutton__label', function() {
//   var swtched = $(this).closest(".zradiobutton").find('input[type=radio]');
//   $(this).closest(".zradiobutton").parent().find('input[type=radio]').removeAttr("checked");
//   swtched.prop("checked", !swtched.prop("checked"));
// });

// Popup
$(document).on('click', '.zbutton--action,.s_lst,.zlabel', function() {
    // $("._mdlpop").removeClass("_popopen");
    var pop = $(this).closest(".zbutton--split").prev().attr('id');
    $('.zpl_mdl[data-modal-box=' + pop + ']').addClass("zpl_mopen");
});

$(document).on('click', '.zlabel', function() {
    var pop = $(this).attr('id');
    $('.zpl_mdl[data-modal-box=' + pop + ']').addClass("zpl_mopen");
});

$(document).on('click', '.s_lst', function() {
    // $("._mdlpop").removeClass("_popopen");
    var pop = $(this).attr('id')
    $('.zpl_mdl[data-modal-box=' + pop + ']').addClass("zpl_mopen");
});

$(document).on('click', '.spltdwnmenu-js + .zbutton--split .zbutton', function() {
    var pop = $(this).parent(".zbutton--split").prev().attr('data-popup-open');
    $('.zpl_mdl[data-modal-box=' + pop + ']').addClass("zpl_mopen");
    $('body').addClass('zpl_mdlbdy');
});


$(document).on('click', '.zpl_lftnav li', function(pop) {
    var pop = $(this).attr('aria-label');
    $(".zpl_lftnav li").removeClass("zpl_act");
    $(this).addClass("zpl_act");
    $(this).closest(".zpl_tbvrt").find(".zpl_tbpne").removeClass("zpl_act")
    $('#' + pop).addClass("zpl_act");
});

var popover = function(get) {
    $("[rel=" + get + "]").toggleClass("DN");
}


var paoprclick = function(element) {
    $('#' + element).show();
    $('#zpl_admnopr-js').hide();
};
var paoprclickback = function(element) {
    $('#' + element).hide();
    $('#zpl_admnopr-js').show();
};

// var commonidshow = function(element,obj){

//     $('#' + element).show();
//     $('#' + element).removeClass('DN');
//     $(obj).parents('.zpl_crdcnt').find('#' + element).addClass('DN');



// };

var grpbtnshw = function(e, obj, id) {
    // e.stopPropagation();

    // $('.drpmenu').removeAttr('style');
    // var clickable = $(obj);
    // var left = clickable.offset().left;
    // if (left >= 1472) {
    //   left = 1472;
    // }
    // var bottom = clickable.offset().top + clickable.outerHeight(true);
    // $('#' + id).css({
    //   "left": left,
    //   "top": bottom
    // });

    if ($('.zpl_rgtcnt div').hasClass("DN")) {
        $('.zpl_rgtcnt div').removeClass("DN");
    } else {
        $('#' + id).addClass('zpl_act');
    }
};

var showhidefunction = function(element, obj) {
    $('#' + element).closest('.zpl_act').find('>div').addClass("DN");
    $('#' + element).removeClass('DN');
    $(obj).closest('.zpl_grpmnu').find('li').removeClass('zpl_act');
    $(obj).toggleClass("zpl_act");
}





// PA Admin Operation page


// $("#oprpamalsel-js").change(function(){
//     alert('1');
//     $(this).find("option:selected").each(function(){
//         var optionValue = $(this).attr("value");
//         if(optionValue){
//             $(".DN").not("#" + optionValue).hide();
//             $("#" + optionValue).show();
//         } else{
//             $(".DN").hide();
//         }
//     });
// }).change();

// PA Admin Operation page



// $("body").off("scroll").on("scroll", function() {
//   if ($(this).scrollTop() != 0) {
//     $("._head").addClass("a");
//   } else {
//     $("._head").removeClass("a");
//   }
// });

// multiselect data
var dataSource = [{
    "id": "91-207-6440",
    "name": "Martha Welch",
    "email": "mwelch0@diigo.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/45.jpg",
    "department": "Engineering"
}, {
    "id": "92-112-7072",
    "name": "Christina Hudson",
    "email": "chudson1@usnews.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/3.jpg",
    "department": "Support"
}, {
    "id": "33-095-1207",
    "name": "Ashley Adams",
    "email": "aadams2@hp.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/93.jpg",
    "department": "Product Management"
}, {
    "id": "35-520-8414",
    "name": "Eric Reyes",
    "email": "ereyes3@ebay.co.uk",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/men/62.jpg",
    "department": "Accounting"
}, {
    "id": "57-627-9271",
    "name": "Aaron Phillips",
    "email": "aphillips4@digg.com",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/men/6.jpg",
    "department": "Research and Development"
}, {
    "id": "45-902-2253",
    "name": "Louise Little",
    "email": "llittle5@mysql.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/men/85.jpg",
    "department": "Business Development"
}, {
    "id": "52-248-5284",
    "name": "Carlos King",
    "email": "cking6@tmall.com",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/women/15.jpg",
    "department": "Product Management"
}, {
    "id": "65-367-6970",
    "name": "Gary Berry",
    "email": "gberry7@foxnews.com",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/men/39.jpg",
    "department": "Product Management"
}, {
    "id": "76-988-5878",
    "name": "Carolyn Bell",
    "email": "cbell8@independent.co.uk",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/men/64.jpg",
    "department": "Support"
}, {
    "id": "09-360-9589",
    "name": "Brian Daniels",
    "email": "bdaniels9@bbb.org",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/women/47.jpg",
    "department": "Training"
}, {
    "id": "12-314-0524",
    "name": "Adam Wallace",
    "email": "awallacea@a8.net",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/men/28.jpg",
    "department": "Human Resources"
}, {
    "id": "68-128-0520",
    "name": "Marie Stewart",
    "email": "mstewartb@51.la",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/79.jpg",
    "department": "Research and Development"
}, {
    "id": "60-670-0924",
    "name": "Jack Ramos",
    "email": "jramosc@posterous.com",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/women/77.jpg",
    "department": "Legal"
}, {
    "id": "23-719-8588",
    "name": "Victor Butler",
    "email": "vbutlerd@microsoft.com",
    "gender": "Male",
    "imageURL": "https://randomuser.me/api/portraits/med/women/14.jpg",
    "department": "Business Development"
}, {
    "id": "64-353-4376",
    "name": "Anne Freeman",
    "email": "afreemane@yolasite.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/men/78.jpg",
    "department": "Support"
}, {
    "id": "27-084-1468",
    "name": "Kathleen Ellis",
    "email": "kellisf@army.mil",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/8.jpg",
    "department": "Services"
}, {
    "id": "22-427-3718",
    "name": "Doris Hunter",
    "email": "dhunterg@free.fr",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/19.jpg",
    "department": "Research and Development"
}, {
    "id": "52-190-0271",
    "name": "Robin Jackson",
    "email": "rjacksonh@delicious.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/16.jpg",
    "department": "Training"
}, {
    "id": "65-644-8205",
    "name": "Kathy Mcdonald",
    "email": "kmcdonaldi@lulu.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/men/51.jpg",
    "department": "Legal"
}, {
    "id": "04-453-4552",
    "name": "Margaret Miller",
    "email": "mmillerj@xrea.com",
    "gender": "Female",
    "imageURL": "https://randomuser.me/api/portraits/med/women/2.jpg",
    "department": "Human Resources"
}];


var togglepage = function(get) {
    $(".zpl_container").addClass("DN");
    $("[rel^=" + get + "]").removeClass("DN");
}


