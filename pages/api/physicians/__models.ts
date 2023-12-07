export type Provider = {
  bio: string;
  designation: string;
  firstName: string;
  gender: string;
  id: number;
  imageUrl: string;
  languages: string[];
  lastName: string;
  locations: ProviderLocations[];
  middleInitial: string;
  npi: string;
  proceduresAndConditions: string[];
  slug: string;
  specialties: ProviderSpecialties[];
  website: string;
};

export type ProviderLocations = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax: string;
  latitude: string;
  longitude: string;
  mainProviderLocation: boolean;
};

export type ProviderSpecialties = {
  providerSpecialtyId: number;
  specialty: string;
  primary: boolean;
  boardCertified: boolean;
};

export type ResponseError = {
  message: string;
};
