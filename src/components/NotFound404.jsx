export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center">
      <img src="/images/sad.png" alt="404" height={200} width={200} />
      <div className="mt-8 text-center">
        <p className="text-3xl font-bold mt-4 mb-8">
          Esta página ha cambiado de lugar.
        </p>
        <a href="https://termotronic.com" className="text-2xl mt-8 text-blue-600 underline">
          Clic aquí para continuar
        </a>
      </div>
    </div>
  );
}
