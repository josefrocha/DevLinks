const buttonSwitch = document.getElementById("buttonSwitch")

buttonSwitch.addEventListener('click', () => {
  var html = document.getElementsByTagName("html")[0];

  if(html.classList.contains('default')) {
    html.classList.add('light')
    html.classList.remove("default")

    buttonSwitch.style.transform = "translateX(100%)"
    buttonSwitch.style.transition = "all 1.7s"
  } else {
    html.classList.add('default');
    html.classList.remove('light');

    buttonSwitch.style.transform = "translateX(0%)"
    buttonSwitch.style.transition = "all 1.7s"
  }
})

/*

só muda o modo quando o tempo da transição chegue ao fim (1.7s)

buttonSwitch.addEventListener('click', () => {
  var html = document.getElementsByTagName("html")[0];

  if(html.classList.contains('default')) {
    buttonSwitch.style.transform = "translateX(100%)"
    buttonSwitch.style.transition = "all 1.7s"

    setTimeout(() => {
      html.classList.add("light")
      html.classList.remove("default")
    }, 1700)
  } else {
    buttonSwitch.style.transform = "translateX(0%)"
    buttonSwitch.style.transition = "all 1.7s"
    
    setTimeout(() => {
      html.classList.add("default")
      html.classList.remove("light")
    }, 1700)
  }
})
*/