'use client';
import Image from 'next/image';
import { Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';
import { education, certifications, experiences, aboutMe } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        {/* Bio Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
              <Image
                src="/files/profile.png"
                alt="Muli Clement Wambua"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Muli Clement Wambua</h2>
            <h3 className="text-xl text-muted-foreground mb-6">Junior Software Developer</h3>
            
            <div className="space-y-4">
              <p>{aboutMe.bio}</p>
              <p>{aboutMe.mission}</p>
            </div>
            
            <div className="mt-8">
              <Button asChild>
                <a href="/files/cv.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
        </section>
        
        <Separator className="my-16" />
        
        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3" /> Education
          </h2>
          
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <p className="text-lg mb-2">{edu.institution}</p>
                <p className="text-muted-foreground mb-4">{edu.location}</p>
                
                {edu.description && (
                  <p className="text-muted-foreground">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Award className="mr-3" /> Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground mb-1">Issued by {cert.issuer}</p>
                <p className="text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 inline-block mr-2" />
                  {cert.date}
                </p>
                
                {cert.url && (
                  <Button variant="link" className="p-0" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3" /> Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-lg mb-2">{exp.company}</p>
                <p className="text-muted-foreground mb-4">{exp.location}</p>
                
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}