"use client";
import { Card, Grid, List, ListItem, Text, Title } from "@tremor/react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Skills = () => {
  return (
    <Grid className="gap-2">
      <Title>Skills</Title>
      <Grid numCols={1} numColsMd={3} className="gap-4">
        {[
          ["TypeScript", "/ts.svg"],
          ["Python", "/py.svg"],
          ["C++", "/cpp.svg"],
          ["Java", "/java.svg"],
          ["Next.js", "/next.svg"],
          ["AWS", "/aws.svg"],
          ["Kubernetes", "/k8s.svg"],
          ["PostgreSQL", "/pg.svg"],
          ["Spring Boot", "/spring.svg"],
        ].map(([name, image], index) => {
          return (
            <Card key={index} className="grid place-items-center">
              <Image src={image} alt={name} width={50} height={50} />
              <Text>{name}</Text>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};
