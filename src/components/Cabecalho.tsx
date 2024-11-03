import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header className="bg-indigo-600 min-h-20 p-5 flex justify-evenly items-center">
      <h1 className="text-4xl text-white">JLR Soluções </h1> /* aqui vai ficar a
      parte da logo */
      <Menu />
    </header>
  );
}
