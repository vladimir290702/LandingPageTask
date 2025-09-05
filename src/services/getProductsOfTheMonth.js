export const getProuctsOfTheMonth = async () => {
  try {
    const response = await fetch(
      "https://api.bulrang.com/products/products-of-the-month"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching the data");
    console.log(error);
  }
};
