function Events(){

	var defaultHTML;

    this.init = function(){

		// initKeyEvents();
        initHashEvents();
        initClickEvents();

        defaultHTML = $('#results').html();
    }


	var initHashEvents = function(){
		$( window ).on('hashchange',function() {
		    var hash = location.hash;
		    gEvents.loadFromHash(hash);
		});
	}

	var initClickEvents = function(){
		$("#results .search-link").click(function() {
		    e.preventDefault();
		    var href=$(this).attr("href");
		    gEvents.loadFromHash(href);
		});

		$("#results .about-link, #home-link, #about-link").click(function(e) {
		    e.preventDefault();
		    gEvents.loadStartPage();
		});
	}

	this.updateHash = function(hash){
        history.pushState(null, null, '#'+hash);
	}

	this.removeHash = function(){
        //history.pushState(null, null, '');
        history.pushState("", document.title, window.location.pathname + window.location.search);

	}

	this.loadFromHash = function(hash) {
	    hash = hash.substr(1);
	    if(hash.length>1) $('#results .default').hide();
	    else {gEvents.loadStartPage(); return false;}
		var plantObj = $.grep(gPlantData, function(e){ return e.id == hash })[0];
		if(plantObj === undefined) {gEvents.loadStartPage(true); return false;}
		$('.typeahead').typeahead('val', plantObj.name);
		gPlants.load(plantObj);
	}

	this.loadStartPage = function(keepHash) {
		if(!keepHash) this.removeHash(); //scroll to buddylist
		gInput.clearInput();
		gPlants.reload(defaultHTML);
	}


	// var initKeyEvents = function(){
	// 	$(document).keydown(function(e) {
	// 		switch(e.which){    
	// 		// case 27: //esc // case 37: //left arrow // case 38: //up arrow // case 39: //right arrow // case 40: //down arrow // case  9: //fall through //case 32: //space
			
	// 		// case 13: //return
	// 		//     e.preventDefault();
	// 		//     // gInput.onEnter();
	// 		// break;

	// 		default:
	// 		break;
	// 		} //switch
	// 	});
	// }

}//Events