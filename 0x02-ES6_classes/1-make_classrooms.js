import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const objs = [];
  objs.push(new ClassRoom(19));
  objs.push(new ClassRoom(20));
  objs.push(new ClassRoom(34));
  return objs;
}
