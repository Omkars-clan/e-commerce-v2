import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Badge } from "../ui/badge";
import { useDispatch } from 'react-redux';
import { clearProductDetails } from '@/store/shop/products-slice';
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto cycle through images every 3 seconds
  useEffect(() => {
    if (!productDetails?.images?.length) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productDetails.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [productDetails?.images]);

  const handleBuyNowClick = () => {
    const phoneNumber = "+918951374619";
    const currentUrl = window.location.href;
    const message = `Hey, I want to buy:\n\nProduct: ${productDetails?.title}\nPrice: ₹${productDetails?.salePrice || productDetails?.price}\nLink: ${currentUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(clearProductDetails());
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[95%] max-w-3xl p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold">
            {productDetails?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="relative aspect-square w-full max-h-[300px] md:max-h-[400px] group">
            <img
              src={productDetails?.images?.[currentImageIndex] || productDetails?.image}
              alt={productDetails?.title}
              className="w-full h-full object-contain rounded-lg"
            />
            {productDetails?.images?.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80"
                  onClick={() => setCurrentImageIndex((prev) => 
                    (prev - 1 + (productDetails.images?.length || 1)) % (productDetails.images?.length || 1)
                  )}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80"
                  onClick={() => setCurrentImageIndex((prev) => 
                    (prev + 1) % (productDetails.images?.length || 1)
                  )}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">
                {productDetails?.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <p className="font-semibold">Price:</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">₹{productDetails?.salePrice}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{productDetails?.price}
                  </span>
                </div>
              </div>
              <Badge className="mt-2 sm:mt-0">{productDetails?.category}</Badge>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {productDetails?.totalStock === 0 ? (
            <div>
              <p className="text-red-500 font-bold text-lg text-center mb-2">Out of Stock</p>
              <Button 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={() => {
                  const phoneNumber = "+918951374619";
                  const currentUrl = window.location.href;
                  const message = `Hey, I want to pre-book:\n\nProduct: ${productDetails?.title}\nPrice: ₹${productDetails?.salePrice || productDetails?.price}\nLink: ${currentUrl}`;
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Pre Book Now
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500 mb-2">Stock: {productDetails?.totalStock}</p>
              <Button 
                className="w-full hover:bg-[#0f1729] hover:text-white transition-colors"
                variant="outline"
                onClick={handleBuyNowClick}
              >
                Buy Now
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

ProductDetailsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  productDetails: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    totalStock: PropTypes.number
  })
};

export default ProductDetailsDialog;
