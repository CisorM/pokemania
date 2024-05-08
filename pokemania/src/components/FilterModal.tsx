import { useContext, useState } from 'react';
import { ModalProps } from '../interfaces/ModalProps';
import { Modal } from './ui/Modal';
import { regionsData } from '../helpers/region';
import { typesData } from '../helpers/types';
import { PokemonContext } from '../context/PokedexContext';

export const FilterModal: React.FC<ModalProps> = ({isOpen, setIsOpen}) => {

  const { setRegion, setTypes, setPage } = useContext(PokemonContext)
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

  const handleRegionSelect = (regionId: number) => {
    setSelectedRegion(regionId);
  };

/*   const handleTypeSelect = (type: {type: string; color: string; img: string}) => {
    if (selectedTypes.includes(type.type)) {
      setTypes(selectedTypes.filter((t) => t !== type.type));
    } else {
      setSelectedTypes([...selectedTypes, type.type]);
    }
  }; */

  const handleFilter = () => {
    if (selectedRegion!== null) {
      setRegion(selectedRegion);
      setPage(1);
    }
/*     setTypes(selectedTypes);*/
      setIsOpen(false);  
    };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2 className='text-2xl'>Filtros</h2>
      <button className='btn sm:w-[20%] w-1/2 py-1 ml-auto rounded-md mb-2' onClick={handleFilter}>Filtrar</button>
      <article className='grid gap-10 grid-cols-2 '>
        <div>
          <h3 className='text-lg mb-3'>Regiones</h3>
          <ul className='grid md:grid-cols-2 gap-2'>
            {regionsData.map((region) => (
              <li key={region.id} className='flex gap-4 rounded-md'>
                <button
                  className={`flex gap-1 justify-center py-2 font-pokedex 
                            text-bgWhite w-full rounded btn
                            ${selectedRegion === region.id? 'bg-bgRed' : 'bg-bgPokedex'}`}
                  onClick={() => handleRegionSelect(region.id)}
                >
                  {region.name} <span className='hidden md:block'> - {region.generation === null? "All" : region.generation} Gen</span> 
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-lg mb-3'>Tipos</h3>
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
            {typesData.map((type) => (
                <li key={type.type} className={`flex justify-center sm:justify-start gap-2 p-2 rounded-full sm:rounded-md border border-solid opacity-50`} /* ${selectedTypes.includes(type.type) ? 'opacity-100 border-bgBlack border-2' : ''}  */
                    style={{ backgroundColor: type.color }}
                    onClick={(e) => {
                        e.stopPropagation();
/*                         handleTypeSelect(type);
 */                    }}
                    >
                    <input
                    className='hidden'
                    type="checkbox"
                    name="type"
                    value={type.type}
/*                     checked={selectedTypes.includes(type.type)}
                    onChange={(e) => {
                        e.stopPropagation();
                        if (e.target.checked) {
                        setSelectedTypes([...selectedTypes, type.type]);
                        } else {
                        setSelectedTypes(selectedTypes.filter((t) => t !== type.type));
                        }
                    }} */
                    />
                    <label className='flex gap-2'>
                        <img src={type.img} alt={type.type} className="w-6 h-6" />
                        <span className='font-pokedex text-bgWhite capitalize hidden md:block'>{type.type}</span>
                    </label>
                </li>
                ))}
            </ul>
        </div>
      </article>
    </Modal>
  );
};