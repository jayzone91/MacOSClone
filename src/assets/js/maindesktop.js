//////////////////////////////////////////////////////////
///////////////////// Time ///////////////////////////////
//////////////////////////////////////////////////////////

// Desktop
function showTime() {
  var time = document.getElementById('displaytime');
  var currentTime = new Date();
  time.innerHTML = currentTime.getHours() + ":" + doubleMinute(currentTime.getMinutes());
  setTimeout(showTime, 1000);
}

showTime();

//////////////////////////////////////////////////////////
///////////////////// Date ///////////////////////////////
//////////////////////////////////////////////////////////

var date = document.getElementById('displaydate');

var currentDate = new Date();

var dayChar = weekday(currentDate.getDay());
var dayInt = currentDate.getDate();
var monthChar = intMonth(currentDate.getMonth());

date.innerHTML = dayChar + " " + monthChar + " " + dayInt;

//////////////////////////////////////////////////////////
//////////////// Modals Head Content /////////////////////
//////////////////////////////////////////////////////////

// About
var modalAbout = document.getElementById("modal-about");
var btnAbout = document.getElementById("about");
var spanAbout = document.getElementsByClassName("close-about")[0];
btnAbout.onclick = function() {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "block";
}
spanAbout.onclick = function () {
  modalAbout.style.display = "none";
}

// Datenschutz
var modalDatenschutz = document.getElementById("modal-datenschutz");
var btnDatenschutz = document.getElementById("datenschutz");
var spanDatenschutz = document.getElementsByClassName("close-datenschutz")[0];
btnDatenschutz.onclick = function() {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "block";
  modalAbout.style.display = "none";
}
spanDatenschutz.onclick = function () {
  modalDatenschutz.style.display = "none";
}

// Impressum
var modalImpressum = document.getElementById("modal-impressum");
var btnImpressum = document.getElementById("impressum");
var spanImpressum = document.getElementsByClassName("close-impressum")[0];
btnImpressum.onclick = function() {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "block";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanImpressum.onclick = function () {
  modalImpressum.style.display = "none";
}

//////////////////////////////////////////////////////////
//////////////// Modals Main Content /////////////////////
//////////////////////////////////////////////////////////

// Finder
var modalFinder = document.getElementById("modal-finder");
var btnFinder = document.getElementById("finder");
var spanFinder = document.getElementsByClassName("close-finder")[0];
btnFinder.onclick = function () {
  modalFinder.style.display = "block";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanFinder.onclick = function () {
  modalFinder.style.display = "none";
}


// Questionmark
var modalQuestion = document.getElementById("modal-question");
var btnQuestion = document.getElementById("question");
var spanQuestion = document.getElementsByClassName("close-question")[0];
btnQuestion.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "block";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanQuestion.onclick = function () {
  modalQuestion.style.display = "none";
}

// Safari
var modalSafari = document.getElementById("modal-safari");
var btnSafari = document.getElementById("safari");
var spanSafari = document.getElementsByClassName("close-safari")[0];
btnSafari.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "block";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanSafari.onclick = function () {
  modalSafari.style.display = "none";
}

// Messages
var modalMessage = document.getElementById("modal-message");
var btnMessage = document.getElementById("message");
var spanMessage = document.getElementsByClassName("close-message")[0];
btnMessage.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "block";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanMessage.onclick = function () {
  modalMessage.style.display = "none";
}

// Mail
var modalMail = document.getElementById("modal-mail");
var btnMail = document.getElementById("mail");
var spanMail = document.getElementsByClassName("close-mail")[0];
btnMail.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "block";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanMail.onclick = function () {
  modalMail.style.display = "none";
}

// Maps
var modalMaps = document.getElementById("modal-maps");
var btnMaps = document.getElementById("maps");
var spanMaps = document.getElementsByClassName("close-maps")[0];
btnMaps.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "block";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanMaps.onclick = function () {
  modalMaps.style.display = "none";
}

// Fotos
var modalFotos = document.getElementById("modal-fotos");
var btnFotos = document.getElementById("fotos");
var spanFotos = document.getElementsByClassName("close-fotos")[0];
btnFotos.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "block";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanFotos.onclick = function () {
  modalFotos.style.display = "none";
}

// Facetime
var modalFacetime = document.getElementById("modal-facetime");
var btnFacetime = document.getElementById("facetime");
var spanFacetime = document.getElementsByClassName("close-facetime")[0];
btnFacetime.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "block";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanFacetime.onclick = function () {
  modalFacetime.style.display = "none";
}

// Calender
var modalKalender = document.getElementById("modal-kalender");
var btnKalender = document.getElementById("kalender");
var spanKalender = document.getElementsByClassName("close-kalender")[0];
btnKalender.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "block";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanKalender.onclick = function () {
  modalKalender.style.display = "none";
}

// Notes
var modalNotes = document.getElementById("modal-notes");
var btnNotes = document.getElementById("notes");
var spanNotes = document.getElementsByClassName("close-notes")[0];
btnNotes.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "block";
  modalMusic.style.display = "none";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanNotes.onclick = function () {
  modalNotes.style.display = "none";
}

// Music
var modalMusic = document.getElementById("modal-music");
var btnMusic = document.getElementById("music");
var spanMusic = document.getElementsByClassName("close-music")[0];
btnMusic.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "block";
  modalSettings.style.display = "none";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanMusic.onclick = function () {
  modalMusic.style.display = "none";
}

// Settings
var modalSettings = document.getElementById("modal-settings");
var btnSettings = document.getElementById("settings");
var spanSettings = document.getElementsByClassName("close-settings")[0];
btnSettings.onclick = function () {
  modalFinder.style.display = "none";
  modalQuestion.style.display = "none";
  modalSafari.style.display = "none";
  modalMessage.style.display = "none";
  modalMail.style.display = "none";
  modalMaps.style.display = "none";
  modalFotos.style.display = "none";
  modalFacetime.style.display = "none";
  modalKalender.style.display = "none";
  modalNotes.style.display = "none";
  modalMusic.style.display = "none";
  modalSettings.style.display = "block";
  modalImpressum.style.display = "none";
  modalDatenschutz.style.display = "none";
  modalAbout.style.display = "none";
}
spanSettings.onclick = function () {
  modalSettings.style.display = "none";
}

//////////////////////////////////////////////////////////
///////////////////// Dropdown ///////////////////////////
//////////////////////////////////////////////////////////

var toggle;

function appleDropdown() {
  document.getElementById("appleMenu").classList.toggle("show");
}

//////////////////////////////////////////////////////////
///////////////////// Maximieren /////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
///////////////////// Shutdown ///////////////////////////
//////////////////////////////////////////////////////////

var desktop = document.getElementById("desktop");
var tablet = document.getElementById("tablet");
var handy = document.getElementById("handy");
var ausschalten = document.getElementById("ausschalten");

ausschalten.onclick = function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "black";
  document.body.style.backgroundImage = "none";
  desktop.style.display = "none";
  tablet.style.display = "none";
  handy.style.display = "none";
}

//////////////////////////////////////////////////////////
///////////////////// Onlcick ////////////////////////////
//////////////////////////////////////////////////////////

window.onclick = function (event) {
  // document.getElementById("appleMenu").classList.remove("show");
  if (event.target == modalSettings) {
    modalSettings.style.display = "none";
  }
  if (event.target == modalMusic) {
    modalMusic.style.display = "none";
  }
  if (event.target == modalNotes) {
    modalNotes.style.display = "none";
  }
  if (event.target == modalKalender) {
    modalKalender.style.display = "none";
  }
  if (event.target == modalFacetime) {
    modalFacetime.style.display = "none";
  }
  if (event.target == modalFotos) {
    modalFotos.style.display = "none";
  }
  if (event.target == modalMaps) {
    modalMaps.style.display = "none";
  }
  if (event.target == modalMail) {
    modalMail.style.display = "none";
  }
  if (event.target == modalMessage) {
    modalMessage.style.display = "none";
  }
  if (event.target == modalSafari) {
    modalSafari.style.display = "none";
  }
  if (event.target == modalQuestion) {
    modalQuestion.style.display = "none";
  }
  if (event.target == modalFinder) {
    modalFinder.style.display = "none";
  }
  if (event.target == modalAbout) {
    modalAbout.style.display = "none";
  }
  if (event.target == modalImpressum) {
    modalImpressum.style.display = "none";
  }
  if (event.target == modalDatenschutz) {
    modalDatenschutz.style.display = "none";
  }
}

//////////////////////////////////////////////////////////
///////////////////// Functions //////////////////////////
//////////////////////////////////////////////////////////

function doubleMinute(a) {
  let minute;
  if (a <= 10) {
    return "0" + a;
  } else {
    return a;
  }
}

function intMonth(a) {
  let month;
  if (a == 0) {
    month = 'Jan';
  } else
  if (a == 1) {
    month = 'Feb';
  } else
  if (a == 2) {
    month = 'Mar';
  } else
  if (a == 3) {
    month = 'Apr';
  } else
  if (a == 4) {
    month = 'May';
  } else
  if (a == 5) {
    month = 'Jun';
  } else
  if (a == 6) {
    month = 'Jul';
  } else
  if (a == 7) {
    month = 'Aug';
  } else
  if (a == 8) {
    month = 'Sep';
  } else
  if (a == 9) {
    month = 'Oct';
  } else
  if (a == 10) {
    month = 'Nov';
  } else
  if (a == 11) {
    month = 'Dec';
  }
  return month;
}

function weekday(a) {
  let day;
  if (a == 0) {
    day = 'Sun';
  } else
  if (a == 1) {
    day = 'Mon';
  } else
  if (a == 2) {
    day = 'Tue';
  } else
  if (a == 3) {
    day = 'Wed';
  } else
  if (a == 4) {
    day = 'Thu';
  } else
  if (a == 5) {
    day = 'Fri';
  } else
  if (a == 6) {
    day = 'Sat';
  }
  return day;
}