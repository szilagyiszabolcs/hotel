var hotelszoveg1 = "<h2>Hotel 1</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var hotelszoveg2 = "<h2>Hotel 2</h2>Vel risus commodo viverra maecenas accumsan. Mattis pellentesque id nibh tortor id aliquet lectus. Libero id faucibus nisl tincidunt eget nullam non nisi. Maecenas pharetra convallis posuere morbi leo. Pharetra diam sit amet nisl suscipit. Nunc aliquet bibendum enim facilisis gravida neque convallis. Fringilla ut morbi tincidunt augue interdum velit. At auctor urna nunc id cursus metus. Gravida quis blandit turpis cursus in. Dignissim enim sit amet venenatis urna cursus. Sed risus pretium quam vulputate.";

var hotelszoveg3 = "<h2>Hotel 3</h2>Cras ornare arcu dui vivamus arcu. Nisi porta lorem mollis aliquam ut porttitor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. A lacus vestibulum sed arcu non odio. Pellentesque habitant morbi tristique senectus et netus et malesuada. Fermentum et sollicitudin ac orci phasellus egestas. Morbi blandit cursus risus at ultrices mi. Commodo sed egestas egestas fringilla. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Vitae et leo duis ut. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.";

function foglal(szam) {
    let szovegdoboz = document.getElementById('bal');
    let hotelar = document.getElementById('hotelar');
    document.getElementById('hotel').value = szam;
    if (szam == 1) {
        szovegdoboz.innerHTML = hotelszoveg1;
        hotelar.innerHTML = 200000;
    }
    else if (szam == 2) {
        szovegdoboz.innerHTML = hotelszoveg2;
        hotelar.innerHTML = 180000;
    }
    else {
        szovegdoboz.innerHTML = hotelszoveg3;
        hotelar.innerHTML = 240000;
    }
}

function szamol() {
    let hotel = document.getElementById('hotel');
    let ar = 0;
    if (hotel.value == 1) {
        ar = 200000;
    }
    else if (hotel.value == 2) {
        ar = 180000;
    }
    else {
        ar = 240000;
    }

    let ejszaka = document.getElementById('ejszaka').value;
    let szemely = document.getElementById('szemely').value;

    var arfoejszaka = ar * 1 / szemely * 1;
    var arfo = ar * 1 * ejszaka * 1 / szemely * 1;

    document.getElementById('arfoejszaka').innerHTML = arfoejszaka;
    document.getElementById('arfo').innerHTML = arfo;
}