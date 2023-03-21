const text = document.querySelector('textarea')
const btnCopy = document.querySelector('.copy')
const btnGenerate = document.querySelector('.generate')

btnGenerate.addEventListener('click', () => {
    const math = Math.floor(Math.random(0, 1) * 1000000)
    text.textContent = math
})


btnCopy.addEventListener('click', async () => {
    try {
        text.select()
        await navigator.clipboard.writeText(text.value)
        btnCopy.textContent = 'Copied'

        setTimeout(() => {
            getSelection().removeAllRanges()
            btnCopy.textContent = 'Copy to Clip Board'
        }, 1500)
    }
    catch (err) {
        alert(err)
    }
})