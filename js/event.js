//  option 2
function changeColor( ){
    document.body.style.backgroundColor = 'green'
}
// option - 3

function colorRed( ){
    document.body.style.background ='red'
}
const btn = document.getElementById('redColour')
btn.onclick = colorRed

// option - 4 
const btn_four = document.getElementById('aquaColor')
btn_four.onclick = function colorAqua (){
    document.body.style.backgroundColor = 'aqua'
} 
// option 5
const btn_five  = document.getElementById('blueColor')
btn_five.addEventListener('click' , colorBlue )
function colorBlue ()
{
    document.body.style.backgroundColor = 'blue'
}
// option 6
document.getElementById('tomatoColor').addEventListener('click',function(){
    document.body.style.backgroundColor = 'tomato'
})

// practice 1
function textNew()
{
  const text =  document.getElementById('newText')
  text.innerText = ' i like valentine day'
}
// practice 2
document.getElementById('btn-id').addEventListener('click', function(){
    document.getElementById('newword').innerText = ' but i dont have girl friend '
})

// practice - 3 ( input)

document.getElementById('btn-ID').addEventListener('click',function(){
    const input = document.getElementById('input-ID')
 const inputText = input.value

 const paragraphText = document.getElementById('paragraph-ID')
 paragraphText.innerText = inputText
 input.value = ''

})

// comment box
document.getElementById('post-ID').addEventListener('click',function(){
    const commentBox = document.getElementById('area-ID')
    const comment = commentBox.value
    const paragraph = document.createElement('p')
     const text = paragraph.innerText = comment
    const container = document.getElementById('comment-container')
    container.appendChild(paragraph)
    commentBox.value = ''


    
})
// delete*****************************************************************************
const input = document.getElementById('inputID').addEventListener('keyup', function (event){
    const call = event.target.value

    const btnCondition = document.getElementById('btnID')
    if( call === 'delete'){
        btnCondition.removeAttribute( 'disabled')
    }
    else{
        btnCondition.setAttribute( 'disabled', true)

    }
})

const doneBtn = document.getElementById('btnID').addEventListener('click',function(){
    const textView = document.getElementById('textID')
    textView.style.display = 'none'
    const showIPT =
    document.getElementById( 'inputID')
    showIPT.value = ''

})

// event bubble
const itemsa = document.getElementById( 'item-5').addEventListener('click', function(event){
    console.log('item-5 clicked')
    event.stopImmediatePropagation()
})

const itemsb = document.getElementById( 'item-5').addEventListener('click', function(){
    console.log('item-5 clicked')
})
const itemsc = document.getElementById( 'item-5').addEventListener('click', function(){
    console.log('item-5 clicked')
})

const fullContainer = document.getElementById('container').addEventListener('click', function(){
    console.log('total clicked')
})

const Ul = document.getElementById('li-container').addEventListener('click', function(){
    console.log('ul clicked')
})

// delegation
  document.getElementById('box').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target)
  })
    document.getElementById('button-id').addEventListener('click',function(){
        const container = document.getElementById( 'box')
        const boxItem = document.createElement('li')

        boxItem.innerText ='amake shoray dekha'
        container.appendChild(boxItem)
        boxItem.classList.add('item-5')
    })


    





