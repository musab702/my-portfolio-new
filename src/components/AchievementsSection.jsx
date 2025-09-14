import { Award, BookOpen, Cloud, ExternalLink } from "lucide-react";

const achievements = [
  {
    id: 1,
    type: "certification",
    title: "AWS Certified Developer - Associate",
    description: "Validates proficiency in building, deploying, and debugging applications on AWS, covering core services, best practices, and cloud development concepts.",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Cloud,
    credentialId: "BNVZP64CX1QE1SWT",
    link: "https://aws.amazon.com/verification",
    image: "/projects/AWS_DVA.png",
  },
  {
    id: 2,
    type: "certification",
    title: "AWS Certified Cloud Practitioner", 
    description: "Foundational certification demonstrating overall understanding of AWS Cloud, services, and terminology.",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Cloud,
    credentialId: "2V1144FCXBE4QLGY",
    link: "https://aws.amazon.com/verification",
    image: "/projects/AWS_CCPP.png",
  },
  {
    id: 3,
    type: "publication",
    title: "Semantic Segmentation of PolSAR Images for Various Land Cover Features",
    description: "Land-cover classification is vital for sustainable urban planning as cities expand. Traditional mapping is slow, but Microwave Remote Sensing offers faster, reliable data. This paper applies Semantic Segmentation on PolSAR images with a modified UNet for efficient land-cover analysis.",
    journal: "IEEE International Symposium on Geoscience and Remote Sensing (IGARSS)",
    year: "2021",
    icon: BookOpen,
    link: "https://ieeexplore.ieee.org/document/9554297",
    image: "/projects/IEEE.png",
  },
  {
    id: 4,
    type: "publication", 
    title: "Development of a generalized model to classify various land covers for ALOS-2 L-Band images using semantic segmentation",
    description: "This work proposes a deep learning model using PolSAR float-32 coherency data with a modified UNet for land-cover segmentation. Trained on San Francisco and New Delhi and tested on Mumbai, it achieves high accuracy to aid urban planning.",
    journal: "Elsevier - Advances in Space Research",
    year: "2022",
    icon: BookOpen,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0273117722007116?via%3Dihub",
    image: "/projects/elsevier.png",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Achievements</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my published research papers and professional certifications 
          that showcase my expertise in technology and research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            
            return (
              <div
                key={achievement.id}
                className="group bg-card rounded-lg p-6 shadow-xs card-hover border"
              >
                <div className="flex items-start gap-4">
                  {achievement.image ? (
                    <div className="flex-shrink-0">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-16 h-16 rounded-lg object-cover border border-border/50"
                      />
                    </div>
                  ) : (
                    <div className={`p-3 rounded-lg ${
                      achievement.type === 'publication' 
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                        : 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        achievement.type === 'publication'
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
                      }`}>
                        {achievement.type === 'publication' ? 'Research Paper' : 'AWS Certification'}
                      </span>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3">
                      {achievement.description}
                    </p>
                    
                    <div className="space-y-1">
                      {achievement.type === 'publication' ? (
                        <p className="text-sm font-medium text-foreground/80">
                          Published in: {achievement.journal}
                        </p>
                      ) : (
                        <>
                          <p className="text-sm font-medium text-foreground/80">
                            Issued by: {achievement.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Credential ID: {achievement.credentialId}
                          </p>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {achievement.type === 'publication' ? 'Read Paper' : 'View Credential'}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award size={16} className="text-primary" />
              <span>2 Research Publications</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cloud size={16} className="text-primary" />
              <span>2 AWS Professional Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
