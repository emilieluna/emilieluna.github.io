



$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
         userId: '1303959072',
        clientid: '	862d0c0f050b4ad4ac62c97704406b91',
        limit: 4,
        resolution: 'standard_resolution',
        accessToken: '1303959072.1677ed0.44fb7a943ce04e5399b23e3c1469ec56',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});