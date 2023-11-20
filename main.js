// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCCfoJdnKo6Vr2Cbr72HEmCaoi1F4aifYo",
    authDomain: "demo1-93655.firebaseapp.com",
    databaseURL: "https://demo1-93655-default-rtdb.firebaseio.com",
    projectId: "demo1-93655",
    storageBucket: "demo1-93655.appspot.com",
    messagingSenderId: "518046501643",
    appId: "1:518046501643:web:61e2d7e8779f919571700e",
    measurementId: "G-ER0825RHJJ",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database();

function save1() {
  var brand1 = document.getElementById("brand1").value;
  var city1 = document.getElementById("city1").value;
  var duration1 = document.getElementById("duration1").value;
  var uid1 = document.getElementById("uid1").value;

  // USERS is the main folder in Firebase under which all the values are stored

  database.ref("users/" + uid1).set({
    brand1: brand1,
    city1: city1,
    duration1: duration1,
    uid1: uid1,
  });

  alert("Order Placed");
}

function save2() {
  var brand2 = document.getElementById("brand2").value;
  var city2 = document.getElementById("city2").value;
  var duration2 = document.getElementById("duration2").value;
  var uid2 = document.getElementById("uid2").value;

  // USERS is the main folder in Firebase under which all the values are stored

  database.ref("users/" + uid2).set({
    brand2: brand2,
    city2: city2,
    duration2: duration2,
    uid2: uid2,
  });

  alert("Order Placed");
}

function save3() {
  var brand3 = document.getElementById("brand3").value;
  var city3 = document.getElementById("city3").value;
  var duration3 = document.getElementById("duration3").value;
  var uid3 = document.getElementById("uid3").value;

  // USERS is the main folder in Firebase under which all the values are stored

  database.ref("users/" + uid3).set({
    brand3: brand3,
    city3: city3,
    duration3: duration3,
    uid3: uid3,
  });

  alert("Order Placed");
}

function save4() {
  var brand4 = document.getElementById("brand4").value;
  var city4 = document.getElementById("city4").value;
  var duration4 = document.getElementById("duration4").value;
  var uid4 = document.getElementById("uid4").value;

  // USERS is the main folder in Firebase under which all the values are stored

  database.ref("users/" + uid4).set({
    brand4: brand4,
    city4: city4,
    duration4: duration4,
    uid4: uid4,
  });

  alert("Order Placed");
}