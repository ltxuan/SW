socket.on("RES_RADIO_SETTING", msg =>{
    console.log(msg);
    radio_status = false;
    msg.forEach(item => {           
        document.getElementById("rx-audio-gain_" + item.data.id).value = item.data.rx_gain;
        document.getElementById("tx-audio-gain_" + item.data.id).value = item.data.tx_gain;
        document.getElementById("rx-delay-time_" + item.data.id).value = item.data.rx_delay_time;
        document.getElementById("tx-delay-time_" + item.data.id).value = item.data.tx_delay_time;
        document.getElementById("radio_general-options-cor0_" + item.data.id).value = item.data.mute_when_nocor;
        document.getElementById("radio_general-options-cor1_" + item.data.id).value = item.data.cor_ptt_priority;
        document.getElementById("radio_general-voice-detect-al0_" + item.data.id).value = item.data.rx_detect_algorithm;
        document.getElementById("radio_general-voice-detect-al1_" + item.data.id).value = item.data.tx_detect_algorithm;
        document.getElementById("rx-start-voice-detect-time_" + item.data.id).value = item.data.rx_startcall_time;
        document.getElementById("tx-start-voice-detect-time_" + item.data.id).value = item.data.tx_startcall_time;
        document.getElementById("rx-stop-voice-detect-time_" + item.data.id).value = item.data.rx_endcall_time;
        document.getElementById("tx-stop-voice-detect-time_" + item.data.id).value = item.data.tx_endcall_time;
        document.getElementById("rx-threshold-voice-detect-time_" + item.data.id).value = item.data.rx_detect_theshold;
        document.getElementById("tx-threshold-voice-detect-time_" + item.data.id).value = item.data.tx_detect_theshold;
        document.getElementById("cor-trasnmit_" + item.data.id).value = item.data.cor_transmit;
        document.getElementById("auto-ptt_" + item.data.id).value = item.data.auto_ptt;
        document.getElementById("improve-the-quality-rx_" + item.data.id).value = item.data.rx_audio_quality;
        document.getElementById("improve-the-quality-tx_" + item.data.id).value = item.data.tx_audio_quality;
    });
});

function radio_port_save(el){
    console.log(el)
    var index = parseInt(el.id.slice(-1)) - 1;
    console.log(index);
    data.radio[index].id = index;
    data.radio[index].rx_gain = document.getElementById("rx-audio-gain_" + index).value;
    data.radio[index].tx_gain = document.getElementById("tx-audio-gain_" + index).value;
    data.radio[index].rx_delay_time = document.getElementById("rx-delay-time_" + index).value;
    data.radio[index].tx_delay_time = document.getElementById("tx-delay-time_" + index).value;
    data.radio[index].mute_when_nocor = document.getElementById("radio_general-options-cor0_" + index).value;
    data.radio[index].cor_ptt_priority = document.getElementById("radio_general-options-cor1_" + index).value;
    data.radio[index].rx_detect_algorithm = document.getElementById("radio_general-voice-detect-al0_" + index).value;
    data.radio[index].tx_detect_algorithm = document.getElementById("radio_general-voice-detect-al1_" + index).value;
    data.radio[index].rx_startcall_time = document.getElementById("rx-start-voice-detect-time_" + index).value;
    data.radio[index].tx_startcall_time = document.getElementById("tx-start-voice-detect-time_" + index).value;
    data.radio[index].rx_endcall_time = document.getElementById("rx-stop-voice-detect-time_" + index).value;
    data.radio[index].tx_endcall_time = document.getElementById("tx-stop-voice-detect-time_" + index).value;
    data.radio[index].rx_detect_theshold = document.getElementById("rx-threshold-voice-detect-time_" + index).value;
    data.radio[index].tx_detect_theshold = document.getElementById("tx-threshold-voice-detect-time_" + index).value;
    data.radio[index].cor_transmit = document.getElementById("cor-trasnmit_" + index).value;
    data.radio[index].auto_ptt = document.getElementById("auto-ptt_" + index).value;
    data.radio[index].rx_audio_quality = document.getElementById("improve-the-quality-rx_" + index).value;
    data.radio[index].tx_audio_quality = document.getElementById("improve-the-quality-tx_" + index).value;

    console.log(data.radio[index]);
    var buttonChange = document.getElementById('buttonChange');
    buttonChange.style.display = 'block';
}

function radio_port_reset(el){
    console.log(el)
    var index = parseInt(el.id.slice(-1)) - 1;
    console.log(index);
    data.radio[index].id = index;
    data.radio[index].rx_gain = -10;
    data.radio[index].tx_gain = -30;
    data.radio[index].rx_delay_time = 2;
    data.radio[index].tx_delay_time = 20;
    data.radio[index].mute_when_nocor = "No";
    data.radio[index].cor_ptt_priority = "PTT";
    data.radio[index].rx_detect_algorithm = "VMR(1)";
    data.radio[index].tx_detect_algorithm = "VMR(1)";
    data.radio[index].rx_startcall_time = 4;
    data.radio[index].tx_startcall_time = 6;
    data.radio[index].rx_endcall_time = 20;
    data.radio[index].tx_endcall_time = 30;
    data.radio[index].rx_detect_theshold = 100;
    data.radio[index].tx_detect_theshold = 30;
    data.radio[index].cor_transmit = "Yes";
    data.radio[index].auto_ptt = "Yes";
    data.radio[index].rx_audio_quality = "No";
    data.radio[index].tx_audio_quality = "No";

    console.log(data.radio[index]);
    var buttonChange = document.getElementById('buttonChange');
    buttonChange.style.display = 'block';
}