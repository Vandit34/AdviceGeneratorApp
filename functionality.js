document.getElementById('new-advice').addEventListener('click', async () => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        const data = await response.json();
        
         document.getElementById('advice-num').textContent = `Advice #${data.slip.id}`;
    
        document.getElementById('advice-text').textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
});
