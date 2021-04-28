
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
     
    $.ajax({
        type: "GET",
        url: url,

        success: function(response){
            console.log(response);

            $("#titulo-cep").html("CEP " + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf)
            /* Pode ser assim.
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("ddd").innerHTML = response.ddd;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            */
        }
    })
}

