//hidden

ScrollReveal().reveal('.home', {
    duration:3000,distance:'500px', origin:'left'});
ScrollReveal().reveal('.icone-home', 
    {duration:3000,distance:'500px',delay:'200', origin:'top'});
ScrollReveal().reveal('.about', {
    duration:3000, distance:'500px', delay:'200', origin:'left'});
ScrollReveal().reveal('#imagem-about', {
    duration:3000, distance:'500px', delay:'200', origin:'top'});
ScrollReveal().reveal('.projects', {
    duration:3000, distance:'500px', delay:'250', origin:'left'});
ScrollReveal().reveal('.contact', {
    duration:3000, distance:'500px', delay:'250', origin:'left'});

    //

    var paragrafo = document.querySelector('h1')
    var texto = paragrafo.innerHTML
    var index = 0
    
    const escrever = () => {
      paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')
    
      if (texto.length > index) {
        if (index == 0){
          paragrafo.innerHTML = texto.charAt(index) 
        } else {
          paragrafo.innerHTML += texto.charAt(index) 
        }
    
        paragrafo.innerHTML += '|'
    
        index++
        setTimeout(escrever, 150)
    
      } 
    }
    
    escrever()