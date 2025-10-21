document.addEventListener('DOMContentLoaded', () => {
    // Get all necessary elements
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalViewButton = document.getElementById('modal-view-button');
    const projectTiles = document.querySelectorAll('.project-tile');

    // Variable to store the full project URL for the button
    let currentProjectUrl = '';

    // 1. Function to open the modal and populate data
    const openModal = (title, description, url) => {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        currentProjectUrl = url; // Store URL for the button
        modal.style.display = 'block';
        // Prevent body scrolling when modal is open (optional but recommended)
        document.body.style.overflow = 'hidden'; 
    };

    // 2. Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
        // Restore body scrolling
        document.body.style.overflow = ''; 
    };

    // Add click listener to each project tile
    projectTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const title = tile.getAttribute('data-title');
            const description = tile.getAttribute('data-description');
            const url = tile.getAttribute('data-url');
            openModal(title, description, url);
        });
    });

    // Close button in the modal
    closeBtn.addEventListener('click', closeModal);

    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 3. Navigation to the full project page
    modalViewButton.addEventListener('click', () => {
        if (currentProjectUrl) {
            // Navigate to the new page when the button in the pop-up is clicked
            window.location.href = currentProjectUrl;
        }
    });
});
