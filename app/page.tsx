type Car = {
  _id: string;
  Name: string;
  Price: number;
};

function getCars(): Promise<Car[]> {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      : "";

  return fetch(`${baseUrl}/api/cars`, { cache: "no-store" }).then((res) =>
    res.json()
  );
}

export default function Home() {
  return getCars().then((cars) => (
    <div>
      <h1>Cars Collection</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <strong>{car.Name}</strong> — ₹{car.Price}
          </li>
        ))}
      </ul>
    </div>
  ));
}