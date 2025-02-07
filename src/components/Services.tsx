import Link from "next/link"
import "./Services.css"

const services = [
  {
    number: "1",
    title: "Casting Services",
    description:
      "We specialize in producing high-quality metal parts through advanced die casting techniques",
    link: "Our aluminum castings in detail",
  },
  {
    number: "2",
    title: "Quality Assurance and Testing",
    description:
   "We maintain strict in-house quality control to ensure that all parts meet customer specifications" 
   ,link: "Our CNC machining services casting in detail",
  },
  {
    number: "3",
    title: "Finishing and Treatment",
    description:
      "Our finishing and treatment services enhance the durability, appearance, and performance of the cast parts",
    link: "Our metal casting and forging services in detail",
  },
  {
    number: "4",
    title: "PROTOTYPING",
    description:
      "Our design team can produce accurate, high quality and fully functional metal and plastic prototypes with unprecedented turnaround times.",
    link: "Learn more about our prototyping services",
  },
  {
    number: "5",
    title: "Additional Services",
    description:
      "",
    link: "Learn more",
  },

  
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-lg italic text-gray-600 mb-2">What We Do</p>
          <h2 className="text-4xl font-bold font-['Outfit'] text-blue-900 leading-tight">Specialized Manufacturing Services</h2>
          <h3 className="text-4xl font-['Outfit'] text-blue-900 leading-tight">for your next project</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="metallic-number text-8xl md:text-9xl font-bold">{service.number}</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  {service.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
