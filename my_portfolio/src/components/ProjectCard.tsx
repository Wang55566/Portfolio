import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

interface Props {
  image_src: string;
  description: string;
  link_url: string;
}


const ProjectCard = ({ image_src, description, link_url }: Props) => {
  return (
    <Card h='60vh' marginTop={5}>
      <CardBody>
        <Image src={image_src} alt="website-pics" borderRadius={8} w='30vw' h='40vh' overflow='hidden' objectFit='cover'/>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter display='flex' justifyContent='space-between'>
      <Link href={link_url}>Github Repo</Link>
        <Link href={link_url}>Link</Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
