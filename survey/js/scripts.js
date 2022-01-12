
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const dob = $("born").val();
    const gender = $("input:radio[name=gender]:checked").val();
    const media = $("#media").val();
    const timesChecked = $("#timesChecked").val();
    const views = $("input:radio[name=views]:checked").val();
    const likes = $("input:radio[name=likes]:checked").val();
    const different = $("input:radio[name=different]:checked").val();
    const impact = $("input:radio[name=impact]:checked").val();
    const effect =$("#effect").val();
    const moodColor= $("#color").val();

    $("#submitted").show();
  })
})