//------------------------Firebase config------------------------//
var firebaseConfig = {
    apiKey: "AIzaSyDJtvdUIoY00NN8y_XGLPxUQHE_CfRtIdY",
    authDomain: "home-management-app-c14d3.firebaseapp.com",
    projectId: "home-management-app-c14d3",
    storageBucket: "home-management-app-c14d3.appspot.com",
    messagingSenderId: "819440602736",
    appId: "1:819440602736:web:7fd6dcc2a7fbb74ba3aeb5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //------------------------Data Redy------------------------//
  
  var o_j,g,s,veg,z,o,q_o_j,q_g,q_s,q_veg,q_z,q_o,a_o_j,a_g,a_s,a_veg,a_z,a_o,a_p,a_ser,a_in,a_m;
  
  function ready(){
    o_j= document.getElementById("o_j").value;
    g= document.getElementById("g").value;
    s= document.getElementById("s").value;
    veg= document.getElementById("veg").value;
    z= document.getElementById("z").value;
    o= document.getElementById("o").value;
  
    q_o_j= document.getElementById("q_o_j").value;
    q_g= document.getElementById("q_g").value;
    q_s= document.getElementById("q_s").value;
    q_veg= document.getElementById("q_veg").value;
    q_z= document.getElementById("q_z").value;
    q_o= document.getElementById("q_o").value;
  
    a_o_j= document.getElementById("a_o_j").value;
    a_g= document.getElementById("a_g").value;
    a_s= document.getElementById("a_s").value;
    a_veg= document.getElementById("a_veg").value;
    a_z= document.getElementById("a_g").value;
    a_o= document.getElementById("a_s").value;
    a_p= document.getElementById("a_p").value;
    a_ser= document.getElementById("a_ser").value;
    a_in= document.getElementById("a_in").value;
    a_m= document.getElementById("a_m").value;
  
    date= document.getElementById("date").value;
  
    total= Number(a_o_j)+Number(a_g)+Number(a_s)+Number(a_veg)+Number(a_o)+Number(a_p)+Number(a_ser)+Number(a_in)+Number(a_m);
  }
  
  //------------------------Save data------------------------//
  
  function save_o(){
    ready();
  
    firebase.database().ref('Items/'+ date).set({
      Date: date,
      Online_Jadu : o_j,
      Grocery : g,
      Sweets : s,
      Vegetables : veg,
      Zomato : z,
      Others : o,
      Quantity_Online_Jadu : q_o_j,
      Quantity_Grocery : q_g,
      Quantity_Sweets : q_s,
      Quantity_Vegetables : q_veg,
      Quantity_Zomato : q_z,
      Quantity_Others : q_o,
      Amount_Jadu : a_o_j,
      Amount_Grocery : a_g,
      Amount_Sweets : a_s,
      Amount_Vegetables : a_veg,
      Amount_Zomato : a_z,
      Amount_Others : a_o,
      Amount_Paper : a_p,
      Amount_Servent : a_ser,
      Amount_Internet : a_in,
      Amount_Malabika : a_m,
      TOTAL : total
    });
    document.getElementById("o_j").value = "";
    document.getElementById("g").value = "";
    document.getElementById("s").value = "";
    document.getElementById("veg").value = "";
    document.getElementById("z").value = "";
    document.getElementById("o").value = "";
  
    document.getElementById("q_o_j").value = "";
    document.getElementById("q_g").value = "";
    document.getElementById("q_s").value = "";
    document.getElementById("q_veg").value = "";
    document.getElementById("q_z").value = "";
    document.getElementById("q_o").value = "";
  
    document.getElementById("a_o_j").value = "";
    document.getElementById("a_g").value = "";
    document.getElementById("a_s").value = "";
    document.getElementById("a_veg").value = "";
    document.getElementById("a_z").value = "";
    document.getElementById("a_o").value = "";
    document.getElementById("a_p").value = "";
    document.getElementById("a_ser").value = "";
    document.getElementById("a_in").value = "";
    document.getElementById("a_m").value = "";
  
    document.getElementById("date").value = "";
  }
    //------------------------Update data------------------------// 

    function up(){
        ready();
  
        firebase.database().ref('Items/'+ date).update({
          
          Online_Jadu : o_j,
          Grocery : g,
          Sweets : s,
          Vegetables : veg,
          Zomato : z,
          Others : o,
          Quantity_Online_Jadu : q_o_j,
          Quantity_Grocery : q_g,
          Quantity_Sweets : q_s,
          Quantity_Vegetables : q_veg,
          Quantity_Zomato : q_z,
          Quantity_Others : q_o,
          Amount_Jadu : a_o_j,
          Amount_Grocery : a_g,
          Amount_Sweets : a_s,
          Amount_Vegetables : a_veg,
          Amount_Zomato : a_z,
          Amount_Others : a_o,
          Amount_Paper : a_p,
          Amount_Servent : a_ser,
          Amount_Internet : a_in,
          Amount_Malabika : a_m,
          TOTAL : total
        });
        document.getElementById("o_j").value = "";
        document.getElementById("g").value = "";
        document.getElementById("s").value = "";
        document.getElementById("veg").value = "";
        document.getElementById("z").value = "";
        document.getElementById("o").value = "";
      
        document.getElementById("q_o_j").value = "";
        document.getElementById("q_g").value = "";
        document.getElementById("q_s").value = "";
        document.getElementById("q_veg").value = "";
        document.getElementById("q_z").value = "";
        document.getElementById("q_o").value = "";
      
        document.getElementById("a_o_j").value = "";
        document.getElementById("a_g").value = "";
        document.getElementById("a_s").value = "";
        document.getElementById("a_veg").value = "";
        document.getElementById("a_z").value = "";
        document.getElementById("a_o").value = "";
        document.getElementById("a_p").value = "";
        document.getElementById("a_ser").value = "";
        document.getElementById("a_in").value = "";
        document.getElementById("a_m").value = "";
      
        document.getElementById("date").value = "";  
    }
    //------------------------Remove data------------------------// 
    function re(){
        ready();
  
        firebase.database().ref('Items/'+ date).remove();

        document.getElementById("o_j").value = "";
        document.getElementById("g").value = "";
        document.getElementById("s").value = "";
        document.getElementById("veg").value = "";
        document.getElementById("z").value = "";
        document.getElementById("o").value = "";
      
        document.getElementById("q_o_j").value = "";
        document.getElementById("q_g").value = "";
        document.getElementById("q_s").value = "";
        document.getElementById("q_veg").value = "";
        document.getElementById("q_z").value = "";
        document.getElementById("q_o").value = "";
      
        document.getElementById("a_o_j").value = "";
        document.getElementById("a_g").value = "";
        document.getElementById("a_s").value = "";
        document.getElementById("a_veg").value = "";
        document.getElementById("a_z").value = "";
        document.getElementById("a_o").value = "";
        document.getElementById("a_p").value = "";
        document.getElementById("a_ser").value = "";
        document.getElementById("a_in").value = "";
        document.getElementById("a_m").value = "";
      
        document.getElementById("date").value = "";  
    }
    //------------------------Next Screen------------------------// 
    function ne(){
        window.location="index1.html";

        document.getElementById("o_j").value = "";
        document.getElementById("g").value = "";
        document.getElementById("s").value = "";
        document.getElementById("veg").value = "";
        document.getElementById("z").value = "";
        document.getElementById("o").value = "";
      
        document.getElementById("q_o_j").value = "";
        document.getElementById("q_g").value = "";
        document.getElementById("q_s").value = "";
        document.getElementById("q_veg").value = "";
        document.getElementById("q_z").value = "";
        document.getElementById("q_o").value = "";
      
        document.getElementById("a_o_j").value = "";
        document.getElementById("a_g").value = "";
        document.getElementById("a_s").value = "";
        document.getElementById("a_veg").value = "";
        document.getElementById("a_z").value = "";
        document.getElementById("a_o").value = "";
        document.getElementById("a_p").value = "";
        document.getElementById("a_ser").value = "";
        document.getElementById("a_in").value = "";
        document.getElementById("a_m").value = "";
      
        document.getElementById("date").value = "";
    }
   //------------------------Show------------------------// 
        function shOW(){
            ready();
           firebase.database().ref('Items/'+ date).on('value',function(snapshot){
               
                document.getElementById("o_j").value= snapshot.val().Online_Jadu;
                document.getElementById("g").value= snapshot.val().Grocery;
                document.getElementById("s").value= snapshot.val().Sweets;
                document.getElementById("veg").value= snapshot.val().Vegetables;
                document.getElementById("z").value= snapshot.val().Zomato;
                document.getElementById("o").value= snapshot.val().Others;

                document.getElementById("q_o_j").value= snapshot.val().Quantity_Online_Jadu;
                document.getElementById("q_g").value= snapshot.val().Quantity_Grocery;
                document.getElementById("q_s").value= snapshot.val().Quantity_Sweets;
                document.getElementById("q_veg").value= snapshot.val().Quantity_Vegetables;
                document.getElementById("q_z").value= snapshot.val().Quantity_Zomato;
                document.getElementById("q_o").value= snapshot.val().Quantity_Others;

                document.getElementById("a_o_j").value= snapshot.val().Amount_Jadu;
                document.getElementById("a_g").value= snapshot.val().Amount_Grocery;
                document.getElementById("a_s").value= snapshot.val().Amount_Sweets;
                document.getElementById("a_veg").value= snapshot.val().Amount_Vegetables;
                document.getElementById("a_z").value= snapshot.val(). Quantity_Zomato;
                document.getElementById("a_o").value= snapshot.val(). Amount_Others;
                document.getElementById("a_p").value= snapshot.val().Amount_Paper;
                document.getElementById("a_ser").value= snapshot.val().Amount_Servent;
                document.getElementById("a_in").value= snapshot.val().Amount_Internet;
                document.getElementById("a_m").value= snapshot.val().Amount_Malabika;
           });
        }