import CategoryCard from "./CategoryCard"

export default function Categorybar() {

    const category = [{
        url: 'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100',
        title: 'Grocery'
    }, {
        url: 'https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100',
        title: 'Mobiles'
    }, {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100',
        title: 'Fashion'
    }, {
        url: 'https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100',
        title: 'Electronics'
    }, {
        url: 'https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100',
        title: 'Home & Furniture'
    }, {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100',
        title: 'Appliances'
    }, {
        url: 'https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100',
        title: 'Travel'
    }, {
        url: 'https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100',
        title: 'Beauty, Toys & More'
    }, {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100',
        title: 'Two Weelers'
    }]

    return (
        <div className=" w-full h-40 bg-muted flex justify-center items-center">
            <div className=" w-full h-36 px-6 bg-background text-foreground font-medium flex justify-between items-center cursor-pointer">
                {category.map((i) => <CategoryCard url={i.url} title={i.title} />)}
            </div>
        </div>
    )
}