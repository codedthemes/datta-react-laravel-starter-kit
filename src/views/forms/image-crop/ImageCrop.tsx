// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import ImageCropPlugin from 'sections/forms/image-crop/ImageCropPlugin';

// =============================|| IMAGE CROPPER - FORMS IMAGE CROP ||============================== //

export default function ImageCropPage() {
  return (
    <>
      <ComponentHeader
        caption="JavaScript image cropper for image or canvas element for cropping"
        link="https://fengyuanchen.github.io/cropperjs/"
      />
      <ImageCropPlugin />
    </>
  );
}
