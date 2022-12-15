window.addEventListener('load', function() {
	var in = "7.7.0";
	var on = "⌛";
	var off = "🚫";
	var versionid = document.getElementById("version");
	var btntext01 = document.getElementById("btn-text01");
	var btntext02 = document.getElementById("btn-text02");
	versionid.innerHTML = in;
	
	var AreInUpdate = false;
	var NoUnavailable = false;
	var NoAllUnavailable = true;
	
	if ( AreInUpdate === true ) {
		btntext01.innerText = on;
		btntext01.classList.remove("btn-primary")
		btntext01.classList.add("btn-dark")
		btntext01.classList.add("blocked")
    }
    if ( NoUnavailable === true ) {
    	btntext02.innerText = off;
		btntext02.classList.remove("btn-primary")
		btntext02.classList.add("btn-dark")
		btntext02.classList.add("blocked")
		}
	if ( NoAllUnavailable === true ) { 
		btntext01.innerText = off;
		btntext01.classList.remove("btn-primary")
		btntext01.classList.add("btn-dark")
		btntext01.classList.add("blocked")
		btntext02.innerText = off;
		btntext02.classList.remove("btn-primary")
		btntext02.classList.add("btn-dark")
		btntext02.classList.add("blocked")
})
