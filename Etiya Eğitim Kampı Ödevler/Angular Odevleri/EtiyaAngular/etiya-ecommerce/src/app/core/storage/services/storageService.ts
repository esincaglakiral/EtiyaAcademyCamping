export interface StorageService {
    get(key: string): string | null;
    set(key: string, value: any): void;
    remove(key: string): void;
  }
  
  //# Interface Abstract Class
  // abstract class StorageServiceAbstract implements StorageService {
  //   abstract get(key: string): string | null;
  //   abstract set(key: string, value: any): void;
  //   remove(key: string) {
  //     localStorage.removeItem(key);
  //   }
  //   abstract a(): any;
  // }
  
  // class AltSinif extends StorageServiceAbstract {
  //   get(key: string): string | null {
  //     throw new Error('Method not implemented.');
  //   }
  //   set(key: string, value: any): void {
  //     this.remove(key);
  //   }
  //   override remove(key: string): void {
  //     super.remove(key);
  //   }
  //   override a(): any {}
  
  //   b(): any {}
  // }
  