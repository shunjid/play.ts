// Function
const logNumber = (i: number): void => console.log(i);
const sum = (a: number, b: number): number => a + b;

// interface
enum Weather {
  Sunny,
  Rainy,
  Haze,
}

interface forecast {
  date: Date;
  weather: Weather;
}

const forecastLogger = ({ date, weather }: forecast): void => {
  console.log(date, weather);
};

forecastLogger({
  date: new Date(),
  weather: Weather.Rainy,
});
