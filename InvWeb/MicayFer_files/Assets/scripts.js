var h = $(window).height(),
    w = $(window).width();
$(window).resize(function() {

            var nh = $(window).height(),
                nw = $(window).width();
            h = nh;
            w = nw;
            let imgURLBG = ''
            if (w < 800) {
                imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAANDROID.png'
            } else if (w >= 800 && h < 1280) {
                imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAIPHONE.png'
            } else {
                imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAPC.png'
            }
            // Instagram parallax
            $('.parallax-instagram').parallax({
                imageSrc: '/InvWeb/MicayFer_files/Assets/portada3.jpg'

            });

            // Portada parallax
            $('.parallax-portada').parallax({
                imageSrc: imgURLBG
            });
            // });

            // === === === === === === === === === === === === === === === === === === === === =
            // let imgURLBG = ''
            // if (w < 650) {
            //     imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAANDROID.jpg'
            // } else if (w >= 1000 && w < 1280) {
            //     imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAIPHONE.jpg'
            // } else {
            //     imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAPC.jpg'
            // }
            // // Instagram parallax
            // $('.parallax-instagram').parallax({
            //     imageSrc: '/InvWeb/MicayFer_files/Assets/portada3.jpg'

            // });

            // // Portada parallax
            // $('.parallax-portada').parallax({
            //     imageSrc: imgURLBG
            // });