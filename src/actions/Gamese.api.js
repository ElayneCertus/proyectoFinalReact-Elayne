export const getGamese = async () => { 

    try {
        const response = await fetch("https://api.magicthegathering.io/v1/cards")
        const data = await response.json()
        return data.cards


    } catch (error) {
        console.log(error)
    }

 
}
 