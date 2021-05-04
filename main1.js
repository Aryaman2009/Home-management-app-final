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

//------------------------Get all Data------------------------//
function selectall_1(){
    firebase.database().ref('Items').once('value',
    function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                o_j_2= CurrentRecord.val().Online_Jadu;
                g_2= CurrentRecord.val().Grocery;
                s_2= CurrentRecord.val().Sweets;
                veg_2= CurrentRecord.val().Vegetables;
                z_2= CurrentRecord.val().Zomato;
                o_2= CurrentRecord.val().Others;

                q_o_j_2= CurrentRecord.val().Quantity_Online_Jadu;
                q_g_2= CurrentRecord.val().Quantity_Grocery;
                q_s_2= CurrentRecord.val().Quantity_Sweets;
                q_veg_2= CurrentRecord.val().Quantity_Vegetables;
                q_z_2= CurrentRecord.val().Quantity_Zomato;
                q_o_2= CurrentRecord.val().Quantity_Others;

                a_o_j_2= CurrentRecord.val().Amount_Jadu;
                a_g_2= CurrentRecord.val().Amount_Grocery;
                a_s_2= CurrentRecord.val().Amount_Sweets;
                a_veg_2= CurrentRecord.val().Amount_Vegetables;
                a_z_2= CurrentRecord.val().Amount_Zomato;
                a_o_2= CurrentRecord.val().Amount_Others;
                a_p_2= CurrentRecord.val().Amount_Paper;
                a_ser_2= CurrentRecord.val().Amount_Servent;
                a_in_2= CurrentRecord.val().Amount_Internet;
                a_m_2= CurrentRecord.val().Amount_Malabika;

                date_2= CurrentRecord.val().Date;

                total=CurrentRecord.val().TOTAL;

                AddItemsToTable(total,date_2,o_j_2,g_2,s_2,veg_2,z_2,o_2,q_o_j_2, q_g_2,q_s_2,q_veg_2,q_z_2,q_o_2,a_o_j_2,a_g_2,a_s_2, a_veg_2,a_z_2,a_o_2,a_p_2,a_ser_2,a_in_2,a_m_2);
            }
        );
    });
}



function AddItemsToTable(total,date_2,o_j_2,g_2,s_2,veg_2,z_2,o_2,q_o_j_2, q_g_2,q_s_2,q_veg_2,q_z_2,q_o_2,a_o_j_2,a_g_2,a_s_2, a_veg_2,a_z_2,a_o_2,a_p_2,a_ser_2,a_in_2,a_m_2){
    tb= document.getElementById("tbody1");
    trow= document.createElement("tr");
    td_1= document.createElement("td");
    td_2= document.createElement("td");
    td_3= document.createElement("td");
    td_4= document.createElement("td");
    td_5= document.createElement("td");
    td_6= document.createElement("td");
    td_7= document.createElement("td");
    td_8= document.createElement("td");
    td_9= document.createElement("td");
    td_10= document.createElement("td");
    td_11= document.createElement("td");
    td_12= document.createElement("td");
    td_13= document.createElement("td");
    td_14= document.createElement("td");
    td_15= document.createElement("td");
    td_16= document.createElement("td");
    td_17= document.createElement("td");
    td_18= document.createElement("td");
    td_19= document.createElement("td");
    td_20= document.createElement("td");
    td_21= document.createElement("td");
    td_22= document.createElement("td");
    td_23= document.createElement("td");
    td_24= document.createElement("td");

    td_1.innerHTML = date_2;
    td_2.innerHTML = o_j_2;
    td_3.innerHTML = a_o_j_2;
    td_4.innerHTML = q_o_j_2;
    td_5.innerHTML = g_2;
    td_6.innerHTML = a_g_2;
    td_7.innerHTML = q_g_2;
    td_8.innerHTML = s_2;
    td_9.innerHTML = a_s_2;
    td_10.innerHTML = q_s_2;
    td_11.innerHTML = veg_2;
    td_12.innerHTML = a_veg_2;
    td_13.innerHTML = q_veg_2;
    td_14.innerHTML = z_2;
    td_15.innerHTML = a_z_2;
    td_16.innerHTML = q_z_2;
    td_17.innerHTML = o_2;
    td_18.innerHTML = a_o_2;
    td_19.innerHTML = q_o_2;
    td_20.innerHTML = a_p_2;
    td_21.innerHTML = a_ser_2;
    td_22.innerHTML = a_in_2;
    td_23.innerHTML = a_m_2;
    td_24.innerHTML = total;

    trow.appendChild(td_1);
    trow.appendChild(td_2);
    trow.appendChild(td_3);
    trow.appendChild(td_4);
    trow.appendChild(td_5);
    trow.appendChild(td_6);
    trow.appendChild(td_7);
    trow.appendChild(td_8);
    trow.appendChild(td_9);
    trow.appendChild(td_10);
    trow.appendChild(td_11);
    trow.appendChild(td_12);
    trow.appendChild(td_13);
    trow.appendChild(td_14);
    trow.appendChild(td_15);
    trow.appendChild(td_16);
    trow.appendChild(td_17);
    trow.appendChild(td_18);
    trow.appendChild(td_19);
    trow.appendChild(td_20);
    trow.appendChild(td_21);
    trow.appendChild(td_22);
    trow.appendChild(td_23);
    trow.appendChild(td_24);

    tb.appendChild(trow);
}

function selectall(){
    selectall_1();
}

