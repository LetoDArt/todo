export const getDateLimitations = () => {
  const now = new Date();

  return {
    min: new Date(now.getFullYear() - 90, now.getMonth(), now.getDate()),
    max: new Date(now.getFullYear() - 18, now.getMonth(), now.getDate()),
  }
}
