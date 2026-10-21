import {Item, Weapon, HealingItem, Booster, ItemType} from '../features/items/itemSlice'

export const findItemByStr = (text: string, arr: (Item|Weapon|HealingItem|Booster)[]): (Item|number) => {
    if (!arr || arr.length == 0){
        return 0
    }
    for(const thing of arr){
        if(thing.name === text){
            return thing
        } 
    }
    return 0
}