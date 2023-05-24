document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".nav-item").forEach(Veiculo =>{
  
            Veiculo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?Veiculo.classList.remove("filtro")
              :Veiculo.classList.add("filtro")
        })
  
    }
  
  
  })