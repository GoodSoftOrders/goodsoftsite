$(document).ready(function() {
    $('input, textarea').placeholder();
    /* PIE */
    if (window.PIE) {
        $('nav').each(function() {
            PIE.attach(this);
        });
    }
    if ($('.ti-y1 span').text().length > 18)
        $('.ti-y1 span').css('font-size', '14px');
    /*
    var ff;
    $('input[type=text]').focus(function() {
        if($(this).attr('data-place')==$(this).val()) {
            $(this).val('');
        }
    });
    $('input[type=text]').blur(function() {
        if($(this).val()=='') {
            $(this).val($(this).attr('data-place'));
        }
    });
    $('textarea').focus(function() {
        if($(this).attr('data-place')==$(this).val()) {
            $(this).val('');
        }
    });
    $('textarea').blur(function() {
        ff=$(this).attr('data-place');
        if($(this).val().length==0) {
            $(this).val(ff);
        }
    });
  */
    $('#select-group').change(function() {
        if ($(this).val() == '0') {
            $('#select-group').remove();
            $('#input-group').show().focus();
        }
    });
    $('#depositSum, #withdrawSum').keydown(function(e) {
        if ($.inArray(e.keyCode, [8, 9, 27, 13]) !== -1 || //, 46, 110, 190
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    function ress() {
        var ef;
        $('.bf1').each(function() {
            $(this).show();
            ef = $(this).width() / 2;
            $(this).css({
                'margin-left': -ef
            });
            ef = $(this).height() / 2;
            $(this).css({
                'margin-top': -ef
            });
        });
        $('.b1:not(.b11)').height($(window).height());
        $('.b1 .dc1').height($(window).height() - 132).width($('.ct1').width());
        if ($(window).width() > 960) {
            $('.b1 .bf1').addClass('active');
        } else {
            $('.b1 .bf1').removeClass('active');
        }
        $('.modal-tb').width($(window).width()).height($(window).height());
        $('#page').css({
            'min-height': $(window).height()
        });
        if ($(window).width() < 791) {
            $('#page').css({
                'min-height': '0px'
            });
        }
    }
    ress();
    $(window).load(function() {
        $('input[type=text]').each(function() {
            $(this).attr('data-place', $(this).val());
        });
        $('textarea').each(function() {
            $(this).attr('data-place', $(this).val());
        });
        ress();
    });
    $(window).resize(function() {
        ress();
    });
    if ($('.rr-btn-sel1 select').length > 0) {
        $('.rr-btn-sel1 select').styler();
    }
    if ($('.rr-btn-sel1 input[type=file]').length > 0) {
        $('.rr-btn-sel1 input[type=file]').styler();
    }
    if ($('.ip2 select').length > 0) {
        $('.ip2 select').styler();
    }
    $('.curr1').click(function(e) {
        e.preventDefault();
        if ($(this).attr('data-state') == 0) {
            $(this).attr('data-state', '1').parent().addClass('active');
        } else {
            $(this).attr('data-state', '0').parent().removeClass('active');
        }
    });
    $('.curr-t1.link').click(function(e) {
        e.preventDefault();
        if ($(this).attr('data-state') == 0) {
            $(this).attr('data-state', '1').parent().parent().addClass('active');
        } else {
            $(this).attr('data-state', '0').parent().parent().removeClass('active');
        }
    });
    $('.tit-qq1').click(function(e) {
        e.preventDefault();
        if ($(this).attr('data-state') == 0) {
            $(this).attr('data-state', '1').addClass('active').next().slideDown(300);
            $('body,html').animate({
                scrollTop: $(this).offset().top - 20
            }, 300)
        } else {
            $(this).attr('data-state', '0').removeClass('active').next().slideUp(300);
        }
    });
    $('.kb2').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: '0px'
        }, 500)
        if (!$('.hide-tit-mb1').hasClass('active'))
            $('.hide-tit-mb1').click();
        $('.curr1').attr('data-state', '1').parent().addClass('active');
    });
    $(document).click(function(e) {
        if ($(e.target).closest(".kb1,.kb2,.sub1").length) return;
        $('.curr1').attr('data-state', '0').parent().removeClass('active');
        e.stopPropagation();
    });
    $(document).click(function(e) {
        if ($(e.target).closest(".chose-bl1").length) return;
        $('.curr-t1.link').attr('data-state', '0').parent().parent().removeClass('active');
        e.stopPropagation();
    });
    var flag1 = 0;

    function next1() {
        if (flag1 == 0) {
            flag1 = 1;
            if ($('.sld1 .active').index() != $('.sld1 .ev').length - 3) {
                $('.sld1 .p1,.sld1 .p2').fadeOut(200);
                setTimeout(function() {
                    $('.sld1 .active').removeClass('active').addClass('none').next().addClass('active').removeClass('none');
                    $('.line1').css({
                        'left': -($('.sld1 .active').index() - 1) * 314
                    });
                    setTimeout(function() {
                        $('.sld1 .p1,.sld1 .p2').fadeIn(200);
                    }, 500);
                }, 200);
            } else {
                $('.sld1 .p1,.sld1 .p2').fadeOut(200);
                setTimeout(function() {
                    $('.sld1 .active').removeClass('active').addClass('none').next().addClass('active').removeClass('none');
                    $('.line1').css({
                        'left': -($('.sld1 .active').index() - 1) * 314
                    });
                    $('.sld1 .p2').hide();
                    setTimeout(function() {
                        $('.sld1 .p1').fadeIn(200);
                    }, 500);
                }, 200);
            }
            setTimeout(function() {
                flag1 = 0;
            }, 900);
        }
    }

    function prev1() {
        if (flag1 == 0) {
            flag1 = 1;
            if ($('.sld1 .active').index() - 2 != 0) {
                $('.sld1 .p1,.sld1 .p2').fadeOut(200);
                setTimeout(function() {
                    $('.sld1 .active').removeClass('active').addClass('none').prev().addClass('active').removeClass('none');
                    $('.line1').css({
                        'left': -($('.sld1 .active').index() - 1) * 314
                    });
                    setTimeout(function() {
                        $('.sld1 .p1,.sld1 .p2').fadeIn(200);
                    }, 500);
                }, 200);
            } else {
                $('.sld1 .p1,.sld1 .p2').fadeOut(200);
                setTimeout(function() {
                    $('.sld1 .active').removeClass('active').addClass('none').prev().addClass('active').removeClass('none');
                    $('.line1').css({
                        'left': -($('.sld1 .active').index() - 1) * 314
                    });
                    $('.sld1 .p1').hide();
                    setTimeout(function() {
                        $('.sld1 .p2').fadeIn(200);
                    }, 500);
                }, 200);
                flag3 = 0;
            }
            setTimeout(function() {
                flag1 = 0;
            }, 900);
        }
    }
    $('.sld1 .p2').click(function() {
        flag2 = 1;
        next1();
    });
    flag2 = 0;
    flag3 = 0;
    setInterval(function() {
        if (flag2 == 0) {
            if ($('.sld1 .active').index() != $('.sld1 .ev').length - 2 && flag3 == 0) {
                next1()
            } else {
                flag3 = 1;
                prev1();
            }
        }
    }, 6000);
    $('.sld1 .p1').click(function() {
        flag2 = 1;
        prev1();
    });
    $('.hide-tit-mb1').toggle(function() {
        $(this).addClass('active').next().addClass('active');
    }, function() {
        $(this).removeClass('active').next().removeClass('active');
    });
    /*
    $('.bl1 .ov1 .item1').toggle(function() {
        $(this).addClass('active');
    },function() {
        $(this).removeClass('active');
    });
    */
    $('.modal-reg').click(function(e) {
        e.preventDefault();
        $('.curr1').attr('data-state', '0').parent().removeClass('active');
        $('.m1').fadeIn(400).find('input[type=text]').focus();
        //if (!$('.g-recaptcha-response').length)
        //    $('body').append('<script src="https://www.google.com/recaptcha/api.js?onload=loadRecaptcha&render=explicit" async defer></script>');
    });
    $('.bg-modal,.close1').click(function() {
        $('.modal').fadeOut(400);
        $('#header-reg-error').hide();
    });
    $('.sub1').click(function(e) {
        if ($(window).width() < 801) {
            e.preventDefault();
            if ($(this).attr('data-state') == 0) {
                $(this).attr('data-state', '1').next().addClass('active');
            } else {
                $(this).attr('data-state', '0').next().removeClass('active');
            }
        }
    });
    /*
    $('.fast-ord1').click(function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop:$('.ord-bl1').offset().top}, 500);
    });
    */
    $('.hide-term1 input[type=submit]').click(function(e) {
        e.preventDefault();
        var product = $('#preorder-product').val();
        var email = $('#preorder-email').val();
        var name = $('#preorder-name').val();
        $.post('/ajax/preorder.php', {
            'product': product,
            'email': email,
            'name': name
        }, function(data) {
            if (data.trim()) {
                var recievedData = data.split('|');
                var el = $('#preorder');
                var offset = el.find('.ct1').offset().top;

                if (recievedData[0] == '1') {
                    $('#preorder-form').fadeOut(200, function() {
                        var titleEl = $('.hide-term1').html('<p>' + recievedData[1] + '</p>').prev();
                        $(titleEl).html($(titleEl).data('alternate'));
                    });

                    var elOffset = el.offset().top;
                    var elHeight = el.height();
                    var windowHeight = $(window).height();

                    if (elHeight < windowHeight)
                        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
                    else
                        offset = elOffset;

                    yaCounter28735756.reachGoal('PREORDER');
                } else {
                    if ($("#form-error").html(recievedData[1]).is(":hidden"))
                        $('#form-error').fadeIn();
                }

                $('html, body').animate({
                    scrollTop: offset
                }, 400);
            }
        });
    });

    $('#header-reg-form').submit(function(e) {
        e.preventDefault();
        //if (!$(this).attr('data-recaptcha'))
        //    return;

        var email = $('#header-reg-email').val();
        //var recaptchaResponse = $(this).attr('data-recaptcha');
        $.post('/ajax/register.php', {
            'email': email,
        //    'g-recaptcha-response': recaptchaResponse
        }, function(data) {
            if (data.trim()) {
        //        resetRecaptcha();
                var recievedData = data.split('|');
                if (recievedData[0] == '1') {
                    $('#header-reg-form').fadeOut('fast', function() {
                        $(this).html('<p>' + recievedData[1] + '</p>').fadeIn('fast');
                    });
                } else {
                    if ($("#header-reg-error").html(recievedData[1]).is(":hidden"))
                        $('#header-reg-error').fadeIn(200);
                    $('#header-reg-email').focus();
                }
            }
        });
    });
    $('#header-reg-submit').click(function(e) {
        //e.preventDefault();
    });
    $(document).on('click', '.notification .close-btn', function() {
        var notification = $(this).parent();
        if ($(notification).attr('id'))
            $.cookie($(notification).attr('id'), '1', {
                expires: 365,
                path: '/'
            });
        $(notification).fadeOut(300, function() {
            $(notification).remove();
        });
    });
    
    tippy('[data-tippy-content]');
});

function countDepositSum() {
    var c = 0.97;
    switch ($('#paymentType').val()) {
        case 'AC':
            c = 0.97;
            break;
        case 'PC':
            c = 0.99;
            break;
    }
    var val = $('#depositSum').val();
    val = parseInt(val);
    val = Math.ceil((val / c) * 100) / 100;
    if (val)
        $('#sum').val(val);
    else
        $('#sum').val('');
}

function prepareSign(system) {
    switch (system) {
        case 'kassa':
            var m = $('input[name=m]').val();
            var o = $('input[name=o]').val();
            var oa = parseFloat($('#sum').val()); //.toFixed(2)
            var currency = $('input[name=currency]').val();
            $.post('/ajax/sign.php?kassa', {
                'm': m,
                'o': o,
                'oa': oa,
                'currency': currency,
            }, function(data) {
                if (data.trim()) {
                    $('input[name=oa]').val(oa);
                    $('input[name=s]').val(data);
                }
            });
            break;
        case 'enot':
            var m = $('input[name=m]').val();
            var o = $('input[name=o]').val();
            var oa = $('#sum').val();
            $.post('/ajax/sign.php?enot', {
                'm': m,
                'o': o,
                'oa': oa
            }, function(data) {
                if (data.trim()) {
                    $('input[name=s]').val(data);
                }
            });
            break;
    }
}

function showNotification(itemText, itemId = null) {
    if ($('.notifications').length == 0) {
        $('body').append('<div class="notifications"></div>');
    }
    if (!itemId || typeof $.cookie('notification_' + itemId) === 'undefined') {
        var notification = '<div class="notification"' + (itemId ? ' id="notification_' + itemId + '"' : '') + '><div class="close-btn">×</div>' + itemText + '</div>';
        $(notification).appendTo('.notifications').hide().fadeIn(300);
    }
}

//var recaptcha = [];

//var loadRecaptcha = function() {
//    $('.g-recaptcha').each(function(index) {
//        var form = $(this).closest('form');
//        recaptcha.push(grecaptcha.render(this, {
//            'sitekey': '6LfOx6UUAAAAAEmB-L0vFmV6jocj-i_m8FZyyYzL',
//            'size': 'invisible',
//            'callback': function(response) {
//                $(form).attr('data-recaptcha', response).submit();
//            }
//        }));
//        $(form).bind('submit', function(e) {
//            if (!$(this).attr('data-recaptcha')) {
//                e.preventDefault();
//                grecaptcha.execute(recaptcha[index]);
//            } else
//                $(this).attr('data-recaptcha', '');
//        });
//    });
//}

//var resetRecaptcha = function() {
//    $(recaptcha).each(function() {
//        grecaptcha.reset(this);
//    });
//}

var jivo_onLoadCallback = function() {
    if (jivo_api.chatMode() == 'online' || jivo_config.hide_offline == 0)
        $('.notifications').addClass('narrow');
}