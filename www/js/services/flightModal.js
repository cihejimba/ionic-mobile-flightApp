angular.module('flightsApp.services', [])
.factory('FlightModals', ['FlightModalService', function(FlightModalService){
  //All the modals are called from here
  var service = {
    showAirports: showAirports,
    showCalendar: showCalendar
  };
  
  return service;
  
  function showAirports(placeholder){
    return FlightModalService.show('/templates/flights/airportSearchModal.html', 'AirportSearchCtrl as vm', placeholder);
  }
  
  function showCalendar(placeholder) {
    return FlightModalService.show('/templates/flights/calendarModal.html', 'FlightCalendarCtrl as vm', placeholder);
  }
  
  
}]);

