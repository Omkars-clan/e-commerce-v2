import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function ProductImageUpload({
  imageFiles = [],
  setImageFiles,
  imageLoadingState,
  uploadedImageUrls = [],
  setUploadedImageUrls,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  console.log(isEditMode, "isEditMode");

  async function uploadImageToCloudinary(file) {
    setImageLoadingState(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://krishna-12km.onrender.com/api/admin/products/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setUploadedImageUrls(prev => [...prev, response.data.result.secure_url]);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setImageLoadingState(false);
    }
  }

  const handleImageFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...files]);
    files.forEach(file => uploadImageToCloudinary(file));
  };

  const handleRemoveImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setUploadedImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}>
      <Label className="text-lg font-semibold mb-2 block">Upload Images</Label>
      <div className="border-2 border-dashed rounded-lg p-4">
        <Input
          id="image-upload"
          type="file"
          multiple
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          accept="image/*"
        />
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {uploadedImageUrls?.map((url, index) => (
            <div key={index} className="relative">
              <img 
                src={url} 
                alt={`Product ${index + 1}`} 
                className="h-32 w-full object-cover rounded"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => handleRemoveImage(index)}
              >
                <XIcon className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <Label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center h-32 cursor-pointer"
        >
          <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
          <span>Click to upload more images</span>
        </Label>
      </div>
    </div>
  );
}

export default ProductImageUpload;
