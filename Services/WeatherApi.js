const API_KEY = "d0371904b6c3ab4904d8a01816eebec5";
export const BASE_URL =
  "https://api.openweathermap.org/data/2.5";
export const GEO_URL =
  "https://api.openweathermap.org/geo/1.0";

export const getCurrentWeather = async (city,units='C') => {
  try {
    const apiUnits=units==='C'?'metric':'imperial';
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${apiUnits}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `city ${city} not found, please check the spelling and try again`
        );
      } else if (response.status === 401) {
        throw new Error(
          "Invalid API key, please check your API configuration"
        );
      } else {
        throw new Error(
          "Weather Services temporarilyt unavailable. Please try Again Later."
        );
      }
    }
    const data = await response.json();
    // check if data has timestamp
    if (!data.dt) {
      data.dt = Math.floor(Date.now() / 1000);
    }
    return data;
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("fetch")
    ) {
      throw new Error(
        "Network error: Please check your internet connection and try again."
      );
    }
    throw error;
  }
};
export const getCurrentWeatherbycoords = async (
  lat,
  lon,units='C'
) => {
    const apiUnits = units === 'C' ? 'metric' : 'imperial';
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${apiUnits}`
    );
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          "Invalid API key, please check your API configuration"
        );
      } else {
        throw new Error(
          "Weather Services temporarilyt unavailable. Please try Again Later."
        );
      }
    }
    const data = await response.json();
    // check if data has timestamp
    if (!data.dt) {
      data.dt = Math.floor(Date.now() / 1000);
    }
    return data;
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes.includes("fetch")
    ) {
      throw new Error(
        "Network error: Please check your internet connection and try again."
      );
    }
    throw error;
  }
};

export const getWeatherForecast = async (city,units='C') => {
    const apiUnits = units === 'C' ? 'metric' : 'imperial';
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${apiUnits}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `city ${city} not found, please check the spelling and try again`
        );
      } else if (response.status === 401) {
        throw new Error(
          "Invalid API key, please check your API configuration"
        );
      } else {
        throw new Error(
          "Weather Services temporarilyt unavailable. Please try Again Later."
        );
      }
    }
    const data = await response.json();
    // check if data has timestamp
    if (!data.dt) {
      data.dt = Math.floor(Date.now() / 1000);
    }
    return data;
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("fetch")
    ) {
      throw new Error(
        "Network error: Please check your internet connection and try again."
      );
    }
    throw error;
  }
};
export const searchCities = async (query) => {
  try {
    const response = await fetch(
      `${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          "Invalid API key, please check your API configuration"
        );
      } else {
        throw new Error(
          "Weather services temporarily unavailable. Please try again later."
        );
      }
    }

    const data = await response.json();

    // Transform data: only keep required fields
    return data.map((city) => ({
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      country: city.country,
      state: city.state || "",
      dt: Math.floor(Date.now() / 1000), // add timestamp
    }));
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("fetch")
    ) {
      throw new Error(
        "Network error: Please check your internet connection and try again."
      );
    }
    throw error;
  }
};
