jQuery('.h-play').click(function() {
    jQuery('.h-play').removeClass('active');
    jQuery('.pause-button').toggleClass('active');
    let audio_source = jQuery(this).attr('data');
    jQuery('#jp_audio_0').attr('src', audio_source);

    var audio = jQuery("#jp_audio_0")[0];
    audio.play();





});
jQuery('.pause-button').click(function() {
    jQuery('.pause-button').removeClass('active');
    jQuery('.h-play').toggleClass('active');
    let audio_source = jQuery(this).attr('data');
    jQuery('#jp_audio_0').attr('src', audio_source);

    var audio = jQuery("#jp_audio_0")[0];
    audio.pause();





});