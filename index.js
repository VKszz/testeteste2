function resultadodenuncia(){
    var r = document.getElementById('resultado');
    var disstaff = document.getElementById('disstaff').value;
    var disdenunciante = document.getElementById('disdenunciante').value;
    var cidadedenunciante = document.getElementById('cidadedenunciante').value;
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var ticket = document.getElementById('ticket').value;
    var julgamento = document.getElementById('julgamento').value;
    var motivo = document.getElementById('motivo').value;
    var punicao = document.getElementById('punicao').value;
    var provas = document.getElementById('provas').value;
   
    r.innerHTML = `
        **RESOLVIDO POR**: <@${disstaff}>  </BR></BR></BR>
        **DENUNCIANTE**: <@${disdenunciante}> // ${cidadedenunciante} </BR>
        **DENUNCIADO**: <@${disdenunciado}> // ${cidadedenunciado} </BR>
        **TICKET:** ${ticket} </BR>
        **JULGAMENTO:**: ${julgamento} </BR>
        **MOTIVO**: ${motivo} </BR>
        **PUNIÇÃO**: <@&${punicao}> </BR>
        **PROVAS**: ${provas} </BR>
    `;
    copiarRelatorio();
}

function advertenciaeban(){
    var r = document.getElementById('resultado');
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var ticket = document.getElementById('ticket').value;
    var motivo = document.getElementById('motivo').value;
    var punicao = document.getElementById('punicao').value;
   
    r.innerHTML = `
        **DENUNCIADO**: <@${disdenunciado}> // ${cidadedenunciado} </BR>
        **TICKET:** ${ticket} </BR>
        **MOTIVO**: ${motivo} </BR>
        **PUNIÇÃO**: <@&${punicao}> </BR>
    `;
    copiarRelatorio();
}

function pendencia(){
    var r = document.getElementById('resultado');
    var disdenunciante = document.getElementById('disdenunciante').value;
    var cidadedenunciante = document.getElementById('cidadedenunciante').value;
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var motivo = document.getElementById('motivo').value;
    var provas = document.getElementById('provas').value;
    var pendencia = document.getElementById('pendencias').value;
   
    r.innerHTML = `
        **DENUNCIANTE:** <@${disdenunciante}>  //  ${cidadedenunciante} </BR>
        **DENUNCIADO:**  <@${disdenunciado}>  // ${cidadedenunciado} </BR>
        **MOTIVO:**  ${motivo} </BR>
        **ITENS:**   ${pendencia} </BR>
        **PROVAS:**  ${provas} </BR>
    `;
    copiarRelatorio();
}

function copiarRelatorio(){
    var r = document.getElementById('resultado');
    var range = document.createRange();
    range.selectNode(r);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{
        document.execCommand('copy');
        alert('Relatório copiado para a área de transferência'); //depois muda se quiser blz                
    } catch (err) {
        alert('Erro ao copiar o relatório.');
    }
    
    window.getSelection().removeAllRanges();
}
