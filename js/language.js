"use strict";

let language;
function getLanguage() {
    (localStorage.getItem('language') === null) ? setLanguage('en') : false;
    $.ajax({
        url:  'language/' +  localStorage.getItem('language') + '.json',
        dataType: 'json', async: false,
        success: function (lang) { language = lang } });

    //Revise
    $(document).ready(function(){
        //Nav Menu
        $('#nutritionStatus').text(language["nutritionStatus"]);
        $('#lsis').text(language["lsis"]);
        $('#sentinelSurvey').text(language["sentinelSurvey"]);
        $('#lecs').text(language["lecs"]);
        $('#agricultureCencus').text(language["agricultureCencus"]);
    });
}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}
getLanguage();