if (window == window.top) {
  console.log()
  var windowResizeTimeout,
  notificationNavItemId = 'nav-tools-notifications',
  navContainerClass = 'tools',
  $notificationsPopout,
  $navContainer,
  $notificationsNavItemLink;

  $(document).ready(function() {
    console.log('Current URL is ' + window.location.href);
    $notificationsNavItemLink = $(`#${notificationNavItemId}`);
    $notificationsNavItemLink.css({width: '50px'});
    $navContainer = $(`.${navContainerClass}`);
    injectNotificationsPopout();
    $(`#${notificationNavItemId}`).hover(showNotificationsPopout);
  });

  function resetNavItemUnderline() {
    const urlTopPath = window.location.pathname.match(/\/(.*?)\//);
    const route = urlTopPath && urlTopPath.length && urlTopPath[1];
    console.log('resetting: ' + route);
    if (route) {
      setTimeout(() => {
        $("#better-notifications-popout").removeClass('active');
      }, 0);
    }
  }

  function injectNotificationsPopout() {
    fetch(chrome.extension.getURL('notifications.html'))
      .then((response) => response.text())
      .then((markup) => {
        $('#nav-tools-notifications').prepend(markup);
        $notificationsPopout = $('#better-notifications-popout');
      })
      .catch((error) => console.log('notification FUCKED UP'));
  }

  function showNotificationsPopout() {
    if ($notificationsPopout) {
      if ($notificationsPopout.hasClass('active')) {
        $notificationsPopout.removeClass('active');
        if (!window.location.href.includes('notifications')) resetNavItemUnderline();
      } else {
        $notificationsPopout.addClass('active');
      }
    }
  }

  $(window).resize(function() {
    if ($notificationsPopout && $notificationsPopout.hasClass('active')) {
      //positionPopout($notificationsNavItemLink, $notificationsPopout);
    }
  });

  function positionPopout($navEl, $popoutEl) {
    const { top, left, height, width } = $navEl[0].getBoundingClientRect();

    const topPosn = top + height; // 10px is height of the arrow
    const leftPosn = left + (width / 2) - (4 * $popoutEl.outerWidth());

  }
}
