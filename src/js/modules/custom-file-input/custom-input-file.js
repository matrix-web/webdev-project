const inputs = document.querySelectorAll('.input-file')

function selectFiles () {
    Array.from(inputs, input => {
        const label = input.nextElementSibling
        const labelVal = label.innerHTML

        input.addEventListener('change', function (event) {
            let fileName = ''
            
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length)
                fileName += ` фай${changeWordEndings(this.files.length)} выбрано`
            } else {
                fileName = event.target.value.split('\\').pop()
            }

            if (fileName) {
                if (label.firstElementChild) {
                    if (label.firstChild.nodeType === 3) {
                        label.firstChild.remove()
                    }
                    label.querySelector('span').innerHTML = fileName
                } else {
                    label.nextElementSibling.innerHTML = fileName
                }
            } else {
                label.innerHTML = labelVal
            }
        })

        input.addEventListener('focus', () => input.dataset.focus = "focused")
        input.addEventListener('blur', () => input.removeAttribute('data-focus'))
    })
}

function breakNumberIntoDigits (count) {
    let number = null
    let numbers = []

    while (Math.floor(count / 10 != 0)) {
        number = count % 10
        numbers.unshift(number)
        count = Math.floor(count / 10)
    }

    return numbers
}

function changeWordEndings (count) {
    const digits = breakNumberIntoDigits(count)
    const dozens = digits[digits.length - 2] === undefined ? null : digits[digits.length - 2]
    const units = digits[digits.length - 1] === undefined ? null : digits[digits.length - 1]
    let end = ''

    if ((dozens === null && units === 1) || (dozens >= 2 && dozens <= 9 && units === 1) || (dozens === 0 && units === 1)) {
        end = 'л'
    } else if ((dozens === 1 && units >= 0 && units <= 9) 
            || (dozens >= 1 && dozens <= 9 && units === 0) 
            || (dozens >= 1 && units >= 5 && units <= 9) 
            || (dozens === null && units >= 5 && units <= 9)
            || (dozens === 0 && units === 0)
            || (dozens === 0 && units >= 1))  {
        end = 'лов'
    } else {
        end = 'ла'
    }

    return end
}

selectFiles()