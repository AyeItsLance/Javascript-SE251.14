
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";


    for(let i=0; i<firstDayOfWeek;i++)
    {

        str +=`<div class="day">`

        str +=`</div>`

    }


    for(let i=0; i<numberOfDaysInMonth;i++)
    {


        str +=`<div class="day">`

        

        str += i + 1
        

        str +=`</div>`

    }
    

 
      
    
    $("#results").html(str);
     

    

    






    //======================== END OF HARD CODED========================================



    
        
      
    
    $("#results").html(str);

    

    var no = document.querySelector(`#no`)


    no.addEventListener(`click`, becomeRed)

    var divs = document.getElementsByClassName(`day`);

    function becomeRed(e){


        for(var i =0; i<divs.length; i++){

            divs[i].style.background = "red"
                    
        }

    }

    var yes = document.querySelector(`#yes`)


    yes.addEventListener(`click`, becomeGreen)

    function becomeGreen(e){

        

        for(var i =0; i<divs.length; i++){

            divs[i].style.background = "green"

            
                    
        }


    }

    for(var i =0; i<divs.length; i++){

        divs[i].addEventListener(`click`, (e)=>{

            setColor(e.target)



        })


    }

var backgrounds = ["red", "green", "white"]; 
    function setColor(el) { 
        el.colorIdx = el.colorIdx || 0; 
        el.style.backgroundColor = backgrounds[el.colorIdx++ % backgrounds.length]; 
        }

    }