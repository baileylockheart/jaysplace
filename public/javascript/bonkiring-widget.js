var sites = [
  'https://bonkiscoolsite.neocities.org',
  'https://mfdook.neocities.org/',
  'https://foreverliketh.is/',
  'https://keksware.neocities.org',
  'https://ttt6457.neocities.org/',
  'https://fin600.neocities.org/',
  'https://rigor-mortis.neocities.org/',
  'https://thecozy.cat/',
  'https://byori.neocities.org/',
  'https://shenaniganery.neocities.org/',
  'https://crashtestdummy.neocities.org/',
  'https://mormoroi.com/',
  'https://brisray.com/',
  'https://milkyway.moe/',
  'https://epic1.neocities.org/',
  'https://oerrorpage.neocities.org/',
  'https://stupidsketchbook.neocities.org/',
  'https://coffinsleeper.neocities.org/',
  'https://pinkribbonsite.neocities.org/',
  'https://acetrainermeg.neocities.org/',
  'https://baccyflap.com/',
  'https://abbys-notebook.neocities.org/',
  'https://lopster.neocities.org/',
  'https://antiquespider.neocities.org/',
  'https://kepler-16b.neocities.org/',
  'https://theabsoluterealm.com/',
  'https://scottisite.neocities.org/',
  'https://goddesstex.neocities.org/',
  'https://toriii.neocities.org/',
  'https://amalinalai.github.io/precipice',
  'https://gradientos.neocities.org/',
  'https://windigone.nekoweb.org/',
  'https://adrianotechwebsite.web.app/',
  'https://dd2476ste1.7m.pl/',
  'https://graphixbox.neocities.org/',
  'http://www.thomasmason.us/',
  'https://www.sdavidprince.space/',
  'https://boxprophet.neocities.org/',
  'https://insqueeration.neocities.org/',
  'https://johngriffin.neocities.org/',
  'https://loach.neocities.org/',
  'https://buster.nekoweb.org/',
  'https://www.floppa.cloud/',
  'https://thatguyfrankenstein.neocities.org/',
  'https://hemanfromheman.neocities.org/',
  'https://themusicisoutside.neocities.org/',
  'https://lamebrain.neocities.org/',
  'https://kyurems-webroom.neocities.org/',
  'https://edgyrabbid.neocities.org/',
  'https://beaus-silly-folder.nekoweb.org/',
  'https://agham.neocities.org/',
  'https://stickmanishere.neocities.org/',
  'https://fish.golf/',
  'https://oizyswrites.blogspot.com/',
  'https://jaysplace.neocities.org/',
  'https://laserboy.neocities.org',
  'https://pastel-skies.nekoweb.org/',
];
var ringName = 'the bonki webring';
var ringID = 'bonki-ring';
var useIndex = true;
var indexPage = 'https://bonkiscoolsite.neocities.org';
var useRandom = true;
var tag = document.getElementById(ringID);

thisSite = window.location.href;
thisIndex = null;

for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

function randomSite() {
  otherSites = sites.slice();
  otherSites.splice(thisIndex, 1);
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

indexText = ""
if (useIndex) {
  indexText = `<a href='${indexPage}'>index</a> | `;
}
randomText = ""
if (useRandom) {
  randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a> | `;
}

tag.insertAdjacentHTML('afterbegin', `
<style>
  .bonkiringdiv {
    margin: auto; 
    display: flex;  
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid #FFA500;
    border-radius: 5px;
    width: 190px;
    height: 50px;
    background-image: url("https://bonkiscoolsite.neocities.org/images/geocitystuff/backgrounds/background.gif");
    cursor: url('https://bonkiscoolsite.neocities.org/images/normalstuff/cursors/ArrowCursor.png'),auto;
  }
  .bonkiringnext {
    text-align: right;
    direction: ltr;
    font-family: sans-serif;
    font-size: 16px;
    color: #FFA500;
    font-weight: normal;
    cursor: url('https://bonkiscoolsite.neocities.org/images/normalstuff/cursors/ArrowFarCursor.png'),auto;
  }
  .bonkiringprev {
    text-align: left;
    direction: ltr;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: #FFA500;
    cursor: url('https://bonkiscoolsite.neocities.org/images/normalstuff/cursors/ArrowFarCursor.png'),auto;
  }
  .bonkiringdivbonkisite {
    color: #FFA500;
    font-size: 16px;
    cursor: url('https://bonkiscoolsite.neocities.org/images/normalstuff/cursors/ArrowFarCursor.png'),auto;
    font-family: serif;
    font-weight: normal;
  }
  .bonkiringdivp {
    color: #FFA500;
    text-align: center;
    font-family: serif;
    font-size: 16px;
    font-weight: normal;
  }
  .bonkiringlink {
    color: #FFA500;
    text-align: center;
    font-family: serif;
    font-size: 16px;
    font-weight: normal;
  }
  .titlediv {margin: 0; padding: 0; border: 0; outline: 0;}
</style>
<div class="bonkiringdiv">
  <a class="bonkiringprev" target="_top" href="https://oizyswrites.blogspot.com/"><-</a>&nbsp&nbsp
  <a class="bonkiringdivbonkisite" style="text-decoration: none;" href="https://bonkiscoolsite.neocities.org">bonki webring!</a>&nbsp&nbsp
  <a class="bonkiringnext" target="_top" href="https://laserboy.neocities.org/">-></a>
</div>
`);
//}