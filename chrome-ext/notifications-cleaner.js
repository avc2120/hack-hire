var srUrl = window.location.href;
console.log("HIRE HACK");
console.log(srUrl);
$(document).ready(function() {
  if (srUrl.indexOf("recruiter/smartsearch?") !== -1) {
  	setTimeout(function() {
      $('.contextual-search-history-link').addClass('hide');
      $('#left-rail').addClass('hide')
      $('#talent-pools-outlet').addClass('hide');
      $(".career-interests").addClass('hide');
      $("#smart-search-content-area").css("margin-left", "0px");
      $("#smart-search-content-area").css("width", "100%");

      window.parent.notificationsLoadComplete();
    }, 1000);
  }

});



function generateSeeAll() {

  var html = "<h3 ";
  html += "class=\"Sans-19px-black-70%-open\"";
  // html += "style=\"display: inline-block; font-size: 19px;font-family: Source Sans Pro,Helvetica,Arial,sans-serif,Hiragino Kaku Gothic Pro,Meiryo,Hiragino Sans GB W3,Noto Naskh Arabic,Droid Arabic Naskh,Geeza Pro,Simplified Arabic,Noto Sans Thai,Thonburi,Dokchampa,Droid Sans Thai,Droid Sans Fallback,-apple-system,'.SFNSDisplay-Regular',Heiti SC,Microsoft Yahei,Segoe UI;"
  // html += "color: rgba(0,0,0,.7);"
  // html += "font-weight: 400;\"

  html += ">";

  html += "Notifications";
  html += "</h3>";
  html += "<a id=\"notificationsredirect\" href=\"javascript:void(0);\" class=\"mn-invitations-preview__view-sent Sans-15px-black-55% mlA ember-view\">See All</a>";

  var div = document.createElement('div');
  div.setAttribute("style", "border-bottom: 1px solid rgb(204, 204, 204); padding: 10px 24px 9px; display: flex; align-items: center;");
  div.innerHTML = html;


  element = document.querySelector(".core-rail");

  element.insertBefore(div, element.firstChild);
  $("#notificationsredirect").click(function() {window.parent.location.href = "https://www.linkedin.com/recruiter/smartsearch?updateSearchHistory=false&decorateHits=true&decorateFacets=false&doFacetCounting=true&searchHistoryId=6831829073&resetFacets=false&searchCacheKey=193ff3d6-29bb-47ab-9116-999230cb6094%2CbGFR&searchRequestId=03366dba-d7ec-4f1f-aa18-a7ea36ea808f%2C5sek&searchSessionId=6831829073&doResultCaching=false&forceResultFromCache=false&origin=GHDS&doProjectBasedCounting=false&count=10&start=0";})
}