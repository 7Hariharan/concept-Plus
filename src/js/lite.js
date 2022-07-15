$(function() {
    $('.search_box').click(function() {
      $('body').addClass('search_list');
    });
  
    $(document).click(function(e) {
      var container = $(".search_box, .search_result");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('body').removeClass('search_list');
      }
    });
  
  
    $('.page_wrap .back >a').click(function() {
      $('.page_wrap').removeClass('in');
      $('.landing_page').removeClass('hide');
    });
  
    $('#shwpage').click(function() {
      $('.landing_page').addClass('hide');
      $('.page_wrap').addClass('in');
    });
  
  
    $('#act_set').click(function() {
      $('.myacc_wrap').addClass('open');
    });
  
    $('.cls_set').click(function() {
      $('.myacc_wrap').removeClass('open');
    });
  
  
    $('input:checkbox').change(function() {
      if ($(this).is(":checked")) {
        $('.lt_nav').addClass("shw_mupdate");
      } else {
        $('.lt_nav').removeClass("shw_mupdate");
      }
    });
  
  
    $('#go_zia').click(function() {
      $('.zia_wrap').toggleClass('open');
      // $('body').removeClass('open');
    });
  
  
    $('#fullview').click(function() {
      $('.com_wrap').toggleClass('fullview');
      $(this).toggleClass('sel');
    });
  
  
  
    $('.opn_tab').click(function() {
      $(this).toggleClass('exp_tab');
      $('body').toggleClass('min_tab');
    });
  
  
  
    //Notification
  
    $('#act_noti').click(function() {
      $('.noti_wrap').addClass('open');
    });
  
    $('.cls_noti').click(function() {
      $('.noti_wrap').removeClass('open');
    });
  
    //Service
  
    $('#act_goto').click(function() {
      $('.goto_service').toggleClass('open');
    });
  
    $('.cls_noti').click(function() {
      $('.goto_service').removeClass('open');
    });
  
  
  
    $('#act_more1, #act_more2').click(function() {
      if ($(this).parent().parent().hasClass('open')) {
        $(this).parent().parent().removeClass('open');
      } else {
        $(this).parent().parent().addClass('open');
      }
    });
  
  
    // Quick Add
  
    $('#float_actions, #bubble_actions').click(function() {
      if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');
      } else {
        $(this).parent().addClass('open');
      }
    });
  
  
    $('#click_emp').click(function() {
      $('#input_service').attr('placeholder', 'Search by Employee Name, Department...');
    });
  
    $('#click_ser').click(function() {
      $('#input_service').attr('placeholder', 'Search Service..');
    });
  
  
  
    // Reports Tab
    $('.sstab .tab > a').on('click', function() {
      var target = $(this).attr('tabname');
      $("#" + target).addClass('open').siblings("div").removeClass('open');
    });
  
  
    //Notification
    $('.notify').on('click', function(e) {
      $(".gl_noti").fadeIn('fast').toggleClass("gl_open");
    });
  
  
    //Tooltip
    // $('.cus_title').tooltip({ container: "body" });
    // $('.cus_title_rht').tooltip({ container: "body", placement: "right" });
  
  
  
    // Alert
  
    //Global Search
  
    $('#gs_search').click(function() {
      // $('body').addClass('gs_open');
      $('.gs_contain').fadeIn('fast').addClass('gs_open');
    });
  
  
    //Common close
    $('.gs_cls').on('click', function(e) {
      $(".gs_contain").fadeOut('fast').removeClass('gs_open');
    });
  
    $('.gs_contain').keyup(function(e) {
      if (e.keyCode == 27) {
        // user has pressed esc
        $(".gs_contain").fadeOut('fast').removeClass('gs_open');
      }
    });
  
  
    $('#mdl_export').on('click', function(e) {
      $(".mdl_export").fadeIn('fast').addClass("mdl_open");
    });
  
  
  
    $('#mdl_delete').on('click', function(e) {
      $(".mdl_delete").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#mdl_success').on('click', function(e) {
      $(".mdl_success").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#mdl_info').on('click', function(e) {
      $(".mdl_info").fadeIn('fast').addClass("mdl_open");
    });
  
  
    // $('.mdl_cls').on('click', function(e) {
    //   $(this).parent().parent().parent().removeClass('mdl_open');
    //   // $("body").removeClass('mdl_open');
    //   $(".mdl_contain").fadeOut('fast');
    // });
  
  
  
    //Modal
  
  
    $('#mdl_flow').on('click', function(e) {
      $(".mdlflow").fadeIn('fast').addClass("mdl_open");
    });
  
  
  
    $('#dvham').on('click', function(e) {
      $(".mdl_ham").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#dvset').on('click', function(e) {
      $(".mdl_set").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#mdl_right').on('click', function(e) {
      $(".mdl_right").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#mdl_top').on('click', function(e) {
      $(".mdl_top").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#mdl_bottom').on('click', function(e) {
      $(".mdl_bottom").fadeIn('fast').addClass("mdl_open");
    });
  
  
    $('#mdl_center').on('click', function(e) {
      $(".mdl_center").fadeIn('fast').addClass("mdl_open");
    });
  
  
  
    $('#mdl_left').on('click', function(e) {
      $(".mdl_left").fadeIn('fast').addClass("mdl_open");
    });
  
  
  
  
    $('#mdl_menu').on('click', function(e) {
      $(".mdl_menu").fadeIn('fast').addClass("mdl_open");
    });
  
  
  
  
    // $('#modal_right').on('click', function(e) {
    //   // $(".mdl_pop").toggleClass('in');
    //   $(".mdl_contain").fadeIn('fast').addClass("mdl_open");
    //   // $(".mdl_contain").addClass('show');
    // });
  
  
    //Common close
    $('.mdl_cls').on('click', function(e) {
      $(this).parent().parent().parent().removeClass('mdl_open');
      // $("body").removeClass('mdl_open');
      // $(".mdl_contain").fadeOut().removeClass("mdl_open");
      $(".mdl_contain").fadeOut('fast');
    });
  
  
  
    // $('.mdl_contain').keyup(function(e) {
    //   if (e.keyCode == 27) {
    //     // user has pressed backspace
    //     // $(this).parent().parent().parent().removeClass('mdl_open');
    //     $(this).removeClass('mdl_open');
    //     $(this).fadeOut('fast');
    //   }
    // });
  
  
    // $('.mdl_addjob').on('click', function(e) {
    //   $("#addjob").toggleClass('in');
    //   $("body").toggleClass('mdl_open');
    // });
  
  
    $('.check_break >div').hover(function(e) {
      $('.check-out').toggleClass('open');
    });
  
  
    // $(document).click(function(e) {
    //   var container = $(".break_detail");
    //   if (!container.is(e.target) && container.has(e.target).length === 0) {
    //     $('.check-out').removeClass('.open');
    //   }
    // });
  
  
    $('.mdl_perset').on('click', function(e) {
      $("#dvpersonal_set").toggleClass('in');
      $("body").toggleClass('mdl_open');
    });
  
    $('.mdl_pinit').on('click', function(e) {
      $("#pinit_app").toggleClass('in');
      // $("body").toggleClass('mdl_open');
    });
  
  
  
  
    $('.mtab> a, .t_round>a, .tab_group >a, .search_example span, .tab > a, .fd_nav a, .primary_tab a, .ss_lfttab div, .ss_mtab a, .page_tab a, .t_tab >a, .h_tab >a, .l_tab > div, .srt_alp > a, .sort_tab >a, .d_layout > div a, .sort a, .persl_set .menu >a, .ui_nav ol li, .dv_export a').click(function() {
      $(this).addClass('sel').siblings().removeClass('sel');
      // $('.search_result').addClass('sel');
    });
  
  
  
    jQuery(document).ready(function() {
      var url, hour = new Date().getHours();
      if (hour > 8 && hour < 18) {
        jQuery('.day_info').addClass('morning');
      } else if (hour > 18 && hour < 21) {
        jQuery('.day_info').addClass('noon');
      } else if (hour > 21 || hour < 8) {
        jQuery('.day_info').addClass('night');
      }
    });
  
  
  
  
    $('.btn.load').click(function() {
      $(this).toggleClass('loading');
    });
  
  
    $('.cal_view .body > div span').click(function() {
      $(this).toggleClass('sel');
    });
  
  
  
    $('.sort > a').click(function() {
      $('.ss_crd').toggleClass('list_view');
    });
  
  
  
  
    $('.search_service > div > div').click(function() {
      $(this).toggleClass('sel');
    });
  
  
  
    $(".ddown").on("click", function(e) {
      $(".ddown").removeClass("open");
      $(this).toggleClass("open");
      e.stopPropagation()
    });
    $(document).on("click", function(e) {
      if ($(e.target).is(".ddown") === false) {
        $(".ddown").removeClass("open");
      }
    });
  
    // $('.drop_menu, .ddown').on('click', function(e) {
    //   e.stopPropagation();
    //   $(this).toggleClass('open');
    // });
  
  
    $("#dropdown li a").on("click", function() {
      $('.ddtext').text($(this).text());
      // $('.dropdown').removeClass('open');
    });
  
  
  
    $('.switch, .switch_default').click(function() {
      $(this).toggleClass('active');
    });
  
  
    $('.toggle').click(function() {
      $(this).toggleClass('active');
      $('body').toggleClass('m_dark');
    });
  
  
    $('.l_b').on('click', function(e) {
      $(this).parent().toggleClass('open');
    });
  
  
    $('.act_check').on('click', function(e) {
      $(this).parent().toggleClass('sel');
      $('nav').toggleClass('shw_mupdate');
    });
  
  
    // $('html').click(function() {
    //   $('.ddown').removeClass("open");
    // });
  
  
    $('.selectbox').on('click', function(e) {
      $(this).parent().toggleClass('open');
    });
  
  
    $('.act_exp').click(function() {
      $(this).toggleClass('exp_page');
      // $(this).attr('title ', 'Max');
      $("body").toggleClass('min_page');
    });
  
  
    $('.lt_toggle').click(function() {
      //get collapse content selector
      var collapse_content_selector = $(this).attr('href');
      $(this).parent().toggleClass('opn');
  
      //make the collapse content to be shown or hide
      var toggle_switch = $(this);
      $(collapse_content_selector).slideToggle(function() {
        if ($(this).css('display') == 'none') {
          //change the button label to be 'Show'
          // toggle_switch.html('Show Module');
  
        } else {
          //change the button label to be 'Hide'
          // toggle_switch.html('Module');
  
        }
      });
    });
  
  
  
  
  
  
    $(".new_searchapp").scroll(function() {
      if ($(this).scrollTop() >= 50) {
        $(this).addClass('fixsearch');
      } else {
        $(this).removeClass('fixsearch');
      }
    });
  
  
    $(".ss_out").scroll(function() {
      if ($(this).scrollTop() >= 10) {
        $(this).addClass('fixsearch');
      } else {
        $(this).removeClass('fixsearch');
      }
    });
  
  
    $(".module_set").scroll(function() {
      if ($(this).scrollTop() >= 50) {
        $('.ss_out').addClass('fixsearch');
      } else {
        $('.ss_out').removeClass('fixsearch');
      }
    });
  
  
    // $(window).scroll(function() {
    //   var sticky = $('.new_searchapp'),
    //     scroll = $('.new_searchapp').scrollTop();
  
    //   if (scroll >= 100) sticky.addClass('fixed');
    //   else sticky.removeClass('fixed');
    // });
  
    // $(document).keypress("/", function(e) {
    //   if (e.ctrlKey)
    //     alert("Ctrl+C was pressed!!");
    // });
  
  
    $('body').keyup(function(e) {
      if (e.keyCode == 27) {
        // user has pressed backspace
        $('body').removeClass('search_list');
      }
      if (e.keyCode == 32) {
        // user has pressed space
        $('body').toggleClass('search_list');
      }
    });
  
  
  
  
  
    $('.act_qadd').click(function() {
      $(this).parent().toggleClass('open');
      // $(this).toggleClass('sel');
    });
  
  
    $('.module_lst > div').click(function() {
      $('body').addClass('pin_tab');
      $(this).addClass('sel').siblings().removeClass('sel');
      $('body').keyup(function(e) {
        if (e.keyCode == 27) {
          // user has pressed space
          $('body').removeClass('pin_tab');
        }
      });
    });
  
  
  });
  
  $(function() {
    $('nav ul > li').hover(
      function() {
        var submenu = $(this).find('.submenu');
        if (submenu.hasClass('submenu')) {
          submenu.addClass('in');
        }
      },
      function() {
        var submenu = $(this).find('.submenu');
        if (submenu.hasClass('submenu')) {
          submenu.removeClass('in');
        }
      });
  });
  
  
  
  
  
  
  // V2
  
  $(function() {
  
    $('.search').click(function() {
      $('body').addClass('search_open');
    });
  
    $(document).click(function(e) {
      var container = $(".search_overlay");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        // $('body').removeClass('search_open');
      }
    });
  
  
  
    $('body').keyup(function(e) {
      if (e.keyCode == 27) {
        // user has pressed backspace
        $('body').removeClass('search_open');
      }
      if (e.keyCode == 32) {
        // user has pressed space
        $('body').toggleClass('search_open');
      }
    });
  
  
    $('.global_search').click(function() {
      $('body').toggleClass('gl_search_open');
    });
  
  
    //Full view
  
    $('.act_fview').click(function() {
      $('body').toggleClass('frm_fview');
      $(this).toggleClass('sel');
    });
  
  
  
    $('#Report_search').focus(function() {
      $('body').addClass('in_search_open');
      $('.rpt_search_result').fadeIn('fast').addClass('open');
    });
  
    $('#Report_search').blur(function() {
      $('body').removeClass('in_search_open');
      $('.rpt_search_result').fadeOut('fast').removeClass('open');
    });
  
  
  
    $('#tsearch').focus(function() {
      $('#t_band').addClass('search_focus');
    });
  
    $('#tsearch').blur(function() {
      $('#t_band').removeClass('search_focus');
    });
  
  
    //Table Search
  
    $('#tbl_search').focus(function() {
      $(this).parent().addClass('open');
    });
  
    $('#tbl_search').blur(function() {
      $(this).parent().removeClass('open');
    });
  
  
  
  
  
  
  
    $('.act_ftlr').on('click', function(e) {
      $(this).toggleClass('sel');
      $('.ss_out').toggleClass('shw_tfilter');
    });
  
  
  
  
    $('#dv_newjoinee_report').on('click', function(e) {
      // $(".dash_fullscr").toggleClass('show_full');
      $('.dash_fullscr[data-fullscrn="true"]').toggleClass('show_full');
  
    });
  
  
    // $(document).click(function(e) {
    //   var container = $(".search_result");
    //   if (!container.is(e.target) && container.has(e.target).length === 0) {
    //     // $('body').removeClass('search_open');
    //   }
    // });
  
  
    $('.switch_user_view').click(function() {
      $("body").toggleClass('user_view');
    });
  
  
    // $(document).ready(function() {
    //   $('body').on('change', '#select_box', function() {
    //     $('#show_only').val(this.value);
    //   });
    // });
  
  
    // $(".btn-toggle").on("click", function() {
    //   $('.dropdown-menu').toggleClass('open');
    // });
  
  
  
  
  
  });
  
  
  
  
  // //////////////////
  $(document).ready(function() {
    $(".lt_title").hover(function() {
  
      //title
      var value = $(this).attr('lt-title');
  
      //html
      if ($(this).attr('lt-html') === "false") {
        value = value.replace(/</g, "&lt;");
        value = value.replace(/>/g, "&gt;");
      }
  
      //trigger
      if ($(this).attr('lt-trigger') !== "focus") {
  
        var elm = '<div class="lt_tooltip bottom" id="tooltiptempid">' + value + '</div>'
          //container 
        var container = $(this).attr('lt-container');
        if (container == undefined || container === "body") {
          $('body').append(elm);
        } else {
          $(this).append(elm);
        }
        $("#tooltiptempid").addClass("DN");
  
        //placement
        var placement = $(this).attr('lt-placement');
        if (placement !== undefined && placement !== "bottom") {
          $('#tooltiptempid').removeClass('bottom');
          $('#tooltiptempid').addClass(placement);
        }
  
        //position
        if (container == undefined || container === "body") {
          var p_left, p_top;
          var pos = $(this).offset();
          var popup = $("#tooltiptempid");
          if (placement === "top") {
            p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
            p_top = pos.top - popup.outerHeight();
          } else if (placement === "left") {
            p_left = pos.left - popup.outerWidth();
            p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
          } else if (placement === "right") {
            p_left = pos.left + $(this).outerWidth();
            p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
          } else {
            p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
            p_top = pos.top + $(this).outerHeight();
          }
          $('#tooltiptempid').css({
            left: p_left + 'px', //No I18N
            top: p_top + 'px' //No I18N
          });
  
        }
  
        //theme
        if ($(this).attr('lt-theme') === "dark") {
          $('#tooltiptempid').addClass('dark');
        }
        $("#tooltiptempid").removeClass("DN");
      } else {
  
        var elm = '<div class="lt_tooltip bottom" id="focustempid">' + value + '</div>'
        $(this).focus(function() {
          if ($('#focustempid').length === 0) {
            var container = $(this).attr('lt-container');
            if (container == undefined || container === "body") {
              $('body').append(elm);
            } else {
              $(this).append(elm);
            }
            // $(this).fadeIn('fast').addClass("lt_tooltip_open");
            $("#focustempid").addClass("DN");
  
            //placement
            var placement = $(this).attr('lt-placement');
            if (placement !== undefined && placement !== "bottom") {
              $('#focustempid').removeClass('bottom');
              $('#focustempid').addClass(placement);
            }
  
            //position
            if (container == undefined || container === "body") {
              var p_left, p_top;
              var pos = $(this).offset();
              var popup = $("#focustempid");
              if (placement === "top") {
                p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
                p_top = pos.top - popup.outerHeight();
              } else if (placement === "left") {
                p_left = pos.left - popup.outerWidth();
                p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
              } else if (placement === "right") {
                p_left = pos.left + $(this).outerWidth();
                p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
              } else {
                p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
                p_top = pos.top + $(this).outerHeight();
              }
              $('#focustempid').css({
                left: p_left + 'px', //No I18N
                top: p_top + 'px' //No I18N
              });
  
            }
  
            //theme
            if ($(this).attr('lt-theme') === "dark") {
              $('#focustempid').addClass('dark');
            }
          }
          $("#focustempid").removeClass("DN");
          $(this).focusout(function() {
            $("#focustempid").remove();
          });
        });
      }
    }, function() {
      $('#tooltiptempid').remove();
    });
  
  });
  
  // //Dropdown 
  
  // $(document).ready(function() {
  //   var target = "";
  //   $('.lt_btn').focus(function() {
  //     target = $(this).attr('lt-target');
  //     if (target != undefined) {
  //       var p_left, p_top;
  //       var pos = $(this).offset();
  //       var popup = $(target);
  //       p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
  //       p_top = pos.top + $(this).outerHeight();
  //       $(target).css({
  //         left: p_left + 'px', //No I18N
  //         top: p_top + 'px' //No I18N
  //       });
  //       $(target).removeClass('dn')
  //     }
  //   });
  // });
  
  
  // $(function() {
  //   $('.lt_dropdown').on("click", function(e) {
  //     e.stopPropagation()
  //   });
  //   $(document).on("click", function(e) {
  //     if ($(e.target).is('.lt_dropdown') === false && $(e.target).is('.lt_btn') === false) {
  //       $('.lt_dropdown').addClass('dn');
  //       $('.lt_dropdown').css({
  //         left: '',
  //         top: ''
  //       });
  //     }
  //   });
  // });
  
  
  // $(document).ready(function() {
  //   $(".lt_title").hover(function() {
  
  //     //title
  //     var value = $(this).attr('lt-title');
  
  //     //html
  //     if ($(this).attr('lt-html') === "false") {
  //       value = value.replace(/</g, "&lt;");
  //       value = value.replace(/>/g, "&gt;");
  //     }
  
  //     //trigger
  //     if ($(this).attr('lt-trigger') !== "focus") {
  
  //       var elm = '<div class="lt_tooltip bottom" id="tooltiptempid">' + value + '</div>'
  //         //container 
  //       if ($(this).attr('lt-container') === "body") {
  //         $('body').append(elm);
  //       } else {
  //         $(this).append(elm);
  //       }
  //       $("#tooltiptempid").addClass("DN");
  
  //       //placement
  //       var placement = $(this).attr('lt-placement');
  //       if (placement !== "null" && placement !== "bottom") {
  //         $('#tooltiptempid').removeClass('bottom');
  //         $('#tooltiptempid').addClass(placement);
  //       }
  
  //       //position
  //       if ($(this).attr('lt-container') === "body") {
  //         var p_left, p_top;
  //         var pos = $(this).offset();
  //         var popup = $("#tooltiptempid");
  //         if (placement === "top") {
  //           p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
  //           p_top = pos.top - popup.outerHeight();
  //         } else if (placement === "left") {
  //           p_left = pos.left - popup.outerWidth();
  //           p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
  //         } else if (placement === "right") {
  //           p_left = pos.left + $(this).outerWidth();
  //           p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
  //         } else {
  //           p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
  //           p_top = pos.top + $(this).outerHeight();
  //         }
  //         $('#tooltiptempid').css({
  //           left: p_left + 'px', //No I18N
  //           top: p_top + 'px' //No I18N
  //         });
  
  //       }
  
  //       //theme
  //       if ($(this).attr('lt-theme') === "dark") {
  //         $('#tooltiptempid').addClass('dark');
  //       }
  //       $("#tooltiptempid").removeClass("DN");
  //     } else {
  
  //       var elm = '<div class="lt_tooltip bottom" id="focustempid">' + value + '</div>'
  //       $(this).focus(function() {
  //         if ($('#focustempid').length === 0) {
  //           if ($(this).attr('lt-container') === "body") {
  //             $('body').append(elm);
  //           } else {
  //             $(this).append(elm);
  //           }
  //           // $(this).fadeIn('fast').addClass("lt_tooltip_open");
  //           $("#focustempid").addClass("DN");
  
  //           //placement
  //           var placement = $(this).attr('lt-placement');
  //           if (placement !== "null" && placement !== "bottom") {
  //             $('#focustempid').removeClass('bottom');
  //             $('#focustempid').addClass(placement);
  //           }
  
  //           //position
  //           if ($(this).attr('lt-container') === "body") {
  //             var p_left, p_top;
  //             var pos = $(this).offset();
  //             var popup = $("#focustempid");
  //             if (placement === "top") {
  //               p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
  //               p_top = pos.top - popup.outerHeight();
  //             } else if (placement === "left") {
  //               p_left = pos.left - popup.outerWidth();
  //               p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
  //             } else if (placement === "right") {
  //               p_left = pos.left + $(this).outerWidth();
  //               p_top = pos.top + ($(this).outerHeight() / 2) - popup.outerHeight() / 2;
  //             } else {
  //               p_left = pos.left + ($(this).outerWidth() / 2) - popup.outerWidth() / 2;
  //               p_top = pos.top + $(this).outerHeight();
  //             }
  //             $('#focustempid').css({
  //               left: p_left + 'px', //No I18N
  //               top: p_top + 'px' //No I18N
  //             });
  
  //           }
  
  //           //theme
  //           if ($(this).attr('lt-theme') === "dark") {
  //             $('#focustempid').addClass('dark');
  //           }
  //         }
  //         $("#focustempid").removeClass("DN");
  //         $(this).focusout(function() {
  //           $("#focustempid").remove();
  //         });
  //       });
  //     }
  //   }, function() {
  //     $('#tooltiptempid').remove();
  //   });
  
  // });