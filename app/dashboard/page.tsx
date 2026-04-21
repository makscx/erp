import Room from "./_components/Room";
import RoomGroup from "./_components/RoomGroup";
export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Floor plan */}
      <div className="flex-1 flex items-center justify-center p-16">
        <div className="flex flex-col gap-[5px]">

          {/* Друк */}
          <RoomGroup>
            <RoomGroup>
              <Room w={175} h={80} label="Друк" workers={[{ id: 1, name: "Галя" }]} />
              <Room w={175} h={205} label="Фасування" />
            </RoomGroup>
            <RoomGroup col>
              <Room w={175} h={100} label="Пакування" />
              <Room w={175} h={100} label="Сушка" workers={[{ id: 2, name: "Андрій" }]} />
            </RoomGroup>
            <Room w={175} h={290} label="Мастіка" />
          </RoomGroup>

          <RoomGroup right>
            <Room w={175} h={100} label="Кулі" />
            <Room w={230} h={100} label="Льодяники" />
          </RoomGroup>


        </div>
      </div>
    </div>
  );
}

