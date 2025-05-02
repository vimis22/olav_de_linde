import {launchImageLibrary, launchCamera, ImagePickerResponse} from 'react-native-image-picker';

/*
@link https://github.com/vimis22/devtask/blob/final_display_branch/functionHandlers/AttachProvider.tsx
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
