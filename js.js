const ua = navigator.userAgent;

if (/mobile/i.test(ua)) {
    console.log("Пользователь зашел с телефона 📱");
} else if (/tablet/i.test(ua)) {
    console.log("Пользователь зашел с планшета 📲");
} else {
    console.log("Пользователь зашел с компьютера 🖥️");
}
// $(document).ready(function () {
//     if(/mobile/i.test(ua)) {
//         $('.know').css({
//             'border': '1px solid purple',
//             'border-radius': '50px',
//             'box-shadow': '0 0 10px 10px purple',
//             'transition': 'box-shadow 0.3s ease',
//             'width': '370px',
//             'height': '300px',
//             'margin': '35px auto',
//             'position': 'absolute',
//             'overflow': 'hidden'
//         });
//     } else {
//         $('.know').css({
//             'border': 'none',
//             'border-radius': 'none',
//             'box-shadow': 'none',
//             'transition': 'none',
//             'width': 'none',
//             'height': 'none',
//             'margin': 'none',
//             'position': 'none',
//             'overflow': 'none'
//         });
//     }
// });

$(document).ready(function () {
    if (/mobile/i.test(ua)) {
        $('.know').addClass('know');  // добавляем класс 'know'
    } else {
        $('.know').removeClass('know');  // удаляем класс 'know'
    }
});
