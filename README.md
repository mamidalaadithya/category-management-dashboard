
- **Component-based structure**: Each functional unit is encapsulated in its own file.
- **Reusable logic**: Functions like `handleLogin`, `addCategory`, `deleteCategory` are separated and passed as props.
- **Protected routes**: Ensures only authenticated users can access the dashboard and edit page.
- **Modular CSS**: Class naming follows BEM-like patterns to ensure clarity and scalability.

---

## ✅ Feature Completeness

- 🔐 **Login with authentication**
- 📦 **View, add, edit, and delete categories**
- 💾 **Data persistence with localStorage**
- 🚫 **404 page for unmatched routes**
- 🧪 **Client-side validation**
- 🚀 **Protected routes**

---

## 🎨 UI/UX Professionalism

- Modern, minimalist, and consistent UI using soft shadows, rounded corners, and muted colors.
- Accessible color contrast with visual feedback on hover and focus.
- Modal overlay for editing to ensure the user stays within context.
- Responsive design across desktops, tablets, and mobiles.
- Centralized error and success messaging styles for clarity.

---

## ⚠️ Error Handling & Validations

- Login form prevents empty submissions and displays proper validation messages.
- Edit form validates all required fields (name and itemCount).
- Error fallback: If category loading fails, default sample data is loaded.
- Edge case handling: Invalid or missing category ID redirects to home.

---

## 💻 Clean and Responsive Frontend

- **Flexbox** and **CSS Grid** used to create a responsive and mobile-friendly layout.
- Custom breakpoints:
  - `@media (max-width: 768px)` — Tablet responsiveness
  - `@media (max-width: 480px)` — Mobile responsiveness
- Uses semantic HTML elements and class-based styling.
- Fonts and color palette are consistent across views.

---

## ⚙️ API Efficiency and Correctness

> Since the app uses `localStorage` as its data store and doesn’t connect to a backend API, efficiency is based on optimized client-side logic.

- Minimal re-renders by handling updates in memory and syncing only when necessary.
- Efficient category updates with `map`, `filter` and immutability best practices.
- Uses `Date.now()` for unique ID generation without overhead.

---

## 📝 Login Credentials

Use the following credentials to log in:
- **Username**: `Adithya`
- **Password**: `12345678`

---

## 📌 Future Improvements

- ⛅ Connect to a real backend (e.g., Firebase, Express + MongoDB)
- 🧾 Add pagination and search filtering
- 🔄 Add animations and transition effects
- 👥 Multi-user support with roles and permissions
- ✅ Unit testing with Jest & React Testing Library

---

## 📷 Screenshots

> You can optionally add some UI screenshots here for better documentation.

---

## 📃 License

MIT License

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
