
const myContainer = document.getElementById('box');
// myContainer.style.padding="0px";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



// table
let index = 7;
let count = 0;


function addTestData() {

  const dataPointsTable = document.getElementById("dataPointsTable");
  const tbody = dataPointsTable.getElementsByTagName("tbody")[0];


  let testingData = (document.getElementById("testingData").value);
  let testing_Data = document.getElementById("testingData");


  if (count >= 1) {
    return;
  }

  
  if (testingData!="NULL"){
 
    const row = document.createElement("tr");
    row.classList.add("tocheck")
    rl=document.getElementsByClassName("tocheck")
    des=true;
  
     if(des==true){
  row.innerHTML = `
      <td>${index}</td>
      <td>${testingData}</td>
      <td>?</td>
    `;

  tbody.appendChild(row);

  index++;
  count++;

  testing_Data.style.border="";
  testing_Data.value='NULL'
     }
  

}
  else{
    let countfof=0
    let a=""
    
    if(testingData=='NULL'){
      a=a+"testing data ,"
      countfof=countfof+1
      testing_Data.style.border="2px solid red"
    }
    else{
      testing_Data.style.border=""
    }
    
    if(countfof==1){
      g='MISSING VALUE'
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a=a+` field cannot have NULL value.`
    }
 
   
    Swal.fire({
      icon: 'error',
      title: g,
      text: a,
      showCancelBotton:true,
      allowOutsideClick: false,
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },     
    });


  }

  
  if (count === 1) {
    
    
        f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;

       
          const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          Swal.fire({
            icon: 'success',
            html: '<p style="font-size:16px">Click on the <b style="color:#004E86">NEXT</b> button.</p>',
            showCancelBotton:true,
            allowOutsideClick: false,
            target: '.container',
            customClass: {
              container: "position-absolute",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
          },     
  
      
    });
      
  next();
  
}
}

function next()
{
  var tableData = [];
  const ne = document.getElementById("NEXT")
ne.disabled=false;
ne.style.cursor="pointer"
  ne.onclick=function () {
    location.href = "Compute1.html";};;
  
  const tbody = document.getElementById("for11");
  for (var i = 0; i < tbody.rows.length; i++) {
    var rowData = [];
    var cells = tbody.rows[i].cells;
  
    // Iterate through each cell of the row
    for (var j = 0; j < cells.length; j++) {
     // var columnName = tbody.rows[0].cells[j].textContent; 
      var cellValue = cells[j].textContent;
  
      rowData[j] = cellValue;
    }
  
    tableData.push(rowData);
  }
  
  var serializedData = JSON.stringify(tableData); // Convert data to a string format
  
  localStorage.setItem('objectToPass', serializedData); 
  console.log(rowData)
}



