export const formatDate = (date) => {
const options = { year: 'numeric', month: 'long', day: 'numeric' };
return new Date(date).toLocaleDateString('fr-FR', options);
};
