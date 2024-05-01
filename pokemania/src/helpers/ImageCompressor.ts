import { Pokemon } from "../interfaces/Pokedex";

interface CompressImageOptions {
    quality: number;
    width: number; 
    height: number;
  }
  
  const compressImage = async (imageUrl: string, options: CompressImageOptions) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;
  
    await image.decode(); // Esperar a que la imagen se cargue antes de comprimirla
  
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    if (!context) {
      throw new Error('Canvas context not available');
    }
  
    const width = Math.min(options.width, image.width);
    const height = Math.min(options.height, image.height);
  
    canvas.width = width;
    canvas.height = height;
  
    context.drawImage(image, 0, 0, width, height);
  
    return new Promise<string>((resolve) => {
      canvas.toBlob(
        (compressedImage) => {
          if (!compressedImage) {
            throw new Error('Failed to compress image');
          }
  
          const compressedImageUrl = URL.createObjectURL(compressedImage!);
  
          resolve(compressedImageUrl);
        },
        'image/png', 
        options.quality / 100 
      );
    });
  };
  
  export const compressPokemonImages = async (pokemon: Pokemon[]) => {
    const compressedImages: string[] = [];
  
    for (const pokemonItem of pokemon) {
      const compressedImageUrl = await compressImage(pokemonItem.sprites.other["official-artwork"].front_default, {
        quality: 60,
        width: 200, 
        height: 200,
      });
  
      compressedImages.push(compressedImageUrl);
    }
  
    return compressedImages;
  };

  // Necesito que las imagenes pasen primero por un servidor en node
  // para poder solo consumir las comprimidas :(