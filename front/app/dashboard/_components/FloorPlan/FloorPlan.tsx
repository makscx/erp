import Room from "./Room";
import RoomGroup from "./RoomGroup";


export default function FloorPlan() {
    return (
        <div className="flex-1 flex items-center justify-center p-16">
            <div className="flex flex-col gap-[5px]">

                {/* Друк */}
                <RoomGroup>
                    <RoomGroup>
                        <Room w={175} h={80} label="Друк" />
                        <Room w={175} h={205} label="Фасування" />
                    </RoomGroup>
                    <RoomGroup col>
                        <Room w={175} h={100} label="Пакування" />
                        <Room w={175} h={100} label="Сушка" workers={[{ id: "3063aad3-0f2d-4847-b1c0-51143f640b08", name: "Андрій" }]} />
                    </RoomGroup>
                    <Room w={175} h={290} label="Мастіка" />
                </RoomGroup>

                <RoomGroup right>
                    <Room w={175} h={100} label="Кулі" />
                    <Room w={230} h={100} label="Льодяники" />
                </RoomGroup>


            </div>
        </div>
    )
}