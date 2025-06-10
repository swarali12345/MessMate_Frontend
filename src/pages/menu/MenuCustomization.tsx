import React, { useState } from 'react';
import { dummyMenuData, MainCategory, SubCategory, MenuItem, AddOn } from '../../data/dummyProducts';

const MenuCustomization: React.FC = () => {
  const [menuData, setMenuData] = useState<MainCategory[]>(dummyMenuData);
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItemAvailability = (mainCategoryId: string, subCategoryId: string, itemId: string) => {
    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            subCategories: mainCat.subCategories.map(subCat => {
              if (subCat.id === subCategoryId) {
                return {
                  ...subCat,
                  items: subCat.items.map(item =>
                    item.id === itemId ? { ...item, isAvailable: !item.isAvailable } : item
                  )
                };
              }
              return subCat;
            })
          };
        }
        return mainCat;
      })
    );
  };

  const toggleAddOnAvailability = (
    mainCategoryId: string,
    subCategoryId: string,
    itemId: string,
    addOnId: string
  ) => {
    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            subCategories: mainCat.subCategories.map(subCat => {
              if (subCat.id === subCategoryId) {
                return {
                  ...subCat,
                  items: subCat.items.map(item => {
                    if (item.id === itemId) {
                      return {
                        ...item,
                        addOns: item.addOns.map(addOn =>
                          addOn.id === addOnId ? { ...addOn, isAvailable: !addOn.isAvailable } : addOn
                        )
                      };
                    }
                    return item;
                  })
                };
              }
              return subCat;
            })
          };
        }
        return mainCat;
      })
    );
  };

  const filteredMainCategories = menuData.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background-main p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-main mb-4 md:mb-0">Menu Customization</h1>
          <input
            type="text"
            placeholder="Search categories..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-main/20 w-full md:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMainCategories.map(mainCategory => (
            <div
              key={mainCategory.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={mainCategory.imageUrl}
                  alt={mainCategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-text-main mb-2">{mainCategory.name}</h2>
                <p className="text-gray-600 mb-4">{mainCategory.description}</p>
                
                {mainCategory.subCategories.map(subCategory => (
                  <div key={subCategory.id} className="mb-6">
                    <h3 className="text-lg font-medium text-primary-main mb-2">{subCategory.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{subCategory.description}</p>
                    
                    <div className="space-y-4">
                      {subCategory.items.map(item => (
                        <div key={item.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              <p className="text-primary-main font-medium mt-1">₹{item.price}</p>
                            </div>
                            <button
                              onClick={() => toggleItemAvailability(mainCategory.id, subCategory.id, item.id)}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                item.isAvailable
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {item.isAvailable ? 'Available' : 'Unavailable'}
                            </button>
                          </div>
                          
                          {item.addOns.length > 0 && (
                            <div className="mt-2">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Add-ons:</h5>
                              <div className="space-y-2">
                                {item.addOns.map(addOn => (
                                  <div key={addOn.id} className="flex justify-between items-center">
                                    <div>
                                      <span className="text-sm">{addOn.name}</span>
                                      <span className="text-sm text-primary-main ml-2">+₹{addOn.price}</span>
                                    </div>
                                    <button
                                      onClick={() => toggleAddOnAvailability(mainCategory.id, subCategory.id, item.id, addOn.id)}
                                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        addOn.isAvailable
                                          ? 'bg-green-100 text-green-800'
                                          : 'bg-red-100 text-red-800'
                                      }`}
                                    >
                                      {addOn.isAvailable ? 'Available' : 'Unavailable'}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCustomization; 