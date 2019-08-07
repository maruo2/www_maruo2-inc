function handleOrderLinkClicks() {
  if($("#rdkSelectCountryForOrder").val()=="Japan") {
    window.open('https://theta360.shop/?pid=129217578');
  } else {
    // not available
  }
  ga('send', 'event', {
    eventCategory: 'ORDER',
    eventAction: 'ShippingCountry',
    eventLabel: $("#rdkSelectCountryForOrder").val(),
  });
}
