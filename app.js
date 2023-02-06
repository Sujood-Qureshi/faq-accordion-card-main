const heading = document.querySelectorAll('.QuestionUnactive');
const paragraph = document.querySelectorAll('.ParaUnactive');
const arrow = document.querySelectorAll('.arrow')


const accordianOne = () => {
    if (heading[0].classList.value === 'QuestionUnactive QuestionActive') {
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')

        })
    }
    else{
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')
    
        })
        heading[0].classList.add('QuestionActive')
        arrow[0].classList.add('arrowUp')
        paragraph[0].classList.add('ParaActive')
    }
}
const accordianTwo = () => {
    if (heading[1].classList.value === 'QuestionUnactive QuestionActive') {
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')

        })
    }
    else{
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')
    
        })
        heading[1].classList.add('QuestionActive')
        arrow[1].classList.add('arrowUp')
        paragraph[1].classList.add('ParaActive')
    }
}
const accordianThree = () => {
    if (heading[2].classList.value === 'QuestionUnactive QuestionActive') {
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')

        })
    }
    else{
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')
    
        })
        heading[2].classList.add('QuestionActive')
        arrow[2].classList.add('arrowUp')
        paragraph[2].classList.add('ParaActive')
    }
}
const accordianFour = () => {
    if (heading[3].classList.value === 'QuestionUnactive QuestionActive') {
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')

        })
    }
    else{
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')
    
        })
        heading[3].classList.add('QuestionActive')
        arrow[3].classList.add('arrowUp')
        paragraph[3].classList.add('ParaActive')
    }
}
const accordianFive = () => {
    if (heading[4].classList.value === 'QuestionUnactive QuestionActive') {
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')

        })
    }
    else{
        heading.forEach((el) => {
            el.classList.remove('QuestionActive')
        });
        arrow.forEach((el) => {
            el.classList.remove('arrowUp')
        })
        paragraph.forEach((el) => {
            el.classList.remove('ParaActive')
    
        })
        heading[4].classList.add('QuestionActive')
        arrow[4].classList.add('arrowUp')
        paragraph[4].classList.add('ParaActive')
    }
}