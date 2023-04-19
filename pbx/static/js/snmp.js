socket.on("RES_SNMP_SETTING", msg => {
    console.log(msg);
    snmp_status = false;
    document.getElementById("snmp_name").value = msg.data.name;
    document.getElementById("snmp_location").value = msg.data.location;
    document.getElementById("snmp_contact").value = msg.data.contact;
    document.getElementById("snmp_sysDescription").value = msg.data.sysDescription;
    document.getElementById("snmp_portNumber").value = msg.data.portNumber;
    document.getElementById("SNMP_v1_Mode").value = msg.data.v1Mode;
    document.getElementById("SNMP_v2c_Mode").value = msg.data.v2cMode;
    document.getElementById("SNMP_v3_Mode").value = msg.data.v3Mode;
    document.getElementById("snmp_roCommunity").value = msg.data.roCommunity;
    document.getElementById("snmp_rwCommunity").value = msg.data.rwCommunity;
    document.getElementById("snmp_trapCommunity").value = msg.data.trapCommunity;
    document.getElementById("snmp_serverIp").value = msg.data.serverIp;
    document.getElementById("SNMPv3_Authentication").value = msg.data.v3Authentication;
  })

function snmp_save()
{
    data.snmp.name = document.getElementById("snmp_name").value;
    data.snmp.location = document.getElementById("snmp_location").value;
    data.snmp.contact = document.getElementById("snmp_contact").value;
    data.snmp.sysDescription = document.getElementById("snmp_sysDescription").value;
    data.snmp.portNumber = document.getElementById("snmp_portNumber").value;
    data.snmp.v1Mode = document.getElementById("SNMP_v1_Mode").value;
    data.snmp.v2cMode = document.getElementById("SNMP_v2c_Mode").value;
    data.snmp.v3Mode = document.getElementById("SNMP_v3_Mode").value;
    data.snmp.roCommunity = document.getElementById("snmp_roCommunity").value;
    data.snmp.rwCommunity = document.getElementById("snmp_rwCommunity").value;
    data.snmp.trapCommunity = document.getElementById("snmp_trapCommunity").value;
    data.snmp.serverIp = document.getElementById("snmp_serverIp").value;
    data.snmp.v3Authentication = document.getElementById("SNMPv3_Authentication").value;
    console.log(data.snmp);
    var buttonChange             = document.getElementById('buttonChange');
    buttonChange.style.display   = 'block';
}