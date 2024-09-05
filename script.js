window.addEventListener('load', () => {
    const overlay = document.querySelector('.characters-overlay');
    const sound = document.getElementById('sound');
    const continueOverlay = document.getElementById('continueOverlay');
    const continueButton = document.getElementById('continueButton');
    const overflow = document.querySelector('.overflow-hidden');
    
    
    const loader = document.querySelector('.loader');
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.removeChild("loader")
    })

    // Function to play sound
    const playSound = (soundName) => {
        console.log(soundName);
        sound.src = `public/CF25 _Character_Voices/${soundName}`;
        sound.play();
    };

    // Array of objects with content and styles
    const divs = [
        { id: 1, name: 'Mild_Ayan.mp3' },
        { id: 2, name: 'Trail_Rayan.mp3' },
        { id: 3, name: 'Mono_Max.mp3' },
        { id: 4, name: 'Paradigm_Jack.mp3' },
        { id: 5, name: 'Composure_Finn.mp3' },
        { id: 6, name: 'Campaign_Noor.mp3' },
        { id: 7, name: 'Keen_Lee.mp3' },
        { id: 8, name: 'Expert_Sami.mp3' },
        { id: 9, name: 'Precision_Anna.mp3' },
        { id: 10, name: 'Gloom_Zara.mp3' },
        { id: 11, name: 'Bright_Emma.mp3' },
        { id: 12, name: 'Guidance_Imaan.mp3' },
        { id: 13, name: 'Insight_Zuri.mp3' },
        { id: 14, name: 'Reveal_Yumi.mp3' },
        { id: 15, name: 'Mentor_Kofi.mp3' },
        { id: 16, name: 'Everyday_Lina.mp3' }
    ];

    // Insert each div into the overlay
    divs.forEach(({ name }) => {
        const outerDiv = document.createElement('div');
        outerDiv.classList.add('relative');
        
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('absolute', 'bottom-0', 'left-0', 'w-full', 'h-[80%]', 'bg-transparent', 'cursor-pointer');
        innerDiv.addEventListener('mouseover', () => playSound(name));
        
        outerDiv.appendChild(innerDiv);
        overlay.appendChild(outerDiv);
    });

   
    continueButton.addEventListener('click', () => {
        continueOverlay.classList.add('hidden');
        overflow.classList.add("overflow-scroll");
    });
});

document.addEventListener('DOMContentLoaded', () =>{
    
});

