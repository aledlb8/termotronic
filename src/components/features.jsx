import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Features() {
  // {
  //   title: "Duradero y confiable",
  //   description:
  //     "Construido para durar y con calidad que puedes sentir en cada baño. Con los mejores materiales y el mejor diseño aseguramos años de agua caliente sin preocupaciones.",
  //   icon: "mdi:crown",
  //   color: "yellow",
  // },

  return (
    <div className="max-w-[1500px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px] hover:-translate-y-1 sh drop-shadow-sm">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            Ecológico
          </p>
          <h4 className="text-black font-medium text-large">
            Comprometidos con el planeta diseñamos y fabricamos con materiales
            100% reciclables. Cuida el medio ambiente mientras ahorras energía
            con nuestro diseño ecológico.
          </h4>
        </CardHeader>
        <a href="/green">
          <Image
            removeWrapper
            alt="ecology"
            className="z-0 w-full h-full object-cover blur"
            src="https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] hover:-translate-y-1">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            Agua caliente sin límite
          </p>
          <h4 className="text-black font-medium text-large">
            Disfrute de toda el agua caliente que necesite, con Termotronic
            nunca faltará agua caliente.
          </h4>
        </CardHeader>
        <a href="/information">
          <Image
            removeWrapper
            alt="water"
            className="z-0 w-full h-full object-cover blur"
            src="https://images.pexels.com/photos/161502/shower-shower-head-water-drop-of-water-161502.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] hover:-translate-y-1">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Ahorro de espacio
          </p>
          <h4 className="text-white font-medium text-large">
            Los Termotronic no tienen tanque, esto se traduce en un calentador
            de agua de reducido tamaño.
          </h4>
        </CardHeader>
        <a href="/information">
          <Image
            removeWrapper
            alt="space"
            className="z-0 w-full h-full object-cover blur"
            src="https://images.pexels.com/photos/334979/pexels-photo-334979.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-4 hover:-translate-y-1">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Ahorro de electricidad
          </p>
          <h4 className="text-white font-medium text-2xl">
            Termotronic solo calienta el agua que usted va a utilizar,
            permaneciendo apagado hasta que se abra el agua caliente.
          </h4>
        </CardHeader>
        <a href="/information">
          <Image
            removeWrapper
            alt="electricity"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover blur"
            src="https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-4 hover:-translate-y-1">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Agua caliente instantánea
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Al regresar el agua con Termotronic simplemente se abre una llave y
            se disfruta de agua caliente sin tener que esperar.
          </h4>
        </CardHeader>
        <a href="/information">
          <Image
            removeWrapper
            alt="water"
            className="z-0 w-full h-full object-cover blur"
            src="https://images.pexels.com/photos/612341/pexels-photo-612341.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-4 hover:-translate-y-1">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            Duradero y confiable
          </p>
          <h4 className="text-black/90 font-medium text-xl">
            Construido para durar y con calidad que puedes sentir en cada baño.
            Con los mejores materiales y el mejor diseño aseguramos años de agua
            caliente sin preocupaciones.
          </h4>
        </CardHeader>
        <a href="/information">
          <Image
            removeWrapper
            alt="durable"
            className="z-0 w-full h-full object-cover blur"
            src="https://images.pexels.com/photos/712111/pexels-photo-712111.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </a>
      </Card>
    </div>
  );
}
