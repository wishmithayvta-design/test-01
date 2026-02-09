// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('py-4'); // If you had initial padding
    } else {
        navbar.classList.remove('shadow-md');
    }
});


// Add to Cart Interaction
const addToCartButtons = document.querySelectorAll('button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if it's an add to cart button (by checking inner content or class)
        // For this demo, we assume the icon buttons on product cards are add to cart
        if(button.querySelector('svg') && !button.id.includes('mobile')) {
            e.preventDefault();
            showToast('Added to bag! 🛍️');
            
            // Update cart count (simulated)
            const badges = document.querySelectorAll('.bg-brand-dark.rounded-full.text-xs');
            badges.forEach(badge => {
                let count = parseInt(badge.innerText);
                badge.innerText = count + 1;
                
                // Animate badge
                badge.classList.add('scale-125');
                setTimeout(() => badge.classList.remove('scale-125'), 200);
            });
        }
    });
});

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-5 right-5 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 flex items-center gap-2';
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    }, 10);
    
    // Remove after 3s
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
