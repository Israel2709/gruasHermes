
//menu activo
function changeStatus(option){
	if($(option).siblings("span:last").hasClass("expandir")){
		$(option).siblings("span:last").removeClass("expandir").addClass("comprimir");
	}else{
		$(option).siblings("span:last").removeClass("comprimir").addClass("expandir");
	}
}


function selectedOption(option){

	if($(option).closest(".bg-submenu").hasClass("active")){
		$(option).closest(".bg-submenu").removeClass("active");
		$(option).siblings(".ico").removeClass("comprimir")
		$(option).siblings(".ico").addClass("expandir");
	}else{
		$(option).closest(".bg-submenu").addClass("active");
		$(option).siblings(".ico").removeClass("expandir");
		$(option).siblings(".ico").addClass("comprimir");
		$(option).closest(".panel-submenu").siblings(".panel-submenu").find(".bg-submenu").removeClass("active");
		$(option).closest(".panel-submenu").siblings(".panel-submenu").find(".ico").removeClass("comprimir").addClass("expandir");
	}
}

function selectedOptionSubmenu(option){
	$(option).closest(".bg-last-menu").addClass("active-last-menu");
	$(option).closest(".panel-last-menu").siblings(".panel-last-menu").find(".bg-last-menu").removeClass("active-last-menu");
}

//cambio de elementos 

function changeElements(selectedOption){
	var option = $(selectedOption).text();

	if(option == 'HERRAMIENTAS'){
		$(".settings-elements").removeClass("hidden");
		$(".work-elements").addClass("hidden");
		$(selectedOption).closest("li").siblings("li").removeClass("active-elements");
		$(selectedOption).closest("li").addClass("active-elements");
		$(".btn-form-documents").removeClass("hidden");
		$(".btn-form-documents-two").addClass("hidden");
	}
	else if(option == 'EQUIPO'){
		$(selectedOption).closest("li").siblings("li").removeClass("active-elements");
		$(selectedOption).closest("li").addClass("active-elements");
		$(".work-elements").removeClass("hidden");
		$(".settings-elements").addClass("hidden");
		$(".btn-form-documents-two").removeClass("hidden");
		$(".btn-form-documents").addClass("hidden");
	}
}


function changeStatusButtonsEdit(selectedOption){
	$(".edit").addClass("status-active");
	$(".new-registry").addClass("registry-inactive");
}

function changeStatusRegister(selectedOption){
	$(".edit").removeClass("status-active");
	$(".new-registry").removeClass("registry-inactive");	
}