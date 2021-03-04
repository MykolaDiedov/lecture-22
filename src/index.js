function toggleClass(element, classNew) {

    const $element = document.getElementById(element);
    const arr = $element.className.split(' ');
    let index = arr.findIndex((e) => e === classNew);
      if (index === -1) {
        arr.push(classNew)
    } else {
        arr.splice(index, 1)
    };

    const getClass = arr.join(' ');
    $element.className = getClass
};
toggleClass('toggle', 'border')

/*-----------------------------------------------------------------------------------------*/

const $squareItems = document.querySelectorAll('.square');
$squareItems.forEach((element) => element.addEventListener('click', backgroundChangeColor));

function backgroundChangeColor(event) {
    
    const target = event.target
    let computedStyle = getComputedStyle(target);
    const $box = document.querySelector('.wrapper-box')

    if ((computedStyle.backgroundColor === 'rgb(255, 255, 255)')||(computedStyle.backgroundColor === 'rgb(255, 255, 0)')) {
        target.style.backgroundColor = 'rgb(50, 50, 255)'
        $box.append(target)
    } else if (computedStyle.backgroundColor === 'rgb(50, 50, 255)') {
        target.style.backgroundColor = 'rgb(25, 200, 25)'
        $box.append(target)
    } else if (computedStyle.backgroundColor === 'rgb(25, 200, 25)') {
        target.style.backgroundColor = 'rgb(255, 255, 0)'
        $box.append(target)
    }
};
