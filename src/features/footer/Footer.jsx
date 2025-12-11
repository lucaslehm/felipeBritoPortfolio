export default function Footer() {
  const fullDate = new Date();

  const year = fullDate.getFullYear();

  return (
    <footer className="bg-amber-500 h-40 flex flex-col items-center justify-center mt-10 text-orange-950 font-medium">
      <p> Felipe Brito &copy; | Todos os direitos reservados</p>
      <p>{year}</p>
    </footer>
  );
}
