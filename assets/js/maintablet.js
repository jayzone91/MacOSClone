// Tablet
function showTime2() {
  var time2 = document.getElementById('displaytime2');
  var currentTime2 = new Date();
  time2.innerHTML = currentTime2.getHours() + ":" + doubleMinute2(currentTime2.getMinutes());
  setTimeout(showTime2, 1000);
}

showTime2();

function doubleMinute2(a) {
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
var modalAboutTab = document.getElementById("modal-about-tab");
var btnAboutTab = document.getElementById("about-tab");
var spanAboutTab = document.getElementsByClassName("close-about-tab")[0];
btnAboutTab.onclick = function () {

  modalAboutTab.style.display = "block";
}
spanAboutTab.onclick = function () {
  modalAboutTab.style.display = "none";
}

// Impressum
var modalImpressumTab = document.getElementById("modal-impressum-tab");
var btnImpressumTab = document.getElementById("impressum-tab");
var spanImpressumTab = document.getElementsByClassName("close-impressum-tab")[0];
btnImpressumTab.onclick = function () {

  modalImpressumTab.style.display = "block";
}
spanImpressumTab.onclick = function () {
  modalImpressumTab.style.display = "none";
}

// Datenschutz
var modalDatenschutzTab = document.getElementById("modal-datenschutz-tab");
var btnDatenschutzTab = document.getElementById("datenschutz-tab");
var spanDatenschutzTab = document.getElementsByClassName("close-datenschutz-tab")[0];
btnDatenschutzTab.onclick = function () {

  modalDatenschutzTab.style.display = "block";
}
spanDatenschutzTab.onclick = function () {
  modalDatenschutzTab.style.display = "none";
}

// Finder
var modalFinderTab = document.getElementById("modal-finder-tab");
var btnFinderTab = document.getElementById("finder-tab");
var spanFinderTab = document.getElementsByClassName("close-finder-tab")[0];
btnFinderTab.onclick = function () {

  modalFinderTab.style.display = "block";
}
spanFinderTab.onclick = function () {
  modalFinderTab.style.display = "none";
}

// FAQ
var modalFAQTab = document.getElementById("modal-faq-tab");
var btnFAQTab = document.getElementById("faq-tab");
var spanFAQTab = document.getElementsByClassName("close-faq-tab")[0];
btnFAQTab.onclick = function () {

  modalFAQTab.style.display = "block";
}
spanFAQTab.onclick = function () {
  modalFAQTab.style.display = "none";
}

// Referenezn
var modalReferenzenTab = document.getElementById("modal-referenzen-tab");
var btnReferenzenTab = document.getElementById("referenzen-tab");
var spanReferenzenTab = document.getElementsByClassName("close-referenzen-tab")[0];
btnReferenzenTab.onclick = function () {

  modalReferenzenTab.style.display = "block";
}
spanReferenzenTab.onclick = function () {
  modalReferenzenTab.style.display = "none";
}

// Profil
var modalProfilTab = document.getElementById("modal-profil-tab");
var btnProfilTab = document.getElementById("profil-tab");
var spanProfilTab = document.getElementsByClassName("close-profil-tab")[0];
btnProfilTab.onclick = function () {

  modalProfilTab.style.display = "block";
}
spanProfilTab.onclick = function () {
  modalProfilTab.style.display = "none";
}

// Mail
var modalMailTab = document.getElementById("modal-mail-tab");
var btnMailTab = document.getElementById("mail-tab");
var spanMailTab = document.getElementsByClassName("close-mail-tab")[0];
btnMailTab.onclick = function () {

  modalMailTab.style.display = "block";
}
spanMailTab.onclick = function () {
  modalMailTab.style.display = "none";
}

// Karten
var modalKartenTab = document.getElementById("modal-karten-tab");
var btnKartenTab = document.getElementById("karten-tab");
var spanKartenTab = document.getElementsByClassName("close-karten-tab")[0];
btnKartenTab.onclick = function () {

  modalKartenTab.style.display = "block";
}
spanKartenTab.onclick = function () {
  modalKartenTab.style.display = "none";
}

// Fotos
var modalFotosTab = document.getElementById("modal-fotos-tab");
var btnFotosTab = document.getElementById("fotos-tab");
var spanFotosTab = document.getElementsByClassName("close-fotos-tab")[0];
btnFotosTab.onclick = function () {

  modalFotosTab.style.display = "block";
}
spanFotosTab.onclick = function () {
  modalFotosTab.style.display = "none";
}

// Facetime
var modalFacetimeTab = document.getElementById("modal-facetime-tab");
var btnFacetimeTab = document.getElementById("facetime-tab");
var spanFacetimeTab = document.getElementsByClassName("close-facetime-tab")[0];
btnFacetimeTab.onclick = function () {

  modalFacetimeTab.style.display = "block";
}
spanFacetimeTab.onclick = function () {
  modalFacetimeTab.style.display = "none";
}

// Kalender
var modalKalenderTab = document.getElementById("modal-kalender-tab");
var btnKalenderTab = document.getElementById("kalender-tab");
var spanKalenderTab = document.getElementsByClassName("close-kalender-tab")[0];
btnKalenderTab.onclick = function () {

  modalKalenderTab.style.display = "block";
}
spanKalenderTab.onclick = function () {
  modalKalenderTab.style.display = "none";
}

// Notizen
var modalNotizenTab = document.getElementById("modal-notizen-tab");
var btnNotizenTab = document.getElementById("notizen-tab");
var spanNotizenTab = document.getElementsByClassName("close-notizen-tab")[0];
btnNotizenTab.onclick = function () {

  modalNotizenTab.style.display = "block";
}
spanNotizenTab.onclick = function () {
  modalNotizenTab.style.display = "none";
}

// Settings
var modalSettingsTab = document.getElementById("modal-settings-tab");
var btnSettingsTab = document.getElementById("settings-tab");
var spanSettingsTab = document.getElementsByClassName("close-settings-tab")[0];
btnSettingsTab.onclick = function () {

  modalSettingsTab.style.display = "block";
}
spanSettingsTab.onclick = function () {
  modalSettingsTab.style.display = "none";
}

// Musik
var modalMusikTab = document.getElementById("modal-musik-tab");
var btnMusikTab = document.getElementById("musik-tab");
var spanMusikTab = document.getElementsByClassName("close-musik-tab")[0];
btnMusikTab.onclick = function () {

  modalMusikTab.style.display = "block";
}
spanMusikTab.onclick = function () {
  modalMusikTab.style.display = "none";
}