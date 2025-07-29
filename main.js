
var cursor = 0;  // For Typed character count
var correct_character_counter = 0;
var wrong_character_counter = 0;


const start_test = () => {

    // This boxes are hidden before start 
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('hidden')      // Unhide 
    });


    const start_reload_button = document.getElementById('start_reload_button');     // For restart
    start_reload_button.onclick = function () {
        location.reload();
    }


    const start_timer_name = document.getElementById('start_timer_name');
    const start_timer_logo = document.getElementById('start_timer_logo');

    start_timer_name.innerHTML = '';
    start_timer_logo.innerHTML = '';

    start_timer_logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg>`


    const words = "The quick brown fox jumps over the lazy dog and runs into the forest where tall trees whisper in the wind and soft light filters through the leaves The animals watch in silence as the fox moves swiftly along the narrow path Birds flutter above and squirrels dart between branches while the forest hums with quiet energy It is a peaceful morning full of gentle sounds and warm sunshine Every creature seems to know its place and purpose in the harmony of nature A moment like this reminds us of the beauty around us and the calm that can be found in simple things when we pause to look and listen with open hearts and quiet minds The quick brown fox jumps over the lazy dog and runs into the forest where tall trees whisper in the wind and soft light filters through the leaves The animals watch in silence as the fox moves swiftly along the narrow path Birds flutter above and squirrels dart between branches while the forest hums with quiet energy It is a peaceful morning full of gentle sounds and warm sunshine Every creature seems to know its place and purpose in the harmony of nature A moment like this reminds us of the beauty around us and the calm that can be found in simple things when we pause to look and listen with open hearts and quiet minds Nostrum repellat magnam odit ullam ratione exercitationem facilis quidem consequuntur Ok Bye";

    let for_demo_texts = document.getElementById("for_demo_texts");
    for_demo_texts.innerText = "";

    // For Demo paragraph
    for(var i=0; i<words.length; i++) {
        const letter = document.createElement('span');
        letter.classList.add('single_character');
        letter.id = `single_character${i}`;         // Adding Dynamic Id for each character
        letter.innerText = words[i];

        for_demo_texts.appendChild(letter);
    }
    
    
    // Count 60 second and display it 
    for (let time = 60; time >= 0; time--) {
        setTimeout(() => {
            if ( time === 0 ) {
                start_timer_name.innerHTML = '';
                start_timer_name.innerHTML = `<span class="font-bold text-4xl">Time's UP!</span><br>Try Again`;
                for_demo_texts.innerText = "";

                calculate_result()
            } else if ( cursor == words.length ) {
                start_timer_name.innerHTML = '';
                start_timer_name.innerHTML = `<span class="font-bold text-4xl">All DONE!</span><br>Try Again`;
                for_demo_texts.innerText = "";

                calculate_result()
            } else {
                start_timer_name.innerHTML = '';
                start_timer_name.innerHTML = `<span class="font-bold text-5xl">${time}</span>`;
            }
        }, (61 - time) * 1000);
    }
    
    

    const _correct_character_counter = document.getElementById('correct_character_counter');
    const typed_character_counter = document.getElementById('typed_character_counter');
    const _wrong_character_counter = document.getElementById('wrong_character_counter');

    
    // Check all character with displayed character and user given input
    let word = document.getElementById(`single_character${cursor}`);
    word.classList.add('for_track_cursor');

    document.addEventListener("keydown", function(e) {
        if(/^[a-zA-Z ]$/.test(e.key)) {
            let word = document.getElementById(`single_character${cursor}`);
            word.classList.add('for_track_cursor');
            
            const current_word = word.innerText;
            if( current_word == " ") {
                if(  e.key == " " ) {
                    correct_character_counter++;
                    word.classList.add("green_bg");
                } else {
                    wrong_character_counter++;
                    word.classList.add("red_bg")
                }
            } else if( e.key == current_word ) {
                correct_character_counter++;
                word.classList.add("correct");
            } else {
                wrong_character_counter++;
                word.classList.add("wrong")
            }
            
            
            cursor++;
            word.classList.remove('for_track_cursor');
            typed_character_counter.innerText = cursor;
            
            let next_word = document.getElementById(`single_character${cursor}`);
            next_word.classList.add('for_track_cursor');

            _correct_character_counter.innerText = correct_character_counter;
            _wrong_character_counter.innerText = wrong_character_counter;
        }
    });
}


function calculate_result () {
    const CPM = cursor;
    const WPM = cursor > 0 ? (cursor / 5).toFixed(2) : 0;
    const ACCURACY = cursor > 0 ? ((correct_character_counter / cursor) * 100).toFixed(2) : 0;

    const for_text_and_result = document.getElementById('for_text_and_result');
    for_text_and_result.innerHTML = '';

    for_text_and_result.innerHTML = `
        <div class="flex flex-col gap-5">
            <h1 class="font-semibold text-2xl"> Total Characters -->  <span class="font-bold"> ${1350} </span> </h1>
            <h1 class="font-semibold text-2xl"> Total Typed Characters -->  <span class="font-bold"> ${cursor} </span> </h1>
            <h1 class="font-semibold text-2xl"> Total Correct Typed Characters -->  <span class="font-bold"> ${correct_character_counter} </span> </h1>
            <h1 class="font-semibold text-2xl"> Total Wrong Typed Characters -->  <span class="font-bold"> ${wrong_character_counter} </span> </h1>
            <h1 class="font-semibold text-2xl"> CPM (Characters Per Minute) -->  <span class="font-bold"> ${CPM} </span> </h1>
            <h1 class="font-semibold text-2xl"> WPM (Words Per Minute) -->  <span class="font-bold"> ${WPM} </span> </h1>
            <h1 class="font-semibold text-2xl"> Accuracy -->  <span class="font-bold"> ${ACCURACY} %</span> </h1>
        </div>
    `;
}


const restart = () => {
  localStorage.setItem("shouldStartTest", "true");
  location.reload();
};


window.onload = () => {
  if (localStorage.getItem("shouldStartTest") === "true") {
    start_test();
    localStorage.removeItem("shouldStartTest");
  }
};
