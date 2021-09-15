const capitalize = function capitalizeFirstLetter(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
};

export default {
  capitalize,
};
