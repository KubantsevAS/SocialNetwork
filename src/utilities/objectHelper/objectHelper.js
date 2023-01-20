export const updateObjInArray = (items, itemId, objPropName, newObjProps) => {
    items.map(item => {
        if (item[objPropName] === itemId) {
            return { ...item, ...newObjProps }
        }
        return item
    })
}