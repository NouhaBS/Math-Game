var play=false;
var i=60;
var temps;
var positionCorrect;
var score=0;
var levels=1;
var level1=document.getElementById(levels);
level1.style.background="#8ec7f2";	
var end=document.getElementById('end');
var nbcorrect=0;
var tipValue=25;
var cpt=1;
function addition()
{ 


	
if (play==true)
{
	location.reload();
	play=false;

}
	startTime();
	var op=document.getElementById('operateur').innerHTML="+";
	
	QuestionAdd();
	
	play=true;
}

/*button addition*/
var btnAddition=document.getElementById('add');
btnAddition.addEventListener("click",addition);


/*button answer select*/


var btnanswer3=document.getElementById('pos3');
btnanswer3.addEventListener("click", function() {
    verif(3);
});

var btnanswer2=document.getElementById('pos2');
btnanswer2.addEventListener("click", function() {
    verif(2);
});


var btnanswer1=document.getElementById('pos1');
btnanswer1.addEventListener("click", function() {
    verif(1);
});






/*this is the timer start*/


function startTime(){
document.getElementById('compteur').innerHTML =i+" s";
 
i--;
temps=setTimeout(startTime, 1000);	
if (i<0) {
clearTimeout(temps);	
}
else if (i<=30) {
	var cp=document.getElementById('compteur');
cp.style.color="red";
}


}




function QuestionAdd(){
	if (levels>=10) {

end.style.display="unset";

if (nbcorrect==9) {
end.innerHTML+="<p>score :" +score+"</p> "+"<p>"+"<img src='images/star.png' class='star'>"+"<img src='images/star.png' class='star'>"+"</p>"
	}

	
	else if (nbcorrect>5 && nbcorrect<9) {
		end.innerHTML+="<p>score :" +score+"</p> "+"<p>"+"<img src='images/star.png' class='star'>"+"<img src='images/starb.png' class='star'>"+"</p>"
	}

else{
	end.innerHTML+="<p>score :" +score+"</p> "+"<p>"+"<img src='images/starb.png' class='star'>"+"<img src='images/starb.png' class='star'>"+"</p>"
}

}
var b =document.getElementById('pos1');
	b.style.display="unset";
	var b1 =document.getElementById('pos2');
	b1.style.display="unset";
	var b2 =document.getElementById('pos3');
	b2.style.display="unset";

	/*they are the button of the equation*/
	var nb=document.getElementById('nb1');
	var nb1=document.getElementById('nb2');

/* the button of the select*/
	var answer1=Math.floor(Math.random() * 100);
	var answer2=Math.floor(Math.random() * 100);

	var nbr=Math.floor(Math.random() * 10);  
	var nbr1=Math.floor(Math.random() * 10); 
	
	nb.innerHTML=nbr;
		nb1.innerHTML=nbr1;
	
	 resultat=nbr+nbr1;
	positionCorrect=Math.floor(Math.random() * 3)+1;

	if (positionCorrect==1)
	{
		
		document.getElementById('pos1').innerHTML=resultat;
		document.getElementById('pos2').innerHTML=answer1;
		document.getElementById('pos3').innerHTML=answer2;
	}
	else if (positionCorrect==2) {
		document.getElementById('pos2').innerHTML=resultat;
		document.getElementById('pos3').innerHTML=answer1;
		document.getElementById('pos1').innerHTML=answer2;
	}

		else if (positionCorrect==3) {
		document.getElementById('pos3').innerHTML=resultat;
		document.getElementById('pos1').innerHTML=answer1;
		document.getElementById('pos2').innerHTML=answer2;
	}


}
/*verifier si la repose juste ou non*/
function verif(val)
{
if (positionCorrect==val)
{
	document.getElementById('vrai').innerHTML="Vrai";
	i+=5;
score+=25;
nbcorrect+=1;
document.getElementById('coinText').innerHTML=score;
levels+=1;
level1=document.getElementById(levels);
level1.style.background="#8ec7f2";


}
else
{document.getElementById('vrai').innerHTML="faux";
levels+=1;
level1=document.getElementById(levels);
level1.style.background="#8ec7f2";
}
QuestionAdd();
}


function tips(){
	if (score>=tipValue) 
	{
	score-=tipValue;
	tipValue+=25;
	document.getElementById('coinText').innerHTML=score;

	
	if(cpt==1)
		{
	btntip1.style.display="none";
		cpt++;
}
else if(cpt==2)
{btntip2.style.display="none";
}
else{
	btntip3.style.display="none";
}


if (positionCorrect==1) {

	var b =document.getElementById('pos2');
	b.style.display="none";
}
else if (positionCorrect==2) {

	var b =document.getElementById('pos3');
	b.style.display="none";
}
else
 {

	var b =document.getElementById('pos1');
	b.style.display="none";
}



}
	

}


var btntip1=document.getElementById('tip1');
btntip1.addEventListener("click",tips);

var btntip2=document.getElementById('tip2');
btntip2.addEventListener("click",tips);

var btntip3=document.getElementById('tip3');
btntip3.addEventListener("click",tips);