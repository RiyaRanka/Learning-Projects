const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215); 
    const randomCode = " #" + randomNumber.toString(16);
    document.getElementById("color").style.backgroundColor = randomCode;
    document.getElementById("color-hex-code").innerText = randomCode;
}
// event call
document.getElementById("generate-btn").addEventListener (
    "click",
    getColor
)
// init call
getColor();
// copy button
function copyToClipboard(randomCode) {
    navigator.clipboard.writeText(randomCode)
    .then(() => {
        alert('Hex code copied to clipboard!');
    })
    .catch(err => {
        console.error('Error copying text:', err);
    });
}
document.getElementById('copy-btn').addEventListener('click', () => {
    const hexCode = document.getElementById('color-hex-code').textContent;
    copyToClipboard(hexCode);
});
