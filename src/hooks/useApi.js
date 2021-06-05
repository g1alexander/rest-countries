export async function useApi() {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/"),
      countries = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    return countries;
  } catch (err) {
    console.error(err);
  }
}

export async function useApiOne(name) {
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`),
      country = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    return country;
  } catch (err) {
    console.error(err);
  }
}
