// index.js
const audioPlayer = document.getElementById('audio-player');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const resultMessage = document.getElementById('result-message');
const birdNameDropdown = document.getElementById('bird-name');
const showResultButton = document.getElementById('show-solution-button');
const intermigButton = document.getElementById('intermig-button')
const totsOcellsButton = document.getElementById('tots-button')
const inicialsButton = document.getElementById('noob-button')

const all_sounds = [
  { name: 'Àguila calçada', file: 'aguilaCalçada.mp3'},
  { name: 'Àguila cuabarrada', file: 'aguilaCuabarrada.mp3'},
  { name: 'Àguila daurada', file: 'aguilaDaurada.mp3'},
  { name: 'Àguila marcenca', file: 'aguilaMarcenca.mp3'},
  { name: 'Ànec collverd', file: 'anecCollverd.mp3'},
  { name: 'Ànec cuallarg', file: 'anecCuallarg.mp3'},
  { name: 'Ànec cullerot', file: 'anecCullerot.mp3'},
  { name: 'Ànec grisset', file: 'anecGrisset.mp3'},
  { name: 'Ànec xiulador', file: 'anecXiulador.mp3'},
  { name: 'Òliba', file: 'oliba.mp3'},
  { name: 'Abellerol', file: 'abellerol.mp3'},
  { name: 'Agró blanc', file: 'agroBlanc.mp3'},
  { name: 'Agró roig', file: 'agroRoig.mp3'},
  { name: 'Aligot comú', file: 'aligotComu.mp3'},
  { name: 'Aligot vesper', file: 'aligotVesper.mp3'},
  { name: 'Alosa vulgar', file: 'alosaVulgar.mp3'},
  { name: 'Arpella vulgar', file: 'arpellaVulgar.mp3'},
  { name: 'Astor', file: 'astor.mp3'},
  { name: 'Aufrany', file: 'aufrany.mp3'},
  { name: 'Ballester', file: 'ballester.mp3'},
  { name: 'Balquer', file: 'balquer.mp3'},
  { name: 'Batallaire', file: 'batallaire.mp3'},
  { name: "Bec d'alena", file: 'becdAlena.mp3'},
  { name: 'Bec de corall senegalès', file: 'becDeCorallSenegales.mp3'},
  { name: 'Becadell comú', file: 'becadellComu.mp3'},
  { name: 'Bec planer', file: 'becPlaner.mp3'},
  { name: 'Becut', file: 'becut.mp3'},
  { name: 'Bernat pescaire', file: 'bernatPescaire.mp3'},
  { name: 'Bitxac comú', file: 'bitxacComu.mp3'},
  { name: 'Bitxac rogenc', file: 'bitxacRogenc.mp3'},
  { name: 'Blauet', file: 'blauet.mp3' },
  { name: 'Boscarla de canyar', file: 'boscarlaDeCanyar.mp3' },
  { name: 'Boscarla de joncs', file: 'boscarlaDeJoncs.mp3' },
  { name: 'Botxí meridional', file: 'botxiMeridional.mp3' },
  { name: 'Bruel', file: 'bruel.mp3' },
  { name: 'Còlit gris', file: 'colitGris.mp3' },
  { name: 'Còlit ros', file: 'colitRos.mp3' },
  { name: 'Cabussó collnegre', file: 'cabussoCollnegre.mp3' },
  { name: 'Cabusset', file: 'cabusset.mp3' },
  { name: 'Cadernera', file: 'cadernera.mp3' },
  { name: 'Calàbria agulla', file: 'calabriaAgulla.mp3' },
  { name: 'Calàbria grossa', file: 'calabriaGrossa.mp3' },
  { name: 'Cames llargues', file: 'camesLlargues.mp3' },
  { name: 'Capó reial', file: 'capoReial.mp3' },
  { name: 'Capsigrany', file: 'capsigrany.mp3' },
  { name: 'Cargolet', file: 'cargolet.mp3' },
  { name: 'Cercavores', file: 'cercavores.mp3' },
  { name: 'Cigne mut', file: 'cigneMut.mp3' },
  { name: 'Cigonya blanca', file: 'cigonyaBlanca.mp3' },
  { name: 'Cigonya negra', file: 'cigonyaNegra.mp3' },
  { name: 'Cogullada vulgar', file: 'cogulladaVulgar.mp3' },
  { name: 'Colltort', file: 'colltort.mp3' },
  { name: 'Colom roquer', file: 'colomRoquer.mp3' },
  { name: 'Corb', file: 'corb.mp3' },
  { name: 'Corb marí emplomallat', file: 'corbMariEmplomallat.mp3' },
  { name: 'Corb marí gros', file: 'corbMariGros.mp3' },
  { name: 'Cornella negra', file: 'cornellaNegra.mp3' },
  { name: 'Corriol camanegre', file: 'corriolCamanegre.mp3' },
  { name: 'Corriol anellat petit', file: 'corriolAnellatPetit.mp3' },
  { name: 'Cotoliu', file: 'cotoliu.mp3' },
  { name: 'Cotxa blava', file: 'cotxaBlava.mp3' },
  { name: 'Cotxa cua-roja', file: 'cotxaCuaRoja.mp3' },
  { name: 'Cotxa fumada', file: 'cotxaFumada.mp3' },
  { name: 'Cruixidell', file: 'cruixidell.mp3' },
  { name: 'Cucut', file: 'cucut.mp3' },
  { name: 'Cucut reial', file: 'cucutReial.mp3' },
  { name: 'Cuereta blanca Vulgar', file: 'cueretaBlancaVulgar.mp3' },
  { name: 'Cuereta groga', file: 'cueretaGroga.mp3' },
  { name: 'Cuereta torrentera', file: 'cueretaTorrentera.mp3' },
  { name: 'Duc', file: 'duc.mp3' },
  { name: 'Durbec', file: 'durbec.mp3' },
  { name: 'Enganyapastors', file: 'enganyapastors.mp3' },
  { name: 'Escorxador', file: 'escorxador.mp3' },
  { name: 'Esparver cendrós', file: 'esparveCendros.mp3' },
  { name: "Esparver d'espatlles negres", file: 'esparverEspatllesNegres.mp3' },
  { name: 'Esparver vulgar', file: 'esparverVulgar.mp3' },
  { name: 'Esplugabous', file: 'esplugabous.mp3' },
  { name: 'Estornell negre', file: 'estornellNegre.mp3' },
  { name: 'Estornell vulgar', file: 'estornellVulgar.mp3' },
  { name: 'Faisà', file: 'faisa.mp3' },
  { name: 'Falcó cama-Roig', file: 'falcoCamaRoig.mp3' },
  { name: 'Falcó mostatxut', file: 'falcoMostatxut.mp3' },
  { name: 'Falcó pelegrí', file: 'falcoPelegri.mp3' },
  { name: 'Falciot negre', file: 'falciotNegre.mp3' },
  { name: 'Falciot pàl·lid', file: 'falciotPalid.mp3' },
  { name: 'Flamenc', file: 'flamenc.mp3' },
  { name: 'Fotja vulgar', file: 'fotjaVulgar.mp3' },
  { name: 'Fredeluga', file: 'fredeluga.mp3' },
  { name: 'Gafarró', file: 'gafarro.mp3' },
  { name: 'Gaig', file: 'gaig.mp3' },
  { name: 'Gaig blau', file: 'gaigBlau.mp3' },
  { name: 'Gall fer', file: 'gallFer.mp3' },
  { name: 'Gamarús', file: 'gamarus.mp3' },
  { name: 'Gamba roja pintada', file: 'gambaRojaPintada.mp3' },
  { name: 'Gamba verda', file: 'gambaVerda.mp3' },
  { name: 'Ganga', file: 'ganga.mp3' },
  { name: 'Garsa', file: 'garsa.mp3' },
  { name: 'Garsa de mar', file: 'garsaDeMar.mp3' },
  { name: 'Gavià argentat', file: 'gaviaArgentat.mp3' },
  { name: 'Gavià fosc', file: 'gaviaFosc.mp3' },
  { name: 'Gavina capblanca', file: 'gavinaCapblanca.mp3' },
  { name: 'Gavina capnegra', file: 'gavinaCapnegra.mp3' },
  { name: 'Gavina corsa', file: 'gavinaCorsa.mp3' },
  { name: 'Gavina menuda', file: 'gavinaMenuda.mp3' },
  { name: 'Gavina riallera', file: 'gavinaRiallera.mp3' },
  { name: 'Gralla', file: 'gralla.mp3' },
  { name: 'Gralla de bec groc', file: 'grallaDeBecGroc.mp3' },
  { name: 'Gralla de bec vermell', file: 'grallaDeBecVermell.mp3' },
  { name: 'Grasset de muntanya', file: 'grassetDeMuntanya.mp3' },
  { name: 'Gratapalles', file: 'gratapalles.mp3' },
  { name: 'Griva comuna', file: 'grivaComuna.mp3' },
  { name: 'Grua', file: 'grua.mp3' },
  { name: 'Guatlla', file: 'guatlla.mp3' },
  { name: 'Hortolà', file: 'hortola.mp3' },
  { name: 'Lluer', file: 'lluer.mp3' },
  { name: 'Mallerenga blava', file: 'mallerengaBlava.mp3' },
  { name: 'Mallerenga carbonera', file: 'mallerengaCarbonera.mp3' },
  { name: 'Mallerenga cuallarga', file: 'mallerengaCuallarga.mp3' },
  { name: "Mallerenga d'aigua", file: 'mallerengadAigua.mp3' },
  { name: 'Mallerenga de bigotis', file: 'mallerengadeBigotis.mp3' },
  { name: 'Mallerenga emplomallada', file: 'mallerengaEmplomallada.mp3' },
  { name: 'Mallerenga petita', file: 'mallerengaPetita.mp3' },
  { name: 'Martinet blanc', file: 'martinetBlanc.mp3' },
  { name: 'Martinet de nit', file: 'martinetDeNit.mp3' },
  { name: 'Martinet menut', file: 'martinetMenut.mp3' },
  { name: 'Martinet ros', file: 'martinetRos.mp3' },
  { name: 'Mascarell', file: 'mascarell.mp3' },
  { name: 'Mastegatatxes', file: 'mastegatatxes.mp3' },
  { name: 'Merla', file: 'merla.mp3' },
  { name: 'Merla blava', file: 'merlaBlava.mp3' },
  { name: "Merla d'aigua", file: 'merladAigua.mp3' },
  { name: 'Milà negre', file: 'milaNegre.mp3' },
  { name: 'Milà reial', file: 'milaReial.mp3' },
  { name: 'Morell de cap roig', file: 'morellDeCapRoig.mp3' },
  { name: 'Morell de plomall', file: 'morellDePlomall.mp3' },
  { name: 'Morell xocolater', file: 'morellXocolater.mp3' },
  { name: 'Mosquiter comú', file: 'mosquiterComu.mp3' },
  { name: 'Mussol banyut', file: 'mussolBanyut.mp3' },
  { name: 'Mussol comú', file: 'mussolComu.mp3' },
  { name: 'Mussol pirinenc', file: 'mussolPirinenc.mp3' },
  { name: 'Oca egípcia', file: 'ocaEgipcia.mp3' },
  { name: 'Oca vulgar', file: 'ocaVulgar.mp3' },
  { name: 'Oreneta cua-rogenca', file: 'orenetaCuaRogenca.mp3' },
  { name: 'Oreneta cuablanca', file: 'orenetaCuaBlanca.mp3' },
  { name: 'Oreneta de ribera', file: 'orenetaDeRibera.mp3' },
  { name: 'Oreneta comuna', file: 'orenetaComuna.mp3' },
  { name: 'Oriol', file: 'oriol.mp3' },
  { name: 'Pòlit cantaire', file: 'politCantaire.mp3' },
  { name: 'Papamosques gris', file: 'papamosquesGris.mp3' },
  { name: 'Pardal comú', file: 'pardalComu.mp3' },
  { name: 'Pardal de bardissa', file: 'pardalDeBardissa.mp3' },
  { name: 'Pardal roquer', file: 'pardalRoquer.mp3' },
  { name: 'Pardal xarrec', file: 'pardalXarrec.mp3' },
  { name: 'Passerell comú', file: 'passerellComu.mp3' },
  { name: 'Pela-roques', file: 'pelaRoques.mp3' },
  { name: 'Perdiu roja', file: 'perdiuRoja.mp3' },
  { name: 'Pica-soques blau', file: 'picaSoquesBlau.mp3' },
  { name: 'Picot garser gros', file: 'picotGarserGros.mp3' },
  { name: 'Picot garser mitjà', file: 'picotGarserMitja.mp3' },
  { name: 'Picot garser petit', file: 'picotGarserPetit.mp3' },
  { name: 'Picot negre', file: 'picotNegre.mp3' },
  { name: 'Picot verd', file: 'picotVerd.mp3' },
  { name: 'Pigre gris', file: 'pigreGris.mp3' },
  { name: 'Pinsà borroner', file: 'pinsaBorroner.mp3' },
  { name: 'Pinsà comú', file: 'pinsaComu.mp3' },
  { name: 'Pinsà mec', file: 'pinsaMec.mp3' },
  { name: 'Pit-roig', file: 'pitroig.mp3' },
  { name: 'Piula dels arbres', file: 'piulaDelsArbres.mp3' },
  { name: 'Polla blava', file: 'pollaBlava.mp3' },
  { name: "Polla d'aigua", file: 'polladAigua.mp3' },
  { name: 'Puput', file: 'puput.mp3' },
  { name: 'Rascló', file: 'rasclo.mp3' },
  { name: 'Raspinell comú', file: 'raspinellComu.mp3' },
  { name: 'Reietó', file: 'reieto.mp3' },
  { name: 'Remena-rocs', file: 'remenarocs.mp3' },
  { name: 'Repicatalons', file: 'repicatalons.mp3' },
  { name: 'Roquerol', file: 'roquerol.mp3' },
  { name: 'Rossinyol comú', file: 'rossinyolComu.mp3' },
  { name: 'Rossinyol bord', file: 'rossinyolBord.mp3' },
  { name: 'Siboc', file: 'siboc.mp3' },
  { name: 'Sisó', file: 'siso.mp3' },
  { name: 'Siseta', file: 'siseta.mp3' },
  { name: 'Sit negre', file: 'sitNegre.mp3' },
  { name: 'Tètol cuanegre', file: 'tetolCuaNegre.mp3' },
  { name: 'Tórtora eruasiàtica', file: 'tortoraEurasiatica.mp3' },
  { name: 'Tórtora turca', file: 'tortoraTurca.mp3' },
  { name: 'Tallarol capnegre', file: 'tallarolCapnegre.mp3' },
  { name: 'Tallarol de casquet', file: 'tallaroldeCasquet.mp3' },
  { name: 'Tallarol de garriga', file: 'tallaroldeGarriga.mp3' },
  { name: 'Tallarol gros', file: 'tallarolGros.mp3' },
  { name: 'Teixidor', file: 'teixidor.mp3' },
  { name: 'Territ de Temminck', file: 'territdeTemminck.mp3' },
  { name: 'Territ menut', file: 'territMenut.mp3' },
  { name: 'Territ pectoral', file: 'territPectoral.mp3' },
  { name: 'Territ variant', file: 'territVariant.mp3' },
  { name: 'Titella', file: 'titella.mp3' },
  { name: 'Tord comú', file: 'tordComu.mp3' },
  { name: 'Torlit', file: 'torlit.mp3' },
  { name: 'Trencalòs', file: 'trencalos.mp3' },
  { name: 'Trencapinyes', file: 'trencaPINYES.mp3' },
  { name: 'Trist', file: 'trist.mp3' },
  { name: 'Tudó', file: 'tudo.mp3' },
  { name: 'Valona', file: 'valona.mp3' },
  { name: 'Verderola', file: 'verderola.mp3' },
  { name: 'Verdum', file: 'verdum.mp3' },
  { name: 'Voltor comú', file: 'voltorComu.mp3' },
  { name: 'Voltor negre', file: 'voltorNegre.mp3' },
  { name: 'Xarrasclet', file: 'xarrasclet.mp3' },
  { name: 'Xarxet comú', file: 'xarxetComu.mp3' },
  { name: 'Xatrac becllarg', file: 'xatracBecllarg.mp3' },
  { name: 'Xatrac comú', file: 'xatracComu.mp3' },
  { name: 'Xibec', file: 'xibec.mp3' },
  { name: 'Xivita', file: 'xivita.mp3' },
  { name: 'Xivitona', file: 'xivitona.mp3' },
  { name: 'Xoriguer comú', file: 'xoriguerComu.mp3' },
  { name: 'Xoriguer Petit', file: 'xoriguerPetit.mp3' },
  { name: 'Xot', file: 'xot.mp3' }
];

const intermig = [
  { name: 'Ànec collverd', file: 'anecCollverd.mp3'},
  { name: 'Ànec grisset', file: 'anecGrisset.mp3'},
  { name: 'Òliba', file: 'oliba.mp3'},
  { name: 'Abellerol', file: 'abellerol.mp3'},
  { name: 'Agró blanc', file: 'agroBlanc.mp3'},
  { name: 'Aligot comú', file: 'aligotComu.mp3'},
  { name: 'Ballester', file: 'ballester.mp3'},
  { name: 'Balquer', file: 'balquer.mp3'},
  { name: 'Bernat pescaire', file: 'bernatPescaire.mp3'},
  { name: 'Bitxac comú', file: 'bitxacComu.mp3'},
  { name: 'Blauet', file: 'blauet.mp3' },
  { name: 'Bruel', file: 'bruel.mp3' },
  { name: 'Cabusset', file: 'cabusset.mp3' },
  { name: 'Cadernera', file: 'cadernera.mp3' },
  { name: 'Calàbria agulla', file: 'calabriaAgulla.mp3' },
  { name: 'Cames llargues', file: 'camesLlargues.mp3' },
  { name: 'Capó reial', file: 'capoReial.mp3' },
  { name: 'Capsigrany', file: 'capsigrany.mp3' },
  { name: 'Cargolet', file: 'cargolet.mp3' },
  { name: 'Cames llargues', file: 'camesLlargues.mp3' },
  { name: 'Capó reial', file: 'capoReial.mp3' },
  { name: 'Capsigrany', file: 'capsigrany.mp3' },
  { name: 'Cargolet', file: 'cargolet.mp3' },
  { name: 'Cogullada Vulgar', file: 'cogulladaVulgar.mp3' },
  { name: 'Colom roquer', file: 'colomRoquer.mp3' },
  { name: 'Corb', file: 'corb.mp3' },
  { name: 'Cornella negra', file: 'cornellaNegra.mp3' },
  { name: 'Cotxa fumada', file: 'cotxaFumada.mp3' },
  { name: 'Cruixidell', file: 'cruixidell.mp3' },
  { name: 'Cucut', file: 'cucut.mp3' },
  { name: 'Cuereta blanca vulgar', file: 'cueretaBlancaVulgar.mp3' },
  { name: 'Duc', file: 'duc.mp3' },
  { name: 'Durbec', file: 'durbec.mp3' },
  { name: 'Esplugabous', file: 'esplugabous.mp3' },
  { name: 'Estornell vulgar', file: 'estornellVulgar.mp3' },
  { name: 'Falciot negre', file: 'falciotNegre.mp3' },
  { name: 'Flamenc', file: 'flamenc.mp3' },
  { name: 'Fotja vulgar', file: 'fotjaVulgar.mp3' },
  { name: 'Fredeluga', file: 'fredeluga.mp3' },
  { name: 'Gafarró', file: 'gafarro.mp3' },
  { name: 'Gaig', file: 'gaig.mp3' },
  { name: 'Gaig blau', file: 'gaigBlau.mp3' },
  { name: 'Gamarús', file: 'gamarus.mp3' },
  { name: 'Garsa', file: 'garsa.mp3' },
  { name: 'Gavià argentat', file: 'gaviaArgentat.mp3' },
  { name: 'Gavina capnegra', file: 'gavinaCapnegra.mp3' },
  { name: 'Gavina riallera', file: 'gavinaRiallera.mp3' },
  { name: 'Gralla', file: 'gralla.mp3' },
  { name: 'Grua', file: 'grua.mp3' },
  { name: 'Mallerenga blava', file: 'mallerengaBlava.mp3' },
  { name: 'Mallerenga carbonera', file: 'mallerengaCarbonera.mp3' },
  { name: 'Martinet blanc', file: 'martinetBlanc.mp3' },
  { name: 'Merla', file: 'merla.mp3' },
  { name: 'Mosquiter comú', file: 'mosquiterComu.mp3' },
  { name: 'Mussol comú', file: 'mussolComu.mp3' },
  { name: 'Oca vulgar', file: 'ocaVulgar.mp3' },
  { name: 'Oreneta cuablanca', file: 'orenetaCuaBlanca.mp3' },
  { name: 'Oreneta comuna', file: 'orenetaComuna.mp3' },
  { name: 'Oriol', file: 'oriol.mp3' },
  { name: 'Pardal comú', file: 'pardalComu.mp3' },
  { name: 'Perdiu roja', file: 'perdiuRoja.mp3' },
  { name: 'Pica-soques blau', file: 'picaSoquesBlau.mp3' },
  { name: 'Picot garser gros', file: 'picotGarserGros.mp3' },
  { name: 'Picot garser petit', file: 'picotGarserPetit.mp3' },
  { name: 'Picot negre', file: 'picotNegre.mp3' },
  { name: 'Picot verd', file: 'picotVerd.mp3' },
  { name: 'Pinsà comú', file: 'pinsaComu.mp3' },
  { name: 'Pit-roig', file: 'pitroig.mp3' },
  { name: 'Polla blava', file: 'pollaBlava.mp3' },
  { name: "Polla d'aigua", file: 'polladAigua.mp3' },
  { name: 'Puput', file: 'puput.mp3' },
  { name: 'Rascló', file: 'rasclo.mp3' },
  { name: 'Raspinell comú', file: 'raspinellComu.mp3' },
  { name: 'Rossinyol comú', file: 'rossinyolComu.mp3' },
  { name: 'Rossinyol bord', file: 'rossinyolBord.mp3' },
  { name: 'Tórtora turca', file: 'tortoraTurca.mp3' },
  { name: 'Tallarol capnegre', file: 'tallarolCapnegre.mp3' },
  { name: 'Tallarol de casquet', file: 'tallaroldeCasquet.mp3' },
  { name: 'Tord comú', file: 'tordComu.mp3' },
  { name: 'Trist', file: 'trist.mp3' },
  { name: 'Tudó', file: 'tudo.mp3' },
  { name: 'Verdum', file: 'verdum.mp3' },
  { name: 'Xoriguer comú', file: 'xoriguerComu.mp3' },
  { name: 'Xot', file: 'xot.mp3' }
];

const facils = [
  { name: 'Ànec collverd', file: 'anecCollverd.mp3'},
  { name: 'Abellerol', file: 'abellerol.mp3'},
  { name: 'Aligot comú', file: 'aligotComu.mp3'},
  { name: 'Ballester', file: 'ballester.mp3'},
  { name: 'Blauet', file: 'blauet.mp3' },
  { name: 'Cabusset', file: 'cabusset.mp3' },
  { name: 'Cadernera', file: 'cadernera.mp3' },
  { name: 'Calàbria agulla', file: 'calabriaAgulla.mp3' },
  { name: 'Cigonya blanca', file: 'cigonyaBlanca.mp3' },
  { name: 'Colom roquer', file: 'colomRoquer.mp3' },
  { name: 'Corb', file: 'corb.mp3' },
  { name: 'Cucut', file: 'cucut.mp3' },
  { name: 'Cuereta blanca vulgar', file: 'cueretaBlancaVulgar.mp3' },
  { name: 'Duc', file: 'duc.mp3' },
  { name: 'Estornell vulgar', file: 'estornellVulgar.mp3' },
  { name: 'Fotja vulgar', file: 'fotjaVulgar.mp3' },
  { name: 'Gaig', file: 'gaig.mp3' },
  { name: 'Garsa', file: 'garsa.mp3' },
  { name: 'Gavià argentat', file: 'gaviaArgentat.mp3' },
  { name: 'Mallerenga blava', file: 'mallerengaBlava.mp3' },
  { name: 'Mallerenga carbonera', file: 'mallerengaCarbonera.mp3' },
  { name: 'Martinet blanc', file: 'martinetBlanc.mp3' },
  { name: 'Merla', file: 'merla.mp3' },
  { name: 'Mosquiter comú', file: 'mosquiterComu.mp3' },
  { name: 'Oca vulgar', file: 'ocaVulgar.mp3' },
  { name: 'Oreneta comuna', file: 'orenetaComuna.mp3' },
  { name: 'Oriol', file: 'oriol.mp3' },
  { name: 'Pardal comú', file: 'pardalComu.mp3' },
  { name: 'Picot verd', file: 'picotVerd.mp3' },
  { name: 'Pit-roig', file: 'pitroig.mp3' },
  { name: 'Puput', file: 'puput.mp3' },
  { name: 'Rossinyol comú', file: 'rossinyolComu.mp3' },
  { name: 'Rossinyol bord', file: 'rossinyolBord.mp3' },
  { name: 'Tórtora turca', file: 'tortoraTurca.mp3' },
  { name: 'Tord comú', file: 'tordComu.mp3' },
  { name: 'Trist', file: 'trist.mp3' },
  { name: 'Xoriguer comú', file: 'xoriguerComu.mp3' },
  { name: 'Xot', file: 'xot.mp3' }
]

sounds = all_sounds

let currentSoundIndex = Math.floor(Math.random() * sounds.length);
console.log(currentSoundIndex)
let currentSound = sounds[currentSoundIndex];
audioPlayer.src = `sounds/${currentSound.file}`;

birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');

totsOcellsButton.addEventListener('click', (event) => {
  sounds = all_sounds
  birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound.file}`;
})

intermigButton.addEventListener('click', (event) => {
  sounds = intermig
  birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound.file}`;
})

inicialsButton.addEventListener('click', (event) => {
  sounds = facils
  birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound.file}`;
})

submitButton.addEventListener('click', (event) => {
  console.log('submit button clicked');
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  const selectedBirdName = birdNameDropdown.value.toLowerCase();
  console.log(`selected bird name: ${selectedBirdName}, currentSound.name: ${currentSound.name.toLowerCase()}`);
  if (selectedBirdName === currentSound.name.toLowerCase()) {
    resultMessage.textContent = 'Correcte!';
  } else {
    resultMessage.textContent = 'Incorrecte, torna-ho a provar.';
  }
});

showResultButton.addEventListener('click', (event) => {
  resultMessage.textContent = 'La solució correcta és: ' + currentSound.name
})


nextButton.addEventListener('click', () => {
  console.log('next button clicked');
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound.file}`;
  console.log(`currentSoundIndex: ${currentSoundIndex}, currentSound: ${JSON.stringify(currentSound)}`);
});
