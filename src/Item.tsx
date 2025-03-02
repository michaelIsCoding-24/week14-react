export default function Item({item}: {item: {id: number, text: string}}){
    return(
        <td key={item.id}>{item.text}</td>
    )
};

