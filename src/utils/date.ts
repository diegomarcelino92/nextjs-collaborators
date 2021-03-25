import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.locale('pt-br');
dayjs.extend(isSameOrBefore);

export const diffInMin = (date: string) => {
  if (date) {
    const teste = Date.now();

    const today = new Date().getTime();
    const cris = new Date(date).getTime();
    const diffMs = today - cris; // milliseconds between now & Christmas
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    console.log(diffMins);

    const before = dayjs(date);
    const now = dayjs(teste);

    console.log(now.diff(before, 'minutes'));
  }

  return 'Invalid date';
};
