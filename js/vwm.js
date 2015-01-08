window.onscroll = scrollevent;

//Global Variables


function scrollevent() {
    var mainHeader = document.getElementById("main-header");
	var scroled = window.pageYOffset;
	if(scroled > 105){
	mainHeader.className="sticky";
	}else{
	mainHeader.className="";
	}
			
} // END of Scroll Event Function
