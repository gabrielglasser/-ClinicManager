import prismaClient from "../../prisma";

interface RoomRequest {
  number: string;
}

class CreateRoomService {
  async execute({ number }: RoomRequest) {
    const room = await prismaClient.sala.create({
      data: {
        numero: parseInt(number),
      },
      select: {
        id: true,
        numero: true,
      },
    });
    return room;
  }
}

export { CreateRoomService };