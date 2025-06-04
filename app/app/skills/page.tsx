import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/lib/data";
import SkillProgress from "@/components/skills/SkillProgress";
import { Code, Network, Shield, Wrench } from "lucide-react";

export default function SkillsPage() {
  // Group skills by category
  const programmingSkills = skills.filter(skill => skill.category === 'programming');
  const networkingSkills = skills.filter(skill => skill.category === 'networking');
  const securitySkills = skills.filter(skill => skill.category === 'cybersecurity');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">My Skills</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          I've developed a diverse range of skills throughout my education and professional experience.
          Here's an overview of my technical capabilities across different domains.
        </p>
        
        <Tabs defaultValue="programming" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-12">
            <TabsTrigger value="programming" className="flex flex-col items-center gap-2 py-4">
              <Code className="h-5 w-5" />
              <span>Programming</span>
            </TabsTrigger>
            <TabsTrigger value="networking" className="flex flex-col items-center gap-2 py-4">
              <Network className="h-5 w-5" />
              <span>Networking</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex flex-col items-center gap-2 py-4">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex flex-col items-center gap-2 py-4">
              <Wrench className="h-5 w-5" />
              <span>Tools</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="programming" className="mt-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-2" /> Programming Languages & Frameworks
            </h2>
            <p className="text-muted-foreground mb-8">
              My core expertise lies in web development technologies, with a focus on JavaScript and its modern frameworks.
              I'm also familiar with other languages and databases for building full-stack applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programmingSkills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="networking" className="mt-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Network className="mr-2" /> Networking
            </h2>
            <p className="text-muted-foreground mb-8">
              I have a solid understanding of networking principles and protocols, which helps me develop more secure and efficient applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networkingSkills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="mr-2" /> Cybersecurity
            </h2>
            <p className="text-muted-foreground mb-8">
              My background in cybersecurity allows me to implement robust security measures in the applications I develop.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securitySkills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Wrench className="mr-2" /> Tools & Technologies
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm proficient with various development tools and technologies that improve productivity and code quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolsSkills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: { name: string; level: number; category: string } }) {
  return (
    <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">{skill.name}</h3>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <SkillProgress value={skill.level} />
    </div>
  );
}