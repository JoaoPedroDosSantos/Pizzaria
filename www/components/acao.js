$(document).on("click","#listar",function(){
$(location).attr("href","listar.html");
});
$(document).on("click","#cadastrar",function(){
  var parametros={
    "sabor":$("#sabor").val(),
    "valor":$("#valor").val()
  };

  $.ajax({
    type:"POST",//como vou enviar os dados ao servidor
    url:"https//pizzariajl.000webhostapp.com/cadastrar.php", //para onde vai se direcionado
    data:parametros, //o que eu vou enviar
    //caso esteja tudo erto executa esse codigo
    success:function(data){
     navigator.notification.alert(data);
      $("#sabor").val("");
      $("#valor").val("");
    },
    //caso algo esteja errado executa esse codigo
    error: function(data){
      navigator.notification.alert("Erro ao cadastrar");
    }
  });
});
function carregaLista(){
  s.ajax({
    type:"post",//como vou enviar os dados ao servidor
    url:"https://pizzariajl.000webhostapp.com/listar.php",//para onde vou enviar
    dataType:"json",
    //caso esteja tudo certo executa esse codigo
    success: function(data){
      var itemlista="";
      $.each(data.pizzas, function(i,dados){
        itemlista+= "<optino value="+dados.codigo+">"+dados.sabor+"</option>"
      });
      $("#lista").html(itemlista);
    },
    //caso algo esteja errado excuta esse codigo
    error:function(data){
      navigator.notification.alert("Erro ao buscar registro");
    }
  });
}
$(document).on("change","#lista",function(){
  var parametro={
    "codigo":$("option:selected",("#lista")).val()
  };
  $ajack({
    type:"post",//como vou enviar os dados ao servidor
    url:"https://pizzariajl.000webhostapp.com/listar2.php",
    data:parametro,
    dataType:"json",

    success: function(data){
      $("#codigo").val(data.pizza.codigo);
      $("#sabor").val(data.pizza.sabor);
      $("#valor").val(data.pizza.valor);
    },
    error: function(data){
      navigator.notification.alert("erro ao buscar registro");
    }
  });
});
