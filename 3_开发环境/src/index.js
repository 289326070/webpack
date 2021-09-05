import _ from 'lodash'
import printMe from './print'


function component(){
    const element = document.createElement('div')
    const btn = document.createElement('button')
    console.log(54651)

    element.innerHTML = _.join(['hello','webpack'],'')
      
    btn.innerHTML = 'click me and check ths console'
    btn.onclick = printMe
    element.appendChild(btn)
    return element
}
document.body.appendChild(component())