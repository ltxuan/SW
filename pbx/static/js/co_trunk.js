socket.on("RES_CO_TRUNK_SETTING", msg => {
    console.log(msg);
    co_trunk_status = false;
    let table =document.querySelector("#co_trunk_table");
    document.querySelector("#container_CO_CONFIGURE > div.server-ip > input[type=text]").value = msg[0].domain;
    msg.forEach(element => {
        table.rows[element.stt + 1].cells[1].children[0].value = element.number;
    });
  })

function co_trunk_save()
{
    let table =document.querySelector("#co_trunk_table");
    let co_serverIp =document.querySelector("#container_CO_CONFIGURE > div.server-ip > input[type=text]");
    for (i = 1; i < 9; i++)
    {
        let temp_data = {};
        temp_data.ip = co_serverIp.value;
        temp_data.stt = table.rows[i].cells[0].innerText;
        temp_data.number = table.rows[i].cells[1].children[0].value;
        data.co_trunk.push(temp_data);
    }
    console.log(data.co_trunk);
    var buttonChange             = document.getElementById('buttonChange');
    buttonChange.style.display   = 'block';
}