if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
        .register('service_worker.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(`Service worker: Error ${err}`))
    })
}