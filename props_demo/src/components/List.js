function List(props) {
     var list1 = props.lists.list1
     var list2 = props.lists.list2
     var list3 = props.lists.list3 
    return (
      <>
          <ul className="list-group list-group-flush text-start text-break">
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
            </ul>
      </>
    );
  }
  
export default List;
  