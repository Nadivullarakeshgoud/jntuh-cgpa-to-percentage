

// let cgpa = document.getElementById('cgpa')
// let per = document.getElementById('per')



function getResult(){

    let sem1 = parseFloat(document.getElementById('sem1').value);//parsefloat is the used to convert string to number
    let sem2 = parseFloat(document.getElementById('sem2').value);
    let sem3 = parseFloat(document.getElementById('sem3').value);
    let sem4 = parseFloat(document.getElementById('sem4').value);
    let sem5 = parseFloat(document.getElementById('sem5').value);
    let sem6 = parseFloat(document.getElementById('sem6').value);
    let sem7 = parseFloat(document.getElementById('sem7').value);
    let sem8 = parseFloat(document.getElementById('sem8').value);

   
    // Check for NaN (Not-a-Number)
    if (isNaN(sem1) || isNaN(sem2) || isNaN(sem3) || isNaN(sem4) || isNaN(sem5) || isNaN(sem6) || isNaN(sem7) || isNaN(sem8)) {
        alert("Please provide valid data for all semesters.");
        return false;
    }


   
    // Calculate the final CGPA
    let finalCgpa = (sem1 + sem2 + sem3 + sem4 + sem5 + sem6 + sem7 + sem8) / 8;

    // Display the final CGPA
    document.getElementById('cgpa').innerHTML = finalCgpa.toFixed(2); // Optionally format to 2 decimal places

    let per = Math.round((finalCgpa - 0.5)*10)

    document.getElementById('per').innerHTML = per+"%"

    if(per>=70){
        document.getElementById('award').innerHTML ="First class with Distinction"
    }
    else if(per<70 && per>=60){
        document.getElementById('award').innerHTML ="First class"
    }
    else if(per<60 && per>=50){
        document.getElementById('award').innerHTML ="Second class"
    }
    else if(per<50 && per>=40){
        document.getElementById('award').innerHTML ="Pass class"
    }
    else
    {
        document.getElementById('award').innerHTML ="Fail"
    }

}

