import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQ() {
  return (
    <div className="mt-16 md:mt-0 max-w-screen-2xl mx-auto pt-12">
      <h1 className="text-2xl lg:text-2xl font-bold lg:tracking-tight pb-10">
        Preguntas Frecuentes
      </h1>
      <Accordion className="" variant="splitted">
      <AccordionItem key="1" title="Como hago eso">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam accusantium molestias hic aliquam laborum veritatis minus nulla dolorum, explicabo debitis excepturi qui delectus vero, sed odio neque nesciunt cumque deleniti.
      </AccordionItem>
      <AccordionItem key="2" title="Que significa CBX">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis inventore fuga excepturi reiciendis ex alias commodi voluptatem, consectetur tenetur. Similique nam voluptatum nemo esse et velit laborum dignissimos iusto exercitationem.
      </AccordionItem>
      <AccordionItem key="3"title="Y eso?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id dolorum eaque aperiam amet tenetur impedit neque, sequi tempore, laboriosam quod possimus ipsum aliquid, temporibus odit nulla aliquam voluptas soluta?
      </AccordionItem>
    </Accordion>
    </div>
  );
}