class Lazy {
	install(Vue, option){
		this.vm = Vue
	}

	initDirective() {
		// this.vm.directive('lazy', {
    //   bind: (el, data) => {
    //     if(this.loadingImg){
    //         el.setAttribute('src', this.loadingImg);
    //     }
    //     this.list.add({ oImg: el, path: data.value });
    //   }
    // });
    // this.vm.directive('lazy-box', {
    //   bind: el => {
    //     this.whetherHandle();
    //     el.addEventListener('scroll', this.whetherHandle.bind(this), false);
    //   }
		// });
		this.vm.initDirective('lazy', {
			bind: (el, data) => {
				console.log('el :', el);
			}
		})
	}
}