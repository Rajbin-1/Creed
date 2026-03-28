import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LocationContextType {
  location: string;
  setLocation: (location: string) => void;
  requestLocation: () => Promise<void>;
  isLoadingLocation: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<string>('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // Load location from localStorage on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('creed-location');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  // Save location to localStorage whenever it changes
  useEffect(() => {
    if (location) {
      localStorage.setItem('creed-location', location);
    }
  }, [location]);

  const requestLocation = async () => {
    setIsLoadingLocation(true);
    try {
      if (!navigator.geolocation) {
        console.warn('Geolocation not supported');
        setIsLoadingLocation(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Use reverse geocoding API to get city/area name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const city = data.address?.city || data.address?.town || data.address?.village || 'Nepal';
            setLocation(city);
          } catch (error) {
            console.error('Failed to get location name:', error);
            setLocation('Nepal');
          } finally {
            setIsLoadingLocation(false);
          }
        },
        (error) => {
          console.warn('Geolocation error:', error);
          setIsLoadingLocation(false);
        }
      );
    } catch (error) {
      console.error('Location request failed:', error);
      setIsLoadingLocation(false);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        requestLocation,
        isLoadingLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
