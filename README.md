# ReWear - Community Clothing Exchange

A modern web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system. The goal is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.

## 🌟 Features

### User Authentication
- Email/password signup and login
- Secure authentication with protected routes
- User profile management

### Landing Page
- Platform introduction with compelling messaging
- Calls-to-action: "Start Swapping", "Browse Items", "List an Item"
- Featured items carousel with automatic rotation
- Community statistics and impact metrics

### User Dashboard
- Profile details and points balance display
- Uploaded items overview with status tracking
- Ongoing and completed swaps list
- Activity statistics and community rating

### Item Detail Page
- Image gallery with multiple photo support
- Full item description and specifications
- Uploader information and ratings
- Options: "Swap Request" or "Redeem via Points"
- Item availability status
- Detailed measurements and tags

### Add New Item Page
- Drag-and-drop image upload (up to 5 images)
- Comprehensive form with all required fields:
  - Title, description, category, type, size
  - Condition, brand, color, material
  - Points value and tags
- Real-time form validation
- Image preview and management

### Browse Items
- Advanced filtering by category, size, and condition
- Search functionality across titles, descriptions, and tags
- Grid and list view modes
- Sorting options (newest, oldest, points, popularity)
- Item cards with key information

### Admin Role
- Moderate and approve/reject item listings
- Remove inappropriate or spam items
- Lightweight admin panel for oversight
- Flagging system for suspicious content
- Comprehensive statistics and analytics

## 🚀 Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Custom CSS with modern design system
- **Icons**: Font Awesome
- **Server**: HTTP Server for development
- **No Build Process**: Pure vanilla implementation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ReWear
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - No build step needed for vanilla JS
- `npm run preview` - Preview the application

## 🎨 Design System

The application uses a custom design system built with modern CSS:

### Colors
- **Primary**: Blue gradient (#0284c7 to #0369a1)
- **Secondary**: Purple gradient (#c026d3 to #a21caf)
- **Success**: Green (#16a34a)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#dc2626)

### Components
- **Buttons**: Primary, secondary, and danger variants
- **Cards**: Consistent card design with shadows
- **Forms**: Styled input fields with focus states
- **Modals**: Overlay modals for user interactions

## 🔐 Authentication

The application includes a mock authentication system:

### Demo Credentials
- **Regular User**: Any email/password combination
- **Admin User**: `admin@rewear.com` / `password`

### Features
- Persistent login state (localStorage)
- Protected routes for authenticated users
- Admin-only routes for administrative functions
- Automatic redirect to login for unauthenticated users

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Features Implementation

### Point System
- Users earn points by listing items
- Points can be used to redeem other items
- Point balance displayed in navigation and dashboard
- Automatic point deduction on redemption

### Swap System
- Direct item-to-item swaps
- Swap request functionality
- Pending, accepted, and completed swap states
- User communication for swap coordination

### Image Management
- File upload interface
- Multiple image support (up to 5 per item)
- Image preview and removal
- Automatic main image designation

### Search and Filtering
- Real-time search across multiple fields
- Category and size filtering
- Condition-based filtering
- Sort by various criteria

## 🛠️ Development Notes

### File Structure
```
ReWear/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All styles
├── js/
│   └── app.js          # All JavaScript functionality
├── package.json        # Project configuration
└── README.md           # Documentation
```

### State Management
- Authentication state managed via localStorage
- Local component state for forms and UI interactions
- Mock data for demonstration purposes

### Performance Optimizations
- Lazy loading of images
- Efficient filtering and sorting algorithms
- Responsive image loading
- No build process overhead

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **No build step required** - Pure vanilla JavaScript
2. **Deploy all files** to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Unsplash for high-quality stock images
- Font Awesome for beautiful icons
- Modern CSS for the styling framework
- Vanilla JavaScript community for excellent documentation

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**ReWear** - Making sustainable fashion accessible to everyone! 🌱👕
