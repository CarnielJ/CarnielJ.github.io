import { Section, Title, Grid, Card, CardTitle, CardDescription } from "./styles";

const PROJECTS = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Breve descrição do que esse projeto faz e quais tecnologias você usou.",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Breve descrição do que esse projeto faz e quais tecnologias você usou.",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Breve descrição do que esse projeto faz e quais tecnologias você usou.",
  },
];

const Projects = () => {
  return (
    <Section>
      <Title>Meus Projetos</Title>
      <Grid>
        {PROJECTS.map(({ id, title, description }) => (
          <Card key={id}>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
