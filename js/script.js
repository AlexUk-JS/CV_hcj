// *** show/hide menu *** top *** //
let buttonsArr = [...document.querySelectorAll('.button__choose')];

buttonsArr.forEach(function (item) {
    item.addEventListener('click', function () {
        let c = item.dataset.chapter;
		

        buttonsArr.forEach(element => element.classList.remove('buttonChoosed'));
        let choosedButton = document.querySelectorAll(`.button__choose[data-chapter="${c}"]`)[0];
		choosedButton.classList.add('buttonChoosed');
        

        let toggleArr = document.querySelectorAll(`.textBlock`);
        toggleArr.forEach(element => element.classList.add('hidden'));
        let toggle = document.querySelectorAll(`.textBlock[data-chapter="${c}"]`)[0];
        toggle.classList.remove('hidden');

    })
})
// *** show/hide menu *** bottom *** //


// *** printing text animation *** top //
function printText(el){
	let letterTimeout = 20;
	let text = el.innerHTML;
	let i = 1;
	let print__fn = function(){
			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout(arguments.callee, letterTimeout);
			}
			i++;
		}
	print__fn() 
};
let el = document.querySelector('.main__space__intro__top__text');
// printText(el);
// *** printing text animation *** bottom //


var exampleModal = document.getElementById('exampleModal');

exampleModal.addEventListener('shown.bs.modal', function () {
  snakeStart();
})