const first = document.getElementById('first-option');
const second = document.getElementById('second-option');
const third = document.getElementById('third-option');
const fourth = document.getElementById('fourth-option');
const fifth = document.getElementById('fifth-option');

const first2 = document.getElementById('first-option2');
const second2 = document.getElementById('second-option2');
const third2 = document.getElementById('third-option2');
const fourth2 = document.getElementById('fourth-option2');
const fifth2 = document.getElementById('fifth-option2');

const get_started = document.getElementById('button');

const bg = document.getElementById('bg');
const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');
const content4 = document.getElementById('content-4');
const content5 = document.getElementById('content-5');
const content6 = document.getElementById('content-6');
const foot = document.getElementById('footer');
const chart = document.getElementById('charted');

const hand = document.getElementById("hand-chart");

const breaking = document.getElementById('news');

const m = document.getElementById("male");
const f = document.getElementById("female");

function resetIt(){
    weight_val.value = "";
    weight_lbs.value = "1";
    height_val.value = "";
    input_ins.value = "";
    fillIt.style.display = 'none';
    hand.style.transform = 'translateX(-50%) translateY(-50%) scale(1) rotate(0deg)';
    current_button = 2;
    m.checked = true;
    imp.checked = true;
    input_ins.style.display = 'block';
    height_ins.style.display = 'block';
    value_ft.innerHTML = 'ft';

    content2.style.paddingLeft = "77.5px";
    content2.style.paddingRight = "77.5px"

    weight_lbs.style.display = 'block';
    label_lbs.style.display = 'block';
    value_lbs.innerHTML = 'lbs';
}


first.onclick = function(){
    first2.style.color = '#f4f4f4';
    second2.style.color = 'black';
    third2.style.color = 'black';
    fourth2.style.color = 'black';
    fifth2.style.color = 'black';
    foot.style.display = 'none';

    first.classList.toggle('first-options');
    second.classList.remove('second-options');
    third.classList.remove('third-options');
    fourth.classList.remove('fourth-options');
    fifth.classList.remove('fifth-options');

    bg.style.display = 'none';
    content1.style.display ='none';
    content2.style.display ='block';
    content3.style.display ='none';
    breaking.style.display = 'block';
    content4.style.display ='none';
    content5.style.display ='none';
    content6.style.display ='none';
    chart.style.display ='block';
}


// second.onclick = function(){
//     first2.style.color = 'black';
//     second2.style.color = '#f4f4f4';
//     third2.style.color = 'black';
//     fourth2.style.color = 'black';
//     fifth2.style.color = 'black';
//     foot.style.display = 'none';

//     document.getElementById('second-option2').classList.toggle('changeColor2');
//     first.classList.remove('first-options');
//     second.classList.toggle('second-options');
//     third.classList.remove('third-options');
//     fourth.classList.remove('fourth-options');
//     fifth.classList.remove('fifth-options');

//     bg.style.display = 'none';
//     content1.style.display ='none';
//     content2.style.display ='none';
//     content3.style.display ='block';
//     breaking.style.display = 'none';
//     content4.style.display ='none';
//     content5.style.display ='none';
//     content6.style.display ='none';

//     resetIt();
// }

// third.onclick = function(){
//     first2.style.color = 'black';
//     second2.style.color = 'black';
//     third2.style.color = '#f4f4f4';
//     fourth2.style.color = 'black';
//     fifth2.style.color = 'black';
//     foot.style.display = 'none';

//     document.getElementById('third-option2').classList.toggle('changeColor3');
//     first.classList.remove('first-options');
//     second.classList.remove('second-options');
//     third.classList.toggle('third-options');
//     fourth.classList.remove('fourth-options');
//     fifth.classList.remove('fifth-options');

//     bg.style.display = 'none';
//     content1.style.display ='none';
//     content2.style.display ='none';
//     content3.style.display ='none';
//     breaking.style.display = 'none';
//     content4.style.display ='block';
//     content5.style.display ='none';
//     content6.style.display ='none';

//     resetIt();
// }


// fourth.onclick = function(){
//     first2.style.color = 'black';
//     second2.style.color = 'black';
//     third2.style.color = 'black';
//     fourth2.style.color = '#f4f4f4';
//     fifth2.style.color = 'black';
//     foot.style.display = 'none';

//     document.getElementById('fourth-option2').classList.toggle('changeColor4');
//     first.classList.remove('first-options');
//     second.classList.remove('second-options');
//     third.classList.remove('third-options');
//     fourth.classList.toggle('fourth-options');
//     fifth.classList.remove('fifth-options');

//     bg.style.display = 'none';
//     content1.style.display ='none';
//     content2.style.display ='none';
//     content3.style.display ='none';
//     content4.style.display ='none';
//     content5.style.display ='block';
//     breaking.style.display = 'none';
//     content6.style.display ='none';

//     resetIt();
// }


// fifth.onclick = function(){
//     first2.style.color = 'black';
//     second2.style.color = 'black';
//     third2.style.color = 'black';
//     fourth2.style.color = 'black';
//     fifth2.style.color = '#f4f4f4';
//     foot.style.display = 'none';

//     document.getElementById('fifth-option2').classList.toggle('changeColor5');
//     first.classList.remove('first-options');
//     second.classList.remove('second-options');
//     third.classList.remove('third-options');
//     fourth.classList.remove('fourth-options');
//     fifth.classList.toggle('fifth-options');

//     bg.style.display = 'none';
//     content1.style.display ='none';
//     content2.style.display ='none';
//     content3.style.display ='none';
//     content4.style.display ='none';
//     breaking.style.display = 'none';
//     content5.style.display ='none';
//     content6.style.display ='block';

//     resetIt();
// }

get_started.onclick = function(){
    first2.style.color = '#f4f4f4';
    second2.style.color = 'black';
    third2.style.color = 'black';
    fourth2.style.color = 'black';
    fifth2.style.color = 'black';
    foot.style.display = 'none';

    first.classList.toggle('first-options');
    second.classList.remove('second-options');
    third.classList.remove('third-options');
    fourth.classList.remove('fourth-options');
    fifth.classList.remove('fifth-options');

    bg.style.display = 'none';
    content1.style.display ='none';
    content2.style.display ='block';
    breaking.style.display = 'block';
    content3.style.display ='none';
    content4.style.display ='none';
    content5.style.display ='none';
    content6.style.display ='none';
    chart.style.display ='block';
}

//BMI input form

const met = document.getElementById('imperial');
const imp = document.getElementById('metric');

const height_ins = document.getElementById('height2_label');
const input_ins = document.getElementById('height2');
const value_ft = document.getElementById('height_label');
const height_val = document.getElementById('height');

const label_lbs = document.getElementById('weight2_label');
const weight_lbs = document.getElementById('weight2');
const value_lbs = document.getElementById('weight_st');
const weight_val = document.getElementById('weight');

const new_break = document.getElementById('news_text');

let current_button = 2;
weight_lbs.value = "1";

met.onclick = function(){
    input_ins.style.display = 'none';
    height_ins.style.display = 'none';
    value_ft.innerHTML = 'cm';

    weight_lbs.style.display = 'none';
    label_lbs.style.display = 'none';
    value_lbs.innerHTML = 'kgs';

    height_val.value = "";
    input_ins.value = "1";
    weight_val.value = "";
    weight_lbs.value = "1";

    weight_val.style.color = "#2c2c24";
    height_val.style.color = "#2c2c24";
    input_ins.style.color = "#2c2c24";

    fillIt.style.display = 'none';
    content2.style.paddingLeft = "85.5px";
    content2.style.paddingRight = "85.5px";

    document.getElementById("title-weight").style.marginLeft = "25px";
    document.getElementById("title-height").style.marginLeft = "25px";

    current_button = 1;
}

imp.onclick = function(){
    input_ins.style.display = 'block';
    height_ins.style.display = 'block';
    value_ft.innerHTML = 'ft';

    weight_lbs.style.display = 'block';
    label_lbs.style.display = 'block';
    value_lbs.innerHTML = 'lbs';

    weight_val.value = "";
    weight_lbs.value = "1";
    height_val.value = "";
    input_ins.value = "";

    weight_val.style.color = "#2c2c24";
    height_val.style.color = "#2c2c24";
    input_ins.style.color = "#2c2c24";

    content2.style.paddingLeft = "65px";
    content2.style.paddingRight = "65px";
    fillIt.style.display = 'none';

    current_button = 2;
}

const button = document.getElementById('button_results1');
const fillIt = document.getElementById('filler');
const inputs = document.querySelectorAll('.int');
const reset = document.getElementById('reset_button');

reset.onclick = function(){
    window.location.reload();
}

const list_inputs = [weight_val,weight_lbs,height_val,input_ins];

var current_gender = 0;

m.onclick = function(){
    current_gender = 0;
}

f.onclick = function(){
    current_gender = 1;
}

function to_kg(val){
    return val / 2.20462262185;
}

function to_cm(ft,inch){
    return ft * 30.48 + inch * 2.54;
}

function calculate_bmi(){
    var formula,height = height_val.value,weight = weight_val.value,height2 = input_ins.value;
    if(current_button === 1){
        formula = ((weight / Math.pow(height, 2))*10000).toFixed(1);
    }
    else{
        var new_weight = to_kg(weight)
        var new_height = to_cm(height,height2);
        formula = ((new_weight / Math.pow(new_height, 2))*10000).toFixed(1);
    }
    return formula;
}

function is_empty(){
    var b = false;
    for(var i = 0; i < list_inputs.length; i++){
        if(list_inputs[i].value === ""){
            b = true;
        }
    }
    if(b == true){
        fillIt.style.display = 'block';
        return false;
    }
    else{
        fillIt.style.display = 'none';
        return true;
    }
}

function bmi_categories(){
    var calc_bmi = calculate_bmi();
    console.log(calc_bmi);
    if(calc_bmi < 18.5){
        hand.style.transform = 'translateX(-50%) translateY(-50%) scale(1.1) rotate(15deg)';
        new_break.innerHTML = `YOU ARE UNDER WEIGHT,YOU HAVE A BMI OF ${calc_bmi}`; 
        new_break.style.transform = 'translateX(-10vw)';
        weight_val.style.color = "blue";
        height_val.style.color = "blue";
        input_ins.style.color = "blue";
        new_break.style.animation = 'from-left-under 18s linear infinite';
    }
    else if(calc_bmi >= 18.5 && calc_bmi < 25){
        hand.style.transform = 'translateX(-50%) translateY(-50%) scale(1.1) rotate(45deg)';
        new_break.innerHTML = `YOU ARE AT A NORMAL WEIGHT,YOU HAVE A BMI OF ${calc_bmi}`; 
        weight_val.style.color = "green";
        height_val.style.color = "green";
        input_ins.style.color = "green";
        new_break.style.transform = 'translateX(-10vw)';
        new_break.style.animation = 'from-left-under 18s linear infinite';
    }
    else if(calc_bmi >= 25 && calc_bmi < 30){
        hand.style.transform = 'translateX(-50%) translateY(-50%) scale(1.1) rotate(90deg)';
        new_break.innerHTML = `YOU ARE OVER WEIGHT,YOU HAVE A BMI OF ${calc_bmi}`;
        weight_val.style.color = "#ffd700";
        height_val.style.color = "#ffd700";
        input_ins.style.color = "#ffd700";
        new_break.style.transform = 'translateX(-10vw)';
        new_break.style.animation = 'from-left-under 18s linear infinite';
    }
    else if(calc_bmi >= 30 && calc_bmi < 40){
        hand.style.transform = 'translateX(-50%) translateY(-50%) scale(1.1) rotate(120deg)';
        new_break.innerHTML = `YOU ARE OBESE,YOU HAVE A BMI OF ${calc_bmi}`; 
        weight_val.style.color = "orange";
        height_val.style.color = "orange";
        input_ins.style.color = "orange";
        new_break.style.transform = 'translateX(-10vw)';
        new_break.style.animation = 'from-left-under 18s linear infinite';
    }
    else if(calc_bmi >= 40){
        hand.style.transform = 'translateX(-50%) translateY(-50%) scale(1.1) rotate(155deg)';
        new_break.innerHTML = `YOU ARE MORBIDLY OBESE,,YOU HAVE A BMI OF ${calc_bmi}`;
        weight_val.style.color = "red";
        height_val.style.color = "red";
        input_ins.style.color = "red";
        new_break.style.transform = 'translateX(-10vw)';
        new_break.style.animation = 'from-left-under 18s linear infinite';
    }
}

button.onclick = function(){
    var checking_emp = is_empty();
    if(checking_emp == true){
        bmi_categories();
    }
}

content2.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Trigger the button element with a click
        button.click();
    }
});


//RFM CALCULATOR HERE