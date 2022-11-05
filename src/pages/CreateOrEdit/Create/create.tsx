import {FC, useState} from "react";
import CreateCard from "../../../components/CreateCard/create-card";
import {addDoc, collection, updateDoc} from "firebase/firestore";
import {auth, db} from "../../../firebase-config";
import {useNavigate} from "react-router-dom";
import {PageContainer} from "./create.styles";
import BlueButton from "../../../layouts/blue-button.styles";
import Heading from "./Heading/heading";
import CreateTools from "./CreateTools/create-tools";
import ImportTerms from "../../../components/ImportTerms/import-terms";
import AddCardButton from "./AddCardButton/add-card-button";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import "./styles.css";
import {IStudySet, ITerm} from "../../../types";

interface Props {
  data: any,
  setData: (data: IStudySet) => void,
  isCreate: boolean
}

const Create: FC<Props> = ({data, setData, isCreate}) => {

  const navigate = useNavigate();
  const [isModalImportActive, setIsModalImportActive] = useState(false);

  const studySetsCollectionRef = collection(db, "studySets");

  const updateStudySet = async () => {
    const ref = data.ref;
    delete data.ref;
    await updateDoc(ref, data);
    navigate(`/${data.id}`)
  }

  const addStudySet = async () => {
    await addDoc(studySetsCollectionRef,
      {
        ...data,
        author:
          {
            id: auth.currentUser?.uid,
            name: auth.currentUser?.displayName,
            photoURL: auth.currentUser?.photoURL,
          }
      });
    navigate(`/${data.id}`)
  }

  const handleDrop = (droppedItem: any) => {
    if (!droppedItem.destination) return;
    let updatedList = [...data.terms];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setData({...data, terms: updatedList});
  };

  return (
    <PageContainer>
      <Heading
        data={data}
        setData={setData}
        addStudySet={isCreate ? addStudySet : updateStudySet}
        isCreate={isCreate}
      />
      <CreateTools
        data={data}
        setData={setData}
        setIsModalImportActive={setIsModalImportActive}
      />
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId={"cards-list"}>
          {provided => (
            <div
              className={"cards-list"}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <TransitionGroup component={null}>
                {data.terms.map((item: ITerm, id: number) => (
                  <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames={"card"}
                  >
                    <Draggable draggableId={item.id.toString()} index={id}>
                      {provided => {
                        return <div
                          className="item-container"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <CreateCard
                            id={id}
                            data={data}
                            setData={setData}
                          />
                        </div>
                      }}
                    </Draggable>
                  </CSSTransition>
                ))}
              </TransitionGroup>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddCardButton
        data={data}
        setData={setData}
      />
      <div style={{marginBottom: "0.875rem"}}>
        <div style={{float: "right"}}>
          <BlueButton
            padding={"1.25rem 2rem"}
            radius={"0.5rem"}
            fontSize={"1rem"}
            onClick={isCreate ? addStudySet : updateStudySet}
          >
            {isCreate ? "Create" : "Save"}
          </BlueButton>
        </div>
      </div>
      <ImportTerms
        data={data}
        setData={setData}
        isImportModalActive={isModalImportActive}
        setIsImportModalActive={setIsModalImportActive}/>
    </PageContainer>
  );
};

export default Create;