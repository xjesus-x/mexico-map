const aguascalientesmap = document.getElementById("path7339");
const aguascalientesinput = document.getElementById("aguascalientes");
const bajacaliforniamap = document.getElementById("path7285");
const bajacaliforniainput = document.getElementById("bajacalifornia");
const bajacaliforniasurmap = document.getElementById("path7319");
const bajacaliforniasurinput = document.getElementById("bajacaliforniasur");
const campechemap = document.getElementById("path7383");
const campecheinput = document.getElementById("campeche");
const coahuilamap = document.getElementById("path7315");
const coahuilainput = document.getElementById("coahuila");
const colimamap = document.getElementById("path7375");
const colimainput = document.getElementById("colima");
const chiapasmap = document.getElementById("path7397");
const chiapasinput = document.getElementById("chiapas");
const chihuahuamap = document.getElementById("path7297");
const chihuahuainput = document.getElementById("chihuahua");
const cdmxmap = document.getElementById("path7369");
const cdmxinput = document.getElementById("cdmx");
const durangomap = document.getElementById("path7327");
const durangoinput = document.getElementById("durango");
const guanajuatomap = document.getElementById("path7361");
const guanajuatoinput = document.getElementById("guanajuato");
const guerreromap = document.getElementById("path7393");
const guerreroinput = document.getElementById("guerrero");
const hidalgomap = document.getElementById("path7365");
const hidalgoinput = document.getElementById("hidalgo");
const jaliscomap = document.getElementById("path7371");
const jaliscoinput = document.getElementById("jalisco");
const edomexmap = document.getElementById("path7377");
const edomexinput = document.getElementById("edomex");
const michoacanmap = document.getElementById("path7387");
const michoacaninput = document.getElementById("michoacan");
const morelosmap = document.getElementById("path7379");
const morelosinput = document.getElementById("morelos");
const nayaritmap = document.getElementById("path7355");
const nayaritinput = document.getElementById("nayarit");
const nuevoleonmap = document.getElementById("path7321");
const nuevoleoninput = document.getElementById("nuevoleon");
const oaxacamap = document.getElementById("path7395");
const oaxacainput = document.getElementById("oaxaca");
const pueblamap = document.getElementById("path7385");
const pueblainput = document.getElementById("puebla");
const queretaromap = document.getElementById("path7359");
const queretaroinput = document.getElementById("queretaro");
const quintanaroomap = document.getElementById("path7381");
const quintanarooinput = document.getElementById("quintanaroo");
const slpmap = document.getElementById("path7347");
const slpinput = document.getElementById("slp");
const sinaloamap = document.getElementById("path7325");
const sinaloainput = document.getElementById("sinaloa");
const sonoramap = document.getElementById("path7289");
const sonorainput = document.getElementById("sonora");
const tabascomap = document.getElementById("path7389");
const tabascoinput = document.getElementById("tabasco");
const tamaulipasmap = document.getElementById("path7329");
const tamaulipasinput = document.getElementById("tamaulipas");
const tlaxcalamap = document.getElementById("path7367");
const tlaxcalainput = document.getElementById("tlaxcala");
const veracruzmap = document.getElementById("path7391");
const veracruzinput = document.getElementById("veracruz");
const yucatanmap = document.getElementById("path7357");
const yucataninput = document.getElementById("yucatan");
const zacatecasmap = document.getElementById("path7349");
const zacatecasinput = document.getElementById("zacatecas");

window.onload = function () {
  aguascalientesinput.oninput = cambiarcolor;
  bajacaliforniainput.oninput = cambiarcolor;
  bajacaliforniasurinput.oninput = cambiarcolor;
  campecheinput.oninput = cambiarcolor;
  coahuilainput.oninput = cambiarcolor;
  colimainput.oninput = cambiarcolor;
  chiapasinput.oninput = cambiarcolor;
  chihuahuainput.oninput = cambiarcolor;
  cdmxinput.oninput = cambiarcolor;
  durangoinput.oninput = cambiarcolor;
  guanajuatoinput.oninput = cambiarcolor;
  guerreroinput.oninput = cambiarcolor;
  hidalgoinput.oninput = cambiarcolor;
  jaliscoinput.oninput = cambiarcolor;
  edomexinput.oninput = cambiarcolor;
  michoacaninput.oninput = cambiarcolor;
  morelosinput.oninput = cambiarcolor;
  nayaritinput.oninput = cambiarcolor;
  nuevoleoninput.oninput = cambiarcolor;
  oaxacainput.oninput = cambiarcolor;
  pueblainput.oninput = cambiarcolor;
  queretaroinput.oninput = cambiarcolor;
  quintanarooinput.oninput = cambiarcolor;
  slpinput.oninput = cambiarcolor;
  sinaloainput.oninput = cambiarcolor;
  sonorainput.oninput = cambiarcolor;
  tabascoinput.oninput = cambiarcolor;
  tamaulipasinput.oninput = cambiarcolor;
  tlaxcalainput.oninput = cambiarcolor;
  veracruzinput.oninput = cambiarcolor;
  yucataninput.oninput = cambiarcolor;
  zacatecasinput.oninput = cambiarcolor;
};

function cambiarcolor(e) {
  var color = e.srcElement.value;
  switch (e.target.id) {
    case "aguascalientes":
      aguascalientesmap.style.fill = color;
      break;
    case "bajacalifornia":
      bajacaliforniamap.style.fill = color;
      break;
    case "bajacaliforniasur":
      bajacaliforniasurmap.style.fill = color;
      break;
    case "campeche":
      campechemap.style.fill = color;
      break;
    case "coahuila":
      coahuilamap.style.fill = color;
      break;
    case "colima":
      colimamap.style.fill = color;
      break;
    case "chiapas":
      chiapasmap.style.fill = color;
      break;
    case "chihuahua":
      chihuahuamap.style.fill = color;
      break;
    case "cdmx":
      cdmxmap.style.fill = color;
      break;
    case "durango":
      durangomap.style.fill = color;
      break;
    case "guanajuato":
      guanajuatomap.style.fill = color;
      break;
    case "guerrero":
      guerreromap.style.fill = color;
      break;
    case "hidalgo":
      hidalgomap.style.fill = color;
      break;
    case "jalisco":
      jaliscomap.style.fill = color;
      break;
    case "edomex":
      edomexmap.style.fill = color;
      break;
    case "michoacan":
      michoacanmap.style.fill = color;
      break;
    case "morelos":
      morelosmap.style.fill = color;
      break;
    case "nayarit":
      nayaritmap.style.fill = color;
      break;
    case "nuevoleon":
      nuevoleonmap.style.fill = color;
      break;
    case "oaxaca":
      oaxacamap.style.fill = color;
      break;
    case "puebla":
      pueblamap.style.fill = color;
      break;
    case "queretaro":
      queretaromap.style.fill = color;
      break;
    case "quintanaroo":
      quintanaroomap.style.fill = color;
      break;
    case "slp":
      slpmap.style.fill = color;
      break;
    case "sinaloa":
      sinaloamap.style.fill = color;
      break;
    case "sonora":
      sonoramap.style.fill = color;
      break;
    case "tabasco":
      tabascomap.style.fill = color;
      break;
    case "tamaulipas":
      tamaulipasmap.style.fill = color;
      break;
    case "tlaxcala":
      tlaxcalamap.style.fill = color;
      break;
    case "veracruz":
      veracruzmap.style.fill = color;
      break;
    case "yucatan":
      yucatanmap.style.fill = color;
      break;
    case "zacatecas":
      zacatecasmap.style.fill = color;
      break;
  }
}
