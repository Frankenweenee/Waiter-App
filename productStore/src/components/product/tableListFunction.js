export function getProducsOrderByCategory(product) {
    const productsByCategory = {};


let idCounter = 1;

product.forEach((item) => {
    const { category, product, price, iva } = item;
    if (!productsByCategory[category]) {
        productsByCategory[category] = [];
    }
    productsByCategory[category].push({
        id: idCounter++,
        product,
        price,
        iva,
    });
});

const orderProductsList = Object.entries(productsByCategory)
    .map(([category, product]) => ({
        category,
        product: product.sort((a, b) =>
            a.product.localeCompare(b.product)
        ),
    }))
    .sort((a, b) => a.category.localeCompare(b.category));

return orderProductsList;
}
