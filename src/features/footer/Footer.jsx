export default function Footer() {
  const fullDate = new Date();

  const year = fullDate.getFullYear();

  return (
    <footer className="bg-orange-600 h-40 flex flex-col items-center justify-center mt-10 text-white">
      <p> Felipe Brito &copy; | Todos os direitos reservados</p>
      <p>{year}</p>
    </footer>
  );
}
