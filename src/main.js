const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
btn.addEventListener('click', function(){
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
const testimonials = [
  {
    image: '/manage-landing-page-master/images/avatar-ali.png',
    name: 'Ali Bravo',
    text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
  },
  {
    image: '/manage-landing-page-master/images/avatar-anisha.png',
    name: 'Anisha Li',
    text: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    
  },
  {
    image: '/manage-landing-page-master/images/avatar-richard.png',
    name: 'Richard Watts',
    text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
   
  },
   {
    image: '/manage-landing-page-master/images/avatar-shanai.png',
    name: 'Shanai Gough',
    text: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive.”'
   
  }
];

const carouselContainer = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');

let activeIndex = 0;

function renderCarousel() {
  // Render slide
  carouselContainer.innerHTML = `
    <div class=" bg-gray-300  items-center shadow-lg p-6 rounded-lg  transition duration-500 ease-in-out">
      <img  src="${testimonials[activeIndex].image}" alt="${testimonials[activeIndex].name}"
           class="mx-auto  rounded-full w-20 h-20 mb-4">
      <h3 class="font-bold text-lg text-gray-800">${testimonials[activeIndex].name}</h3>
      <p class="mt-2 text-gray-500 italic text-sm">${testimonials[activeIndex].text}</p>
    </div>
  `;

  // Render dots
  dotsContainer.innerHTML = '';
  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`;
    dot.addEventListener('click', () => {
      activeIndex = i;
      renderCarousel();
    });
    dotsContainer.appendChild(dot);
  });
}

// Autoplay
setInterval(() => {
  activeIndex = (activeIndex + 1) % testimonials.length;
  renderCarousel();
}, 5000);

// Initial render
renderCarousel();
