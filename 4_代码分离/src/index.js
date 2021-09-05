
/**
 * 
 *1、 import(静态导入) 
 * 
*/
// import _ from 'lodash'

// function component(){
//     const element = document.createElement('div')
//     const btn = document.createElement('button')


//     element.innerHTML = _.join(['hello','webpack'],'')
    
//     btn.innerHTML = 'click me and check ths console'
//     btn.onclick = printMe
//     element.appendChild(btn)
//     return element
// }
// document.body.appendChild(component())


/**
 * 2、 dynamic import(动态导入) 来分离出一个 chunk：
 * 
*/
function getComponent(){
    const element = document.createElement('div')
    return import ('lodash')
    .then(({default:_})=>{
        const element = document.createElement('div')
        element.innerHTML = _.join(['hello','webpack'],' ');
        return element
    })
    .catch((error)=>{
        console.log(' An error occurred while loading the component')
    })
}

getComponent().then((component)=>{
    document.body.appendChild(component)

})