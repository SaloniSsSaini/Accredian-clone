import Container from "../ui/Container";

export default function Logos() {
  const logos = ["Google", "Amazon", "Microsoft", "Meta"];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <p className="text-center text-gray-500 mb-8">
          Trusted by leading companies
        </p>

        <div className="flex justify-center flex-wrap gap-10 text-xl font-semibold opacity-70">
          {logos.map((logo, i) => (
            <span key={i}>{logo}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}