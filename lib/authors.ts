export interface Author {
  slug: string;
  name: string;
  bio: string;
  avatar: string;
}

const authors: Record<string, Author> = {
    matej_vais: {
        slug: "matej-vais",
        name: "Matěj Vais",
        bio: "Matěj Vais je zakladatel společnosti Top Dog Enteprises, s.r.o.",
        avatar: "/assets/imgs/team/matej-vais.jpg",
    }
};
export default authors;
