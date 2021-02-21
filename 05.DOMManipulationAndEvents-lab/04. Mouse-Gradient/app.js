function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output =  document.getElementById('result');

    function onMove(event){
        // const offsetX = event.pageX - event.target.offsetLeft;
        const offsetX = event.offsetX; // method in development (experimental in MDN)
        const percent = Math.round(offsetX / event.target.clientWidth * 100);
        
        output.textContent = `${percent}%`;
    }
}