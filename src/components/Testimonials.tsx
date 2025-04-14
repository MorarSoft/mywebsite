
const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'MorarSoft delivered an exceptional website that exceeded our expectations. Highly recommended!',
    imageUrl: 'https://picsum.photos/50/50',
  },
  {
    name: 'Jane Smith',
    testimonial: 'Their UI/UX design transformed our application. It is now user-friendly and visually appealing.',
    imageUrl: 'https://picsum.photos/51/50',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg shadow-md">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
              <p className="text-muted-foreground italic mb-2">"{testimonial.testimonial}"</p>
              <h4 className="text-lg font-medium text-foreground">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
