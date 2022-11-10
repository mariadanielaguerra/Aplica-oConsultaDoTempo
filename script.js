function carregar() {
  let cidade = document.getElementById("cidade").value;
  if (cidade.length == "") {
    alert("Por favor digite uma cidade para consultar o tempo");
  } else {
    let url =
      "https://api.hgbrasil.com/weather?format=json-cors&key=7348d403&city_name=" +
      cidade;
    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log(data);
        const temp = data.results.temp;
        document.getElementById("temp").innerHTML = temp;
        const city = data.results.city;
        document.getElementById("city").innerHTML = city;
        const description = data.results.description;
        document.getElementById("description").innerHTML = description;
        const sunrise = data.results.sunrise;
        document.getElementById("sunrise").innerHTML =
          "Nascer do sol:  " + sunrise;
        const sunset = data.results.sunset;
        document.getElementById("sunset").innerHTML = "Pôr do sol:  " + sunset;
        const wind_speedy = data.results.wind_speedy;
        document.getElementById("wind_speedy").innerHTML =
          "Vento:  " + wind_speedy;
        const date = data.results.date;
        document.getElementById("date").innerHTML = date;
        const humidity = data.results.humidity;
        document.getElementById("humidity").innerHTML =
          "Umidade do ar: " + humidity + "%";

        const img = data.results.img_id;

        const currently = data.results.currently;

        document.getElementById("firstBox").style.display = "none";
        document.getElementById("secondBox").style.display = "block";
        let imagemTempo = document.getElementById("tempoimg");

        // Mudar as imagens do icone
        //chuva
        if (img == "1n" || img == "5n") {
          imagemTempo.src = "imagens/chuvaa.png";
        }
        if (img == "6n" || img == "9n" || img == "10n" || img == "11n") {
          imagemTempo.src = "imagens/chuvaa.png";
        }
        if (img == "12n" || img == "45n" || img == "40n") {
          imagemTempo.src = "imagens/chuvaa.png";
        }
        // neve
        if (
          img == "7n" ||
          img == "8n" ||
          img == "13n" ||
          img == "14n" ||
          img == "15n"
        ) {
          imagemTempo.src = "imagens/neve.png";
        }
        if (img == "16n" || img == "17n" || img == "18n" || img == "35n") {
          imagemTempo.src = "imagens/neve.png";
        }
        if (
          img == "41n" ||
          img == "42n" ||
          img == "43n" ||
          img == "25n" ||
          img == "46n"
        ) {
          imagemTempo.src = "imagens/neve.png";
        }
        //nuvem
        if (img == "20n" || img == "22n" || img == "23n" || img == "48n") {
          imagemTempo.src = "imagens/nuvem.png";
        }
        if (
          img == "26n" ||
          img == "28n" ||
          img == "29n" ||
          img == "30n" ||
          img == "34n"
        ) {
          imagemTempo.src = "imagens/nuvem.png";
        }
        //tempestade
        if (
          img == "0n" ||
          img == "3n" ||
          img == "4n" ||
          img == "37n" ||
          img == "38n" ||
          img == "39n" ||
          img == "47n"
        ) {
          imagemTempo.src = "imagens/trovoadas.png";
          document.style.background = chuva;
        }
        //lua
        if (img == "27n" && currently == "noite") {
          imagemTempo.src = "imagens/lua.png";
          imagemTempo.style.width = "90px";
          imagemTempo.style.height = "90px";
        }
        if (img == "31n" && currently == "noite") {
          imagemTempo.src = "imagens/lua.png";
          imagemTempo.style.width = "90px";
          imagemTempo.style.height = "90px";
        }
        if (img == "33n") {
          imagemTempo.src = "imagens/lua.png";
          imagemTempo.style.width = "90px";
          imagemTempo.style.height = "90px";
        }
        //sol
        if (img == "27n" && currently == "dia") {
          imagemTempo.src = "imagens/dia.png";
          imagemTempo.style.width = "90px";
          imagemTempo.style.height = "90px";
        }
        if (img == "31n" && currently == "dia") {
          imagemTempo.src = "imagens/sol.png";
          imagemTempo.style.width = "90px";
          imagemTempo.style.height = "90px";
        }
        if (img == "44n" || img == "32n") {
          imagemTempo.src = "imagens/sol.png";
          imagemTempo.style.width = "90px";
          imagemTempo.style.height = "90px";
        }
        // ventos
        if (
          img == "19n" ||
          img == "21n" ||
          img == "23n" ||
          img == "24n" ||
          img == "22n"
        ) {
          imagemTempo.src = "imagens/ventania.png";
          imagemTempo.style.width = "95px";
          imagemTempo.style.height = "95px";
        }

        // Alterar o background conforme horário
        var dia = ["linear-gradient(to bottom,#57A3C8, #4999B9,  #3090BD)"];

        var noite = ["linear-gradient(to bottom,#0F132E, #0F132E)"];
        if (currently == "noite") {
          document.body.style.background = noite;
          document.getElementById("secondBox").style.color = "white";
        } else {
          document.body.style.background = dia;
        }
      });
    });
  }
}

function voltar() {
  location.reload();
}
