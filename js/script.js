
var xlmns = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(xlmns, "svg");
svg.setAttribute("height", "700");
svg.setAttribute("width", "700");
svg.setAttribute("viewBox", "0 0 700 700");

document.body.appendChild(svg);

//variabelen definiëren

var tienGetallenArray = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
var zesGetallenArray = [100, 200, 300, 400, 500, 600];

var rgb = 255;     //kleur (rood) // kleur rood waarde: fill="rgb(255, 0, 0)"
var w = 20;       //breedte
var h = 20;      //hoogte 
var r = 10;     // radius


//tekenen van de rechthoeken
function rechthoekTekenen(xRechthoek, yRechthoek, w, h, rechthoekKleur) {
    var rect = document.createElementNS(xlmns, "rect");
    rect.setAttribute("x", xRechthoek);
    rect.setAttribute("y", yRechthoek);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", rechthoekKleur);
    svg.appendChild(rect);
}

//tekenen van de cirkels
function cirkelTekenen(xCirkel, yCirkel, r, cirkelKleur) {
    var circle = document.createElementNS(xlmns, "circle");
    circle.setAttribute("cx", xCirkel);
    circle.setAttribute("cy", yCirkel);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", cirkelKleur);
    svg.appendChild(circle);
}

//twee loops: tekenen van meerdere vormen en variërende rode kleur

for (var i = 0; i < tienGetallenArray.length; i++) {
    cirkelKleur = 'rgb(' + rgb + ', 0, 0)';
    rgb = rgb - i * 6;

    for (var j = 0; j < zesGetallenArray.length; j++) {

        if (j != 0) {
            var x = zesGetallenArray[j];
            var y = tienGetallenArray[i];
            cirkelTekenen(x + r, y + r, r, cirkelKleur);
        } else {
            var x = zesGetallenArray[j];
            var y = tienGetallenArray[i];
            rechthoekTekenen(x, y, r * 2, r * 2, cirkelKleur);
        }
    }
}

