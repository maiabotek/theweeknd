//beginning of chart/audio code
//code modified and adapted from https://jsfiddle.net/macloo/p24vrczo/
const buttonOne = document.querySelector('#kiss')
const infoOne = document.querySelector('#infoOne')
const buttontwo = document.querySelector('#beauty')
const infotwo = document.querySelector('#infotwo')
const buttonthree = document.querySelector('#starboy')
const infothree = document.querySelector('#infothree')
const buttonfour = document.querySelector('#melancholy')
const infofour = document.querySelector('#infofour')
const buttonfive = document.querySelector('#after')
const infofive = document.querySelector('#infofive')
const buttonsix = document.querySelector('#dawn')
const infosix = document.querySelector('#infosix')
const players = document.querySelectorAll('audio');

//code to change Highcharts font copied from https://stackoverflow.com/questions/30050681/how-to-change-the-font-family-of-highchart-to-bootstrap-css-default-font-family
Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Montserrat'
        }
    },
    //code to display commas between thousands from https://jsfiddle.net/BlackLabel/8oumpnfL/
    lang: {
  	thousandsSep: ','
  }
   });

Highcharts.chart('chartone', {
chart: {
      type: 'bar'
  },
  title: {
      text: 'Kiss Land (2013)',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"' +
          'target="_blank">Spotify.com</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['Live For', 'Professional', 'Pretty', 'Love In The Sky', 'Kiss Land'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 50,
      max: 100,
      title: {
          text: 'Streams (millions)',
          justify: 'center'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' million'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Streams',
      data: [87.3, 69.7, 64.8, 62.8, 54.6]
  }]
});

Highcharts.chart('charttwo', {
chart: {
      type: 'bar'
  },
  title: {
      text: 'Beauty Behind the Madness (2015)',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"' +
          'target="_blank">Spotify.com</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['The Hills', 'Can\'t Feel My Face', 'Earned It', 'Often', 'In The Night'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 400,
      title: {
          text: 'Streams (millions)',
          justify: 'center'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' million'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Streams',
      data: [1704.7, 1381.3, 1275, 717.6, 425.9]
  }]
});

Highcharts.chart('chartthree', {
chart: {
      type: 'bar'
  },
  title: {
      text: 'Starboy (2016)',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"' +
          'target="_blank">Spotify.com</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['Starboy', 'I Feel It Coming', 'Die For You', 'Party Monster', 'Reminder'],
      title: {
        text: null
      }
  },
  yAxis: {
      min: 400,
      title: {
          text: 'Streams (millions)',
          justify: 'center'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' million'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Streams',
      data: [2083.4, 1382.7, 1061.8, 477.9, 432.4]
  }]
});

Highcharts.chart('chartfour', {
chart: {
      type: 'bar'
  },
  title: {
      text: 'My Dear Melancholy, (2018)',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"' +
          'target="_blank">Spotify.com</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['Call Out My Name', 'I Was Never There', 'Try Me', 'Wasted Times', 'Hurt You'],
      title: {
        text: null
      }
  },
  yAxis: {
      title: {
          text: 'Streams (millions)',
          justify: 'center'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' million'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Streams',
      data: [1813.5, 417.1, 276.4, 271.2, 220.2]
  }]
});

Highcharts.chart('chartfive', {
chart: {
      type: 'bar'
  },
  title: {
      text: 'After Hours (2020)',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"' +
          'target="_blank">Spotify.com</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['Blinding Lights', 'Save Your Tears', 'In Your Eyes', 'Heartless', 'After Hours'],
      title: {
        text: null
      }
  },
  yAxis: {
      min: 400,
      title: {
          text: 'Streams (millions)',
          justify: 'center'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' million'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Streams',
      data: [3293.9, 1300, 750.9, 593.9, 491.7]
  }]
});

Highcharts.chart('chartsix', {
chart: {
      type: 'bar'
  },
  title: {
      text: 'Dawn FM (2022)',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"' +
          'target="_blank">Spotify.com</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['Sacrifice', 'Out of Time', 'Is There Someone Else?', 'Less Than Zero', 'Gasoline'],
      title: {
        text: null
      }
  },
  yAxis: {
      min: 50,
      title: {
          text: 'Streams (millions)',
          justify: 'center'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' million'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Streams',
      data: [260.9, 224, 206.3, 124.6, 94.7]
  }]
});

//hide information as default
infoOne.style.display = 'none';
infotwo.style.display = 'none';
infothree.style.display = 'none';
infofour.style.display = 'none';
infofive.style.display = 'none';
infosix.style.display = 'none';

//trigger graph and audio for each button
buttonOne.onclick = () => {
  infoOne.style.display = 'block';
  infotwo.style.display = 'none';
  infothree.style.display = 'none';
  infofour.style.display = 'none';
  infofive.style.display = 'none';
  infosix.style.display = 'none';
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
};

buttontwo.onclick = () => {
  infotwo.style.display = 'block';
  infoOne.style.display ='none';
  infothree.style.display = 'none';
  infofour.style.display = 'none';
  infofive.style.display = 'none';
  infosix.style.display = 'none';
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
};

buttonthree.onclick = () => {
  infothree.style.display = 'block';
  infoOne.style.display ='none';
  infotwo.style.display = 'none';
  infofour.style.display = 'none';
  infofive.style.display = 'none';
  infosix.style.display = 'none';
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
};

buttonfour.onclick = () => {
  infofour.style.display = 'block';
  infoOne.style.display ='none';
  infotwo.style.display = 'none';
  infothree.style.display = 'none';
  infofive.style.display = 'none';
  infosix.style.display = 'none';
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
};

buttonfive.onclick = () => {
  infofive.style.display = 'block';
  infoOne.style.display ='none';
  infotwo.style.display = 'none';
  infothree.style.display = 'none';
  infofour.style.display = 'none';
  infosix.style.display = 'none';
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
};

buttonsix.onclick = () => {
  infosix.style.display = 'block';
  infoOne.style.display ='none';
  infotwo.style.display = 'none';
  infothree.style.display = 'none';
  infofour.style.display = 'none';
  infofive.style.display = 'none';
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
};

//beginning of quiz code
const questionOne = document.querySelector('#qOne')
const questionTwo = document.querySelector('#qTwo')
const questionThree = document.querySelector('#qThree')
const questionFour = document.querySelector('#qFour')
const questionFive = document.querySelector('#qFive')
const startButton = document.querySelector ('#startbtn')
const resetButton = document.querySelector ('#resetBtn')
const submitBtn = document.querySelector ('#submitBtn')
const resultOne = document.querySelector ('#resultOne')
const resultTwo = document.querySelector ('#resultTwo')
const resultThree = document.querySelector ('#resultThree')
const resultFour = document.querySelector ('#resultFour')
const resultFive = document.querySelector ('#resultFive')
const resultSix = document.querySelector ('#resultSix')
const quizIntro = document.querySelector ('#quizIntro')
const quiz = document.querySelector ('#container')
const result = document.querySelector ('.result')

//starting scores of each album
var kisScore = 0;
var beaScore = 0;
var staScore = 0;
var mydScore = 0;
var aftScore = 0;
var dawScore = 0;

//hides quiz by default until start button is clicked
questionOne.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
questionFour.style.display = 'none';
questionFive.style.display = 'none';
resetBtn.style.display = 'none';
submitBtn.style.display = 'none';
resultOne.style.display = 'none';
resultTwo.style.display = 'none';
resultThree.style.display = 'none';
resultFour.style.display = 'none';
resultFive.style.display = 'none';
resultSix.style.display = 'none';

startButton.onclick = () => {
//clears console and resets scores everytime quiz is restarted
  console.clear();
  kisScore = 0;
  beaScore = 0;
  staScore = 0;
  mydScore = 0;
  aftScore = 0;
  dawScore = 0;
  //hides all results until function is called to display
  quizIntro.style.display = 'none';
  startButton.style.display = 'none';
  resultOne.style.display = 'none';
  resultTwo.style.display = 'none';
  resultThree.style.display = 'none';
  resultFour.style.display = 'none';
  resultFive.style.display = 'none';
  resultSix.style.display = 'none';
  //displays questions and buttons for user upon starting
  questionOne.style.display = 'block';
  questionTwo.style.display = 'block';
  questionThree.style.display = 'block';
  questionFour.style.display = 'block';
  questionFive.style.display = 'block';
  resetBtn.style.display = 'block';
  submitBtn.style.display = 'block';
};

//once quiz is submitted function runs
submitBtn.onclick = () => {
  stopPlayers();
  quizProcess();
  quizScore();
  calculateHighScore();
  displayResult();
  quizIntro.style.display = 'none';
  startButton.style.display = 'none';
  questionOne.style.display = 'none';
  questionTwo.style.display = 'none';
  questionThree.style.display = 'none';
  questionFour.style.display = 'none';
  questionFive.style.display = 'none';
  resetBtn.style.display = 'none';
  submitBtn.style.display = 'none';
  startButton.style.display = 'block';
}

//prevents album from clashing with audio sample that might be playing. Code copied from https://docs.google.com/document/d/1JzWvC4y_Zi5-ou7RJixAWAhUI7dqC33Nvm5k0Cl42Fk/edit
function stopPlayers() {
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
      });
}

//makes each question calculate selected answer and corresponding value
function quizProcess() {
  qOne();
  qTwo();
  qThree();
  qFour();
  qFive();
}

//adds values to each album depending on answer selection. code to see whether value is checked was copied and modified from https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript#:~:text=Use%20document.&text=It%20will%20return%20the%20checked,button%20is%20not%20selected%2F%20checked.
function qOne() {
  if(document.getElementById('chartToppers').checked == true) {
  beaScore++;
  aftScore++;
} else if (document.getElementById('gems').checked == true){
  mydScore++;
  kisScore++;
} else if (document.getElementById('mix').checked == true){
  staScore++;
  dawScore++;
} else {
  alert("Please select an answer for all questions!");
  submitBtn.preventDefault();
}
}

function qTwo() {
if(document.getElementById('crying').checked == true) {
  mydScore++;
  mydScore++;
} else if (document.getElementById('downtown').checked == true){
  dawScore++;
  dawScore++;
} else if (document.getElementById('party').checked == true){
  aftScore++;
  aftScore++;
} else if (document.getElementById('movies').checked == true){
  beaScore++;
  beaScore++;
} else if (document.getElementById('hanging').checked == true){
  staScore++;
  staScore++;
} else if (document.getElementById('alone').checked == true){
  kisScore++;
  kisScore++;
} else {
  alert("Please select an answer for all questions!");
  submitBtn.preventDefault();
}
}

function qThree() {
if(document.getElementById('chill').checked == true) {
  kisScore++;
} else if (document.getElementById('upbeat').checked == true){
  aftScore++;
  dawScore++;
}else if (document.getElementById('adventurous').checked == true){
  staScore++;
  beaScore++;
} else if (document.getElementById('romantic').checked == true){
  mydScore++;
} else {
  alert("Please select an answer for all questions!");
  submitBtn.preventDefault();
}
}

function qFour() {
if(document.getElementById('80s').checked == true) {
  dawScore++;
  dawScore++;
  dawScore++;
} else if (document.getElementById('pop').checked == true){
  staScore++;
  staScore++;
  staScore++;
} else if (document.getElementById('rb').checked == true){
  beaScore++;
  beaScore++;
  beaScore++;
} else if (document.getElementById('dark').checked == true){
  kisScore++;
  kisScore++;
  kisScore++;
} else if (document.getElementById('indie').checked == true){
  mydScore++;
  mydScore++;
  mydScore++;
} else if (document.getElementById('electronic').checked == true){
  aftScore++;
  aftScore++;
  aftScore++;
} else {
  alert("Please select an answer for all questions!");
  submitBtn.preventDefault();
}
}

function qFive() {
if(document.getElementById('commuting').checked == true) {
  kisScore++;
  kisScore++;
} else if (document.getElementById('relaxing').checked == true){
  mydScore++;
  mydScore++;
}else if (document.getElementById('workout').checked == true){
  aftScore++;
  aftScore++;
  beaScore++;
  beaScore++;
} else if (document.getElementById('dancing').checked == true){
  staScore++;
  staScore++;
  dawScore++;
  dawScore++;
} else {
  alert("Please select an answer for all questions!");
 submitBtn.preventDefault();
}
}

//logs final scores of each album in console
function quizScore() {
  console.log(kisScore);
  console.log(beaScore);
  console.log(staScore);
  console.log(mydScore);
  console.log(aftScore);
  console.log(dawScore);
}

//logs highscore in console and was modified from https://stackoverflow.com/questions/68665477/how-do-you-get-math-max-to-give-you-the-variables-name
function calculateHighScore() {
  let highestResult = (Object.entries({kisScore,beaScore,staScore,mydScore,aftScore,dawScore}).sort(([, a], [, b]) => b - a)[0]);
  console.log(highestResult);
}

//determines what result is displayed depending on scores
function displayResult() {
  if (kisScore > beaScore && kisScore > staScore && kisScore > mydScore && kisScore > aftScore && kisScore > dawScore) {
    resultOne.style.display = 'block';
  } else if (beaScore > kisScore && beaScore > staScore && beaScore > mydScore && beaScore > aftScore && beaScore > dawScore) {
    resultTwo.style.display = 'block';
  } else if (staScore > kisScore && staScore > beaScore && staScore > mydScore && staScore > aftScore && staScore > dawScore) {
    resultThree.style.display = 'block';
  } else if (mydScore > beaScore && mydScore > staScore && mydScore > kisScore && mydScore > aftScore && mydScore > dawScore) {
    resultFour.style.display = 'block';
  } else if (aftScore > beaScore && aftScore > staScore && aftScore > mydScore && aftScore > kisScore && aftScore > dawScore) {
    resultFive.style.display = 'block';
  } else if (dawScore > beaScore && dawScore > staScore && dawScore > mydScore && dawScore > aftScore && dawScore > kisScore) {
    resultSix.style.display = 'block';
  } //displays Starboy, an album with lots of variety, as result if there is a tie
  else {
    resultThree.style.display = 'block';
  }
}
