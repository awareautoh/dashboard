"use strict";

let language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
        url:  '/dashboard/language/' +  localStorage.getItem('language') + '.json',
        dataType: 'json', async: false,
        success: function (lang) { language = lang } });
    $(document).ready(function(){
        $('#Nutrition_Status').text(language["nutritionStatus"]);
    });
}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}
getLanguage();