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
      var text = "Interviewed for Software Engineer position a year ago | Score: 2.97";
      var text1 = "Promoted to Senior Software Engineer in the past year";
      var text2 = "Recently celebrated his 4 year work anniversary";
      $($("#search-results").children()[0]).find(".headline").css("color", "#4089ce").html(text);
      $($("#search-results").children()[1]).find(".headline").css("color", "#4089ce").html(text1);
      $($("#search-results").children()[2]).find(".headline").css("color", "#4089ce").html(text2);
      $($("#search-results").children()[0]).find(".recruiting-activity-job-applications").parent().append('<li class="recruiting-activity-feedback has-hovercard" data-track="recruiting-activity-job-applications" data-toggle="popover" data-content-template="templates/desktop/smart_search/views/search_results/recruiting_activity_job_applications_hovercard" data-container="#search-result-272324003 .recruiting-activity-job-applications" aria-haspopup="true" data-original-title="" title=""><button type="button"><li-icon aria-hidden="true" type="radar-dish-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><g class="small-icon" style="fill-opacity: 1"></g></svg></li-icon>Interview Feedback<span class="bold"></span></button></li>');
      fetch(chrome.extension.getURL('feedback.html'))
      .then((response) => response.text())
      .then((markup) => {
        $($("#search-results").children()[0]).find(".recruiting-activity-job-applications").parent().append(markup);
      })
      .catch((error) => console.log('notification FUCKED UP'));

      $($("#search-results").children()[0]).find(".related-info-row").css("overflow", "visible");
      $($("#search-results").children()[0]).find(".related-info").css("height", "30px")
      $($("#search-results").children()[0]).css("overflow", "visible");
      $('.recruiting-activity-feedback').hover(function(){
        console.log('hello')
      $feedbackPopout = $('#feedback-popout');
        if ($feedbackPopout.hasClass('active')) {
          $feedbackPopout.removeClass('active');
        } else {
          $feedbackPopout.addClass('active');
        }
    });
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