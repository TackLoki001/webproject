function showPanel() {
  var panel = document.getElementById("inputPanel");
  panel.style.display = "block";
}

function hidePanel() {
  var panel = document.getElementById("inputPanel");
  panel.style.display = "none";
}

function processInput() {
  var input1 = document.getElementById("inputField1").value;
  var input2 = document.getElementById("inputField2").value;

  
  alert("input_msg��\n����1: " + input1 + "\n����2: " + input2);
  
  hidePanel();
}