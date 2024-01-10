//store the refences ...box ...droppable
const dragableElement = document.querySelectorAll('.box');
const droppableElement = document.querySelectorAll('.droppable');

draggableElement.forEach(element=>{
    //source
    element.addEventListener('dragstart', (drgStart)=>{
        drgStart.dataTransfer.setData('text',drgStart.target.id);
        drgStart.currentTarget.classList.add('draggableFormat');
        //console.log('dragstart event is activated!'); 
        console.log(drgStart);
        
    });
    
});
//DRAGEND
draggableElement.forEach(element=>{
    element.addEventListener('dragend', drgendevt=>{
        drgendevt.currentTarget.classList.remove('draggableFormat')
    })
})