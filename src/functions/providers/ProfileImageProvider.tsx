import React, {createContext , useState, useContext} from 'react';

type ProfileImageContextType = {
  profileImage: string | null;
  setProfileImage: React.Dispatch<React.SetStateAction<string | null>>;
};

type ProfileImageProviderProps = {
  children: React.ReactNode;
};

/**
 * The primary objective with this Provider is to provide a way to share the profile image between components.
 * Though this has not successfully work, still we have included it to show the idea.
 */
const ProfileImageContext = createContext<ProfileImageContextType | undefined>(undefined);

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error('useProfileImage must be used within a ProfileImageProvider');
  }
  return context;
};

export const ProfileImageProvider: React.FC<ProfileImageProviderProps> = ({children}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  return (
    <ProfileImageContext value={{profileImage, setProfileImage}}>
      {children}
    </ProfileImageContext>
  );
};
