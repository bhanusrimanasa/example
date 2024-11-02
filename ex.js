// frontend/src/index.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher
    const themeSelector = document.getElementById('theme');
    themeSelector.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.target.value);
        localStorage.setItem('preferred-theme', e.target.value);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeSelector.value = savedTheme;
    }

    // Populate college and branch filters
    const colleges = ['IIT Delhi', 'IIT Bombay', 'NIT Trichy', 'BITS Pilani'];
    const branches = ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Chemical'];

    const collegeFilter = document.getElementById('collegeFilter');
    const branchFilter = document.getElementById('branchFilter');

    colleges.forEach(college => {
        const option = document.createElement('option');
        option.value = college;
        option.textContent = college;
        collegeFilter.appendChild(option);
    });

    branches.forEach(branch => {
        const option = document.createElement('option');
        option.value = branch;
        option.textContent = branch;
        branchFilter.appendChild(option);
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        const searchQuery = document.getElementById('searchInput').value;
        const selectedCollege = collegeFilter.value;
        const selectedBranch = branchFilter.value;

        // Here you would typically make an API call to the backend
        console.log('Search params:', {
            query: searchQuery,
            college: selectedCollege,
            branch: selectedBranch
        });
    });
});
