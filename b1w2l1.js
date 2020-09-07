/**
author: Dennis van Giessen
education: Software Developer
*/

function start()
{
	let firstName = prompt("Vul je voornaam in");
	let surName = prompt("Vul je achternaam in");
	let age = Number(prompt("Vul je leeftijd in"));

	if(!firstName || !surName)
	{
		document.write("Voer a.u.b. een geldige naam in.");
		return;
	}

	if(!Number.isInteger(age))
		document.write("Vul a.u.b. een nummer in bij je leeftijd.")
	else
		document.write("Dus je naam is " + firstName + " " + surName + " en je leeftijd is " + age + " jaar.");
	document.write("<br>");
	document.write("<br>");
}

start();