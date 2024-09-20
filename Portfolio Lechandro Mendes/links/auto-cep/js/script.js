jQuery(document).ready(function($) {
       var cepId = '#cep';
       var enderecoId = '#endereco';
       var bairroId = '#bairro';
       var cidadeId = '#municipio';
       var estadoId = '#estado';
       var numeroId = '#numero';
       var enderecoCompletoId = '#endereco-completo';
          
       function setLoading(loading) {
           var loadingText = 'Carregando...';
           if (loading) {
               $(enderecoId).val(loadingText);
               $(bairroId).val(loadingText);
               $(cidadeId).val(loadingText);
               $(estadoId).val(loadingText);
           } else {
               $(enderecoId).val('');
               $(bairroId).val('');
               $(cidadeId).val('');
               $(estadoId).val('');
           }
       }
   
       $(cepId).change(function() {
           let cep = $(this).val().replace(/\D/g, '');
           if (cep != "") {
               let validacep = /^[0-9]{8}$/;
               if(validacep.test(cep)) {
                   setLoading(true);
                   $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                       setLoading(false);
                       if (!("erro" in dados)) {
                           // Atualiza os campos com os valores da consulta.
                           $(enderecoId).val(dados.logradouro);
                           $(bairroId).val(dados.bairro);
                           $(cidadeId).val(dados.localidade);
                           $(estadoId).val(dados.uf);
                           updateEnderecoCompleto();
                       }
                       else {
                           alert("CEP não encontrado.");
                       }
                   });
               }
               else {
                   alert("Formato de CEP inválido.");
               }
           }
       });
   
       $(numeroId).on('input', function() {
           updateEnderecoCompleto();
       });
   
       function updateEnderecoCompleto() {
           let enderecoCompleto = $(enderecoId).val() + ', ' +
               $(numeroId).val() + ', ' +
               $(cidadeId).val() + ', ' +
               $(estadoId).val();
   
           $(enderecoCompletoId).val(enderecoCompleto);
       }
   });