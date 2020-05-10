$(function(){
  $(document).ready(function(){
    $('#myalert').hide()
  })

  $('#btnConverter').on('click', function(){
    const cotacao = parseFloat($('#cotacao').val())
    const qtd = parseFloat($('#qtd').val())

    if (isNaN(cotacao) && isNaN(qtd)) {
      $('#myalert').show()

      setTimeout(function(){  
        $('#myalert').alert('close')
      }, 1500)
    }
  })
})