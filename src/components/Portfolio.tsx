
const projects = [
  {
    name: 'Project 1',
    description: 'A brief description of Project 1.',
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    name: 'Project 2',
    description: 'A brief description of Project 2.',
    imageUrl: 'https://picsum.photos/401/300',
  },
  {
    name: 'Project 3',
    description: 'A brief description of Project 3.',
    imageUrl: 'https://picsum.photos/400/301',
  },
];

export const Portfolio = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-foreground">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
