import { useState } from "react";

export default function Tab() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const data = [
    { id: 1, name: "Toyota Supra", job: "Sports Car", color: "Red" },
    {
      id: 2,
      name: "Nissan Skyline GT-R",
      job: "Performance Car",
      color: "Blue",
    },
    { id: 3, name: "Mazda RX-7", job: "Rotary Engine", color: "Yellow" },
    { id: 4, name: "Honda NSX", job: "Supercar", color: "Black" },
    { id: 5, name: "Subaru Impreza WRX", job: "Rally Car", color: "Blue" },
    {
      id: 6,
      name: "Mitsubishi Lancer Evolution",
      job: "Turbocharged Sedan",
      color: "White",
    },
    { id: 7, name: "Ford Mustang", job: "Muscle Car", color: "Orange" },
    { id: 8, name: "Chevrolet Camaro", job: "American Muscle", color: "Red" },
    { id: 9, name: "Dodge Challenger", job: "V8 Power", color: "Black" },
    { id: 10, name: "BMW M3", job: "Performance Sedan", color: "Silver" },
    { id: 11, name: "Audi R8", job: "V10 Supercar", color: "Gray" },
    {
      id: 12,
      name: "Mercedes-Benz AMG GT",
      job: "Luxury Sports Car",
      color: "Gold",
    },
    { id: 13, name: "Porsche 911", job: "Iconic Sports Car", color: "White" },
    {
      id: 14,
      name: "Lamborghini Huracan",
      job: "Italian Supercar",
      color: "Green",
    },
    { id: 15, name: "Ferrari 488", job: "Exotic Sports Car", color: "Red" },
    { id: 16, name: "McLaren 720S", job: "Track Monster", color: "Orange" },
    { id: 17, name: "Bugatti Chiron", job: "Hypercar", color: "Blue" },
    { id: 18, name: "Koenigsegg Jesko", job: "Speed King", color: "White" },
    { id: 19, name: "Pagani Huayra", job: "Art on Wheels", color: "Gold" },
    {
      id: 20,
      name: "Tesla Model S Plaid",
      job: "Electric Performance",
      color: "Black",
    },
    { id: 21, name: "Rimac Nevera", job: "Electric Hypercar", color: "Silver" },
    { id: 22, name: "Aston Martin DB11", job: "Grand Tourer", color: "Green" },
    { id: 23, name: "Bentley Continental GT", job: "Luxury GT", color: "Blue" },
    {
      id: 24,
      name: "Rolls-Royce Wraith",
      job: "Ultimate Luxury",
      color: "Black",
    },
    { id: 25, name: "Maserati GranTurismo", job: "Italian GT", color: "Red" },
    {
      id: 26,
      name: "Alfa Romeo Giulia Quadrifoglio",
      job: "Performance Sedan",
      color: "White",
    },
    {
      id: 27,
      name: "Jaguar F-Type",
      job: "British Sports Car",
      color: "Orange",
    },
    {
      id: 28,
      name: "Lotus Evora",
      job: "Lightweight Sports Car",
      color: "Yellow",
    },
    {
      id: 29,
      name: "Chevrolet Corvette Z06",
      job: "American Performance",
      color: "Blue",
    },
    { id: 30, name: "Ford GT", job: "Le Mans Racer", color: "Red" },
    { id: 31, name: "Lexus LFA", job: "V10 Screamer", color: "White" },
    {
      id: 32,
      name: "Cadillac CT5-V Blackwing",
      job: "Super Sedan",
      color: "Black",
    },
    { id: 33, name: "Dodge Viper", job: "V10 Beast", color: "Red" },
    { id: 34, name: "Honda Civic Type R", job: "Hot Hatch", color: "Blue" },
    { id: 35, name: "Nissan 350Z", job: "JDM Legend", color: "Gray" },
    { id: 36, name: "Toyota AE86", job: "Drift Icon", color: "White" },
    { id: 37, name: "Mazda MX-5", job: "Lightweight Roadster", color: "Red" },
    {
      id: 38,
      name: "Porsche Taycan Turbo S",
      job: "Electric Performance",
      color: "Silver",
    },
    {
      id: 39,
      name: "Hyundai N Vision 74",
      job: "Hydrogen Hybrid",
      color: "Blue",
    },
    { id: 40, name: "Koenigsegg Agera RS", job: "Speed Demon", color: "Black" },
    { id: 41, name: "Ferrari F40", job: "Legendary Supercar", color: "Red" },
    { id: 42, name: "McLaren F1", job: "Greatest Ever", color: "Gold" },
    { id: 43, name: "Pagani Zonda", job: "V12 Masterpiece", color: "Silver" },
    { id: 44, name: "Lotus Elise", job: "Pure Driving", color: "Green" },
    {
      id: 45,
      name: "Nissan Silvia S15",
      job: "Drift Favorite",
      color: "White",
    },
    {
      id: 46,
      name: "Mitsubishi 3000GT",
      job: "JDM Grand Tourer",
      color: "Red",
    },
    { id: 47, name: "Toyota MR2", job: "Mid-Engine Fun", color: "Blue" },
    {
      id: 48,
      name: "Ford Escort RS Cosworth",
      job: "Rally Legend",
      color: "White",
    },
    {
      id: 49,
      name: "Chevrolet Bel Air",
      job: "Classic Cruiser",
      color: "Blue",
    },
    { id: 50, name: "Datsun 240Z", job: "JDM Classic", color: "Orange" },
  ];

  // Filtragem
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenação
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortKey) return 0;
    if (sortOrder === "asc") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
  });

  // Paginação
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab indicator"
        aria-label="Título"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-4">Título</h1>
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            className="input input-bordered w-full max-w-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-x-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("job")}
                >
                  Job
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("color")}
                >
                  Favorite Color
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{item.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="btn btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ⬅ Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            className="btn btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Próxima ➡
          </button>
        </div>
      </div>
    </>
  );
}
