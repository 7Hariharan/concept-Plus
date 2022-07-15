var showPreview = function(e, obj, Element, id) {
    e.stopPropagation();
    $('.pl_Slcrd').addClass('pl_DN');
    $('.pl_wrp').addClass(Element);
    $('#' + id).removeClass('pl_DN');
};
// var tab = 0;

localStorage.setItem("tabcnt", tab);
var tabsget = localStorage.getItem("tabcnt");
// alert(tabsget);

var closepreview = function() {
    $(".pl_wrp").removeClass("pl_Pshw");
}

var secnav = function(element, obj) {
    $('.pl_mWrp').addClass('pl_DN');
    $('#' + element).removeClass('pl_DN');
    $('.pl_smCnt li').removeClass('active');
    $(obj).addClass('active');
}

$(document).ready(function() {
    // $("#experimental #sndMnuDflt").hide();
    $("#experimental .pl_rnav .PI_setting").click(function() {
        // $(".pl_smCnt li").eq("0").toggleClass("active");
        // $(".pl_smCnt li").eq("1").toggleClass("active");
        $(".pl_mWrp").toggleClass("pl_Ihid");
        $(".nop").toggleClass("pl_DN");
        $(".tstcls").toggleClass("active");
        // $("#pmsmydata").toggleClass("pl_DN");
        // $("#pmsteam").removeClass("pl_DN");
        // $('.pl_smCnt li').removeClass('active');
        // $(".jActv").addClass("active")
    });
    $(".pl_dDwn li").click(function() {
        $(this).toggleClass("active");
    });

    // Dropdown
    $('.pl_icn .IC-eye1').click(function() {
        $('.pl_dDwn').toggleClass('pl_VH');
    });

    //$('.zpl_tabgrp>div a').toggleClass("zpl_sel");

    $(".zpl_tabgrp>div a").click(function() {
        $(this).addClass('zpl_sel').siblings().removeClass('zpl_sel');
    });

    // alert(tab)

});

$(document).ready(function() {
    // Aplly Leave

    $("#form1").click(function() {
        $('.pl_apllev form').removeClass('pl_row');
        $('.pl_apllev form .pl_fgroup').removeClass('pl_sm-6');
        $('.pl_apllev form').removeClass('pl_ftxtrgt');
        $('.pl_apllev form').addClass('pl_ftwocol');
        $('.pl_apllev form .pl_fgroup').addClass('pl_row');
        $('.pl_apllev form .pl_flabel').addClass('pl_sm-4');
        $('.pl_apllev form .pl_ffield').addClass('pl_sm-8');
    });
    $("#form2").click(function() {
        $('.pl_apllev form').removeClass('pl_row');
        $('.pl_apllev form .pl_fgroup').removeClass('pl_sm-6');
        $('.pl_apllev form').addClass('pl_ftwocol pl_ftxtrgt');
        $('.pl_apllev form .pl_fgroup').addClass('pl_row');
        $('.pl_apllev form .pl_flabel').addClass('pl_sm-4');
        $('.pl_apllev form .pl_ffield').addClass('pl_sm-8');
    });
    $("#form3").click(function() {
        $('.pl_apllev form').removeClass('pl_ftwocol pl_ftxtrgt');
        $('.pl_apllev form').addClass('pl_row');
        $('.pl_apllev form .pl_fgroup').removeClass('pl_row');
        $('.pl_apllev form .pl_fgroup').addClass('pl_sm-6');
        $('.pl_apllev form .pl_flabel').removeClass('pl_sm-4');
        $('.pl_apllev form .pl_ffield').removeClass('pl_sm-8');
    });
    $("#form4").click(function() {
        $('.pl_apllev form').removeClass('pl_ftwocol pl_ftxtrgt pl_row');
        $('.pl_apllev form .pl_fgroup').removeClass('pl_row pl_sm-6');
        $('.pl_apllev form .pl_flabel').removeClass('pl_sm-4');
        $('.pl_apllev form .pl_ffield').removeClass('pl_sm-8');

    });
    // Dropdown
    $('.pl_icn .IC-eye1').click(function() {
        $('.pl_dDwn').toggleClass('pl_VH');
    });

    // Org
    $('#orgid .pl_mWrp').addClass('pl_Ihid');

    // Org
    $('#homeid .pl_mWrp').addClass('pl_Ihid');

    // Search focus out
    $(".search-cmn").focusout(function() {
        $(".search-cmn").removeClass("opn");
    });

    $(".zpl_fltclps >div >font").click(function() {
        $(this).closest(".zpl_fltclps").toggleClass("fltopn");
    });

    // Filter
    $(".zpl_btnmnu>div:first-child .IC-filter-line,.zpl_btnmnu>div.zpl_lft .IC-filter-line").click(function() {
        $(this).closest("div[data-tab],.zpl_act").removeClass("zpl_fltr_flt");
        $(this).closest("div[data-tab],.zpl_act").toggleClass("zpl_fltr_lft");
    });
    $(".zpl_btnmnu>div.zpl_rgt .IC-filter-line").click(function() {
        $(this).closest("div[data-tab],.zpl_act").removeClass("zpl_fltr_lft");
        $(this).closest("div[data-tab],.zpl_act").toggleClass("zpl_fltr_flt");
    });
    $(".zpl_fltr .IC-cls").click(function() {
        $(this).closest("div[data-tab],.zpl_act").removeClass("zpl_fltr_lft");
        $(this).closest("div[data-tab],.zpl_act").removeClass("zpl_fltr_flt");
    });
    $(".zpl_iwrprlft li").click(function() {
        $(".zpl_iwrprrgt >div[data-tab],.zpl_act").removeClass("zpl_fltr_lft");
        $(".zpl_iwrprrgt >div[data-tab],.zpl_act").removeClass("zpl_fltr_flt");
    });
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('.pl_dDwn').removeClass('opn');
        $(".search-cmn").removeClass("opn");
        $(".zpl_Lbx").addClass("DNI");
        $('.zpl_mdl').removeClass('zpl_mopen');
        $("body").removeClass("zpl_mdlbdy")
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


var opnaction = function(get) {
    $(get).parents('.zpl_rgtcnt').prev(".zpl_btnmnu").find(".actn_ovrly").addClass("opn");
}

var clsaction = function(get) {
    $(get).closest(".actn_ovrly").removeClass("opn");
}

var showadmin = function(element, backid) {
    $('.zpl_outer').addClass("DN");
    $('#' + element).removeClass('DN');
    if (backid != undefined) {
        $('#' + element).closest('.zpl_outer').find('a.clsArw').attr('onclick', "showadmin('" + backid + "')");
    }
}

var showtabs = function(element, obj) {
    $('#' + element).closest('.zpl_outer').find('.zpl_container').addClass("DN");
    $('#' + element).removeClass('DN');
    $('#' + element).closest('.zpl_outer').find('.zpl_topmnu>.tab-pane li').removeClass('zpl_act');
    $(obj).parent('li').addClass('zpl_act');
}

var manager = function(get) {
    $("body").toggleClass("mang");
}

var admin = function(get) {
    $("body").toggleClass("admn");
}

var tab = 0
var tabs = function(get) {
    $("body").toggleClass("custm");
}

var showsubtabs = function(element, obj) {
    $('#' + element).closest(".zpl_rgtcnt").find(">div").addClass("DN");
    $('#' + element).removeClass('DN');
    $('#' + element).closest(".zpl_rgtcnt").find('.tab-pane li').removeClass('zpl_act');
    $(obj).parent('li').addClass('zpl_act');
}

var showtabswitch = function(element, obj) {
    $('#' + element).closest('.zpl_tabcnt').find('>div').addClass("DN");
    $('#' + element).removeClass('DN');
    $(obj).closest('.tab-pane').find('li').removeClass('zpl_act');
    $(obj).parent('li').addClass('zpl_act');
}

var directlink = function(id, backid) {
    $('.zpl_outer').addClass('DN');
    $('#' + id).closest('.zpl_outer').removeClass('DN').find('.zpl_container').addClass('DN');
    $('#' + id).removeClass('DN');
    $('#' + id).closest('.zpl_outer').find("[listid]").removeClass('zpl_act');
    $('#' + id).closest('.zpl_outer').find("[listid=" + id + "]").addClass('zpl_act');
    // if (backid != undefined) {
    //     $('#' + id).closest('.zpl_outer').find('a.clsArw').attr('onclick', "showadmin('" + backid + "')");
    // }
    if (backid != undefined && backid != "") {
        $('#' + id).closest('.zpl_outer').find('a.clsArw').attr('onclick', "setswitch('" + backid + "')");
    }
}

$(document).ready(function() {
    // $("body").removeClass("zpl_lmin")
    $('.zpl_fpercnt').hide();
    $('.zpl_perchkdv').click(function() {
        $(this).next('.zpl_fpercnt').slideToggle();
        $(this).toggleClass('open');
    });
    // Toggle left menu size
    $('.zpl_mnicn').click(function() {
        $(document.body).toggleClass('zpl_lmin');
    });
    // Change theme
    $('.PI_thememod').click(function() {
        // $('body').removeClass('omu');
        $('body').toggleClass('omu fldrk');
    });
});

$(document).ready(function() {
    $('.intgrtion_con .zpl_fpercnt').show();
    $('.zpl_fpercntlf .zpl_perchkdv').click(function() {
        $(this).next('.zpl_intSld').slideToggle();
        $(this).toggleClass('open');
    });
    var arr = window.location.pathname.split('/');
    var moduleName = arr[arr.length - 2];
    // var moduleName = window.location.pathname.split('/')[1]
    $('[modname]').removeClass('zpl_act');
    $('[modname=' + moduleName + ']').addClass('zpl_act');
    if (window.location.hash != "") {
        var hash = window.location.hash.split("#");
        var values = (hash[1].split("-"));
        var id = values[0];
        var backid = values[1];
        directlink(id, backid);
    }
});

$(document).on('click', '#zp_maintabs li', function() {
    $("#zp_maintabs li").removeClass("active");
    $(this).addClass("active");
});

var moduswtch = function(moduleName, get) {
    // var _url = '/' + moduleName;
    // if (window.location.pathname.indexOf("/people5/src/") != -1) {
    //     _url = window.location.protocol + '//' + window.location.hostname + "/people5/src/" + moduleName + "/";
    // }
    // window.location = _url;
    $(".zpl_outer").addClass("DN");
    $("#" + moduleName).removeClass("DN");
    $(".zpl_lmnulst").find(">div").removeClass("zpl_act");
    $(get).addClass("zpl_act");
}

// var setswitch = function(moduleName) {
//     var _url = '/' + moduleName + '/';
//     if (window.location.pathname.indexOf("/people5/src/") != -1) {
//         _url = window.location.protocol + '//' + window.location.hostname + "/people5/src/" + moduleName + "/";
//     }
//     window.location = _url;
// }

var setswitch = function(moduleName, id, backid) {
    var _url = '/' + moduleName + '/';
    if (window.location.pathname.indexOf("/people5/src/") != -1) {
        _url = window.location.protocol + '//' + window.location.hostname + "/people5/src/" + moduleName + "/";
    }
    if (id != undefined) {
        // directlink(id, backid)
        _url = _url + "#" + id + "-" + backid;
    }
    window.location = _url;
}



$(document).on('click', '.zpl_atocnt', function() {
    $(this).toggleClass("svd");
    var x = $(this).find("span");
    if (x.text() === "Saving...") {
        x.text("Saved");
    } else {
        x.text("Saving...");
    }
});

// $(document).keyup(function(e) {
// });

$(document).off('keydown').on('keydown', function(e) {
    if (e.ctrlKey && e.keyCode == '77') {
        $('body').toggleClass('zpl_lmin');
    }
    if (e.ctrlKey && e.keyCode == '72') {
        $('body').toggleClass('omu');
    }
    if (e.ctrlKey && e.keyCode == '78') {
        $('body').removeClass('omu');
        $('body').toggleClass('omu fldrk');
    }
});

var filechange = function(get) {
    $(get).parent().find("font").removeClass("sel");
    $(get).addClass("sel");
    $("[rel=" + get + "]").toggleClass("DNI");
}

var lightbox = function(get) {
    $("[rel=" + get + "]").removeClass("DNI");
}

$(document).on('click', '.zpl_Lbx_cls', function() {
    $(".zpl_Lbx").addClass("DNI");
});

$(document).on('click', '#zignClsT', function(e) {
    $('.search-cmn').toggleClass('opn');
    $('.zsignCont').toggleClass('DN');
});

$(document).on('click', '.CR-fullview', function(e) {
    $('.zsign_btm').toggleClass('btm_mview');
    $('.CR-fullview').toggleClass('CR-miniview');
});