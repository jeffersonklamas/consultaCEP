
function consultaCep(){
    $(".barra-progresso").hide();

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
            $("#uf").html(response.uf);
            $(".lep").show()
            $(".barra-progresso").hide();

            /* Pode ser assim, foi o inicio de tudo.
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("ddd").innerHTML = response.ddd;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            */
        }
    })
};

$(function(){
    $(".lep").hide();
    $(".barra-progresso").hide();
}
);

/* Testar implementação de nova consulta.
 
function novaconsultaCep(){
    $(".consultaCep").show()
} */