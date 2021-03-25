import dayjs from 'dayjs';

export const diffInMin = (date: string, min: number): boolean => {
  if (date) {
    const before = dayjs(date);
    const now = dayjs(new Date());

    return now.diff(before, 'minutes') > min;
  }

  return false;
};

export const toLocaleDate = (date) => dayjs(date).format('DD/MM/YYYY');
