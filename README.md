<style> 

*{
  font-family: sans-serif;
}

.contet{
  text-align: justify;
  letter-spacing: 0.05em;
  padding: 0 0 2% 0;
}

h3{
  padding: 2% 0;
}

p{
  font-size: 1.1rem;}

::marker {
  content: "» ";
  font-size: 1.5em;
  
  --hue: 0;
  color: hsl(var(--hue) 50% 50%);
}

li {
  padding-inline-start: 1ch;
}

li:nth-child(2)::marker { --hue: 50; font-size: 2em;  }
li:nth-child(3)::marker { --hue: 100; font-size: 2em; }
li:nth-child(4)::marker { --hue: 200; font-size: 2em; }
li:nth-child(5)::marker { --hue: 200; font-size: 1.5em; }

.stepByStep{
  width: 100%;
  margin: 0 auto;
  padding: 0 2%;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(to right, darkblue, darkorchid) 1;
}

footer{
  padding: 1%; 
  font-size: 1.1rem;
  font-weight: 600;
}

</style>

<h1 align="center"> API nodejs </h1>

<div class="contet">
<h4>Welcome to my first REST API !!</h4>
<span id="contetbody">
Here you will find a simple CRUD for lending books to people. 
This project is a REST API using nodeJS and mongoDB. 
</span>

<h3>Required:</h3>
<li>NodeJs</li>
<li>Express</li>
<li>MongoDB</li>

</div>

<div class="stepByStep"> 
<h3>How to use this API:</h3>
<p> 1º - Clone the project</p>
<p> 2º - Install dependencies:<b> npm install</b></p>
<p> 3º - Connect to your mongoDb account:<b> use file .env.example</b> </p>
<p> 4º - Run project: <b>npm start </b></p>
</div>

<footer>
 Your contribution will be welcome!
</footer>


