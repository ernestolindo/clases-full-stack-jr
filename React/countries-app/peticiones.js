async function get() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  console.log(data);
}

get();
