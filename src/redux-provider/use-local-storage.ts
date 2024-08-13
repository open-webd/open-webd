export const useLocalStorage = (key: string, defaultState: any) => {
  return {
      updateLocalStorage: (data: any = null) => {
          if (!data) return localStorage.removeItem(key);
          localStorage.setItem(key, JSON.stringify(data));
      },
      readLocalStorage: () => {
          if (typeof window !== 'undefined') {
            const data = localStorage.getItem(key);
            return !!data && data !== "undefined"
              ? JSON.parse(data) 
              : defaultState;
          } 
          return defaultState;
        },
        
  }
}
