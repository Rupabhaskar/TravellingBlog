import CountryCard from '../../components/CountryCard';

async function getCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
}

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {countries.slice(0, 20).map((country) => (
          <CountryCard
            key={country.cca3}
            name={country.name.common}
            capital={country.capital?.[0]}
            flag={country.flags.svg}
            slug={country.name.common.toLowerCase().replace(/\s+/g, '-')}
          />
        ))}
      </div>
    </div>
  );
}
