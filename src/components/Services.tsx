
import { Code, LayoutDashboard, Mail, Server } from "lucide-react";

const services = [
  {
    name: 'Web Development',
    description: 'We create responsive and user-friendly websites tailored to your business needs.',
    icon: Code,
  },
  {
    name: 'UI/UX Design',
    description: 'Our design team crafts intuitive and visually appealing user interfaces.',
    icon: LayoutDashboard,
  },
  {
    name: 'Email Marketing',
    description: 'Reach your customers with targeted email campaigns that drive engagement.',
    icon: Mail,
  },
  {
    name: 'Server Management',
    description: 'We ensure your servers are running smoothly and efficiently, so you can focus on your business.',
    icon: Server,
  },
];

export const Services = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <service.icon className="w-6 h-6 text-accent mb-2 mx-auto" />
              <h3 className="text-xl font-medium mb-2 text-foreground">{service.name}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
