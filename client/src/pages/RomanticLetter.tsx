import StarryBackground from '@/components/StarryBackground';
import AnimatedLetter from '@/components/AnimatedLetter';

export default function RomanticLetter() {
  const poem = [
    "Hoje o céu faz festa, um dia sem igual,",
    "O dia em que o mundo recebeu uma estrela única e especial.",
    "A vida se transforma e avança, em um ciclo sem fim,",
    "E eu vejo em seus olhos toda a beleza de um olhar gentil.",
    "",
    "Eu te chamo de Ani, com um carinho que só cresce,",
    "Um nome breve para a pessoa que tanto me engrandece.",
    "Meu coração que hoje te tem como farol,",
    "Pois você é a luz que ilumina o meu céu.",
    "",
    "Sua luz é feita de detalhes que me fazem sonhar:",
    "O seu sorriso, ah, esse me faz o dia clarear.",
    "Seu jeito único, que não se copia, não tem igual,",
    "É a melodia mais rara, a sua essência real.",
    "",
    "Por isso, Ani, meu sentimento é uma profunda gratidão,",
    "Pela sua personalidade, que me ensina a ser melhor, na contramão.",
    "Com admiração eu vejo a força que em você reside,",
    "Um amor que é construtivo, que a gente constrói e decide.",
    "",
    "Que o seu novo ano venha cheio de tudo o que você merece,",
    "Com paz, sucesso e a felicidade que de você floresce.",
    "Parabéns, minha querida, por quem você já é,",
    "E por quem será, ao meu lado, se Deus quiser.",
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <StarryBackground />
      <AnimatedLetter poem={poem} signature="Felipe" />
    </div>
  );
}
