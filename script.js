$(function(){

  $.ajax({
    url:'https://api.b7web.com.br/cinema/',
    type:'GET',
    dataType:'json',
    beforeSend:function(){
      $('.filmes').html('<div class="col-md-12">Carregando...</div>');
    },
    success:function(json) {
      console.log(json);
      var html = '';

      for(var i in json) {
        html += '<div class="col-md-4"><img src="'+json[i].avatar+'" />'+json[i].titulo+'</div>';
        //console.log(json[i].avatar);
      }
      
      $('.filmes').html(html);
    }
  });
});