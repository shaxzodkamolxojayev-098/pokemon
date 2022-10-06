const $qs=function(element){
  return document.querySelector(element)
}


const $qsAll=function(element){
  return document.querySelectorAll(element)
}


const plusElement=function(tagName,className,content){
  const newElement=document.createElement(tagName);
  if(className){
    newElement.setAttribute('class', className);
  }
  if(content){
    newElement.innerHTML=`${content}`;
  }
  
  return newElement
}