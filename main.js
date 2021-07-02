names_array=[];
function submit(){
    
    
        var name_student=document.getElementById("name_of_the_student_1").value;
names_array.push(name_student);
    document.getElementById("display_name").innerHTML=names_array;
}
function show(){
    var displayname_array=[];
    names_array.sort();
    for(var k=0; k<names_array.length;k++){
        displayname_array.push("<h4> Name -"+names_array[k]+"</h4>");
    }
    
    var remove_comma=displayname_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    
}
function sorting(){
    names_array.sort();
    var display_sortarray=[];
    for(var k=0; k<names_array.length;k++){
        display_sortarray.push("<h4> Name -"+names_array[k]+"</h4>");
    }
    var remove_comma=display_sortarray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}
function search(){
    var s=document.getElementById("s1").value
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s"
    console.log("found name "+found+" time/s");
}