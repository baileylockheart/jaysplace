             
var nameSelfWebring = "Jay";
var relationshipSelfWebring = "is chilling with";
var charnameSelfWebring = "Kaeya";
var seriesSelfWebring = "Genshin Impact";
var imgurlSelfWebring = "/archive/images/Kaeya.jpg";

var templateWebring = document.createElement("selfinsertwebring");
 templateWebring.innerHTML = "<style>#templateWebring a {color: #BF3C8E; font-weight:bold}#templateWebring a:hover{font-weight:bold; color:#A43379}#templateWebring {width:170px !important; text-align:center !important; height:200px !important; border:2px solid #DD28A7 !important; margin: auto !important; background-image:url('/archive/images/bg.png'); background-size:cover}#webringiconbox {border:2px solid #DD28A7 !important; position:relative !important; overflow:hidden !important; height:85px !important; width:85px !important; left:41px !important; padding:0px !important; margin:0px !important; margin-top:8px !important; box-sizing:content-box !important; max-width:100% !important; justify-content:start !important; display:block !important; clear:none !important}#iconWebring {width:85px !important; overflow:hidden !important; height:85px !important; margin:0px !important; padding:0px !important; box-sizing:content-box !important}#webringdescbox {width:150px !important; rheight:80px !important; margin-left:10px !important; margin-top:6px !important; border:1px dashed #DD28A7 !important}#webringdesc{line-height: 1.05rem !important; font-weight:normal !important; padding:2px !important; width:140px !important; color:#452134 !important; font-family:Dongle !important; font-size:1.15rem !important; margin:auto !important; text-align:center !important; position:relative !important; top:30px !important;  -ms-transform: translateY(-50%) !important; -webkit-transform: translateY(-50%) !important; transform: translateY(-50%) !important;}#webringlinks {line-height:normal !important; font-weight:normal !important; width:150px !important; margin:auto !important; height:23px !important; margin-top:6px !important; border:1px dashed #DD28A7 !important}#linkparaWebring {font-family:Dongle !important; color:#452134 !important; font-size:x-large !important; margin:auto !important; line-height: 1rem !important; text-align:center !important; margin-top:3px !important; padding:0px !important}</style> <div id='templateWebring'> <div id='webringiconbox'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> </div> <div id='webringdescbox'> <p id='webringdesc'> <strong>" + nameSelfWebring + "</strong> " + relationshipSelfWebring + "<br /> <strong>" + charnameSelfWebring + "</strong> from <strong>" + seriesSelfWebring + "</strong>! </p> </div> <div id='webringlinks'>	<p id='linkparaWebring'> <a href='https://sunpop.neocities.org' target='_PARENT'><</a> | <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>♥</a> | <a href='https://key404.neocities.org' target='_PARENT'>></a></p> </div> </div>"; 
  document.getElementById("selfinsertwebring").appendChild(templateWebring);  