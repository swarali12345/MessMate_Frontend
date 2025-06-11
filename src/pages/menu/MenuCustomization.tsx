import React, { useState } from 'react';
import { dummyMenuData, MainCategory, MenuItem, AddOn } from '../../data/dummyProducts';
import InlineEdit from '../../components/InlineEdit';

const MenuCustomization: React.FC = () => {
  const [menuData, setMenuData] = useState<MainCategory[]>(dummyMenuData);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingCategory, setEditingCategory] = useState<string | null>(null);

  const handleMainCategoryEdit = (categoryId: string, field: string, value: string) => {
    setMenuData(prevData =>
      prevData.map(cat =>
        cat.id === categoryId ? { ...cat, [field]: value } : cat
      )
    );
  };

  const handleMenuItemEdit = (
    mainCategoryId: string,
    itemId: string,
    field: string,
    value: string | number
  ) => {
    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            items: mainCat.items.map(item =>
              item.id === itemId ? { ...item, [field]: value } : item
            ),
          };
        }
        return mainCat;
      })
    );
  };

  const handleAddOnEdit = (
    mainCategoryId: string,
    itemId: string,
    addOnId: string,
    field: string,
    value: string | number
  ) => {
    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            items: mainCat.items.map(item => {
              if (item.id === itemId) {
                return {
                  ...item,
                  addOns: item.addOns.map(addOn =>
                    addOn.id === addOnId ? { ...addOn, [field]: value } : addOn
                  ),
                };
              }
              return item;
            }),
          };
        }
        return mainCat;
      })
    );
  };

  const toggleItemAvailability = (mainCategoryId: string, itemId: string) => {
    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            items: mainCat.items.map(item =>
              item.id === itemId ? { ...item, isAvailable: !item.isAvailable } : item
            ),
          };
        }
        return mainCat;
      })
    );
  };

  const toggleAddOnAvailability = (
    mainCategoryId: string,
    itemId: string,
    addOnId: string
  ) => {
    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            items: mainCat.items.map(item => {
              if (item.id === itemId) {
                return {
                  ...item,
                  addOns: item.addOns.map(addOn =>
                    addOn.id === addOnId ? { ...addOn, isAvailable: !addOn.isAvailable } : addOn
                  ),
                };
              }
              return item;
            }),
          };
        }
        return mainCat;
      })
    );
  };

  const handleAddNewCategory = () => {
    const newCategory: MainCategory = {
      id: `cat-${Date.now()}`,
      name: 'New Category',
      description: 'Add description here',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      items: []
    };
    setMenuData(prevData => [...prevData, newCategory]);
  };

  const handleAddMenuItem = (mainCategoryId: string) => {
    const newItem: MenuItem = {
      id: `item-${Date.now()}`,
      name: 'New Item',
      description: 'Add description here',
      price: 0,
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      isAvailable: true,
      addOns: []
    };

    setMenuData(prevData =>
      prevData.map(cat =>
        cat.id === mainCategoryId
          ? { ...cat, items: [...cat.items, newItem] }
          : cat
      )
    );
  };

  const handleAddTopping = (mainCategoryId: string, itemId: string) => {
    const newTopping: AddOn = {
      id: `topping-${Date.now()}`,
      name: 'New Topping',
      price: 0,
      isAvailable: true
    };

    setMenuData(prevData =>
      prevData.map(mainCat => {
        if (mainCat.id === mainCategoryId) {
          return {
            ...mainCat,
            items: mainCat.items.map(item => {
              if (item.id === itemId) {
                return {
                  ...item,
                  addOns: [...item.addOns, newTopping]
                };
              }
              return item;
            })
          };
        }
        return mainCat;
      })
    );
  };

  const handleDeleteCategory = (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this category? This will also delete all items.')) {
      setMenuData(prevData => prevData.filter(cat => cat.id !== categoryId));
    }
  };

  const handleDeleteMenuItem = (mainCategoryId: string, itemId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuData(prevData =>
        prevData.map(cat =>
          cat.id === mainCategoryId
            ? {
                ...cat,
                items: cat.items.filter(item => item.id !== itemId)
              }
            : cat
        )
      );
    }
  };

  const handleDeleteTopping = (mainCategoryId: string, itemId: string, toppingId: string) => {
    if (window.confirm('Are you sure you want to delete this topping?')) {
      setMenuData(prevData =>
        prevData.map(mainCat => {
          if (mainCat.id === mainCategoryId) {
            return {
              ...mainCat,
              items: mainCat.items.map(item => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    addOns: item.addOns.filter(topping => topping.id !== toppingId)
                  };
                }
                return item;
              })
            };
          }
          return mainCat;
        })
      );
    }
  };

  const filteredMainCategories = menuData.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background-main p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-primary-main">Menu Customization</h1>
            <button
              onClick={handleAddNewCategory}
              className="flex items-center gap-2 px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Category
            </button>
          </div>
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
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => setEditingCategory(editingCategory === mainCategory.id ? null : mainCategory.id)}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(mainCategory.id)}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <InlineEdit
                    value={mainCategory.name}
                    onSave={(value) => handleMainCategoryEdit(mainCategory.id, 'name', value as string)}
                    className="text-xl font-semibold text-text-main"
                  />
                  <InlineEdit
                    value={mainCategory.description}
                    onSave={(value) => handleMainCategoryEdit(mainCategory.id, 'description', value as string)}
                    className="text-gray-600 block mt-1"
                  />
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => handleAddMenuItem(mainCategory.id)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary-main/10 text-primary-main rounded-lg hover:bg-primary-main/20 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Menu Item
                  </button>
                </div>

                <div className="space-y-4">
                  {mainCategory.items.map(item => (
                    <div key={item.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <InlineEdit
                            value={item.name}
                            onSave={(value) => handleMenuItemEdit(mainCategory.id, item.id, 'name', value as string)}
                            className="font-medium"
                          />
                          <InlineEdit
                            value={item.description}
                            onSave={(value) => handleMenuItemEdit(mainCategory.id, item.id, 'description', value as string)}
                            className="text-sm text-gray-600 block mt-1"
                          />
                          <InlineEdit
                            value={item.price}
                            type="number"
                            onSave={(value) => handleMenuItemEdit(mainCategory.id, item.id, 'price', value as number)}
                            className="text-primary-main font-medium mt-1"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleItemAvailability(mainCategory.id, item.id)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.isAvailable
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.isAvailable ? 'Available' : 'Unavailable'}
                          </button>
                          <button
                            onClick={() => handleDeleteMenuItem(mainCategory.id, item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {item.addOns.length > 0 && (
                        <div className="mt-2">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="text-sm font-medium text-gray-700">Toppings:</h5>
                            <button
                              onClick={() => handleAddTopping(mainCategory.id, item.id)}
                              className="flex items-center gap-1 px-2 py-1 text-xs bg-primary-main/10 text-primary-main rounded-lg hover:bg-primary-main/20 transition-colors"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                              Add Topping
                            </button>
                          </div>
                          <div className="space-y-2">
                            {item.addOns.map(addOn => (
                              <div key={addOn.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                                <div className="flex-grow">
                                  <InlineEdit
                                    value={addOn.name}
                                    onSave={(value) => handleAddOnEdit(mainCategory.id, item.id, addOn.id, 'name', value as string)}
                                    className="text-sm font-medium"
                                  />
                                  <InlineEdit
                                    value={addOn.price}
                                    type="number"
                                    onSave={(value) => handleAddOnEdit(mainCategory.id, item.id, addOn.id, 'price', value as number)}
                                    className="text-sm text-primary-main ml-2"
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => toggleAddOnAvailability(mainCategory.id, item.id, addOn.id)}
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      addOn.isAvailable
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}
                                  >
                                    {addOn.isAvailable ? 'Available' : 'Unavailable'}
                                  </button>
                                  <button
                                    onClick={() => handleDeleteTopping(mainCategory.id, item.id, addOn.id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.addOns.length === 0 && (
                        <div className="mt-2">
                          <button
                            onClick={() => handleAddTopping(mainCategory.id, item.id)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-primary-main/10 text-primary-main rounded-lg hover:bg-primary-main/20 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Topping
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCustomization; 