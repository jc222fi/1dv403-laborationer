"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		date = new Date(date);
		var dateNow = new Date();
		var birthday = new Date(dateNow.getFullYear(),date.getMonth(),date.getDate());
		var nextBirthday = new Date(birthday.getFullYear(),birthday.getMonth(),birthday.getDate());
		var oneDay = 1000*60*60*24;
		var answer = "";
		
		if(date.toDateString().length != 15){
			throw new Error("Fel format på datum");
		}
		if((birthday.getMonth()< dateNow.getMonth())||
		((birthday.getMonth()===dateNow.getMonth())&&
		(birthday.getDate()<dateNow.getDate()))){
			nextBirthday.setFullYear(nextBirthday.getFullYear()+1);
			console.log(nextBirthday);
		}
		if(birthday.getFullYear()===dateNow.getFullYear() && birthday.getMonth()===dateNow.getMonth() && birthday.getDate()===dateNow.getDate()){
			answer = 0;
			return answer;
		}
		else if(birthday.getFullYear()===dateNow.getFullYear() && birthday.getMonth()===dateNow.getMonth() && birthday.getDate()===(dateNow.getDate()+1)){
			answer = 1;
			return answer;
		}
		else{
		
			answer = Math.ceil((nextBirthday.getTime()-dateNow.getTime())/oneDay);
			return answer;
		}

			// Din kod här.


	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};