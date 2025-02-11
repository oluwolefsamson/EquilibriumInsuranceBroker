const people = [
  {
    name: "MR. SEYI ADEDIRAN",
    role: "Chairman",
    imageUrl: "./seyi1.png",
  },
  {
    name: "DR. SINI KWABE",
    role: "Board Member",
    imageUrl: "./sini.png",
  },

  {
    name: "MRS. TAIWO ADEDIRAN",
    role: "Board Member",
    imageUrl: "./taiwo.png",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="py-3 text-3xl font-semibold tracking-tight  sm:text-5xl text-blue-600 ">
            Meet Our Board Members
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            At Equilibrium Insurance Broker Nig Ltd, our Board Members bring a
            wealth of experience and strategic vision to the company. They are
            dedicated to guiding the organization toward sustainable growth
            while ensuring the highest standards of corporate governance and
            customer satisfaction.
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          data-aos="flip-up"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt={`${person.name}`}
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
