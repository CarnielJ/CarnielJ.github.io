import {
  Section,
  TextBlock,
  Greeting,
  Name,
  Tagline,
  ProfileColumn,
  ProfilePicture,
  SocialRow,
  SocialLink,
} from "./styles";

const SOCIAL_LINKS = [
  { id: "linkedin", label: "in", href: "https://www.linkedin.com/in/joão-vitor-carniel-b469382b5/" },
  { id: "github", label: "gh", href: "https://github.com/CarnielJ" },
  { id: "discord", label: "dc", href: "https://discord.com/users/357594084174725120" },
];

const Home = () => {
  return (
    <Section>
      <TextBlock>
        <Greeting>Hi, I'm</Greeting>
        <Name>João Vitor Carniel</Name>
        <Tagline>
          Future Developer & Cybersecurity Engineer.
        </Tagline>
        <Tagline>
          Here, you’ll find a little about me, my areas of expertise, and some of the projects I’ve developed throughout my journey in technology.
        </Tagline>
        <Tagline>
          Feel free to explore my projects and learn more about my work, experiences, and growth as a developer.
        </Tagline>
      </TextBlock>

      <ProfileColumn>
        <ProfilePicture>
          {/* Troque pela sua foto: import minhaFoto from "../../assets/minha-foto.jpg" */}
          <img src="https://placehold.co/220x220" alt="Foto de João" />
        </ProfilePicture>

        <SocialRow>
          {SOCIAL_LINKS.map(({ id, label, href }) => (
            <SocialLink
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </SocialLink>
          ))}
        </SocialRow>
      </ProfileColumn>
    </Section>
  );
};

export default Home;
