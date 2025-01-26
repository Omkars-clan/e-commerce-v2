import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div
          onClick={() => handleGetProductDetails(product?._id)}
          className="aspect-square overflow-hidden cursor-pointer"
        >
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{product?.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${product?.salePrice}</span>
            <span className="text-sm text-muted-foreground line-through">
              ${product?.price}
            </span>
          </div>
          <Badge>{product?.category}</Badge>
        </div>
        <Button 
          className="w-full mt-4 hover:bg-[#0f1729] hover:text-white transition-colors" 
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            handleGetProductDetails(product?._id);
          }}
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ShoppingProductTile;
