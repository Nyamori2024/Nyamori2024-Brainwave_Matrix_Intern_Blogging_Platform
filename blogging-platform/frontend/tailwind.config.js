/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript, TypeScript, and JSX/TSX files in the src directory
  ],
  theme: {
    extend: {
      // You can customize your theme here (e.g., add colors, spacing, etc.)
    },
  },
  plugins: [
    // Add plugins here if needed (e.g., require('@tailwindcss/forms'))
  ],
};
