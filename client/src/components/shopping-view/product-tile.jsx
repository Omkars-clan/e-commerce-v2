import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto cycle through images every 3 seconds
  useEffect(() => {
    if (!product.images?.length) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [product.images]);

  const handlePrevImage = (e) => {
    e.stopPropagation(); // Prevent triggering the parent click handler
    setCurrentImageIndex((prev) => 
      (prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1)
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation(); // Prevent triggering the parent click handler
    setCurrentImageIndex((prev) => 
      (prev + 1) % (product.images?.length || 1)
    );
  };

  const handleBuyNowClick = () => {
    const phoneNumber = "+918951374619";
    const currentUrl = window.location.href;
    const message = `Hey, I want to buy:\n\nProduct: ${product?.title}\nPrice: ₹${product?.salePrice || product?.price}\nLink: ${currentUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePreBookClick = () => {
    const phoneNumber = "+918951374619";
    const message = `Hey, I want to pre-book ${product?.title}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div
          onClick={() => handleGetProductDetails(product?._id)}
          className="aspect-square overflow-hidden cursor-pointer relative group"
        >
          <img
            src={product?.images?.[currentImageIndex] || product?.image}
            alt={product?.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
          {product.images?.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{product?.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">₹{product?.salePrice}</span>
            <span className="text-sm text-muted-foreground line-through">
              ₹{product?.price}
            </span>
          </div>
          <Badge>{product?.category}</Badge>
        </div>
        {product?.totalStock === 0 ? (
          <>
            <p className="text-red-500 font-semibold mt-2 text-center">Out of Stock</p>
            <Button 
              className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-white" 
              onClick={handlePreBookClick}
            >
              Pre Book Now
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500 mt-2">Stock: {product?.totalStock}</p>
            <Button 
              className="w-full mt-2 hover:bg-[#0f1729] hover:text-white transition-colors" 
              variant="outline"
              onClick={handleBuyNowClick}
            >
              Buy Now
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default ShoppingProductTile;
