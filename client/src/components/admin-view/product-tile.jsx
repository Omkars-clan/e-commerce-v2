import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

function AdminProductTile({
  product,
  handleDelete,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
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

  return (
    <div className="border rounded-lg p-3 relative group">
      <div className="relative w-full h-[200px] mb-3">
        <img
          src={product?.images?.[currentImageIndex] || product?.image}
          alt={product?.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-lg truncate">{product.title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold">₹{product.price}</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrentEditedId(product._id);
                setFormData(product);
                setOpenCreateProductsDialog(true);
              }}
            >
              <Pencil className="w-4 h-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => handleDelete(product._id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductTile;
