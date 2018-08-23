
 $(window).on('load', function () {
    //alert("Window Loaded");

    var ad_removed = false;
    
    function check_if_ad_blocker_warning_is_loaded(){
        if(! ad_removed){
            if($("[aria-label='advertisement']").length == 0){
                setTimeout(check_if_ad_blocker_warning_is_loaded, 1000);
            } else {
                $("[aria-label='advertisement']").parent().parent().parent().css("display", "none");
                ad_removed = true;
            }
        }
    }

    check_if_ad_blocker_warning_is_loaded();

});

