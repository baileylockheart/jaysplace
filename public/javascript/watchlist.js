document.getElementById("watchlist").innerHTML = `
<style>
.awentry{
display:inline-block;
background-color: var(--accent);
color: var(--text);
font-size:0.8rem;
text-align:center;
padding: 0.2rem 0.5rem;
border: 2px solid var(--text);
width:18rem;
margin: 5px;}
.awentry:hover{
    transition: all .2s ease-out;
    transform: scale(1.02); 
}
.awpic{
    padding-top: 0.1rem;
    width: 100%;
}
.awentry p, .awentry h3{
text-align:center;line-height:0.5rem}
@media (max-width: 768px){
.awentry{
max-width:18rem;
width:auto;}
}
</style>
<div class="awentry">
    <h3>My Hero Academia &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/bnha.jpg">
    <p>Haven't Finished || S6 E3</p>
</div>
<div class="awentry">
    <h3>Bungo Stray Dogs &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/bsd.jpeg">
    <p>Haven't Finished || S1 E4</p>
</div>
<div class="awentry">
    <h3>Dungeon Meshi &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/dunmeshi.jpg">
    <p>Haven't Finished || S1 E13</p>
</div>
<div class="awentry">
    <h3>Jujutsu Kaisen &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/jjk.jpg">
    <p>Haven't Finished || S1 E21</p>
</div>
<div class="awentry">
    <h3>Demon Slayer &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/demonslayer.jpg">
    <p>Haven't Finished || S3 E11</p>
</div>
<div class="awentry">
    <h3>Haikyuu!! &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/haikyuu.jpg">
    <p>Finished/Caught Up || S4 E25</p>
</div>
<div class="awentry">
    <h3>Yuri!!! on Ice &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/yoi.jpg">
    <p>Finished/Caught Up || S1 E12</p>
</div>
<div class="awentry">
    <h3>Sarazanmai &star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/sarazanmai.jpg">
    <p>Finished/Caught Up || S1 E11</p>
</div>
<div class="awentry">
    <h3>Cells at Work &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/cellsatwork.jpeg">
    <p>Finished/Caught Up || S2 E8</p>
</div>
<div class="awentry">
    <h3>Sk8 The Infinity &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/sk8.jpg">
    <p>Finished/Caught Up || S1 E12</p>
</div>
<div class="awentry">
    <h3>If It's for My Daughter... &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/demonlord.jpeg">
    <p>Finished/Caught Up || S1 E12</p>
</div>
<div class="awentry">
    <h3>Death Note &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/deathnote.jpeg">
    <p>Finished/Caught Up || S1 E37</p>
</div>
<div class="awentry">
    <h3>Kotaro Lives Alone &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/kotaro.jpg">
    <p>Finished/Caught Up || S1 E10</p>
</div>
<div class="awentry">
    <h3>Food Wars &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/foodwars.jpeg">
    <p>Finished/Caught Up || S5 E13</p>
</div>
<div class="awentry">
    <h3>Given &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/given.jpeg">
    <p>Finished/Caught Up || S1 E11</p>
</div>
<div class="awentry">
    <h3>Danganronpa: The Animation &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/danganropa.jpeg">
    <p>Finished/Caught Up || S1 E13</p>
</div>
<div class="awentry">
    <h3>Banana Fish &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/bananafish.jpg">
    <p>Finished/Caught Up || S1 E24</p>
</div>
<div class="awentry">
    <h3>WAVE!! -Let's go surfing!!- &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/wave.jpg">
    <p>Finished/Caught Up || S1 E12</p>
</div>
<div class="awentry">
    <h3>Wotakoi &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/wotakoi.jpg">
    <p>Finished/Caught Up || S1 E11</p>
</div>
<div class="awentry">
    <h3>Sasaki and Miyano &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/SasakiandMiyano.jpg">
    <p>Finished/Caught Up || S1 E12</p>
</div>
<div class="awentry">
    <h3>Spy × Family &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/spyfamily.jpg">
    <p>Finished/Caught Up || S2 E12</p>
</div>
<div class="awentry">
    <h3>My Neighbor Totoro &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/totoro.jpg">
    <p>Finished Movie</p>
</div>
<div class="awentry">
    <h3>A Silent Voice &star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/silentvoice.jpg">
    <p>Finished Movie</p>
</div>
<div class="awentry">
    <h3>Chainsaw Man &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/chainsawman.jpeg">
    <p>Need to Restart || S1 E5</p>
</div>
<div class="awentry">
    <h3>Toradora &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/toradora.jpg">
    <p>Need to Restart</p>
</div>
<div class="awentry">
    <h3>Fairy Tail &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/fairytail.jpeg">
    <p>Need to Restart || S2 E?</p>
</div>
<div class="awentry">
    <h3>Attack on Titan &star;&star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/aot.jpeg">
    <p>Need to Restart || S3 E?</p>
</div>
<div class="awentry">
    <h3>The Promised Neverland &star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/tpn.jpeg">
    <p>Need to Restart || S2 E2</p>
</div>
<div class="awentry">
    <h3>Hunter × Hunter &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/hxh.jpeg">
    <p>Need to Restart</p>
</div>
<div class="awentry">
    <h3>Tsurune &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/tsurune.jpeg">
    <p>Have to Restart</p>
</div>
<div class="awentry">
    <h3>Carole and Tuesday &star;&star;&star;&star;</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/carolentuesday.jpg">
    <p>Need to Restart</p>
</div>
<div class="awentry">
    <h3>Black Clover ???</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/blackclover.jpeg">
    <p>Need to Restart || S1 E2</p>
</div>
<div class="awentry">
    <h3>Kakegurui ???</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/kakegurui.jpg">
    <p>Need to Restart</p>
</div>
<div class="awentry">
    <h3>Your Lie in April ???</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/yourlie.jpg">
    <p>Need to Restart</p>
</div>
<div class="awentry">
    <h3>Beastars ???</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/beastars.jpg">
    <p>Need to Restart</p>
</div>
<div class="awentry">
    <h3>Angel Beats ???</h3>
    <img class="awpic" src="https://file.garden/ZrZSgsrYfQXsO7QH/watchlist/angelbeats.jpeg">
    <p>Need to Restart</p>
</div>
`;
