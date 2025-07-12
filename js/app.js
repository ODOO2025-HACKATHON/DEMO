// App State
let currentUser = null;
let currentPage = 'landing';
let items = [];
let users = [];
let swaps = [];

// Mock Data
const mockItems = [
    {
        id: 1,
        title: "Vintage Denim Jacket",
        description: "Classic vintage denim jacket in excellent condition. Size M.",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
        points: 50,
        category: "clothing",
        userId: 2,
        status: "active",
        views: 24,
        likes: 8,
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        title: "Summer Dress",
        description: "Beautiful summer dress perfect for warm days. Size S.",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
        points: 30,
        category: "clothing",
        userId: 3,
        status: "active",
        views: 12,
        likes: 3,
        createdAt: "2024-01-14"
    },
    {
        id: 3,
        title: "Casual Sneakers",
        description: "Comfortable casual sneakers in good condition. Size 9.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        points: 40,
        category: "shoes",
        userId: 4,
        status: "active",
        views: 45,
        likes: 15,
        createdAt: "2024-01-13"
    },
    {
        id: 4,
        title: "Winter Coat",
        description: "Warm winter coat perfect for cold weather. Size L.",
        image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop",
        points: 60,
        category: "clothing",
        userId: 5,
        status: "active",
        views: 18,
        likes: 6,
        createdAt: "2024-01-12"
    }
];

const mockUsers = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@rewear.com",
        password: "password",
        points: 500,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        isAdmin: true,
        createdAt: "2024-01-01"
    },
    {
        id: 2,
        name: "Sarah M.",
        email: "sarah@example.com",
        password: "password",
        points: 120,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
        isAdmin: false,
        createdAt: "2024-01-02"
    },
    {
        id: 3,
        name: "Mike R.",
        email: "mike@example.com",
        password: "password",
        points: 85,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
        isAdmin: false,
        createdAt: "2024-01-03"
    },
    {
        id: 4,
        name: "Emma L.",
        email: "emma@example.com",
        password: "password",
        points: 200,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
        isAdmin: false,
        createdAt: "2024-01-04"
    },
    {
        id: 5,
        name: "David K.",
        email: "david@example.com",
        password: "password",
        points: 150,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
        isAdmin: false,
        createdAt: "2024-01-05"
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load mock data
    items = [...mockItems];
    users = [...mockUsers];
    
    // Check for existing session
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForUser();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize carousel
    initializeCarousel();
    
    // Show landing page
    showPage('landing');
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            showPage(page);
        });
    });
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Add item form
    const addItemForm = document.getElementById('add-item-form');
    if (addItemForm) {
        addItemForm.addEventListener('submit', handleAddItem);
    }
    
    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Password toggles
    setupPasswordToggles();
    
    // Dashboard tabs
    setupDashboardTabs();
    
    // Search and filters
    setupSearchAndFilters();
}

function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Load page-specific content
        loadPageContent(pageName);
    }
}

function loadPageContent(pageName) {
    switch (pageName) {
        case 'browse':
            loadBrowsePage();
            break;
        case 'dashboard':
            if (!currentUser) {
                showPage('login');
                return;
            }
            loadDashboardPage();
            break;
        case 'add-item':
            if (!currentUser) {
                showPage('login');
                return;
            }
            break;
        case 'admin':
            if (!currentUser || !currentUser.isAdmin) {
                showPage('login');
                return;
            }
            loadAdminPage();
            break;
    }
}

function loadBrowsePage() {
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    items.forEach(item => {
        const user = users.find(u => u.id === item.userId);
        const itemCard = createItemCard(item, user);
        itemsGrid.appendChild(itemCard);
    });
}

function createItemCard(item, user) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="item-image">
        <div class="item-details">
            <h4 class="item-title">${item.title}</h4>
            <div class="item-meta">
                <span class="item-points">${item.points} points</span>
                <span class="item-user">by ${user ? user.name : 'Unknown'}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        // Could add item detail view here
        console.log('Viewing item:', item);
    });
    
    return card;
}

function loadDashboardPage() {
    if (!currentUser) return;
    
    // Update user info
    document.getElementById('dashboard-welcome').textContent = `Welcome back, ${currentUser.name}!`;
    document.getElementById('dashboard-points').textContent = currentUser.points;
    document.getElementById('dashboard-avatar').src = currentUser.avatar;
    
    // Load overview tab by default
    loadOverviewTab();
}

function loadOverviewTab() {
    // Load stats
    const statsGrid = document.getElementById('dashboard-stats');
    if (statsGrid) {
        const userItems = items.filter(item => item.userId === currentUser.id);
        const userSwaps = swaps.filter(swap => swap.userId === currentUser.id);
        
        const stats = [
            { label: "Items Listed", value: userItems.length, icon: "fas fa-gift", color: "text-blue-600" },
            { label: "Successful Swaps", value: userSwaps.filter(s => s.status === 'completed').length, icon: "fas fa-check-circle", color: "text-green-600" },
            { label: "Community Rating", value: "4.8", icon: "fas fa-heart", color: "text-red-600" },
            { label: "Points Earned", value: currentUser.points, icon: "fas fa-trending-up", color: "text-purple-600" }
        ];
        
        statsGrid.innerHTML = '';
        stats.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'stat-card';
            statCard.innerHTML = `
                <div class="stat-content">
                    <div class="stat-icon">
                        <i class="${stat.icon}"></i>
                    </div>
                    <div class="stat-details">
                        <p class="stat-label">${stat.label}</p>
                        <p class="stat-value">${stat.value}</p>
                    </div>
                </div>
            `;
            statsGrid.appendChild(statCard);
        });
    }
    
    // Load recent activity
    const activityList = document.getElementById('recent-activity');
    if (activityList) {
        activityList.innerHTML = '<p class="text-center text-gray-500">No recent activity</p>';
    }
}

function loadAdminPage() {
    if (!currentUser || !currentUser.isAdmin) return;
    
    // Update admin stats
    document.getElementById('total-users').textContent = users.length;
    document.getElementById('total-items').textContent = items.length;
    document.getElementById('active-swaps').textContent = swaps.filter(s => s.status === 'pending').length;
    
    // Load admin activity
    const adminActivity = document.getElementById('admin-activity');
    if (adminActivity) {
        adminActivity.innerHTML = '<p class="text-center text-gray-500">No recent admin activity</p>';
    }
}

function initializeCarousel() {
    const container = document.getElementById('carousel-container');
    const indicators = document.getElementById('carousel-indicators');
    
    if (!container || !indicators) return;
    
    // Create carousel slides
    items.slice(0, 4).forEach((item, index) => {
        const user = users.find(u => u.id === item.userId);
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.style.transform = `translateX(${index * 100}%)`;
        
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="carousel-image">
            <div class="carousel-details">
                <h3 class="carousel-title">${item.title}</h3>
                <div class="carousel-meta">
                    <span class="carousel-points">${item.points} points</span>
                    <span class="carousel-user">by ${user ? user.name : 'Unknown'}</span>
                </div>
                <p class="carousel-description">
                    This beautiful piece is ready for a new home. Exchange it for points 
                    or find a direct swap that matches your style.
                </p>
                <a href="#" class="btn-primary" data-page="browse">
                    View Details
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        container.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : 'inactive'}`;
        indicator.addEventListener('click', () => {
            showCarouselSlide(index);
        });
        indicators.appendChild(indicator);
    });
    
    // Auto-rotate carousel
    let currentSlide = 0;
    setInterval(() => {
        currentSlide = (currentSlide + 1) % Math.min(items.length, 4);
        showCarouselSlide(currentSlide);
    }, 3000);
}

function showCarouselSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    
    indicators.forEach((indicator, i) => {
        indicator.className = `carousel-indicator ${i === index ? 'active' : 'inactive'}`;
    });
}

function setupPasswordToggles() {
    const toggles = [
        { button: 'toggle-password', input: 'login-password' },
        { button: 'toggle-signup-password', input: 'signup-password' },
        { button: 'toggle-signup-confirm-password', input: 'signup-confirm-password' }
    ];
    
    toggles.forEach(({ button, input }) => {
        const toggleBtn = document.getElementById(button);
        const inputField = document.getElementById(input);
        
        if (toggleBtn && inputField) {
            toggleBtn.addEventListener('click', () => {
                const type = inputField.type === 'password' ? 'text' : 'password';
                inputField.type = type;
                toggleBtn.innerHTML = `<i class="fas fa-${type === 'password' ? 'eye' : 'eye-slash'}"></i>`;
            });
        }
    });
}

function setupDashboardTabs() {
    const tabButtons = document.querySelectorAll('.dashboard-tabs .tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName + '-tab').classList.add('active');
            
            // Load tab content
            switch (tabName) {
                case 'overview':
                    loadOverviewTab();
                    break;
                case 'items':
                    loadUserItems();
                    break;
                case 'swaps':
                    loadUserSwaps();
                    break;
            }
        });
    });
}

function loadUserItems() {
    if (!currentUser) return;
    
    const userItemsGrid = document.getElementById('user-items-grid');
    if (!userItemsGrid) return;
    
    const userItems = items.filter(item => item.userId === currentUser.id);
    
    userItemsGrid.innerHTML = '';
    
    if (userItems.length === 0) {
        userItemsGrid.innerHTML = '<p class="text-center text-gray-500">No items listed yet</p>';
        return;
    }
    
    userItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="item-image">
            <div class="item-details">
                <h4 class="item-title">${item.title}</h4>
                <div class="item-meta">
                    <span class="item-points">${item.points} points</span>
                    <span class="status-badge status-${item.status}">${item.status}</span>
                </div>
                <div class="item-stats">
                    <span>${item.views} views</span>
                    <span>${item.likes} likes</span>
                </div>
            </div>
        `;
        userItemsGrid.appendChild(itemCard);
    });
}

function loadUserSwaps() {
    if (!currentUser) return;
    
    const swapsList = document.getElementById('swaps-list');
    if (!swapsList) return;
    
    const userSwaps = swaps.filter(swap => swap.userId === currentUser.id);
    
    swapsList.innerHTML = '';
    
    if (userSwaps.length === 0) {
        swapsList.innerHTML = '<p class="text-center text-gray-500">No swaps yet</p>';
        return;
    }
    
    userSwaps.forEach(swap => {
        const swapCard = document.createElement('div');
        swapCard.className = 'swap-card';
        swapCard.innerHTML = `
            <div class="swap-content">
                <div>
                    <h4 class="swap-title">${swap.itemTitle} ↔ ${swap.swapWith}</h4>
                    <p class="swap-user">with ${swap.otherUser}</p>
                    <p class="swap-date">Requested on ${swap.date}</p>
                </div>
                <div class="swap-actions">
                    <span class="status-badge status-${swap.status}">${swap.status}</span>
                    ${swap.status === 'pending' ? `
                        <div class="swap-buttons">
                            <button class="btn-primary text-sm px-3 py-1">Accept</button>
                            <button class="btn-secondary text-sm px-3 py-1">Decline</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        swapsList.appendChild(swapCard);
    });
}

function setupSearchAndFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterItems);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterItems);
    }
}

function filterItems() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const category = document.getElementById('category-filter')?.value || '';
    
    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                            item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || item.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    if (filteredItems.length === 0) {
        itemsGrid.innerHTML = '<p class="text-center text-gray-500">No items found</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const user = users.find(u => u.id === item.userId);
        const itemCard = createItemCard(item, user);
        itemsGrid.appendChild(itemCard);
    });
}

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');
    
    // Show loading
    const submitBtn = document.getElementById('login-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner"></div>';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = { ...user };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUIForUser();
            showSuccessModal('Login successful! Welcome back.');
            showPage('dashboard');
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        errorDiv.textContent = error.message || 'Failed to login. Please check your credentials.';
        errorDiv.style.display = 'block';
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

async function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const errorDiv = document.getElementById('signup-error');
    
    // Validation
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match';
        errorDiv.style.display = 'block';
        return;
    }
    
    if (password.length < 6) {
        errorDiv.textContent = 'Password must be at least 6 characters long';
        errorDiv.style.display = 'block';
        return;
    }
    
    if (users.find(u => u.email === email)) {
        errorDiv.textContent = 'Email already exists';
        errorDiv.style.display = 'block';
        return;
    }
    
    // Show loading
    const submitBtn = document.getElementById('signup-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner"></div>';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password,
            points: 100,
            avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&v=${Date.now()}`,
            isAdmin: false,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        users.push(newUser);
        currentUser = { ...newUser };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUIForUser();
        showSuccessModal('Account created successfully! Welcome to ReWear.');
        showPage('dashboard');
    } catch (error) {
        errorDiv.textContent = error.message || 'Failed to create account. Please try again.';
        errorDiv.style.display = 'block';
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

async function handleAddItem(e) {
    e.preventDefault();
    
    const title = document.getElementById('item-title').value;
    const description = document.getElementById('item-description').value;
    const category = document.getElementById('item-category').value;
    const points = parseInt(document.getElementById('item-points').value);
    const imageFile = document.getElementById('item-image').files[0];
    
    if (!imageFile) {
        alert('Please select an image');
        return;
    }
    
    // Show loading
    const submitBtn = e.target.querySelector('.submit-button');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner"></div>';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newItem = {
            id: items.length + 1,
            title,
            description,
            image: URL.createObjectURL(imageFile),
            points,
            category,
            userId: currentUser.id,
            status: 'active',
            views: 0,
            likes: 0,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        items.push(newItem);
        showSuccessModal('Item listed successfully!');
        showPage('dashboard');
    } catch (error) {
        alert('Failed to list item. Please try again.');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUIForUser();
    showPage('landing');
}

function updateUIForUser() {
    const navbarUser = document.getElementById('navbar-user');
    const authButtons = document.getElementById('auth-buttons');
    const addItemLink = document.getElementById('add-item-link');
    const dashboardLink = document.getElementById('dashboard-link');
    const adminLink = document.getElementById('admin-link');
    const mobileAddItem = document.getElementById('mobile-add-item');
    const mobileDashboard = document.getElementById('mobile-dashboard');
    const mobileAdmin = document.getElementById('mobile-admin');
    const mobileLogin = document.getElementById('mobile-login');
    const mobileSignup = document.getElementById('mobile-signup');
    
    if (currentUser) {
        // Show user info
        if (navbarUser) navbarUser.style.display = 'flex';
        if (authButtons) authButtons.style.display = 'none';
        if (addItemLink) addItemLink.style.display = 'inline';
        if (dashboardLink) dashboardLink.style.display = 'inline';
        if (mobileAddItem) mobileAddItem.style.display = 'block';
        if (mobileDashboard) mobileDashboard.style.display = 'block';
        if (mobileLogin) mobileLogin.style.display = 'none';
        if (mobileSignup) mobileSignup.style.display = 'none';
        
        // Show admin link if user is admin
        if (currentUser.isAdmin) {
            if (adminLink) adminLink.style.display = 'inline';
            if (mobileAdmin) mobileAdmin.style.display = 'block';
        } else {
            if (adminLink) adminLink.style.display = 'none';
            if (mobileAdmin) mobileAdmin.style.display = 'none';
        }
        
        // Update user info
        const userPoints = document.getElementById('user-points');
        const userName = document.getElementById('user-name');
        if (userPoints) userPoints.textContent = currentUser.points;
        if (userName) userName.textContent = currentUser.name;
    } else {
        // Show auth buttons
        if (navbarUser) navbarUser.style.display = 'none';
        if (authButtons) authButtons.style.display = 'flex';
        if (addItemLink) addItemLink.style.display = 'none';
        if (dashboardLink) dashboardLink.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
        if (mobileAddItem) mobileAddItem.style.display = 'none';
        if (mobileDashboard) mobileDashboard.style.display = 'none';
        if (mobileAdmin) mobileAdmin.style.display = 'none';
        if (mobileLogin) mobileLogin.style.display = 'block';
        if (mobileSignup) mobileSignup.style.display = 'block';
    }
}

function showSuccessModal(message) {
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    
    if (modal && modalMessage) {
        modalMessage.textContent = message;
        modal.style.display = 'flex';
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            modal.style.display = 'none';
        }, 3000);
    }
}

// Close modal when clicking the close button
document.addEventListener('DOMContentLoaded', function() {
    const modalClose = document.getElementById('modal-close');
    const modal = document.getElementById('success-modal');
    
    if (modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Utility functions
function showLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'flex';
}

function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'none';
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
} 