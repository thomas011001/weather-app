# Weather App

A simple weather application that allows users to search for weather information by city or country. The app fetches weather data from the Visual Crossing Weather API and displays it in a user-friendly interface.

## Features

- Search for weather information by city or country.
- Displays current temperature, maximum and minimum temperatures, and weather description.
- Responsive design for various screen sizes.

## Technologies Used

- HTML, CSS, and JavaScript
- Webpack for bundling
- Visual Crossing Weather API for weather data

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/thomas011001/weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Build the project for production:

   ```sh
   npm run build
   ```

4. Start the development server:
   ```sh
   npm run start
   ```

## Usage

1. Open the app in your browser.
2. Enter a city or country in the search bar and press Enter.
3. View the weather information displayed in the results section.

## API Key

This project uses the Visual Crossing Weather API. Replace the API key in `src/js/components/Form.js` with your own key:

```js
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${document.getElementById("citySearch").value}?unitGroup=us&key=YOUR_API_KEY&contentType=json`;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by [Thomas Yacoub](https://github.com/thomas011001).
