import Container from "../ui/Container";

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <Container>

        <h2 className="text-4xl font-bold text-center mb-14">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="mt-4 text-3xl font-bold">$99</p>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded">
              Choose Plan
            </button>
          </div>

          <div className="p-8 bg-blue-600 text-white rounded-2xl shadow scale-105">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-4 text-3xl font-bold">$199</p>
            <button className="mt-6 w-full bg-white text-blue-600 py-2 rounded">
              Choose Plan
            </button>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-4 text-3xl font-bold">$299</p>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded">
              Choose Plan
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}