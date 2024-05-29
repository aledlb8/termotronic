import { Tabs, Tab } from "@nextui-org/react";

export default function TabsComponent() {
  return (
    <div className="flex w-full flex-col mt-4">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <span>Caracteristicas</span>
            </div>
          }>
          <h1>Esta bien pro</h1>
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <span>Especificaciones</span>
            </div>
          }>
          <h1>Consume poco</h1>
        </Tab>
      </Tabs>
    </div>
  );
}
