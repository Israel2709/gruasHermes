//menu activo
function selectedOption(option){
	$(option).closest(".bg-submenu").addClass("active");
	$(option).siblings(".ico").removeClass("expandir");
	$(option).siblings(".ico").addClass("comprimir");
	//$(".panel-submenu").find(".bg-submenu").removeClass("active");
}

function selectedOptionSubmenu(option){
	$(option).closest(".bg-last-menu").addClass("active-last-menu");
	//$(option).closest(".bg-submenu").removeClass("active");
}


