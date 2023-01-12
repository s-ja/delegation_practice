


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


const navigation = getNode('.navigation');
// const list = getNodes('.navigation > li')
const visualImage = getNode('.visual img');


function makeArray(arrayLike){
  // Array.from(list)
  // let arr = [... list]
  // Array.prototype.slice.call(list)
  return Array.from(arrayLike)
}


// console.log(navigation);

function handler(e) {
  
  let target = e.target.closest('li');

  if(!target) return;

  
  let list = makeArray(navigation.children)
  // let arr = makeArray(list)

  let index = attr(target,'data-index')




  // console.log(target);

  // Array.from(list)
  // let arr = [... list]
  // Array.prototype.slice.call(list)
  
  
  // console.log(navigation.children);
  // console.log(list);
  
  list.forEach(item =>
    // console.log(item);
    removeClass(item,'is-active')
  );
  
  addClass(target,'is-active')
  // let dataList = target.getAttribute('data-index')
  // console.log(dataList);

  // console.log(target.dataset.index);
  // console.log(attr(target,'data-index'));
  console.log(index);
  console.log(visualImage);
  console.log(attr(visualImage, 'src'));

  // attr(visualImage, 'src', `./assets/part01/visual${index}.jpg`)
  attr(visualImage, 'src', `./assets/part01/${data[index-1].src}`)
  attr(visualImage, 'alt', data[index-1].alt)
  
  
}

navigation.addEventListener('click',handler);













// const li_1 = getNode('.navigation > li:nth-child(1)')
// const li_2 = getNode('.navigation > li:nth-child(2)')

// li_1.addEventListener('click',(e)=>{
// })
















