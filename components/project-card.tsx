interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demoLink?: string;
  githubLink?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export default function ProjectCard({
  title,
  description,
  technologies,
  features,
  demoLink,
  githubLink,
  image,
  status
}: ProjectCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'planned':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-[#D6D3CD] dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="h-48 bg-gradient-to-br from-[#548AB7]/10 to-[#9BB894]/10 flex items-center justify-center">
          <div className="text-6xl opacity-50">🚀</div>
          {/* <Image src={image} alt={title} className="w-full h-full object-cover" /> if i have a image to display*/}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#548AB7] dark:text-white">{title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#C9A064] mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                <span className="text-[#9BB894] mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#C9A064] mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-[#548AB7]/10 text-[#548AB7] dark:bg-[#548AB7]/20 dark:text-[#6FA2CD] rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#548AB7] hover:bg-[#6FA2CD] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors text-sm"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-[#548AB7] text-[#548AB7] hover:bg-[#548AB7] hover:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
