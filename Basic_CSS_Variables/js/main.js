console.log(window.getComputedStyle(document.documentElement)
.getPropertyValue('--color'));
document.getElementById('dark-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty('--body-background-color', '#333')
  })


document.getElementById('white-btn').addEventListener(
    'click', () =>{
        document.documentElement.style.setProperty(
            '--body-background-color' , 'white')
        
    }
)