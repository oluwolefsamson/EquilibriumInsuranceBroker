const people = [
  {
    name: "MR. SEYI ADEDIRAN",
    role: "Chairman",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "DR. SINI KWABE",
    role: "Executive Vice Chairman",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "MR. YORKINA BARITORGE GIDEON",
    role: "Managing Director",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "MR. SEUN OWAOLABI",
    role: "Director of Finance",
    imageUrl: "",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            At Equilibrium Insurance Broker Nig Ltd, our leadership team is
            committed to providing top-notch insurance solutions, driven by a
            passion for excellence and a dedication to ensuring your peace of
            mind.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
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
