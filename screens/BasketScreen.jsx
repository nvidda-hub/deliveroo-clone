import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../reduxSlices/restaurantSlice";
import {
  selectedBasketItems,
  removeFromBasket,
  basketTotal,
} from "../reduxSlices/basketSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanityConfigForFrontend";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restautentSelected = useSelector(selectRestaurant);
  const items = useSelector(selectedBasketItems);
  const basketTotalForItems = useSelector(basketTotal);
  const [groupedItems, setgroupedItems] = useState([]);
  const dispatch = useDispatch();

  // if values of items doesn't change then it won't be computed again
  useEffect(() => {
    const result = items.reduce((res, item) => {
      (res[item.id] = res[item.id] || []).push(item);
      // res[item.id];
      return res;
    }, {});
    setgroupedItems(result);
  }, [items]);
  return (
    <SafeAreaView className=" pt-5 h-screen flex-col items content-between bg-gray-200">
      {/* <View className="bg-gray-100"> */}
        <View className="flex-row items-center bg-white border-b border-[#00CCBB] shadow-xs py-2">
          <View className="flex-col items-center flex-1">
            <Text className="text-lg font-extrabold">Basket</Text>
            <Text className="text-gray-500">{restautentSelected.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-[#00CCBB] absolute top-3 right-5"
          >
            <XMarkIcon height={30} width={30} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row bg-white items-center space-x-4 px-4 py-3 my-5">
          <Image
            source={{
              uri: urlFor(restautentSelected.imageUrl).url(),
            }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1 font-bold">Deliver in 45-50 Mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView >
          {Object.keys(groupedItems).length >= 1 ? (
            Object.entries(groupedItems).map(([key, items]) => {
              return (
                <View key={key} className="bg-white px-3 py-1 flex-row justify-between items-center">
                  <Text className="flex-1 text-[#00CCBB]">
                    {items.length} x
                  </Text>
                  <Image
                    source={{ uri: urlFor(items[0]?.imageUrl).url() }}
                    className="w-12 h-12 rounded-full"
                  />
                  <Text className="flex-1 ml-2">{items[0]?.name}</Text>
                  <Text className="text-gray-500 text-lg font-bold flex justify-end">
                    ₹ {items[0]?.price} /-
                  </Text>
                  <TouchableOpacity
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    <Text className="text-[#00CCBB] text-xs ml-2">Remove</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : 
            <View className="flex-row justify-center bg-white  items-center space-x-2 py-2 px-4">
              <Text className="text-lg font-bold rounded-lg text-red-700">
                Empty Basket!!
              </Text>
              <TouchableOpacity>
                <Text className="text-[#00CCBB]" onPress={navigation.goBack}>Add Items</Text>
              </TouchableOpacity>
            </View>
          }
        </ScrollView>
        <View className="bg-white p-5 mt-4 w-full space-y-4 shadow-md">
          <View className="flex-row  justify-between">
            <Text className="text-gray-500 text-xs font-bold">Subtotal</Text>
            <Text className="text-gray-500 text-xs font-bold">
              ₹ {basketTotalForItems} /-
            </Text>
          </View>
          <View className="flex-row text-gray-500 text-xs justify-between">
            <Text className="text-gray-500 text-xs font-bold">
              Delivery fee
            </Text>
            <Text className="text-gray-500 text-xs font-bold">₹ 49 /-</Text>
          </View>
          <View className="flex-row justify-between font-extrabold">
            <Text className="font-extrabold">Order Total</Text>
            <Text className="font-extrabold">
              ₹ {basketTotalForItems + 49} /-
            </Text>
          </View>
          <TouchableOpacity>
            <Text className="bg-[#00CCBB] text-xl px-5 py-3 flex text-center text-white font-extrabold mx-3 rounded-lg">
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default BasketScreen;
