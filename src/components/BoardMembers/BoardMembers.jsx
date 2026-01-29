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
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3 items-start">
          {/* LEFT — TEXT */}
          <div className="max-w-xl space-y-4">
            <p className="inline-flex items-center rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
              Leadership
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Meet Our Board Members
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Equilibrium Insurance Broker Nig Ltd, our Board Members bring
              extensive experience, strategic insight, and strong governance.
              They are committed to sustainable growth, transparency, and
              delivering long-term value to our clients.
            </p>
          </div>

          {/* RIGHT — BOARD MEMBERS */}
          <ul
            role="list"
            className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-2"
            data-aos="flip-up"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex items-center gap-5">
                  <img
                    alt={person.name}
                    src={person.imageUrl}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-green-100"
                  />

                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-green-700">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
