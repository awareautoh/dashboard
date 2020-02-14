"use strict";

let language;
function getLanguage() {
    (localStorage.getItem('language') === null) ? setLanguage('en') : false;
    $.ajax({
        url:  'language/' +  localStorage.getItem('language') + '.json',
        dataType: 'json', async: false,
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
    });
}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}
getLanguage();