// Handy
function showTime3() {
    var time3 = document.getElementById('displaytime3');
    var currentTime3 = new Date();
    time3.innerHTML = currentTime3.getHours() + ":" + doubleMinute3(currentTime3.getMinutes());
    setTimeout(showTime3, 1000);
  }
  
  showTime3();
  
  function doubleMinute3(a) {
    let minute;
    if (a <= 10) {
      return "0" + a;
    } else {
      return a;
    }
  }

  //////////////////////////////////////////////////////////
//////////////// Modals /////////////////////
//////////////////////////////////////////////////////////

// About
var modalAboutHandy = document.getElementById("modal-about-handy");
var btnAboutHandy = document.getElementById("about-handy");
var spanAboutHandy = document.getElementsByClassName("close-about-handy")[0];
btnAboutHandy.onclick = function () {

  modalAboutHandy.style.display = "block";
}
spanAboutHandy.onclick = function () {
  modalAboutHandy.style.display = "none";
}

// Impressum
var modalImpressumHandy = document.getElementById("modal-impressum-handy");
var btnImpressumHandy = document.getElementById("impressum-handy");
var spanImpressumHandy = document.getElementsByClassName("close-impressum-handy")[0];
btnImpressumHandy.onclick = function () {

  modalImpressumHandy.style.display = "block";
}
spanImpressumHandy.onclick = function () {
  modalImpressumHandy.style.display = "none";
}

// Datenschutz
var modalDatenschutzHandy = document.getElementById("modal-datenschutz-handy");
var btnDatenschutzHandy = document.getElementById("datenschutz-handy");
var spanDatenschutzHandy = document.getElementsByClassName("close-datenschutz-handy")[0];
btnDatenschutzHandy.onclick = function () {

  modalDatenschutzHandy.style.display = "block";
}
spanDatenschutzHandy.onclick = function () {
  modalDatenschutzHandy.style.display = "none";
}

// Finder
var modalFinderHandy = document.getElementById("modal-finder-handy");
var btnFinderHandy = document.getElementById("finder-handy");
var spanFinderHandy = document.getElementsByClassName("close-finder-handy")[0];
btnFinderHandy.onclick = function () {

  modalFinderHandy.style.display = "block";
}
spanFinderHandy.onclick = function () {
  modalFinderHandy.style.display = "none";
}

// FAQ
var modalFAQHandy = document.getElementById("modal-faq-handy");
var btnFAQHandy = document.getElementById("faq-handy");
var spanFAQHandy = document.getElementsByClassName("close-faq-handy")[0];
btnFAQHandy.onclick = function () {

  modalFAQHandy.style.display = "block";
}
spanFAQHandy.onclick = function () {
  modalFAQHandy.style.display = "none";
}

// Referenezn
var modalReferenzenHandy = document.getElementById("modal-referenzen-handy");
var btnReferenzenHandy = document.getElementById("referenzen-handy");
var spanReferenzenHandy = document.getElementsByClassName("close-referenzen-handy")[0];
btnReferenzenHandy.onclick = function () {

  modalReferenzenHandy.style.display = "block";
}
spanReferenzenHandy.onclick = function () {
  modalReferenzenHandy.style.display = "none";
}

// Profil
var modalProfilHandy = document.getElementById("modal-profil-handy");
var btnProfilHandy = document.getElementById("profil-handy");
var spanProfilHandy = document.getElementsByClassName("close-profil-handy")[0];
btnProfilHandy.onclick = function () {

  modalProfilHandy.style.display = "block";
}
spanProfilHandy.onclick = function () {
  modalProfilHandy.style.display = "none";
}

// Mail
var modalMailHandy = document.getElementById("modal-mail-handy");
var btnMailHandy = document.getElementById("mail-handy");
var spanMailHandy = document.getElementsByClassName("close-mail-handy")[0];
btnMailHandy.onclick = function () {

  modalMailHandy.style.display = "block";
}
spanMailHandy.onclick = function () {
  modalMailHandy.style.display = "none";
}

// Karten
var modalKartenHandy = document.getElementById("modal-karten-handy");
var btnKartenHandy = document.getElementById("karten-handy");
var spanKartenHandy = document.getElementsByClassName("close-karten-handy")[0];
btnKartenHandy.onclick = function () {

  modalKartenHandy.style.display = "block";
}
spanKartenHandy.onclick = function () {
  modalKartenHandy.style.display = "none";
}

// Fotos
var modalFotosHandy = document.getElementById("modal-fotos-handy");
var btnFotosHandy = document.getElementById("fotos-handy");
var spanFotosHandy = document.getElementsByClassName("close-fotos-handy")[0];
btnFotosHandy.onclick = function () {

  modalFotosHandy.style.display = "block";
}
spanFotosHandy.onclick = function () {
  modalFotosHandy.style.display = "none";
}

// Facetime
var modalFacetimeHandy = document.getElementById("modal-facetime-handy");
var btnFacetimeHandy = document.getElementById("facetime-handy");
var spanFacetimeHandy = document.getElementsByClassName("close-facetime-handy")[0];
btnFacetimeHandy.onclick = function () {

  modalFacetimeHandy.style.display = "block";
}
spanFacetimeHandy.onclick = function () {
  modalFacetimeHandy.style.display = "none";
}

// Kalender
var modalKalenderHandy = document.getElementById("modal-kalender-handy");
var btnKalenderHandy = document.getElementById("kalender-handy");
var spanKalenderHandy = document.getElementsByClassName("close-kalender-handy")[0];
btnKalenderHandy.onclick = function () {

  modalKalenderHandy.style.display = "block";
}
spanKalenderHandy.onclick = function () {
  modalKalenderHandy.style.display = "none";
}

// Notizen
var modalNotizenHandy = document.getElementById("modal-notizen-handy");
var btnNotizenHandy = document.getElementById("notizen-handy");
var spanNotizenHandy = document.getElementsByClassName("close-notizen-handy")[0];
btnNotizenHandy.onclick = function () {

  modalNotizenHandy.style.display = "block";
}
spanNotizenHandy.onclick = function () {
  modalNotizenHandy.style.display = "none";
}

// Settings
var modalSettingsHandy = document.getElementById("modal-settings-handy");
var btnSettingsHandy = document.getElementById("settings-handy");
var spanSettingsHandy = document.getElementsByClassName("close-settings-handy")[0];
btnSettingsHandy.onclick = function () {

  modalSettingsHandy.style.display = "block";
}
spanSettingsHandy.onclick = function () {
  modalSettingsHandy.style.display = "none";
}

// Musik
var modalMusikHandy = document.getElementById("modal-musik-handy");
var btnMusikHandy = document.getElementById("musik-handy");
var spanMusikHandy = document.getElementsByClassName("close-musik-handy")[0];
btnMusikHandy.onclick = function () {

  modalMusikHandy.style.display = "block";
}
spanMusikHandy.onclick = function () {
  modalMusikHandy.style.display = "none";
}