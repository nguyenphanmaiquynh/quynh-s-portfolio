// Reference link - https://codepen.io/Ruddy/pen/RNRybN //
$(document).ready(function () {
    var counter = 0;
    // Start the changing images
    setInterval(function () {
        if (counter == 3) {
            $('.loader').hide();
            $('.body_container').show();
        }
        changeImage(counter);
        counter++;
    }, 1000);
    // Set the percentage off
    loading();
});
function changeImage(counter) {
    var images = [
        '<img src="./assets/images/pre_Load/preload_3.png" />',
        '<img src="./assets/images/pre_Load/preload_4.png" />',
        '<img src="./assets/images/pre_Load/preload_5.png" />',
    ];
    $(".loader .image").html("" + images[counter] + "");
}
function loading() {
    var num = 0;
    for (i = 0; i <= 100; i++) {
        setTimeout(function () {
            $('.loader span').html(num + '%');
            if (num == 100) {
                loading();
            }
            num++;
        }, i * 40);
    };
}