"use strict";

let language;
function getLanguage() {
    (localStorage.getItem('language') === null) ? setLanguage('en') : false;
    $.ajax({
        url:  'language/' +  localStorage.getItem('language') + '.json',
        dataType: 'json', async: true,
        success: function (lang) { language = lang }
    });
    //Revise
    $(document).ready(function(){
        //Nav Menu
        $('#navbarDropdownLanguage').text(language["navbarDropdownLanguage"]);
        $('#home-tab').text(language["nutritionStatus"]);
        $('#lsis-tab').text(language["lsis"]);
        $('#sentinelSurvey-tab').text(language["sentinelSurvey"]);
        $('#lecs-tab').text(language["lecs"]);
        $('#agricultureCencus-tab').text(language["agricultureCencus"]);

        //Overview of Nutrition Row
        $('#overviewOfNutrition').text(language["overviewOfNutrition"]);
        $('#textCardIcon1').text(language["textCardIcon1"]);
        $('#textCardIcon2').text(language["textCardIcon2"]);
        $('#textCardIcon3').text(language["textCardIcon3"]);
        $('#textCardIcon4').text(language["textCardIcon4"]);
    });
}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}
getLanguage();