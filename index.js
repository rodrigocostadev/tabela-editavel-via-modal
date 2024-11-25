
let table = document.querySelector("table")
let tableLines = table.querySelectorAll("tbody tr");
let tableData = document.querySelectorAll("td")

let objetcsTable = []

tableData.forEach(function(td){
    td.addEventListener("click", function(){
        let parentNow = this.closest("tr")          // PEGA O ID DO ELEMENTO PAI
        let rowID = parentNow.id
        console.log(rowID)
    })
    // td.addEventListener("click", openFichaDeSugestao)  
})

// CRIAR ID NAS LINHAS TR's (TableRow's) E OBJETOS DE CADA LINHA DE ACORDO COM O NUMERO DE LINHAS DA TABELA
tableLines.forEach(function iterarLinhas(tr, index) {
    tr.id = `${index + 1}`
    let tds = tr.querySelectorAll("td")    
    // console.log(tds)
    let obj = mostrarObjetos(tds)    
    objetcsTable.push(obj)
    console.log(objetcsTable)
})

function mostrarObjetos(tds){ 
    let lineObjTeste = {
        // linha: tr.id,
        id : tds[0].textContent.trim(),
        data : tds[1].textContent.trim(),
        descricao : tds[2].textContent.trim(),
        grupo : tds[3].textContent.trim(),
        marca : tds[4].getAttribute("data-marca"),
        procura : tds[5].textContent.trim(),
        oem: tds[6].textContent.trim(),
        sugestor : tds[7].textContent.trim(),
        empresa : tds[8].textContent.trim(),
        status : tds[9].textContent.trim(),
        precoReferencia : "",
        classificacaoPreco : "",
        aplicacao : "",
        observacao : ""
    }
    return lineObjTeste
    // console.log(lineObjTeste)
    // console.log(objetcsTable)
}


let currentRow = null;  // Variável para armazenar a linha clicada

// Delegação de eventos: adiciona o evento de clique na tabela
table.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if (row) {
        currentRow = row;  // Armazenando a linha clicada
        console.log(row)

        // Preenchendo os inputs do modal com os dados da linha clicada
        document.getElementById('descricao').value = row.cells[2].textContent;
        document.getElementById('grupo').value = row.cells[3].textContent;

        // Exibindo o modal
        // document.getElementById('myModal').style.display = 'block';
        openFichaDeSugestao()
        // e.addEventListener("click", openFichaDeSugestao)  
    }
});

// Evento blur para atualizar a tabela quando o input perde o foco
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        if (currentRow) {
            // Atualizando a linha quando o input perde o foco
            currentRow.cells[2].textContent = document.getElementById('descricao').value;
            currentRow.cells[3].textContent = document.getElementById('grupo').value;

            // Fechando o modal após a edição
            // document.getElementById('myModal').style.display = 'none';
            closeFichaDeSugestao()
        }
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const modais = document.querySelectorAll(".modal")
let modalFichaDeSugestao = document.getElementById("modal-ficha-de-sugestao")

function openFichaDeSugestao(){
    // console.log("ok")
    modalFichaDeSugestao.style.display = "grid"
}

function closeFichaDeSugestao(){
    // console.log("ok")
    modalFichaDeSugestao.style.display = "none"
}

function closeAllModals(){
    modais.forEach(modal => {
        modal.style.display = "none"
    })
}

document.addEventListener("click", function(event){
    if(!event.target.closest(".modal")  && !event.target.matches("td")){
        closeAllModals()
    }
})


