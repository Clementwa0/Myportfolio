import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/data';
import SkillProgress from '@/components/skills/SkillProgress';
import { skills } from '@/lib/data';

export default function Home() {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  // Get top skills (one from each category)
  const topSkills = [
    skills.find(skill => skill.category === 'programming' && skill.level > 80),
    skills.find(skill => skill.category === 'networking' && skill.level > 60),
    skills.find(skill => skill.category === 'cybersecurity' && skill.level > 60),
    skills.find(skill => skill.category === 'tools' && skill.level > 80),
  ].filter(Boolean);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm <span className="text-primary">Muli Clement Wambua</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Junior Software Developer
              </p>
              <p className="text-muted-foreground max-w-lg">
                Based in Nairobi, Kenya. I specialize in building responsive web applications, with additional expertise in networking and cybersecurity.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/files/cv.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Clementwa0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border rounded-full hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/muli-clement-b5b17b308 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border rounded-full hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
  src='/files/profile.png'                  alt="Muli Clement Wambua"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills Highlight</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's a preview of my technical expertise across different domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {topSkills.map((skill) => (
              skill && (
                <div key={skill.name} className="p-6 border border-border rounded-lg">
                  <h3 className="text-lg font-medium mb-3">{skill.name}</h3>
                  <SkillProgress value={skill.level} />
                  <p className="text-sm text-muted-foreground mt-2 capitalize">
                    {skill.category}
                  </p>
                </div>
              )
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/skills">
                View All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start a Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            I'm currently available for freelance work and open to new opportunities. 
            Let's build something amazing together!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}