{

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}


function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] 
{
    return items.filter(item=> item.rating >= 4)
}



    
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        return ([] as T[]).concat(...arrays)
    }
    

    class Vehicle{
        private  name : string;
        private  year: number;
    
        constructor(name: string, year: number){
            this.name = name;
            this.year= year;
            
        } 
        getInfo(){
            return `Make: ${this.name}, Year: ${this.year}`;

        }  
        }
    class Car extends Vehicle{
        private model: string;
        
        constructor(name: string, year: number, model: string){
            super(name, year)
            this.model= model;
        } 
        getModel(){
            return `Model: ${this.model}`
        }
        
        }
        const myCar = new Car('Toyota', 2020, 'Corolla')
        


    function processValue(value: string | number): number{
        if( typeof value === 'string'){
            return value.length;
        }else{
            return value * 2;
        }
    }


    interface Product {
        name: string;
        price: number;
    }
    
    function getMostExpensiveProduct(products: Product[]): Product | null{
        if(products.length === 0){
            return null;
        }

        let  highestPriceProduct = products[0];

        for( let i =1; i < products.length; i++){
            if( products[i].price > highestPriceProduct.price){
                highestPriceProduct = products[i];
            }
                
        }
        return highestPriceProduct;

    }

    
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    
    
    function getDayType(day: Day): string{
        if(day === Day.Saturday){
            return 'Weekend'
            
        }else{
            return 'Weekday'
        }
    }


    async function squareAsync(n: number): Promise<number>{
        if(n < 0 ){
            console.error(
                "Error : Negative Number  Not Allowed"
            );   
        }
        return new Promise((resolve)=>{

            setTimeout(()=>{
                resolve (n  * n)
            },1000)
        })
    }

}
