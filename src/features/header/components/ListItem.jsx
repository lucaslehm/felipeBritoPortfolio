function ListItem(props) {
  return <li onClick={props.navg} className="text-center w-30 text-amber-700 font-bold cursor-pointer p-3 rounded-md transition-all hover:bg-orange-300">{props.children}</li>;
}

export default ListItem;
