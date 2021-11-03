const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#ecf0f1",
        success: "#2ecc71",
        info: "#2980b9",
        warning: "#e67e22",
        danger: "#e74c3c",
        light: "#EEEEEE",
        dark: "#111111",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// $blue:    #0d6efd !default;
// $indigo:  #6610f2 !default;
// $purple:  #6f42c1 !default;
// $pink:    #d63384 !default;
// $red:     #dc3545 !default;
// $orange:  #fd7e14 !default;
// $yellow:  #fadb14 !default;
// $green:   #52c41a !default;
// $teal:    #20c997 !default;
// $cyan:    #17a2b8 !default;

// $primary:       $blue !default;
// $secondary:     $gray-600 !default;
// $success:       $green !default;
// $info:          $cyan !default;
// $warning:       $yellow !default;
// $danger:        $red !default;
// $light:         $gray-100 !default;
// $dark:          $gray-800 !default;
