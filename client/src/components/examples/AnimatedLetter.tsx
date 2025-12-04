import AnimatedLetter from '../AnimatedLetter';

export default function AnimatedLetterExample() {
  const samplePoem = [
    "Nas estrelas brilhantes do céu noturno,",
    "Encontro a luz que ilumina meu caminho.",
    "Cada palavra escrita vem do coração,",
    "Como uma melodia suave de emoção.",
    "",
    "O tempo pode passar, as estações mudar,",
    "Mas este sentimento permanecerá.",
    "Em cada amanhecer, em cada entardecer,",
    "Meu amor por você só pode crescer.",
  ];

  return <AnimatedLetter poem={samplePoem} signature="Com todo amor" />;
}
