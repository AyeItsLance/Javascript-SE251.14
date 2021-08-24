
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
    var str = ''

    var month = document.querySelector(`#month`)


    var selectedMonth = month.value;



    //console.log(month)

    var year = document.querySelector(`#year`)

    var selectedYear = year.value;

    var monthNo = document.querySelector(`#no`)

    var selectedMonthNo = monthNo.value;

    



    

    


    //======================== HARD CODED EACH AND EVERY SINGLE DAY, MONTH, AND YEAR========================================

    if (selectedMonth == 1 && (selectedYear == 2016)){      //JANUARY


    
        
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 


        

    


    }

    if (selectedMonth == 1 && (selectedYear == 2017)){      //JANUARY
        
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`
            str += `<div onclick="setColor(this)" class="day">7</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 1 && (selectedYear == 2018)){      //JANUARY
        
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 2 && (selectedYear == 2016)){      //FEBRUARY
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 2 && (selectedYear == 2017)){      //FEBRUARY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 2 && (selectedYear == 2018)){      //FEBRUARY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 3 && (selectedYear == 2016)){      //MARCH

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 3 && (selectedYear == 2017)){      //MARCH

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 3 && (selectedYear == 2018)){      //MARCH

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 4 && (selectedYear == 2016)){      //APRIL

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 4 && (selectedYear == 2017)){      //APRIL

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>2</div>`
            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 4 && (selectedYear == 2018)){      //APRIL

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`
            str += `<div onclick="setColor(this)" class="day">7</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 5 && (selectedYear == 2016)){      //MAY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`
            str += `<div onclick="setColor(this)" class="day">7</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 5 && (selectedYear == 2017)){      //MAY
        
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 5 && (selectedYear == 2018)){      //MAY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 6 && (selectedYear == 2016)){      //JUNE

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 6 && (selectedYear == 2017)){      //JUNE

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 6 && (selectedYear == 2018)){      //JUNE

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 7 && (selectedYear == 2016)){      //JULY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 7 && (selectedYear == 2017)){      //JULY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>2</div>`
            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 7 && (selectedYear == 2018)){      //JULY

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`
            str += `<div onclick="setColor(this)" class="day">7</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 8 && (selectedYear == 2016)){      //AUGUST
        
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 8 && (selectedYear == 2017)){      //AUGUST

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 8 && (selectedYear == 2018)){      //AUGUST

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 9 && (selectedYear == 2016)){      //SEPTEMPBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 9 && (selectedYear == 2017)){      //SEPTEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 9 && (selectedYear == 2018)){      //SEPTEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>2</div>`
            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 10 && (selectedYear == 2016)){      //OCTOBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>2</div>`
            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 10 && (selectedYear == 2017)){      //OCTOBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`
            str += `<div onclick="setColor(this)" class="day">7</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 10 && (selectedYear == 2018)){      //OCTOBER
        
        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`
            str += `<div onclick="setColor(this)" class="day">6</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 11 && (selectedYear == 2016)){      //NOVEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`
            str += `<div onclick="setColor(this)" class="day">5</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 11 && (selectedYear == 2017)){      //NOVEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`
            str += `<div onclick="setColor(this)" class="day">4</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 11 && (selectedYear == 2018)){      //NOVEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day></div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 12 && (selectedYear == 2016)){      //DECEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`
            str += `<div onclick="setColor(this)" class="day">3</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day></div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 12 && (selectedYear == 2017)){      //DECEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`
            str += `<div onclick="setColor(this)" class="day">2</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`
            str += `<div onclick="setColor(this)" class=day>9</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`
            str += `<div onclick="setColor(this)" class=day>16</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`
            str += `<div onclick="setColor(this)" class=day>23</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`
            str += `<div onclick="setColor(this)" class=day>30</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>31</div>`
            str += `<div onclick="setColor(this)" class=day></div>`
        
        str += "</div>" 
    }

    if (selectedMonth == 12 && (selectedYear == 2018)){      //DECEMBER

        str += `<div class=row>`

            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day"></div>`
            str += `<div onclick="setColor(this)" class="day">1</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>2</div>`
            str += `<div onclick="setColor(this)" class=day>3</div>`
            str += `<div onclick="setColor(this)" class=day>4</div>`
            str += `<div onclick="setColor(this)" class=day>5</div>`
            str += `<div onclick="setColor(this)" class=day>6</div>`
            str += `<div onclick="setColor(this)" class=day>7</div>`
            str += `<div onclick="setColor(this)" class=day>8</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>9</div>`
            str += `<div onclick="setColor(this)" class=day>10</div>`
            str += `<div onclick="setColor(this)" class=day>11</div>`
            str += `<div onclick="setColor(this)" class=day>12</div>`
            str += `<div onclick="setColor(this)" class=day>13</div>`
            str += `<div onclick="setColor(this)" class=day>14</div>`
            str += `<div onclick="setColor(this)" class=day>15</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>16</div>`
            str += `<div onclick="setColor(this)" class=day>17</div>`
            str += `<div onclick="setColor(this)" class=day>18</div>`
            str += `<div onclick="setColor(this)" class=day>19</div>`
            str += `<div onclick="setColor(this)" class=day>20</div>`
            str += `<div onclick="setColor(this)" class=day>21</div>`
            str += `<div onclick="setColor(this)" class=day>22</div>`

        str += "</div>"
        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>23</div>`
            str += `<div onclick="setColor(this)" class=day>24</div>`
            str += `<div onclick="setColor(this)" class=day>25</div>`
            str += `<div onclick="setColor(this)" class=day>26</div>`
            str += `<div onclick="setColor(this)" class=day>27</div>`
            str += `<div onclick="setColor(this)" class=day>28</div>`
            str += `<div onclick="setColor(this)" class=day>29</div>`

        str += "</div>"

        str += "<div class=row>"

            str += `<div onclick="setColor(this)" class=day>30</div>`
            str += `<div onclick="setColor(this)" class=day>31</div>`
        
        str += "</div>" 
    }





    //======================== END OF HARD CODED========================================


    str += "<div class=row>"

        str += "<ul>";
        str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
        str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

        str += "</ul>";
        
    str += "</div>"

    
        
      
    
    $("#results").html(str);

    

    var no = document.querySelector(`#no`)


    no.addEventListener(`click`, becomeRed)

    function becomeRed(e){

        var divs = document.getElementsByClassName(`day`);

        for(var i =0; i<divs.length; i++){

            divs[i].style.background = "red"
                    
        }

    }

    var yes = document.querySelector(`#yes`)


    yes.addEventListener(`click`, becomeGreen)

    function becomeGreen(e){

        var divs = document.getElementsByClassName(`day`);

        

        for(var i =0; i<divs.length; i++){

            divs[i].style.background = "green"

            
                    
        }


    }


    


    

   
   

  
}

var backgrounds = ["red", "green", "white"]; 
    function setColor(el) { 
        el.colorIdx = el.colorIdx || 0; 
        el.style.backgroundColor = backgrounds[el.colorIdx++ % backgrounds.length]; 
        }


