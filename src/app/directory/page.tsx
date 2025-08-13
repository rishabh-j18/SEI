"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mail, Phone, Search } from 'lucide-react';
import { MotionDiv } from '@/components/motion-wrapper';
import Link from 'next/link';
import { faculty } from '@/data/directory';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = useMemo(() => {
    return faculty.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Faculty &amp; Staff Directory
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Find contact information for faculty, staff, and departments.
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, department, or role..."
            className="w-full rounded-full bg-secondary py-6 pl-12 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </MotionDiv>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFaculty.map((person, index) => (
          <MotionDiv
            key={person.email}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            layout
          >
            <Card className="h-full transition-all hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="relative h-24 w-24">
                    <Image
                    src={person.image}
                    alt={person.name}
                    data-ai-hint={person.aiHint}
                    className="rounded-full"
                    fill
                    objectFit="cover"
                    />
                </div>
                <h3 className="mt-4 font-headline text-xl font-semibold">{person.name}</h3>
                <p className="text-primary">{person.role}</p>
                <p className="text-sm text-muted-foreground">{person.department}</p>
                <div className="mt-4 space-y-2 text-left text-sm">
                  <Link href={`mailto:${person.email}`} className="flex items-center gap-2 hover:text-primary">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{person.email}</span>
                  </Link>
                  <Link href={`tel:${person.phone}`} className="flex items-center gap-2 hover:text-primary">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{person.phone}</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
         {filteredFaculty.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <p>No results found for &quot;{searchTerm}&quot;.</p>
          </div>
        )}
      </div>
    </div>
  );
}
