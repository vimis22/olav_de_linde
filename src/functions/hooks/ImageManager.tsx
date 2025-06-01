import {launchImageLibrary, launchCamera, ImagePickerResponse} from 'react-native-image-picker';
/**
 * This is the image manager which provides function for adding or removing images.
 * @param onImageSelected - The function to be called when an image is selected.
 * @constructor - The constructor for the image manager.
 * @returns - The image manager.
 */
const ImageManager = ({onImageSelected}: {onImageSelected: (imageUri: string) => void}) => {
  const addImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response: ImagePickerResponse) => {
        if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0].uri;
          if (selectedImage) {
            onImageSelected(selectedImage);
          }
        }
      }
    );
  };

  /**
   * This function is used to add a camera image.
   * @link https://github.com/vimis22/devtask/blob/final_display_branch/functionHandlers/AttachProvider.tsx
   */
  const addCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response: ImagePickerResponse) => {
        if (response.assets && response.assets.length > 0) {
          const capturedImage = response.assets[0].uri;
          if (capturedImage) {
            onImageSelected(capturedImage);
          }
        }
      }
    );
  };

  return {addImage, addCamera};
};

export default ImageManager;
